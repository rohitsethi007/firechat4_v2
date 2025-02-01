"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_new-category-modal_new-category-modal_module_ts"],{

/***/ 48694:
/*!*****************************************************************!*\
  !*** ./src/app/new-category-modal/new-category-modal.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewCategoryModalPageModule": function() { return /* binding */ NewCategoryModalPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _new_category_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-category-modal.page */ 50296);







const routes = [
    {
        path: '',
        component: _new_category_modal_page__WEBPACK_IMPORTED_MODULE_0__.NewCategoryModalPage
    }
];
let NewCategoryModalPageModule = class NewCategoryModalPageModule {
};
NewCategoryModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_new_category_modal_page__WEBPACK_IMPORTED_MODULE_0__.NewCategoryModalPage]
    })
], NewCategoryModalPageModule);



/***/ }),

/***/ 50296:
/*!***************************************************************!*\
  !*** ./src/app/new-category-modal/new-category-modal.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewCategoryModalPage": function() { return /* binding */ NewCategoryModalPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_category_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-category-modal.page.html */ 871);
/* harmony import */ var _new_category_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-category-modal.page.scss */ 58956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);






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
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required
            ])),
            dateCreated: new Date(),
            description: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required
            ]),
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
};
NewCategoryModalPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore }
];
NewCategoryModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-new-category-modal',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_category_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_category_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore])
], NewCategoryModalPage);



/***/ }),

/***/ 871:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/new-category-modal/new-category-modal.page.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-row>\n    <ion-col>\n      <form [formGroup]=\"categoryForm\">\n        <ion-list>\n          <ion-item>\n            <ion-label position=\"stacked\">Name:</ion-label>\n            <ion-input formControlName=\"name\" type=\"text\" [(ngModel)]=\"name\" placeHolder=\"Enter the Category Name\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Description:</ion-label>\n            <ion-textarea rows=6 formControlName=\"description\" type=\"text\" [(ngModel)]=\"description\" placeHolder=\"Enter a short description\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Image:</ion-label>\n            <ion-input formControlName=\"img\" type=\"text\" [(ngModel)]=\"img\" placeHolder=\"Enter the Image path\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-button type=\"submit\" color=\"secondary\" (click)=\"submit()\" expand=\"block\">Create Category</ion-button>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ 58956:
/*!*****************************************************************!*\
  !*** ./src/app/new-category-modal/new-category-modal.page.scss ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctY2F0ZWdvcnktbW9kYWwucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_new-category-modal_new-category-modal_module_ts-es2015.js.map