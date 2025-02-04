import { Injectable } from '@angular/core';
// import { Auth } from '@angular/fire/auth';
// import { Firestore, collection, doc, setDoc, serverTimestamp } from '@angular/fire/firestore';
import { UserDocument } from '../models/interfaces';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail
import { LoadingService } from './loading.service';

import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userDocument: UserDocument;
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private loadingProvider: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.testFirebaseConnection();
  }
  
  login(email: string, password: string) {
    this.loadingProvider.show();
    console.info('im in login')
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.info('result', result)
        // Handle successful login
        return result;
      })
      .catch(err => {
        console.log(err);
        this.loadingProvider.hide();
        this.loadingProvider.showToast(err.message)
      });
  }

  register(name: string, username: string, email: string, password: string, img: string) {
    this.loadingProvider.show();
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.info('New user created:', user);
        
        if (user) {
          return this.createNewUser(user.uid, name, username, user.email, "I am available", "Firebase", img);
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.log(err);
        this.loadingProvider.hide();
        this.loadingProvider.showToast(err.message);
      });
  }


  async reset(email: string): Promise<void> {
    if (!email) {
      await this.loadingProvider.showToast('Please enter an email address');
      return;
    }

    if (!this.isValidEmail(email)) {
      await this.loadingProvider.showToast('Please enter a valid email address');
      return;
    }

    try {
      this.loadingProvider.show();

      const actionCodeSettings = {
        url: window.location.origin + '/login',
        handleCodeInApp: true
      };

      await this.afAuth.sendPasswordResetEmail(email, actionCodeSettings);

      await this.loadingProvider.showToast(
        'Password reset link sent. Please check your inbox'
      );
    } catch (error: any) {
      console.error('Password reset error:', error);
      
      let errorMessage = 'An error occurred while sending reset email';
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/user-not-found':
          errorMessage = 'If this email exists, a reset link will be sent';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Please try again later';
          break;
        default:
          errorMessage = 'Error sending reset email. Please try again';
      }

      await this.loadingProvider.showToast(errorMessage);
    } finally {
      this.loadingProvider.hide();
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async createNewUser(
    userId: string, 
    name: string, 
    username: string, 
    email: string, 
    description = "I'm available", 
    provider: string, 
    img = "./assets/images/default-dp.png"
  ) {
    const userData: UserDocument = {
      userId: userId,
      name: name,
      username: username,
      img: img,
      dateCreated: new Date(),
      publicVisibility: true,
      showOnline: true,
      userNotifications: [],
      userBookmarks: [],
      userReactions: [],
      groups: []
    };

    try {
      await this.firestore.collection('accounts').doc(userId).set(userData);
      this.router.navigateByUrl('tabs');
    } catch (error) {
      console.error('Error creating new user:', error);
      throw error;
    }
  }

  logout() {
    return this.afAuth.signOut()
      .then(() => this.router.navigateByUrl('/login', { replaceUrl: true }));
  }

  testFirebaseConnection() {
    console.log('Firebase config:', environment.firebase);
    
    this.afAuth.onAuthStateChanged(user => {
      console.log('Current auth state:', user);
    });
  }
}
