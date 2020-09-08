function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource-resource-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resource/resource.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resource/resource.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResourceResourcePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n<ion-content class=\"contact-card-content\"> \r\n    <ion-card>\r\n      <ion-row class=\"user-preferences-wrapper\">\r\n        <ion-card-header class=\"header\">\r\n          <ion-card-subtitle class=\"addedBy\">\r\n              <img class=\"addedByImg\" src=\"{{resource.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n               <p><a class=\"addedByTitle\" (click)=\"viewUser(resource.addedByUser.addedByKey)\" ><b>{{resource.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n                <br/>\r\n               <span class=\"addedByDate\">posted {{resource.date.toDate() | DateFormat}}</span><br/>\r\n              <a (click)=\"viewGroup(resource.groupId)\" class=\"addedByTitle\">in <b>{{resource.groupName}}</b></a></p>\r\n            </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"message\">\r\n          <div *ngIf=\"resource.data.type == 'contact'\" >\r\n            {{resource.data.name}}<br/>\r\n            {{resource.data.address}}<br/><br/>\r\n            {{resource.data.email}}<br/>\r\n            {{resource.data.phones}}<br/>\r\n        </div>\r\n        <div *ngIf=\"resource.data.type == 'weblink'\" >\r\n          {{resource.metatitle}}<br/>\r\n          <img [src]=\"resource.metaicon\"/>   \r\n           {{resource.metadescription}}<br/><br/>\r\n           <a href=\"{{resource.metasite}}\">{{resource.metasite}}</a>\r\n        </div>\r\n        <div *ngIf=\"resource.data.type == 'upload'\" >\r\n          <div *ngIf=\"resource.uploadtype == 'location'\" [innerHtml]=\"resource.url\"></div>\r\n          <div *ngIf=\"resource.uploadtype == 'contact'\">\r\n            {{resource.name}}<br/>\r\n            {{resource.address}}<br/>\r\n            {{resource.phones}}<br/>\r\n            {{resource.email}}<br/>\r\n          </div>\r\n          <div *ngIf=\"resource.uploadtype == 'image'\">\r\n            <img src=\"{{resource.resolvedurl}}\" />\r\n          </div>\r\n          <div *ngIf=\"resource.uploadtype == 'video'\">\r\n            <video controls width=\"100%\" src=\"{{resource.resolvedurl}}\" ></video>\r\n          </div>\r\n        </div>\r\n        <ion-row class=\"tags-wrapper\">\r\n          <div class=\"tags\" *ngFor=\"let tag of resource.postTags\">\r\n            <span class=\"item-rating\">#{{tag.val}}</span>\r\n          </div>\r\n        </ion-row>\r\n        </ion-card-content>\r\n      </ion-row>\r\n      <ion-row class=\"user-preferences-wrapper message\">\r\n              <ion-col size=3>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionSmile()\">\r\n                 <div *ngIf=\"resource.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                 <div *ngIf=\"!resource.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=3>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionBookmark()\">\r\n                 <div *ngIf=\"resource.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                 <div *ngIf=\"!resource.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=2></ion-col>\r\n              <ion-col size=2>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"showReactionsList()\">\r\n                <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{resource.totalReactionCount}}</span></div>\r\n              </ion-button>\r\n            </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=2>\r\n                <ion-buttons>\r\n                  <ion-button>\r\n                   <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{resource.totalReviewCount}}</span></div>\r\n                 </ion-button>\r\n            </ion-buttons> \r\n              </ion-col>\r\n       </ion-row>\r\n         <hr class=\"details-divider\">\r\n         <div class=\"user-preferences-wrapper\">\r\n          <div  >\r\n            <div class=\"reviews\" *ngFor=\"let r of postReviews\">\r\n              <ion-row>\r\n                <ion-col size=\"2\">\r\n                    <img class=\"addedByImgReview\" src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n                </ion-col>\r\n                <ion-col class=\"review\" size=\"9\">\r\n                    <span class=\"addedByTitle\"><a (click)=\"viewUser(r.addedByUser.addedByKey)\" >\r\n                      <b>{{r.addedByUser.addedByUsername}}</b></a>, <span class=\"addedByDateReview\">{{r.dateCreated.toDate() | DateFormat}}</span>\r\n                    </span>\r\n                        <br/>\r\n                        <br/>\r\n                        <div class=\"addedByTitle\" [innerHTML]=\"r.review\"></div>\r\n                  </ion-col>\r\n            </ion-row>\r\n           </div>\r\n          </div>\r\n        </div>\r\n   </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-item class=\"bottom_bar\">\r\n      <ion-button fill=\"clear\" (click)=\"attach()\">\r\n        <ion-icon size=\"large\" name=\"camera-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-textarea rows=\"0\" style=\"width:100%\" placeholder=\"Type your message\" [(ngModel)]=\"message\"></ion-textarea>\r\n      <ion-buttons slot=\"end\" style=\"margin-left:4px;\">\r\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"submitReply()\" [disabled]=\"!message\">\r\n          send\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/resource/resource.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/resource/resource.module.ts ***!
    \*********************************************/

  /*! exports provided: ResourcePageModule */

  /***/
  function srcAppResourceResourceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcePageModule", function () {
      return ResourcePageModule;
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


    var _resource_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./resource.page */
    "./src/app/resource/resource.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _resource_page__WEBPACK_IMPORTED_MODULE_7__["ResourcePage"]
    }];

    var ResourcePageModule = function ResourcePageModule() {
      _classCallCheck(this, ResourcePageModule);
    };

    ResourcePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_resource_page__WEBPACK_IMPORTED_MODULE_7__["ResourcePage"]],
      entryComponents: []
    })], ResourcePageModule);
    /***/
  },

  /***/
  "./src/app/resource/resource.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/resource/resource.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppResourceResourcePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\n.contact-card-content {\n  --background: var(--page-background);\n}\n\n.contact-card-content .user-preferences-wrapper .header {\n  width: 100%;\n}\n\n.contact-card-content .user-preferences-wrapper .message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400px;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper {\n  padding-top: calc(var(--page-margin) / 1);\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags {\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.contact-card-content .user-preferences-wrapper .message .tags-wrapper .tags .item-rating {\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #aa6c39;\n}\n\n.contact-card-content .user-preferences-wrapper .title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Roboto-Medium\", \"Segoe UI Semibold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle {\n  line-height: 20px;\n  width: 100%;\n}\n\n.contact-card-content .user-preferences-wrapper .subtitle img {\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.contact-card-content .user-preferences-wrapper .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.contact-card-content .user-preferences-wrapper .reviews {\n  margin-bottom: 15px;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByTitle {\n  margin-left: 10px;\n  line-height: 1;\n  margin-right: 5px;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByDateReview {\n  font-style: italic;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByImg {\n  width: 50px;\n  float: left;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .addedByImgReview {\n  width: 50px;\n  margin-left: 10px;\n  float: left;\n  vertical-align: middle;\n}\n\n.contact-card-content .user-preferences-wrapper .review {\n  width: 90%;\n}\n\n.contact-card-content .details-divider {\n  margin: 3px var(--page-margin) 3px;\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.contact-card-content .reviews-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item {\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  background-color: #f9f9fa;\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .reviews-list .review-item .review-date {\n  padding-top: 3px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.contact-card-content .reviews-wrapper .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.contact-card-content .reviews-wrapper .detail-title-reply {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n\n.contact-card-content .reviews-wrapper .placeholder {\n  box-sizing: border-box;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2UvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxccmVzb3VyY2VcXHJlc291cmNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVzb3VyY2UvcmVzb3VyY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDhEQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVJO0VBQ0UsV0FBQTtBQ0FOOztBREdJO0VBQ0Usa0dBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ROOztBRElFO0VBQ0UseUNBQUE7RUFDQSw0Q0FBQTtBQ0ZKOztBREdJO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FERUk7RUFRRSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDUE47O0FEYUk7RUFDRSw4R0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNYTjs7QURjSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ1pOOztBRGVJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDYk47O0FEaUJJO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQ2ZOOztBRGtCSTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDaEJOOztBRG1CSTtFQUNFLG1CQUFBO0FDakJOOztBRG1CSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDakJOOztBRG1CSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNqQk47O0FEbUJJO0VBQ0Usa0JBQUE7QUNqQk47O0FEbUJHO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ2pCUDs7QURtQkk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNqQk47O0FEbUJLO0VBQ0UsVUFBQTtBQ2pCUDs7QURzQkU7RUFDRSxrQ0FBQTtFQUNBLGlFQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtEQUFBO0FDckJKOztBRHNCSTtFQUNFLDJDQUFBO0FDcEJOOztBRHFCTTtFQUVFLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVFQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFHQSxzQkFBQTtBQ3RCUjs7QUQ0Qk07RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDMUJSOztBRDZCTTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMzQlI7O0FEOEJNO0VBQ0UsZ0JBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzVCUjs7QURrQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQ2hDTjs7QURtQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7QUNqQ047O0FEb0NJO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx1RUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2xDTiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlL3Jlc291cmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcbiAgLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XHJcbn1cclxuXHJcbi5jb250YWN0LWNhcmQtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcblxyXG4gICAgICAgICBcclxuICAudGFncy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAudGFncyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIC5pdGVtLXJhdGluZyB7XHJcbiAgICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxyXG4gICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xyXG4gICAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgLy8gYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICAvLyBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAxKTtcclxuICAgICAgLy9wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgLy8gcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNhYTZjMzk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZS1NZWRpdW0nLCAnSGVsdmV0aWNhIE5ldWUgTWVkaXVtJywnUm9ib3RvLU1lZGl1bScsICdTZWdvZSBVSSBTZW1pYm9sZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgbWFyZ2luOiAxIDAgNHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGV7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAgICBcclxuICAgIC50ZXh0e1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXZpZXdzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5hZGRlZEJ5VGl0bGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7ICAgIFxyXG4gICAgICBtYXJnaW4tcmlnaHQ6NXB4OyAgXHJcbiAgICB9XHJcbiAgICAuYWRkZWRCeURhdGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgIH1cclxuICAgIC5hZGRlZEJ5RGF0ZVJldmlldyB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICB9XHJcbiAgIC5hZGRlZEJ5SW1nIHtcclxuICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgIH1cclxuICAgIC5hZGRlZEJ5SW1nUmV2aWV3IHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAgICAucmV2aWV3IHtcclxuICAgICAgIHdpZHRoOjkwJTtcclxuICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmRldGFpbHMtZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDNweCB2YXIoLS1wYWdlLW1hcmdpbikgM3B4O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIC40KTtcclxuICB9XHJcblxyXG4gIC5yZXZpZXdzLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAucmV2aWV3cy1saXN0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgLnJldmlldy1pdGVtIHtcclxuICAgICAgICAvLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcclxuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI1MCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIC8vIGJvcmRlci1jb2xvcjogcmdiKDIzOSwgMjQxLCAyNDMpO1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIC8vIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICBcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAudGV4dHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXZpZXctZGF0ZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIC5kZXRhaWwtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsLXRpdGxlLXJlcGx5IHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xyXG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XHJcbiAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxufVxyXG59XHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XG59XG5cbi5jb250YWN0LWNhcmQtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5tZXNzYWdlIC50YWdzLXdyYXBwZXIgLnRhZ3Mge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAubWVzc2FnZSAudGFncy13cmFwcGVyIC50YWdzIC5pdGVtLXJhdGluZyB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2FhNmMzOTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWUtTWVkaXVtXCIsIFwiSGVsdmV0aWNhIE5ldWUgTWVkaXVtXCIsIFwiUm9ib3RvLU1lZGl1bVwiLCBcIlNlZ29lIFVJIFNlbWlib2xkXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbWFyZ2luOiAxIDAgNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5zdWJ0aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5zdWJ0aXRsZSBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5yZXZpZXdzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5VGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmFkZGVkQnlEYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5RGF0ZVJldmlldyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5SW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmFkZGVkQnlJbWdSZXZpZXcge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnJldmlldyB7XG4gIHdpZHRoOiA5MCU7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbjogM3B4IHZhcigtLXBhZ2UtbWFyZ2luKSAzcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjQpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0ge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAuaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy1kYXRlIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLmRldGFpbC10aXRsZS1yZXBseSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5wbGFjZWhvbGRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xuICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgZmxleC1ncm93OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/resource/resource.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/resource/resource.page.ts ***!
    \*******************************************/

  /*! exports provided: ResourcePage */

  /***/
  function srcAppResourceResourcePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcePage", function () {
      return ResourcePage;
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


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _review_modal_review_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../review-modal/review-modal.page */
    "./src/app/review-modal/review-modal.page.ts");
    /* harmony import */


    var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../reaction-list-modal/reaction-list-modal.page */
    "./src/app/reaction-list-modal/reaction-list-modal.page.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);

    var ResourcePage =
    /*#__PURE__*/
    function () {
      function ResourcePage(dataProvider, loadingProvider, route, router, navCtrl, modalCtrl, firestore) {
        _classCallCheck(this, ResourcePage);

        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.firestore = firestore;
        this.resource = {
          showSmiley: false,
          showBookmark: false,
          addedByUser: {},
          data: {},
          date: firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].Timestamp.now()
        };
        this.getResourceDetails();
      }

      _createClass(ResourcePage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openReviewModal",
        value: function openReviewModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _review_modal_review_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReviewModalPage"],
                      componentProps: {
                        data: this.resource
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data !== null) {
                        var review;
                        var currentUserName;

                        _this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (account) {
                          if (account.payload.exists()) {
                            currentUserName = account.payload.data().username;
                            review = {
                              dateCreated: new Date().toString(),
                              addedBy: _this.dataProvider.getCurrentUserId(),
                              addedByUsername: currentUserName,
                              review: data.data.review,
                              rating: data.data.rating
                            };

                            if (_this.resource.reviews === undefined) {
                              var reviews = [];
                              reviews.push(review);

                              _this.dataProvider.addFirstResourceReview(_this.resourceId, review);
                            } else {
                              _this.dataProvider.updateResourceReviews(_this.resourceId, review);
                            } //this.ngOnInit();

                          }
                        });
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getResourceDetails",
        value: function getResourceDetails() {
          var _this2 = this;

          this.loadingProvider.show(); // Get group details

          this.resourceId = this.route.snapshot.params.id;
          this.resource.reactions = [];
          this.resource.reviews = [];
          this.subscription = this.dataProvider.getResourceDetails(this.resourceId).get().subscribe(function (resource) {
            if (resource) {
              var p = resource.data();
              p.reactions = [];
              p.key = resource.id;
              _this2.title = resource.data().title;
              var totalReactionCount = 0;
              var totalReviewCount = 0;
              p.postTags = p.postTags.filter(function (x) {
                return x.isChecked !== false;
              }); // get reactions list

              _this2.firestore.collection('posts').doc(resource.id).collection('reactions').snapshotChanges().subscribe(function (reactions) {
                _this2.resource.reactions = [];
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
                      return el.addedByUser.addedByKey === _this2.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    p.showSmiley = true;
                  } else {
                    p.showSmiley = false;
                  } // Check for Bookmark


                  var foundBookmark = false;

                  if (p.reactions !== undefined) {
                    foundBookmark = p.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this2.dataProvider.getCurrentUserId() && el.reactionType === 'Bookmark';
                    });
                  }

                  if (foundBookmark) {
                    p.showBookmark = true;
                  } else {
                    p.showBookmark = false;
                  }

                  p.totalReactionCount = totalReactionCount;
                }
              }); // get reviews list


              _this2.firestore.collection('posts').doc(resource.id).collection('reviews').ref.orderBy("dateCreated", "desc").onSnapshot(function (reviews) {
                _this2.resource.reviews = [];
                p.reviews = [];
                reviews.forEach(function (element) {
                  var review = element.data();
                  review.key = element.id;
                  p.reviews.push(review);
                });
                totalReviewCount = p.reviews.length;
                p.totalReviewCount = totalReviewCount;
                _this2.postReviews = p.reviews;
              });

              _this2.resource = p;
            }

            _this2.loadingProvider.hide();
          });
        }
      }, {
        key: "submitReactionSmile",
        value: function submitReactionSmile() {
          var _this3 = this;

          var reaction = this.resource.reactions.find(function (el) {
            return el.addedByUser.addedByKey === _this3.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
          });

          if (reaction === undefined) {
            this.dataProvider.getCurrentUser().get().subscribe(function (account) {
              if (account) {
                var currentUserName = account.data().username;
                var _reaction = {
                  key: '',
                  dateCreated: new Date(),
                  addedByUser: {
                    addedByKey: _this3.dataProvider.getCurrentUserId(),
                    addedByUsername: account.data().username,
                    addedByImg: account.data().img
                  },
                  reactionType: 'Thanks'
                };

                _this3.dataProvider.updatePostReactions(_this3.resource.key, _reaction).then(function () {
                  _this3.resource.showSmiley = true;
                });
              }
            });
          } else {
            this.resource.showSmiley = false;
            this.dataProvider.removePostReaction(this.resource.key, reaction.key);
          }
        }
      }, {
        key: "submitReactionBookmark",
        value: function submitReactionBookmark() {
          var _this4 = this;

          var reaction = this.resource.reactions.find(function (el) {
            return el.addedByUser.addedByKey === _this4.dataProvider.getCurrentUserId() && el.reactionType === 'Bookmark';
          });
          console.log('reaction:', reaction);

          if (reaction === undefined) {
            this.dataProvider.getCurrentUser().get().subscribe(function (account) {
              if (account) {
                var currentUserName = account.data().username;
                var _reaction2 = {
                  key: '',
                  dateCreated: new Date(),
                  addedByUser: {
                    addedByKey: _this4.dataProvider.getCurrentUserId(),
                    addedByUsername: account.data().username,
                    addedByImg: account.data().img
                  },
                  reactionType: 'Bookmark'
                };

                _this4.dataProvider.updatePostReactions(_this4.resource.key, _reaction2).then(function () {
                  _this4.resource.showBookark = true;
                });
              }
            });
          } else {
            console.log('i exist:', this.resource.key, reaction.key);
            this.resource.showBookmark = false;
            this.dataProvider.removePostReaction(this.resource.key, reaction.key);
          }
        }
      }, {
        key: "showReactionsList",
        value: function showReactionsList() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var p, modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.resource.totalReactionCount === 0)) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    p = this.resource;
                    _context2.next = 5;
                    return this.modalCtrl.create({
                      component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_7__["ReactionListModalPage"],
                      componentProps: {
                        reactions: p.reactions
                      }
                    });

                  case 5:
                    modal = _context2.sent;
                    _context2.next = 8;
                    return modal.present();

                  case 8:
                    return _context2.abrupt("return", _context2.sent);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "submitReply",
        value: function submitReply() {
          var _this5 = this;

          this.message = this.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
          console.log('this.message', JSON.stringify(this.message));
          var review;
          var currentUserName;
          this.dataProvider.getCurrentUser().get().subscribe(function (account) {
            if (account) {
              currentUserName = account.data().username;
              review = {
                dateCreated: new Date(),
                addedByUser: {
                  addedByKey: _this5.dataProvider.getCurrentUserId(),
                  addedByUsername: account.data().username,
                  addedByImg: account.data().img
                },
                review: _this5.message
              };

              _this5.dataProvider.updatePostReviews(_this5.resourceId, review);

              _this5.message = '';
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

      return ResourcePage;
    }();

    ResourcePage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
      }];
    };

    ResourcePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resource',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resource.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resource/resource.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resource.page.scss */
      "./src/app/resource/resource.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resource.shell.scss */
      "./src/app/resource/resource.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]])], ResourcePage);
    /***/
  },

  /***/
  "./src/app/resource/resource.shell.scss":
  /*!**********************************************!*\
    !*** ./src/app/resource/resource.shell.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppResourceResourceShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n:host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-tags-vertical-gutter: calc(var(--page-margin) / 4);\n  --page-tags-horizontal-gutter: calc(var(--page-margin) / 2);\n  --page-users-pictures-gutter: calc(var(--page-margin) / 4);\n  --page-dish-score-height: 6px;\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #e07c7c;\n  --page-color: #ebbb00;\n  --page-color-rgb: 235,187,0;\n}\n.food-details-content {\n  --background: var(--page-background);\n}\n.food-details-content .details-scores .score-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.food-details-content .details-scores .score-item .score-icon {\n  color: var(--ion-color-medium-tint);\n  font-size: 24px;\n}\n.food-details-content .details-scores .score-item .score-value {\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n  margin-left: 4px;\n}\n.food-details-content .image-row {\n  --ion-grid-column-padding: 0px;\n}\n.food-details-content .image-row .icon-wrapper {\n  margin: 0px 15%;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.food-details-content .description-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n.food-details-content .description-row .details-name {\n  margin: 0px;\n  font-size: 18px;\n}\n.food-details-content .description-row .details-style {\n  margin-top: 5px;\n  margin-bottom: var(--page-margin);\n  font-size: 16px;\n  color: var(--ion-color-dark-tint);\n}\n.food-details-content .description-row .details-price-range {\n  font-size: 16px;\n  letter-spacing: 1px;\n  font-weight: 500;\n  text-align: right;\n}\n.food-details-content .description-row .details-price-range .price {\n  color: var(--page-color);\n}\n.food-details-content .description-row .details-price-range .no-price {\n  color: rgba(var(--ion-color-light-shade-rgb), 0.5);\n}\n.food-details-content .description-row .restaurant-scores .restaurant-score {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.food-details-content .description-row .restaurant-scores .restaurant-score:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.food-details-content .description-row .restaurant-scores .restaurant-score:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n.food-details-content .description-row .restaurant-scores .restaurant-score.reviews-count {\n  -webkit-box-flex: 0;\n          flex: 0 1 15%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.food-details-content .description-row .restaurant-scores .restaurant-rating {\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  min-width: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: var(--ion-color-medium-tint);\n}\n.food-details-content .description-row .restaurant-scores .restaurant-rating[ratingBase=\"1\"] {\n  background-color: var(--page-rating-1-color);\n}\n.food-details-content .description-row .restaurant-scores .restaurant-rating[ratingBase=\"2\"] {\n  background-color: var(--page-rating-2-color);\n}\n.food-details-content .description-row .restaurant-scores .restaurant-rating[ratingBase=\"3\"] {\n  background-color: var(--page-rating-3-color);\n}\n.food-details-content .description-row .restaurant-scores .restaurant-rating[ratingBase=\"4\"] {\n  background-color: var(--page-rating-4-color);\n}\n.food-details-content .description-row .restaurant-scores .restaurant-rating[ratingBase=\"5\"] {\n  background-color: var(--page-rating-5-color);\n}\n.food-details-content .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n.food-details-content .open-hours-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.food-details-content .open-hours-wrapper .schedules-list {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n.food-details-content .open-hours-wrapper .schedules-list .open-hour-item {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.food-details-content .open-hours-wrapper .schedules-list .open-hour-item + .open-hour-item {\n  margin-top: calc(var(--page-margin) / 2);\n}\n.food-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 75%;\n}\n.food-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-day {\n  display: block;\n  padding-right: var(--page-margin);\n  width: 40%;\n  font-size: 14px;\n}\n.food-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.food-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-separator {\n  margin: 0px var(--page-margin);\n  line-height: 1;\n}\n.food-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value {\n  -webkit-box-flex: 0;\n          flex: 0 1 25%;\n  font-weight: 500;\n}\n.food-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:first-child {\n  text-align: start;\n}\n.food-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:last-child {\n  text-align: end;\n}\n.food-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-closed {\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.food-details-content .location-wrapper {\n  padding: 0px 0px var(--page-margin);\n}\n.food-details-content .location-wrapper .location-header {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.food-details-content .location-wrapper .detail-title {\n  margin-bottom: 5px;\n}\n.food-details-content .location-wrapper .location-address {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.food-details-content .details-tags {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin) var(--page-margin);\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: calc(var(--page-tags-vertical-gutter) * 2 * -1);\n}\n.food-details-content .details-tags .tag-wrapper {\n  padding: calc(var(--page-tags-vertical-gutter) * 2) var(--page-tags-horizontal-gutter) 0px 0px;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.food-details-content .details-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n.food-details-content .details-tags .item-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-medium-tint);\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.food-details-content .details-divider {\n  margin: 0px var(--page-margin) calc(var(--page-margin) * 2);\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n.food-details-content .users-pictures-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.food-details-content .users-pictures-wrapper .pictures-row {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-users-pictures-gutter) * -1);\n}\n.food-details-content .users-pictures-wrapper .pictures-row .picture-wrapper {\n  padding: 0px var(--page-users-pictures-gutter);\n}\n.food-details-content .users-pictures-wrapper .pictures-row .picture-wrapper .has-more-pictures {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px var(--page-users-pictures-gutter);\n  background-color: rgba(var(--page-color-rgb), 0.7);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-decoration: none;\n  z-index: 2;\n}\n.food-details-content .users-pictures-wrapper .pictures-row .picture-wrapper .has-more-pictures .pictures-count {\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n.food-details-content .users-pictures-wrapper .pictures-row .picture-wrapper .has-more-pictures .pictures-count::before {\n  content: \"+\";\n  font-size: 26px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n.food-details-content .users-pictures-wrapper .upload-picture-btn {\n  margin: calc(var(--page-margin) / 2) 0px 0px;\n}\n.food-details-content .popular-dishes-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.food-details-content .popular-dishes-wrapper .popular-dish {\n  --ion-grid-column-padding: 0px;\n}\n.food-details-content .popular-dishes-wrapper .popular-dish:not(:last-child) {\n  padding-bottom: var(--page-margin);\n}\n.food-details-content .popular-dishes-wrapper .popular-dish .dish-name {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.food-details-content .popular-dishes-wrapper .popular-dish .dish-score {\n  --buffer-background: rgba(var(--page-color-rgb), .20);\n  --progress-background: rgba(var(--page-color-rgb), 1);\n  height: var(--page-dish-score-height);\n  border-radius: calc(var(--page-dish-score-height) / 2);\n}\n.food-details-content .popular-dishes-wrapper .popular-dish .dish-votes-count {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.food-details-content .popular-dishes-wrapper .popular-dish .dish-votes-count .dish-votes-icon {\n  color: var(--ion-color-medium-tint);\n}\n.food-details-content .popular-dishes-wrapper .popular-dish .dish-votes-count .dish-votes-value {\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n  margin-right: 4px;\n}\n.food-details-content .reviews-wrapper {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n.food-details-content .reviews-wrapper .reviews-list {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item:not(:last-child) {\n  padding-bottom: var(--page-margin);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item:not(:last-child)::after {\n  content: \"\";\n  display: block;\n  margin: 5px var(--page-margin);\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .user-image-wrapper {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .user-brief-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-right: calc(var(--page-margin) / 2);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .user-brief-wrapper .review-user-name {\n  font-size: 16px;\n  margin: 0px;\n  font-weight: 400;\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .user-brief-wrapper .user-scores .user-score .score-title {\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n  margin-left: 4px;\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .review-info-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  min-width: 20%;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .review-info-wrapper .review-date {\n  color: var(--ion-color-medium-tint);\n  font-size: 11px;\n  display: block;\n  width: 100%;\n  text-align: right;\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .review-info-wrapper .review-rating {\n  width: 36px;\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  background-color: var(--ion-color-medium-tint);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .review-info-wrapper .review-rating[ratingBase=\"1\"] {\n  background-color: var(--page-rating-1-color);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .review-info-wrapper .review-rating[ratingBase=\"2\"] {\n  background-color: var(--page-rating-2-color);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .review-info-wrapper .review-rating[ratingBase=\"3\"] {\n  background-color: var(--page-rating-3-color);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .review-info-wrapper .review-rating[ratingBase=\"4\"] {\n  background-color: var(--page-rating-4-color);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-user .review-info-wrapper .review-rating[ratingBase=\"5\"] {\n  background-color: var(--page-rating-5-color);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-message {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 18px;\n  margin: var(--page-margin) 0px;\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-scores {\n  padding: 0px var(--page-margin) var(--page-margin);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-scores .review-score {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-scores .review-score:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.food-details-content .reviews-wrapper .reviews-list .review-item .review-scores .review-score:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n  border-right: 1px solid var(--ion-color-light-shade);\n}\n.food-details-content .reviews-wrapper .details-divider {\n  margin: 5px 0px;\n}\n.food-details-content .reviews-wrapper .all-reviews-btn {\n  margin: 5px 0px;\n}\n.food-details-content .reviews-wrapper .write-reviews-btn {\n  margin: var(--page-margin) 0px 0px;\n}\n.food-details-content .recipes-wrapper {\n  padding: calc(var(--page-margin) * 3) 0px;\n}\n.food-details-content .recipes-wrapper .recipes-header {\n  padding: 0px var(--page-margin) 0px;\n}\n.food-details-content .recipes-wrapper .recipes-header .detail-title {\n  text-transform: capitalize;\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .chef-picture-wrapper {\n  width: 20%;\n  margin: 0px auto;\n  margin-top: -10%;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .details-divider {\n  margin-bottom: 0px;\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-title {\n  text-align: center;\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-weight: 400;\n  letter-spacing: 3px;\n  font-size: 18px;\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-title::before, .food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-title::after {\n  content: \"·\";\n  color: var(--ion-color-dark-tint);\n  margin: 0px 2px;\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-call-to-action {\n  text-align: center;\n  margin: var(--page-margin) calc(var(--page-margin) * 2);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-call-to-action .recipe-author {\n  display: block;\n  font-size: 16px;\n  min-width: 30%;\n  color: var(--ion-color-dark-tint);\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-call-to-action .recipe-name {\n  text-transform: uppercase;\n  font-weight: 300;\n  letter-spacing: 1px;\n  margin: calc(var(--page-margin) / 2) 0px;\n  min-width: 90%;\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-call-to-action .recipe-chef {\n  display: block;\n  font-size: 14px;\n  min-width: 60%;\n  color: var(--ion-color-dark-tint);\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-attributes {\n  padding: 0px var(--page-margin);\n  margin-top: var(--page-margin);\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-attributes .attribute-score {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-attributes .attribute-score:not(:first-child) {\n  padding-left: calc(var(--page-margin) / 2);\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-attributes .attribute-score:not(:last-child) {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.food-details-content .recipes-wrapper .recipes-list .recipe-item .recipe-attributes .attribute-score .score-value {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2UvcmVzb3VyY2Uuc2hlbGwuc2NzcyIsInNyYy9hcHAvcmVzb3VyY2UvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxccmVzb3VyY2VcXHJlc291cmNlLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0kscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLHlEQUFBO0VBQ0EsMkRBQUE7RUFDQSwwREFBQTtFQUNBLDZCQUFBO0VBRUEsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUVBLHFCQUFBO0VBQ0EsMkJBQUE7QURISjtBQ09FO0VBQ0Usb0NBQUE7QURKSjtBQ09NO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRExSO0FDT1E7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QURMVjtBQ1FRO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUROVjtBQ1dJO0VBQ0UsOEJBQUE7QURUTjtBQ1dNO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRFRSO0FDYUk7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsNENBQUE7QURaTjtBQ2NNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QURaUjtBQ2VNO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FEYlI7QUNnQk07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEZFI7QUNnQlE7RUFDRSx3QkFBQTtBRGRWO0FDaUJRO0VBQ0Usa0RBQUE7QURmVjtBQ29CUTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QURsQlY7QUNvQlU7RUFDRSwwQ0FBQTtBRGxCWjtBQ3FCVTtFQUNFLDJDQUFBO0VBQ0Esb0RBQUE7QURuQlo7QUNzQlU7RUFDRSxtQkFBQTtVQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FEcEJaO0FDd0JRO0VBQ1UsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGtFQUFBO0VBQ0YsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDTixlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFFQSw4Q0FBQTtBRHZCVjtBQ3lCa0I7RUFDSSw0Q0FBQTtBRHZCdEI7QUN5QmtCO0VBQ0ksNENBQUE7QUR2QnRCO0FDeUJrQjtFQUNJLDRDQUFBO0FEdkJ0QjtBQ3lCa0I7RUFDSSw0Q0FBQTtBRHZCdEI7QUN5QmtCO0VBQ0ksNENBQUE7QUR2QnRCO0FDNkJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUQzQk47QUM4Qkk7RUFDRSxrREFBQTtBRDVCTjtBQzhCTTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUQ1QlI7QUM4QlE7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7QUQ1QlY7QUM4QlU7RUFDRSx3Q0FBQTtBRDVCWjtBQytCVTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsVUFBQTtBRDdCWjtBQytCWTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEN0JkO0FDZ0NZO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUQ5QmQ7QUNnQ2M7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUQ5QmhCO0FDaUNjO0VBQ0UsbUJBQUE7VUFBQSxhQUFBO0VBQ0EsZ0JBQUE7QUQvQmhCO0FDaUNnQjtFQUNFLGlCQUFBO0FEL0JsQjtBQ2lDZ0I7RUFDRSxlQUFBO0FEL0JsQjtBQ21DYztFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBRGpDaEI7QUN5Q0k7RUFDRSxtQ0FBQTtBRHZDTjtBQ3lDTTtFQUNFLG1DQUFBO0VBQ0EsMkNBQUE7QUR2Q1I7QUMwQ007RUFDRSxrQkFBQTtBRHhDUjtBQzJDTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUR6Q1I7QUM2Q0k7RUFDRSw4QkFBQTtFQUVBLGtEQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDJEQUFBO0FENUNOO0FDOENNO0VBQ0UsOEZBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUQ1Q1I7QUM4Q1E7RUFDRSxrQkFBQTtBRDVDVjtBQ2dETTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsNEVBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUQ5Q1I7QUNrREk7RUFDRSwyREFBQTtFQUNBLGlFQUFBO0FEaEROO0FDbURJO0VBQ0Usa0RBQUE7QURqRE47QUNtRE07RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsd0RBQUE7QURsRFI7QUNvRFE7RUFDRSw4Q0FBQTtBRGxEVjtBQ29EVTtFQUNVLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNSLDZDQUFBO0VBQ1Esa0RBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNSLHFCQUFBO0VBQ0EsVUFBQTtBRGxEWjtBQ29Eb0I7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBRGxEeEI7QUNvRHdCO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FEbEQ1QjtBQ3lETTtFQUNFLDRDQUFBO0FEdkRSO0FDMkRJO0VBQ0Usa0RBQUE7QUR6RE47QUMyRE07RUFDRSw4QkFBQTtBRHpEUjtBQzJEUTtFQUNFLGtDQUFBO0FEekRWO0FDNERRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FEMURWO0FDNkRRO0VBQ0UscURBQUE7RUFDQSxxREFBQTtFQUVBLHFDQUFBO0VBQ0Esc0RBQUE7QUQ1RFY7QUMrRFE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBRDdEVjtBQytEVTtFQUNFLG1DQUFBO0FEN0RaO0FDZ0VVO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUQ5RFo7QUNvRUk7RUFDRSxrREFBQTtBRGxFTjtBQ29FTTtFQUNFLDJDQUFBO0FEbEVSO0FDcUVVO0VBQ0Usa0NBQUE7QURuRVo7QUNxRVk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUVBQUE7QURuRWQ7QUN1RVU7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0FEckVaO0FDdUVZO0VBQ0UsMkNBQUE7QURyRWQ7QUN3RVk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBRUEsMkNBQUE7QUR2RWQ7QUN5RWM7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEdkVoQjtBQzRFa0I7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDFFcEI7QUNnRlk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUQ5RWQ7QUNnRmM7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEOUVoQjtBQ2lGYztFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNRLHVDQUFBO0VBQ0Esa0VBQUE7RUFDRixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFTiw4Q0FBQTtBRGhGaEI7QUNrRndCO0VBQ0ksNENBQUE7QURoRjVCO0FDa0Z3QjtFQUNJLDRDQUFBO0FEaEY1QjtBQ2tGd0I7RUFDSSw0Q0FBQTtBRGhGNUI7QUNrRndCO0VBQ0ksNENBQUE7QURoRjVCO0FDa0Z3QjtFQUNJLDRDQUFBO0FEaEY1QjtBQ3NGVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QURwRlo7QUN1RlU7RUFDRSxrREFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QURyRlo7QUN1Rlk7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FEckZkO0FDdUZjO0VBQ0UsMENBQUE7QURyRmhCO0FDd0ZjO0VBQ0UsMkNBQUE7RUFDQSxvREFBQTtBRHRGaEI7QUM2Rk07RUFDRSxlQUFBO0FEM0ZSO0FDOEZNO0VBQ0UsZUFBQTtBRDVGUjtBQytGTTtFQUNFLGtDQUFBO0FEN0ZSO0FDaUdJO0VBQ0UseUNBQUE7QUQvRk47QUNpR007RUFDRSxtQ0FBQTtBRC9GUjtBQ2lHUTtFQUNFLDBCQUFBO0FEL0ZWO0FDcUdVO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBRG5HWjtBQ3NHVTtFQUNFLGtCQUFBO0FEcEdaO0FDdUdVO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEckdaO0FDdUdZO0VBRUUsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBRHRHZDtBQzBHVTtFQUNFLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEeEdaO0FDMEdZO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUR4R2Q7QUMyR1k7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7QUR6R2Q7QUM0R1k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBRDFHZDtBQzhHVTtFQUNFLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FENUdaO0FDOEdZO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBRDVHZDtBQzhHYztFQUNFLDBDQUFBO0FENUdoQjtBQytHYztFQUNFLDJDQUFBO0FEN0doQjtBQ2dIYztFQUNFLDBCQUFBO0FEOUdoQiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlL3Jlc291cmNlLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS11c2Vycy1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tcGFnZS1kaXNoLXNjb3JlLWhlaWdodDogNnB4O1xuICAtLXBhZ2UtcmF0aW5nLTUtY29sb3I6ICM3Y2UxOTg7XG4gIC0tcGFnZS1yYXRpbmctNC1jb2xvcjogI2E4ZTA3YztcbiAgLS1wYWdlLXJhdGluZy0zLWNvbG9yOiAjY2VlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTItY29sb3I6ICNlMGM3N2M7XG4gIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2UwN2M3YztcbiAgLS1wYWdlLWNvbG9yOiAjZWJiYjAwO1xuICAtLXBhZ2UtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbi5mb29kLWRldGFpbHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAuZGV0YWlscy1zY29yZXMgLnNjb3JlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXNjb3JlcyAuc2NvcmUtaXRlbSAuc2NvcmUtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtc2NvcmVzIC5zY29yZS1pdGVtIC5zY29yZS12YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAuaW1hZ2Utcm93IC5pY29uLXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtc3R5bGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1wcmljZS1yYW5nZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1wcmljZS1yYW5nZSAucHJpY2Uge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1wcmljZS1yYW5nZSAubm8tcHJpY2Uge1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgMC41KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5yZXN0YXVyYW50LXNjb3JlcyAucmVzdGF1cmFudC1zY29yZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLnJlc3RhdXJhbnQtc2NvcmVzIC5yZXN0YXVyYW50LXNjb3JlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLnJlc3RhdXJhbnQtc2NvcmVzIC5yZXN0YXVyYW50LXNjb3JlOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLnJlc3RhdXJhbnQtc2NvcmVzIC5yZXN0YXVyYW50LXNjb3JlLnJldmlld3MtY291bnQge1xuICBmbGV4OiAwIDEgMTUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLnJlc3RhdXJhbnQtc2NvcmVzIC5yZXN0YXVyYW50LXJhdGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAucmVzdGF1cmFudC1zY29yZXMgLnJlc3RhdXJhbnQtcmF0aW5nW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAucmVzdGF1cmFudC1zY29yZXMgLnJlc3RhdXJhbnQtcmF0aW5nW3JhdGluZ0Jhc2U9XCIyXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAucmVzdGF1cmFudC1zY29yZXMgLnJlc3RhdXJhbnQtcmF0aW5nW3JhdGluZ0Jhc2U9XCIzXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMy1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAucmVzdGF1cmFudC1zY29yZXMgLnJlc3RhdXJhbnQtcmF0aW5nW3JhdGluZ0Jhc2U9XCI0XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNC1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAucmVzdGF1cmFudC1zY29yZXMgLnJlc3RhdXJhbnQtcmF0aW5nW3JhdGluZ0Jhc2U9XCI1XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNS1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gKyAub3Blbi1ob3VyLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA3NSU7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtZGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgd2lkdGg6IDQwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIC5zY2hlZHVsZS1ob3VycyAuc2NoZWR1bGUtc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIC5zY2hlZHVsZS1ob3VycyAuc2NoZWR1bGUtdmFsdWUge1xuICBmbGV4OiAwIDEgMjUlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS12YWx1ZTpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS12YWx1ZTpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS1jbG9zZWQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIgLmRldGFpbC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24tYWRkcmVzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXRhZ3Mge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSAqIDIgKiAtMSk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtdGFncyAudGFnLXdyYXBwZXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogMikgdmFyKC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyKSAwcHggMHB4O1xuICBmbGV4LWdyb3c6IDA7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtdGFncyAudGFnLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAuZGV0YWlscy10YWdzIC5pdGVtLXRhZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgMC40KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAudXNlcnMtcGljdHVyZXMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC51c2Vycy1waWN0dXJlcy13cmFwcGVyIC5waWN0dXJlcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS11c2Vycy1waWN0dXJlcy1ndXR0ZXIpICogLTEpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC51c2Vycy1waWN0dXJlcy13cmFwcGVyIC5waWN0dXJlcy1yb3cgLnBpY3R1cmUtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXVzZXJzLXBpY3R1cmVzLWd1dHRlcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnVzZXJzLXBpY3R1cmVzLXdyYXBwZXIgLnBpY3R1cmVzLXJvdyAucGljdHVyZS13cmFwcGVyIC5oYXMtbW9yZS1waWN0dXJlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtdXNlcnMtcGljdHVyZXMtZ3V0dGVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDI7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnVzZXJzLXBpY3R1cmVzLXdyYXBwZXIgLnBpY3R1cmVzLXJvdyAucGljdHVyZS13cmFwcGVyIC5oYXMtbW9yZS1waWN0dXJlcyAucGljdHVyZXMtY291bnQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC51c2Vycy1waWN0dXJlcy13cmFwcGVyIC5waWN0dXJlcy1yb3cgLnBpY3R1cmUtd3JhcHBlciAuaGFzLW1vcmUtcGljdHVyZXMgLnBpY3R1cmVzLWNvdW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIitcIjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAudXNlcnMtcGljdHVyZXMtd3JhcHBlciAudXBsb2FkLXBpY3R1cmUtYnRuIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnBvcHVsYXItZGlzaGVzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucG9wdWxhci1kaXNoZXMtd3JhcHBlciAucG9wdWxhci1kaXNoIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5wb3B1bGFyLWRpc2hlcy13cmFwcGVyIC5wb3B1bGFyLWRpc2g6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnBvcHVsYXItZGlzaGVzLXdyYXBwZXIgLnBvcHVsYXItZGlzaCAuZGlzaC1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucG9wdWxhci1kaXNoZXMtd3JhcHBlciAucG9wdWxhci1kaXNoIC5kaXNoLXNjb3JlIHtcbiAgLS1idWZmZXItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDEpO1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtZGlzaC1zY29yZS1oZWlnaHQpO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtZGlzaC1zY29yZS1oZWlnaHQpIC8gMik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnBvcHVsYXItZGlzaGVzLXdyYXBwZXIgLnBvcHVsYXItZGlzaCAuZGlzaC12b3Rlcy1jb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucG9wdWxhci1kaXNoZXMtd3JhcHBlciAucG9wdWxhci1kaXNoIC5kaXNoLXZvdGVzLWNvdW50IC5kaXNoLXZvdGVzLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucG9wdWxhci1kaXNoZXMtd3JhcHBlciAucG9wdWxhci1kaXNoIC5kaXNoLXZvdGVzLWNvdW50IC5kaXNoLXZvdGVzLXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIDAuNCk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXVzZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXVzZXIgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXVzZXIgLnVzZXItYnJpZWYtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctdXNlciAudXNlci1icmllZi13cmFwcGVyIC5yZXZpZXctdXNlci1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctdXNlciAudXNlci1icmllZi13cmFwcGVyIC51c2VyLXNjb3JlcyAudXNlci1zY29yZSAuc2NvcmUtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy11c2VyIC5yZXZpZXctaW5mby13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1pbi13aWR0aDogMjAlO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBmbGV4LWdyb3c6IDA7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXVzZXIgLnJldmlldy1pbmZvLXdyYXBwZXIgLnJldmlldy1kYXRlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctdXNlciAucmV2aWV3LWluZm8td3JhcHBlciAucmV2aWV3LXJhdGluZyB7XG4gIHdpZHRoOiAzNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctdXNlciAucmV2aWV3LWluZm8td3JhcHBlciAucmV2aWV3LXJhdGluZ1tyYXRpbmdCYXNlPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy11c2VyIC5yZXZpZXctaW5mby13cmFwcGVyIC5yZXZpZXctcmF0aW5nW3JhdGluZ0Jhc2U9XCIyXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXVzZXIgLnJldmlldy1pbmZvLXdyYXBwZXIgLnJldmlldy1yYXRpbmdbcmF0aW5nQmFzZT1cIjNcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0zLWNvbG9yKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5yZXZpZXctdXNlciAucmV2aWV3LWluZm8td3JhcHBlciAucmV2aWV3LXJhdGluZ1tyYXRpbmdCYXNlPVwiNFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTQtY29sb3IpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy11c2VyIC5yZXZpZXctaW5mby13cmFwcGVyIC5yZXZpZXctcmF0aW5nW3JhdGluZ0Jhc2U9XCI1XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNS1jb2xvcik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXNjb3JlcyB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXNjb3JlcyAucmV2aWV3LXNjb3JlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3LXNjb3JlcyAucmV2aWV3LXNjb3JlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy1zY29yZXMgLnJldmlldy1zY29yZTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmV2aWV3cy13cmFwcGVyIC5kZXRhaWxzLWRpdmlkZXIge1xuICBtYXJnaW46IDVweCAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJldmlld3Mtd3JhcHBlciAuYWxsLXJldmlld3MtYnRuIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZXZpZXdzLXdyYXBwZXIgLndyaXRlLXJldmlld3MtYnRuIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAwcHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWhlYWRlciAuZGV0YWlsLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAuY2hlZi1waWN0dXJlLXdyYXBwZXIge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMTAlO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZWNpcGVzLXdyYXBwZXIgLnJlY2lwZXMtbGlzdCAucmVjaXBlLWl0ZW0gLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWxpc3QgLnJlY2lwZS1pdGVtIC5yZWNpcGUtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAucmVjaXBlLXRpdGxlOjpiZWZvcmUsIC5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWxpc3QgLnJlY2lwZS1pdGVtIC5yZWNpcGUtdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCLCt1wiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4IDJweDtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWxpc3QgLnJlY2lwZS1pdGVtIC5yZWNpcGUtY2FsbC10by1hY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAucmVjaXBlLWNhbGwtdG8tYWN0aW9uIC5yZWNpcGUtYXV0aG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWluLXdpZHRoOiAzMCU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWxpc3QgLnJlY2lwZS1pdGVtIC5yZWNpcGUtY2FsbC10by1hY3Rpb24gLnJlY2lwZS1uYW1lIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgbWluLXdpZHRoOiA5MCU7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAucmVjaXBlLWNhbGwtdG8tYWN0aW9uIC5yZWNpcGUtY2hlZiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1pbi13aWR0aDogNjAlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAucmVjaXBlLWF0dHJpYnV0ZXMge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZWNpcGVzLXdyYXBwZXIgLnJlY2lwZXMtbGlzdCAucmVjaXBlLWl0ZW0gLnJlY2lwZS1hdHRyaWJ1dGVzIC5hdHRyaWJ1dGUtc2NvcmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb29kLWRldGFpbHMtY29udGVudCAucmVjaXBlcy13cmFwcGVyIC5yZWNpcGVzLWxpc3QgLnJlY2lwZS1pdGVtIC5yZWNpcGUtYXR0cmlidXRlcyAuYXR0cmlidXRlLXNjb3JlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZvb2QtZGV0YWlscy1jb250ZW50IC5yZWNpcGVzLXdyYXBwZXIgLnJlY2lwZXMtbGlzdCAucmVjaXBlLWl0ZW0gLnJlY2lwZS1hdHRyaWJ1dGVzIC5hdHRyaWJ1dGUtc2NvcmU6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9vZC1kZXRhaWxzLWNvbnRlbnQgLnJlY2lwZXMtd3JhcHBlciAucmVjaXBlcy1saXN0IC5yZWNpcGUtaXRlbSAucmVjaXBlLWF0dHJpYnV0ZXMgLmF0dHJpYnV0ZS1zY29yZSAuc2NvcmUtdmFsdWUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iLCIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuICBcclxuICAgIC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuICAgIC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgLS1wYWdlLXVzZXJzLXBpY3R1cmVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuICAgIC0tcGFnZS1kaXNoLXNjb3JlLWhlaWdodDogNnB4O1xyXG4gIFxyXG4gICAgLS1wYWdlLXJhdGluZy01LWNvbG9yOiAjN2NlMTk4O1xyXG4gICAgLS1wYWdlLXJhdGluZy00LWNvbG9yOiAjYThlMDdjO1xyXG4gICAgLS1wYWdlLXJhdGluZy0zLWNvbG9yOiAjY2VlMDdjO1xyXG4gICAgLS1wYWdlLXJhdGluZy0yLWNvbG9yOiAjZTBjNzdjO1xyXG4gICAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjZTA3YzdjO1xyXG4gIFxyXG4gICAgLS1wYWdlLWNvbG9yOiAjZWJiYjAwO1xyXG4gICAgLS1wYWdlLWNvbG9yLXJnYjogMjM1LDE4NywwO1xyXG4gIH1cclxuICBcclxuICAvLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuICAuZm9vZC1kZXRhaWxzLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIFxyXG4gICAgLmRldGFpbHMtc2NvcmVzIHtcclxuICAgICAgLnNjb3JlLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgICAgICAuc2NvcmUtaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnNjb3JlLXZhbHVlIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5pbWFnZS1yb3cge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcbiAgXHJcbiAgICAgIC5pY29uLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDE1JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZGVzY3JpcHRpb24tcm93IHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG4gIFxyXG4gICAgICAuZGV0YWlscy1uYW1lIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmRldGFpbHMtc3R5bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZGV0YWlscy1wcmljZS1yYW5nZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBcclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAubm8tcHJpY2Uge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIC41MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5yZXN0YXVyYW50LXNjb3JlcyB7XHJcbiAgICAgICAgLnJlc3RhdXJhbnQtc2NvcmUge1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICYucmV2aWV3cy1jb3VudCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMSAxNSU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5yZXN0YXVyYW50LXJhdGluZyB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgLy8gRGVmYXVsdCBjb2xvclxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICBcclxuICAgICAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0xLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIyXCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjNcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMy1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiNFwiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy00LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCI1XCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTUtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZGV0YWlsLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAub3Blbi1ob3Vycy13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgXHJcbiAgICAgIC5zY2hlZHVsZXMtbGlzdCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgXHJcbiAgICAgICAgLm9wZW4taG91ci1pdGVtIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gIFxyXG4gICAgICAgICAgJiArIC5vcGVuLWhvdXItaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAuc2NoZWR1bGUtb3V0ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgXHJcbiAgICAgICAgICAgIC5zY2hlZHVsZS1kYXkge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAuc2NoZWR1bGUtaG91cnMge1xyXG4gICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICAgICAgICAgLnNjaGVkdWxlLXNlcGFyYXRvciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgLnNjaGVkdWxlLXZhbHVlIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMSAyNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAuc2NoZWR1bGUtY2xvc2VkIHtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubG9jYXRpb24td3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIFxyXG4gICAgICAubG9jYXRpb24taGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5kZXRhaWwtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubG9jYXRpb24tYWRkcmVzcyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZGV0YWlscy10YWdzIHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgKiAyICogLTEpO1xyXG4gIFxyXG4gICAgICAudGFnLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgKiAyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpIDBweCAwcHg7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0tdGFnIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRldGFpbHMtZGl2aWRlciB7XHJcbiAgICAgIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnVzZXJzLXBpY3R1cmVzLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICBcclxuICAgICAgLnBpY3R1cmVzLXJvdyB7XHJcbiAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxuICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcbiAgXHJcbiAgICAgICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLXVzZXJzLXBpY3R1cmVzLWd1dHRlcikgKiAtMSk7XHJcbiAgXHJcbiAgICAgICAgLnBpY3R1cmUtd3JhcHBlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS11c2Vycy1waWN0dXJlcy1ndXR0ZXIpO1xyXG4gIFxyXG4gICAgICAgICAgLmhhcy1tb3JlLXBpY3R1cmVzIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtdXNlcnMtcGljdHVyZXMtZ3V0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjcwKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICBcclxuICAgICAgICAgICAgICAgICAgICAucGljdHVyZXMtY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJysnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAudXBsb2FkLXBpY3R1cmUtYnRuIHtcclxuICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnBvcHVsYXItZGlzaGVzLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICBcclxuICAgICAgLnBvcHVsYXItZGlzaCB7XHJcbiAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZGlzaC1uYW1lIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5kaXNoLXNjb3JlIHtcclxuICAgICAgICAgIC0tYnVmZmVyLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMjApO1xyXG4gICAgICAgICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMSk7XHJcbiAgXHJcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtZGlzaC1zY29yZS1oZWlnaHQpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1wYWdlLWRpc2gtc2NvcmUtaGVpZ2h0KSAvIDIpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZGlzaC12b3Rlcy1jb3VudCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBcclxuICAgICAgICAgIC5kaXNoLXZvdGVzLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5kaXNoLXZvdGVzLXZhbHVlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucmV2aWV3cy13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgXHJcbiAgICAgIC5yZXZpZXdzLWxpc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgXHJcbiAgICAgICAgLnJldmlldy1pdGVtIHtcclxuICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgXHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIC40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLnJldmlldy11c2VyIHtcclxuICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxuICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICAgICAgICAudXNlci1pbWFnZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC51c2VyLWJyaWVmLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgXHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICBcclxuICAgICAgICAgICAgICAucmV2aWV3LXVzZXItbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgIC51c2VyLXNjb3JlcyB7XHJcbiAgICAgICAgICAgICAgICAudXNlci1zY29yZSB7XHJcbiAgICAgICAgICAgICAgICAgIC5zY29yZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLnJldmlldy1pbmZvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gIFxyXG4gICAgICAgICAgICAgIC5yZXZpZXctZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgLnJldmlldy1yYXRpbmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IGNvbG9yXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjJcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiM1wiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0zLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCI0XCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjVcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5yZXZpZXctbWVzc2FnZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5yZXZpZXctc2NvcmVzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBcclxuICAgICAgICAgICAgLnJldmlldy1zY29yZSB7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmRldGFpbHMtZGl2aWRlciB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5hbGwtcmV2aWV3cy1idG4ge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAud3JpdGUtcmV2aWV3cy1idG4ge1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5yZWNpcGVzLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIDBweDtcclxuICBcclxuICAgICAgLnJlY2lwZXMtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcclxuICBcclxuICAgICAgICAuZGV0YWlsLXRpdGxlIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucmVjaXBlcy1saXN0IHtcclxuICAgICAgICAucmVjaXBlLWl0ZW0ge1xyXG4gICAgICAgICAgLmNoZWYtcGljdHVyZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5kZXRhaWxzLWRpdmlkZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAucmVjaXBlLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIFxyXG4gICAgICAgICAgICAmOjpiZWZvcmUsXHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnwrcnO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5yZWNpcGUtY2FsbC10by1hY3Rpb24ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICAgICAgIC5yZWNpcGUtYXV0aG9yIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC5yZWNpcGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAucmVjaXBlLWNoZWYge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5yZWNpcGUtYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICAgICAgIC5hdHRyaWJ1dGUtc2NvcmUge1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gICAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgLnNjb3JlLXZhbHVlIHtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */";
    /***/
  }
}]);
//# sourceMappingURL=resource-resource-module-es5.js.map