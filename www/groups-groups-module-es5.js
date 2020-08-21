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


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.listing-item .summary-row {\n  text-align: center;\n  padding-bottom: 5px;\n  padding-left: 3px;\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL0M6XFxVc2Vyc1xcc2V0aGlcXGZpcmVjaGF0NF92MlxcZmlyZWNoYXQ0L3NyY1xcYXBwXFxncm91cHNcXGdyb3Vwcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dyb3Vwcy9ncm91cHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSx3Q0FBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FESUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ0RGOztBREdBO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcblxyXG4gIC0tcGFnZS1jb2xvcjogIzAwQUZGRjtcclxufVxyXG5cclxuLmxpc3RpbmctaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICBcclxuICAuc3VtbWFyeS1yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLmljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4udGV4dHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tZXNzYWdlIHtcclxuICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1jb2xvcjogIzAwQUZGRjtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4ubGlzdGluZy1pdGVtIC5zdW1tYXJ5LXJvdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */";
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


    __webpack_exports__["default"] = ":host {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\napp-image-shell.cover-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: transparent;\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.item-icon {\n  --image-shell-loading-background: transparent;\n}\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.item-name app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 12px;\n  max-width: 50%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 10px;\n  min-width: 30px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-rating > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\napp-image-shell.picture-image {\n  --image-shell-border-radius: var(--app-narrow-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL0M6XFxVc2Vyc1xcc2V0aGlcXGZpcmVjaGF0NF92MlxcZmlyZWNoYXQ0L3NyY1xcYXBwXFxncm91cHNcXGdyb3Vwcy5zaGVsbC5zY3NzIiwic3JjL2FwcC9ncm91cHMvZ3JvdXBzLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0FDREo7O0FEV0U7RUFDRSxtREFBQTtFQUNBLG1FQUFBO0VBQ0EsNkNBQUE7RUFDQSw4REFBQTtBQ1JKOztBRFdFO0VBQ0UsNkNBQUE7QUNSSjs7QURXRTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDUko7O0FEVUk7RUFDRSxnQkFBQTtBQ1JOOztBRFlFO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNUSjs7QURXSTtFQUNFLGdCQUFBO0FDVE47O0FEYUU7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1ZKOztBRFlJO0VBQ0UsY0FBQTtBQ1ZOOztBRGNFO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ1hKOztBRGNFO0VBQ0UscURBQUE7RUFDQSxtRUFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gICAgLS1zaGVsbC1jb2xvcjogI2ViYmIwMDtcclxuICAgIC0tc2hlbGwtY29sb3ItcmdiOiAyMzUsMTg3LDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXHJcbiAgOmhvc3QoLmlzLXNoZWxsKSB7XHJcbiAgICAvLyBpb24tY29udGVudCB7XHJcbiAgICAvLyAgIG9wYWNpdHk6IDAuODtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgXHJcbiAgYXBwLWltYWdlLXNoZWxsLmNvdmVyLWltYWdlIHtcclxuICAgIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcclxuICAgIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcclxuICB9XHJcbiAgXHJcbiAgYXBwLWltYWdlLXNoZWxsLml0ZW0taWNvbiB7XHJcbiAgICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xyXG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcclxuICAgIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcclxuICAgIG1heC13aWR0aDogMzAlO1xyXG4gIFxyXG4gICAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xyXG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgXHJcbiAgICAmLnRleHQtbG9hZGVkIHtcclxuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwge1xyXG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcclxuICAgIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTBweDtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICBcclxuICAgICYudGV4dC1sb2FkZWQge1xyXG4gICAgICBtaW4td2lkdGg6IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tcmF0aW5nID4gYXBwLXRleHQtc2hlbGwge1xyXG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcclxuICAgIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgYXBwLWltYWdlLXNoZWxsLnBpY3R1cmUtaW1hZ2Uge1xyXG4gICAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcbiAgICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xyXG4gIH1cclxuICAiLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNlYmJiMDA7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5jb3Zlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0taWNvbiB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAzMCU7XG59XG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uaXRlbS1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnBpY3R1cmUtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbn0iXX0= */";
    /***/
  }
}]);
//# sourceMappingURL=groups-groups-module-es5.js.map