(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title (click)=\"groupInfo()\">{{title}}</ion-title>\r\n    <ion-buttons slot=\"end\"> \r\n      <ion-button *ngIf=\"loggedInUserIsMember == true\" (click)=\"showGroupOptions()\" ><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-button>\r\n   <!-- <ion-button *ngIf=\"loggedInUserIsMember == false\" (click)=\"joinGroup()\" >Join Group</ion-button>\r\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='posts'\" (click)=\"newPost()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='polls'\" (click)=\"newPoll()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='resources'\" (click)=\"newResource()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='events'\" (click)=\"newEvent()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t--></ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n  <ion-segment color=\"secondary\" padding [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t<!-- <ion-segment-button value=\"group\">\r\n  \t\t\t<ion-icon name=\"chatbubbles\"></ion-icon>\r\n    </ion-segment-button> -->\r\n    <ion-segment-button value=\"posts\">\r\n      <ion-icon name=\"chatbubbles\"></ion-icon>\r\n      <span class=\"tab-title\">Posts</span>\r\n    </ion-segment-button>\r\n\t\t<ion-segment-button value=\"polls\">\r\n      <ion-icon name=\"podium\"></ion-icon>\r\n      <span class=\"tab-title\">Polls</span>\r\n\t\t</ion-segment-button>\r\n\t\t<ion-segment-button value=\"resources\">\r\n      <ion-icon name=\"library\"></ion-icon>\r\n      <span class=\"tab-title\">Resources</span>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"events\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <span class=\"tab-title\">Events</span>\r\n    </ion-segment-button>\r\n\t<!--\t<ion-segment-button value=\"groupInfo\">\r\n      <ion-icon layout=\"icon-end\" name=\"ellipsis-vertical\"></ion-icon>\r\n\t\t</ion-segment-button>\r\n--></ion-segment>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div [ngSwitch]=\"tab\" >\r\n    <!-- <div *ngSwitchCase=\"'group'\" >\r\n  <div class=\"messages\" #content>\r\n    <p class=\"center\" *ngIf=\"startIndex > 0\"><span tappable (click)=\"loadPreviousMessages()\">Load previous\r\n        messages</span></p>\r\n    <div *ngFor=\"let message of messagesToShow\">\r\n    \r\n      <div *ngIf=\"isSystemMessage(message)\" style=\"text-align:center; float: left; color:#ccc\">\r\n        <p>\r\n          <ion-icon name=\"{{message.icon}}\"></ion-icon>\r\n          {{message.message}} {{message.date | DateFormat}}\r\n        </p>\r\n      </div>\r\n \r\n      <div *ngIf=\"isSender(message) && !isSystemMessage(message)\" class=\"chatbox right\" (press)=\"onPress($event)\" (pressup)=\"onPressUp($event,message)\">\r\n\r\n        <div *ngIf=\"isSender(message) && !isSystemMessage(message)\">\r\n          <div class=\"right\" *ngIf=\"message.type == 'text'\"  (press)=\"onPress($event)\" (pressup)=\"onPressUp($event,message)\">\r\n            <p>{{message.message}}</p>\r\n            <span>{{message.date | DateFormat}}</span>\r\n          </div>\r\n          <div class=\"right\" *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\r\n          <div class=\"right\" *ngIf=\"message.type == 'contact'\" [innerHtml]=\"message.message\"></div>\r\n          <div class=\"right\" *ngIf=\"message.type == 'image'\">\r\n            <img tappable (click)=\"enlargeImage(message.url)\" src=\"{{message.url}}\" (load)=\"doScroll()\"\r\n              onError=\"this.src='./assets/images/default-dp.png'\" />\r\n            <span>{{message.date | DateFormat}}</span>\r\n          </div>\r\n          <div *ngIf=\"message.type == 'video'\">\r\n            <video controls width=\"100%\">\r\n              <source src=\"{{message.message}}\" type=\"video/mp4\">\r\n            </video>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"!isSender(message) && !isSystemMessage(message)\" class=\"chatbox left\">\r\n        <img src=\"{{message.avatar}}\" tappable (click)=\"viewUser(message.sender)\" (load)=\"doScroll()\"\r\n          onError=\"this.src='./assets/images/default-dp.png'\" style=\"height:30px; border-radius: 100%;float:left;\" />\r\n        <div class=\"left\" *ngIf=\"message.type == 'text'\">\r\n          <p>{{message.message}}</p>\r\n          <span>{{message.date | DateFormat}}</span>\r\n        </div>\r\n        <div class=\"left\" *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\r\n        <div class=\"left\" *ngIf=\"message.type == 'contact'\" [innerHtml]=\"message.message\"></div>\r\n        <div class=\"left\" *ngIf=\"message.type == 'image'\">\r\n          <img tappable (click)=\"enlargeImage(message.url)\" src=\"{{message.url}}\"\r\n            onError=\"this.src='./assets/images/default-dp.png'\" (load)=\"doScroll()\" />\r\n          <span>{{message.date | DateFormat}}</span>\r\n        </div>\r\n        <div *ngIf=\"message.type == 'video'\">\r\n          <video controls width=\"100%\">\r\n            <source src=\"{{message.message}}\" type=\"video/mp4\">\r\n          </video>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  </div> -->\r\n  <div *ngSwitchCase=\"'posts'\">\r\n    <!-- No Posts to show -->\r\n     <div class=\"empty-list\" *ngIf=\"posts && posts.length == 0\">\r\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\r\n     <p>No new Posts added to this group.</p>\r\n     </div>\r\n     <!-- Show Posts -->\r\n     <div *ngIf=\"posts && posts.length > 0\" >\r\n     <div class=\"listing-item\" *ngFor=\"let item of posts | reverse\" >\r\n      <ion-card>\r\n        <ion-card-header>\r\n           <ion-card-subtitle (click)=\"viewPost(item)\">\r\n            <img class=\"subtitle\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{item.senderName}} posted {{item.date | DateFormat}}\r\n            <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \r\n          </ion-card-subtitle>\r\n          <ion-card-title>{{item.title}}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"message\" (click)=\"viewPost(item)\">\r\n          {{item.message}}\r\n        </ion-card-content>\r\n\r\n            <ion-row >\r\n              <ion-col>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n                 <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                 <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\r\n                 <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n                 <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n                </ion-button>\r\n                </ion-buttons> \r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-buttons>\r\n                  <ion-button (click)=\"showReactionsList(item)\">\r\n                <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n              </ion-button>\r\n            </ion-buttons> \r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-buttons>\r\n                  <ion-button>\r\n                <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n              </ion-button>\r\n            </ion-buttons> \r\n              </ion-col>\r\n            </ion-row>\r\n\r\n      </ion-card>\r\n    </div>\r\n     </div>\r\n    </div>\r\n     <div *ngSwitchCase=\"'polls'\">\r\n    <!-- No polls to show -->\r\n     <div class=\"empty-list\" *ngIf=\"polls && polls.length == 0\">\r\n     <h1><ion-icon name=\"md-chatbubbles\"></ion-icon></h1>\r\n     <p>No new polls yet.</p>\r\n     </div>\r\n     <!-- Show polls -->\r\n     <div *ngIf=\"polls && polls.length > 0\">\r\n      <div class=\"listing-item\" *ngFor=\"let item of polls  | reverse\">\r\n     <ion-card>\r\n       <ion-card-header (click)=\"viewPoll(item)\">\r\n            <ion-card-subtitle>\r\n             <img class=\"subtitle\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{item.addedByUser.addedByUsername}}, posted {{item.dateCreated | DateFormat}}\r\n             <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \r\n           </ion-card-subtitle>\r\n           <ion-card-title>{{item.description}}</ion-card-title>\r\n         </ion-card-header>\r\n       <ion-row class=\"info-row\" *ngFor=\"let pollOption of item.pollOptions\">\r\n         <ion-col class=\"poll-option-col\">\r\n         <!--<button ion-button color=\"primary\" clear small icon-start> -->\r\n            <div><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checked.svg\" ></ion-icon> <span class=\"text\">{{pollOption.name}}</span></div>\r\n           \r\n         <!--</button>-->\r\n         </ion-col>\r\n       </ion-row>\r\n             <ion-row class=\"info-row\" >\r\n\t\t\t\t<ion-col size=\"8\">\r\n                  <span class=\"text\">Poll ends {{item.dateEnding | date:'fullDate'}}</span> \r\n               </ion-col>\r\n\t\t\t   <ion-col size=\"2\">\r\n\t\t\t   </ion-col>\r\n               <ion-col size=\"2\">\r\n                 <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\r\n               </ion-col>\r\n             </ion-row>\r\n      </ion-card>\r\n   </div>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'resources'\">\r\n    <!-- No Resources to show -->\r\n     <div class=\"empty-list\" *ngIf=\"resources && resources.length == 0\">\r\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\r\n     <p>No new Resources added to this group.</p>\r\n     </div>\r\n     <!-- Show Resources -->\r\n     <div *ngIf=\"resources && resources.length > 0\" >\r\n      <div class=\"listing-item\" *ngFor=\"let item of resources\">\r\n       <div *ngIf=\"item?.type == 'contact'\">\r\n     <ion-card>\r\n        <ion-card-header>\r\n             <ion-card-subtitle (click)=\"viewResource(item)\">\r\n              <img class=\"subtitle\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{item.addedByUser.addedByUsername}}, posted {{item.dateCreated | DateFormat}}\r\n              <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \r\n            </ion-card-subtitle>\r\n            <ion-card-title>{{item.title}}</ion-card-title>\r\n          </ion-card-header>\r\n              <ion-card-content class=\"message\" (click)=\"viewResource(item)\">\r\n\t\t\t   {{item.name}}<br/>\r\n\t\t\t   {{item.address}}<br/><br/>\r\n\t\t\t   {{item.email}}<br/>\r\n\t\t\t   {{item.phones}}<br/>\r\n         </ion-card-content>\r\n              <ion-row>\r\n         <ion-col class=\"reactions-col\">\r\n                 <ion-buttons>\r\n                   <ion-button (click)=\"submitReactionResource(item, 'Bookmark')\">\r\n                  <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                  <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                 </ion-button>\r\n                 </ion-buttons> \r\n               </ion-col>\r\n         <ion-col class=\"reactions-col\">\r\n                 <ion-buttons>\r\n                   <ion-button (click)=\"submitReactionResource(item, 'Thanks')\">\r\n                  <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                  <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                 </ion-button>\r\n                 </ion-buttons> \r\n               </ion-col>\r\n          <ion-col class=\"reactions-col\">\r\n                 <ion-buttons>\r\n                   <ion-button (click)=\"showResourceReactionsList(item)\">\r\n                 <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n               </ion-button>\r\n             </ion-buttons> \r\n               </ion-col>\r\n               <ion-col class=\"reactions-col\">\r\n                 <ion-buttons>\r\n                   <ion-button>\r\n                    <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                  </ion-button>\r\n             </ion-buttons> \r\n               </ion-col>\r\n              </ion-row>\r\n       </ion-card>\r\n       </div>\r\n       <div *ngIf=\"item?.type == 'weblink'\">\r\n        <ion-card>\r\n            <ion-card-header>\r\n               <ion-card-subtitle (click)=\"viewResource(item)\">\r\n                <img class=\"subtitle\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{item.addedByUser.addedByUsername}}, posted {{item.dateCreated | DateFormat}}\r\n                <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \r\n              </ion-card-subtitle>\r\n              <ion-card-title>{{item.title}}</ion-card-title>\r\n            </ion-card-header>\r\n         <ion-card-content class=\"message\" (click)=\"viewResource(item)\">\r\n        <app-text-shell animation=\"bouncing\" [data]=\"item.metatitle\"></app-text-shell><br/>\r\n        <img [src]=\"item.metaicon\"/> \r\n        <app-text-shell animation=\"bouncing\" [data]=\"item.metadescription\"></app-text-shell>\r\n        <app-text-shell animation=\"bouncing\" [data]=\"item.metasite\"></app-text-shell>\r\n           </ion-card-content>\r\n  \r\n                       <ion-row>\r\n           <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                     <ion-button (click)=\"submitReactionResource(item, 'Bookmark')\">\r\n                    <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                    <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                   </ion-button>\r\n                   </ion-buttons> \r\n                 </ion-col>\r\n           <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                     <ion-button (click)=\"submitReactionResource(item, 'Thanks')\">\r\n                    <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                    <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                   </ion-button>\r\n                   </ion-buttons> \r\n                 </ion-col>\r\n            <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                     <ion-button (click)=\"showResourceReactionsList(item)\">\r\n                   <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                 </ion-button>\r\n               </ion-buttons> \r\n                 </ion-col>\r\n                 <ion-col class=\"reactions-col\">\r\n                   <ion-buttons>\r\n                     <ion-button>\r\n                      <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                    </ion-button>\r\n               </ion-buttons> \r\n                 </ion-col>\r\n                </ion-row>\r\n        </ion-card>\r\n           </div>\r\n     </div>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'events'\">\r\n      <!-- No Events to show -->\r\n       <div class=\"empty-list\" *ngIf=\"events && events.length == 0\">\r\n       <h1><ion-icon name=\"chatbubbles\"></ion-icon></h1>\r\n       <p>No new upcoming Events added to this group.</p>\r\n       </div>\r\n       <!-- Show Events -->\r\n       <div *ngIf=\"events && events.length > 0\" >\r\n        <div class=\"listing-item\" *ngFor=\"let item of events\">\r\n          <ion-card>\r\n         <ion-card-header>\r\n              <ion-card-subtitle (click)=\"viewEvent(item)\">\r\n               <img class=\"subtitle\" src=\"{{item.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> {{item.addedByUser.addedByUsername}}, posted {{item.dateCreated | DateFormat}}\r\n               <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" /> \r\n             </ion-card-subtitle>\r\n             <ion-card-title>{{item.title}}</ion-card-title>\r\n           </ion-card-header>\r\n               <ion-card-content class=\"message\" (click)=\"viewEvent(item)\">\r\n          {{item.eventDate}} at {{item.eventTime}}<br/><br/>\r\n          {{item.address}}<br/><br/>\r\n          {{item.link}}\r\n          </ion-card-content>\r\n               <ion-row>\r\n          <ion-col>\r\n                  <ion-buttons>\r\n                    <ion-button (click)=\"submitReactionEvent(item, 'Checkin')\">\r\n                   <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                   <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                  </ion-button>\r\n                  </ion-buttons> \r\n                </ion-col>\r\n          <ion-col>\r\n                  <ion-buttons>\r\n                    <ion-button (click)=\"submitReactionEvent(item, 'Thanks')\">\r\n                   <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                   <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                  </ion-button>\r\n                  </ion-buttons> \r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-buttons>\r\n                    <ion-button (click)=\"showEventReactionsList(item)\">\r\n                  <div><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                </ion-button>\r\n              </ion-buttons> \r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-buttons>\r\n                    <ion-button>\r\n                     <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                   </ion-button>\r\n              </ion-buttons> \r\n                </ion-col>\r\n               </ion-row>\r\n        </ion-card>\r\n        </div>\r\n       </div>\r\n      </div>\r\n      <!-- Group Info -->\r\n <div *ngSwitchCase=\"'groupInfo'\">\r\n   <ion-row  style=\"background: white\" padding>\r\n     <ion-col col-md-8>\r\n     <h4 tappable (click)=\"setName()\">{{group.name}}</h4>\r\n     <p tappable style=\"color:#aaa\" (click)=\"setDescription()\">{{group.description}}</p>\r\n     </ion-col>\r\n     <ion-col col-md-4 class=\"center\">\r\n       <img src=\"{{group.img}}\" style=\"border-radius: 100%; width: 80px; height: 80px;\" tappable (click)=\"setPhoto()\" onError=\"this.src='./assets/images/default-group.png'\">\r\n     </ion-col>\r\n   </ion-row>\r\n   <ion-list *ngIf=\"groupMembers\">\r\n     <ion-list-header>\r\n     Group Members ({{groupMembers.length}})\r\n     </ion-list-header>\r\n    <!-- <ion-item (click)=\"addMembers()\">\r\n     <ion-icon name=\"add\" item-left></ion-icon>\r\n     <h2>Add Members</h2>\r\n     </ion-item>-->\r\n     <ion-item *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.$key)\">\r\n     <ion-avatar item-left>\r\n       <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\"/>\r\n     </ion-avatar>\r\n     <h2>{{member.name}}</h2>\r\n     <p>{{member.description}}</p>\r\n     </ion-item>\r\n   </ion-list>\r\n   <ion-list-header *ngIf=\"loggedInUserIsMember == true\" >\r\n     More\r\n   </ion-list-header>\r\n   <ion-list *ngIf=\"loggedInUserIsMember == true\"  style=\"text-align: center;\">  \r\n     <ion-item no-lines tappable (click)=\"leaveGroup()\" *ngIf=\"groupMembers && groupMembers.length > 1\">\r\n     Leave Group\r\n     </ion-item>\r\n     <!-- When there's only one member left, allow deleting of group. -->\r\n     <ion-item color=\"danger\" no-lines tappable (click)=\"deleteGroup()\" *ngIf=\"groupMembers && groupMembers.length <= 1\">\r\n     Delete Group\r\n     </ion-item>\r\n   </ion-list>\r\n   <p padding style=\"color:#aaa\">Started {{group.dateCreated | DateFormat}}</p>\r\n   </div>\r\n  </div>\r\n</ion-content>\r\n<!-- Message Box -->\r\n<ion-footer *ngIf=\"loggedInUserIsMember == true  && tab=='group'\">\r\n  <ion-toolbar>\r\n    <ion-item  class=\"bottom_bar\">\r\n      <ion-textarea style=\"margin:0\" type=\"text\" rows=\"0\" placeholder=\"Type your message\" [(ngModel)]=\"message\"\r\n        (ionFocus)=\"scrollBottom()\" (keypress)=\"onType($event.keyCode)\"></ion-textarea>\r\n      <ion-buttons slot=\"end\" style=\"margin-left:4px;\">\r\n        <ion-button fill=\"clear\" (click)=\"attach()\">\r\n          <ion-icon name=\"attach\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"send('text')\" [disabled]=\"!message\">\r\n          <ion-icon name=\"send\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/group/group.module.ts":
/*!***************************************!*\
  !*** ./src/app/group/group.module.ts ***!
  \***************************************/
/*! exports provided: GroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPageModule", function() { return GroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group.page */ "./src/app/group/group.page.ts");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");









const routes = [
    {
        path: '',
        component: _group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]
    }
];
let GroupPageModule = class GroupPageModule {
};
GroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]]
    })
], GroupPageModule);



/***/ }),

/***/ "./src/app/group/group.page.scss":
/*!***************************************!*\
  !*** ./src/app/group/group.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF;\n}\n\n.GroupAction .cancelAction {\n  color: red;\n}\n\n.tab-title {\n  font-size: 10px;\n  padding-bottom: 8px;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.listing-item .reactions-col {\n  margin: -3px;\n}\n\n.listing-item .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.listing-item .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.listing-item .subtitle {\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n}\n\n.listing-item .newIcon {\n  height: 40px;\n  vertical-align: middle;\n}\n\n.listing-item .message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.listing-item .info-row {\n  --ion-grid-column-padding: 0px;\n  padding-left: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.listing-item .info-row .main-info-col {\n  padding-right: calc(var(--page-margin) / 2);\n  line-height: 1;\n}\n\n.listing-item .info-row poll-option-col {\n  padding-right: calc(var(--page-margin) / 3);\n}\n\n.listing-item .info-row .item-name {\n  margin: 0px 0px var(--page-margin);\n  text-transform: capitalize;\n  font-size: 16px;\n}\n\n.listing-item .info-row .item-name .name-anchor {\n  color: var(--ion-color-dark);\n  display: block;\n  text-decoration: none;\n}\n\n.listing-item .info-row .item-description {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-shade);\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.listing-item .info-row .item-address {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.listing-item .info-row .item-tags {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.listing-item .stats-row {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin);\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.listing-item .stats-row .stats-icon {\n  font-size: 24px;\n}\n\n.listing-item .stats-row .item-rating {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-right: 10px;\n}\n\n.listing-item .stats-row .item-rating .rating-value {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n\n.listing-item .stats-row .item-reviews {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.listing-item .stats-row .item-reviews .reviews-count {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvQzpcXFVzZXJzXFxzZXRoaVxcZmlyZWNoYXQ0X3YyXFxmaXJlY2hhdDQvc3JjXFxhcHBcXGdyb3VwXFxncm91cC5wYWdlLnNjc3MiLCJzcmMvYXBwL2dyb3VwL2dyb3VwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSxxQkFBQTtBQ0FKOztBRElFO0VBQ0UsVUFBQTtBQ0RKOztBRElBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDREY7O0FER0E7RUFFSSx3Q0FBQTtBQ0RKOztBRElBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1DO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7QUNKSDs7QURNRTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNKTjs7QURNSTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQ0pOOztBRE1FO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDSko7O0FEUUk7RUFDRSw4QkFBQTtFQUVBLGdDQUFBO0VBQ0EsNENBQUE7QUNQTjs7QURTTTtFQUNFLDJDQUFBO0VBQ0EsY0FBQTtBQ1BSOztBRFNNO0VBQ0UsMkNBQUE7QUNQUjs7QURVTTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDUlI7O0FEVVE7RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ1JWOztBRFlNO0VBQ0UsNENBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1ZSOztBRGFNO0VBQ0UsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hSOztBRGFNO0VBQ0UsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hSOztBRGVJO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNkTjs7QURnQk07RUFDRSxlQUFBO0FDZFI7O0FEaUJNO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLGtCQUFBO0FDZlI7O0FEaUJRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ2ZWOztBRG1CTTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNqQlI7O0FEbUJRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ2pCViIsImZpbGUiOiJzcmMvYXBwL2dyb3VwL2dyb3VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gIFxyXG4gICAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xyXG4gIH1cclxuXHJcbi5Hcm91cEFjdGlvbiB7XHJcbiAgLmNhbmNlbEFjdGlvbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxufVxyXG4udGFiLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG4ubGlzdGluZy1pdGVtIHtcclxuICAgIC8vcGFkZGluZzogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4vLyAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHNvbGlkIHZhcigtLXBhZ2UtY29sb3IpO1xyXG5cclxuLnJlYWN0aW9ucy1jb2wge1xyXG4gIG1hcmdpbjogLTNweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gfVxyXG4gXHJcbiAudGV4dHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuIH1cclxuICAuc3VidGl0bGUge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLm5ld0ljb24ge1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcblxyXG4gIFxyXG4gICAgLmluZm8tcm93IHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblxyXG4gICAgICAubWFpbi1pbmZvLWNvbCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgfVxyXG4gICAgICBwb2xsLW9wdGlvbi1jb2wge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0tbmFtZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgXHJcbiAgICAgICAgLm5hbWUtYW5jaG9yIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0tYWRkcmVzcyB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtLXRhZ3Mge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnN0YXRzLXJvdyB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuICBcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBcclxuICAgICAgLnN0YXRzLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1yYXRpbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBcclxuICAgICAgICAucmF0aW5nLXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1yZXZpZXdzIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBcclxuICAgICAgICAucmV2aWV3cy1jb3VudCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XG59XG5cbi5Hcm91cEFjdGlvbiAuY2FuY2VsQWN0aW9uIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRhYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4ubGlzdGluZy1pdGVtIC5yZWFjdGlvbnMtY29sIHtcbiAgbWFyZ2luOiAtM3B4O1xufVxuLmxpc3RpbmctaXRlbSAuaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5saXN0aW5nLWl0ZW0gLnRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuLmxpc3RpbmctaXRlbSAuc3VidGl0bGUge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmxpc3RpbmctaXRlbSAubmV3SWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5saXN0aW5nLWl0ZW0gLm1lc3NhZ2Uge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5tYWluLWluZm8tY29sIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyBwb2xsLW9wdGlvbi1jb2wge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLml0ZW0tbmFtZSB7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuaXRlbS1uYW1lIC5uYW1lLWFuY2hvciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuaXRlbS1hZGRyZXNzIHtcbiAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLml0ZW0tdGFncyB7XG4gIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5saXN0aW5nLWl0ZW0gLnN0YXRzLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5saXN0aW5nLWl0ZW0gLnN0YXRzLXJvdyAuc3RhdHMtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5saXN0aW5nLWl0ZW0gLnN0YXRzLXJvdyAuaXRlbS1yYXRpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubGlzdGluZy1pdGVtIC5zdGF0cy1yb3cgLml0ZW0tcmF0aW5nIC5yYXRpbmctdmFsdWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG4ubGlzdGluZy1pdGVtIC5zdGF0cy1yb3cgLml0ZW0tcmV2aWV3cyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubGlzdGluZy1pdGVtIC5zdGF0cy1yb3cgLml0ZW0tcmV2aWV3cyAucmV2aWV3cy1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/group/group.page.ts":
/*!*************************************!*\
  !*** ./src/app/group/group.page.ts ***!
  \*************************************/
/*! exports provided: GroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPage", function() { return GroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _popover_popover_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../popover/popover.page */ "./src/app/popover/popover.page.ts");
/* harmony import */ var _tag_modal_tag_modal_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tag-modal/tag-modal.page */ "./src/app/tag-modal/tag-modal.page.ts");
/* harmony import */ var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../reaction-list-modal/reaction-list-modal.page */ "./src/app/reaction-list-modal/reaction-list-modal.page.ts");
















let GroupPage = class GroupPage {
    // GroupPage
    // This is the page where the user can chat with other group members and view group info.
    constructor(dataProvider, navCtrl, modalCtrl, firestore, alertCtrl, imageProvider, loadingProvider, camera, keyboard, actionSheet, contacts, geolocation, route, router, popoverCtrl) {
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
        this.scrollDirection = 'bottom';
        // Set number of messages to show.
        this.numberOfMessages = 10;
        this.polls = [];
        this.resources = [];
        this.events = [];
        this.loggedInUserIsMember = 'false';
        this.resourceTags = [];
        this.toggled = false;
        // posts
        this.posts = [];
        this.numberOfPosts = 10;
    }
    handleSelection(event) {
        this.emojitext = this.emojitext + ' ' + event.char;
    }
    ngOnInit() {
        this.loadingProvider.show();
        this.tab = 'posts';
        this.title = 'Posts';
        this.searchResource = '';
        this.searchPoll = '';
        this.searchEvent = '';
        // Get user information for system message sent to the group when a member was added.
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((user) => {
            this.user = user.payload.data();
        });
        this.getGroupDetailsandPosts();
        this.loadingProvider.hide();
    }
    ionViewDidEnter() {
        // this.getGroupDetailsandMessages();
    }
    // Load previous messages in relation to numberOfMessages.
    loadPreviousMessages() {
        const that = this;
        // Show loading.
        this.loadingProvider.show();
        setTimeout(function () {
            // Set startIndex to load more messages.
            if (that.startIndex - that.numberOfMessages > -1) {
                that.startIndex -= that.numberOfMessages;
            }
            else {
                that.startIndex = 0;
            }
            // Refresh our messages list.
            that.messages = null;
            that.messagesToShow = null;
            // Set scroll direction to top.
            that.scrollDirection = 'top';
            // Populate list again.
            that.ionViewDidEnter();
        }, 1000);
    }
    // Update messagesRead when user lefts this page.
    ionViewWillLeave() {
        if (this.messages) {
            this.setMessagesRead(this.messages);
        }
    }
    // Check if currentPage is active, then update user's messagesRead.
    setMessagesRead(messages) {
        // if (this.navCtrl.getActive().instance instanceof GroupPage) {
        // Update user's messagesRead on database.
        this.firestore.doc('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid + '/groups/' + this.groupId).update({
            messagesRead: this.messages.length
        });
        // }
    }
    // Check if 'return' button is pressed and send the message.
    onType(keyCode) {
        if (keyCode == 13) {
            // this.keyboard.close();
            // this.send();
        }
    }
    // Scroll to bottom of page after a short delay.
    scrollBottom() {
        const that = this;
        setTimeout(function () {
            that.content.nativeElement.scrollBottom = that.content.nativeElement.scrollHeight;
        }, 300);
    }
    // Scroll to top of the page after a short delay.
    scrollTop() {
        const that = this;
        setTimeout(function () {
            that.content.nativeElement.scrollTop = that.content.nativeElement.scrollHeight;
        }, 300);
    }
    // Scroll depending on the direction.
    doScroll() {
        if (this.scrollDirection === 'bottom') {
            this.scrollBottom();
        }
        else if (this.scrollDirection === 'top') {
            this.scrollTop();
        }
    }
    // Check if the user is the sender of the message.
    isSender(message) {
        if (message.sender === firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid) {
            return true;
        }
        else {
            return false;
        }
    }
    // Check if the message is a system message.
    isSystemMessage(message) {
        if (message.type === 'system') {
            return true;
        }
        else {
            return false;
        }
    }
    // View user info
    viewUser(userId) {
        this.router.navigateByUrl('/userinfo/' + userId);
    }
    // Send text message to the group.
    send(type) {
        // Clone an instance of messages object so it will not directly be updated.
        // The messages object should be updated by our observer declared on ionViewDidLoad.
        const messages = JSON.parse(JSON.stringify(this.messages));
        messages.push({
            date: new Date().toString(),
            sender: firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid,
            // tslint:disable-next-line: object-literal-shorthand
            type: type,
            message: this.message
        });
        // Update group messages.
        this.dataProvider.getGroup(this.groupId).update({
            // tslint:disable-next-line: object-literal-shorthand
            messages: messages
        });
        // Clear messagebox.
        this.message = '';
    }
    // Enlarge image messages.
    enlargeImage(img) {
        // let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
        // imageModal.present();
    }
    attach() {
        const action = this.actionSheet.create({
            header: 'Choose attachments',
            buttons: [{
                    text: 'Camera',
                    handler: () => {
                        console.log('take photo');
                        this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
                            // Process image message.
                            this.sendPhotoMessage(url);
                        });
                    }
                }, {
                    text: 'Photo Library',
                    handler: () => {
                        console.log('Access gallery');
                        this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
                            // Process image message.
                            this.sendPhotoMessage(url);
                        });
                    }
                }, {
                    text: 'Video',
                    handler: () => {
                        console.log('Video');
                        this.imageProvider.uploadGroupVideoMessage(this.groupId).then(url => {
                            this.sendVideoMessage(url);
                        });
                    }
                }, {
                    text: 'Location',
                    handler: () => {
                        console.log('Location');
                        this.geolocation.getCurrentPosition({
                            timeout: 2000
                        }).then(res => {
                            const locationMessage = 'current location: lat:' + res.coords.latitude + ' lng:' + res.coords.longitude;
                            const mapUrl = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';
                            const confirm = this.alertCtrl.create({
                                header: 'Your Location',
                                message: locationMessage,
                                buttons: [{
                                        text: 'cancel',
                                        handler: () => {
                                            console.log('canceled');
                                        }
                                    }, {
                                        text: 'Share',
                                        handler: () => {
                                            console.log('share');
                                            this.message = locationMessage + '<br>' + mapUrl;
                                            this.send('location');
                                        }
                                    }]
                            }).then(r => r.present());
                        }, locationErr => {
                            console.log('Location Error' + JSON.stringify(locationErr));
                        });
                    }
                }, {
                    text: 'Contact',
                    handler: () => {
                        console.log('Share contact');
                        this.contacts.pickContact().then(data => {
                            console.log(data.displayName);
                            console.log(data.phoneNumbers[0].value);
                            this.message = '<b>Name:</b> ' + data.displayName + '<br><b>Mobile:</b> <a href=\'tel:' + data.phoneNumbers[0].value + '\'>' + data.phoneNumbers[0].value + '</a>';
                            this.send('contact');
                        }, err => {
                            console.log(err);
                        });
                    }
                }, {
                    text: 'cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancelled');
                    }
                }]
        }).then(r => r.present());
    }
    takePhoto() {
        this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
            // Process image message.
            this.sendPhotoMessage(url);
        });
    }
    // Process photoMessage on database.
    sendPhotoMessage(url) {
        const messages = JSON.parse(JSON.stringify(this.messages));
        messages.push({
            date: new Date().toString(),
            sender: firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid,
            type: 'image',
            url
        });
        this.dataProvider.getGroup(this.groupId).update({
            messages
        });
        this.message = '';
    }
    sendVideoMessage(url) {
        const messages = JSON.parse(JSON.stringify(this.messages));
        messages.push({
            date: new Date().toString(),
            sender: firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid,
            type: 'video',
            url
        });
        this.dataProvider.getGroup(this.groupId).update({
            messages
        });
        this.message = '';
    }
    // View group info.
    groupInfo() {
        this.router.navigateByUrl('/groupinfo/' + this.groupId);
    }
    // Controller Functions
    onPress($event) {
        console.log('onPress', $event);
    }
    onPressUp(event, message) {
        console.log('onPressUp', event);
        console.log(event.center.x);
        console.log(event.center.y);
        this.presentPopover(event, message);
    }
    // MY Methods ************************
    joinGroup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alert = this.alertCtrl.create({
                header: 'Join Group',
                message: 'Are you sure you want to join this group?',
                buttons: [
                    {
                        text: 'Cancel'
                    },
                    {
                        text: 'Join',
                        handler: data => {
                            // Proceed
                            this.loadingProvider.show();
                            // Add groupInfo to each friend added to the group.
                            this.firestore.doc('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid + '/groups/' + this.groupId).update({
                                messagesRead: 0
                            });
                            // Add friend as members of the group.
                            this.group.members.push(firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid);
                            // Add system message that the members are added to the group.
                            this.group.messages.push({
                                date: new Date().toString(),
                                sender: firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid,
                                type: 'system',
                                message: this.user.name + ' has joined the group.',
                                icon: 'md-contacts'
                            });
                            // Update group data on the database.
                            this.dataProvider.getGroup(this.groupId).update({
                                members: this.group.members,
                                messages: this.group.messages
                            }).then(() => {
                                // Back.
                                this.loadingProvider.hide();
                                this.navCtrl.back();
                            });
                        }
                    }
                ]
            }).then(r => r.present());
        });
    }
    presentPopover(myEvent, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let ev;
            ev = {
                target: {
                    getBoundingClientRect: () => {
                        return {
                            top: myEvent.center.y,
                            left: myEvent.center.x
                        };
                    }
                }
            };
            const popover = yield this.popoverCtrl.create({
                component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_13__["PopoverPage"],
                componentProps: { message, groupId: this.groupId },
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
    /// ********************* POLL Functions ***********************************/
    getGroupDetailsandMessages() {
        // Get group details
        this.groupId = this.route.snapshot.params.id;
        this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            console.log('group:', group);
            this.group = group.payload.data();
            this.title = group.payload.data().name;
            // Get Group Members
            if (this.group.members) {
                this.group.members.forEach((memberId) => {
                    this.dataProvider.getUser(memberId).snapshotChanges().subscribe((member) => {
                        if (member.key != null) {
                            member = Object.assign({ $key: member.key }, member.payload.data());
                            this.addUpdateOrRemoveMember(member);
                        }
                    });
                });
            }
            // Get group messages
            this.dataProvider.getGroupMessages(this.groupId).snapshotChanges().subscribe((messagesRes) => {
                let messages = messagesRes.payload.data();
                if (messages == null || messages == undefined) {
                    messages = [];
                }
                console.log(this.messages);
                if (this.messages != null && this.messages != undefined) {
                    // Just append newly added messages to the bottom of the view.
                    if (messages.length > this.messages.length) {
                        const message = messages[messages.length - 1];
                        this.dataProvider.getUser(message.sender).snapshotChanges().subscribe((user) => {
                            message.avatar = user.payload.data().img;
                        });
                        this.messages.push(message);
                        // Also append to messagesToShow.
                        this.messagesToShow.push(message);
                        // Reset scrollDirection to bottom.
                        this.scrollDirection = 'bottom';
                    }
                }
                else {
                    // Get all messages, this will be used as reference object for messagesToShow.
                    this.messages = [];
                    messages.forEach((message) => {
                        console.log(message);
                        this.dataProvider.getUser(message.sender).snapshotChanges().subscribe((user) => {
                            if (user.key != null) {
                                message.avatar = user.payload.data().img;
                            }
                        });
                        this.messages.push(message);
                    });
                    // Load messages in relation to numOfMessages.
                    if (this.startIndex === -1) {
                        // Get initial index for numberOfMessages to show.
                        if ((this.messages.length - this.numberOfMessages) > 0) {
                            this.startIndex = this.messages.length - this.numberOfMessages;
                        }
                        else {
                            this.startIndex = 0;
                        }
                    }
                    if (!this.messagesToShow) {
                        this.messagesToShow = [];
                    }
                    // Set messagesToShow
                    for (let i = this.startIndex; i < this.messages.length; i++) {
                        this.messagesToShow.push(this.messages[i]);
                    }
                    this.loadingProvider.hide();
                }
            });
            this.dataProvider.getGroupMembers(this.groupId).snapshotChanges().subscribe((memberIdsRes) => {
                const memberIds = memberIdsRes.payload.data();
                if (memberIds.includes(firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid)) {
                    this.loggedInUserIsMember = true;
                }
                else {
                    this.loggedInUserIsMember = false;
                }
            });
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        const that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(() => {
                if (that.messages) {
                    that.messages.forEach((message) => {
                        const date = message.date;
                        message.date = new Date(date);
                    });
                }
            }, 60000);
        }
    }
    getGroupDetailsandPosts() {
        // Get group details
        this.posts = [];
        this.groupId = this.route.snapshot.params.id;
        this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
            this.title = group.payload.data().name;
            // Get Group Members
            if (this.group.members) {
                this.group.members.forEach((memberId) => {
                    this.dataProvider.getUser(memberId).snapshotChanges().subscribe((member) => {
                        if (member.key != null) {
                            member = Object.assign({ $key: member.key }, member.payload.data());
                            this.addUpdateOrRemoveMember(member);
                        }
                    });
                });
            }
            // Get group posts
            this.firestore.collection('/posts/').ref
                .where('groupId', '==', this.groupId)
                .get().then((snapshot) => {
                console.log('where clause' + snapshot);
                snapshot.forEach((childSnapshot) => {
                    let post;
                    post = Object.assign({ key: childSnapshot.id }, childSnapshot.data());
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
                    // Check for Thanks
                    let totalReactionCount = 0;
                    let totalReviewCount = 0;
                    if (post.reviews !== undefined) {
                        const rev = Object.keys(post.reviews).map(function (e) {
                            totalReviewCount += 1;
                        });
                    }
                    let foundSmiley = false;
                    if (post.reactions !== undefined) {
                        const values = Object.keys(post.reactions).map(function (e) {
                            post.reactions[e].key = e;
                            totalReactionCount += 1;
                            return post.reactions[e];
                        });
                        foundSmiley = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks');
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
                        const values = Object.keys(post.reactions).map(function (e) {
                            post.reactions[e].key = e;
                            return post.reactions[e];
                        });
                        foundHug = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() && el.reactionType === 'Hug');
                    }
                    if (foundHug) {
                        post.showHug = true;
                    }
                    else {
                        post.showHug = false;
                    }
                    post.totalReactionCount = totalReactionCount;
                    post.totalReviewCount = totalReviewCount;
                    this.addOrUpdatePost(post);
                    // this.dataProvider.getUser(childData.sender).snapshotChanges().subscribe((user: any) => {
                    //   childData.avatar = user.payload.data().img;
                    // });
                    // this.posts.push(childData);
                });
            });
            Object.keys(this.group.members).forEach(key => {
                if (this.group.members[key] === firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid) {
                    this.loggedInUserIsMember = true;
                }
                else {
                    this.loggedInUserIsMember = false;
                }
            });
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        const that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(() => {
                if (that.posts) {
                    that.posts.forEach((post) => {
                        const date = post.date;
                        post.date = new Date(date);
                    });
                }
            }, 60000);
        }
    }
    // Check if user exists in the group then add/update user.
    // If the user has already left the group, remove user from the list.
    addUpdateOrRemoveMember(member) {
        console.log(member);
        if (this.group) {
            if (this.group.members.indexOf(member.$key) > -1) {
                // User exists in the group.
                if (!this.groupMembers) {
                    this.groupMembers = [member];
                }
                else {
                    let index = -1;
                    for (let i = 0; i < this.groupMembers.length; i++) {
                        if (this.groupMembers[i].$key === member.$key) {
                            index = i;
                        }
                    }
                    // Add/Update User.
                    if (index > -1) {
                        this.groupMembers[index] = member;
                    }
                    else {
                        this.groupMembers.push(member);
                    }
                }
            }
            else {
                // User already left the group, remove member from list.
                let index1 = -1;
                for (let j = 0; j < this.groupMembers.length; j++) {
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
    segmentChanged($event) {
        if (this.tab === 'groups') {
            this.title = this.group.name;
            this.getGroupDetailsandMessages();
        }
        else if (this.tab === 'posts') {
            this.title = this.group.name;
            this.getGroupDetailsandPosts();
        }
        else if (this.tab === 'polls') {
            this.title = this.group.name;
            this.getPolls();
        }
        else if (this.tab === 'resources') {
            this.title = this.group.name;
            this.getResources();
        }
        else if (this.tab === 'events') {
            this.title = this.group.name;
            this.getEvents();
        }
        else if (this.tab === 'groupInfo') {
            this.title = this.group.name;
        }
    }
    getPolls() {
        this.subscription = this.dataProvider.getGroupPolls(this.groupId)
            .snapshotChanges().subscribe((pollIdsRes) => {
            if (pollIdsRes.length > 0) {
                let pollIds = pollIdsRes.payload.data();
                if (pollIds == null || pollIds === undefined) {
                    pollIds = [];
                }
                console.log(pollIds);
                pollIds.forEach((pollId) => {
                    const pId = pollId;
                    console.log(pId);
                    if (pId != null && pId !== 'system0000') {
                        this.dataProvider.getPollDetails(pId).snapshotChanges().subscribe((pollRes) => {
                            const poll = Object.assign({ key: pollRes.payload.id }, pollRes.payload.data);
                            console.log(poll);
                            this.addOrUpdatePoll(poll);
                        });
                    }
                });
                this.loadingProvider.hide();
            }
            else {
                this.polls = [];
                this.loadingProvider.hide();
            }
        });
    }
    // Open Poll
    viewPoll(poll) {
        this.router.navigateByUrl('poll/' + poll.key);
    }
    // View Resource selected
    viewResource(resource) {
        this.router.navigateByUrl('resource/' + resource.key);
        /*const navigationExtras: NavigationExtras = {
          state: {
            resource: resource
          }
        };
        this.router.navigate(['resource'], navigationExtras); */
    }
    // View Post selected
    viewPost(post) {
        console.log('postID: ' + post.key);
        this.router.navigateByUrl('post/' + post.key);
    }
    // View Resource selected
    viewEvent(event) {
        this.router.navigateByUrl('event/' + event.key);
    }
    newPoll() {
        this.router.navigateByUrl('/new-poll/' + this.groupId);
        // this.app.getRootNav().push(NewPollPage, { groupId: this.groupId });
    }
    newPost() {
        this.router.navigateByUrl('/new-post/' + this.groupId);
        // this.app.getRootNav().push(NewPollPage, { groupId: this.groupId });
    }
    newResource() {
        this.router.navigateByUrl('/new-resource/' + this.groupId);
        // this.app.getRootNav().push(NewResourcePage, { groupId: this.groupId });
    }
    newEvent() {
        this.router.navigateByUrl('/new-event/' + this.groupId);
        // this.app.getRootNav().push(NewResourcePage, { groupId: this.groupId });
    }
    getResources() {
        this.dataProvider.getGroupResources(this.groupId)
            .snapshotChanges().subscribe((resourceIdsRes) => {
            if (resourceIdsRes.length > 0) {
                let resourceIds = resourceIdsRes.payload.data();
                if (resourceIds == null || resourceIds === undefined) {
                    resourceIds = [];
                }
                resourceIds.forEach((resourceId) => {
                    const rId = resourceId;
                    this.dataProvider.getResourceDetails(rId).snapshotChanges().subscribe((resourceRes) => {
                        const resource = Object.assign({ key: resourceRes.key }, resourceRes.payload.data());
                        console.log(resource);
                        // Check for Thanks
                        let totalReactionCount = 0;
                        let totalReviewCount = 0;
                        if (resource.reviews !== undefined) {
                            const rev = Object.keys(resource.reviews).map(function (e) {
                                totalReviewCount += 1;
                            });
                        }
                        let foundSmiley = false;
                        if (resource.reactions !== undefined) {
                            const values = Object.keys(resource.reactions).map(function (e) {
                                resource.reactions[e].key = e;
                                totalReactionCount += 1;
                                return resource.reactions[e];
                            });
                            // tslint:disable-next-line: max-line-length
                            foundSmiley = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks');
                        }
                        if (foundSmiley) {
                            resource.showSmiley = true;
                        }
                        else {
                            resource.showSmiley = false;
                        }
                        // Check for Bookmarks
                        let foundBookmark = false;
                        if (resource.reactions !== undefined) {
                            const values = Object.keys(resource.reactions).map(function (e) {
                                resource.reactions[e].key = e;
                                return resource.reactions[e];
                            });
                            // tslint:disable-next-line: max-line-length
                            foundBookmark = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() && el.reactionType === 'Bookmark');
                        }
                        if (foundBookmark) {
                            resource.showBookmark = true;
                        }
                        else {
                            resource.showBookmark = false;
                        }
                        resource.totalReviewCount = totalReviewCount;
                        resource.totalReactionCount = totalReactionCount;
                        this.addOrUpdateResource(resource);
                    });
                });
                this.loadingProvider.hide();
            }
            else {
                this.resources = [];
                this.loadingProvider.hide();
            }
        });
    }
    getEvents() {
        this.dataProvider.getGroupEvents(this.groupId).snapshotChanges().subscribe((eventIdsRes) => {
            if (eventIdsRes.length > 0) {
                let eventIds = eventIdsRes.payload.data();
                if (eventIds == null || eventIds === undefined) {
                    eventIds = [];
                }
                eventIds.forEach((eventId) => {
                    const eId = eventId;
                    this.dataProvider.getEventDetails(eId).snapshotChanges().subscribe((eventRes) => {
                        const event = Object.assign({ key: eventRes.key }, eventRes.payload.data());
                        // Check for Thanks
                        let totalReactionCount = 0;
                        let totalReviewCount = 0;
                        if (event.reviews !== undefined) {
                            const rev = Object.keys(event.reviews).map(function (e) {
                                totalReviewCount += 1;
                            });
                        }
                        let foundSmiley = false;
                        if (event.reactions !== undefined) {
                            const values = Object.keys(event.reactions).map(function (e) {
                                event.reactions[e].key = e;
                                totalReactionCount += 1;
                                return event.reactions[e];
                            });
                            // tslint:disable-next-line: max-line-length
                            foundSmiley = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks');
                        }
                        if (foundSmiley) {
                            event.showSmiley = true;
                        }
                        else {
                            event.showSmiley = false;
                        }
                        // Check for Checkin
                        let foundCheckin = false;
                        if (event.reactions !== undefined) {
                            const values = Object.keys(event.reactions).map(function (e) {
                                event.reactions[e].key = e;
                                return event.reactions[e];
                            });
                            // tslint:disable-next-line: max-line-length
                            foundCheckin = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() && el.reactionType === 'Checkin');
                        }
                        if (foundCheckin) {
                            event.showCheckin = true;
                        }
                        else {
                            event.showCheckin = false;
                        }
                        event.totalReviewCount = totalReviewCount;
                        event.totalReactionCount = totalReactionCount;
                        this.addOrUpdateEvent(event);
                    });
                });
                this.loadingProvider.hide();
            }
            else {
                this.events = [];
                this.loadingProvider.hide();
            }
        });
    }
    openResourceFilter() {
        this.openModal();
    }
    openModal() {
        this.modalCtrl.create({
            component: _tag_modal_tag_modal_page__WEBPACK_IMPORTED_MODULE_14__["TagModalPage"],
            componentProps: { groupTags: this.resourceTags }
        }).then(res => {
            res.present();
        });
        this.modalCtrl.dismiss((data) => {
            this.resourceTagsString = '';
            this.resourceTags = data;
            this.resourceTags.forEach(element => {
                if (element.isChecked == true) {
                    this.resourceTagsString = this.resourceTagsString + ', ' + element.val;
                }
            });
            this.resourceTagsString = this.resourceTagsString.replace(', ', '');
        });
    }
    // Add or update group for real-time sync based on our observer.
    addOrUpdatePoll(poll) {
        let totalPollCount = 0;
        poll.pollTagsString = '';
        if (poll.pollTags && poll.pollTags) {
            poll.pollTags.forEach(element => {
                if (element.isChecked == true) {
                    poll.pollTagsString = poll.pollTagsString + ', ' + element.val;
                }
            });
            poll.pollTagsString = poll.pollTagsString.replace(', ', '');
        }
        else {
            poll.pollTagsString = 'No tags found';
        }
        // Add total poll count
        if (poll.pollOptions) {
            poll.pollOptions.forEach(element => {
                if (element.members !== undefined) {
                    totalPollCount = totalPollCount + element.members.length;
                }
            });
        }
        poll.totalPollCount = totalPollCount;
        // Add NEW Icon
        const startDate = new Date(poll.dateCreated);
        const endDate = new Date();
        const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
        if (seconds > 120) {
            poll.showNewIcon = false;
        }
        else {
            poll.showNewIcon = true;
        }
        if (!this.polls) {
            this.polls = [poll];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.polls.length; i++) {
                if (this.polls[i].key == poll.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.polls[index] = poll;
            }
            else {
                this.polls.push(poll);
            }
        }
    }
    // Add or update group for real-time sync based on our observer.
    addOrUpdateResource(resource) {
        resource.resourceTagsString = '';
        if (resource.resourceTags && resource.resourceTags) {
            resource.resourceTags.forEach(element => {
                if (element.isChecked == true) {
                    resource.resourceTagsString = resource.resourceTagsString + ', ' + element.val;
                }
            });
            resource.resourceTagsString = resource.resourceTagsString.replace(', ', '');
        }
        else {
            resource.resourceTagsString = 'No tags found';
        }
        // Add NEW Icon
        const startDate = new Date(resource.dateCreated);
        const endDate = new Date();
        const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
        if (seconds > 120) {
            resource.showNewIcon = false;
        }
        else {
            resource.showNewIcon = true;
        }
        if (!this.resources) {
            this.resources = [resource];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.resources.length; i++) {
                if (this.resources[i].key == resource.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.resources[index] = resource;
            }
            else {
                this.resources.push(resource);
            }
        }
    }
    addOrUpdatePost(post) {
        post.postTagsString = '';
        if (post.resourceTags && post.resourceTags) {
            post.resourceTags.forEach(element => {
                if (element.isChecked == true) {
                    post.postTagsString = post.resourceTagsString + ', ' + element.val;
                }
            });
            post.postTagsString = post.postTagsString.replace(', ', '');
        }
        else {
            post.postTagsString = 'No tags found';
        }
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
    // Add or update group for real-time sync based on our observer.
    addOrUpdateEvent(event) {
        event.eventTagsString = '';
        if (event.eventTags) {
            event.eventTags.forEach(element => {
                if (element.isChecked === true) {
                    event.eventTagsString = event.eventTagsString + ', ' + element.val;
                }
            });
            // Remove first comma from the string
            event.eventTagsString = event.eventTagsString.replace(', ', '');
        }
        else {
            event.eventTagsString = 'No tags found';
        }
        // Add NEW Icon
        const startDate = new Date(event.dateCreated);
        const endDate = new Date();
        const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
        if (seconds > 120) {
            event.showNewIcon = false;
        }
        else {
            event.showNewIcon = true;
        }
        if (!this.events) {
            this.events = [event];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.events.length; i++) {
                if (this.events[i].key === event.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.events[index] = event;
            }
            else {
                this.events.push(event);
            }
        }
    }
    showGroupOptions() {
        const action = this.actionSheet.create({
            header: 'Create a new ...',
            backdropDismiss: true,
            mode: 'md',
            cssClass: 'GroupAction',
            buttons: [{
                    text: 'Post',
                    icon: 'chatbubbles',
                    handler: () => {
                        this.newPost();
                    }
                }, {
                    text: 'Resource',
                    icon: 'document',
                    handler: () => {
                        this.newResource();
                    }
                }, {
                    text: 'Poll',
                    icon: 'podium',
                    handler: () => {
                        this.newPoll();
                    }
                }, {
                    text: 'Event',
                    icon: 'calendar',
                    cssClass: 'cancelAction',
                    handler: () => {
                        this.newEvent();
                    }
                }]
        }).then(r => r.present());
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
        }
    }
    addPostReaction(post, reactionType) {
        // first find the post in the collection
        const postIndex = this.posts.findIndex(el => el.key === post.key);
        const p = this.posts[postIndex];
        const reaction = {
            dateCreated: new Date().toString(),
            reactionType
        };
        if (postIndex >= 0) {
            if (p.reactions === undefined) {
                const key = this.dataProvider.addFirstPostReactions(post.key, reaction);
                // reaction.key = key;
            }
            else {
                const key = this.dataProvider.updatePostReactions(post.key, reaction);
                // reaction.key = key;
            }
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
            const reactionIndex = values.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                && el.reactionType === reactionType);
            if (reactionIndex === undefined) {
                // this shouldn't have happened, so set the smiley to false for now
                // post.showSmiley = false;
            }
            else {
                console.log('remove reaction now : ' + post.key + ' : ' + reactionIndex.key);
                this.dataProvider.removePostReaction(post.key, reactionIndex.key);
            }
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
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__["ReactionListModalPage"],
                componentProps: {
                    reactions: p.reactions
                }
            });
            return yield modal.present();
        });
    }
    showResourceReactionsList(resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (resource.totalReactionCount === 0) {
                return;
            }
            // first find the post in the collection
            const resourceIndex = this.resources.findIndex(el => el.key === resource.key);
            const p = this.resources[resourceIndex];
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__["ReactionListModalPage"],
                componentProps: {
                    reactions: p.reactions
                }
            });
            return yield modal.present();
        });
    }
    showResourceBookmarkList(resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (resource.totalBookmarkCount === 0) {
                return;
            }
            // first find the post in the collection
            const resourceIndex = this.resources.findIndex(el => el.key === resource.key);
            const p = this.resources[resourceIndex];
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__["ReactionListModalPage"],
                componentProps: {
                    reactions: p.bookmarks
                }
            });
            return yield modal.present();
        });
    }
    showEventReactionsList(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event.totalReactionCount === 0) {
                return;
            }
            // first find the post in the collection
            const eventIndex = this.events.findIndex(el => el.key === event.key);
            const p = this.events[eventIndex];
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__["ReactionListModalPage"],
                componentProps: {
                    reactions: p.reactions
                }
            });
            return yield modal.present();
        });
    }
    submitReactionResource(resource, reactionType) {
        switch (reactionType) {
            case 'Bookmark': {
                if (!resource.showBookmark) {
                    this.addResourceReaction(resource, reactionType);
                    resource.showBookmark = true;
                    resource.totalReactionCount += 1;
                }
                else {
                    this.removeResourceReaction(resource, reactionType);
                    resource.showBookmark = false;
                    resource.totalReactionCount -= 1;
                }
                break;
            }
            case 'Thanks': {
                if (!resource.showSmiley) {
                    this.addResourceReaction(resource, reactionType);
                    resource.showSmiley = true;
                    resource.totalReactionCount += 1;
                }
                else {
                    this.removeResourceReaction(resource, reactionType);
                    resource.showSmiley = false;
                    resource.totalReactionCount -= 1;
                }
                break;
            }
        }
    }
    addResourceReaction(resource, reactionType) {
        // first find the post in the collection
        const resourceIndex = this.resources.findIndex(el => el.key === resource.key);
        const p = this.resources[resourceIndex];
        const reaction = {
            dateCreated: new Date().toString(),
            reactionType
        };
        if (resourceIndex >= 0) {
            if (p.reactions === undefined) {
                const key = this.dataProvider.addFirstResourceReactions(resource.key, reaction);
                // reaction.key = key;
            }
            else {
                const key = this.dataProvider.updateResourceReactions(resource.key, reaction);
                // reaction.key = key;
            }
        }
    }
    removeResourceReaction(resource, reactionType) {
        // first find the post in the collection
        const resourceIndex = this.resources.findIndex(el => el.key === resource.key);
        const p = this.resources[resourceIndex];
        const found = false;
        if (p.reactions !== undefined) {
            const values = Object.keys(p.reactions).map(function (e) {
                return p.reactions[e];
            });
            const reactionIndex = values.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                && el.reactionType === reactionType);
            if (reactionIndex === undefined) {
                // this shouldn't have happened, so set the smiley to false for now
                // post.showSmiley = false;
            }
            else {
                console.log('remove reaction now : ' + resource.key + ' : ' + reactionIndex.key);
                this.dataProvider.removeResourceReaction(resource.key, reactionIndex.key);
            }
        }
    }
    submitReactionEvent(event, reactionType) {
        switch (reactionType) {
            case 'Checkin': {
                if (!event.showCheckin) {
                    this.addEventReaction(event, reactionType);
                    event.showCheckin = true;
                    event.totalReactionCount += 1;
                }
                else {
                    this.removeEventReaction(event, reactionType);
                    event.showCheckin = false;
                    event.totalReactionCount -= 1;
                }
                break;
            }
            case 'Thanks': {
                if (!event.showSmiley) {
                    this.addEventReaction(event, reactionType);
                    event.showSmiley = true;
                    event.totalReactionCount += 1;
                }
                else {
                    this.removeEventReaction(event, reactionType);
                    event.showSmiley = false;
                    event.totalReactionCount -= 1;
                }
                break;
            }
        }
    }
    addEventReaction(event, reactionType) {
        // first find the post in the collection
        const eventIndex = this.events.findIndex(el => el.key === event.key);
        const p = this.events[eventIndex];
        const reaction = {
            dateCreated: new Date().toString(),
            reactionType
        };
        if (eventIndex >= 0) {
            if (p.reactions === undefined) {
                const key = this.dataProvider.addFirstEventReactions(event.key, reaction);
                // reaction.key = key;
            }
            else {
                const key = this.dataProvider.updateEventReactions(event.key, reaction);
                // reaction.key = key;
            }
        }
    }
    removeEventReaction(event, reactionType) {
        // first find the post in the collection
        const eventIndex = this.events.findIndex(el => el.key === event.key);
        const p = this.events[eventIndex];
        const found = false;
        if (p.reactions !== undefined) {
            const values = Object.keys(p.reactions).map(function (e) {
                return p.reactions[e];
            });
            const reactionIndex = values.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                && el.reactionType === reactionType);
            if (reactionIndex === undefined) {
                // this shouldn't have happened, so set the smiley to false for now
                // post.showSmiley = false;
            }
            else {
                console.log('remove reaction now : ' + event.key + ' : ' + reactionIndex.key);
                this.dataProvider.removeEventReaction(event.key, reactionIndex.key);
            }
        }
    }
};
GroupPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["Contacts"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GroupPage.prototype, "content", void 0);
GroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group.page.scss */ "./src/app/group/group.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_6__["Contacts"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])
], GroupPage);



/***/ })

}]);
//# sourceMappingURL=group-group-module-es2015.js.map