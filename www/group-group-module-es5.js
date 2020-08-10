function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-group-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGroupGroupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title (click)=\"groupInfo()\">{{title}}</ion-title>\r\n    <ion-buttons slot=\"end\"> \r\n      <ion-button *ngIf=\"loggedInUserIsMember == true\" (click)=\"showGroupOptions()\" ><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-button>\r\n   <!-- <ion-button *ngIf=\"loggedInUserIsMember == false\" (click)=\"joinGroup()\" >Join Group</ion-button>\r\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='posts'\" (click)=\"newPost()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='polls'\" (click)=\"newPoll()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='resources'\" (click)=\"newResource()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='events'\" (click)=\"newEvent()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t--></ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n  <ion-segment padding [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t<!-- <ion-segment-button value=\"group\">\r\n  \t\t\t<ion-icon name=\"chatbubbles\"></ion-icon>\r\n    </ion-segment-button> -->\r\n    <ion-segment-button value=\"posts\">\r\n      <ion-icon name=\"chatbubbles\"></ion-icon>\r\n      <span class=\"tab-title\">Posts</span>\r\n    </ion-segment-button>\r\n\t\t<ion-segment-button value=\"polls\">\r\n      <ion-icon name=\"podium\"></ion-icon>\r\n      <span class=\"tab-title\">Polls</span>\r\n\t\t</ion-segment-button>\r\n\t\t<ion-segment-button value=\"resources\">\r\n      <ion-icon name=\"library\"></ion-icon>\r\n      <span class=\"tab-title\">Resources</span>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"events\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <span class=\"tab-title\">Events</span>\r\n    </ion-segment-button>\r\n\t<!--\t<ion-segment-button value=\"groupInfo\">\r\n      <ion-icon layout=\"icon-end\" name=\"ellipsis-vertical\"></ion-icon>\r\n\t\t</ion-segment-button>\r\n--></ion-segment>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div [ngSwitch]=\"tab\" >\r\n    <!-- <div *ngSwitchCase=\"'group'\" >\r\n  <div class=\"messages\" #content>\r\n    <p class=\"center\" *ngIf=\"startIndex > 0\"><span tappable (click)=\"loadPreviousMessages()\">Load previous\r\n        messages</span></p>\r\n    <div *ngFor=\"let message of messagesToShow\">\r\n    \r\n      <div *ngIf=\"isSystemMessage(message)\" style=\"text-align:center; float: left; color:#ccc\">\r\n        <p>\r\n          <ion-icon name=\"{{message.icon}}\"></ion-icon>\r\n          {{message.message}} {{message.date | DateFormat}}\r\n        </p>\r\n      </div>\r\n \r\n      <div *ngIf=\"isSender(message) && !isSystemMessage(message)\" class=\"chatbox right\" (press)=\"onPress($event)\" (pressup)=\"onPressUp($event,message)\">\r\n\r\n        <div *ngIf=\"isSender(message) && !isSystemMessage(message)\">\r\n          <div class=\"right\" *ngIf=\"message.type == 'text'\"  (press)=\"onPress($event)\" (pressup)=\"onPressUp($event,message)\">\r\n            <p>{{message.message}}</p>\r\n            <span>{{message.date | DateFormat}}</span>\r\n          </div>\r\n          <div class=\"right\" *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\r\n          <div class=\"right\" *ngIf=\"message.type == 'contact'\" [innerHtml]=\"message.message\"></div>\r\n          <div class=\"right\" *ngIf=\"message.type == 'image'\">\r\n            <img tappable (click)=\"enlargeImage(message.url)\" src=\"{{message.url}}\" (load)=\"doScroll()\"\r\n              onError=\"this.src='./assets/images/default-dp.png'\" />\r\n            <span>{{message.date | DateFormat}}</span>\r\n          </div>\r\n          <div *ngIf=\"message.type == 'video'\">\r\n            <video controls width=\"100%\">\r\n              <source src=\"{{message.message}}\" type=\"video/mp4\">\r\n            </video>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"!isSender(message) && !isSystemMessage(message)\" class=\"chatbox left\">\r\n        <img src=\"{{message.avatar}}\" tappable (click)=\"viewUser(message.sender)\" (load)=\"doScroll()\"\r\n          onError=\"this.src='./assets/images/default-dp.png'\" style=\"height:30px; border-radius: 100%;float:left;\" />\r\n        <div class=\"left\" *ngIf=\"message.type == 'text'\">\r\n          <p>{{message.message}}</p>\r\n          <span>{{message.date | DateFormat}}</span>\r\n        </div>\r\n        <div class=\"left\" *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\r\n        <div class=\"left\" *ngIf=\"message.type == 'contact'\" [innerHtml]=\"message.message\"></div>\r\n        <div class=\"left\" *ngIf=\"message.type == 'image'\">\r\n          <img tappable (click)=\"enlargeImage(message.url)\" src=\"{{message.url}}\"\r\n            onError=\"this.src='./assets/images/default-dp.png'\" (load)=\"doScroll()\" />\r\n          <span>{{message.date | DateFormat}}</span>\r\n        </div>\r\n        <div *ngIf=\"message.type == 'video'\">\r\n          <video controls width=\"100%\">\r\n            <source src=\"{{message.message}}\" type=\"video/mp4\">\r\n          </video>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  </div> -->\r\n  <div *ngSwitchCase=\"'posts'\">\r\n    <!-- No Posts to show -->\r\n     <div class=\"empty-list\" *ngIf=\"posts && posts.length == 0\">\r\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\r\n     <p>No new Posts added to this group.</p>\r\n     </div>\r\n     <!-- Show Posts -->\r\n     <div *ngIf=\"posts && posts.length > 0\" >\r\n     <div class=\"listing-item\" *ngFor=\"let item of posts | reverse\" >\r\n      <ion-card>\r\n        <ion-card-header>\r\n           <ion-card-subtitle (click)=\"viewPost(item)\">\r\n            <img class=\"subtitle\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{item.senderName}} posted {{item.date | DateFormat}}\r\n            <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \r\n          </ion-card-subtitle>\r\n          <ion-card-title>{{item.title}}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"message\" (click)=\"viewPost(item)\">\r\n          {{item.message}}\r\n        </ion-card-content>\r\n\r\n            <ion-row >\r\n              <ion-col>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n                 <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                 <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\r\n                 <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n                 <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"showReactionsList(item)\">\r\n                <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n              </ion-button>\r\n            </ion-buttons> \r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-buttons>\r\n                  <ion-button>\r\n                <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n              </ion-button>\r\n            </ion-buttons> \r\n              </ion-col>\r\n            </ion-row>\r\n\r\n      </ion-card>\r\n    </div>\r\n     </div>\r\n    </div>\r\n     <div *ngSwitchCase=\"'polls'\">\r\n    <!-- No polls to show -->\r\n     <div class=\"empty-list\" *ngIf=\"polls && polls.length == 0\">\r\n     <h1><ion-icon name=\"md-chatbubbles\"></ion-icon></h1>\r\n     <p>No new polls yet.</p>\r\n     </div>\r\n     <!-- Show polls -->\r\n     <div *ngIf=\"polls && polls.length > 0\">\r\n      <div class=\"listing-item\" *ngFor=\"let item of polls  | reverse\">\r\n     <ion-card>\r\n       <ion-card-header (click)=\"viewPoll(item)\">\r\n            <ion-card-subtitle>\r\n             <img class=\"subtitle\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{item.addedByUser.addedByUsername}}, posted {{item.dateCreated | DateFormat}}\r\n             <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \r\n           </ion-card-subtitle>\r\n           <ion-card-title>{{item.description}}</ion-card-title>\r\n         </ion-card-header>\r\n       <ion-row class=\"info-row\" *ngFor=\"let pollOption of item.pollOptions\">\r\n         <ion-col class=\"poll-option-col\">\r\n         <!--<button ion-button color=\"primary\" clear small icon-start> -->\r\n            <div><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checked.svg\" ></ion-icon> <span class=\"text\">{{pollOption.name}}</span></div>\r\n           \r\n         <!--</button>-->\r\n         </ion-col>\r\n       </ion-row>\r\n             <ion-row class=\"info-row\" >\r\n\t\t\t\t<ion-col size=\"8\">\r\n                  <span class=\"text\">Poll ends {{item.dateEnding | date:'fullDate'}}</span> \r\n               </ion-col>\r\n\t\t\t   <ion-col size=\"2\">\r\n\t\t\t   </ion-col>\r\n               <ion-col size=\"2\">\r\n                 <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\r\n               </ion-col>\r\n             </ion-row>\r\n      </ion-card>\r\n   </div>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'resources'\">\r\n    <!-- No Resources to show -->\r\n     <div class=\"empty-list\" *ngIf=\"resources && resources.length == 0\">\r\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\r\n     <p>No new Resources added to this group.</p>\r\n     </div>\r\n     <!-- Show Resources -->\r\n     <div *ngIf=\"resources && resources.length > 0\" >\r\n      <div class=\"listing-item\" *ngFor=\"let item of resources\">\r\n       <div *ngIf=\"item?.type == 'contact'\">\r\n     <ion-card>\r\n        <ion-card-header>\r\n             <ion-card-subtitle (click)=\"viewResource(item)\">\r\n              <img class=\"subtitle\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{item.addedByUser.addedByUsername}}, posted {{item.dateCreated | DateFormat}}\r\n              <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \r\n            </ion-card-subtitle>\r\n            <ion-card-title>{{item.title}}</ion-card-title>\r\n          </ion-card-header>\r\n              <ion-card-content class=\"message\" (click)=\"viewResource(item)\">\r\n\t\t\t   {{item.name}}<br/>\r\n\t\t\t   {{item.address}}<br/><br/>\r\n\t\t\t   {{item.email}}<br/>\r\n\t\t\t   {{item.phones}}<br/>\r\n         </ion-card-content>\r\n              <ion-row>\r\n         <ion-col class=\"reactions-col\">\r\n                 <ion-buttons>\r\n                   <ion-button (click)=\"submitReactionResource(item, 'Bookmark')\">\r\n                  <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                  <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                 </ion-button>\r\n                 </ion-buttons> \r\n               </ion-col>\r\n         <ion-col class=\"reactions-col\">\r\n                 <ion-buttons>\r\n                   <ion-button (click)=\"submitReactionResource(item, 'Thanks')\">\r\n                  <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                  <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                 </ion-button>\r\n                 </ion-buttons> \r\n               </ion-col>\r\n          <ion-col class=\"reactions-col\">\r\n                 <ion-buttons>\r\n                   <ion-button (click)=\"showResourceReactionsList(item)\">\r\n                 <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n               </ion-button>\r\n             </ion-buttons> \r\n               </ion-col>\r\n               <ion-col class=\"reactions-col\">\r\n                 <ion-buttons>\r\n                   <ion-button>\r\n                    <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                  </ion-button>\r\n             </ion-buttons> \r\n               </ion-col>\r\n              </ion-row>\r\n       </ion-card>\r\n       </div>\r\n       <div *ngIf=\"item?.type == 'weblink'\">\r\n        <ion-card>\r\n            <ion-card-header>\r\n               <ion-card-subtitle (click)=\"viewResource(item)\">\r\n                <img class=\"subtitle\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{item.addedByUser.addedByUsername}}, posted {{item.dateCreated | DateFormat}}\r\n                <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \r\n              </ion-card-subtitle>\r\n              <ion-card-title>{{item.title}}</ion-card-title>\r\n            </ion-card-header>\r\n         <ion-card-content class=\"message\" (click)=\"viewResource(item)\">\r\n        <app-text-shell animation=\"bouncing\" [data]=\"item.metatitle\"></app-text-shell><br/>\r\n        <img [src]=\"item.metaicon\"/> \r\n        <app-text-shell animation=\"bouncing\" [data]=\"item.metadescription\"></app-text-shell>\r\n        <app-text-shell animation=\"bouncing\" [data]=\"item.metasite\"></app-text-shell>\r\n           </ion-card-content>\r\n  \r\n                       <ion-row>\r\n           <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                     <ion-button (click)=\"submitReactionResource(item, 'Bookmark')\">\r\n                    <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                    <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                   </ion-button>\r\n                   </ion-buttons> \r\n                 </ion-col>\r\n           <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                     <ion-button (click)=\"submitReactionResource(item, 'Thanks')\">\r\n                    <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                    <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                   </ion-button>\r\n                   </ion-buttons> \r\n                 </ion-col>\r\n            <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                     <ion-button (click)=\"showResourceReactionsList(item)\">\r\n                   <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                 </ion-button>\r\n               </ion-buttons> \r\n                 </ion-col>\r\n                 <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                     <ion-button>\r\n                      <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                    </ion-button>\r\n               </ion-buttons> \r\n                 </ion-col>\r\n                </ion-row>\r\n        </ion-card>\r\n           </div>\r\n     </div>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'events'\">\r\n      <!-- No Events to show -->\r\n       <div class=\"empty-list\" *ngIf=\"events && events.length == 0\">\r\n       <h1><ion-icon name=\"chatbubbles\"></ion-icon></h1>\r\n       <p>No new upcoming Events added to this group.</p>\r\n       </div>\r\n       <!-- Show Events -->\r\n       <div *ngIf=\"events && events.length > 0\" >\r\n        <div class=\"listing-item\" *ngFor=\"let item of events\">\r\n          <ion-card>\r\n         <ion-card-header>\r\n              <ion-card-subtitle (click)=\"viewEvent(item)\">\r\n               <img class=\"subtitle\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{item.addedByUser.addedByUsername}}, posted {{item.dateCreated | DateFormat}}\r\n               <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \r\n             </ion-card-subtitle>\r\n             <ion-card-title>{{item.title}}</ion-card-title>\r\n           </ion-card-header>\r\n               <ion-card-content class=\"message\" (click)=\"viewEvent(item)\">\r\n          {{item.eventDate}} at {{item.eventTime}}<br/><br/>\r\n          {{item.address}}<br/><br/>\r\n          {{item.link}}\r\n          </ion-card-content>\r\n               <ion-row>\r\n          <ion-col>\r\n                  <ion-buttons>\r\n                    <ion-button (click)=\"submitReactionEvent(item, 'Checkin')\">\r\n                   <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                   <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                  </ion-button>\r\n                  </ion-buttons> \r\n                </ion-col>\r\n          <ion-col>\r\n                  <ion-buttons>\r\n                    <ion-button (click)=\"submitReactionEvent(item, 'Thanks')\">\r\n                   <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                   <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                  </ion-button>\r\n                  </ion-buttons> \r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-buttons>\r\n                    <ion-button (click)=\"showEventReactionsList(item)\">\r\n                  <div><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                </ion-button>\r\n              </ion-buttons> \r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-buttons>\r\n                    <ion-button>\r\n                     <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                   </ion-button>\r\n              </ion-buttons> \r\n                </ion-col>\r\n               </ion-row>\r\n        </ion-card>\r\n        </div>\r\n       </div>\r\n      </div>\r\n      <!-- Group Info -->\r\n <div *ngSwitchCase=\"'groupInfo'\">\r\n   <ion-row  style=\"background: white\" padding>\r\n     <ion-col col-md-8>\r\n     <h4 tappable (click)=\"setName()\">{{group.name}}</h4>\r\n     <p tappable style=\"color:#aaa\" (click)=\"setDescription()\">{{group.description}}</p>\r\n     </ion-col>\r\n     <ion-col col-md-4 class=\"center\">\r\n       <img src=\"{{group.img}}\" style=\"border-radius: 100%; width: 80px; height: 80px;\" tappable (click)=\"setPhoto()\" onError=\"this.src='./assets/images/default-group.png'\">\r\n     </ion-col>\r\n   </ion-row>\r\n   <ion-list *ngIf=\"groupMembers\">\r\n     <ion-list-header>\r\n     Group Members ({{groupMembers.length}})\r\n     </ion-list-header>\r\n    <!-- <ion-item (click)=\"addMembers()\">\r\n     <ion-icon name=\"add\" item-left></ion-icon>\r\n     <h2>Add Members</h2>\r\n     </ion-item>-->\r\n     <ion-item *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.$key)\">\r\n     <ion-avatar item-left>\r\n       <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\"/>\r\n     </ion-avatar>\r\n     <h2>{{member.name}}</h2>\r\n     <p>{{member.description}}</p>\r\n     </ion-item>\r\n   </ion-list>\r\n   <ion-list-header *ngIf=\"loggedInUserIsMember == true\" >\r\n     More\r\n   </ion-list-header>\r\n   <ion-list *ngIf=\"loggedInUserIsMember == true\"  style=\"text-align: center;\">  \r\n     <ion-item no-lines tappable (click)=\"leaveGroup()\" *ngIf=\"groupMembers && groupMembers.length > 1\">\r\n     Leave Group\r\n     </ion-item>\r\n     <!-- When there's only one member left, allow deleting of group. -->\r\n     <ion-item color=\"danger\" no-lines tappable (click)=\"deleteGroup()\" *ngIf=\"groupMembers && groupMembers.length <= 1\">\r\n     Delete Group\r\n     </ion-item>\r\n   </ion-list>\r\n   <p padding style=\"color:#aaa\">Started {{group.dateCreated | DateFormat}}</p>\r\n   </div>\r\n  </div>\r\n</ion-content>\r\n<!-- Message Box -->\r\n<ion-footer *ngIf=\"loggedInUserIsMember == true  && tab=='group'\">\r\n  <ion-toolbar>\r\n    <ion-item  class=\"bottom_bar\">\r\n      <ion-textarea style=\"margin:0\" type=\"text\" rows=\"0\" placeholder=\"Type your message\" [(ngModel)]=\"message\"\r\n        (ionFocus)=\"scrollBottom()\" (keypress)=\"onType($event.keyCode)\"></ion-textarea>\r\n      <ion-buttons slot=\"end\" style=\"margin-left:4px;\">\r\n        <ion-button fill=\"clear\" (click)=\"attach()\">\r\n          <ion-icon name=\"attach\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"send('text')\" [disabled]=\"!message\">\r\n          <ion-icon name=\"send\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/group/group.module.ts":
  /*!***************************************!*\
    !*** ./src/app/group/group.module.ts ***!
    \***************************************/

  /*! exports provided: GroupPageModule */

  /***/
  function srcAppGroupGroupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupPageModule", function () {
      return GroupPageModule;
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


    var _group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./group.page */
    "./src/app/group/group.page.ts");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]
    }];

    var GroupPageModule = function GroupPageModule() {
      _classCallCheck(this, GroupPageModule);
    };

    GroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]]
    })], GroupPageModule);
    /***/
  },

  /***/
  "./src/app/group/group.page.scss":
  /*!***************************************!*\
    !*** ./src/app/group/group.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupGroupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF;\n}\n\n.GroupAction .cancelAction {\n  color: red;\n}\n\n.tab-title {\n  font-size: 10px;\n  padding-bottom: 8px;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.listing-item .reactions-col {\n  margin: -3px;\n}\n\n.listing-item .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.listing-item .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.listing-item .subtitle {\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n}\n\n.listing-item .newIcon {\n  height: 40px;\n  vertical-align: middle;\n}\n\n.listing-item .message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.listing-item .info-row {\n  --ion-grid-column-padding: 0px;\n  padding-left: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.listing-item .info-row .main-info-col {\n  padding-right: calc(var(--page-margin) / 2);\n  line-height: 1;\n}\n\n.listing-item .info-row poll-option-col {\n  padding-right: calc(var(--page-margin) / 3);\n}\n\n.listing-item .info-row .item-name {\n  margin: 0px 0px var(--page-margin);\n  text-transform: capitalize;\n  font-size: 16px;\n}\n\n.listing-item .info-row .item-name .name-anchor {\n  color: var(--ion-color-dark);\n  display: block;\n  text-decoration: none;\n}\n\n.listing-item .info-row .item-description {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-shade);\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.listing-item .info-row .item-address {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.listing-item .info-row .item-tags {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.listing-item .stats-row {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin);\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.listing-item .stats-row .stats-icon {\n  font-size: 24px;\n}\n\n.listing-item .stats-row .item-rating {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-right: 10px;\n}\n\n.listing-item .stats-row .item-rating .rating-value {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n\n.listing-item .stats-row .item-reviews {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.listing-item .stats-row .item-reviews .reviews-count {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcZ3JvdXBcXGdyb3VwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ3JvdXAvZ3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLHFCQUFBO0FDQUo7O0FESUU7RUFDRSxVQUFBO0FDREo7O0FESUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHQTtFQUVJLHdDQUFBO0FDREo7O0FESUE7RUFDRSxZQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDSEY7O0FETUM7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ0pIOztBRE1FO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0pOOztBRE1JO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDSk47O0FETUU7RUFDRSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNKSjs7QURRSTtFQUNFLDhCQUFBO0VBRUEsZ0NBQUE7RUFDQSw0Q0FBQTtBQ1BOOztBRFNNO0VBQ0UsMkNBQUE7RUFDQSxjQUFBO0FDUFI7O0FEU007RUFDRSwyQ0FBQTtBQ1BSOztBRFVNO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNSUjs7QURVUTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDUlY7O0FEWU07RUFDRSw0Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVlI7O0FEYU07RUFDRSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWFI7O0FEYU07RUFDRSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWFI7O0FEZUk7RUFDRSw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ2ROOztBRGdCTTtFQUNFLGVBQUE7QUNkUjs7QURpQk07RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0Esa0JBQUE7QUNmUjs7QURpQlE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDZlY7O0FEbUJNO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ2pCUjs7QURtQlE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDakJWIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXAvZ3JvdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcbiAgXHJcbiAgICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XHJcbiAgfVxyXG5cclxuLkdyb3VwQWN0aW9uIHtcclxuICAuY2FuY2VsQWN0aW9uIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG59XHJcbi50YWItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcbi5saXN0aW5nLWl0ZW0ge1xyXG4gICAgLy9wYWRkaW5nOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbi8vICAgIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgc29saWQgdmFyKC0tcGFnZS1jb2xvcik7XHJcblxyXG4ucmVhY3Rpb25zLWNvbCB7XHJcbiAgbWFyZ2luOiAtM3B4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiB9XHJcbiBcclxuIC50ZXh0e1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAubmV3SWNvbiB7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAubWVzc2FnZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgICAuaW5mby1yb3cge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcbiAgXHJcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAgIC5tYWluLWluZm8tY29sIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIHBvbGwtb3B0aW9uLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICBcclxuICAgICAgICAubmFtZS1hbmNob3Ige1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1hZGRyZXNzIHtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgIH1cclxuICAgICAgLml0ZW0tdGFncyB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc3RhdHMtcm93IHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIFxyXG4gICAgICAuc3RhdHMtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5pdGVtLXJhdGluZyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIFxyXG4gICAgICAgIC5yYXRpbmctdmFsdWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5pdGVtLXJldmlld3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIFxyXG4gICAgICAgIC5yZXZpZXdzLWNvdW50IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1jb2xvcjogIzAwQUZGRjtcbn1cblxuLkdyb3VwQWN0aW9uIC5jYW5jZWxBY3Rpb24ge1xuICBjb2xvcjogcmVkO1xufVxuXG4udGFiLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5saXN0aW5nLWl0ZW0gLnJlYWN0aW9ucy1jb2wge1xuICBtYXJnaW46IC0zcHg7XG59XG4ubGlzdGluZy1pdGVtIC5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmxpc3RpbmctaXRlbSAudGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG4ubGlzdGluZy1pdGVtIC5zdWJ0aXRsZSB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubGlzdGluZy1pdGVtIC5uZXdJY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmxpc3RpbmctaXRlbSAubWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLm1haW4taW5mby1jb2wge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IHBvbGwtb3B0aW9uLWNvbCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuaXRlbS1uYW1lIHtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5pdGVtLW5hbWUgLm5hbWUtYW5jaG9yIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5pdGVtLWFkZHJlc3Mge1xuICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuaXRlbS10YWdzIHtcbiAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IC5zdGF0cy1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IC5pdGVtLXJhdGluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLnN0YXRzLXJvdyAuaXRlbS1yYXRpbmcgLnJhdGluZy12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5saXN0aW5nLWl0ZW0gLnN0YXRzLXJvdyAuaXRlbS1yZXZpZXdzIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5saXN0aW5nLWl0ZW0gLnN0YXRzLXJvdyAuaXRlbS1yZXZpZXdzIC5yZXZpZXdzLWNvdW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/group/group.page.ts":
  /*!*************************************!*\
    !*** ./src/app/group/group.page.ts ***!
    \*************************************/

  /*! exports provided: GroupPage */

  /***/
  function srcAppGroupGroupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupPage", function () {
      return GroupPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _popover_popover_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../popover/popover.page */
    "./src/app/popover/popover.page.ts");
    /* harmony import */


    var _tag_modal_tag_modal_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../tag-modal/tag-modal.page */
    "./src/app/tag-modal/tag-modal.page.ts");
    /* harmony import */


    var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../reaction-list-modal/reaction-list-modal.page */
    "./src/app/reaction-list-modal/reaction-list-modal.page.ts");

    var GroupPage =
    /*#__PURE__*/
    function () {
      // GroupPage
      // This is the page where the user can chat with other group members and view group info.
      function GroupPage(dataProvider, navCtrl, modalCtrl, firestore, alertCtrl, imageProvider, loadingProvider, camera, keyboard, actionSheet, contacts, geolocation, route, router, popoverCtrl) {
        _classCallCheck(this, GroupPage);

        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.firestore = firestore;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.keyboard = keyboard;
        this.actionSheet = actionSheet;
        this.contacts = contacts;
        this.geolocation = geolocation;
        this.route = route;
        this.router = router;
        this.popoverCtrl = popoverCtrl;
        this.startIndex = -1;
        this.scrollDirection = 'bottom'; // Set number of messages to show.

        this.numberOfMessages = 10;
        this.polls = [];
        this.resources = [];
        this.events = [];
        this.loggedInUserIsMember = 'false';
        this.resourceTags = [];
        this.toggled = false; // posts

        this.posts = [];
        this.numberOfPosts = 10;
      }

      _createClass(GroupPage, [{
        key: "handleSelection",
        value: function handleSelection(event) {
          this.emojitext = this.emojitext + ' ' + event.char;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loadingProvider.show();
          this.tab = 'posts';
          this.title = 'Posts';
          this.searchResource = '';
          this.searchPoll = '';
          this.searchEvent = ''; // Get user information for system message sent to the group when a member was added.

          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (user) {
            _this.user = user.payload.data();
          });
          this.getGroupDetailsandPosts();
          this.loadingProvider.hide();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {} // this.getGroupDetailsandMessages();
        // Load previous messages in relation to numberOfMessages.

      }, {
        key: "loadPreviousMessages",
        value: function loadPreviousMessages() {
          var that = this; // Show loading.

          this.loadingProvider.show();
          setTimeout(function () {
            // Set startIndex to load more messages.
            if (that.startIndex - that.numberOfMessages > -1) {
              that.startIndex -= that.numberOfMessages;
            } else {
              that.startIndex = 0;
            } // Refresh our messages list.


            that.messages = null;
            that.messagesToShow = null; // Set scroll direction to top.

            that.scrollDirection = 'top'; // Populate list again.

            that.ionViewDidEnter();
          }, 1000);
        } // Update messagesRead when user lefts this page.

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          if (this.messages) {
            this.setMessagesRead(this.messages);
          }
        } // Check if currentPage is active, then update user's messagesRead.

      }, {
        key: "setMessagesRead",
        value: function setMessagesRead(messages) {
          // if (this.navCtrl.getActive().instance instanceof GroupPage) {
          // Update user's messagesRead on database.
          this.firestore.doc('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid + '/groups/' + this.groupId).update({
            messagesRead: this.messages.length
          }); // }
        } // Check if 'return' button is pressed and send the message.

      }, {
        key: "onType",
        value: function onType(keyCode) {
          if (keyCode == 13) {// this.keyboard.close();
            // this.send();
          }
        } // Scroll to bottom of page after a short delay.

      }, {
        key: "scrollBottom",
        value: function scrollBottom() {
          var that = this;
          setTimeout(function () {
            that.content.nativeElement.scrollBottom = that.content.nativeElement.scrollHeight;
          }, 300);
        } // Scroll to top of the page after a short delay.

      }, {
        key: "scrollTop",
        value: function scrollTop() {
          var that = this;
          setTimeout(function () {
            that.content.nativeElement.scrollTop = that.content.nativeElement.scrollHeight;
          }, 300);
        } // Scroll depending on the direction.

      }, {
        key: "doScroll",
        value: function doScroll() {
          if (this.scrollDirection === 'bottom') {
            this.scrollBottom();
          } else if (this.scrollDirection === 'top') {
            this.scrollTop();
          }
        } // Check if the user is the sender of the message.

      }, {
        key: "isSender",
        value: function isSender(message) {
          if (message.sender === firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid) {
            return true;
          } else {
            return false;
          }
        } // Check if the message is a system message.

      }, {
        key: "isSystemMessage",
        value: function isSystemMessage(message) {
          if (message.type === 'system') {
            return true;
          } else {
            return false;
          }
        } // View user info

      }, {
        key: "viewUser",
        value: function viewUser(userId) {
          this.router.navigateByUrl('/userinfo/' + userId);
        } // Send text message to the group.

      }, {
        key: "send",
        value: function send(type) {
          // Clone an instance of messages object so it will not directly be updated.
          // The messages object should be updated by our observer declared on ionViewDidLoad.
          var messages = JSON.parse(JSON.stringify(this.messages));
          messages.push({
            date: new Date().toString(),
            sender: firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid,
            // tslint:disable-next-line: object-literal-shorthand
            type: type,
            message: this.message
          }); // Update group messages.

          this.dataProvider.getGroup(this.groupId).update({
            // tslint:disable-next-line: object-literal-shorthand
            messages: messages
          }); // Clear messagebox.

          this.message = '';
        } // Enlarge image messages.

      }, {
        key: "enlargeImage",
        value: function enlargeImage(img) {// let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
          // imageModal.present();
        }
      }, {
        key: "attach",
        value: function attach() {
          var _this2 = this;

          var action = this.actionSheet.create({
            header: 'Choose attachments',
            buttons: [{
              text: 'Camera',
              handler: function handler() {
                console.log('take photo');

                _this2.imageProvider.uploadGroupPhotoMessage(_this2.groupId, _this2.camera.PictureSourceType.CAMERA).then(function (url) {
                  // Process image message.
                  _this2.sendPhotoMessage(url);
                });
              }
            }, {
              text: 'Photo Library',
              handler: function handler() {
                console.log('Access gallery');

                _this2.imageProvider.uploadGroupPhotoMessage(_this2.groupId, _this2.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                  // Process image message.
                  _this2.sendPhotoMessage(url);
                });
              }
            }, {
              text: 'Video',
              handler: function handler() {
                console.log('Video');

                _this2.imageProvider.uploadGroupVideoMessage(_this2.groupId).then(function (url) {
                  _this2.sendVideoMessage(url);
                });
              }
            }, {
              text: 'Location',
              handler: function handler() {
                console.log('Location');

                _this2.geolocation.getCurrentPosition({
                  timeout: 2000
                }).then(function (res) {
                  var locationMessage = 'current location: lat:' + res.coords.latitude + ' lng:' + res.coords.longitude;
                  var mapUrl = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';

                  var confirm = _this2.alertCtrl.create({
                    header: 'Your Location',
                    message: locationMessage,
                    buttons: [{
                      text: 'cancel',
                      handler: function handler() {
                        console.log('canceled');
                      }
                    }, {
                      text: 'Share',
                      handler: function handler() {
                        console.log('share');
                        _this2.message = locationMessage + '<br>' + mapUrl;

                        _this2.send('location');
                      }
                    }]
                  }).then(function (r) {
                    return r.present();
                  });
                }, function (locationErr) {
                  console.log('Location Error' + JSON.stringify(locationErr));
                });
              }
            }, {
              text: 'Contact',
              handler: function handler() {
                console.log('Share contact');

                _this2.contacts.pickContact().then(function (data) {
                  console.log(data.displayName);
                  console.log(data.phoneNumbers[0].value);
                  _this2.message = '<b>Name:</b> ' + data.displayName + '<br><b>Mobile:</b> <a href=\'tel:' + data.phoneNumbers[0].value + '\'>' + data.phoneNumbers[0].value + '</a>';

                  _this2.send('contact');
                }, function (err) {
                  console.log(err);
                });
              }
            }, {
              text: 'cancel',
              role: 'cancel',
              handler: function handler() {
                console.log('cancelled');
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        }
      }, {
        key: "takePhoto",
        value: function takePhoto() {
          var _this3 = this;

          this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then(function (url) {
            // Process image message.
            _this3.sendPhotoMessage(url);
          });
        } // Process photoMessage on database.

      }, {
        key: "sendPhotoMessage",
        value: function sendPhotoMessage(url) {
          var messages = JSON.parse(JSON.stringify(this.messages));
          messages.push({
            date: new Date().toString(),
            sender: firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid,
            type: 'image',
            url: url
          });
          this.dataProvider.getGroup(this.groupId).update({
            messages: messages
          });
          this.message = '';
        }
      }, {
        key: "sendVideoMessage",
        value: function sendVideoMessage(url) {
          var messages = JSON.parse(JSON.stringify(this.messages));
          messages.push({
            date: new Date().toString(),
            sender: firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid,
            type: 'video',
            url: url
          });
          this.dataProvider.getGroup(this.groupId).update({
            messages: messages
          });
          this.message = '';
        } // View group info.

      }, {
        key: "groupInfo",
        value: function groupInfo() {
          this.router.navigateByUrl('/groupinfo/' + this.groupId);
        } // Controller Functions

      }, {
        key: "onPress",
        value: function onPress($event) {
          console.log('onPress', $event);
        }
      }, {
        key: "onPressUp",
        value: function onPressUp(event, message) {
          console.log('onPressUp', event);
          console.log(event.center.x);
          console.log(event.center.y);
          this.presentPopover(event, message);
        } // MY Methods ************************

      }, {
        key: "joinGroup",
        value: function joinGroup() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.alert = this.alertCtrl.create({
                      header: 'Join Group',
                      message: 'Are you sure you want to join this group?',
                      buttons: [{
                        text: 'Cancel'
                      }, {
                        text: 'Join',
                        handler: function handler(data) {
                          // Proceed
                          _this4.loadingProvider.show(); // Add groupInfo to each friend added to the group.


                          _this4.firestore.doc('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid + '/groups/' + _this4.groupId).update({
                            messagesRead: 0
                          }); // Add friend as members of the group.


                          _this4.group.members.push(firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid); // Add system message that the members are added to the group.


                          _this4.group.messages.push({
                            date: new Date().toString(),
                            sender: firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid,
                            type: 'system',
                            message: _this4.user.name + ' has joined the group.',
                            icon: 'md-contacts'
                          }); // Update group data on the database.


                          _this4.dataProvider.getGroup(_this4.groupId).update({
                            members: _this4.group.members,
                            messages: _this4.group.messages
                          }).then(function () {
                            // Back.
                            _this4.loadingProvider.hide();

                            _this4.navCtrl.back();
                          });
                        }
                      }]
                    }).then(function (r) {
                      return r.present();
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(myEvent, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var ev, popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    ev = {
                      target: {
                        getBoundingClientRect: function getBoundingClientRect() {
                          return {
                            top: myEvent.center.y,
                            left: myEvent.center.x
                          };
                        }
                      }
                    };
                    _context2.next = 3;
                    return this.popoverCtrl.create({
                      component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_13__["PopoverPage"],
                      componentProps: {
                        message: message,
                        groupId: this.groupId
                      },
                      event: ev,
                      translucent: true
                    });

                  case 3:
                    popover = _context2.sent;
                    _context2.next = 6;
                    return popover.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } /// ********************* POLL Functions ***********************************/

      }, {
        key: "getGroupDetailsandMessages",
        value: function getGroupDetailsandMessages() {
          var _this5 = this;

          // Get group details
          this.groupId = this.route.snapshot.params.id;
          this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
            console.log('group:', group);
            _this5.group = group.payload.data();
            _this5.title = group.payload.data().name; // Get Group Members

            if (_this5.group.members) {
              _this5.group.members.forEach(function (memberId) {
                _this5.dataProvider.getUser(memberId).snapshotChanges().subscribe(function (member) {
                  if (member.key != null) {
                    member = Object.assign({
                      $key: member.key
                    }, member.payload.data());

                    _this5.addUpdateOrRemoveMember(member);
                  }
                });
              });
            } // Get group messages


            _this5.dataProvider.getGroupMessages(_this5.groupId).snapshotChanges().subscribe(function (messagesRes) {
              var messages = messagesRes.payload.data();

              if (messages == null || messages == undefined) {
                messages = [];
              }

              console.log(_this5.messages);

              if (_this5.messages != null && _this5.messages != undefined) {
                // Just append newly added messages to the bottom of the view.
                if (messages.length > _this5.messages.length) {
                  var message = messages[messages.length - 1];

                  _this5.dataProvider.getUser(message.sender).snapshotChanges().subscribe(function (user) {
                    message.avatar = user.payload.data().img;
                  });

                  _this5.messages.push(message); // Also append to messagesToShow.


                  _this5.messagesToShow.push(message); // Reset scrollDirection to bottom.


                  _this5.scrollDirection = 'bottom';
                }
              } else {
                // Get all messages, this will be used as reference object for messagesToShow.
                _this5.messages = [];
                messages.forEach(function (message) {
                  console.log(message);

                  _this5.dataProvider.getUser(message.sender).snapshotChanges().subscribe(function (user) {
                    if (user.key != null) {
                      message.avatar = user.payload.data().img;
                    }
                  });

                  _this5.messages.push(message);
                }); // Load messages in relation to numOfMessages.

                if (_this5.startIndex === -1) {
                  // Get initial index for numberOfMessages to show.
                  if (_this5.messages.length - _this5.numberOfMessages > 0) {
                    _this5.startIndex = _this5.messages.length - _this5.numberOfMessages;
                  } else {
                    _this5.startIndex = 0;
                  }
                }

                if (!_this5.messagesToShow) {
                  _this5.messagesToShow = [];
                } // Set messagesToShow


                for (var i = _this5.startIndex; i < _this5.messages.length; i++) {
                  _this5.messagesToShow.push(_this5.messages[i]);
                }

                _this5.loadingProvider.hide();
              }
            });

            _this5.dataProvider.getGroupMembers(_this5.groupId).snapshotChanges().subscribe(function (memberIdsRes) {
              var memberIds = memberIdsRes.payload.data();

              if (memberIds.includes(firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid)) {
                _this5.loggedInUserIsMember = true;
              } else {
                _this5.loggedInUserIsMember = false;
              }
            });
          }); // Update messages' date time elapsed every minute based on Moment.js.

          var that = this;

          if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
              if (that.messages) {
                that.messages.forEach(function (message) {
                  var date = message.date;
                  message.date = new Date(date);
                });
              }
            }, 60000);
          }
        }
      }, {
        key: "getGroupDetailsandPosts",
        value: function getGroupDetailsandPosts() {
          var _this6 = this;

          // Get group details
          this.posts = [];
          this.groupId = this.route.snapshot.params.id;
          this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
            _this6.group = group.payload.data();
            _this6.title = group.payload.data().name; // Get Group Members

            if (_this6.group.members) {
              _this6.group.members.forEach(function (memberId) {
                _this6.dataProvider.getUser(memberId).snapshotChanges().subscribe(function (member) {
                  if (member.key != null) {
                    member = Object.assign({
                      $key: member.key
                    }, member.payload.data());

                    _this6.addUpdateOrRemoveMember(member);
                  }
                });
              });
            } // Get group posts


            _this6.firestore.collection('/posts/').ref.where('groupId', '==', _this6.groupId).get().then(function (snapshot) {
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
                    return el.addedByUser.addedByKey === _this6.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
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
                    return el.addedByUser.addedByKey === _this6.dataProvider.getCurrentUserId() && el.reactionType === 'Hug';
                  });
                }

                if (foundHug) {
                  post.showHug = true;
                } else {
                  post.showHug = false;
                }

                post.totalReactionCount = totalReactionCount;
                post.totalReviewCount = totalReviewCount;

                _this6.addOrUpdatePost(post); // this.dataProvider.getUser(childData.sender).snapshotChanges().subscribe((user: any) => {
                //   childData.avatar = user.payload.data().img;
                // });
                // this.posts.push(childData);

              });
            });

            Object.keys(_this6.group.members).forEach(function (key) {
              if (_this6.group.members[key] === firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid) {
                _this6.loggedInUserIsMember = true;
              } else {
                _this6.loggedInUserIsMember = false;
              }
            });
          }); // Update messages' date time elapsed every minute based on Moment.js.

          var that = this;

          if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
              if (that.posts) {
                that.posts.forEach(function (post) {
                  var date = post.date;
                  post.date = new Date(date);
                });
              }
            }, 60000);
          }
        } // Check if user exists in the group then add/update user.
        // If the user has already left the group, remove user from the list.

      }, {
        key: "addUpdateOrRemoveMember",
        value: function addUpdateOrRemoveMember(member) {
          console.log(member);

          if (this.group) {
            if (this.group.members.indexOf(member.$key) > -1) {
              // User exists in the group.
              if (!this.groupMembers) {
                this.groupMembers = [member];
              } else {
                var index = -1;

                for (var i = 0; i < this.groupMembers.length; i++) {
                  if (this.groupMembers[i].$key === member.$key) {
                    index = i;
                  }
                } // Add/Update User.


                if (index > -1) {
                  this.groupMembers[index] = member;
                } else {
                  this.groupMembers.push(member);
                }
              }
            } else {
              // User already left the group, remove member from list.
              var index1 = -1;

              for (var j = 0; j < this.groupMembers.length; j++) {
                if (this.groupMembers[j].$key === member.$key) {
                  index1 = j;
                }
              }

              if (index1 > -1) {
                this.groupMembers.splice(index1, 1);
              }
            }
          }
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged($event) {
          if (this.tab === 'groups') {
            this.title = this.group.name;
            this.getGroupDetailsandMessages();
          } else if (this.tab === 'posts') {
            this.title = this.group.name;
            this.getGroupDetailsandPosts();
          } else if (this.tab === 'polls') {
            this.title = this.group.name;
            this.getPolls();
          } else if (this.tab === 'resources') {
            this.title = this.group.name;
            this.getResources();
          } else if (this.tab === 'events') {
            this.title = this.group.name;
            this.getEvents();
          } else if (this.tab === 'groupInfo') {
            this.title = this.group.name;
          }
        }
      }, {
        key: "getPolls",
        value: function getPolls() {
          var _this7 = this;

          this.subscription = this.dataProvider.getGroupPolls(this.groupId).snapshotChanges().subscribe(function (pollIdsRes) {
            if (pollIdsRes.length > 0) {
              var pollIds = pollIdsRes.payload.data();

              if (pollIds == null || pollIds === undefined) {
                pollIds = [];
              }

              console.log(pollIds);
              pollIds.forEach(function (pollId) {
                var pId = pollId;
                console.log(pId);

                if (pId != null && pId !== 'system0000') {
                  _this7.dataProvider.getPollDetails(pId).snapshotChanges().subscribe(function (pollRes) {
                    var poll = Object.assign({
                      key: pollRes.payload.id
                    }, pollRes.payload.data);
                    console.log(poll);

                    _this7.addOrUpdatePoll(poll);
                  });
                }
              });

              _this7.loadingProvider.hide();
            } else {
              _this7.polls = [];

              _this7.loadingProvider.hide();
            }
          });
        } // Open Poll

      }, {
        key: "viewPoll",
        value: function viewPoll(poll) {
          this.router.navigateByUrl('poll/' + poll.key);
        } // View Resource selected

      }, {
        key: "viewResource",
        value: function viewResource(resource) {
          this.router.navigateByUrl('resource/' + resource.key);
          /*const navigationExtras: NavigationExtras = {
            state: {
              resource: resource
            }
          };
          this.router.navigate(['resource'], navigationExtras); */
        } // View Post selected

      }, {
        key: "viewPost",
        value: function viewPost(post) {
          console.log('postID: ' + post.key);
          this.router.navigateByUrl('post/' + post.key);
        } // View Resource selected

      }, {
        key: "viewEvent",
        value: function viewEvent(event) {
          this.router.navigateByUrl('event/' + event.key);
        }
      }, {
        key: "newPoll",
        value: function newPoll() {
          this.router.navigateByUrl('/new-poll/' + this.groupId); // this.app.getRootNav().push(NewPollPage, { groupId: this.groupId });
        }
      }, {
        key: "newPost",
        value: function newPost() {
          this.router.navigateByUrl('/new-post/' + this.groupId); // this.app.getRootNav().push(NewPollPage, { groupId: this.groupId });
        }
      }, {
        key: "newResource",
        value: function newResource() {
          this.router.navigateByUrl('/new-resource/' + this.groupId); // this.app.getRootNav().push(NewResourcePage, { groupId: this.groupId });
        }
      }, {
        key: "newEvent",
        value: function newEvent() {
          this.router.navigateByUrl('/new-event/' + this.groupId); // this.app.getRootNav().push(NewResourcePage, { groupId: this.groupId });
        }
      }, {
        key: "getResources",
        value: function getResources() {
          var _this8 = this;

          this.dataProvider.getGroupResources(this.groupId).snapshotChanges().subscribe(function (resourceIdsRes) {
            if (resourceIdsRes.length > 0) {
              var resourceIds = resourceIdsRes.payload.data();

              if (resourceIds == null || resourceIds === undefined) {
                resourceIds = [];
              }

              resourceIds.forEach(function (resourceId) {
                var rId = resourceId;

                _this8.dataProvider.getResourceDetails(rId).snapshotChanges().subscribe(function (resourceRes) {
                  var resource = Object.assign({
                    key: resourceRes.key
                  }, resourceRes.payload.data());
                  console.log(resource); // Check for Thanks

                  var totalReactionCount = 0;
                  var totalReviewCount = 0;

                  if (resource.reviews !== undefined) {
                    var rev = Object.keys(resource.reviews).map(function (e) {
                      totalReviewCount += 1;
                    });
                  }

                  var foundSmiley = false;

                  if (resource.reactions !== undefined) {
                    var values = Object.keys(resource.reactions).map(function (e) {
                      resource.reactions[e].key = e;
                      totalReactionCount += 1;
                      return resource.reactions[e];
                    }); // tslint:disable-next-line: max-line-length

                    foundSmiley = values.some(function (el) {
                      return el.addedByUser.addedByKey === _this8.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    resource.showSmiley = true;
                  } else {
                    resource.showSmiley = false;
                  } // Check for Bookmarks


                  var foundBookmark = false;

                  if (resource.reactions !== undefined) {
                    var _values2 = Object.keys(resource.reactions).map(function (e) {
                      resource.reactions[e].key = e;
                      return resource.reactions[e];
                    }); // tslint:disable-next-line: max-line-length


                    foundBookmark = _values2.some(function (el) {
                      return el.addedByUser.addedByKey === _this8.dataProvider.getCurrentUserId() && el.reactionType === 'Bookmark';
                    });
                  }

                  if (foundBookmark) {
                    resource.showBookmark = true;
                  } else {
                    resource.showBookmark = false;
                  }

                  resource.totalReviewCount = totalReviewCount;
                  resource.totalReactionCount = totalReactionCount;

                  _this8.addOrUpdateResource(resource);
                });
              });

              _this8.loadingProvider.hide();
            } else {
              _this8.resources = [];

              _this8.loadingProvider.hide();
            }
          });
        }
      }, {
        key: "getEvents",
        value: function getEvents() {
          var _this9 = this;

          this.dataProvider.getGroupEvents(this.groupId).snapshotChanges().subscribe(function (eventIdsRes) {
            if (eventIdsRes.length > 0) {
              var eventIds = eventIdsRes.payload.data();

              if (eventIds == null || eventIds === undefined) {
                eventIds = [];
              }

              eventIds.forEach(function (eventId) {
                var eId = eventId;

                _this9.dataProvider.getEventDetails(eId).snapshotChanges().subscribe(function (eventRes) {
                  var event = Object.assign({
                    key: eventRes.key
                  }, eventRes.payload.data()); // Check for Thanks

                  var totalReactionCount = 0;
                  var totalReviewCount = 0;

                  if (event.reviews !== undefined) {
                    var rev = Object.keys(event.reviews).map(function (e) {
                      totalReviewCount += 1;
                    });
                  }

                  var foundSmiley = false;

                  if (event.reactions !== undefined) {
                    var values = Object.keys(event.reactions).map(function (e) {
                      event.reactions[e].key = e;
                      totalReactionCount += 1;
                      return event.reactions[e];
                    }); // tslint:disable-next-line: max-line-length

                    foundSmiley = values.some(function (el) {
                      return el.addedByUser.addedByKey === _this9.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    event.showSmiley = true;
                  } else {
                    event.showSmiley = false;
                  } // Check for Checkin


                  var foundCheckin = false;

                  if (event.reactions !== undefined) {
                    var _values3 = Object.keys(event.reactions).map(function (e) {
                      event.reactions[e].key = e;
                      return event.reactions[e];
                    }); // tslint:disable-next-line: max-line-length


                    foundCheckin = _values3.some(function (el) {
                      return el.addedByUser.addedByKey === _this9.dataProvider.getCurrentUserId() && el.reactionType === 'Checkin';
                    });
                  }

                  if (foundCheckin) {
                    event.showCheckin = true;
                  } else {
                    event.showCheckin = false;
                  }

                  event.totalReviewCount = totalReviewCount;
                  event.totalReactionCount = totalReactionCount;

                  _this9.addOrUpdateEvent(event);
                });
              });

              _this9.loadingProvider.hide();
            } else {
              _this9.events = [];

              _this9.loadingProvider.hide();
            }
          });
        }
      }, {
        key: "openResourceFilter",
        value: function openResourceFilter() {
          this.openModal();
        }
      }, {
        key: "openModal",
        value: function openModal() {
          var _this10 = this;

          this.modalCtrl.create({
            component: _tag_modal_tag_modal_page__WEBPACK_IMPORTED_MODULE_14__["TagModalPage"],
            componentProps: {
              groupTags: this.resourceTags
            }
          }).then(function (res) {
            res.present();
          });
          this.modalCtrl.dismiss(function (data) {
            _this10.resourceTagsString = '';
            _this10.resourceTags = data;

            _this10.resourceTags.forEach(function (element) {
              if (element.isChecked == true) {
                _this10.resourceTagsString = _this10.resourceTagsString + ', ' + element.val;
              }
            });

            _this10.resourceTagsString = _this10.resourceTagsString.replace(', ', '');
          });
        } // Add or update group for real-time sync based on our observer.

      }, {
        key: "addOrUpdatePoll",
        value: function addOrUpdatePoll(poll) {
          var totalPollCount = 0;
          poll.pollTagsString = '';

          if (poll.pollTags && poll.pollTags) {
            poll.pollTags.forEach(function (element) {
              if (element.isChecked == true) {
                poll.pollTagsString = poll.pollTagsString + ', ' + element.val;
              }
            });
            poll.pollTagsString = poll.pollTagsString.replace(', ', '');
          } else {
            poll.pollTagsString = 'No tags found';
          } // Add total poll count


          if (poll.pollOptions) {
            poll.pollOptions.forEach(function (element) {
              if (element.members !== undefined) {
                totalPollCount = totalPollCount + element.members.length;
              }
            });
          }

          poll.totalPollCount = totalPollCount; // Add NEW Icon

          var startDate = new Date(poll.dateCreated);
          var endDate = new Date();
          var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

          if (seconds > 120) {
            poll.showNewIcon = false;
          } else {
            poll.showNewIcon = true;
          }

          if (!this.polls) {
            this.polls = [poll];
          } else {
            var index = -1;

            for (var i = 0; i < this.polls.length; i++) {
              if (this.polls[i].key == poll.key) {
                index = i;
              }
            }

            if (index > -1) {
              this.polls[index] = poll;
            } else {
              this.polls.push(poll);
            }
          }
        } // Add or update group for real-time sync based on our observer.

      }, {
        key: "addOrUpdateResource",
        value: function addOrUpdateResource(resource) {
          resource.resourceTagsString = '';

          if (resource.resourceTags && resource.resourceTags) {
            resource.resourceTags.forEach(function (element) {
              if (element.isChecked == true) {
                resource.resourceTagsString = resource.resourceTagsString + ', ' + element.val;
              }
            });
            resource.resourceTagsString = resource.resourceTagsString.replace(', ', '');
          } else {
            resource.resourceTagsString = 'No tags found';
          } // Add NEW Icon


          var startDate = new Date(resource.dateCreated);
          var endDate = new Date();
          var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

          if (seconds > 120) {
            resource.showNewIcon = false;
          } else {
            resource.showNewIcon = true;
          }

          if (!this.resources) {
            this.resources = [resource];
          } else {
            var index = -1;

            for (var i = 0; i < this.resources.length; i++) {
              if (this.resources[i].key == resource.key) {
                index = i;
              }
            }

            if (index > -1) {
              this.resources[index] = resource;
            } else {
              this.resources.push(resource);
            }
          }
        }
      }, {
        key: "addOrUpdatePost",
        value: function addOrUpdatePost(post) {
          post.postTagsString = '';

          if (post.resourceTags && post.resourceTags) {
            post.resourceTags.forEach(function (element) {
              if (element.isChecked == true) {
                post.postTagsString = post.resourceTagsString + ', ' + element.val;
              }
            });
            post.postTagsString = post.postTagsString.replace(', ', '');
          } else {
            post.postTagsString = 'No tags found';
          }

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
        } // Add or update group for real-time sync based on our observer.

      }, {
        key: "addOrUpdateEvent",
        value: function addOrUpdateEvent(event) {
          event.eventTagsString = '';

          if (event.eventTags) {
            event.eventTags.forEach(function (element) {
              if (element.isChecked === true) {
                event.eventTagsString = event.eventTagsString + ', ' + element.val;
              }
            }); // Remove first comma from the string

            event.eventTagsString = event.eventTagsString.replace(', ', '');
          } else {
            event.eventTagsString = 'No tags found';
          } // Add NEW Icon


          var startDate = new Date(event.dateCreated);
          var endDate = new Date();
          var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

          if (seconds > 120) {
            event.showNewIcon = false;
          } else {
            event.showNewIcon = true;
          }

          if (!this.events) {
            this.events = [event];
          } else {
            var index = -1;

            for (var i = 0; i < this.events.length; i++) {
              if (this.events[i].key === event.key) {
                index = i;
              }
            }

            if (index > -1) {
              this.events[index] = event;
            } else {
              this.events.push(event);
            }
          }
        }
      }, {
        key: "showGroupOptions",
        value: function showGroupOptions() {
          var _this11 = this;

          var action = this.actionSheet.create({
            header: 'Create a new ...',
            backdropDismiss: true,
            mode: 'md',
            cssClass: 'GroupAction',
            buttons: [{
              text: 'Post',
              icon: 'chatbubbles',
              handler: function handler() {
                _this11.newPost();
              }
            }, {
              text: 'Resource',
              icon: 'document',
              handler: function handler() {
                _this11.newResource();
              }
            }, {
              text: 'Poll',
              icon: 'podium',
              handler: function handler() {
                _this11.newPoll();
              }
            }, {
              text: 'Event',
              icon: 'calendar',
              cssClass: 'cancelAction',
              handler: function handler() {
                _this11.newEvent();
              }
            }]
          }).then(function (r) {
            return r.present();
          });
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
          // first find the post in the collection
          var postIndex = this.posts.findIndex(function (el) {
            return el.key === post.key;
          });
          var p = this.posts[postIndex];
          var reaction = {
            dateCreated: new Date().toString(),
            reactionType: reactionType
          };

          if (postIndex >= 0) {
            if (p.reactions === undefined) {
              var key = this.dataProvider.addFirstPostReactions(post.key, reaction); // reaction.key = key;
            } else {
              var _key = this.dataProvider.updatePostReactions(post.key, reaction); // reaction.key = key;

            }
          }
        }
      }, {
        key: "removePostReaction",
        value: function removePostReaction(post, reactionType) {
          var _this12 = this;

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
            var reactionIndex = values.find(function (el) {
              return el.addedByUser.addedByKey === _this12.dataProvider.getCurrentUserId() && el.reactionType === reactionType;
            });

            if (reactionIndex === undefined) {// this shouldn't have happened, so set the smiley to false for now
              // post.showSmiley = false;
            } else {
              console.log('remove reaction now : ' + post.key + ' : ' + reactionIndex.key);
              this.dataProvider.removePostReaction(post.key, reactionIndex.key);
            }
          }
        }
      }, {
        key: "showReactionsList",
        value: function showReactionsList(post) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var postIndex, p, modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(post.totalReactionCount === 0)) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    // first find the post in the collection
                    postIndex = this.posts.findIndex(function (el) {
                      return el.key === post.key;
                    });
                    p = this.posts[postIndex];
                    _context3.next = 6;
                    return this.modalCtrl.create({
                      component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__["ReactionListModalPage"],
                      componentProps: {
                        reactions: p.reactions
                      }
                    });

                  case 6:
                    modal = _context3.sent;
                    _context3.next = 9;
                    return modal.present();

                  case 9:
                    return _context3.abrupt("return", _context3.sent);

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "showResourceReactionsList",
        value: function showResourceReactionsList(resource) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var resourceIndex, p, modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(resource.totalReactionCount === 0)) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 2:
                    // first find the post in the collection
                    resourceIndex = this.resources.findIndex(function (el) {
                      return el.key === resource.key;
                    });
                    p = this.resources[resourceIndex];
                    _context4.next = 6;
                    return this.modalCtrl.create({
                      component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__["ReactionListModalPage"],
                      componentProps: {
                        reactions: p.reactions
                      }
                    });

                  case 6:
                    modal = _context4.sent;
                    _context4.next = 9;
                    return modal.present();

                  case 9:
                    return _context4.abrupt("return", _context4.sent);

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "showResourceBookmarkList",
        value: function showResourceBookmarkList(resource) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var resourceIndex, p, modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(resource.totalBookmarkCount === 0)) {
                      _context5.next = 2;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 2:
                    // first find the post in the collection
                    resourceIndex = this.resources.findIndex(function (el) {
                      return el.key === resource.key;
                    });
                    p = this.resources[resourceIndex];
                    _context5.next = 6;
                    return this.modalCtrl.create({
                      component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__["ReactionListModalPage"],
                      componentProps: {
                        reactions: p.bookmarks
                      }
                    });

                  case 6:
                    modal = _context5.sent;
                    _context5.next = 9;
                    return modal.present();

                  case 9:
                    return _context5.abrupt("return", _context5.sent);

                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "showEventReactionsList",
        value: function showEventReactionsList(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var eventIndex, p, modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(event.totalReactionCount === 0)) {
                      _context6.next = 2;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 2:
                    // first find the post in the collection
                    eventIndex = this.events.findIndex(function (el) {
                      return el.key === event.key;
                    });
                    p = this.events[eventIndex];
                    _context6.next = 6;
                    return this.modalCtrl.create({
                      component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__["ReactionListModalPage"],
                      componentProps: {
                        reactions: p.reactions
                      }
                    });

                  case 6:
                    modal = _context6.sent;
                    _context6.next = 9;
                    return modal.present();

                  case 9:
                    return _context6.abrupt("return", _context6.sent);

                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "submitReactionResource",
        value: function submitReactionResource(resource, reactionType) {
          switch (reactionType) {
            case 'Bookmark':
              {
                if (!resource.showBookmark) {
                  this.addResourceReaction(resource, reactionType);
                  resource.showBookmark = true;
                  resource.totalReactionCount += 1;
                } else {
                  this.removeResourceReaction(resource, reactionType);
                  resource.showBookmark = false;
                  resource.totalReactionCount -= 1;
                }

                break;
              }

            case 'Thanks':
              {
                if (!resource.showSmiley) {
                  this.addResourceReaction(resource, reactionType);
                  resource.showSmiley = true;
                  resource.totalReactionCount += 1;
                } else {
                  this.removeResourceReaction(resource, reactionType);
                  resource.showSmiley = false;
                  resource.totalReactionCount -= 1;
                }

                break;
              }
          }
        }
      }, {
        key: "addResourceReaction",
        value: function addResourceReaction(resource, reactionType) {
          // first find the post in the collection
          var resourceIndex = this.resources.findIndex(function (el) {
            return el.key === resource.key;
          });
          var p = this.resources[resourceIndex];
          var reaction = {
            dateCreated: new Date().toString(),
            reactionType: reactionType
          };

          if (resourceIndex >= 0) {
            if (p.reactions === undefined) {
              var key = this.dataProvider.addFirstResourceReactions(resource.key, reaction); // reaction.key = key;
            } else {
              var _key2 = this.dataProvider.updateResourceReactions(resource.key, reaction); // reaction.key = key;

            }
          }
        }
      }, {
        key: "removeResourceReaction",
        value: function removeResourceReaction(resource, reactionType) {
          var _this13 = this;

          // first find the post in the collection
          var resourceIndex = this.resources.findIndex(function (el) {
            return el.key === resource.key;
          });
          var p = this.resources[resourceIndex];
          var found = false;

          if (p.reactions !== undefined) {
            var values = Object.keys(p.reactions).map(function (e) {
              return p.reactions[e];
            });
            var reactionIndex = values.find(function (el) {
              return el.addedByUser.addedByKey === _this13.dataProvider.getCurrentUserId() && el.reactionType === reactionType;
            });

            if (reactionIndex === undefined) {// this shouldn't have happened, so set the smiley to false for now
              // post.showSmiley = false;
            } else {
              console.log('remove reaction now : ' + resource.key + ' : ' + reactionIndex.key);
              this.dataProvider.removeResourceReaction(resource.key, reactionIndex.key);
            }
          }
        }
      }, {
        key: "submitReactionEvent",
        value: function submitReactionEvent(event, reactionType) {
          switch (reactionType) {
            case 'Checkin':
              {
                if (!event.showCheckin) {
                  this.addEventReaction(event, reactionType);
                  event.showCheckin = true;
                  event.totalReactionCount += 1;
                } else {
                  this.removeEventReaction(event, reactionType);
                  event.showCheckin = false;
                  event.totalReactionCount -= 1;
                }

                break;
              }

            case 'Thanks':
              {
                if (!event.showSmiley) {
                  this.addEventReaction(event, reactionType);
                  event.showSmiley = true;
                  event.totalReactionCount += 1;
                } else {
                  this.removeEventReaction(event, reactionType);
                  event.showSmiley = false;
                  event.totalReactionCount -= 1;
                }

                break;
              }
          }
        }
      }, {
        key: "addEventReaction",
        value: function addEventReaction(event, reactionType) {
          // first find the post in the collection
          var eventIndex = this.events.findIndex(function (el) {
            return el.key === event.key;
          });
          var p = this.events[eventIndex];
          var reaction = {
            dateCreated: new Date().toString(),
            reactionType: reactionType
          };

          if (eventIndex >= 0) {
            if (p.reactions === undefined) {
              var key = this.dataProvider.addFirstEventReactions(event.key, reaction); // reaction.key = key;
            } else {
              var _key3 = this.dataProvider.updateEventReactions(event.key, reaction); // reaction.key = key;

            }
          }
        }
      }, {
        key: "removeEventReaction",
        value: function removeEventReaction(event, reactionType) {
          var _this14 = this;

          // first find the post in the collection
          var eventIndex = this.events.findIndex(function (el) {
            return el.key === event.key;
          });
          var p = this.events[eventIndex];
          var found = false;

          if (p.reactions !== undefined) {
            var values = Object.keys(p.reactions).map(function (e) {
              return p.reactions[e];
            });
            var reactionIndex = values.find(function (el) {
              return el.addedByUser.addedByKey === _this14.dataProvider.getCurrentUserId() && el.reactionType === reactionType;
            });

            if (reactionIndex === undefined) {// this shouldn't have happened, so set the smiley to false for now
              // post.showSmiley = false;
            } else {
              console.log('remove reaction now : ' + event.key + ' : ' + reactionIndex.key);
              this.dataProvider.removeEventReaction(event.key, reactionIndex.key);
            }
          }
        }
      }]);

      return GroupPage;
    }();

    GroupPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["Contacts"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], GroupPage.prototype, "content", void 0);
    GroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./group.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./group.page.scss */
      "./src/app/group/group.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["Contacts"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])], GroupPage);
    /***/
  }
}]);
//# sourceMappingURL=group-group-module-es5.js.map