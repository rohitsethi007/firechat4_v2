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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Groups</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/newgroup\">Create New</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"groups && groups.length > 0\">\n    <div class=\"listing-item\" *ngFor=\"let group of groups\">\n      <ion-card (click)=\"viewGroup(group.key)\">\n      <div>\n        <img src=\"{{group.img}}\">\n      </div>\n      <ion-card-header>\n       <ion-card-title>{{group.name}}</ion-card-title>\n     </ion-card-header>\n      <ion-card-content>\n        {{group.description}}\n      </ion-card-content>\n      <ion-row class=\"summary-row\">\n        <ion-col>\n          <ion-icon class=\"icon\" size=\"small\" name=\"people\"></ion-icon>\n          <span class=\"text\">\n            {{group.membersCount}} \n          </span>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"icon\" size=\"small\" name=\"chatbubbles\"></ion-icon>\n          <span class=\"text\">\n            {{group.postsCount}}\n          </span>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"icon\" size=\"small\" name=\"library\"></ion-icon>\n          <span class=\"text\">\n            {{group.resourcesCount}}\n          </span>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"icon\" size=\"small\"  name=\"pie-chart\"></ion-icon>\n          <span class=\"text\">\n            {{group.pollsCount}}\n          </span>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"icon\" size=\"small\"  name=\"calendar\"></ion-icon>\n          <span class=\"text\">\n            {{group.eventsCount}}\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    </div>\n\n  </div>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.listing-item .summary-row {\n  text-align: center;\n  padding-bottom: 5px;\n  padding-left: 3px;\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9ncm91cHMvZ3JvdXBzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEscUJBQUE7QUNBRjs7QURHQTtFQUNFLHdDQUFBO0FDQUY7O0FERUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURJQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDREY7O0FER0E7RUFDRSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1jb2xvcjogIzAwQUZGRjtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIFxuICAuc3VtbWFyeS1yb3cge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICB9XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cbi5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmxpc3RpbmctaXRlbSAuc3VtbWFyeS1yb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG4ubWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */";
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


    __webpack_exports__["default"] = ":host {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\napp-image-shell.cover-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: transparent;\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.item-icon {\n  --image-shell-loading-background: transparent;\n}\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.item-name app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 12px;\n  max-width: 50%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 10px;\n  min-width: 30px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-rating > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\napp-image-shell.picture-image {\n  --image-shell-border-radius: var(--app-narrow-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9ncm91cHMvZ3JvdXBzLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2dyb3Vwcy9ncm91cHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7QUNESjs7QURXRTtFQUNFLG1EQUFBO0VBQ0EsbUVBQUE7RUFDQSw2Q0FBQTtFQUNBLDhEQUFBO0FDUko7O0FEV0U7RUFDRSw2Q0FBQTtBQ1JKOztBRFdFO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNSSjs7QURVSTtFQUNFLGdCQUFBO0FDUk47O0FEWUU7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1RKOztBRFdJO0VBQ0UsZ0JBQUE7QUNUTjs7QURhRTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDVko7O0FEWUk7RUFDRSxjQUFBO0FDVk47O0FEY0U7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDWEo7O0FEY0U7RUFDRSxxREFBQTtFQUNBLG1FQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXBzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgICAtLXNoZWxsLWNvbG9yOiAjZWJiYjAwO1xuICAgIC0tc2hlbGwtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG4gIH1cbiAgXG4gIC8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG4gIDpob3N0KC5pcy1zaGVsbCkge1xuICAgIC8vIGlvbi1jb250ZW50IHtcbiAgICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgICAvLyB9XG4gIH1cbiAgXG4gIGFwcC1pbWFnZS1zaGVsbC5jb3Zlci1pbWFnZSB7XG4gICAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAgIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gICAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICB9XG4gIFxuICBhcHAtaW1hZ2Utc2hlbGwuaXRlbS1pY29uIHtcbiAgICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1heC13aWR0aDogMzAlO1xuICBcbiAgICAmLnRleHQtbG9hZGVkIHtcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgfVxuICB9XG4gIFxuICAuaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgIG1heC13aWR0aDogNTAlO1xuICBcbiAgICAmLnRleHQtbG9hZGVkIHtcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgfVxuICB9XG4gIFxuICAuaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgbWluLXdpZHRoOiAzMHB4O1xuICBcbiAgICAmLnRleHQtbG9hZGVkIHtcbiAgICAgIG1pbi13aWR0aDogMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLml0ZW0tcmF0aW5nID4gYXBwLXRleHQtc2hlbGwge1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICB9XG4gIFxuICBhcHAtaW1hZ2Utc2hlbGwucGljdHVyZS1pbWFnZSB7XG4gICAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgfVxuICAiLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNlYmJiMDA7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5jb3Zlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0taWNvbiB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAzMCU7XG59XG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uaXRlbS1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnBpY3R1cmUtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbn0iXX0= */";
    /***/
  }
}]);
//# sourceMappingURL=groups-groups-module-es5.js.map