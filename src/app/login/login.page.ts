import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Validator } from '../services/validator';
import { Router } from '@angular/router';   
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  myForm: UntypedFormGroup;
  submitAttempt = false;
  errorMessages: any = [];

  constructor(
    private loginService: LoginService,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth,
    private loadingProvider: LoadingService
  ) {
    this.errorMessages = Validator.errorMessages
    this.myForm = this.formBuilder.group({
      email: Validator.emailValidator,
      password: Validator.passwordValidator
    })
  }

  ngOnInit() {
    // Check if user is already logged in
    this.afAuth.authState.subscribe(async user => {
      if (user) {
        // Check if there's a pending profile view
        const pendingProfileId = localStorage.getItem('pendingProfileView');
        if (pendingProfileId) {
          // Clear the stored profile ID
          localStorage.removeItem('pendingProfileView');
          // Navigate to the profile
          this.router.navigate(['/profile/' + pendingProfileId], { replaceUrl: true });
        } 
        // Check if there's a pending post view
        else if (localStorage.getItem('pendingPostView')) {
          const pendingPostId = localStorage.getItem('pendingPostView');
          // Clear the stored post ID
          localStorage.removeItem('pendingPostView');
          // Navigate to the post
          this.router.navigate(['/post/' + pendingPostId], { replaceUrl: true });
        } 
        else {
          // Check if user has selected groups
          const hasGroups = await this.loginService.checkUserGroups(user.uid);
          if (hasGroups) {
            // User has groups, go to feed
            this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
          } else {
            // User has no groups, go to interest selection
            this.router.navigate(['/interest-selection'], { replaceUrl: true });
          }
        }
      }
    });
  }

  login() {
    this.submitAttempt = true;
    if (this.myForm.valid) {
      this.loadingProvider.show();
      console.log('valid');
      this.loginService.login(this.email, this.password)
        .then((result) => {
          // Navigation is handled in the login service
          this.loadingProvider.hide();
        })
        .catch(error => {
          this.loadingProvider.hide();
          console.error('Login error:', error);
        });
    }
    else {
      console.log('invalid');
    }
  }
  
  goToRegister() {
    // Navigate to register page
    this.router.navigate(['/register']);
  }

  async loginWithGoogle() {
    try {
      this.loadingProvider.show();
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);
      
      if (result.user) {
        const user = result.user;
        const isNewUser = result.additionalUserInfo?.isNewUser;
        
        if (isNewUser) {
          await this.loginService.createNewUser(
            user.uid,
            user.displayName || 'Google User',
            user.email?.split('@')[0] || 'user',
            user.email || '',
            "I'm available",
            'Google',
            user.photoURL || './assets/images/default-dp.png'
          );
          
          // If new user, redirect to interest selection
          this.router.navigate(['/interest-selection'], { replaceUrl: true });
        } else {
          // Check if user has selected groups
          const hasGroups = await this.loginService.checkUserGroups(user.uid);
          if (hasGroups) {
            // User has groups, go to feed
            this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
          } else {
            // User has no groups, go to interest selection
            this.router.navigate(['/interest-selection'], { replaceUrl: true });
          }
        }
      }
      this.loadingProvider.hide();
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Google login error:', error);
    }
  }

  async loginWithApple() {
    try {
      this.loadingProvider.show();
      const provider = new firebase.auth.OAuthProvider('apple.com');
      provider.addScope('email');
      provider.addScope('name');
      
      const result = await this.afAuth.signInWithPopup(provider);
      
      if (result.user) {
        const user = result.user;
        const isNewUser = result.additionalUserInfo?.isNewUser;
        
        if (isNewUser) {
          await this.loginService.createNewUser(
            user.uid,
            user.displayName || 'Apple User',
            user.email?.split('@')[0] || 'user',
            user.email || '',
            "I'm available",
            'Apple',
            user.photoURL || './assets/images/default-dp.png'
          );
          
          // If new user, redirect to interest selection
          this.router.navigate(['/interest-selection'], { replaceUrl: true });
        } else {
          // Check if user has selected groups
          const hasGroups = await this.loginService.checkUserGroups(user.uid);
          if (hasGroups) {
            // User has groups, go to feed
            this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
          } else {
            // User has no groups, go to interest selection
            this.router.navigate(['/interest-selection'], { replaceUrl: true });
          }
        }
      }
      this.loadingProvider.hide();
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Apple login error:', error);
    }
  }

  async loginWithFacebook() {
    try {
      this.loadingProvider.show();
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('email');
      provider.addScope('public_profile');
      
      // Try direct Firebase auth first
      try {
        const result = await this.afAuth.signInWithPopup(provider);
        
        if (result.user) {
          const user = result.user;
          const isNewUser = result.additionalUserInfo?.isNewUser;
          
          if (isNewUser) {
            await this.loginService.createNewUser(
              user.uid,
              user.displayName || 'Facebook User',
              user.email?.split('@')[0] || 'user',
              user.email || '',
              "I'm available",
              'Facebook',
              user.photoURL || './assets/images/default-dp.png'
            );
            
            // If new user, redirect to interest selection
            this.router.navigate(['/interest-selection'], { replaceUrl: true });
          } else {
            // Check if user has selected groups
            const hasGroups = await this.loginService.checkUserGroups(user.uid);
            if (hasGroups) {
              // User has groups, go to feed
              this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
            } else {
              // User has no groups, go to interest selection
              this.router.navigate(['/interest-selection'], { replaceUrl: true });
            }
          }
        }
      } catch (fbError) {
        console.warn('Facebook popup auth failed, trying redirect:', fbError);
        // Show error message to user
        this.loadingProvider.showToast('Facebook login failed. Please try another method.');
      }
      
      this.loadingProvider.hide();
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Facebook login error:', error);
      this.loadingProvider.showToast('Facebook login failed. Please try another method.');
    }
  }
}