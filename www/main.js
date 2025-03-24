(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth-guard.service */ 43072);




const routes = [{
  path: '',
  redirectTo: 'intro',
  pathMatch: 'full'
}, {
  path: 'app',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 20637)).then(m => m.TabsPageModule)
}, {
  path: 'tabs',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 20637)).then(m => m.TabsPageModule)
}, {
  path: 'intro',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_intro_intro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./intro/intro.module */ 76291)).then(m => m.IntroPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'friends',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_friends_friends_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./friends/friends.module */ 95487)).then(m => m.FriendsPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'groupinfo/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_groupinfo_groupinfo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./groupinfo/groupinfo.module */ 85063)).then(m => m.GroupinfoPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'groups',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_groups_groups_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./groups/groups.module */ 68953)).then(m => m.GroupsPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 91307)).then(m => m.LoginPageModule)
}, {
  path: 'imagemodal',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./imagemodal/imagemodal.module */ 68317)).then(m => m.ImagemodalPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'message/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_message_message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./message/message.module */ 82471)).then(m => m.MessagePageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'messages',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_messages_messages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./messages/messages.module */ 97477)).then(m => m.MessagesPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'newgroup',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_newgroup_newgroup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./newgroup/newgroup.module */ 63367)).then(m => m.NewgroupPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'blockedlist',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_blockedlist_blockedlist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blockedlist/blockedlist.module */ 17539)).then(m => m.BlockedlistPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'register',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 26087)).then(m => m.RegisterPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'userinfo/:id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_userinfo_userinfo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./userinfo/userinfo.module */ 15247)).then(m => m.UserinfoPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'profile/:id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4219)).then(m => m.ProfilePageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'forgot',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_forgot_forgot_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forgot/forgot.module */ 50447)).then(m => m.ForgotPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'new-poll/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_new-poll_new-poll_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./new-poll/new-poll.module */ 59005)).then(m => m.NewPollPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'new-event/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_new-event_new-event_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./new-event/new-event.module */ 75519)).then(m => m.NewEventPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'new-post/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_new-post_new-post_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./new-post/new-post.module */ 31147)).then(m => m.NewPostPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'post/:id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_components_emoji-picker_emoji-picker_component_ts-src_app_services_bookmark_s-0c5c8c"), __webpack_require__.e("src_app_post_post_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./post/post.module */ 26941)).then(m => m.PostPageModule),
  canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
}, {
  path: 'reaction-list-modal',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./reaction-list-modal/reaction-list-modal.module */ 1411)).then(m => m.ReactionListModalPageModule)
}, {
  path: 'feed',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_components_emoji-picker_emoji-picker_component_ts-src_app_services_bookmark_s-0c5c8c"), __webpack_require__.e("src_app_feed_feed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./feed/feed.module */ 85105)).then(m => m.FeedPageModule)
}, {
  path: 'user-profile-modal',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./user-profile-modal/user-profile-modal.module */ 89547)).then(m => m.UserProfileModalPageModule)
}, {
  path: 'search-modal',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_search-modal_search-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search-modal/search-modal.module */ 37789)).then(m => m.SearchModalPageModule)
}, {
  path: 'admin-categories',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin-categories_admin-categories_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-categories/admin-categories.module */ 54369)).then(m => m.AdminCategoriesPageModule)
}, {
  path: 'new-category-modal',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_new-category-modal_new-category-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./new-category-modal/new-category-modal.module */ 32391)).then(m => m.NewCategoryModalPageModule)
}, {
  path: 'group-search',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_group-search_group-search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./group-search/group-search.module */ 44049)).then(m => m.GroupSearchPageModule)
}, {
  path: 'group-join/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_group-join_group-join_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./group-join/group-join.module */ 98965)).then(m => m.GroupJoinPageModule)
}, {
  path: 'notifications',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 18307)).then(m => m.NotificationsPageModule)
}, {
  path: 'intro',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_intro_intro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./intro/intro.module */ 76291)).then(m => m.IntroPageModule)
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 61584);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 37282);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/status-bar */ 19153);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 60850);










let AppComponent = class AppComponent {
  constructor(platform, router, afAuth, storage) {
    this.platform = platform;
    this.router = router;
    this.afAuth = afAuth;
    this.storage = storage;
    this.initializeApp();
  }
  initializeApp() {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.platform.ready().then( /*#__PURE__*/(0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          if (_this.platform.is('capacitor')) {
            // Use Style.Dark instead of 'dark'
            yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setStyle({
              style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.Style.Dark
            });
            yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setBackgroundColor({
              color: '#3880ff'
            });
          }
          yield _this.storage.create();
          const introCompleted = yield _this.storage.get('introCompleted');
          if (!introCompleted) {
            _this.router.navigate(['/intro']);
          }
        } catch (err) {
          console.warn('Status Bar not available:', err);
        }
        _this.platform.backButton.subscribe(() => null);
        _this.afAuth.onAuthStateChanged(user => {
          _this.router.navigateByUrl('/app/tabs/tab1', {
            skipLocationChange: true,
            replaceUrl: true
          });
        });
      }));
    })();
  }
  // Example methods for status bar control
  hideStatusBar() {
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.hide();
      } catch (err) {
        console.warn('Error hiding status bar:', err);
      }
    })();
  }
  showStatusBar() {
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.show();
      } catch (err) {
        console.warn('Error showing status bar:', err);
      }
    })();
  }
  setStatusBarColor(color) {
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setBackgroundColor({
          color
        });
      } catch (err) {
        console.warn('Error setting status bar color:', err);
      }
    })();
  }
  // Example method to toggle status bar style
  toggleStatusBarStyle(isDark) {
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setStyle({
          style: isDark ? _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.Style.Dark : _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.Style.Light
        });
      } catch (err) {
        console.warn('Error setting status bar style:', err);
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
  }, {
    type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);


/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   FileReaderA: () => (/* binding */ FileReaderA)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 78205);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/storage-angular */ 26817);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat */ 48942);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/storage */ 64914);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 47669);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/app */ 82945);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ 31159);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/auth */ 99082);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _feed_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed/filter.component */ 96344);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/share.module */ 53952);
/* harmony import */ var _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imagemodal/imagemodal.module */ 68317);
/* harmony import */ var _user_profile_modal_user_profile_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile-modal/user-profile-modal.module */ 89547);
/* harmony import */ var _reaction_list_modal_reaction_list_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reaction-list-modal/reaction-list-modal.module */ 1411);
/* harmony import */ var _components_phone_auth_phone_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/phone-auth/phone-auth.module */ 60784);





// Ionic imports


// Firebase imports - Use compat version for better compatibility








// Components and Modules








let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _feed_filter_component__WEBPACK_IMPORTED_MODULE_3__.FilterComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.HammerModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot({
    mode: 'md'
  }),
  // Firebase imports
  _angular_fire_compat__WEBPACK_IMPORTED_MODULE_13__.AngularFireModule.initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.firebase), _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_14__.AngularFirestoreModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__.AngularFireStorageModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__.IonicStorageModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _services_share_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_5__.ImagemodalPageModule, _reaction_list_modal_reaction_list_modal_module__WEBPACK_IMPORTED_MODULE_7__.ReactionListModalPageModule, _user_profile_modal_user_profile_modal_module__WEBPACK_IMPORTED_MODULE_6__.UserProfileModalPageModule, _components_phone_auth_phone_auth_module__WEBPACK_IMPORTED_MODULE_8__.PhoneAuthComponentModule],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicRouteStrategy
  }, (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.initializeApp)(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.firebase)), (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__.getAuth)()), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__.getFirestore)())],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
})], AppModule);

// Keep your FileReader extension if needed
class FileReaderA extends window.FileReader {
  constructor() {
    super();
    const zoneOriginalInstance = this['__zone_symbol__originalInstance'];
    return zoneOriginalInstance || this;
  }
}
window.FileReader = FileReaderA;

/***/ }),

/***/ 93933:
/*!***************************************************************!*\
  !*** ./src/app/components/phone-auth/phone-auth.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneAuthComponent: () => (/* binding */ PhoneAuthComponent)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _phone_auth_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-auth.component.html?ngResource */ 77471);
/* harmony import */ var _phone_auth_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone-auth.component.scss?ngResource */ 47267);
/* harmony import */ var _phone_auth_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phone_auth_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/app */ 3602);




// src/app/components/phone-auth/phone-auth.component.ts





let PhoneAuthComponent = class PhoneAuthComponent {
  constructor(modalCtrl, formBuilder, afAuth) {
    this.modalCtrl = modalCtrl;
    this.formBuilder = formBuilder;
    this.afAuth = afAuth;
    this.showOtpInput = false;
    this.loading = false;
    this.confirmationResult = null;
    this.phoneForm = this.formBuilder.group({
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]{10}$')]]
    });
    this.otpForm = this.formBuilder.group({
      otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]{6}$')]]
    });
  }
  ngOnInit() {
    // Wait for the DOM to be ready
    setTimeout(() => {
      this.recaptchaVerifier = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.RecaptchaVerifier('recaptcha-container', {
        size: 'normal',
        callback: () => {
          this.loading = false;
        },
        'expired-callback': () => {
          this.loading = true;
          this.recaptchaVerifier.clear();
          this.initRecaptcha();
        }
      });
      this.recaptchaVerifier.render();
    }, 1000);
  }
  ngOnDestroy() {
    if (this.recaptchaVerifier) {
      this.recaptchaVerifier.clear();
    }
  }
  initRecaptcha() {
    this.recaptchaVerifier = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.RecaptchaVerifier('recaptcha-container', {
      size: 'normal',
      callback: () => {
        this.loading = false;
      },
      'expired-callback': () => {
        this.loading = true;
        this.recaptchaVerifier.clear();
        this.initRecaptcha();
      }
    });
    this.recaptchaVerifier.render();
  }
  sendOTP() {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.phoneForm.valid) {
        _this.loading = true;
        try {
          const phoneNumber = '+1' + _this.phoneForm.get('phoneNumber').value; // Adjust country code
          _this.confirmationResult = yield _this.afAuth.signInWithPhoneNumber(phoneNumber, _this.recaptchaVerifier);
          _this.showOtpInput = true;
        } catch (error) {
          console.error('Error sending OTP:', error);
        } finally {
          _this.loading = false;
        }
      }
    })();
  }
  verifyOTP() {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.otpForm.valid && _this2.confirmationResult) {
        _this2.loading = true;
        try {
          const otp = _this2.otpForm.get('otp').value;
          const result = yield _this2.confirmationResult.confirm(otp);
          if (result.user) {
            _this2.modalCtrl.dismiss(null, 'success');
          }
        } catch (error) {
          console.error('Error verifying OTP:', error);
        } finally {
          _this2.loading = false;
        }
      }
    })();
  }
  dismiss() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
  }];
};
PhoneAuthComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-phone-auth',
  template: _phone_auth_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_phone_auth_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PhoneAuthComponent);


/***/ }),

/***/ 60784:
/*!************************************************************!*\
  !*** ./src/app/components/phone-auth/phone-auth.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneAuthComponentModule: () => (/* binding */ PhoneAuthComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _phone_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-auth.component */ 93933);





let PhoneAuthComponentModule = class PhoneAuthComponentModule {};
PhoneAuthComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_phone_auth_component__WEBPACK_IMPORTED_MODULE_0__.PhoneAuthComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule],
  exports: [_phone_auth_component__WEBPACK_IMPORTED_MODULE_0__.PhoneAuthComponent]
})], PhoneAuthComponentModule);


/***/ }),

/***/ 96344:
/*!******************************************!*\
  !*** ./src/app/feed/filter.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterComponent: () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts_css_ngResource_Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZmlsdGVyLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDIwcHg7CiAgICAgIHdpZHRoOiAzMjBweDsKICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5maWx0ZXItaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwoKICAgICAgaDQgewogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgfQoKICAgICAgaW9uLWJ1dHRvbiB7CiAgICAgICAgaGVpZ2h0OiAzMnB4OwogICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4OwogICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDsKICAgICAgICBmb250LXNpemU6IDEwcHg7CiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICBvcGFjaXR5OiAwLjU7CiAgICAgICAgfQoKICAgICAgICBpb24taWNvbiB7CiAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmZpbHRlci1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKCiAgICAgIC5zZWN0aW9uLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OwoKICAgICAgICAudGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7CiAgICAgICAgfQoKICAgICAgICAuc3VidGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmNvbnRlbnQtdHlwZXMgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOwogICAgICBnYXA6IDhweDsKCiAgICAgIC5maWx0ZXItY2hpcCB7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxOwogICAgICAgIHBhZGRpbmc6IDEycHggOHB4OwogICAgICAgIAogICAgICAgIGlvbi1pY29uIHsKICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAuZ3JvdXAtc2VhcmNoIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsKCiAgICAgIC5ncm91cC1zZWFyY2hiYXIgewogICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOwogICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTsKICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgICAKICAgICAgICAuc2VhcmNoYmFyLWlucHV0IHsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCi5ncm91cC1jaGlwcyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIGdhcDogOHB4OwogIG1heC1oZWlnaHQ6IDIwMHB4OwogIG92ZXJmbG93LXk6IGF1dG87CiAgcGFkZGluZy1yaWdodDogNHB4OwoKICAmLmhhcy1zZWFyY2ggewogICAgbWF4LWhlaWdodDogMTUwcHg7CiAgfQoKICAuZmlsdGVyLWNoaXAgewogICAgcGFkZGluZzogMTBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwoKICAgICYuYWN0aXZlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAKICAgICAgLmdyb3VwLWljb24gewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgIAogICAgICAgIHNwYW4gewogICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1pY29uIHsKICAgICAgd2lkdGg6IDI4cHg7CiAgICAgIGhlaWdodDogMjhweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OwogICAgICBvdmVyZmxvdzogaGlkZGVuOyAKCiAgICAgIGltZyB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsKICAgICAgfQoKICAgICAgc3BhbiB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1uYW1lIHsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CgogICAgLmNoZWNrLWljb24gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNHB4OwogICAgICByaWdodDogNHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAmOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC45OwogICAgfQoKICAgICY6YWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsKICAgIH0KICB9Cn0KCgogICAgLmZpbHRlci1jaGlwIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDRweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAgIAogICAgICAgIGlvbi1pY29uLCBzcGFuIHsKICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICAgICAgfQoKICAgICAgICAuZ3JvdXAtbmFtZSB7CiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsKICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBsaW5lLWhlaWdodDogMS4yOwogICAgICB9CgogICAgICAuY2hlY2staWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNHB4OwogICAgICAgIHJpZ2h0OiA0cHg7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7CiAgICAgIH0KCiAgICAgICY6YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgIH0KICAgIH0KCiAgICAuZmlsdGVyLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIAogICAgICBpb24tYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgaGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLmZpbHRlci1jaGlwcy5jb250ZW50LXR5cGVzIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiA4cHg7CgogIC5maWx0ZXItY2hpcCB7CiAgICBwYWRkaW5nOiA4cHggNHB4OwogICAgCiAgICBpb24taWNvbiB7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsgCiAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgCiAgICB9CgogICAgc3BhbiB7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgCiAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7CiAgICB9CiAgfQp9CgoKICAgIC8vIERhcmsgbW9kZSBhZGp1c3RtZW50cwogICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgICAuZmlsdGVyLWNoaXAgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSk7CgogICAgICAgICYuYWN0aXZlIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1uYW1lIHsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAgIH0KCiAgICAgICAgLmdyb3VwLWljb24gewogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuZ3JvdXAtc2VhcmNoYmFyIHsKICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDsKICAgICAgfQogICAgfQogIA_3D_3D_Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/feed/filter.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZmlsdGVyLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDIwcHg7CiAgICAgIHdpZHRoOiAzMjBweDsKICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5maWx0ZXItaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwoKICAgICAgaDQgewogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgfQoKICAgICAgaW9uLWJ1dHRvbiB7CiAgICAgICAgaGVpZ2h0OiAzMnB4OwogICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4OwogICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDsKICAgICAgICBmb250LXNpemU6IDEwcHg7CiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICBvcGFjaXR5OiAwLjU7CiAgICAgICAgfQoKICAgICAgICBpb24taWNvbiB7CiAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmZpbHRlci1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKCiAgICAgIC5zZWN0aW9uLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OwoKICAgICAgICAudGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7CiAgICAgICAgfQoKICAgICAgICAuc3VidGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmNvbnRlbnQtdHlwZXMgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOwogICAgICBnYXA6IDhweDsKCiAgICAgIC5maWx0ZXItY2hpcCB7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxOwogICAgICAgIHBhZGRpbmc6IDEycHggOHB4OwogICAgICAgIAogICAgICAgIGlvbi1pY29uIHsKICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAuZ3JvdXAtc2VhcmNoIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsKCiAgICAgIC5ncm91cC1zZWFyY2hiYXIgewogICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOwogICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTsKICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgICAKICAgICAgICAuc2VhcmNoYmFyLWlucHV0IHsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCi5ncm91cC1jaGlwcyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIGdhcDogOHB4OwogIG1heC1oZWlnaHQ6IDIwMHB4OwogIG92ZXJmbG93LXk6IGF1dG87CiAgcGFkZGluZy1yaWdodDogNHB4OwoKICAmLmhhcy1zZWFyY2ggewogICAgbWF4LWhlaWdodDogMTUwcHg7CiAgfQoKICAuZmlsdGVyLWNoaXAgewogICAgcGFkZGluZzogMTBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwoKICAgICYuYWN0aXZlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAKICAgICAgLmdyb3VwLWljb24gewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgIAogICAgICAgIHNwYW4gewogICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1pY29uIHsKICAgICAgd2lkdGg6IDI4cHg7CiAgICAgIGhlaWdodDogMjhweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OwogICAgICBvdmVyZmxvdzogaGlkZGVuOyAKCiAgICAgIGltZyB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsKICAgICAgfQoKICAgICAgc3BhbiB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1uYW1lIHsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CgogICAgLmNoZWNrLWljb24gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNHB4OwogICAgICByaWdodDogNHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAmOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC45OwogICAgfQoKICAgICY6YWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsKICAgIH0KICB9Cn0KCgogICAgLmZpbHRlci1jaGlwIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDRweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAgIAogICAgICAgIGlvbi1pY29uLCBzcGFuIHsKICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICAgICAgfQoKICAgICAgICAuZ3JvdXAtbmFtZSB7CiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsKICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBsaW5lLWhlaWdodDogMS4yOwogICAgICB9CgogICAgICAuY2hlY2staWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNHB4OwogICAgICAgIHJpZ2h0OiA0cHg7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7CiAgICAgIH0KCiAgICAgICY6YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgIH0KICAgIH0KCiAgICAuZmlsdGVyLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIAogICAgICBpb24tYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgaGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLmZpbHRlci1jaGlwcy5jb250ZW50LXR5cGVzIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiA4cHg7CgogIC5maWx0ZXItY2hpcCB7CiAgICBwYWRkaW5nOiA4cHggNHB4OwogICAgCiAgICBpb24taWNvbiB7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsgCiAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgCiAgICB9CgogICAgc3BhbiB7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgCiAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7CiAgICB9CiAgfQp9CgoKICAgIC8vIERhcmsgbW9kZSBhZGp1c3RtZW50cwogICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgICAuZmlsdGVyLWNoaXAgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSk7CgogICAgICAgICYuYWN0aXZlIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1uYW1lIHsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAgIH0KCiAgICAgICAgLmdyb3VwLWljb24gewogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuZ3JvdXAtc2VhcmNoYmFyIHsKICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDsKICAgICAgfQogICAgfQogIA%3D%3D!./src/app/feed/filter.component.ts */ 98226);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts_css_ngResource_Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZmlsdGVyLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDIwcHg7CiAgICAgIHdpZHRoOiAzMjBweDsKICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5maWx0ZXItaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwoKICAgICAgaDQgewogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgfQoKICAgICAgaW9uLWJ1dHRvbiB7CiAgICAgICAgaGVpZ2h0OiAzMnB4OwogICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4OwogICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDsKICAgICAgICBmb250LXNpemU6IDEwcHg7CiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICBvcGFjaXR5OiAwLjU7CiAgICAgICAgfQoKICAgICAgICBpb24taWNvbiB7CiAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmZpbHRlci1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKCiAgICAgIC5zZWN0aW9uLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OwoKICAgICAgICAudGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7CiAgICAgICAgfQoKICAgICAgICAuc3VidGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmNvbnRlbnQtdHlwZXMgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOwogICAgICBnYXA6IDhweDsKCiAgICAgIC5maWx0ZXItY2hpcCB7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxOwogICAgICAgIHBhZGRpbmc6IDEycHggOHB4OwogICAgICAgIAogICAgICAgIGlvbi1pY29uIHsKICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAuZ3JvdXAtc2VhcmNoIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsKCiAgICAgIC5ncm91cC1zZWFyY2hiYXIgewogICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOwogICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTsKICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgICAKICAgICAgICAuc2VhcmNoYmFyLWlucHV0IHsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCi5ncm91cC1jaGlwcyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIGdhcDogOHB4OwogIG1heC1oZWlnaHQ6IDIwMHB4OwogIG92ZXJmbG93LXk6IGF1dG87CiAgcGFkZGluZy1yaWdodDogNHB4OwoKICAmLmhhcy1zZWFyY2ggewogICAgbWF4LWhlaWdodDogMTUwcHg7CiAgfQoKICAuZmlsdGVyLWNoaXAgewogICAgcGFkZGluZzogMTBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwoKICAgICYuYWN0aXZlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAKICAgICAgLmdyb3VwLWljb24gewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgIAogICAgICAgIHNwYW4gewogICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1pY29uIHsKICAgICAgd2lkdGg6IDI4cHg7CiAgICAgIGhlaWdodDogMjhweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OwogICAgICBvdmVyZmxvdzogaGlkZGVuOyAKCiAgICAgIGltZyB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsKICAgICAgfQoKICAgICAgc3BhbiB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1uYW1lIHsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CgogICAgLmNoZWNrLWljb24gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNHB4OwogICAgICByaWdodDogNHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAmOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC45OwogICAgfQoKICAgICY6YWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsKICAgIH0KICB9Cn0KCgogICAgLmZpbHRlci1jaGlwIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDRweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAgIAogICAgICAgIGlvbi1pY29uLCBzcGFuIHsKICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICAgICAgfQoKICAgICAgICAuZ3JvdXAtbmFtZSB7CiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsKICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBsaW5lLWhlaWdodDogMS4yOwogICAgICB9CgogICAgICAuY2hlY2staWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNHB4OwogICAgICAgIHJpZ2h0OiA0cHg7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7CiAgICAgIH0KCiAgICAgICY6YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgIH0KICAgIH0KCiAgICAuZmlsdGVyLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIAogICAgICBpb24tYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgaGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLmZpbHRlci1jaGlwcy5jb250ZW50LXR5cGVzIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiA4cHg7CgogIC5maWx0ZXItY2hpcCB7CiAgICBwYWRkaW5nOiA4cHggNHB4OwogICAgCiAgICBpb24taWNvbiB7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsgCiAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgCiAgICB9CgogICAgc3BhbiB7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgCiAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7CiAgICB9CiAgfQp9CgoKICAgIC8vIERhcmsgbW9kZSBhZGp1c3RtZW50cwogICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgICAuZmlsdGVyLWNoaXAgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSk7CgogICAgICAgICYuYWN0aXZlIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1uYW1lIHsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAgIH0KCiAgICAgICAgLmdyb3VwLWljb24gewogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuZ3JvdXAtc2VhcmNoYmFyIHsKICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDsKICAgICAgfQogICAgfQogIA_3D_3D_Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts_css_ngResource_Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZmlsdGVyLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDIwcHg7CiAgICAgIHdpZHRoOiAzMjBweDsKICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5maWx0ZXItaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwoKICAgICAgaDQgewogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgfQoKICAgICAgaW9uLWJ1dHRvbiB7CiAgICAgICAgaGVpZ2h0OiAzMnB4OwogICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4OwogICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDsKICAgICAgICBmb250LXNpemU6IDEwcHg7CiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICBvcGFjaXR5OiAwLjU7CiAgICAgICAgfQoKICAgICAgICBpb24taWNvbiB7CiAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmZpbHRlci1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKCiAgICAgIC5zZWN0aW9uLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OwoKICAgICAgICAudGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7CiAgICAgICAgfQoKICAgICAgICAuc3VidGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmNvbnRlbnQtdHlwZXMgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOwogICAgICBnYXA6IDhweDsKCiAgICAgIC5maWx0ZXItY2hpcCB7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxOwogICAgICAgIHBhZGRpbmc6IDEycHggOHB4OwogICAgICAgIAogICAgICAgIGlvbi1pY29uIHsKICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAuZ3JvdXAtc2VhcmNoIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsKCiAgICAgIC5ncm91cC1zZWFyY2hiYXIgewogICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOwogICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTsKICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgICAKICAgICAgICAuc2VhcmNoYmFyLWlucHV0IHsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCi5ncm91cC1jaGlwcyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIGdhcDogOHB4OwogIG1heC1oZWlnaHQ6IDIwMHB4OwogIG92ZXJmbG93LXk6IGF1dG87CiAgcGFkZGluZy1yaWdodDogNHB4OwoKICAmLmhhcy1zZWFyY2ggewogICAgbWF4LWhlaWdodDogMTUwcHg7CiAgfQoKICAuZmlsdGVyLWNoaXAgewogICAgcGFkZGluZzogMTBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwoKICAgICYuYWN0aXZlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAKICAgICAgLmdyb3VwLWljb24gewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgIAogICAgICAgIHNwYW4gewogICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1pY29uIHsKICAgICAgd2lkdGg6IDI4cHg7CiAgICAgIGhlaWdodDogMjhweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OwogICAgICBvdmVyZmxvdzogaGlkZGVuOyAKCiAgICAgIGltZyB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsKICAgICAgfQoKICAgICAgc3BhbiB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1uYW1lIHsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CgogICAgLmNoZWNrLWljb24gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNHB4OwogICAgICByaWdodDogNHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAmOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC45OwogICAgfQoKICAgICY6YWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsKICAgIH0KICB9Cn0KCgogICAgLmZpbHRlci1jaGlwIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDRweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAgIAogICAgICAgIGlvbi1pY29uLCBzcGFuIHsKICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICAgICAgfQoKICAgICAgICAuZ3JvdXAtbmFtZSB7CiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsKICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBsaW5lLWhlaWdodDogMS4yOwogICAgICB9CgogICAgICAuY2hlY2staWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNHB4OwogICAgICAgIHJpZ2h0OiA0cHg7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7CiAgICAgIH0KCiAgICAgICY6YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgIH0KICAgIH0KCiAgICAuZmlsdGVyLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIAogICAgICBpb24tYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgaGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLmZpbHRlci1jaGlwcy5jb250ZW50LXR5cGVzIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiA4cHg7CgogIC5maWx0ZXItY2hpcCB7CiAgICBwYWRkaW5nOiA4cHggNHB4OwogICAgCiAgICBpb24taWNvbiB7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsgCiAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgCiAgICB9CgogICAgc3BhbiB7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgCiAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7CiAgICB9CiAgfQp9CgoKICAgIC8vIERhcmsgbW9kZSBhZGp1c3RtZW50cwogICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgICAuZmlsdGVyLWNoaXAgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSk7CgogICAgICAgICYuYWN0aXZlIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1uYW1lIHsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAgIH0KCiAgICAgICAgLmdyb3VwLWljb24gewogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuZ3JvdXAtc2VhcmNoYmFyIHsKICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDsKICAgICAgfQogICAgfQogIA_3D_3D_Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ 28490);


// filter.component.ts




let FilterComponent = class FilterComponent {
  constructor(popoverCtrl, afAuth, dataProvider) {
    this.popoverCtrl = popoverCtrl;
    this.afAuth = afAuth;
    this.dataProvider = dataProvider;
    this.selectedTypes = ['all'];
    this.groupSearchTerm = '';
    this.groups = [];
    this.filteredGroups = [...this.groups];
  }
  ionViewWillEnter() {
    console.log('Entering feed view');
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      // Get groups
      this.dataProvider.getGroups().snapshotChanges().subscribe(groups => {
        this.groups = [];
        groups.forEach(element => {
          let group = element.payload.doc.data();
          group.key = element.payload.doc.id;
          if (group.members.some(e => e === this.loggedInUserId)) {
            group.isUserMember = true;
          } else {
            group.isUserMember = false;
          }
          this.groups.push(group);
        });
        this.filteredGroups = this.groups; // Initialize filtered groups
      });
    });
  }
  filterGroups(event) {
    if (event && event.target.value === '') this.groupSearchTerm = '';
    if (!this.groupSearchTerm) {
      this.filteredGroups = [...this.groups];
      return;
    }
    const searchTerm = this.groupSearchTerm.toLowerCase();
    this.filteredGroups = this.groups.filter(group => group.name.toLowerCase().includes(searchTerm));
  }
  onSearchClear() {
    this.groupSearchTerm = '';
    this.filterGroups();
  }
  selectFilter(type) {
    if (type === 'all') {
      // If 'all' is selected, clear other selections
      this.selectedTypes = ['all'];
      return;
    }
    // Remove 'all' if it exists when selecting other types
    this.selectedTypes = this.selectedTypes.filter(t => t !== 'all');
    // Toggle the selected type
    if (this.selectedTypes.includes(type)) {
      this.selectedTypes = this.selectedTypes.filter(t => t !== type);
      // If no types selected, default back to 'all'
      if (this.selectedTypes.length === 0) {
        this.selectedTypes = ['all'];
      }
    } else {
      this.selectedTypes.push(type);
    }
  }
  toggleGroup(group) {
    group.selected = !group.selected;
  }
  getSelectedGroupsCount() {
    return this.groups.filter(g => g.selected).length;
  }
  hasActiveFilters() {
    return this.selectedTypes.length > 1 || this.selectedTypes.length === 1 && this.selectedTypes[0] !== 'all' || this.getSelectedGroupsCount() > 0;
  }
  resetFilters() {
    this.selectedTypes = ['all'];
    this.groups.forEach(g => g.selected = false);
    this.groupSearchTerm = '';
    this.filterGroups();
  }
  applyFilters() {
    const selectedGroups = this.groups.filter(g => g.selected).map(g => ({
      id: g.id,
      name: g.name
    }));
    this.popoverCtrl.dismiss({
      types: this.selectedTypes,
      groups: selectedGroups
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService
  }];
};
FilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-filter',
  template: `
    <div class="filter-container">
      <!-- Header -->
      <div class="filter-header">
        <h4>Filter Content</h4>
        <ion-button fill="clear" size="small" (click)="resetFilters()" 
                    [disabled]="!hasActiveFilters()">
          <ion-icon slot="start" name="refresh-outline"></ion-icon>
          Reset
        </ion-button>
      </div>

      <!-- Content Type Section -->
        <!-- In your filter chips section -->
        <div class="filter-chips content-types">
        <div class="filter-chip" 
            [class.active]="selectedTypes.includes('all')"
            (click)="selectFilter('all')">
            <ion-icon name="apps-outline"></ion-icon>
            <span>All</span>
        </div>
        
        <div class="filter-chip" 
            [class.active]="selectedTypes.includes('posts')"
            (click)="selectFilter('posts')">
            <ion-icon name="newspaper-outline"></ion-icon>
            <span>Posts</span>
        </div>
        
        <div class="filter-chip" 
            [class.active]="selectedTypes.includes('events')"
            (click)="selectFilter('events')">
            <ion-icon name="calendar-outline"></ion-icon>
            <span>Events</span>
        </div>
        
        <div class="filter-chip" 
            [class.active]="selectedTypes.includes('polls')"
            (click)="selectFilter('polls')">
            <ion-icon name="document-outline"></ion-icon>
            <span>Polls</span>
        </div>
        </div>

        <br/>
      <!-- Groups Section -->
      <div class="filter-section">
        <div class="section-header">
          <span class="title">Groups</span>
          <span class="subtitle" *ngIf="getSelectedGroupsCount() > 0">
            {{getSelectedGroupsCount()}} selected
          </span>
        </div>
        
        <!-- Search Groups -->
        <div class="group-search">
          <ion-searchbar placeholder="Search groups" 
                        mode="ios"
                        [(ngModel)]="groupSearchTerm"
                        (ionInput)="filterGroups($event)"
                        (ionClear)="onSearchClear()"
                        class="group-searchbar">
          </ion-searchbar>
        </div>

        <!-- Groups Grid -->
        <div class="group-chips" [class.has-search]="groupSearchTerm">
        <div class="filter-chip" 
            *ngFor="let group of filteredGroups"
            [class.active]="group.selected"
            (click)="toggleGroup(group)">
            <div class="group-icon" 
                [style.background-color]="!group.imageUrl ? group.color : 'transparent'">
            <img *ngIf="group.img" [src]="group.img" [alt]="group.name">
            <span *ngIf="!group.img">{{group.name.charAt(0)}}</span>
            </div>
            <span class="group-name">{{group.name}}</span>
            <ion-icon name="checkmark" 
                    class="check-icon"
                    *ngIf="group.selected">
            </ion-icon>
        </div>
        </div>

      </div>

      <!-- Apply Button -->
      <div class="filter-actions">
        <ion-button expand="block" 
                    (click)="applyFilters()"
                    [disabled]="!hasActiveFilters()">
          Apply Filters
        </ion-button>
      </div>
    </div>
  `,
  styles: [(_Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts_css_ngResource_Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZmlsdGVyLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDIwcHg7CiAgICAgIHdpZHRoOiAzMjBweDsKICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5maWx0ZXItaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwoKICAgICAgaDQgewogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgfQoKICAgICAgaW9uLWJ1dHRvbiB7CiAgICAgICAgaGVpZ2h0OiAzMnB4OwogICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4OwogICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDsKICAgICAgICBmb250LXNpemU6IDEwcHg7CiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICBvcGFjaXR5OiAwLjU7CiAgICAgICAgfQoKICAgICAgICBpb24taWNvbiB7CiAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmZpbHRlci1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKCiAgICAgIC5zZWN0aW9uLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OwoKICAgICAgICAudGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7CiAgICAgICAgfQoKICAgICAgICAuc3VidGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmNvbnRlbnQtdHlwZXMgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOwogICAgICBnYXA6IDhweDsKCiAgICAgIC5maWx0ZXItY2hpcCB7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxOwogICAgICAgIHBhZGRpbmc6IDEycHggOHB4OwogICAgICAgIAogICAgICAgIGlvbi1pY29uIHsKICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAuZ3JvdXAtc2VhcmNoIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsKCiAgICAgIC5ncm91cC1zZWFyY2hiYXIgewogICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOwogICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTsKICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgICAKICAgICAgICAuc2VhcmNoYmFyLWlucHV0IHsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCi5ncm91cC1jaGlwcyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIGdhcDogOHB4OwogIG1heC1oZWlnaHQ6IDIwMHB4OwogIG92ZXJmbG93LXk6IGF1dG87CiAgcGFkZGluZy1yaWdodDogNHB4OwoKICAmLmhhcy1zZWFyY2ggewogICAgbWF4LWhlaWdodDogMTUwcHg7CiAgfQoKICAuZmlsdGVyLWNoaXAgewogICAgcGFkZGluZzogMTBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwoKICAgICYuYWN0aXZlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAKICAgICAgLmdyb3VwLWljb24gewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgIAogICAgICAgIHNwYW4gewogICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1pY29uIHsKICAgICAgd2lkdGg6IDI4cHg7CiAgICAgIGhlaWdodDogMjhweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OwogICAgICBvdmVyZmxvdzogaGlkZGVuOyAKCiAgICAgIGltZyB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsKICAgICAgfQoKICAgICAgc3BhbiB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1uYW1lIHsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CgogICAgLmNoZWNrLWljb24gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNHB4OwogICAgICByaWdodDogNHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAmOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC45OwogICAgfQoKICAgICY6YWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsKICAgIH0KICB9Cn0KCgogICAgLmZpbHRlci1jaGlwIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDRweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAgIAogICAgICAgIGlvbi1pY29uLCBzcGFuIHsKICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICAgICAgfQoKICAgICAgICAuZ3JvdXAtbmFtZSB7CiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsKICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBsaW5lLWhlaWdodDogMS4yOwogICAgICB9CgogICAgICAuY2hlY2staWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNHB4OwogICAgICAgIHJpZ2h0OiA0cHg7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7CiAgICAgIH0KCiAgICAgICY6YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgIH0KICAgIH0KCiAgICAuZmlsdGVyLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIAogICAgICBpb24tYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgaGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLmZpbHRlci1jaGlwcy5jb250ZW50LXR5cGVzIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiA4cHg7CgogIC5maWx0ZXItY2hpcCB7CiAgICBwYWRkaW5nOiA4cHggNHB4OwogICAgCiAgICBpb24taWNvbiB7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsgCiAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgCiAgICB9CgogICAgc3BhbiB7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgCiAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7CiAgICB9CiAgfQp9CgoKICAgIC8vIERhcmsgbW9kZSBhZGp1c3RtZW50cwogICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgICAuZmlsdGVyLWNoaXAgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSk7CgogICAgICAgICYuYWN0aXZlIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1uYW1lIHsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAgIH0KCiAgICAgICAgLmdyb3VwLWljb24gewogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuZ3JvdXAtc2VhcmNoYmFyIHsKICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDsKICAgICAgfQogICAgfQogIA_3D_3D_Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], FilterComponent);


/***/ }),

/***/ 68317:
/*!*************************************************!*\
  !*** ./src/app/imagemodal/imagemodal.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagemodalPageModule: () => (/* binding */ ImagemodalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _imagemodal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagemodal.page */ 39814);







const routes = [{
  path: '',
  component: _imagemodal_page__WEBPACK_IMPORTED_MODULE_0__.ImagemodalPage
}];
let ImagemodalPageModule = class ImagemodalPageModule {};
ImagemodalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_imagemodal_page__WEBPACK_IMPORTED_MODULE_0__.ImagemodalPage]
})], ImagemodalPageModule);


/***/ }),

/***/ 39814:
/*!***********************************************!*\
  !*** ./src/app/imagemodal/imagemodal.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagemodalPage: () => (/* binding */ ImagemodalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _imagemodal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagemodal.page.html?ngResource */ 64650);
/* harmony import */ var _imagemodal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagemodal.page.scss?ngResource */ 10702);
/* harmony import */ var _imagemodal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imagemodal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 37401);





let ImagemodalPage = class ImagemodalPage {
  constructor(modal) {
    this.modal = modal;
  }
  ngOnInit() {
    console.log(this.img);
  }
  close() {
    this.modal.dismiss();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
  }];
};
ImagemodalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-imagemodal',
  template: _imagemodal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_imagemodal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ImagemodalPage);


/***/ }),

/***/ 85501:
/*!***************************************!*\
  !*** ./src/app/pipes/conversation.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConversationPipe: () => (/* binding */ ConversationPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


let ConversationPipe = class ConversationPipe {
  // ConversationPipe
  // Filter conversation based on friend's name or username.
  transform(conversations, search) {
    if (!conversations) {
      return;
    } else if (!search) {
      return conversations;
    } else {
      let term = search.toLowerCase();
      return conversations.filter(conversation => conversation.friend.name.toLowerCase().indexOf(term) > -1 || conversation.friend.username.toLowerCase().indexOf(term) > -1);
    }
  }
};
ConversationPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'conversationFilter'
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ConversationPipe);


/***/ }),

/***/ 19006:
/*!*******************************!*\
  !*** ./src/app/pipes/date.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateFormatPipe: () => (/* binding */ DateFormatPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 39545);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);



let DateFormatPipe = class DateFormatPipe {
  transform(date, args) {
    return moment__WEBPACK_IMPORTED_MODULE_0__(new Date(date)).fromNow();
  }
};
DateFormatPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: 'DateFormat'
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], DateFormatPipe);


/***/ }),

/***/ 30766:
/*!*********************************!*\
  !*** ./src/app/pipes/friend.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FriendPipe: () => (/* binding */ FriendPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


let FriendPipe = class FriendPipe {
  // FriendPipe
  // Filter friend by name or username.
  transform(friends, search) {
    if (!friends) {
      return;
    } else if (!search) {
      return friends;
    } else {
      let term = search.toLowerCase();
      return friends.filter(friend => friend.name.toLowerCase().indexOf(term) > -1 || friend.username.toLowerCase().indexOf(term) > -1);
    }
  }
};
FriendPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'friendFilter'
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], FriendPipe);


/***/ }),

/***/ 88195:
/*!********************************!*\
  !*** ./src/app/pipes/group.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupPipe: () => (/* binding */ GroupPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


let GroupPipe = class GroupPipe {
  // GroupPipe
  // Filter group by name
  transform(groups, search) {
    if (!groups) {
      return;
    } else if (!search) {
      return groups;
    } else {
      let term = search.toLowerCase();
      return groups.filter(group => group.name.toLowerCase().indexOf(term) > -1);
    }
  }
};
GroupPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'groupFilter'
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], GroupPipe);


/***/ }),

/***/ 28219:
/*!*******************************!*\
  !*** ./src/app/pipes/poll.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PollPipe: () => (/* binding */ PollPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


let PollPipe = class PollPipe {
  // PollPipe
  // Filter poll by name
  transform(polls, search) {
    if (!polls) {
      return;
    } else if (!search) {
      return polls;
    } else {
      let term = search.toLowerCase();
      return polls.filter(poll => poll.description.toLowerCase().indexOf(term) > -1);
    }
  }
};
PollPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'pollFilter'
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], PollPipe);


/***/ }),

/***/ 62662:
/*!***********************************!*\
  !*** ./src/app/pipes/resource.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcePipe: () => (/* binding */ ResourcePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


let ResourcePipe = class ResourcePipe {
  // ResourcePipe
  // Filter resource by name
  transform(resources, search) {
    if (!resources) {
      return;
    } else if (!search) {
      return resources;
    } else {
      let term = search.toLowerCase();
      return resources.filter(resource => resource.name.toLowerCase().indexOf(term) > -1);
    }
  }
};
ResourcePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'resourceFilter'
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ResourcePipe);


/***/ }),

/***/ 60238:
/*!***************************************!*\
  !*** ./src/app/pipes/reverse.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReversePipe: () => (/* binding */ ReversePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


let ReversePipe = class ReversePipe {
  transform(value, ...args) {
    return value.slice().reverse();
  }
};
ReversePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'reverse'
})], ReversePipe);


/***/ }),

/***/ 33410:
/*!*********************************!*\
  !*** ./src/app/pipes/search.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPipe: () => (/* binding */ SearchPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


let SearchPipe = class SearchPipe {
  // SearchPipe
  // Filter user search results for name or username excluding the excludedIds.
  transform(accounts, data) {
    let excludedIds = data[0];
    var term = data[1];
    if (!accounts) {
      return;
    } else if (!excludedIds) {
      return accounts;
    } else if (excludedIds && !term) {
      return accounts.filter(account => excludedIds.indexOf(account.userId) == -1);
    } else {
      term = term.toLowerCase();
      return accounts.filter(account => excludedIds.indexOf(account.userId) == -1 && (account.name.toLowerCase().indexOf(term) > -1 || account.username.toLowerCase().indexOf(term) > -1));
    }
  }
};
SearchPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'searchFilter'
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], SearchPipe);


/***/ }),

/***/ 1411:
/*!*******************************************************************!*\
  !*** ./src/app/reaction-list-modal/reaction-list-modal.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactionListModalPageModule: () => (/* binding */ ReactionListModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reaction-list-modal.page */ 11980);







const routes = [{
  path: '',
  component: _reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_0__.ReactionListModalPage
}];
let ReactionListModalPageModule = class ReactionListModalPageModule {};
ReactionListModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_0__.ReactionListModalPage]
})], ReactionListModalPageModule);


/***/ }),

/***/ 11980:
/*!*****************************************************************!*\
  !*** ./src/app/reaction-list-modal/reaction-list-modal.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactionListModalPage: () => (/* binding */ ReactionListModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _reaction_list_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reaction-list-modal.page.html?ngResource */ 66323);
/* harmony import */ var _reaction_list_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reaction-list-modal.page.scss?ngResource */ 22092);
/* harmony import */ var _reaction_list_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reaction_list_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78205);





let ReactionListModalPage = class ReactionListModalPage {
  constructor(modal, navParam) {
    this.modal = modal;
    this.navParam = navParam;
    this.items = [];
    let r = this.navParam.data.reactions;
    this.items = Object.keys(r).map(function (e) {
      return r[e];
    });
  }
  ngOnInit() {}
  dismissModal() {
    this.modal.dismiss();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
  }];
};
ReactionListModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-reaction-list-modal',
  template: _reaction_list_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_reaction_list_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ReactionListModalPage);


/***/ }),

/***/ 43072:
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuardService: () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 28490);




let AuthGuardService = class AuthGuardService {
  constructor(router, dataService) {
    this.router = router;
    this.dataService = dataService;
  }
  canActivate(route) {
    console.log(route);
    const val = this.dataService.getFromStorageAsync('currentUser');
    console.log('val:' + val);
    if (val === null) {
      return false;
    } else {
      return true;
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
  }, {
    type: _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService
  }];
};
AuthGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AuthGuardService);


/***/ }),

/***/ 28490:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 60850);
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.service */ 62499);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/app */ 3602);








let DataService = class DataService {
  constructor(afAuth, storage, firestore, imageProvider) {
    this.afAuth = afAuth;
    this.storage = storage;
    this.firestore = firestore;
    this.imageProvider = imageProvider;
    this.initStorage();
  }
  // Get all users
  getUsers() {
    return this.firestore.collection('accounts');
  }
  // Get logged in user data
  getCurrentUser() {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loggedInUserId = yield _this.afAuth.currentUser.then(data => {
        return data.uid;
      });
      console.info('loggedInUserId', loggedInUserId);
      return _this.getUser(loggedInUserId);
    })();
  }
  getCurrentUserId() {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loggedInUserId = yield _this2.afAuth.currentUser.then(data => {
        return data.uid;
      });
      return loggedInUserId;
    })();
  }
  // Get user by their userId
  getUser(userId) {
    return this.firestore.doc('accounts/' + userId);
  }
  // Get requests given the userId.
  getRequests(userId) {
    return this.firestore.doc('requests/' + userId);
    // return this.afdb.object('/requests/' + userId);
  }
  // Get conversation given the conversationId.
  getConversation(conversationId) {
    return this.firestore.doc('conversations/' + conversationId);
    // return this.afdb.object('/conversations/' + conversationId);
  }
  // Get conversations of the current logged in user.
  getConversations(userId) {
    return this.firestore.doc('accounts/' + userId).collection('conversations');
    // return this.afdb.list('/accounts/' + this.afAuth.currentUser.uid + '/conversations');
  }
  // Get messages of the conversation given the Id.
  getConversationMessages(conversationId) {
    return this.firestore.doc('conversations/' + conversationId);
    // return this.afdb.object('/conversations/' + conversationId + '/messages');
  }
  // Get messages of the group given the Id.
  getGroupMessages(groupId) {
    return this.firestore.doc('groups/' + groupId).collection('messages');
    // return this.afdb.object('/groups/' + groupId + '/messages');
  }
  getGroup(groupId) {
    return this.firestore.doc('groups/' + groupId);
  }
  getBlockedLists() {
    var _this3 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loggedInUserId = yield _this3.afAuth.currentUser.then(data => {
        return data.uid;
      });
      return _this3.firestore.doc('accounts/' + loggedInUserId).collection('conversations').ref.where('blocked', '==', true);
    })();
  }
  // Get Polls of the logged in user.
  getPollDetails(pId) {
    return this.firestore.doc('posts/' + pId);
  }
  // Get Resource details of the logged in user.
  getResourceDetails(rId) {
    return this.firestore.doc('posts/' + rId);
  }
  // Get Post details of the logged in user.
  getPostDetails(pId) {
    return this.firestore.doc('posts/' + pId);
  }
  // Get Polls of the logged in user.
  getGroupMembers(groupId) {
    return this.firestore.doc('groups/' + groupId).collection('members');
    // return this.afdb.object('/groups/' + groupId + '/members/');
  }
  updatePollMembers(pollKey, pollData) {
    this.firestore.doc('posts/' + pollKey).update({
      data: pollData
    }).then(() => {
      const increment = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(pollKey).update({
        totalPollCount: increment
      });
    });
  }
  // Get all groups.
  getGroups() {
    return this.firestore.collection('groups');
  }
  addReports(userId, post) {
    const report = {
      reportedBy: userId,
      postId: post.key
    };
    return this.firestore.collection('reports').add(report);
  }
  addPost(post) {
    // add searchable data
    // Extract text from different fields
    let searchKeywords;
    const searchableText = [post.title || '', post.data?.message || ''].join(' ').toLowerCase();
    // Generate keywords including phrases
    const keywords = this.generateSearchKeywords(searchableText);
    if (post.type !== 'general') {
      const searchableText = `${post.title}`.toLowerCase();
    } else {
      const searchableText = `${post.title} ${post.data.message}`.toLowerCase();
    }
    post.searchableText = searchableText;
    post.searchKeywords = Array.from(new Set(keywords)); // Remove duplicates;
    return new Promise((resolve, reject) => {
      this.firestore.collection('posts').add(post).then(success => {
        let postId = success.id;
        // If there are images to upload
        if (post.postMediaImgs && post.postMediaImgs.length > 0) {
          this.imageProvider.uploadPostPhotos(postId, post.postMediaImgs).then(postMediaUrls => {
            post.postMediaImgs = [];
            if (postMediaUrls) {
              post.postMediaImgs = postMediaUrls;
              return this.firestore.doc('posts/' + postId).update({
                postMediaImgs: postMediaUrls
              });
            } else {
              return null;
            }
          }).then(() => {
            resolve(success);
          }).catch(error => {
            reject(error);
          });
        } else {
          // Important: Resolve immediately if no images to upload
          resolve(success);
        }
      }).catch(error => {
        reject(error);
      });
    });
  }
  generateSearchKeywords(text) {
    // Common English stop words that should be ignored in search
    let stopWords = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the', 'to', 'was', 'were', 'will', 'with', 'the', 'this', 'but', 'they', 'have', 'had', 'what', 'when', 'where', 'who', 'which', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very']);
    // Remove special characters and extra spaces
    const cleanText = text.replace(/[^\w\s]/gi, '') // Remove special characters
    .toLowerCase().trim();
    // Split into words
    const words = cleanText.split(/\s+/).filter(word => {
      return word.length > 0 && !stopWords.has(word) &&
      // Remove stop words
      !/^\d+$/.test(word); // Remove pure numbers
    });
    const keywords = new Set();
    words.forEach(word => {
      // Only process words with minimum length of 3
      if (word.length >= 3) {
        // Add full word
        keywords.add(word);
        // Add important word combinations (phrases)
        for (let i = 0; i < words.length - 1; i++) {
          if (words[i] === word) {
            const phrase = `${words[i]} ${words[i + 1]}`;
            keywords.add(phrase);
          }
        }
        // Add partial words for prefix search (min 3 chars)
        for (let i = 3; i <= word.length; i++) {
          keywords.add(word.substring(0, i));
        }
      }
    });
    return Array.from(keywords);
  }
  updateResourceReviews(resourceKey, review) {
    this.firestore.doc('resources/' + resourceKey).collection('reviews').add(review);
  }
  addFirstResourceReview(resourceKey, review) {
    let r = [];
    this.firestore.doc('resources/' + resourceKey).update({
      reviews: r
    });
    this.updateResourceReviews(resourceKey, review);
  }
  updatePostReviews(postKey, review) {
    return this.firestore.collection('posts').doc(postKey).collection('reviews').add(review).then(() => {
      const increment = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReviewCount: increment
      });
    });
  }
  updateEventReviews(eventKey, review) {
    this.firestore.doc('events/' + eventKey).collection('reviews').add(review);
  }
  addPostReactions(postKey, reaction) {
    return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(() => {
      const increment = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReactionCount: increment
      });
    });
  }
  updatePostReactions(postKey, reaction) {
    console.info('reaction', reaction);
    console.info('postkey', postKey);
    return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(() => {
      console.info('reaction added');
      const increment = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReactionCount: increment
      });
    });
  }
  removePostReaction(postKey, reactionKey) {
    this.firestore.collection('posts').doc(postKey).collection('reactions').doc(reactionKey).delete().then(() => {
      const decrement = firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.FieldValue.increment(-1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReactionCount: decrement
      });
    });
  }
  updateResourceReactions(resourceKey, reaction) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    this.firestore.doc('/resources/' + resourceKey).collection('/reactions/').add(reaction);
    // var newRef = this.afdb.list('/resources/' + resourceKey + '/reactions/').push(reaction);
    // return newRef.key;
  }
  updateEventReactions(eventKey, reaction) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    this.firestore.doc('/events/' + eventKey).collection('/reactions/').add(reaction);
    // var newRef = this.afdb.list('/events/' + eventKey + '/reactions/').push(reaction);
    // return newRef.key;
  }
  updatePollReviews(pollId, review) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    this.firestore.doc('/polls/' + pollId).collection('/reviews/').add(review);
    //    this.afdb.list('/polls/' + pollId + '/reviews/').push(review);
  }
  getFromStorageAsync(section) {
    var _this4 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('inside getFromStorageAsync');
      return yield _this4.storage.get(section).then(val => val);
    })();
  }
  initStorage() {
    var _this5 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.storage.create();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
  }, {
    type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
  }, {
    type: _image_service__WEBPACK_IMPORTED_MODULE_2__.ImageService
  }];
};
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], DataService);


/***/ }),

/***/ 62499:
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageService: () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 63474);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ 17163);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 31159);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service */ 47038);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 54982);








let ImageService = class ImageService {
  constructor(firestore, loadingProvider) {
    this.firestore = firestore;
    this.loadingProvider = loadingProvider;
    this.profilePhotoOptions = {
      quality: 50,
      targetWidth: 384,
      targetHeight: 384,
      resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.DataUrl,
      source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera
    };
    this.photoMessageOptions = {
      quality: 50,
      resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.DataUrl,
      source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera,
      allowEditing: true
    };
    this.groupPhotoOptions = {
      quality: 50,
      targetWidth: 384,
      targetHeight: 384,
      resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.DataUrl,
      source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera
    };
  }
  // Function to convert dataURI to Blob needed by Firebase
  imgURItoBlob(dataURI) {
    const binary = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: mimeString
    });
  }
  // Generate a random filename of length for the image to be uploaded
  generateFilename() {
    const length = 8;
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + ".jpg";
  }
  setProfilePhoto(user, sourceType) {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(user);
      _this.profilePhotoOptions.source = sourceType;
      _this.loadingProvider.show();
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(_this.profilePhotoOptions);
        const imageData = image.dataUrl.split(',')[1];
        // Process the returned imageURI.
        let imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        let name = _this.generateFilename();
        const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
        let dpStorageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, 'images/' + user.userId + '/' + name);
        // Rest of your existing upload code...
      } catch (error) {
        _this.loadingProvider.hide();
        console.error('Error taking photo:', error);
      }
    })();
  }
  // Update other methods similarly
  setGroupPhoto(group, sourceType) {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.groupPhotoOptions.source = sourceType;
      _this2.loadingProvider.show();
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(_this2.groupPhotoOptions);
        const imageData = image.dataUrl.split(',')[1];
        // Rest of your existing code...
      } catch (error) {
        _this2.loadingProvider.hide();
        console.error('Error taking photo:', error);
      }
    })();
  }
  // Set group photo and return the group object as promise.
  setGroupPhotoPromise(group, sourceType) {
    var _this3 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.groupPhotoOptions.source = sourceType;
          _this3.loadingProvider.show();
          try {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(_this3.groupPhotoOptions);
            const imageData = image.dataUrl.split(',')[1];
            let imgBlob = _this3.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
              'contentType': imgBlob.type
            };
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/${group.id}/${_this3.generateFilename()}`);
            yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, imgBlob, metadata);
            // Delete previous image if exists
            if (group.img) {
              _this3.deleteImageFile(group.img);
            }
            const url = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
            group.img = url;
            _this3.loadingProvider.hide();
            resolve(group);
          } catch (error) {
            _this3.loadingProvider.hide();
            _this3.loadingProvider.showToast("Something went wrong");
            console.error(error);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  //Delete the image given the url.
  deleteImageFile(path) {
    try {
      const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
      const fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
      const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/${fileName}`);
      (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(imageRef).catch(error => console.log(error));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }
  //Delete the user.img given the user.
  deleteUserImageFile(user) {
    try {
      const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
      const fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
      const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/${user.userId}/${fileName}`);
      (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(imageRef).catch(error => console.log(error));
    } catch (error) {
      console.error('Error deleting user image:', error);
    }
  }
  // Delete group image file on group storage reference.
  deleteGroupImageFile(groupId, path) {
    try {
      const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
      const fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
      const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/${groupId}/${fileName}`);
      (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(imageRef).catch(error => console.log(error));
    } catch (error) {
      console.error('Error deleting group image:', error);
    }
  }
  // Update uploadPhotoMessage method
  uploadPhotoMessage(conversationId, sourceType) {
    var _this4 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this4.photoMessageOptions.source = sourceType;
          _this4.loadingProvider.show();
          try {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(_this4.photoMessageOptions);
            const imageData = image.dataUrl.split(',')[1];
            // Rest of your existing code...
          } catch (error) {
            _this4.loadingProvider.hide();
            console.error('Error taking photo:', error);
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  // Upload photo message and return the url as promise.
  uploadPostPhoto(sourceType) {
    var _this5 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this5.photoMessageOptions.source = sourceType;
          _this5.loadingProvider.show();
          try {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(_this5.photoMessageOptions);
            const imageData = image.dataUrl.split(',')[1];
            let imgBlob = _this5.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
              'contentType': imgBlob.type
            };
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/posts/${_this5.generateFilename()}`);
            yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, imgBlob, metadata);
            const url = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
            _this5.loadingProvider.hide();
            resolve(url);
          } catch (error) {
            _this5.loadingProvider.hide();
            _this5.loadingProvider.showToast("Something went wrong");
            console.error(error);
          }
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  uploadPostPhotos(postId, postMedia) {
    let promises = [];
    return new Promise(resolve => {
      if (postMedia && postMedia.length > 0) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < postMedia.length; i++) {
          promises.push(this.getDownloadUrlImage(postId, postMedia[i]));
        }
        Promise.all(promises).then(results => {
          resolve(results);
        });
      } else {
        resolve(postMedia);
      }
    });
  }
  getDownloadUrlImage(postId, imageBase64) {
    var _this6 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref4 = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          try {
            // Process the returned imageURI
            let imgBlob = _this6.imgURItoBlob(imageBase64);
            let metadata = {
              'contentType': imgBlob.type
            };
            // Generate filename and upload to Firebase Storage
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
            const upRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/posts/${postId}${_this6.generateFilename()}`);
            // Upload the image
            yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(upRef, imgBlob, metadata);
            // Get the download URL
            const url = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(upRef);
            resolve(url);
          } catch (error) {
            console.error('Error in upload or getting URL:', error);
            resolve(null); // or handle the error as needed
          }
        });
        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }
  deletePostPhoto(url) {
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
        const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
        const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/posts/${fileName}`);
        yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(imageRef);
      } catch (error) {
        console.error('Error deleting post photo:', error);
      }
    })();
  }
  uploadPostReactionPhoto(postId, userId, sourceType) {
    var _this7 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref5 = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this7.photoMessageOptions.source = sourceType;
          _this7.loadingProvider.show();
          try {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(_this7.photoMessageOptions);
            const imageData = image.dataUrl.split(',')[1];
            let imgBlob = _this7.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
              'contentType': imgBlob.type
            };
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
            const upRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/posts/${postId}/${userId}/${_this7.generateFilename()}`);
            // Upload the image
            yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(upRef, imgBlob, metadata);
            // Get the download URL
            const url = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(upRef);
            _this7.loadingProvider.hide();
            resolve(url);
          } catch (error) {
            _this7.loadingProvider.hide();
            _this7.loadingProvider.showToast("Something went wrong");
            console.error('Error uploading reaction photo:', error);
            resolve(null);
          }
        });
        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }());
    })();
  }
  uploadPostVideo() {
    var _this8 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this8.loadingProvider.show();
        // Check permissions first
        const permissionStatus = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.checkPermissions();
        if (permissionStatus.camera !== 'granted') {
          yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.requestPermissions();
        }
        // Use getPhoto with video options
        const videoResult = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Uri,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera,
          saveToGallery: true,
          // Enable video capture
          width: 1920,
          height: 1080,
          presentationStyle: 'fullscreen',
          promptLabelHeader: 'Record Video',
          promptLabelCancel: 'Cancel',
          promptLabelPhoto: 'Record'
        });
        if (!videoResult.webPath) {
          throw new Error('No video captured');
        }
        // Generate unique filename
        const timestamp = new Date().getTime();
        const randomString = Math.random().toString(36).substring(2, 8);
        const fileName = `video_${timestamp}_${randomString}.mp4`;
        try {
          // Convert video to blob
          const response = yield fetch(videoResult.webPath);
          const videoBlob = yield response.blob();
          // Validate video size (example: 100MB limit)
          const MAX_SIZE = 100 * 1024 * 1024; // 100MB in bytes
          if (videoBlob.size > MAX_SIZE) {
            throw new Error('Video file is too large. Maximum size is 100MB.');
          }
          // Upload to Firebase with progress tracking
          const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
          const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `videos/posts/${fileName}`);
          const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(storageRef, videoBlob, {
            contentType: 'video/mp4'
          });
          return new Promise((resolve, reject) => {
            uploadTask.on('state_changed',
            // Progress observer
            snapshot => {
              const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              console.log('Upload is ' + progress + '% done');
              _this8.loadingProvider.show(); //(`Uploading video: ${Math.round(progress)}%`);
            },
            // Error observer
            error => {
              _this8.loadingProvider.hide();
              console.error('Upload failed:', error);
              reject(error);
            },
            /*#__PURE__*/
            // Completion observer
            (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              try {
                const downloadURL = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(uploadTask.snapshot.ref);
                // Clean up temporary files
                try {
                  yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.deleteFile({
                    path: fileName,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Cache
                  });
                } catch (cleanupError) {
                  console.warn('Error cleaning up temporary file:', cleanupError);
                }
                _this8.loadingProvider.hide();
                resolve(downloadURL);
              } catch (error) {
                _this8.loadingProvider.hide();
                reject(error);
              }
            }));
          });
        } catch (error) {
          throw new Error(`Error processing video: ${error.message}`);
        }
      } catch (error) {
        _this8.loadingProvider.hide();
        console.error('Error in uploadPostVideo:', error);
        throw error;
      }
    })();
  }
  deletePostReactionPhoto(postId, url) {
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
        const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
        const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/${postId}/${fileName}`);
        yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(imageRef);
      } catch (error) {
        console.error('Error deleting reaction photo:', error);
        throw error;
      }
    })();
  }
  // Upload group photo message and return a promise as url.
  uploadGroupPhotoMessage(groupId, sourceType) {
    var _this9 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this9.photoMessageOptions.source = sourceType;
        _this9.loadingProvider.show();
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(_this9.photoMessageOptions);
        const imageData = image.dataUrl.split(',')[1];
        const imgBlob = _this9.imgURItoBlob("data:image/jpeg;base64," + imageData);
        const metadata = {
          contentType: imgBlob.type
        };
        // Get storage reference
        const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/${groupId}/${_this9.generateFilename()}`);
        // Upload the image
        yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, imgBlob, metadata);
        // Get the download URL
        const url = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
        _this9.loadingProvider.hide();
        return url;
      } catch (error) {
        _this9.loadingProvider.hide();
        _this9.loadingProvider.showToast("Something went wrong");
        console.error('Error uploading group photo:', error);
        throw error;
      }
    })();
  }
  uploadGroupVideoMessage(groupId) {
    var _this10 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this10.loadingProvider.show();
        // Check camera permissions
        const permissionStatus = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.checkPermissions();
        if (permissionStatus.camera !== 'granted') {
          yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.requestPermissions();
        }
        // Capture video using Camera API
        const videoResult = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Uri,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera,
          saveToGallery: true,
          width: 1920,
          height: 1080,
          presentationStyle: 'fullscreen',
          promptLabelHeader: 'Record Video',
          promptLabelCancel: 'Cancel',
          promptLabelPhoto: 'Record'
        });
        if (!videoResult.webPath) {
          throw new Error('No video captured');
        }
        // Generate unique filename
        const timestamp = new Date().getTime();
        const randomString = Math.random().toString(36).substring(2, 8);
        const filename = `video_${timestamp}_${randomString}.mp4`;
        console.log("Video path:", videoResult.webPath);
        try {
          // Convert video to blob
          const response = yield fetch(videoResult.webPath);
          const videoBlob = yield response.blob();
          // Validate video size (optional)
          const MAX_SIZE = 100 * 1024 * 1024; // 100MB limit
          if (videoBlob.size > MAX_SIZE) {
            throw new Error('Video file is too large. Maximum size is 100MB.');
          }
          console.log('Video blob size:', videoBlob.size);
          // Get storage reference
          const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
          const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `videos/${groupId}/${filename}`);
          // Create upload task with progress monitoring
          const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(storageRef, videoBlob, {
            contentType: 'video/mp4'
          });
          // Return promise that resolves with download URL
          return new Promise((resolve, reject) => {
            uploadTask.on('state_changed',
            // Progress observer
            snapshot => {
              const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              console.log(`Upload progress: ${Math.round(progress)}%`);
              _this10.loadingProvider.showToast(`Uploading video: ${Math.round(progress)}%`);
            },
            // Error observer
            error => {
              console.error('Upload error:', error);
              _this10.loadingProvider.hide();
              reject(error);
            },
            /*#__PURE__*/
            // Completion observer
            (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              try {
                const downloadURL = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
                // Clean up any temporary files
                try {
                  yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.deleteFile({
                    path: filename,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Cache
                  });
                } catch (cleanupError) {
                  console.warn('Error cleaning up temporary file:', cleanupError);
                  // Don't throw error here as upload was successful
                }
                _this10.loadingProvider.hide();
                resolve(downloadURL);
              } catch (error) {
                _this10.loadingProvider.hide();
                reject(error);
              }
            }));
          });
        } catch (error) {
          throw new Error(`Error processing video: ${error.message}`);
        }
      } catch (error) {
        _this10.loadingProvider.hide();
        console.error('Error uploading group video:', error);
        throw error;
      }
    })();
  }
  uploadVideoMessage(conversationId) {
    var _this11 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this11.loadingProvider.show();
        // Check camera permissions
        const permissionStatus = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.checkPermissions();
        if (permissionStatus.camera !== 'granted') {
          yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.requestPermissions();
        }
        // Capture video using Camera API
        const videoResult = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Uri,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera,
          saveToGallery: true,
          width: 1920,
          height: 1080,
          presentationStyle: 'fullscreen'
        });
        if (!videoResult.webPath) {
          throw new Error('No video captured');
        }
        // Generate unique filename
        const timestamp = new Date().getTime();
        const randomString = Math.random().toString(36).substring(2, 8);
        const filename = `video_${timestamp}_${randomString}.mp4`;
        try {
          // Convert video to blob
          const response = yield fetch(videoResult.webPath);
          const videoBlob = yield response.blob();
          // Optional: Validate video size
          const MAX_SIZE = 100 * 1024 * 1024; // 100MB limit
          if (videoBlob.size > MAX_SIZE) {
            throw new Error('Video file is too large. Maximum size is 100MB.');
          }
          // Upload to Firebase Storage
          const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
          const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `videos/${conversationId}/${filename}`);
          const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(storageRef, videoBlob, {
            contentType: 'video/mp4'
          });
          return new Promise((resolve, reject) => {
            uploadTask.on('state_changed',
            // Progress observer
            snapshot => {
              const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              console.log(`Upload progress: ${progress.toFixed(2)}%`);
              _this11.loadingProvider.showToast(`Uploading video: ${Math.round(progress)}%`);
            },
            // Error observer
            error => {
              _this11.loadingProvider.hide();
              console.error('Upload failed:', error);
              reject(error);
            },
            /*#__PURE__*/
            // Completion observer
            (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              try {
                const downloadURL = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
                // Clean up temporary files
                try {
                  yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.deleteFile({
                    path: filename,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Cache
                  });
                } catch (cleanupError) {
                  console.warn('Error cleaning up temporary file:', cleanupError);
                  // Don't throw error here as upload was successful
                }
                _this11.loadingProvider.hide();
                resolve(downloadURL);
              } catch (error) {
                _this11.loadingProvider.hide();
                console.error('Error getting download URL:', error);
                reject(error);
              }
            }));
          });
        } catch (error) {
          throw new Error(`Error processing video: ${error.message}`);
        }
      } catch (error) {
        _this11.loadingProvider.hide();
        console.error('Error in uploadVideoMessage:', error);
        throw error;
      }
    })();
  }
  // Upload group photo message and return a promise as url.
  uploadGroupPhotoResource(groupId, sourceType) {
    var _this12 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref9 = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this12.photoMessageOptions.source = sourceType;
          _this12.loadingProvider.show();
          try {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto(_this12.photoMessageOptions);
            const imageData = image.dataUrl.split(',')[1];
            let imgBlob = _this12.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
              'contentType': imgBlob.type
            };
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/${groupId}/${_this12.generateFilename()}`);
            yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, imgBlob, metadata);
            const url = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
            _this12.loadingProvider.hide();
            resolve(url);
          } catch (error) {
            _this12.loadingProvider.hide();
            _this12.loadingProvider.showToast("Something went wrong");
          }
        });
        return function (_x6) {
          return _ref9.apply(this, arguments);
        };
      }());
    })();
  }
  uploadGroupVideoResource(groupId) {
    var _this13 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this13.loadingProvider.show();
        // Check camera permissions
        const permissionStatus = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.checkPermissions();
        if (permissionStatus.camera !== 'granted') {
          yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.requestPermissions();
        }
        // Capture video
        const videoResult = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Uri,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera,
          saveToGallery: true,
          width: 1920,
          height: 1080
        });
        if (!videoResult.webPath) {
          throw new Error('No video captured');
        }
        // Generate unique filename
        const timestamp = new Date().getTime();
        const filename = `video_${timestamp}.mp4`;
        try {
          // Convert video to blob
          const response = yield fetch(videoResult.webPath);
          const videoBlob = yield response.blob();
          console.log('Video blob size:', videoBlob.size);
          // Upload to Firebase Storage
          const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
          const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `videos/${groupId}/${filename}`);
          const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(storageRef, videoBlob);
          return new Promise((resolve, reject) => {
            uploadTask.on('state_changed',
            // Progress observer
            snapshot => {
              const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              console.log(`Upload progress: ${progress.toFixed(2)}%`);
              _this13.loadingProvider.show(); //(`Uploading: ${Math.round(progress)}%`);
            },
            // Error observer
            error => {
              _this13.loadingProvider.hide();
              console.error('Upload failed:', error);
              reject(error);
            },
            /*#__PURE__*/
            // Completion observer
            (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              try {
                const downloadURL = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
                // Clean up temporary files
                try {
                  yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.deleteFile({
                    path: filename,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Cache
                  });
                } catch (cleanupError) {
                  console.warn('Cleanup error:', cleanupError);
                }
                _this13.loadingProvider.hide();
                resolve(downloadURL);
              } catch (error) {
                _this13.loadingProvider.hide();
                reject(error);
              }
            }));
          });
        } catch (error) {
          throw new Error(`Error processing video: ${error.message}`);
        }
      } catch (error) {
        _this13.loadingProvider.hide();
        console.error('Error in uploadGroupVideoResource:', error);
        throw error;
      }
    })();
  }
  getGroupVideoResource(resourceurl) {
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
        const videoRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, resourceurl);
        const url = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(videoRef);
        return url;
      } catch (error) {
        console.error('Error getting video URL:', error);
        throw error;
      }
    })();
  }
  getImages() {
    var _this14 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const uploadedUrls = [];
        // Allow multiple photo selection
        const result = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.pickImages({
          quality: 75,
          limit: 4
        });
        _this14.loadingProvider.show();
        for (let i = 0; i < result.photos.length; i++) {
          try {
            _this14.loadingProvider.showToast(`Uploading image ${i + 1} of ${result.photos.length}`);
            // Read the file
            const photo = result.photos[i];
            const response = yield fetch(photo.webPath);
            const blob = yield response.blob();
            // Upload to Firebase
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
            const fileName = _this14.generateFilename();
            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/${fileName}`);
            // Create upload task
            const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(storageRef, blob);
            // Monitor upload progress
            uploadTask.on('state_changed', snapshot => {
              const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              console.log(`Upload progress for image ${i + 1}: ${progress}%`);
            }, error => {
              console.error(`Error uploading image ${i + 1}:`, error);
            });
            // Wait for upload to complete
            yield uploadTask;
            // Get download URL
            const downloadUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
            uploadedUrls.push(downloadUrl);
          } catch (error) {
            console.error(`Error processing image ${i + 1}:`, error);
          }
        }
        _this14.loadingProvider.hide();
        if (uploadedUrls.length === 0) {
          throw new Error('No images were successfully uploaded');
        }
        return uploadedUrls;
      } catch (error) {
        _this14.loadingProvider.hide();
        console.error('Error in getImages:', error);
        throw error;
      }
    })();
  }
  // For single image capture
  captureImage() {
    var _this15 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
          quality: 75,
          allowEditing: true,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Uri,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera
        });
        if (!image.webPath) {
          throw new Error('No image path available');
        }
        _this15.loadingProvider.show();
        // Convert to blob
        const response = yield fetch(image.webPath);
        const blob = yield response.blob();
        // Upload to Firebase
        const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
        const fileName = _this15.generateFilename();
        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, `images/${fileName}`);
        // Upload with progress monitoring
        const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(storageRef, blob);
        uploadTask.on('state_changed', snapshot => {
          const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          console.log('Upload progress:', progress);
        });
        yield uploadTask;
        const downloadUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(storageRef);
        _this15.loadingProvider.hide();
        return downloadUrl;
      } catch (error) {
        _this15.loadingProvider.hide();
        console.error('Error capturing image:', error);
        throw error;
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore
  }, {
    type: _loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
  }];
};
ImageService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], ImageService);


/***/ }),

/***/ 47038:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingService: () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 37401);




let LoadingService = class LoadingService {
  constructor(loadingCtrl, toastCtrl) {
    this.loadingCtrl = loadingCtrl;
    this.toastCtrl = toastCtrl;
  }
  show() {
    if (!this.loading) {
      this.loadingCtrl.create({
        spinner: 'circles',
        duration: 2000
      }).then(res => {
        this.loading = res;
        this.loading.present();
      });
    }
  }
  hide() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }
  showToast(message) {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastCtrl.create({
        message,
        duration: 3000,
        position: 'top',
        animated: true,
        color: 'primary',
        cssClass: 'custom-toast',
        mode: 'ios'
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
  }];
};
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LoadingService);


/***/ }),

/***/ 53952:
/*!******************************************!*\
  !*** ./src/app/services/share.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _pipes_friend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/friend */ 30766);
/* harmony import */ var _pipes_conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/conversation */ 85501);
/* harmony import */ var _pipes_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/group */ 88195);
/* harmony import */ var _pipes_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/search */ 33410);
/* harmony import */ var _pipes_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/date */ 19006);
/* harmony import */ var _pipes_poll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/poll */ 28219);
/* harmony import */ var _pipes_resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/resource */ 62662);
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/reverse.pipe */ 60238);










let SharedModule = class SharedModule {};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [],
  declarations: [_pipes_friend__WEBPACK_IMPORTED_MODULE_0__.FriendPipe, _pipes_conversation__WEBPACK_IMPORTED_MODULE_1__.ConversationPipe, _pipes_group__WEBPACK_IMPORTED_MODULE_2__.GroupPipe, _pipes_search__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _pipes_date__WEBPACK_IMPORTED_MODULE_4__.DateFormatPipe, _pipes_poll__WEBPACK_IMPORTED_MODULE_5__.PollPipe, _pipes_resource__WEBPACK_IMPORTED_MODULE_6__.ResourcePipe, _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_7__.ReversePipe],
  exports: [_pipes_friend__WEBPACK_IMPORTED_MODULE_0__.FriendPipe, _pipes_conversation__WEBPACK_IMPORTED_MODULE_1__.ConversationPipe, _pipes_group__WEBPACK_IMPORTED_MODULE_2__.GroupPipe, _pipes_search__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _pipes_date__WEBPACK_IMPORTED_MODULE_4__.DateFormatPipe, _pipes_poll__WEBPACK_IMPORTED_MODULE_5__.PollPipe, _pipes_resource__WEBPACK_IMPORTED_MODULE_6__.ResourcePipe, _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_7__.ReversePipe]
})], SharedModule);


/***/ }),

/***/ 89547:
/*!*****************************************************************!*\
  !*** ./src/app/user-profile-modal/user-profile-modal.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileModalPageModule: () => (/* binding */ UserProfileModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _user_profile_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile-modal.page */ 90436);







const routes = [{
  path: '',
  component: _user_profile_modal_page__WEBPACK_IMPORTED_MODULE_0__.UserProfileModalPage
}];
let UserProfileModalPageModule = class UserProfileModalPageModule {};
UserProfileModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_user_profile_modal_page__WEBPACK_IMPORTED_MODULE_0__.UserProfileModalPage]
})], UserProfileModalPageModule);


/***/ }),

/***/ 90436:
/*!***************************************************************!*\
  !*** ./src/app/user-profile-modal/user-profile-modal.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileModalPage: () => (/* binding */ UserProfileModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _user_profile_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile-modal.page.html?ngResource */ 59200);
/* harmony import */ var _user_profile_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile-modal.page.scss?ngResource */ 7032);
/* harmony import */ var _user_profile_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_profile_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_environments_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/validator */ 82319);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);









let UserProfileModalPage = class UserProfileModalPage {
  constructor(modal, navParam, formBuilder, firestore, loadingProvider) {
    this.modal = modal;
    this.navParam = navParam;
    this.formBuilder = formBuilder;
    this.firestore = firestore;
    this.loadingProvider = loadingProvider;
    this.submitAttempt = false;
    this.errorMessages = [];
    this.user = this.navParam.data.user;
    this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.errorMessages;
    this.myForm = this.formBuilder.group({
      name: src_environments_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.nameValidator,
      username: src_environments_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.usernameValidator,
      email: src_environments_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.emailValidator,
      bio: src_environments_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.bioValidator
    });
  }
  ngOnInit() {}
  save() {
    this.submitAttempt = true;
    if (this.myForm.valid) {
      this.loadingProvider.show();
      this.firestore.doc('accounts/' + this.user.userId).update(this.user).then(() => {
        this.loadingProvider.hide();
        this.loadingProvider.showToast("Updated Successfully");
        this.modal.dismiss();
      }).catch(err => {
        this.loadingProvider.showToast("Something went wrong");
        this.loadingProvider.hide();
      });
    }
  }
  dismissModal() {
    this.modal.dismiss();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
  }];
};
UserProfileModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-user-profile-modal',
  template: _user_profile_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_user_profile_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UserProfileModalPage);


/***/ }),

/***/ 47669:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  firebase: {
    /* apiKey: "AIzaSyBzI-lGb36R6EqUfX3gyA3jYVJjr-vUbQ0",//"AIzaSyDN6WmBnJGfN64BnR-r4TW9V8N1IHgps1w",
      authDomain: "chatapp-3f829.firebaseapp.com",
      databaseURL: "https://chatapp-3f829.firebaseio.com",
      projectId: "chatapp-3f829",
      storageBucket: "chatapp-3f829.appspot.com",
      messagingSenderId: "845839389008" */
    apiKey: "AIzaSyBzI-lGb36R6EqUfX3gyA3jYVJjr-vUbQ0",
    authDomain: "firechat-8fb8c.firebaseapp.com",
    databaseURL: "https://firechat-8fb8c.firebaseio.com",
    projectId: "firechat-8fb8c",
    storageBucket: "firechat-8fb8c.appspot.com",
    messagingSenderId: "1094106358076",
    appId: "1:1094106358076:web:aeafa6eda64aafc78afe39",
    measurementId: "G-4CLJ8NC2RF"
  },
  googleClientId: "845839389008-s0scp3mghdi67t5ga9t56j6265ibonp5.apps.googleusercontent.com"
};

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 82319:
/*!***************************************!*\
  !*** ./src/environments/validator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validator: () => (/* binding */ Validator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 34456);

var Validator;
(function (Validator) {
  Validator.emailValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]];
  Validator.passwordValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(6)]];
  Validator.nameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]];
  Validator.usernameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(5)]];
  Validator.bioValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]];
  Validator.groupNameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]];
  Validator.groupDescriptionValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]];
  Validator.groupTagsValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]];
  Validator.errorMessages = {
    email: [{
      type: 'required',
      message: 'Email is required'
    }, {
      type: 'pattern',
      message: 'Please enter a valid email address'
    }],
    password: [{
      type: 'required',
      message: 'Password is required'
    }, {
      type: 'minlength',
      message: 'Password must be at least 6 characters long'
    }],
    name: [{
      type: 'required',
      message: 'Name is required'
    }, {
      type: 'minlength',
      message: 'Name must be at least 2 characters long'
    }],
    username: [{
      type: 'required',
      message: 'Username is required'
    }, {
      type: 'minlength',
      message: 'Username must be at least 3 characters long'
    }],
    bio: [{
      type: 'required',
      message: 'Bio is required'
    }],
    groupName: [{
      type: 'required',
      message: 'Group Name is required'
    }],
    groupDescription: [{
      type: 'required',
      message: 'Group Description is required'
    }]
  };
  // Poll Form Validators
  Validator.pollNameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1)]];
  Validator.pollDescriptionValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1)]];
  Validator.pollOption1Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1)]];
  Validator.pollOption2Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1)]];
})(Validator || (Validator = {}));

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 52476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 45312);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ 85684);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 88996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		37518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		41981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		71603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		82273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		19642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		32095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		72335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		78221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		47184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		38759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		24248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		69863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		51769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-bb424ba8_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		76534,
		"default-node_modules_ionic_core_dist_esm_data-bb424ba8_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		25458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		70654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		36034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		20761,
		"default-node_modules_ionic_core_dist_esm_form-controller-21dd62b1_js-node_modules_ionic_core_-a176d1",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		29557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		68353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		51024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		29160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		60393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		23970,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		20437,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		16772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		34810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		14639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		90628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		10852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		61479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		24065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		57971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		93184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		40388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		42392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		36059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		50198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_form-controller-21dd62b1_js-node_modules_ionic_core_-a176d1",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		45297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 88996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 54140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 54140;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 98226:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/feed/filter.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZmlsdGVyLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDIwcHg7CiAgICAgIHdpZHRoOiAzMjBweDsKICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5maWx0ZXItaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwoKICAgICAgaDQgewogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgfQoKICAgICAgaW9uLWJ1dHRvbiB7CiAgICAgICAgaGVpZ2h0OiAzMnB4OwogICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4OwogICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDsKICAgICAgICBmb250LXNpemU6IDEwcHg7CiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICBvcGFjaXR5OiAwLjU7CiAgICAgICAgfQoKICAgICAgICBpb24taWNvbiB7CiAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmZpbHRlci1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKCiAgICAgIC5zZWN0aW9uLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OwoKICAgICAgICAudGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7CiAgICAgICAgfQoKICAgICAgICAuc3VidGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmNvbnRlbnQtdHlwZXMgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOwogICAgICBnYXA6IDhweDsKCiAgICAgIC5maWx0ZXItY2hpcCB7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxOwogICAgICAgIHBhZGRpbmc6IDEycHggOHB4OwogICAgICAgIAogICAgICAgIGlvbi1pY29uIHsKICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAuZ3JvdXAtc2VhcmNoIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsKCiAgICAgIC5ncm91cC1zZWFyY2hiYXIgewogICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOwogICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTsKICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgICAKICAgICAgICAuc2VhcmNoYmFyLWlucHV0IHsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCi5ncm91cC1jaGlwcyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIGdhcDogOHB4OwogIG1heC1oZWlnaHQ6IDIwMHB4OwogIG92ZXJmbG93LXk6IGF1dG87CiAgcGFkZGluZy1yaWdodDogNHB4OwoKICAmLmhhcy1zZWFyY2ggewogICAgbWF4LWhlaWdodDogMTUwcHg7CiAgfQoKICAuZmlsdGVyLWNoaXAgewogICAgcGFkZGluZzogMTBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwoKICAgICYuYWN0aXZlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAKICAgICAgLmdyb3VwLWljb24gewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgIAogICAgICAgIHNwYW4gewogICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1pY29uIHsKICAgICAgd2lkdGg6IDI4cHg7CiAgICAgIGhlaWdodDogMjhweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OwogICAgICBvdmVyZmxvdzogaGlkZGVuOyAKCiAgICAgIGltZyB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsKICAgICAgfQoKICAgICAgc3BhbiB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1uYW1lIHsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CgogICAgLmNoZWNrLWljb24gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNHB4OwogICAgICByaWdodDogNHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAmOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC45OwogICAgfQoKICAgICY6YWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsKICAgIH0KICB9Cn0KCgogICAgLmZpbHRlci1jaGlwIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDRweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAgIAogICAgICAgIGlvbi1pY29uLCBzcGFuIHsKICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICAgICAgfQoKICAgICAgICAuZ3JvdXAtbmFtZSB7CiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsKICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBsaW5lLWhlaWdodDogMS4yOwogICAgICB9CgogICAgICAuY2hlY2staWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNHB4OwogICAgICAgIHJpZ2h0OiA0cHg7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7CiAgICAgIH0KCiAgICAgICY6YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgIH0KICAgIH0KCiAgICAuZmlsdGVyLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIAogICAgICBpb24tYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgaGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLmZpbHRlci1jaGlwcy5jb250ZW50LXR5cGVzIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiA4cHg7CgogIC5maWx0ZXItY2hpcCB7CiAgICBwYWRkaW5nOiA4cHggNHB4OwogICAgCiAgICBpb24taWNvbiB7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsgCiAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgCiAgICB9CgogICAgc3BhbiB7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgCiAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7CiAgICB9CiAgfQp9CgoKICAgIC8vIERhcmsgbW9kZSBhZGp1c3RtZW50cwogICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgICAuZmlsdGVyLWNoaXAgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSk7CgogICAgICAgICYuYWN0aXZlIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1uYW1lIHsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAgIH0KCiAgICAgICAgLmdyb3VwLWljb24gewogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuZ3JvdXAtc2VhcmNoYmFyIHsKICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDsKICAgICAgfQogICAgfQogIA%3D%3D!./src/app/feed/filter.component.ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
    .filter-container {
      padding: 20px;
      width: 320px;
      max-width: 100%;
    }

    .filter-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h4 {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
      }

      ion-button {
        height: 32px;
        --padding-start: 8px;
        --padding-end: 8px;
        font-size: 10px;
        --color: var(--ion-color-medium);
        
        &:disabled {
          opacity: 0.5;
        }

        ion-icon {
          font-size: 16px;
        }
      }
    }

    .filter-section {
      margin-bottom: 24px;

      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        .title {
          font-size: 14px;
          font-weight: 600;
          color: var(--ion-color-dark);
        }

        .subtitle {
          font-size: 12px;
          color: var(--ion-color-primary);
          font-weight: 500;
        }
      }
    }

    .content-types {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;

      .filter-chip {
        aspect-ratio: 1;
        padding: 12px 8px;
        
        ion-icon {
          font-size: 20px;
          margin-bottom: 6px;
        }
      }
    }

    .group-search {
      margin-bottom: 12px;

      .group-searchbar {
        padding: 0;
        --box-shadow: none;
        --background: var(--ion-color-light);
        --border-radius: 8px;
        --placeholder-opacity: 0.5;
        --placeholder-color: var(--ion-color-medium);
        
        .searchbar-input {
          font-size: 14px;
        }
      }
    }

.group-chips {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
  padding-right: 4px;

  &.has-search {
    max-height: 150px;
  }

  .filter-chip {
    padding: 10px;
    position: relative;
    background: var(--ion-color-light);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      background: var(--ion-color-primary);
      
      .group-icon {
        background: rgba(255, 255, 255, 0.2) !important;
        
        span {
          color: white;
        }
      }

      .group-name {
        color: white;
      }
    }

    .group-icon {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 4px;
      overflow: hidden; 

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
      }

      span {
        font-weight: 600;
        font-size: 14px;
        color: var(--ion-color-dark);
      }
    }

    .group-name {
      font-size: 13px;
      color: var(--ion-color-dark);
      text-align: center;
      line-height: 1.2;
      display: block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .check-icon {
      position: absolute;
      top: 4px;
      right: 4px;
      font-size: 16px;
      color: white;
    }

    &:hover {
      opacity: 0.9;
    }

    &:active {
      transform: scale(0.98);
    }
  }
}


    .filter-chip {
      background: var(--ion-color-light);
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;

      &.active {
        background: var(--ion-color-primary);
        
        ion-icon, span {
          color: white;
        }

        .group-icon {
          background: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }

        .group-name {
          color: white !important;
        }
      }

      .group-icon {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 14px;
        color: var(--ion-color-dark);
        margin-bottom: 4px;
      }

      .group-name {
        font-size: 13px;
        color: var(--ion-color-dark);
        text-align: center;
        line-height: 1.2;
      }

      .check-icon {
        position: absolute;
        top: 4px;
        right: 4px;
        font-size: 16px;
        color: white;
      }

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      &:active {
        transform: translateY(0);
      }
    }

    .filter-actions {
      margin-top: 8px;
      
      ion-button {
        margin: 0;
        --border-radius: 8px;
        height: 44px;
        font-weight: 500;
        
        &:disabled {
          --background: var(--ion-color-medium);
          opacity: 0.5;
        }
      }
    }
    .filter-chips.content-types {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  .filter-chip {
    padding: 8px 4px;
    
    ion-icon {
      font-size: 20px; 
      margin-bottom: 2px; 
    }

    span {
      font-size: 11px;
      font-weight: 500; 
      line-height: 1;
      text-align: center;
      -webkit-transform: translate3d(0,0,0);
      letter-spacing: -0.2px;
    }
  }
}


    // Dark mode adjustments
    @media (prefers-color-scheme: dark) {
      .filter-chip {
        background: rgba(var(--ion-color-light-rgb), 0.1);

        &.active {
          background: var(--ion-color-primary);
        }

        .group-name {
          color: var(--ion-color-light);
        }

        .group-icon {
          color: var(--ion-color-light);
        }
      }

      .group-searchbar {
        --background: rgba(var(--ion-color-light-rgb), 0.1) !important;
      }
    }
  `, "",{"version":3,"sources":["webpack://./src/app/feed/filter.component.ts"],"names":[],"mappings":";IACI;MACE,aAAa;MACb,YAAY;MACZ,eAAe;IACjB;;IAEA;MACE,aAAa;MACb,8BAA8B;MAC9B,mBAAmB;MACnB,mBAAmB;;MAEnB;QACE,SAAS;QACT,eAAe;QACf,gBAAgB;MAClB;;MAEA;QACE,YAAY;QACZ,oBAAoB;QACpB,kBAAkB;QAClB,eAAe;QACf,gCAAgC;;QAEhC;UACE,YAAY;QACd;;QAEA;UACE,eAAe;QACjB;MACF;IACF;;IAEA;MACE,mBAAmB;;MAEnB;QACE,aAAa;QACb,8BAA8B;QAC9B,mBAAmB;QACnB,mBAAmB;;QAEnB;UACE,eAAe;UACf,gBAAgB;UAChB,4BAA4B;QAC9B;;QAEA;UACE,eAAe;UACf,+BAA+B;UAC/B,gBAAgB;QAClB;MACF;IACF;;IAEA;MACE,aAAa;MACb,qCAAqC;MACrC,QAAQ;;MAER;QACE,eAAe;QACf,iBAAiB;;QAEjB;UACE,eAAe;UACf,kBAAkB;QACpB;MACF;IACF;;IAEA;MACE,mBAAmB;;MAEnB;QACE,UAAU;QACV,kBAAkB;QAClB,oCAAoC;QACpC,oBAAoB;QACpB,0BAA0B;QAC1B,4CAA4C;;QAE5C;UACE,eAAe;QACjB;MACF;IACF;;AAEJ;EACE,aAAa;EACb,qCAAqC;EACrC,QAAQ;EACR,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;;EAElB;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,kCAAkC;IAClC,kBAAkB;IAClB,eAAe;IACf,yBAAyB;;IAEzB;MACE,oCAAoC;;MAEpC;QACE,+CAA+C;;QAE/C;UACE,YAAY;QACd;MACF;;MAEA;QACE,YAAY;MACd;IACF;;IAEA;MACE,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,kBAAkB;MAClB,gBAAgB;;MAEhB;QACE,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,kBAAkB;MACpB;;MAEA;QACE,gBAAgB;QAChB,eAAe;QACf,4BAA4B;MAC9B;IACF;;IAEA;MACE,eAAe;MACf,4BAA4B;MAC5B,kBAAkB;MAClB,gBAAgB;MAChB,cAAc;MACd,WAAW;MACX,gBAAgB;MAChB,uBAAuB;MACvB,mBAAmB;IACrB;;IAEA;MACE,kBAAkB;MAClB,QAAQ;MACR,UAAU;MACV,eAAe;MACf,YAAY;IACd;;IAEA;MACE,YAAY;IACd;;IAEA;MACE,sBAAsB;IACxB;EACF;AACF;;;IAGI;MACE,kCAAkC;MAClC,kBAAkB;MAClB,aAAa;MACb,aAAa;MACb,sBAAsB;MACtB,mBAAmB;MACnB,QAAQ;MACR,eAAe;MACf,yBAAyB;MACzB,kBAAkB;MAClB,gBAAgB;;MAEhB;QACE,oCAAoC;;QAEpC;UACE,YAAY;QACd;;QAEA;UACE,+CAA+C;UAC/C,uBAAuB;QACzB;;QAEA;UACE,uBAAuB;QACzB;MACF;;MAEA;QACE,WAAW;QACX,YAAY;QACZ,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,gBAAgB;QAChB,eAAe;QACf,4BAA4B;QAC5B,kBAAkB;MACpB;;MAEA;QACE,eAAe;QACf,4BAA4B;QAC5B,kBAAkB;QAClB,gBAAgB;MAClB;;MAEA;QACE,kBAAkB;QAClB,QAAQ;QACR,UAAU;QACV,eAAe;QACf,YAAY;MACd;;MAEA;QACE,2BAA2B;QAC3B,qCAAqC;MACvC;;MAEA;QACE,wBAAwB;MAC1B;IACF;;IAEA;MACE,eAAe;;MAEf;QACE,SAAS;QACT,oBAAoB;QACpB,YAAY;QACZ,gBAAgB;;QAEhB;UACE,qCAAqC;UACrC,YAAY;QACd;MACF;IACF;IACA;EACF,aAAa;EACb,qCAAqC;EACrC,QAAQ;;EAER;IACE,gBAAgB;;IAEhB;MACE,eAAe;MACf,kBAAkB;IACpB;;IAEA;MACE,eAAe;MACf,gBAAgB;MAChB,cAAc;MACd,kBAAkB;MAClB,qCAAqC;MACrC,sBAAsB;IACxB;EACF;AACF;;;IAGI;;MAEE;QACE,iDAAiD;;QAEjD;UACE,oCAAoC;QACtC;;QAEA;UACE,6BAA6B;QAC/B;;QAEA;UACE,6BAA6B;QAC/B;MACF;;MAEA;QACE,8DAA8D;MAChE;IACF","sourcesContent":["\n    .filter-container {\n      padding: 20px;\n      width: 320px;\n      max-width: 100%;\n    }\n\n    .filter-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 20px;\n\n      h4 {\n        margin: 0;\n        font-size: 16px;\n        font-weight: 600;\n      }\n\n      ion-button {\n        height: 32px;\n        --padding-start: 8px;\n        --padding-end: 8px;\n        font-size: 10px;\n        --color: var(--ion-color-medium);\n        \n        &:disabled {\n          opacity: 0.5;\n        }\n\n        ion-icon {\n          font-size: 16px;\n        }\n      }\n    }\n\n    .filter-section {\n      margin-bottom: 24px;\n\n      .section-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 12px;\n\n        .title {\n          font-size: 14px;\n          font-weight: 600;\n          color: var(--ion-color-dark);\n        }\n\n        .subtitle {\n          font-size: 12px;\n          color: var(--ion-color-primary);\n          font-weight: 500;\n        }\n      }\n    }\n\n    .content-types {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 8px;\n\n      .filter-chip {\n        aspect-ratio: 1;\n        padding: 12px 8px;\n        \n        ion-icon {\n          font-size: 20px;\n          margin-bottom: 6px;\n        }\n      }\n    }\n\n    .group-search {\n      margin-bottom: 12px;\n\n      .group-searchbar {\n        padding: 0;\n        --box-shadow: none;\n        --background: var(--ion-color-light);\n        --border-radius: 8px;\n        --placeholder-opacity: 0.5;\n        --placeholder-color: var(--ion-color-medium);\n        \n        .searchbar-input {\n          font-size: 14px;\n        }\n      }\n    }\n\n.group-chips {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  padding-right: 4px;\n\n  &.has-search {\n    max-height: 150px;\n  }\n\n  .filter-chip {\n    padding: 10px;\n    position: relative;\n    background: var(--ion-color-light);\n    border-radius: 8px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n\n    &.active {\n      background: var(--ion-color-primary);\n      \n      .group-icon {\n        background: rgba(255, 255, 255, 0.2) !important;\n        \n        span {\n          color: white;\n        }\n      }\n\n      .group-name {\n        color: white;\n      }\n    }\n\n    .group-icon {\n      width: 28px;\n      height: 28px;\n      border-radius: 6px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 4px;\n      overflow: hidden; \n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        border-radius: 6px;\n      }\n\n      span {\n        font-weight: 600;\n        font-size: 14px;\n        color: var(--ion-color-dark);\n      }\n    }\n\n    .group-name {\n      font-size: 13px;\n      color: var(--ion-color-dark);\n      text-align: center;\n      line-height: 1.2;\n      display: block;\n      width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .check-icon {\n      position: absolute;\n      top: 4px;\n      right: 4px;\n      font-size: 16px;\n      color: white;\n    }\n\n    &:hover {\n      opacity: 0.9;\n    }\n\n    &:active {\n      transform: scale(0.98);\n    }\n  }\n}\n\n\n    .filter-chip {\n      background: var(--ion-color-light);\n      border-radius: 8px;\n      padding: 10px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 4px;\n      cursor: pointer;\n      transition: all 0.2s ease;\n      position: relative;\n      overflow: hidden;\n\n      &.active {\n        background: var(--ion-color-primary);\n        \n        ion-icon, span {\n          color: white;\n        }\n\n        .group-icon {\n          background: rgba(255, 255, 255, 0.2) !important;\n          color: white !important;\n        }\n\n        .group-name {\n          color: white !important;\n        }\n      }\n\n      .group-icon {\n        width: 28px;\n        height: 28px;\n        border-radius: 6px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-weight: 600;\n        font-size: 14px;\n        color: var(--ion-color-dark);\n        margin-bottom: 4px;\n      }\n\n      .group-name {\n        font-size: 13px;\n        color: var(--ion-color-dark);\n        text-align: center;\n        line-height: 1.2;\n      }\n\n      .check-icon {\n        position: absolute;\n        top: 4px;\n        right: 4px;\n        font-size: 16px;\n        color: white;\n      }\n\n      &:hover {\n        transform: translateY(-1px);\n        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n      }\n\n      &:active {\n        transform: translateY(0);\n      }\n    }\n\n    .filter-actions {\n      margin-top: 8px;\n      \n      ion-button {\n        margin: 0;\n        --border-radius: 8px;\n        height: 44px;\n        font-weight: 500;\n        \n        &:disabled {\n          --background: var(--ion-color-medium);\n          opacity: 0.5;\n        }\n      }\n    }\n    .filter-chips.content-types {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n\n  .filter-chip {\n    padding: 8px 4px;\n    \n    ion-icon {\n      font-size: 20px; \n      margin-bottom: 2px; \n    }\n\n    span {\n      font-size: 11px;\n      font-weight: 500; \n      line-height: 1;\n      text-align: center;\n      -webkit-transform: translate3d(0,0,0);\n      letter-spacing: -0.2px;\n    }\n  }\n}\n\n\n    // Dark mode adjustments\n    @media (prefers-color-scheme: dark) {\n      .filter-chip {\n        background: rgba(var(--ion-color-light-rgb), 0.1);\n\n        &.active {\n          background: var(--ion-color-primary);\n        }\n\n        .group-name {\n          color: var(--ion-color-light);\n        }\n\n        .group-icon {\n          color: var(--ion-color-light);\n        }\n      }\n\n      .group-searchbar {\n        --background: rgba(var(--ion-color-light-rgb), 0.1) !important;\n      }\n    }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 37282:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 47267:
/*!****************************************************************************!*\
  !*** ./src/app/components/phone-auth/phone-auth.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 10702:
/*!************************************************************!*\
  !*** ./src/app/imagemodal/imagemodal.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.scroll-content {
  background-image: none;
}

.content {
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7) !important;
  display: flex;
  align-items: center;
}
.content img {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/app/imagemodal/imagemodal.page.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ;;AAEE;EACE,aAAA;EACA,YAAA;EACA,yCAAA;EACA,aAAA;EACA,mBAAA;AACJ;AACI;EACE,WAAA;AACN","sourcesContent":[".scroll-content {\n    background-image: none;\n  }\n\n  .content {\n    height: 100vh;\n    width: 100vw;\n    background: rgba(0, 0, 0, 0.7) !important;\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 100%;\n    }\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 22092:
/*!******************************************************************************!*\
  !*** ./src/app/reaction-list-modal/reaction-list-modal.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-header ion-toolbar:first-child {
  --background: transparent;
  --border-width: 0;
}
ion-header ion-segment {
  --background: transparent;
  padding: 8px 0;
}
ion-header ion-segment ion-segment-button {
  --background-checked: var(--ion-color-primary-tint);
  --color-checked: var(--ion-color-primary);
  --indicator-color: var(--ion-color-primary);
  min-width: 80px;
}
ion-header ion-segment ion-segment-button ion-icon {
  font-size: 20px;
  margin-right: 4px;
}
ion-header ion-segment ion-segment-button ion-label {
  font-size: 14px;
}

ion-content {
  --background: transparent;
}
ion-content ion-list {
  background: transparent;
  padding: 8px 0;
}
ion-content ion-list ion-item {
  --background: transparent;
  --background-hover: var(--ion-color-light-shade);
  margin-bottom: 1px;
}
ion-content ion-list ion-item ion-avatar {
  width: 40px;
  height: 40px;
}
ion-content ion-list ion-item ion-label h2 {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 4px;
}
ion-content ion-list ion-item ion-label .reaction-info {
  display: flex;
  align-items: center;
  color: var(--ion-color-medium);
}
ion-content ion-list ion-item ion-label .reaction-info .reaction-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
ion-content ion-list ion-item ion-label .reaction-info .reaction-type {
  font-size: 14px;
}
ion-content ion-list ion-item .timestamp {
  font-size: 12px;
  color: var(--ion-color-medium);
}
ion-content .empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 32px;
  text-align: center;
  color: var(--ion-color-medium);
}
ion-content .empty-state .empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}
ion-content .empty-state h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
}
ion-content .empty-state p {
  margin: 8px 0 0;
  font-size: 14px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
ion-item {
  animation: fadeIn 0.3s ease-out;
}

:host-context(.dark-theme) ion-content {
  --background: var(--ion-color-dark);
}
:host-context(.dark-theme) ion-content ion-item {
  --background: var(--ion-color-dark);
  --background-hover: var(--ion-color-dark-tint);
}`, "",{"version":3,"sources":["webpack://./src/app/reaction-list-modal/reaction-list-modal.page.scss"],"names":[],"mappings":"AAEE;EACE,yBAAA;EACA,iBAAA;AADJ;AAIE;EACE,yBAAA;EACA,cAAA;AAFJ;AAII;EACE,mDAAA;EACA,yCAAA;EACA,2CAAA;EACA,eAAA;AAFN;AAIM;EACE,eAAA;EACA,iBAAA;AAFR;AAKM;EACE,eAAA;AAHR;;AASA;EACE,yBAAA;AANF;AAQE;EACE,uBAAA;EACA,cAAA;AANJ;AAQI;EACE,yBAAA;EACA,gDAAA;EACA,kBAAA;AANN;AAQM;EACE,WAAA;EACA,YAAA;AANR;AAUQ;EACE,gBAAA;EACA,eAAA;EACA,kBAAA;AARV;AAWQ;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AATV;AAWU;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AATZ;AAYU;EACE,eAAA;AAVZ;AAeM;EACE,eAAA;EACA,8BAAA;AAbR;AAkBE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,8BAAA;AAhBJ;AAkBI;EACE,eAAA;EACA,mBAAA;AAhBN;AAmBI;EACE,SAAA;EACA,eAAA;EACA,gBAAA;AAjBN;AAoBI;EACE,eAAA;EACA,eAAA;AAlBN;;AAwBA;EACE;IAAO,UAAA;EApBP;EAqBA;IAAK,UAAA;EAlBL;AACF;AAoBA;EACE,+BAAA;AAlBF;;AAuBE;EACE,mCAAA;AApBJ;AAsBI;EACE,mCAAA;EACA,8CAAA;AApBN","sourcesContent":["// reaction-list-modal.page.scss\nion-header {\n  ion-toolbar:first-child {\n    --background: transparent;\n    --border-width: 0;\n  }\n\n  ion-segment {\n    --background: transparent;\n    padding: 8px 0;\n\n    ion-segment-button {\n      --background-checked: var(--ion-color-primary-tint);\n      --color-checked: var(--ion-color-primary);\n      --indicator-color: var(--ion-color-primary);\n      min-width: 80px;\n      \n      ion-icon {\n        font-size: 20px;\n        margin-right: 4px;\n      }\n      \n      ion-label {\n        font-size: 14px;\n      }\n    }\n  }\n}\n\nion-content {\n  --background: transparent;\n\n  ion-list {\n    background: transparent;\n    padding: 8px 0;\n\n    ion-item {\n      --background: transparent;\n      --background-hover: var(--ion-color-light-shade);\n      margin-bottom: 1px;\n      \n      ion-avatar {\n        width: 40px;\n        height: 40px;\n      }\n\n      ion-label {\n        h2 {\n          font-weight: 500;\n          font-size: 16px;\n          margin-bottom: 4px;\n        }\n\n        .reaction-info {\n          display: flex;\n          align-items: center;\n          color: var(--ion-color-medium);\n          \n          .reaction-icon {\n            width: 16px;\n            height: 16px;\n            margin-right: 4px;\n          }\n\n          .reaction-type {\n            font-size: 14px;\n          }\n        }\n      }\n\n      .timestamp {\n        font-size: 12px;\n        color: var(--ion-color-medium);\n      }\n    }\n  }\n\n  .empty-state {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    padding: 32px;\n    text-align: center;\n    color: var(--ion-color-medium);\n\n    .empty-icon {\n      font-size: 48px;\n      margin-bottom: 16px;\n    }\n\n    h3 {\n      margin: 0;\n      font-size: 18px;\n      font-weight: 500;\n    }\n\n    p {\n      margin: 8px 0 0;\n      font-size: 14px;\n    }\n  }\n}\n\n// Add animations\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\nion-item {\n  animation: fadeIn 0.3s ease-out;\n}\n\n// Dark mode support\n:host-context(.dark-theme) {\n  ion-content {\n    --background: var(--ion-color-dark);\n    \n    ion-item {\n      --background: var(--ion-color-dark);\n      --background-hover: var(--ion-color-dark-tint);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7032:
/*!****************************************************************************!*\
  !*** ./src/app/user-profile-modal/user-profile-modal.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --page-margin: var(--app-narrow-margin);
}

.forms-validations-content .validations-form {
  margin-bottom: calc(var(--page-margin) * 2);
}
.forms-validations-content .validations-form .inputs-list {
  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);
}
.forms-validations-content .validations-form .inputs-list .header {
  font-size: 14px;
}
.forms-validations-content .validations-form .inputs-list .error-container .error-message {
  margin: calc(var(--page-margin) / 2) 0px;
  display: flex;
  align-items: center;
  color: var(--ion-color-danger);
  font-size: 14px;
}
.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {
  padding-inline-end: calc(var(--page-margin) / 2);
  flex-shrink: 0;
}
.forms-validations-content .validations-form .submit-btn {
  margin: var(--page-margin);
}`, "",{"version":3,"sources":["webpack://./src/app/user-profile-modal/user-profile-modal.page.scss"],"names":[],"mappings":"AACA;EACI,uCAAA;AAAJ;;AAII;EACC,2CAAA;AADL;AAGK;EACE,2EAAA;AADP;AAGO;EACE,eAAA;AADT;AAIS;EACE,wCAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;AAFX;AAIW;EACE,gDAAA;EACA,cAAA;AAFb;AAQK;EACE,0BAAA;AANP","sourcesContent":["\n:host {\n    --page-margin: var(--app-narrow-margin);\n  }\n\n  .forms-validations-content {\n    .validations-form {\n     margin-bottom: calc(var(--page-margin) * 2);\n \n     .inputs-list {\n       padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n \n       .header {\n         font-size: 14px;\n       }\n       .error-container {\n         .error-message {\n           margin: calc(var(--page-margin) / 2) 0px;\n           display: flex;\n           align-items: center;\n           color: var(--ion-color-danger);\n           font-size: 14px;\n \n           ion-icon {\n             padding-inline-end: calc(var(--page-margin) / 2);\n             flex-shrink: 0;\n           }\n         }\n         }\n     }\n \n     .submit-btn {\n       margin: var(--page-margin);\n     }\n   }\n \n }\n\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 35358:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 85637,
	"./af.js": 85637,
	"./ar": 6777,
	"./ar-dz": 74508,
	"./ar-dz.js": 74508,
	"./ar-kw": 67504,
	"./ar-kw.js": 67504,
	"./ar-ly": 95373,
	"./ar-ly.js": 95373,
	"./ar-ma": 92412,
	"./ar-ma.js": 92412,
	"./ar-ps": 78823,
	"./ar-ps.js": 78823,
	"./ar-sa": 36670,
	"./ar-sa.js": 36670,
	"./ar-tn": 36448,
	"./ar-tn.js": 36448,
	"./ar.js": 6777,
	"./az": 23009,
	"./az.js": 23009,
	"./be": 28299,
	"./be.js": 28299,
	"./bg": 4685,
	"./bg.js": 4685,
	"./bm": 11171,
	"./bm.js": 11171,
	"./bn": 23590,
	"./bn-bd": 5841,
	"./bn-bd.js": 5841,
	"./bn.js": 23590,
	"./bo": 54309,
	"./bo.js": 54309,
	"./br": 54130,
	"./br.js": 54130,
	"./bs": 8033,
	"./bs.js": 8033,
	"./ca": 55294,
	"./ca.js": 55294,
	"./cs": 53028,
	"./cs.js": 53028,
	"./cv": 5807,
	"./cv.js": 5807,
	"./cy": 70342,
	"./cy.js": 70342,
	"./da": 38269,
	"./da.js": 38269,
	"./de": 11489,
	"./de-at": 42123,
	"./de-at.js": 42123,
	"./de-ch": 17757,
	"./de-ch.js": 17757,
	"./de.js": 11489,
	"./dv": 28152,
	"./dv.js": 28152,
	"./el": 7687,
	"./el.js": 7687,
	"./en-au": 46668,
	"./en-au.js": 46668,
	"./en-ca": 76798,
	"./en-ca.js": 76798,
	"./en-gb": 53615,
	"./en-gb.js": 53615,
	"./en-ie": 91364,
	"./en-ie.js": 91364,
	"./en-il": 79907,
	"./en-il.js": 79907,
	"./en-in": 70533,
	"./en-in.js": 70533,
	"./en-nz": 33190,
	"./en-nz.js": 33190,
	"./en-sg": 51096,
	"./en-sg.js": 51096,
	"./eo": 3962,
	"./eo.js": 3962,
	"./es": 37726,
	"./es-do": 65010,
	"./es-do.js": 65010,
	"./es-mx": 63654,
	"./es-mx.js": 63654,
	"./es-us": 59043,
	"./es-us.js": 59043,
	"./es.js": 37726,
	"./et": 25343,
	"./et.js": 25343,
	"./eu": 90728,
	"./eu.js": 90728,
	"./fa": 60787,
	"./fa.js": 60787,
	"./fi": 71771,
	"./fi.js": 71771,
	"./fil": 45335,
	"./fil.js": 45335,
	"./fo": 69761,
	"./fo.js": 69761,
	"./fr": 1670,
	"./fr-ca": 28991,
	"./fr-ca.js": 28991,
	"./fr-ch": 97280,
	"./fr-ch.js": 97280,
	"./fr.js": 1670,
	"./fy": 24203,
	"./fy.js": 24203,
	"./ga": 69858,
	"./ga.js": 69858,
	"./gd": 38605,
	"./gd.js": 38605,
	"./gl": 27365,
	"./gl.js": 27365,
	"./gom-deva": 33896,
	"./gom-deva.js": 33896,
	"./gom-latn": 95587,
	"./gom-latn.js": 95587,
	"./gu": 97950,
	"./gu.js": 97950,
	"./he": 92029,
	"./he.js": 92029,
	"./hi": 51897,
	"./hi.js": 51897,
	"./hr": 29816,
	"./hr.js": 29816,
	"./hu": 22253,
	"./hu.js": 22253,
	"./hy-am": 28196,
	"./hy-am.js": 28196,
	"./id": 51307,
	"./id.js": 51307,
	"./is": 95474,
	"./is.js": 95474,
	"./it": 23099,
	"./it-ch": 45807,
	"./it-ch.js": 45807,
	"./it.js": 23099,
	"./ja": 19127,
	"./ja.js": 19127,
	"./jv": 30182,
	"./jv.js": 30182,
	"./ka": 10758,
	"./ka.js": 10758,
	"./kk": 93444,
	"./kk.js": 93444,
	"./km": 72034,
	"./km.js": 72034,
	"./kn": 46223,
	"./kn.js": 46223,
	"./ko": 83064,
	"./ko.js": 83064,
	"./ku": 8714,
	"./ku-kmr": 10961,
	"./ku-kmr.js": 10961,
	"./ku.js": 8714,
	"./ky": 12062,
	"./ky.js": 12062,
	"./lb": 84796,
	"./lb.js": 84796,
	"./lo": 19279,
	"./lo.js": 19279,
	"./lt": 106,
	"./lt.js": 106,
	"./lv": 11840,
	"./lv.js": 11840,
	"./me": 42240,
	"./me.js": 42240,
	"./mi": 13588,
	"./mi.js": 13588,
	"./mk": 15518,
	"./mk.js": 15518,
	"./ml": 37823,
	"./ml.js": 37823,
	"./mn": 98657,
	"./mn.js": 98657,
	"./mr": 61285,
	"./mr.js": 61285,
	"./ms": 43014,
	"./ms-my": 86253,
	"./ms-my.js": 86253,
	"./ms.js": 43014,
	"./mt": 20167,
	"./mt.js": 20167,
	"./my": 47940,
	"./my.js": 47940,
	"./nb": 50014,
	"./nb.js": 50014,
	"./ne": 49023,
	"./ne.js": 49023,
	"./nl": 34208,
	"./nl-be": 71412,
	"./nl-be.js": 71412,
	"./nl.js": 34208,
	"./nn": 81354,
	"./nn.js": 81354,
	"./oc-lnc": 40870,
	"./oc-lnc.js": 40870,
	"./pa-in": 80389,
	"./pa-in.js": 80389,
	"./pl": 7342,
	"./pl.js": 7342,
	"./pt": 34774,
	"./pt-br": 73003,
	"./pt-br.js": 73003,
	"./pt.js": 34774,
	"./ro": 85333,
	"./ro.js": 85333,
	"./ru": 73451,
	"./ru.js": 73451,
	"./sd": 43921,
	"./sd.js": 43921,
	"./se": 59682,
	"./se.js": 59682,
	"./si": 80582,
	"./si.js": 80582,
	"./sk": 4348,
	"./sk.js": 4348,
	"./sl": 95337,
	"./sl.js": 95337,
	"./sq": 39358,
	"./sq.js": 39358,
	"./sr": 50683,
	"./sr-cyrl": 69382,
	"./sr-cyrl.js": 69382,
	"./sr.js": 50683,
	"./ss": 51156,
	"./ss.js": 51156,
	"./sv": 29855,
	"./sv.js": 29855,
	"./sw": 18536,
	"./sw.js": 18536,
	"./ta": 15373,
	"./ta.js": 15373,
	"./te": 37809,
	"./te.js": 37809,
	"./tet": 61297,
	"./tet.js": 61297,
	"./tg": 92527,
	"./tg.js": 92527,
	"./th": 85862,
	"./th.js": 85862,
	"./tk": 79331,
	"./tk.js": 79331,
	"./tl-ph": 44387,
	"./tl-ph.js": 44387,
	"./tlh": 3592,
	"./tlh.js": 3592,
	"./tr": 79732,
	"./tr.js": 79732,
	"./tzl": 99570,
	"./tzl.js": 99570,
	"./tzm": 83553,
	"./tzm-latn": 7699,
	"./tzm-latn.js": 7699,
	"./tzm.js": 83553,
	"./ug-cn": 25674,
	"./ug-cn.js": 25674,
	"./uk": 69974,
	"./uk.js": 69974,
	"./ur": 45773,
	"./ur.js": 45773,
	"./uz": 357,
	"./uz-latn": 77135,
	"./uz-latn.js": 77135,
	"./uz.js": 357,
	"./vi": 20043,
	"./vi.js": 20043,
	"./x-pseudo": 40767,
	"./x-pseudo.js": 40767,
	"./yo": 80150,
	"./yo.js": 80150,
	"./zh-cn": 21828,
	"./zh-cn.js": 21828,
	"./zh-hk": 86644,
	"./zh-hk.js": 86644,
	"./zh-mo": 79305,
	"./zh-mo.js": 79305,
	"./zh-tw": 31860,
	"./zh-tw.js": 31860
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35358;

/***/ }),

/***/ 61584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 77471:
/*!****************************************************************************!*\
  !*** ./src/app/components/phone-auth/phone-auth.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- src/app/components/phone-auth/phone-auth.component.html -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Phone Authentication</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ng-container *ngIf=\"!showOtpInput\">\n    <!-- Phone Number Input -->\n    <form [formGroup]=\"phoneForm\" (ngSubmit)=\"sendOTP()\">\n      <ion-item>\n        <ion-label position=\"stacked\">Phone Number</ion-label>\n        <ion-input \n          type=\"tel\" \n          formControlName=\"phoneNumber\"\n          placeholder=\"Enter your phone number\">\n        </ion-input>\n      </ion-item>\n\n      <div class=\"error-message\" *ngIf=\"phoneForm.get('phoneNumber').touched && phoneForm.get('phoneNumber').errors?.pattern\">\n        Please enter a valid phone number\n      </div>\n\n      <!-- reCAPTCHA container -->\n      <div id=\"recaptcha-container\" class=\"ion-margin-vertical\"></div>\n\n      <ion-button \n        expand=\"block\" \n        type=\"submit\" \n        [disabled]=\"!phoneForm.valid || loading\"\n        class=\"ion-margin-top\">\n        <ion-spinner *ngIf=\"loading\"></ion-spinner>\n        <span *ngIf=\"!loading\">Send OTP</span>\n      </ion-button>\n    </form>\n  </ng-container>\n\n  <ng-container *ngIf=\"showOtpInput\">\n    <!-- OTP Input -->\n    <form [formGroup]=\"otpForm\" (ngSubmit)=\"verifyOTP()\">\n      <ion-item>\n        <ion-label position=\"stacked\">Enter OTP</ion-label>\n        <ion-input \n          type=\"number\" \n          formControlName=\"otp\"\n          placeholder=\"Enter 6-digit OTP\">\n        </ion-input>\n      </ion-item>\n\n      <div class=\"error-message\" *ngIf=\"otpForm.get('otp').touched && otpForm.get('otp').errors?.pattern\">\n        Please enter a valid 6-digit OTP\n      </div>\n\n      <ion-button \n        expand=\"block\" \n        type=\"submit\" \n        [disabled]=\"!otpForm.valid || loading\"\n        class=\"ion-margin-top\">\n        <ion-spinner *ngIf=\"loading\"></ion-spinner>\n        <span *ngIf=\"!loading\">Verify OTP</span>\n      </ion-button>\n    </form>\n  </ng-container>\n</ion-content>\n";

/***/ }),

/***/ 64650:
/*!************************************************************!*\
  !*** ./src/app/imagemodal/imagemodal.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div class=\"content\" (click)=\"close()\" tappable>\n    <img src={{img}} />\n  </div>\n</ion-content>";

/***/ }),

/***/ 66323:
/*!******************************************************************************!*\
  !*** ./src/app/reaction-list-modal/reaction-list-modal.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Reactions</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-avatar slot=\"start\">\n        <ion-img src=\"{{item.addedByUser.addedByImg}}\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.addedByUser.addedByUsername}}</h2>\n        <!--<p>Sneaky little hobbitses!</p> -->\n      </ion-label>\n      <ion-icon size=\"small\" *ngIf=\"item.reactionType\" class=\"icon\" [src]=\"'./assets/icon/' + item.reactionType + '.svg'\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n</ion-content>";

/***/ }),

/***/ 59200:
/*!****************************************************************************!*\
  !*** ./src/app/user-profile-modal/user-profile-modal.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Update Profile</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button (click)=\"dismissModal()\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"forms-validations-content\">\n    <form class=\"validations-form\" [formGroup]=\"myForm\">\n      <ion-list class=\"inputs-list\" lines=\"none\">\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">Full Name:</ion-label>\n          <ion-input type=\"text\" class=\"myform\" placeholder=\"Full name\" formControlName=\"name\" [(ngModel)]=\"user.name\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">Username:</ion-label>\n          <ion-input placeholder=\"Username\" class=\"myform\"  formControlName=\"username\" type=\"text\" [(ngModel)]=\"user.username\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">My Story:</ion-label>\n          <ion-textarea rows=\"10\" formControlName=\"bio\" class=\"myform\"  placeholder=\"Status\" [(ngModel)]=\"user.description\"></ion-textarea>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input placeholder=\"Email\" class=\"myform\"  type=\"text\" formControlName=\"email\" [(ngModel)]=\"user.email\" disabled></ion-input>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button class=\"save\" color=\"secondary\" expand=\"block\" (click)=\"save()\">Save Changes</ion-button>\n        </div>\n      </ion-list>\n    </form>\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map