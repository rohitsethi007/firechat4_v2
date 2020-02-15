function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Log In</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"center ion-padding\">\r\n    <img src=\"assets/images/logo.png\" style=\"width:80px;height:80px;\" />\r\n  </div>\r\n  <form [formGroup]=\"myForm\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input type=\"email\" formControlName=\"email\" email=\"true\" [(ngModel)]=\"email\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.email\">\r\n          <p class=\"error\"\r\n            *ngIf=\"myForm.get('email').hasError(validation.type) && (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Password</ion-label>\r\n        <ion-input type=\"password\" formControlName=\"password\" [(ngModel)]=\"password\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.password\">\r\n          <p class=\"error\"\r\n            *ngIf=\"myForm.get('password').hasError(validation.type) && (myForm.get('password').dirty || myForm.get('password').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n\r\n      </ion-item>\r\n      <div style=\"float:right;\">\r\n        <ion-button fill=\"clear\" color=\"medium\" size=\"small\" routerLink=\"/forgot\">\r\n          Forgot?\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"ion-padding\">\r\n        &nbsp;\r\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"login()\">\r\n          Login\r\n        </ion-button>\r\n\r\n        &nbsp;&nbsp;&nbsp;\r\n\r\n        <ion-button fill=\"clear\" expand=\"block\" routerLink=\"/register\">\r\n          Create New Account\r\n        </ion-button>\r\n\r\n      </div>\r\n    </ion-list>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.login-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.login-content .auth-title {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.login-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.login-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.login-content .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.login-content .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.login-content .login-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.login-content .other-auth-options-row {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.login-content .other-auth-options-row .forgot-btn {\n  --color: var(--ion-color-medium);\n  margin: 0px;\n}\n\n.login-content .other-auth-options-row .signup-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.login-content .social-auth-options .options-divider {\n  color: var(--ion-color-medium);\n  margin: var(--page-margin) 0px;\n  text-align: center;\n}\n\n.login-content .social-auth-options .social-auth-btn {\n  margin: 0px;\n}\n\n.login-content .social-auth-options .social-auth-btn:not(:first-child) {\n  margin-top: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0NBQUE7RUFDQSw4Q0FBQTtBQ0RKOztBREtFO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ0ZKOztBRElJO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSxxQkFBQTtBQ0ZOOztBREtJO0VBQ0UsNkNBQUE7QUNITjs7QURLTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0hSOztBRE9RO0VBQ0Usd0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDTFY7O0FET1U7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0FDTFo7O0FEV0k7RUFDRSx3Q0FBQTtBQ1ROOztBRFlJO0VBQ0UseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNWTjs7QURZTTtFQUNFLGdDQUFBO0VBRUEsV0FBQTtBQ1hSOztBRGNNO0VBQ0UsbUNBQUE7RUFFQSxXQUFBO0FDYlI7O0FEa0JNO0VBQ0UsOEJBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0FDaEJaOztBRG1CTTtFQUNFLFdBQUE7QUNqQlI7O0FEbUJRO0VBQ0UsOEJBQUE7QUNqQlYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcclxuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG4gIC5sb2dpbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIFxyXG4gICAgLmF1dGgtdGl0bGUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAoMy8yKSk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pbnB1dHMtbGlzdCB7XHJcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICBcclxuICAgICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIFxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubG9naW4tYnRuIHtcclxuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5vdGhlci1hdXRoLW9wdGlvbnMtcm93IHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgICAuZm9yZ290LWJ0biB7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgXHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnNpZ251cC1idG4ge1xyXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIFxyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc29jaWFsLWF1dGgtb3B0aW9ucyB7XHJcbiAgICAgIC5vcHRpb25zLWRpdmlkZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnNvY2lhbC1hdXRoLWJ0biB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgXHJcbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG5cbi5sb2dpbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5sb2dpbi1jb250ZW50IC5hdXRoLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogKDMvMikpO1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG59XG4ubG9naW4tY29udGVudCAuaW5wdXRzLWxpc3Qge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4ubG9naW4tY29udGVudCAuaW5wdXRzLWxpc3QgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4ubG9naW4tY29udGVudCAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmxvZ2luLWNvbnRlbnQgLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ubG9naW4tY29udGVudCAubG9naW4tYnRuIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbn1cbi5sb2dpbi1jb250ZW50IC5vdGhlci1hdXRoLW9wdGlvbnMtcm93IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luLWNvbnRlbnQgLm90aGVyLWF1dGgtb3B0aW9ucy1yb3cgLmZvcmdvdC1idG4ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubG9naW4tY29udGVudCAub3RoZXItYXV0aC1vcHRpb25zLXJvdyAuc2lnbnVwLWJ0biB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDBweDtcbn1cbi5sb2dpbi1jb250ZW50IC5zb2NpYWwtYXV0aC1vcHRpb25zIC5vcHRpb25zLWRpdmlkZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLWNvbnRlbnQgLnNvY2lhbC1hdXRoLW9wdGlvbnMgLnNvY2lhbC1hdXRoLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufVxuLmxvZ2luLWNvbnRlbnQgLnNvY2lhbC1hdXRoLW9wdGlvbnMgLnNvY2lhbC1hdXRoLWJ0bjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _environments_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/validator */
    "./src/environments/validator.ts");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(loginService, formBuilder) {
        _classCallCheck(this, LoginPage);

        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.errorMessages = [];
        this.errorMessages = _environments_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"].errorMessages;
        this.myForm = this.formBuilder.group({
          email: _environments_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"].emailValidator,
          password: _environments_validator__WEBPACK_IMPORTED_MODULE_4__["Validator"].passwordValidator
        });
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          this.submitAttempt = true;

          if (this.myForm.valid) {
            this.loginService.login(this.email, this.password);
          } else {
            console.log('invalid');
          }
        }
      }, {
        key: "loginWithFacebook",
        value: function loginWithFacebook() {
          this.loginService.fbLogin();
        }
      }, {
        key: "loginWithGoogle",
        value: function loginWithGoogle() {
          this.loginService.gLogin();
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map