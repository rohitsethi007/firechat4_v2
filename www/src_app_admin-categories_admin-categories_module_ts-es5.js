(function () {
  "use strict";

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_admin-categories_admin-categories_module_ts"], {
    /***/
    25779:
    /*!*************************************************************!*\
      !*** ./src/app/admin-categories/admin-categories.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminCategoriesPageModule": function AdminCategoriesPageModule() {
          return (
            /* binding */
            _AdminCategoriesPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _admin_categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-categories.page */
      15633);

      var routes = [{
        path: '',
        component: _admin_categories_page__WEBPACK_IMPORTED_MODULE_0__.AdminCategoriesPage
      }];

      var _AdminCategoriesPageModule = /*#__PURE__*/_createClass(function AdminCategoriesPageModule() {
        _classCallCheck(this, AdminCategoriesPageModule);
      });

      _AdminCategoriesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_admin_categories_page__WEBPACK_IMPORTED_MODULE_0__.AdminCategoriesPage]
      })], _AdminCategoriesPageModule);
      /***/
    },

    /***/
    15633:
    /*!***********************************************************!*\
      !*** ./src/app/admin-categories/admin-categories.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminCategoriesPage": function AdminCategoriesPage() {
          return (
            /* binding */
            _AdminCategoriesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./admin-categories.page.html */
      75352);
      /* harmony import */


      var _admin_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-categories.page.scss */
      63067);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);

      var _AdminCategoriesPage = /*#__PURE__*/function () {
        function AdminCategoriesPage(firestore) {
          _classCallCheck(this, AdminCategoriesPage);

          this.firestore = firestore;
          this.categories = [];
        }

        return _createClass(AdminCategoriesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadAllCategories();
          }
        }, {
          key: "loadAllCategories",
          value: function loadAllCategories() {
            var _this = this;

            this.firestore.collection('categories').snapshotChanges().subscribe(function (catsRes) {
              if (catsRes) {
                _this.categories = [];
                catsRes.forEach(function (cat) {
                  var category = cat.payload.doc.data();
                  category.key = cat.payload.doc.id;
                  console.log('category', category);

                  _this.categories.push(category);
                });
              }
            });
          }
        }]);
      }();

      _AdminCategoriesPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore
        }];
      };

      _AdminCategoriesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-admin-categories',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_categories_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore])], _AdminCategoriesPage);
      /***/
    },

    /***/
    75352:
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin-categories/admin-categories.page.html ***!
      \****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Categories</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/new-category-modal\">New Category</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-list>\n        <ion-item *ngFor=\"let category of categories\">\n        <ion-label>{{category.name}}</ion-label>\n      </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    63067:
    /*!*************************************************************!*\
      !*** ./src/app/admin-categories/admin-categories.page.scss ***!
      \*************************************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin-categories_admin-categories_module_ts-es5.js.map