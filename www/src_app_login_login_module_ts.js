(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 91307:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 49444);







const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 49444:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 50856);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 32372);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ 53067);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _environments_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/validator */ 82319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);








let LoginPage = class LoginPage {
  constructor(loginService, formBuilder, router) {
    this.loginService = loginService;
    this.formBuilder = formBuilder;
    this.router = router;
    this.submitAttempt = false;
    this.errorMessages = [];
    this.errorMessages = _environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.errorMessages;
    this.myForm = this.formBuilder.group({
      email: _environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.emailValidator,
      password: _environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.passwordValidator
    });
  }
  ngOnInit() {}
  login() {
    this.submitAttempt = true;
    if (this.myForm.valid) {
      console.log('valid');
      this.loginService.login(this.email, this.password);
      this.router.navigate(['/feed'], {
        replaceUrl: true // This prevents going back to register page
      });
    } else {
      console.log('invalid');
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LoginPage);


/***/ }),

/***/ 32372:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --page-margin: var(--app-broad-margin);
  --page-background: var(--app-background-shade);
}

.login-content {
  --background: var(--page-background);
  --padding-start: var(--page-margin);
  --padding-end: var(--page-margin);
  --padding-top: var(--page-margin);
  --padding-bottom: var(--page-margin);
}
.login-content .auth-title {
  color: var(--ion-color-dark);
  font-weight: bold;
  margin-top: calc(var(--page-margin) / 2);
  margin-bottom: calc(var(--page-margin) * 1.5);
  letter-spacing: 0.6px;
}
.login-content .inputs-list {
  --ion-item-background: var(--page-background);
}
.login-content .inputs-list .input-item {
  --padding-start: 0px;
  --padding-end: 0px;
  --inner-padding-end: 0px;
}
.login-content .inputs-list .error-container .error-message {
  margin: calc(var(--page-margin) / 2) 0px;
  display: flex;
  align-items: center;
  color: var(--ion-color-danger);
  font-size: 14px;
}
.login-content .inputs-list .error-container .error-message ion-icon {
  padding-inline-end: calc(var(--page-margin) / 2);
}
.login-content .login-btn {
  margin: calc(var(--page-margin) / 2) 0px;
}
.login-content .other-auth-options-row {
  justify-content: space-between;
  align-items: center;
}
.login-content .other-auth-options-row .forgot-btn {
  --color: var(--ion-color-medium);
  margin: 0px;
}
.login-content .other-auth-options-row .signup-btn {
  --color: var(--ion-color-secondary);
  margin: 0px;
}
.login-content .social-auth-options .options-divider {
  color: var(--ion-color-medium);
  margin: var(--page-margin) 0px;
  text-align: center;
}
.login-content .social-auth-options .social-auth-btn {
  margin: 0px;
}
.login-content .social-auth-options .social-auth-btn:not(:first-child) {
  margin-top: var(--page-margin);
}`, "",{"version":3,"sources":["webpack://./src/app/login/login.page.scss"],"names":[],"mappings":"AAEA;EACI,sCAAA;EACA,8CAAA;AADJ;;AAKE;EACE,oCAAA;EACA,mCAAA;EACA,iCAAA;EACA,iCAAA;EACA,oCAAA;AAFJ;AAII;EACE,4BAAA;EACA,iBAAA;EACA,wCAAA;EACA,6CAAA;EACA,qBAAA;AAFN;AAKI;EACE,6CAAA;AAHN;AAKM;EACE,oBAAA;EACA,kBAAA;EACA,wBAAA;AAHR;AAOQ;EACE,wCAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;AALV;AAOU;EACE,gDAAA;AALZ;AAWI;EACE,wCAAA;AATN;AAYI;EACE,8BAAA;EACA,mBAAA;AAVN;AAYM;EACE,gCAAA;EAEA,WAAA;AAXR;AAcM;EACE,mCAAA;EAEA,WAAA;AAbR;AAkBM;EACE,8BAAA;EACI,8BAAA;EACA,kBAAA;AAhBZ;AAmBM;EACE,WAAA;AAjBR;AAmBQ;EACE,8BAAA;AAjBV","sourcesContent":["// Custom variables\n// Note:  These ones were added by us and have nothing to do with Ionic CSS Custom Properties\n:host {\n    --page-margin: var(--app-broad-margin);\n    --page-background: var(--app-background-shade);\n  }\n  \n  // Note:  All the CSS variables defined below are overrides of Ionic elements CSS Custom Properties\n  .login-content {\n    --background: var(--page-background);\n    --padding-start: var(--page-margin);\n    --padding-end: var(--page-margin);\n    --padding-top: var(--page-margin);\n    --padding-bottom: var(--page-margin);\n  \n    .auth-title {\n      color: var(--ion-color-dark);\n      font-weight: bold;\n      margin-top: calc(var(--page-margin) / 2);\n      margin-bottom: calc(var(--page-margin) * (3/2));\n      letter-spacing: 0.6px;\n    }\n  \n    .inputs-list {\n      --ion-item-background: var(--page-background);\n  \n      .input-item {\n        --padding-start: 0px;\n        --padding-end: 0px;\n        --inner-padding-end: 0px;\n      }\n  \n      .error-container {\n        .error-message {\n          margin: calc(var(--page-margin) / 2) 0px;\n          display: flex;\n          align-items: center;\n          color: var(--ion-color-danger);\n          font-size: 14px;\n  \n          ion-icon {\n            padding-inline-end: calc(var(--page-margin) / 2);\n          }\n        }\n      }\n    }\n  \n    .login-btn {\n      margin: calc(var(--page-margin) / 2) 0px;\n    }\n  \n    .other-auth-options-row {\n      justify-content: space-between;\n      align-items: center;\n  \n      .forgot-btn {\n        --color: var(--ion-color-medium);\n  \n        margin: 0px;\n      }\n  \n      .signup-btn {\n        --color: var(--ion-color-secondary);\n  \n        margin: 0px;\n      }\n    }\n  \n    .social-auth-options {\n      .options-divider {\n        color: var(--ion-color-medium);\n            margin: var(--page-margin) 0px;\n            text-align: center;\n      }\n  \n      .social-auth-btn {\n        margin: 0px;\n  \n        &:not(:first-child) {\n          margin-top: var(--page-margin);\n        }\n      }\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50856:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Log In</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"center ion-padding\">\n    <img src=\"assets/images/logo.png\" style=\"width:80px;height:80px;\" />\n  </div>\n  <form [formGroup]=\"myForm\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\" email=\"true\" [(ngModel)]=\"email\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.email\">\n          <p class=\"error\"\n            *ngIf=\"myForm.get('email').hasError(validation.type) && (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" [(ngModel)]=\"password\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.password\">\n          <p class=\"error\"\n            *ngIf=\"myForm.get('password').hasError(validation.type) && (myForm.get('password').dirty || myForm.get('password').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n\n      </ion-item>\n      <div style=\"float:right;\">\n        <ion-button fill=\"clear\" color=\"medium\" size=\"small\" routerLink=\"/forgot\">\n          Forgot?\n        </ion-button>\n      </div>\n      <div class=\"ion-padding\">\n        &nbsp;\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"login()\">\n          Login\n        </ion-button>\n\n        &nbsp;&nbsp;&nbsp;\n\n        <ion-button fill=\"clear\" expand=\"block\" routerLink=\"/register\">\n          Create New Account\n        </ion-button>\n\n      </div>\n    </ion-list>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map