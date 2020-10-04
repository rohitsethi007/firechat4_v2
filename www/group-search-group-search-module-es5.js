(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-search-group-search-module"], {
    /***/
    "BmgJ":
    /*!*****************************************************!*\
      !*** ./src/app/group-search/group-search.module.ts ***!
      \*****************************************************/

    /*! exports provided: GroupSearchPageModule */

    /***/
    function BmgJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupSearchPageModule", function () {
        return GroupSearchPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _group_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./group-search.page */
      "FXm3");

      var routes = [{
        path: '',
        component: _group_search_page__WEBPACK_IMPORTED_MODULE_7__["GroupSearchPage"]
      }];

      var GroupSearchPageModule = function GroupSearchPageModule() {
        _classCallCheck(this, GroupSearchPageModule);
      };

      GroupSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_group_search_page__WEBPACK_IMPORTED_MODULE_7__["GroupSearchPage"]]
      })], GroupSearchPageModule);
      /***/
    },

    /***/
    "FXm3":
    /*!***************************************************!*\
      !*** ./src/app/group-search/group-search.page.ts ***!
      \***************************************************/

    /*! exports provided: GroupSearchPage */

    /***/
    function FXm3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupSearchPage", function () {
        return GroupSearchPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_group_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./group-search.page.html */
      "vtAC");
      /* harmony import */


      var _group_search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./group-search.page.scss */
      "hma7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var GroupSearchPage = /*#__PURE__*/function () {
        function GroupSearchPage(route, router, dataProvider, firestore, navCtrl) {
          _classCallCheck(this, GroupSearchPage);

          this.route = route;
          this.router = router;
          this.dataProvider = dataProvider;
          this.firestore = firestore;
          this.navCtrl = navCtrl;
          this.category = this.router.getCurrentNavigation().extras.state.category;
          this.loggedInUserId = this.dataProvider.getCurrentUserId();
        }

        _createClass(GroupSearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.firestore.collection('groups').ref.where('categoryId', '==', this.category.key).get().then(function (groupsRes) {
              _this.groups = [];
              groupsRes.forEach(function (f) {
                var group;
                group = f.data();
                group.key = f.id;

                if (group.members.some(function (e) {
                  return e === _this.loggedInUserId;
                })) {
                  group.isUserMember = true;
                } else {
                  group.isUserMember = false;
                }

                _this.groups.push(group);
              });
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.navCtrl.back();
          } // Open Group Chat.

        }, {
          key: "viewGroup",
          value: function viewGroup(groupId) {
            this.router.navigateByUrl('group/' + groupId);
          }
        }]);

        return GroupSearchPage;
      }();

      GroupSearchPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }];
      };

      GroupSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-group-search',
        template: _raw_loader_group_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_group_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])], GroupSearchPage);
      /***/
    },

    /***/
    "hma7":
    /*!*****************************************************!*\
      !*** ./src/app/group-search/group-search.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function hma7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\nion-searchbar {\n  --border-radius: 30px;\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row .searchbar {\n  padding: 0px;\n  height: 30px;\n  border-radius: 20px;\n}\n\n.inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.inputs-list .header {\n  font-size: 14px;\n}\n\n.inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.toggle-text {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.toggle-text .group-subheading {\n  font-weight: 400;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAtc2VhcmNoL2dyb3VwLXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRUM7RUFDRSxxQkFBQTtBQUNIOztBQUVBO0VBQ0csbUNBQUE7RUFDQSxpQ0FBQTtBQUNIOztBQUVHO0VBQ0UsOEJBQUE7QUFBTDs7QUFFSztFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBUDs7QUFXQztFQUNHLDJFQUFBO0FBUko7O0FBVUk7RUFDRSxlQUFBO0FBUk47O0FBV007RUFDRSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVRSOztBQVdRO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUFUVjs7QUFlRTtFQUNFLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVpKOztBQWNJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBWk4iLCJmaWxlIjoic3JjL2FwcC9ncm91cC1zZWFyY2gvZ3JvdXAtc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcclxuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcbiB9XHJcbiBcclxuIGlvbi1zZWFyY2hiYXIge1xyXG4gICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiB9XHJcblxyXG4uZmlsdGVycy10b29sYmFyIHtcclxuICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgLy8gLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAgLnNlYXJjaGJhci1yb3cge1xyXG4gICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuIFxyXG4gICAgIC5zZWFyY2hiYXIge1xyXG4gICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XHJcbiAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAvLyBMZWFybiBtb3JlIGFib3V0IENTUyBjb250YWluIHByb3BlcnR5IGhlcmU6IGh0dHBzOi8vdGVybXZhZGVyLmdpdGh1Yi5pby9jc3MtY29udGFpbi9cclxuICAgICAgIC8vICBjb250YWluOiBjb250ZW50O1xyXG4gICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiB9XHJcblxyXG4gLmlucHV0cy1saXN0IHtcclxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLnRvZ2dsZS10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgXHJcbiAgICAuZ3JvdXAtc3ViaGVhZGluZyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9Il19 */";
      /***/
    },

    /***/
    "vtAC":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group-search/group-search.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function vtAC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n    <ion-col>\n        <ion-searchbar [(ngModel)]=\"searchGroup\" mode=\"ios\" (ionCancel)=\"onCancel($event)\" class=\"searchbar\" showCancelButton=\"always\" placeholder=\"Search in {{category.name}}...\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"inputs-list\" lines=\"full\">\n    <ion-list-header class=\"header\">\n      Search in category &nbsp;<ion-label><b>{{category.name}}</b></ion-label>\n    </ion-list-header>\n    <ion-list lines=\"none\">\n      <ion-item text-wrap *ngFor=\"let group of groups | groupFilter:searchGroup\"  (click)=\"viewGroup(group.key)\">\n        <ion-avatar slot=\"start\">\n          <ion-img src=\"{{group.img}}\"></ion-img>\n        </ion-avatar>\n        <ion-label class=\"toggle-text\">\n            <ion-label class=\"ion-no-padding\">{{group.name}}<br/>\n            <span class=\"group-subheading\">{{group.members.length}} Members · <span *ngIf=\"group.posts\">{{group.posts.length}}</span> <span *ngIf=\"!group.posts\">0</span> posts</span></ion-label>\n          </ion-label>\n          <ion-button *ngIf=\"!group.isUserMember\" slot=\"end\" color=\"secondary\" fill=\"outline\" class=\"join\" >Join</ion-button>\n          <ion-button *ngIf=\"group.isUserMember\" slot=\"end\" color=\"secondary\" class=\"join\" >Joined</ion-button>\n        </ion-item>\n    </ion-list>\n  </ion-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=group-search-group-search-module-es5.js.map