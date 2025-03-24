(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 20637:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageModule: () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.router.module */ 63324);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 70054);







let TabsPageModule = class TabsPageModule {};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
  declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
})], TabsPageModule);


/***/ }),

/***/ 70054:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 4058);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 88774);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 60850);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 61318);











let TabsPage = class TabsPage {
  // TabsPage
  // This is the page where we set our tabs.
  constructor(dataProvider, storage, router, afAuth, firestore) {
    this.dataProvider = dataProvider;
    this.storage = storage;
    this.router = router;
    this.afAuth = afAuth;
    this.firestore = firestore;
    // Get friend requests count.
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      console.info('this.afAuth.currentUser', this.loggedInUserId);
      this.dataProvider.getRequests(this.loggedInUserId).snapshotChanges().subscribe(requestsRes => {
        if (requestsRes.payload != null) {
          const requests = requestsRes.payload.data();
          if (requests != null) {
            if (requests.friendRequests != null && requests.friendRequests !== undefined) {
              this.friendRequestCount = requests.friendRequests.length;
            } else {
              this.friendRequestCount = 0;
            }
          } else {
            this.friendRequestCount = 0;
          }
        }
      });
    });
  }
  ionViewDidEnter() {}
  ngOnInit() {
    // First get the user ID, then start the messages subscription
    this.afAuth.currentUser.then(user => {
      if (user) {
        this.loggedInUserId = user.uid;
        console.info('User ID set:', this.loggedInUserId);
        console.info('this.afAuth.currentUser', this.loggedInUserId);
        this.dataProvider.getRequests(this.loggedInUserId).snapshotChanges().subscribe(requestsRes => {
          if (requestsRes.payload != null) {
            const requests = requestsRes.payload.data();
            if (requests != null) {
              if (requests.friendRequests != null && requests.friendRequests !== undefined) {
                this.friendRequestCount = requests.friendRequests.length;
              } else {
                this.friendRequestCount = 0;
              }
            } else {
              this.friendRequestCount = 0;
            }
          }
        });
        // Only start the subscription after we have the user ID
        this.unreadSubscription = this.getUnreadUserMessagesCountStream().subscribe(totalUnread => {
          console.log('Total unread messages:', totalUnread);
          this.totalUnreadMessages = totalUnread;
        });
      }
    });
  }
  ngOnDestroy() {
    if (this.unreadSubscription) {
      this.unreadSubscription.unsubscribe();
    }
  }
  viewProfile() {
    this.router.navigateByUrl('/profile/' + this.dataProvider.getCurrentUserId());
  }
  // getFriendRequests() {
  //   this.friendRequests = [];
  //   // Get user info
  //   this.dataProvider.getCurrentUser().then((u) => {
  //     u.snapshotChanges().subscribe((accountRes: any) => {
  //       this.account = accountRes.payload.data();
  //       // Get friendRequests and requestsSent of the user.
  //       this.dataProvider.getRequests(this.account.userId).snapshotChanges().subscribe((requestsRes: any) => {
  //         // friendRequests.
  //         let requests = requestsRes.payload.data();
  //         if (requests != null) {
  //           if (requests.friendRequests != null && requests.friendRequests !== undefined) {
  //             this.friendRequests = [];
  //             this.friendRequestCount = requests.friendRequests.length;
  //             requests.friendRequests.forEach((userId) => {
  //               this.dataProvider.getUser(userId).snapshotChanges().subscribe((sender: any) => {
  //                 sender = { $key: sender.payload.data().userId, ...sender.payload.data() };
  //                 this.addOrUpdateFriendRequest(sender);
  //               });
  //             });
  //           } else {
  //             this.friendRequests = [];
  //           }
  //           // requestsSent.
  //           if (requests.requestsSent != null && requests.requestsSent != undefined) {
  //             this.requestsSent = [];
  //             requests.requestsSent.forEach((userId) => {
  //               this.dataProvider.getUser(userId).snapshotChanges().subscribe((receiver: any) => {
  //                 receiver = { $key: receiver.payload.data().userId, ...receiver.payload.data() };
  //                 this.addOrUpdateRequestSent(receiver);
  //               });
  //             });
  //           } else {
  //             this.requestsSent = [];
  //           }
  //         }
  //         this.loadingProvider.hide();
  //       });
  //   });
  //   })
  // }
  // Alternative real-time version using observables
  getUnreadUserMessagesCountStream() {
    if (!this.loggedInUserId) {
      console.warn('No user ID available');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(0);
    }
    return this.firestore.collection(`accounts/${this.loggedInUserId}/conversations`).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(userConvs => {
      // Get all conversation IDs and messagesRead counts
      const conversationData = userConvs.map(conv => {
        const data = conv.payload.doc.data();
        return {
          conversationId: data.conversationId,
          messagesRead: data.messagesRead || 0
        };
      });
      // Get the actual conversations from root collection
      const conversationObservables = conversationData.map(conv => this.firestore.doc(`conversations/${conv.conversationId}`).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(snapshot => {
        const data = snapshot.payload.data();
        return {
          messagesRead: conv.messagesRead,
          totalMessages: data.messages?.length || 0
        };
      })));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)(conversationObservables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(results => {
        return results.reduce((total, result) => {
          const unreadCount = Math.max(0, result.totalMessages - result.messagesRead);
          console.log('Messages:', result.totalMessages, 'Read:', result.messagesRead, 'Unread:', unreadCount);
          return total + unreadCount;
        }, 0);
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      console.error('Firestore error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(0);
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
  }, {
    type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore
  }];
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-tabs',
  template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsPage);


/***/ }),

/***/ 63324:
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 70054);




const routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'tab1',
    children: [{
      path: '',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_components_emoji-picker_emoji-picker_component_ts-src_app_services_bookmark_s-0c5c8c"), __webpack_require__.e("src_app_feed_feed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../feed/feed.module */ 85105)).then(m => m.FeedPageModule)
      // canActivate: [AuthGuardService]
    }]
  }, {
    path: 'tab2',
    children: [{
      path: '',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_groups_groups_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../groups/groups.module */ 68953)).then(m => m.GroupsPageModule)
      // canActivate: [AuthGuardService]
    }]
  }, {
    path: 'tab3',
    children: [{
      path: '',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_messages_messages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../messages/messages.module */ 97477)).then(m => m.MessagesPageModule)
      // canActivate: [AuthGuardService]
    }]
  }, {
    path: 'tab4',
    children: [{
      path: '',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_friends_friends_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../friends/friends.module */ 95487)).then(m => m.FriendsPageModule)
      // canActivate: [AuthGuardService]
    }]
  }, {
    path: 'tab5',
    children: [{
      path: '',
      loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 4219)).then(m => m.ProfilePageModule)
      // canActivate: [AuthGuardService]
    }]
  }, {
    path: 'tab6',
    children: [{
      path: '',
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin-categories_admin-categories_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../admin-categories/admin-categories.module */ 54369)).then(m => m.AdminCategoriesPageModule)
      // canActivate: [AuthGuardService]
    }]
  }, {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: '/tabs/tab1',
  pathMatch: 'full'
}];
let TabsPageRoutingModule = class TabsPageRoutingModule {};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TabsPageRoutingModule);


/***/ }),

/***/ 88774:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tabs ion-tab-bar {
  --background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: none;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  padding: 5px 10px 10px 10px;
  height: 60px;
}
.tabs ion-tab-bar ion-tab-button {
  --color: #b3b3b3;
  --color-selected: var(--ion-color-primary);
  --background: transparent;
  --background-focused: transparent;
  --ripple-color: transparent;
  position: relative;
}
.tabs ion-tab-bar ion-tab-button ion-icon {
  transition: all 0.2s ease;
  font-size: 22px;
  margin-bottom: 1px;
}
.tabs ion-tab-bar ion-tab-button ion-label {
  font-size: 11px;
  font-weight: 500;
  margin-top: 2px;
  transition: all 0.2s ease;
}
.tabs ion-tab-bar ion-tab-button ion-badge {
  position: absolute;
  top: 2px;
  right: calc(50% - 12px);
  padding: 3px 6px;
  border-radius: 8px;
  font-size: 10px;
  min-width: 16px;
  min-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabs ion-tab-bar ion-tab-button.tab-selected ion-icon {
  transform: translateY(-2px);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}
.tabs ion-tab-bar ion-tab-button.tab-selected ion-label {
  font-weight: 600;
  color: var(--ion-color-primary);
}
.tabs ion-tab-bar ion-tab-button:hover ion-icon {
  transform: translateY(-1px);
}

@keyframes scaleIn {
  0% {
    transform: scale(0.9) translateY(0);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(-2px);
    opacity: 1;
  }
}
:root {
  --ion-tab-bar-background: rgba(255, 255, 255, 0.95);
  --ion-tab-bar-color: #b3b3b3;
  --ion-tab-bar-color-selected: var(--ion-color-primary);
  --ion-tab-indicator-height: 2px;
}

.tabs ion-tab-bar ion-tab-button.tab-selected {
  background: rgba(var(--ion-color-primary-rgb), 0.08);
  border-radius: 12px;
}`, "",{"version":3,"sources":["webpack://./src/app/tabs/tabs.page.scss"],"names":[],"mappings":"AACE;EACE,uCAAA;EACA,2BAAA;EACA,mCAAA;EACA,gBAAA;EACA,2CAAA;EACA,2BAAA;EACA,YAAA;AAAJ;AAEI;EACE,gBAAA;EACA,0CAAA;EACA,yBAAA;EACA,iCAAA;EACA,2BAAA;EACA,kBAAA;AAAN;AAEM;EACE,yBAAA;EACA,eAAA;EACA,kBAAA;AAAR;AAGM;EACE,eAAA;EACA,gBAAA;EACA,eAAA;EACA,yBAAA;AADR;AAIM;EACE,kBAAA;EACA,QAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAFR;AAOQ;EACE,2BAAA;EACA,iDAAA;AALV;AAQQ;EACE,gBAAA;EACA,+BAAA;AANV;AAYQ;EACE,2BAAA;AAVV;;AAkBA;EACE;IACE,mCAAA;IACA,UAAA;EAfF;EAiBA;IACE,oCAAA;IACA,UAAA;EAfF;AACF;AAmBA;EACE,mDAAA;EACA,4BAAA;EACA,sDAAA;EACA,+BAAA;AAjBF;;AAsBE;EACE,oDAAA;EACA,mBAAA;AAnBJ","sourcesContent":[".tabs {\n  ion-tab-bar {\n    --background: rgba(255, 255, 255, 0.95);\n    backdrop-filter: blur(10px);\n    -webkit-backdrop-filter: blur(10px);\n    border-top: none;\n    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);\n    padding: 5px 10px 10px 10px; // Reduced padding\n    height: 60px; // Reduced height from 85px\n\n    ion-tab-button {\n      --color: #b3b3b3;\n      --color-selected: var(--ion-color-primary);\n      --background: transparent;\n      --background-focused: transparent;\n      --ripple-color: transparent;\n      position: relative;\n      \n      ion-icon {\n        transition: all 0.2s ease; // Slightly faster animation\n        font-size: 22px; // Reduced from 28px\n        margin-bottom: 1px; // Reduced from 5px\n      }\n\n      ion-label {\n        font-size: 11px; // Reduced from 12px\n        font-weight: 500;\n        margin-top: 2px; // Reduced from 4px\n        transition: all 0.2s ease;\n      }\n\n      ion-badge {\n        position: absolute;\n        top: 2px; // Reduced from 5px\n        right: calc(50% - 12px); // Adjusted for smaller size\n        padding: 3px 6px; // Reduced padding\n        border-radius: 8px;\n        font-size: 10px;\n        min-width: 16px;\n        min-height: 16px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      // Selected state\n      &.tab-selected {\n        ion-icon {\n          transform: translateY(-2px); // Reduced from -4px\n          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1)); // Reduced shadow\n        }\n\n        ion-label {\n          font-weight: 600;\n          color: var(--ion-color-primary);\n        }\n      }\n\n      // Hover effects\n      &:hover {\n        ion-icon {\n          transform: translateY(-1px); // Reduced from -2px\n        }\n      }\n    }\n  }\n}\n\n// Updated animation\n@keyframes scaleIn {\n  0% {\n    transform: scale(0.9) translateY(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1) translateY(-2px);\n    opacity: 1;\n  }\n}\n\n// Updated root variables\n:root {\n  --ion-tab-bar-background: rgba(255, 255, 255, 0.95);\n  --ion-tab-bar-color: #b3b3b3;\n  --ion-tab-bar-color-selected: var(--ion-color-primary);\n  --ion-tab-indicator-height: 2px;\n}\n\n// Updated background highlight\n.tabs ion-tab-bar ion-tab-button {\n  &.tab-selected {\n    background: rgba(var(--ion-color-primary-rgb), 0.08); // Reduced opacity\n    border-radius: 12px; // Reduced from 16px\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4058:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs class=\"tabs\">\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon size=\"large\" name=\"home\"></ion-icon>\n      <ion-label size=\"small\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon size=\"large\" name=\"list\"></ion-icon>\n      <ion-label size=\"small\">Groups</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon size=\"large\" name=\"chatbubbles\"></ion-icon>\n      <ion-badge *ngIf=\"totalUnreadMessages > 0\">{{totalUnreadMessages}}</ion-badge>\n      <ion-label size=\"small\">Messages</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon size=\"large\" name=\"people\"></ion-icon>\n      <ion-badge *ngIf=\"friendRequestCount > 0\">{{friendRequestCount}}</ion-badge>\n      <ion-label size=\"small\">Friends</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab5\">\n      <ion-icon size=\"large\" name=\"ellipsis-horizontal\"></ion-icon>\n      <ion-label size=\"small\">More</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab6\">\n      <ion-icon size=\"large\" name=\"settings-outline\"></ion-icon>\n      <ion-label size=\"small\">Admin</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map