(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-categories-admin-categories-module"], {
    /***/
    "R2zc":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-categories/admin-categories.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function R2zc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Categories</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/new-category-modal\">New Category</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-list>\n        <ion-item *ngFor=\"let category of categories\">\n        <ion-label>{{category.name}}</ion-label>\n      </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    "SGmz":
    /*!*************************************************************!*\
      !*** ./src/app/admin-categories/admin-categories.module.ts ***!
      \*************************************************************/

    /*! exports provided: AdminCategoriesPageModule */

    /***/
    function SGmz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminCategoriesPageModule", function () {
        return AdminCategoriesPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _admin_categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-categories.page */
      "X2vD");

      var routes = [{
        path: '',
        component: _admin_categories_page__WEBPACK_IMPORTED_MODULE_6__["AdminCategoriesPage"]
      }];

      var AdminCategoriesPageModule = function AdminCategoriesPageModule() {
        _classCallCheck(this, AdminCategoriesPageModule);
      };

      AdminCategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_admin_categories_page__WEBPACK_IMPORTED_MODULE_6__["AdminCategoriesPage"]]
      })], AdminCategoriesPageModule);
      /***/
    },

    /***/
    "TBV9":
    /*!*************************************************************!*\
      !*** ./src/app/admin-categories/admin-categories.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function TBV9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWNhdGVnb3JpZXMvYWRtaW4tY2F0ZWdvcmllcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "X2vD":
    /*!***********************************************************!*\
      !*** ./src/app/admin-categories/admin-categories.page.ts ***!
      \***********************************************************/

    /*! exports provided: AdminCategoriesPage */

    /***/
    function X2vD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminCategoriesPage", function () {
        return AdminCategoriesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_categories_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-categories.page.html */
      "R2zc");
      /* harmony import */


      var _admin_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-categories.page.scss */
      "TBV9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var AdminCategoriesPage = /*#__PURE__*/function () {
        function AdminCategoriesPage(firestore) {
          _classCallCheck(this, AdminCategoriesPage);

          this.firestore = firestore;
          this.categories = [];
        }

        _createClass(AdminCategoriesPage, [{
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

        return AdminCategoriesPage;
      }();

      AdminCategoriesPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }];
      };

      AdminCategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-categories',
        template: _raw_loader_admin_categories_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])], AdminCategoriesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-categories-admin-categories-module-es5.js.map