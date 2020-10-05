(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-resources-new-resources-module"], {
    /***/
    "+4xr":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-resources/new-resources.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\r\n      <ion-button *ngIf=\"tab=='contact'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!contactForm.valid\" (click)=\"submitContactForm()\">Post</ion-button>\r\n      <ion-button *ngIf=\"tab=='upload'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!uploadForm.valid\" (click)=\"submitUploadForm()\">Post</ion-button>\r\n      <ion-button *ngIf=\"tab=='link'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!weblinkForm.valid\" (click)=\"submitLinkForm()\">Post</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-segment *ngIf=\"step==2\" color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button value=\"contact\">\r\n      Contact\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"upload\">\r\n      Upload\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"link\">\r\n      Link\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header> \r\n\r\n<ion-content  class=\"forms-validations-content\">\r\n  <div *ngIf=\"step==1\"> \r\n    <div *ngIf=\"groups && groups.length > 0\">\r\n      <ion-list>\r\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n              <b>{{group.name}}</b><br/>\r\n              {{group.description}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"step==2\">\r\n  <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'contact'\">\r\n      <form class=\"validations-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"submitContactForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header class=\"header\">\r\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"name\" clearInput placeholder=\"Enter the name of the contact\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the contact\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"phones\" clearInput placeholder=\"Enter one or more phone numbers (comma separated)\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"email\" clearInput placeholder=\"Enter an email address if available\"></ion-input>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n          </ion-list-header>\r\n    \r\n          <div class=\"reviews-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of contactForm.controls.tags.controls; let i = index\">\r\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n            </div>\r\n          </ion-row>\r\n  \r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.tags\">\r\n              <div class=\"error-message\" *ngIf=\"contactForm.get('tags').hasError(validation.type) && (contactForm.get('tags').dirty || contactForm.get('tags').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          </div>\r\n        </ion-list>\r\n  \r\n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!contactForm.valid\">Submit</ion-button> -->\r\n\r\n      </form>\r\n    </div>\r\n    <div *ngSwitchCase=\"'upload'\">\r\n   <form class=\"validations-form\" [formGroup]=\"uploadForm\" (ngSubmit)=\"submitUploadForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header class=\"header\">\r\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-buttons>\r\n              <ion-button expand=\"block\" color=\"secondary\" (click)=\"upload()\"><ion-icon name=\"attach\"></ion-icon>Attach a File/Document</ion-button>\r\n            </ion-buttons>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header>\r\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n          </ion-list-header>\r\n    \r\n          <div class=\"reviews-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of uploadForm.controls.tags.controls; let i = index\">\r\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n            </div>\r\n          </ion-row>\r\n  \r\n          <div class=\"error-container\">\r\n            <ng-container *ngFor=\"let validation of validations.tags\">\r\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('tags').hasError(validation.type) && (uploadForm.get('tags').dirty || uploadForm.get('tags').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                <span>{{ validation.message }}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          </div>\r\n        </ion-list>\r\n  \r\n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!uploadForm.valid\">Submit</ion-button> -->\r\n\r\n      </form>\r\n    </div>\r\n    <div *ngSwitchCase=\"'link'\">\r\n      <form class=\"validations-form\" [formGroup]=\"weblinkForm\" (ngSubmit)=\"submitLinkForm()\">\r\n        <ion-list class=\"inputs-list\" lines=\"full\">\r\n          <ion-list-header class=\"header\">\r\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"input-item\">\r\n            <ion-input type=\"text\" formControlName=\"link\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\r\n          </ion-item>\r\n          <div>\r\n            <hr/>\r\n            <div>\r\n              <div>\r\n                <img *ngIf=\"metaicon\" [src]=\"metaicon\"/>      \r\n              </div>\r\n              <div>\r\n                <h2>{{metatitle}}</h2>\r\n                <span>{{metadescription}}</span>\r\n              </div>\r\n              <div> <h6></h6>{{metasite}}</div>\r\n            </div>\r\n          </div>\r\n        </ion-list>\r\n          <ion-list class=\"inputs-list\" lines=\"full\">\r\n            <ion-list-header>\r\n              <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n            </ion-list-header>\r\n      \r\n            <div class=\"reviews-wrapper\">\r\n            <ion-row>\r\n              <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of weblinkForm.controls.tags.controls; let i = index\">\r\n                <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n                <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n                <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n              </div>\r\n            </ion-row>\r\n    \r\n            <div class=\"error-container\"> \r\n              <ng-container *ngFor=\"let validation of validations.tags\">\r\n                <div class=\"error-message\" *ngIf=\"weblinkForm.get('tags').hasError(validation.type) && (weblinkForm.get('tags').dirty || weblinkForm.get('tags').touched)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                  <span>{{ validation.message }}</span>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n            </div>\r\n          </ion-list>\r\n  \r\n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!weblinkForm.valid\">Submit</ion-button> -->\r\n\r\n      </form> \r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>";
      /***/
    },

    /***/
    "2bAV":
    /*!*******************************************************!*\
      !*** ./src/app/new-resources/new-resources.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function bAV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlc291cmNlcy9uZXctcmVzb3VyY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FBQ0Y7O0FBR0c7RUFDQywyQ0FBQTtBQUFKOztBQUVJO0VBQ0UsMkVBQUE7QUFBTjs7QUFFTTtFQUNFLGVBQUE7QUFBUjs7QUFHUTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBRFY7O0FBR1U7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsY0FBQTtBQURaOztBQU9JO0VBQ0UsMEJBQUE7QUFMTjs7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFRRTtFQUVFLG1EQUFBO0VBQ1EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVBaOztBQVFZO0VBQ0UseUJBQUE7QUFOZDs7QUFRWTtFQUNFLHlCQUFBO0FBTmQ7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVBKOztBQWFBO0VBQ0UsV0FBQTtBQVZGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVEY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFXQTtFQUNFLFVBQUE7QUFURiIsImZpbGUiOiJzcmMvYXBwL25ldy1yZXNvdXJjZXMvbmV3LXJlc291cmNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xyXG59XHJcblxyXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XHJcbiAgIC52YWxpZGF0aW9ucy1mb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcblxyXG4gICAgLmlucHV0cy1saXN0IHtcclxuICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG5cclxuICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5lcnJvci1jb250YWluZXIge1xyXG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhZ3Mge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAuaXRlbS1yYXRpbmcge1xyXG4gICAgLy8gRGVmYXVsdCBiYWNrZ3JvdW5kXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjBcIl0ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzc3YztcclxuICAgICAgICAgICAgfVxyXG4gIH1cclxuICBpb24tY2hlY2tib3gge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG59XHJcbn1cclxuXHJcbi51cGxvYWRzIHtcclxuICBtYXJnaW46IDVweDtcclxuLmltZy13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmltZy13cmFwIC5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTJweDtcclxuICByaWdodDogLTdweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBwYWRkaW5nOiA1cHggMnB4IDJweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmltZy13cmFwOmhvdmVyIC5jbG9zZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "Dhd7":
    /*!*****************************************************!*\
      !*** ./src/app/new-resources/new-resources.page.ts ***!
      \*****************************************************/

    /*! exports provided: NewResourcesPage */

    /***/
    function Dhd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewResourcesPage", function () {
        return NewResourcesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_new_resources_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./new-resources.page.html */
      "+4xr");
      /* harmony import */


      var _new_resources_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-resources.page.scss */
      "2bAV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/auth */
      "KDZV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");
      /* harmony import */


      var _services_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/image.service */
      "mnRn");
      /* harmony import */


      var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/contacts/ngx */
      "41F/");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "Zr1d");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "gTw3");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../validators/checkbox-checked.validator */
      "ypRl");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_17__);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");

      var NewResourcesPage = /*#__PURE__*/function () {
        function NewResourcesPage(route, dataProvider, loadingProvider, alertCtrl, afAuth, router, camera, keyboard, actionSheet, contacts, geolocation, imageProvider, http, firestore) {
          _classCallCheck(this, NewResourcesPage);

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
            title: [{
              type: 'required',
              message: 'Title is a required field.'
            }],
            name: [{
              type: 'required',
              message: 'Name is a required field.'
            }],
            address: [{
              type: 'required',
              message: 'Address is a required field.'
            }],
            phones: [{
              type: 'required',
              message: 'Phone is a required field.'
            }],
            email: [{
              type: 'pattern',
              message: 'Enter a valid email.'
            }],
            tags: [{
              type: 'required',
              message: 'Please select at least one tag.'
            }],
            link: [{
              type: 'pattern',
              message: 'Please enter a correct weblink.'
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

          this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            phones: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_16__["CheckboxCheckedValidator"].tagsSelected(1))
          });
          this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_16__["CheckboxCheckedValidator"].tagsSelected(1))
          });
          this.weblinkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')])),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_16__["CheckboxCheckedValidator"].tagsSelected(1))
          });
        }

        _createClass(NewResourcesPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "addContactTagControls",
          value: function addContactTagControls() {
            var _this = this;

            this.postTags.forEach(function (o, i) {
              var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false

              _this.contactForm.controls.tags.push(control);
            });
          }
        }, {
          key: "addLinkTagControls",
          value: function addLinkTagControls() {
            var _this2 = this;

            this.postTags.forEach(function (o, i) {
              var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false

              _this2.weblinkForm.controls.tags.push(control);
            });
          }
        }, {
          key: "addUploadTagControls",
          value: function addUploadTagControls() {
            var _this3 = this;

            this.postTags.forEach(function (o, i) {
              var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false

              _this3.uploadForm.controls.tags.push(control);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (value) {
              _this4.user = value.payload.data();
              _this4.addedByUser = {
                addedByKey: value.payload.data().userId,
                addedByUsername: value.payload.data().username,
                addedByImg: value.payload.data().img
              }; // Initialize

              _this4.resource = {
                addedByUser: _this4.addedByUser,
                date: '',
                title: '',
                postTags: [],
                groupId: '',
                groupName: '',
                type: 'resource',
                data: {
                  name: '',
                  address: '',
                  phones: '',
                  email: '',
                  type: ''
                },
                totalReactionCount: 0,
                totalReviewCount: 0
              };

              if (_this4.step === 1) {
                _this4.title = 'Select a group ...'; // Get User Groups List

                if (_this4.user.groups) {
                  _this4.firestore.collection('groups').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_17__["firestore"].FieldPath.documentId(), 'in', _this4.user.groups).get().then(function (group) {
                    _this4.groups = [];
                    group.forEach(function (g) {
                      var group;
                      group = g.data();
                      group.key = g.id;

                      _this4.addOrUpdateUserGroup(group);
                    });
                  });
                }
              } else {
                _this4.tab = 'contact'; // Get group information

                _this4.groupId = _this4.route.snapshot.params.id;
                console.log('this.route.snapshot.params.id', _this4.route.snapshot.params.id);

                _this4.dataProvider.getGroup(_this4.groupId).snapshotChanges().subscribe(function (group) {
                  _this4.group = group.payload.data();
                  _this4.postTags = [];
                  console.log('this.group', group.payload.data());

                  _this4.group.groupTags.forEach(function (element) {
                    _this4.postTags.push({
                      val: element,
                      isChecked: false
                    });
                  });

                  _this4.addContactTagControls();

                  _this4.addLinkTagControls();

                  _this4.addUploadTagControls();
                });
              }
            });
          }
        }, {
          key: "addOrUpdateUserGroup",
          value: function addOrUpdateUserGroup(group) {
            if (!this.groups) {
              this.groups = [group];
            } else {
              var index = -1;

              for (var i = 0; i < this.groups.length; i++) {
                if (this.groups[i].key == group.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.groups[index] = group;
              } else {
                this.groups.push(group);
              }
            }
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged($event) {
            if (this.tab === 'contact') {
              this.getDummyData();
            } else if (this.tab === 'upload') {
              this.getDummyData();
            } else if (this.tab === 'link') {
              this.getDummyData();
            }
          } // This method is required in segmentChanged call else tabs won't load properly

        }, {
          key: "getDummyData",
          value: function getDummyData() {
            this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (account) {
              console.log(account);
            });
          } // Proceed to userInfo page.

        }, {
          key: "viewUser",
          value: function viewUser(userId) {
            this.router.navigateByUrl('/userinfo/' + userId);
          } // Proceed with group creation.

        }, {
          key: "submitContactForm",
          value: function submitContactForm() {
            this.loadingProvider.show(); // Add resource info and date.

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
        }, {
          key: "submitLinkForm",
          value: function submitLinkForm() {
            this.loadingProvider.show(); // Add resource info and date.

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
        }, {
          key: "submitUploadForm",
          value: function submitUploadForm() {
            this.addResourceToDatabase();
          }
        }, {
          key: "linkFocusOut",
          value: function linkFocusOut() {
            var _this5 = this;

            this.loadingProvider.show();

            var getMeta = __webpack_require__(
            /*! lets-get-meta */
            "zxjh");

            this.http.get(this.weblinkForm.value.link, {
              responseType: 'text'
            }).subscribe(function (res) {
              var o = getMeta(res);
              _this5.metaicon = o['og:image'];
              _this5.metadescription = o.description;
              _this5.metatitle = o['og:title'];
              console.log('link', _this5.metaicon);
              console.log('link', _this5.metatitle);

              _this5.loadingProvider.hide();
            });
          }
        }, {
          key: "upload",
          value: function upload() {
            var _this6 = this;

            // Add resource info and date.
            this.resource.date = new Date();
            this.resource.title = this.contactForm.value.title;
            this.resource.postTags = [];
            this.resource.postTags = this.postTags;
            this.resource.groupId = this.groupId;
            this.resource.groupName = this.group.name;
            var action = this.actionSheet.create({
              header: 'Choose attachments',
              backdropDismiss: true,
              mode: 'md',
              buttons: [{
                text: 'Camera',
                handler: function handler() {
                  _this6.imageProvider.uploadGroupPhotoResource(_this6.groupId, _this6.camera.PictureSourceType.CAMERA).then(function (url) {
                    _this6.resource.data.type = 'upload';
                    _this6.resource.data.url = url;
                    _this6.resource.data.uploadtype = 'image';
                  });
                }
              }, {
                text: 'Photo Library',
                handler: function handler() {
                  _this6.imageProvider.uploadGroupPhotoResource(_this6.groupId, _this6.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                    _this6.resource.data.type = 'upload';
                    _this6.resource.data.url = url;
                    _this6.resource.data.uploadtype = 'image';
                  });
                }
              }, {
                text: 'Video',
                handler: function handler() {
                  _this6.imageProvider.uploadGroupVideoResource(_this6.groupId).then(function (url) {
                    _this6.resource.data.type = 'upload';
                    _this6.resource.data.uploadtype = 'video';
                    _this6.resource.data.url = url;
                  });
                }
              }, {
                text: 'Contact',
                handler: function handler() {
                  _this6.contacts.pickContact().then(function (data) {
                    var name;

                    if (data.displayName !== null) {
                      name = data.displayName;
                    } else {
                      name = data.name.givenName + '' + data.name.familyName;
                    }

                    _this6.resource.data.type = 'upload';
                    _this6.resource.data.uploadtype = 'contact';
                    _this6.resource.data.name = name;
                    _this6.resource.data.address = data.addresses;
                    _this6.resource.data.phones = data.phoneNumbers;
                    _this6.resource.data.email = data.emails;
                  }, function (err) {
                    console.log(err);
                  });
                }
              }, {
                text: 'Location',
                handler: function handler() {
                  _this6.geolocation.getCurrentPosition({
                    timeout: 5000
                  }).then(function (res) {
                    var locationMessage = 'Location:<br> lat:' + res.coords.latitude + '<br> lng:' + res.coords.longitude; // tslint:disable-next-line: max-line-length

                    var url = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';

                    var confirm = _this6.alertCtrl.create({
                      header: 'Your Location',
                      message: locationMessage,
                      buttons: [{
                        text: 'cancel',
                        handler: function handler() {
                          console.log('canceled');
                        }
                      }, {
                        text: 'Share',
                        handler: function handler() {
                          _this6.resource.data.type = 'upload';
                          _this6.resource.data.url = url;
                          _this6.resource.data.uploadtype = 'location';
                        }
                      }]
                    }).then(function (r) {
                      return r.present();
                    });
                  }, function (locationErr) {
                    console.log('Location Error' + JSON.stringify(locationErr));
                  });
                }
              }, {
                text: 'cancel',
                role: 'cancel',
                handler: function handler() {
                  console.log('cancelled');
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "addResourceToDatabase",
          value: function addResourceToDatabase() {
            var _this7 = this;

            // Add resource to database.
            this.dataProvider.addPost(this.resource).then(function (success) {
              var postId = success.id;
              _this7.resourceId = postId;

              if (_this7.group.posts === undefined) {
                _this7.group.posts = [];
              }

              _this7.group.posts.push(_this7.resourceId); // Update group data on the database.


              _this7.dataProvider.getGroup(_this7.groupId).update({
                posts: _this7.group.posts
              }).then(function () {
                _this7.loadingProvider.hide();
              });
            });
            this.router.navigateByUrl('tabs/tab4');
          }
        }, {
          key: "selectGroup",
          value: function selectGroup(groupId) {
            var _this8 = this;

            this.groupId = groupId;
            console.log('groupId', groupId);
            this.step = 2;
            this.title = 'Resource';
            this.tab = 'contact';
            this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this8.group = group.payload.data();

              _this8.group.groupTags.forEach(function (element) {
                _this8.postTags.push({
                  val: element,
                  isChecked: false
                });
              });

              _this8.addContactTagControls();

              _this8.addLinkTagControls();

              _this8.addUploadTagControls();
            });
          }
        }]);

        return NewResourcesPage;
      }();

      NewResourcesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__["Keyboard"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
        }, {
          type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_12__["Contacts"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__["Geolocation"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestore"]
        }];
      };

      NewResourcesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-resources',
        template: _raw_loader_new_resources_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_resources_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_12__["Contacts"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__["Geolocation"], _services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestore"]])], NewResourcesPage);
      /***/
    },

    /***/
    "Q9Mr":
    /*!*******************************************************!*\
      !*** ./src/app/new-resources/new-resources.module.ts ***!
      \*******************************************************/

    /*! exports provided: NewResourcesPageModule */

    /***/
    function Q9Mr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewResourcesPageModule", function () {
        return NewResourcesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");
      /* harmony import */


      var _new_resources_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./new-resources.page */
      "Dhd7");

      var routes = [{
        path: '',
        component: _new_resources_page__WEBPACK_IMPORTED_MODULE_8__["NewResourcesPage"]
      }];

      var NewResourcesPageModule = function NewResourcesPageModule() {
        _classCallCheck(this, NewResourcesPageModule);
      };

      NewResourcesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_new_resources_page__WEBPACK_IMPORTED_MODULE_8__["NewResourcesPage"]]
      })], NewResourcesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=new-resources-new-resources-module-es5.js.map