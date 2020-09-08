function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["poll-poll-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/poll/poll.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/poll/poll.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPollPollPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n<ion-content class=\"contact-card-content\">\r\n  <div>\r\n      <ion-card>\r\n          <ion-row class=\"user-preferences-wrapper\">\r\n            <ion-card-header class=\"header\">\r\n              <ion-card-subtitle class=\"addedBy\">\r\n                <img class=\"addedByImg\" src=\"{{poll.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n                 <p><a class=\"addedByTitle\" (click)=\"viewUser(poll.addedByUser.addedByKey)\" ><b>{{poll.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n                  <br/>\r\n                 <span class=\"addedByDate\">posted {{poll.date.toDate() | DateFormat}}</span><br/>\r\n                <a (click)=\"viewGroup(poll.groupId)\" class=\"addedByTitle\">in <b>{{poll.groupName}}</b></a></p>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n              <ion-card-content class=\"message\">\r\n                <b>{{poll.title}}.</b>\r\n\t\t\t      <p class=\"sub-header\" *ngIf=\"!voted && !pollClosed\">* Please vote to see results</p>\r\n  \t\t\t\t\t<form [formGroup]=\"pollOptionForm\">\r\n\t\t\t\t\t  <ion-list class=\"radio-list\" lines=\"full\" *ngIf=\"!voted && !pollClosed\">\r\n\t\t\t\t\t\t<ion-radio-group class=\"radio-group\" formControlName=\"selected_poll_option\">\r\n\t\t\t\t\t\t  <ion-item class=\"radio-item\">\r\n\t\t\t\t\t\t\t<ion-label class=\"radio-label\">{{poll.data.pollOptions[0].name}}</ion-label>\r\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"secondary\" value=\"0\"></ion-radio>\r\n\t\t\t\t\t\t  </ion-item>\r\n\t\t\t\t\t\t  <ion-item class=\"radio-item\">\r\n\t\t\t\t\t\t\t<ion-label class=\"radio-label\">{{poll.data.pollOptions[1].name}}</ion-label>\r\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"secondary\" value=\"1\"></ion-radio>\r\n\t\t\t\t\t\t  </ion-item>\r\n\t\t\t\t\t\t  <ion-item class=\"radio-item\" *ngIf=\"poll.data.pollOptions[2] != null\">\r\n\t\t\t\t\t\t\t<ion-label class=\"radio-label\">{{poll.data.pollOptions[2].name}}</ion-label>\r\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"secondary\" value=\"2\"></ion-radio>\r\n\t\t\t\t\t\t  </ion-item>\r\n\t\t\t\t\t\t  <ion-item class=\"radio-item\" *ngIf=\"poll.data.pollOptions[3] != null\">\r\n\t\t\t\t\t\t\t<ion-label class=\"radio-label\">{{poll.data.pollOptions[3].name}}</ion-label>\r\n\t\t\t\t\t\t\t<ion-radio slot=\"start\" color=\"secondary\" value=\"3\"></ion-radio>\r\n\t\t\t\t\t\t  </ion-item>\r\n\t\t\t\t\t\t</ion-radio-group>\r\n\t\t\t\t\t  </ion-list>\r\n\t\t\t\t\t  </form>\r\n\t\t\t  <div>\r\n\t\t\t  <ion-button *ngIf=\"!voted && !pollClosed\" class=\"submit-btn\" type=\"submit\" expand=\"block\" (click)=\"vote()\" fill=\"outline\" [disabled]=\"!pollOptionForm.valid\">Submit</ion-button>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"canvas\" *ngIf=\"voted || pollClosed\">\r\n\t\t\t\t<!-- <canvas baseChart  [data]=\"chartData\" [options]=\"chartOptions\" [labels]=\"optionsArray\" [chartType]=\"chartType\"></canvas> -->\r\n        <canvas baseChart \r\n        [datasets]=\"chartData\" \r\n        [labels]=\"chartLabels\" \r\n        [options]=\"chartOptions\" \r\n        [colors]=\"chartColors\"\r\n        [legend]=\"showLegend\" \r\n        [chartType]=\"chartType\">\r\n        </canvas>\t\t\t  \r\n        <div id=\"legend\"></div>\r\n      </div>\r\n      <ion-row class=\"tags-wrapper\">\r\n        <div class=\"tags\" *ngFor=\"let tag of poll.postTags\">\r\n          <span class=\"item-rating\">#{{tag.val}}</span>\r\n        </div>\r\n      </ion-row>\r\n        </ion-card-content>\r\n          </ion-row>\r\n\r\n\r\n          <hr class=\"details-divider\">\r\n          <div class=\"reviews-wrapper\">\r\n              <h3 class=\"detail-title-reply\">Replies</h3>\r\n              <ion-row nowrap>\r\n                  <ion-col size=\"9\">\r\n                      <ion-textarea class=\"placeholder\" rows=\"0\" placeholder=\"Type your message\" [(ngModel)]=\"message\">\r\n                      </ion-textarea>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                      <ion-buttons>\r\n                          <ion-button (click)=\"attach()\">\r\n                              <ion-icon name=\"attach\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button color=\"primary\" fill=\"clear\" (click)=\"submitReply()\">\r\n                              <!-- [disabled]=\"!message\">-->\r\n                              <ion-icon name=\"send-sharp\"></ion-icon>\r\n                          </ion-button>\r\n                      </ion-buttons>\r\n                  </ion-col>\r\n              </ion-row>\r\n              <hr class=\"details-divider\">\r\n              <div class=\"user-preferences-wrapper\">\r\n                <div  >\r\n                  <div class=\"reviews\" *ngFor=\"let r of pollReviews\">\r\n                    <ion-row>\r\n                      <ion-col size=\"2\">\r\n                          <img class=\"addedByImgReview\" src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n                      </ion-col>\r\n                      <ion-col class=\"review\" size=\"9\">\r\n                          <span class=\"addedByTitle\"><a (click)=\"viewUser(r.addedByUser.addedByKey)\" >\r\n                            <b>{{r.addedByUser.addedByUsername}}</b></a>, <span class=\"addedByDateReview\">{{r.dateCreated.toDate() | DateFormat}}</span>\r\n                          </span>\r\n                              <br/>\r\n                              <br/>\r\n                              <div class=\"addedByTitle\" [innerHTML]=\"r.review\"></div>\r\n                        </ion-col>\r\n                  </ion-row>\r\n                 </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n      </ion-card>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/poll/poll.module.ts":
  /*!*************************************!*\
    !*** ./src/app/poll/poll.module.ts ***!
    \*************************************/

  /*! exports provided: PollPageModule */

  /***/
  function srcAppPollPollModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PollPageModule", function () {
      return PollPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");
    /* harmony import */


    var _poll_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./poll.page */
    "./src/app/poll/poll.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _poll_page__WEBPACK_IMPORTED_MODULE_8__["PollPage"]
    }];

    var PollPageModule = function PollPageModule() {
      _classCallCheck(this, PollPageModule);
    };

    PollPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_poll_page__WEBPACK_IMPORTED_MODULE_8__["PollPage"]]
    })], PollPageModule);
    /***/
  },

  /***/
  "./src/app/poll/poll.page.scss":
  /*!*************************************!*\
    !*** ./src/app/poll/poll.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppPollPollPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\n.contact-card-content {\n  --background: var(--page-background);\n}\n\n.contact-card-content .user-preferences-wrapper .header {\n  width: 100%;\n}\n\n.contact-card-content .user-preferences-wrapper .message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400px;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper {\n  padding-top: calc(var(--page-margin) / 1);\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags {\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #aa6c39;\n}\n\n.contact-card-content .user-preferences-wrapper .title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Roboto-Medium\", \"Segoe UI Semibold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle {\n  line-height: 20px;\n  width: 100%;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle img {\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .user-preferences-wrapper .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.contact-card-content .user-preferences-wrapper .reviews {\n  margin-bottom: 15px;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByTitle {\n  margin-left: 10px;\n  line-height: 1;\n  margin-right: 5px;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByDateReview {\n  font-style: italic;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByImg {\n  width: 50px;\n  float: left;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByImgReview {\n  width: 50px;\n  margin-left: 10px;\n  float: left;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .review {\n  width: 90%;\n}\n\n.contact-card-content .details-divider {\n  margin: 3px var(--page-margin) 3px;\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.contact-card-content .reviews-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item {\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  background-color: #f9f9fa;\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review-date {\n  padding-top: 3px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .detail-title-reply {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n\n.contact-card-content .reviews-wrapper .placeholder {\n  box-sizing: border-box;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9sbC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxwb2xsXFxwb2xsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9sbC9wb2xsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSw4REFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFSTtFQUNFLFdBQUE7QUNBTjs7QURHSTtFQUNFLGtHQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNETjs7QURJRTtFQUNFLHlDQUFBO0VBQ0EsNENBQUE7QUNGSjs7QURHSTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREVJO0VBRUUsbURBQUE7RUFNQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTk47O0FEWUk7RUFDRSw4R0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNWTjs7QURhSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ1hOOztBRGNJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDWk47O0FEZ0JJO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQ2ROOztBRGlCSTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDZk47O0FEa0JJO0VBQ0UsbUJBQUE7QUNoQk47O0FEa0JJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNoQk47O0FEa0JJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ2hCTjs7QURrQkk7RUFDRSxrQkFBQTtBQ2hCTjs7QURrQkc7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDaEJQOztBRGtCSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ2hCTjs7QURrQks7RUFDRSxVQUFBO0FDaEJQOztBRHFCRTtFQUNFLGtDQUFBO0VBQ0EsaUVBQUE7QUNuQko7O0FEc0JFO0VBQ0Usa0RBQUE7QUNwQko7O0FEcUJJO0VBQ0UsMkNBQUE7QUNuQk47O0FEb0JNO0VBRUUsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUdBLHNCQUFBO0FDckJSOztBRDJCTTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUN6QlI7O0FENEJNO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzFCUjs7QUQ2Qk07RUFDRSxnQkFBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDM0JSOztBRGlDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FDL0JOOztBRGtDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQ2hDTjs7QURtQ0k7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVFQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDakNOIiwiZmlsZSI6InNyYy9hcHAvcG9sbC9wb2xsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcbiAgLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XHJcbn1cclxuXHJcbi5jb250YWN0LWNhcmQtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcblxyXG4gICAgICAgICBcclxuICAudGFncy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAudGFncyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIC5pdGVtLXJhdGluZyB7XHJcbiAgICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcclxuICAgICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcclxuICAgICAgLy8gcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMSk7XHJcbiAgICAgIC8vcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAgIC8vIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjYWE2YzM5O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUtTWVkaXVtJywgJ0hlbHZldGljYSBOZXVlIE1lZGl1bScsJ1JvYm90by1NZWRpdW0nLCAnU2Vnb2UgVUkgU2VtaWJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgIG1hcmdpbjogMSAwIDRweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxle1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIGltZyB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAudGV4dHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucmV2aWV3cyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYWRkZWRCeVRpdGxlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOyAgICBcclxuICAgICAgbWFyZ2luLXJpZ2h0OjVweDsgIFxyXG4gICAgfVxyXG4gICAgLmFkZGVkQnlEYXRlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICB9XHJcbiAgICAuYWRkZWRCeURhdGVSZXZpZXcge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgfVxyXG4gICAuYWRkZWRCeUltZyB7XHJcbiAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICB9XHJcbiAgICAuYWRkZWRCeUltZ1JldmlldyB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAgLnJldmlldyB7XHJcbiAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5kZXRhaWxzLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luOiAzcHggdmFyKC0tcGFnZS1tYXJnaW4pIDNweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAuNCk7XHJcbiAgfVxyXG5cclxuICAucmV2aWV3cy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLnJldmlld3MtbGlzdCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgIC5yZXZpZXctaXRlbSB7XHJcbiAgICAgICAgLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XHJcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ5LCAyNTApO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICAvLyBib3JkZXItY29sb3I6IHJnYigyMzksIDI0MSwgMjQzKTtcclxuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAvLyBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgLnRleHR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmV2aWV3LWRhdGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgICAuZGV0YWlsLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbC10aXRsZS1yZXBseSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAucGxhY2Vob2xkZXIge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcclxuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xyXG4gICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xyXG4gICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuXHJcbn1cclxufVxyXG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xufVxuXG4uY29udGFjdC1jYXJkLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAubWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5tZXNzYWdlIC50YWdzLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAxKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAubWVzc2FnZSAudGFncy13cmFwcGVyIC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciAudGFncyAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2FhNmMzOTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWUtTWVkaXVtXCIsIFwiSGVsdmV0aWNhIE5ldWUgTWVkaXVtXCIsIFwiUm9ib3RvLU1lZGl1bVwiLCBcIlNlZ29lIFVJIFNlbWlib2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbWFyZ2luOiAxIDAgNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5zdWJ0aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5zdWJ0aXRsZSBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5yZXZpZXdzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5VGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmFkZGVkQnlEYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5RGF0ZVJldmlldyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5SW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmFkZGVkQnlJbWdSZXZpZXcge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnJldmlldyB7XG4gIHdpZHRoOiA5MCU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbjogM3B4IHZhcigtLXBhZ2UtbWFyZ2luKSAzcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjQpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0ge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAuaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy1kYXRlIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLmRldGFpbC10aXRsZS1yZXBseSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5wbGFjZWhvbGRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xuICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgZmxleC1ncm93OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/poll/poll.page.ts":
  /*!***********************************!*\
    !*** ./src/app/poll/poll.page.ts ***!
    \***********************************/

  /*! exports provided: PollPage */

  /***/
  function srcAppPollPollPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PollPage", function () {
      return PollPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);

    var PollPage =
    /*#__PURE__*/
    function () {
      function PollPage(route, router, loadingProvider, dataProvider, firestore) {
        _classCallCheck(this, PollPage);

        this.route = route;
        this.router = router;
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        this.firestore = firestore; // Data

        this.chartData = [{
          data: [],
          label: 'Poll Results',
          backgroundColor: ["#f43004", "#decf3f", "#FFA500", "#9b59b6"]
        }]; // Options

        this.chartOptions = {
          legend: {
            display: true
          },
          legendCallback: function legendCallback(chart) {
            var text = [];
            text.push('<ul class="0-legend">');
            var ds = this.chartData.datasets[0];
            var sum = ds.data.reduce(function add(a, b) {
              return a + b;
            }, 0);

            for (var i = 0; i < ds.data.length; i++) {
              text.push('<li>');
              var perc = Math.round(100 * ds.data[i] / sum); // tslint:disable-next-line: max-line-length

              text.push('<span style="background-color:' + ds.backgroundColor[i] + '">' + '</span>' + this.chartData.labels[i] + ' (' + ds.data[i] + ') (' + perc + '%)');
              text.push('</li>');
            }

            text.push('</ul>');
            return text.join('');
          }
        };
        this.chartType = 'pie';
        this.poll = {
          pollTags: [],
          data: {
            pollOptions: [{
              name: ''
            }, {
              name: ''
            }, {
              name: ''
            }, {
              name: ''
            }]
          },
          addedByUser: {},
          date: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].Timestamp.now()
        };
        this.pollOptionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          selected_poll_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });
        this.getPollDetails();
      }

      _createClass(PollPage, [{
        key: "getPollDetails",
        value: function getPollDetails() {
          var _this = this;

          this.pollId = this.route.snapshot.params.id;
          this.dataProvider.getPollDetails(this.pollId).snapshotChanges().subscribe(function (p) {
            if (p) {
              console.log('p:', p);
              var poll = p.payload.data();
              poll.reactions = [];
              poll.key = p.key;
              _this.title = p.payload.data().description;
              var totalReactionCount = 0;
              var totalReviewCount = 0;
              poll.postTags = p.payload.data().postTags.filter(function (x) {
                return x.isChecked !== false;
              });
              var pollOption0Votes;
              var pollOption1Votes;
              var pollOption2Votes;
              var pollOption3Votes;
              var pollOption0Name;
              var pollOption1Name;
              var pollOption2Name;
              var pollOption3Name;
              pollOption0Name = poll.data.pollOptions[0].name;
              pollOption1Name = poll.data.pollOptions[1].name;

              if (poll.data.pollOptions[2] != null) {
                pollOption2Name = poll.data.pollOptions[2].name;
              }

              if (poll.data.pollOptions[3] != null) {
                pollOption3Name = poll.data.pollOptions[3].name;
              }

              if (poll.data.pollOptions[0].members == null) {
                pollOption0Votes = 0;
              } else {
                pollOption0Votes = poll.data.pollOptions[0].members.length;
              }

              if (poll.data.pollOptions[1].members == null) {
                pollOption1Votes = 0;
              } else {
                pollOption1Votes = poll.data.pollOptions[1].members.length;
              }

              if (poll.data.pollOptions[2] == null || poll.data.pollOptions[2].members == null) {
                pollOption2Votes = 0;
              } else {
                pollOption2Votes = poll.data.pollOptions[2].members.length;
              }

              if (poll.data.pollOptions[3] == null || poll.data.pollOptions[3].members == null) {
                pollOption3Votes = 0;
              } else {
                pollOption3Votes = poll.data.pollOptions[3].members.length;
              } // this.optionsArray = [pollOption0Name, pollOption1Name, pollOption2Name, pollOption3Name];
              // this.chartData = [pollOption0Votes, pollOption1Votes, pollOption3Votes, pollOption3Votes];


              _this.chartLabels = [];
              _this.chartData[0].data = [];

              _this.chartData[0].data.push(pollOption0Votes);

              _this.chartData[0].data.push(pollOption1Votes);

              _this.chartLabels.push(pollOption0Name);

              _this.chartLabels.push(pollOption1Name);

              if (poll.data.pollOptions[2] != null) {
                _this.chartData[0].data.push(pollOption2Votes);

                _this.chartLabels.push(pollOption2Name);
              }

              if (poll.data.pollOptions[3] != null) {
                _this.chartData[0].data.push(pollOption3Votes);

                _this.chartLabels.push(pollOption3Name);
              }

              _this.selectedOption = '';
              _this.voted = false;
              var today = new Date();
              var de = poll.data.dateEnding.toDate();

              if (de < today) {
                _this.pollClosed = true;
              } else {
                _this.pollClosed = false;
              }

              poll.data.pollOptions.forEach(function (pollOption) {
                if (pollOption.members != null) {
                  pollOption.members.forEach(function (member) {
                    if (member === _this.dataProvider.getCurrentUserId()) {
                      _this.voted = true;
                    }
                  });
                }
              }); // get reviews list

              _this.firestore.collection('posts').doc(_this.pollId).collection('reviews').ref.orderBy("dateCreated", "desc").onSnapshot(function (reviews) {
                _this.poll.reviews = [];
                p.reviews = [];
                reviews.forEach(function (element) {
                  var review = element.data();
                  review.key = element.id;
                  p.reviews.push(review);
                });
                totalReviewCount = p.reviews.length;
                p.totalReviewCount = totalReviewCount;
                _this.pollReviews = p.reviews; // if (p.reviews !== undefined) {
                //     this.postReviews = [];
                //     let values = Object.keys(p.reviews).map(function(e) {
                //       p.reviews[e].key = e;
                //       return p.reviews[e];
                //     });
                //     this.postReviews = values;
                //     this.postReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
                //   }
              });

              _this.poll = poll;
              _this.title = _this.poll.title;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "vote",
        value: function vote() {
          var pollOptionIndex = this.pollOptionForm.value["selected_poll_option"];
          var members = [];
          members.push(this.dataProvider.getCurrentUserId());
          this.poll.data.pollOptions[pollOptionIndex].members = members;
          this.voted = true;
          this.dataProvider.updatePollMembers(this.pollId, this.poll.data);
          this.ngOnInit();
        }
      }, {
        key: "submitReply",
        value: function submitReply() {
          var _this2 = this;

          this.message = this.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
          var review;
          var currentUserName;
          this.dataProvider.getCurrentUser().get().subscribe(function (account) {
            if (account) {
              currentUserName = account.data().username;
              review = {
                dateCreated: new Date(),
                addedByUser: {
                  addedByKey: _this2.dataProvider.getCurrentUserId(),
                  addedByUsername: account.data().username,
                  addedByImg: account.data().img
                },
                review: _this2.message
              };

              _this2.dataProvider.updatePostReviews(_this2.pollId, review);

              _this2.message = '';
            }
          });
        }
      }, {
        key: "attach",
        value: function attach() {//   this.actionSheet.create({
          //     header: 'Choose attachments',
          //     buttons: [{
          //       text: 'Camera',
          //       handler: () => {
          //         this.imageProvider.uploadPhotoMessage(this.conversationId, this.camera.PictureSourceType.CAMERA).then((url) => {
          //           this.message = url;
          //           this.submitReply('image');
          //         });
          //       }
          //     }, {
          //       text: 'Photo Library',
          //       handler: () => {
          //         this.imageProvider.uploadPhotoMessage(this.conversationId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
          //           this.message = url;
          //           this.submitReply('image');
          //         });
          //       }
          //     },
          //     {
          //       text: 'Video',
          //       handler: () => {
          //         this.imageProvider.uploadVideoMessage(this.conversationId).then(url => {
          //           this.message = url;
          //           this.submitReply('video');
          //         });
          //       }
          //     }
          //       , {
          //       text: 'Location',
          //       handler: () => {
          //         this.geolocation.getCurrentPosition({
          //           timeout: 5000
          //         }).then(res => {
          //           let locationMessage = 'Location:<br> lat:' + res.coords.latitude + '<br> lng:' + res.coords.longitude;
          //           let mapUrl = '<a href=\'https://www.google.com/maps/search/' 
          //           + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';
          //           let confirm = this.alertCtrl.create({
          //             header: 'Your Location',
          //             message: locationMessage,
          //             buttons: [{
          //               text: 'cancel',
          //               handler: () => {
          //                 console.log('canceled');
          //               }
          //             }, {
          //               text: 'Share',
          //               handler: () => {
          //                 this.message = locationMessage + '<br>' + mapUrl;
          //                 this.submitReply('location');
          //               }
          //             }]
          //           }).then(r => r.present());
          //         }, locationErr => {
          //           console.log('Location Error' + JSON.stringify(locationErr));
          //         });
          //       }
          //     }, {
          //       text: 'Contact',
          //       handler: () => {
          //         this.contacts.pickContact().then(data => {
          //           let name;
          //           if (data.displayName !== null) { name = data.displayName; }
          //           else { name = data.name.givenName + ' ' + data.name.familyName; }
          //           this.message = '<b>Name:</b> ' + name + '<br><b>Mobile:</b> <a href=\'tel:'
          //               + data.phoneNumbers[0].value + '\'>' + data.phoneNumbers[0].value + '</a>';
          //           this.submitReply('contact');
          //         }, err => {
          //           console.log(err);
          //         })
          //       }
          //     }, {
          //       text: 'cancel',
          //       role: 'cancel',
          //       handler: () => {
          //         console.log('cancelled');
          //       }
          //     }]
          //   }).then(r => r.present());
          // }
        }
      }, {
        key: "viewUser",
        value: function viewUser(userId) {
          var loggedInUserId = this.dataProvider.getCurrentUserId();
          console.log(loggedInUserId, userId);

          if (loggedInUserId === userId) {
            this.router.navigateByUrl('/profile');
          } else {
            this.router.navigateByUrl('/userinfo/' + userId);
          }
        }
      }, {
        key: "viewGroup",
        value: function viewGroup(groupId) {
          this.router.navigateByUrl('/group/' + groupId);
        }
      }]);

      return PollPage;
    }();

    PollPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }];
    };

    PollPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-poll',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./poll.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/poll/poll.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./poll.page.scss */
      "./src/app/poll/poll.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])], PollPage);
    /***/
  }
}]);
//# sourceMappingURL=poll-poll-module-es5.js.map