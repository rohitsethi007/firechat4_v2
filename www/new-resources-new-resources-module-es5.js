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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\r\n      <ion-button *ngIf=\"tab=='contact'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!contactForm.valid\" (click)=\"submitContactForm()\">Post</ion-button>\r\n      <ion-button *ngIf=\"tab=='upload'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!uploadForm.valid\" (click)=\"submitUploadForm()\">Post</ion-button>\r\n      <ion-button *ngIf=\"tab=='link'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!weblinkForm.valid\" (click)=\"submitLinkForm()\">Post</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-segment *ngIf=\"step==2\" color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button value=\"contact\">\r\n      Contact\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"upload\">\r\n      Upload\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"link\">\r\n      Link\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header> \r\n\r\n<ion-content  class=\"forms-validations-content\">\r\n  <div *ngIf=\"step==1\"> \r\n    <div *ngIf=\"groups && groups.length > 0\">\r\n      <ion-list>\r\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n              <b>{{group.name}}</b><br/>\r\n              {{group.description}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"step==2\">\r\n  <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'contact'\">\r\n      <form class=\"validations-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"submitContactForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header class=\"header\">\r\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"name\" clearInput placeholder=\"Enter the name of the contact\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the contact\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"phones\" clearInput placeholder=\"Enter one or more phone numbers (comma separated)\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"email\" clearInput placeholder=\"Enter an email address if available\"></ion-input>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n          </ion-list-header>\r\n    \r\n          <div class=\"reviews-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of contactForm.controls.tags.controls; let i = index\">\r\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n            </div>\r\n          </ion-row>\r\n  \r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.tags\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('tags').hasError(validation.type) && (contactForm.get('tags').dirty || contactForm.get('tags').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          </div>\r\n        </ion-list>\r\n  \r\n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!contactForm.valid\">Submit</ion-button> -->\r\n\r\n      </form>\r\n    </div>\r\n    <div *ngSwitchCase=\"'upload'\">\r\n   <form class=\"validations-form\" [formGroup]=\"uploadForm\" (ngSubmit)=\"submitUploadForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header class=\"header\">\r\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-buttons>\r\n              <ion-button expand=\"block\" color=\"secondary\" (click)=\"upload()\"><ion-icon name=\"attach\"></ion-icon>Attach a File/Document</ion-button>\r\n            </ion-buttons>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n          </ion-list-header>\r\n    \r\n          <div class=\"reviews-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of uploadForm.controls.tags.controls; let i = index\">\r\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n            </div>\r\n          </ion-row>\r\n  \r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.tags\">\r\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('tags').hasError(validation.type) && (uploadForm.get('tags').dirty || uploadForm.get('tags').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          </div>\r\n        </ion-list>\r\n  \r\n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!uploadForm.valid\">Submit</ion-button> -->\r\n\r\n      </form>\r\n    </div>\r\n    <div *ngSwitchCase=\"'link'\">\r\n      <form class=\"validations-form\" [formGroup]=\"weblinkForm\" (ngSubmit)=\"submitLinkForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header class=\"header\">\r\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"link\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\r\n          </ion-item>\r\n          <div>\r\n            <hr/>\r\n            <div>\r\n              <div>\r\n                <img *ngIf=\"metaicon\" [src]=\"metaicon\"/>      \r\n              </div>\r\n              <div>\r\n                <h2>{{metatitle}}</h2>\r\n                <span>{{metadescription}}</span>\r\n              </div>\r\n              <div> <h6></h6>{{metasite}}</div>\r\n            </div>\r\n          </div>\r\n        </ion-list>\r\n          <ion-list class=\"inputs-list\" lines=\"full\">\r\n            <ion-list-header>\r\n              <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n            </ion-list-header>\r\n      \r\n            <div class=\"reviews-wrapper\">\r\n            <ion-row>\r\n              <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of weblinkForm.controls.tags.controls; let i = index\">\r\n                <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n                <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n                <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n              </div>\r\n            </ion-row>\r\n    \r\n            <div class=\"error-container\"> \r\n              <ng-container *ngFor=\"let validation of validations.tags\">\r\n                <div class=\"error-message\" *ngIf=\"weblinkForm.get('tags').hasError(validation.type) && (weblinkForm.get('tags').dirty || weblinkForm.get('tags').touched)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                  <span>{{ validation.message }}</span>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n            </div>\r\n          </ion-list>\r\n  \r\n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!weblinkForm.valid\">Submit</ion-button> -->\r\n\r\n      </form> \r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>";
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


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlc291cmNlcy9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxuZXctcmVzb3VyY2VzXFxuZXctcmVzb3VyY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LXJlc291cmNlcy9uZXctcmVzb3VyY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FDQ0Y7O0FER0c7RUFDQywyQ0FBQTtBQ0FKOztBREVJO0VBQ0UsMkVBQUE7QUNBTjs7QURFTTtFQUNFLGVBQUE7QUNBUjs7QURHUTtFQUNFLHdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0RWOztBREdVO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUNEWjs7QURPSTtFQUNFLDBCQUFBO0FDTE47O0FEU0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEUUU7RUFFRSxtREFBQTtFQUNRLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNQWjs7QURRWTtFQUNFLHlCQUFBO0FDTmQ7O0FEUVk7RUFDRSx5QkFBQTtBQ05kOztBRFNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNQSjs7QURhQTtFQUNFLFdBQUE7QUNWRjs7QURXQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVEY7O0FEV0E7RUFDRSxVQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC9uZXctcmVzb3VyY2VzL25ldy1yZXNvdXJjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcclxufVxyXG5cclxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xyXG4gICAudmFsaWRhdGlvbnMtZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG5cclxuICAgIC5pbnB1dHMtbGlzdCB7XHJcbiAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICAuZXJyb3ItY29udGFpbmVyIHtcclxuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWdzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgLml0ZW0tcmF0aW5nIHtcclxuICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiMmIyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjFcIl0ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XHJcbiAgICAgICAgICAgIH1cclxuICB9XHJcbiAgaW9uLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxufVxyXG59XHJcblxyXG4udXBsb2FkcyB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbi5pbWctd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5pbWctd3JhcCAuY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0ycHg7XHJcbiAgcmlnaHQ6IC03cHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgcGFkZGluZzogNXB4IDJweCAycHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5pbWctd3JhcDpob3ZlciAuY2xvc2Uge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxufVxyXG5cclxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG59XG5cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2Uge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAwLjM1KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiMmIyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzc3Yztcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogNTBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi51cGxvYWRzIHtcbiAgbWFyZ2luOiA1cHg7XG59XG4udXBsb2FkcyAuaW1nLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG4udXBsb2FkcyAuaW1nLXdyYXAgLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIHJpZ2h0OiAtN3B4O1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDVweCAycHggMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi51cGxvYWRzIC5pbWctd3JhcDpob3ZlciAuY2xvc2Uge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */";
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
        this.postTags = [];
        this.metaicon = '';
        this.metadescription = '';
        this.metatitle = '';
        this.step = 1;
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
        this.group = {
          name: ''
        };

        if (this.groupId === 'undefined') {
          this.step = 1;
        } else {
          this.step = 2;
        }

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
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          if (this.step === 1) {
            this.title = 'Select a group ...';
            this.dataProvider.getGroups().snapshotChanges().subscribe(function (data) {
              _this.groups = data.map(function (c) {
                return Object.assign({
                  $key: c.payload.doc.id
                }, c.payload.doc.data());
              });
            });
          } else {
            this.tab = 'contact'; // Get group information

            this.groupId = this.route.snapshot.params.id;
            console.log('this.route.snapshot.params.id', this.route.snapshot.params.id);
            this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this.group = group.payload.data();
              _this.postTags = [];
              console.log('this.group', group.payload.data());

              _this.group.groupTags.forEach(function (element) {
                _this.postTags.push({
                  val: element,
                  isChecked: false
                });
              });

              _this.addContactTagControls();

              _this.addLinkTagControls();

              _this.addUploadTagControls();
            });
          }
        }
      }, {
        key: "addContactTagControls",
        value: function addContactTagControls() {
          var _this2 = this;

          this.postTags.forEach(function (o, i) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false

            _this2.contactForm.controls.tags.push(control);
          });
        }
      }, {
        key: "addLinkTagControls",
        value: function addLinkTagControls() {
          var _this3 = this;

          this.postTags.forEach(function (o, i) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false

            _this3.weblinkForm.controls.tags.push(control);
          });
        }
      }, {
        key: "addUploadTagControls",
        value: function addUploadTagControls() {
          var _this4 = this;

          this.postTags.forEach(function (o, i) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false

            _this4.uploadForm.controls.tags.push(control);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (value) {
            _this5.addedByUser = {
              addedByKey: value.payload.data().userId,
              addedByUsername: value.payload.data().username,
              addedByImg: value.payload.data().img
            }; // Initialize

            _this5.resource = {
              addedByUser: _this5.addedByUser,
              date: '',
              title: '',
              postTags: [],
              groupId: '',
              groupName: '',
              type: 'resource',
              data: {
                name: '',
                address: '',
                phones: '',
                email: '',
                type: ''
              },
              totalReactionCount: 0,
              totalReviewCount: 0
            };
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
      }, {
        key: "submitLinkForm",
        value: function submitLinkForm() {
          this.loadingProvider.show(); // Add resource info and date.

          this.resource.date = new Date();
          this.resource.title = this.weblinkForm.value.title;
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
      }, {
        key: "submitUploadForm",
        value: function submitUploadForm() {
          this.addResourceToDatabase();
        }
      }, {
        key: "linkFocusOut",
        value: function linkFocusOut() {
          var _this6 = this;

          this.loadingProvider.show();

          var getMeta = __webpack_require__(
          /*! lets-get-meta */
          "./node_modules/lets-get-meta/index.js");

          this.http.get(this.weblinkForm.value.link, {
            responseType: 'text'
          }).subscribe(function (res) {
            var o = getMeta(res);
            _this6.metaicon = o['og:image'];
            _this6.metadescription = o.description;
            _this6.metatitle = o['og:title'];
            console.log('link', _this6.metaicon);
            console.log('link', _this6.metatitle);

            _this6.loadingProvider.hide();
          });
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this7 = this;

          // Add resource info and date.
          this.resource.date = new Date();
          this.resource.title = this.contactForm.value.title;
          this.resource.postTags = [];
          this.resource.postTags = this.postTags;
          this.resource.groupId = this.groupId;
          this.resource.groupName = this.group.name;
          var action = this.actionSheet.create({
            header: 'Choose attachments',
            backdropDismiss: true,
            mode: 'md',
            buttons: [{
              text: 'Camera',
              handler: function handler() {
                _this7.imageProvider.uploadGroupPhotoResource(_this7.groupId, _this7.camera.PictureSourceType.CAMERA).then(function (url) {
                  _this7.resource.data.type = 'upload';
                  _this7.resource.data.url = url;
                  _this7.resource.data.uploadtype = 'image';
                });
              }
            }, {
              text: 'Photo Library',
              handler: function handler() {
                _this7.imageProvider.uploadGroupPhotoResource(_this7.groupId, _this7.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                  _this7.resource.data.type = 'upload';
                  _this7.resource.data.url = url;
                  _this7.resource.data.uploadtype = 'image';
                });
              }
            }, {
              text: 'Video',
              handler: function handler() {
                _this7.imageProvider.uploadGroupVideoResource(_this7.groupId).then(function (url) {
                  _this7.resource.data.type = 'upload';
                  _this7.resource.data.uploadtype = 'video';
                  _this7.resource.data.url = url;
                });
              }
            }, {
              text: 'Contact',
              handler: function handler() {
                _this7.contacts.pickContact().then(function (data) {
                  var name;

                  if (data.displayName !== null) {
                    name = data.displayName;
                  } else {
                    name = data.name.givenName + '' + data.name.familyName;
                  }

                  _this7.resource.data.type = 'upload';
                  _this7.resource.data.uploadtype = 'contact';
                  _this7.resource.data.name = name;
                  _this7.resource.data.address = data.addresses;
                  _this7.resource.data.phones = data.phoneNumbers;
                  _this7.resource.data.email = data.emails;
                }, function (err) {
                  console.log(err);
                });
              }
            }, {
              text: 'Location',
              handler: function handler() {
                _this7.geolocation.getCurrentPosition({
                  timeout: 5000
                }).then(function (res) {
                  var locationMessage = 'Location:<br> lat:' + res.coords.latitude + '<br> lng:' + res.coords.longitude; // tslint:disable-next-line: max-line-length

                  var url = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';

                  var confirm = _this7.alertCtrl.create({
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
                        _this7.resource.data.type = 'upload';
                        _this7.resource.data.url = url;
                        _this7.resource.data.uploadtype = 'location';
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
          var _this8 = this;

          // Add resource to database.
          this.dataProvider.addPost(this.resource).then(function (success) {
            var postId = success.id;
            _this8.resourceId = postId;

            if (_this8.group.posts === undefined) {
              _this8.group.posts = [];
            }

            _this8.group.posts.push(_this8.resourceId); // Update group data on the database.


            _this8.dataProvider.getGroup(_this8.groupId).update({
              posts: _this8.group.posts
            }).then(function () {
              _this8.loadingProvider.hide();
            });
          });
          this.router.navigateByUrl('tabs/tab4');
        }
      }, {
        key: "selectGroup",
        value: function selectGroup(groupId) {
          var _this9 = this;

          this.groupId = groupId;
          console.log('groupId', groupId);
          this.step = 2;
          this.title = 'Resource';
          this.tab = 'contact';
          this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
            _this9.group = group.payload.data();

            _this9.group.groupTags.forEach(function (element) {
              _this9.postTags.push({
                val: element,
                isChecked: false
              });
            });

            _this9.addContactTagControls();

            _this9.addLinkTagControls();

            _this9.addUploadTagControls();
          });
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