"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_admin-categories_admin-categories_module_ts"],{

/***/ 25779:
/*!*************************************************************!*\
  !*** ./src/app/admin-categories/admin-categories.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCategoriesPageModule": function() { return /* binding */ AdminCategoriesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _admin_categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-categories.page */ 15633);







const routes = [
    {
        path: '',
        component: _admin_categories_page__WEBPACK_IMPORTED_MODULE_0__.AdminCategoriesPage
    }
];
let AdminCategoriesPageModule = class AdminCategoriesPageModule {
};
AdminCategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_admin_categories_page__WEBPACK_IMPORTED_MODULE_0__.AdminCategoriesPage]
    })
], AdminCategoriesPageModule);



/***/ }),

/***/ 15633:
/*!***********************************************************!*\
  !*** ./src/app/admin-categories/admin-categories.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminCategoriesPage": function() { return /* binding */ AdminCategoriesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./admin-categories.page.html */ 75352);
/* harmony import */ var _admin_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-categories.page.scss */ 63067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);





let AdminCategoriesPage = class AdminCategoriesPage {
    constructor(firestore) {
        this.firestore = firestore;
        this.categories = [];
    }
    ngOnInit() {
        this.loadAllCategories();
    }
    loadAllCategories() {
        this.firestore.collection('categories').snapshotChanges().subscribe((catsRes) => {
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
};
AdminCategoriesPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore }
];
AdminCategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-admin-categories',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_categories_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_admin_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore])
], AdminCategoriesPage);



/***/ }),

/***/ 75352:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin-categories/admin-categories.page.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Categories</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/new-category-modal\">New Category</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-list>\n        <ion-item *ngFor=\"let category of categories\">\n        <ion-label>{{category.name}}</ion-label>\n      </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ 63067:
/*!*************************************************************!*\
  !*** ./src/app/admin-categories/admin-categories.page.scss ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-categories_admin-categories_module_ts-es2015.js.map