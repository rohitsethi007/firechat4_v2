(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-resources-new-resources-module"],{

/***/ "+4xr":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-resources/new-resources.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button *ngIf=\"tab=='contact'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!contactForm.valid\" (click)=\"submitContactForm()\">Post</ion-button>\n      <ion-button *ngIf=\"tab=='upload'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!uploadForm.valid\" (click)=\"submitUploadForm()\">Post</ion-button>\n      <ion-button *ngIf=\"tab=='link'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!weblinkForm.valid\" (click)=\"submitLinkForm()\">Post</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-segment *ngIf=\"step==2\" color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"contact\">\n      Contact\n    </ion-segment-button>\n    <ion-segment-button value=\"upload\">\n      Upload\n    </ion-segment-button>\n    <ion-segment-button value=\"link\">\n      Link\n    </ion-segment-button>\n  </ion-segment>\n</ion-header> \n\n<ion-content  class=\"forms-validations-content\">\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\">\n      <ion-list>\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.key)\"> \n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n              <b>{{group.name}}</b><br/>\n              {{group.description}}\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step==2\">\n  <div [ngSwitch]=\"tab\">\n    <div *ngSwitchCase=\"'contact'\">\n      <form class=\"validations-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"submitContactForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header class=\"header\">\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"name\" clearInput placeholder=\"Enter the name of the contact\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the contact\"></ion-textarea>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"phones\" clearInput placeholder=\"Enter one or more phone numbers (comma separated)\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"email\" clearInput placeholder=\"Enter an email address if available\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\n          </ion-list-header>\n    \n          <div class=\"reviews-wrapper\">\n          <ion-row>\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of contactForm.controls.tags.controls; let i = index\">\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n            </div>\n          </ion-row>\n  \n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.tags\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('tags').hasError(validation.type) && (contactForm.get('tags').dirty || contactForm.get('tags').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          </div>\n        </ion-list>\n  \n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!contactForm.valid\">Submit</ion-button> -->\n\n      </form>\n    </div>\n    <div *ngSwitchCase=\"'upload'\">\n   <form class=\"validations-form\" [formGroup]=\"uploadForm\" (ngSubmit)=\"submitUploadForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header class=\"header\">\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-buttons>\n              <ion-button expand=\"block\" color=\"secondary\" (click)=\"upload()\"><ion-icon name=\"attach\"></ion-icon>Attach a File/Document</ion-button>\n            </ion-buttons>\n          </ion-item>\n        </ion-list>\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\n          </ion-list-header>\n    \n          <div class=\"reviews-wrapper\">\n          <ion-row>\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of uploadForm.controls.tags.controls; let i = index\">\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n            </div>\n          </ion-row>\n  \n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.tags\">\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('tags').hasError(validation.type) && (uploadForm.get('tags').dirty || uploadForm.get('tags').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          </div>\n        </ion-list>\n  \n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!uploadForm.valid\">Submit</ion-button> -->\n\n      </form>\n    </div>\n    <div *ngSwitchCase=\"'link'\">\n      <form class=\"validations-form\" [formGroup]=\"weblinkForm\" (ngSubmit)=\"submitLinkForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header class=\"header\">\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"link\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\n          </ion-item>\n          <div>\n            <hr/>\n            <div>\n              <div>\n                <img *ngIf=\"metaicon\" [src]=\"metaicon\"/>      \n              </div>\n              <div>\n                <h2>{{metatitle}}</h2>\n                <span>{{metadescription}}</span>\n              </div>\n              <div> <h6></h6>{{metasite}}</div>\n            </div>\n          </div>\n        </ion-list>\n          <ion-list class=\"inputs-list\" lines=\"full\">\n            <ion-list-header>\n              <ion-label class=\"header-title\">Select relevant tags</ion-label>\n            </ion-list-header>\n      \n            <div class=\"reviews-wrapper\">\n            <ion-row>\n              <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of weblinkForm.controls.tags.controls; let i = index\">\n                <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n                <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n                <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n              </div>\n            </ion-row>\n    \n            <div class=\"error-container\"> \n              <ng-container *ngFor=\"let validation of validations.tags\">\n                <div class=\"error-message\" *ngIf=\"weblinkForm.get('tags').hasError(validation.type) && (weblinkForm.get('tags').dirty || weblinkForm.get('tags').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\n                  <span>{{ validation.message }}</span>\n                </div>\n              </ng-container>\n            </div>\n            </div>\n          </ion-list>\n  \n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!weblinkForm.valid\">Submit</ion-button> -->\n\n      </form> \n    </div>\n  </div>\n</div>\n</ion-content>");

/***/ }),

/***/ "2bAV":
/*!*******************************************************!*\
  !*** ./src/app/new-resources/new-resources.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlc291cmNlcy9uZXctcmVzb3VyY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FBQ0Y7O0FBR0c7RUFDQywyQ0FBQTtBQUFKOztBQUVJO0VBQ0UsMkVBQUE7QUFBTjs7QUFFTTtFQUNFLGVBQUE7QUFBUjs7QUFHUTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBRFY7O0FBR1U7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsY0FBQTtBQURaOztBQU9JO0VBQ0UsMEJBQUE7QUFMTjs7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFRRTtFQUVFLG1EQUFBO0VBQ1EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVBaOztBQVFZO0VBQ0UseUJBQUE7QUFOZDs7QUFRWTtFQUNFLHlCQUFBO0FBTmQ7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVBKOztBQWFBO0VBQ0UsV0FBQTtBQVZGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVEY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFXQTtFQUNFLFVBQUE7QUFURiIsImZpbGUiOiJzcmMvYXBwL25ldy1yZXNvdXJjZXMvbmV3LXJlc291cmNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbn1cblxuLmZvcm1zLXZhbGlkYXRpb25zLWNvbnRlbnQge1xuICAgLnZhbGlkYXRpb25zLWZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuaW5wdXRzLWxpc3Qge1xuICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VibWl0LWJ0biB7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudGFncyB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIC5pdGVtLXJhdGluZyB7XG4gICAgLy8gRGVmYXVsdCBiYWNrZ3JvdW5kXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjJiMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNzdjO1xuICAgICAgICAgICAgfVxuICB9XG4gIGlvbi1jaGVja2JveCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbn1cbn1cblxuLnVwbG9hZHMge1xuICBtYXJnaW46IDVweDtcbi5pbWctd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5pbWctd3JhcCAuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJweDtcbiAgcmlnaHQ6IC03cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogNXB4IDJweCAycHg7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmltZy13cmFwOmhvdmVyIC5jbG9zZSB7XG4gIG9wYWNpdHk6IDE7XG59XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "Dhd7":
/*!*****************************************************!*\
  !*** ./src/app/new-resources/new-resources.page.ts ***!
  \*****************************************************/
/*! exports provided: NewResourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewResourcesPage", function() { return NewResourcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_resources_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-resources.page.html */ "+4xr");
/* harmony import */ var _new_resources_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-resources.page.scss */ "2bAV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/image.service */ "mnRn");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "41F/");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "Zr1d");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "gTw3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../validators/checkbox-checked.validator */ "ypRl");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



















let NewResourcesPage = class NewResourcesPage {
    constructor(route, dataProvider, loadingProvider, alertCtrl, afAuth, router, camera, keyboard, actionSheet, contacts, geolocation, imageProvider, http, firestore) {
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
        this.firestore = firestore;
        this.postTags = [];
        this.metaicon = '';
        this.metadescription = '';
        this.metatitle = '';
        this.step = 1;
        this.validations = {
            title: [
                { type: 'required', message: 'Title is a required field.' }
            ],
            name: [
                { type: 'required', message: 'Name is a required field.' }
            ],
            address: [
                { type: 'required', message: 'Address is a required field.' }
            ],
            phones: [
                { type: 'required', message: 'Phone is a required field.' }
            ],
            email: [
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            tags: [
                { type: 'required', message: 'Please select at least one tag.' }
            ],
            link: [
                { type: 'pattern', message: 'Please enter a correct weblink.' }
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
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            phones: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_16__["CheckboxCheckedValidator"].tagsSelected(1))
        });
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_16__["CheckboxCheckedValidator"].tagsSelected(1))
        });
        this.weblinkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
            ])),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_16__["CheckboxCheckedValidator"].tagsSelected(1))
        });
    }
    ionViewDidEnter() { }
    addContactTagControls() {
        this.postTags.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false
            this.contactForm.controls.tags.push(control);
        });
    }
    addLinkTagControls() {
        this.postTags.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false
            this.weblinkForm.controls.tags.push(control);
        });
    }
    addUploadTagControls() {
        this.postTags.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false
            this.uploadForm.controls.tags.push(control);
        });
    }
    ngOnInit() {
        this.dataProvider.getCurrentUser().then((u) => {
            u.snapshotChanges().subscribe((value) => {
                this.user = value.payload.data();
                this.addedByUser = {
                    addedByKey: value.payload.data().userId,
                    addedByUsername: value.payload.data().username,
                    addedByImg: value.payload.data().img
                };
                // Initialize
                this.resource = {
                    addedByUser: this.addedByUser,
                    date: '',
                    title: '',
                    postTags: [],
                    groupId: '',
                    groupName: '',
                    type: 'resource',
                    data: { name: '', address: '', phones: '', email: '', type: '' },
                    totalReactionCount: 0,
                    totalReviewCount: 0
                };
                if (this.step === 1) {
                    this.title = 'Select a group ...';
                    // Get User Groups List
                    if (this.user.groups) {
                        this.firestore.collection('groups').ref
                            .where(firebase_app__WEBPACK_IMPORTED_MODULE_17__["default"].firestore.FieldPath.documentId(), 'in', this.user.groups)
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
                    this.tab = 'contact';
                    // Get group information
                    this.groupId = this.route.snapshot.params.id;
                    console.log('this.route.snapshot.params.id', this.route.snapshot.params.id);
                    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
                        this.group = group.payload.data();
                        this.postTags = [];
                        console.log('this.group', group.payload.data());
                        this.group.groupTags.forEach((element) => {
                            this.postTags.push({ val: element, isChecked: false });
                        });
                        this.addContactTagControls();
                        this.addLinkTagControls();
                        this.addUploadTagControls();
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
    segmentChanged($event) {
        if (this.tab === 'contact') {
            this.getDummyData();
        }
        else if (this.tab === 'upload') {
            this.getDummyData();
        }
        else if (this.tab === 'link') {
            this.getDummyData();
        }
    }
    // This method is required in segmentChanged call else tabs won't load properly
    getDummyData() {
        this.dataProvider.getCurrentUser().then((u) => {
            u.snapshotChanges().subscribe((account) => {
                console.log(account);
            });
        });
    }
    // Proceed to userInfo page.
    viewUser(userId) {
        this.router.navigateByUrl('/userinfo/' + userId);
    }
    // Proceed with group creation.
    submitContactForm() {
        this.loadingProvider.show();
        // Add resource info and date.
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
    submitLinkForm() {
        this.loadingProvider.show();
        // Add resource info and date.
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
    submitUploadForm() {
        this.addResourceToDatabase();
    }
    linkFocusOut() {
        this.loadingProvider.show();
        const getMeta = __webpack_require__(/*! lets-get-meta */ "zxjh");
        this.http.get(this.weblinkForm.value.link, { responseType: 'text' })
            .subscribe(res => {
            const o = getMeta(res);
            this.metaicon = o['og:image'];
            this.metadescription = o.description;
            this.metatitle = o['og:title'];
            console.log('link', this.metaicon);
            console.log('link', this.metatitle);
            this.loadingProvider.hide();
        });
    }
    upload() {
        // Add resource info and date.
        this.resource.date = new Date();
        this.resource.title = this.contactForm.value.title;
        this.resource.postTags = [];
        this.resource.postTags = this.postTags;
        this.resource.groupId = this.groupId;
        this.resource.groupName = this.group.name;
        const action = this.actionSheet.create({
            header: 'Choose attachments',
            backdropDismiss: true,
            mode: 'md',
            buttons: [
                //   {
                //   text: 'Camera',
                //   handler: () => {
                //     this.imageProvider.uploadGroupPhotoResource(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
                //       this.resource.data.type = 'upload';
                //       this.resource.data.url = url;
                //       this.resource.data.uploadtype = 'image';
                //     });
                //   }
                // },
                {
                    text: 'Photo Library',
                    handler: () => {
                        this.imageProvider.uploadGroupPhotoResource(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
                            this.resource.data.type = 'upload';
                            this.resource.data.url = url;
                            this.resource.data.uploadtype = 'image';
                        });
                    }
                },
                {
                    text: 'Video',
                    handler: () => {
                        this.imageProvider.uploadGroupVideoResource(this.groupId).then(url => {
                            this.resource.data.type = 'upload';
                            this.resource.data.uploadtype = 'video';
                            this.resource.data.url = url;
                        });
                    }
                },
                {
                    text: 'Contact',
                    handler: () => {
                        this.contacts.pickContact().then(data => {
                            let name;
                            if (data.displayName !== null) {
                                name = data.displayName;
                            }
                            else {
                                name = data.name.givenName + '' + data.name.familyName;
                            }
                            this.resource.data.type = 'upload';
                            this.resource.data.uploadtype = 'contact';
                            this.resource.data.name = name;
                            this.resource.data.address = data.addresses;
                            this.resource.data.phones = data.phoneNumbers;
                            this.resource.data.email = data.emails;
                        }, err => {
                            console.log(err);
                        });
                    }
                }, {
                    text: 'Location',
                    handler: () => {
                        this.geolocation.getCurrentPosition({
                            timeout: 5000
                        }).then(res => {
                            const locationMessage = 'Location:<br> lat:' + res.coords.latitude + '<br> lng:' + res.coords.longitude;
                            // tslint:disable-next-line: max-line-length
                            const url = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';
                            const confirm = this.alertCtrl.create({
                                header: 'Your Location',
                                message: locationMessage,
                                buttons: [{
                                        text: 'cancel',
                                        handler: () => {
                                            console.log('canceled');
                                        }
                                    }, {
                                        text: 'Share',
                                        handler: () => {
                                            this.resource.data.type = 'upload';
                                            this.resource.data.url = url;
                                            this.resource.data.uploadtype = 'location';
                                        }
                                    }]
                            }).then(r => r.present());
                        }, locationErr => {
                            console.log('Location Error' + JSON.stringify(locationErr));
                        });
                    }
                }, {
                    text: 'cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancelled');
                    }
                }
            ]
        }).then(r => r.present());
    }
    addResourceToDatabase() {
        // Add resource to database.
        this.dataProvider.addPost(this.resource).then((success) => {
            const postId = success.id;
            this.resourceId = postId;
            if (this.group.posts === undefined) {
                this.group.posts = [];
            }
            this.group.posts.push(this.resourceId);
            // Update group data on the database.
            this.dataProvider.getGroup(this.groupId).update({
                posts: this.group.posts
            }).then(() => {
                this.loadingProvider.hide();
            });
        });
        this.router.navigateByUrl('tabs/tab4');
    }
    selectGroup(groupId) {
        this.groupId = groupId;
        console.log('groupId', groupId);
        this.step = 2;
        this.title = 'Resource';
        this.tab = 'contact';
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
            this.group.groupTags.forEach((element) => {
                this.postTags.push({ val: element, isChecked: false });
            });
            this.addContactTagControls();
            this.addLinkTagControls();
            this.addUploadTagControls();
        });
    }
};
NewResourcesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_12__["Contacts"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__["Geolocation"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestore"] }
];
NewResourcesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-resources',
        template: _raw_loader_new_resources_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_resources_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_12__["Contacts"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__["Geolocation"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestore"]])
], NewResourcesPage);



/***/ }),

/***/ "Q9Mr":
/*!*******************************************************!*\
  !*** ./src/app/new-resources/new-resources.module.ts ***!
  \*******************************************************/
/*! exports provided: NewResourcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewResourcesPageModule", function() { return NewResourcesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "vxGH");
/* harmony import */ var _new_resources_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-resources.page */ "Dhd7");









const routes = [
    {
        path: '',
        component: _new_resources_page__WEBPACK_IMPORTED_MODULE_8__["NewResourcesPage"]
    }
];
let NewResourcesPageModule = class NewResourcesPageModule {
};
NewResourcesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_new_resources_page__WEBPACK_IMPORTED_MODULE_8__["NewResourcesPage"]]
    })
], NewResourcesPageModule);



/***/ })

}]);
//# sourceMappingURL=new-resources-new-resources-module-es2015.js.map