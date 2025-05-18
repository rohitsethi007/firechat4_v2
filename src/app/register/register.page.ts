import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Validator } from 'src/environments/validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  name: any;
  username: any;
  email: any;
  password: any;
  img: any;
  loading = false;
  showPassword = false;

  myForm: UntypedFormGroup;
  submitAttempt = false;
  errorMessages: any = [];

  constructor(
    private loginService: LoginService,
    private formBuilder: UntypedFormBuilder,
    private router: Router
  ) {
    this.errorMessages = Validator.errorMessages
    this.myForm = this.formBuilder.group({
      name: Validator.nameValidator,
      username: Validator.usernameValidator,
      email: Validator.emailValidator,
      password: Validator.passwordValidator
    })
  }

  ngOnInit() {
  }

  async register() {
    this.submitAttempt = true;
    
    if (this.myForm.valid) {
      this.loading = true;
      try {
        // Register the user
        const userCredential = await this.loginService.register(
          this.name,
          this.username,
          this.email,
          this.password
        ) as { uid: string };
        console.info('userCredential:', userCredential.uid);  
        // Redirect to interest selection page
        this.router.navigate(['/interest-selection'], {
          replaceUrl: true // This prevents going back to register page
        });
        
      } catch (error) {
        console.error('Registration error:', error);
        // Handle specific error cases here
      } finally {
        this.loading = false;
      }
    }
  }
}
