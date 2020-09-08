(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"filters-toolbar\">\r\n    <ion-row class=\"searchbar-row\" align-items-center>\r\n    <ion-col>\r\n        <ion-searchbar mode=\"ios\" class=\"searchbar\" placeholder=\"Search...\"></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col class=\"call-to-action-col\">\r\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" routerLink=\"/messages\">\r\n          <ion-icon slot=\"icon-only\" name=\"notifications-outline\" ></ion-icon>\r\n          <ion-badge *ngIf=\"getUnreadMessagesCount() != null\">{{getUnreadMessagesCount()}}</ion-badge>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"call-to-action-col\">\r\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showGroupOptions()\">\r\n          <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<!-- <ion-badge class=\"badge\" *ngIf=\"item.type === 'general'\" color=\"tertiary\">Post</ion-badge>\r\n<ion-badge class=\"badge\" *ngIf=\"item.type === 'event'\" color=\"warning\">Event</ion-badge>\r\n<ion-badge class=\"badge\" *ngIf=\"item.type === 'poll'\" color=\"medium\">Poll</ion-badge>\r\n<ion-badge class=\"badge\" *ngIf=\"item.type === 'resource'\" color=\"dark\">Resource</ion-badge>  -->\r\n\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n     <!-- Show Posts -->\r\n     <div *ngIf=\"posts && posts.length > 0\" >\r\n     <div class=\"listing-item\" *ngFor=\"let item of posts\" >\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-row>\r\n            <ion-col size=10>\r\n           <ion-card-subtitle class=\"addedBy\">\r\n            <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n             <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n              <br/>\r\n             <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\r\n            <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\r\n          </ion-card-subtitle>\r\n        </ion-col>\r\n        <ion-col size=2>\r\n          <ion-buttons>\r\n            <ion-button (click)=\"showPostOptions(item)\">\r\n              <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        </ion-row>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\r\n          <div (click)=\"viewPost(item)\">\r\n            <div>\r\n              <ion-slides class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\r\n              <ion-slide *ngFor=\"let s of item.postMedia\">\r\n                <div class=\"bgSizeContain\" \r\n                [ngStyle]=\"{'background-image':'url('+s+')'}\">\r\n              </div>\r\n              </ion-slide>\r\n            </ion-slides>\r\n            </div>\r\n          <ion-label><b>{{item.title}}.</b> {{item.data.message}} <br/></ion-label>\r\n        </div>\r\n          <div class=\"tags-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n              <span class=\"item-rating\">#{{tag.val}}</span>\r\n            </div>\r\n          </ion-row>\r\n          </div>\r\n          <div class=\"reactions\">\r\n          <ion-row >\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\r\n               <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n               <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=2></ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"showReactionsList(item)\">\r\n              <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n            </ion-button>\r\n          </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button>\r\n              <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n            </ion-button>\r\n          </ion-buttons> \r\n            </ion-col>\r\n          </ion-row>\r\n          </div>\r\n        </ion-card-content>\r\n\r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\r\n          <div (click)=\"viewEvent(item)\">\r\n          <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\r\n            {{item.data.address}}<br/><br/>\r\n            {{item.data.link}}\r\n          </div>\r\n          <div class=\"tags-wrapper\">\r\n            <ion-row>\r\n              <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n                <span class=\"item-rating\">#{{tag.val}}</span>\r\n              </div>\r\n            </ion-row>\r\n            </div>\r\n          <div class=\"reactions\">\r\n            <ion-row>\r\n              <ion-col size=3>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n                  <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                  <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=3>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionPost(item, 'Checkin')\">\r\n                  <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                  <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=2></ion-col>\r\n              <ion-col size=2>\r\n                      <ion-buttons>\r\n                        <ion-button (click)=\"showReactionsList(item)\">\r\n                      <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                    </ion-button>\r\n                  </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=2>\r\n                      <ion-buttons>\r\n                        <ion-button>\r\n                          <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                        </ion-button>\r\n                  </ion-buttons> \r\n              </ion-col>\r\n             </ion-row>\r\n         </div>\r\n        </ion-card-content>\r\n\r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" >\r\n          <div (click)=\"viewPoll(item)\">\r\n          <b>{{item.title}}.</b><br/>\r\n          <ion-row  *ngFor=\"let pollOption of item.data.pollOptions\">\r\n            <ion-col >\r\n               <div><ion-icon class=\"poll-icon\" name=\"checkbox-outline\"></ion-icon> <span>{{pollOption.name}}</span></div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <div class=\"tags-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n              <span class=\"item-rating\">#{{tag.val}}</span>\r\n            </div>\r\n          </ion-row>\r\n          </div>\r\n\r\n                <ion-row class=\"info-row\" >\r\n           <ion-col size=\"8\">\r\n                     <span class=\"text\" *ngIf=\"!item.pollClosed\">Poll ends {{item.data.dateEnding.toDate() | DateFormat}}</span> \r\n                     <span class=\"text\" *ngIf=\"item.pollClosed\">Poll closed</span> \r\n                  </ion-col>\r\n            <ion-col size=\"1\">\r\n            </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\r\n                  </ion-col>\r\n                </ion-row>\r\n        </ion-card-content>\r\n        \r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\">\r\n          <div (click)=\"viewResource(item)\">\r\n          <b>{{item.title}}.</b><br/>\r\n          <div *ngIf=\"item?.data.type == 'contact'\">\r\n            {{item.data.name}}<br/>\r\n            {{item.data.address}}<br/><br/>\r\n            {{item.data.email}}<br/>\r\n            {{item.data.phones}}<br/>\r\n          </div>\r\n          <div *ngIf=\"item?.data.type == 'upload'\">\r\n            <div *ngIf=\"item.data.uploadtype == 'location'\" [innerHtml]=\"item.data.url\"></div>\r\n            <div *ngIf=\"item.data.uploadtype == 'contact'\">\r\n            {{item.data.name}}<br/>\r\n            {{item.data.address}}<br/>\r\n            {{item.data.phones}}<br/>\r\n            {{item.data.email}}<br/>\r\n            </div>\r\n            <div *ngIf=\"item.data.uploadtype == 'image'\">\r\n            <img src=\"{{item.data.resolvedurl}}\" />\r\n            </div>\r\n            <div *ngIf=\"item.data.uploadtype == 'video'\">\r\n              <video controls width=\"100%\" src=\"{{item.data.resolvedurl}}\" ></video>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"item?.data.type == 'weblink'\">\r\n          {{item.data.metatitle}}<br/>\r\n          <img [src]=\"item.data.metaicon\"/> \r\n          {{item.data.metadescription}}<br/><br/>\r\n          <a href=\"{{item.data.metasite}}\">{{item.data.metasite}}</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"tags-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n              <span class=\"item-rating\">#{{tag.val}}</span>\r\n            </div>\r\n          </ion-row>\r\n          </div>\r\n          <div class=\"reactions\">\r\n             <ion-row>\r\n              <ion-col size=3>\r\n                <ion-buttons>\r\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=3>\r\n                   <ion-buttons>\r\n                   <ion-button (click)=\"submitReactionPost(item, 'Bookmark')\">\r\n                  <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                  <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                   </ion-button>\r\n                   </ion-buttons> \r\n              </ion-col>\r\n            <ion-col size=2></ion-col>\r\n            <ion-col size=2>\r\n                   <ion-buttons>\r\n                   <ion-button (click)=\"showReactionsList(item)\">\r\n                   <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                 </ion-button>\r\n                 </ion-buttons> \r\n                 </ion-col>\r\n                 <ion-col size=2>\r\n                   <ion-buttons>\r\n                   <ion-button>\r\n                    <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                  </ion-button>\r\n                 </ion-buttons> \r\n                 </ion-col>\r\n            </ion-row>\r\n          \r\n          </div>\r\n        </ion-card-content>\r\n        <!-- Dont touch the tags below this line-->\r\n      </ion-card>\r\n     </div>\r\n     </div>\r\n     <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content\r\n        loadingSpinner=\"bubbles\"\r\n        loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/feed/feed.module.ts":
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed.page */ "./src/app/feed/feed.page.ts");









const routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_8__["FeedPage"]
    }
];
let FeedPageModule = class FeedPageModule {
};
FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_8__["FeedPage"]]
    })
], FeedPageModule);



/***/ }),

/***/ "./src/app/feed/feed.page.scss":
/*!*************************************!*\
  !*** ./src/app/feed/feed.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\nion-searchbar {\n  --border-radius: 30px;\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row .searchbar {\n  padding: 0px;\n  height: 30px;\n  border-radius: 20px;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.poll-icon {\n  display: inline-block;\n  vertical-align: middle;\n  padding-right: 5px;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-size: 12px;\n}\n\n.addedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n}\n\n.addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n  font-size: 12px;\n}\n\n.addedByImg {\n  width: 45px;\n  float: left;\n  vertical-align: middle;\n}\n\n.newIcon {\n  margin-left: 10px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .slider {\n  margin-bottom: 5px;\n}\n\n.message .slider .bgSizeContain {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100%;\n  width: 100%;\n  height: 200px;\n  text-shadow: white 0px 0px 2px;\n  font-size: 16px;\n  border-radius: 10px;\n}\n\n.message .reactions {\n  margin-bottom: 0px;\n  margin-left: -10px;\n}\n\n.message .tags-wrapper {\n  padding-top: 5px;\n}\n\n.message .tags-wrapper .tags {\n  padding-right: 5px;\n}\n\n.message .tags-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #aa6c39;\n}\n\nion-slides {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxmZWVkXFxmZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLHVDQUFBO0VBQ0Esd0NBQUE7QUNDTDs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQ0FBQTtFQUNBLGlDQUFBO0FDQ0o7O0FERUk7RUFDRSw4QkFBQTtBQ0FOOztBREVNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FSOztBRE9NO0VBQ0UsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNOUjs7QURRUTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUNSVjs7QURlQTtFQUNFLHdDQUFBO0FDWkY7O0FEZUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDWkY7O0FEZUM7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNaRjs7QURlQztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQ1pIOztBRGNDO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDWEg7O0FEY0M7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1hGOztBRGNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ1hKOztBRGFFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNWSjs7QURZRTtFQUNFLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1RKOztBRFdJO0VBQ0Usa0JBQUE7QUNUTjs7QURVTTtFQUNFLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBR0EsbUJBQUE7QUNSUjs7QURZSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNWTjs7QURZSTtFQUNFLGdCQUFBO0FDVk47O0FEWU07RUFDRSxrQkFBQTtBQ1ZSOztBRFlNO0VBQ0UsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDVlI7O0FEZ0JFO0VBQ0UsWUFBQTtBQ2JKIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcbiAgICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgfVxyXG5cclxuLmZpbHRlcnMtdG9vbGJhciB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC8vIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgICAuc2VhcmNoYmFyLXJvdyB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuICBcclxuICAgICAgLnNlYXJjaGJhciB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC8vIExlYXJuIG1vcmUgYWJvdXQgQ1NTIGNvbnRhaW4gcHJvcGVydHkgaGVyZTogaHR0cHM6Ly90ZXJtdmFkZXIuZ2l0aHViLmlvL2Nzcy1jb250YWluL1xyXG4gICAgICAgIC8vICBjb250YWluOiBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xyXG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBcclxuICAgICAgICAuZmlsdGVycy1idG4ge1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA2cHg7XHJcbiAgXHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxyXG4gICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgICBcclxuLmxpc3RpbmctaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuIH1cclxuXHJcbi5pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuIH1cclxuIFxyXG4gLnBvbGwtaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gfVxyXG5cclxuIC50ZXh0e1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiAuYWRkZWRCeVRpdGxlIHtcclxuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAvLyAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuIH1cclxuIC5hZGRlZEJ5RGF0ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbi5hZGRlZEJ5SW1nIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAubmV3SWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC5tZXNzYWdlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgLnNsaWRlciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgLmJnU2l6ZUNvbnRhaW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogd2hpdGUgMHB4IDBweCAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVhY3Rpb25zIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICB9IFxyXG4gICAgLnRhZ3Mtd3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgXHJcbiAgICAgIC50YWdzIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAuaXRlbS1yYXRpbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2FhNmMzOTtcclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uZmlsdGVycy10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IC5zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWdyb3c6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wgLmZpbHRlcnMtYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDZweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiBpbml0aWFsO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wb2xsLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hZGRlZEJ5VGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYWRkZWRCeURhdGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hZGRlZEJ5SW1nIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubmV3SWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5tZXNzYWdlIC5zbGlkZXIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWVzc2FnZSAuc2xpZGVyIC5iZ1NpemVDb250YWluIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1zaGFkb3c6IHdoaXRlIDBweCAwcHggMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm1lc3NhZ2UgLnJlYWN0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ubWVzc2FnZSAudGFncy13cmFwcGVyIC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciAudGFncyAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2FhNmMzOTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/feed/feed.page.ts":
/*!***********************************!*\
  !*** ./src/app/feed/feed.page.ts ***!
  \***********************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reaction-list-modal/reaction-list-modal.page */ "./src/app/reaction-list-modal/reaction-list-modal.page.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");













let FeedPage = class FeedPage {
    constructor(dataProvider, navCtrl, modalCtrl, firestore, alertCtrl, routerOutlet, loadingProvider, actionSheet, route, router, afAuth, localNotifications, fcm, plt) {
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
        this.localNotifications = localNotifications;
        this.fcm = fcm;
        this.plt = plt;
        this.pushes = [];
        this.notifications = [];
        this.posts = [];
        this.memberofGroups = [];
        this.maxNoOfPosts = 1000;
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: false
        };
        this.plt.ready()
            .then(() => {
            this.fcm.onNotification().subscribe(data => {
                if (data.wasTapped) {
                    console.log("Received in background");
                }
                else {
                    console.log("Received in foreground");
                }
                ;
            });
            this.fcm.onTokenRefresh().subscribe(token => {
                // Register your new token in your back-end if you want
                // backend.registerToken(token);
                console.log('token', token);
            });
        });
    }
    subscribeToTopic() {
        this.fcm.subscribeToTopic('enappd');
    }
    getToken() {
        this.fcm.getToken().then(token => {
            // Register your new token in your back-end if you want
            // backend.registerToken(token);
        });
    }
    unsubscribeFromTopic() {
        this.fcm.unsubscribeFromTopic('enappd');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.loggedInUserId = firebase__WEBPACK_IMPORTED_MODULE_10__["auth"]().currentUser.uid;
        // Get Posts
        this.dataProvider.getCurrentUser().get().subscribe((user) => {
            this.notifications = user.data().notifications;
            this.loggedInUser = user.data();
            this.getFeedData();
        });
    }
    getFeedData() {
        this.firstDataSet = this.firestore.collection('posts').ref
            .where('groupId', 'in', this.loggedInUser.groups)
            .orderBy('date', 'desc')
            .limit(5);
        this.firstDataSet.get().then((po) => {
            this.lastDataSet = po.docs[po.docs.length - 1];
            this.posts = [];
            this.loadEachPostData(po);
        });
    }
    addOrUpdatePost(post) {
        if (!this.posts) {
            this.posts = [post];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].key == post.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.posts[index] = post;
            }
            else {
                this.posts.push(post);
            }
        }
    }
    // Add or update conversaion for real-time sync of unreadMessagesCount.
    addOrUpdateConversation(conversation) {
        if (!this.conversationList) {
            this.conversationList = [conversation];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.conversationList.length; i++) {
                if (this.conversationList[i].$key == conversation.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.conversationList[index] = conversation;
            }
            else {
                this.conversationList.push(conversation);
            }
        }
        this.computeUnreadMessagesCount();
    }
    // Compute all conversation's unreadMessages.
    computeUnreadMessagesCount() {
        this.unreadMessagesCount = 0;
        if (this.conversationList) {
            for (let i = 0; i < this.conversationList.length; i++) {
                this.unreadMessagesCount += this.conversationList[i].messages.length - this.conversationsInfo[i].messagesRead;
                if (this.unreadMessagesCount == 0) {
                    this.unreadMessagesCount = null;
                }
            }
        }
    }
    getUnreadMessagesCount() {
        if (this.unreadMessagesCount) {
            if (this.unreadMessagesCount > 0) {
                return this.unreadMessagesCount;
            }
        }
        return null;
    }
    showGroupOptions() {
        const action = this.actionSheet.create({
            header: 'Create a new ...',
            backdropDismiss: true,
            mode: 'md',
            cssClass: 'GroupAction',
            buttons: [{
                    text: 'Post',
                    icon: 'chatbubbles-outline',
                    cssClass: 'actionicon',
                    handler: () => {
                        this.newPost();
                    }
                }, {
                    text: 'Resource',
                    icon: 'document-outline',
                    handler: () => {
                        this.newResource();
                    }
                }, {
                    text: 'Poll',
                    icon: 'podium-outline',
                    handler: () => {
                        this.newPoll();
                    }
                }, {
                    text: 'Event',
                    icon: 'calendar-outline',
                    cssClass: 'cancelAction',
                    handler: () => {
                        this.newEvent();
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }]
        }).then(r => r.present());
    }
    showPostOptions(post) {
        const action = this.actionSheet.create({
            header: 'Post options',
            backdropDismiss: true,
            mode: 'md',
            cssClass: 'GroupAction',
            buttons: this.createPostOptionButtons(post)
        }).then(r => r.present());
    }
    newPoll() {
        this.router.navigateByUrl('/new-poll/' + this.groupId);
    }
    newPost() {
        this.router.navigateByUrl('/new-post/' + this.groupId);
    }
    newResource() {
        this.router.navigateByUrl('/new-resource/' + this.groupId);
    }
    newEvent() {
        this.router.navigateByUrl('/new-event/' + this.groupId);
    }
    submitReactionPost(post, reactionType) {
        switch (reactionType) {
            case 'Thanks': {
                if (!post.showSmiley) {
                    this.addPostReaction(post, reactionType);
                    post.showSmiley = true;
                    post.totalReactionCount += 1;
                }
                else {
                    this.removePostReaction(post, reactionType);
                    post.showSmiley = false;
                    post.totalReactionCount -= 1;
                }
                break;
            }
            case 'Hug': {
                if (!post.showHug) {
                    this.addPostReaction(post, reactionType);
                    post.showHug = true;
                    post.totalReactionCount += 1;
                }
                else {
                    this.removePostReaction(post, reactionType);
                    post.showHug = false;
                    post.totalReactionCount -= 1;
                }
                break;
            }
            case 'Checkin': {
                if (!post.showCheckin) {
                    this.addPostReaction(post, reactionType);
                    post.showCheckin = true;
                    post.totalReactionCount += 1;
                }
                else {
                    this.removePostReaction(post, reactionType);
                    post.showCheckin = false;
                    post.totalReactionCount -= 1;
                }
                break;
            }
            case 'Bookmark': {
                if (!post.showBookmark) {
                    this.addPostReaction(post, reactionType);
                    post.showBookmark = true;
                    post.totalReactionCount += 1;
                }
                else {
                    this.removePostReaction(post, reactionType);
                    post.showBookmark = false;
                    post.totalReactionCount -= 1;
                }
                break;
            }
        }
    }
    addPostReaction(post, reactionType) {
        // first find the post in the collection
        const postIndex = this.posts.findIndex(el => el.key === post.key);
        const p = this.posts[postIndex];
        this.dataProvider.getCurrentUser().get().subscribe((account) => {
            if (account) {
                let reaction = {
                    key: '',
                    dateCreated: new Date(),
                    addedByUser: {
                        addedByKey: this.dataProvider.getCurrentUserId(),
                        addedByUsername: account.data().username,
                        addedByImg: account.data().img
                    },
                    reactionType
                };
                if (postIndex >= 0) {
                    this.dataProvider.updatePostReactions(post.key, reaction);
                }
            }
        });
    }
    removePostReaction(post, reactionType) {
        // first find the post in the collection
        const postIndex = this.posts.findIndex(el => el.key === post.key);
        const p = this.posts[postIndex];
        const found = false;
        if (p.reactions !== undefined) {
            let values = Object.keys(p.reactions).map(function (e) {
                return p.reactions[e];
            });
            const reaction = post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                && el.reactionType === reactionType);
            console.log('reaction.key', reaction);
            this.dataProvider.removePostReaction(post.key, reaction.key);
        }
    }
    showReactionsList(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (post.totalReactionCount === 0) {
                return;
            }
            // first find the post in the collection
            const postIndex = this.posts.findIndex(el => el.key === post.key);
            const p = this.posts[postIndex];
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_9__["ReactionListModalPage"],
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
                componentProps: {
                    reactions: p.reactions
                }
            });
            return yield modal.present();
        });
    }
    viewPost(post) {
        this.router.navigateByUrl('post/' + post.key);
    }
    viewEvent(post) {
        this.router.navigateByUrl('post/' + post.key);
    }
    viewPoll(post) {
        this.router.navigateByUrl('post/' + post.key);
    }
    viewResource(post) {
        this.router.navigateByUrl('post/' + post.key);
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
    followPost(post) {
        if (!this.notifications) {
            this.notifications = [post.key];
        }
        else {
            this.notifications.push(post.key);
        }
        this.dataProvider.getUser(this.loggedInUserId).update({
            notifications: this.notifications
        }).then(() => {
            this.loadingProvider.showToast('You will be notified when there are new replies');
        });
    }
    unFollowPost(post) {
        const index = this.notifications.indexOf(post.key, 0);
        if (index > -1) {
            this.notifications.splice(index, 1);
        }
        this.dataProvider.getUser(this.loggedInUserId).update({
            notifications: this.notifications
        }).then(() => {
            this.loadingProvider.showToast('You won\'t get notifications for this post');
        });
    }
    reportPost(post) {
        this.dataProvider.addReports(this.loggedInUserId, post).then(() => {
            this.loadingProvider.showToast('Thank you for reporting the post.');
        });
    }
    deletePost(post) {
        this.alertCtrl.create({
            header: 'Delete Post',
            message: 'Are you sure you want to delete this post?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Yes',
                    handler: data => {
                        this.firestore.doc('posts/' + post.key).delete();
                    }
                }
            ]
        }).then(r => r.present());
    }
    createPostOptionButtons(post) {
        let buttons = [];
        let cancelButton = {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
                console.log('Cancel clicked');
            }
        };
        let reportButton = {
            text: 'Report Post',
            icon: 'flag-outline',
            handler: () => {
                this.reportPost(post);
            }
        };
        let notificationButton = {};
        if (post.addedByUser.addedByKey === this.loggedInUserId) {
            const deletePostButton = {
                text: 'Delete Post',
                icon: 'trash-outline',
                cssClass: 'actionicon',
                handler: () => {
                    this.deletePost(post);
                }
            };
            buttons.push(deletePostButton);
        }
        else {
            if (this.notifications && this.notifications.some(el => el === post.key)) {
                notificationButton = {
                    text: 'Turn Off Notifications',
                    icon: 'notifications-off-outline',
                    cssClass: 'actionicon',
                    handler: () => {
                        this.unFollowPost(post);
                    }
                };
            }
            else {
                notificationButton = {
                    text: 'Turn On Notifications',
                    icon: 'notifications-outline',
                    cssClass: 'actionicon',
                    handler: () => {
                        this.followPost(post);
                    }
                };
            }
            buttons.push(notificationButton);
        }
        buttons.push(reportButton);
        buttons.push(cancelButton);
        return buttons;
    }
    loadData(event) {
        if (this.posts.length > this.maxNoOfPosts) {
            event.target.disabled = true;
        }
        else {
            if (this.lastDataSet) {
                this.nextDataSet = this.firestore.collection('posts').ref
                    .where('groupId', 'in', this.loggedInUser.groups)
                    .orderBy('date', 'desc')
                    .startAfter(this.lastDataSet).limit(5);
                this.nextDataSet.onSnapshot((po) => {
                    this.lastDataSet = po.docs[po.docs.length - 1];
                    console.log('po.docs.length', po.docs.length);
                    if (po.docs.length > 0) {
                        this.loadEachPostData(po);
                    }
                    event.target.complete();
                });
            }
            else {
                event.target.complete();
            }
        }
    }
    loadEachPostData(po) {
        po.forEach(p => {
            let post;
            post = p.data();
            post.key = p.id;
            const startDate = new Date(post.date);
            // Do your operations
            const endDate = new Date();
            const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
            if (seconds > 120) {
                post.showNewIcon = false;
            }
            else {
                post.showNewIcon = true;
            }
            if (post.type === 'poll') {
                const today = new Date();
                const de = post.data.dateEnding.toDate();
                if (post.de < today) {
                    post.pollClosed = true;
                }
                else {
                    post.pollClosed = false;
                }
            }
            // get reactions list
            this.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe((reactions) => {
                post.reactions = [];
                reactions.forEach(element => {
                    let reaction = element.payload.doc.data();
                    reaction.key = element.payload.doc.id;
                    post.reactions.push(reaction);
                });
                // Check for Thanks
                if (reactions) {
                    let foundSmiley = false;
                    if (post.reactions !== undefined) {
                        foundSmiley = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                            && el.reactionType === 'Thanks');
                    }
                    if (foundSmiley) {
                        post.showSmiley = true;
                    }
                    else {
                        post.showSmiley = false;
                    }
                    // Check for Hugs
                    let foundHug = false;
                    if (post.reactions !== undefined) {
                        foundHug = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                            && el.reactionType === 'Hug');
                    }
                    if (foundHug) {
                        post.showHug = true;
                    }
                    else {
                        post.showHug = false;
                    }
                    // Check for Checkin
                    let foundCheckin = false;
                    if (post.reactions !== undefined) {
                        foundCheckin = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                            && el.reactionType === 'Checkin');
                    }
                    if (foundCheckin) {
                        post.showCheckin = true;
                    }
                    else {
                        post.showCheckin = false;
                    }
                    // Check for Bookmark
                    let foundBookmark = false;
                    if (post.reactions !== undefined) {
                        foundBookmark = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                            && el.reactionType === 'Bookmark');
                    }
                    if (foundBookmark) {
                        post.showBookmark = true;
                    }
                    else {
                        post.showBookmark = false;
                    }
                }
            });
            post.postTags = post.postTags.filter(x => x.isChecked !== false);
            this.addOrUpdatePost(post);
        });
    }
    doRefresh(event) {
        this.getFeedData();
        event.target.complete();
    }
};
FeedPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], FeedPage.prototype, "infiniteScroll", void 0);
FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.page.scss */ "./src/app/feed/feed.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], FeedPage);



/***/ })

}]);
//# sourceMappingURL=feed-feed-module-es2015.js.map