function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-resource-new-resource-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-resource/new-resource.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-resource/new-resource.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewResourceNewResourcePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add a Resource</ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content  class=\"forms-validations-content\">\n  <ion-segment color=\"primary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"contact\">\n      Contact\n    </ion-segment-button>\n    <ion-segment-button value=\"upload\">\n      Photo/Document\n    </ion-segment-button>\n    <ion-segment-button value=\"link\">\n      Link\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"tab\">\n    <div *ngSwitchCase=\"'contact'\">\n      <form class=\"validations-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"submitContactForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Enter the details of the Contact..</ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.title\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('title').hasError(validation.type) && (contactForm.get('title').dirty || contactForm.get('title').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Name:</ion-label>\n            <ion-input type=\"text\" formControlName=\"name\" clearInput placeholder=\"Enter the name of the contact (company or person)\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.name\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('name').hasError(validation.type) && (contactForm.get('name').dirty || contactForm.get('name').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n  \n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Address:</ion-label>\n            <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the contact\"></ion-textarea>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.address\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('address').hasError(validation.type) && (contactForm.get('address').dirty || contactForm.get('address').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          \n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Phone No:</ion-label>\n            <ion-input type=\"text\" formControlName=\"phones\" clearInput placeholder=\"Enter one or more phone numbers (comma separated)\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.contactForm\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('phones').hasError(validation.type) && (contactForm.get('phones').dirty || contactForm.get('phones').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Email:</ion-label>\n            <ion-input type=\"text\" formControlName=\"email\" clearInput placeholder=\"Enter an email address if available\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.contactForm\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('email').hasError(validation.type) && (contactForm.get('email').dirty)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Select tags relevant to the contact</ion-label>\n          </ion-list-header>\n  \n          <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n            <ion-item *ngFor=\"let entry of resourceTags\" lines=\"none\" class=\"checkbox-tag rounded-tag\">\n              <ion-label class=\"tag-label\">{{entry.val}}</ion-label>\n              <ion-checkbox formControlName=\"resourceTags\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n            </ion-item>\n          </ion-row>\n        </ion-list>\n  \n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" >Submit</ion-button>\n        </ion-list>\n      </form>\n    </div>\n    <div *ngSwitchCase=\"'upload'\">\n      <form class=\"validations-form\" [formGroup]=\"uploadForm\" (ngSubmit)=\"submitUploadForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Enter the details of the Document ..</ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.title\">\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('title').hasError(validation.type) && (uploadForm.get('title').dirty || uploadForm.get('title').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Select tags relevant to the contact</ion-label>\n          </ion-list-header>\n  \n          <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n            <ion-item *ngFor=\"let entry of resourceTags\" lines=\"none\" class=\"checkbox-tag rounded-tag\">\n              <ion-label class=\"tag-label\">{{entry.val}}</ion-label>\n              <ion-checkbox formControlName=\"resourceTags\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n            </ion-item>\n          </ion-row>\n        </ion-list>\n  \n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" >Submit</ion-button>\n        </ion-list>\n      </form>\n\n      <ion-item text-wrap (click)=\"selectFile()\">\n   \n        <button  item-left ion-fab color=\"primary\"><ion-icon name=\"list-box\"></ion-icon></button>\n      <h3>  Add File  </h3>\n      <p > Quickly add another file to your assignment</p>\n       \n      </ion-item>\n    \n    <div *ngIf=\"filesnum >0\">\n      <ion-item  (click)=\"gotoFilePage(file.file)\"  *ngFor=\"let file of files\">\n    <h3> {{file.name}}</h3>\n    <button clear ion-button icon-only item-right><ion-icon name=\"download\" color=\"danger\"></ion-icon></button>\n    </ion-item>\n    </div>\n      </div>\n    <div *ngSwitchCase=\"'link'\">\n    </div>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/new-resource/new-resource.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/new-resource/new-resource.module.ts ***!
    \*****************************************************/

  /*! exports provided: NewResourcePageModule */

  /***/
  function srcAppNewResourceNewResourceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewResourcePageModule", function () {
      return NewResourcePageModule;
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


    var _new_resource_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-resource.page */
    "./src/app/new-resource/new-resource.page.ts");

    var routes = [{
      path: '',
      component: _new_resource_page__WEBPACK_IMPORTED_MODULE_6__["NewResourcePage"]
    }];

    var NewResourcePageModule = function NewResourcePageModule() {
      _classCallCheck(this, NewResourcePageModule);
    };

    NewResourcePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_new_resource_page__WEBPACK_IMPORTED_MODULE_6__["NewResourcePage"]]
    })], NewResourcePageModule);
    /***/
  },

  /***/
  "./src/app/new-resource/new-resource.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/new-resource/new-resource.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewResourceNewResourcePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.forms-validations-content {\n  --background: var(--page-background);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header .header-title {\n  text-transform: uppercase;\n  font-size: 16px;\n  color: var(--ion-color-secondary);\n}\n\n.forms-validations-content .validations-form .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .terms-item {\n  --border-width: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-primary);\n  --counter-border-color: var(--ion-color-primary);\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item .counter-value {\n  text-align: center;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.forms-validations-content .checkbox-tags.square-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.forms-validations-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.forms-validations-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.forms-validations-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-light-contrast);\n  --checkbox-tag-background: var(--ion-color-light-shade);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n::ng-deep .select-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: 16px;\n}\n\n::ng-deep .select-alert .alert-head {\n  padding-top: calc((var(--select-alert-margin) / 4) * 3);\n  padding-bottom: calc((var(--select-alert-margin) / 4) * 3);\n  -webkit-padding-start: var(--select-alert-margin);\n          padding-inline-start: var(--select-alert-margin);\n  -webkit-padding-end: var(--select-alert-margin);\n          padding-inline-end: var(--select-alert-margin);\n}\n\n::ng-deep .select-alert .alert-title {\n  color: var(--select-alert-color);\n}\n\n::ng-deep .select-alert .alert-head,\n::ng-deep .select-alert .alert-message {\n  background-color: var(--select-alert-background);\n}\n\n::ng-deep .select-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n  margin: 0px;\n}\n\n::ng-deep .select-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n::ng-deep .select-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n::ng-deep .select-alert .alert-message {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlc291cmNlL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXG5ldy1yZXNvdXJjZVxcbmV3LXJlc291cmNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LXJlc291cmNlL25ldy1yZXNvdXJjZS5wYWdlLnNjc3MiLCJzcmMvYXBwL25ldy1yZXNvdXJjZS9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxjaGVja2JveC10YWcuc2NzcyIsInNyYy9hcHAvbmV3LXJlc291cmNlL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXHNlbGVjdC1hbGVydC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUNBQUE7RUFDQSw4Q0FBQTtBQ0pKOztBRFFBO0VBQ0ksb0NBQUE7QUNMSjs7QURPSTtFQUNFLDJDQUFBO0FDTE47O0FET007RUFDRSw2Q0FBQTtFQUVBLDJFQUFBO0FDTlI7O0FEUVE7RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0FDTlY7O0FEUVU7RUFDRSx5QkFBQTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBQ05oQjs7QURVUTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ1JWOztBRFdRO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtBQ1RWOztBRGFVO0VBQ0Usd0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDWFo7O0FEYVk7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsY0FBQTtBQ1hkOztBRGlCVTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxnREFBQTtBQ2ZaOztBRGtCVTtFQUNFLGtCQUFBO0FDaEJaOztBRHFCTTtFQUNFLDBCQUFBO0FDbkJSOztBRHVCSTtFQUNFLHdGQUFBO0VFM0VKLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEdURGOztBQ3JEQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QURzREo7O0FDcERJO0VBQ0QsdUJBQUE7QURzREg7O0FDbkRFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRHFETjs7QUNsREk7RUFDRSxZQUFBO0FEb0ROOztBQ2xETTtFQUVFLFVBQUE7QURtRFI7O0FDL0NFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURpRE47O0FDOUNFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRDhDSDs7QURiRTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7QUNlSjs7QURYRTtFQUNFLHdDQUFBO0FDYUo7O0FEWEk7RUFDRSw2Q0FBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSw0REFBQTtBQ2FOOztBRFJFO0VBQ00sd0NBQUE7QUNVUjs7QURSSTtFQUNFLHFEQUFBO0VBQ0EsdURBQUE7RUFDQSxzREFBQTtFQUNBLDREQUFBO0FDVU47O0FERkE7RUdoSEUsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VIa0hFLCtDQUFBO0VBQ0EsbURBQUE7RUFDQSwyQkFBQTtBQ0tKOztBRXZIRTtFQUNFLHVEQUFBO0VBQ0EsMERBQUE7RUFDQSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsK0NBQUE7VUFBQSw4Q0FBQTtBRnlISjs7QUV0SEU7RUFDRSxnQ0FBQTtBRndISjs7QUVySEU7O0VBRUUsZ0RBQUE7QUZ1SEo7O0FFbEhJO0VBQ0UsV0FBQTtBRm9ITjs7QUU5R0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUZnSE47O0FFN0dJO0VBRUUsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBRjZHTjs7QUQvQkk7RUFDRSxhQUFBO0FDaUNOIiwiZmlsZSI6InNyYy9hcHAvbmV3LXJlc291cmNlL25ldy1yZXNvdXJjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9zZWxlY3QtYWxlcnRcIjtcclxuQGltcG9ydCBcIi4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuICB9XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIFxyXG4gICAgLnZhbGlkYXRpb25zLWZvcm0ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG4gIFxyXG4gICAgICAuaW5wdXRzLWxpc3Qge1xyXG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICBcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcbiAgXHJcbiAgICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgXHJcbiAgICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC50ZXJtcy1pdGVtIHtcclxuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5lcnJvci1jb250YWluZXIge1xyXG4gICAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICBcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5jb3VudGVyLWl0ZW0ge1xyXG4gICAgICAgICAgYXBwLWNvdW50ZXItaW5wdXQge1xyXG4gICAgICAgICAgICAtLWNvdW50ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIC0tY291bnRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAuY291bnRlci12YWx1ZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2hlY2tib3gtdGFncyB7XHJcbiAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XHJcbiAgXHJcbiAgICAgIEBpbmNsdWRlIGNoZWNrYm94LXRhZygpO1xyXG4gIFxyXG4gIC5jaGVja2JveC10YWcge1xyXG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICYuc3F1YXJlLWNoZWNrYm94LXRhZ3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICBcclxuICAgIC5jaGVja2JveC10YWcge1xyXG4gICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7IFxyXG4gICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgJi5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgXHJcbiAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XHJcbiAgICAgIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcbiAgfVxyXG5cclxuICAvLyBBbGVydHMgYW5kIGluIGdlbmVyYWwgYWxsIG92ZXJsYXlzIGFyZSBhdHRhY2hlZCB0byB0aGUgYm9keSBvciBpb24tYXBwIGRpcmVjdGx5XHJcbi8vIFdlIG5lZWQgdG8gdXNlIDo6bmctZGVlcCB0byBhY2Nlc3MgaXQgZnJvbSBoZXJlXHJcbjo6bmctZGVlcCAuc2VsZWN0LWFsZXJ0IHtcclxuICAgIEBpbmNsdWRlIHNlbGVjdC1hbGVydCgpO1xyXG4gIFxyXG4gICAgLy8gVmFyaWFibGVzIHNob3VsZCBiZSBpbiBhIGRlZXBlciBzZWxlY3RvciBvciBhZnRlciB0aGUgbWl4aW4gaW5jbHVkZSB0byBvdmVycmlkZSBkZWZhdWx0IHZhbHVlc1xyXG4gICAgLS1zZWxlY3QtYWxlcnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IDE2cHg7XHJcbiAgXHJcbiAgICAuYWxlcnQtbWVzc2FnZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cblxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3Qge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IGlvbi1saXN0LWhlYWRlciAuaGVhZGVyLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLnRlcm1zLWl0ZW0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5jb3VudGVyLWl0ZW0gYXBwLWNvdW50ZXItaW5wdXQge1xuICAtLWNvdW50ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY291bnRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmNvdW50ZXItaXRlbSAuY291bnRlci12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcucm91bmRlZC10YWcge1xuICAtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCAudGFnLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgLnRhZy1sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC5jaGVja2JveC10YWdzLnNxdWFyZS1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC5jaGVja2JveC10YWdzLnNxdWFyZS1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG46Om5nLWRlZXAgLnNlbGVjdC1hbGVydCB7XG4gIC0tc2VsZWN0LWFsZXJ0LWNvbG9yOiAjMDAwO1xuICAtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IDE2cHg7XG4gIC0tc2VsZWN0LWFsZXJ0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogMTZweDtcbn1cbjo6bmctZGVlcCAuc2VsZWN0LWFsZXJ0IC5hbGVydC1oZWFkIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pO1xufVxuOjpuZy1kZWVwIC5zZWxlY3QtYWxlcnQgLmFsZXJ0LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1jb2xvcik7XG59XG46Om5nLWRlZXAgLnNlbGVjdC1hbGVydCAuYWxlcnQtaGVhZCxcbjo6bmctZGVlcCAuc2VsZWN0LWFsZXJ0IC5hbGVydC1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQpO1xufVxuOjpuZy1kZWVwIC5zZWxlY3QtYWxlcnQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbn1cbjo6bmctZGVlcCAuc2VsZWN0LWFsZXJ0IC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46Om5nLWRlZXAgLnNlbGVjdC1hbGVydCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWJ1dHRvbiB7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMC45ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuOWVtO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBoZWlnaHQ6IDIuMWVtO1xuICBmb250LXNpemU6IDEzcHg7XG59XG46Om5nLWRlZXAgLnNlbGVjdC1hbGVydCAuYWxlcnQtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59IiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcclxuICAvLyBEZWZhdWx0IHZhbHVlc1xyXG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xyXG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XHJcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xyXG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG5cclxuXHQuY2hlY2tib3gtdGFnIHtcclxuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcclxuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xyXG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XHJcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xyXG5cclxuICAgICYucm91bmRlZC10YWcge1xyXG5cdFx0XHQtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcclxuXHRcdH1cclxuXHJcblx0XHQmLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcclxuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XHJcblx0XHR9XHJcblxyXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG5cclxuICAgICAgLnRhZy1sYWJlbCB7XHJcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblx0XHQudGFnLWxhYmVsIHtcclxuXHRcdFx0bWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLWNoZWNrYm94IHtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5jaGVja2JveC1pY29uXHJcblx0XHRcdHdpZHRoOiAwcHg7XHJcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcblx0XHRcdGhlaWdodDogMHB4O1xyXG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAuY2hlY2tib3gtaWNvbiAuY2hlY2tib3gtaW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3JcclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiQG1peGluIHNlbGVjdC1hbGVydCgpIHtcclxuICAvLyBEZWZhdWx0IHZhbHVlc1xyXG4gIC0tc2VsZWN0LWFsZXJ0LWNvbG9yOiAjMDAwO1xyXG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6ICNGRkY7XHJcbiAgLS1zZWxlY3QtYWxlcnQtbWFyZ2luOiAxNnB4O1xyXG5cclxuICAuYWxlcnQtaGVhZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQtdGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQtaGVhZCxcclxuICAuYWxlcnQtbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZCk7XHJcbiAgfVxyXG5cclxuICAvLyBpT1Mgc3R5bGVzXHJcbiAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAuYWxlcnQtdGl0bGUge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1hdGVyaWFsIHN0eWxlc1xyXG4gIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgICAuYWxlcnQtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFsZXJ0LWJ1dHRvbiB7XHJcbiAgICAgIC8vIFZhbHVlcyB0YWtlbiBmcm9tIElvbmljIHNtYWxsIGJ1dHRvbiBwcmVzZXRcclxuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjllbTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMC45ZW07XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcblxyXG4gICAgICBoZWlnaHQ6IDIuMWVtO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/new-resource/new-resource.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/new-resource/new-resource.page.ts ***!
    \***************************************************/

  /*! exports provided: NewResourcePage */

  /***/
  function srcAppNewResourceNewResourcePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewResourcePage", function () {
      return NewResourcePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var _services_event_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/event-data.service */
    "./src/app/services/event-data.service.ts");

    var NewResourcePage =
    /*#__PURE__*/
    function () {
      function NewResourcePage(route, router, dataProvider, loadingProvider, navCtrl, filePath, fileChooser, eventsdata) {
        var _this = this;

        _classCallCheck(this, NewResourcePage);

        this.route = route;
        this.router = router;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.navCtrl = navCtrl;
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.eventsdata = eventsdata;
        this.returnPath = '';
        this.validations = {
          title: [{
            type: 'required',
            message: 'Title is a required field.'
          }],
          name: [{
            type: 'required',
            message: 'Name is a required field.'
          }],
          address: [{
            type: 'required',
            message: 'Address is a required field.'
          }],
          phones: [{
            type: 'required',
            message: 'Phone is a required field.'
          }],
          email: [{
            type: 'pattern',
            message: 'Enter a valid email.'
          }],
          resourceTags: [{
            type: 'required',
            message: 'Please select at least one tag.'
          }]
        };
        this.groupId = this.route.snapshot.params.id; // this.message  = navParams.get('message');

        console.log('Group Id: ' + this.groupId); // Get group information

        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
          _this.group = group.payload.val();
          console.log(_this.group);
          _this.resourceTags = [];

          _this.group.groupTags.forEach(function (element) {
            _this.resourceTags.push({
              val: element,
              isChecked: false
            });
          });

          _this.eventsdata.getRequestFiles().on('value', function (snapshot) {
            var rawList = [];
            snapshot.forEach(function (snap) {
              rawList.unshift({
                id: snap.key,
                file: snap.val().file,
                name: snap.val().name,
                ext: snap.val().ext
              });
            });
            _this.files = rawList;
            _this.filesnum = rawList.length;
          });

          _this.loadingProvider.hide();
        });
      }

      _createClass(NewResourcePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tab = 'contact';
          this.title = 'Share a Contact'; // Initialize

          this.resource = {
            dateCreated: '',
            createdBy: this.dataProvider.getCurrentUserId(),
            title: '',
            name: '',
            address: '',
            phones: '',
            email: '',
            type: '',
            resrouceTags: [],
            reviews: []
          };
          this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            phones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            resourceTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            resourceTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged($event) {
          if (this.tab === 'contact') {
            this.title = 'Share a Contact';
          } else if (this.tab === 'upload') {
            this.title = 'Upload Document/Image';
          } else if (this.tab === 'link') {
            this.title = 'Share a link';
          }
        } // Proceed with group creation.

      }, {
        key: "submitContactForm",
        value: function submitContactForm() {
          var _this2 = this;

          this.loadingProvider.show(); // Add resource info and date.

          this.resource.dateCreated = new Date().toString();
          this.resource.title = this.contactForm.value.title;
          this.resource.name = this.contactForm.value.name;
          this.resource.address = this.contactForm.value.address;
          this.resource.phones = this.contactForm.value.phones;
          this.resource.email = this.contactForm.value.email;
          this.resource.type = 'contact';
          this.resource.resourceTags = [];
          this.resource.resourceTags = this.resourceTags; // Add resource to database.

          this.dataProvider.addResource(this.resource).then(function (success) {
            var resourceId = success.key; // Add system message that group is created.
            // Add group resource details

            _this2.resourceId = resourceId;

            _this2.group.resources.push(_this2.resourceId);

            var uid = _this2.dataProvider.getCurrentUserId(); // Add system message that the members are added to the group.


            _this2.group.messages.push({
              date: new Date().toString(),
              sender: uid,
              type: 'system',
              message: 'A new Contact has been shared with the group : ' + _this2.resource.name,
              icon: 'md-contacts'
            }); // Update group data on the database.


            _this2.dataProvider.getGroup(_this2.groupId).update({
              resources: _this2.group.resources,
              messages: _this2.group.messages
            }).then(function () {
              // Back.
              _this2.loadingProvider.hide();

              _this2.navCtrl.back();
            });
          });
        }
      }, {
        key: "selectFile",
        value: function selectFile() {
          var _this3 = this;

          var file;
          this.fileChooser.open().then(function (fileuri) {
            _this3.filePath.resolveNativePath(fileuri).then(function (resolveNativePath) {
              _this3.returnPath = resolveNativePath;
            });
          });
          this.fileChooser.open().then(function (uri) {
            _this3.filePath.resolveNativePath(uri).then(function (fileentry) {
              var filename = _this3.eventsdata.getfilename(fileentry);

              var fileext = _this3.eventsdata.getfileext(fileentry);

              if (fileext === 'pdf') {
                _this3.eventsdata.makeFileIntoBlob(fileentry, fileext, 'application/pdf').then(function (fileblob) {
                  file = {
                    blob: fileblob,
                    type: 'application/pdf',
                    fileext: fileext,
                    filename: filename
                  };

                  _this3.eventsdata.addAssignmentFile(_this3.sbaid.sbaid, file);
                });
              }

              if (fileext === 'docx') {
                // tslint:disable-next-line: max-line-length
                _this3.eventsdata.makeFileIntoBlob(fileentry, fileext, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document').then(function (fileblob) {
                  file = {
                    blob: fileblob,
                    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    fileext: fileext,
                    filename: filename
                  };

                  _this3.eventsdata.addAssignmentFile(_this3.sbaid.sbaid, file);
                });
              }

              if (fileext == 'doc') {
                _this3.eventsdata.makeFileIntoBlob(fileentry, fileext, 'application/msword').then(function (fileblob) {
                  file = {
                    blob: fileblob,
                    type: 'application/msword',
                    fileext: fileext,
                    filename: filename
                  };

                  _this3.eventsdata.addAssignmentFile(_this3.sbaid.sbaid, file);
                });
              }

              if (fileext == 'epub') {
                _this3.eventsdata.makeFileIntoBlob(fileentry, fileext, 'application/octet-stream').then(function (fileblob) {
                  file = {
                    blob: fileblob,
                    type: 'application/octet-stream',
                    fileext: fileext,
                    filename: filename
                  };

                  _this3.eventsdata.addAssignmentFile(_this3.sbaid.sbaid, file);
                });
              }

              if (fileext == 'accdb') {
                _this3.eventsdata.makeFileIntoBlob(fileentry, filename, 'application/msaccess').then(function (fileblob) {
                  file = {
                    blob: fileblob,
                    type: 'application/msaccess',
                    fileext: fileext,
                    filename: filename
                  };

                  _this3.eventsdata.addAssignmentFile(_this3.sbaid.sbaid, file);
                });
              }

              if (fileext == 'xlsx') {
                // tslint:disable-next-line: max-line-length
                _this3.eventsdata.makeFileIntoBlob(fileentry, filename, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet').then(function (fileblob) {
                  file = {
                    blob: fileblob,
                    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    fileext: fileext,
                    filename: filename
                  };

                  _this3.eventsdata.addAssignmentFile(_this3.sbaid.sbaid, file);
                });
              } //      else if (fileext!="doc"||"epub"||"xlsx"||"pdf"||"accdb"||"docx" ){
              // alert("Can't add "+  filename)
              //      }

            });
          });
        }
      }, {
        key: "gotoFilePage",
        value: function gotoFilePage(file) {// cordova.InAppBrowser.open(file,'_system', 'location=yes');
        }
      }]);

      return NewResourcePage;
    }();

    NewResourcePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"]
      }, {
        type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_7__["FileChooser"]
      }, {
        type: _services_event_data_service__WEBPACK_IMPORTED_MODULE_9__["EventDataService"]
      }];
    };

    NewResourcePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-resource',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-resource.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-resource/new-resource.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-resource.page.scss */
      "./src/app/new-resource/new-resource.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_7__["FileChooser"], _services_event_data_service__WEBPACK_IMPORTED_MODULE_9__["EventDataService"]])], NewResourcePage);
    /***/
  },

  /***/
  "./src/app/services/event-data.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/event-data.service.ts ***!
    \************************************************/

  /*! exports provided: EventDataService */

  /***/
  function srcAppServicesEventDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDataService", function () {
      return EventDataService;
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


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");

    var EventDataService =
    /*#__PURE__*/
    function () {
      function EventDataService(file) {
        _classCallCheck(this, EventDataService);

        this.file = file;
        this.sbaList = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/sbalist');
      }

      _createClass(EventDataService, [{
        key: "makeFileIntoBlob",
        value: function makeFileIntoBlob(_imagePath, name, type) {
          var _this4 = this;

          // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
          return new Promise(function (resolve, reject) {
            var fileName = name;

            _this4.file.resolveLocalFilesystemUrl(_imagePath).then(function (fileEntry) {
              var name = fileEntry.name,
                  nativeURL = fileEntry.nativeURL; // get the path..

              var path = _imagePath; // nativeURL.substring(0, nativeURL.lastIndexOf("/"));

              console.log("path", path);
              console.log("fileName", name);
              fileName = name; // we are provided the name, so now read the file into
              // a buffer

              return _this4.file.readAsArrayBuffer(path, name);
            }).then(function (buffer) {
              // get the buffer and make a blob to be saved
              var imgBlob = new Blob([buffer], {
                type: type
              });
              console.log(imgBlob.type, imgBlob.size);
              resolve({
                fileName: fileName,
                imgBlob: imgBlob
              });
            }).catch(function (e) {
              return reject(e);
            });
          });
        }
      }, {
        key: "getfilename",
        value: function getfilename(filestring) {
          var file;
          file = filestring.replace(/^.*[\\\/]/, '');
          return file;
        }
      }, {
        key: "getfileext",
        value: function getfileext(filestring) {
          var file = filestring.substr(filestring.lastIndexOf('.') + 1);
          return file;
        }
      }, {
        key: "getRequestFiles",
        value: function getRequestFiles() {
          return this.sbaList.child('sbafiles');
        }
      }, {
        key: "addAssignmentFile",
        value: function addAssignmentFile(sbaid, file) {
          var _this5 = this;

          return this.sbaList.child(file.filename) // Saves the file to storage
          .put(file.blob, {
            contentType: file.type
          }).then(function (savedFile) {
            // Gets the file url and saves it in the database
            _this5.sbaList.child('sbafiles').push({
              file: savedFile.downloadURL,
              name: file.filename,
              ext: file.fileext,
              type: file.type
            });
          });
        }
      }]);

      return EventDataService;
    }();

    EventDataService.ctorParameters = function () {
      return [{
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]
      }];
    };

    EventDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]])], EventDataService);
    /***/
  }
}]);
//# sourceMappingURL=new-resource-new-resource-module-es5.js.map