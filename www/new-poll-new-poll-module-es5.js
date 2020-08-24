function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-poll-new-poll-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-poll/new-poll.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-poll/new-poll.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewPollNewPollPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content class=\"forms-validations-content\">\r\n  <div *ngIf=\"step==1\"> \r\n    <div *ngIf=\"groups && groups.length > 0\">\r\n      <ion-list lines=\"none\">\r\n        <ion-item *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{group.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>created {{group.dateCreated.toDate() | DateFormat}}</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-badge slot=\"end\" color=\"danger\" *ngIf=\"group.unreadMessagesCount > 0\">{{group.unreadMessagesCount}}\r\n          </ion-badge>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"step==2\">\r\n    <form class=\"validations-form\" [formGroup]=\"pollForm\" (ngSubmit)=\"submitPollForm()\">\r\n      <ion-list class=\"inputs-list\" lines=\"full\">\r\n        <ion-list-header>\r\n          <ion-label class=\"header-title\">{{group.name}}</ion-label>\r\n        </ion-list-header>\r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Question</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"description\" clearInput placeholder=\"What would like to ask?\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.description\">\r\n            <div class=\"error-message\" *ngIf=\"pollForm.get('description').hasError(validation.type) && (pollForm.get('description').dirty || pollForm.get('description').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Option 1</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"pollOption1\" clearInput placeholder=\"Enter the first option\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.pollOption1\">\r\n            <div class=\"error-message\" *ngIf=\"pollForm.get('pollOption1').hasError(validation.type) && (pollForm.get('pollOption1').dirty || pollForm.get('pollOption1').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        \r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Option 2</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"pollOption2\" clearInput placeholder=\"Enter the second option\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.pollOption2\">\r\n            <div class=\"error-message\" *ngIf=\"pollForm.get('pollOption2').hasError(validation.type) && (pollForm.get('pollOption2').dirty || pollForm.get('pollOption2').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Option 3</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"pollOption3\" clearInput placeholder=\"This is optional\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Option 4</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"pollOption4\" clearInput placeholder=\"This is optional\"></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n \r\n      <ion-list class=\"inputs-list\" lines=\"full\">\r\n        <ion-list-header>\r\n          <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n        </ion-list-header>\r\n  \r\n        <div class=\"reviews-wrapper\">\r\n        <ion-row>\r\n          <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of pollForm.controls.tags.controls; let i = index\">\r\n            <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n            <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n            <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n          </div>\r\n        </ion-row>\r\n\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.tags\">\r\n            <div class=\"error-message\" *ngIf=\"pollForm.get('tags').hasError(validation.type) && (pollForm.get('tags').dirty || pollForm.get('tags').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        </div>\r\n      </ion-list>\r\n      <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!pollForm.valid\">Submit</ion-button>\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/new-poll/new-poll.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/new-poll/new-poll.module.ts ***!
    \*********************************************/

  /*! exports provided: NewPollPageModule */

  /***/
  function srcAppNewPollNewPollModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPollPageModule", function () {
      return NewPollPageModule;
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


    var _new_poll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-poll.page */
    "./src/app/new-poll/new-poll.page.ts");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");

    var routes = [{
      path: '',
      component: _new_poll_page__WEBPACK_IMPORTED_MODULE_6__["NewPollPage"]
    }];

    var NewPollPageModule = function NewPollPageModule() {
      _classCallCheck(this, NewPollPageModule);
    };

    NewPollPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_new_poll_page__WEBPACK_IMPORTED_MODULE_6__["NewPollPage"]]
    })], NewPollPageModule);
    /***/
  },

  /***/
  "./src/app/new-poll/new-poll.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/new-poll/new-poll.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewPollNewPollPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.forms-validations-content {\n  --background: var(--page-background);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header .header-title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Helvetica-Bold\", \"Roboto-Medium\", \"Segoe UI Semibold\", \"Arial-Bold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .terms-item {\n  --border-width: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-primary);\n  --counter-border-color: var(--ion-color-primary);\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item .counter-value {\n  text-align: center;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXBvbGwvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcbmV3LXBvbGxcXG5ldy1wb2xsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LXBvbGwvbmV3LXBvbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURDRTtFQUNFLDJDQUFBO0FDQ0o7O0FEQ0k7RUFDRSw2Q0FBQTtFQUVBLDJFQUFBO0FDQU47O0FERU07RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0FDQVI7O0FERVE7RUFDRSw4SUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNBVjs7QURJTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNGUjs7QURLTTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUNIUjs7QURPUTtFQUNFLHdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0xWOztBRE9VO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUNMWjs7QURXUTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxnREFBQTtBQ1RWOztBRFlRO0VBQ0Usa0JBQUE7QUNWVjs7QURlSTtFQUNFLDBCQUFBO0FDYk47O0FEaUJFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ2ZKOztBRGdCRTtFQUVFLG1EQUFBO0VBQ1EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2ZaOztBRGdCWTtFQUNFLHlCQUFBO0FDZGQ7O0FEZ0JZO0VBQ0UseUJBQUE7QUNkZDs7QURpQkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ2ZKIiwiZmlsZSI6InNyYy9hcHAvbmV3LXBvbGwvbmV3LXBvbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxufVxyXG5cclxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgLnZhbGlkYXRpb25zLWZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAuaW5wdXRzLWxpc3Qge1xyXG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblxyXG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcblxyXG4gICAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XHJcblxyXG4gICAgICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1NZWRpdW1cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBNZWRpdW1cIiwgXCJIZWx2ZXRpY2EtQm9sZFwiLCBcIlJvYm90by1NZWRpdW1cIiwgXCJTZWdvZSBVSSBTZW1pYm9sZFwiLCBcIkFyaWFsLUJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxIDAgNHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXJtcy1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLmNvdW50ZXItaXRlbSB7XHJcbiAgICAgICAgYXBwLWNvdW50ZXItaW5wdXQge1xyXG4gICAgICAgICAgLS1jb3VudGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRlci12YWx1ZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWdzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgLml0ZW0tcmF0aW5nIHtcclxuICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiMmIyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjFcIl0ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XHJcbiAgICAgICAgICAgIH1cclxuICB9XHJcbiAgaW9uLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxufVxyXG59XHJcblxyXG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG5cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCBpb24tbGlzdC1oZWFkZXIgLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWUtTWVkaXVtXCIsIFwiSGVsdmV0aWNhIE5ldWUgTWVkaXVtXCIsIFwiSGVsdmV0aWNhLUJvbGRcIiwgXCJSb2JvdG8tTWVkaXVtXCIsIFwiU2Vnb2UgVUkgU2VtaWJvbGRcIiwgXCJBcmlhbC1Cb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbWFyZ2luOiAxIDAgNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC50ZXJtcy1pdGVtIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2Uge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuY291bnRlci1pdGVtIGFwcC1jb3VudGVyLWlucHV0IHtcbiAgLS1jb3VudGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5jb3VudGVyLWl0ZW0gLmNvdW50ZXItdmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3Mge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjJiMjtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/new-poll/new-poll.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/new-poll/new-poll.page.ts ***!
    \*******************************************/

  /*! exports provided: NewPollPage */

  /***/
  function srcAppNewPollNewPollPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPollPage", function () {
      return NewPollPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../validators/checkbox-checked.validator */
    "./src/app/validators/checkbox-checked.validator.ts");

    var NewPollPage =
    /*#__PURE__*/
    function () {
      function NewPollPage(dataProvider, loadingProvider, route, router) {
        _classCallCheck(this, NewPollPage);

        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.route = route;
        this.router = router;
        this.postTags = [];
        this.step = 1;
        this.validations = {
          name: [{
            type: 'required',
            message: 'Title is required.'
          }, {
            type: 'minlength',
            message: 'Title must be at least 5 characters long.'
          }, {
            type: 'maxlength',
            message: 'Title cannot be more than 25 characters long.'
          }],
          description: [{
            type: 'required',
            message: 'Poll Question is required.'
          }, {
            type: 'minlength',
            message: 'Poll Question must be at least 10 characters long.'
          }, {
            type: 'maxlength',
            message: 'Poll Question cannot be more than 50 characters long.'
          }],
          pollOption1: [{
            type: 'required',
            message: 'Poll Question is required.'
          }, {
            type: 'minlength',
            message: 'Poll Question must be at least 10 characters long.'
          }, {
            type: 'maxlength',
            message: 'Poll Question cannot be more than 50 characters long.'
          }],
          pollOption2: [{
            type: 'required',
            message: 'Poll Question is required.'
          }, {
            type: 'minlength',
            message: 'Poll Question must be at least 10 characters long.'
          }, {
            type: 'maxlength',
            message: 'Poll Question cannot be more than 50 characters long.'
          }],
          tags: [{
            type: 'required',
            message: 'Please select at least one tag.'
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

        this.pollForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          pollOption1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          pollOption2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          pollOption3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          pollOption4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_6__["CheckboxCheckedValidator"].tagsSelected(1))
        });
      }

      _createClass(NewPollPage, [{
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
            this.title = 'Create a Poll in ...';
            this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this.group = group.payload.data();

              _this.group.groupTags.forEach(function (element) {
                _this.postTags.push({
                  val: element,
                  isChecked: false
                });
              });

              _this.addTagControls();
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // Initialize
          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (value) {
            _this2.addedByUser = {
              addedByKey: value.payload.data().userId,
              addedByUsername: value.payload.data().username,
              addedByImg: value.payload.data().img
            };
            _this2.poll = {
              addedByUser: _this2.addedByUser,
              date: '',
              title: '',
              postTags: [],
              groupId: '',
              groupName: '',
              type: 'poll',
              data: {},
              totalReactionCount: 0,
              totalReviewCount: 0
            };
          });
        }
      }, {
        key: "addTagControls",
        value: function addTagControls() {
          var _this3 = this;

          this.postTags.forEach(function (o, i) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](i === 0); // if first item set to true, else false

            _this3.pollForm.controls.tags.push(control);
          });
        }
      }, {
        key: "submitPollForm",
        value: function submitPollForm() {
          var _this4 = this;

          this.loadingProvider.show(); // Add poll info and date.

          this.poll.groupId = this.groupId;
          this.poll.groupName = this.group.name;
          this.poll.date = new Date();
          this.poll.title = this.pollForm.value.description;
          this.poll.postTags = [];
          this.poll.postTags = this.postTags;
          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth(); // January is 0!

          var yyyy = today.getFullYear();
          var date = new Date(yyyy, mm, dd + 2);
          var dateEnding = date;
          this.poll.data = {
            dateCreated: new Date(),
            dateEnding: dateEnding,
            pollOptions: []
          };

          if (this.pollForm.value.pollOption1 != null && this.pollForm.value.pollOption1.trim() !== '') {
            this.poll.data.pollOptions.push({
              name: this.pollForm.value.pollOption1.trim()
            });
          }

          if (this.pollForm.value.pollOption2 != null && this.pollForm.value.pollOption2.trim() !== '') {
            this.poll.data.pollOptions.push({
              name: this.pollForm.value.pollOption2.trim()
            });
          }

          if (this.pollForm.value.pollOption3 != null && this.pollForm.value.pollOption3.trim() !== '') {
            this.poll.data.pollOptions.push({
              name: this.pollForm.value.pollOption3.trim()
            });
          }

          if (this.pollForm.value.pollOption4 != null && this.pollForm.value.pollOption4.trim() !== '') {
            this.poll.data.pollOptions.push({
              name: this.pollForm.value.pollOption4.trim()
            });
          }

          this.dataProvider.addPost(this.poll).then(function (success) {
            var pollId = success.id;
            _this4.pollId = pollId;

            if (_this4.group.polls === undefined) {
              _this4.group.polls = [];
            }

            _this4.group.polls.push(_this4.pollId); // Update group data on the database.


            _this4.dataProvider.getGroup(_this4.groupId).update({
              posts: _this4.group.posts
            }).then(function () {
              // Back.
              _this4.loadingProvider.hide();

              _this4.router.navigateByUrl('tabs/tab2');
            });
          });
        }
      }, {
        key: "selectGroup",
        value: function selectGroup(groupId) {
          var _this5 = this;

          this.groupId = groupId;
          console.log('groupId', groupId);
          this.step = 2;
          this.title = 'Create an Event in ...';
          this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
            _this5.group = group.payload.data();

            _this5.group.groupTags.forEach(function (element) {
              _this5.postTags.push({
                val: element,
                isChecked: false
              });
            });

            _this5.addTagControls();
          });
        }
      }]);

      return NewPollPage;
    }();

    NewPollPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NewPollPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-poll',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-poll.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-poll/new-poll.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-poll.page.scss */
      "./src/app/new-poll/new-poll.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], NewPollPage);
    /***/
  }
}]);
//# sourceMappingURL=new-poll-new-poll-module-es5.js.map