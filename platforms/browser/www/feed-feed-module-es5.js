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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n    <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated  placeholder=\"Search ...\"></ion-searchbar>\n      </ion-col>\n      <ion-col class=\"call-to-action-col\">\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" routerLink=\"/messages\">\n          <ion-icon slot=\"icon-only\" name=\"notifications-outline\" ></ion-icon>\n          <ion-badge *ngIf=\"getUnreadMessagesCount() != null\">{{getUnreadMessagesCount()}}</ion-badge>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"call-to-action-col\">\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showGroupOptions()\">\n          <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n<!-- <ion-badge class=\"badge\" *ngIf=\"item.type === 'general'\" color=\"tertiary\">Post</ion-badge>\n<ion-badge class=\"badge\" *ngIf=\"item.type === 'event'\" color=\"warning\">Event</ion-badge>\n<ion-badge class=\"badge\" *ngIf=\"item.type === 'poll'\" color=\"medium\">Poll</ion-badge>\n<ion-badge class=\"badge\" *ngIf=\"item.type === 'resource'\" color=\"dark\">Resource</ion-badge>  -->\n\n\n<ion-content>\n     <!-- Show Posts -->\n     <div *ngIf=\"posts && posts.length > 0\" >\n     <div class=\"listing-item\" *ngFor=\"let item of posts\" >\n      <ion-card>\n        <ion-card-header>\n           <ion-card-subtitle class=\"addedBy\">\n            <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n             <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n              <br/>\n             <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n            <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\n          <div (click)=\"viewPost(item)\">\n          <ion-label><b>{{item.title}}.</b> {{item.data.message}} <br/></ion-label>\n        </div>\n          <div class=\"reviews-wrapper\">\n          <ion-row>\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n              <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\n              <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\n            </div>\n          </ion-row>\n          </div>\n          <div class=\"reactions\">\n          <ion-row >\n            <ion-col size=3>\n              <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col size=3>\n              <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\n               <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n               <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col size=2></ion-col>\n            <ion-col size=2>\n              <ion-buttons>\n                <ion-button (click)=\"showReactionsList(item)\">\n              <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\n            </ion-button>\n          </ion-buttons> \n            </ion-col>\n            <ion-col size=2>\n              <ion-buttons>\n                <ion-button>\n              <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n            </ion-button>\n          </ion-buttons> \n            </ion-col>\n          </ion-row>\n          </div>\n        </ion-card-content>\n\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\n          <div (click)=\"viewEvent(item)\">\n          <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\n            {{item.data.address}}<br/><br/>\n            {{item.data.link}}\n          </div>\n          <div class=\"reviews-wrapper\">\n            <ion-row>\n              <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n                <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\n                <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\n              </div>\n            </ion-row>\n          </div>\n          <div class=\"reactions\">\n            <ion-row>\n              <ion-col size=3>\n                <ion-buttons>\n                  <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n                  <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                  <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                </ion-button>\n                </ion-buttons> \n              </ion-col>\n              <ion-col size=3>\n                <ion-buttons>\n                  <ion-button (click)=\"submitReactionPost(item, 'Checkin')\">\n                  <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                  <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                </ion-button>\n                </ion-buttons> \n              </ion-col>\n              <ion-col size=2></ion-col>\n              <ion-col size=2>\n                      <ion-buttons>\n                        <ion-button (click)=\"showReactionsList(item)\">\n                      <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n                    </ion-button>\n                  </ion-buttons> \n              </ion-col>\n              <ion-col size=2>\n                      <ion-buttons>\n                        <ion-button>\n                          <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                        </ion-button>\n                  </ion-buttons> \n              </ion-col>\n             </ion-row>\n         </div>\n        </ion-card-content>\n\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" >\n          <div (click)=\"viewPoll(item)\">\n          <b>{{item.title}}.</b><br/>\n          <ion-row  *ngFor=\"let pollOption of item.data.pollOptions\">\n            <ion-col >\n               <div><ion-icon class=\"poll-icon\" name=\"checkbox-outline\"></ion-icon> <span>{{pollOption.name}}</span></div>\n            </ion-col>\n          </ion-row>\n        </div>\n          <div class=\"reviews-wrapper\">\n            <ion-row>\n              <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n                <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\n                <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\n              </div>\n            </ion-row>\n            </div>\n\n                <ion-row class=\"info-row\" >\n           <ion-col size=\"8\">\n                     <span class=\"text\">Poll ends {{item.data.dateEnding.toDate() | DateFormat}}</span> \n                  </ion-col>\n            <ion-col size=\"1\">\n            </ion-col>\n                  <ion-col size=\"3\">\n                    <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\n                  </ion-col>\n                </ion-row>\n        </ion-card-content>\n        \n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\">\n          <div (click)=\"viewResource(item)\">\n          <b>{{item.title}}.</b><br/>\n          <div *ngIf=\"item?.data.type == 'contact'\">\n            {{item.data.name}}<br/>\n            {{item.data.address}}<br/><br/>\n            {{item.data.email}}<br/>\n            {{item.data.phones}}<br/>\n          </div>\n          <div *ngIf=\"item?.data.type == 'upload'\">\n            <div *ngIf=\"item.data.uploadtype == 'location'\" [innerHtml]=\"item.data.url\"></div>\n            <div *ngIf=\"item.data.uploadtype == 'contact'\">\n            {{item.data.name}}<br/>\n            {{item.data.address}}<br/>\n            {{item.data.phones}}<br/>\n            {{item.data.email}}<br/>\n            </div>\n            <div *ngIf=\"item.data.uploadtype == 'image'\">\n            <img src=\"{{item.data.resolvedurl}}\" />\n            </div>\n            <div *ngIf=\"item.data.uploadtype == 'video'\">\n              <video controls width=\"100%\" src=\"{{item.data.resolvedurl}}\" ></video>\n            </div>\n          </div>\n          <div *ngIf=\"item?.data.type == 'weblink'\">\n          {{item.data.metatitle}}<br/>\n          <img [src]=\"item.data.metaicon\"/> \n          {{item.data.metadescription}}<br/><br/>\n          <a href=\"{{item.data.metasite}}\">{{item.data.metasite}}</a>\n          </div>\n        </div>\n          <div class=\"reviews-wrapper\">\n            <ion-row>\n              <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n                <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\n                <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\n              </div>\n            </ion-row>\n          </div>\n          <div class=\"reactions\">\n             <ion-row>\n              <ion-col size=3>\n                <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                </ion-button>\n                </ion-buttons> \n              </ion-col>\n              <ion-col size=3>\n                   <ion-buttons>\n                   <ion-button (click)=\"submitReactionPost(item, 'Bookmark')\">\n                  <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n                  <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n                   </ion-button>\n                   </ion-buttons> \n              </ion-col>\n            <ion-col size=2></ion-col>\n            <ion-col size=2>\n                   <ion-buttons>\n                   <ion-button (click)=\"showReactionsList(item)\">\n                   <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n                 </ion-button>\n                 </ion-buttons> \n                 </ion-col>\n                 <ion-col size=2>\n                   <ion-buttons>\n                   <ion-button>\n                    <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                  </ion-button>\n                 </ion-buttons> \n                 </ion-col>\n            </ion-row>\n          \n          </div>\n        </ion-card-content>\n        <!-- Dont touch the tags below this line-->\n      </ion-card>\n\n     </div>\n     </div>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-rating-2-color: #aa6c39;\n  --page-rating-1-color: #bbb2b2;\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n\nion-content ion-card {\n  width: 100%;\n  padding-top: 0px;\n  margin-top: 0px;\n  margin-left: 0px;\n}\n\nion-card ion-card-header {\n  padding-top: 0px;\n  margin-top: 0px;\n  padding-bottom: 0px;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.poll-icon {\n  display: inline-block;\n  vertical-align: middle;\n  padding-right: 5px;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-size: 12px;\n}\n\n.addedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n  letter-spacing: 1px;\n}\n\n.addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n  font-size: 12px;\n}\n\n.addedByImg {\n  width: 45px;\n  float: left;\n  vertical-align: middle;\n}\n\n.newIcon {\n  margin-left: 10px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: black;\n}\n\n.message .reactions {\n  margin-bottom: 0px;\n  margin-left: -10px;\n}\n\n.message .reviews-wrapper {\n  padding-top: calc(var(--page-margin) / 1);\n}\n\n.message .reviews-wrapper .tags {\n  padding-right: 5px;\n}\n\n.message .reviews-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.message .reviews-wrapper .tags .item-rating[ratingBase=\"0\"] {\n  color: var(--page-rating-1-color);\n}\n\n.message .reviews-wrapper .tags .item-rating[ratingBase=\"1\"] {\n  color: var(--page-rating-2-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC9mZWVkL2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0sscUNBQUE7RUFDRCx3Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBREdJO0VBQ0UsOEJBQUE7QUNETjs7QURhTTtFQUVFLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDYlI7O0FEZVE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0FDZlY7O0FEc0JFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbkJKOztBRHNCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDbkJKOztBRHNCQTtFQUNFLHdDQUFBO0FDbkJGOztBRHNCQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUNuQkY7O0FEc0JDO0VBQ0MscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDbkJGOztBRHlCQztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQ3RCSDs7QUR3QkM7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ3JCSDs7QUR1QkM7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3BCRjs7QUR1QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDcEJKOztBRHNCRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDbkJKOztBRHFCRTtFQUVFLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNuQko7O0FEcUJJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ25CTjs7QURxQkk7RUFDRSx5Q0FBQTtBQ25CTjs7QURzQk07RUFDRSxrQkFBQTtBQ3BCUjs7QURzQk07RUFFRSxtREFBQTtFQU1RLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQzFCaEI7O0FEMkJnQjtFQUNFLGlDQUFBO0FDekJsQjs7QUQyQmdCO0VBQ0UsaUNBQUE7QUN6QmxCIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAgIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2FhNmMzOTtcbiAgICAtLXBhZ2UtcmF0aW5nLTEtY29sb3I6ICNiYmIyYjI7XG4gIH1cblxuLmZpbHRlcnMtdG9vbGJhciB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAvLyAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLy8gLS1ib3JkZXItc3R5bGU6IDEwcHg7XG4gIFxuICAgIC5zZWFyY2hiYXItcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgXG4gICAgICAvLyBpb24tc2VhcmNoYmFyLml0ZW1zLXNlYXJjaGJhciB7XG4gICAgICAvLyAgIHBhZGRpbmc6IDBweDtcbiAgICAgIC8vICAgaGVpZ2h0OjMwcHg7XG4gICAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAvLyAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxuICAgICAgLy8gICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAvLyAgIC8vIExlYXJuIG1vcmUgYWJvdXQgQ1NTIGNvbnRhaW4gcHJvcGVydHkgaGVyZTogaHR0cHM6Ly90ZXJtdmFkZXIuZ2l0aHViLmlvL2Nzcy1jb250YWluL1xuICAgICAgLy8gICAvLyBjb250YWluOiBjb250ZW50O1xuICAgICAgLy8gfVxuICBcbiAgICAgIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xuICAgICAgICAvL3BhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBcbiAgICAgICAgLmZpbHRlcnMtYnRuIHtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA2cHg7XG4gIFxuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcbiAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGlvbi1jb250ZW50IGlvbi1jYXJke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cbiBcbiAucG9sbC1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gfVxuXG4gLmJhZGdlIHtcbiAgIFxuIH1cbiAudGV4dHtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gICBmb250LXNpemU6IDEycHg7XG4gfVxuIC5hZGRlZEJ5VGl0bGUge1xuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICBsaW5lLWhlaWdodDogNXB4O1xuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiB9XG4gLmFkZGVkQnlEYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIFxuLmFkZGVkQnlJbWcge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLm5ld0ljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5tZXNzYWdlIHtcbiAgICAvLyBtYXJnaW4tdG9wOiAycHg7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6YmxhY2s7XG5cbiAgICAucmVhY3Rpb25zIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICB9IFxuICAgIC5yZXZpZXdzLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMSk7XG4gICAgICAvLyBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgXG4gICAgICAudGFncyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcblxuICAgICAgLml0ZW0tcmF0aW5nIHtcbiAgICAgICAgLy8gRGVmYXVsdCBiYWNrZ3JvdW5kXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAxKTtcbiAgICAgICAgICAgICAgICAvL3BhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMFwiXSB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXJhdGluZy0yLWNvbG9yOiAjYWE2YzM5O1xuICAtLXBhZ2UtcmF0aW5nLTEtY29sb3I6ICNiYmIyYjI7XG59XG5cbi5maWx0ZXJzLXRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCAuZmlsdGVycy1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcbiAgLS1wYWRkaW5nLWVuZDogNnB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IGluaXRpYWw7XG59XG5cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wb2xsLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hZGRlZEJ5VGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uYWRkZWRCeURhdGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hZGRlZEJ5SW1nIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubmV3SWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6IGJsYWNrO1xufVxuLm1lc3NhZ2UgLnJlYWN0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLm1lc3NhZ2UgLnJldmlld3Mtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xufVxuLm1lc3NhZ2UgLnJldmlld3Mtd3JhcHBlciAudGFncyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5tZXNzYWdlIC5yZXZpZXdzLXdyYXBwZXIgLnRhZ3MgLml0ZW0tcmF0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuMzUpO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZXNzYWdlIC5yZXZpZXdzLXdyYXBwZXIgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xufVxuLm1lc3NhZ2UgLnJldmlld3Mtd3JhcHBlciAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG59Il19 */";
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
      function FeedPage(dataProvider, navCtrl, modalCtrl, firestore, alertCtrl, routerOutlet, loadingProvider, actionSheet, route, router, afAuth) {
        _classCallCheck(this, FeedPage);

        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.firestore = firestore;
        this.alertCtrl = alertCtrl;
        this.routerOutlet = routerOutlet;
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
            _this.firestore.collection('posts').ref.where('groupId', 'in', groups.data().groups).orderBy("date", "desc").onSnapshot(function (po) {
              _this.posts = [];
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
                    } // Check for Checkin


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
                    } // Check for Bookmark


                    var foundBookmark = false;

                    if (post.reactions !== undefined) {
                      foundBookmark = post.reactions.some(function (el) {
                        return el.addedByUser.addedByKey === _this.dataProvider.getCurrentUserId() && el.reactionType === 'Bookmark';
                      });
                    }

                    if (foundBookmark) {
                      post.showBookmark = true;
                    } else {
                      post.showBookmark = false;
                    } // totalPollCount


                    if (post.reactions !== undefined) {
                      foundBookmark = post.reactions.some(function (el) {
                        return el.addedByUser.addedByKey === _this.dataProvider.getCurrentUserId() && el.reactionType === 'Bookmark';
                      });
                    }

                    if (foundBookmark) {
                      post.showBookmark = true;
                    } else {
                      post.showBookmark = false;
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

            case 'Checkin':
              {
                if (!post.showCheckin) {
                  this.addPostReaction(post, reactionType);
                  post.showCheckin = true;
                  post.totalReactionCount += 1;
                } else {
                  this.removePostReaction(post, reactionType);
                  post.showCheckin = false;
                  post.totalReactionCount -= 1;
                }

                break;
              }

            case 'Bookmark':
              {
                if (!post.showBookmark) {
                  this.addPostReaction(post, reactionType);
                  post.showBookmark = true;
                  post.totalReactionCount += 1;
                } else {
                  this.removePostReaction(post, reactionType);
                  post.showBookmark = false;
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
                      swipeToClose: true,
                      presentingElement: this.routerOutlet.nativeEl,
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
        key: "viewResource",
        value: function viewResource(post) {
          this.router.navigateByUrl('resource/' + post.key);
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"], _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])], FeedPage);
    /***/
  }
}]);
//# sourceMappingURL=feed-feed-module-es5.js.map