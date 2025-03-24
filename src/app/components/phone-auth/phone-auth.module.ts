import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PhoneAuthComponent } from './phone-auth.component';

@NgModule({
  declarations: [
    PhoneAuthComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PhoneAuthComponent
  ]
})
export class PhoneAuthComponentModule { }
