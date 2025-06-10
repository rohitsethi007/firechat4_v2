import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => 
              import('../feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },{
        path: 'tab2',
        children: [
          {
            path: '', 
            loadChildren: () => 
              import('../groups/groups.module').then(m => m.GroupsPageModule)
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
