function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs class=\"tabs\">\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon size=\"large\" name=\"newspaper-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button class=\"filters-btn\" tab=\"tab3\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n    </ion-tab-button> -->\n\n    <ion-tab-button  class=\"filters-btn\" tab=\"tab2\">\n      <ion-icon size=\"large\" name=\"list-outline\"></ion-icon>\n      <ion-badge *ngIf=\"friendRequestCount != null\">{{friendRequestCount}}</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button  class=\"filters-btn\" tab=\"tab3\">\n      <ion-icon size=\"large\" name=\"chatbubbles-outline\"></ion-icon>\n      <!-- <ion-badge *ngIf=\"getUnreadGroupMessagesCount() != null\">{{getUnreadGroupMessagesCount()}}</ion-badge> -->\n    </ion-tab-button>\n\n    <ion-tab-button  class=\"filters-btn\" tab=\"tab4\">\n      <ion-icon size=\"large\" name=\"people-outline\"></ion-icon>\n      <!-- <ion-badge *ngIf=\"getUnreadGroupMessagesCount() != null\">{{getUnreadGroupMessagesCount()}}</ion-badge> -->\n    </ion-tab-button>\n\n    <ion-tab-button class=\"filters-btn\" tab=\"tab5\">\n      <ion-icon size=\"large\" name=\"information-circle-outline\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs.router.module */
    "./src/app/tabs/tabs.router.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tabs {\n  border-top: black;\n}\n\n.filters-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  font-size: 18px;\n  height: initial;\n}\n\nion-tab-button {\n  --color-selected: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURDUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUNBWjs7QURHVTtFQUNFLDRDQUFBO0FDQVoiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuICBib3JkZXItdG9wOiBibGFjaztcbn1cbiAgICAgICAgLmZpbHRlcnMtYnRuIHtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIFxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcbiAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICB9IiwiLnRhYnMge1xuICBib3JkZXItdG9wOiBibGFjaztcbn1cblxuLmZpbHRlcnMtYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiBpbml0aWFsO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var TabsPage =
    /*#__PURE__*/
    function () {
      // TabsPage
      // This is the page where we set our tabs.
      function TabsPage(dataProvider, storage) {
        _classCallCheck(this, TabsPage);

        this.dataProvider = dataProvider;
        this.storage = storage;
      }

      _createClass(TabsPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          // Get friend requests count.
          this.dataProvider.getRequests(this.dataProvider.getCurrentUserId()).snapshotChanges().subscribe(function (requestsRes) {
            if (requestsRes.payload.exists && requestsRes.payload.data().friendRequests !== null) {
              _this.friendRequestCount = requestsRes.payload.data().friendRequests.length;
            } else {
              _this.friendRequestCount = null;
            }
          });
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])], TabsPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.router.module.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/tabs.router.module.ts ***!
    \********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'tab1',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | feed-feed-module */
            "feed-feed-module").then(__webpack_require__.bind(null,
            /*! ../feed/feed.module */
            "./src/app/feed/feed.module.ts")).then(function (m) {
              return m.FeedPageModule;
            });
          } // canActivate: [AuthGuardService]

        }]
      }, {
        path: 'tab2',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | groups-groups-module */
            "groups-groups-module").then(__webpack_require__.bind(null,
            /*! ../groups/groups.module */
            "./src/app/groups/groups.module.ts")).then(function (m) {
              return m.GroupsPageModule;
            });
          } // canActivate: [AuthGuardService]

        }]
      }, {
        path: 'tab3',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | messages-messages-module */
            "messages-messages-module").then(__webpack_require__.bind(null,
            /*! ../messages/messages.module */
            "./src/app/messages/messages.module.ts")).then(function (m) {
              return m.MessagesPageModule;
            });
          },
          canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
        }]
      }, {
        path: 'tab4',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | friends-friends-module */
            [__webpack_require__.e("common"), __webpack_require__.e("friends-friends-module")]).then(__webpack_require__.bind(null,
            /*! ../friends/friends.module */
            "./src/app/friends/friends.module.ts")).then(function (m) {
              return m.FriendsPageModule;
            });
          },
          canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
        }]
      }, {
        path: 'tab5',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-profile-module */
            [__webpack_require__.e("default~event-event-module~group-group-module~groupinfo-groupinfo-module~message-message-module~new-~bfe8752e"), __webpack_require__.e("default~event-event-module~group-group-module~groupinfo-groupinfo-module~message-message-module~new-~0c7fe536"), __webpack_require__.e("default~forgot-forgot-module~login-login-module~profile-profile-module~register-register-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ../profile/profile.module */
            "./src/app/profile/profile.module.ts")).then(function (m) {
              return m.ProfilePageModule;
            });
          },
          canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
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

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map