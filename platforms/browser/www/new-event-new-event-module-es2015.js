(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-event-new-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content  class=\"forms-validations-content\">\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\">\n      <ion-list lines=\"none\">\n        <ion-item *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n            <ion-text>\n              <h2>{{group.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>created {{group.dateCreated.toDate() | DateFormat}}</p>\n            </ion-text>\n          </ion-label>\n          <ion-badge slot=\"end\" color=\"danger\" *ngIf=\"group.unreadMessagesCount > 0\">{{group.unreadMessagesCount}}\n          </ion-badge>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step==2\">\n  <form class=\"validations-form\" [formGroup]=\"eventForm\" (ngSubmit)=\"submitEventForm()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-list-header>\n        <ion-label class=\"header-title\">{{group.name}}</ion-label>\n      </ion-list-header>\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Title</ion-label>\n        <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.title\">\n          <div class=\"error-message\" *ngIf=\"eventForm.get('title').hasError(validation.type) && (eventForm.get('title').dirty || eventForm.get('title').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Event Date:</ion-label>\n        <ion-datetime formControlName=\"eventDate\" value=\"{minEventYear}-{minEventMonth}-{minEventDay}\" [min]=\"minDate\" [max]=\"maxEventYear\"\n        [dayShortNames]=\"customDayShortNames\"\n        displayFormat=\"DDD. MMM DD, YYYY\"\n        monthShortNames=\"January, February, March, April, May, June, July, August, September, October, November, December\"></ion-datetime>\n        </ion-item>\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.eventDate\">\n            <div class=\"error-message\" *ngIf=\"eventForm.get('eventDate').hasError(validation.type) && (eventForm.get('eventDate').dirty || eventForm.get('eventDate').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Event Time:</ion-label>\n        <ion-datetime  formControlName=\"eventTime\" displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.eventTime\">\n          <div class=\"error-message\" *ngIf=\"eventForm.get('eventTime').hasError(validation.type) && (eventForm.get('eventTime').dirty || eventForm.get('eventTime').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Address:</ion-label>\n        <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the event\"></ion-textarea>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.address\">\n          <div class=\"error-message\" *ngIf=\"eventForm.get('address').hasError(validation.type) && (eventForm.get('address').dirty || eventForm.get('address').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Weblink:</ion-label>\n        <ion-input type=\"text\" formControlName=\"weblink\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\n      </ion-item> \n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Description:</ion-label>\n        <ion-textarea rows=\"6\"   [(ngModel)]=\"linkDescription\" name=\"linkDescription\" formControlName=\"description\" clearInput placeholder=\"Enter the details of the event\"></ion-textarea>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.description\">\n          <div class=\"error-message\" *ngIf=\"eventForm.get('description').hasError(validation.type) && (eventForm.get('description').dirty || eventForm.get('description').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label>I'll be attending the Event.</ion-label>\n        <ion-checkbox formControlName=\"eventAttending\" checked=\"false\"  color=\"primary\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-list-header>\n        <ion-label class=\"header-title\">Select relevant tags</ion-label>\n      </ion-list-header>\n \n      <div class=\"reviews-wrapper\">\n      <ion-row>\n        <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of eventForm.controls.tags.controls; let i = index\">\n          <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n          <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n          <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n        </div>\n      </ion-row>\n\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.tags\">\n          <div class=\"error-message\" *ngIf=\"eventForm.get('tags').hasError(validation.type) && (eventForm.get('tags').dirty || eventForm.get('tags').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      </div>\n    </ion-list>\n\n    <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!eventForm.valid\">Submit</ion-button>\n\n  </form>\n  </div>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.forms-validations-content {\n  --background: var(--page-background);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header .header-title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Helvetica-Bold\", \"Roboto-Medium\", \"Segoe UI Semibold\", \"Arial-Bold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .terms-item {\n  --border-width: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-primary);\n  --counter-border-color: var(--ion-color-primary);\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item .counter-value {\n  text-align: center;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9uZXctZXZlbnQvbmV3LWV2ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LWV2ZW50L25ldy1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FDQUY7O0FER0E7RUFDSSxvQ0FBQTtBQ0FKOztBREVJO0VBQ0UsMkNBQUE7QUNBTjs7QURFTTtFQUNFLDZDQUFBO0VBRUEsMkVBQUE7QUNEUjs7QURHUTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7QUNEVjs7QURHVTtFQUNFLDhJQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0RaOztBREtRO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0hWOztBRE1RO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtBQ0pWOztBRFFVO0VBQ0Usd0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDTlo7O0FEUVk7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsY0FBQTtBQ05kOztBRFlVO0VBQ0UsaUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGdEQUFBO0FDVlo7O0FEYVU7RUFDRSxrQkFBQTtBQ1haOztBRGdCTTtFQUNFLDBCQUFBO0FDZFI7O0FEaUJJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ2ZOOztBRGlCSTtFQUNFLG1EQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2ZOOztBRGdCTTtFQUNBLHlCQUFBO0FDZE47O0FEZ0JNO0VBQ0EseUJBQUE7QUNkTjs7QURrQkk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ2hCTiIsImZpbGUiOiJzcmMvYXBwL25ldy1ldmVudC9uZXctZXZlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG5cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIFxuICAgIC52YWxpZGF0aW9ucy1mb3JtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG4gIFxuICAgICAgLmlucHV0cy1saXN0IHtcbiAgICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICBcbiAgICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICBcbiAgICAgICAgICAuaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWUtTWVkaXVtXCIsIFwiSGVsdmV0aWNhIE5ldWUgTWVkaXVtXCIsIFwiSGVsdmV0aWNhLUJvbGRcIiwgXCJSb2JvdG8tTWVkaXVtXCIsIFwiU2Vnb2UgVUkgU2VtaWJvbGRcIiwgXCJBcmlhbC1Cb2xkXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgIG1hcmdpbjogMSAwIDRweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gIFxuICAgICAgICAudGVybXMtaXRlbSB7XG4gICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5lcnJvci1jb250YWluZXIge1xuICAgICAgICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgXG4gICAgICAgIC5jb3VudGVyLWl0ZW0ge1xuICAgICAgICAgIGFwcC1jb3VudGVyLWlucHV0IHtcbiAgICAgICAgICAgIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0tY291bnRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgLmNvdW50ZXItdmFsdWUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC5zdWJtaXQtYnRuIHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICB9XG4gICAgfVxuICAgIC50YWdzIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG5cbiAgICAuaXRlbS1yYXRpbmcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XG4gICAgICB9XG4gICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWNoZWNrYm94IHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICB9XG5cbiAgIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLU1lZGl1bVwiLCBcIkhlbHZldGljYSBOZXVlIE1lZGl1bVwiLCBcIkhlbHZldGljYS1Cb2xkXCIsIFwiUm9ib3RvLU1lZGl1bVwiLCBcIlNlZ29lIFVJIFNlbWlib2xkXCIsIFwiQXJpYWwtQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbjogMSAwIDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAudGVybXMtaXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmNvdW50ZXItaXRlbSBhcHAtY291bnRlci1pbnB1dCB7XG4gIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuY291bnRlci1pdGVtIC5jb3VudGVyLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuMzUpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNzdjO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbn0iXX0= */");

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
        this.postTags = [];
        this.step = 1;
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
            this.title = 'Create a Post in ...';
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
                totalReviewCount: 0
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
        const o = getMeta("<meta name='page' content='index'><meta property='description' content='This is the index page'>");
        this.linkDescription = o.description;
    }
    selectGroup(groupId) {
        this.groupId = groupId;
        console.log('groupId', groupId);
        this.step = 2;
        this.title = 'Create an Event in ...';
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
            this.group.groupTags.forEach((element) => {
                this.postTags.push({ val: element, isChecked: false });
            });
            this.addTagControls();
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