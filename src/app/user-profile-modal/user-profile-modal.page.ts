import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Validator } from 'src/app/services/validator';
import { LoadingService } from '../services/loading.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user-profile-modal',
  templateUrl: './user-profile-modal.page.html',
  styleUrls: ['./user-profile-modal.page.scss'],
})
export class UserProfileModalPage implements OnInit {
  user: any;
  myForm: UntypedFormGroup;
  submitAttempt = false;
  errorMessages: any = [];

  constructor(
    private modal: ModalController,
    private navParam: NavParams,
    private formBuilder: UntypedFormBuilder,
    private firestore: AngularFirestore,
    private loadingProvider: LoadingService,
    ) {
      this.user = this.navParam.data.user;

      this.errorMessages = Validator.errorMessages
      this.myForm = this.formBuilder.group({
        name: Validator.nameValidator,
        username: Validator.usernameValidator,
        email: Validator.emailValidator,
        bio: Validator.bioValidator
      });
    }

  ngOnInit() {
  }

  save() {
    this.submitAttempt = true;
    if (this.myForm.valid) {
      this.loadingProvider.show();
      this.firestore.doc('accounts/' + this.user.userId).update(this.user).then(() => {
        this.loadingProvider.hide();
        this.loadingProvider.showToast("Updated Successfully")
        this.modal.dismiss();
      }).catch(err => {
        this.loadingProvider.showToast("Something went wrong");
        this.loadingProvider.hide();
      });
    }
  }

  dismissModal() {
    this.modal.dismiss();
  }

}
