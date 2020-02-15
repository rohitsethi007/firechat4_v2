(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-poll-new-poll-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-poll/new-poll.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-poll/new-poll.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Create New Poll</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"forms-validations-content\">\r\n  <div *ngIf=\"poll\">\r\n    <form class=\"validations-form\" [formGroup]=\"pollForm\" (ngSubmit)=\"done()\">\r\n      <ion-list class=\"inputs-list\" lines=\"full\">\r\n        <ion-list-header>\r\n          <ion-label class=\"header-title\">What would you like to ask the group?</ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Title</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"name\" clearInput placeholder=\"Enter the Title\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.name\">\r\n            <div class=\"error-message\" *ngIf=\"pollForm.get('name').hasError(validation.type) && (pollForm.get('name').dirty || pollForm.get('name').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Question</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"description\" clearInput placeholder=\"What would like to ask?\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.description\">\r\n            <div class=\"error-message\" *ngIf=\"pollForm.get('description').hasError(validation.type) && (pollForm.get('description').dirty || pollForm.get('description').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Option 1</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"pollOption1\" clearInput placeholder=\"Enter the first option\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.pollOption1\">\r\n            <div class=\"error-message\" *ngIf=\"pollForm.get('pollOption1').hasError(validation.type) && (pollForm.get('pollOption1').dirty || pollForm.get('pollOption1').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        \r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Option 2</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"pollOption2\" clearInput placeholder=\"Enter the second option\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.pollOption2\">\r\n            <div class=\"error-message\" *ngIf=\"pollForm.get('pollOption2').hasError(validation.type) && (pollForm.get('pollOption2').dirty || pollForm.get('pollOption2').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Option 3</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"pollOption3\" clearInput placeholder=\"Enter the third option\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"input-item\">\r\n          <ion-label position=\"floating\">Poll Option 4</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"pollOption4\" clearInput placeholder=\"Enter the last option\"></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n \r\n      <ion-list class=\"inputs-list\" lines=\"full\">\r\n        <ion-list-header>\r\n          <ion-label class=\"header-title\">Select tags relevant to the poll</ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\r\n          <ion-item *ngFor=\"let entry of pollTags\" lines=\"none\" class=\"checkbox-tag rounded-tag\">\r\n            <ion-label class=\"tag-label\">{{entry.val}}</ion-label>\r\n            <ion-checkbox formControlName=\"pollTags\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\r\n          </ion-item>\r\n        </ion-row>\r\n      </ion-list>\r\n\r\n      <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!pollForm.valid\">Submit</ion-button>\r\n\r\n    </form>\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/new-poll/new-poll.module.ts":
/*!*********************************************!*\
  !*** ./src/app/new-poll/new-poll.module.ts ***!
  \*********************************************/
/*! exports provided: NewPollPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPollPageModule", function() { return NewPollPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_poll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-poll.page */ "./src/app/new-poll/new-poll.page.ts");







const routes = [
    {
        path: '',
        component: _new_poll_page__WEBPACK_IMPORTED_MODULE_6__["NewPollPage"]
    }
];
let NewPollPageModule = class NewPollPageModule {
};
NewPollPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_new_poll_page__WEBPACK_IMPORTED_MODULE_6__["NewPollPage"]]
    })
], NewPollPageModule);



/***/ }),

/***/ "./src/app/new-poll/new-poll.page.scss":
/*!*********************************************!*\
  !*** ./src/app/new-poll/new-poll.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.forms-validations-content {\n  --background: var(--page-background);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header .header-title {\n  text-transform: uppercase;\n  font-size: 16px;\n  color: var(--ion-color-secondary);\n}\n\n.forms-validations-content .validations-form .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .terms-item {\n  --border-width: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-primary);\n  --counter-border-color: var(--ion-color-primary);\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item .counter-value {\n  text-align: center;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.forms-validations-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.forms-validations-content .checkbox-tags.square-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.forms-validations-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.forms-validations-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.forms-validations-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-light-contrast);\n  --checkbox-tag-background: var(--ion-color-light-shade);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n::ng-deep .select-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: 16px;\n}\n\n::ng-deep .select-alert .alert-head {\n  padding-top: calc((var(--select-alert-margin) / 4) * 3);\n  padding-bottom: calc((var(--select-alert-margin) / 4) * 3);\n  -webkit-padding-start: var(--select-alert-margin);\n          padding-inline-start: var(--select-alert-margin);\n  -webkit-padding-end: var(--select-alert-margin);\n          padding-inline-end: var(--select-alert-margin);\n}\n\n::ng-deep .select-alert .alert-title {\n  color: var(--select-alert-color);\n}\n\n::ng-deep .select-alert .alert-head,\n::ng-deep .select-alert .alert-message {\n  background-color: var(--select-alert-background);\n}\n\n::ng-deep .select-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n  margin: 0px;\n}\n\n::ng-deep .select-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n::ng-deep .select-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n::ng-deep .select-alert .alert-message {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXBvbGwvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcbmV3LXBvbGxcXG5ldy1wb2xsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LXBvbGwvbmV3LXBvbGwucGFnZS5zY3NzIiwic3JjL2FwcC9uZXctcG9sbC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxjaGVja2JveC10YWcuc2NzcyIsInNyYy9hcHAvbmV3LXBvbGwvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXHRoZW1lXFxtaXhpbnNcXGlucHV0c1xcc2VsZWN0LWFsZXJ0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FDSkY7O0FEUUE7RUFDRSxvQ0FBQTtBQ0xGOztBRE9FO0VBQ0UsMkNBQUE7QUNMSjs7QURPSTtFQUNFLDZDQUFBO0VBRUEsMkVBQUE7QUNOTjs7QURRTTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7QUNOUjs7QURRUTtFQUNFLHlCQUFBO0VBQ0YsZUFBQTtFQUNBLGlDQUFBO0FDTlI7O0FEVU07RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNSUjs7QURXTTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUNUUjs7QURhUTtFQUNFLHdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1hWOztBRGFVO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUNYWjs7QURpQlE7RUFDRSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0RBQUE7QUNmVjs7QURrQlE7RUFDRSxrQkFBQTtBQ2hCVjs7QURxQkk7RUFDRSwwQkFBQTtBQ25CTjs7QUR1QkU7RUFDRSx3RkFBQTtFRTNFRiwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtBRHVERjs7QUNyREM7RUFFQyxvQkFBQTtFQUNFLHdCQUFBO0VBQ0YsMEJBQUE7RUFDQSxxREFBQTtFQUNFLDJDQUFBO0FEc0RKOztBQ3BESTtFQUNELHVCQUFBO0FEc0RIOztBQ25ERTtFQUNJLDREQUFBO0VBQ0Esa0RBQUE7QURxRE47O0FDbERJO0VBQ0UsWUFBQTtBRG9ETjs7QUNsRE07RUFFRSxVQUFBO0FEbURSOztBQy9DRTtFQUNDLFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEaUROOztBQzlDRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUQ4Q0g7O0FEYkE7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDZUY7O0FEWEE7RUFDRSx3Q0FBQTtBQ2FGOztBRFhFO0VBQ0UsNkNBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsNERBQUE7QUNhSjs7QURSQTtFQUNNLHdDQUFBO0FDVU47O0FEUkU7RUFDRSxxREFBQTtFQUNBLHVEQUFBO0VBQ0Esc0RBQUE7RUFDQSw0REFBQTtBQ1VKOztBREZBO0VHaEhFLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFSGtIQSwrQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsMkJBQUE7QUNLRjs7QUV2SEU7RUFDRSx1REFBQTtFQUNBLDBEQUFBO0VBQ0EsaURBQUE7VUFBQSxnREFBQTtFQUNBLCtDQUFBO1VBQUEsOENBQUE7QUZ5SEo7O0FFdEhFO0VBQ0UsZ0NBQUE7QUZ3SEo7O0FFckhFOztFQUVFLGdEQUFBO0FGdUhKOztBRWxISTtFQUNFLFdBQUE7QUZvSE47O0FFOUdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FGZ0hOOztBRTdHSTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7QUY2R047O0FEL0JFO0VBQ0UsYUFBQTtBQ2lDSiIsImZpbGUiOiJzcmMvYXBwL25ldy1wb2xsL25ldy1wb2xsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC1hbGVydFwiO1xyXG5AaW1wb3J0IFwiLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcclxuXHJcbi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcbn1cclxuXHJcbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAudmFsaWRhdGlvbnMtZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG5cclxuICAgIC5pbnB1dHMtbGlzdCB7XHJcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAgIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcclxuXHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXJtcy1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcdH1cclxuXHJcbiAgICAgIC5jb3VudGVyLWl0ZW0ge1xyXG4gICAgICAgIGFwcC1jb3VudGVyLWlucHV0IHtcclxuICAgICAgICAgIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIC0tY291bnRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvdW50ZXItdmFsdWUge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hlY2tib3gtdGFncyB7XHJcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xyXG5cclxuICAgIEBpbmNsdWRlIGNoZWNrYm94LXRhZygpO1xyXG5cclxuLmNoZWNrYm94LXRhZyB7XHJcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xyXG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xyXG59XHJcblxyXG4vLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcclxuJi5zcXVhcmUtY2hlY2tib3gtdGFncyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpOyBcclxuICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4mLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblxyXG4gIC5jaGVja2JveC10YWcge1xyXG4gICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XHJcbiAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIH1cclxufVxyXG59XHJcbn1cclxuXHJcbi8vIEFsZXJ0cyBhbmQgaW4gZ2VuZXJhbCBhbGwgb3ZlcmxheXMgYXJlIGF0dGFjaGVkIHRvIHRoZSBib2R5IG9yIGlvbi1hcHAgZGlyZWN0bHlcclxuLy8gV2UgbmVlZCB0byB1c2UgOjpuZy1kZWVwIHRvIGFjY2VzcyBpdCBmcm9tIGhlcmVcclxuOjpuZy1kZWVwIC5zZWxlY3QtYWxlcnQge1xyXG4gIEBpbmNsdWRlIHNlbGVjdC1hbGVydCgpO1xyXG5cclxuICAvLyBWYXJpYWJsZXMgc2hvdWxkIGJlIGluIGEgZGVlcGVyIHNlbGVjdG9yIG9yIGFmdGVyIHRoZSBtaXhpbiBpbmNsdWRlIHRvIG92ZXJyaWRlIGRlZmF1bHQgdmFsdWVzXHJcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogMTZweDtcclxuXHJcbiAgLmFsZXJ0LW1lc3NhZ2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAudGVybXMtaXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmNvdW50ZXItaXRlbSBhcHAtY291bnRlci1pbnB1dCB7XG4gIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuY291bnRlci1pdGVtIC5jb3VudGVyLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC5jaGVja2JveC10YWdzIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Muc3F1YXJlLWNoZWNrYm94LXRhZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Muc3F1YXJlLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbjo6bmctZGVlcCAuc2VsZWN0LWFsZXJ0IHtcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6ICMwMDA7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogMTZweDtcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1zZWxlY3QtYWxlcnQtbWFyZ2luOiAxNnB4O1xufVxuOjpuZy1kZWVwIC5zZWxlY3QtYWxlcnQgLmFsZXJ0LWhlYWQge1xuICBwYWRkaW5nLXRvcDogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG59XG46Om5nLWRlZXAgLnNlbGVjdC1hbGVydCAuYWxlcnQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tc2VsZWN0LWFsZXJ0LWNvbG9yKTtcbn1cbjo6bmctZGVlcCAuc2VsZWN0LWFsZXJ0IC5hbGVydC1oZWFkLFxuOjpuZy1kZWVwIC5zZWxlY3QtYWxlcnQgLmFsZXJ0LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZCk7XG59XG46Om5nLWRlZXAgLnNlbGVjdC1hbGVydCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xufVxuOjpuZy1kZWVwIC5zZWxlY3QtYWxlcnQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjo6bmctZGVlcCAuc2VsZWN0LWFsZXJ0IC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjllbTtcbiAgLS1wYWRkaW5nLWVuZDogMC45ZW07XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGhlaWdodDogMi4xZW07XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbjo6bmctZGVlcCAuc2VsZWN0LWFsZXJ0IC5hbGVydC1tZXNzYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iLCJAbWl4aW4gY2hlY2tib3gtdGFnKCkge1xyXG4gIC8vIERlZmF1bHQgdmFsdWVzXHJcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XHJcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcclxuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XHJcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XHJcblxyXG5cdC5jaGVja2JveC10YWcge1xyXG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcclxuICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XHJcblxyXG4gICAgJi5yb3VuZGVkLXRhZyB7XHJcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcclxuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xyXG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcclxuXHRcdH1cclxuXHJcbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcblxyXG4gICAgICAudGFnLWxhYmVsIHtcclxuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRcdC50YWctbGFiZWwge1xyXG5cdFx0XHRtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRpb24tY2hlY2tib3gge1xyXG5cdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLmNoZWNrYm94LWljb25cclxuXHRcdFx0d2lkdGg6IDBweDtcclxuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcclxuXHRcdFx0aGVpZ2h0OiAwcHg7XHJcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxyXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJAbWl4aW4gc2VsZWN0LWFsZXJ0KCkge1xyXG4gIC8vIERlZmF1bHQgdmFsdWVzXHJcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6ICMwMDA7XHJcbiAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogI0ZGRjtcclxuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IDE2cHg7XHJcblxyXG4gIC5hbGVydC1oZWFkIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcclxuICB9XHJcblxyXG4gIC5hbGVydC10aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0LWFsZXJ0LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIC5hbGVydC1oZWFkLFxyXG4gIC5hbGVydC1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kKTtcclxuICB9XHJcblxyXG4gIC8vIGlPUyBzdHlsZXNcclxuICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgIC5hbGVydC10aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTWF0ZXJpYWwgc3R5bGVzXHJcbiAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcclxuICAgIC5hbGVydC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuXHJcbiAgICAuYWxlcnQtYnV0dG9uIHtcclxuICAgICAgLy8gVmFsdWVzIHRha2VuIGZyb20gSW9uaWMgc21hbGwgYnV0dG9uIHByZXNldFxyXG4gICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDAuOWVtO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcclxuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuXHJcbiAgICAgIGhlaWdodDogMi4xZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/new-poll/new-poll.page.ts":
/*!*******************************************!*\
  !*** ./src/app/new-poll/new-poll.page.ts ***!
  \*******************************************/
/*! exports provided: NewPollPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPollPage", function() { return NewPollPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");







let NewPollPage = class NewPollPage {
    constructor(dataProvider, loadingProvider, route, router, navCtrl) {
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.validations = {
            name: [
                { type: 'required', message: 'Title is required.' },
                { type: 'minlength', message: 'Title must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Title cannot be more than 25 characters long.' }
            ],
            description: [
                { type: 'required', message: 'Poll Question is required.' },
                { type: 'minlength', message: 'Poll Question must be at least 10 characters long.' },
                { type: 'maxlength', message: 'Poll Question cannot be more than 50 characters long.' }
            ],
            pollOption1: [
                { type: 'required', message: 'Poll Question is required.' },
                { type: 'minlength', message: 'Poll Question must be at least 10 characters long.' },
                { type: 'maxlength', message: 'Poll Question cannot be more than 50 characters long.' }
            ],
            pollOption2: [
                { type: 'required', message: 'Poll Question is required.' },
                { type: 'minlength', message: 'Poll Question must be at least 10 characters long.' },
                { type: 'maxlength', message: 'Poll Question cannot be more than 50 characters long.' }
            ]
        };
        this.groupId = this.route.snapshot.params.id;
        console.log('Group Id: ' + this.groupId);
        // Get group information
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.val();
            console.log(this.group);
            this.pollTags = [];
            this.group.groupTags.forEach(element => {
                this.pollTags.push({ val: element, isChecked: false });
            });
            this.loadingProvider.hide();
        });
    }
    ngOnInit() {
        // Initialize
        this.poll = {
            name: '',
            description: '',
            groupId: this.groupId,
            dateCreated: '',
            createdBy: this.dataProvider.getCurrentUserId(),
            dateEnding: '',
            pollOptions: [],
        };
        this.pollForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            pollOption1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            pollOption2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            pollOption3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            pollOption4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            pollTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    // Proceed with group creation.
    done() {
        this.loadingProvider.show();
        // Add poll info and date.
        this.poll.dateCreated = new Date().toString();
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth(); // January is 0!
        const yyyy = today.getFullYear();
        const date = new Date(yyyy, mm, dd + 2);
        this.poll.dateEnding = date.toString();
        this.poll.name = this.pollForm.value['name'];
        this.poll.description = this.pollForm.value['description'];
        if (this.pollForm.value['pollOption1'] != null
            && this.pollForm.value['pollOption1'].trim() != '') {
            this.poll.pollOptions.push({
                name: this.pollForm.value['pollOption1'].trim()
            });
        }
        if (this.pollForm.value['pollOption2'] != null
            && this.pollForm.value['pollOption2'].trim() != '') {
            this.poll.pollOptions.push({
                name: this.pollForm.value['pollOption2'].trim()
            });
        }
        if (this.pollForm.value['pollOption3'] != null
            && this.pollForm.value['pollOption3'].trim() != '') {
            this.poll.pollOptions.push({
                name: this.pollForm.value['pollOption3'].trim()
            });
        }
        if (this.pollForm.value['pollOption4'] != null
            && this.pollForm.value['pollOption4'].trim() != '') {
            this.poll.pollOptions.push({
                name: this.pollForm.value['pollOption4'].trim()
            });
        }
        this.poll.pollTags = [];
        this.poll.pollTags = this.pollTags;
        // Add poll to database.
        this.dataProvider.addPoll(this.poll).then((success) => {
            const pollId = success.key;
            // Add system message that group is created.
            // Add group poll details
            this.pollId = pollId;
            this.group.polls.push(this.pollId);
            const uid = this.dataProvider.getCurrentUserId();
            // Add system message that the members are added to the group.
            this.group.messages.push({
                date: new Date().toString(),
                sender: uid,
                type: 'system',
                message: 'A new Poll has been added to the group : ' + this.poll.name,
                icon: 'md-contacts'
            });
            // Update group data on the database.
            this.dataProvider.getGroup(this.groupId).update({
                polls: this.group.polls,
                messages: this.group.messages
            }).then(() => {
                // Back.
                this.loadingProvider.hide();
                this.navCtrl.back();
            });
        });
    }
};
NewPollPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
NewPollPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-poll',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-poll.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-poll/new-poll.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-poll.page.scss */ "./src/app/new-poll/new-poll.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], NewPollPage);



/***/ })

}]);
//# sourceMappingURL=new-poll-new-poll-module-es2015.js.map