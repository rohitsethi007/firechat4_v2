function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groupinfo-groupinfo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/groupinfo/groupinfo.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groupinfo/groupinfo.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGroupinfoGroupinfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"group\">{{group.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"group\"> \r\n    <ion-row padding> \r\n      <div class=\"group-info\">\r\n        <div class=\"group-img\">\r\n          <img src=\"{{group.img}}\">\r\n        </div>\r\n        <div class=\"group-name\">    \r\n          {{group.name}}\r\n        </div>\r\n        <div class=\"group-desc\">\r\n          {{group.description}}\r\n        </div>\r\n        <div class=\"group-name\"> \r\n          Group Tags\r\n          </div>\r\n          <div class=\"group-tags\">\r\n            <ion-row>\r\n              <div class=\"tags\" *ngFor=\"let tag of group.groupTags\">\r\n                <span class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag}}</span>\r\n              </div>\r\n            </ion-row>\r\n          </div>\r\n        <div>\r\n          <ion-button expand=\"block\" color=\"secondary\" (click)=\"leaveGroup()\" *ngIf=\"groupMembers && groupMembers.length > 1\">Leave Group\r\n          </ion-button>\r\n        </div> \r\n   </div>\r\n \r\n    </ion-row>\r\n    <ion-list *ngIf=\"groupMembers\" lines=\"none\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-text>\r\n            Group Members ({{groupMembers.length}})\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-button slot=\"end\" (click)=\"addMembers()\" fill=\"outline\">Add</ion-button>\r\n      </ion-item>\r\n      <ion-item *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.$key)\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-text>\r\n            <h2>{{member.name}}</h2>\r\n          </ion-text>\r\n          <ion-text>\r\n            <p>{{member.description}}</p>\r\n          </ion-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/groupinfo/groupinfo.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/groupinfo/groupinfo.module.ts ***!
    \***********************************************/

  /*! exports provided: GroupinfoPageModule */

  /***/
  function srcAppGroupinfoGroupinfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupinfoPageModule", function () {
      return GroupinfoPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _groupinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./groupinfo.page */
    "./src/app/groupinfo/groupinfo.page.ts");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");

    var routes = [{
      path: '',
      component: _groupinfo_page__WEBPACK_IMPORTED_MODULE_6__["GroupinfoPage"]
    }];

    var GroupinfoPageModule = function GroupinfoPageModule() {
      _classCallCheck(this, GroupinfoPageModule);
    };

    GroupinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_groupinfo_page__WEBPACK_IMPORTED_MODULE_6__["GroupinfoPage"]]
    })], GroupinfoPageModule);
    /***/
  },

  /***/
  "./src/app/groupinfo/groupinfo.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/groupinfo/groupinfo.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupinfoGroupinfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n  --page-rating-2-color: #aa6c39;\n  --page-rating-1-color: #bbb2b2;\n}\n\n.group-info {\n  margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);\n}\n\n.group-info .group-name {\n  padding-top: var(--page-margin);\n  padding-bottom: var(--page-margin);\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  text-align: left;\n  font-weight: bold;\n  font-size: 19px;\n}\n\n.group-info .group-tags {\n  padding-bottom: calc(var(--page-margin));\n}\n\n.group-info .group-tags .tags {\n  padding-right: 5px;\n}\n\n.group-info .group-tags .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"0\"] {\n  color: var(--page-rating-1-color);\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"1\"] {\n  color: var(--page-rating-2-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBpbmZvL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXGdyb3VwaW5mb1xcZ3JvdXBpbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ3JvdXBpbmZvL2dyb3VwaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUZBQUE7QUNDSjs7QURHSTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRE47O0FESUk7RUFDRSx3Q0FBQTtBQ0ZOOztBRElNO0VBQ0Usa0JBQUE7QUNGUjs7QURJTTtFQUVFLG1EQUFBO0VBTVEsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDUmhCOztBRFNnQjtFQUNFLGlDQUFBO0FDUGxCOztBRFNnQjtFQUNFLGlDQUFBO0FDUGxCIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBpbmZvL2dyb3VwaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gICAgLS1wYWdlLXJhdGluZy0yLWNvbG9yOiAjYWE2YzM5O1xyXG4gICAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjYmJiMmIyO1xyXG4gIH1cclxuXHJcbi5ncm91cC1pbmZvIHtcclxuICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLmdyb3VwLWltZyB7XHJcbiAgXHJcbiAgICB9XHJcbiAgICAuZ3JvdXAtbmFtZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncm91cC10YWdzIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcclxuICAgICBcclxuICAgICAgLnRhZ3Mge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBcclxuICAgICAgLml0ZW0tcmF0aW5nIHtcclxuICAgICAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMSk7XHJcbiAgICAgICAgICAgICAgICAvL3BhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjBcIl0ge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2FhNmMzOTtcbiAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjYmJiMmIyO1xufVxuXG4uZ3JvdXAtaW5mbyB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmdyb3VwLWluZm8gLmdyb3VwLW5hbWUge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLmdyb3VwLWluZm8gLmdyb3VwLXRhZ3Mge1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikpO1xufVxuLmdyb3VwLWluZm8gLmdyb3VwLXRhZ3MgLnRhZ3Mge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtdGFncyAudGFncyAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyb3VwLWluZm8gLmdyb3VwLXRhZ3MgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xufVxuLmdyb3VwLWluZm8gLmdyb3VwLXRhZ3MgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/groupinfo/groupinfo.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/groupinfo/groupinfo.page.ts ***!
    \*********************************************/

  /*! exports provided: GroupinfoPage */

  /***/
  function srcAppGroupinfoGroupinfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupinfoPage", function () {
      return GroupinfoPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var GroupinfoPage =
    /*#__PURE__*/
    function () {
      // GroupInfoPage
      // This is the page where the user can view group information, change group information, add members, and leave/delete group.
      function GroupinfoPage(router, route, dataProvider, firestore, loadingProvider, modalCtrl, alertCtrl, imageProvider, camera) {
        _classCallCheck(this, GroupinfoPage);

        this.router = router;
        this.route = route;
        this.dataProvider = dataProvider;
        this.firestore = firestore;
        this.loadingProvider = loadingProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.camera = camera;
      }

      _createClass(GroupinfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          // Initialize
          this.groupId = this.route.snapshot.params.id;
          console.log(this.groupId); // Get group details.

          this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (groupRes) {
            var group = Object.assign({
              $key: groupRes.payload.id
            }, groupRes.payload.data());
            console.log(group);

            if (group != null) {
              _this.loadingProvider.show();

              _this.group = group;
              console.log('group.members', group.members);
              group.members.forEach(function (memberId) {
                _this.dataProvider.getUser(memberId).snapshotChanges().subscribe(function (memberRes) {
                  var member = Object.assign({
                    $key: memberRes.payload.id
                  }, memberRes.payload.data());

                  _this.addUpdateOrRemoveMember(member);
                });
              });

              _this.loadingProvider.hide();
            } else {
              _this.router.navigateByUrl('/');
            }
          }); // Get user details.

          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (accounts) {
            var account = accounts.payload.data();
            _this.user = Object.assign({
              $key: account.userId
            }, account);
          });
        } // Delete subscription.
        // ionViewDidLeave() {
        //   if(this.deleteSubscription)
        //
        // }
        // Check if user exists in the group then add/update user.
        // If the user has already left the group, remove user from the list.

      }, {
        key: "addUpdateOrRemoveMember",
        value: function addUpdateOrRemoveMember(member) {
          console.log(member);

          if (this.group) {
            if (this.group.members.indexOf(member.$key) > -1) {
              // User exists in the group.
              if (!this.groupMembers) {
                this.groupMembers = [member];
              } else {
                var index = -1;
                console.log('this.groupMembers.length:', this.groupMembers);

                for (var i = 0; i < this.groupMembers.length; i++) {
                  if (this.groupMembers[i].$key == member.$key) {
                    index = i;
                  }
                } // Add/Update User.


                if (index > -1) {
                  this.groupMembers[index] = member;
                } else {
                  this.groupMembers.push(member);
                }
              }
            } else {
              // User already left the group, remove member from list.
              var index1 = -1;

              for (var j = 0; j < this.groupMembers.length; j++) {
                if (this.groupMembers[j].$key == member.$key) {
                  index1 = j;
                }
              }

              if (index1 > -1) {
                this.groupMembers.splice(index1, 1);
              }
            }
          }
        } // View user info.

      }, {
        key: "viewUser",
        value: function viewUser(userId) {
          if (this.dataProvider.getCurrentUserId !== userId) {
            this.router.navigateByUrl('/userinfo/' + userId);
          }
        } // Enlarge group image.

      }, {
        key: "enlargeImage",
        value: function enlargeImage(img) {} // let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
        // imageModal.present();
        // Change group name.

      }, {
        key: "setName",
        value: function setName() {
          var _this2 = this;

          this.alert = this.alertCtrl.create({
            header: 'Change Group Name',
            message: 'Please enter a new group name.',
            inputs: [{
              name: 'name',
              placeholder: 'Group Name',
              value: this.group.name
            }],
            buttons: [{
              text: 'Cancel',
              handler: function handler(data) {}
            }, {
              text: 'Save',
              handler: function handler(data) {
                var name = data['name'];

                if (_this2.group.name != name) {
                  _this2.loadingProvider.show(); // Add system message.


                  _this2.group.messages.push({
                    date: new Date().toString(),
                    sender: _this2.user.$key,
                    type: 'system',
                    message: _this2.user.name + ' has changed the group name to: ' + name + '.',
                    icon: 'md-create'
                  }); // Update group on database.


                  _this2.dataProvider.getGroup(_this2.groupId).update({
                    name: name,
                    messages: _this2.group.messages
                  }).then(function (success) {
                    _this2.loadingProvider.hide();

                    _this2.loadingProvider.showToast('Updated Succesfully');
                  }).catch(function (error) {
                    _this2.loadingProvider.hide();

                    _this2.loadingProvider.showToast('Something went wrong');
                  });
                }
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        } // Change group image, the user is asked if they want to take a photo or choose from gallery.

      }, {
        key: "setPhoto",
        value: function setPhoto() {
          var _this3 = this;

          this.alert = this.alertCtrl.create({
            header: 'Set Group Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [{
              text: 'Cancel',
              handler: function handler(data) {}
            }, {
              text: 'Choose from Gallery',
              handler: function handler() {
                _this3.loadingProvider.show(); // Upload photo and set to group photo, afterwards, return the group object as promise.


                _this3.imageProvider.setGroupPhotoPromise(_this3.group, _this3.camera.PictureSourceType.PHOTOLIBRARY).then(function (group) {
                  // Add system message.
                  _this3.group.messages.push({
                    date: new Date().toString(),
                    sender: _this3.user.$key,
                    type: 'system',
                    message: _this3.user.name + ' has changed the group photo.',
                    icon: 'ios-camera'
                  }); // Update group image on database.


                  _this3.dataProvider.getGroup(_this3.groupId).update({
                    img: group.img,
                    messages: _this3.group.messages
                  }).then(function (success) {
                    _this3.loadingProvider.hide();

                    _this3.loadingProvider.showToast("Updated Successfully");
                  }).catch(function (error) {
                    _this3.loadingProvider.hide();

                    _this3.loadingProvider.showToast("Something went wrong");
                  });
                });
              }
            }, {
              text: 'Take Photo',
              handler: function handler() {
                _this3.loadingProvider.show(); // Upload photo and set to group photo, afterwwards, return the group object as promise.


                _this3.imageProvider.setGroupPhotoPromise(_this3.group, _this3.camera.PictureSourceType.CAMERA).then(function (group) {
                  // Add system message.
                  _this3.group.messages.push({
                    date: new Date().toString(),
                    sender: _this3.user.$key,
                    type: 'system',
                    message: _this3.user.name + ' has changed the group photo.',
                    icon: 'ios-camera'
                  }); // Update group image on database.


                  _this3.dataProvider.getGroup(_this3.groupId).update({
                    img: group.img,
                    messages: _this3.group.messages
                  }).then(function (success) {
                    _this3.loadingProvider.hide();

                    _this3.loadingProvider.showToast("Updated Successfully");
                  }).catch(function (error) {
                    _this3.loadingProvider.hide();

                    _this3.loadingProvider.showToast("Something went wrong");
                  });
                });
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        } // Change group description.

      }, {
        key: "setDescription",
        value: function setDescription() {
          var _this4 = this;

          this.alert = this.alertCtrl.create({
            header: 'Change Group Description',
            message: "Please enter a new group description.",
            inputs: [{
              name: 'description',
              placeholder: 'Group Description',
              value: this.group.description
            }],
            buttons: [{
              text: 'Cancel',
              handler: function handler(data) {}
            }, {
              text: 'Save',
              handler: function handler(data) {
                var description = data["description"];

                if (_this4.group.description != description) {
                  _this4.loadingProvider.show(); // Add system message.


                  _this4.group.messages.push({
                    date: new Date().toString(),
                    sender: _this4.user.$key,
                    type: 'system',
                    message: _this4.user.name + ' has changed the group description.',
                    icon: 'md-clipboard'
                  }); // Update group on database.


                  _this4.dataProvider.getGroup(_this4.groupId).update({
                    description: description,
                    messages: _this4.group.messages
                  }).then(function (success) {
                    _this4.loadingProvider.hide();

                    _this4.loadingProvider.showToast("Updated Successfully");
                  }).catch(function (error) {
                    _this4.loadingProvider.hide();

                    _this4.loadingProvider.showToast("Something went wrong");
                  });
                }
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        } // Leave group.

      }, {
        key: "leaveGroup",
        value: function leaveGroup() {
          var _this5 = this;

          this.alert = this.alertCtrl.create({
            header: 'Confirm Leave',
            message: 'Are you sure you want to leave this group?',
            buttons: [{
              text: 'Cancel'
            }, {
              text: 'Leave',
              handler: function handler(data) {
                _this5.loadingProvider.show(); // Remove member from group.


                _this5.group.members.splice(_this5.group.members.indexOf(_this5.user.$key), 1); // Add system message.


                _this5.group.messages.push({
                  date: new Date().toString(),
                  sender: _this5.user.$key,
                  type: 'system',
                  message: _this5.user.name + ' has left this group.',
                  icon: 'md-log-out'
                }); // Update group on database.


                _this5.dataProvider.getGroup(_this5.groupId).update({
                  members: _this5.group.members,
                  messages: _this5.group.messages
                }).then(function (success) {
                  // Remove group from user's group list.
                  _this5.firestore.doc('/accounts/' + _this5.dataProvider.getCurrentUserId + '/groups/' + _this5.groupId).delete().then(function () {
                    // Pop this view because user already has left this group.
                    _this5.group = null;
                    setTimeout(function () {
                      _this5.loadingProvider.hide();

                      _this5.router.navigateByUrl('/');
                    }, 300);
                  });
                }).catch(function (error) {
                  _this5.loadingProvider.showToast("Something went wrong");
                });
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        } // Delete group.

      }, {
        key: "deleteGroup",
        value: function deleteGroup() {
          var _this6 = this;

          this.alert = this.alertCtrl.create({
            header: 'Confirm Delete',
            message: 'Are you sure you want to delete this group?',
            buttons: [{
              text: 'Cancel'
            }, {
              text: 'Delete',
              handler: function handler(data) {
                var group = JSON.parse(JSON.stringify(_this6.group));
                console.log(group); // Delete all images of image messages.

                group.messages.forEach(function (message) {
                  if (message.type == 'image') {
                    console.log("Delete: " + message.url + " of " + group.$key);

                    _this6.imageProvider.deleteGroupImageFile(group.$key, message.url);
                  }
                });

                _this6.firestore.doc('/accounts/' + _this6.dataProvider.getCurrentUserId + '/groups/' + group.$key).delete().then(function () {
                  _this6.dataProvider.getGroup(group.$key).delete();
                }); // Delete group image.


                console.log("Delete: " + group.img);

                _this6.imageProvider.deleteImageFile(group.img); // this.navCtrl.popToRoot();


                _this6.router.navigateByUrl('/');
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        } // Add members.

      }, {
        key: "addMembers",
        value: function addMembers() {
          this.router.navigateByUrl('/addmembers/' + this.groupId);
        }
      }]);

      return GroupinfoPage;
    }();

    GroupinfoPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
      }];
    };

    GroupinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-groupinfo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./groupinfo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/groupinfo/groupinfo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./groupinfo.page.scss */
      "./src/app/groupinfo/groupinfo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]])], GroupinfoPage);
    /***/
  }
}]);
//# sourceMappingURL=groupinfo-groupinfo-module-es5.js.map