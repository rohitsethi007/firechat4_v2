import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, Platform } from '@ionic/angular';
import { ImageService } from '../services/image.service';
import { Camera } from '@ionic-native/camera/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Validator } from 'src/environments/validator';

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

  myForm: FormGroup;
  submitAttempt = false;
  errorMessages: any = [];

  constructor(
    private loginService: LoginService,
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private imageProvider: ImageService,
    private camera: Camera,
    private fcm: FirebaseX,
    private platform: Platform,
    private formBuilder: FormBuilder
  ) {

    this.errorMessages = Validator.errorMessages
    this.myForm = this.formBuilder.group({
      name: Validator.nameValidator,
      username: Validator.usernameValidator,
      email: Validator.emailValidator,
      bio: Validator.bioValidator
    })

  }

  ngOnInit() {
    this.isBrowser = this.platform.is('desktop');
  }

  ionViewDidEnter() {
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((user) => {
      this.loadingProvider.hide();
      if (user != null)
        this.user = user.payload.val();
      console.log(this.user);
    });
  }

  changeStatus() {
    this.afdb.object('accounts/' + this.user.userId).update({ showOnline: this.user.showOnline });
  }
  changeVisibility() {
    this.afdb.object('accounts/' + this.user.userId).update({ publicVisibility: this.user.publicVisibility });
  }

  save() {
    this.submitAttempt = true;
    if (this.myForm.valid) {
      this.loadingProvider.show();
      this.afdb.object('accounts/' + this.user.userId).update(this.user).then(() => {
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
              this.afdb.object('/accounts/' + this.afAuth.auth.currentUser.uid).update({ isPushEnabled: true, pushToken: token });
              this.user.isPushEnabled = true;
            }).catch(err => {
              console.log(err);
            });
            this.fcm.onTokenRefresh().subscribe(token => {
              console.log(token);
              this.afdb.object('/accounts/' + this.afAuth.auth.currentUser.uid).update({ isPushEnabled: true, pushToken: token });
            });
          }
        });
        this.fcm.onMessageReceived().subscribe(data => {
          console.log(data);
        });
      }
      else {
        this.user.isPushEnabled == false;
        this.afdb.object('/accounts/' + this.afAuth.auth.currentUser.uid).update({ isPushEnabled: false, pushToken: '' });
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
                this.afdb.object('/accounts/' + this.user.userId).remove().then(() => {
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

}