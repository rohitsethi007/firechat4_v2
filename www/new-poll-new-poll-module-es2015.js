(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-poll-new-poll-module"],{

/***/ "EoSc":
/*!*********************************************!*\
  !*** ./src/app/new-poll/new-poll.module.ts ***!
  \*********************************************/
/*! exports provided: NewPollPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPollPageModule", function() { return NewPollPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_poll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-poll.page */ "j8EI");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "vxGH");








const routes = [
    {
        path: '',
        component: _new_poll_page__WEBPACK_IMPORTED_MODULE_6__["NewPollPage"]
    }
];
let NewPollPageModule = class NewPollPageModule {
};
NewPollPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_new_poll_page__WEBPACK_IMPORTED_MODULE_6__["NewPollPage"]]
    })
], NewPollPageModule);



/***/ }),

/***/ "GELP":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-poll/new-poll.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!pollForm.valid\" (click)=\"submitPollForm()\">Post</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content class=\"forms-validations-content\">\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\">\n      <ion-list>\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n              <b>{{group.name}}</b><br/>\n              {{group.description}}\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step==2\">\n    <form class=\"validations-form\" [formGroup]=\"pollForm\" (ngSubmit)=\"submitPollForm()\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n        <ion-list-header class=\"header\">\n          posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n        </ion-list-header>\n        <ion-item class=\"input-item\">\n          <ion-input type=\"text\" formControlName=\"description\" clearInput placeholder=\"What would like to ask?\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input type=\"text\" formControlName=\"pollOption1\" clearInput placeholder=\"Enter the first option\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input type=\"text\" formControlName=\"pollOption2\" clearInput placeholder=\"Enter the second option\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input type=\"text\" formControlName=\"pollOption3\" clearInput placeholder=\"This is optional\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input type=\"text\" formControlName=\"pollOption4\" clearInput placeholder=\"This is optional\"></ion-input>\n        </ion-item>\n      </ion-list>\n \n      <ion-list class=\"inputs-list\" lines=\"full\">\n        <ion-list-header>\n          <ion-label class=\"header-title\">Select relevant tags</ion-label>\n        </ion-list-header>\n  \n        <div class=\"reviews-wrapper\">\n        <ion-row>\n          <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of pollForm.controls.tags.controls; let i = index\">\n            <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n            <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n            <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n          </div>\n        </ion-row>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.tags\">\n            <div class=\"error-message\" *ngIf=\"pollForm.get('tags').hasError(validation.type) && (pollForm.get('tags').dirty || pollForm.get('tags').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n        </div>\n      </ion-list>\n      <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!pollForm.valid\">Submit</ion-button> -->\n  </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "Thc8":
/*!*********************************************!*\
  !*** ./src/app/new-poll/new-poll.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXBvbGwvbmV3LXBvbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7QUFDRjs7QUFHRztFQUNDLDJDQUFBO0FBQUo7O0FBRUk7RUFDRSwyRUFBQTtBQUFOOztBQUVNO0VBQ0UsZUFBQTtBQUFSOztBQUdRO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFEVjs7QUFHVTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7RUFDQSxjQUFBO0FBRFo7O0FBT0k7RUFDRSwwQkFBQTtBQUxOOztBQVNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVFFO0VBRUUsbURBQUE7RUFDUSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUFo7O0FBUVk7RUFDRSx5QkFBQTtBQU5kOztBQVFZO0VBQ0UseUJBQUE7QUFOZDs7QUFTRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBUEo7O0FBYUE7RUFDRSxXQUFBO0FBVkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFURjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVRGOztBQVdBO0VBQ0UsVUFBQTtBQVRGIiwiZmlsZSI6InNyYy9hcHAvbmV3LXBvbGwvbmV3LXBvbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG59XG5cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IHtcbiAgIC52YWxpZGF0aW9ucy1mb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLmlucHV0cy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5lcnJvci1jb250YWluZXIge1xuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN1Ym1pdC1idG4ge1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuICB9XG5cbiAgLnRhZ3Mge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAuaXRlbS1yYXRpbmcge1xuICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMFwiXSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzc3YztcbiAgICAgICAgICAgIH1cbiAgfVxuICBpb24tY2hlY2tib3gge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG59XG59XG5cbi51cGxvYWRzIHtcbiAgbWFyZ2luOiA1cHg7XG4uaW1nLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaW1nLXdyYXAgLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIHJpZ2h0OiAtN3B4O1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDVweCAycHggMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pbWctd3JhcDpob3ZlciAuY2xvc2Uge1xuICBvcGFjaXR5OiAxO1xufVxufVxuXG4iXX0= */");

/***/ }),

/***/ "j8EI":
/*!*******************************************!*\
  !*** ./src/app/new-poll/new-poll.page.ts ***!
  \*******************************************/
/*! exports provided: NewPollPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPollPage", function() { return NewPollPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_poll_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-poll.page.html */ "GELP");
/* harmony import */ var _new_poll_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-poll.page.scss */ "Thc8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validators/checkbox-checked.validator */ "ypRl");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");











let NewPollPage = class NewPollPage {
    constructor(dataProvider, loadingProvider, route, router, firestore) {
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.route = route;
        this.router = router;
        this.firestore = firestore;
        this.postTags = [];
        this.step = 1;
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
        this.pollForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                // Validators.minLength(10),
                // Validators.maxLength(50),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            pollOption1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                // Validators.minLength(1),
                // Validators.maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            pollOption2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                // Validators.minLength(1),
                // Validators.maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            pollOption3: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            pollOption4: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__["CheckboxCheckedValidator"].tagsSelected(1))
        });
    }
    ionViewDidEnter() { }
    ngOnInit() {
        // Initialize
        this.dataProvider.getCurrentUser().then((u) => {
            u.snapshotChanges().subscribe((value) => {
                this.user = value.payload.data();
                this.addedByUser = {
                    addedByKey: value.payload.data().userId,
                    addedByUsername: value.payload.data().username,
                    addedByImg: value.payload.data().img
                };
                this.poll = {
                    addedByUser: this.addedByUser,
                    date: '',
                    title: '',
                    postTags: [],
                    groupId: '',
                    groupName: '',
                    type: 'poll',
                    data: {},
                    totalReactionCount: 0,
                    totalReviewCount: 0,
                    totalPollCount: 0
                };
                if (this.step === 1) {
                    this.title = 'Select a group ...';
                    // Get User Groups List
                    if (this.user.groups) {
                        this.firestore.collection('groups').ref
                            .where(firebase_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldPath.documentId(), 'in', this.user.groups)
                            .get().then((group) => {
                            this.groups = [];
                            group.forEach(g => {
                                let group;
                                group = g.data();
                                group.key = g.id;
                                this.addOrUpdateUserGroup(group);
                            });
                        });
                    }
                }
                else {
                    this.title = 'Poll';
                    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
                        this.group = group.payload.data();
                        this.group.groupTags.forEach((element) => {
                            this.postTags.push({ val: element, isChecked: false });
                        });
                        this.addTagControls();
                    });
                }
            });
        });
    }
    addOrUpdateUserGroup(group) {
        if (!this.groups) {
            this.groups = [group];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.groups.length; i++) {
                if (this.groups[i].key == group.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groups[index] = group;
            }
            else {
                this.groups.push(group);
            }
        }
    }
    addTagControls() {
        this.postTags.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](i === 0); // if first item set to true, else false
            this.pollForm.controls.tags.push(control);
        });
    }
    submitPollForm() {
        this.loadingProvider.show();
        // Add poll info and date.
        this.poll.groupId = this.groupId;
        this.poll.groupName = this.group.name;
        this.poll.date = new Date();
        this.poll.title = this.pollForm.value.description;
        this.poll.postTags = [];
        this.poll.postTags = this.postTags;
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth(); // January is 0!
        const yyyy = today.getFullYear();
        const date = new Date(yyyy, mm, dd + 2);
        const dateEnding = date;
        this.poll.data = {
            dateCreated: new Date(),
            dateEnding,
            pollOptions: []
        };
        if (this.pollForm.value.pollOption1 != null
            && this.pollForm.value.pollOption1.trim() !== '') {
            this.poll.data.pollOptions.push({
                name: this.pollForm.value.pollOption1.trim()
            });
        }
        if (this.pollForm.value.pollOption2 != null
            && this.pollForm.value.pollOption2.trim() !== '') {
            this.poll.data.pollOptions.push({
                name: this.pollForm.value.pollOption2.trim()
            });
        }
        if (this.pollForm.value.pollOption3 != null
            && this.pollForm.value.pollOption3.trim() !== '') {
            this.poll.data.pollOptions.push({
                name: this.pollForm.value.pollOption3.trim()
            });
        }
        if (this.pollForm.value.pollOption4 != null
            && this.pollForm.value.pollOption4.trim() !== '') {
            this.poll.data.pollOptions.push({
                name: this.pollForm.value.pollOption4.trim()
            });
        }
        this.dataProvider.addPost(this.poll).then((success) => {
            const pollId = success.id;
            this.pollId = pollId;
            if (this.group.polls === undefined) {
                this.group.polls = [];
            }
            this.group.polls.push(this.pollId);
            // Update group data on the database.
            this.dataProvider.getGroup(this.groupId).update({
                posts: this.group.posts
            }).then(() => {
                // Back.
                this.loadingProvider.hide();
                this.router.navigateByUrl('tabs/tab2');
            });
        });
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
};
NewPollPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] }
];
NewPollPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-poll',
        template: _raw_loader_new_poll_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_poll_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"]])
], NewPollPage);



/***/ }),

/***/ "ypRl":
/*!**********************************************************!*\
  !*** ./src/app/validators/checkbox-checked.validator.ts ***!
  \**********************************************************/
/*! exports provided: CheckboxCheckedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function() { return CheckboxCheckedValidator; });
class CheckboxCheckedValidator {
    static tagsSelected(min) {
        const validator = (formArray) => {
            const totalSelected = formArray.controls
                .map(control => control.value)
                .reduce((prev, next) => next ? prev + next : prev, 0);
            return totalSelected >= min ? null : { required: true };
        };
        return validator;
    }
}


/***/ })

}]);
//# sourceMappingURL=new-poll-new-poll-module-es2015.js.map