(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-event-new-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\r\n      <ion-button color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!eventForm.valid\" (click)=\"submitEventForm()\">Post</ion-button>\r\n    </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content  class=\"forms-validations-content\">\r\n  <div *ngIf=\"step==1\"> \r\n    <div *ngIf=\"groups && groups.length > 0\">\r\n      <ion-list>\r\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n              <b>{{group.name}}</b><br/>\r\n              {{group.description}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"step==2\">\r\n  <form class=\"validations-form\" [formGroup]=\"eventForm\" (ngSubmit)=\"submitEventForm()\">\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-list-header class=\"header\">\r\n        posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\r\n      </ion-list-header>\r\n      <ion-item class=\"input-item\">\r\n        <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Event Date:</ion-label>\r\n        <ion-datetime formControlName=\"eventDate\" value=\"{minEventYear}-{minEventMonth}-{minEventDay}\" [min]=\"minDate\" [max]=\"maxEventYear\"\r\n        [dayShortNames]=\"customDayShortNames\"\r\n        displayFormat=\"DDD. MMM DD, YYYY\"\r\n        monthShortNames=\"January, February, March, April, May, June, July, August, September, October, November, December\"></ion-datetime>\r\n        </ion-item>\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Event Time:</ion-label>\r\n        <ion-datetime  formControlName=\"eventTime\" displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\r\n      </ion-item>\r\n      <ion-item class=\"input-item\">\r\n        <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the event\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item class=\"input-item\">\r\n        <ion-input type=\"text\" formControlName=\"weblink\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\r\n      </ion-item> \r\n      <ion-item class=\"input-item\">\r\n        <ion-textarea rows=\"6\"   [(ngModel)]=\"linkDescription\" name=\"linkDescription\" formControlName=\"description\" clearInput placeholder=\"Enter the details of the event\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>I'll be attending the Event.</ion-label>\r\n        <ion-checkbox formControlName=\"eventAttending\" checked=\"false\"  color=\"primary\"></ion-checkbox>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-list-header>\r\n        <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n      </ion-list-header>\r\n \r\n      <div class=\"reviews-wrapper\">\r\n      <ion-row>\r\n        <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of eventForm.controls.tags.controls; let i = index\">\r\n          <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n          <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n          <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n        </div>\r\n      </ion-row>\r\n\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validations.tags\">\r\n          <div class=\"error-message\" *ngIf=\"eventForm.get('tags').hasError(validation.type) && (eventForm.get('tags').dirty || eventForm.get('tags').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n      </div>\r\n    </ion-list>\r\n\r\n    <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!eventForm.valid\">Submit</ion-button> -->\r\n\r\n  </form>\r\n  </div>\r\n\r\n</ion-content>\r\n<ion-footer *ngIf=\"step==2\">\r\n  <ion-toolbar>\r\n    <ion-row lines=\"none\" class=\"uploads item-text-wrap\" *ngIf=\"postMedia && postMedia.length > 0\">\r\n      <div class=\"img-wrap\" *ngFor=\"let media of postMedia\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <span class=\"close\" (click)=\"removeMedia(media)\">&times;</span>\r\n            <ion-img [src]=\"media\">\r\n              <!-- <ion-buttons class=\"\"> \r\n                <ion-button (click)=\"removeMedia()\">\r\n                  <ion-icon size=\"small\" name=\"close-circle-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-buttons> -->\r\n            </ion-img>\r\n          </ion-thumbnail>\r\n        </div>\r\n    </ion-row>\r\n    <ion-item lines=\"none\">\r\n      <ion-button class=\"ion-text-capitalize\" fill=\"clear\" (click)=\"attach()\">\r\n        <ion-icon class=\"ion-padding-end\" size=\"large\" name=\"camera-outline\"></ion-icon>\r\n        Add photo or video\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/new-event/new-event.module.ts":
/*!***********************************************!*\
  !*** ./src/app/new-event/new-event.module.ts ***!
  \***********************************************/
/*! exports provided: NewEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventPageModule", function() { return NewEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");
/* harmony import */ var _new_event_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-event.page */ "./src/app/new-event/new-event.page.ts");








const routes = [
    {
        path: '',
        component: _new_event_page__WEBPACK_IMPORTED_MODULE_7__["NewEventPage"]
    }
];
let NewEventPageModule = class NewEventPageModule {
};
NewEventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_new_event_page__WEBPACK_IMPORTED_MODULE_7__["NewEventPage"]]
    })
], NewEventPageModule);



/***/ }),

/***/ "./src/app/new-event/new-event.page.scss":
/*!***********************************************!*\
  !*** ./src/app/new-event/new-event.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWV2ZW50L0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXG5ldy1ldmVudFxcbmV3LWV2ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LWV2ZW50L25ldy1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtBQ0NGOztBREdHO0VBQ0MsMkNBQUE7QUNBSjs7QURFSTtFQUNFLDJFQUFBO0FDQU47O0FERU07RUFDRSxlQUFBO0FDQVI7O0FER1E7RUFDRSx3Q0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNEVjs7QURHVTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7RUFDQSxjQUFBO0FDRFo7O0FET0k7RUFDRSwwQkFBQTtBQ0xOOztBRFNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFFFO0VBRUUsbURBQUE7RUFDUSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDUFo7O0FEUVk7RUFDRSx5QkFBQTtBQ05kOztBRFFZO0VBQ0UseUJBQUE7QUNOZDs7QURTRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDUEo7O0FEYUE7RUFDRSxXQUFBO0FDVkY7O0FEV0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNURjs7QURXQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFdBO0VBQ0UsVUFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvbmV3LWV2ZW50L25ldy1ldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xyXG59XHJcblxyXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XHJcbiAgIC52YWxpZGF0aW9ucy1mb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcblxyXG4gICAgLmlucHV0cy1saXN0IHtcclxuICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG5cclxuICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5lcnJvci1jb250YWluZXIge1xyXG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhZ3Mge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAuaXRlbS1yYXRpbmcge1xyXG4gICAgLy8gRGVmYXVsdCBiYWNrZ3JvdW5kXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjBcIl0ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzc3YztcclxuICAgICAgICAgICAgfVxyXG4gIH1cclxuICBpb24tY2hlY2tib3gge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG59XHJcbn1cclxuXHJcbi51cGxvYWRzIHtcclxuICBtYXJnaW46IDVweDtcclxuLmltZy13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmltZy13cmFwIC5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTJweDtcclxuICByaWdodDogLTdweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBwYWRkaW5nOiA1cHggMnB4IDJweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmltZy13cmFwOmhvdmVyIC5jbG9zZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG59XHJcblxyXG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbn1cblxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5oZWFkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuMzUpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNzdjO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbn1cblxuLnVwbG9hZHMge1xuICBtYXJnaW46IDVweDtcbn1cbi51cGxvYWRzIC5pbWctd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi51cGxvYWRzIC5pbWctd3JhcCAuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJweDtcbiAgcmlnaHQ6IC03cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogNXB4IDJweCAycHg7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnVwbG9hZHMgLmltZy13cmFwOmhvdmVyIC5jbG9zZSB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/new-event/new-event.page.ts":
/*!*********************************************!*\
  !*** ./src/app/new-event/new-event.page.ts ***!
  \*********************************************/
/*! exports provided: NewEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventPage", function() { return NewEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");












let NewEventPage = class NewEventPage {
    constructor(route, router, dataProvider, loadingProvider, navCtrl, http, camera, actionSheet, imageProvider) {
        this.route = route;
        this.router = router;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.navCtrl = navCtrl;
        this.http = http;
        this.camera = camera;
        this.actionSheet = actionSheet;
        this.imageProvider = imageProvider;
        this.postTags = [];
        this.step = 1;
        this.userNotifications = [];
        this.postMedia = [];
        this.validations = {
            title: [
                { type: 'required', message: 'Title is a required field.' }
            ],
            description: [
                { type: 'required', message: 'Description is a required field.' }
            ],
            eventDate: [
                { type: 'required', message: 'Please select the Event date.' }
            ],
            eventTime: [
                { type: 'required', message: 'Please select the Event time.' }
            ],
            tags: [
                { type: 'required', message: 'Please select at least one tag.' }
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
        this.eventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            eventDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            eventTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_11__["CheckboxCheckedValidator"].tagsSelected(1)),
            eventAttending: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            weblink: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        // Set min and max event dates
        const dateObj = new Date();
        this.minEventMonth = dateObj.getUTCMonth() + 1;
        this.minEventDay = dateObj.getUTCDate() + 1;
        this.minEventYear = dateObj.getUTCFullYear();
        this.maxEventYear = this.minEventYear + 1;
        this.minDate = new Date().toISOString();
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
            this.title = 'Post';
            this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
                this.group = group.payload.data();
                this.group.groupTags.forEach((element) => {
                    this.postTags.push({ val: element, isChecked: false });
                });
                this.addTagControls();
            });
        }
    }
    ngOnInit() {
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((value) => {
            this.addedByUser = {
                addedByKey: value.payload.data().userId,
                addedByUsername: value.payload.data().username,
                addedByImg: value.payload.data().img
            };
            // Initialize
            this.event = {
                addedByUser: this.addedByUser,
                date: '',
                title: '',
                postTags: [],
                groupId: '',
                groupName: '',
                type: 'event',
                data: {},
                totalReactionCount: 0,
                totalReviewCount: 0,
                postMedia: []
            };
        });
    }
    addTagControls() {
        this.postTags.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false
            this.eventForm.controls.tags.push(control);
        });
    }
    submitEventForm() {
        this.loadingProvider.show();
        // Add event info and date.
        this.event.groupId = this.groupId;
        this.event.groupName = this.group.name;
        this.event.date = new Date();
        this.event.title = this.eventForm.value.title;
        this.event.postTags = [];
        this.event.postTags = this.postTags;
        this.event.postMedia = this.postMedia;
        this.event.data = {
            message: this.eventForm.value.description,
            eventDate: this.eventForm.value.eventDate,
            eventTime: moment__WEBPACK_IMPORTED_MODULE_10__(this.eventForm.value.eventTime).format('h:mm A'),
            address: this.eventForm.value.address,
            link: this.eventForm.value.weblink
        };
        // Add event to database.
        this.dataProvider.addPost(this.event).then((success) => {
            const eventId = success.id;
            this.eventId = eventId;
            if (this.group.posts === undefined) {
                this.group.posts = [];
            }
            this.group.posts.push(this.eventId);
            // Update group data on the database.
            this.dataProvider.getGroup(this.groupId).update({
                posts: this.group.posts
            });
            // Update the Checkin data for this event
            if (this.eventForm.value.eventAttending === true) {
                const reaction = {
                    addedByUser: this.addedByUser,
                    dateCreated: new Date(),
                    reactionType: 'Checkin'
                };
                this.dataProvider.updatePostReactions(eventId, reaction);
            }
            this.loadingProvider.hide();
            this.router.navigateByUrl('tabs/tab3');
        });
    }
    linkFocusOut() {
        this.loadingProvider.show();
        const getMeta = __webpack_require__(/*! lets-get-meta */ "./node_modules/lets-get-meta/index.js");
        this.http.get(this.eventForm.value.weblink, { responseType: 'text' })
            .subscribe(res => {
            const o = getMeta(res);
            this.linkDescription = o.description;
            this.loadingProvider.hide();
        });
        // const o = getMeta("<meta name='page' content='index'><meta property='description' content='This is the index page'>")
        // this.linkDescription = o.description;
    }
    selectGroup(groupId) {
        this.groupId = groupId;
        console.log('groupId', groupId);
        this.step = 2;
        this.title = 'Event';
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
            this.group.groupTags.forEach((element) => {
                this.postTags.push({ val: element, isChecked: false });
            });
            this.addTagControls();
        });
    }
    attach() {
        this.actionSheet.create({
            header: 'Attach images',
            buttons: [{
                    text: 'Camera',
                    handler: () => {
                        this.imageProvider.uploadPostPhoto(this.camera.PictureSourceType.CAMERA).then((url) => {
                            this.postMedia.push(url);
                            console.log(url);
                        });
                    }
                }, {
                    text: 'Photo Library',
                    handler: () => {
                        this.imageProvider.getImages().then((url) => {
                            this.postMedia = this.postMedia.concat(url);
                            console.log(url);
                        });
                    }
                },
                {
                    text: 'Video',
                    handler: () => {
                        this.imageProvider.uploadPostVideo().then(url => {
                            this.postMedia(url);
                            console.log(url);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancelled');
                    }
                }]
        }).then(r => r.present());
    }
    removeMedia(media) {
        this.postMedia.splice();
        this.postMedia = this.postMedia.filter(x => x !== media);
        console.log('this.postMedia:', this.postMedia);
        this.imageProvider.deletePostPhoto(media);
    }
};
NewEventPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] }
];
NewEventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-event.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-event.page.scss */ "./src/app/new-event/new-event.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]])
], NewEventPage);



/***/ })

}]);
//# sourceMappingURL=new-event-new-event-module-es2015.js.map