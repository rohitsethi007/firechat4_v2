(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Reset Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"center ion-padding\">\r\n    <img src=\"assets/images/logo.png\" style=\"width:80px;height:80px;\" />\r\n  </div>\r\n  <form [formGroup]=\"myForm\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input type=\"email\" formControlName=\"email\" email=\"true\" [(ngModel)]=\"email\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.email\">\r\n          <p class=\"error\"\r\n            *ngIf=\"myForm.get('email').hasError(validation.type) && (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <div class=\"item-padding\">\r\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"reset()\">\r\n          Reset Password\r\n        </ion-button>\r\n      </div>\r\n    </ion-list>\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/forgot/forgot.module.ts":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.module.ts ***!
  \*****************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/forgot/forgot.page.ts");







const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]
    }
];
let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })
], ForgotPageModule);



/***/ }),

/***/ "./src/app/forgot/forgot.page.scss":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/forgot/forgot.page.ts":
/*!***************************************!*\
  !*** ./src/app/forgot/forgot.page.ts ***!
  \***************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_environments_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/validator */ "./src/environments/validator.ts");





let ForgotPage = class ForgotPage {
    constructor(loginService, formBuilder) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.errorMessages = [];
        this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"].errorMessages;
        this.myForm = this.formBuilder.group({
            email: src_environments_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"].emailValidator,
        });
    }
    ngOnInit() {
    }
    reset() {
        this.submitAttempt = true;
        if (this.myForm.controls.email.valid) {
            this.loginService.reset(this.email);
        }
    }
};
ForgotPage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot.page.scss */ "./src/app/forgot/forgot.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], ForgotPage);



/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module-es2015.js.map