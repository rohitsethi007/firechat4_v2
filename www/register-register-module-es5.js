function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Register</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <h2 class=\"auth-title\">\r\n    Welcome!\r\n  </h2>\r\n<!--  <div class=\"center ion-padding\">\r\n    <img src=\"assets/images/logo.png\" style=\"width:80px;height:80px;\" />\r\n  </div>-->\r\n  <form [formGroup]=\"myForm\">\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Fullname</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"name\" [(ngModel)]=\"name\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.name\">\r\n          <p class=\"error-message\"\r\n            *ngIf=\"myForm.get('name').hasError(validation.type) && (myForm.get('name').dirty || myForm.get('name').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Username</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"username\" [(ngModel)]=\"username\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.username\">\r\n          <p class=\"error-message\"\r\n            *ngIf=\"myForm.get('username').hasError(validation.type) && (myForm.get('username').dirty || myForm.get('username').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"email\" [(ngModel)]=\"email\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.email\">\r\n          <p class=\"error-message\"\r\n            *ngIf=\"myForm.get('email').hasError(validation.type) && (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Password</ion-label>\r\n        <ion-input type=\"password\" formControlName=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.password\">\r\n          <p class=\"error-message\"\r\n            *ngIf=\"myForm.get('password').hasError(validation.type) && (myForm.get('password').dirty || myForm.get('password').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <div class=\"ion-padding\">\r\n        <ion-button class=\"signup-btn\" expand=\"block\" (click)=\"register()\">\r\n          Register\r\n        </ion-button>\r\n        <ion-row class=\"other-auth-options-row\">\r\n          <ion-button class=\"login-btn\" fill=\"clear\" [routerLink]=\"['/login']\">\r\n            Already have an account?\r\n          </ion-button>\r\n        </ion-row>\r\n    \r\n      </div>\r\n    </ion-list>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }];

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.signup-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.signup-content .auth-title {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.signup-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.signup-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.signup-content .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.signup-content .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.signup-content .signup-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.signup-content .other-auth-options-row {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.signup-content .other-auth-options-row .login-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.signup-content .social-auth-options .options-divider {\n  color: var(--ion-color-medium);\n  margin: var(--page-margin) 0px;\n  text-align: center;\n}\n\n.signup-content .social-auth-options .social-auth-btn {\n  margin: 0px;\n}\n\n.signup-content .social-auth-options .social-auth-btn:not(:first-child) {\n  margin-top: var(--page-margin);\n}\n\n.signup-content .legal-stuff {\n  text-align: center;\n  font-size: 14px;\n  margin: var(--page-margin) 0px;\n  color: var(--ion-color-medium);\n}\n\n.signup-content .legal-stuff .legal-action {\n  font-weight: 500;\n  color: var(--ion-color-secondary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0NBQUE7RUFDQSw4Q0FBQTtBQ0RKOztBREtFO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ0ZKOztBRElJO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSxxQkFBQTtBQ0ZOOztBRE1JO0VBQ0UsNkNBQUE7QUNKTjs7QURNTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0pSOztBRFFRO0VBQ0Usd0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDTlY7O0FEUVU7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0FDTlo7O0FEWUk7RUFDRSx3Q0FBQTtBQ1ZOOztBRGFJO0VBQ0UscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNYTjs7QURhTTtFQUNFLG1DQUFBO0VBRUEsV0FBQTtBQ1pSOztBRGlCTTtFQUNFLDhCQUFBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtBQ2ZaOztBRGtCTTtFQUNFLFdBQUE7QUNoQlI7O0FEa0JRO0VBQ0UsOEJBQUE7QUNoQlY7O0FEcUJNO0VBQ0ksa0JBQUE7RUFDSixlQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ25CTjs7QURxQlU7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0VBQ04sZUFBQTtBQ25CUiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbiAgLnNpZ251cC1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIFxyXG4gICAgLmF1dGgtdGl0bGUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAoMy8yKSk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIH1cclxuICBcclxuICBcclxuICAgIC5pbnB1dHMtbGlzdCB7XHJcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICBcclxuICAgICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIFxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2lnbnVwLWJ0biB7XHJcbiAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAub3RoZXItYXV0aC1vcHRpb25zLXJvdyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgIC5sb2dpbi1idG4ge1xyXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIFxyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc29jaWFsLWF1dGgtb3B0aW9ucyB7XHJcbiAgICAgIC5vcHRpb25zLWRpdmlkZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnNvY2lhbC1hdXRoLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgXHJcbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAgIC5sZWdhbC1zdHVmZiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgXHJcbiAgICAgICAgICAubGVnYWwtYWN0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbiAgIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cblxuLnNpZ251cC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5zaWdudXAtY29udGVudCAuYXV0aC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqICgzLzIpKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xufVxuLnNpZ251cC1jb250ZW50IC5pbnB1dHMtbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5zaWdudXAtY29udGVudCAuaW5wdXRzLWxpc3QgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uc2lnbnVwLWNvbnRlbnQgLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2Uge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zaWdudXAtY29udGVudCAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5zaWdudXAtY29udGVudCAuc2lnbnVwLWJ0biB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG59XG4uc2lnbnVwLWNvbnRlbnQgLm90aGVyLWF1dGgtb3B0aW9ucy1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZ251cC1jb250ZW50IC5vdGhlci1hdXRoLW9wdGlvbnMtcm93IC5sb2dpbi1idG4ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2lnbnVwLWNvbnRlbnQgLnNvY2lhbC1hdXRoLW9wdGlvbnMgLm9wdGlvbnMtZGl2aWRlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lnbnVwLWNvbnRlbnQgLnNvY2lhbC1hdXRoLW9wdGlvbnMgLnNvY2lhbC1hdXRoLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNpZ251cC1jb250ZW50IC5zb2NpYWwtYXV0aC1vcHRpb25zIC5zb2NpYWwtYXV0aC1idG46bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uc2lnbnVwLWNvbnRlbnQgLmxlZ2FsLXN0dWZmIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLnNpZ251cC1jb250ZW50IC5sZWdhbC1zdHVmZiAubGVnYWwtYWN0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_environments_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/validator */
    "./src/environments/validator.ts");

    var RegisterPage =
    /*#__PURE__*/
    function () {
      function RegisterPage(loginService, formBuilder) {
        _classCallCheck(this, RegisterPage);

        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.errorMessages = [];
        this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"].errorMessages;
        this.myForm = this.formBuilder.group({
          name: src_environments_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"].nameValidator,
          username: src_environments_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"].usernameValidator,
          email: src_environments_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"].emailValidator,
          password: src_environments_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"].passwordValidator
        });
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          this.submitAttempt = true;

          if (this.myForm.valid) {
            this.loginService.register(this.name, this.username, this.email, this.password, this.img);
          } else {
            console.log("Invalid");
          }
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map