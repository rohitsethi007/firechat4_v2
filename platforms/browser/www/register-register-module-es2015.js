(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Register</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <h2 class=\"auth-title\">\r\n    Welcome!\r\n  </h2>\r\n<!--  <div class=\"center ion-padding\">\r\n    <img src=\"assets/images/logo.png\" style=\"width:80px;height:80px;\" />\r\n  </div>-->\r\n  <form [formGroup]=\"myForm\">\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Fullname</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"name\" [(ngModel)]=\"name\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.name\">\r\n          <p class=\"error-message\"\r\n            *ngIf=\"myForm.get('name').hasError(validation.type) && (myForm.get('name').dirty || myForm.get('name').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Username</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"username\" [(ngModel)]=\"username\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.username\">\r\n          <p class=\"error-message\"\r\n            *ngIf=\"myForm.get('username').hasError(validation.type) && (myForm.get('username').dirty || myForm.get('username').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"email\" [(ngModel)]=\"email\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.email\">\r\n          <p class=\"error-message\"\r\n            *ngIf=\"myForm.get('email').hasError(validation.type) && (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Password</ion-label>\r\n        <ion-input type=\"password\" formControlName=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.password\">\r\n          <p class=\"error-message\"\r\n            *ngIf=\"myForm.get('password').hasError(validation.type) && (myForm.get('password').dirty || myForm.get('password').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <div class=\"ion-padding\">\r\n        <ion-button class=\"signup-btn\" expand=\"block\" (click)=\"register()\">\r\n          Register\r\n        </ion-button>\r\n        <ion-row class=\"other-auth-options-row\">\r\n          <ion-button class=\"login-btn\" fill=\"clear\" [routerLink]=\"['/login']\">\r\n            Already have an account?\r\n          </ion-button>\r\n        </ion-row>\r\n    \r\n      </div>\r\n    </ion-list>\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "EFyh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/validator */ "ZvGz");







let RegisterPage = class RegisterPage {
    constructor(loginService, formBuilder) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.errorMessages = [];
        this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].errorMessages;
        this.myForm = this.formBuilder.group({
            name: src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].nameValidator,
            username: src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].usernameValidator,
            email: src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].emailValidator,
            password: src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].passwordValidator
        });
    }
    ngOnInit() {
    }
    register() {
        this.submitAttempt = true;
        if (this.myForm.valid) {
            this.loginService.register(this.name, this.username, this.email, this.password, this.img);
        }
        else {
            console.log("Invalid");
        }
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.signup-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.signup-content .auth-title {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.signup-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.signup-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.signup-content .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.signup-content .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.signup-content .signup-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.signup-content .other-auth-options-row {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.signup-content .other-auth-options-row .login-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.signup-content .social-auth-options .options-divider {\n  color: var(--ion-color-medium);\n  margin: var(--page-margin) 0px;\n  text-align: center;\n}\n\n.signup-content .social-auth-options .social-auth-btn {\n  margin: 0px;\n}\n\n.signup-content .social-auth-options .social-auth-btn:not(:first-child) {\n  margin-top: var(--page-margin);\n}\n\n.signup-content .legal-stuff {\n  text-align: center;\n  font-size: 14px;\n  margin: var(--page-margin) 0px;\n  color: var(--ion-color-medium);\n}\n\n.signup-content .legal-stuff .legal-action {\n  font-weight: 500;\n  color: var(--ion-color-secondary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0NBQUE7RUFDQSw4Q0FBQTtBQURKOztBQUtFO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQUZKOztBQUlJO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSxxQkFBQTtBQUZOOztBQU1JO0VBQ0UsNkNBQUE7QUFKTjs7QUFNTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUpSOztBQVFRO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFOVjs7QUFRVTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7QUFOWjs7QUFZSTtFQUNFLHdDQUFBO0FBVk47O0FBYUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBWE47O0FBYU07RUFDRSxtQ0FBQTtFQUVBLFdBQUE7QUFaUjs7QUFpQk07RUFDRSw4QkFBQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7QUFmWjs7QUFrQk07RUFDRSxXQUFBO0FBaEJSOztBQWtCUTtFQUNFLDhCQUFBO0FBaEJWOztBQXFCTTtFQUNJLGtCQUFBO0VBQ0osZUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUFuQk47O0FBcUJVO0VBQ0ksZ0JBQUE7RUFDQSxpQ0FBQTtFQUNOLGVBQUE7QUFuQlIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcclxuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG4gIC5zaWdudXAtY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICBcclxuICAgIC5hdXRoLXRpdGxlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogKDMvMikpO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICAuaW5wdXRzLWxpc3Qge1xyXG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgXHJcbiAgICAgIC5pbnB1dC1pdGVtIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5lcnJvci1jb250YWluZXIge1xyXG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICBcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNpZ251cC1idG4ge1xyXG4gICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm90aGVyLWF1dGgtb3B0aW9ucy1yb3cge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgICAubG9naW4tYnRuIHtcclxuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNvY2lhbC1hdXRoLW9wdGlvbnMge1xyXG4gICAgICAub3B0aW9ucy1kaXZpZGVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5zb2NpYWwtYXV0aC1idG4ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gIFxyXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgICAubGVnYWwtc3R1ZmYge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIFxyXG4gICAgICAgICAgLmxlZ2FsLWFjdGlvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map