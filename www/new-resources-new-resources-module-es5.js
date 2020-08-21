function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-resources-new-resources-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-resources/new-resources.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-resources/new-resources.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewResourcesNewResourcesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Add a Resource</ion-title>\r\n  </ion-toolbar>\r\n  <ion-segment color=\"primary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button value=\"contact\">\r\n      Contact\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"upload\">\r\n      Upload\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"link\">\r\n      Link\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header> \r\n\r\n<ion-content  class=\"forms-validations-content\">\r\n  <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'contact'\">\r\n      <form class=\"validations-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"submitContactForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Enter the details of the Contact</ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Title</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.title\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('title').hasError(validation.type) && (contactForm.get('title').dirty || contactForm.get('title').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Name:</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"name\" clearInput placeholder=\"Enter the name of the contact\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.name\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('name').hasError(validation.type) && (contactForm.get('name').dirty || contactForm.get('name').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Address:</ion-label>\r\n            <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the contact\"></ion-textarea>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.address\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('address').hasError(validation.type) && (contactForm.get('address').dirty || contactForm.get('address').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Phone No:</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"phones\" clearInput placeholder=\"Enter one or more phone numbers (comma separated)\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.contactForm\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('phones').hasError(validation.type) && (contactForm.get('phones').dirty || contactForm.get('phones').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Email:</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"email\" clearInput placeholder=\"Enter an email address if available\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.contactForm\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('email').hasError(validation.type) && (contactForm.get('email').dirty || contactForm.get('email').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-list>\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n          </ion-list-header>\r\n    \r\n          <div class=\"reviews-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of contactForm.controls.tags.controls; let i = index\">\r\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n            </div>\r\n          </ion-row>\r\n  \r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.tags\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('tags').hasError(validation.type) && (contactForm.get('tags').dirty || contactForm.get('tags').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          </div>\r\n        </ion-list>\r\n  \r\n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!contactForm.valid\">Submit</ion-button>\r\n\r\n      </form>\r\n    </div>\r\n    <div *ngSwitchCase=\"'upload'\">\r\n   <form class=\"validations-form\" [formGroup]=\"uploadForm\" (ngSubmit)=\"submitUploadForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Enter the details of the Document</ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Title</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.title\">\r\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('title').hasError(validation.type) && (uploadForm.get('title').dirty || uploadForm.get('title').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"input-item\">\r\n            <ion-buttons>\r\n              <ion-button color=\"danger\" (click)=\"upload()\" class=\"submit-btn\" expand=\"block\" >Attach a File/Document<ion-icon name=\"attach\"></ion-icon></ion-button>\r\n            </ion-buttons>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n          </ion-list-header>\r\n    \r\n          <div class=\"reviews-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of uploadForm.controls.tags.controls; let i = index\">\r\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n            </div>\r\n          </ion-row>\r\n  \r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.tags\">\r\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('tags').hasError(validation.type) && (uploadForm.get('tags').dirty || uploadForm.get('tags').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          </div>\r\n        </ion-list>\r\n  \r\n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!uploadForm.valid\">Submit</ion-button>\r\n\r\n      </form>\r\n    </div>\r\n    <div *ngSwitchCase=\"'link'\">\r\n      <form class=\"validations-form\" [formGroup]=\"weblinkForm\" (ngSubmit)=\"submitLinkForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Enter the details of the link</ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Title</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.title\">\r\n              <div class=\"error-message\" *ngIf=\"weblinkForm.get('title').hasError(validation.type) && (weblinkForm.get('title').dirty || weblinkForm.get('title').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Weblink</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"link\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.link\">\r\n              <div class=\"error-message\" *ngIf=\"weblinkForm.get('link').hasError(validation.type) && (weblinkForm.get('link').dirty || weblinkForm.get('link').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <div>\r\n            <hr/>\r\n            <div>\r\n              <div>\r\n                <img *ngIf=\"metaicon\" [src]=\"metaicon\"/>      \r\n              </div>\r\n              <div>\r\n                <h2>{{metatitle}}</h2>\r\n                <span>{{metadescription}}</span>\r\n              </div>\r\n              <div> <h6></h6>{{metasite}}</div>\r\n            </div>\r\n          </div>\r\n        </ion-list>\r\n          <ion-list class=\"inputs-list\" lines=\"full\">\r\n            <ion-list-header>\r\n              <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n            </ion-list-header>\r\n      \r\n            <div class=\"reviews-wrapper\">\r\n            <ion-row>\r\n              <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of weblinkForm.controls.tags.controls; let i = index\">\r\n                <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n                <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n                <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n              </div>\r\n            </ion-row>\r\n    \r\n            <div class=\"error-container\"> \r\n              <ng-container *ngFor=\"let validation of validations.tags\">\r\n                <div class=\"error-message\" *ngIf=\"weblinkForm.get('tags').hasError(validation.type) && (weblinkForm.get('tags').dirty || weblinkForm.get('tags').touched)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                  <span>{{ validation.message }}</span>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n            </div>\r\n          </ion-list>\r\n  \r\n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!weblinkForm.valid\">Submit</ion-button>\r\n\r\n      </form> \r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/new-resources/new-resources.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/new-resources/new-resources.module.ts ***!
    \*******************************************************/

  /*! exports provided: NewResourcesPageModule */

  /***/
  function srcAppNewResourcesNewResourcesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewResourcesPageModule", function () {
      return NewResourcesPageModule;
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
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");
    /* harmony import */


    var _new_resources_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./new-resources.page */
    "./src/app/new-resources/new-resources.page.ts");

    var routes = [{
      path: '',
      component: _new_resources_page__WEBPACK_IMPORTED_MODULE_8__["NewResourcesPage"]
    }];

    var NewResourcesPageModule = function NewResourcesPageModule() {
      _classCallCheck(this, NewResourcesPageModule);
    };

    NewResourcesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_new_resources_page__WEBPACK_IMPORTED_MODULE_8__["NewResourcesPage"]]
    })], NewResourcesPageModule);
    /***/
  },

  /***/
  "./src/app/new-resources/new-resources.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/new-resources/new-resources.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewResourcesNewResourcesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.forms-validations-content {\n  --background: var(--page-background);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header .header-title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Helvetica-Bold\", \"Roboto-Medium\", \"Segoe UI Semibold\", \"Arial-Bold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .terms-item {\n  --border-width: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-primary);\n  --counter-border-color: var(--ion-color-primary);\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item .counter-value {\n  text-align: center;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlc291cmNlcy9DOlxcVXNlcnNcXHNldGhpXFxmaXJlY2hhdDRfdjJcXGZpcmVjaGF0NC9zcmNcXGFwcFxcbmV3LXJlc291cmNlc1xcbmV3LXJlc291cmNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL25ldy1yZXNvdXJjZXMvbmV3LXJlc291cmNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBRENFO0VBQ0UsMkNBQUE7QUNDSjs7QURDSTtFQUNFLDZDQUFBO0VBRUEsMkVBQUE7QUNBTjs7QURFTTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7QUNBUjs7QURFUTtFQUNFLDhJQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0FWOztBRElNO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZSOztBREtNO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtBQ0hSOztBRE9RO0VBQ0Usd0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDTFY7O0FET1U7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsY0FBQTtBQ0xaOztBRFdRO0VBQ0UsaUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGdEQUFBO0FDVFY7O0FEWVE7RUFDRSxrQkFBQTtBQ1ZWOztBRGVJO0VBQ0UsMEJBQUE7QUNiTjs7QURpQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDZkY7O0FEZ0JBO0VBRUUsbURBQUE7RUFDUSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDZlY7O0FEZ0JVO0VBQ0EseUJBQUE7QUNkVjs7QURnQlU7RUFDQSx5QkFBQTtBQ2RWOztBRGlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDZkYiLCJmaWxlIjoic3JjL2FwcC9uZXctcmVzb3VyY2VzL25ldy1yZXNvdXJjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxufVxyXG5cclxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgLnZhbGlkYXRpb25zLWZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAuaW5wdXRzLWxpc3Qge1xyXG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblxyXG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcblxyXG4gICAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XHJcblxyXG4gICAgICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1NZWRpdW1cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBNZWRpdW1cIiwgXCJIZWx2ZXRpY2EtQm9sZFwiLCBcIlJvYm90by1NZWRpdW1cIiwgXCJTZWdvZSBVSSBTZW1pYm9sZFwiLCBcIkFyaWFsLUJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxIDAgNHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXJtcy1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLmNvdW50ZXItaXRlbSB7XHJcbiAgICAgICAgYXBwLWNvdW50ZXItaW5wdXQge1xyXG4gICAgICAgICAgLS1jb3VudGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRlci12YWx1ZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4udGFncyB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbi5pdGVtLXJhdGluZyB7XHJcbiAgLy8gRGVmYXVsdCBiYWNrZ3JvdW5kXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XHJcbiAgICAgICAgICB9XHJcbn1cclxuaW9uLWNoZWNrYm94IHtcclxuICBtYXJnaW46IDBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG59XHJcbn1cclxuXHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cblxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3Qge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IGlvbi1saXN0LWhlYWRlciAuaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1NZWRpdW1cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBNZWRpdW1cIiwgXCJIZWx2ZXRpY2EtQm9sZFwiLCBcIlJvYm90by1NZWRpdW1cIiwgXCJTZWdvZSBVSSBTZW1pYm9sZFwiLCBcIkFyaWFsLUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBtYXJnaW46IDEgMCA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLnRlcm1zLWl0ZW0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5jb3VudGVyLWl0ZW0gYXBwLWNvdW50ZXItaW5wdXQge1xuICAtLWNvdW50ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY291bnRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmNvdW50ZXItaXRlbSAuY291bnRlci12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAwLjM1KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiMmIyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzc3Yztcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogNTBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/new-resources/new-resources.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/new-resources/new-resources.page.ts ***!
    \*****************************************************/

  /*! exports provided: NewResourcesPage */

  /***/
  function srcAppNewResourcesNewResourcesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewResourcesPage", function () {
      return NewResourcesPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../validators/checkbox-checked.validator */
    "./src/app/validators/checkbox-checked.validator.ts");

    var NewResourcesPage =
    /*#__PURE__*/
    function () {
      function NewResourcesPage(route, dataProvider, loadingProvider, alertCtrl, afAuth, router, camera, keyboard, actionSheet, contacts, geolocation, imageProvider, http) {
        _classCallCheck(this, NewResourcesPage);

        this.route = route;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.router = router;
        this.camera = camera;
        this.keyboard = keyboard;
        this.actionSheet = actionSheet;
        this.contacts = contacts;
        this.geolocation = geolocation;
        this.imageProvider = imageProvider;
        this.http = http;
        this.metaicon = null;
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
          tags: [{
            type: 'required',
            message: 'Please select at least one tag.'
          }],
          link: [{
            type: 'pattern',
            message: 'Please enter a correct weblink.'
          }]
        };
        this.groupId = this.route.snapshot.params.id;
        console.log('constructor', this.groupId);
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          phones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
          tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_14__["CheckboxCheckedValidator"].tagsSelected(1))
        });
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_14__["CheckboxCheckedValidator"].tagsSelected(1))
        });
        this.weblinkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')])),
          tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_14__["CheckboxCheckedValidator"].tagsSelected(1))
        });
      }

      _createClass(NewResourcesPage, [{
        key: "addContactTagControls",
        value: function addContactTagControls() {
          var _this = this;

          this.postTags.forEach(function (o, i) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false

            _this.contactForm.controls.tags.push(control);
          });
        }
      }, {
        key: "addLinkTagControls",
        value: function addLinkTagControls() {
          var _this2 = this;

          this.postTags.forEach(function (o, i) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false

            _this2.weblinkForm.controls.tags.push(control);
          });
        }
      }, {
        key: "addUploadTagControls",
        value: function addUploadTagControls() {
          var _this3 = this;

          this.postTags.forEach(function (o, i) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false

            _this3.uploadForm.controls.tags.push(control);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (value) {
            _this4.addedByUser = {
              addedByKey: value.payload.data().userId,
              addedByUsername: value.payload.data().username,
              addedByImg: value.payload.data().img
            }; // Initialize

            _this4.resource = {
              addedByUser: _this4.addedByUser,
              date: '',
              title: '',
              postTags: [],
              groupId: '',
              type: 'resource',
              data: {
                name: '',
                address: '',
                phones: '',
                email: '',
                type: ''
              }
            };
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this5 = this;

          this.tab = 'contact'; // Get group information

          this.groupId = this.route.snapshot.params.id;
          console.log('this.route.snapshot.params.id', this.route.snapshot.params.id);
          this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
            _this5.group = group.payload.data();
            _this5.postTags = [];
            console.log('this.group', group.payload.data());

            _this5.group.groupTags.forEach(function (element) {
              _this5.postTags.push({
                val: element,
                isChecked: false
              });
            });

            _this5.addContactTagControls();

            _this5.addLinkTagControls();

            _this5.addUploadTagControls();
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged($event) {
          if (this.tab === 'contact') {
            this.getDummyData();
          } else if (this.tab === 'upload') {
            this.getDummyData();
          } else if (this.tab === 'link') {
            this.getDummyData();
          }
        } // This method is required in segmentChanged call else tabs won't load properly

      }, {
        key: "getDummyData",
        value: function getDummyData() {
          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (account) {
            console.log(account);
          });
        } // Proceed to userInfo page.

      }, {
        key: "viewUser",
        value: function viewUser(userId) {
          this.router.navigateByUrl('/userinfo/' + userId);
        } // Proceed with group creation.

      }, {
        key: "submitContactForm",
        value: function submitContactForm() {
          this.loadingProvider.show(); // Add resource info and date.

          this.resource.date = new Date().toString();
          this.resource.title = this.contactForm.value.title;
          this.resource.postTags = [];
          this.resource.postTags = this.postTags;
          this.resource.groupId = this.groupId;
          this.resource.data.type = 'contact';
          this.resource.data.name = this.contactForm.value.name;
          this.resource.data.address = this.contactForm.value.address;
          this.resource.data.phones = this.contactForm.value.phones;
          this.resource.data.email = this.contactForm.value.email;
          this.addResourceToDatabase();
        }
      }, {
        key: "submitLinkForm",
        value: function submitLinkForm() {
          this.loadingProvider.show(); // Add resource info and date.

          this.resource.date = new Date().toString();
          this.resource.title = this.contactForm.value.title;
          this.resource.postTags = [];
          this.resource.postTags = this.postTags;
          this.resource.groupId = this.groupId;
          this.resource.data.type = 'weblink';
          this.resource.data.metaicon = this.metaicon;
          this.resource.data.metasite = this.weblinkForm.value.link;
          this.resource.data.metatitle = this.metatitle;
          this.resource.data.metadescription = this.metadescription;
          this.addResourceToDatabase();
        }
      }, {
        key: "submitUploadForm",
        value: function submitUploadForm() {
          this.addResourceToDatabase();
        }
      }, {
        key: "linkFocusOut",
        value: function linkFocusOut() {// this.loadingProvider.show();
          // const getMeta = require('lets-get-meta');
          // this.http.get(
          //   this.weblinkForm.value.link,
          //   {responseType: 'text'}
          //   )
          // .subscribe(res => {
          //   const o = getMeta(res);
          //   this.metaicon = o['og:image'];
          //   this.metadescription = o.description;
          //   this.metatitle = o['og:title'];
          //   this.loadingProvider.hide();
          // });
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this6 = this;

          // Add resource info and date.
          this.resource.date = new Date().toString();
          this.resource.title = this.contactForm.value.title;
          this.resource.postTags = [];
          this.resource.postTags = this.postTags;
          this.resource.groupId = this.groupId;
          var action = this.actionSheet.create({
            header: 'Choose attachments',
            backdropDismiss: true,
            mode: 'md',
            buttons: [{
              text: 'Camera',
              handler: function handler() {
                _this6.imageProvider.uploadGroupPhotoResource(_this6.groupId, _this6.camera.PictureSourceType.CAMERA).then(function (url) {
                  _this6.resource.data.type = 'upload';
                  _this6.resource.data.url = url;
                  _this6.resource.data.uploadtype = 'image';
                });
              }
            }, {
              text: 'Photo Library',
              handler: function handler() {
                _this6.imageProvider.uploadGroupPhotoResource(_this6.groupId, _this6.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                  _this6.resource.data.type = 'upload';
                  _this6.resource.data.url = url;
                  _this6.resource.data.uploadtype = 'image';
                });
              }
            }, {
              text: 'Video',
              handler: function handler() {
                _this6.imageProvider.uploadGroupVideoResource(_this6.groupId).then(function (url) {
                  _this6.resource.data.type = 'upload';
                  _this6.resource.data.uploadtype = 'video';
                  _this6.resource.data.url = url;
                });
              }
            }, {
              text: 'Contact',
              handler: function handler() {
                _this6.contacts.pickContact().then(function (data) {
                  var name;

                  if (data.displayName !== null) {
                    name = data.displayName;
                  } else {
                    name = data.name.givenName + '' + data.name.familyName;
                  }

                  _this6.resource.data.type = 'upload';
                  _this6.resource.data.uploadtype = 'contact';
                  _this6.resource.data.name = name;
                  _this6.resource.data.address = data.addresses;
                  _this6.resource.data.phones = data.phoneNumbers;
                  _this6.resource.data.email = data.emails;
                }, function (err) {
                  console.log(err);
                });
              }
            }, {
              text: 'Location',
              handler: function handler() {
                _this6.geolocation.getCurrentPosition({
                  timeout: 5000
                }).then(function (res) {
                  var locationMessage = 'Location:<br> lat:' + res.coords.latitude + '<br> lng:' + res.coords.longitude; // tslint:disable-next-line: max-line-length

                  var url = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';

                  var confirm = _this6.alertCtrl.create({
                    header: 'Your Location',
                    message: locationMessage,
                    buttons: [{
                      text: 'cancel',
                      handler: function handler() {
                        console.log('canceled');
                      }
                    }, {
                      text: 'Share',
                      handler: function handler() {
                        _this6.resource.data.type = 'upload';
                        _this6.resource.data.url = url;
                        _this6.resource.data.uploadtype = 'location';
                      }
                    }]
                  }).then(function (r) {
                    return r.present();
                  });
                }, function (locationErr) {
                  console.log('Location Error' + JSON.stringify(locationErr));
                });
              }
            }, {
              text: 'cancel',
              role: 'cancel',
              handler: function handler() {
                console.log('cancelled');
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        }
      }, {
        key: "addResourceToDatabase",
        value: function addResourceToDatabase() {
          var _this7 = this;

          // Add resource to database.
          this.dataProvider.addPost(this.resource).then(function (success) {
            var postId = success.id;
            _this7.resourceId = postId;

            if (_this7.group.posts === undefined) {
              _this7.group.posts = [];
            }

            _this7.group.posts.push(_this7.resourceId); // Update group data on the database.


            _this7.dataProvider.getGroup(_this7.groupId).update({
              posts: _this7.group.posts
            }).then(function () {
              _this7.loadingProvider.hide();
            });
          });
          this.router.navigateByUrl('tabs/tab4');
        }
      }]);

      return NewResourcesPage;
    }();

    NewResourcesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__["Contacts"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"]
      }, {
        type: _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]
      }];
    };

    NewResourcesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-resources',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-resources.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-resources/new-resources.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-resources.page.scss */
      "./src/app/new-resources/new-resources.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__["Contacts"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"], _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]])], NewResourcesPage);
    /***/
  }
}]);
//# sourceMappingURL=new-resources-new-resources-module-es5.js.map