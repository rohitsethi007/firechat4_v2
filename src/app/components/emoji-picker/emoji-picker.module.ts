import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EmojiPickerComponent } from './emoji-picker.component';

@NgModule({
  declarations: [
    EmojiPickerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EmojiPickerComponent
  ]
})
export class EmojiPickerComponentModule { }
