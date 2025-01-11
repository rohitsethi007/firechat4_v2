(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

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

      var GroupSearchPageModule = /*#__PURE__*/_createClass(function GroupSearchPageModule() {
        _classCallCheck(this, GroupSearchPageModule);
      });

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
      "I/3d");
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

        return _createClass(GroupSearchPage, [{
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


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\nion-searchbar {\n  --border-radius: 30px;\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row .searchbar {\n  padding: 0px;\n  height: 30px;\n  border-radius: 20px;\n}\n\n.inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.inputs-list .header {\n  font-size: 14px;\n}\n\n.inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.inputs-list .error-container .error-message ion-icon {\n  padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.toggle-text {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.toggle-text .group-subheading {\n  font-weight: 400;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAtc2VhcmNoL2dyb3VwLXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRUM7RUFDRSxxQkFBQTtBQUNIOztBQUVBO0VBQ0csbUNBQUE7RUFDQSxpQ0FBQTtBQUNIOztBQUVHO0VBQ0UsOEJBQUE7QUFBTDs7QUFFSztFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBUDs7QUFXQztFQUNHLDJFQUFBO0FBUko7O0FBVUk7RUFDRSxlQUFBO0FBUk47O0FBV007RUFDRSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVRSOztBQVdRO0VBQ0UsZ0RBQUE7RUFDQSxjQUFBO0FBVFY7O0FBZUU7RUFDRSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFaSjs7QUFjSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQVpOIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXAtc2VhcmNoL2dyb3VwLXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gfVxuIFxuIGlvbi1zZWFyY2hiYXIge1xuICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuIH1cblxuLmZpbHRlcnMtdG9vbGJhciB7XG4gICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgIC8vIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgLnNlYXJjaGJhci1yb3cge1xuICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gXG4gICAgIC5zZWFyY2hiYXIge1xuICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICBoZWlnaHQ6MzBweDtcbiAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxuICAgICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAgICAvLyBMZWFybiBtb3JlIGFib3V0IENTUyBjb250YWluIHByb3BlcnR5IGhlcmU6IGh0dHBzOi8vdGVybXZhZGVyLmdpdGh1Yi5pby9jc3MtY29udGFpbi9cbiAgICAgICAvLyAgY29udGFpbjogY29udGVudDtcbiAgICAgfVxuXG4gICB9XG5cbiB9XG5cbiAuaW5wdXRzLWxpc3Qge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZXJyb3ItY29udGFpbmVyIHtcbiAgICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgLnRvZ2dsZS10ZXh0IHtcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgXG4gICAgLmdyb3VwLXN1YmhlYWRpbmcge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gIH0iXX0= */";
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