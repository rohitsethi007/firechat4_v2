(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-modal-search-modal-module"],{

/***/ "DsDU":
/*!*****************************************************!*\
  !*** ./src/app/search-modal/search-modal.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModalPageModule", function() { return SearchModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _search_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-modal.page */ "XzkF");







const routes = [
    {
        path: '',
        component: _search_modal_page__WEBPACK_IMPORTED_MODULE_6__["SearchModalPage"]
    }
];
let SearchModalPageModule = class SearchModalPageModule {
};
SearchModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_search_modal_page__WEBPACK_IMPORTED_MODULE_6__["SearchModalPage"]]
    })
], SearchModalPageModule);



/***/ }),

/***/ "XzkF":
/*!***************************************************!*\
  !*** ./src/app/search-modal/search-modal.page.ts ***!
  \***************************************************/
/*! exports provided: SearchModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModalPage", function() { return SearchModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-modal.page.html */ "mdc0");
/* harmony import */ var _search_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-modal.page.scss */ "xHSK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SearchModalPage = class SearchModalPage {
    constructor() { }
    ngOnInit() {
    }
};
SearchModalPage.ctorParameters = () => [];
SearchModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-modal',
        template: _raw_loader_search_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SearchModalPage);



/***/ }),

/***/ "mdc0":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-modal/search-modal.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>search-modal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "xHSK":
/*!*****************************************************!*\
  !*** ./src/app/search-modal/search-modal.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1tb2RhbC9zZWFyY2gtbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=search-modal-search-modal-module-es2015.js.map