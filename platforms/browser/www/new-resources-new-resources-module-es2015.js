(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-resources-new-resources-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-resources/new-resources.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-resources/new-resources.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n  <ion-segment *ngIf=\"step==2\" color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"contact\">\n      Contact\n    </ion-segment-button>\n    <ion-segment-button value=\"upload\">\n      Upload\n    </ion-segment-button>\n    <ion-segment-button value=\"link\">\n      Link\n    </ion-segment-button>\n  </ion-segment>\n</ion-header> \n\n<ion-content  class=\"forms-validations-content\">\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\">\n      <ion-list lines=\"none\">\n        <ion-item *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n            <ion-text>\n              <h2>{{group.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>created {{group.dateCreated.toDate() | DateFormat}}</p>\n            </ion-text>\n          </ion-label>\n          <ion-badge slot=\"end\" color=\"danger\" *ngIf=\"group.unreadMessagesCount > 0\">{{group.unreadMessagesCount}}\n          </ion-badge>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step==2\">\n  <div [ngSwitch]=\"tab\">\n    <div *ngSwitchCase=\"'contact'\">\n      <form class=\"validations-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"submitContactForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">{{group.name}}</ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.title\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('title').hasError(validation.type) && (contactForm.get('title').dirty || contactForm.get('title').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Name:</ion-label>\n            <ion-input type=\"text\" formControlName=\"name\" clearInput placeholder=\"Enter the name of the contact\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.name\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('name').hasError(validation.type) && (contactForm.get('name').dirty || contactForm.get('name').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Address:</ion-label>\n            <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the contact\"></ion-textarea>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.address\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('address').hasError(validation.type) && (contactForm.get('address').dirty || contactForm.get('address').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Phone No:</ion-label>\n            <ion-input type=\"text\" formControlName=\"phones\" clearInput placeholder=\"Enter one or more phone numbers (comma separated)\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.contactForm\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('phones').hasError(validation.type) && (contactForm.get('phones').dirty || contactForm.get('phones').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Email:</ion-label>\n            <ion-input type=\"text\" formControlName=\"email\" clearInput placeholder=\"Enter an email address if available\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.contactForm\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('email').hasError(validation.type) && (contactForm.get('email').dirty || contactForm.get('email').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n        </ion-list>\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\n          </ion-list-header>\n    \n          <div class=\"reviews-wrapper\">\n          <ion-row>\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of contactForm.controls.tags.controls; let i = index\">\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n            </div>\n          </ion-row>\n  \n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.tags\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('tags').hasError(validation.type) && (contactForm.get('tags').dirty || contactForm.get('tags').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          </div>\n        </ion-list>\n  \n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!contactForm.valid\">Submit</ion-button>\n\n      </form>\n    </div>\n    <div *ngSwitchCase=\"'upload'\">\n   <form class=\"validations-form\" [formGroup]=\"uploadForm\" (ngSubmit)=\"submitUploadForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">{{group.name}}</ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.title\">\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('title').hasError(validation.type) && (uploadForm.get('title').dirty || uploadForm.get('title').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          <ion-item class=\"input-item\">\n            <ion-buttons>\n              <ion-button color=\"danger\" (click)=\"upload()\" class=\"submit-btn\" expand=\"block\" >Attach a File/Document<ion-icon name=\"attach\"></ion-icon></ion-button>\n            </ion-buttons>\n          </ion-item>\n        </ion-list>\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\n          </ion-list-header>\n    \n          <div class=\"reviews-wrapper\">\n          <ion-row>\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of uploadForm.controls.tags.controls; let i = index\">\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n            </div>\n          </ion-row>\n  \n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.tags\">\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('tags').hasError(validation.type) && (uploadForm.get('tags').dirty || uploadForm.get('tags').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          </div>\n        </ion-list>\n  \n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!uploadForm.valid\">Submit</ion-button>\n\n      </form>\n    </div>\n    <div *ngSwitchCase=\"'link'\">\n      <form class=\"validations-form\" [formGroup]=\"weblinkForm\" (ngSubmit)=\"submitLinkForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">{{group.name}}</ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.title\">\n              <div class=\"error-message\" *ngIf=\"weblinkForm.get('title').hasError(validation.type) && (weblinkForm.get('title').dirty || weblinkForm.get('title').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">Weblink</ion-label>\n            <ion-input type=\"text\" formControlName=\"link\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\n          </ion-item>\n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.link\">\n              <div class=\"error-message\" *ngIf=\"weblinkForm.get('link').hasError(validation.type) && (weblinkForm.get('link').dirty || weblinkForm.get('link').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          <div>\n            <hr/>\n            <div>\n              <div>\n                <img *ngIf=\"metaicon\" [src]=\"metaicon\"/>      \n              </div>\n              <div>\n                <h2>{{metatitle}}</h2>\n                <span>{{metadescription}}</span>\n              </div>\n              <div> <h6></h6>{{metasite}}</div>\n            </div>\n          </div>\n        </ion-list>\n          <ion-list class=\"inputs-list\" lines=\"full\">\n            <ion-list-header>\n              <ion-label class=\"header-title\">Select relevant tags</ion-label>\n            </ion-list-header>\n      \n            <div class=\"reviews-wrapper\">\n            <ion-row>\n              <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of weblinkForm.controls.tags.controls; let i = index\">\n                <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n                <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n                <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n              </div>\n            </ion-row>\n    \n            <div class=\"error-container\"> \n              <ng-container *ngFor=\"let validation of validations.tags\">\n                <div class=\"error-message\" *ngIf=\"weblinkForm.get('tags').hasError(validation.type) && (weblinkForm.get('tags').dirty || weblinkForm.get('tags').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\n                  <span>{{ validation.message }}</span>\n                </div>\n              </ng-container>\n            </div>\n            </div>\n          </ion-list>\n  \n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!weblinkForm.valid\">Submit</ion-button>\n\n      </form> \n    </div>\n  </div>\n</div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.forms-validations-content {\n  --background: var(--page-background);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header .header-title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Helvetica-Bold\", \"Roboto-Medium\", \"Segoe UI Semibold\", \"Arial-Bold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .terms-item {\n  --border-width: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-primary);\n  --counter-border-color: var(--ion-color-primary);\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item .counter-value {\n  text-align: center;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9uZXctcmVzb3VyY2VzL25ldy1yZXNvdXJjZXMucGFnZS5zY3NzIiwic3JjL2FwcC9uZXctcmVzb3VyY2VzL25ldy1yZXNvdXJjZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURDRTtFQUNFLDJDQUFBO0FDQ0o7O0FEQ0k7RUFDRSw2Q0FBQTtFQUVBLDJFQUFBO0FDQU47O0FERU07RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0FDQVI7O0FERVE7RUFDRSw4SUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNBVjs7QURJTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNGUjs7QURLTTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUNIUjs7QURPUTtFQUNFLHdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0xWOztBRE9VO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUNMWjs7QURXUTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxnREFBQTtBQ1RWOztBRFlRO0VBQ0Usa0JBQUE7QUNWVjs7QURlSTtFQUNFLDBCQUFBO0FDYk47O0FEaUJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ2ZGOztBRGdCQTtFQUVFLG1EQUFBO0VBQ1EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2ZWOztBRGdCVTtFQUNBLHlCQUFBO0FDZFY7O0FEZ0JVO0VBQ0EseUJBQUE7QUNkVjs7QURpQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ2ZGIiwiZmlsZSI6InNyYy9hcHAvbmV3LXJlc291cmNlcy9uZXctcmVzb3VyY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cblxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLnZhbGlkYXRpb25zLWZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuaW5wdXRzLWxpc3Qge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG5cbiAgICAgICAgLmhlYWRlci10aXRsZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1NZWRpdW1cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBNZWRpdW1cIiwgXCJIZWx2ZXRpY2EtQm9sZFwiLCBcIlJvYm90by1NZWRpdW1cIiwgXCJTZWdvZSBVSSBTZW1pYm9sZFwiLCBcIkFyaWFsLUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgIG1hcmdpbjogMSAwIDRweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cblxuICAgICAgLnRlcm1zLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5lcnJvci1jb250YWluZXIge1xuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC5jb3VudGVyLWl0ZW0ge1xuICAgICAgICBhcHAtY291bnRlci1pbnB1dCB7XG4gICAgICAgICAgLS1jb3VudGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC0tY291bnRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudGVyLXZhbHVlIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VibWl0LWJ0biB7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuLnRhZ3Mge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4uaXRlbS1yYXRpbmcge1xuICAvLyBEZWZhdWx0IGJhY2tncm91bmRcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiMmIyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNzdjO1xuICAgICAgICAgIH1cbn1cbmlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogNTBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgZGlzcGxheTpibG9jaztcbiAgb3BhY2l0eTogMDtcbn1cblxufVxufVxuXG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG5cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCBpb24tbGlzdC1oZWFkZXIgLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWUtTWVkaXVtXCIsIFwiSGVsdmV0aWNhIE5ldWUgTWVkaXVtXCIsIFwiSGVsdmV0aWNhLUJvbGRcIiwgXCJSb2JvdG8tTWVkaXVtXCIsIFwiU2Vnb2UgVUkgU2VtaWJvbGRcIiwgXCJBcmlhbC1Cb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbWFyZ2luOiAxIDAgNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC50ZXJtcy1pdGVtIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2Uge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuY291bnRlci1pdGVtIGFwcC1jb3VudGVyLWlucHV0IHtcbiAgLS1jb3VudGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5jb3VudGVyLWl0ZW0gLmNvdW50ZXItdmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3Mge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjJiMjtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xufSJdfQ== */");

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
        this.postTags = [];
        this.metaicon = null;
        this.step = 1;
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
        this.group = { name: '' };
        if (this.groupId === 'undefined') {
            this.step = 1;
        }
        else {
            this.step = 2;
        }
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
    ionViewDidEnter() {
        if (this.step === 1) {
            this.title = 'Select a group ...';
            this.dataProvider.getGroups().snapshotChanges().subscribe((data) => {
                this.groups = data.map(c => {
                    return Object.assign({ $key: c.payload.doc.id }, c.payload.doc.data());
                });
            });
        }
        else {
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
                groupName: '',
                type: 'resource',
                data: { name: '', address: '', phones: '', email: '', type: '' },
                totalReactionCount: 0,
                totalReviewCount: 0
            };
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
        this.resource.date = new Date();
        this.resource.title = this.contactForm.value.title;
        this.resource.postTags = [];
        this.resource.postTags = this.postTags;
        this.resource.groupId = this.groupId;
        this.resource.groupName = this.group.name;
        this.resource.data.type = 'contact';
        this.resource.data.name = this.contactForm.value.name;
        this.resource.data.address = this.contactForm.value.address.replace(/(?:\r\n|\r|\n)/g, '<br>');
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
        this.resource.groupName = this.group.name;
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
        this.loadingProvider.show();
        const getMeta = __webpack_require__(/*! lets-get-meta */ "./node_modules/lets-get-meta/index.js");
        this.http.get(this.weblinkForm.value.link, { responseType: 'text' })
            .subscribe(res => {
            const o = getMeta(res);
            this.metaicon = o['og:image'];
            this.metadescription = o.description;
            this.metatitle = o['og:title'];
            this.loadingProvider.hide();
        });
    }
    upload() {
        // Add resource info and date.
        this.resource.date = new Date().toString();
        this.resource.title = this.contactForm.value.title;
        this.resource.postTags = [];
        this.resource.postTags = this.postTags;
        this.resource.groupId = this.groupId;
        this.resource.groupName = this.group.name;
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
    selectGroup(groupId) {
        this.groupId = groupId;
        console.log('groupId', groupId);
        this.step = 2;
        this.title = 'Add a Resource in ...';
        this.tab = 'contact';
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
            this.group.groupTags.forEach((element) => {
                this.postTags.push({ val: element, isChecked: false });
            });
            this.addContactTagControls();
            this.addLinkTagControls();
            this.addUploadTagControls();
        });
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