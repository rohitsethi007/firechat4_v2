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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\r\n      <ion-button color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!pollForm.valid\" (click)=\"submitPollForm()\">Post</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content class=\"forms-validations-content\">\r\n  <div *ngIf=\"step==1\"> \r\n    <div *ngIf=\"groups && groups.length > 0\">\r\n      <ion-list>\r\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n              <b>{{group.name}}</b><br/>\r\n              {{group.description}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"step==2\">\r\n    <form class=\"validations-form\" [formGroup]=\"pollForm\" (ngSubmit)=\"submitPollForm()\">\r\n      <ion-list class=\"inputs-list\" lines=\"full\">\r\n        <ion-list-header class=\"header\">\r\n          posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\r\n        </ion-list-header>\r\n        <ion-item class=\"input-item\">\r\n          <ion-input type=\"text\" formControlName=\"description\" clearInput placeholder=\"What would like to ask?\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"input-item\">\r\n          <ion-input type=\"text\" formControlName=\"pollOption1\" clearInput placeholder=\"Enter the first option\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"input-item\">\r\n          <ion-input type=\"text\" formControlName=\"pollOption2\" clearInput placeholder=\"Enter the second option\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"input-item\">\r\n          <ion-input type=\"text\" formControlName=\"pollOption3\" clearInput placeholder=\"This is optional\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"input-item\">\r\n          <ion-input type=\"text\" formControlName=\"pollOption4\" clearInput placeholder=\"This is optional\"></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n \r\n      <ion-list class=\"inputs-list\" lines=\"full\">\r\n        <ion-list-header>\r\n          <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n        </ion-list-header>\r\n  \r\n        <div class=\"reviews-wrapper\">\r\n        <ion-row>\r\n          <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of pollForm.controls.tags.controls; let i = index\">\r\n            <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n            <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n            <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n          </div>\r\n        </ion-row>\r\n\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.tags\">\r\n            <div class=\"error-message\" *ngIf=\"pollForm.get('tags').hasError(validation.type) && (pollForm.get('tags').dirty || pollForm.get('tags').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        </div>\r\n      </ion-list>\r\n      <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!pollForm.valid\">Submit</ion-button> -->\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Thc8":
/*!*********************************************!*\
  !*** ./src/app/new-poll/new-poll.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXBvbGwvbmV3LXBvbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7QUFDRjs7QUFHRztFQUNDLDJDQUFBO0FBQUo7O0FBRUk7RUFDRSwyRUFBQTtBQUFOOztBQUVNO0VBQ0UsZUFBQTtBQUFSOztBQUdRO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFEVjs7QUFHVTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7RUFDQSxjQUFBO0FBRFo7O0FBT0k7RUFDRSwwQkFBQTtBQUxOOztBQVNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVFFO0VBRUUsbURBQUE7RUFDUSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUFo7O0FBUVk7RUFDRSx5QkFBQTtBQU5kOztBQVFZO0VBQ0UseUJBQUE7QUFOZDs7QUFTRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBUEo7O0FBYUE7RUFDRSxXQUFBO0FBVkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFURjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVRGOztBQVdBO0VBQ0UsVUFBQTtBQVRGIiwiZmlsZSI6InNyYy9hcHAvbmV3LXBvbGwvbmV3LXBvbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcclxufVxyXG5cclxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xyXG4gICAudmFsaWRhdGlvbnMtZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG5cclxuICAgIC5pbnB1dHMtbGlzdCB7XHJcbiAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICAuZXJyb3ItY29udGFpbmVyIHtcclxuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWdzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgLml0ZW0tcmF0aW5nIHtcclxuICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiMmIyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjFcIl0ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XHJcbiAgICAgICAgICAgIH1cclxuICB9XHJcbiAgaW9uLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxufVxyXG59XHJcblxyXG4udXBsb2FkcyB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbi5pbWctd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5pbWctd3JhcCAuY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0ycHg7XHJcbiAgcmlnaHQ6IC03cHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgcGFkZGluZzogNXB4IDJweCAycHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5pbWctd3JhcDpob3ZlciAuY2xvc2Uge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxufVxyXG5cclxuIl19 */");

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
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");











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
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((value) => {
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
                        .where(firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldPath.documentId(), 'in', this.user.groups)
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