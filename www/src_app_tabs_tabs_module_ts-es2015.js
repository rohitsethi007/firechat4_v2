"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.router.module */ 88345);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 8711);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 79593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 54357);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 18293);











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
            this.loggedInUserId = user === null || user === void 0 ? void 0 : user.uid;
            console.info('this.afAuth.currentUser', this.loggedInUserId);
            this.dataProvider.getRequests(this.loggedInUserId).snapshotChanges().subscribe((requestsRes) => {
                if (requestsRes.payload != null) {
                    const requests = requestsRes.payload.data();
                    if (requests != null) {
                        if (requests.friendRequests != null && requests.friendRequests !== undefined) {
                            this.friendRequestCount = requests.friendRequests.length;
                        }
                        else {
                            this.friendRequestCount = 0;
                        }
                    }
                    else {
                        this.friendRequestCount = 0;
                    }
                }
            });
        });
    }
    ionViewDidEnter() {
    }
    ngOnInit() {
        // First get the user ID, then start the messages subscription
        this.afAuth.currentUser.then(user => {
            if (user) {
                this.loggedInUserId = user.uid;
                console.info('User ID set:', this.loggedInUserId);
                console.info('this.afAuth.currentUser', this.loggedInUserId);
                this.dataProvider.getRequests(this.loggedInUserId).snapshotChanges().subscribe((requestsRes) => {
                    if (requestsRes.payload != null) {
                        const requests = requestsRes.payload.data();
                        if (requests != null) {
                            if (requests.friendRequests != null && requests.friendRequests !== undefined) {
                                this.friendRequestCount = requests.friendRequests.length;
                            }
                            else {
                                this.friendRequestCount = 0;
                            }
                        }
                        else {
                            this.friendRequestCount = 0;
                        }
                    }
                });
                // Only start the subscription after we have the user ID
                this.unreadSubscription = this.getUnreadUserMessagesCountStream()
                    .subscribe(totalUnread => {
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
        return this.firestore
            .collection(`accounts/${this.loggedInUserId}/conversations`)
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(userConvs => {
            // Get all conversation IDs and messagesRead counts
            const conversationData = userConvs.map(conv => {
                const data = conv.payload.doc.data();
                return {
                    conversationId: data.conversationId,
                    messagesRead: data.messagesRead || 0
                };
            });
            // Get the actual conversations from root collection
            const conversationObservables = conversationData.map(conv => this.firestore
                .doc(`conversations/${conv.conversationId}`)
                .snapshotChanges()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(snapshot => {
                var _a;
                const data = snapshot.payload.data();
                return {
                    messagesRead: conv.messagesRead,
                    totalMessages: ((_a = data.messages) === null || _a === void 0 ? void 0 : _a.length) || 0
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
};
TabsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-tabs',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService,
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore])
], TabsPage);



/***/ }),

/***/ 88345:
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth-guard.service */ 78968);





const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_feed_feed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../feed/feed.module */ 5628)).then(m => m.FeedPageModule)
                        // canActivate: [AuthGuardService]
                    }
                ]
            }, {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_groups_groups_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../groups/groups.module */ 33596)).then(m => m.GroupsPageModule)
                        // canActivate: [AuthGuardService]
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_messages_messages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../messages/messages.module */ 84812)).then(m => m.MessagesPageModule),
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_friends_friends_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../friends/friends.module */ 50945)).then(m => m.FriendsPageModule),
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
                    }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 84523)).then(m => m.ProfilePageModule),
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
                    }
                ]
            },
            {
                path: 'tab6',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin-categories_admin-categories_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../admin-categories/admin-categories.module */ 25779)).then(m => m.AdminCategoriesPageModule),
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
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
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 8711:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tabs/tabs.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs class=\"tabs\">\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon size=\"large\" name=\"home\"></ion-icon>\n      <ion-label size=\"small\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon size=\"large\" name=\"list\"></ion-icon>\n      <ion-label size=\"small\">Groups</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon size=\"large\" name=\"chatbubbles\"></ion-icon>\n      <ion-badge *ngIf=\"totalUnreadMessages > 0\">{{totalUnreadMessages}}</ion-badge>\n      <ion-label size=\"small\">Messages</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon size=\"large\" name=\"people\"></ion-icon>\n      <ion-badge *ngIf=\"friendRequestCount > 0\">{{friendRequestCount}}</ion-badge>\n      <ion-label size=\"small\">Friends</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab5\">\n      <ion-icon size=\"large\" name=\"ellipsis-horizontal\"></ion-icon>\n      <ion-label size=\"small\">More</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab6\">\n      <ion-icon size=\"large\" name=\"settings-outline\"></ion-icon>\n      <ion-label size=\"small\">Admin</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ 79593:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ (function(module) {

module.exports = ".tabs ion-tab-bar {\n  --background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-top: none;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);\n  padding: 5px 10px 10px 10px;\n  height: 60px;\n}\n.tabs ion-tab-bar ion-tab-button {\n  --color: #b3b3b3;\n  --color-selected: var(--ion-color-primary);\n  --background: transparent;\n  --background-focused: transparent;\n  --ripple-color: transparent;\n  position: relative;\n}\n.tabs ion-tab-bar ion-tab-button ion-icon {\n  transition: all 0.2s ease;\n  font-size: 22px;\n  margin-bottom: 1px;\n}\n.tabs ion-tab-bar ion-tab-button ion-label {\n  font-size: 11px;\n  font-weight: 500;\n  margin-top: 2px;\n  transition: all 0.2s ease;\n}\n.tabs ion-tab-bar ion-tab-button ion-badge {\n  position: absolute;\n  top: 2px;\n  right: calc(50% - 12px);\n  padding: 3px 6px;\n  border-radius: 8px;\n  font-size: 10px;\n  min-width: 16px;\n  min-height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tabs ion-tab-bar ion-tab-button.tab-selected ion-icon {\n  transform: translateY(-2px);\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n}\n.tabs ion-tab-bar ion-tab-button.tab-selected ion-label {\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.tabs ion-tab-bar ion-tab-button:hover ion-icon {\n  transform: translateY(-1px);\n}\n@keyframes scaleIn {\n  0% {\n    transform: scale(0.9) translateY(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1) translateY(-2px);\n    opacity: 1;\n  }\n}\n:root {\n  --ion-tab-bar-background: rgba(255, 255, 255, 0.95);\n  --ion-tab-bar-color: #b3b3b3;\n  --ion-tab-bar-color-selected: var(--ion-color-primary);\n  --ion-tab-indicator-height: 2px;\n}\n.tabs ion-tab-bar ion-tab-button.tab-selected {\n  background: rgba(var(--ion-color-primary-rgb), 0.08);\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7RUFDRSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUVNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRFI7QUFJTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZSO0FBT1E7RUFDRSwyQkFBQTtFQUNBLGlEQUFBO0FBTFY7QUFRUTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7QUFOVjtBQVlRO0VBQ0UsMkJBQUE7QUFWVjtBQWtCQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxVQUFBO0VBZkY7RUFpQkE7SUFDRSxvQ0FBQTtJQUNBLFVBQUE7RUFmRjtBQUNGO0FBbUJBO0VBQ0UsbURBQUE7RUFDQSw0QkFBQTtFQUNBLHNEQUFBO0VBQ0EsK0JBQUE7QUFqQkY7QUFzQkU7RUFDRSxvREFBQTtFQUNBLG1CQUFBO0FBbkJKIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuICBpb24tdGFiLWJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgLTJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4OyAvLyBSZWR1Y2VkIHBhZGRpbmdcbiAgICBoZWlnaHQ6IDYwcHg7IC8vIFJlZHVjZWQgaGVpZ2h0IGZyb20gODVweFxuXG4gICAgaW9uLXRhYi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogI2IzYjNiMztcbiAgICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTsgLy8gU2xpZ2h0bHkgZmFzdGVyIGFuaW1hdGlvblxuICAgICAgICBmb250LXNpemU6IDIycHg7IC8vIFJlZHVjZWQgZnJvbSAyOHB4XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFweDsgLy8gUmVkdWNlZCBmcm9tIDVweFxuICAgICAgfVxuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDExcHg7IC8vIFJlZHVjZWQgZnJvbSAxMnB4XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDsgLy8gUmVkdWNlZCBmcm9tIDRweFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgfVxuXG4gICAgICBpb24tYmFkZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMnB4OyAvLyBSZWR1Y2VkIGZyb20gNXB4XG4gICAgICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDEycHgpOyAvLyBBZGp1c3RlZCBmb3Igc21hbGxlciBzaXplXG4gICAgICAgIHBhZGRpbmc6IDNweCA2cHg7IC8vIFJlZHVjZWQgcGFkZGluZ1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWluLXdpZHRoOiAxNnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLy8gU2VsZWN0ZWQgc3RhdGVcbiAgICAgICYudGFiLXNlbGVjdGVkIHtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgLy8gUmVkdWNlZCBmcm9tIC00cHhcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSkpOyAvLyBSZWR1Y2VkIHNoYWRvd1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSG92ZXIgZWZmZWN0c1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IC8vIFJlZHVjZWQgZnJvbSAtMnB4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXBkYXRlZCBhbmltYXRpb25cbkBrZXlmcmFtZXMgc2NhbGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8vIFVwZGF0ZWQgcm9vdCB2YXJpYWJsZXNcbjpyb290IHtcbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICAtLWlvbi10YWItYmFyLWNvbG9yOiAjYjNiM2IzO1xuICAtLWlvbi10YWItYmFyLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0taW9uLXRhYi1pbmRpY2F0b3ItaGVpZ2h0OiAycHg7XG59XG5cbi8vIFVwZGF0ZWQgYmFja2dyb3VuZCBoaWdobGlnaHRcbi50YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIHtcbiAgJi50YWItc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wOCk7IC8vIFJlZHVjZWQgb3BhY2l0eVxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7IC8vIFJlZHVjZWQgZnJvbSAxNnB4XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es2015.js.map