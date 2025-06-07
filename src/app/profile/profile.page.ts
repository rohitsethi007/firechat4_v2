import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { AlertController, Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { ImageService } from '../services/image.service';
import { PushNotifications } from '@capacitor/push-notifications';
import { FirebaseMessaging } from '@capacitor-firebase/messaging';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';

import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Validator } from 'src/environments/validator';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { UserProfileModalPage } from '../user-profile-modal/user-profile-modal.page';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BookmarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  title: any;
  userId: any;
  showOnline = false;
  messageMe = false;
  loggedInUserId: any;
  isPushEnabled: any = false;
  user: any;
  isBrowser = true;
  userPosts: any = [];
  userReactions: any = [];
  userComments: any = [];
  userBookmarks: any = [];
  groups: any = [];
  friends: any = [];
  myProfile = false;
  myForm: UntypedFormGroup;
  submitAttempt = false;
  errorMessages: any = [];
  alert: any;

  friendRequestStatus: 'none' | 'pending' | 'accepted' = 'none';

  constructor(
    private loginService: LoginService,
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private imageProvider: ImageService,
    public alertCtrl: AlertController,
    public firebaseProvider: FirebaseService,
    private platform: Platform,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private alertController: AlertController,
    private bookmarkService: BookmarkService
  ) {
   
    this.loggedInUserId = firebase.auth().currentUser.uid;
    console.info('profile page, loggedinuser', this.loggedInUserId)
    this.userId = this.route.snapshot.params.id;
    console.info('profile page, userId', this.userId)
    if (this.userId === this.loggedInUserId) {
      this.myProfile = true;
    } else {
      this.myProfile = false;
    }
    if (typeof this.userId === 'undefined') {
      this.myProfile = true;
      this.userId = this.loggedInUserId; // Set userId to loggedInUserId when undefined
    }

    console.info('profile page, myProfile', this.myProfile)
    this.errorMessages = Validator.errorMessages;
    this.myForm = this.formBuilder.group({
      name: Validator.nameValidator,
      username: Validator.usernameValidator,
      email: Validator.emailValidator,
      bio: Validator.bioValidator
    });
  }

  ngOnInit() {
    this.isBrowser = this.platform.is('desktop');
  }

  ionViewDidEnter() {
    this.getUserData();
    if (!this.myProfile) {
      this.checkFriendRequestStatus();
    }
    this.loadBookmarkedPosts();
  }
  
  checkFriendRequestStatus() {
    // Check if there's a pending friend request
    this.firestore.collection('friendRequests', ref => 
      ref.where('fromUserId', '==', this.loggedInUserId)
         .where('toUserId', '==', this.userId)
    )
    .get()
    .subscribe(snapshot => {
      if (!snapshot.empty) {
        this.friendRequestStatus = 'pending';
      } else {
        // Check if they're already friends (which would set messageMe to true)
        if (this.messageMe) {
          this.friendRequestStatus = 'accepted';
        } else {
          this.friendRequestStatus = 'none';
        }
      }
    });
  }

  getUserData() {
    // If userId is undefined, use loggedInUserId instead
    const userIdToFetch = this.userId || this.loggedInUserId;
    this.dataProvider.getUser(userIdToFetch).snapshotChanges().subscribe((user: any) => {
      let account = user.payload.data();
      if (account != null) {
        this.user = account;
        console.log('user data', this.user)
        this.title = this.user.username;
        // get user Posts
        if (this.user.userPosts) {
          this.firestore.collection('posts').ref
          .where(firebase.firestore.FieldPath.documentId(), 'in', this.user.userPosts)
          .get().then((po: any) => {
            this.userPosts = [];
            this.loadEachPostData(po, 'userPosts');
          });
        }

        // get user Reaction Posts
        if (this.user.userReactions && this.user.userReactions > 0) {
          console.log('this.user.userReactions', this.user.userReactions);
          this.firestore.collection('posts').ref
          .where(firebase.firestore.FieldPath.documentId(), 'in', this.user.userReactions)
          .get().then((po: any) => {
          this.userReactions = [];
          this.loadEachPostData(po, 'userReactions');
          });
        }

        // get user Comments
        if (this.user.userComments && this.user.userComments.length > 0) {
          console.log('this.user.userComments', this.user.userComments);
          this.firestore.collection('posts').ref
          .where(firebase.firestore.FieldPath.documentId(), 'in', this.user.userComments)
          .get().then((po: any) => {
            this.userComments = [];
            this.loadEachPostData(po, 'userComments');
          });
        } else {
          this.userComments = [];
        }


        // Get User Friends list
        if (this.user.friends && this.user.friends.length > 0) {
          console.log('this.user.friends', this.user.friends);
          this.firestore.collection('accounts').ref
          .where(firebase.firestore.FieldPath.documentId(), 'in', this.user.friends)
          .get().then((user: any) => {
            this.friends = [];
            user.forEach(f => {
              let friend: any;
              friend = f.data();
              friend.key = f.id;
              this.addOrUpdateUserFriend(friend);
            });

            // check if logged in user is a friend
            const foundFriend = this.friends.some(el => el.userId === this.loggedInUserId);
            if (foundFriend) {
               this.messageMe = true;
            } else {
              this.messageMe = false;
            }
          });
        }

        // Get User Groups List
        if (this.user.groups && this.user.groups.length > 0) {
          this.firestore.collection('groups').ref
          .where(firebase.firestore.FieldPath.documentId(), 'in', this.user.groups)
          .get().then((group: any) => {
            this.groups = [];
            group.forEach(g => {
              let group: any;
              group = g.data();
              group.key = g.id;
              this.addOrUpdateUserGroup(group);

            });
          });
          }
          else {
            this.groups = [];
          }
      }
    });
  }

  loadEachPostData(po: any, collection: any) {
    po.forEach(p => {
      let post: any;
      post = p.data();
      post.key = p.id;
      if (collection === 'userPosts') { this.addOrUpdateUserPost(post); }
      if (collection === 'userComments') { this.addOrUpdateCommentPost(post); }
      if (collection === 'userReactions') { this.addOrUpdateReactionPost(post); }
    });
  }

  addOrUpdateUserPost(post) {
    if (!this.userPosts) {
      this.userPosts = [post];
    } else {
      let index = -1;
      for (let i = 0; i < this.userPosts.length; i++) {
        if (this.userPosts[i].key == post.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.userPosts[index] = post;
      } else {
        this.userPosts.push(post);
      }
    }
  }

  addOrUpdateUserFriend(friend) {
    if (!this.friends) {
      this.friends = [friend];
    } else {
      let index = -1;
      for (let i = 0; i < this.friends.length; i++) {
        if (this.friends[i].key == friend.key) {
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

  addOrUpdateUserGroup(group) {
    if (!this.groups) {
      this.groups = [group];
    } else {
      let index = -1;
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].key == group.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.groups[index] = group;
      } else {
        this.groups.push(group);
      }
    }
  }

  addOrUpdateReactionPost(post) {
    if (!this.userReactions) {
      this.userReactions = [post];
    } else {
      let index = -1;
      for (let i = 0; i < this.userReactions.length; i++) {
        if (this.userReactions[i].key == post.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.userReactions[index] = post;
      } else {
        this.userReactions.push(post);
      }
    }
  }

  addOrUpdateCommentPost(post) {
    if (!this.userComments) {
      this.userComments = [post];
    } else {
      let index = -1;
      for (let i = 0; i < this.userComments.length; i++) {
        if (this.userComments[i].key == post.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.userComments[index] = post;
      } else {
        this.userComments.push(post);
      }
    }
  }
  
  loadBookmarkedPosts() {
    if (!this.myProfile) return; // Only load bookmarks for the user's own profile
    
    this.bookmarkService.getBookmarkedPosts().subscribe(posts => {
      this.userBookmarks = posts;
    });
  }
  

  changeStatus() {
    this.firestore.doc('accounts/' + this.user.userId).update({ showOnline: this.user.showOnline });
  }
  changeVisibility() {
    this.firestore.doc('accounts/' + this.user.userId).update({ publicVisibility: this.user.publicVisibility });
  }

  save() {
    this.submitAttempt = true;
    if (this.myForm.valid) {
      this.loadingProvider.show();
      this.firestore.doc('accounts/' + this.user.userId).update(this.user).then(() => {
        this.loadingProvider.hide();
        this.loadingProvider.showToast("Updated Successfully")
      }).catch(err => {
        this.loadingProvider.showToast("Something went wrong");
        this.loadingProvider.hide();
      });
    }
  }

  setPhoto() {
    this.alertCtrl.create({
      header: 'Set Profile Photo',
      message: 'Do you want to take a photo or choose from your photo gallery?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Choose from Gallery',
          handler: () => {
            // Call imageProvider to process, upload, and update user photo.
            this.imageProvider.setProfilePhoto(this.user, 'PHOTOLIBRARY');          }
        },
        {
          text: 'Take Photo',
          handler: () => {
            // Call imageProvider to process, upload, and update user photo.
            this.imageProvider.setProfilePhoto(this.user, 'CAMERA');          }
        }
      ]
    }).then(r => r.present());
  }

  async setPassword() {
    let email = await this.afAuth.currentUser.then((u) => {return u.email});
    this.afAuth.sendPasswordResetEmail(email)
      .then(res => {
        this.loadingProvider.showToast("Please Check your inbox");
      }).catch(err => {
        this.loadingProvider.showToast(err.message);
      })
  }

  // Delete the user account. After deleting the Firebase user, the userData along with their profile pic uploaded on the storage will be deleted as well.
  // If you added some other info or traces for the account, make sure to account for them when deleting the account.
  deleteAccount() {
    this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete your account? This cannot be undone.',
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Delete',
          handler: data => {
            this.loadingProvider.show();
            // Delete Firebase user
            this.afAuth.currentUser.then((u) => {
              u.delete()
              .then((success) => {
                // Delete profilePic of user on Firebase storage
                this.imageProvider.deleteUserImageFile(this.user);
                // Delete user data on Database
                this.firestore.doc('/accounts/' + this.user.userId).delete().then(() => {
                  this.loadingProvider.hide();
                  this.loadingProvider.showToast("Your Account Deleted Successfully");
                  this.loginService.logout();
                });
              })
              .catch((error) => {
                this.loadingProvider.hide();
                this.loadingProvider.showToast("Something went wrong");
              }); 
            });
          }
        }
      ]
    }).then(r => r.present());
  }

  logout() {
    this.loginService.logout();
  }

  viewPost(post) {
    this.router.navigateByUrl('post/' + post.key);
  }

  viewUser(userId) {
    this.router.navigateByUrl('profile/' + userId);
  }

  viewGroup(groupId) {
    this.router.navigateByUrl('group/' + groupId);
  }

  async editProfile() {
    const modal = await this.modalCtrl.create({
      component: UserProfileModalPage,
      componentProps: {
        user: this.user
      }
    });
    return await modal.present();
  }

  messageUser() {
    this.router.navigateByUrl('/message/' + this.userId);
  }

  connectUser() {
    this.alert = this.alertCtrl.create({
      header: 'Send Friend Request',
      message: `Do you want to send friend request to ${this.user.name}?`,
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'alert-button-cancel',
          role: 'cancel',
          handler: data => { }
        },
        {
          text: 'Send Request',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.firebaseProvider.sendFriendRequest(this.userId);
            this.friendRequestStatus = 'pending'; // Update status immediately
            this.loadingProvider.showToast('Friend request sent to ' + this.user.name);
          }
        }
      ]
    }).then(r => r.present());
  }

  async confirmLeaveGroup(group: any) {
    const alert = await this.alertController.create({
      header: 'Leave Group',
      message: 'Are you sure you want to leave this group? Your posts will remain in the group but you will no longer have access to group content.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Leave Group',
          role: 'destructive',
          handler: () => {
            this.leaveGroup(group);
          }
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  leaveGroup(group: any) {
    // Remove user from group members
    const updatedMembers = group.members.filter(memberId => memberId !== this.loggedInUserId);
    
    // Create a batch write to update both documents
    const batch = this.firestore.firestore.batch();
    
    // Reference to group document
    const groupRef = this.firestore.collection('groups').doc(group.key).ref;
    
    // Reference to user's account document
    const userRef = this.firestore.collection('accounts').doc(this.loggedInUserId).ref;
    
    // Update group members
    batch.update(groupRef, { members: updatedMembers });
    
    // Update user's groups array using arrayRemove
    batch.update(userRef, {
      groups: firebase.firestore.FieldValue.arrayRemove(group.key)
    });
  
    // Commit the batch
    batch.commit()
      .then(() => {
        // Update local group data
        group.isUserMember = false;
        group.members = updatedMembers;
      })
      .catch(error => {
        console.error('Error leaving group:', error);
        this.loadingProvider.showToast('There was an issue performing this action, please try again or reach out to support if issue persists.');
      });
  }

  async changeNotification() {
    try {
      // Get current user
      const user = await this.afAuth.currentUser;
      if (!user) {
        this.loadingProvider.showToast('User not authenticated');
        return;
      }
      const uid = user.uid;
  
      // Check if desktop
      if (this.platform.is('desktop')) {
        this.user.isPushEnabled = false;
        await this.firestore.doc(`/accounts/${uid}`).update({ 
          isPushEnabled: false, 
          pushToken: '' 
        });
        this.loadingProvider.showToast('Notifications only work on mobile devices');
        return;
      }
  
      // Handle mobile push notification logic
      if (this.user.isPushEnabled) {
        try {
          await this.enablePushNotifications(uid);
        } catch (err) {
          // Reset the toggle if enabling fails
          this.user.isPushEnabled = false;
          console.error('Failed to enable notifications:', err);
        }
      } else {
        await this.disablePushNotifications(uid);
      }
    } catch (error) {
      console.error('Error in changeNotification:', error);
      // Reset the toggle state to its previous value
      this.user.isPushEnabled = !this.user.isPushEnabled;
      this.loadingProvider.showToast('Failed to update notification settings');
    }
  }
  
  private async enablePushNotifications(uid: string) {
    try {
      // Request permission
      const permissionStatus = await PushNotifications.requestPermissions();
      
      if (permissionStatus.receive === 'granted') {
        // Register for push notifications
        await PushNotifications.register();
  
        // Set up listeners
        this.setupPushListeners();
  
        // Get the token
        const tokenResult = await FirebaseMessaging.getToken();
        const token = tokenResult.token;
        console.log('Push registration success:', token);
  
        // Update Firestore
        await this.firestore.doc(`/accounts/${uid}`).update({
          isPushEnabled: true,
          pushToken: token
        });
        
        this.user.isPushEnabled = true;
        this.loadingProvider.showToast('Push notifications enabled');
      } else {
        this.user.isPushEnabled = false;
        await this.firestore.doc(`/accounts/${uid}`).update({
          isPushEnabled: false,
          pushToken: ''
        });
        this.loadingProvider.showToast('Push notification permission denied');
      }
    } catch (error) {
      console.error('Error enabling push notifications:', error);
      this.user.isPushEnabled = false;
      this.loadingProvider.showToast('Failed to enable notifications. Please try again.');
    }
  }
  
  private async disablePushNotifications(uid: string) {
    try {
      // Remove all listeners
      await PushNotifications.removeAllListeners();
      
      // Update Firestore
      await this.firestore.doc(`/accounts/${uid}`).update({
        isPushEnabled: false,
        pushToken: ''
      });
      
      this.user.isPushEnabled = false;
      this.loadingProvider.showToast('Push notifications disabled');
    } catch (error) {
      console.error('Error disabling push notifications:', error);
      throw error;
    }
  }
  
  private setupPushListeners() {
    try {
      // First remove any existing listeners to prevent duplicates
      PushNotifications.removeAllListeners().then(() => {
        // Registration error listener
        PushNotifications.addListener('registrationError', (error) => {
          console.error('Push registration error:', error);
          this.loadingProvider.showToast('Push notification registration failed');
        });
      
        // Notification received listener
        PushNotifications.addListener('pushNotificationReceived', (notification) => {
          console.log('Push notification received:', notification);
        });
      
        // Notification action performed listener
        PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
          console.log('Push notification action performed:', notification);
        });
      
        // Token refresh listener
        PushNotifications.addListener('registration', async (token) => {
          console.log('Push token refreshed:', token);
          try {
            const user = await this.afAuth.currentUser;
            if (user) {
              await this.firestore.doc(`/accounts/${user.uid}`).update({
                pushToken: token
              });
            }
          } catch (error) {
            console.error('Error updating token:', error);
          }
        });
      });
    } catch (error) {
      console.error('Error setting up push listeners:', error);
    }
  }
}