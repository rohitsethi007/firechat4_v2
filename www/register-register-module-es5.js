(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "UgDh":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function UgDh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h2 class=\"auth-title\">\n    Welcome!\n  </h2>\n<!--  <div class=\"center ion-padding\">\n    <img src=\"assets/images/logo.png\" style=\"width:80px;height:80px;\" />\n  </div>-->\n  <form [formGroup]=\"myForm\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item>\n        <ion-label position=\"stacked\">Fullname</ion-label>\n        <ion-input type=\"text\" formControlName=\"name\" [(ngModel)]=\"name\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.name\">\n          <p class=\"error-message\"\n            *ngIf=\"myForm.get('name').hasError(validation.type) && (myForm.get('name').dirty || myForm.get('name').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Username</ion-label>\n        <ion-input type=\"text\" formControlName=\"username\" [(ngModel)]=\"username\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.username\">\n          <p class=\"error-message\"\n            *ngIf=\"myForm.get('username').hasError(validation.type) && (myForm.get('username').dirty || myForm.get('username').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\" [(ngModel)]=\"email\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.email\">\n          <p class=\"error-message\"\n            *ngIf=\"myForm.get('email').hasError(validation.type) && (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" [(ngModel)]=\"password\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.password\">\n          <p class=\"error-message\"\n            *ngIf=\"myForm.get('password').hasError(validation.type) && (myForm.get('password').dirty || myForm.get('password').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <div class=\"ion-padding\">\n        <ion-button class=\"signup-btn\" expand=\"block\" (click)=\"register()\">\n          Register\n        </ion-button>\n        <ion-row class=\"other-auth-options-row\">\n          <ion-button class=\"login-btn\" fill=\"clear\" [routerLink]=\"['/login']\">\n            Already have an account?\n          </ion-button>\n        </ion-row>\n    \n      </div>\n    </ion-list>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "b0Bx":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function b0Bx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "UgDh");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "x/mg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/login.service */
      "EFyh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_environments_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/validator */
      "ZvGz");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(loginService, formBuilder) {
          _classCallCheck(this, RegisterPage);

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
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], RegisterPage);
      /***/
    },

    /***/
    "x/mg":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function xMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.signup-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.signup-content .auth-title {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.signup-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.signup-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.signup-content .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.signup-content .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.signup-content .signup-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.signup-content .other-auth-options-row {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.signup-content .other-auth-options-row .login-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.signup-content .social-auth-options .options-divider {\n  color: var(--ion-color-medium);\n  margin: var(--page-margin) 0px;\n  text-align: center;\n}\n\n.signup-content .social-auth-options .social-auth-btn {\n  margin: 0px;\n}\n\n.signup-content .social-auth-options .social-auth-btn:not(:first-child) {\n  margin-top: var(--page-margin);\n}\n\n.signup-content .legal-stuff {\n  text-align: center;\n  font-size: 14px;\n  margin: var(--page-margin) 0px;\n  color: var(--ion-color-medium);\n}\n\n.signup-content .legal-stuff .legal-action {\n  font-weight: 500;\n  color: var(--ion-color-secondary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0NBQUE7RUFDQSw4Q0FBQTtBQURKOztBQUtFO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQUZKOztBQUlJO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSxxQkFBQTtBQUZOOztBQU1JO0VBQ0UsNkNBQUE7QUFKTjs7QUFNTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUpSOztBQVFRO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFOVjs7QUFRVTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7QUFOWjs7QUFZSTtFQUNFLHdDQUFBO0FBVk47O0FBYUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBWE47O0FBYU07RUFDRSxtQ0FBQTtFQUVBLFdBQUE7QUFaUjs7QUFpQk07RUFDRSw4QkFBQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7QUFmWjs7QUFrQk07RUFDRSxXQUFBO0FBaEJSOztBQWtCUTtFQUNFLDhCQUFBO0FBaEJWOztBQXFCTTtFQUNJLGtCQUFBO0VBQ0osZUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUFuQk47O0FBcUJVO0VBQ0ksZ0JBQUE7RUFDQSxpQ0FBQTtFQUNOLGVBQUE7QUFuQlIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICB9XG4gIFxuICAvLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbiAgLnNpZ251cC1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIFxuICAgIC5hdXRoLXRpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqICgzLzIpKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgICB9XG4gIFxuICBcbiAgICAuaW5wdXRzLWxpc3Qge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBcbiAgICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgfVxuICBcbiAgICAgIC5lcnJvci1jb250YWluZXIge1xuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLnNpZ251cC1idG4ge1xuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICB9XG4gIFxuICAgIC5vdGhlci1hdXRoLW9wdGlvbnMtcm93IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICAgIC5sb2dpbi1idG4ge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgXG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLnNvY2lhbC1hdXRoLW9wdGlvbnMge1xuICAgICAgLm9wdGlvbnMtZGl2aWRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAuc29jaWFsLWF1dGgtYnRuIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gIFxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgICAgLmxlZ2FsLXN0dWZmIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIFxuICAgICAgICAgIC5sZWdhbC1hY3Rpb24ge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "x5bZ":
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function x5bZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "b0Bx");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
      }];

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map