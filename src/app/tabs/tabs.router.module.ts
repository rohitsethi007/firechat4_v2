import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => 
              import('../feed/feed.module').then(m => m.FeedPageModule)
             // canActivate: [AuthGuardService]
          }
        ]
      },{
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => 
              import('../groups/groups.module').then(m => m.GroupsPageModule)
             // canActivate: [AuthGuardService]
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../messages/messages.module').then(m => m.MessagesPageModule),
              canActivate: [AuthGuardService]
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../friends/friends.module').then(m => m.FriendsPageModule),
              canActivate: [AuthGuardService]
          }
        ]
       },
       {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule),
              canActivate: [AuthGuardService]
          }
        ]
       },
      {
        path: 'tab6',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../admin-categories/admin-categories.module').then(m => m.AdminCategoriesPageModule),
              canActivate: [AuthGuardService]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
