import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EventPage } from './event.page';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../services/share.module';

const routes: Routes = [
  {
    path: '',
    component: EventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventPage]
})
export class EventPageModule {}
