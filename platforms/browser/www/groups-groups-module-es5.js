function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groups-groups-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGroupsGroupsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Groups</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/newgroup\">Create New</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"groups && groups.length > 0\">\r\n    <div class=\"listing-item\" *ngFor=\"let group of groups\">\r\n      <ion-card (click)=\"viewGroup(group.key)\">\r\n      <div>\r\n        <img src=\"{{group.img}}\">\r\n      </div>\r\n      <ion-card-header>\r\n       <ion-card-title>{{group.name}}</ion-card-title>\r\n     </ion-card-header>\r\n      <ion-card-content>\r\n        {{group.description}}\r\n      </ion-card-content>\r\n      <ion-row class=\"summary-row\">\r\n        <ion-col>\r\n          <ion-icon class=\"icon\" size=\"small\" name=\"people\"></ion-icon>\r\n          <span class=\"text\">\r\n            {{group.membersCount}} \r\n          </span>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"icon\" size=\"small\" name=\"chatbubbles\"></ion-icon>\r\n          <span class=\"text\">\r\n            {{group.postsCount}}\r\n          </span>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"icon\" size=\"small\" name=\"library\"></ion-icon>\r\n          <span class=\"text\">\r\n            {{group.resourcesCount}}\r\n          </span>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"icon\" size=\"small\"  name=\"pie-chart\"></ion-icon>\r\n          <span class=\"text\">\r\n            {{group.pollsCount}}\r\n          </span>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"icon\" size=\"small\"  name=\"calendar\"></ion-icon>\r\n          <span class=\"text\">\r\n            {{group.eventsCount}}\r\n          </span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/groups/groups.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/groups/groups.module.ts ***!
    \*****************************************/

  /*! exports provided: GroupsPageModule */

  /***/
  function srcAppGroupsGroupsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function () {
      return GroupsPageModule;
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


    var _groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./groups.page */
    "./src/app/groups/groups.page.ts");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]
    }];

    var GroupsPageModule = function GroupsPageModule() {
      _classCallCheck(this, GroupsPageModule);
    };

    GroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]]
    })], GroupsPageModule);
    /***/
  },

  /***/
  "./src/app/groups/groups.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/groups/groups.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupsGroupsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.listing-item .summary-row {\n  text-align: center;\n  padding-bottom: 5px;\n  padding-left: 3px;\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXGdyb3Vwc1xcZ3JvdXBzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEscUJBQUE7QUNBRjs7QURHQTtFQUNFLHdDQUFBO0FDQUY7O0FERUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURJQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDREY7O0FER0E7RUFDRSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xyXG59XHJcblxyXG4ubGlzdGluZy1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIFxyXG4gIC5zdW1tYXJ5LXJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lc3NhZ2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5saXN0aW5nLWl0ZW0gLnN1bW1hcnktcm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/groups/groups.page.ts":
  /*!***************************************!*\
    !*** ./src/app/groups/groups.page.ts ***!
    \***************************************/

  /*! exports provided: GroupsPage */

  /***/
  function srcAppGroupsGroupsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupsPage", function () {
      return GroupsPage;
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


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var GroupsPage =
    /*#__PURE__*/
    function () {
      // GroupsPage
      // This is the page where the user can add, view and search for groups.
      function GroupsPage(router, dataProvider, loadingProvider) {
        _classCallCheck(this, GroupsPage);

        this.router = router;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
      }

      _createClass(GroupsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          // Initialize
          this.searchGroup = '';
          this.loadingProvider.show(); // Get groups

          this.dataProvider.getGroups().snapshotChanges().subscribe(function (data) {
            _this.groups = data.map(function (c) {
              return Object.assign({
                $key: c.payload.doc.data().groupId
              }, c.payload.doc.data());
            }); // this.groups = data.map(e => {
            //   return {
            //     id: e.payload.doc.id,
            //     dateCreated: e.payload.doc.data()['dateCreated'],
            //     description: e.payload.doc.data()['description'],
            //     groupTags: e.payload.doc.data()['groupTags'],
            //     img: e.payload.doc.data()['img'],
            //     members: e.payload.doc.data()['members'],
            //     messages: e.payload.doc.data()['messages'],
            //     name: e.payload.doc.data()['name']
            //   };
            // })
          }); // Update groups' last active date time elapsed every minute based on Moment.js.

          var that = this;

          if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
              if (that.groups) {
                that.groups.forEach(function (group) {
                  var date = group.date;
                  group.date = new Date(date);
                });
              }
            }, 60000);
          }
        } // Add or update group for real-time sync based on our observer.

      }, {
        key: "addOrUpdateGroup",
        value: function addOrUpdateGroup(group) {
          if (!this.groups) {
            this.groups = [group];
          } else {
            var index = -1;

            for (var i = 0; i < this.groups.length; i++) {
              if (this.groups[i].key == group.key) {
                index = i;
              }
            }

            if (index > -1) {
              this.groups[index] = group;
            } else {
              this.groups.push(group);
            }
          }
        } // Open Group Chat.

      }, {
        key: "viewGroup",
        value: function viewGroup(groupId) {
          this.router.navigateByUrl('group/' + groupId);
        } // Return class based if group has unreadMessages or not.

      }, {
        key: "hasUnreadMessages",
        value: function hasUnreadMessages(group) {
          if (group.unreadMessagesCount > 0) {
            return 'group bold';
          } else {
            return 'group';
          }
        }
      }]);

      return GroupsPage;
    }();

    GroupsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
      }];
    };

    GroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-groups',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./groups.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./groups.page.scss */
      "./src/app/groups/groups.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./groups.shell.scss */
      "./src/app/groups/groups.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]])], GroupsPage);
    /***/
  },

  /***/
  "./src/app/groups/groups.shell.scss":
  /*!******************************************!*\
    !*** ./src/app/groups/groups.shell.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupsGroupsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\napp-image-shell.cover-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: transparent;\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.item-icon {\n  --image-shell-loading-background: transparent;\n}\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.item-name app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 12px;\n  max-width: 50%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 10px;\n  min-width: 30px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-rating > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\napp-image-shell.picture-image {\n  --image-shell-border-radius: var(--app-narrow-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXGdyb3Vwc1xcZ3JvdXBzLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2dyb3Vwcy9ncm91cHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7QUNESjs7QURXRTtFQUNFLG1EQUFBO0VBQ0EsbUVBQUE7RUFDQSw2Q0FBQTtFQUNBLDhEQUFBO0FDUko7O0FEV0U7RUFDRSw2Q0FBQTtBQ1JKOztBRFdFO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNSSjs7QURVSTtFQUNFLGdCQUFBO0FDUk47O0FEWUU7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1RKOztBRFdJO0VBQ0UsZ0JBQUE7QUNUTjs7QURhRTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDVko7O0FEWUk7RUFDRSxjQUFBO0FDVk47O0FEY0U7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDWEo7O0FEY0U7RUFDRSxxREFBQTtFQUNBLG1FQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXBzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgICAtLXNoZWxsLWNvbG9yOiAjZWJiYjAwO1xyXG4gICAgLS1zaGVsbC1jb2xvci1yZ2I6IDIzNSwxODcsMDtcclxuICB9XHJcbiAgXHJcbiAgLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2VcclxuICA6aG9zdCguaXMtc2hlbGwpIHtcclxuICAgIC8vIGlvbi1jb250ZW50IHtcclxuICAgIC8vICAgb3BhY2l0eTogMC44O1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBcclxuICBhcHAtaW1hZ2Utc2hlbGwuY292ZXItaW1hZ2Uge1xyXG4gICAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xyXG4gICAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcclxuICAgIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xyXG4gIH1cclxuICBcclxuICBhcHAtaW1hZ2Utc2hlbGwuaXRlbS1pY29uIHtcclxuICAgIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xyXG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgXHJcbiAgICAmLnRleHQtbG9hZGVkIHtcclxuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XHJcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICBcclxuICAgICYudGV4dC1sb2FkZWQge1xyXG4gICAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xyXG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gIFxyXG4gICAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICAgIG1pbi13aWR0aDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaXRlbS1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gIH1cclxuICBcclxuICBhcHAtaW1hZ2Utc2hlbGwucGljdHVyZS1pbWFnZSB7XHJcbiAgICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcclxuICAgIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XHJcbiAgfVxyXG4gICIsIjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2ViYmIwMDtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmNvdmVyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1pY29uIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDMwJTtcbn1cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5pdGVtLXJhdGluZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwucGljdHVyZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xufSJdfQ== */";
    /***/
  }
}]);
//# sourceMappingURL=groups-groups-module-es5.js.map