import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';

import { LoadingService } from './loading.service';

import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private loadingProvider: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.testFirebaseConnection();
  }
  
  login(email, password) {
    this.loadingProvider.show();
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Handle successful login
      return result;
    })
    .catch(err => {
      console.log(err);
      this.loadingProvider.hide();
      this.loadingProvider.showToast(err.message)
    });
  }

  register(name, username, email, password, img) {
    this.loadingProvider.show();
    this.afAuth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      // userCredential.user contains the user information
      const user = userCredential.user;
      console.info('New user created:', user);
      
      // If you need specific user properties
      if (user) {
        this.createNewUser(user.uid, name, username, user.email, "I am available", "Firebase", img);
        console.info('User data:', user);
      }
    }).catch((err) => {
      console.log(err);
      this.loadingProvider.hide();
      this.loadingProvider.showToast(err.message);
    });
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

  createNewUser(userId, name, username, email, description = "I'm available", provider, img = "./assets/images/default-dp.png") {
    let dateCreated = new Date();
    let publicVisibility = false;
    let showOnline = false;
    this.firestore.collection('accounts').doc(userId).set({
      dateCreated, username, name, userId, email, description, provider, img, publicVisibility, showOnline
    }).then(() => {
      this.router.navigateByUrl('tabs');
    });
  }

  logout() {
    this.afAuth.signOut().then(() => this.router.navigateByUrl('/login', { replaceUrl: true }));
  }
  testFirebaseConnection() {
    console.log('Firebase config:', environment.firebase);
    
    this.afAuth.authState.subscribe(user => {
      console.log('Current auth state:', user);
    });
  }
}
