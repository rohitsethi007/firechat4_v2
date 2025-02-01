(function () {
  "use strict";

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_forgot_forgot_module_ts"], {
    /***/
    76938:
    /*!*****************************************!*\
      !*** ./src/app/forgot/forgot.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPageModule": function ForgotPageModule() {
          return (
            /* binding */
            _ForgotPageModule
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


      var _forgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot.page */
      36889);

      var routes = [{
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage
      }];

      var _ForgotPageModule = /*#__PURE__*/_createClass(function ForgotPageModule() {
        _classCallCheck(this, ForgotPageModule);
      });

      _ForgotPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage]
      })], _ForgotPageModule);
      /***/
    },

    /***/
    36889:
    /*!***************************************!*\
      !*** ./src/app/forgot/forgot.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPage": function ForgotPage() {
          return (
            /* binding */
            _ForgotPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./forgot.page.html */
      4250);
      /* harmony import */


      var _forgot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot.page.scss */
      32894);
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


      var src_environments_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/validator */
      86590);

      var _ForgotPage = /*#__PURE__*/function () {
        function ForgotPage(loginService, formBuilder) {
          _classCallCheck(this, ForgotPage);

          this.loginService = loginService;
          this.formBuilder = formBuilder;
          this.submitAttempt = false;
          this.errorMessages = [];
          this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.errorMessages;
          this.myForm = this.formBuilder.group({
            email: src_environments_validator__WEBPACK_IMPORTED_MODULE_3__.Validator.emailValidator
          });
        }

        return _createClass(ForgotPage, [{
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
      }();

      _ForgotPage.ctorParameters = function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _ForgotPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgot',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgot_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forgot_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder])], _ForgotPage);
      /***/
    },

    /***/
    4250:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/forgot/forgot.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reset Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"center ion-padding\">\n    <img src=\"assets/images/logo.png\" style=\"width:80px;height:80px;\" />\n  </div>\n  <form [formGroup]=\"myForm\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\" email=\"true\" [(ngModel)]=\"email\"></ion-input>\n        <div *ngFor=\"let validation of errorMessages.email\">\n          <p class=\"error\"\n            *ngIf=\"myForm.get('email').hasError(validation.type) && (myForm.get('email').dirty || myForm.get('email').touched || submitAttempt) \">\n            {{validation.message}}\n          </p>\n        </div>\n      </ion-item>\n      <div class=\"item-padding\">\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"reset()\">\n          Reset Password\n        </ion-button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    32894:
    /*!*****************************************!*\
      !*** ./src/app/forgot/forgot.page.scss ***!
      \*****************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_forgot_forgot_module_ts-es5.js.map