import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Validator } from '../../environments/validator';
import { Router } from '@angular/router';   

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
    private router: Router
  ) {
    this.errorMessages = Validator.errorMessages
    this.myForm = this.formBuilder.group({
      email: Validator.emailValidator,
      password: Validator.passwordValidator
    })
  }

  ngOnInit() {

  }

  login() {
    this.submitAttempt = true;
    if (this.myForm.valid) {
      console.log('valid');
      this.loginService.login(this.email, this.password);
      this.router.navigate(['/feed'], {
        replaceUrl: true // This prevents going back to register page
      });
    }
    else {
      console.log('invalid');
    }
  }
}
