(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ion-buttons slot=\"end\"> \r\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true\" (click)=\"newEvent()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t</ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"contact-card-content\">\r\n  <div>\r\n      <ion-card>\r\n          <ion-row class=\"user-preferences-wrapper\">\r\n              <ion-card-header class=\"subtitle\">\r\n                  <img src=\"{{event.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{event.addedByUser.addedByUsername}}, posted {{event.dateCreated | DateFormat}}\r\n                  <ion-card-title class=\"title\">{{event.title}}</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content class=\"message\">\r\n                  {{event.eventDate}} at {{event.eventTime}}\r\n                  <br/>\r\n                  <br/> {{event.address}}\r\n                  <br/>\r\n                  <br/> {{event.link}}\r\n              </ion-card-content>\r\n          </ion-row>\r\n          <ion-row class=\"user-preferences-wrapper message\"> \r\n              <ion-col>\r\n                  <ion-buttons>\r\n                      <ion-button (click)=\"submitReactionEvent(event, 'Checkin')\">\r\n                          <div *ngIf=\"event.showCheckin\">\r\n                              <ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\"></ion-icon> <span class=\"text\">Checkin</span></div>\r\n                          <div *ngIf=\"!event.showCheckin\">\r\n                              <ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin.svg\"></ion-icon> <span class=\"text\">Checkin</span></div>\r\n                      </ion-button>\r\n                  </ion-buttons>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-buttons>\r\n                      <ion-button (click)=\"submitReactionEvent(event, 'Thanks')\">\r\n                          <div *ngIf=\"event.showSmiley\">\r\n                              <ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\"></ion-icon> <span class=\"text\">Thanks</span></div>\r\n                          <div *ngIf=\"!event.showSmiley\">\r\n                              <ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile.svg\"></ion-icon> <span class=\"text\">Thanks</span></div>\r\n                      </ion-button>\r\n                  </ion-buttons>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-buttons>\r\n                      <ion-button (click)=\"showEventReactionsList(event)\">\r\n                          <div>\r\n                              <ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon>\r\n                              <ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{event.totalReactionCount}}</span></div>\r\n                      </ion-button>\r\n                  </ion-buttons>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-buttons>\r\n                      <ion-button>\r\n                          <div>\r\n                              <ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{event.totalReviewCount}}</span></div>\r\n                      </ion-button>\r\n                  </ion-buttons>\r\n              </ion-col>\r\n          </ion-row>\r\n          <hr class=\"details-divider\">\r\n          <div class=\"reviews-wrapper\">\r\n              <h3 class=\"detail-title\">Selected Tags</h3>\r\n              <ion-row>\r\n                  <div class=\"tags\" *ngFor=\"let tag of event.eventTags\">\r\n                      <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{tag.val}}</span>\r\n                      <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{tag.val}}</span>\r\n                  </div>\r\n              </ion-row>\r\n          </div>\r\n          <hr class=\"details-divider\">\r\n          <div class=\"reviews-wrapper\">\r\n              <h3 class=\"detail-title-reply\">Replies</h3>\r\n              <ion-row nowrap>\r\n                  <ion-col size=\"9\">\r\n                      <ion-textarea class=\"placeholder\" rows=\"0\" placeholder=\"Type your message\" [(ngModel)]=\"message\">\r\n                      </ion-textarea>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                      <ion-buttons>\r\n                          <ion-button (click)=\"attach()\">\r\n                              <ion-icon name=\"attach\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button color=\"primary\" fill=\"clear\" (click)=\"submitReply()\">\r\n                              <!-- [disabled]=\"!message\">-->\r\n                              <ion-icon name=\"send-sharp\"></ion-icon>\r\n                          </ion-button>\r\n                      </ion-buttons>\r\n                  </ion-col>\r\n              </ion-row>\r\n              <div class=\"reviews-list\">\r\n                  <div class=\"review-item\" *ngFor=\"let r of eventReviews\">\r\n                      <ion-row>\r\n                          <ion-col size=\"2\" class=\"review\">\r\n                              <img src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n                          </ion-col>\r\n                          <ion-col size=\"10\">\r\n                              <app-text-shell class=\"comment-detail-author-name\" [data]=\"r.addedByUser.addedByUsername\"></app-text-shell>\r\n                              <app-text-shell [data]=\"r.review\"></app-text-shell>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                          <ion-col>\r\n                              <app-text-shell class=\"review-date\" [data]=\"r.dateCreated | DateFormat\"></app-text-shell>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n      </ion-card>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/event/event.module.ts":
/*!***************************************!*\
  !*** ./src/app/event/event.module.ts ***!
  \***************************************/
/*! exports provided: EventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.page */ "./src/app/event/event.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");









const routes = [
    {
        path: '',
        component: _event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]
    }
];
let EventPageModule = class EventPageModule {
};
EventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]]
    })
], EventPageModule);



/***/ }),

/***/ "./src/app/event/event.page.scss":
/*!***************************************!*\
  !*** ./src/app/event/event.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #bbb2b2;\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-highlighted-background);\n}\n\n.contact-card-content {\n  --background: var(--page-background);\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n\n.contact-card-content .user-details-wrapper {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin) var(--page-margin);\n  background-color: var(--page-highlighted-background);\n  color: var(--ion-color-light);\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.contact-card-content .user-details-wrapper .user-avatar {\n  border: solid 3px var(--ion-color-light);\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper {\n  /*        padding-left: calc(var(--page-margin) / 2); */\n  text-align: center;\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-name {\n  margin: 0px 0px 0px;\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-handle {\n  margin: 0px;\n  font-weight: 400;\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper {\n  text-align: center;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-value {\n  margin-right: 5px;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-name {\n  font-size: 16px;\n}\n\n.contact-card-content .user-details-wrapper .user-bio {\n  margin: var(--page-margin) 0px 0px;\n  line-height: 1.2;\n  font-size: 14px;\n}\n\n.contact-card-content .user-preferences-wrapper {\n  --ion-grid-column-padding: 0px;\n}\n\n.contact-card-content .user-preferences-wrapper .message {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400px;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.contact-card-content .user-preferences-wrapper .title {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", Helvetica-Bold, \"Roboto-Medium\", \"Segoe UI Semibold\", Arial-Bold, sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle {\n  line-height: 20px;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle img {\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .user-preferences-wrapper .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .user-preferences-wrapper .preference-name {\n  margin: 0px 0px 5px;\n  font-size: 16px;\n}\n\n.contact-card-content .user-preferences-wrapper .bookmark {\n  font-size: 12px;\n  text-align: right;\n}\n\n.contact-card-content .user-preferences-wrapper .preference-value {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--ion-color-dark-tint);\n  white-space: pre-wrap;\n}\n\n.contact-card-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.contact-card-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.contact-card-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.contact-card-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-light-contrast);\n  --checkbox-tag-background: var(--ion-color-light-shade);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.contact-card-content .details-divider {\n  margin: 3px var(--page-margin) 3px;\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.contact-card-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.contact-card-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.contact-card-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: var(--page-rating-1-color);\n}\n\n.contact-card-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: var(--page-rating-2-color);\n}\n\n.contact-card-content .reviews-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item {\n  box-sizing: border-box;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, HelveticaNeue, \"Helvetica Neue\", Helvetica, Roboto, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  background-color: #f9f9fa;\n  max-width: 100%;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  vertical-align: bottom;\n  border-color: #eff1f3;\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .comment-detail-author-name {\n  color: #333333;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review-date {\n  padding-top: 3px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review img {\n  height: 25px;\n  width: 25px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .reviews-wrapper .details-divider {\n  margin: 5px 0px;\n}\n\n.contact-card-content .reviews-wrapper .all-reviews-btn {\n  margin: 5px 0px;\n}\n\n.contact-card-content .reviews-wrapper .write-reviews-btn {\n  margin: var(--page-margin) 0px 0px;\n}\n\n.contact-card-content .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.contact-card-content .detail-title-reply {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n\n.contact-card-content .placeholder {\n  box-sizing: border-box;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, HelveticaNeue, \"Helvetica Neue\", Helvetica, Roboto, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcZXZlbnRcXGV2ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZXZlbnQvZXZlbnQucGFnZS5zY3NzIiwic3JjL2FwcC9ldmVudC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxjaGVja2JveC10YWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHNDQUFBO0VBQ0EsOENBQUE7RUFFQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBR0EsOERBQUE7QUNQSjs7QURZSTtFQUNFLGdEQUFBO0FDVE47O0FEY0U7RUFDRSxvQ0FBQTtFQUVBLGdDQUFBO1VBQUEsd0JBQUE7QUNaSjs7QURjSTtFQUNFLDhCQUFBO0VBRUEsa0RBQUE7RUFDQSxvREFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2JOOztBRGVNO0VBQ0Usd0NBQUE7QUNiUjs7QURnQk07RUFDTix1REFBQTtFQUNRLGtCQUFBO0FDZFI7O0FEZ0JRO0VBQ0UsbUJBQUE7QUNkVjs7QURpQlE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNmVjs7QURtQk07RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0FDakJSOztBRG1CUTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDakJWOztBRG9CUTtFQUNFLGVBQUE7QUNsQlY7O0FEc0JNO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNwQlI7O0FEd0JJO0VBQ0UsOEJBQUE7QUN0Qk47O0FEd0JNO0VBQ0UsZ0pBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3RCUjs7QUR5Qk07RUFDRSx3TEFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN2QlI7O0FEeUJNO0VBQ0UsaUJBQUE7QUN2QlI7O0FEeUJNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDdkJSOztBRDBCTTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUN4QlI7O0FEMkJPO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxnSkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3pCVDs7QUQyQk07RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUN6QlI7O0FENEJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDMUJSOztBRDZCTTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQzNCUjs7QUQrQkk7RUFDSSx3RkFBQTtFRTdJTiwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtBRGlIRjs7QUMvR0M7RUFFQyxvQkFBQTtFQUNFLHdCQUFBO0VBQ0YsMEJBQUE7RUFDQSxxREFBQTtFQUNFLDJDQUFBO0FEZ0hKOztBQzlHSTtFQUNELHVCQUFBO0FEZ0hIOztBQzdHRTtFQUNJLDREQUFBO0VBQ0Esa0RBQUE7QUQrR047O0FDNUdJO0VBQ0UsWUFBQTtBRDhHTjs7QUM1R007RUFFRSxVQUFBO0FENkdSOztBQ3pHRTtFQUNDLFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEMkdOOztBQ3hHRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUR3R0g7O0FETEk7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDT047O0FEQU07RUFDRSw2Q0FBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSw0REFBQTtBQ0VSOztBREdJO0VBQ00sd0NBQUE7QUNEVjs7QURHTTtFQUNFLHFEQUFBO0VBQ0EsdURBQUE7RUFDQSxzREFBQTtFQUNBLDREQUFBO0FDRFI7O0FET0k7RUFFRSxrQ0FBQTtFQUNBLGlFQUFBO0FDTk47O0FEU0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDUE47O0FEUUk7RUFFRSxtREFBQTtFQUNRLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNQZDs7QURRYztFQUNBLDRDQUFBO0FDTmQ7O0FEUWM7RUFDQSw0Q0FBQTtBQ05kOztBRFVJO0VBQ0Usa0RBQUE7QUNSTjs7QURVTTtFQUNFLDJDQUFBO0FDUlI7O0FEVVE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRJQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNSVjs7QURVVTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSWjs7QURVVTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUNSWjs7QURXVztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0pBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNUYjs7QURXVztFQUNFLGdCQUFBO0VBQ0QsZ0pBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNUWjs7QURXVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ1RaOztBRGNNO0VBQ0UsZUFBQTtBQ1pSOztBRGVNO0VBQ0UsZUFBQTtBQ2JSOztBRGdCTTtFQUNFLGtDQUFBO0FDZFI7O0FEa0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUNoQk47O0FEa0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FDaEJOOztBRGtCSTtFQUNFLHNCQUFBO0VBQ0YsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNElBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9ldmVudC9ldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbkBpbXBvcnQgXCIuLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC1hbGVydFwiO1xyXG5AaW1wb3J0IFwiLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcclxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gIFxyXG4gICAgLS1wYWdlLXJhdGluZy01LWNvbG9yOiAjN2NlMTk4O1xyXG4gICAgLS1wYWdlLXJhdGluZy00LWNvbG9yOiAjYThlMDdjO1xyXG4gICAgLS1wYWdlLXJhdGluZy0zLWNvbG9yOiAjY2VlMDdjO1xyXG4gICAgLS1wYWdlLXJhdGluZy0yLWNvbG9yOiAjZTBjNzdjO1xyXG4gICAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjYmJiMmIyO1xyXG4gIFxyXG5cclxuICAgIC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xyXG4gIH1cclxuICBcclxuICAvLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuICBpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAuY29udGFjdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gICAgLy8gVG8gZml4IGhhbGYgcGl4ZWwgbGluZSBiZXR3ZWVuIGlvbi1oZWFkZXIgYW5kICBpb24tY29udGVudFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIFxyXG4gICAgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgIC51c2VyLWF2YXRhciB7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAudXNlci1pbmZvLXdyYXBwZXIge1xyXG4vKiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpOyAqL1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgICAgICAudXNlci1uYW1lIHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC51c2VyLWhhbmRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC51c2VyLXN0YXRzLXdyYXBwZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICBcclxuICAgICAgICAudXNlci1zdGF0LXZhbHVlIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnVzZXItc3RhdC1uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnVzZXItYmlvIHtcclxuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbi8vICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnSGVsdmV0aWNhTmV1ZS1NZWRpdW0nLCAnSGVsdmV0aWNhIE5ldWUgTWVkaXVtJywgSGVsdmV0aWNhLUJvbGQsICdSb2JvdG8tTWVkaXVtJywgJ1NlZ29lIFVJIFNlbWlib2xkJywgQXJpYWwtQm9sZCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIG1hcmdpbjogMSAwIDRweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB9XHJcbiAgICAgIC5zdWJ0aXRsZXtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuc3VidGl0bGUgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgLnRleHR7XHJcbiAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICB9XHJcbiAgICAgIC5wcmVmZXJlbmNlLW5hbWUge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5ib29rbWFyayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucHJlZmVyZW5jZS12YWx1ZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrYm94LXRhZ3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XHJcbiAgICBcclxuICAgICAgICBAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcclxuICAgIFxyXG4gICAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgJi5zcXVhcmUtY2hlY2tib3gtdGFncyB7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIFxyXG4gICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTsgXHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcclxuICAgICYucm91bmRlZC1jaGVja2JveC10YWdzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgICBcclxuICAgICAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgXHJcblxyXG4gICAgLmRldGFpbHMtZGl2aWRlciB7XHJcbiAgICAgIC8vIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG4gICAgICBtYXJnaW46IDNweCB2YXIoLS1wYWdlLW1hcmdpbikgM3B4O1xyXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRhZ3Mge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAuaXRlbS1yYXRpbmcge1xyXG4gICAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0xLWNvbG9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAgIC5yZXZpZXdzLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgICAgIC5yZXZpZXdzLWxpc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgXHJcbiAgICAgICAgLnJldmlldy1pdGVtIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcclxuICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcclxuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XHJcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgSGVsdmV0aWNhTmV1ZSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjUwKTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM5LCAyNDEsIDI0Myk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAuY29tbWVudC1kZXRhaWwtYXV0aG9yLW5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLnJldmlldy1kYXRle1xyXG4gICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAucmV2aWV3IGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmRldGFpbHMtZGl2aWRlciB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5hbGwtcmV2aWV3cy1idG4ge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAud3JpdGUtcmV2aWV3cy1idG4ge1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsLXRpdGxlLXJlcGx5IHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBIZWx2ZXRpY2FOZXVlLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS1yYXRpbmctNS1jb2xvcjogIzdjZTE5ODtcbiAgLS1wYWdlLXJhdGluZy00LWNvbG9yOiAjYThlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTMtY29sb3I6ICNjZWUwN2M7XG4gIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2UwYzc3YztcbiAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjYmJiMmIyO1xuICAtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcbn1cblxuLmNvbnRhY3QtY2FyZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWF2YXRhciB7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWluZm8td3JhcHBlciB7XG4gIC8qICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItaW5mby13cmFwcGVyIC51c2VyLW5hbWUge1xuICBtYXJnaW46IDBweCAwcHggMHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItaGFuZGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLXN0YXRzLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1zdGF0cy13cmFwcGVyIC51c2VyLXN0YXQtdmFsdWUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1zdGF0cy13cmFwcGVyIC51c2VyLXN0YXQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItYmlvIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAubWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAudGl0bGUge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhTmV1ZS1NZWRpdW1cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBNZWRpdW1cIiwgSGVsdmV0aWNhLUJvbGQsIFwiUm9ib3RvLU1lZGl1bVwiLCBcIlNlZ29lIFVJIFNlbWlib2xkXCIsIEFyaWFsLUJvbGQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbWFyZ2luOiAxIDAgNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5zdWJ0aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnN1YnRpdGxlIGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnByZWZlcmVuY2UtbmFtZSB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5ib29rbWFyayB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAucHJlZmVyZW5jZS12YWx1ZSB7XG4gIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5jaGVja2JveC10YWdzIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLnJvdW5kZWQtdGFnIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLnRhZy1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Muc3F1YXJlLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAuZGV0YWlscy1kaXZpZGVyIHtcbiAgbWFyZ2luOiAzcHggdmFyKC0tcGFnZS1tYXJnaW4pIDNweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIDAuNCk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnRhZ3Mge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuMzUpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0xLWNvbG9yKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0yLWNvbG9yKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgSGVsdmV0aWNhTmV1ZSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmYTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBib3JkZXItY29sb3I6ICNlZmYxZjM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAuY29tbWVudC1kZXRhaWwtYXV0aG9yLW5hbWUge1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAudGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LWRhdGUge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldyBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAuZGV0YWlscy1kaXZpZGVyIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLmFsbC1yZXZpZXdzLWJ0biB7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC53cml0ZS1yZXZpZXdzLWJ0biB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5kZXRhaWwtdGl0bGUtcmVwbHkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnBsYWNlaG9sZGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgSGVsdmV0aWNhTmV1ZSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICBmbGV4LWdyb3c6IDE7XG59IiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcclxuICAvLyBEZWZhdWx0IHZhbHVlc1xyXG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xyXG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XHJcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xyXG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG5cclxuXHQuY2hlY2tib3gtdGFnIHtcclxuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcclxuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xyXG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XHJcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xyXG5cclxuICAgICYucm91bmRlZC10YWcge1xyXG5cdFx0XHQtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcclxuXHRcdH1cclxuXHJcblx0XHQmLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcclxuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XHJcblx0XHR9XHJcblxyXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG5cclxuICAgICAgLnRhZy1sYWJlbCB7XHJcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblx0XHQudGFnLWxhYmVsIHtcclxuXHRcdFx0bWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLWNoZWNrYm94IHtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5jaGVja2JveC1pY29uXHJcblx0XHRcdHdpZHRoOiAwcHg7XHJcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcblx0XHRcdGhlaWdodDogMHB4O1xyXG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAuY2hlY2tib3gtaWNvbiAuY2hlY2tib3gtaW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3JcclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/event/event.page.ts":
/*!*************************************!*\
  !*** ./src/app/event/event.page.ts ***!
  \*************************************/
/*! exports provided: EventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPage", function() { return EventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _review_modal_review_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../review-modal/review-modal.page */ "./src/app/review-modal/review-modal.page.ts");
/* harmony import */ var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reaction-list-modal/reaction-list-modal.page */ "./src/app/reaction-list-modal/reaction-list-modal.page.ts");








let EventPage = class EventPage {
    constructor(dataProvider, loadingProvider, route, router, navCtrl, modalCtrl) {
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.loggedInUserIsMember = 'true';
        this.event = { showSmiley: false, showCheckin: false, addedByUser: {} };
        this.getEventDetails();
    }
    ionViewDidEnter() {
    }
    ngOnInit() {
    }
    openReviewModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _review_modal_review_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReviewModalPage"],
                componentProps: { data: this.event }
            });
            modal.onDidDismiss().then((data) => {
                if (data !== null) {
                    let review;
                    let currentUserName;
                    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((user) => {
                        let account = user.data;
                        currentUserName = account.username;
                        review = {
                            dateCreated: new Date().toString(),
                            addedBy: this.dataProvider.getCurrentUserId(),
                            addedByUsername: currentUserName,
                            review: data.data.review,
                            rating: data.data.rating
                        };
                        if (this.event.reviews === undefined) {
                            let reviews = [];
                            reviews.push(review);
                            this.dataProvider.addFirstEventReview(this.eventId, review);
                        }
                        else {
                            this.dataProvider.updateEventReviews(this.eventId, review);
                        }
                    });
                }
            });
            return yield modal.present();
        });
    }
    getEventDetails() {
        this.loadingProvider.show();
        // Get group details
        this.eventId = this.route.snapshot.params.id;
        this.dataProvider.getEventDetails(this.eventId).snapshotChanges().subscribe((event) => {
            if (event.payload.exists()) {
                let p = event.payload.data();
                p.key = event.payload.key;
                this.title = event.payload.data().title;
                // Check for Thanks
                let totalReactionCount = 0;
                let totalReviewCount = 0;
                if (p.reviews !== undefined) {
                    let rev = Object.keys(p.reviews).map(function (e) {
                        totalReviewCount += 1;
                    });
                }
                let foundSmiley = false;
                if (p.reactions !== undefined) {
                    let values = Object.keys(p.reactions).map(function (e) {
                        p.reactions[e].key = e;
                        totalReactionCount += 1;
                        return p.reactions[e];
                    });
                    // tslint:disable-next-line: max-line-length
                    foundSmiley = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks');
                }
                if (foundSmiley) {
                    p.showSmiley = true;
                }
                else {
                    p.showSmiley = false;
                }
                // Check for Checkin
                let foundCheckin = false;
                if (p.reactions !== undefined) {
                    let values = Object.keys(p.reactions).map(function (e) {
                        p.reactions[e].key = e;
                        return p.reactions[e];
                    });
                    foundCheckin = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                        && el.reactionType === 'Checkin');
                }
                if (foundCheckin) {
                    p.showCheckin = true;
                }
                else {
                    p.showCheckin = false;
                }
                p.totalReactionCount = totalReactionCount;
                p.totalReviewCount = totalReviewCount;
                if (p.reviews !== undefined) {
                    this.eventReviews = [];
                    let values = Object.keys(p.reviews).map(function (e) {
                        p.reviews[e].key = e;
                        return p.reviews[e];
                    });
                    this.eventReviews = values;
                    this.eventReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
                }
                this.event = p;
            }
            this.loadingProvider.hide();
        });
    }
    submitReactionEvent(event, reactionType) {
        switch (reactionType) {
            case 'Checkin': {
                if (!event.showCheckin) {
                    this.addEventReaction(event, reactionType);
                    event.showCheckin = true;
                    event.totalReactionCount += 1;
                }
                else {
                    this.removeEventReaction(event, reactionType);
                    event.showCheckin = false;
                    event.totalReactionCount -= 1;
                }
                break;
            }
            case 'Thanks': {
                if (!event.showSmiley) {
                    this.addEventReaction(event, reactionType);
                    event.showSmiley = true;
                    event.totalReactionCount += 1;
                }
                else {
                    this.removeEventReaction(event, reactionType);
                    event.showSmiley = false;
                    event.totalReactionCount -= 1;
                }
                break;
            }
        }
    }
    addEventReaction(event, reactionType) {
        const reaction = {
            dateCreated: new Date().toString(),
            reactionType
        };
        if (event.reactions === undefined) {
            this.dataProvider.addFirstEventReactions(event.key, reaction);
        }
        else {
            this.dataProvider.updateEventReactions(event.key, reaction);
        }
    }
    removeEventReaction(event, reactionType) {
        let values = Object.keys(event.reactions).map(function (e) {
            return event.reactions[e];
        });
        const reactionIndex = values.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
            && el.reactionType === reactionType);
        this.dataProvider.removeEventReaction(event.key, reactionIndex.key);
    }
    showEventReactionsList(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event.totalReactionCount === 0) {
                return;
            }
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_7__["ReactionListModalPage"],
                componentProps: {
                    reactions: event.reactions
                }
            });
            return yield modal.present();
        });
    }
    submitReply() {
        let review;
        let currentUserName;
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account) => {
            if (account.payload.exists()) {
                currentUserName = account.payload.data().username;
                review = {
                    dateCreated: new Date().toString(),
                    review: this.message
                };
                if (this.event.reviews === undefined) {
                    this.dataProvider.addFirstEventReview(this.eventId, review);
                }
                else {
                    this.dataProvider.updateEventReviews(this.eventId, review);
                }
                this.message = '';
            }
        });
    }
};
EventPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
EventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./event.page.scss */ "./src/app/event/event.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], EventPage);



/***/ })

}]);
//# sourceMappingURL=event-event-module-es2015.js.map