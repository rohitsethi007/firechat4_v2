import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsPageModule', canActivate: [AuthGuardService] },
  { path: 'group/:id', loadChildren: './group/group.module#GroupPageModule', canActivate: [AuthGuardService] },
  { path: 'addmembers/:id', loadChildren: './addmembers/addmembers.module#AddmembersPageModule',canActivate: [AuthGuardService] },
  { path: 'groupinfo/:id', loadChildren: './groupinfo/groupinfo.module#GroupinfoPageModule', canActivate: [AuthGuardService]},
  { path: 'groups', loadChildren: './groups/groups.module#GroupsPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'imagemodal', loadChildren: './imagemodal/imagemodal.module#ImagemodalPageModule', canActivate: [AuthGuardService] },
  { path: 'message/:id', loadChildren: './message/message.module#MessagePageModule', canActivate: [AuthGuardService] },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule', canActivate: [AuthGuardService] },
  { path: 'newgroup', loadChildren: './newgroup/newgroup.module#NewgroupPageModule', canActivate: [AuthGuardService] },
  { path: 'blockedlist', loadChildren: './blockedlist/blockedlist.module#BlockedlistPageModule', canActivate: [AuthGuardService] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule', canActivate: [AuthGuardService] },
  { path: 'userinfo/:id', loadChildren: './userinfo/userinfo.module#UserinfoPageModule', canActivate: [AuthGuardService] },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthGuardService] },
  { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule', canActivate: [AuthGuardService] },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule', canActivate: [AuthGuardService] },
  { path: 'tag-modal/:groupTags', loadChildren: './tag-modal/tag-modal.module#TagModalPageModule', canActivate: [AuthGuardService] },
  { path: 'poll/:id', loadChildren: './poll/poll.module#PollPageModule', canActivate: [AuthGuardService] },
  { path: 'new-poll/:id', loadChildren: './new-poll/new-poll.module#NewPollPageModule', canActivate: [AuthGuardService] },
  { path: 'walkthrough', loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule' },
  { path: 'getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedPageModule' },
  // { path: 'new-resource/:id', loadChildren: './new-resource/new-resource.module#NewResourcePageModule', canActivate: [AuthGuardService] },
  { path: 'resource/:id', loadChildren: './resource/resource.module#ResourcePageModule', canActivate: [AuthGuardService] },
  { path: 'review-modal', loadChildren: './review-modal/review-modal.module#ReviewModalPageModule', canActivate: [AuthGuardService] },
  { path: 'event/:id', loadChildren: './event/event.module#EventPageModule', canActivate: [AuthGuardService] },
  { path: 'new-event/:id', loadChildren: './new-event/new-event.module#NewEventPageModule', canActivate: [AuthGuardService] },
  { path: 'new-post/:id', loadChildren: './new-post/new-post.module#NewPostPageModule', canActivate: [AuthGuardService] },
  { path: 'post/:id', loadChildren: './post/post.module#PostPageModule', canActivate: [AuthGuardService] },
  { path: 'reaction-list-modal', loadChildren: './reaction-list-modal/reaction-list-modal.module#ReactionListModalPageModule' },
  { path: 'new-resource/:id', loadChildren: './new-resources/new-resources.module#NewResourcesPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
