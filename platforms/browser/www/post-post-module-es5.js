function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content class=\"contact-card-content\"> \n<div>\n    <ion-card>\n      <ion-row class=\"user-preferences-wrapper\">\n        <ion-card-header class=\"header\">\n          <ion-card-subtitle class=\"addedBy\">\n            <img class=\"addedByImg\" src=\"{{post.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n             <p><a class=\"addedByTitle\" (click)=\"viewUser(post.addedByUser.addedByKey)\" ><b>{{post.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n              <br/>\n             <span class=\"addedByDate\">posted {{post.date.toDate() | DateFormat}}</span><br/>\n            <a (click)=\"viewGroup(post.groupId)\" class=\"addedByTitle\">in <b>{{post.groupName}}</b></a></p>\n          </ion-card-subtitle>\n        </ion-card-header>\n      <ion-card-content class=\"message\">\n        {{post.data.message}}<br/>\n          <ion-row class=\"tags-wrapper\">\n            <div class=\"tags\" *ngFor=\"let tag of post.postTags\">\n              <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\n              <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\n            </div>\n          </ion-row>\n      </ion-card-content>\n    </ion-row>\n    \n  <ion-row class=\"user-preferences-wrapper message\">\n    <ion-col size=3>\n      <ion-buttons>\n        <ion-button (click)=\"submitReactionSmile()\">\n       <div *ngIf=\"post.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n       <div *ngIf=\"!post.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n      </ion-button>\n      </ion-buttons> \n    </ion-col>\n    <ion-col size=3>\n      <ion-buttons>\n        <ion-button (click)=\"submitReactionHug()\">\n       <div *ngIf=\"post.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n       <div *ngIf=\"!post.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n      </ion-button>\n      </ion-buttons> \n    </ion-col>\n    <ion-col size=2></ion-col>\n    <ion-col size=2>\n      <ion-buttons>\n        <ion-button (click)=\"showReactionsList()\">\n      <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{post.totalReactionCount}}</span></div>\n    </ion-button>\n  </ion-buttons> \n    </ion-col>\n    <ion-col size=2>\n      <ion-buttons>\n        <ion-button>\n      <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{post.totalReviewCount}}</span></div>\n    </ion-button>\n  </ion-buttons> \n  </ion-col>\n  </ion-row>\n\n  <!-- <hr class=\"details-divider\">\n  \n    <h3 class=\"detail-title\">Selected Tags</h3> -->\n  \n  <hr class=\"details-divider\">\n  <div class=\"user-preferences-wrapper\">\n    <div  >\n      <div class=\"reviews\" *ngFor=\"let r of postReviews\">\n        <ion-row>\n          <ion-col size=\"2\">\n              <img class=\"addedByImgReview\" src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\n          </ion-col>\n          <ion-col class=\"review\" size=\"9\">\n              <span class=\"addedByTitle\"><a (click)=\"viewUser(r.addedByUser.addedByKey)\" >\n                <b>{{post.addedByUser.addedByUsername}}</b></a>, <span class=\"addedByDateReview\">{{r.dateCreated.toDate() | DateFormat}}</span>\n              </span>\n                  <br/>\n                  <br/>\n                  <div class=\"addedByTitle\" [innerHTML]=\"r.review\"></div>\n            </ion-col>\n      </ion-row>\n     </div>\n    </div>\n  </div>\n\n </ion-card>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-item class=\"bottom_bar\">\n      <ion-button fill=\"clear\" (click)=\"attach()\">\n        <ion-icon size=\"large\" name=\"camera-outline\"></ion-icon>\n      </ion-button>\n      <ion-textarea rows=\"0\" style=\"width:100%\" placeholder=\"Type your message\" [(ngModel)]=\"message\"></ion-textarea>\n      <ion-buttons slot=\"end\" style=\"margin-left:4px;\">\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"submitReply()\" [disabled]=\"!message\">\n          send\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./src/app/post/post.module.ts":
  /*!*************************************!*\
    !*** ./src/app/post/post.module.ts ***!
    \*************************************/

  /*! exports provided: PostPageModule */

  /***/
  function srcAppPostPostModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPageModule", function () {
      return PostPageModule;
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


    var _services_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _post_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./post.page */
    "./src/app/post/post.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _post_page__WEBPACK_IMPORTED_MODULE_7__["PostPage"]
    }];

    var PostPageModule = function PostPageModule() {
      _classCallCheck(this, PostPageModule);
    };

    PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_post_page__WEBPACK_IMPORTED_MODULE_7__["PostPage"]]
    })], PostPageModule);
    /***/
  },

  /***/
  "./src/app/post/post.page.scss":
  /*!*************************************!*\
    !*** ./src/app/post/post.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\n.contact-card-content {\n  --background: var(--page-background);\n}\n\n.contact-card-content .user-preferences-wrapper .header {\n  width: 100%;\n}\n\n.contact-card-content .user-preferences-wrapper .message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400px;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper {\n  padding-top: calc(var(--page-margin) / 1);\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags {\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags .item-rating {\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags .item-rating[ratingBase=\"0\"] {\n  color: #aa6c39;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags .item-rating[ratingBase=\"1\"] {\n  color: #aa6c39;\n}\n\n.contact-card-content .user-preferences-wrapper .title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Roboto-Medium\", \"Segoe UI Semibold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle {\n  line-height: 20px;\n  width: 100%;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle img {\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .user-preferences-wrapper .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .user-preferences-wrapper .reviews {\n  margin-bottom: 15px;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByTitle {\n  margin-left: 10px;\n  line-height: 1;\n  margin-right: 5px;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByDateReview {\n  font-style: italic;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByImg {\n  width: 50px;\n  float: left;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByImgReview {\n  width: 50px;\n  margin-left: 10px;\n  float: left;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .review {\n  width: 90%;\n}\n\n.contact-card-content .details-divider {\n  margin: 3px var(--page-margin) 3px;\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.contact-card-content .reviews-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item {\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  background-color: #f9f9fa;\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review-date {\n  padding-top: 3px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review img {\n  height: 25px;\n  width: 25px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .reviews-wrapper .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .detail-title-reply {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n\n.contact-card-content .reviews-wrapper .placeholder {\n  box-sizing: border-box;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9wb3N0L3Bvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wb3N0L3Bvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDhEQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVJO0VBQ0UsV0FBQTtBQ0FOOztBREdJO0VBQ0Usa0dBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ROOztBRElFO0VBQ0UseUNBQUE7RUFDQSw0Q0FBQTtBQ0ZKOztBREdJO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FERUk7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBTjs7QURDTTtFQUNFLGNBQUE7QUNDUjs7QURDTTtFQUNFLGNBQUE7QUNDUjs7QURNSTtFQUNFLDhHQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0pOOztBRE9JO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDTE47O0FEUUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNOTjs7QURVSTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUNSTjs7QURXSTtFQUNHLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNUUDs7QURZSTtFQUNFLG1CQUFBO0FDVk47O0FEWUk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1ZOOztBRFlJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ1ZOOztBRFlJO0VBQ0Usa0JBQUE7QUNWTjs7QURZRztFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNWUDs7QURZSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ1ZOOztBRFlLO0VBQ0UsVUFBQTtBQ1ZQOztBRGVFO0VBQ0Usa0NBQUE7RUFDQSxpRUFBQTtBQ2JKOztBRGdCRTtFQUNFLGtEQUFBO0FDZEo7O0FEZUk7RUFDRSwyQ0FBQTtBQ2JOOztBRGNNO0VBRUUsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUdBLHNCQUFBO0FDZlI7O0FEcUJNO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQ25CUjs7QURzQk07RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDcEJSOztBRHVCTTtFQUNFLGdCQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNyQlI7O0FEd0JNO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDdEJOOztBRDJCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FDekJOOztBRDRCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQzFCTjs7QUQ2Qkk7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVFQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDM0JOIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XG59XG5cbi5jb250YWN0LWNhcmQtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5tZXNzYWdlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG5cbiAgICAgICAgIFxuICAudGFncy13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAxKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAudGFncyB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAuaXRlbS1yYXRpbmcge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICZbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICAgICAgICBjb2xvcjogI2FhNmMzOTtcbiAgICAgIH1cbiAgICAgICZbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICAgICAgICBjb2xvcjogI2FhNmMzOTtcbiAgICAgIH1cbiAgICB9XG4gICAgfVxuICB9XG4gfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZS1NZWRpdW0nLCAnSGVsdmV0aWNhIE5ldWUgTWVkaXVtJywnUm9ib3RvLU1lZGl1bScsICdTZWdvZSBVSSBTZW1pYm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNTAwcHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgIG1hcmdpbjogMSAwIDRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAuc3VidGl0bGV7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5zdWJ0aXRsZSBpbWcge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gICAgIFxuICAgIC50ZXh0e1xuICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gICAgICAgZm9udC1mYW1pbHk6ICBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnJldmlld3Mge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gICAgLmFkZGVkQnlUaXRsZSB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOyAgICBcbiAgICAgIG1hcmdpbi1yaWdodDo1cHg7ICBcbiAgICB9XG4gICAgLmFkZGVkQnlEYXRlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICB9XG4gICAgLmFkZGVkQnlEYXRlUmV2aWV3IHtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgfVxuICAgLmFkZGVkQnlJbWcge1xuICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgIH1cbiAgICAuYWRkZWRCeUltZ1JldmlldyB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAgLnJldmlldyB7XG4gICAgICAgd2lkdGg6OTAlO1xuICAgICB9XG4gIH1cblxuXG4gIC5kZXRhaWxzLWRpdmlkZXIge1xuICAgIG1hcmdpbjogM3B4IHZhcigtLXBhZ2UtbWFyZ2luKSAzcHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIC40KTtcbiAgfVxuXG4gIC5yZXZpZXdzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC5yZXZpZXdzLWxpc3Qge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIC5yZXZpZXctaXRlbSB7XG4gICAgICAgIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjUwKTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAvLyBib3JkZXItY29sb3I6IHJnYigyMzksIDI0MSwgMjQzKTtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAvLyBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIFxuICAgICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgICAgICBcbiAgICAgIC50ZXh0e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5yZXZpZXctZGF0ZXtcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAucmV2aWV3IGltZyB7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgICAuZGV0YWlsLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG5cbiAgICAuZGV0YWlsLXRpdGxlLXJlcGx5IHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICAucGxhY2Vob2xkZXIge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xuICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuXG59XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xufVxuXG4uY29udGFjdC1jYXJkLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAubWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5tZXNzYWdlIC50YWdzLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAxKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAubWVzc2FnZSAudGFncy13cmFwcGVyIC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciAudGFncyAuaXRlbS1yYXRpbmcge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5tZXNzYWdlIC50YWdzLXdyYXBwZXIgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgY29sb3I6ICNhYTZjMzk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAubWVzc2FnZSAudGFncy13cmFwcGVyIC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMVwiXSB7XG4gIGNvbG9yOiAjYWE2YzM5O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1NZWRpdW1cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBNZWRpdW1cIiwgXCJSb2JvdG8tTWVkaXVtXCIsIFwiU2Vnb2UgVUkgU2VtaWJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBtYXJnaW46IDEgMCA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnN1YnRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnN1YnRpdGxlIGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAucmV2aWV3cyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuYWRkZWRCeVRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5RGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuYWRkZWRCeURhdGVSZXZpZXcge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuYWRkZWRCeUltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5SW1nUmV2aWV3IHtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5yZXZpZXcge1xuICB3aWR0aDogOTAlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5kZXRhaWxzLWRpdmlkZXIge1xuICBtYXJnaW46IDNweCB2YXIoLS1wYWdlLW1hcmdpbikgM3B4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgMC40KTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmYTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAudGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctZGF0ZSB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXcgaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLmRldGFpbC10aXRsZS1yZXBseSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5wbGFjZWhvbGRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xuICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgZmxleC1ncm93OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post/post.page.ts":
  /*!***********************************!*\
    !*** ./src/app/post/post.page.ts ***!
    \***********************************/

  /*! exports provided: PostPage */

  /***/
  function srcAppPostPostPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPage", function () {
      return PostPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../reaction-list-modal/reaction-list-modal.page */
    "./src/app/reaction-list-modal/reaction-list-modal.page.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_13__);

    var PostPage =
    /*#__PURE__*/
    function () {
      function PostPage(dataProvider, loadingProvider, route, router, firestore, actionSheet, modalCtrl, imageProvider, camera, keyboard, contacts, geolocation, alertCtrl) {
        _classCallCheck(this, PostPage);

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
        this.post = {
          showSmiley: false,
          showHug: false,
          addedByUser: {},
          data: {},
          date: firebase_app__WEBPACK_IMPORTED_MODULE_13__["firestore"].Timestamp.now()
        };
        this.getPostDetails();
      }

      _createClass(PostPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPostDetails",
        value: function getPostDetails() {
          var _this = this;

          this.loadingProvider.show();
          this.postId = this.route.snapshot.params.id;
          this.post.reactions = [];
          this.post.reviews = [];
          this.dataProvider.getPostDetails(this.postId).get().subscribe(function (post) {
            if (post) {
              var p = post.data();
              p.reactions = [];
              p.key = post.id;
              _this.title = post.data().title;
              var totalReactionCount = 0;
              var totalReviewCount = 0;
              p.postTags = p.postTags.filter(function (x) {
                return x.isChecked !== false;
              }); // get reactions list

              _this.firestore.collection('posts').doc(post.id).collection('reactions').snapshotChanges().subscribe(function (reactions) {
                _this.post.reactions = [];
                reactions.forEach(function (element) {
                  var reaction = element.payload.doc.data();
                  reaction.key = element.payload.doc.id;
                  p.reactions.push(reaction);
                }); // Check for Thanks

                if (reactions) {
                  totalReactionCount = p.reactions.length;
                  var foundSmiley = false;

                  if (p.reactions !== undefined) {
                    foundSmiley = p.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    p.showSmiley = true;
                  } else {
                    p.showSmiley = false;
                  } // Check for Hugs


                  var foundHug = false;

                  if (p.reactions !== undefined) {
                    foundHug = p.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this.dataProvider.getCurrentUserId() && el.reactionType === 'Hug';
                    });
                  }

                  if (foundHug) {
                    p.showHug = true;
                  } else {
                    p.showHug = false;
                  }

                  p.totalReactionCount = totalReactionCount;
                }
              }); // get reviews list


              _this.firestore.collection('posts').doc(post.id).collection('reviews').ref.orderBy("dateCreated", "desc").onSnapshot(function (reviews) {
                _this.post.reviews = [];
                p.reviews = [];
                reviews.forEach(function (element) {
                  var review = element.data();
                  review.key = element.id;
                  p.reviews.push(review);
                });
                totalReviewCount = p.reviews.length;
                p.totalReviewCount = totalReviewCount;
                _this.postReviews = p.reviews;

                if (p.reviews !== undefined) {
                  _this.postReviews = [];
                  var values = Object.keys(p.reviews).map(function (e) {
                    p.reviews[e].key = e;
                    return p.reviews[e];
                  });
                  _this.postReviews = values;

                  _this.postReviews.sort(function (a, b) {
                    return a.dateCreated < b.dateCreated ? 1 : -1;
                  });
                }
              });

              _this.post = p;
            }

            _this.loadingProvider.hide();
          });
        }
      }, {
        key: "submitReactionSmile",
        value: function submitReactionSmile() {
          var _this2 = this;

          var reaction = this.post.reactions.find(function (el) {
            return el.addedByUser.addedByKey === _this2.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
          });

          if (reaction === undefined) {
            this.dataProvider.getCurrentUser().get().subscribe(function (account) {
              if (account) {
                var currentUserName = account.data().username;
                var _reaction = {
                  key: '',
                  dateCreated: new Date(),
                  addedByUser: {
                    addedByKey: _this2.dataProvider.getCurrentUserId(),
                    addedByUsername: account.data().username,
                    addedByImg: account.data().img
                  },
                  reactionType: 'Thanks'
                };

                _this2.dataProvider.updatePostReactions(_this2.post.key, _reaction).then(function () {
                  _this2.post.showSmiley = true;
                });
              }
            });
          } else {
            this.post.showSmiley = false;
            this.dataProvider.removePostReaction(this.post.key, reaction.key);
          }
        }
      }, {
        key: "submitReactionHug",
        value: function submitReactionHug() {
          var _this3 = this;

          var reaction = this.post.reactions.find(function (el) {
            return el.addedByUser.addedByKey === _this3.dataProvider.getCurrentUserId() && el.reactionType === 'Hug';
          });

          if (reaction === undefined) {
            this.dataProvider.getCurrentUser().get().subscribe(function (account) {
              if (account) {
                var currentUserName = account.data().username;
                var _reaction2 = {
                  key: '',
                  dateCreated: new Date(),
                  addedByUser: {
                    addedByKey: _this3.dataProvider.getCurrentUserId(),
                    addedByUsername: account.data().username,
                    addedByImg: account.data().img
                  },
                  reactionType: 'Hug'
                };

                _this3.dataProvider.updatePostReactions(_this3.post.key, _reaction2).then(function () {
                  _this3.post.showHug = true;
                });
              }
            });
          } else {
            this.post.showHug = false;
            this.dataProvider.removePostReaction(this.post.key, reaction.key);
          }
        }
      }, {
        key: "showReactionsList",
        value: function showReactionsList() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var p, modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.post.totalReactionCount === 0)) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    p = this.post;
                    _context.next = 5;
                    return this.modalCtrl.create({
                      component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_7__["ReactionListModalPage"],
                      componentProps: {
                        reactions: p.reactions
                      }
                    });

                  case 5:
                    modal = _context.sent;
                    _context.next = 8;
                    return modal.present();

                  case 8:
                    return _context.abrupt("return", _context.sent);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "submitReply",
        value: function submitReply() {
          var _this4 = this;

          this.message = this.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
          ;
          var review;
          var currentUserName;
          this.dataProvider.getCurrentUser().get().subscribe(function (account) {
            if (account) {
              currentUserName = account.data().username;
              review = {
                dateCreated: new Date(),
                addedByUser: {
                  addedByKey: _this4.dataProvider.getCurrentUserId(),
                  addedByUsername: account.data().username,
                  addedByImg: account.data().img
                },
                review: _this4.message
              };

              _this4.dataProvider.updatePostReviews(_this4.postId, review);

              _this4.message = '';
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

      return PostPage;
    }();

    PostPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__["Contacts"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post.page.scss */
      "./src/app/post/post.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__["Contacts"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], PostPage);
    /***/
  }
}]);
//# sourceMappingURL=post-post-module-es5.js.map