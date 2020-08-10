(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-event-new-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Add an Event</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content  class=\"forms-validations-content\">\r\n  <form class=\"validations-form\" [formGroup]=\"eventForm\" (ngSubmit)=\"submitEventForm()\">\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-list-header>\r\n        <ion-label class=\"header-title\">Enter the details of the Event..</ion-label>\r\n      </ion-list-header>\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Title</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validations.title\">\r\n          <div class=\"error-message\" *ngIf=\"eventForm.get('title').hasError(validation.type) && (eventForm.get('title').dirty || eventForm.get('title').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Event Date:</ion-label>\r\n        <ion-datetime formControlName=\"eventDate\" value=\"{minEventYear}-{minEventMonth}-{minEventDay}\" [min]=\"minDate\" [max]=\"maxEventYear\"\r\n        [dayShortNames]=\"customDayShortNames\"\r\n        displayFormat=\"DDD. MMM DD, YYYY\"\r\n        monthShortNames=\"January, February, March, April, May, June, July, August, September, October, November, December\"></ion-datetime>\r\n        </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.eventDate\">\r\n            <div class=\"error-message\" *ngIf=\"eventForm.get('eventDate').hasError(validation.type) && (eventForm.get('eventDate').dirty || eventForm.get('eventDate').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Event Time:</ion-label>\r\n        <ion-datetime  formControlName=\"eventTime\" displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validations.eventTime\">\r\n          <div class=\"error-message\" *ngIf=\"eventForm.get('eventTime').hasError(validation.type) && (eventForm.get('eventTime').dirty || eventForm.get('eventTime').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Address:</ion-label>\r\n        <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the event\"></ion-textarea>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validations.address\">\r\n          <div class=\"error-message\" *ngIf=\"eventForm.get('address').hasError(validation.type) && (eventForm.get('address').dirty || eventForm.get('address').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Weblink:</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"weblink\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\r\n      </ion-item> \r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Description:</ion-label>\r\n        <ion-textarea rows=\"6\"   [(ngModel)]=\"linkDescription\" name=\"linkDescription\" formControlName=\"description\" clearInput placeholder=\"Enter the details of the event\"></ion-textarea>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validations.description\">\r\n          <div class=\"error-message\" *ngIf=\"eventForm.get('description').hasError(validation.type) && (eventForm.get('description').dirty || eventForm.get('description').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n      <ion-item>\r\n        <ion-label>I'll be attending the Event.</ion-label>\r\n        <ion-checkbox formControlName=\"eventAttending\" checked=\"false\"  color=\"primary\"></ion-checkbox>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-list-header>\r\n        <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n      </ion-list-header>\r\n \r\n      <div class=\"reviews-wrapper\">\r\n      <ion-row>\r\n        <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of eventForm.controls.tags.controls; let i = index\">\r\n          <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n          <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n          <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n        </div>\r\n      </ion-row>\r\n\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validations.tags\">\r\n          <div class=\"error-message\" *ngIf=\"eventForm.get('tags').hasError(validation.type) && (eventForm.get('tags').dirty || eventForm.get('tags').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n      </div>\r\n    </ion-list>\r\n\r\n    <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!eventForm.valid\">Submit</ion-button>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n");

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
/* harmony import */ var _new_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-event.page */ "./src/app/new-event/new-event.page.ts");







const routes = [
    {
        path: '',
        component: _new_event_page__WEBPACK_IMPORTED_MODULE_6__["NewEventPage"]
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_new_event_page__WEBPACK_IMPORTED_MODULE_6__["NewEventPage"]]
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.forms-validations-content {\n  --background: var(--page-background);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header .header-title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Helvetica-Bold\", \"Roboto-Medium\", \"Segoe UI Semibold\", \"Arial-Bold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .terms-item {\n  --border-width: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-primary);\n  --counter-border-color: var(--ion-color-primary);\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item .counter-value {\n  text-align: center;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWV2ZW50L0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXG5ldy1ldmVudFxcbmV3LWV2ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LWV2ZW50L25ldy1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FDQUY7O0FER0E7RUFDSSxvQ0FBQTtBQ0FKOztBREVJO0VBQ0UsMkNBQUE7QUNBTjs7QURFTTtFQUNFLDZDQUFBO0VBRUEsMkVBQUE7QUNEUjs7QURHUTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7QUNEVjs7QURHVTtFQUNFLDhJQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0RaOztBREtRO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0hWOztBRE1RO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtBQ0pWOztBRFFVO0VBQ0Usd0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDTlo7O0FEUVk7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsY0FBQTtBQ05kOztBRFlVO0VBQ0UsaUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGdEQUFBO0FDVlo7O0FEYVU7RUFDRSxrQkFBQTtBQ1haOztBRGdCTTtFQUNFLDBCQUFBO0FDZFI7O0FEaUJJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ2ZOOztBRGlCSTtFQUNFLG1EQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2ZOOztBRGdCTTtFQUNBLHlCQUFBO0FDZE47O0FEZ0JNO0VBQ0EseUJBQUE7QUNkTjs7QURrQkk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ2hCTiIsImZpbGUiOiJzcmMvYXBwL25ldy1ldmVudC9uZXctZXZlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcbn1cclxuXHJcbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICBcclxuICAgIC52YWxpZGF0aW9ucy1mb3JtIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuICBcclxuICAgICAgLmlucHV0cy1saXN0IHtcclxuICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgXHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG4gIFxyXG4gICAgICAgIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xyXG4gIFxyXG4gICAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWUtTWVkaXVtXCIsIFwiSGVsdmV0aWNhIE5ldWUgTWVkaXVtXCIsIFwiSGVsdmV0aWNhLUJvbGRcIiwgXCJSb2JvdG8tTWVkaXVtXCIsIFwiU2Vnb2UgVUkgU2VtaWJvbGRcIiwgXCJBcmlhbC1Cb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxIDAgNHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcclxuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnRlcm1zLWl0ZW0ge1xyXG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIFxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLmNvdW50ZXItaXRlbSB7XHJcbiAgICAgICAgICBhcHAtY291bnRlci1pbnB1dCB7XHJcbiAgICAgICAgICAgIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5jb3VudGVyLXZhbHVlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWdzIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICAgIC5pdGVtLXJhdGluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgJltyYXRpbmdCYXNlPVwiMFwiXSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XHJcbiAgICAgIH1cclxuICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLU1lZGl1bVwiLCBcIkhlbHZldGljYSBOZXVlIE1lZGl1bVwiLCBcIkhlbHZldGljYS1Cb2xkXCIsIFwiUm9ib3RvLU1lZGl1bVwiLCBcIlNlZ29lIFVJIFNlbWlib2xkXCIsIFwiQXJpYWwtQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbjogMSAwIDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAudGVybXMtaXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmNvdW50ZXItaXRlbSBhcHAtY291bnRlci1pbnB1dCB7XG4gIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuY291bnRlci1pdGVtIC5jb3VudGVyLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuMzUpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNzdjO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbn0iXX0= */");

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
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");










let NewEventPage = class NewEventPage {
    constructor(route, router, dataProvider, loadingProvider, navCtrl, http) {
        this.route = route;
        this.router = router;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.navCtrl = navCtrl;
        this.http = http;
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
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
            this.postTags = [];
            this.group.groupTags.forEach((element) => {
                this.postTags.push({ val: element, isChecked: false });
            });
            this.addTagControls();
            this.loadingProvider.hide();
        });
        this.eventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            eventDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            eventTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_9__["CheckboxCheckedValidator"].tagsSelected(1)),
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
                type: 'event',
                data: {},
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
        this.event.date = new Date().toString();
        this.event.title = this.eventForm.value.title;
        this.event.postTags = [];
        this.event.postTags = this.postTags;
        this.event.data = {
            message: this.eventForm.value.description,
            eventDate: this.eventForm.value.eventDate,
            eventTime: moment__WEBPACK_IMPORTED_MODULE_8__(this.eventForm.value.eventTime).format('h:mm A'),
            address: this.eventForm.value.address,
            link: this.eventForm.value.weblink
        };
        // Add event to database.
        console.log('this.event:', this.event);
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
                    dateCreated: new Date().toString(),
                    reactionType: 'Checkin'
                };
                this.dataProvider.addFirstPostReactions(eventId, reaction);
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
    }
};
NewEventPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
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
        _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
], NewEventPage);



/***/ })

}]);
//# sourceMappingURL=new-event-new-event-module-es2015.js.map