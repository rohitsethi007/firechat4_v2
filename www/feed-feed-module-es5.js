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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated  placeholder=\"Search ...\"></ion-searchbar>\n      </ion-col>\n      <ion-col class=\"call-to-action-col\">\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" routerLink=\"/messages\">\n          <ion-icon slot=\"icon-only\" name=\"chatbubbles-outline\" ></ion-icon>\n          <ion-badge *ngIf=\"getUnreadMessagesCount() != null\">{{getUnreadMessagesCount()}}</ion-badge>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"call-to-action-col\">\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showAgeFilter = !showAgeFilter\">\n          <ion-icon slot=\"icon-only\" name=\"person-add-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"call-to-action-col\">\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showGroupOptions()\">\n          <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n     <!-- Show Posts -->\n     <div *ngIf=\"posts && posts.length > 0\" >\n     <div class=\"listing-item\" *ngFor=\"let item of posts\" >\n      <ion-card (click)=\"viewPost(item)\">\n        <ion-card-header>\n           <ion-card-subtitle class=\"addedBy\">\n            <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n            <p><span class=\"addedByTitle\">{{item.addedByUser.addedByUsername}}</span> <br/>{{item.date | DateFormat}}</p>\n            <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\" (click)=\"viewPost(item)\">\n          <b>{{item.title}}.</b> {{item.data.message}}\n          <ion-row >\n            <ion-col>\n              <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col>\n              <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\n               <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n               <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col>\n              <ion-buttons>\n                <ion-button (click)=\"showReactionsList(item)\">\n              <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\n            </ion-button>\n          </ion-buttons> \n            </ion-col>\n            <ion-col>\n              <ion-buttons>\n                <ion-button>\n              <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n            </ion-button>\n          </ion-buttons> \n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\" (click)=\"viewEvent(item)\">\n          <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\n            {{item.data.address}}<br/><br/>\n            {{item.data.link}}\n            <ion-row>\n              <ion-col>\n                      <ion-buttons>\n                        <ion-button (click)=\"submitReactionEvent(item, 'Checkin')\">\n                        <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                        <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                      </ion-button>\n                      </ion-buttons> \n                    </ion-col>\n              <ion-col>\n                      <ion-buttons>\n                        <ion-button (click)=\"submitReactionEvent(item, 'Thanks')\">\n                        <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                        <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                      </ion-button>\n                      </ion-buttons> \n                    </ion-col>\n                    <ion-col>\n                      <ion-buttons>\n                        <ion-button (click)=\"showEventReactionsList(item)\">\n                      <div><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n                    </ion-button>\n                  </ion-buttons> \n                    </ion-col>\n                    <ion-col>\n                      <ion-buttons>\n                        <ion-button>\n                          <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                        </ion-button>\n                  </ion-buttons> \n                    </ion-col>\n             </ion-row>\n        </ion-card-content>\n\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" (click)=\"viewPoll(item)\">\n          <b>{{item.title}}.</b><br/>\n          <ion-row class=\"info-row\" *ngFor=\"let pollOption of item.data.pollOptions\">\n            <ion-col class=\"poll-option-col\">\n            <!--<button ion-button color=\"primary\" clear small icon-start> -->\n               <div><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checked.svg\" ></ion-icon> <span class=\"text\">{{pollOption.name}}</span></div>\n              \n            <!--</button>-->\n            </ion-col>\n          </ion-row>\n                <ion-row class=\"info-row\" >\n           <ion-col size=\"8\">\n                     <span class=\"text\">Poll ends {{item.data.dateEnding | date:'fullDate'}}</span> \n                  </ion-col>\n            <ion-col size=\"2\">\n            </ion-col>\n                  <ion-col size=\"2\">\n                    <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\n                  </ion-col>\n                </ion-row>\n        </ion-card-content>\n        \n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\" (click)=\"viewResource(item)\">\n          <b>{{item.title}}.</b><br/>\n          <div *ngIf=\"item?.data.type == 'contact'\">\n            {{item.data.name}}<br/>\n            {{item.data.address}}<br/><br/>\n            {{item.data.email}}<br/>\n            {{item.data.phones}}<br/>\n          </div>\n          <div *ngIf=\"item?.data.type == 'upload'\">\n            <div *ngIf=\"item.data.uploadtype == 'location'\" [innerHtml]=\"item.data.url\"></div>\n            <div *ngIf=\"item.data.uploadtype == 'contact'\">\n            {{item.data.name}}<br/>\n            {{item.data.address}}<br/>\n            {{item.data.phones}}<br/>\n            {{item.data.email}}<br/>\n            </div>\n            <div *ngIf=\"item.data.uploadtype == 'image'\">\n            <img src=\"{{item.data.resolvedurl}}\" />\n            </div>\n            <div *ngIf=\"item.data.uploadtype == 'video'\">\n              <video controls width=\"100%\" src=\"{{item.data.resolvedurl}}\" ></video>\n            </div>\n          </div>\n          <div *ngIf=\"item?.data.type == 'weblink'\">\n          {{item.data.metatitle}}<br/>\n          <img [src]=\"item.data.metaicon\"/> \n          {{item.data.metadescription}}<br/><br/>\n          <a href=\"{{item.data.metasite}}\">{{item.data.metasite}}</a>\n          </div>\n          <div>\n             <ion-row>\n               <ion-col class=\"reactions-col\">\n                   <ion-buttons>\n                   <ion-button (click)=\"submitReactionResource(item, 'Bookmark')\">\n                  <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n                  <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n                   </ion-button>\n                   </ion-buttons> \n                 </ion-col>\n               <ion-col class=\"reactions-col\">\n                   <ion-buttons>\n                   <ion-button (click)=\"submitReactionResource(item, 'Thanks')\">\n                  <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                  <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                   </ion-button>\n                   </ion-buttons> \n                 </ion-col>\n              <ion-col class=\"reactions-col\">\n                   <ion-buttons>\n                   <ion-button (click)=\"showResourceReactionsList(item)\">\n                   <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n                 </ion-button>\n                 </ion-buttons> \n                 </ion-col>\n                 <ion-col class=\"reactions-col\">\n                   <ion-buttons>\n                   <ion-button>\n                    <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                  </ion-button>\n                 </ion-buttons> \n                 </ion-col>\n            </ion-row>\n          \n          </div>\n        </ion-card-content>\n        <!-- Dont touch the tags below this line-->\n      </ion-card>\n\n     </div>\n     </div>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n  --border-style: 10px;\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row ion-searchbar.items-searchbar {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  font-size: 18px;\n  height: initial;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.addedBy .addedByImg {\n  width: 50px;\n  vertical-align: middle;\n  float: left;\n  padding-right: 10px;\n}\n\n.addedBy .addedByTitle {\n  font-weight: bold;\n  line-height: 5px;\n}\n\n.newIcon {\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxmZWVkXFxmZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDSTtFQUNFLDhCQUFBO0FDQ047O0FEQ007RUFDRSxZQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FDRFI7O0FESU07RUFDRSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNIUjs7QURLUTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUNMVjs7QURZRTtFQUNFLHdDQUFBO0FDVEo7O0FEWUU7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDVEo7O0FEWUc7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ1RMOztBRGFJO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDVk47O0FEYUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDWEo7O0FEZUk7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUNaTjs7QURjSTtFQUNFLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1hOIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gIH1cclxuXHJcbi5maWx0ZXJzLXRvb2xiYXIge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogMTBweDtcclxuICBcclxuICAgIC5zZWFyY2hiYXItcm93IHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICBpb24tc2VhcmNoYmFyLml0ZW1zLXNlYXJjaGJhciB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAvLyBMZWFybiBtb3JlIGFib3V0IENTUyBjb250YWluIHByb3BlcnR5IGhlcmU6IGh0dHBzOi8vdGVybXZhZGVyLmdpdGh1Yi5pby9jc3MtY29udGFpbi9cclxuICAgICAgICBjb250YWluOiBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIFxyXG4gICAgICAgIC5maWx0ZXJzLWJ0biB7XHJcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICBcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XHJcbiAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmxpc3RpbmctaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gICB9XHJcbiAgXHJcbiAgLmljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgfVxyXG4gICBcclxuICAgLnRleHR7XHJcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAuYWRkZWRCeSB7XHJcblxyXG4gICAgLmFkZGVkQnlJbWcge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gIC5hZGRlZEJ5VGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiAgIH1cclxuICAgIC5uZXdJY29uIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuXG4uZmlsdGVycy10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tYm9yZGVyLXN0eWxlOiAxMHB4O1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgaW9uLXNlYXJjaGJhci5pdGVtcy1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY29udGFpbjogY29udGVudDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWdyb3c6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wgLmZpbHRlcnMtYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiBpbml0aWFsO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLmFkZGVkQnkgLmFkZGVkQnlJbWcge1xuICB3aWR0aDogNTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uYWRkZWRCeSAuYWRkZWRCeVRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA1cHg7XG59XG5cbi5uZXdJY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */";
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

    var FeedPage =
    /*#__PURE__*/
    function () {
      function FeedPage(dataProvider, navCtrl, modalCtrl, firestore, alertCtrl, loadingProvider, actionSheet, route, router) {
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
        this.loggedInUserIsMember = 'false';
        this.posts = [];
      }

      _createClass(FeedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          // TODO: remove this hardcoded groupid
          this.groupId = 'SWSn0dRwU3IksNSMGrvn'; // Get friend requests count.

          this.dataProvider.getRequests(this.dataProvider.getCurrentUserId()).get().then(function (requestsRes) {
            var requests = requestsRes.data;

            if (requests != null) {
              if (requests.friendRequests != null) {
                _this.friendRequestCount = requests.friendRequests.length;
              } else {
                _this.friendRequestCount = null;
              }
            } else {
              _this.friendRequestCount = null;
            }
          }); // Get conversations and add/update if the conversation exists, otherwise delete from list.

          this.dataProvider.getConversations().get().subscribe(function (conversationsInfoRes) {
            if (conversationsInfoRes.length > 0) {
              conversationsInfoRes.forEach(function (conversationInfo) {
                if (conversationInfo.blocked != true) {
                  _this.dataProvider.getConversation(conversationInfo.conversationId).snapshotChanges().subscribe(function (conversationRes) {
                    if (conversationRes.payload.exists) {
                      var conversation = Object.assign({
                        $key: conversationRes.key
                      }, conversationRes.payload.data());

                      if (conversation.blocked != true) {
                        _this.addOrUpdateConversation(conversation);
                      }
                    }
                  });
                }
              });
            }
          }); // Get Posts
          // Get group posts

          this.firestore.collection('/posts/').ref // .where('groupId', '==', this.groupId)
          .get().then(function (snapshot) {
            console.log('where clause' + snapshot);
            snapshot.forEach(function (childSnapshot) {
              var post;
              post = Object.assign({
                key: childSnapshot.id
              }, childSnapshot.data());
              var startDate = new Date(post.date); // Do your operations

              var endDate = new Date();
              var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

              if (seconds > 120) {
                post.showNewIcon = false;
              } else {
                post.showNewIcon = true;
              } // Check for Thanks


              var totalReactionCount = 0;
              var totalReviewCount = 0;

              if (post.reviews !== undefined) {
                var rev = Object.keys(post.reviews).map(function (e) {
                  totalReviewCount += 1;
                });
              }

              var foundSmiley = false;

              if (post.reactions !== undefined) {
                var values = Object.keys(post.reactions).map(function (e) {
                  post.reactions[e].key = e;
                  totalReactionCount += 1;
                  return post.reactions[e];
                });
                foundSmiley = values.some(function (el) {
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
                var _values = Object.keys(post.reactions).map(function (e) {
                  post.reactions[e].key = e;
                  return post.reactions[e];
                });

                foundHug = _values.some(function (el) {
                  return el.addedByUser.addedByKey === _this.dataProvider.getCurrentUserId() && el.reactionType === 'Hug';
                });
              }

              if (foundHug) {
                post.showHug = true;
              } else {
                post.showHug = false;
              }

              post.totalReactionCount = totalReactionCount;
              post.totalReviewCount = totalReviewCount;

              _this.addOrUpdatePost(post); // this.dataProvider.getUser(childData.sender).snapshotChanges().subscribe((user: any) => {
              //   childData.avatar = user.payload.data().img;
              // });
              // this.posts.push(childData);

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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], FeedPage);
    /***/
  }
}]);
//# sourceMappingURL=feed-feed-module-es5.js.map