import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { ImageService } from '../services/image.service';
import { Camera } from '@ionic-native/camera/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Validator } from 'src/environments/validator';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { UserProfileModalPage } from '../user-profile-modal/user-profile-modal.page';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

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
  groups: any = [];
  friends: any = [];
  myProfile = false;
  myForm: FormGroup;
  submitAttempt = false;
  errorMessages: any = [];
  alert: any;

  constructor(
    private loginService: LoginService,
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private imageProvider: ImageService,
    public alertCtrl: AlertController,
    private camera: Camera,
    private fcm: FirebaseX,
    public firebaseProvider: FirebaseService,
    private platform: Platform,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private alertController: AlertController,
  ) {
   
    this.loggedInUserId = firebase.auth().currentUser.uid;
    this.userId = this.route.snapshot.params.id;

    if (this.userId === this.loggedInUserId) {
      this.myProfile = true;
    } else {
      this.myProfile = false;
    }

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
  }

  getUserData() {
    this.dataProvider.getUser(this.userId).snapshotChanges().subscribe((user: any) => {
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
        if (this.user.userReactions) {
          this.firestore.collection('posts').ref
          .where(firebase.firestore.FieldPath.documentId(), 'in', this.user.userReactions)
          .get().then((po: any) => {
          this.userReactions = [];
          this.loadEachPostData(po, 'userReactions');
          });
        }

        // get user Posts
        if (this.user.userComments) {
          this.firestore.collection('posts').ref
          .where(firebase.firestore.FieldPath.documentId(), 'in', this.user.userComments)
          .get().then((po: any) => {
          this.userComments = [];
          this.loadEachPostData(po, 'userComments');
          });
        }

        // Get User Friends list
        if (this.user.friends) {
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

            console.log('this.friends', this.friends);
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
    console.info('adding post', post)
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

  async changeNotification() {
    let uid = await this.afAuth.currentUser.then((u) => u.uid);
    if (this.platform.is('desktop')) {
      this.user.isPushEnabled = false;
      this.loadingProvider.showToast("Notification only working on mobile device")
    }
    else {
      console.log(this.user.isPushEnabled);
      if (this.user.isPushEnabled == true) {
        //Registering for push notification
        this.fcm.hasPermission().then(hasPermission => {
          if (!hasPermission) {
            this.fcm.grantPermission().then(data => console.log(data));
          }
          else {
            this.fcm.getToken().then(token => {
              console.log(token);
              this.firestore.doc('/accounts/' + uid).update({ isPushEnabled: true, pushToken: token });
              this.user.isPushEnabled = true;
            }).catch(err => {
              console.log(err);
            });
            this.fcm.onTokenRefresh().subscribe(token => {
              console.log(token);
              this.firestore.doc('/accounts/' + uid).update({ isPushEnabled: true, pushToken: token });
            });
          }
        });
        this.fcm.onMessageReceived().subscribe(data => {
          console.log(data);
        });
      }
      else {
        this.user.isPushEnabled == false;
        this.firestore.doc('/accounts/' + uid).update({ isPushEnabled: false, pushToken: '' });
      }
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
            this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Take Photo',
          handler: () => {
            // Call imageProvider to process, upload, and update user photo.
            this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.CAMERA);
          }
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
      message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Send',
          handler: () => {
            this.firebaseProvider.sendFriendRequest(this.userId);
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
        console.log('Successfully left group');
      })
      .catch(error => {
        console.error('Error leaving group:', error);
        // Handle error (show toast message)
      });
  }
}