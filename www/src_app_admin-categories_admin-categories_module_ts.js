(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin-categories_admin-categories_module_ts"],{

/***/ 54369:
/*!*************************************************************!*\
  !*** ./src/app/admin-categories/admin-categories.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminCategoriesPageModule: () => (/* binding */ AdminCategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _admin_categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-categories.page */ 18138);







const routes = [{
  path: '',
  component: _admin_categories_page__WEBPACK_IMPORTED_MODULE_0__.AdminCategoriesPage
}];
let AdminCategoriesPageModule = class AdminCategoriesPageModule {};
AdminCategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_admin_categories_page__WEBPACK_IMPORTED_MODULE_0__.AdminCategoriesPage]
})], AdminCategoriesPageModule);


/***/ }),

/***/ 18138:
/*!***********************************************************!*\
  !*** ./src/app/admin-categories/admin-categories.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminCategoriesPage: () => (/* binding */ AdminCategoriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _admin_categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-categories.page.html?ngResource */ 13118);
/* harmony import */ var _admin_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-categories.page.scss?ngResource */ 5858);
/* harmony import */ var _admin_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_admin_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);





let AdminCategoriesPage = class AdminCategoriesPage {
  constructor(firestore) {
    this.firestore = firestore;
    this.categories = [];
  }
  ngOnInit() {
    this.loadAllCategories();
  }
  loadAllCategories() {
    this.firestore.collection('categories').snapshotChanges().subscribe(catsRes => {
      if (catsRes) {
        this.categories = [];
        catsRes.forEach(cat => {
          let category = cat.payload.doc.data();
          category.key = cat.payload.doc.id;
          console.log('category', category);
          this.categories.push(category);
        });
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore
  }];
};
AdminCategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-admin-categories',
  template: _admin_categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_admin_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AdminCategoriesPage);


/***/ }),

/***/ 5858:
/*!************************************************************************!*\
  !*** ./src/app/admin-categories/admin-categories.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 13118:
/*!************************************************************************!*\
  !*** ./src/app/admin-categories/admin-categories.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Categories</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/new-category-modal\">New Category</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-list>\n        <ion-item *ngFor=\"let category of categories\">\n        <ion-label>{{category.name}}</ion-label>\n      </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-categories_admin-categories_module_ts.js.map