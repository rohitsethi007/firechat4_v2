import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/walkthrough', pathMatch: 'full' },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsPageModule' },
  { path: 'group/:id', loadChildren: './group/group.module#GroupPageModule' },
  { path: 'addmembers/:id', loadChildren: './addmembers/addmembers.module#AddmembersPageModule' },
  { path: 'groupinfo/:id', loadChildren: './groupinfo/groupinfo.module#GroupinfoPageModule' },
  { path: 'groups', loadChildren: './groups/groups.module#GroupsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'imagemodal', loadChildren: './imagemodal/imagemodal.module#ImagemodalPageModule' },
  { path: 'message/:id', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },
  { path: 'newgroup', loadChildren: './newgroup/newgroup.module#NewgroupPageModule' },
  { path: 'blockedlist', loadChildren: './blockedlist/blockedlist.module#BlockedlistPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'userinfo/:id', loadChildren: './userinfo/userinfo.module#UserinfoPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule' },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
  { path: 'tag-modal/:groupTags', loadChildren: './tag-modal/tag-modal.module#TagModalPageModule' },
  { path: 'poll', loadChildren: './poll/poll.module#PollPageModule' },
  { path: 'new-poll/:id', loadChildren: './new-poll/new-poll.module#NewPollPageModule' },
  { path: 'walkthrough', loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule' },
  { path: 'getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
