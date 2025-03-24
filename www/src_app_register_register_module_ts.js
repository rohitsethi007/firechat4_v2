(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 26087:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPageModule: () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 66336);







const routes = [{
  path: '',
  component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
}];
let RegisterPageModule = class RegisterPageModule {};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage]
})], RegisterPageModule);


/***/ }),

/***/ 66336:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPage: () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.html?ngResource */ 82668);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 17740);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ 53067);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_environments_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/validator */ 82319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);









let RegisterPage = class RegisterPage {
  constructor(loginService, formBuilder, router) {
    this.loginService = loginService;
    this.formBuilder = formBuilder;
    this.router = router;
    this.loading = false;
    this.showPassword = false;
    this.submitAttempt = false;
    this.errorMessages = [];
    this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_4__.Validator.errorMessages;
    this.myForm = this.formBuilder.group({
      name: src_environments_validator__WEBPACK_IMPORTED_MODULE_4__.Validator.nameValidator,
      username: src_environments_validator__WEBPACK_IMPORTED_MODULE_4__.Validator.usernameValidator,
      email: src_environments_validator__WEBPACK_IMPORTED_MODULE_4__.Validator.emailValidator,
      password: src_environments_validator__WEBPACK_IMPORTED_MODULE_4__.Validator.passwordValidator
    });
  }
  ngOnInit() {}
  register() {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.submitAttempt = true;
      if (_this.myForm.valid) {
        _this.loading = true;
        try {
          // Register the user
          const userCredential = yield _this.loginService.register(_this.name, _this.username, _this.email, _this.password);
          // Redirect to categories selection
          _this.router.navigate(['/groups'], {
            replaceUrl: true // This prevents going back to register page
          });
        } catch (error) {
          console.error('Registration error:', error);
          // Handle specific error cases here
        } finally {
          _this.loading = false;
        }
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }];
};
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-register',
  template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], RegisterPage);


/***/ }),

/***/ 17740:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-header ion-toolbar {
  --background: transparent;
}
ion-header ion-toolbar ion-back-button {
  --color: var(--ion-color-medium);
}

.auth-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.auth-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--ion-color-dark);
  margin-bottom: 8px;
}

.auth-subtitle {
  color: var(--ion-color-medium);
  margin-bottom: 32px;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.form-field .custom-input {
  --background: transparent;
  --border-color: var(--ion-color-light);
  --border-radius: 8px;
  --border-style: solid;
  --border-width: 2px;
  --padding-start: 16px;
  --padding-end: 16px;
  --highlight-height: 0;
  margin-bottom: 4px;
  border-radius: 8px;
}
.form-field .custom-input.item-has-focus {
  --border-color: var(--ion-color-primary);
}
.form-field .custom-input ion-label {
  color: var(--ion-color-medium);
  font-size: 14px;
  margin-bottom: 8px;
}
.form-field .custom-input ion-input {
  --padding-top: 12px;
  --padding-bottom: 12px;
  font-size: 16px;
}
.form-field .custom-input ion-button {
  --padding-end: 0;
  --color: var(--ion-color-medium);
}

.error-container {
  padding: 0 16px;
}

.error-message {
  color: var(--ion-color-danger);
  font-size: 12px;
  margin: 4px 0 0;
}

.register-button {
  margin: 16px 0;
  --border-radius: 8px;
  height: 48px;
  font-weight: 600;
}
.register-button ion-spinner {
  margin-right: 8px;
}

.auth-footer {
  text-align: center;
  margin-top: 24px;
}
.auth-footer p {
  color: var(--ion-color-medium);
  font-size: 14px;
}
.auth-footer p a {
  color: var(--ion-color-primary);
  text-decoration: none;
  font-weight: 500;
}`, "",{"version":3,"sources":["webpack://./src/app/register/register.page.scss"],"names":[],"mappings":"AACE;EACE,yBAAA;AAAJ;AAEI;EACE,gCAAA;AAAN;;AAKA;EACE,gBAAA;EACA,cAAA;EACA,aAAA;AAFF;;AAKA;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,kBAAA;AAFF;;AAKA;EACE,8BAAA;EACA,mBAAA;AAFF;;AAKA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;AAFF;;AAME;EACE,yBAAA;EACA,sCAAA;EACA,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;EACA,qBAAA;EAEA,kBAAA;EACA,kBAAA;AAJJ;AAMI;EACE,wCAAA;AAJN;AAOI;EACE,8BAAA;EACA,eAAA;EACA,kBAAA;AALN;AAQI;EACE,mBAAA;EACA,sBAAA;EACA,eAAA;AANN;AASI;EACE,gBAAA;EACA,gCAAA;AAPN;;AAYA;EACE,eAAA;AATF;;AAYA;EACE,8BAAA;EACA,eAAA;EACA,eAAA;AATF;;AAYA;EACE,cAAA;EACA,oBAAA;EACA,YAAA;EACA,gBAAA;AATF;AAWE;EACE,iBAAA;AATJ;;AAaA;EACE,kBAAA;EACA,gBAAA;AAVF;AAYE;EACE,8BAAA;EACA,eAAA;AAVJ;AAYI;EACE,+BAAA;EACA,qBAAA;EACA,gBAAA;AAVN","sourcesContent":["ion-header {\n  ion-toolbar {\n    --background: transparent;\n    \n    ion-back-button {\n      --color: var(--ion-color-medium);\n    }\n  }\n}\n\n.auth-container {\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.auth-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--ion-color-dark);\n  margin-bottom: 8px;\n}\n\n.auth-subtitle {\n  color: var(--ion-color-medium);\n  margin-bottom: 32px;\n}\n\n.form-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n\n.form-field {\n  .custom-input {\n    --background: transparent;\n    --border-color: var(--ion-color-light);\n    --border-radius: 8px;\n    --border-style: solid;\n    --border-width: 2px;\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --highlight-height: 0;\n    \n    margin-bottom: 4px;\n    border-radius: 8px;\n    \n    &.item-has-focus {\n      --border-color: var(--ion-color-primary);\n    }\n    \n    ion-label {\n      color: var(--ion-color-medium);\n      font-size: 14px;\n      margin-bottom: 8px;\n    }\n    \n    ion-input {\n      --padding-top: 12px;\n      --padding-bottom: 12px;\n      font-size: 16px;\n    }\n    \n    ion-button {\n      --padding-end: 0;\n      --color: var(--ion-color-medium);\n    }\n  }\n}\n\n.error-container {\n  padding: 0 16px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n  font-size: 12px;\n  margin: 4px 0 0;\n}\n\n.register-button {\n  margin: 16px 0;\n  --border-radius: 8px;\n  height: 48px;\n  font-weight: 600;\n  \n  ion-spinner {\n    margin-right: 8px;\n  }\n}\n\n.auth-footer {\n  text-align: center;\n  margin-top: 24px;\n  \n  p {\n    color: var(--ion-color-medium);\n    font-size: 14px;\n    \n    a {\n      color: var(--ion-color-primary);\n      text-decoration: none;\n      font-weight: 500;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 82668:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/intro\" text=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"auth-container\">\n    <h1 class=\"auth-title\">Create Account</h1>\n    <p class=\"auth-subtitle\">Fill in your details to get started</p>\n\n    <form [formGroup]=\"myForm\" class=\"auth-form\">\n      <div class=\"form-fields\">\n        <!-- Full Name Field -->\n        <div class=\"form-field\">\n          <ion-item class=\"custom-input\">\n            <ion-label position=\"stacked\">Full Name</ion-label>\n            <ion-input \n              type=\"text\" \n              formControlName=\"name\" \n              [(ngModel)]=\"name\"\n              placeholder=\"Enter your full name\">\n            </ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <div *ngFor=\"let validation of errorMessages.name\">\n              <p class=\"error-message\" \n                *ngIf=\"myForm.get('name').hasError(validation.type) && \n                      (myForm.get('name').dirty || myForm.get('name').touched || submitAttempt)\">\n                {{validation.message}}\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Username Field -->\n        <div class=\"form-field\">\n          <ion-item class=\"custom-input\">\n            <ion-label position=\"stacked\">Username</ion-label>\n            <ion-input \n              type=\"text\" \n              formControlName=\"username\" \n              [(ngModel)]=\"username\"\n              placeholder=\"Choose a username\">\n            </ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <div *ngFor=\"let validation of errorMessages.username\">\n              <p class=\"error-message\" \n                *ngIf=\"myForm.get('username').hasError(validation.type) && \n                      (myForm.get('username').dirty || myForm.get('username').touched || submitAttempt)\">\n                {{validation.message}}\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Email Field -->\n        <div class=\"form-field\">\n          <ion-item class=\"custom-input\">\n            <ion-label position=\"stacked\">Email</ion-label>\n            <ion-input \n              type=\"email\" \n              formControlName=\"email\" \n              [(ngModel)]=\"email\"\n              placeholder=\"Enter your email\">\n            </ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <div *ngFor=\"let validation of errorMessages.email\">\n              <p class=\"error-message\" \n                *ngIf=\"myForm.get('email').hasError(validation.type) && \n                      (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt)\">\n                {{validation.message}}\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Password Field -->\n        <div class=\"form-field\">\n          <ion-item class=\"custom-input\">\n            <ion-label position=\"stacked\">Password</ion-label>\n            <ion-input \n              [type]=\"showPassword ? 'text' : 'password'\"\n              formControlName=\"password\" \n              [(ngModel)]=\"password\"\n              placeholder=\"Create a password\">\n            </ion-input>\n            <ion-button \n              fill=\"clear\" \n              slot=\"end\" \n              (click)=\"showPassword = !showPassword\">\n              <ion-icon [name]=\"showPassword ? 'eye-off' : 'eye'\"></ion-icon>\n            </ion-button>\n          </ion-item>\n          <div class=\"error-container\">\n            <div *ngFor=\"let validation of errorMessages.password\">\n              <p class=\"error-message\" \n                *ngIf=\"myForm.get('password').hasError(validation.type) && \n                      (myForm.get('password').dirty || myForm.get('password').touched || submitAttempt)\">\n                {{validation.message}}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Register Button -->\n      <ion-button \n        expand=\"block\" \n        class=\"register-button\" \n        (click)=\"register()\"\n        [disabled]=\"loading\">\n        <ion-spinner *ngIf=\"loading\"></ion-spinner>\n        <span *ngIf=\"!loading\">Create Account</span>\n      </ion-button>\n\n      <!-- Login Link -->\n      <div class=\"auth-footer\">\n        <p>\n          Already have an account? \n          <a [routerLink]=\"['/login']\">Sign In</a>\n        </p>\n      </div>\n    </form>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map