import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Validator } from 'src/app/services/validator';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  email: any;
  password: any;
  myForm: UntypedFormGroup;
  submitAttempt = false;
  errorMessages: any = [];

  constructor(
    private loginService: LoginService,
    private formBuilder: UntypedFormBuilder
  ) {

    this.errorMessages = Validator.errorMessages
    this.myForm = this.formBuilder.group({
      email: Validator.emailValidator,
    })
  }

  ngOnInit() {
  }

  reset() {
    this.submitAttempt = true;
    if (this.myForm.controls.email.valid) {
      this.loginService.reset(this.email);
    }
  }

}
