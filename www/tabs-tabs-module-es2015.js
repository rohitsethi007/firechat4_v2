(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"tab1\">\r\n      <ion-icon size=\"large\" name=\"newspaper-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button  class=\"filters-btn\" tab=\"tab2\">\r\n      <ion-icon size=\"large\" name=\"people-outline\"></ion-icon>\r\n      <ion-badge *ngIf=\"getUnreadGroupMessagesCount() != null\">{{getUnreadGroupMessagesCount()}}</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button class=\"filters-btn\" tab=\"tab3\">\r\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n      <ion-badge size=\"large\" *ngIf=\"getUnreadMessagesCount() != null\">{{getUnreadMessagesCount()}}</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button  class=\"filters-btn\" tab=\"tab4\">\r\n      <ion-icon size=\"large\" name=\"list-outline\"></ion-icon>\r\n      <ion-badge *ngIf=\"friendRequestCount != null\">{{friendRequestCount}}</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button class=\"filters-btn\" tab=\"tab5\">\r\n      <ion-icon size=\"large\" name=\"contact-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filters-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  font-size: 18px;\n  height: initial;\n}\n\nion-tab-button {\n  --color-selected: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUNGWjs7QURLVTtFQUNFLDRDQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAgICAgLmZpbHRlcnMtYnRuIHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIFxyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlvbi10YWItYnV0dG9uIHtcclxuICAgICAgICAgICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICB9IiwiLmZpbHRlcnMtYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiBpbml0aWFsO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");




let TabsPage = class TabsPage {
    // TabsPage
    // This is the page where we set our tabs.
    constructor(dataProvider, storage) {
        this.dataProvider = dataProvider;
        this.storage = storage;
    }
    ionViewDidEnter() {
        // Get friend requests count.
        this.dataProvider.getRequests(this.dataProvider.getCurrentUserId()).get().then((requestsRes) => {
            console.log('requestsRes:', requestsRes);
            requestsRes.forEach(element => {
                if (element.friendRequests != null) {
                    this.friendRequestCount = element.friendRequests.length;
                }
                else {
                    this.friendRequestCount = null;
                }
            });
        });
        // Get conversations and add/update if the conversation exists, otherwise delete from list.
        this.dataProvider.getConversations().snapshotChanges().subscribe((conversationsInfoRes) => {
            conversationsInfoRes.forEach((conversationInfo) => {
                if (conversationInfo.blocked != true) {
                    this.dataProvider.getConversation(conversationInfo.conversationId).snapshotChanges().subscribe((conversationRes) => {
                        if (conversationRes.payload.exists) {
                            let conversation = Object.assign({ $key: conversationRes.payload.id }, conversationRes.payload.data);
                            if (conversation.blocked != true) {
                                this.addOrUpdateConversation(conversation);
                            }
                        }
                    });
                }
            });
        });
        this.dataProvider.getGroups().snapshotChanges().subscribe((groupIdsRes) => {
            let groupIds = [];
            groupIds = (Object.assign({ $key: groupIdsRes.key }, groupIdsRes.payload.data()));
            if (groupIds.length > 0) {
                this.groupsInfo = groupIds;
                if (this.groupList && this.groupList.length > groupIds.length) {
                    // User left/deleted a group, clear the list and add or update each group again.
                    this.groupList = null;
                }
                groupIds.forEach((groupId) => {
                    this.dataProvider.getGroup(groupId.$key).snapshotChanges().subscribe((groupRes) => {
                        let group = Object.assign({ $key: groupRes.key }, groupRes.payload.data());
                        if (group.$key != null) {
                            this.addOrUpdateGroup(group);
                        }
                    });
                });
            }
            else {
                this.unreadGroupMessagesCount = null;
                this.groupsInfo = null;
                this.groupList = null;
            }
        });
    }
    // Add or update conversaion for real-time sync of unreadMessagesCount.
    addOrUpdateConversation(conversation) {
        if (!this.conversationList) {
            this.conversationList = [conversation];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.conversationList.length; i++) {
                if (this.conversationList[i].$key == conversation.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.conversationList[index] = conversation;
            }
            else {
                this.conversationList.push(conversation);
            }
        }
        this.computeUnreadMessagesCount();
    }
    // Compute all conversation's unreadMessages.
    computeUnreadMessagesCount() {
        this.unreadMessagesCount = 0;
        if (this.conversationList) {
            for (var i = 0; i < this.conversationList.length; i++) {
                this.unreadMessagesCount += this.conversationList[i].messages.length - this.conversationsInfo[i].messagesRead;
                if (this.unreadMessagesCount == 0) {
                    this.unreadMessagesCount = null;
                }
            }
        }
    }
    getUnreadMessagesCount() {
        if (this.unreadMessagesCount) {
            if (this.unreadMessagesCount > 0) {
                return this.unreadMessagesCount;
            }
        }
        return null;
    }
    // Add or update group
    addOrUpdateGroup(group) {
        if (!this.groupList) {
            this.groupList = [group];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.groupList.length; i++) {
                if (this.groupList[i].$key == group.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groupList[index] = group;
            }
            else {
                this.groupList.push(group);
            }
        }
        this.computeUnreadGroupMessagesCount();
    }
    // Remove group from list if group is already deleted.
    removeGroup(groupId) {
        if (this.groupList) {
            var index = -1;
            for (var i = 0; i < this.groupList.length; i++) {
                if (this.groupList[i].$key == groupId) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groupList.splice(index, 1);
            }
            index = -1;
            for (var j = 0; j < this.groupsInfo.length; j++) {
                if (this.groupsInfo[i].$key == groupId) {
                    index = j;
                }
            }
            if (index > -1) {
                this.groupsInfo.splice(index, 1);
            }
            this.computeUnreadGroupMessagesCount();
        }
    }
    // Compute all group's unreadMessages.
    computeUnreadGroupMessagesCount() {
        this.unreadGroupMessagesCount = 0;
        if (this.groupList) {
            for (var i = 0; i < this.groupList.length; i++) {
                if (this.groupList[i].messages) {
                    this.unreadGroupMessagesCount += this.groupList[i].messages.length - this.groupsInfo[i].messagesRead;
                }
                if (this.unreadGroupMessagesCount == 0) {
                    this.unreadGroupMessagesCount = null;
                }
            }
        }
    }
    getUnreadGroupMessagesCount() {
        if (this.unreadGroupMessagesCount) {
            if (this.unreadGroupMessagesCount > 0) {
                return this.unreadGroupMessagesCount;
            }
        }
        return null;
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], TabsPage);



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");





const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | feed-feed-module */ "feed-feed-module").then(__webpack_require__.bind(null, /*! ../feed/feed.module */ "./src/app/feed/feed.module.ts")).then(m => m.FeedPageModule)
                        // canActivate: [AuthGuardService]
                    }
                ]
            }, {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | groups-groups-module */ "groups-groups-module").then(__webpack_require__.bind(null, /*! ../groups/groups.module */ "./src/app/groups/groups.module.ts")).then(m => m.GroupsPageModule)
                        // canActivate: [AuthGuardService]
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | messages-messages-module */ "messages-messages-module").then(__webpack_require__.bind(null, /*! ../messages/messages.module */ "./src/app/messages/messages.module.ts")).then(m => m.MessagesPageModule),
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | friends-friends-module */[__webpack_require__.e("common"), __webpack_require__.e("friends-friends-module")]).then(__webpack_require__.bind(null, /*! ../friends/friends.module */ "./src/app/friends/friends.module.ts")).then(m => m.FriendsPageModule),
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
                    }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~group-group-module~groupinfo-groupinfo-module~message-message-module~new-post-new-post-modul~659261fa"), __webpack_require__.e("default~group-group-module~groupinfo-groupinfo-module~message-message-module~new-post-new-post-modul~b8c7a92d"), __webpack_require__.e("default~forgot-forgot-module~login-login-module~profile-profile-module~register-register-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfilePageModule),
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
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
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map