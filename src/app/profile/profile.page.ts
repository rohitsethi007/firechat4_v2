import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, Platform, ModalController, IonRouterOutlet } from '@ionic/angular';
import { ImageService } from '../services/image.service';
import { Camera } from '@ionic-native/camera/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validator } from 'src/environments/validator';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { UserProfileModalPage } from '../user-profile-modal/user-profile-modal.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  showOnline = false;
  isPushEnabled: any = false;
  user: any;
  isBrowser = true;
  userPosts: any = [];
  userReactions: any = [];
  userComments: any = [];
  groups: any = [];
  friends: any = [];

  myForm: FormGroup;
  submitAttempt = false;
  errorMessages: any = [];

  constructor(
    private loginService: LoginService,
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private imageProvider: ImageService,
    private camera: Camera,
    private fcm: FirebaseX,
    private platform: Platform,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {

    this.errorMessages = Validator.errorMessages
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
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((user: any) => {
      let account = user.payload.data();
      this.loadingProvider.hide();
      if (account != null) {
        this.user = account;

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
          const userFriendQuery = this.firestore.collection('accounts').ref
          .where(firebase.firestore.FieldPath.documentId(), 'in', this.user.friends)
          .get().then((user: any) => {
            this.friends = [];
            user.forEach(p => {
              this.addOrUpdateUserFriend(p.data());
            });
          });
        }
      }
    });

    // Get User Groups List
    this.dataProvider.getGroups().snapshotChanges().subscribe((data: any) => {
      this.groups = data.map(c => {
            return { $key: c.payload.doc.id, ...c.payload.doc.data() };
          });
        });
  }


  loadEachPostData(po: any, collection: any) {
    po.forEach(p => {
      let post: any;
      post = p.data();
      post.key = p.id;
      post.postTags = post.postTags.filter(x => x.isChecked !== false);
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

  changeNotification() {

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
              this.firestore.doc('/accounts/' + this.afAuth.auth.currentUser.uid).update({ isPushEnabled: true, pushToken: token });
              this.user.isPushEnabled = true;
            }).catch(err => {
              console.log(err);
            });
            this.fcm.onTokenRefresh().subscribe(token => {
              console.log(token);
              this.firestore.doc('/accounts/' + this.afAuth.auth.currentUser.uid).update({ isPushEnabled: true, pushToken: token });
            });
          }
        });
        this.fcm.onMessageReceived().subscribe(data => {
          console.log(data);
        });
      }
      else {
        this.user.isPushEnabled == false;
        this.firestore.doc('/accounts/' + this.afAuth.auth.currentUser.uid).update({ isPushEnabled: false, pushToken: '' });
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

  setPassword() {
    this.afAuth.auth.sendPasswordResetEmail(this.afAuth.auth.currentUser.email)
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
            this.afAuth.auth.currentUser.delete()
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

  async editProfile() {
    const modal = await this.modalCtrl.create({
      component: UserProfileModalPage,
      componentProps: {
        user: this.user
      }
    });
    return await modal.present();
  }
}