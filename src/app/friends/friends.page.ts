import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { take, takeLast } from 'rxjs/operators';

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

  ngOnInit() { }

  ionViewDidEnter() {
    this.tab = 'friends';
    this.title = 'Friends';
    this.searchFriend = '';

    if (this.afAuth.currentUser != null) {
      this.dataProvider.getRequests(this.dataProvider.getCurrentUserId()).snapshotChanges().subscribe((requestsRes: any) => {
        if (requestsRes.payload != null) {
        const requests = requestsRes.payload.data();
        if (requests != null) {
          if (requests.friendRequests != null && requests.friendRequests !== undefined) {
            this.friendRequestCount = requests.friendRequests.length;
          } else { this.friendRequestCount = 0; }
        } else { this.friendRequestCount = 0; }
      }
      });
    }
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
  viewUser(userId) {
    this.router.navigateByUrl('/userinfo/' + userId);
  }

  // Proceed to chat page.
  message(userId) {
    this.router.navigateByUrl('/message/' + userId);
  }


  // Manageing Friend Requests

  getFriendRequests() {
    this.friendRequests = [];
    this.requestsSent = [];

    this.loadingProvider.show();
    // Get user info
    this.dataProvider.getCurrentUser().then((u) => {
      u.snapshotChanges().subscribe((accountRes: any) => {
        this.account = accountRes.payload.data();
        // Get friendRequests and requestsSent of the user.
        this.dataProvider.getRequests(this.account.userId).snapshotChanges().subscribe((requestsRes: any) => {
          // friendRequests.
          let requests = requestsRes.payload.data();
          if (requests != null) {
            if (requests.friendRequests != null && requests.friendRequests !== undefined) {
              this.friendRequests = [];
              this.friendRequestCount = requests.friendRequests.length;
              requests.friendRequests.forEach((userId) => {
                this.dataProvider.getUser(userId).snapshotChanges().subscribe((sender: any) => {
                  sender = { $key: sender.payload.data().userId, ...sender.payload.data() };
                  this.addOrUpdateFriendRequest(sender);
                });
              });
            } else {
              this.friendRequests = [];
            }
            // requestsSent.
            if (requests.requestsSent != null && requests.requestsSent != undefined) {
              this.requestsSent = [];
              requests.requestsSent.forEach((userId) => {
                this.dataProvider.getUser(userId).snapshotChanges().subscribe((receiver: any) => {
                  receiver = { $key: receiver.payload.data().userId, ...receiver.payload.data() };
                  this.addOrUpdateRequestSent(receiver);
                });
              });
            } else {
              this.requestsSent = [];
            }
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
            if (requests.payload != null) {
              this.requestsSent = requests.payload.data().requestsSent;
              this.friendRequests = requests.payload.data().friendRequests;
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
      message: `Would you like to connect with <strong>${user.name}</strong>?`,
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
      message: `<div class="request-content">
                  <div class="user-avatar">
                    <img src="${user.img || './assets/images/default-dp.png'}" alt="${user.name}">
                  </div>
                  <div class="request-text">
                    <strong>${user.name}</strong> wants to connect with you
                  </div>
                </div>`,
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
      message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
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
    if (this.requestsSent) {
      for (let i = 0; i < this.requestsSent.length; i++) {
        if (this.requestsSent[i] === user.$key) {
          return 1;
        }
      }
    }
    if (this.friendRequests) {
      for (let j = 0; j < this.friendRequests.length; j++) {
        if (this.friendRequests[j] === user.$key) {
          return 2;
        }
      }
    }
    return 0;
  }
}
