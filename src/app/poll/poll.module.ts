import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts'
import { IonicModule } from '@ionic/angular';

import { PollPage } from './poll.page';

const routes: Routes = [
  {
    path: '',
    component: PollPage
  }
]; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PollPage]
})
export class PollPageModule {}
