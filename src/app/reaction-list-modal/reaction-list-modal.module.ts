import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReactionListModalPage } from './reaction-list-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ReactionListModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReactionListModalPage]
})
export class ReactionListModalPageModule {}
