(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs class=\"tabs\">\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"tab1\">\r\n      <ion-icon size=\"large\" name=\"home\"></ion-icon>\r\n      <ion-label size=\"small\">Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <!-- <ion-tab-button class=\"filters-btn\" tab=\"tab3\">\r\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n    </ion-tab-button> -->\r\n\r\n    <ion-tab-button tab=\"tab2\">\r\n      <ion-icon size=\"large\" name=\"list\"></ion-icon>\r\n      <ion-badge *ngIf=\"friendRequestCount != null\">{{friendRequestCount}}</ion-badge>\r\n      <ion-label size=\"small\">Groups</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon size=\"large\" name=\"chatbubbles\"></ion-icon>\r\n      <!-- <ion-badge *ngIf=\"getUnreadGroupMessagesCount() != null\">{{getUnreadGroupMessagesCount()}}</ion-badge> -->\r\n      <ion-label size=\"small\">Messages</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab4\">\r\n      <ion-icon size=\"large\" name=\"people\"></ion-icon>\r\n      <!-- <ion-badge *ngIf=\"getUnreadGroupMessagesCount() != null\">{{getUnreadGroupMessagesCount()}}</ion-badge> -->\r\n      <ion-label size=\"small\">Friends</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab5\" (click)=\"viewProfile()\">\r\n      <ion-icon size=\"large\" name=\"ellipsis-horizontal\"></ion-icon>\r\n      <ion-label size=\"small\">More</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab6\">\r\n      <ion-icon size=\"large\" name=\"settings-outline\"></ion-icon>\r\n      <ion-label size=\"small\">Admin</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>");

/***/ }),

/***/ "Hl76":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-guard.service */ "MKys");





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
                        loadChildren: () => __webpack_require__.e(/*! import() | feed-feed-module */ "feed-feed-module").then(__webpack_require__.bind(null, /*! ../feed/feed.module */ "xQww")).then(m => m.FeedPageModule)
                        // canActivate: [AuthGuardService]
                    }
                ]
            }, {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | groups-groups-module */ "groups-groups-module").then(__webpack_require__.bind(null, /*! ../groups/groups.module */ "zOVB")).then(m => m.GroupsPageModule)
                        // canActivate: [AuthGuardService]
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | messages-messages-module */ "messages-messages-module").then(__webpack_require__.bind(null, /*! ../messages/messages.module */ "TdLt")).then(m => m.MessagesPageModule),
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | friends-friends-module */[__webpack_require__.e("common"), __webpack_require__.e("friends-friends-module")]).then(__webpack_require__.bind(null, /*! ../friends/friends.module */ "fZqB")).then(m => m.FriendsPageModule),
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
                    }
                ]
            },
            {
                path: 'tab6',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | admin-categories-admin-categories-module */ "admin-categories-admin-categories-module").then(__webpack_require__.bind(null, /*! ../admin-categories/admin-categories.module */ "SGmz")).then(m => m.AdminCategoriesPageModule),
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
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let TabsPage = class TabsPage {
    // TabsPage
    // This is the page where we set our tabs.
    constructor(dataProvider, storage, router) {
        this.dataProvider = dataProvider;
        this.storage = storage;
        this.router = router;
    }
    ionViewDidEnter() {
        // Get friend requests count.
        this.dataProvider.getRequests(this.dataProvider.getCurrentUserId()).snapshotChanges().subscribe((requestsRes) => {
            if (requestsRes.payload.exists
                && requestsRes.payload.data().friendRequests !== null) {
                this.friendRequestCount = requestsRes.payload.data().friendRequests.length;
            }
            else {
                this.friendRequestCount = null;
            }
        });
    }
    viewProfile() {
        this.router.navigateByUrl('/profile/' + this.dataProvider.getCurrentUserId());
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabs {\n  border-top: black;\n}\n\n.filters-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  font-size: 18px;\n  height: initial;\n}\n\nion-tab-button {\n  --color-selected: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBQ1E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0FBQVo7O0FBR1U7RUFDRSw0Q0FBQTtBQUFaIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzIHtcclxuICBib3JkZXItdG9wOiBibGFjaztcclxufVxyXG4gICAgICAgIC5maWx0ZXJzLWJ0biB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XHJcbiAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgfSJdfQ== */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "Hl76");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map