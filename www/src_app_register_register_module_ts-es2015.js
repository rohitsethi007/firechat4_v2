"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_register_register_module_ts"],{

/***/ 18723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": function() { return /* binding */ RegisterPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 98135);







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 98135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": function() { return /* binding */ RegisterPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */ 43420);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 25556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ 54120);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_environments_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/validator */ 86590);







let RegisterPage = class RegisterPage {
    constructor(loginService, formBuilder) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.errorMessages = [];
        this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.errorMessages;
        this.myForm = this.formBuilder.group({
            name: src_environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.nameValidator,
            username: src_environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.usernameValidator,
            email: src_environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.emailValidator,
            password: src_environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.passwordValidator
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
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder])
], RegisterPage);



/***/ }),

/***/ 43420:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/register/register.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h2 class=\"auth-title\">\n    Welcome!\n  </h2>\n<!--  <div class=\"center ion-padding\">\n    <img src=\"assets/images/logo.png\" style=\"width:80px;height:80px;\" />\n  </div>-->\n  <form [formGroup]=\"myForm\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item>\n        <ion-label position=\"stacked\">Fullname</ion-label>\n        <ion-input type=\"text\" formControlName=\"name\" [(ngModel)]=\"name\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.name\">\n          <p class=\"error-message\"\n            *ngIf=\"myForm.get('name').hasError(validation.type) && (myForm.get('name').dirty || myForm.get('name').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Username</ion-label>\n        <ion-input type=\"text\" formControlName=\"username\" [(ngModel)]=\"username\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.username\">\n          <p class=\"error-message\"\n            *ngIf=\"myForm.get('username').hasError(validation.type) && (myForm.get('username').dirty || myForm.get('username').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\" [(ngModel)]=\"email\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.email\">\n          <p class=\"error-message\"\n            *ngIf=\"myForm.get('email').hasError(validation.type) && (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" [(ngModel)]=\"password\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.password\">\n          <p class=\"error-message\"\n            *ngIf=\"myForm.get('password').hasError(validation.type) && (myForm.get('password').dirty || myForm.get('password').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <div class=\"ion-padding\">\n        <ion-button class=\"signup-btn\" expand=\"block\" (click)=\"register()\">\n          Register\n        </ion-button>\n        <ion-row class=\"other-auth-options-row\">\n          <ion-button class=\"login-btn\" fill=\"clear\" [routerLink]=\"['/login']\">\n            Already have an account?\n          </ion-button>\n        </ion-row>\n    \n      </div>\n    </ion-list>\n  </form>\n</ion-content>");

/***/ }),

/***/ 25556:
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/***/ (function(module) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.signup-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.signup-content .auth-title {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.signup-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.signup-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.signup-content .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.signup-content .inputs-list .error-container .error-message ion-icon {\n  padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.signup-content .signup-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.signup-content .other-auth-options-row {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.signup-content .other-auth-options-row .login-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.signup-content .social-auth-options .options-divider {\n  color: var(--ion-color-medium);\n  margin: var(--page-margin) 0px;\n  text-align: center;\n}\n\n.signup-content .social-auth-options .social-auth-btn {\n  margin: 0px;\n}\n\n.signup-content .social-auth-options .social-auth-btn:not(:first-child) {\n  margin-top: var(--page-margin);\n}\n\n.signup-content .legal-stuff {\n  text-align: center;\n  font-size: 14px;\n  margin: var(--page-margin) 0px;\n  color: var(--ion-color-medium);\n}\n\n.signup-content .legal-stuff .legal-action {\n  font-weight: 500;\n  color: var(--ion-color-secondary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNDQUFBO0VBQ0EsOENBQUE7QUFESjs7QUFLRTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUFGSjs7QUFJSTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLCtDQUFBO0VBQ0EscUJBQUE7QUFGTjs7QUFNSTtFQUNFLDZDQUFBO0FBSk47O0FBTU07RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFKUjs7QUFRUTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBTlY7O0FBUVU7RUFDRSxnREFBQTtBQU5aOztBQVlJO0VBQ0Usd0NBQUE7QUFWTjs7QUFhSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFYTjs7QUFhTTtFQUNFLG1DQUFBO0VBRUEsV0FBQTtBQVpSOztBQWlCTTtFQUNFLDhCQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtBQWZaOztBQWtCTTtFQUNFLFdBQUE7QUFoQlI7O0FBa0JRO0VBQ0UsOEJBQUE7QUFoQlY7O0FBcUJNO0VBQ0ksa0JBQUE7RUFDSixlQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQW5CTjs7QUFxQlU7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0VBQ04sZUFBQTtBQW5CUiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICB9XG4gIFxuICAvLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbiAgLnNpZ251cC1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIFxuICAgIC5hdXRoLXRpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqICgzLzIpKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgICB9XG4gIFxuICBcbiAgICAuaW5wdXRzLWxpc3Qge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBcbiAgICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgfVxuICBcbiAgICAgIC5lcnJvci1jb250YWluZXIge1xuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLnNpZ251cC1idG4ge1xuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICB9XG4gIFxuICAgIC5vdGhlci1hdXRoLW9wdGlvbnMtcm93IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICAgIC5sb2dpbi1idG4ge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgXG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLnNvY2lhbC1hdXRoLW9wdGlvbnMge1xuICAgICAgLm9wdGlvbnMtZGl2aWRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAuc29jaWFsLWF1dGgtYnRuIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gIFxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgICAgLmxlZ2FsLXN0dWZmIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIFxuICAgICAgICAgIC5sZWdhbC1hY3Rpb24ge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts-es2015.js.map