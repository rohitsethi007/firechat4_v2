(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-resources-new-resources-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-resources/new-resources.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-resources/new-resources.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Add a Resource</ion-title>\r\n  </ion-toolbar>\r\n  <ion-segment color=\"primary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button value=\"contact\">\r\n      Contact\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"upload\">\r\n      Upload\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"link\">\r\n      Link\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header> \r\n\r\n<ion-content  class=\"forms-validations-content\">\r\n  <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'contact'\">\r\n      <form class=\"validations-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"submitContactForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Enter the details of the Contact</ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Title</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.title\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('title').hasError(validation.type) && (contactForm.get('title').dirty || contactForm.get('title').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Name:</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"name\" clearInput placeholder=\"Enter the name of the contact\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.name\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('name').hasError(validation.type) && (contactForm.get('name').dirty || contactForm.get('name').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Address:</ion-label>\r\n            <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the contact\"></ion-textarea>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.address\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('address').hasError(validation.type) && (contactForm.get('address').dirty || contactForm.get('address').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Phone No:</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"phones\" clearInput placeholder=\"Enter one or more phone numbers (comma separated)\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.contactForm\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('phones').hasError(validation.type) && (contactForm.get('phones').dirty || contactForm.get('phones').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Email:</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"email\" clearInput placeholder=\"Enter an email address if available\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.contactForm\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('email').hasError(validation.type) && (contactForm.get('email').dirty || contactForm.get('email').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-list>\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n          </ion-list-header>\r\n    \r\n          <div class=\"reviews-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of contactForm.controls.tags.controls; let i = index\">\r\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n            </div>\r\n          </ion-row>\r\n  \r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.tags\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('tags').hasError(validation.type) && (contactForm.get('tags').dirty || contactForm.get('tags').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          </div>\r\n        </ion-list>\r\n  \r\n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!contactForm.valid\">Submit</ion-button>\r\n\r\n      </form>\r\n    </div>\r\n    <div *ngSwitchCase=\"'upload'\">\r\n   <form class=\"validations-form\" [formGroup]=\"uploadForm\" (ngSubmit)=\"submitUploadForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Enter the details of the Document</ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Title</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.title\">\r\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('title').hasError(validation.type) && (uploadForm.get('title').dirty || uploadForm.get('title').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <ion-item class=\"input-item\">\r\n            <ion-buttons>\r\n              <ion-button color=\"danger\" (click)=\"upload()\" class=\"submit-btn\" expand=\"block\" >Attach a File/Document<ion-icon name=\"attach\"></ion-icon></ion-button>\r\n            </ion-buttons>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n          </ion-list-header>\r\n    \r\n          <div class=\"reviews-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of uploadForm.controls.tags.controls; let i = index\">\r\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n            </div>\r\n          </ion-row>\r\n  \r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.tags\">\r\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('tags').hasError(validation.type) && (uploadForm.get('tags').dirty || uploadForm.get('tags').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          </div>\r\n        </ion-list>\r\n  \r\n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!uploadForm.valid\">Submit</ion-button>\r\n\r\n      </form>\r\n    </div>\r\n    <div *ngSwitchCase=\"'link'\">\r\n      <form class=\"validations-form\" [formGroup]=\"weblinkForm\" (ngSubmit)=\"submitLinkForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Enter the details of the link</ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Title</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.title\">\r\n              <div class=\"error-message\" *ngIf=\"weblinkForm.get('title').hasError(validation.type) && (weblinkForm.get('title').dirty || weblinkForm.get('title').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <ion-item class=\"input-item\">\r\n            <ion-label position=\"floating\">Weblink</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"link\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.link\">\r\n              <div class=\"error-message\" *ngIf=\"weblinkForm.get('link').hasError(validation.type) && (weblinkForm.get('link').dirty || weblinkForm.get('link').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <div>\r\n            <hr/>\r\n            <div>\r\n              <div>\r\n                <img *ngIf=\"metaicon\" [src]=\"metaicon\"/>      \r\n              </div>\r\n              <div>\r\n                <h2>{{metatitle}}</h2>\r\n                <span>{{metadescription}}</span>\r\n              </div>\r\n              <div> <h6></h6>{{metasite}}</div>\r\n            </div>\r\n          </div>\r\n        </ion-list>\r\n          <ion-list class=\"inputs-list\" lines=\"full\">\r\n            <ion-list-header>\r\n              <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n            </ion-list-header>\r\n      \r\n            <div class=\"reviews-wrapper\">\r\n            <ion-row>\r\n              <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of weblinkForm.controls.tags.controls; let i = index\">\r\n                <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n                <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n                <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n              </div>\r\n            </ion-row>\r\n    \r\n            <div class=\"error-container\"> \r\n              <ng-container *ngFor=\"let validation of validations.tags\">\r\n                <div class=\"error-message\" *ngIf=\"weblinkForm.get('tags').hasError(validation.type) && (weblinkForm.get('tags').dirty || weblinkForm.get('tags').touched)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                  <span>{{ validation.message }}</span>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n            </div>\r\n          </ion-list>\r\n  \r\n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!weblinkForm.valid\">Submit</ion-button>\r\n\r\n      </form> \r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/new-resources/new-resources.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/new-resources/new-resources.module.ts ***!
  \*******************************************************/
/*! exports provided: NewResourcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewResourcesPageModule", function() { return NewResourcesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");
/* harmony import */ var _new_resources_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-resources.page */ "./src/app/new-resources/new-resources.page.ts");









const routes = [
    {
        path: '',
        component: _new_resources_page__WEBPACK_IMPORTED_MODULE_8__["NewResourcesPage"]
    }
];
let NewResourcesPageModule = class NewResourcesPageModule {
};
NewResourcesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_new_resources_page__WEBPACK_IMPORTED_MODULE_8__["NewResourcesPage"]]
    })
], NewResourcesPageModule);



/***/ }),

/***/ "./src/app/new-resources/new-resources.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/new-resources/new-resources.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.forms-validations-content {\n  --background: var(--page-background);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header .header-title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Helvetica-Bold\", \"Roboto-Medium\", \"Segoe UI Semibold\", \"Arial-Bold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .terms-item {\n  --border-width: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-primary);\n  --counter-border-color: var(--ion-color-primary);\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item .counter-value {\n  text-align: center;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlc291cmNlcy9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxuZXctcmVzb3VyY2VzXFxuZXctcmVzb3VyY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LXJlc291cmNlcy9uZXctcmVzb3VyY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FEQ0U7RUFDRSwyQ0FBQTtBQ0NKOztBRENJO0VBQ0UsNkNBQUE7RUFFQSwyRUFBQTtBQ0FOOztBREVNO0VBQ0UsMEJBQUE7VUFBQSx5QkFBQTtBQ0FSOztBREVRO0VBQ0UsOElBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQVY7O0FESU07RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRlI7O0FES007RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0FDSFI7O0FET1E7RUFDRSx3Q0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNMVjs7QURPVTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7RUFDQSxjQUFBO0FDTFo7O0FEV1E7RUFDRSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0RBQUE7QUNUVjs7QURZUTtFQUNFLGtCQUFBO0FDVlY7O0FEZUk7RUFDRSwwQkFBQTtBQ2JOOztBRGlCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QURnQkE7RUFFRSxtREFBQTtFQUNRLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNmVjs7QURnQlU7RUFDQSx5QkFBQTtBQ2RWOztBRGdCVTtFQUNBLHlCQUFBO0FDZFY7O0FEaUJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNmRiIsImZpbGUiOiJzcmMvYXBwL25ldy1yZXNvdXJjZXMvbmV3LXJlc291cmNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG59XHJcblxyXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAudmFsaWRhdGlvbnMtZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG5cclxuICAgIC5pbnB1dHMtbGlzdCB7XHJcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAgIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcclxuXHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLU1lZGl1bVwiLCBcIkhlbHZldGljYSBOZXVlIE1lZGl1bVwiLCBcIkhlbHZldGljYS1Cb2xkXCIsIFwiUm9ib3RvLU1lZGl1bVwiLCBcIlNlZ29lIFVJIFNlbWlib2xkXCIsIFwiQXJpYWwtQm9sZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEgMCA0cHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5wdXQtaXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcclxuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRlcm1zLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXJyb3ItY29udGFpbmVyIHtcclxuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAuY291bnRlci1pdGVtIHtcclxuICAgICAgICBhcHAtY291bnRlci1pbnB1dCB7XHJcbiAgICAgICAgICAtLWNvdW50ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3VudGVyLXZhbHVlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi50YWdzIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuLml0ZW0tcmF0aW5nIHtcclxuICAvLyBEZWZhdWx0IGJhY2tncm91bmRcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjBcIl0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjJiMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjFcIl0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzc3YztcclxuICAgICAgICAgIH1cclxufVxyXG5pb24tY2hlY2tib3gge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbn1cclxufVxyXG5cclxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLU1lZGl1bVwiLCBcIkhlbHZldGljYSBOZXVlIE1lZGl1bVwiLCBcIkhlbHZldGljYS1Cb2xkXCIsIFwiUm9ib3RvLU1lZGl1bVwiLCBcIlNlZ29lIFVJIFNlbWlib2xkXCIsIFwiQXJpYWwtQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbjogMSAwIDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAudGVybXMtaXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmNvdW50ZXItaXRlbSBhcHAtY291bnRlci1pbnB1dCB7XG4gIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuY291bnRlci1pdGVtIC5jb3VudGVyLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuMzUpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNzdjO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/new-resources/new-resources.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/new-resources/new-resources.page.ts ***!
  \*****************************************************/
/*! exports provided: NewResourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewResourcesPage", function() { return NewResourcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");















let NewResourcesPage = class NewResourcesPage {
    constructor(route, dataProvider, loadingProvider, alertCtrl, afAuth, router, camera, keyboard, actionSheet, contacts, geolocation, imageProvider, http) {
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
            title: [
                { type: 'required', message: 'Title is a required field.' }
            ],
            name: [
                { type: 'required', message: 'Name is a required field.' }
            ],
            address: [
                { type: 'required', message: 'Address is a required field.' }
            ],
            phones: [
                { type: 'required', message: 'Phone is a required field.' }
            ],
            email: [
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            tags: [
                { type: 'required', message: 'Please select at least one tag.' }
            ],
            link: [
                { type: 'pattern', message: 'Please enter a correct weblink.' }
            ]
        };
        this.groupId = this.route.snapshot.params.id;
        console.log('constructor', this.groupId);
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phones: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_14__["CheckboxCheckedValidator"].tagsSelected(1))
        });
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_14__["CheckboxCheckedValidator"].tagsSelected(1))
        });
        this.weblinkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
            ])),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_14__["CheckboxCheckedValidator"].tagsSelected(1))
        });
    }
    addContactTagControls() {
        this.postTags.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false
            this.contactForm.controls.tags.push(control);
        });
    }
    addLinkTagControls() {
        this.postTags.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false
            this.weblinkForm.controls.tags.push(control);
        });
    }
    addUploadTagControls() {
        this.postTags.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false
            this.uploadForm.controls.tags.push(control);
        });
    }
    ngOnInit() {
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((value) => {
            this.addedByUser = {
                addedByKey: value.payload.data().userId,
                addedByUsername: value.payload.data().username,
                addedByImg: value.payload.data().img
            };
            // Initialize
            this.resource = {
                addedByUser: this.addedByUser,
                date: '',
                title: '',
                postTags: [],
                groupId: '',
                type: 'resource',
                data: { name: '', address: '', phones: '', email: '', type: '' },
            };
        });
    }
    ionViewDidEnter() {
        this.tab = 'contact';
        // Get group information
        this.groupId = this.route.snapshot.params.id;
        console.log('this.route.snapshot.params.id', this.route.snapshot.params.id);
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
            this.postTags = [];
            console.log('this.group', group.payload.data());
            this.group.groupTags.forEach((element) => {
                this.postTags.push({ val: element, isChecked: false });
            });
            this.addContactTagControls();
            this.addLinkTagControls();
            this.addUploadTagControls();
        });
    }
    segmentChanged($event) {
        if (this.tab === 'contact') {
            this.getDummyData();
        }
        else if (this.tab === 'upload') {
            this.getDummyData();
        }
        else if (this.tab === 'link') {
            this.getDummyData();
        }
    }
    // This method is required in segmentChanged call else tabs won't load properly
    getDummyData() {
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account) => {
            console.log(account);
        });
    }
    // Proceed to userInfo page.
    viewUser(userId) {
        this.router.navigateByUrl('/userinfo/' + userId);
    }
    // Proceed with group creation.
    submitContactForm() {
        this.loadingProvider.show();
        // Add resource info and date.
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
    submitLinkForm() {
        this.loadingProvider.show();
        // Add resource info and date.
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
    submitUploadForm() {
        this.addResourceToDatabase();
    }
    linkFocusOut() {
        // this.loadingProvider.show();
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
    upload() {
        // Add resource info and date.
        this.resource.date = new Date().toString();
        this.resource.title = this.contactForm.value.title;
        this.resource.postTags = [];
        this.resource.postTags = this.postTags;
        this.resource.groupId = this.groupId;
        const action = this.actionSheet.create({
            header: 'Choose attachments',
            backdropDismiss: true,
            mode: 'md',
            buttons: [{
                    text: 'Camera',
                    handler: () => {
                        this.imageProvider.uploadGroupPhotoResource(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
                            this.resource.data.type = 'upload';
                            this.resource.data.url = url;
                            this.resource.data.uploadtype = 'image';
                        });
                    }
                }, {
                    text: 'Photo Library',
                    handler: () => {
                        this.imageProvider.uploadGroupPhotoResource(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
                            this.resource.data.type = 'upload';
                            this.resource.data.url = url;
                            this.resource.data.uploadtype = 'image';
                        });
                    }
                },
                {
                    text: 'Video',
                    handler: () => {
                        this.imageProvider.uploadGroupVideoResource(this.groupId).then(url => {
                            this.resource.data.type = 'upload';
                            this.resource.data.uploadtype = 'video';
                            this.resource.data.url = url;
                        });
                    }
                },
                {
                    text: 'Contact',
                    handler: () => {
                        this.contacts.pickContact().then(data => {
                            let name;
                            if (data.displayName !== null) {
                                name = data.displayName;
                            }
                            else {
                                name = data.name.givenName + '' + data.name.familyName;
                            }
                            this.resource.data.type = 'upload';
                            this.resource.data.uploadtype = 'contact';
                            this.resource.data.name = name;
                            this.resource.data.address = data.addresses;
                            this.resource.data.phones = data.phoneNumbers;
                            this.resource.data.email = data.emails;
                        }, err => {
                            console.log(err);
                        });
                    }
                }, {
                    text: 'Location',
                    handler: () => {
                        this.geolocation.getCurrentPosition({
                            timeout: 5000
                        }).then(res => {
                            const locationMessage = 'Location:<br> lat:' + res.coords.latitude + '<br> lng:' + res.coords.longitude;
                            // tslint:disable-next-line: max-line-length
                            const url = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';
                            const confirm = this.alertCtrl.create({
                                header: 'Your Location',
                                message: locationMessage,
                                buttons: [{
                                        text: 'cancel',
                                        handler: () => {
                                            console.log('canceled');
                                        }
                                    }, {
                                        text: 'Share',
                                        handler: () => {
                                            this.resource.data.type = 'upload';
                                            this.resource.data.url = url;
                                            this.resource.data.uploadtype = 'location';
                                        }
                                    }]
                            }).then(r => r.present());
                        }, locationErr => {
                            console.log('Location Error' + JSON.stringify(locationErr));
                        });
                    }
                }, {
                    text: 'cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancelled');
                    }
                }]
        }).then(r => r.present());
    }
    addResourceToDatabase() {
        // Add resource to database.
        this.dataProvider.addPost(this.resource).then((success) => {
            const postId = success.id;
            this.resourceId = postId;
            if (this.group.posts === undefined) {
                this.group.posts = [];
            }
            this.group.posts.push(this.resourceId);
            // Update group data on the database.
            this.dataProvider.getGroup(this.groupId).update({
                posts: this.group.posts
            }).then(() => {
                this.loadingProvider.hide();
            });
        });
        this.router.navigateByUrl('tabs/tab4');
    }
};
NewResourcesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__["Contacts"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"] }
];
NewResourcesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-resources',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-resources.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-resources/new-resources.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-resources.page.scss */ "./src/app/new-resources/new-resources.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__["Contacts"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]])
], NewResourcesPage);



/***/ })

}]);
//# sourceMappingURL=new-resources-new-resources-module-es2015.js.map