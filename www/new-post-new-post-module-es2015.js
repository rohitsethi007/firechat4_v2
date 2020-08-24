(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-post-new-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-post/new-post.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-post/new-post.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>  \r\n\r\n<ion-content class=\"forms-validations-content\">\r\n  <div *ngIf=\"step==1\"> \r\n    <div *ngIf=\"groups && groups.length > 0\">\r\n      <ion-list lines=\"none\">\r\n        <ion-item *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{group.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>created {{group.dateCreated.toDate() | DateFormat}}</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-badge slot=\"end\" color=\"danger\" *ngIf=\"group.unreadMessagesCount > 0\">{{group.unreadMessagesCount}}\r\n          </ion-badge>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"step==2\">\r\n  <form class=\"validations-form\" [formGroup]=\"postForm\" (ngSubmit)=\"submitPostForm()\">\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-list-header>\r\n        <ion-label class=\"header-title\">{{group.name}}</ion-label>\r\n      </ion-list-header>\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Title:</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter the subject\"></ion-input>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validations.title\">\r\n          <div class=\"error-message\" *ngIf=\"postForm.get('title').hasError(validation.type) && (postForm.get('title').dirty || postForm.get('title').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Message:</ion-label>\r\n        <ion-textarea rows=\"6\"  formControlName=\"message\" clearInput placeholder=\"Enter the message\"></ion-textarea>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validations.message\">\r\n          <div class=\"error-message\" *ngIf=\"postForm.get('message').hasError(validation.type) && (postForm.get('message').dirty || postForm.get('message').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n      <ion-list class=\"inputs-list\" lines=\"full\">\r\n        <ion-list-header>\r\n          <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n        </ion-list-header>\r\n  \r\n        <div class=\"reviews-wrapper\">\r\n        <ion-row>\r\n          <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of postForm.controls.tags.controls; let i = index\">\r\n            <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n            <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n            <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n          </div>\r\n        </ion-row>\r\n\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.tags\">\r\n            <div class=\"error-message\" *ngIf=\"postForm.get('tags').hasError(validation.type) && (postForm.get('tags').dirty || postForm.get('tags').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        </div>\r\n      </ion-list>\r\n\r\n    <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!postForm.valid\" >Submit</ion-button>\r\n    </ion-list>\r\n  </form>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/new-post/new-post.module.ts":
/*!*********************************************!*\
  !*** ./src/app/new-post/new-post.module.ts ***!
  \*********************************************/
/*! exports provided: NewPostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostPageModule", function() { return NewPostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");
/* harmony import */ var _new_post_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-post.page */ "./src/app/new-post/new-post.page.ts");








const routes = [
    {
        path: '',
        component: _new_post_page__WEBPACK_IMPORTED_MODULE_7__["NewPostPage"]
    }
];
let NewPostPageModule = class NewPostPageModule {
};
NewPostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_new_post_page__WEBPACK_IMPORTED_MODULE_7__["NewPostPage"]]
    })
], NewPostPageModule);



/***/ }),

/***/ "./src/app/new-post/new-post.page.scss":
/*!*********************************************!*\
  !*** ./src/app/new-post/new-post.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.forms-validations-content {\n  --background: var(--page-background);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list ion-list-header .header-title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Helvetica-Bold\", \"Roboto-Medium\", \"Segoe UI Semibold\", \"Arial-Bold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.forms-validations-content .validations-form .inputs-list .terms-item {\n  --border-width: 0px;\n  --inner-padding-end: 0px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-primary);\n  --counter-border-color: var(--ion-color-primary);\n}\n\n.forms-validations-content .validations-form .inputs-list .counter-item .counter-value {\n  text-align: center;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXBvc3QvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcbmV3LXBvc3RcXG5ldy1wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LXBvc3QvbmV3LXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURBRztFQUNDLDJDQUFBO0FDRUo7O0FEQUk7RUFDRSw2Q0FBQTtFQUVBLDJFQUFBO0FDQ047O0FEQ007RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0FDQ1I7O0FEQ1E7RUFDRSw4SUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDVjs7QURHTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNEUjs7QURJTTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUNGUjs7QURNUTtFQUNFLHdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0pWOztBRE1VO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUNKWjs7QURVUTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxnREFBQTtBQ1JWOztBRFdRO0VBQ0Usa0JBQUE7QUNUVjs7QURjSTtFQUNFLDBCQUFBO0FDWk47O0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ2RKOztBRGVFO0VBRUUsbURBQUE7RUFDUSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDZFo7O0FEZVk7RUFDRSx5QkFBQTtBQ2JkOztBRGVZO0VBQ0UseUJBQUE7QUNiZDs7QURnQkU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvbmV3LXBvc3QvbmV3LXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxufVxyXG5cclxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgLnZhbGlkYXRpb25zLWZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAuaW5wdXRzLWxpc3Qge1xyXG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblxyXG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcblxyXG4gICAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XHJcblxyXG4gICAgICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1NZWRpdW1cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBNZWRpdW1cIiwgXCJIZWx2ZXRpY2EtQm9sZFwiLCBcIlJvYm90by1NZWRpdW1cIiwgXCJTZWdvZSBVSSBTZW1pYm9sZFwiLCBcIkFyaWFsLUJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxIDAgNHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXJtcy1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLmNvdW50ZXItaXRlbSB7XHJcbiAgICAgICAgYXBwLWNvdW50ZXItaW5wdXQge1xyXG4gICAgICAgICAgLS1jb3VudGVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRlci12YWx1ZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWdzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgLml0ZW0tcmF0aW5nIHtcclxuICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiMmIyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjFcIl0ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XHJcbiAgICAgICAgICAgIH1cclxuICB9XHJcbiAgaW9uLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxufVxyXG59IiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLmlucHV0cy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLU1lZGl1bVwiLCBcIkhlbHZldGljYSBOZXVlIE1lZGl1bVwiLCBcIkhlbHZldGljYS1Cb2xkXCIsIFwiUm9ib3RvLU1lZGl1bVwiLCBcIlNlZ29lIFVJIFNlbWlib2xkXCIsIFwiQXJpYWwtQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbjogMSAwIDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAudGVybXMtaXRlbSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmNvdW50ZXItaXRlbSBhcHAtY291bnRlci1pbnB1dCB7XG4gIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuY291bnRlci1pdGVtIC5jb3VudGVyLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnZhbGlkYXRpb25zLWZvcm0gLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuMzUpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNzdjO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/new-post/new-post.page.ts":
/*!*******************************************!*\
  !*** ./src/app/new-post/new-post.page.ts ***!
  \*******************************************/
/*! exports provided: NewPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostPage", function() { return NewPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");








let NewPostPage = class NewPostPage {
    constructor(route, router, dataProvider, imageProvider, loadingProvider) {
        this.route = route;
        this.router = router;
        this.dataProvider = dataProvider;
        this.imageProvider = imageProvider;
        this.loadingProvider = loadingProvider;
        this.step = 1;
        this.validations = {
            title: [
                { type: 'minlength', message: 'Title should be atleast 5 characters long' },
                { type: 'maxlength', message: 'Title cannot be more than 20 characters' },
                { type: 'required', message: 'Title is a required field, atleast 5 characters' }
            ],
            message: [
                { type: 'minlength', message: 'Title should be atleast 10 characters long' },
                { type: 'maxlength', message: 'Title cannot be more than 100 characters' },
                { type: 'required', message: 'Message is a required field, atleast 10 characters' }
            ],
            tags: [
                { type: 'required', message: 'Please select at least one tag.' }
            ]
        };
        this.postTags = [];
        this.groupId = this.route.snapshot.params.id;
        this.group = { name: '' };
        if (this.groupId === 'undefined') {
            this.step = 1;
        }
        else {
            this.step = 2;
        }
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_7__["CheckboxCheckedValidator"].tagsSelected(1))
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
    addTagControls() {
        this.postTags.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false
            this.postForm.controls.tags.push(control);
        });
    }
    ngOnInit() {
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((value) => {
            this.addedByUser = {
                addedByKey: value.payload.data().userId,
                addedByUsername: value.payload.data().username,
                addedByImg: value.payload.data().img
            };
            this.post = {
                addedByUser: this.addedByUser,
                date: '',
                title: '',
                postTags: [],
                groupId: '',
                groupName: '',
                type: 'general',
                data: {},
                totalReactionCount: 0,
                totalReviewCount: 0
            };
        });
    }
    submitPostForm() {
        this.loadingProvider.show();
        console.log('this.group', this.group);
        // Add post info and date.
        this.post.date = new Date();
        this.post.title = this.postForm.value.title;
        this.post.postTags = [];
        this.post.postTags = this.postTags;
        this.post.groupId = this.groupId;
        this.post.groupName = this.group.name;
        // get specific data for type post
        this.post.data = {
            message: this.postForm.value.message
        };
        // Add post to database.
        this.dataProvider.addPost(this.post).then((success) => {
            const postId = success.id;
            this.postId = postId;
            if (this.group.posts === undefined) {
                this.group.posts = [];
            }
            this.group.posts.push(this.postId);
            // Update group data on the database.
            this.dataProvider.getGroup(this.groupId).update({
                posts: this.group.posts
            }).then(() => {
                // Back.
                this.loadingProvider.hide();
                this.router.navigateByUrl('tabs/tab1');
            });
        });
    }
    selectGroup(groupId) {
        this.groupId = groupId;
        this.step = 2;
        this.title = 'Create a Post in ...';
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
            this.group.groupTags.forEach((element) => {
                this.postTags.push({ val: element, isChecked: false });
            });
            this.addTagControls();
        });
    }
};
NewPostPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
NewPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-post/new-post.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-post.page.scss */ "./src/app/new-post/new-post.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]])
], NewPostPage);



/***/ })

}]);
//# sourceMappingURL=new-post-new-post-module-es2015.js.map