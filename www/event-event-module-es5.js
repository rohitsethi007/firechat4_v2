function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-event-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventEventPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>{{title}}</ion-title>\r\n    </ion-toolbar> \r\n  </ion-header>\r\n  \r\n  <ion-content class=\"contact-card-content\"> \r\n  <div>\r\n      <ion-card>\r\n        <ion-row class=\"user-preferences-wrapper\">\r\n          <ion-card-header class=\"header\">\r\n            <ion-card-subtitle class=\"addedBy\">\r\n                <img class=\"addedByImg\" src=\"{{post.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n                 <p><a class=\"addedByTitle\" (click)=\"viewUser(post.addedByUser.addedByKey)\" ><b>{{post.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n                  <br/>\r\n                 <span class=\"addedByDate\">posted {{post.date.toDate() | DateFormat}}</span><br/>\r\n                <a (click)=\"viewGroup(post.groupId)\" class=\"addedByTitle\">in <b>{{post.groupName}}</b></a></p>\r\n              </ion-card-subtitle>\r\n          </ion-card-header>\r\n        <ion-card-content class=\"message\">\r\n            <b>{{post.title}}.</b> <br/>{{post.data.eventDate}} at {{post.data.eventTime}}<br/><br/>\r\n            {{post.data.address}}<br/><br/>\r\n            {{post.data.link}}\r\n            <ion-row class=\"tags-wrapper\">\r\n              <div class=\"tags\" *ngFor=\"let tag of post.postTags\">\r\n                <span class=\"item-rating\">#{{tag.val}}</span>\r\n              </div>\r\n            </ion-row>\r\n        </ion-card-content>\r\n      </ion-row>\r\n      \r\n    <ion-row class=\"user-preferences-wrapper message\">\r\n      <ion-col size=3>\r\n        <ion-buttons>\r\n          <ion-button (click)=\"submitReactionSmile()\">\r\n         <div *ngIf=\"post.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n         <div *ngIf=\"!post.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n        </ion-button>\r\n        </ion-buttons> \r\n      </ion-col>\r\n      <ion-col size=3> \r\n        <ion-buttons>\r\n          <ion-button (click)=\"submitReactionCheckin()\">\r\n         <div *ngIf=\"post.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n         <div *ngIf=\"!post.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n        </ion-button>\r\n        </ion-buttons> \r\n      </ion-col>\r\n      <ion-col size=2></ion-col>\r\n      <ion-col size=2>\r\n        <ion-buttons>\r\n          <ion-button (click)=\"showReactionsList()\">\r\n        <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{post.totalReactionCount}}</span></div>\r\n      </ion-button>\r\n    </ion-buttons> \r\n      </ion-col>\r\n      <ion-col size=2>\r\n        <ion-buttons>\r\n          <ion-button>\r\n        <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{post.totalReviewCount}}</span></div>\r\n      </ion-button>\r\n    </ion-buttons> \r\n    </ion-col>\r\n    </ion-row>\r\n    <hr class=\"details-divider\">\r\n    <div class=\"user-preferences-wrapper\">\r\n      <div  >\r\n        <div class=\"reviews\" *ngFor=\"let r of postReviews\">\r\n          <ion-row>\r\n            <ion-col size=\"2\">\r\n                <img class=\"addedByImgReview\" src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n            </ion-col>\r\n            <ion-col class=\"review\" size=\"9\">\r\n                <span class=\"addedByTitle\"><a (click)=\"viewUser(r.addedByUser.addedByKey)\" >\r\n                  <b>{{r.addedByUser.addedByUsername}}</b></a>, <span class=\"addedByDateReview\">{{r.dateCreated.toDate() | DateFormat}}</span>\r\n                </span>\r\n                    <br/>\r\n                    <br/>\r\n                    <div class=\"addedByTitle\" [innerHTML]=\"r.review\"></div>\r\n              </ion-col>\r\n        </ion-row>\r\n       </div>\r\n      </div>\r\n    </div>\r\n  \r\n   </ion-card>\r\n  </div>\r\n  </ion-content>\r\n  <ion-footer>\r\n    <ion-toolbar>\r\n      <ion-item class=\"bottom_bar\">\r\n        <ion-button fill=\"clear\" (click)=\"attach()\">\r\n          <ion-icon size=\"large\" name=\"camera-outline\"></ion-icon>\r\n        </ion-button>\r\n        <ion-textarea rows=\"0\" style=\"width:100%\" placeholder=\"Type your message\" [(ngModel)]=\"message\"></ion-textarea>\r\n        <ion-buttons slot=\"end\" style=\"margin-left:4px;\">\r\n          <ion-button color=\"primary\" fill=\"clear\" (click)=\"submitReply()\" [disabled]=\"!message\">\r\n            send\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-item>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n  ";
    /***/
  },

  /***/
  "./src/app/event/event.module.ts":
  /*!***************************************!*\
    !*** ./src/app/event/event.module.ts ***!
    \***************************************/

  /*! exports provided: EventPageModule */

  /***/
  function srcAppEventEventModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventPageModule", function () {
      return EventPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./event.page */
    "./src/app/event/event.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");

    var routes = [{
      path: '',
      component: _event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]
    }];

    var EventPageModule = function EventPageModule() {
      _classCallCheck(this, EventPageModule);
    };

    EventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]]
    })], EventPageModule);
    /***/
  },

  /***/
  "./src/app/event/event.page.scss":
  /*!***************************************!*\
    !*** ./src/app/event/event.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventEventPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\n.contact-card-content {\n  --background: var(--page-background);\n}\n\n.contact-card-content .user-preferences-wrapper .header {\n  width: 100%;\n}\n\n.contact-card-content .user-preferences-wrapper .message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400px;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper {\n  padding-top: calc(var(--page-margin) / 1);\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags {\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #aa6c39;\n}\n\n.contact-card-content .user-preferences-wrapper .title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Roboto-Medium\", \"Segoe UI Semibold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle {\n  line-height: 20px;\n  width: 100%;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle img {\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .user-preferences-wrapper .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.contact-card-content .user-preferences-wrapper .reviews {\n  margin-bottom: 15px;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByTitle {\n  margin-left: 10px;\n  line-height: 1;\n  margin-right: 5px;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByDateReview {\n  font-style: italic;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByImg {\n  width: 50px;\n  float: left;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByImgReview {\n  width: 50px;\n  margin-left: 10px;\n  float: left;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .review {\n  width: 90%;\n}\n\n.contact-card-content .details-divider {\n  margin: 3px var(--page-margin) 3px;\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.contact-card-content .reviews-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item {\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  background-color: #f9f9fa;\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review-date {\n  padding-top: 3px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .detail-title-reply {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n\n.contact-card-content .reviews-wrapper .placeholder {\n  box-sizing: border-box;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcZXZlbnRcXGV2ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZXZlbnQvZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDhEQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVJO0VBQ0UsV0FBQTtBQ0FOOztBREdJO0VBQ0Usa0dBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ROOztBRElFO0VBQ0UseUNBQUE7RUFDQSw0Q0FBQTtBQ0ZKOztBREdJO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FERUk7RUFFRSxtREFBQTtFQU1BLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNOTjs7QURZSTtFQUNFLDhHQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1ZOOztBRGFJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDWE47O0FEY0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNaTjs7QURnQkk7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDZE47O0FEaUJJO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7QUNmTjs7QURrQkk7RUFDRSxtQkFBQTtBQ2hCTjs7QURrQkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2hCTjs7QURrQkk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDaEJOOztBRGtCSTtFQUNFLGtCQUFBO0FDaEJOOztBRGtCRztFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNoQlA7O0FEa0JJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDaEJOOztBRGtCSztFQUNFLFVBQUE7QUNoQlA7O0FEcUJFO0VBQ0Usa0NBQUE7RUFDQSxpRUFBQTtBQ25CSjs7QURzQkU7RUFDRSxrREFBQTtBQ3BCSjs7QURxQkk7RUFDRSwyQ0FBQTtBQ25CTjs7QURvQk07RUFFRSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx1RUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBR0Esc0JBQUE7QUNyQlI7O0FEMkJNO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQ3pCUjs7QUQ0Qk07RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDMUJSOztBRDZCTTtFQUNFLGdCQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMzQlI7O0FEaUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUMvQk47O0FEa0NJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FDaENOOztBRG1DSTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNqQ04iLCJmaWxlIjoic3JjL2FwcC9ldmVudC9ldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gIC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xyXG59XHJcblxyXG4uY29udGFjdC1jYXJkLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG5cclxuICAgICAgICAgXHJcbiAgLnRhZ3Mtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAxKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgLnRhZ3Mge1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAuaXRlbS1yYXRpbmcge1xyXG4gICAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAvLyBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcbiAgICAgIC8vIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xyXG4gICAgICAvL3BhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xyXG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2FhNmMzOTtcclxuICAgIH1cclxuICAgIH1cclxuICB9XHJcbiB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLU1lZGl1bScsICdIZWx2ZXRpY2EgTmV1ZSBNZWRpdW0nLCdSb2JvdG8tTWVkaXVtJywgJ1NlZ29lIFVJIFNlbWlib2xkJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBtYXJnaW46IDEgMCA0cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZXtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgLnRleHR7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnJldmlld3Mge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmFkZGVkQnlUaXRsZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTsgICAgXHJcbiAgICAgIG1hcmdpbi1yaWdodDo1cHg7ICBcclxuICAgIH1cclxuICAgIC5hZGRlZEJ5RGF0ZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgfVxyXG4gICAgLmFkZGVkQnlEYXRlUmV2aWV3IHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgIH1cclxuICAgLmFkZGVkQnlJbWcge1xyXG4gICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgfVxyXG4gICAgLmFkZGVkQnlJbWdSZXZpZXcge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgIC5yZXZpZXcge1xyXG4gICAgICAgd2lkdGg6OTAlO1xyXG4gICAgIH1cclxuICB9XHJcblxyXG5cclxuICAuZGV0YWlscy1kaXZpZGVyIHtcclxuICAgIG1hcmdpbjogM3B4IHZhcigtLXBhZ2UtbWFyZ2luKSAzcHg7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQpO1xyXG4gIH1cclxuXHJcbiAgLnJldmlld3Mtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC5yZXZpZXdzLWxpc3Qge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAucmV2aWV3LWl0ZW0ge1xyXG4gICAgICAgIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xyXG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjUwKTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgLy8gYm9yZGVyLWNvbG9yOiByZ2IoMjM5LCAyNDEsIDI0Myk7XHJcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgLy8gYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgIFxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgIC50ZXh0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJldmlldy1kYXRle1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gICAgLmRldGFpbC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWwtdGl0bGUtcmVwbHkge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcclxuICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcblxyXG59XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcbn1cblxuLmNvbnRhY3QtY2FyZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLm1lc3NhZ2Uge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAubWVzc2FnZSAudGFncy13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMSk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciAudGFncyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5tZXNzYWdlIC50YWdzLXdyYXBwZXIgLnRhZ3MgLml0ZW0tcmF0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuMzUpO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNhYTZjMzk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLU1lZGl1bVwiLCBcIkhlbHZldGljYSBOZXVlIE1lZGl1bVwiLCBcIlJvYm90by1NZWRpdW1cIiwgXCJTZWdvZSBVSSBTZW1pYm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbjogMSAwIDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuc3VidGl0bGUge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuc3VidGl0bGUgaW1nIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAudGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAucmV2aWV3cyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuYWRkZWRCeVRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5RGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuYWRkZWRCeURhdGVSZXZpZXcge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuYWRkZWRCeUltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5SW1nUmV2aWV3IHtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5yZXZpZXcge1xuICB3aWR0aDogOTAlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5kZXRhaWxzLWRpdmlkZXIge1xuICBtYXJnaW46IDNweCB2YXIoLS1wYWdlLW1hcmdpbikgM3B4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgMC40KTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmYTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAudGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctZGF0ZSB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5kZXRhaWwtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5kZXRhaWwtdGl0bGUtcmVwbHkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucGxhY2Vob2xkZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/event/event.page.ts":
  /*!*************************************!*\
    !*** ./src/app/event/event.page.ts ***!
    \*************************************/

  /*! exports provided: EventPage */

  /***/
  function srcAppEventEventPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventPage", function () {
      return EventPage;
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

    var EventPage =
    /*#__PURE__*/
    function () {
      function EventPage(dataProvider, loadingProvider, route, router, firestore, actionSheet, modalCtrl, imageProvider, camera, keyboard, contacts, geolocation, alertCtrl) {
        _classCallCheck(this, EventPage);

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
          showCheckin: false,
          addedByUser: {},
          data: {},
          date: firebase_app__WEBPACK_IMPORTED_MODULE_13__["firestore"].Timestamp.now()
        };
        this.getPostDetails();
      }

      _createClass(EventPage, [{
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
                  } // Check for Checkin


                  var foundCheckin = false;

                  if (p.reactions !== undefined) {
                    foundCheckin = p.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this.dataProvider.getCurrentUserId() && el.reactionType === 'Checkin';
                    });
                  }

                  if (foundCheckin) {
                    p.showCheckin = true;
                  } else {
                    p.showCheckin = false;
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
                _this.postReviews = p.reviews; // if (p.reviews !== undefined) {
                //     this.postReviews = [];
                //     let values = Object.keys(p.reviews).map(function(e) {
                //       p.reviews[e].key = e;
                //       return p.reviews[e];
                //     });
                //     this.postReviews = values;
                //     this.postReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
                //   }
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
        key: "submitReactionCheckin",
        value: function submitReactionCheckin() {
          var _this3 = this;

          var reaction = this.post.reactions.find(function (el) {
            return el.addedByUser.addedByKey === _this3.dataProvider.getCurrentUserId() && el.reactionType === 'Checkin';
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
                  reactionType: 'Checkin'
                };

                _this3.dataProvider.updatePostReactions(_this3.post.key, _reaction2).then(function () {
                  _this3.post.showCheckin = true;
                });
              }
            });
          } else {
            this.post.showCheckin = false;
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
          console.log('this.message', JSON.stringify(this.message));
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

      return EventPage;
    }();

    EventPage.ctorParameters = function () {
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

    EventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event.page.scss */
      "./src/app/event/event.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__["Contacts"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], EventPage);
    /***/
  }
}]);
//# sourceMappingURL=event-event-module-es5.js.map