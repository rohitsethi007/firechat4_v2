(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"], {
    /***/
    "/RfZ":
    /*!*****************************************!*\
      !*** ./src/app/forgot/forgot.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function RfZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "UDki":
    /*!***************************************!*\
      !*** ./src/app/forgot/forgot.page.ts ***!
      \***************************************/

    /*! exports provided: ForgotPage */

    /***/
    function UDki(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPage", function () {
        return ForgotPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot.page.html */
      "qcW1");
      /* harmony import */


      var _forgot_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot.page.scss */
      "/RfZ");
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

      var ForgotPage = /*#__PURE__*/function () {
        function ForgotPage(loginService, formBuilder) {
          _classCallCheck(this, ForgotPage);

          this.loginService = loginService;
          this.formBuilder = formBuilder;
          this.submitAttempt = false;
          this.errorMessages = [];
          this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].errorMessages;
          this.myForm = this.formBuilder.group({
            email: src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].emailValidator
          });
        }

        _createClass(ForgotPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "reset",
          value: function reset() {
            this.submitAttempt = true;

            if (this.myForm.controls.email.valid) {
              this.loginService.reset(this.email);
            }
          }
        }]);

        return ForgotPage;
      }();

      ForgotPage.ctorParameters = function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      ForgotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot',
        template: _raw_loader_forgot_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], ForgotPage);
      /***/
    },

    /***/
    "kgyS":
    /*!*****************************************!*\
      !*** ./src/app/forgot/forgot.module.ts ***!
      \*****************************************/

    /*! exports provided: ForgotPageModule */

    /***/
    function kgyS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function () {
        return ForgotPageModule;
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


      var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot.page */
      "UDki");

      var routes = [{
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]
      }];

      var ForgotPageModule = function ForgotPageModule() {
        _classCallCheck(this, ForgotPageModule);
      };

      ForgotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
      })], ForgotPageModule);
      /***/
    },

    /***/
    "qcW1":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function qcW1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Reset Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"center ion-padding\">\r\n    <img src=\"assets/images/logo.png\" style=\"width:80px;height:80px;\" />\r\n  </div>\r\n  <form [formGroup]=\"myForm\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input type=\"email\" formControlName=\"email\" email=\"true\" [(ngModel)]=\"email\"></ion-input>\r\n        <div *ngFor=\"let validation of errorMessages.email\">\r\n          <p class=\"error\"\r\n            *ngIf=\"myForm.get('email').hasError(validation.type) && (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt) \">\r\n            {{validation.message}}\r\n          </p>\r\n        </div>\r\n      </ion-item>\r\n      <div class=\"item-padding\">\r\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"reset()\">\r\n          Reset Password\r\n        </ion-button>\r\n      </div>\r\n    </ion-list>\r\n  </form>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgot-forgot-module-es5.js.map