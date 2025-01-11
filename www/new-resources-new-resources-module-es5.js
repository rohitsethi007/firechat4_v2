(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button *ngIf=\"tab=='contact'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!contactForm.valid\" (click)=\"submitContactForm()\">Post</ion-button>\n      <ion-button *ngIf=\"tab=='upload'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!uploadForm.valid\" (click)=\"submitUploadForm()\">Post</ion-button>\n      <ion-button *ngIf=\"tab=='link'\" color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!weblinkForm.valid\" (click)=\"submitLinkForm()\">Post</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-segment *ngIf=\"step==2\" color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"contact\">\n      Contact\n    </ion-segment-button>\n    <ion-segment-button value=\"upload\">\n      Upload\n    </ion-segment-button>\n    <ion-segment-button value=\"link\">\n      Link\n    </ion-segment-button>\n  </ion-segment>\n</ion-header> \n\n<ion-content  class=\"forms-validations-content\">\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\">\n      <ion-list>\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.key)\"> \n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n              <b>{{group.name}}</b><br/>\n              {{group.description}}\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step==2\">\n  <div [ngSwitch]=\"tab\">\n    <div *ngSwitchCase=\"'contact'\">\n      <form class=\"validations-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"submitContactForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header class=\"header\">\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"name\" clearInput placeholder=\"Enter the name of the contact\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the contact\"></ion-textarea>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"phones\" clearInput placeholder=\"Enter one or more phone numbers (comma separated)\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"email\" clearInput placeholder=\"Enter an email address if available\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\n          </ion-list-header>\n    \n          <div class=\"reviews-wrapper\">\n          <ion-row>\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of contactForm.controls.tags.controls; let i = index\">\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n            </div>\n          </ion-row>\n  \n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.tags\">\n              <div class=\"error-message\" *ngIf=\"contactForm.get('tags').hasError(validation.type) && (contactForm.get('tags').dirty || contactForm.get('tags').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          </div>\n        </ion-list>\n  \n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!contactForm.valid\">Submit</ion-button> -->\n\n      </form>\n    </div>\n    <div *ngSwitchCase=\"'upload'\">\n   <form class=\"validations-form\" [formGroup]=\"uploadForm\" (ngSubmit)=\"submitUploadForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header class=\"header\">\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-buttons>\n              <ion-button expand=\"block\" color=\"secondary\" (click)=\"upload()\"><ion-icon name=\"attach\"></ion-icon>Attach a File/Document</ion-button>\n            </ion-buttons>\n          </ion-item>\n        </ion-list>\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header>\n            <ion-label class=\"header-title\">Select relevant tags</ion-label>\n          </ion-list-header>\n    \n          <div class=\"reviews-wrapper\">\n          <ion-row>\n            <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of uploadForm.controls.tags.controls; let i = index\">\n              <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n              <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n              <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n            </div>\n          </ion-row>\n  \n          <div class=\"error-container\">\n            <ng-container *ngFor=\"let validation of validations.tags\">\n              <div class=\"error-message\" *ngIf=\"uploadForm.get('tags').hasError(validation.type) && (uploadForm.get('tags').dirty || uploadForm.get('tags').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>{{ validation.message }}</span>\n              </div>\n            </ng-container>\n          </div>\n          </div>\n        </ion-list>\n  \n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!uploadForm.valid\">Submit</ion-button> -->\n\n      </form>\n    </div>\n    <div *ngSwitchCase=\"'link'\">\n      <form class=\"validations-form\" [formGroup]=\"weblinkForm\" (ngSubmit)=\"submitLinkForm()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n          <ion-list-header class=\"header\">\n            posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n          </ion-list-header>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n          </ion-item>\n          <ion-item class=\"input-item\">\n            <ion-input type=\"text\" formControlName=\"link\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\n          </ion-item>\n          <div>\n            <hr/>\n            <div>\n              <div>\n                <img *ngIf=\"metaicon\" [src]=\"metaicon\"/>      \n              </div>\n              <div>\n                <h2>{{metatitle}}</h2>\n                <span>{{metadescription}}</span>\n              </div>\n              <div> <h6></h6>{{metasite}}</div>\n            </div>\n          </div>\n        </ion-list>\n          <ion-list class=\"inputs-list\" lines=\"full\">\n            <ion-list-header>\n              <ion-label class=\"header-title\">Select relevant tags</ion-label>\n            </ion-list-header>\n      \n            <div class=\"reviews-wrapper\">\n            <ion-row>\n              <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of weblinkForm.controls.tags.controls; let i = index\">\n                <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n                <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n                <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n              </div>\n            </ion-row>\n    \n            <div class=\"error-container\"> \n              <ng-container *ngFor=\"let validation of validations.tags\">\n                <div class=\"error-message\" *ngIf=\"weblinkForm.get('tags').hasError(validation.type) && (weblinkForm.get('tags').dirty || weblinkForm.get('tags').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\n                  <span>{{ validation.message }}</span>\n                </div>\n              </ng-container>\n            </div>\n            </div>\n          </ion-list>\n  \n        <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!weblinkForm.valid\">Submit</ion-button> -->\n\n      </form> \n    </div>\n  </div>\n</div>\n</ion-content>";
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


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlc291cmNlcy9uZXctcmVzb3VyY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FBQ0Y7O0FBR0c7RUFDQywyQ0FBQTtBQUFKOztBQUVJO0VBQ0UsMkVBQUE7QUFBTjs7QUFFTTtFQUNFLGVBQUE7QUFBUjs7QUFHUTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBRFY7O0FBR1U7RUFDRSxnREFBQTtFQUNBLGNBQUE7QUFEWjs7QUFPSTtFQUNFLDBCQUFBO0FBTE47O0FBU0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBUUU7RUFFRSxtREFBQTtFQUNRLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFQWjs7QUFRWTtFQUNFLHlCQUFBO0FBTmQ7O0FBUVk7RUFDRSx5QkFBQTtBQU5kOztBQVNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFQSjs7QUFhQTtFQUNFLFdBQUE7QUFWRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVEY7O0FBV0E7RUFDRSxVQUFBO0FBVEYiLCJmaWxlIjoic3JjL2FwcC9uZXctcmVzb3VyY2VzL25ldy1yZXNvdXJjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG59XG5cbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IHtcbiAgIC52YWxpZGF0aW9ucy1mb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLmlucHV0cy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5lcnJvci1jb250YWluZXIge1xuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN1Ym1pdC1idG4ge1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuICB9XG5cbiAgLnRhZ3Mge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAuaXRlbS1yYXRpbmcge1xuICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMFwiXSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmIyYjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzc3YztcbiAgICAgICAgICAgIH1cbiAgfVxuICBpb24tY2hlY2tib3gge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG59XG59XG5cbi51cGxvYWRzIHtcbiAgbWFyZ2luOiA1cHg7XG4uaW1nLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaW1nLXdyYXAgLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIHJpZ2h0OiAtN3B4O1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDVweCAycHggMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pbWctd3JhcDpob3ZlciAuY2xvc2Uge1xuICBvcGFjaXR5OiAxO1xufVxufVxuXG4iXX0= */";
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
      "UbJi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _services_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/image.service */
      "mnRn");
      /* harmony import */


      var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/contacts/ngx */
      "TzAO");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "PLH8");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
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
      "Jgta");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

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

        return _createClass(NewResourcesPage, [{
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

            this.dataProvider.getCurrentUser().then(function (u) {
              u.snapshotChanges().subscribe(function (value) {
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
                    _this4.firestore.collection('groups').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_17__["default"].firestore.FieldPath.documentId(), 'in', _this4.user.groups).get().then(function (group) {
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
            this.dataProvider.getCurrentUser().then(function (u) {
              u.snapshotChanges().subscribe(function (account) {
                console.log(account);
              });
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
              buttons: [//   {
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

      var NewResourcesPageModule = /*#__PURE__*/_createClass(function NewResourcesPageModule() {
        _classCallCheck(this, NewResourcesPageModule);
      });

      NewResourcesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_new_resources_page__WEBPACK_IMPORTED_MODULE_8__["NewResourcesPage"]]
      })], NewResourcesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=new-resources-new-resources-module-es5.js.map