(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-post-new-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-post/new-post.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-post/new-post.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\r\n      <ion-button color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!postForm.valid\" (click)=\"submitPostForm()\">Post</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>  \r\n\r\n<ion-content class=\"forms-validations-content\">\r\n  <div *ngIf=\"step==1\"> \r\n    <div *ngIf=\"groups && groups.length > 0\">\r\n      <ion-list>\r\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n              <b>{{group.name}}</b><br/>\r\n              {{group.description}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"step==2\">\r\n  <form class=\"validations-form\" [formGroup]=\"postForm\" (ngSubmit)=\"submitPostForm()\">\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-list-header class=\"header\">\r\n        posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\r\n      </ion-list-header>\r\n      <ion-item class=\"input-item\">\r\n        <ion-input type=\"text\" formControlName=\"title\" placeholder=\"Subject\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"input-item\">\r\n        <ion-textarea rows=\"6\"  formControlName=\"message\" clearInput placeholder=\"Message\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-list class=\"inputs-list\" lines=\"full\">\r\n        <ion-list-header>\r\n          <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n        </ion-list-header>\r\n        <div class=\"reviews-wrapper\">\r\n        <ion-row>\r\n          <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of postForm.controls.tags.controls; let i = index\">\r\n            <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n            <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n            <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n          </div>\r\n        </ion-row>\r\n\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validations.tags\">\r\n            <div class=\"error-message\" *ngIf=\"postForm.get('tags').hasError(validation.type) && (postForm.get('tags').dirty || postForm.get('tags').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n              <span>{{ validation.message }}</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        </div>\r\n      </ion-list>\r\n\r\n    <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!postForm.valid\" >Submit</ion-button> -->\r\n    </ion-list>\r\n  </form>\r\n</div>\r\n</ion-content>\r\n<ion-footer *ngIf=\"step==2\">\r\n  <ion-toolbar>\r\n    <ion-row lines=\"none\" class=\"uploads item-text-wrap\" *ngIf=\"reviewMedia && reviewMedia.length > 0\">\r\n      <div class=\"img-wrap\" *ngFor=\"let media of reviewMedia\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <span class=\"close\" (click)=\"removeMedia(media)\">&times;</span>\r\n            <ion-img [src]=\"media\">\r\n            </ion-img>\r\n          </ion-thumbnail>\r\n        </div>\r\n    </ion-row>\r\n    <ion-item lines=\"none\">\r\n      <ion-button class=\"ion-text-capitalize\" fill=\"clear\" (click)=\"attach()\">\r\n        <ion-icon class=\"ion-padding-end\" size=\"large\" name=\"camera-outline\"></ion-icon>Add photo or video\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXBvc3QvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcbmV3LXBvc3RcXG5ldy1wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LXBvc3QvbmV3LXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7QUNDRjs7QURHRztFQUNDLDJDQUFBO0FDQUo7O0FERUk7RUFDRSwyRUFBQTtBQ0FOOztBREVNO0VBQ0UsZUFBQTtBQ0FSOztBREdRO0VBQ0Usd0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDRFY7O0FER1U7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsY0FBQTtBQ0RaOztBRE9JO0VBQ0UsMEJBQUE7QUNMTjs7QURTRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURRRTtFQUVFLG1EQUFBO0VBQ1EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1BaOztBRFFZO0VBQ0UseUJBQUE7QUNOZDs7QURRWTtFQUNFLHlCQUFBO0FDTmQ7O0FEU0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ1BKOztBRGFBO0VBQ0UsV0FBQTtBQ1ZGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDVEY7O0FEV0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNURjs7QURXQTtFQUNFLFVBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL25ldy1wb3N0L25ldy1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcbn1cclxuXHJcbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IHtcclxuICAgLnZhbGlkYXRpb25zLWZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAuaW5wdXRzLWxpc3Qge1xyXG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcblxyXG4gICAgICAuaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGFncyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIC5pdGVtLXJhdGluZyB7XHJcbiAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMFwiXSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjJiMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNzdjO1xyXG4gICAgICAgICAgICB9XHJcbiAgfVxyXG4gIGlvbi1jaGVja2JveCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbn1cclxufVxyXG5cclxuLnVwbG9hZHMge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4uaW1nLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uaW1nLXdyYXAgLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIHJpZ2h0OiAtN3B4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIHBhZGRpbmc6IDVweCAycHggMnB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaW1nLXdyYXA6aG92ZXIgLmNsb3NlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbn1cclxuXHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xufVxuXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3Qge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC52YWxpZGF0aW9ucy1mb3JtIC5pbnB1dHMtbGlzdCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudmFsaWRhdGlvbnMtZm9ybSAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3Mge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjJiMjtcbn1cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XG59XG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCAudGFncyBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xufVxuXG4udXBsb2FkcyB7XG4gIG1hcmdpbjogNXB4O1xufVxuLnVwbG9hZHMgLmltZy13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMDtcbiAgcGFkZGluZzogNXB4O1xufVxuLnVwbG9hZHMgLmltZy13cmFwIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMnB4O1xuICByaWdodDogLTdweDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiA1cHggMnB4IDJweDtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udXBsb2FkcyAuaW1nLXdyYXA6aG92ZXIgLmNsb3NlIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");










let NewPostPage = class NewPostPage {
    constructor(route, router, dataProvider, imageProvider, loadingProvider, camera, actionSheet) {
        this.route = route;
        this.router = router;
        this.dataProvider = dataProvider;
        this.imageProvider = imageProvider;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.actionSheet = actionSheet;
        this.step = 1;
        this.userNotifications = [];
        this.postMedia = [];
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
        this.postMedia = [];
        this.postTags = [];
        this.groupId = this.route.snapshot.params.id;
        this.group = { name: '' };
        if (this.groupId === 'undefined') {
            this.step = 1;
        }
        else {
            this.step = 2;
        }
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                // Validators.minLength(5),
                // Validators.maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                // Validators.minLength(10),
                // Validators.maxLength(100),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__["CheckboxCheckedValidator"].tagsSelected(1))
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
            this.title = 'Create a Post in';
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
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](i === 0); // if first item set to true, else false
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
            this.userNotifications = value.payload.data().notifications;
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
                totalReviewCount: 0,
                postMedia: []
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
        this.post.postMedia = this.postMedia;
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
            if (!this.userNotifications) {
                this.userNotifications = [this.postId];
            }
            else {
                this.userNotifications.push(this.postId);
            }
            // Update user data on the database.
            this.dataProvider.getUser(this.addedByUser.addedByKey).update({
                notifications: this.userNotifications
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
        this.title = 'General';
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
NewPostPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
NewPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-post/new-post.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-post.page.scss */ "./src/app/new-post/new-post.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
], NewPostPage);



/***/ }),

/***/ "./src/app/validators/checkbox-checked.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/validators/checkbox-checked.validator.ts ***!
  \**********************************************************/
/*! exports provided: CheckboxCheckedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function() { return CheckboxCheckedValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
//# sourceMappingURL=new-post-new-post-module-es2015.js.map