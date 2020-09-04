import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../services/share.module';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import { PostPage } from './post.page';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '', 
    component: PostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChartsModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostPage]
})
export class PostPageModule {}
