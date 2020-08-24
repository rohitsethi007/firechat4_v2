function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeedFeedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"filters-toolbar\">\r\n    <ion-row class=\"searchbar-row\" align-items-center>\r\n    <ion-col>\r\n        <ion-searchbar class=\"items-searchbar\" animated  placeholder=\"Search ...\"></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col class=\"call-to-action-col\">\r\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" routerLink=\"/messages\">\r\n          <ion-icon slot=\"icon-only\" name=\"chatbubbles-outline\" ></ion-icon>\r\n          <ion-badge *ngIf=\"getUnreadMessagesCount() != null\">{{getUnreadMessagesCount()}}</ion-badge>\r\n        </ion-button>\r\n      </ion-col>\r\n      <!-- <ion-col class=\"call-to-action-col\">\r\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" routerLink=\"/profile\">\r\n          <ion-icon slot=\"icon-only\" name=\"person-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>   -->\r\n      <ion-col class=\"call-to-action-col\">\r\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showGroupOptions()\">\r\n          <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n     <!-- Show Posts -->\r\n     <div *ngIf=\"posts && posts.length > 0\" >\r\n     <div class=\"listing-item\" *ngFor=\"let item of posts\" >\r\n      <ion-card>\r\n        <ion-card-header>\r\n           <ion-card-subtitle class=\"addedBy\">\r\n            <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n             <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n              <br/>\r\n             <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\r\n            <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\r\n          </ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\r\n          <div (click)=\"viewPost(item)\">\r\n          <b>{{item.title}}.</b> {{item.data.message}} <br/>\r\n        </div>\r\n          <div class=\"reviews-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n              <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\r\n              <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\r\n            </div>\r\n          </ion-row>\r\n          </div>\r\n          <div class=\"reactions\">\r\n          <ion-row >\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\r\n               <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n               <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=2></ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"showReactionsList(item)\">\r\n              <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n            </ion-button>\r\n          </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button>\r\n              <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n            </ion-button>\r\n          </ion-buttons> \r\n            </ion-col>\r\n          </ion-row>\r\n          </div>\r\n        </ion-card-content>\r\n\r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\r\n          <div (click)=\"viewEvent(item)\">\r\n          <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\r\n            {{item.data.address}}<br/><br/>\r\n            {{item.data.link}}\r\n          </div>\r\n          <div class=\"reviews-wrapper\">\r\n            <ion-row>\r\n              <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n                <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\r\n                <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\r\n              </div>\r\n            </ion-row>\r\n          </div>\r\n          <div class=\"reactions\">\r\n            <ion-row>\r\n              <ion-col size=3>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n                  <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                  <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=3>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionPost(item, 'Checkin')\">\r\n                  <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                  <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=2></ion-col>\r\n              <ion-col size=2>\r\n                      <ion-buttons>\r\n                        <ion-button (click)=\"showEventReactionsList(item)\">\r\n                      <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                    </ion-button>\r\n                  </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=2>\r\n                      <ion-buttons>\r\n                        <ion-button>\r\n                          <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                        </ion-button>\r\n                  </ion-buttons> \r\n              </ion-col>\r\n             </ion-row>\r\n         </div>\r\n        </ion-card-content>\r\n\r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" (click)=\"viewPoll(item)\">\r\n          <b>{{item.title}}.</b><br/>\r\n          <ion-row class=\"info-row\" *ngFor=\"let pollOption of item.data.pollOptions\">\r\n            <ion-col class=\"poll-option-col\">\r\n            <!--<button ion-button color=\"primary\" clear small icon-start> -->\r\n               <div><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checked.svg\" ></ion-icon> <span class=\"text\">{{pollOption.name}}</span></div>\r\n              \r\n            <!--</button>-->\r\n            </ion-col>\r\n          </ion-row>\r\n          <div class=\"reviews-wrapper\">\r\n            <ion-row>\r\n              <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n                <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\r\n                <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\r\n              </div>\r\n            </ion-row>\r\n            </div>\r\n\r\n                <ion-row class=\"info-row\" >\r\n           <ion-col size=\"8\">\r\n                     <span class=\"text\">Poll ends {{item.data.dateEnding.toDate() | date:'fullDate'}}</span> \r\n                  </ion-col>\r\n            <ion-col size=\"2\">\r\n            </ion-col>\r\n                  <ion-col size=\"2\">\r\n                    <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\r\n                  </ion-col>\r\n                </ion-row>\r\n        </ion-card-content>\r\n        \r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\" (click)=\"viewResource(item)\">\r\n          <b>{{item.title}}.</b><br/>\r\n          <div *ngIf=\"item?.data.type == 'contact'\">\r\n            {{item.data.name}}<br/>\r\n            {{item.data.address}}<br/><br/>\r\n            {{item.data.email}}<br/>\r\n            {{item.data.phones}}<br/>\r\n          </div>\r\n          <div *ngIf=\"item?.data.type == 'upload'\">\r\n            <div *ngIf=\"item.data.uploadtype == 'location'\" [innerHtml]=\"item.data.url\"></div>\r\n            <div *ngIf=\"item.data.uploadtype == 'contact'\">\r\n            {{item.data.name}}<br/>\r\n            {{item.data.address}}<br/>\r\n            {{item.data.phones}}<br/>\r\n            {{item.data.email}}<br/>\r\n            </div>\r\n            <div *ngIf=\"item.data.uploadtype == 'image'\">\r\n            <img src=\"{{item.data.resolvedurl}}\" />\r\n            </div>\r\n            <div *ngIf=\"item.data.uploadtype == 'video'\">\r\n              <video controls width=\"100%\" src=\"{{item.data.resolvedurl}}\" ></video>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"item?.data.type == 'weblink'\">\r\n          {{item.data.metatitle}}<br/>\r\n          <img [src]=\"item.data.metaicon\"/> \r\n          {{item.data.metadescription}}<br/><br/>\r\n          <a href=\"{{item.data.metasite}}\">{{item.data.metasite}}</a>\r\n          </div>\r\n          <div>\r\n             <ion-row>\r\n               <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                   <ion-button (click)=\"submitReactionResource(item, 'Bookmark')\">\r\n                  <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                  <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                   </ion-button>\r\n                   </ion-buttons> \r\n                 </ion-col>\r\n               <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                   <ion-button (click)=\"submitReactionResource(item, 'Thanks')\">\r\n                  <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                  <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                   </ion-button>\r\n                   </ion-buttons> \r\n                 </ion-col>\r\n              <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                   <ion-button (click)=\"showResourceReactionsList(item)\">\r\n                   <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                 </ion-button>\r\n                 </ion-buttons> \r\n                 </ion-col>\r\n                 <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                   <ion-button>\r\n                    <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                  </ion-button>\r\n                 </ion-buttons> \r\n                 </ion-col>\r\n            </ion-row>\r\n          \r\n          </div>\r\n        </ion-card-content>\r\n        <!-- Dont touch the tags below this line-->\r\n      </ion-card>\r\n\r\n     </div>\r\n     </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/feed/feed.module.ts":
  /*!*************************************!*\
    !*** ./src/app/feed/feed.module.ts ***!
    \*************************************/

  /*! exports provided: FeedPageModule */

  /***/
  function srcAppFeedFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPageModule", function () {
      return FeedPageModule;
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


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _feed_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./feed.page */
    "./src/app/feed/feed.page.ts");

    var routes = [{
      path: '',
      component: _feed_page__WEBPACK_IMPORTED_MODULE_8__["FeedPage"]
    }];

    var FeedPageModule = function FeedPageModule() {
      _classCallCheck(this, FeedPageModule);
    };

    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_8__["FeedPage"]]
    })], FeedPageModule);
    /***/
  },

  /***/
  "./src/app/feed/feed.page.scss":
  /*!*************************************!*\
    !*** ./src/app/feed/feed.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeedFeedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-rating-2-color: #aa6c39;\n  --page-rating-1-color: #bbb2b2;\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n  --border-style: 10px;\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row ion-searchbar.items-searchbar {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.addedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n}\n\n.addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n}\n\n.addedByImg {\n  width: 50px;\n  float: left;\n  vertical-align: middle;\n}\n\n.newIcon {\n  margin-left: 10px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .reactions {\n  margin-left: -10px;\n}\n\n.message .reviews-wrapper {\n  padding-top: calc(var(--page-margin) / 1);\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.message .reviews-wrapper .tags {\n  padding-right: 5px;\n}\n\n.message .reviews-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.message .reviews-wrapper .tags .item-rating[ratingBase=\"0\"] {\n  color: var(--page-rating-1-color);\n}\n\n.message .reviews-wrapper .tags .item-rating[ratingBase=\"1\"] {\n  color: var(--page-rating-2-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxmZWVkXFxmZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FEQ0k7RUFDRSw4QkFBQTtBQ0NOOztBRENNO0VBQ0UsWUFBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBQ0RSOztBRElNO0VBRUUsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNKUjs7QURNUTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUNOVjs7QURjQTtFQUNFLHdDQUFBO0FDWEY7O0FEY0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDWEY7O0FEY0M7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ1hIOztBRGFDO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDVkg7O0FEWUM7RUFDQyxpQkFBQTtFQUNDLGtCQUFBO0FDVEg7O0FEV0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDUko7O0FEVUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1BKOztBRFNFO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1BKOztBRFNJO0VBQ0Usa0JBQUE7QUNQTjs7QURTSTtFQUNFLHlDQUFBO0VBQ0EsNENBQUE7QUNQTjs7QURTTTtFQUNFLGtCQUFBO0FDUFI7O0FEU007RUFFRSxtREFBQTtFQU1RLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2JoQjs7QURjZ0I7RUFDRSxpQ0FBQTtBQ1psQjs7QURjZ0I7RUFDRSxpQ0FBQTtBQ1psQiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuICAgIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2FhNmMzOTtcclxuICAgIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2JiYjJiMjtcclxuICB9XHJcblxyXG4uZmlsdGVycy10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IDEwcHg7XHJcbiAgXHJcbiAgICAuc2VhcmNoYmFyLXJvdyB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuICBcclxuICAgICAgaW9uLXNlYXJjaGJhci5pdGVtcy1zZWFyY2hiYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLy8gTGVhcm4gbW9yZSBhYm91dCBDU1MgY29udGFpbiBwcm9wZXJ0eSBoZXJlOiBodHRwczovL3Rlcm12YWRlci5naXRodWIuaW8vY3NzLWNvbnRhaW4vXHJcbiAgICAgICAgY29udGFpbjogY29udGVudDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuY2FsbC10by1hY3Rpb24tY29sIHtcclxuICAgICAgICAvL3BhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIFxyXG4gICAgICAgIC5maWx0ZXJzLWJ0biB7XHJcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDZweDtcclxuICBcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XHJcbiAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbi5saXN0aW5nLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiB9XHJcblxyXG4uaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiB9XHJcbiBcclxuIC50ZXh0e1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmFkZGVkQnlUaXRsZSB7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICBsaW5lLWhlaWdodDogNXB4O1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmUgXHJcbiB9XHJcbiAuYWRkZWRCeURhdGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4uYWRkZWRCeUltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgLm5ld0ljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAubWVzc2FnZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAvLyBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgIC5yZWFjdGlvbnMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICB9IFxyXG4gICAgLnJldmlld3Mtd3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICBcclxuICAgICAgLnRhZ3Mge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgIC5pdGVtLXJhdGluZyB7XHJcbiAgICAgICAgLy8gRGVmYXVsdCBiYWNrZ3JvdW5kXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcclxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xyXG4gICAgICAgICAgICAgICAgLy9wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0yLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2FhNmMzOTtcbiAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjYmJiMmIyO1xufVxuXG4uZmlsdGVycy10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tYm9yZGVyLXN0eWxlOiAxMHB4O1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgaW9uLXNlYXJjaGJhci5pdGVtcy1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY29udGFpbjogY29udGVudDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWdyb3c6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wgLmZpbHRlcnMtYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDZweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiBpbml0aWFsO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLmFkZGVkQnlUaXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBsaW5lLWhlaWdodDogNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hZGRlZEJ5RGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5hZGRlZEJ5SW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubmV3SWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLm1lc3NhZ2UgLnJlYWN0aW9ucyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cbi5tZXNzYWdlIC5yZXZpZXdzLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAxKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG59XG4ubWVzc2FnZSAucmV2aWV3cy13cmFwcGVyIC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLm1lc3NhZ2UgLnJldmlld3Mtd3JhcHBlciAudGFncyAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lc3NhZ2UgLnJldmlld3Mtd3JhcHBlciAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG59XG4ubWVzc2FnZSAucmV2aWV3cy13cmFwcGVyIC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMVwiXSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0yLWNvbG9yKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/feed/feed.page.ts":
  /*!***********************************!*\
    !*** ./src/app/feed/feed.page.ts ***!
    \***********************************/

  /*! exports provided: FeedPage */

  /***/
  function srcAppFeedFeedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPage", function () {
      return FeedPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../reaction-list-modal/reaction-list-modal.page */
    "./src/app/reaction-list-modal/reaction-list-modal.page.ts");

    var FeedPage =
    /*#__PURE__*/
    function () {
      function FeedPage(dataProvider, navCtrl, modalCtrl, firestore, alertCtrl, loadingProvider, actionSheet, route, router, afAuth) {
        _classCallCheck(this, FeedPage);

        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.firestore = firestore;
        this.alertCtrl = alertCtrl;
        this.loadingProvider = loadingProvider;
        this.actionSheet = actionSheet;
        this.route = route;
        this.router = router;
        this.afAuth = afAuth;
        this.posts = [];
        this.memberofGroups = [];
      }

      _createClass(FeedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          // Get Posts
          this.dataProvider.getCurrentUser().get().subscribe(function (groups) {
            console.log('groups:', groups.data().groups);

            _this.firestore.collection('posts').ref.where('groupId', 'in', groups.data().groups).orderBy("date", "desc").onSnapshot(function (po) {
              _this.posts = [];
              console.log('refresh posts list');
              po.forEach(function (p) {
                var post;
                post = p.data();
                post.key = p.id;
                var startDate = new Date(post.date); // Do your operations

                var endDate = new Date();
                var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

                if (seconds > 120) {
                  post.showNewIcon = false;
                } else {
                  post.showNewIcon = true;
                } // get reactions list


                _this.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe(function (reactions) {
                  post.reactions = [];
                  reactions.forEach(function (element) {
                    var reaction = element.payload.doc.data();
                    reaction.key = element.payload.doc.id;
                    post.reactions.push(reaction);
                  }); // Check for Thanks

                  if (reactions) {
                    var foundSmiley = false;

                    if (post.reactions !== undefined) {
                      foundSmiley = post.reactions.some(function (el) {
                        return el.addedByUser.addedByKey === _this.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
                      });
                    }

                    if (foundSmiley) {
                      post.showSmiley = true;
                    } else {
                      post.showSmiley = false;
                    } // Check for Hugs


                    var foundHug = false;

                    if (post.reactions !== undefined) {
                      foundHug = post.reactions.some(function (el) {
                        return el.addedByUser.addedByKey === _this.dataProvider.getCurrentUserId() && el.reactionType === 'Hug';
                      });
                    }

                    if (foundHug) {
                      post.showHug = true;
                    } else {
                      post.showHug = false;
                    } // Check for Hugs


                    var foundCheckin = false;

                    if (post.reactions !== undefined) {
                      foundCheckin = post.reactions.some(function (el) {
                        return el.addedByUser.addedByKey === _this.dataProvider.getCurrentUserId() && el.reactionType === 'Checkin';
                      });
                    }

                    if (foundCheckin) {
                      post.showCheckin = true;
                    } else {
                      post.showCheckin = false;
                    }
                  }
                });

                post.postTags = post.postTags.filter(function (x) {
                  return x.isChecked !== false;
                });

                _this.addOrUpdatePost(post);
              });
            });
          });
        }
      }, {
        key: "addOrUpdatePost",
        value: function addOrUpdatePost(post) {
          if (!this.posts) {
            this.posts = [post];
          } else {
            var index = -1;

            for (var i = 0; i < this.posts.length; i++) {
              if (this.posts[i].key == post.key) {
                index = i;
              }
            }

            if (index > -1) {
              this.posts[index] = post;
            } else {
              this.posts.push(post);
            }
          }
        } // Add or update conversaion for real-time sync of unreadMessagesCount.

      }, {
        key: "addOrUpdateConversation",
        value: function addOrUpdateConversation(conversation) {
          if (!this.conversationList) {
            this.conversationList = [conversation];
          } else {
            var index = -1;

            for (var i = 0; i < this.conversationList.length; i++) {
              if (this.conversationList[i].$key == conversation.$key) {
                index = i;
              }
            }

            if (index > -1) {
              this.conversationList[index] = conversation;
            } else {
              this.conversationList.push(conversation);
            }
          }

          this.computeUnreadMessagesCount();
        } // Compute all conversation's unreadMessages.

      }, {
        key: "computeUnreadMessagesCount",
        value: function computeUnreadMessagesCount() {
          this.unreadMessagesCount = 0;

          if (this.conversationList) {
            for (var i = 0; i < this.conversationList.length; i++) {
              this.unreadMessagesCount += this.conversationList[i].messages.length - this.conversationsInfo[i].messagesRead;

              if (this.unreadMessagesCount == 0) {
                this.unreadMessagesCount = null;
              }
            }
          }
        }
      }, {
        key: "getUnreadMessagesCount",
        value: function getUnreadMessagesCount() {
          if (this.unreadMessagesCount) {
            if (this.unreadMessagesCount > 0) {
              return this.unreadMessagesCount;
            }
          }

          return null;
        }
      }, {
        key: "showGroupOptions",
        value: function showGroupOptions() {
          var _this2 = this;

          var action = this.actionSheet.create({
            header: 'Create a new ...',
            backdropDismiss: true,
            mode: 'md',
            cssClass: 'GroupAction',
            buttons: [{
              text: 'Post',
              icon: 'chatbubbles-outline',
              cssClass: 'actionicon',
              handler: function handler() {
                _this2.newPost();
              }
            }, {
              text: 'Resource',
              icon: 'document-outline',
              handler: function handler() {
                _this2.newResource();
              }
            }, {
              text: 'Poll',
              icon: 'podium-outline',
              handler: function handler() {
                _this2.newPoll();
              }
            }, {
              text: 'Event',
              icon: 'calendar-outline',
              cssClass: 'cancelAction',
              handler: function handler() {
                _this2.newEvent();
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        }
      }, {
        key: "newPoll",
        value: function newPoll() {
          this.router.navigateByUrl('/new-poll/' + this.groupId);
        }
      }, {
        key: "newPost",
        value: function newPost() {
          this.router.navigateByUrl('/new-post/' + this.groupId);
        }
      }, {
        key: "newResource",
        value: function newResource() {
          this.router.navigateByUrl('/new-resource/' + this.groupId);
        }
      }, {
        key: "newEvent",
        value: function newEvent() {
          this.router.navigateByUrl('/new-event/' + this.groupId);
        }
      }, {
        key: "submitReactionPost",
        value: function submitReactionPost(post, reactionType) {
          switch (reactionType) {
            case 'Thanks':
              {
                if (!post.showSmiley) {
                  this.addPostReaction(post, reactionType);
                  post.showSmiley = true;
                  post.totalReactionCount += 1;
                } else {
                  this.removePostReaction(post, reactionType);
                  post.showSmiley = false;
                  post.totalReactionCount -= 1;
                }

                break;
              }

            case 'Hug':
              {
                if (!post.showHug) {
                  this.addPostReaction(post, reactionType);
                  post.showHug = true;
                  post.totalReactionCount += 1;
                } else {
                  this.removePostReaction(post, reactionType);
                  post.showHug = false;
                  post.totalReactionCount -= 1;
                }

                break;
              }
          }
        }
      }, {
        key: "addPostReaction",
        value: function addPostReaction(post, reactionType) {
          var _this3 = this;

          // first find the post in the collection
          var postIndex = this.posts.findIndex(function (el) {
            return el.key === post.key;
          });
          var p = this.posts[postIndex];
          this.dataProvider.getCurrentUser().get().subscribe(function (account) {
            if (account) {
              var reaction = {
                key: '',
                dateCreated: new Date(),
                addedByUser: {
                  addedByKey: _this3.dataProvider.getCurrentUserId(),
                  addedByUsername: account.data().username,
                  addedByImg: account.data().img
                },
                reactionType: reactionType
              };

              if (postIndex >= 0) {
                _this3.dataProvider.updatePostReactions(post.key, reaction);
              }
            }
          });
        }
      }, {
        key: "removePostReaction",
        value: function removePostReaction(post, reactionType) {
          var _this4 = this;

          // first find the post in the collection
          var postIndex = this.posts.findIndex(function (el) {
            return el.key === post.key;
          });
          var p = this.posts[postIndex];
          var found = false;

          if (p.reactions !== undefined) {
            var values = Object.keys(p.reactions).map(function (e) {
              return p.reactions[e];
            });
            var reaction = post.reactions.find(function (el) {
              return el.addedByUser.addedByKey === _this4.dataProvider.getCurrentUserId() && el.reactionType === reactionType;
            });
            console.log('reaction.key', reaction);
            this.dataProvider.removePostReaction(post.key, reaction.key);
          }
        }
      }, {
        key: "showReactionsList",
        value: function showReactionsList(post) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var postIndex, p, modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(post.totalReactionCount === 0)) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    // first find the post in the collection
                    postIndex = this.posts.findIndex(function (el) {
                      return el.key === post.key;
                    });
                    p = this.posts[postIndex];
                    _context.next = 6;
                    return this.modalCtrl.create({
                      component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_8__["ReactionListModalPage"],
                      componentProps: {
                        reactions: p.reactions
                      }
                    });

                  case 6:
                    modal = _context.sent;
                    _context.next = 9;
                    return modal.present();

                  case 9:
                    return _context.abrupt("return", _context.sent);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "viewPost",
        value: function viewPost(post) {
          this.router.navigateByUrl('post/' + post.key);
        }
      }, {
        key: "viewEvent",
        value: function viewEvent(post) {
          this.router.navigateByUrl('event/' + post.key);
        }
      }, {
        key: "viewPoll",
        value: function viewPoll(post) {
          this.router.navigateByUrl('poll/' + post.key);
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

      return FeedPage;
    }();

    FeedPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
      }];
    };

    FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feed.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feed.page.scss */
      "./src/app/feed/feed.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])], FeedPage);
    /***/
  }
}]);
//# sourceMappingURL=feed-feed-module-es5.js.map