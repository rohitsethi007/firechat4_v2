// src/app/components/phone-auth/phone-auth.component.ts
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.component.html',
  styleUrls: ['./phone-auth.component.scss']
})
export class PhoneAuthComponent {
  phoneForm: FormGroup;
  otpForm: FormGroup;
  showOtpInput = false;
  loading = false;
  confirmationResult: firebase.auth.ConfirmationResult | null = null;
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth
  ) {
    this.phoneForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });

    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  ngOnInit() {
    // Wait for the DOM to be ready
    setTimeout(() => {
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'normal',
        callback: () => {
          this.loading = false;
        },
        'expired-callback': () => {
          this.loading = true;
          this.recaptchaVerifier.clear();
          this.initRecaptcha();
        }
      });
      this.recaptchaVerifier.render();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.recaptchaVerifier) {
      this.recaptchaVerifier.clear();
    }
  }

  private initRecaptcha() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'normal',
      callback: () => {
        this.loading = false;
      },
      'expired-callback': () => {
        this.loading = true;
        this.recaptchaVerifier.clear();
        this.initRecaptcha();
      }
    });
    this.recaptchaVerifier.render();
  }

  async sendOTP() {
    if (this.phoneForm.valid) {
      this.loading = true;
      try {
        const phoneNumber = '+1' + this.phoneForm.get('phoneNumber').value; // Adjust country code
        this.confirmationResult = await this.afAuth.signInWithPhoneNumber(
          phoneNumber, 
          this.recaptchaVerifier
        );
        this.showOtpInput = true;
      } catch (error) {
        console.error('Error sending OTP:', error);
      } finally {
        this.loading = false;
      }
    }
  }

  async verifyOTP() {
    if (this.otpForm.valid && this.confirmationResult) {
      this.loading = true;
      try {
        const otp = this.otpForm.get('otp').value;
        const result = await this.confirmationResult.confirm(otp);
        if (result.user) {
          this.modalCtrl.dismiss(null, 'success');
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
      } finally {
        this.loading = false;
      }
    }
  }


  dismiss() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
