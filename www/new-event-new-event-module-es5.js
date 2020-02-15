function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-event-new-event-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewEventNewEventPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add an Event</ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content  class=\"forms-validations-content\">\n  <div>\n    <div>\n      <form class=\"validations-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"submitContactForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Enter the details of the Event..</ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.title\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('title').hasError(validation.type) && (contactForm.get('title').dirty || contactForm.get('title').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Name:</ion-label>\n            <ion-input type=\"text\" formControlName=\"name\" clearInput placeholder=\"Enter the name of the contact (company or person)\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.name\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('name').hasError(validation.type) && (contactForm.get('name').dirty || contactForm.get('name').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n  \n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Address:</ion-label>\n            <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the contact\"></ion-textarea>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.address\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('address').hasError(validation.type) && (contactForm.get('address').dirty || contactForm.get('address').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          \n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Phone No:</ion-label>\n            <ion-input type=\"text\" formControlName=\"phones\" clearInput placeholder=\"Enter one or more phone numbers (comma separated)\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.contactForm\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('phones').hasError(validation.type) && (contactForm.get('phones').dirty || contactForm.get('phones').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Email:</ion-label>\n            <ion-input type=\"text\" formControlName=\"email\" clearInput placeholder=\"Enter an email address if available\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.contactForm\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('email').hasError(validation.type) && (contactForm.get('email').dirty)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Select tags relevant to the contact</ion-label>\n          </ion-list-header>\n  \n          <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n            <ion-item *ngFor=\"let entry of resourceTags\" lines=\"none\" class=\"checkbox-tag rounded-tag\">\n              <ion-label class=\"tag-label\">{{entry.val}}</ion-label>\n              <ion-checkbox formControlName=\"resourceTags\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n            </ion-item>\n          </ion-row>\n        </ion-list>\n  \n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" >Submit</ion-button>\n        </ion-list>\n      </form>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/new-event/new-event.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/new-event/new-event.module.ts ***!
    \***********************************************/

  /*! exports provided: NewEventPageModule */

  /***/
  function srcAppNewEventNewEventModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewEventPageModule", function () {
      return NewEventPageModule;
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


    var _new_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-event.page */
    "./src/app/new-event/new-event.page.ts");

    var routes = [{
      path: '',
      component: _new_event_page__WEBPACK_IMPORTED_MODULE_6__["NewEventPage"]
    }];

    var NewEventPageModule = function NewEventPageModule() {
      _classCallCheck(this, NewEventPageModule);
    };

    NewEventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_new_event_page__WEBPACK_IMPORTED_MODULE_6__["NewEventPage"]]
    })], NewEventPageModule);
    /***/
  },

  /***/
  "./src/app/new-event/new-event.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/new-event/new-event.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewEventNewEventPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1ldmVudC9uZXctZXZlbnQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/new-event/new-event.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/new-event/new-event.page.ts ***!
    \*********************************************/

  /*! exports provided: NewEventPage */

  /***/
  function srcAppNewEventNewEventPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewEventPage", function () {
      return NewEventPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewEventPage =
    /*#__PURE__*/
    function () {
      function NewEventPage() {
        _classCallCheck(this, NewEventPage);
      }

      _createClass(NewEventPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewEventPage;
    }();

    NewEventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-event.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-event.page.scss */
      "./src/app/new-event/new-event.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NewEventPage);
    /***/
  }
}]);
//# sourceMappingURL=new-event-new-event-module-es5.js.map