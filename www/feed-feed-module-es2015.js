(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"],{

/***/ "WrHT":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed/feed.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" *ngIf=\"!searchMode\" align-items-center>\n    <ion-col>\n        <ion-searchbar mode=\"ios\" (ionFocus)=\"onFocus($event)\" class=\"searchbar\" placeholder=\"Search...\"></ion-searchbar>\n      </ion-col>\n      <ion-col class=\"call-to-action-col\">\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" routerLink=\"/messages\">\n          <ion-icon slot=\"icon-only\" name=\"notifications-outline\" ></ion-icon>\n          <ion-badge *ngIf=\"getUnreadMessagesCount() != null\">{{getUnreadMessagesCount()}}</ion-badge>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"call-to-action-col\">\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showGroupOptions()\">\n          <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"searchbar-row\" *ngIf=\"searchMode\" align-items-center>\n      <ion-col>\n          <ion-searchbar mode=\"ios\" debounce=\"1000\" (ionChange)=\"seachFeed($event)\" [(ngModel)]=\"searchTerm\" (ionFocus)=\"onFocus($event)\" class=\"searchbar\" placeholder=\"Search...\"></ion-searchbar>\n        </ion-col>\n        <ion-col class=\"call-to-action-col\">\n          <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn ion-text-capitalize\" (click)=\"onCancel($event)\">\n            Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!searchMode\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n     <!-- Show Posts -->\n     <div *ngIf=\"posts && posts.length > 0\" >\n     <div class=\"listing-item\" *ngFor=\"let item of posts\" >\n      <ion-card>\n        <ion-card-header>\n          <ion-row>\n            <ion-col size=10>\n           <ion-card-subtitle class=\"addedBy\">\n            <img class=\"addedByImg\" (click)=\"viewUser(item.addedByUser.addedByKey)\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n             <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n              <br/>\n             <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n            <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n          </ion-card-subtitle>\n        </ion-col>\n        <ion-col size=2>\n          <ion-buttons>\n            <ion-button (click)=\"showPostOptions(item)\">\n              <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-col>\n        </ion-row>\n        </ion-card-header>\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\n          <div>\n            <div>\n              <video *ngIf=\"item.postMediaVideo\" controls preload=\"auto\" height=200px width=\"100%\" src=\"https://firebasestorage.googleapis.com/v0/b/firechat-8fb8c.appspot.com/o/videos%2Fcdv_photo_1604937924.MOV?alt=media&token=a757e495-8dc8-4540-84c9-33c7a6d50c9e\" ></video>\n              <ion-slides *ngIf=\"item.postMediaImages\" class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\n              <ion-slide *ngFor=\"let s of item.postMediaImages\">\n                <div class=\"bgSizeContain\" \n                [ngStyle]=\"{'background-image':'url('+s+')'}\">\n              </div>\n               </ion-slide>\n            </ion-slides>\n            </div>\n          <ion-label  *ngIf=\"!item.showMore\">\n            <span (click)=\"viewPost(item)\"><b>{{item.title}}.</b> {{trimString(item.data.message, 100)}}</span> \n            <a class=\"show-more\" (click)=\"item.showMore = !item.showMore\">...Show more</a><br/></ion-label>\n          <ion-label (click)=\"viewPost(item)\"  *ngIf=\"item.showMore\"><b>{{item.title}}.</b> {{item.data.message}} <br/></ion-label>\n        </div>\n          <div class=\"tags-wrapper\">\n          <ion-row>\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n              <span (click)=\"searchTag(tag, item)\" class=\"item-rating\">#{{tag.val}}</span>\n            </div>\n          </ion-row>\n          </div>\n          <div class=\"reactions\">\n          <ion-row >\n            <ion-col size=3>\n              <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col size=3>\n              <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\n               <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n               <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col size=2></ion-col>\n            <ion-col size=2>\n              <ion-buttons>\n                <ion-button (click)=\"showReactionsList(item)\">\n              <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\n            </ion-button>\n          </ion-buttons> \n            </ion-col>\n            <ion-col size=2>\n              <ion-buttons>\n                <ion-button>\n              <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n            </ion-button>\n          </ion-buttons> \n            </ion-col>\n          </ion-row>\n          </div>\n        </ion-card-content>\n\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\n          <div (click)=\"viewPost(item)\" *ngIf=\"!item.showMore\">\n          <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\n          <a class=\"show-more\" (click)=\"item.showMore = !item.showMore\">...Show more</a>\n          </div>\n          <div (click)=\"viewPost(item)\" *ngIf=\"item.showMore\">\n            <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\n              {{item.data.address}}<br/><br/>\n              {{item.data.link}}<br/>\n              {{item.data.message}}\n            </div>\n          <div class=\"tags-wrapper\">\n            <ion-row>\n              <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n                <span class=\"item-rating\">#{{tag.val}}</span>\n              </div>\n            </ion-row>\n            </div>\n          <div class=\"reactions\">\n            <ion-row>\n              <ion-col size=3>\n                <ion-buttons>\n                  <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n                  <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                  <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                </ion-button>\n                </ion-buttons> \n              </ion-col>\n              <ion-col size=3>\n                <ion-buttons>\n                  <ion-button (click)=\"submitReactionPost(item, 'Checkin')\">\n                  <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                  <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                </ion-button>\n                </ion-buttons> \n              </ion-col>\n              <ion-col size=2></ion-col>\n              <ion-col size=2>\n                      <ion-buttons>\n                        <ion-button (click)=\"showReactionsList(item)\">\n                      <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n                    </ion-button>\n                  </ion-buttons> \n              </ion-col>\n              <ion-col size=2>\n                      <ion-buttons>\n                        <ion-button>\n                          <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                        </ion-button>\n                  </ion-buttons> \n              </ion-col>\n             </ion-row>\n         </div>\n        </ion-card-content>\n\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" >\n          <div (click)=\"viewPost(item)\">\n          <b>{{item.title}}.</b><br/>\n          <ion-row *ngFor=\"let pollOption of item.data.pollOptions\">\n            <ion-col >\n               <div><ion-icon class=\"poll-icon\" name=\"checkbox-outline\"></ion-icon> <span>{{pollOption.name}}</span></div>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class=\"tags-wrapper\">\n          <ion-row>\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n              <span class=\"item-rating\">#{{tag.val}}</span>\n            </div>\n          </ion-row>\n          </div>\n\n                <ion-row class=\"info-row\" >\n           <ion-col size=\"8\">\n                     <span class=\"text\" *ngIf=\"!item.pollClosed\">Poll ends {{item.data.dateEnding.toDate() | DateFormat}}</span> \n                     <span class=\"text\" *ngIf=\"item.pollClosed\">Poll closed</span> \n                  </ion-col>\n            <ion-col size=\"1\">\n            </ion-col>\n                  <ion-col size=\"3\">\n                    <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\n                  </ion-col>\n                </ion-row>\n        </ion-card-content>\n        \n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\">\n          <div>\n          <b>{{item.title}}.</b><br/>\n          <div *ngIf=\"item?.data.type == 'contact'\">\n            {{item.data.name}} <a *ngIf=\"!item.showMore\" class=\"show-more\" (click)=\"item.showMore = !item.showMore\">...Show more</a>\n          <div (click)=\"viewPost(item)\" *ngIf=\"item.showMore\">\n            <div [innerHtml]=\"item.data.address\"></div><br/>\n            {{item.data.email}}<br/>\n            {{item.data.phones}}<br/>\n          </div>\n        </div>\n          <div *ngIf=\"item?.data.type == 'upload'\">\n            <div *ngIf=\"item.data.uploadtype == 'location'\" [innerHtml]=\"item.data.url\"></div>\n            <div *ngIf=\"item.data.uploadtype == 'contact'\">\n            {{item.data.name}}<br/>\n            {{item.data.address}}<br/>\n            {{item.data.phones}}<br/>\n            {{item.data.email}}<br/>\n            </div>\n            <div *ngIf=\"item.data.uploadtype == 'image'\">\n            <img src=\"{{item.data.resolvedurl}}\" />\n            </div>\n            <div *ngIf=\"item.data.uploadtype == 'video'\">\n              <video controls width=\"100%\" src=\"{{item.data.resolvedurl}}\" ></video>\n            </div>\n          </div>\n          <div *ngIf=\"item?.data.type == 'weblink'\">\n          {{item.data.metatitle}}<br/>\n          <img [src]=\"item.data.metaicon\"/> \n          {{item.data.metadescription}}<br/><br/>\n          <a href=\"{{item.data.metasite}}\">{{item.data.metasite}}</a>\n          </div>\n        </div>\n        <div class=\"tags-wrapper\">\n          <ion-row>\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n              <span class=\"item-rating\">#{{tag.val}}</span>\n            </div>\n          </ion-row>\n          </div>\n          <div class=\"reactions\">\n             <ion-row>\n              <ion-col size=3>\n                <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                </ion-button>\n                </ion-buttons> \n              </ion-col>\n              <ion-col size=3>\n                   <ion-buttons>\n                   <ion-button (click)=\"submitReactionPost(item, 'Bookmark')\">\n                  <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n                  <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n                   </ion-button>\n                   </ion-buttons> \n              </ion-col>\n            <ion-col size=2></ion-col>\n            <ion-col size=2>\n                   <ion-buttons>\n                   <ion-button (click)=\"showReactionsList(item)\">\n                   <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n                 </ion-button>\n                 </ion-buttons> \n                 </ion-col>\n                 <ion-col size=2>\n                   <ion-buttons>\n                   <ion-button>\n                    <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                  </ion-button>\n                 </ion-buttons> \n                 </ion-col>\n            </ion-row>\n          \n          </div>\n        </ion-card-content>\n        <!-- Dont touch the tags below this line-->\n      </ion-card>\n     </div>\n     </div>\n     <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n  <div *ngIf=\"searchMode\">\n    <div *ngIf=\"searchPosts && searchPosts.length > 0\" >\n      <div class=\"listing-item\" *ngFor=\"let item of searchPosts\" >\n       <ion-card>\n         <ion-card-header>\n           <ion-row>\n             <ion-col size=10>\n            <ion-card-subtitle class=\"searchaddedBy\">\n             <img class=\"searchaddedByImg\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n              <p><a class=\"searchaddedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a>\n              <span class=\"searchaddedByDate\">posted {{item.date | DateFormat}}</span><br/>\n             <a (click)=\"viewGroup(item.groupId)\" class=\"searchaddedByTitle\">in <b>{{item.groupName}}</b></a></p>\n           </ion-card-subtitle>\n         </ion-col>\n         <ion-col size=2>\n           <ion-badge class=\"badge\" *ngIf=\"item.type === 'general'\" color=\"secondary\">Post</ion-badge>\n          <ion-badge class=\"badge\" *ngIf=\"item.type === 'event'\" color=\"warning\">Event</ion-badge>\n          <ion-badge class=\"badge\" *ngIf=\"item.type === 'poll'\" color=\"medium\">Poll</ion-badge>\n          <ion-badge class=\"badge\" *ngIf=\"item.type === 'resource'\" color=\"dark\">Resource</ion-badge> \n       </ion-col>\n         </ion-row>\n         </ion-card-header>\n         <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\n           <div>\n           <ion-label>\n             <span (click)=\"viewPost(item)\"><b>{{item.title}}.</b> {{trimString(item.data.message, 100)}}</span> \n          </ion-label>\n         </div>\n           <div class=\"tags-wrapper\">\n           <ion-row>\n             <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n               <span class=\"item-rating\">#{{tag.val}}</span>\n             </div>\n           </ion-row>\n           </div>\n         </ion-card-content>\n \n         <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\n           <div (click)=\"viewPost(item)\" *ngIf=\"!item.showMore\">\n           <b>{{item.title}}.</b> {{item.data.eventDate}} at {{item.data.eventTime}}\n           </div>\n           <div class=\"tags-wrapper\">\n             <ion-row>\n               <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n                 <span class=\"item-rating\">#{{tag.val}}</span>\n               </div>\n             </ion-row>\n             </div>\n         </ion-card-content>\n \n         <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" >\n           <div (click)=\"viewPost(item)\">\n           <b>{{item.title}}.</b><br/>\n         </div>\n         <div class=\"tags-wrapper\">\n           <ion-row>\n             <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n               <span class=\"item-rating\">#{{tag.val}}</span>\n             </div>\n           </ion-row>\n           </div>\n         </ion-card-content>\n         \n         <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\">\n           <div (click)=\"viewPost(item)\">\n           <b>{{item.title}}.</b><br/>\n           <div *ngIf=\"item?.data.type == 'weblink'\">\n           {{item.data.metatitle}}<br/>\n           </div>\n         </div>\n         <div class=\"tags-wrapper\">\n           <ion-row>\n             <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n               <span class=\"item-rating\">#{{tag.val}}</span>\n             </div>\n           </ion-row>\n           </div>\n         </ion-card-content>\n         <!-- Dont touch the tags below this line-->\n       </ion-card>\n      </div>\n      </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "XfKD":
/*!*************************************!*\
  !*** ./src/app/feed/feed.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\nion-searchbar {\n  --border-radius: 30px;\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row .searchbar {\n  padding: 0px;\n  height: 30px;\n  border-radius: 90px;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.poll-icon {\n  display: inline-block;\n  vertical-align: middle;\n  padding-right: 5px;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-size: 12px;\n}\n\n.addedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n}\n\n.addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n  font-size: 12px;\n}\n\n.addedByImg {\n  width: 45px;\n  height: 45px;\n  float: left;\n  vertical-align: middle;\n  border-radius: 50%;\n}\n\n.badge {\n  margin-top: 20px;\n  padding: 5px;\n}\n\n.searchaddedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n  font-size: 12px;\n}\n\n.searchaddedByDate {\n  margin-left: 10px;\n  font-style: italic;\n  font-size: 12px;\n}\n\n.searchaddedByImg {\n  width: 35px;\n  height: 35px;\n  float: left;\n  vertical-align: middle;\n  border-radius: 50%;\n}\n\n.newIcon {\n  margin-left: 10px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .show-more {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .slider {\n  margin-bottom: 5px;\n}\n\n.message .slider .bgSizeContain {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100%;\n  width: 100%;\n  height: 200px;\n  text-shadow: white 0px 0px 2px;\n  font-size: 16px;\n  border-radius: 10px;\n}\n\n.message .reactions {\n  margin-bottom: 0px;\n  margin-left: -10px;\n}\n\n.message .tags-wrapper {\n  padding-top: 5px;\n}\n\n.message .tags-wrapper .tags {\n  padding-right: 5px;\n}\n\n.message .tags-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #aa6c39;\n}\n\nion-slides {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLHVDQUFBO0VBQ0Esd0NBQUE7QUFDTDs7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQ0FBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUk7RUFDRSw4QkFBQTtBQUFOOztBQUVNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFSOztBQU9NO0VBQ0UsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0FBTlI7O0FBUVE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0FBUlY7O0FBZUE7RUFDRSx3Q0FBQTtBQVpGOztBQWVBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQVpGOztBQWVDO0VBQ0MscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBWkY7O0FBZUM7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7QUFaSDs7QUFjQztFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVhIOztBQWNDO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFYRjs7QUFjQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFlRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQVpKOztBQWVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVpKOztBQWVFO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFaSDs7QUFlQztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFaTDs7QUFlRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBWko7O0FBY0U7RUFDRSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFYSjs7QUFjSTtFQUNFLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVpOOztBQWNJO0VBQ0Usa0JBQUE7QUFaTjs7QUFhTTtFQUNFLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBR0EsbUJBQUE7QUFYUjs7QUFlSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFiTjs7QUFlSTtFQUNFLGdCQUFBO0FBYk47O0FBZU07RUFDRSxrQkFBQTtBQWJSOztBQWVNO0VBQ0UsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBYlI7O0FBbUJFO0VBQ0UsWUFBQTtBQWhCSiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgfVxuICBcbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG5cbi5maWx0ZXJzLXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAvLyAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuc2VhcmNoYmFyLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIFxuICAgICAgLnNlYXJjaGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gICAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8vIExlYXJuIG1vcmUgYWJvdXQgQ1NTIGNvbnRhaW4gcHJvcGVydHkgaGVyZTogaHR0cHM6Ly90ZXJtdmFkZXIuZ2l0aHViLmlvL2Nzcy1jb250YWluL1xuICAgICAgICAvLyAgY29udGFpbjogY29udGVudDtcbiAgICAgIH1cbiAgXG4gICAgICAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIFxuICAgICAgICAuZmlsdGVycy1idG4ge1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDZweDtcbiAgXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxuICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG4gICAgXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cbiBcbiAucG9sbC1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gfVxuXG4gLnRleHR7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICAgZm9udC1zaXplOiAxMnB4O1xuIH1cbiAuYWRkZWRCeVRpdGxlIHtcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgbGluZS1oZWlnaHQ6IDVweDtcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLy8gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gfVxuIC5hZGRlZEJ5RGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICBcbi5hZGRlZEJ5SW1nIHtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuXG4gIC5iYWRnZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAuc2VhcmNoYWRkZWRCeVRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBsaW5lLWhlaWdodDogNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAvLyAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuICAuc2VhcmNoYWRkZWRCeURhdGUge1xuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICBmb250LXNpemU6IDEycHg7XG4gICB9XG4gICBcbiAuc2VhcmNoYWRkZWRCeUltZyB7XG4gICAgIHdpZHRoOiAzNXB4O1xuICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgIGZsb2F0OiBsZWZ0O1xuICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICB9XG5cbiAgLm5ld0ljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5tZXNzYWdlIHtcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBcblxuICAgIC5zaG93LW1vcmUge1xuICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG4gICAgLnNsaWRlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAuYmdTaXplQ29udGFpbiB7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIHRleHQtc2hhZG93OiB3aGl0ZSAwcHggMHB4IDJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgfVxuXG4gICAgLnJlYWN0aW9ucyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgfSBcbiAgICAudGFncy13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgIFxuICAgICAgLnRhZ3Mge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cbiAgICAgIC5pdGVtLXJhdGluZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNhYTZjMzk7XG4gICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4iXX0= */");

/***/ }),

/***/ "jWta":
/*!***********************************!*\
  !*** ./src/app/feed/feed.page.ts ***!
  \***********************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feed.page.html */ "WrHT");
/* harmony import */ var _feed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed.page.scss */ "XfKD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reaction-list-modal/reaction-list-modal.page */ "7ONW");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "XqOP");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase/firestore */ "5x/H");

















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
        this.userReactions = [];
        this.userNotifications = [];
        this.loggedInUser = null;
        this.pushes = [];
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
        this.plt.ready()
            .then(() => {
            console.log('platform ready in Feed page');
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
                console.log('fcm token', token);
            });
        });
        // this.client = algoliasearch(this.ALOGOLIA_APP_ID, this.ALGOLIA_API_KEY, {protocol: 'https'});
        // this.index = this.client.initIndex('posts');
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
        // Replace the firebase.auth() call with AngularFireAuth
        this.afAuth.currentUser.then(user => {
            this.loggedInUserId = user === null || user === void 0 ? void 0 : user.uid;
            // Get Posts
            this.dataProvider.getCurrentUser().then((u) => {
                u.get().subscribe((user) => {
                    const userData = user.data();
                    if (userData) {
                        this.userReactions = userData.userReactions || [];
                        this.userNotifications = userData.userNotifications || [];
                        this.loggedInUser = userData;
                        this.getFeedData();
                    }
                });
            });
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
        const r = p.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId());
        if (!r) {
            const react = {
                dateCreated: new Date(),
                addedByUser: {
                    addedByKey: this.dataProvider.getCurrentUserId(),
                    addedByUsername: this.loggedInUser.username,
                    addedByImg: this.loggedInUser.img
                },
                reactionType: [reactionType]
            };
            this.dataProvider.addPostReactions(post.key, react).then(() => {
                // Update user notifications.
                if (!this.userNotifications.some(p => p !== this.postId)) {
                    this.userNotifications.push(this.postId);
                    this.dataProvider.getUser(this.loggedInUserId).update({
                        userNotifications: this.userNotifications
                    });
                }
                // Update user activity.
                if (!this.userReactions && this.userReactions.some(p => p !== this.postId)) {
                    this.userReactions.push(this.postId);
                    this.dataProvider.getUser(this.loggedInUserId).update({
                        userReactions: this.userReactions
                    });
                }
            });
        }
        else {
            this.firestore.collection('posts').doc(post.key).collection('reactions').doc(r.key).update({
                reactionType: firebase_app__WEBPACK_IMPORTED_MODULE_13__["default"].firestore.FieldValue.arrayUnion(reactionType)
            }).then(() => {
                const increment = firebase_app__WEBPACK_IMPORTED_MODULE_13__["default"].firestore.FieldValue.increment(1);
                this.firestore.collection('posts').doc(post.key).update({
                    totalReactionCount: increment
                });
            });
        }
    }
    removePostReaction(post, reactionType) {
        // first find the post in the collection
        const postIndex = this.posts.findIndex(el => el.key === post.key);
        const p = this.posts[postIndex];
        const found = false;
        if (p.reactions !== undefined) {
            const values = Object.keys(p.reactions).map(function (e) {
                return p.reactions[e];
            });
            const reaction = p.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId());
            if (reaction.reactionType.length === 1
                && reaction.reactionType.some(e => e === reactionType)) {
                this.dataProvider.removePostReaction(post.key, reaction.key);
            }
            else {
                // reaction.reactionType = reaction.reactionType.filter(x => x !== reactionType);
                // this.dataProvider.updatePostReactions(post.key, reaction, true);
                this.firestore.collection('posts').doc(post.key).collection('reactions').doc(reaction.key).update({
                    reactionType: firebase_app__WEBPACK_IMPORTED_MODULE_13__["default"].firestore.FieldValue.arrayRemove(reactionType)
                }).then(() => {
                    const increment = firebase_app__WEBPACK_IMPORTED_MODULE_13__["default"].firestore.FieldValue.increment(-1);
                    this.firestore.collection('posts').doc(post.key).update({
                        totalReactionCount: increment
                    });
                });
            }
        }
    }
    showReactionsList(post) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (post.totalReactionCount === 0) {
                return;
            }
            // first find the post in the collection
            const postIndex = this.posts.findIndex(el => el.key === post.key);
            const p = this.posts[postIndex];
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_11__["ReactionListModalPage"],
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
    viewUser(userId) {
        this.router.navigateByUrl('/profile/' + userId);
    }
    viewGroup(groupId) {
        this.router.navigateByUrl('/group/' + groupId);
    }
    followPost(post) {
        if (!this.userNotifications) {
            this.userNotifications = [post.key];
        }
        else {
            this.userNotifications.push(post.key);
        }
        this.dataProvider.getUser(this.loggedInUserId).update({
            userNotifications: this.userNotifications
        }).then(() => {
            this.loadingProvider.showToast('You will be notified when there are new replies');
        });
    }
    unFollowPost(post) {
        const index = this.userNotifications.indexOf(post.key, 0);
        if (index > -1) {
            this.userNotifications.splice(index, 1);
        }
        this.dataProvider.getUser(this.loggedInUserId).update({
            userNotifications: this.userNotifications
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
        const buttons = [];
        const cancelButton = {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
                console.log('Cancel clicked');
            }
        };
        const reportButton = {
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
            if (this.userNotifications && this.userNotifications.some(el => el === post.key)) {
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
            post.showMore = false;
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
                    const reaction = element.payload.doc.data();
                    reaction.key = element.payload.doc.id;
                    post.reactions.push(reaction);
                });
                // Check for Thanks
                if (reactions.length > 0) {
                    let foundSmiley = false;
                    if (post.reactions.length > 0) {
                        const r = post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId());
                        foundSmiley = r.reactionType.some(r => r === 'Thanks');
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
                        const r = post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId());
                        foundHug = r.reactionType.some(r => r === 'Hug');
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
                        const r = post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId());
                        foundCheckin = r.reactionType.some(r => r === 'Checkin');
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
                        const r = post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId());
                        foundBookmark = r.reactionType.some(r => r === 'Bookmark');
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
    trimString(string, length) {
        if (string) {
            return string.length > length
                ? string.substring(0, length) + "..."
                : string;
        }
    }
    onFocus(event) {
        if (!this.searchMode) {
            this.searchMode = true;
        }
    }
    onCancel(event) {
        this.searchMode = false;
        this.searchPosts = [];
        this.searchTerm = '';
    }
    seachFeed(event) {
        // console.log('searching for ..', this.searchTerm );
        // this.index.search('', {
        //   query: this.searchTerm
        // }).then((data) => {
        //   this.searchPosts = data.hits;
        // });
        this.searchPosts = this.posts;
    }
    searchTag(tag, post) {
        this.searchMode = true;
        this.searchTerm = tag.val;
    }
};
FeedPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__["FCM"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
FeedPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: true },] }]
};
FeedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed',
        template: _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__["FCM"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
], FeedPage);



/***/ }),

/***/ "xQww":
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/share.module */ "vxGH");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed.page */ "jWta");









const routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_8__["FeedPage"]
    }
];
let FeedPageModule = class FeedPageModule {
};
FeedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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



/***/ })

}]);
//# sourceMappingURL=feed-feed-module-es2015.js.map