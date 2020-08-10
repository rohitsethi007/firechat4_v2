(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ion-buttons slot=\"end\"> \r\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true\" (click)=\"newPost()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t</ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"contact-card-content\"> \r\n<div>\r\n\r\n\r\n    <ion-card>\r\n      <ion-row class=\"user-preferences-wrapper\">\r\n      <ion-card-header class=\"subtitle\">\r\n        <img src=\"{{post.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{post.senderName}}, posted {{post.date | DateFormat}}\r\n        <ion-card-title class=\"title\">{{post.title}}</ion-card-title>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content class=\"message\">\r\n        {{post.message}}\r\n        \r\n      </ion-card-content>\r\n\r\n    </ion-row>\r\n    \r\n  <ion-row class=\"user-preferences-wrapper message\">\r\n    <ion-col>\r\n      <ion-buttons>\r\n        <ion-button (click)=\"submitReactionSmile()\">\r\n       <div *ngIf=\"post.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n       <div *ngIf=\"!post.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n      </ion-button>\r\n      </ion-buttons> \r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-buttons>\r\n        <ion-button (click)=\"submitReactionHug()\">\r\n       <div *ngIf=\"post.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n       <div *ngIf=\"!post.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n      </ion-button>\r\n      </ion-buttons> \r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-buttons>\r\n        <ion-button (click)=\"showReactionsList()\">\r\n      <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{post.totalReactionCount}}</span></div>\r\n    </ion-button>\r\n  </ion-buttons> \r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-buttons>\r\n        <ion-button>\r\n      <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{post.totalReviewCount}}</span></div>\r\n    </ion-button>\r\n  </ion-buttons> \r\n  </ion-col>\r\n  </ion-row>\r\n\r\n  <hr class=\"details-divider\">\r\n  <div class=\"reviews-wrapper\">\r\n    <h3 class=\"detail-title\">Selected Tags</h3>\r\n  <ion-row>\r\n    <div class=\"tags\" *ngFor=\"let tag of post.postTags\">\r\n      <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{tag.val}}</span>\r\n      <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{tag.val}}</span>\r\n    </div>\r\n  </ion-row>\r\n  </div>\r\n\r\n  \r\n  <hr class=\"details-divider\">\r\n  <div class=\"reviews-wrapper\">\r\n    <h3 class=\"detail-title-reply\">Replies</h3>\r\n    <ion-row nowrap>\r\n    <ion-col size=\"9\">\r\n        <ion-textarea class=\"placeholder\" rows=\"0\" placeholder=\"Type your message\" [(ngModel)]=\"message\">\r\n          </ion-textarea>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-buttons>\r\n        <ion-button (click)=\"attach()\">\r\n          <ion-icon name=\"attach\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"submitReply()\"> <!-- [disabled]=\"!message\">-->\r\n          <ion-icon name=\"send-sharp\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons> \r\n    </ion-col>\r\n   </ion-row>\r\n    <div class=\"reviews-list\">\r\n      <div class=\"review-item\" *ngFor=\"let r of postReviews\">\r\n        <ion-row>\r\n          <ion-col size=\"2\" class=\"review\">\r\n            <img src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n          </ion-col>\r\n          <ion-col size=\"10\">\r\n            <app-text-shell class=\"comment-detail-author-name\" [data]=\"r.addedByUser.addedByUsername\"></app-text-shell>\r\n            <app-text-shell [data]=\"r.review\"></app-text-shell>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col >\r\n          <app-text-shell class=\"review-date\" [data]=\"r.dateCreated | DateFormat\"></app-text-shell>\r\n        </ion-col>\r\n\r\n        <!-- TODO: Commenting out thumbs up/Thanks option on the comments section\r\n          <ion-col class=\"review\">\r\n          <ion-buttons>\r\n            <ion-button (click)=\"submitReactionSmile()\">\r\n           <div *ngIf=\"post.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n           <div *ngIf=\"!post.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n          </ion-button>\r\n          </ion-buttons> \r\n        </ion-col> -->\r\n        </ion-row>\r\n<!-- \r\n        <ion-item class=\"bottom_bar\">\r\n          <ion-textarea style=\"margin:0\" rows=\"0\" placeholder=\"Type your message\" [(ngModel)]=\"message\">\r\n          </ion-textarea>\r\n          <ion-buttons slot=\"end\" style=\"margin-left:4px;\">\r\n            <ion-button fill=\"clear\" (click)=\"attach()\">\r\n              <ion-icon name=\"attach\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button color=\"primary\" fill=\"clear\" (click)=\"send('text')\" [disabled]=\"!message\">\r\n              send\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-item> -->\r\n        <!-- <ion-row class=\"review-user\">\r\n          <ion-col class=\"user-brief-wrapper\">\r\n            <h5 class=\"review-user-name\">\r\n              <app-text-shell [data]=\"review.addedByUsername\"></app-text-shell>\r\n            </h5>\r\n            <ion-row class=\"details-scores user-scores\">\r\n              <ion-col class=\"score-item user-score\">\r\n                <p class=\"review-message\">\r\n                  <app-text-shell [data]=\"review.review\" lines=\"5\"></app-text-shell>\r\n                  <ion-buttons>\r\n                    <ion-button (click)=\"commentBox=!commentBox\">reply</ion-button>\r\n                  </ion-buttons>\r\n                  <ion-item *ngIf=\"commentBox\" class=\"input-item\">\r\n                    <ion-label position=\"floating\">Comments</ion-label>\r\n                    <ion-textarea rows=\"3\"  placeholder=\"Enter more information here...\" type=\"text\" clearInput ></ion-textarea>\r\n                    <ion-buttons>\r\n                      <ion-button (click)=\"submitReview(review.key)\">reply</ion-button>\r\n                    </ion-buttons>\r\n                  </ion-item>\r\n                </p>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col class=\"review-info-wrapper\">\r\n            <span class=\"review-date\">\r\n              <app-text-shell [data]=\"review.dateCreated | DateFormat\"></app-text-shell>\r\n            </span>\r\n            <div class=\"review-rating\" [attr.ratingBase]=\"review.rating\">\r\n              <app-text-shell [data]=\"review.rating\"></app-text-shell>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row> -->\r\n     </div>\r\n    </div>\r\n  </div>\r\n\r\n </ion-card>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post.page */ "./src/app/post/post.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");









const routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_7__["PostPage"]
    }
];
let PostPageModule = class PostPageModule {
};
PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_7__["PostPage"]]
    })
], PostPageModule);



/***/ }),

/***/ "./src/app/post/post.page.scss":
/*!*************************************!*\
  !*** ./src/app/post/post.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #bbb2b2;\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-highlighted-background);\n}\n\n.contact-card-content {\n  --background: var(--page-background);\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n\n.contact-card-content .user-details-wrapper {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin) var(--page-margin);\n  background-color: var(--page-highlighted-background);\n  color: var(--ion-color-light);\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.contact-card-content .user-details-wrapper .user-avatar {\n  border: solid 3px var(--ion-color-light);\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper {\n  /*        padding-left: calc(var(--page-margin) / 2); */\n  text-align: center;\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-name {\n  margin: 0px 0px 0px;\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-handle {\n  margin: 0px;\n  font-weight: 400;\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper {\n  text-align: center;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-value {\n  margin-right: 5px;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-name {\n  font-size: 16px;\n}\n\n.contact-card-content .user-details-wrapper .user-bio {\n  margin: var(--page-margin) 0px 0px;\n  line-height: 1.2;\n  font-size: 14px;\n}\n\n.contact-card-content .user-preferences-wrapper {\n  --ion-grid-column-padding: 0px;\n}\n\n.contact-card-content .user-preferences-wrapper .message {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400px;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.contact-card-content .user-preferences-wrapper .title {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", Helvetica-Bold, \"Roboto-Medium\", \"Segoe UI Semibold\", Arial-Bold, sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle {\n  line-height: 20px;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle img {\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .user-preferences-wrapper .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .user-preferences-wrapper .preference-name {\n  margin: 0px 0px 5px;\n  font-size: 16px;\n}\n\n.contact-card-content .user-preferences-wrapper .bookmark {\n  font-size: 12px;\n  text-align: right;\n}\n\n.contact-card-content .user-preferences-wrapper .preference-value {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--ion-color-dark-tint);\n  white-space: pre-wrap;\n}\n\n.contact-card-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.contact-card-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.contact-card-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.contact-card-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.contact-card-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-light-contrast);\n  --checkbox-tag-background: var(--ion-color-light-shade);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.contact-card-content .details-divider {\n  margin: 3px var(--page-margin) 3px;\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.contact-card-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.contact-card-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.contact-card-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: var(--page-rating-1-color);\n}\n\n.contact-card-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: var(--page-rating-2-color);\n}\n\n.contact-card-content .reviews-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item {\n  box-sizing: border-box;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, HelveticaNeue, \"Helvetica Neue\", Helvetica, Roboto, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  background-color: #f9f9fa;\n  max-width: 100%;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  vertical-align: bottom;\n  border-color: #eff1f3;\n  border-radius: 6px;\n  border-style: solid;\n  border-width: 1px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .comment-detail-author-name {\n  color: #333333;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review-date {\n  padding-top: 3px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review img {\n  height: 25px;\n  width: 25px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .reviews-wrapper .details-divider {\n  margin: 5px 0px;\n}\n\n.contact-card-content .reviews-wrapper .all-reviews-btn {\n  margin: 5px 0px;\n}\n\n.contact-card-content .reviews-wrapper .write-reviews-btn {\n  margin: var(--page-margin) 0px 0px;\n}\n\n.contact-card-content .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.contact-card-content .detail-title-reply {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n\n.contact-card-content .placeholder {\n  box-sizing: border-box;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, HelveticaNeue, \"Helvetica Neue\", Helvetica, Roboto, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxwb3N0XFxwb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9zdC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxjaGVja2JveC10YWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHNDQUFBO0VBQ0EsOENBQUE7RUFFQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBR0EsOERBQUE7QUNQSjs7QURZSTtFQUNFLGdEQUFBO0FDVE47O0FEY0U7RUFDRSxvQ0FBQTtFQUVBLGdDQUFBO1VBQUEsd0JBQUE7QUNaSjs7QURjSTtFQUNFLDhCQUFBO0VBRUEsa0RBQUE7RUFDQSxvREFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2JOOztBRGVNO0VBQ0Usd0NBQUE7QUNiUjs7QURnQk07RUFDTix1REFBQTtFQUNRLGtCQUFBO0FDZFI7O0FEZ0JRO0VBQ0UsbUJBQUE7QUNkVjs7QURpQlE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNmVjs7QURtQk07RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0FDakJSOztBRG1CUTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDakJWOztBRG9CUTtFQUNFLGVBQUE7QUNsQlY7O0FEc0JNO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNwQlI7O0FEd0JJO0VBQ0UsOEJBQUE7QUN0Qk47O0FEd0JNO0VBQ0UsZ0pBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3RCUjs7QUR5Qk07RUFDRSx3TEFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUN2QlI7O0FEeUJNO0VBQ0UsaUJBQUE7QUN2QlI7O0FEeUJNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDdkJSOztBRDBCTTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUN4QlI7O0FEMkJPO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxnSkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3pCVDs7QUQyQk07RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUN6QlI7O0FENEJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDMUJSOztBRDZCTTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQzNCUjs7QUQrQkk7RUFDSSx3RkFBQTtFRTdJTiwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtBRGlIRjs7QUMvR0M7RUFFQyxvQkFBQTtFQUNFLHdCQUFBO0VBQ0YsMEJBQUE7RUFDQSxxREFBQTtFQUNFLDJDQUFBO0FEZ0hKOztBQzlHSTtFQUNELHVCQUFBO0FEZ0hIOztBQzdHRTtFQUNJLDREQUFBO0VBQ0Esa0RBQUE7QUQrR047O0FDNUdJO0VBQ0UsWUFBQTtBRDhHTjs7QUM1R007RUFFRSxVQUFBO0FENkdSOztBQ3pHRTtFQUNDLFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEMkdOOztBQ3hHRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUR3R0g7O0FETEk7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDT047O0FEQU07RUFDRSw2Q0FBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSw0REFBQTtBQ0VSOztBREdJO0VBQ00sd0NBQUE7QUNEVjs7QURHTTtFQUNFLHFEQUFBO0VBQ0EsdURBQUE7RUFDQSxzREFBQTtFQUNBLDREQUFBO0FDRFI7O0FET0k7RUFFRSxrQ0FBQTtFQUNBLGlFQUFBO0FDTk47O0FEU0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDUE47O0FEUUk7RUFFRSxtREFBQTtFQUNRLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNQZDs7QURRYztFQUNBLDRDQUFBO0FDTmQ7O0FEUWM7RUFDQSw0Q0FBQTtBQ05kOztBRFVJO0VBQ0Usa0RBQUE7QUNSTjs7QURVTTtFQUNFLDJDQUFBO0FDUlI7O0FEVVE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRJQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNSVjs7QURVVTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSWjs7QURVVTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUNSWjs7QURXVztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0pBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNUYjs7QURXVztFQUNFLGdCQUFBO0VBQ0QsZ0pBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNUWjs7QURXVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ1RaOztBRGNNO0VBQ0UsZUFBQTtBQ1pSOztBRGVNO0VBQ0UsZUFBQTtBQ2JSOztBRGdCTTtFQUNFLGtDQUFBO0FDZFI7O0FEa0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUNoQk47O0FEa0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FDaEJOOztBRGtCSTtFQUNFLHNCQUFBO0VBQ0YsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNElBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3Bvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxyXG5AaW1wb3J0IFwiLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9zZWxlY3QtYWxlcnRcIjtcclxuQGltcG9ydCBcIi4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XHJcbi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuICBcclxuICAgIC0tcGFnZS1yYXRpbmctNS1jb2xvcjogIzdjZTE5ODtcclxuICAgIC0tcGFnZS1yYXRpbmctNC1jb2xvcjogI2E4ZTA3YztcclxuICAgIC0tcGFnZS1yYXRpbmctMy1jb2xvcjogI2NlZTA3YztcclxuICAgIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2UwYzc3YztcclxuICAgIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2JiYjJiMjtcclxuICBcclxuXHJcbiAgICAtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNvbnRhY3QtY2FyZC1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIC8vIFRvIGZpeCBoYWxmIHBpeGVsIGxpbmUgYmV0d2VlbiBpb24taGVhZGVyIGFuZCAgaW9uLWNvbnRlbnRcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBcclxuICAgIC51c2VyLWRldGFpbHMtd3JhcHBlciB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuICBcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgICAudXNlci1hdmF0YXIge1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnVzZXItaW5mby13cmFwcGVyIHtcclxuLyogICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTsgKi9cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAudXNlci1oYW5kbGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAudXNlci1zdGF0cy13cmFwcGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgXHJcbiAgICAgICAgLnVzZXItc3RhdC12YWx1ZSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC51c2VyLXN0YXQtbmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC51c2VyLWJpbyB7XHJcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuICBcclxuICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4vLyAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ0hlbHZldGljYU5ldWUtTWVkaXVtJywgJ0hlbHZldGljYSBOZXVlIE1lZGl1bScsIEhlbHZldGljYS1Cb2xkLCAnUm9ib3RvLU1lZGl1bScsICdTZWdvZSBVSSBTZW1pYm9sZCcsIEFyaWFsLUJvbGQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICBtYXJnaW46IDEgMCA0cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgfVxyXG4gICAgICAuc3VidGl0bGV7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnN1YnRpdGxlIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgfVxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIC50ZXh0e1xyXG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgfVxyXG4gICAgICAucHJlZmVyZW5jZS1uYW1lIHtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuYm9va21hcmsge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnByZWZlcmVuY2UtdmFsdWUge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7ICBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2JveC10YWdzIHtcclxuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xyXG4gICAgXHJcbiAgICAgICAgQGluY2x1ZGUgY2hlY2tib3gtdGFnKCk7XHJcbiAgICBcclxuICAgIC5jaGVja2JveC10YWcge1xyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcclxuICAgICYuc3F1YXJlLWNoZWNrYm94LXRhZ3Mge1xyXG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgICBcclxuICAgICAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7IFxyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gICAgXHJcbiAgICAgIC5jaGVja2JveC10YWcge1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIC5kZXRhaWxzLWRpdmlkZXIge1xyXG4gICAgICAvLyBtYXJnaW46IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuICAgICAgbWFyZ2luOiAzcHggdmFyKC0tcGFnZS1tYXJnaW4pIDNweDtcclxuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIC40KTtcclxuICAgIH1cclxuICBcclxuICAgIC50YWdzIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgLml0ZW0tcmF0aW5nIHtcclxuICAgICAgLy8gRGVmYXVsdCBiYWNrZ3JvdW5kXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMFwiXSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjFcIl0ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgICAucmV2aWV3cy13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgICAucmV2aWV3cy1saXN0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gIFxyXG4gICAgICAgIC5yZXZpZXctaXRlbSB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XHJcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xyXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEhlbHZldGljYU5ldWUsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI1MCk7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOSwgMjQxLCAyNDMpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgLmNvbW1lbnQtZGV0YWlsLWF1dGhvci1uYW1lIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5yZXZpZXctZGF0ZXtcclxuICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgLnJldmlldyBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5kZXRhaWxzLWRpdmlkZXIge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuYWxsLXJldmlld3MtYnRuIHtcclxuICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLndyaXRlLXJldmlld3MtYnRuIHtcclxuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbC10aXRsZS1yZXBseSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgSGVsdmV0aWNhTmV1ZSwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtcmF0aW5nLTUtY29sb3I6ICM3Y2UxOTg7XG4gIC0tcGFnZS1yYXRpbmctNC1jb2xvcjogI2E4ZTA3YztcbiAgLS1wYWdlLXJhdGluZy0zLWNvbG9yOiAjY2VlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTItY29sb3I6ICNlMGM3N2M7XG4gIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2JiYjJiMjtcbiAgLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZCk7XG59XG5cbi5jb250YWN0LWNhcmQtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1hdmF0YXIge1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1pbmZvLXdyYXBwZXIge1xuICAvKiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWluZm8td3JhcHBlciAudXNlci1uYW1lIHtcbiAgbWFyZ2luOiAwcHggMHB4IDBweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWhhbmRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1zdGF0cy13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItc3RhdHMtd3JhcHBlciAudXNlci1zdGF0LXZhbHVlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItc3RhdHMtd3JhcHBlciAudXNlci1zdGF0LW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWJpbyB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLm1lc3NhZ2Uge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYU5ldWUtTWVkaXVtXCIsIFwiSGVsdmV0aWNhIE5ldWUgTWVkaXVtXCIsIEhlbHZldGljYS1Cb2xkLCBcIlJvYm90by1NZWRpdW1cIiwgXCJTZWdvZSBVSSBTZW1pYm9sZFwiLCBBcmlhbC1Cb2xkLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbjogMSAwIDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuc3VidGl0bGUge1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5zdWJ0aXRsZSBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5wcmVmZXJlbmNlLW5hbWUge1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuYm9va21hcmsge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnByZWZlcmVuY2UtdmFsdWUge1xuICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgLnRhZy1sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5jaGVja2JveC10YWdzLnNxdWFyZS1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbjogM3B4IHZhcigtLXBhZ2UtbWFyZ2luKSAzcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjQpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC50YWdzIC5pdGVtLXJhdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAwLjM1KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xuICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEhlbHZldGljYU5ldWUsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZmE7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgYm9yZGVyLWNvbG9yOiAjZWZmMWYzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLmNvbW1lbnQtZGV0YWlsLWF1dGhvci1uYW1lIHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy1kYXRlIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXcgaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5hbGwtcmV2aWV3cy1idG4ge1xuICBtYXJnaW46IDVweCAwcHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAud3JpdGUtcmV2aWV3cy1idG4ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5kZXRhaWwtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAuZGV0YWlsLXRpdGxlLXJlcGx5IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5wbGFjZWhvbGRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xuICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEhlbHZldGljYU5ldWUsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgZmxleC1ncm93OiAxO1xufSIsIkBtaXhpbiBjaGVja2JveC10YWcoKSB7XHJcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcclxuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcclxuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xyXG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcclxuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcclxuXHJcblx0LmNoZWNrYm94LXRhZyB7XHJcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XHJcblx0XHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xyXG4gICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcclxuXHJcbiAgICAmLnJvdW5kZWQtdGFnIHtcclxuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XHJcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgIC50YWctbGFiZWwge1xyXG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cdFx0LnRhZy1sYWJlbCB7XHJcblx0XHRcdG1hcmdpbjogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlvbi1jaGVja2JveCB7XHJcblx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAuY2hlY2tib3gtaWNvblxyXG5cdFx0XHR3aWR0aDogMHB4O1xyXG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDBweDtcclxuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLmNoZWNrYm94LWljb24gLmNoZWNrYm94LWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXHJcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/post/post.page.ts":
/*!***********************************!*\
  !*** ./src/app/post/post.page.ts ***!
  \***********************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _review_modal_review_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../review-modal/review-modal.page */ "./src/app/review-modal/review-modal.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reaction-list-modal/reaction-list-modal.page */ "./src/app/reaction-list-modal/reaction-list-modal.page.ts");









let PostPage = class PostPage {
    constructor(dataProvider, loadingProvider, route, router, navCtrl, modalCtrl, firestore) {
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.firestore = firestore;
        this.loggedInUserIsMember = 'true';
        this.commentBox = false;
        this.post = { showSmiley: false, showHug: false };
    }
    ionViewDidEnter() {
        this.getPostDetails();
    }
    ngOnInit() {
    }
    openReviewModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _review_modal_review_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReviewModalPage"],
                componentProps: { data: this.post }
            });
            modal.onDidDismiss().then((data) => {
                if (data !== null) {
                    let review;
                    let currentUserName;
                    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account) => {
                        if (account.payload.exists()) {
                            currentUserName = account.payload.data().username;
                            review = {
                                dateCreated: new Date().toString(),
                                addedBy: this.dataProvider.getCurrentUserId(),
                                addedByUsername: currentUserName,
                                review: data.data.review,
                                rating: data.data.rating
                            };
                            if (this.post.reviews === undefined) {
                                const reviews = [];
                                reviews.push(review);
                                this.dataProvider.addFirstPostReview(this.postId, review);
                            }
                            else {
                                this.dataProvider.updatePostReviews(this.postId, review);
                            }
                            // this.ngOnInit();
                        }
                    });
                }
            });
            return yield modal.present();
        });
    }
    getPostDetails() {
        this.loadingProvider.show();
        // Get group details
        this.postId = this.route.snapshot.params.id;
        this.subscription = this.dataProvider.getPostDetails(this.postId).snapshotChanges().subscribe((post) => {
            if (post.payload.exists()) {
                let p = post.payload.data();
                p.key = post.payload.key;
                this.title = post.payload.data().title;
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
                // Check for Hugs
                let foundHug = false;
                if (p.reactions !== undefined) {
                    let values = Object.keys(p.reactions).map(function (e) {
                        p.reactions[e].key = e;
                        return p.reactions[e];
                    });
                    foundHug = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() && el.reactionType === 'Hug');
                }
                if (foundHug) {
                    p.showHug = true;
                }
                else {
                    p.showHug = false;
                }
                p.totalReactionCount = totalReactionCount;
                p.totalReviewCount = totalReviewCount;
                if (p.reviews !== undefined) {
                    this.postReviews = [];
                    let values = Object.keys(p.reviews).map(function (e) {
                        p.reviews[e].key = e;
                        return p.reviews[e];
                    });
                    this.postReviews = values;
                    this.postReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
                }
                this.post = p;
            }
            this.loadingProvider.hide();
        });
    }
    submitReview(reviewKey) {
        let review;
        let currentUserName;
        console.log('reviewkey:' + reviewKey);
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account) => {
            if (account.payload.exists()) {
                currentUserName = account.payload.data().username;
                review = {
                    dateCreated: new Date().toString(),
                    addedBy: this.dataProvider.getCurrentUserId(),
                    addedByUsername: currentUserName,
                    review
                };
                // this.dataProvider.addPostReview(this.postId, reviewKey, review);
            }
        });
    }
    submitReactionSmile() {
        if (!this.post.showSmiley) {
            this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account) => {
                if (account.payload.exists()) {
                    const currentUserName = account.payload.data().username;
                    const reaction = {
                        key: '',
                        dateCreated: new Date().toString(),
                        // tslint:disable-next-line: max-line-length
                        addedByUser: {
                            addedByKey: this.dataProvider.getCurrentUserId(),
                            addedByUsername: account.payload.data().username,
                            addedByImg: account.payload.data().img
                        },
                        reactionType: 'Thanks'
                    };
                    if (this.post.reactions === undefined) {
                        this.dataProvider.addFirstPostReactions(this.post.key, reaction).then((success) => {
                            reaction.key = success.id;
                        });
                    }
                    else {
                        this.dataProvider.updatePostReactions(this.post.key, reaction).then((success) => {
                            reaction.key = success.id;
                        });
                    }
                    this.post.showSmiley = true;
                    this.post.totalReactionCount += 1;
                }
            });
        }
        else {
            const found = false;
            if (this.post.reactions !== undefined) {
                let r = this.post.reactions;
                let values = Object.keys(r).map(function (e) {
                    return r[e];
                });
                const reactionIndex = values.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                    && el.reactionType === 'Thanks');
                if (reactionIndex === undefined) {
                    // this shouldn't have happened, so set the smiley to false for now
                    this.post.showSmiley = false;
                }
                else {
                    this.dataProvider.removePostReaction(this.post.key, reactionIndex.key);
                    this.post.showSmiley = false;
                    this.post.totalReactionCount -= 1;
                }
            }
        }
    }
    submitReactionHug() {
        if (!this.post.showHug) {
            this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account) => {
                if (account.payload.exists()) {
                    const currentUserName = account.payload.data().username;
                    const reaction = {
                        key: '',
                        dateCreated: new Date().toString(),
                        // tslint:disable-next-line: max-line-length
                        addedByUser: {
                            addedByKey: this.dataProvider.getCurrentUserId(),
                            addedByUsername: account.payload.data().username,
                            addedByImg: account.payload.data().img
                        },
                        reactionType: 'Hug'
                    };
                    if (this.post.reactions === undefined) {
                        // TODO : After saving, get the key back and add!!!
                        const key = this.dataProvider.addFirstPostReactions(this.post.key, reaction);
                    }
                    else {
                        let key = this.dataProvider.updatePostReactions(this.post.key, reaction);
                    }
                    this.post.showHug = true;
                    this.post.totalReactionCount += 1;
                }
            });
        }
        else {
            const found = false;
            if (this.post.reactions !== undefined) {
                let r = this.post.reactions;
                let values = Object.keys(r).map(function (e) {
                    return r[e];
                });
                const reactionIndex = values.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                    && el.reactionType === 'Hug');
                if (reactionIndex === undefined) {
                    // this shouldn't have happened, so set the smiley to false for now
                    this.post.showHug = false;
                }
                else {
                    this.dataProvider.removePostReaction(this.post.key, reactionIndex.key);
                    this.post.showHug = false;
                    this.post.totalReactionCount -= 1;
                }
            }
        }
    }
    showReactionsList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.post.totalReactionCount === 0) {
                return;
            }
            const p = this.post;
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_8__["ReactionListModalPage"],
                componentProps: {
                    reactions: p.reactions
                }
            });
            return yield modal.present();
        });
    }
    submitReply() {
        console.log('Message Typed : ' + this.message);
        let review;
        let currentUserName;
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account) => {
            if (account.payload.exists()) {
                currentUserName = account.payload.data().username;
                review = {
                    dateCreated: new Date().toString(),
                    addedByUser: {
                        addedByKey: this.dataProvider.getCurrentUserId(),
                        addedByUsername: account.payload.data().username,
                        addedByImg: account.payload.data().img
                    },
                    review: this.message
                };
                if (this.post.reviews === undefined) {
                    this.dataProvider.addFirstPostReview(this.postId, review);
                }
                else {
                    this.dataProvider.updatePostReviews(this.postId, review);
                }
                this.message = '';
            }
        });
    }
};
PostPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.page.scss */ "./src/app/post/post.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
], PostPage);



/***/ })

}]);
//# sourceMappingURL=post-post-module-es2015.js.map