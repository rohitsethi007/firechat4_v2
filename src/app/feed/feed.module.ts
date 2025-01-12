import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../services/share.module';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { FeedPage } from './feed.page';
import { EmojiPickerComponentModule } from '../components/emoji-picker/emoji-picker.module';

const routes: Routes = [
  {
    path: '',
    component: FeedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    ComponentsModule,
    EmojiPickerComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedPage]
})
export class FeedPageModule {}
