import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase/app';

import { LoadingService } from './loading.service';
import { Platform } from '@ionic/angular';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';

import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase,
    private loadingProvider: LoadingService,
    private platform: Platform,
    private gplus: GooglePlus,
    private facebook: Facebook,
    private router: Router,
  ) { }

  login(email, password) {
    this.loadingProvider.show();
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res)
      this.loadingProvider.hide();
    }).catch(err => {
      console.log(err);
      this.loadingProvider.hide();
      this.loadingProvider.showToast(err.message)
    })
  }

  register(name, username, email, password, img) {
    this.loadingProvider.show();
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
      let user: any = this.afAuth.auth.currentUser;
      this.loadingProvider.hide();
      this.createNewUser(user.uid, name, username, user.email, "I am available", "Firebase", img);
    }).catch(err => {
      console.log(err);
      this.loadingProvider.hide();
      this.loadingProvider.showToast(err.message);
    })
  }

  reset(email) {
    console.log(email);
    this.loadingProvider.show();
    this.afAuth.auth.sendPasswordResetEmail(email).then(() => {
      this.loadingProvider.hide();
      this.loadingProvider.showToast("Please Check your inbox");
    }).catch(err => {
      this.loadingProvider.hide();
      this.loadingProvider.showToast(err.message);
    })
  }

  fbLogin() {
    if (this.platform.is('desktop')) {
      this.loadingProvider.show();
      this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then((res: any) => {
        this.loadingProvider.hide();
        let credential = auth.FacebookAuthProvider.credential(res.credential.accessToken);
        this.afAuth.auth.signInWithCredential(credential).then(() => {
          if (res.additionalUserInfo.isNewUser) {
            let uid = this.afAuth.auth.currentUser.uid;
            let userInfo = res.additionalUserInfo.profile;
            this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Facebook', userInfo.picture);
          }
          else {
            this.router.navigateByUrl('tabs')
          }
        }).catch(err => console.log(err))

      }).catch(err => {
        console.log(err)
        this.loadingProvider.hide();
      })
    }
    else {
      this.facebook.login(['public_profile', 'email']).then(res => {
        console.log(res);
        let credential = auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        this.loadingProvider.show();
        this.afAuth.auth.signInWithCredential(credential).then((res) => {
          if (res.additionalUserInfo.isNewUser) {
            this.facebook.api("me/?fields=id,email,first_name,picture,gender", ["public_profile", "email"])
              .then(data => {
                console.log(data)
                let uid = this.afAuth.auth.currentUser.uid;
                this.createNewUser(uid, data.first_name, uid, data.email, 'I am available', 'Facebook', data.picture.data.url);
              })
              .catch(err => {
                console.log(err);
                this.loadingProvider.hide();
              })
          }
          else {
            this.router.navigateByUrl('tabs')
          }
        })
          .catch((error) => {
            this.loadingProvider.hide();
          });

      }).catch(err => console.log(err));
    }
  }

  gLogin() {
    if (this.platform.is('desktop')) {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((res: any) => {
        let credential = auth.GoogleAuthProvider.credential(res.credential.idToken, res.credential.accessToken);
        this.afAuth.auth.signInWithCredential(credential).then(() => {
          if (res.additionalUserInfo.isNewUser) {
            let uid = this.afAuth.auth.currentUser.uid;
            let userInfo = res.additionalUserInfo.profile;
            this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
          } else {
            this.router.navigateByUrl('tabs');
          }
        }).catch((err) => {
          console.log("Err! signInWithCredential" + err)
        })
      }).catch(err => {
        console.log('Err! signInWithCredential' + err);
      })
    }
    else {
      this.gplus.login({
        webClientId: environment.googleClientId
      }).then((result: any) => {
        let credential = auth.GoogleAuthProvider.credential(result['token'], null);
        this.afAuth.auth.signInWithCredential(credential).then((res: any) => {
          if (res.additionalUserInfo.isNewUser) {
            let uid = this.afAuth.auth.currentUser.uid;
            let userInfo = res.additionalUserInfo.profile;
            this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
          }
          else {
            this.router.navigateByUrl('tabs');
          }
        }).catch((err) => {
          console.log("Err! signInWithCredential" + err)
        })
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  createNewUser(userId, name, username, email, description = "I'm available", provider, img = "./assets/images/default-dp.png") {
    let dateCreated = new Date();
    this.afdb.object('/accounts/' + userId).update({
      dateCreated, username, name, userId, email, description, provider, img
    }).then(() => {
      this.router.navigateByUrl('tabs');
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => this.router.navigateByUrl('/login', { replaceUrl: true }))
  }
}