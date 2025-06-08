import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { take, takeLast } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  friends: any;
  friendRequests: any = [];
  searchFriend: any;
  tab: any;
  title: any;
  requestsSent: any = [];
  friendRequestCount = 0;
  loggedInUserId: any;
  alert: any;
  account: any;

  accounts: any = [];
  excludedIds: any = [];
  searchUser: any;

  // FriendsPage
  // This is the page where the user can search, view, and initiate a chat with their friends.
  constructor(
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    public alertCtrl: AlertController,
    public firebaseProvider: FirebaseService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    // Initialize friends list on component load
    this.getFriends();
  }

  ionViewDidEnter() {
    this.tab = 'friends';
    this.title = 'Friends';
    this.searchFriend = '';

    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      console.info('this.afAuth.currentUser', this.loggedInUserId)
      this.dataProvider.getRequests(this.loggedInUserId).snapshotChanges().subscribe((requestsRes: any) => {
        if (requestsRes.payload != null) {
        const requests = requestsRes.payload.data();
        if (requests != null) {
          if (requests.friendRequests != null && requests.friendRequests !== undefined) {
            this.friendRequestCount = requests.friendRequests.length;
          } else { this.friendRequestCount = 0; }
        } else { this.friendRequestCount = 0; }
      }
      });
      // Load friends list on initial load
      this.getFriends();
    });
  }

  segmentChanged($event) {
    if (this.tab === 'friends') {
      this.title = 'Friends'; this.getFriends();
    } else if (this.tab === 'requests') {
      this.title = 'Friend Requests'; this.getFriendRequests();
    } else if (this.tab === 'search') {
      this.title = 'Find New Friends'; this.findNewFriends();
    }
  }
  // openFilter() {
  //   this.findNewFriends();
  //   let friendModal = this.modalCtrl.create(FriendsFilterPage);
  //   friendModal.present();
  //   friendModal.onDidDismiss(data => {
  //     console.log(data);
  //     if (data != undefined) {
  //       this.accounts = this.accounts.filter(acc => {
  //         if ((acc.age >= data.ageStart) && (acc.age <= data.ageEnd) && acc.location == data.location)
  //           return true;
  //         return false;
  //       })
  //     }
  //   });

  // }

  getFriends() {
    this.loadingProvider.show();
    this.friends = [];
    // Get user data on database and get list of friends.
    this.dataProvider.getCurrentUser().then((u) => {
      u.snapshotChanges().subscribe((user: any) => {
        const account = user.payload.data();
        this.loadingProvider.hide();
        if (account != null && account.friends != null) {
          for (let i = 0; i < account.friends.length; i++) {
            console.log('friends:', account.friends[i]);
            this.dataProvider.getUser(account.friends[i]).snapshotChanges().subscribe((friend: any) => {
              if (friend.payload != null) {
                const friendData = { $key: friend.payload.data().userId, ...friend.payload.data() };
                this.addOrUpdateFriend(friendData);
              }
            });
          }
        } else {
          this.friends = [];
        }
    });
    })
  }

  // Add or update friend data for real-time sync.
  addOrUpdateFriend(friend) {
    if (!this.friends) {
      this.friends = [friend];
    } else {
      var index = -1;
      for (let i = 0; i < this.friends.length; i++) {
        if (this.friends[i].$key === friend.$key) {
          index = i;
        }
      }
      if (index > -1) {
        this.friends[index] = friend;
      } else {
        this.friends.push(friend);
      }
    }
  }

  // Proceed to userInfo page.
  async viewUser(userId) {
    try {
      // Force refresh the auth token
      const user = await this.afAuth.currentUser;
      if (user) {
        this.router.navigate(['/userinfo', userId], { replaceUrl: false });
      } else {
        console.error('User not authenticated');
        localStorage.setItem('pendingViewUser', userId);
        this.router.navigateByUrl('/login');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      this.router.navigateByUrl('/login');
    }
  }

  // Proceed to chat page.
  async message(userId) {
    console.info('userId', userId);
    try {
      // Force refresh the auth token
      const user = await this.afAuth.currentUser;
      if (user) {
        // Navigate directly with state preservation
        this.router.navigate(['/message', userId], { replaceUrl: false });
      } else {
        console.error('User not authenticated');
        localStorage.setItem('pendingMessageUser', userId);
        this.router.navigateByUrl('/login');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      this.router.navigateByUrl('/login');
    }
  }


  // Manageing Friend Requests

  getFriendRequests() {
    this.friendRequests = [];
    this.requestsSent = [];

    this.loadingProvider.show();
    console.log('Getting friend requests...');
    
    // Get user info
    this.dataProvider.getCurrentUser().then((u) => {
      u.snapshotChanges().subscribe((accountRes: any) => {
        this.account = accountRes.payload.data();
        console.log('Current user account:', this.account);
        
        // Get friendRequests and requestsSent of the user.
        this.dataProvider.getRequests(this.account.userId).snapshotChanges().subscribe((requestsRes: any) => {
          console.log('Raw requests data:', requestsRes.payload.data());
          
          // friendRequests.
          let requests = requestsRes.payload.data();
          if (requests != null) {
            // Process friend requests (received)
            if (requests.friendRequests && Array.isArray(requests.friendRequests) && requests.friendRequests.length > 0) {
              this.friendRequests = [];
              this.friendRequestCount = requests.friendRequests.length;
              console.log('Friend requests found:', requests.friendRequests);
              
              requests.friendRequests.forEach((userId) => {
                this.dataProvider.getUser(userId).snapshotChanges().subscribe((sender: any) => {
                  if (sender.payload && sender.payload.data()) {
                    const senderData = sender.payload.data();
                    const senderObj = { $key: senderData.userId, ...senderData };
                    console.log('Adding friend request from:', senderObj.name);
                    this.addOrUpdateFriendRequest(senderObj);
                  }
                });
              });
            } else {
              console.log('No friend requests found');
              this.friendRequests = [];
            }
            
            // Process requests sent
            if (requests.requestsSent && Array.isArray(requests.requestsSent) && requests.requestsSent.length > 0) {
              this.requestsSent = [];
              console.log('Requests sent found:', requests.requestsSent);
              
              requests.requestsSent.forEach((userId) => {
                this.dataProvider.getUser(userId).snapshotChanges().subscribe((receiver: any) => {
                  if (receiver.payload && receiver.payload.data()) {
                    const receiverData = receiver.payload.data();
                    const receiverObj = { $key: receiverData.userId, ...receiverData };
                    console.log('Adding request sent to:', receiverObj.name);
                    this.addOrUpdateRequestSent(receiverObj);
                  }
                });
              });
            } else {
              console.log('No requests sent found');
              this.requestsSent = [];
            }
          } else {
            console.log('No requests data found');
            this.friendRequests = [];
            this.requestsSent = [];
          }
          
          this.loadingProvider.hide();
        });
      });
    })
  }



  // Add or update friend request only if not yet friends.
  addOrUpdateFriendRequest(sender) {
    if (!this.friendRequests) {
      this.friendRequests = [sender];
    } else {
      var index = -1;
      for (var i = 0; i < this.friendRequests.length; i++) {
        if (this.friendRequests[i].$key === sender.$key) {
          index = i;
        }
      }
      if (index > -1) {
        if (!this.isFriends(sender.$key)) {
          this.friendRequests[index] = sender;
        }
      } else {
        if (!this.isFriends(sender.$key)) {
          this.friendRequests.push(sender);
        }
      }
    }
  }

  // Add or update requests sent only if the user is not yet a friend.
  addOrUpdateRequestSent(receiver) {
    if (!this.requestsSent) {
      this.requestsSent = [receiver];
    } else {
      var index = -1;
      for (var j = 0; j < this.requestsSent.length; j++) {
        if (this.requestsSent[j].$key == receiver.$key) {
          index = j;
        }
      }
      if (index > -1) {
        if (!this.isFriends(receiver.$key)) {
          this.requestsSent[index] = receiver;
        }
      } else {
        if (!this.isFriends(receiver.$key)) {
          this.requestsSent.push(receiver);
        }
      }
    }
  }


  findNewFriends() {
    this.requestsSent = [];
    this.friendRequests = [];
    // Initialize
    this.loadingProvider.show();
    this.searchUser = '';
    // Get all users.
    this.dataProvider.getUsers().snapshotChanges().subscribe((accounts: any) => {
      // TODO : why is this being called twice??????????????
      this.loadingProvider.hide();
      // applying Filters
      const acc = accounts.filter((c) => {
        if (c.key == null && c.key === undefined && c.payload.doc.data() == null) { return false; }
        if (c.payload.doc.data().name === ''
            || c.payload.doc.data().name === ' '
            || c.payload.doc.data().name === undefined) {
              return false;
        }

        if (c.payload.doc.data().publicVisibility === false) { return false; }
        return true;
      });

      this.accounts = acc.map(c => {
        return { $key: c.payload.doc.data().userId, ...c.payload.doc.data() }
      });

      this.dataProvider.getCurrentUser().then((u) => {
        u.snapshotChanges().subscribe((accountRes: any) => {
          const account = accountRes.payload.data();
          // Add own userId as exludedIds.
          this.excludedIds = [];
          if (this.excludedIds.indexOf(account.userId) === -1) {
            this.excludedIds.push(account.userId);
          }
          // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.
          if (account != null) {
            if (account.friends != null) {
              account.friends.forEach(friend => {
                if (this.excludedIds.indexOf(friend) === -1) {
                  this.excludedIds.push(friend);
                }
              });
            }
          }
          // Get requests of the currentUser.
          this.dataProvider.getRequests(account.userId).get().subscribe((requests: any) => {
            if (requests.payload != null && requests.payload.data()) {
              const requestsData = requests.payload.data();
              this.requestsSent = requestsData.requestsSent || [];
              this.friendRequests = requestsData.friendRequests || [];
            } else {
              this.requestsSent = [];
              this.friendRequests = [];
            }
          });
      });
      })
    });
  }

  // Send friend request.
  async sendFriendRequest(user: any) {
    const alert = await this.alertCtrl.create({
      header: 'Send Friend Request',
      message: `Would you like to connect with ${user.name}?`,
      cssClass: 'custom-alert friend-request-alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
          handler: () => {}
        },
        {
          text: 'Send Request',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.firebaseProvider.sendFriendRequest(user.$key);
          }
        }
      ]
    });
  
    await alert.present();
  }

  async acceptFriendRequest(user: any) {
    const alert = await this.alertCtrl.create({
      header: 'Friend Request',
      message: user.name + ' wants to connect with you',
      cssClass: 'custom-alert incoming-request-alert',
      buttons: [
        {
          text: 'Decline',
          role: 'cancel',
          cssClass: 'alert-button-cancel'
        },
        {
          text: 'Accept',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.firebaseProvider.acceptFriendRequest(user.$key);
          }
        }
      ]
    });
  
    await alert.present();
  }
  

  // Cancel Friend Request sent.
  cancelFriendRequest(user) {
    this.alert = this.alertCtrl.create({
      header: 'Friend Request Pending',
      message: 'Do you want to delete your friend request to ' + user.name + '?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Delete',
          handler: () => {
            this.firebaseProvider.cancelFriendRequest(user.$key);
            this.getFriendRequests();
          }
        }
      ]
    }).then(r => r.present());
  }

  // Checks if user is already friends with this user.
  isFriends(userId) {
    if (this.account.friends) {
      if (this.account.friends.indexOf(userId) == -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  // Get the status of the user in relation to the logged in user.
  getStatus(user) {
    // Returns:
    // 0 when user can be requested as friend.
    // 1 when a friend request was already sent to this user.
    // 2 when this user has a pending friend request.
    
    // Check if user is already a friend
    if (this.account && this.account.friends && this.account.friends.includes(user.$key)) {
      return 3; // Already friends
    }
    
    // Check if request was sent to this user
    if (this.requestsSent && Array.isArray(this.requestsSent)) {
      for (let i = 0; i < this.requestsSent.length; i++) {
        if (this.requestsSent[i] === user.$key) {
          return 1;
        }
      }
    }
    
    // Check if this user sent a request
    if (this.friendRequests && Array.isArray(this.friendRequests)) {
      for (let j = 0; j < this.friendRequests.length; j++) {
        if (this.friendRequests[j] === user.$key) {
          return 2;
        }
      }
    }
    
    return 0;
  }
}
