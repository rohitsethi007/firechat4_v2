// src/app/intro/intro.page.ts
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { PhoneAuthComponent } from '../components/phone-auth/phone-auth.component'


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss']
})
export class IntroPage {
  currentSlide = 0;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false
  };

  categories = [
    { id: 1, name: 'Technology', icon: 'hardware-chip-outline' },
    { id: 2, name: 'Sports', icon: 'football-outline' },
    { id: 3, name: 'Music', icon: 'musical-notes-outline' },
    { id: 4, name: 'Art', icon: 'color-palette-outline' },
    // Add more categories
  ];

  selectedCategories: number[] = [];
  loading = false;

  constructor(
    private router: Router,
    private storage: Storage,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private animationCtrl: AnimationController,
    private modalCtrl: ModalController
  ) {}

   // Handle successful authentication
   async onAuthSuccess() {
    // Move to categories slide
    this.currentSlide = 1;
    await this.animateSlide('forward');
  }

  async next() {
    if (this.currentSlide < 2) {
      this.currentSlide++;
      await this.animateSlide('forward');
    } else {
      await this.finishIntro();
    }
  }

  async prev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      await this.animateSlide('backward');
    }
  }

  private async animateSlide(direction: 'forward' | 'backward') {
    const current = document.querySelector(`.slide-${this.currentSlide}`);
    const prev = document.querySelector(`.slide-${this.currentSlide - 1}`);
    const next = document.querySelector(`.slide-${this.currentSlide + 1}`);

    if (direction === 'forward' && current && next) {
      const animation = this.animationCtrl.create()
        .addElement(current)
        .duration(300)
        .fromTo('transform', 'translateX(100%)', 'translateX(0)');

      await animation.play();
    } else if (direction === 'backward' && current && prev) {
      const animation = this.animationCtrl.create()
        .addElement(current)
        .duration(300)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)');

      await animation.play();
    }
  }

  toggleCategory(categoryId: number) {
    const index = this.selectedCategories.indexOf(categoryId);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(categoryId);
    }
  }

  async signInWithEmail() {
    // Navigate to email signup page
    this.router.navigate(['/register']);
  }

  async signInWithFacebook() {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);
      if (result.user) {
        this.next();
      }
    } catch (error) {
      console.error('Facebook sign in error:', error);
    }
  }

  async signInWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);
      if (result.user) {
        this.next();
      }
    } catch (error) {
      console.error('Google sign in error:', error);
    }
  }

  async signInWithApple() {
    try {
      const provider = new firebase.auth.OAuthProvider('apple.com');
      const result = await this.afAuth.signInWithPopup(provider);
      if (result.user) {
        this.next();
      }
    } catch (error) {
      console.error('Apple sign in error:', error);
    }
  }

  async signInWithPhone() {
    const modal = await this.modalCtrl.create({
      component: PhoneAuthComponent,
      cssClass: 'phone-auth-modal'
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    
    if (role === 'success') {
      this.next(); // Move to next slide after successful phone auth
    }
  }

  async updateUserCategories(userId: string, categories: number[]) {
    return this.firestore
      .doc(`users/${userId}`)
      .set({
        categories: categories,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
  }

  async finishIntro() {
    this.loading = true;
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        // Save selected categories
        await this.updateUserCategories(user.uid, this.selectedCategories);
        
        // Mark intro as completed
        await this.storage.set('introCompleted', true);
        
        // Navigate to feed
        await this.router.navigate(['/feed']);
      }
    } catch (error) {
      console.error('Error finishing intro:', error);
    } finally {
      this.loading = false;
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
