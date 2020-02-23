import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../services/share.module';
import { IonicModule } from '@ionic/angular';

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
    IonicModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostPage]
})
export class PostPageModule {}
