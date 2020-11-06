import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { DataService } from './data.service';
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
    private firestore: AngularFirestore,
    private dataService: DataService,
    private loadingProvider: LoadingService,
    private platform: Platform,
    private gplus: GooglePlus,
    private facebook: Facebook,
    private router: Router
  ) { }

  login(email, password) {
    this.loadingProvider.show();
    this.afAuth.signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res);
      console.log("******* " + this.afAuth.user + " *********");
      //this.dataService.getUser(this.afAuth.user.)
      this.loadingProvider.hide();
    }).catch(err => {
      console.log(err);
      this.loadingProvider.hide();
      this.loadingProvider.showToast(err.message)
    });
  }

  register(name, username, email, password, img) {
    this.loadingProvider.show();
    this.afAuth.createUserWithEmailAndPassword(email, password).then((res) => {
      let user: any = this.afAuth.currentUser;
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
    this.afAuth.sendPasswordResetEmail(email).then(() => {
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
      this.afAuth.signInWithPopup(new firebase.default.auth.FacebookAuthProvider()).then((res: any) => {
        this.loadingProvider.hide();
        let credential = firebase.default.auth.FacebookAuthProvider.credential(res.credential.accessToken);
        this.afAuth.signInWithCredential(credential).then( async () => {
          if (res.additionalUserInfo.isNewUser) {
            let uid = await this.afAuth.currentUser.then((data) => { return data.uid });
            let userInfo = res.additionalUserInfo.profile;
            this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Facebook', userInfo.picture);
          }
          else {
            this.router.navigateByUrl('tabs');
          }
        }).catch(err => console.log(err));

      }).catch(err => {
        console.log(err)
        this.loadingProvider.hide();
      })
    }
    else {
      this.facebook.login(['public_profile', 'email']).then(res => {
        console.log(res);
        let credential = firebase.default.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        this.loadingProvider.show();
        this.afAuth.signInWithCredential(credential).then((res) => {
          if (res.additionalUserInfo.isNewUser) {
            this.facebook.api("me/?fields=id,email,first_name,picture,gender", ["public_profile", "email"])
              .then(async data => {
                console.log(data)
                let uid = await this.afAuth.currentUser.then((data) => { return data.uid }); 
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
      this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider()).then((res: any) => {
        let credential = firebase.default.auth.GoogleAuthProvider.credential(res.credential.idToken, res.credential.accessToken);
        this.afAuth.signInWithCredential(credential).then(async () => {
          if (res.additionalUserInfo.isNewUser) {
            let uid = await this.afAuth.currentUser.then((data) => { return data.uid }); 
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
        let credential = firebase.default.auth.GoogleAuthProvider.credential(result['token'], null);
        this.afAuth.signInWithCredential(credential).then(async (res: any) => {
          if (res.additionalUserInfo.isNewUser) {
            let uid = await this.afAuth.currentUser.then((data) => { return data.uid }); 
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
    this.firestore.collection('accounts').doc(userId).set({
      dateCreated, username, name, userId, email, description, provider, img
    }).then(() => {
      this.router.navigateByUrl('tabs');
    });
  }

  logout() {
    this.afAuth.signOut().then(() => this.router.navigateByUrl('/login', { replaceUrl: true }));
  }
}
