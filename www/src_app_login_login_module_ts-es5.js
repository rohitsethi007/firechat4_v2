(function () {
  "use strict";

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_login_login_module_ts"], {
    /***/
    80107:
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageModule = /*#__PURE__*/_createClass(function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      });

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    66825:
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */
      99403);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      59006);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/login.service */
      54120);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _environments_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/validator */
      86590);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(loginService, formBuilder) {
          _classCallCheck(this, LoginPage);

          this.loginService = loginService;
          this.formBuilder = formBuilder;
          this.submitAttempt = false;
          this.errorMessages = [];
          this.errorMessages = _environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.errorMessages;
          this.myForm = this.formBuilder.group({
            email: _environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.emailValidator,
            password: _environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.passwordValidator
          });
        }

        return _createClass(LoginPage, [{
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
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder])], _LoginPage);
      /***/
    },

    /***/
    99403:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Log In</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"center ion-padding\">\n    <img src=\"assets/images/logo.png\" style=\"width:80px;height:80px;\" />\n  </div>\n  <form [formGroup]=\"myForm\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\" email=\"true\" [(ngModel)]=\"email\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.email\">\n          <p class=\"error\"\n            *ngIf=\"myForm.get('email').hasError(validation.type) && (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" [(ngModel)]=\"password\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.password\">\n          <p class=\"error\"\n            *ngIf=\"myForm.get('password').hasError(validation.type) && (myForm.get('password').dirty || myForm.get('password').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n\n      </ion-item>\n      <div style=\"float:right;\">\n        <ion-button fill=\"clear\" color=\"medium\" size=\"small\" routerLink=\"/forgot\">\n          Forgot?\n        </ion-button>\n      </div>\n      <div class=\"ion-padding\">\n        &nbsp;\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"login()\">\n          Login\n        </ion-button>\n\n        &nbsp;&nbsp;&nbsp;\n\n        <ion-button fill=\"clear\" expand=\"block\" routerLink=\"/register\">\n          Create New Account\n        </ion-button>\n\n      </div>\n    </ion-list>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    59006:
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /***/
    function _(module) {
      module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.login-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.login-content .auth-title {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.login-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.login-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.login-content .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.login-content .inputs-list .error-container .error-message ion-icon {\n  padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.login-content .login-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.login-content .other-auth-options-row {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.login-content .other-auth-options-row .forgot-btn {\n  --color: var(--ion-color-medium);\n  margin: 0px;\n}\n\n.login-content .other-auth-options-row .signup-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.login-content .social-auth-options .options-divider {\n  color: var(--ion-color-medium);\n  margin: var(--page-margin) 0px;\n  text-align: center;\n}\n\n.login-content .social-auth-options .social-auth-btn {\n  margin: 0px;\n}\n\n.login-content .social-auth-options .social-auth-btn:not(:first-child) {\n  margin-top: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNDQUFBO0VBQ0EsOENBQUE7QUFESjs7QUFLRTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUFGSjs7QUFJSTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLCtDQUFBO0VBQ0EscUJBQUE7QUFGTjs7QUFLSTtFQUNFLDZDQUFBO0FBSE47O0FBS007RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFIUjs7QUFPUTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBTFY7O0FBT1U7RUFDRSxnREFBQTtBQUxaOztBQVdJO0VBQ0Usd0NBQUE7QUFUTjs7QUFZSTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUFWTjs7QUFZTTtFQUNFLGdDQUFBO0VBRUEsV0FBQTtBQVhSOztBQWNNO0VBQ0UsbUNBQUE7RUFFQSxXQUFBO0FBYlI7O0FBa0JNO0VBQ0UsOEJBQUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0FBaEJaOztBQW1CTTtFQUNFLFdBQUE7QUFqQlI7O0FBbUJRO0VBQ0UsOEJBQUE7QUFqQlYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgfVxuICBcbiAgLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4gIC5sb2dpbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIFxuICAgIC5hdXRoLXRpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqICgzLzIpKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgICB9XG4gIFxuICAgIC5pbnB1dHMtbGlzdCB7XG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIFxuICAgICAgLmlucHV0LWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICB9XG4gIFxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubG9naW4tYnRuIHtcbiAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgfVxuICBcbiAgICAub3RoZXItYXV0aC1vcHRpb25zLXJvdyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICAgIC5mb3Jnb3QtYnRuIHtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIFxuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgXG4gICAgICAuc2lnbnVwLWJ0biB7XG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuc29jaWFsLWF1dGgtb3B0aW9ucyB7XG4gICAgICAub3B0aW9ucy1kaXZpZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICBcbiAgICAgIC5zb2NpYWwtYXV0aC1idG4ge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_login_login_module_ts-es5.js.map