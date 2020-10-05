(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"], {
    /***/
    "WrHT":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WrHT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"filters-toolbar\">\r\n    <ion-row class=\"searchbar-row\" *ngIf=\"!searchMode\" align-items-center>\r\n    <ion-col>\r\n        <ion-searchbar mode=\"ios\" (ionFocus)=\"onFocus($event)\" class=\"searchbar\" placeholder=\"Search...\"></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col class=\"call-to-action-col\">\r\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" routerLink=\"/messages\">\r\n          <ion-icon slot=\"icon-only\" name=\"notifications-outline\" ></ion-icon>\r\n          <ion-badge *ngIf=\"getUnreadMessagesCount() != null\">{{getUnreadMessagesCount()}}</ion-badge>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"call-to-action-col\">\r\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showGroupOptions()\">\r\n          <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"searchbar-row\" *ngIf=\"searchMode\" align-items-center>\r\n      <ion-col>\r\n          <ion-searchbar mode=\"ios\" debounce=\"1000\" (ionChange)=\"seachFeed($event)\" [(ngModel)]=\"searchTerm\" (ionFocus)=\"onFocus($event)\" class=\"searchbar\" placeholder=\"Search...\"></ion-searchbar>\r\n        </ion-col>\r\n        <ion-col class=\"call-to-action-col\">\r\n          <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn ion-text-capitalize\" (click)=\"onCancel($event)\">\r\n            Cancel\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"!searchMode\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n     <!-- Show Posts -->\r\n     <div *ngIf=\"posts && posts.length > 0\" >\r\n     <div class=\"listing-item\" *ngFor=\"let item of posts\" >\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-row>\r\n            <ion-col size=10>\r\n           <ion-card-subtitle class=\"addedBy\">\r\n            <img class=\"addedByImg\" (click)=\"viewUser(item.addedByUser.addedByKey)\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n             <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n              <br/>\r\n             <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\r\n            <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\r\n          </ion-card-subtitle>\r\n        </ion-col>\r\n        <ion-col size=2>\r\n          <ion-buttons>\r\n            <ion-button (click)=\"showPostOptions(item)\">\r\n              <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        </ion-row>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\r\n          <div>\r\n            <div>\r\n              <ion-slides class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\r\n              <ion-slide *ngFor=\"let s of item.postMedia\">\r\n                <div class=\"bgSizeContain\" \r\n                [ngStyle]=\"{'background-image':'url('+s+')'}\">\r\n              </div>\r\n              </ion-slide>\r\n            </ion-slides>\r\n            </div>\r\n          <ion-label  *ngIf=\"!item.showMore\">\r\n            <span (click)=\"viewPost(item)\"><b>{{item.title}}.</b> {{trimString(item.data.message, 100)}}</span> \r\n            <a class=\"show-more\" (click)=\"item.showMore = !item.showMore\">...Show more</a><br/></ion-label>\r\n          <ion-label (click)=\"viewPost(item)\"  *ngIf=\"item.showMore\"><b>{{item.title}}.</b> {{item.data.message}} <br/></ion-label>\r\n        </div>\r\n          <div class=\"tags-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n              <span (click)=\"searchTag(tag, item)\" class=\"item-rating\">#{{tag.val}}</span>\r\n            </div>\r\n          </ion-row>\r\n          </div>\r\n          <div class=\"reactions\">\r\n          <ion-row >\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\r\n               <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n               <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=2></ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"showReactionsList(item)\">\r\n              <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n            </ion-button>\r\n          </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button>\r\n              <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n            </ion-button>\r\n          </ion-buttons> \r\n            </ion-col>\r\n          </ion-row>\r\n          </div>\r\n        </ion-card-content>\r\n\r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\r\n          <div (click)=\"viewPost(item)\" *ngIf=\"!item.showMore\">\r\n          <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\r\n          <a class=\"show-more\" (click)=\"item.showMore = !item.showMore\">...Show more</a>\r\n          </div>\r\n          <div (click)=\"viewPost(item)\" *ngIf=\"item.showMore\">\r\n            <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\r\n              {{item.data.address}}<br/><br/>\r\n              {{item.data.link}}<br/>\r\n              {{item.data.message}}\r\n            </div>\r\n          <div class=\"tags-wrapper\">\r\n            <ion-row>\r\n              <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n                <span class=\"item-rating\">#{{tag.val}}</span>\r\n              </div>\r\n            </ion-row>\r\n            </div>\r\n          <div class=\"reactions\">\r\n            <ion-row>\r\n              <ion-col size=3>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n                  <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                  <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=3>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionPost(item, 'Checkin')\">\r\n                  <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                  <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=2></ion-col>\r\n              <ion-col size=2>\r\n                      <ion-buttons>\r\n                        <ion-button (click)=\"showReactionsList(item)\">\r\n                      <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                    </ion-button>\r\n                  </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=2>\r\n                      <ion-buttons>\r\n                        <ion-button>\r\n                          <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                        </ion-button>\r\n                  </ion-buttons> \r\n              </ion-col>\r\n             </ion-row>\r\n         </div>\r\n        </ion-card-content>\r\n\r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" >\r\n          <div (click)=\"viewPost(item)\">\r\n          <b>{{item.title}}.</b><br/>\r\n          <ion-row *ngFor=\"let pollOption of item.data.pollOptions\">\r\n            <ion-col >\r\n               <div><ion-icon class=\"poll-icon\" name=\"checkbox-outline\"></ion-icon> <span>{{pollOption.name}}</span></div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <div class=\"tags-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n              <span class=\"item-rating\">#{{tag.val}}</span>\r\n            </div>\r\n          </ion-row>\r\n          </div>\r\n\r\n                <ion-row class=\"info-row\" >\r\n           <ion-col size=\"8\">\r\n                     <span class=\"text\" *ngIf=\"!item.pollClosed\">Poll ends {{item.data.dateEnding.toDate() | DateFormat}}</span> \r\n                     <span class=\"text\" *ngIf=\"item.pollClosed\">Poll closed</span> \r\n                  </ion-col>\r\n            <ion-col size=\"1\">\r\n            </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\r\n                  </ion-col>\r\n                </ion-row>\r\n        </ion-card-content>\r\n        \r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\">\r\n          <div (click)=\"viewPost(item)\">\r\n          <b>{{item.title}}.</b><br/>\r\n          <div *ngIf=\"item?.data.type == 'contact'\">\r\n            {{item.data.name}}<br/>\r\n            {{item.data.address}}<br/><br/>\r\n            {{item.data.email}}<br/>\r\n            {{item.data.phones}}<br/>\r\n          </div>\r\n          <div *ngIf=\"item?.data.type == 'upload'\">\r\n            <div *ngIf=\"item.data.uploadtype == 'location'\" [innerHtml]=\"item.data.url\"></div>\r\n            <div *ngIf=\"item.data.uploadtype == 'contact'\">\r\n            {{item.data.name}}<br/>\r\n            {{item.data.address}}<br/>\r\n            {{item.data.phones}}<br/>\r\n            {{item.data.email}}<br/>\r\n            </div>\r\n            <div *ngIf=\"item.data.uploadtype == 'image'\">\r\n            <img src=\"{{item.data.resolvedurl}}\" />\r\n            </div>\r\n            <div *ngIf=\"item.data.uploadtype == 'video'\">\r\n              <video controls width=\"100%\" src=\"{{item.data.resolvedurl}}\" ></video>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"item?.data.type == 'weblink'\">\r\n          {{item.data.metatitle}}<br/>\r\n          <img [src]=\"item.data.metaicon\"/> \r\n          {{item.data.metadescription}}<br/><br/>\r\n          <a href=\"{{item.data.metasite}}\">{{item.data.metasite}}</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"tags-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n              <span class=\"item-rating\">#{{tag.val}}</span>\r\n            </div>\r\n          </ion-row>\r\n          </div>\r\n          <div class=\"reactions\">\r\n             <ion-row>\r\n              <ion-col size=3>\r\n                <ion-buttons>\r\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col size=3>\r\n                   <ion-buttons>\r\n                   <ion-button (click)=\"submitReactionPost(item, 'Bookmark')\">\r\n                  <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                  <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                   </ion-button>\r\n                   </ion-buttons> \r\n              </ion-col>\r\n            <ion-col size=2></ion-col>\r\n            <ion-col size=2>\r\n                   <ion-buttons>\r\n                   <ion-button (click)=\"showReactionsList(item)\">\r\n                   <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                 </ion-button>\r\n                 </ion-buttons> \r\n                 </ion-col>\r\n                 <ion-col size=2>\r\n                   <ion-buttons>\r\n                   <ion-button>\r\n                    <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                  </ion-button>\r\n                 </ion-buttons> \r\n                 </ion-col>\r\n            </ion-row>\r\n          \r\n          </div>\r\n        </ion-card-content>\r\n        <!-- Dont touch the tags below this line-->\r\n      </ion-card>\r\n     </div>\r\n     </div>\r\n     <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content\r\n        loadingSpinner=\"bubbles\"\r\n        loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </div>\r\n  <div *ngIf=\"searchMode\">\r\n    <div *ngIf=\"searchPosts && searchPosts.length > 0\" >\r\n      <div class=\"listing-item\" *ngFor=\"let item of searchPosts\" >\r\n       <ion-card>\r\n         <ion-card-header>\r\n           <ion-row>\r\n             <ion-col size=10>\r\n            <ion-card-subtitle class=\"searchaddedBy\">\r\n             <img class=\"searchaddedByImg\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n              <p><a class=\"searchaddedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a>\r\n              <span class=\"searchaddedByDate\">posted {{item.date | DateFormat}}</span><br/>\r\n             <a (click)=\"viewGroup(item.groupId)\" class=\"searchaddedByTitle\">in <b>{{item.groupName}}</b></a></p>\r\n           </ion-card-subtitle>\r\n         </ion-col>\r\n         <ion-col size=2>\r\n           <ion-badge class=\"badge\" *ngIf=\"item.type === 'general'\" color=\"secondary\">Post</ion-badge>\r\n          <ion-badge class=\"badge\" *ngIf=\"item.type === 'event'\" color=\"warning\">Event</ion-badge>\r\n          <ion-badge class=\"badge\" *ngIf=\"item.type === 'poll'\" color=\"medium\">Poll</ion-badge>\r\n          <ion-badge class=\"badge\" *ngIf=\"item.type === 'resource'\" color=\"dark\">Resource</ion-badge> \r\n       </ion-col>\r\n         </ion-row>\r\n         </ion-card-header>\r\n         <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\r\n           <div>\r\n           <ion-label>\r\n             <span (click)=\"viewPost(item)\"><b>{{item.title}}.</b> {{trimString(item.data.message, 100)}}</span> \r\n          </ion-label>\r\n         </div>\r\n           <div class=\"tags-wrapper\">\r\n           <ion-row>\r\n             <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n               <span class=\"item-rating\">#{{tag.val}}</span>\r\n             </div>\r\n           </ion-row>\r\n           </div>\r\n         </ion-card-content>\r\n \r\n         <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\r\n           <div (click)=\"viewPost(item)\" *ngIf=\"!item.showMore\">\r\n           <b>{{item.title}}.</b> {{item.data.eventDate}} at {{item.data.eventTime}}\r\n           </div>\r\n           <div class=\"tags-wrapper\">\r\n             <ion-row>\r\n               <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n                 <span class=\"item-rating\">#{{tag.val}}</span>\r\n               </div>\r\n             </ion-row>\r\n             </div>\r\n         </ion-card-content>\r\n \r\n         <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" >\r\n           <div (click)=\"viewPost(item)\">\r\n           <b>{{item.title}}.</b><br/>\r\n         </div>\r\n         <div class=\"tags-wrapper\">\r\n           <ion-row>\r\n             <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n               <span class=\"item-rating\">#{{tag.val}}</span>\r\n             </div>\r\n           </ion-row>\r\n           </div>\r\n         </ion-card-content>\r\n         \r\n         <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\">\r\n           <div (click)=\"viewPost(item)\">\r\n           <b>{{item.title}}.</b><br/>\r\n           <div *ngIf=\"item?.data.type == 'weblink'\">\r\n           {{item.data.metatitle}}<br/>\r\n           </div>\r\n         </div>\r\n         <div class=\"tags-wrapper\">\r\n           <ion-row>\r\n             <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n               <span class=\"item-rating\">#{{tag.val}}</span>\r\n             </div>\r\n           </ion-row>\r\n           </div>\r\n         </ion-card-content>\r\n         <!-- Dont touch the tags below this line-->\r\n       </ion-card>\r\n      </div>\r\n      </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "XfKD":
    /*!*************************************!*\
      !*** ./src/app/feed/feed.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function XfKD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\nion-searchbar {\n  --border-radius: 30px;\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row .searchbar {\n  padding: 0px;\n  height: 30px;\n  border-radius: 90px;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.poll-icon {\n  display: inline-block;\n  vertical-align: middle;\n  padding-right: 5px;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-size: 12px;\n}\n\n.addedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n}\n\n.addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n  font-size: 12px;\n}\n\n.addedByImg {\n  width: 45px;\n  height: 45px;\n  float: left;\n  vertical-align: middle;\n  border-radius: 50%;\n}\n\n.badge {\n  margin-top: 20px;\n  padding: 5px;\n}\n\n.searchaddedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n  font-size: 12px;\n}\n\n.searchaddedByDate {\n  margin-left: 10px;\n  font-style: italic;\n  font-size: 12px;\n}\n\n.searchaddedByImg {\n  width: 35px;\n  height: 35px;\n  float: left;\n  vertical-align: middle;\n  border-radius: 50%;\n}\n\n.newIcon {\n  margin-left: 10px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .show-more {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .slider {\n  margin-bottom: 5px;\n}\n\n.message .slider .bgSizeContain {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100%;\n  width: 100%;\n  height: 200px;\n  text-shadow: white 0px 0px 2px;\n  font-size: 16px;\n  border-radius: 10px;\n}\n\n.message .reactions {\n  margin-bottom: 0px;\n  margin-left: -10px;\n}\n\n.message .tags-wrapper {\n  padding-top: 5px;\n}\n\n.message .tags-wrapper .tags {\n  padding-right: 5px;\n}\n\n.message .tags-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #aa6c39;\n}\n\nion-slides {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLHVDQUFBO0VBQ0Esd0NBQUE7QUFDTDs7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQ0FBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUk7RUFDRSw4QkFBQTtBQUFOOztBQUVNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFSOztBQU9NO0VBQ0UsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUFOUjs7QUFRUTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUFSVjs7QUFlQTtFQUNFLHdDQUFBO0FBWkY7O0FBZUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBWkY7O0FBZUM7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFaRjs7QUFlQztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQVpIOztBQWNDO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBWEg7O0FBY0M7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVhGOztBQWNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVhKOztBQWVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBWko7O0FBZUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBWko7O0FBZUU7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVpIOztBQWVDO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVpMOztBQWVFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFaSjs7QUFjRTtFQUNFLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVhKOztBQWNJO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBWk47O0FBY0k7RUFDRSxrQkFBQTtBQVpOOztBQWFNO0VBQ0UsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFHQSxtQkFBQTtBQVhSOztBQWVJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQWJOOztBQWVJO0VBQ0UsZ0JBQUE7QUFiTjs7QUFlTTtFQUNFLGtCQUFBO0FBYlI7O0FBZU07RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFiUjs7QUFtQkU7RUFDRSxZQUFBO0FBaEJKIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcbiAgICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgfVxyXG5cclxuLmZpbHRlcnMtdG9vbGJhciB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC8vIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgICAuc2VhcmNoYmFyLXJvdyB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuICBcclxuICAgICAgLnNlYXJjaGJhciB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC8vIExlYXJuIG1vcmUgYWJvdXQgQ1NTIGNvbnRhaW4gcHJvcGVydHkgaGVyZTogaHR0cHM6Ly90ZXJtdmFkZXIuZ2l0aHViLmlvL2Nzcy1jb250YWluL1xyXG4gICAgICAgIC8vICBjb250YWluOiBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xyXG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBcclxuICAgICAgICAuZmlsdGVycy1idG4ge1xyXG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XHJcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA2cHg7XHJcbiAgXHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxyXG4gICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgICBcclxuLmxpc3RpbmctaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuIH1cclxuXHJcbi5pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuIH1cclxuIFxyXG4gLnBvbGwtaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gfVxyXG5cclxuIC50ZXh0e1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiAuYWRkZWRCeVRpdGxlIHtcclxuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAvLyAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuIH1cclxuIC5hZGRlZEJ5RGF0ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbi5hZGRlZEJ5SW1nIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaGFkZGVkQnlUaXRsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgIC8vICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICAuc2VhcmNoYWRkZWRCeURhdGUge1xyXG4gICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiAgIH1cclxuICAgXHJcbiAuc2VhcmNoYWRkZWRCeUltZyB7XHJcbiAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICB9XHJcblxyXG4gIC5uZXdJY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIFxyXG5cclxuICAgIC5zaG93LW1vcmUge1xyXG4gICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAuYmdTaXplQ29udGFpbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHRleHQtc2hhZG93OiB3aGl0ZSAwcHggMHB4IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZWFjdGlvbnMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIH0gXHJcbiAgICAudGFncy13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICBcclxuICAgICAgLnRhZ3Mge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgIC5pdGVtLXJhdGluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjYWE2YzM5O1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuIl19 */";
      /***/
    },

    /***/
    "jWta":
    /*!***********************************!*\
      !*** ./src/app/feed/feed.page.ts ***!
      \***********************************/

    /*! exports provided: FeedPage */

    /***/
    function jWta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPage", function () {
        return FeedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./feed.page.html */
      "WrHT");
      /* harmony import */


      var _feed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./feed.page.scss */
      "XfKD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      "Bg0J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/auth */
      "KDZV");
      /* harmony import */


      var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../reaction-list-modal/reaction-list-modal.page */
      "7ONW");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/fcm/ngx */
      "XqOP");

      var FeedPage = /*#__PURE__*/function () {
        function FeedPage(dataProvider, navCtrl, modalCtrl, firestore, alertCtrl, routerOutlet, loadingProvider, actionSheet, route, router, afAuth, localNotifications, fcm, plt) {
          var _this = this;

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
          this.localNotifications = localNotifications;
          this.fcm = fcm;
          this.plt = plt;
          this.pushes = [];
          this.userNotifications = [];
          this.userReactions = [];
          this.searchMode = false;
          this.posts = [];
          this.searchPosts = [];
          this.memberofGroups = [];
          this.maxNoOfPosts = 1000;
          this.ALOGOLIA_APP_ID = 'DNTXC08EBF';
          this.ALGOLIA_API_KEY = '4768de6e8b67959c064c0bf89443d449';
          this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: false
          };
          this.plt.ready().then(function () {
            console.log('platform ready in Feed page');

            _this.fcm.onNotification().subscribe(function (data) {
              if (data.wasTapped) {
                console.log("Received in background");
              } else {
                console.log("Received in foreground");
              }

              ;
            });

            _this.fcm.onTokenRefresh().subscribe(function (token) {
              // Register your new token in your back-end if you want
              // backend.registerToken(token);
              console.log('fcm token', token);
            });
          }); // this.client = algoliasearch(this.ALOGOLIA_APP_ID, this.ALGOLIA_API_KEY, {protocol: 'https'});
          // this.index = this.client.initIndex('posts');
        }

        _createClass(FeedPage, [{
          key: "subscribeToTopic",
          value: function subscribeToTopic() {
            this.fcm.subscribeToTopic('enappd');
          }
        }, {
          key: "getToken",
          value: function getToken() {
            this.fcm.getToken().then(function (token) {// Register your new token in your back-end if you want
              // backend.registerToken(token);
            });
          }
        }, {
          key: "unsubscribeFromTopic",
          value: function unsubscribeFromTopic() {
            this.fcm.unsubscribeFromTopic('enappd');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.loggedInUserId = firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid; // Get Posts

            this.dataProvider.getCurrentUser().get().subscribe(function (user) {
              _this2.userReactions = user.data().userReactions;
              _this2.userNotifications = user.data().userNotifications;
              _this2.loggedInUser = user.data();

              _this2.getFeedData();
            });
          }
        }, {
          key: "getFeedData",
          value: function getFeedData() {
            var _this3 = this;

            this.firstDataSet = this.firestore.collection('posts').ref.where('groupId', 'in', this.loggedInUser.groups).orderBy('date', 'desc').limit(5);
            this.firstDataSet.get().then(function (po) {
              _this3.lastDataSet = po.docs[po.docs.length - 1];
              _this3.posts = [];

              _this3.loadEachPostData(po);
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
            var _this4 = this;

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
                  _this4.newPost();
                }
              }, {
                text: 'Resource',
                icon: 'document-outline',
                handler: function handler() {
                  _this4.newResource();
                }
              }, {
                text: 'Poll',
                icon: 'podium-outline',
                handler: function handler() {
                  _this4.newPoll();
                }
              }, {
                text: 'Event',
                icon: 'calendar-outline',
                cssClass: 'cancelAction',
                handler: function handler() {
                  _this4.newEvent();
                }
              }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: function handler() {
                  console.log('Cancel clicked');
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "showPostOptions",
          value: function showPostOptions(post) {
            var action = this.actionSheet.create({
              header: 'Post options',
              backdropDismiss: true,
              mode: 'md',
              cssClass: 'GroupAction',
              buttons: this.createPostOptionButtons(post)
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
            var _this5 = this;

            // first find the post in the collection
            var postIndex = this.posts.findIndex(function (el) {
              return el.key === post.key;
            });
            var p = this.posts[postIndex];
            var r = p.reactions.find(function (el) {
              return el.addedByUser.addedByKey === _this5.dataProvider.getCurrentUserId();
            });

            if (!r) {
              console.log('here:', r);
              var react = {
                dateCreated: new Date(),
                addedByUser: {
                  addedByKey: this.dataProvider.getCurrentUserId(),
                  addedByUsername: this.loggedInUser.username,
                  addedByImg: this.loggedInUser.img
                },
                reactionType: [reactionType]
              };
              this.dataProvider.addPostReactions(post.key, react).then(function () {
                // Update user notifications.
                if (!_this5.userNotifications.some(function (p) {
                  return p !== _this5.postId;
                })) {
                  _this5.userNotifications.push(_this5.postId);

                  _this5.dataProvider.getUser(_this5.loggedInUserId).update({
                    userNotifications: _this5.userNotifications
                  });
                } // Update user activity.


                if (!_this5.userReactions.some(function (p) {
                  return p !== _this5.postId;
                })) {
                  _this5.userReactions.push(_this5.postId);

                  _this5.dataProvider.getUser(_this5.loggedInUserId).update({
                    userReactions: _this5.userReactions
                  });
                }
              });
            } else {
              r.reactionType.push(reactionType);
              this.dataProvider.updatePostReactions(post.key, r);
            }
          }
        }, {
          key: "removePostReaction",
          value: function removePostReaction(post, reactionType) {
            var _this6 = this;

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
                return el.addedByUser.addedByKey === _this6.dataProvider.getCurrentUserId();
              });

              if (reaction.reactionType.length === 1 && reaction.reactionType.some(function (e) {
                return e.reactionType === reactionType;
              })) {
                this.dataProvider.removePostReaction(post.key, reaction.key);
              } else {
                reaction.reactionType = reaction.reactionType.filter(function (x) {
                  return x.reactionType !== reactionType;
                });
                this.dataProvider.updatePostReactions(post.key, reaction);
              }
            }
          }
        }, {
          key: "showReactionsList",
          value: function showReactionsList(post) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                        component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_11__["ReactionListModalPage"],
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
          key: "viewUser",
          value: function viewUser(userId) {
            this.router.navigateByUrl('/profile/' + userId);
          }
        }, {
          key: "viewGroup",
          value: function viewGroup(groupId) {
            this.router.navigateByUrl('/group/' + groupId);
          }
        }, {
          key: "followPost",
          value: function followPost(post) {
            var _this7 = this;

            if (!this.userNotifications) {
              this.userNotifications = [post.key];
            } else {
              this.userNotifications.push(post.key);
            }

            this.dataProvider.getUser(this.loggedInUserId).update({
              userNotifications: this.userNotifications
            }).then(function () {
              _this7.loadingProvider.showToast('You will be notified when there are new replies');
            });
          }
        }, {
          key: "unFollowPost",
          value: function unFollowPost(post) {
            var _this8 = this;

            var index = this.userNotifications.indexOf(post.key, 0);

            if (index > -1) {
              this.userNotifications.splice(index, 1);
            }

            this.dataProvider.getUser(this.loggedInUserId).update({
              userNotifications: this.userNotifications
            }).then(function () {
              _this8.loadingProvider.showToast('You won\'t get notifications for this post');
            });
          }
        }, {
          key: "reportPost",
          value: function reportPost(post) {
            var _this9 = this;

            this.dataProvider.addReports(this.loggedInUserId, post).then(function () {
              _this9.loadingProvider.showToast('Thank you for reporting the post.');
            });
          }
        }, {
          key: "deletePost",
          value: function deletePost(post) {
            var _this10 = this;

            this.alertCtrl.create({
              header: 'Delete Post',
              message: 'Are you sure you want to delete this post?',
              buttons: [{
                text: 'Cancel'
              }, {
                text: 'Yes',
                handler: function handler(data) {
                  _this10.firestore.doc('posts/' + post.key)["delete"]();
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "createPostOptionButtons",
          value: function createPostOptionButtons(post) {
            var _this11 = this;

            var buttons = [];
            var cancelButton = {
              text: 'Cancel',
              icon: 'close',
              role: 'cancel',
              handler: function handler() {
                console.log('Cancel clicked');
              }
            };
            var reportButton = {
              text: 'Report Post',
              icon: 'flag-outline',
              handler: function handler() {
                _this11.reportPost(post);
              }
            };
            var notificationButton = {};

            if (post.addedByUser.addedByKey === this.loggedInUserId) {
              var deletePostButton = {
                text: 'Delete Post',
                icon: 'trash-outline',
                cssClass: 'actionicon',
                handler: function handler() {
                  _this11.deletePost(post);
                }
              };
              buttons.push(deletePostButton);
            } else {
              if (this.userNotifications && this.userNotifications.some(function (el) {
                return el === post.key;
              })) {
                notificationButton = {
                  text: 'Turn Off Notifications',
                  icon: 'notifications-off-outline',
                  cssClass: 'actionicon',
                  handler: function handler() {
                    _this11.unFollowPost(post);
                  }
                };
              } else {
                notificationButton = {
                  text: 'Turn On Notifications',
                  icon: 'notifications-outline',
                  cssClass: 'actionicon',
                  handler: function handler() {
                    _this11.followPost(post);
                  }
                };
              }

              buttons.push(notificationButton);
            }

            buttons.push(reportButton);
            buttons.push(cancelButton);
            return buttons;
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this12 = this;

            if (this.posts.length > this.maxNoOfPosts) {
              event.target.disabled = true;
            } else {
              if (this.lastDataSet) {
                this.nextDataSet = this.firestore.collection('posts').ref.where('groupId', 'in', this.loggedInUser.groups).orderBy('date', 'desc').startAfter(this.lastDataSet).limit(5);
                this.nextDataSet.onSnapshot(function (po) {
                  _this12.lastDataSet = po.docs[po.docs.length - 1];
                  console.log('po.docs.length', po.docs.length);

                  if (po.docs.length > 0) {
                    _this12.loadEachPostData(po);
                  }

                  event.target.complete();
                });
              } else {
                event.target.complete();
              }
            }
          }
        }, {
          key: "loadEachPostData",
          value: function loadEachPostData(po) {
            var _this13 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              post.showMore = false;
              var startDate = new Date(post.date); // Do your operations

              var endDate = new Date();
              var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

              if (seconds > 120) {
                post.showNewIcon = false;
              } else {
                post.showNewIcon = true;
              }

              if (post.type === 'poll') {
                var today = new Date();
                var de = post.data.dateEnding.toDate();

                if (post.de < today) {
                  post.pollClosed = true;
                } else {
                  post.pollClosed = false;
                }
              } // get reactions list


              _this13.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe(function (reactions) {
                post.reactions = [];
                reactions.forEach(function (element) {
                  var reaction = element.payload.doc.data();
                  reaction.key = element.payload.doc.id;
                  post.reactions.push(reaction);
                }); // Check for Thanks

                if (reactions) {
                  var foundSmiley = false;

                  if (post.reactions !== undefined) {
                    var r = post.reactions.find(function (el) {
                      return el.addedByUser.addedByKey === _this13.dataProvider.getCurrentUserId();
                    });
                    console.log('found reactions', r);
                    foundSmiley = r.reactionType.some(function (r) {
                      return r === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    post.showSmiley = true;
                  } else {
                    post.showSmiley = false;
                  } // Check for Hugs


                  var foundHug = false;

                  if (post.reactions !== undefined) {
                    foundHug = post.reactions.find(function (el) {
                      return el.addedByUser.addedByKey === _this13.dataProvider.getCurrentUserId();
                    }).reactionType.some(function (r) {
                      return r === 'Hug';
                    });
                  }

                  if (foundHug) {
                    post.showHug = true;
                  } else {
                    post.showHug = false;
                  } // Check for Checkin


                  var foundCheckin = false;

                  if (post.reactions !== undefined) {
                    foundCheckin = post.reactions.find(function (el) {
                      return el.addedByUser.addedByKey === _this13.dataProvider.getCurrentUserId();
                    }).reactionType.some(function (r) {
                      return r === 'Checkin';
                    });
                  }

                  if (foundCheckin) {
                    post.showCheckin = true;
                  } else {
                    post.showCheckin = false;
                  } // Check for Bookmark


                  var foundBookmark = false;

                  if (post.reactions !== undefined) {
                    foundBookmark = post.reactions.find(function (el) {
                      return el.addedByUser.addedByKey === _this13.dataProvider.getCurrentUserId();
                    }).reactionType.some(function (r) {
                      return r === 'Bookmark';
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

              _this13.addOrUpdatePost(post);
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.getFeedData();
            event.target.complete();
          }
        }, {
          key: "trimString",
          value: function trimString(string, length) {
            return string.length > length ? string.substring(0, length) + "..." : string;
          }
        }, {
          key: "onFocus",
          value: function onFocus(event) {
            if (!this.searchMode) {
              this.searchMode = true;
            }
          }
        }, {
          key: "onCancel",
          value: function onCancel(event) {
            this.searchMode = false;
            this.searchPosts = [];
            this.searchTerm = '';
          }
        }, {
          key: "seachFeed",
          value: function seachFeed(event) {
            // console.log('searching for ..', this.searchTerm );
            // this.index.search('', {
            //   query: this.searchTerm
            // }).then((data) => {
            //   this.searchPosts = data.hits;
            // });
            this.searchPosts = this.posts;
          }
        }, {
          key: "searchTag",
          value: function searchTag(tag, post) {
            this.searchMode = true;
            this.searchTerm = tag.val;
          }
        }]);

        return FeedPage;
      }();

      FeedPage.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"]
        }, {
          type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"]
        }, {
          type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__["FCM"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      FeedPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], {
            "static": true
          }]
        }]
      };
      FeedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed',
        template: _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__["FCM"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])], FeedPage);
      /***/
    },

    /***/
    "xQww":
    /*!*************************************!*\
      !*** ./src/app/feed/feed.module.ts ***!
      \*************************************/

    /*! exports provided: FeedPageModule */

    /***/
    function xQww(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPageModule", function () {
        return FeedPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");
      /* harmony import */


      var _feed_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./feed.page */
      "jWta");

      var routes = [{
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_8__["FeedPage"]
      }];

      var FeedPageModule = function FeedPageModule() {
        _classCallCheck(this, FeedPageModule);
      };

      FeedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_8__["FeedPage"]]
      })], FeedPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=feed-feed-module-es5.js.map