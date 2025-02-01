import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tabs',
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) 
},
  { path: 'friends', loadChildren: () => import('./friends/friends.module').then(m => m.FriendsPageModule), canActivate: [AuthGuardService] },
  { path: 'group/:id', loadChildren: () => import('./group/group.module').then(m => m.GroupPageModule), canActivate: [AuthGuardService] },
  { path: 'addmembers/:id', loadChildren: () => import('./addmembers/addmembers.module').then(m => m.AddmembersPageModule),canActivate: [AuthGuardService] },
  { path: 'groupinfo/:id', loadChildren: () => import('./groupinfo/groupinfo.module').then(m => m.GroupinfoPageModule), canActivate: [AuthGuardService]},
  { path: 'groups', loadChildren: () => import('./groups/groups.module').then(m => m.GroupsPageModule), canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'imagemodal', loadChildren: () => import('./imagemodal/imagemodal.module').then(m => m.ImagemodalPageModule), canActivate: [AuthGuardService] },
  { path: 'message/:id', loadChildren: () => import('./message/message.module').then(m => m.MessagePageModule), canActivate: [AuthGuardService] },
  { path: 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesPageModule), canActivate: [AuthGuardService] },
  { path: 'newgroup', loadChildren: () => import('./newgroup/newgroup.module').then(m => m.NewgroupPageModule), canActivate: [AuthGuardService] },
  { path: 'blockedlist', loadChildren: () => import('./blockedlist/blockedlist.module').then(m => m.BlockedlistPageModule), canActivate: [AuthGuardService] },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule), canActivate: [AuthGuardService] },
  { path: 'userinfo/:id', loadChildren: () => import('./userinfo/userinfo.module').then(m => m.UserinfoPageModule), canActivate: [AuthGuardService] },
  { path: 'profile/:id', loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule), canActivate: [AuthGuardService] },
  { path: 'forgot', loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotPageModule), canActivate: [AuthGuardService] },
  { path: 'popover', loadChildren: () => import('./popover/popover.module').then(m => m.PopoverPageModule), canActivate: [AuthGuardService] },
  { path: 'tag-modal/:groupTags', loadChildren: () => import('./tag-modal/tag-modal.module').then(m => m.TagModalPageModule), canActivate: [AuthGuardService] },
  // { path: 'poll/:id', loadChildren: './poll/poll.module#PollPageModule', canActivate: [AuthGuardService] },
  { path: 'new-poll/:id', loadChildren: () => import('./new-poll/new-poll.module').then(m => m.NewPollPageModule), canActivate: [AuthGuardService] },
  { path: 'walkthrough', loadChildren: () => import('./walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule) },
  { path: 'getting-started', loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedPageModule) },
  // { path: 'new-resource/:id', loadChildren: './new-resource/new-resource.module#NewResourcePageModule', canActivate: [AuthGuardService] },
  // { path: 'resource/:id', loadChildren: './resource/resource.module#ResourcePageModule', canActivate: [AuthGuardService] },
  { path: 'review-modal', loadChildren: () => import('./review-modal/review-modal.module').then(m => m.ReviewModalPageModule), canActivate: [AuthGuardService] },
  // { path: 'event/:id', loadChildren: './event/event.module#EventPageModule', canActivate: [AuthGuardService] },
  { path: 'new-event/:id', loadChildren: () => import('./new-event/new-event.module').then(m => m.NewEventPageModule), canActivate: [AuthGuardService] },
  { path: 'new-post/:id', loadChildren: () => import('./new-post/new-post.module').then(m => m.NewPostPageModule), canActivate: [AuthGuardService] },
  { path: 'post/:id', loadChildren: () => import('./post/post.module').then(m => m.PostPageModule), canActivate: [AuthGuardService] },
  { path: 'reaction-list-modal', loadChildren: () => import('./reaction-list-modal/reaction-list-modal.module').then(m => m.ReactionListModalPageModule) },
  { path: 'new-resource/:id', loadChildren: () => import('./new-resources/new-resources.module').then(m => m.NewResourcesPageModule) },
  { path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedPageModule) },
  { path: 'user-profile-modal', loadChildren: () => import('./user-profile-modal/user-profile-modal.module').then(m => m.UserProfileModalPageModule) },
  { path: 'search-modal', loadChildren: () => import('./search-modal/search-modal.module').then(m => m.SearchModalPageModule) },
  { path: 'admin-categories', loadChildren: () => import('./admin-categories/admin-categories.module').then(m => m.AdminCategoriesPageModule) },
  { path: 'new-category-modal', loadChildren: () => import('./new-category-modal/new-category-modal.module').then(m => m.NewCategoryModalPageModule) },
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesPageModule) },
  { path: 'group-search', loadChildren: () => import('./group-search/group-search.module').then(m => m.GroupSearchPageModule) },
  { path: 'group-join/:id', loadChildren: () => import('./group-join/group-join.module').then(m => m.GroupJoinPageModule) },
  { path: 'feed-search', loadChildren: () => import('./feed-search/feed-search.module').then(m => m.FeedSearchPageModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
