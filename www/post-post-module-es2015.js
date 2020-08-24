(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n<ion-content class=\"contact-card-content\"> \r\n<div>\r\n    <ion-card>\r\n      <ion-row class=\"user-preferences-wrapper\">\r\n        <ion-card-header class=\"header\">\r\n          <ion-card-subtitle class=\"addedBy\">\r\n            <img class=\"addedByImg\" src=\"{{post.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n             <p><a class=\"addedByTitle\" (click)=\"viewUser(post.addedByUser.addedByKey)\" ><b>{{post.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n              <br/>\r\n             <span class=\"addedByDate\">posted {{post.date.toDate() | DateFormat}}</span><br/>\r\n            <a (click)=\"viewGroup(post.groupId)\" class=\"addedByTitle\">in <b>{{post.groupName}}</b></a></p>\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n      <ion-card-content class=\"message\">\r\n        {{post.data.message}}<br/>\r\n          <ion-row class=\"tags-wrapper\">\r\n            <div class=\"tags\" *ngFor=\"let tag of post.postTags\">\r\n              <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\r\n              <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\r\n            </div>\r\n          </ion-row>\r\n      </ion-card-content>\r\n    </ion-row>\r\n    \r\n  <ion-row class=\"user-preferences-wrapper message\">\r\n    <ion-col size=3>\r\n      <ion-buttons>\r\n        <ion-button (click)=\"submitReactionSmile()\">\r\n       <div *ngIf=\"post.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n       <div *ngIf=\"!post.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n      </ion-button>\r\n      </ion-buttons> \r\n    </ion-col>\r\n    <ion-col size=3>\r\n      <ion-buttons>\r\n        <ion-button (click)=\"submitReactionHug()\">\r\n       <div *ngIf=\"post.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n       <div *ngIf=\"!post.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n      </ion-button>\r\n      </ion-buttons> \r\n    </ion-col>\r\n    <ion-col size=2></ion-col>\r\n    <ion-col size=2>\r\n      <ion-buttons>\r\n        <ion-button (click)=\"showReactionsList()\">\r\n      <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{post.totalReactionCount}}</span></div>\r\n    </ion-button>\r\n  </ion-buttons> \r\n    </ion-col>\r\n    <ion-col size=2>\r\n      <ion-buttons>\r\n        <ion-button>\r\n      <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{post.totalReviewCount}}</span></div>\r\n    </ion-button>\r\n  </ion-buttons> \r\n  </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <hr class=\"details-divider\">\r\n  \r\n    <h3 class=\"detail-title\">Selected Tags</h3> -->\r\n  \r\n  <hr class=\"details-divider\">\r\n  <div class=\"user-preferences-wrapper\">\r\n    <div  >\r\n      <div class=\"reviews\" *ngFor=\"let r of postReviews\">\r\n        <ion-row>\r\n          <ion-col size=\"2\">\r\n              <img class=\"addedByImgReview\" src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n          </ion-col>\r\n          <ion-col class=\"review\" size=\"9\">\r\n              <span class=\"addedByTitle\"><a (click)=\"viewUser(r.addedByUser.addedByKey)\" >\r\n                <b>{{post.addedByUser.addedByUsername}}</b></a>, <span class=\"addedByDateReview\">{{post.date.toDate() | DateFormat}}</span>\r\n              </span>\r\n                  <br/>\r\n                  <br/>\r\n                  <div class=\"addedByTitle\" [innerHTML]=\"r.review\"></div>\r\n            </ion-col>\r\n      </ion-row>\r\n     </div>\r\n    </div>\r\n  </div>\r\n\r\n </ion-card>\r\n</div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-item class=\"bottom_bar\">\r\n      <ion-button fill=\"clear\" (click)=\"attach()\">\r\n        <ion-icon size=\"large\" name=\"camera-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-textarea rows=\"0\" style=\"width:100%\" placeholder=\"Type your message\" [(ngModel)]=\"message\"></ion-textarea>\r\n      <ion-buttons slot=\"end\" style=\"margin-left:4px;\">\r\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"submitReply()\" [disabled]=\"!message\">\r\n          send\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\n.contact-card-content {\n  --background: var(--page-background);\n}\n\n.contact-card-content .user-preferences-wrapper .header {\n  width: 100%;\n}\n\n.contact-card-content .user-preferences-wrapper .message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400px;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper {\n  padding-top: calc(var(--page-margin) / 1);\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags {\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags .item-rating {\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags .item-rating[ratingBase=\"0\"] {\n  color: #aa6c39;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags .item-rating[ratingBase=\"1\"] {\n  color: #aa6c39;\n}\n\n.contact-card-content .user-preferences-wrapper .title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Roboto-Medium\", \"Segoe UI Semibold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle {\n  line-height: 20px;\n  width: 100%;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle img {\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .user-preferences-wrapper .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .user-preferences-wrapper .reviews {\n  margin-bottom: 15px;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByTitle {\n  margin-left: 10px;\n  line-height: 1;\n  margin-right: 5px;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByDateReview {\n  font-style: italic;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByImg {\n  width: 50px;\n  float: left;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByImgReview {\n  width: 50px;\n  margin-left: 10px;\n  float: left;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .review {\n  width: 90%;\n}\n\n.contact-card-content .details-divider {\n  margin: 3px var(--page-margin) 3px;\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.contact-card-content .reviews-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item {\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  background-color: #f9f9fa;\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review-date {\n  padding-top: 3px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review img {\n  height: 25px;\n  width: 25px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .reviews-wrapper .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .detail-title-reply {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n\n.contact-card-content .reviews-wrapper .placeholder {\n  box-sizing: border-box;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxwb3N0XFxwb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9zdC9wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSw4REFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFSTtFQUNFLFdBQUE7QUNBTjs7QURHSTtFQUNFLGtHQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNETjs7QURJRTtFQUNFLHlDQUFBO0VBQ0EsNENBQUE7QUNGSjs7QURHSTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREVJO0VBQ0UsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQU47O0FEQ007RUFDRSxjQUFBO0FDQ1I7O0FEQ007RUFDRSxjQUFBO0FDQ1I7O0FETUk7RUFDRSw4R0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNKTjs7QURPSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0xOOztBRFFJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDTk47O0FEVUk7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDUk47O0FEV0k7RUFDRyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVFA7O0FEWUk7RUFDRSxtQkFBQTtBQ1ZOOztBRFlJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNWTjs7QURZSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNWTjs7QURZSTtFQUNFLGtCQUFBO0FDVk47O0FEWUc7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDVlA7O0FEWUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNWTjs7QURZSztFQUNFLFVBQUE7QUNWUDs7QURlRTtFQUNFLGtDQUFBO0VBQ0EsaUVBQUE7QUNiSjs7QURnQkU7RUFDRSxrREFBQTtBQ2RKOztBRGVJO0VBQ0UsMkNBQUE7QUNiTjs7QURjTTtFQUVFLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVFQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFHQSxzQkFBQTtBQ2ZSOztBRHFCTTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUNuQlI7O0FEc0JNO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3BCUjs7QUR1Qk07RUFDRSxnQkFBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDckJSOztBRHdCTTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ3RCTjs7QUQyQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQ3pCTjs7QUQ0Qkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7QUMxQk47O0FENkJJO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx1RUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQzNCTiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gIC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xyXG59XHJcblxyXG4uY29udGFjdC1jYXJkLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG5cclxuICAgICAgICAgXHJcbiAgLnRhZ3Mtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAxKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgLnRhZ3Mge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAuaXRlbS1yYXRpbmcge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgJltyYXRpbmdCYXNlPVwiMFwiXSB7XHJcbiAgICAgICAgY29sb3I6ICNhYTZjMzk7XHJcbiAgICAgIH1cclxuICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XHJcbiAgICAgICAgY29sb3I6ICNhYTZjMzk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxuICB9XHJcbiB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLU1lZGl1bScsICdIZWx2ZXRpY2EgTmV1ZSBNZWRpdW0nLCdSb2JvdG8tTWVkaXVtJywgJ1NlZ29lIFVJIFNlbWlib2xkJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBtYXJnaW46IDEgMCA0cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZXtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgLnRleHR7XHJcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgZm9udC1mYW1pbHk6ICBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXZpZXdzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5hZGRlZEJ5VGl0bGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7ICAgIFxyXG4gICAgICBtYXJnaW4tcmlnaHQ6NXB4OyAgXHJcbiAgICB9XHJcbiAgICAuYWRkZWRCeURhdGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgIH1cclxuICAgIC5hZGRlZEJ5RGF0ZVJldmlldyB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICB9XHJcbiAgIC5hZGRlZEJ5SW1nIHtcclxuICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgIH1cclxuICAgIC5hZGRlZEJ5SW1nUmV2aWV3IHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAgICAucmV2aWV3IHtcclxuICAgICAgIHdpZHRoOjkwJTtcclxuICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmRldGFpbHMtZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDNweCB2YXIoLS1wYWdlLW1hcmdpbikgM3B4O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIC40KTtcclxuICB9XHJcblxyXG4gIC5yZXZpZXdzLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAucmV2aWV3cy1saXN0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgLnJldmlldy1pdGVtIHtcclxuICAgICAgICAvLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcclxuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI1MCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIC8vIGJvcmRlci1jb2xvcjogcmdiKDIzOSwgMjQxLCAyNDMpO1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIC8vIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICBcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAudGV4dHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXZpZXctZGF0ZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXZpZXcgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIC5kZXRhaWwtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsLXRpdGxlLXJlcGx5IHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xyXG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XHJcbiAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxufVxyXG59XHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XG59XG5cbi5jb250YWN0LWNhcmQtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5tZXNzYWdlIC50YWdzLXdyYXBwZXIgLnRhZ3Mge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAubWVzc2FnZSAudGFncy13cmFwcGVyIC50YWdzIC5pdGVtLXJhdGluZyB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICBjb2xvcjogI2FhNmMzOTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5tZXNzYWdlIC50YWdzLXdyYXBwZXIgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgY29sb3I6ICNhYTZjMzk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLU1lZGl1bVwiLCBcIkhlbHZldGljYSBOZXVlIE1lZGl1bVwiLCBcIlJvYm90by1NZWRpdW1cIiwgXCJTZWdvZSBVSSBTZW1pYm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbjogMSAwIDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuc3VidGl0bGUge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuc3VidGl0bGUgaW1nIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAudGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5yZXZpZXdzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5VGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmFkZGVkQnlEYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5RGF0ZVJldmlldyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5SW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmFkZGVkQnlJbWdSZXZpZXcge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnJldmlldyB7XG4gIHdpZHRoOiA5MCU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbjogM3B4IHZhcigtLXBhZ2UtbWFyZ2luKSAzcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjQpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0ge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAuaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy1kYXRlIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldyBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAuZGV0YWlsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAuZGV0YWlsLXRpdGxlLXJlcGx5IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnBsYWNlaG9sZGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */");

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
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reaction-list-modal/reaction-list-modal.page */ "./src/app/reaction-list-modal/reaction-list-modal.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_13__);














let PostPage = class PostPage {
    constructor(dataProvider, loadingProvider, route, router, firestore, actionSheet, modalCtrl, imageProvider, camera, keyboard, contacts, geolocation, alertCtrl) {
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.route = route;
        this.router = router;
        this.firestore = firestore;
        this.actionSheet = actionSheet;
        this.modalCtrl = modalCtrl;
        this.imageProvider = imageProvider;
        this.camera = camera;
        this.keyboard = keyboard;
        this.contacts = contacts;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.post = { showSmiley: false, showHug: false, addedByUser: {}, data: {}, date: firebase_app__WEBPACK_IMPORTED_MODULE_13__["firestore"].Timestamp.now() };
        this.getPostDetails();
    }
    ionViewDidEnter() {
    }
    ngOnInit() {
    }
    getPostDetails() {
        this.loadingProvider.show();
        this.postId = this.route.snapshot.params.id;
        this.post.reactions = [];
        this.post.reviews = [];
        this.dataProvider.getPostDetails(this.postId).get().subscribe((post) => {
            if (post) {
                let p = post.data();
                p.reactions = [];
                p.key = post.id;
                this.title = post.data().title;
                let totalReactionCount = 0;
                let totalReviewCount = 0;
                p.postTags = p.postTags.filter(x => x.isChecked !== false);
                // get reactions list
                this.firestore.collection('posts').doc(post.id).collection('reactions').snapshotChanges().subscribe((reactions) => {
                    this.post.reactions = [];
                    reactions.forEach(element => {
                        let reaction = element.payload.doc.data();
                        reaction.key = element.payload.doc.id;
                        p.reactions.push(reaction);
                    });
                    // Check for Thanks
                    if (reactions) {
                        totalReactionCount = p.reactions.length;
                        let foundSmiley = false;
                        if (p.reactions !== undefined) {
                            foundSmiley = p.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                && el.reactionType === 'Thanks');
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
                            foundHug = p.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                && el.reactionType === 'Hug');
                        }
                        if (foundHug) {
                            p.showHug = true;
                        }
                        else {
                            p.showHug = false;
                        }
                        p.totalReactionCount = totalReactionCount;
                    }
                });
                // get reviews list
                this.firestore.collection('posts').doc(post.id).collection('reviews')
                    .ref.orderBy("dateCreated", "desc").onSnapshot((reviews) => {
                    this.post.reviews = [];
                    p.reviews = [];
                    reviews.forEach(element => {
                        let review = element.data();
                        review.key = element.id;
                        p.reviews.push(review);
                    });
                    totalReviewCount = p.reviews.length;
                    p.totalReviewCount = totalReviewCount;
                    this.postReviews = p.reviews;
                    if (p.reviews !== undefined) {
                        this.postReviews = [];
                        let values = Object.keys(p.reviews).map(function (e) {
                            p.reviews[e].key = e;
                            return p.reviews[e];
                        });
                        this.postReviews = values;
                        this.postReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
                    }
                });
                this.post = p;
            }
            this.loadingProvider.hide();
        });
    }
    submitReactionSmile() {
        const reaction = this.post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
            && el.reactionType === 'Thanks');
        if (reaction === undefined) {
            this.dataProvider.getCurrentUser().get().subscribe((account) => {
                if (account) {
                    const currentUserName = account.data().username;
                    let reaction = {
                        key: '',
                        dateCreated: new Date(),
                        addedByUser: {
                            addedByKey: this.dataProvider.getCurrentUserId(),
                            addedByUsername: account.data().username,
                            addedByImg: account.data().img
                        },
                        reactionType: 'Thanks'
                    };
                    this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
                        this.post.showSmiley = true;
                    });
                }
            });
        }
        else {
            this.post.showSmiley = false;
            this.dataProvider.removePostReaction(this.post.key, reaction.key);
        }
    }
    submitReactionHug() {
        const reaction = this.post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
            && el.reactionType === 'Hug');
        if (reaction === undefined) {
            this.dataProvider.getCurrentUser().get().subscribe((account) => {
                if (account) {
                    const currentUserName = account.data().username;
                    let reaction = {
                        key: '',
                        dateCreated: new Date(),
                        addedByUser: {
                            addedByKey: this.dataProvider.getCurrentUserId(),
                            addedByUsername: account.data().username,
                            addedByImg: account.data().img
                        },
                        reactionType: 'Hug'
                    };
                    this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
                        this.post.showHug = true;
                    });
                }
            });
        }
        else {
            this.post.showHug = false;
            this.dataProvider.removePostReaction(this.post.key, reaction.key);
        }
    }
    showReactionsList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.post.totalReactionCount === 0) {
                return;
            }
            const p = this.post;
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_7__["ReactionListModalPage"],
                componentProps: {
                    reactions: p.reactions
                }
            });
            return yield modal.present();
        });
    }
    submitReply() {
        this.message = this.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
        ;
        let review;
        let currentUserName;
        this.dataProvider.getCurrentUser().get().subscribe((account) => {
            if (account) {
                currentUserName = account.data().username;
                review = {
                    dateCreated: new Date(),
                    addedByUser: {
                        addedByKey: this.dataProvider.getCurrentUserId(),
                        addedByUsername: account.data().username,
                        addedByImg: account.data().img
                    },
                    review: this.message
                };
                this.dataProvider.updatePostReviews(this.postId, review);
                this.message = '';
            }
        });
    }
    attach() {
        //   this.actionSheet.create({
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
    viewUser(userId) {
        let loggedInUserId = this.dataProvider.getCurrentUserId();
        console.log(loggedInUserId, userId);
        if (loggedInUserId === userId) {
            this.router.navigateByUrl('/profile');
        }
        else {
            this.router.navigateByUrl('/userinfo/' + userId);
        }
    }
    viewGroup(groupId) {
        this.router.navigateByUrl('/group/' + groupId);
    }
};
PostPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__["Contacts"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.page.scss */ "./src/app/post/post.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__["Contacts"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], PostPage);



/***/ })

}]);
//# sourceMappingURL=post-post-module-es2015.js.map