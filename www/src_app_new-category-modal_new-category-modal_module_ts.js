(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-category-modal_new-category-modal_module_ts"],{

/***/ 32391:
/*!*****************************************************************!*\
  !*** ./src/app/new-category-modal/new-category-modal.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewCategoryModalPageModule: () => (/* binding */ NewCategoryModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _new_category_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-category-modal.page */ 68736);







const routes = [{
  path: '',
  component: _new_category_modal_page__WEBPACK_IMPORTED_MODULE_0__.NewCategoryModalPage
}];
let NewCategoryModalPageModule = class NewCategoryModalPageModule {};
NewCategoryModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_new_category_modal_page__WEBPACK_IMPORTED_MODULE_0__.NewCategoryModalPage]
})], NewCategoryModalPageModule);


/***/ }),

/***/ 68736:
/*!***************************************************************!*\
  !*** ./src/app/new-category-modal/new-category-modal.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewCategoryModalPage: () => (/* binding */ NewCategoryModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _new_category_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-category-modal.page.html?ngResource */ 95852);
/* harmony import */ var _new_category_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-category-modal.page.scss?ngResource */ 10640);
/* harmony import */ var _new_category_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_new_category_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);






let NewCategoryModalPage = class NewCategoryModalPage {
  constructor(formBuilder, firestore) {
    this.formBuilder = formBuilder;
    this.firestore = firestore;
  }
  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.categoryForm = this.formBuilder.group({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])),
      dateCreated: new Date(),
      description: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      img: ''
    });
  }
  submit() {
    const category = {
      name: this.categoryForm.value.name,
      description: this.categoryForm.value.description,
      dateCreated: new Date(),
      country: 'India',
      img: this.categoryForm.value.img
    };
    this.firestore.collection('categories').add(category);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
  }];
};
NewCategoryModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-new-category-modal',
  template: _new_category_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_new_category_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NewCategoryModalPage);


/***/ }),

/***/ 10640:
/*!****************************************************************************!*\
  !*** ./src/app/new-category-modal/new-category-modal.page.scss?ngResource ***!
  \****************************************************************************/
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

/***/ 95852:
/*!****************************************************************************!*\
  !*** ./src/app/new-category-modal/new-category-modal.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-row>\n    <ion-col>\n      <form [formGroup]=\"categoryForm\">\n        <ion-list>\n          <ion-item>\n            <ion-label position=\"stacked\">Name:</ion-label>\n            <ion-input formControlName=\"name\" type=\"text\" [(ngModel)]=\"name\" placeHolder=\"Enter the Category Name\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Description:</ion-label>\n            <ion-textarea rows=6 formControlName=\"description\" type=\"text\" [(ngModel)]=\"description\" placeHolder=\"Enter a short description\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Image:</ion-label>\n            <ion-input formControlName=\"img\" type=\"text\" [(ngModel)]=\"img\" placeHolder=\"Enter the Image path\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-button type=\"submit\" color=\"secondary\" (click)=\"submit()\" expand=\"block\">Create Category</ion-button>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_new-category-modal_new-category-modal_module_ts.js.map