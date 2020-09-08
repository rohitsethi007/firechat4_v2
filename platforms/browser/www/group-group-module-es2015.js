(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title (click)=\"groupInfo()\">{{title}}</ion-title>\r\n    <ion-buttons slot=\"end\"> \r\n      <ion-button *ngIf=\"loggedInUserIsMember == true\" (click)=\"showGroupOptions()\" ><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-button>\r\n   <ion-button *ngIf=\"loggedInUserIsMember == false\" (click)=\"joinGroup()\" >Join Group</ion-button>\r\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='posts'\" (click)=\"newPost()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='polls'\" (click)=\"newPoll()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='resources'\" (click)=\"newResource()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='events'\" (click)=\"newEvent()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\r\n\t</ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n  <ion-segment value=\"posts\" color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t<!-- <ion-segment-button value=\"group\">\r\n  \t\t\t<ion-icon name=\"chatbubbles\"></ion-icon>\r\n    </ion-segment-button> -->\r\n\t\t<!-- <ion-segment-button value=\"groupInfo\">\r\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\r\n\t\t</ion-segment-button> -->\r\n    <ion-segment-button value=\"posts\">\r\n      <ion-icon size=\"medium\" name=\"chatbubbles\"></ion-icon>\r\n      <!-- <span class=\"tab-title\">Posts</span> -->\r\n    </ion-segment-button>\r\n\t\t<ion-segment-button value=\"polls\">\r\n      <ion-icon size=\"medium\" name=\"podium\"></ion-icon>\r\n      <!-- <span class=\"tab-title\">Polls</span> -->\r\n\t\t</ion-segment-button>\r\n\t\t<ion-segment-button value=\"resources\">\r\n      <ion-icon size=\"medium\" name=\"library\"></ion-icon>\r\n      <!-- <span class=\"tab-title\">Resources</span> -->\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"events\">\r\n      <ion-icon size=\"medium\" name=\"calendar\"></ion-icon>\r\n      <!-- <span class=\"tab-title\">Events</span> -->\r\n    </ion-segment-button>\r\n</ion-segment>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div [ngSwitch]=\"tab\" >\r\n\r\n  <div *ngSwitchCase=\"'posts'\">\r\n    <!-- No Posts to show -->\r\n     <div class=\"empty-list\" *ngIf=\"posts && posts.length == 0\">\r\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\r\n     <p>No new Posts added to this group.</p>\r\n     </div>\r\n     <!-- Show Posts -->\r\n     <div *ngIf=\"posts && posts.length > 0\" >\r\n     <div class=\"listing-item\" *ngFor=\"let item of posts\" >\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-row>\r\n            <ion-col size=10>\r\n           <ion-card-subtitle class=\"addedBy\">\r\n            <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n             <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n              <br/>\r\n             <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\r\n            <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\r\n          </ion-card-subtitle>\r\n        </ion-col>\r\n        <ion-col size=2>\r\n          <ion-buttons>\r\n            <ion-button (click)=\"showPostOptions(item)\">\r\n              <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        </ion-row>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\r\n          <div (click)=\"viewPost(item)\">\r\n            <div>\r\n              <ion-slides class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\r\n              <ion-slide *ngFor=\"let s of item.postMedia\">\r\n                <div class=\"bgSizeContain\" \r\n                [ngStyle]=\"{'background-image':'url('+s+')'}\">\r\n              </div>\r\n              </ion-slide>\r\n            </ion-slides>\r\n            </div>\r\n          <ion-label><b>{{item.title}}.</b> {{item.data.message}} <br/></ion-label>\r\n        </div>\r\n          <div class=\"tags-wrapper\">\r\n          <ion-row>\r\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n              <span class=\"item-rating\">#{{tag.val}}</span>\r\n            </div>\r\n          </ion-row>\r\n          </div>\r\n          <div class=\"reactions\">\r\n          <ion-row >\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\r\n               <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n               <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=2></ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"showReactionsList(item)\">\r\n              <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n            </ion-button>\r\n          </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button>\r\n              <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n            </ion-button>\r\n          </ion-buttons> \r\n            </ion-col>\r\n          </ion-row>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n     </div>\r\n    </div>\r\n     <div *ngSwitchCase=\"'polls'\">\r\n    <!-- No polls to show -->\r\n     <div class=\"empty-list\" *ngIf=\"polls && polls.length == 0\">\r\n     <h1><ion-icon name=\"md-chatbubbles\"></ion-icon></h1>\r\n     <p>No new polls yet.</p>\r\n     </div>\r\n     <!-- Show polls -->\r\n     <div *ngIf=\"polls && polls.length > 0\">\r\n      <div class=\"listing-item\" *ngFor=\"let item of polls\">\r\n     <ion-card>\r\n      <ion-card-header>\r\n        <ion-row>\r\n          <ion-col size=10>\r\n         <ion-card-subtitle class=\"addedBy\">\r\n          <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n           <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n            <br/>\r\n           <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\r\n          <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\r\n        </ion-card-subtitle>\r\n      </ion-col>\r\n      <ion-col size=2>\r\n        <ion-buttons>\r\n          <ion-button (click)=\"showPostOptions(item)\">\r\n            <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      </ion-row>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" >\r\n        <div (click)=\"viewPoll(item)\">\r\n        <b>{{item.title}}.</b><br/>\r\n        <ion-row  *ngFor=\"let pollOption of item.data.pollOptions\">\r\n          <ion-col >\r\n             <div><ion-icon class=\"poll-icon\" name=\"checkbox-outline\"></ion-icon> <span>{{pollOption.name}}</span></div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <div class=\"tags-wrapper\">\r\n        <ion-row>\r\n          <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n            <span class=\"item-rating\">#{{tag.val}}</span>\r\n          </div>\r\n        </ion-row>\r\n        </div>\r\n\r\n              <ion-row class=\"info-row\" >\r\n         <ion-col size=\"8\">\r\n                   <span class=\"text\" *ngIf=\"!item.pollClosed\">Poll ends {{item.data.dateEnding.toDate() | DateFormat}}</span> \r\n                   <span class=\"text\" *ngIf=\"item.pollClosed\">Poll closed</span> \r\n                </ion-col>\r\n          <ion-col size=\"1\">\r\n          </ion-col>\r\n                <ion-col size=\"3\">\r\n                  <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\r\n                </ion-col>\r\n              </ion-row>\r\n      </ion-card-content>\r\n      </ion-card>\r\n   </div>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'resources'\">\r\n    <!-- No Resources to show -->\r\n     <div class=\"empty-list\" *ngIf=\"resources && resources.length == 0\">\r\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\r\n     <p>No new Resources added to this group.</p>\r\n     </div>\r\n     <!-- Show Resources -->\r\n     <div *ngIf=\"resources && resources.length > 0\" >\r\n      <div class=\"listing-item\" *ngFor=\"let item of resources\">\r\n       <div>\r\n     <ion-card>\r\n      <ion-card-header>\r\n        <ion-row>\r\n          <ion-col size=10>\r\n         <ion-card-subtitle class=\"addedBy\">\r\n          <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n           <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n            <br/>\r\n           <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\r\n          <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\r\n        </ion-card-subtitle>\r\n      </ion-col>\r\n      <ion-col size=2>\r\n        <ion-buttons>\r\n          <ion-button (click)=\"showPostOptions(item)\">\r\n            <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\">\r\n        <div (click)=\"viewResource(item)\">\r\n        <b>{{item.title}}.</b><br/>\r\n        <div *ngIf=\"item?.data.type == 'contact'\">\r\n          {{item.data.name}}<br/>\r\n          {{item.data.address}}<br/><br/>\r\n          {{item.data.email}}<br/>\r\n          {{item.data.phones}}<br/>\r\n        </div>\r\n        <div *ngIf=\"item?.data.type == 'upload'\">\r\n          <div *ngIf=\"item.data.uploadtype == 'location'\" [innerHtml]=\"item.data.url\"></div>\r\n          <div *ngIf=\"item.data.uploadtype == 'contact'\">\r\n          {{item.data.name}}<br/>\r\n          {{item.data.address}}<br/>\r\n          {{item.data.phones}}<br/>\r\n          {{item.data.email}}<br/>\r\n          </div>\r\n          <div *ngIf=\"item.data.uploadtype == 'image'\">\r\n          <img src=\"{{item.data.resolvedurl}}\" />\r\n          </div>\r\n          <div *ngIf=\"item.data.uploadtype == 'video'\">\r\n            <video controls width=\"100%\" src=\"{{item.data.resolvedurl}}\" ></video>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"item?.data.type == 'weblink'\">\r\n        {{item.data.metatitle}}<br/>\r\n        <img [src]=\"item.data.metaicon\"/> \r\n        {{item.data.metadescription}}<br/><br/>\r\n        <a href=\"{{item.data.metasite}}\">{{item.data.metasite}}</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"tags-wrapper\">\r\n        <ion-row>\r\n          <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n            <span class=\"item-rating\">#{{tag.val}}</span>\r\n          </div>\r\n        </ion-row>\r\n        </div>\r\n        <div class=\"reactions\">\r\n           <ion-row>\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n              <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n             <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n             <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=3>\r\n                 <ion-buttons>\r\n                 <ion-button (click)=\"submitReactionPost(item, 'Bookmark')\">\r\n                <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n                 </ion-button>\r\n                 </ion-buttons> \r\n            </ion-col>\r\n          <ion-col size=2></ion-col>\r\n          <ion-col size=2>\r\n                 <ion-buttons>\r\n                 <ion-button (click)=\"showReactionsList(item)\">\r\n                 <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n               </ion-button>\r\n               </ion-buttons> \r\n               </ion-col>\r\n               <ion-col size=2>\r\n                 <ion-buttons>\r\n                 <ion-button>\r\n                  <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                </ion-button>\r\n               </ion-buttons> \r\n               </ion-col>\r\n          </ion-row>\r\n        \r\n        </div>\r\n      </ion-card-content>\r\n        </ion-card>\r\n           </div>\r\n     </div>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'events'\">\r\n      <!-- No Events to show -->\r\n       <div class=\"empty-list\" *ngIf=\"events && events.length == 0\">\r\n       <h1><ion-icon name=\"chatbubbles\"></ion-icon></h1>\r\n       <p>No new upcoming Events added to this group.</p>\r\n       </div>\r\n       <!-- Show Events -->\r\n       <div *ngIf=\"events && events.length > 0\" >\r\n        <div class=\"listing-item\" *ngFor=\"let item of events\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-row>\r\n                <ion-col size=10>\r\n               <ion-card-subtitle class=\"addedBy\">\r\n                <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n                 <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n                  <br/>\r\n                 <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\r\n                <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\r\n              </ion-card-subtitle>\r\n            </ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"showPostOptions(item)\">\r\n                  <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </ion-col>\r\n            </ion-row>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\r\n              <div (click)=\"viewEvent(item)\">\r\n              <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\r\n                {{item.data.address}}<br/><br/>\r\n                {{item.data.link}}\r\n              </div>\r\n              <div class=\"tags-wrapper\">\r\n                <ion-row>\r\n                  <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\r\n                    <span class=\"item-rating\">#{{tag.val}}</span>\r\n                  </div>\r\n                </ion-row>\r\n                </div>\r\n              <div class=\"reactions\">\r\n                <ion-row>\r\n                  <ion-col size=3>\r\n                    <ion-buttons>\r\n                      <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\r\n                      <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                      <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n                    </ion-button>\r\n                    </ion-buttons> \r\n                  </ion-col>\r\n                  <ion-col size=3>\r\n                    <ion-buttons>\r\n                      <ion-button (click)=\"submitReactionPost(item, 'Checkin')\">\r\n                      <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                      <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n                    </ion-button>\r\n                    </ion-buttons> \r\n                  </ion-col>\r\n                  <ion-col size=2></ion-col>\r\n                  <ion-col size=2>\r\n                          <ion-buttons>\r\n                            <ion-button (click)=\"showReactionsList(item)\">\r\n                          <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\r\n                        </ion-button>\r\n                      </ion-buttons> \r\n                  </ion-col>\r\n                  <ion-col size=2>\r\n                          <ion-buttons>\r\n                            <ion-button>\r\n                              <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\r\n                            </ion-button>\r\n                      </ion-buttons> \r\n                  </ion-col>\r\n                 </ion-row>\r\n             </div>\r\n            </ion-card-content>\r\n        </ion-card>\r\n        </div>\r\n       </div>\r\n      </div>\r\n      <!-- Group Info -->\r\n <div  class=\"group-info\" *ngSwitchCase=\"'groupInfo'\">\r\n  <div>\r\n\r\n    <div class=\"group-img\">\r\n      <img src=\"{{group.img}}\">\r\n    </div>\r\n    <div class=\"group-name\">    \r\n      {{group.name}}\r\n    </div>\r\n    <div class=\"group-desc\">\r\n      {{group.description}}\r\n    </div>\r\n</div>\r\n<div class=\"group-name\"> \r\nGroup Tags\r\n</div>\r\n<div class=\"group-tags\">\r\n  <ion-row>\r\n    <div class=\"tags\" *ngFor=\"let tag of group.groupTags\">\r\n      <span class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag}}</span>\r\n    </div>\r\n  </ion-row>\r\n</div>\r\n<div class=\"group-name\"> \r\n  Group Members ({{groupMembers.length}})\r\n  </div>\r\n   <ion-list *ngIf=\"groupMembers\">\r\n    <!-- <ion-item (click)=\"addMembers()\">\r\n     <ion-icon name=\"add\" item-left></ion-icon>\r\n     <h2>Add Members</h2>\r\n     </ion-item>-->\r\n     <ion-item *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.$key)\">\r\n     <ion-avatar>\r\n       <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\"/>\r\n     </ion-avatar>\r\n     <ion-label class=\"group-member-name\">{{member.name}}</ion-label>\r\n     <p>{{member.description}}</p>\r\n     </ion-item>\r\n   </ion-list>\r\n   <ion-list-header *ngIf=\"loggedInUserIsMember == true\" >\r\n     More\r\n   </ion-list-header>\r\n   <ion-list *ngIf=\"loggedInUserIsMember == true\"  style=\"text-align: center;\">  \r\n     <ion-item no-lines tappable (click)=\"leaveGroup()\" *ngIf=\"groupMembers && groupMembers.length > 1\">\r\n     Leave Group\r\n     </ion-item>\r\n     <!-- When there's only one member left, allow deleting of group. -->\r\n     <ion-item color=\"danger\" no-lines tappable (click)=\"deleteGroup()\" *ngIf=\"groupMembers && groupMembers.length <= 1\">\r\n     Delete Group\r\n     </ion-item>\r\n   </ion-list>\r\n   <p padding style=\"color:#aaa\">Started {{group.dateCreated | DateFormat}}</p>\r\n   </div>\r\n  </div>\r\n\r\n  <ion-infinite-scroll *ngIf=\"tab=='posts'\" threshold=\"100px\" (ionInfinite)=\"loadDataPosts($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  <ion-infinite-scroll *ngIf=\"tab=='events'\" threshold=\"100px\" (ionInfinite)=\"loadDataEvents($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  <ion-infinite-scroll *ngIf=\"tab=='polls'\" threshold=\"100px\" (ionInfinite)=\"loadDataPolls($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n  <ion-infinite-scroll *ngIf=\"tab=='resources'\" threshold=\"100px\" (ionInfinite)=\"loadDataResources($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-rating-2-color: #aa6c39;\n  --page-rating-1-color: #bbb2b2;\n}\n\n.tab-title {\n  size: 9px;\n}\n\nion-segment-button {\n  background-color: var(--page-background);\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n  --border-style: 10px;\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row ion-searchbar.items-searchbar {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.addedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n}\n\n.addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n}\n\n.addedByImg {\n  width: 50px;\n  float: left;\n  vertical-align: middle;\n}\n\n.newIcon {\n  margin-left: 10px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .slider {\n  margin-bottom: 5px;\n}\n\n.message .slider .bgSizeContain {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100%;\n  width: 100%;\n  height: 200px;\n  text-shadow: white 0px 0px 2px;\n  font-size: 16px;\n  border-radius: 10px;\n}\n\n.message .reactions {\n  margin-bottom: 0px;\n  margin-left: -10px;\n}\n\n.message .tags-wrapper {\n  padding-top: 5px;\n}\n\n.message .tags-wrapper .tags {\n  padding-right: 5px;\n}\n\n.message .tags-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #aa6c39;\n}\n\n.group-info {\n  margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);\n}\n\n.group-info .group-name {\n  padding-top: var(--page-margin);\n  padding-bottom: var(--page-margin);\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  text-align: left;\n  font-weight: bold;\n  font-size: 19px;\n}\n\n.group-info .group-tags {\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.group-info .group-tags .tags {\n  padding-right: 5px;\n}\n\n.group-info .group-tags .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"0\"] {\n  color: var(--page-rating-1-color);\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"1\"] {\n  color: var(--page-rating-2-color);\n}\n\n.group-info .group-member-name {\n  padding-left: var(--page-margin);\n}\n\n.empty-list {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcZ3JvdXBcXGdyb3VwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ3JvdXAvZ3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURDQTtFQUNFLFNBQUE7QUNFRjs7QURBQTtFQUNFLHdDQUFBO0FDR0Y7O0FEQUE7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREU7RUFDRSw4QkFBQTtBQ0dKOztBRERJO0VBQ0UsWUFBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBQ0NOOztBREVJO0VBRUUsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNGTjs7QURJTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUNKUjs7QURXQTtFQUNBLHdDQUFBO0FDUkE7O0FEV0E7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDUkE7O0FEV0E7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ1JEOztBRFVBO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDUEQ7O0FEU0E7RUFDQSxpQkFBQTtFQUNDLGtCQUFBO0FDTkQ7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDTEY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0pGOztBRE1BO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDSEY7O0FES0U7RUFDRSxrQkFBQTtBQ0hKOztBRElJO0VBQ0UsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFHQSxtQkFBQTtBQ0ZOOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE1FO0VBQ0UsZ0JBQUE7QUNKSjs7QURNSTtFQUNFLGtCQUFBO0FDSk47O0FETUk7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNKTjs7QURVQTtFQUNFLG1GQUFBO0FDUEY7O0FEV0U7RUFDRSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1RKOztBRFdFO0VBQ0UsNENBQUE7QUNUSjs7QURXSTtFQUNFLGtCQUFBO0FDVE47O0FEV0k7RUFFRSxtREFBQTtFQU1RLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2ZkOztBRGdCYztFQUNFLGlDQUFBO0FDZGhCOztBRGdCYztFQUNFLGlDQUFBO0FDZGhCOztBRHFCRTtFQUNFLGdDQUFBO0FDbkJKOztBRHVCQTtFQUNFLGtCQUFBO0FDcEJGIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXAvZ3JvdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuICAtLXBhZ2UtcmF0aW5nLTItY29sb3I6ICNhYTZjMzk7XHJcbiAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjYmJiMmIyO1xyXG59XHJcbi50YWItdGl0bGUge1xyXG4gIHNpemU6IDlweDtcclxufVxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5maWx0ZXJzLXRvb2xiYXIge1xyXG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIC0tYm9yZGVyLXN0eWxlOiAxMHB4O1xyXG5cclxuICAuc2VhcmNoYmFyLXJvdyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgaW9uLXNlYXJjaGJhci5pdGVtcy1zZWFyY2hiYXIge1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC8vIExlYXJuIG1vcmUgYWJvdXQgQ1NTIGNvbnRhaW4gcHJvcGVydHkgaGVyZTogaHR0cHM6Ly90ZXJtdmFkZXIuZ2l0aHViLmlvL2Nzcy1jb250YWluL1xyXG4gICAgICBjb250YWluOiBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xyXG4gICAgICAvL3BhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBmbGV4LWdyb3c6IDA7XHJcblxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmZpbHRlcnMtYnRuIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiA2cHg7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcclxuICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4ubGlzdGluZy1pdGVtIHtcclxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLmljb24ge1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxufVxyXG4uYWRkZWRCeVRpdGxlIHtcclxuIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gbGluZS1oZWlnaHQ6IDVweDtcclxuIHRleHQtZGVjb3JhdGlvbjogbm9uZSBcclxufVxyXG4uYWRkZWRCeURhdGUge1xyXG5tYXJnaW4tbGVmdDogMTBweDtcclxuIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4uYWRkZWRCeUltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4ubmV3SWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLm1lc3NhZ2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAuc2xpZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIC5iZ1NpemVDb250YWluIHtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgdGV4dC1zaGFkb3c6IHdoaXRlIDBweCAwcHggMnB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICB9XHJcblxyXG4gIC5yZWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIH0gXHJcbiAgLnRhZ3Mtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICBcclxuICAgIC50YWdzIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG5cclxuICAgIC5pdGVtLXJhdGluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNhYTZjMzk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JvdXAtaW5mbyB7XHJcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLmdyb3VwLWltZyB7XHJcblxyXG4gIH1cclxuICAuZ3JvdXAtbmFtZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxuICAuZ3JvdXAtdGFncyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgXHJcbiAgICAudGFncyB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHJcbiAgICAuaXRlbS1yYXRpbmcge1xyXG4gICAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICAgICAgICAgICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xyXG4gICAgICAgICAgICAgIC8vcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAgICAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0xLWNvbG9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncm91cC1tZW1iZXItbmFtZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICB9XHJcbn1cclxuXHJcbi5lbXB0eS1saXN0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtcmF0aW5nLTItY29sb3I6ICNhYTZjMzk7XG4gIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2JiYjJiMjtcbn1cblxuLnRhYi10aXRsZSB7XG4gIHNpemU6IDlweDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmZpbHRlcnMtdG9vbGJhciB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWJvcmRlci1zdHlsZTogMTBweDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IGlvbi1zZWFyY2hiYXIuaXRlbXMtc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbnRhaW46IGNvbnRlbnQ7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wge1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1ncm93OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIC5maWx0ZXJzLWJ0biB7XG4gIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAtLXBhZGRpbmctZW5kOiA2cHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogaW5pdGlhbDtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRlZEJ5VGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYWRkZWRCeURhdGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uYWRkZWRCeUltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm5ld0ljb24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ubWVzc2FnZSAuc2xpZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1lc3NhZ2UgLnNsaWRlciAuYmdTaXplQ29udGFpbiB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRleHQtc2hhZG93OiB3aGl0ZSAwcHggMHB4IDJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5tZXNzYWdlIC5yZWFjdGlvbnMge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cbi5tZXNzYWdlIC50YWdzLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciAudGFncyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5tZXNzYWdlIC50YWdzLXdyYXBwZXIgLnRhZ3MgLml0ZW0tcmF0aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIDAuMzUpO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNhYTZjMzk7XG59XG5cbi5ncm91cC1pbmZvIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtbmFtZSB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE5cHg7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtdGFncyB7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xufVxuLmdyb3VwLWluZm8gLmdyb3VwLXRhZ3MgLnRhZ3Mge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtdGFncyAudGFncyAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyb3VwLWluZm8gLmdyb3VwLXRhZ3MgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xufVxuLmdyb3VwLWluZm8gLmdyb3VwLXRhZ3MgLnRhZ3MgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xufVxuLmdyb3VwLWluZm8gLmdyb3VwLW1lbWJlci1uYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi5lbXB0eS1saXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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





// tslint:disable-next-line: max-line-length











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
        this.notifications = [];
        this.toggled = false;
        // posts
        this.posts = [];
        this.numberOfPosts = 10;
        this.maxNoOfPosts = 1000;
        this.maxNoOfEvents = 1000;
        this.maxNoOfPolls = 1000;
        this.maxNoOfResources = 1000;
        this.loggedInUserId = firebase__WEBPACK_IMPORTED_MODULE_12__["auth"]().currentUser.uid;
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
            this.notifications = user.payload.data().notifications;
            this.user = user.payload.data();
        });
        this.getGroupDetailsandPosts();
        this.loadingProvider.hide();
    }
    ionViewDidEnter() { }
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
                        if (member.payload.exists) {
                            member = Object.assign({ $key: member.payload.id }, member.payload.data());
                            this.addUpdateOrRemoveMember(member);
                        }
                    });
                });
            }
            // Get group posts
            this.firstDataSetPost = this.firestore.collection('posts').ref
                .where('groupId', '==', this.groupId)
                .where('type', '==', 'general')
                .orderBy('date', 'desc')
                .limit(5);
            this.firstDataSetPost.onSnapshot((po) => {
                this.lastDataSetPost = po.docs[po.docs.length - 1];
                this.posts = [];
                this.loadEachPostData(po);
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
    loadEachPostData(po) {
        po.forEach((p) => {
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
                }
            });
            post.postTags = post.postTags.filter(x => x.isChecked !== false);
            this.addOrUpdatePost(post);
        });
    }
    addUpdateOrRemoveMember(member) {
        console.log('member', member);
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
        // Get group posts
        this.firstDataSetPoll = this.firestore.collection('posts').ref
            .where('groupId', '==', this.groupId)
            .where('type', '==', 'poll')
            .orderBy('date', 'desc')
            .limit(5);
        // Get group posts
        this.firstDataSetPoll
            .onSnapshot((po) => {
            this.lastDataSetPoll = po.docs[po.docs.length - 1];
            this.polls = [];
            this.loadEachPollData(po);
        });
    }
    loadEachPollData(po) {
        po.forEach((p) => {
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
            post.postTags = post.postTags.filter(x => x.isChecked !== false);
            this.addOrUpdatePoll(post);
        });
    }
    viewPoll(poll) {
        this.router.navigateByUrl('post/' + poll.key);
    }
    viewResource(resource) {
        this.router.navigateByUrl('post/' + resource.key);
    }
    viewPost(post) {
        console.log('postID: ' + post.key);
        this.router.navigateByUrl('post/' + post.key);
    }
    viewEvent(event) {
        this.router.navigateByUrl('post/' + event.key);
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
    getResources() {
        // Get group posts
        this.firstDataSetResources = this.firestore.collection('posts').ref
            .where('groupId', '==', this.groupId)
            .where('type', '==', 'resource')
            .orderBy('date', 'desc')
            .limit(5);
        // Get group posts
        this.firstDataSetResources
            .onSnapshot((po) => {
            this.lastDataSetResources = po.docs[po.docs.length - 1];
            this.resources = [];
            this.loadEachResourceData(po);
        });
    }
    loadEachResourceData(po) {
        po.forEach((p) => {
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
            this.addOrUpdateResource(post);
        });
    }
    getEvents() {
        // Get group posts
        this.firstDataSetEvent = this.firestore.collection('posts').ref
            .where('groupId', '==', this.groupId)
            .where('type', '==', 'event')
            .orderBy('date', 'desc')
            .limit(5);
        // Get group posts
        this.firstDataSetEvent
            .onSnapshot((po) => {
            this.lastDataSetEvent = po.docs[po.docs.length - 1];
            this.events = [];
            this.loadEachEventData(po);
        });
    }
    loadEachEventData(po) {
        po.forEach((p) => {
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
                }
            });
            post.postTags = post.postTags.filter(x => x.isChecked !== false);
            this.addOrUpdateEvent(post);
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
        let postIndex;
        let p;
        if (post.type === 'general') {
            postIndex = this.posts.findIndex(el => el.key === post.key);
            p = this.posts[postIndex];
        }
        else if (post.type === 'event') {
            postIndex = this.events.findIndex(el => el.key === post.key);
            p = this.events[postIndex];
        }
        else if (post.type === 'poll') {
            postIndex = this.polls.findIndex(el => el.key === post.key);
            p = this.polls[postIndex];
        }
        else if (post.type === 'resource') {
            postIndex = this.resources.findIndex(el => el.key === post.key);
            p = this.resources[postIndex];
        }
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
        let postIndex;
        let p;
        if (post.type === 'general') {
            postIndex = this.posts.findIndex(el => el.key === post.key);
            p = this.posts[postIndex];
        }
        else if (post.type === 'event') {
            postIndex = this.events.findIndex(el => el.key === post.key);
            p = this.events[postIndex];
        }
        else if (post.type === 'poll') {
            postIndex = this.polls.findIndex(el => el.key === post.key);
            p = this.polls[postIndex];
        }
        else if (post.type === 'resource') {
            postIndex = this.resources.findIndex(el => el.key === post.key);
            p = this.resources[postIndex];
        }
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
            let postIndex;
            let p;
            if (post.type === 'general') {
                postIndex = this.posts.findIndex(el => el.key === post.key);
                p = this.posts[postIndex];
            }
            else if (post.type === 'event') {
                postIndex = this.events.findIndex(el => el.key === post.key);
                p = this.events[postIndex];
            }
            else if (post.type === 'poll') {
                postIndex = this.polls.findIndex(el => el.key === post.key);
                p = this.polls[postIndex];
            }
            else if (post.type === 'resource') {
                postIndex = this.resources.findIndex(el => el.key === post.key);
                p = this.resources[postIndex];
            }
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_15__["ReactionListModalPage"],
                componentProps: {
                    reactions: p.reactions
                }
            });
            return yield modal.present();
        });
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
    loadDataPosts(event) {
        if (this.posts.length > this.maxNoOfPosts) {
            event.target.disabled = true;
        }
        else {
            if (this.lastDataSetPost) {
                this.nextDataSetPost = this.firestore.collection('posts').ref
                    .where('groupId', '==', this.groupId)
                    .where('type', '==', 'general')
                    .orderBy('date', 'desc')
                    .startAfter(this.lastDataSetPost).limit(5);
                this.nextDataSetPost.onSnapshot((po) => {
                    this.lastDataSetPost = po.docs[po.docs.length - 1];
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
    loadDataPolls(event) {
        if (this.polls.length > this.maxNoOfPolls) {
            event.target.disabled = true;
        }
        else {
            if (this.lastDataSetPoll) {
                this.nextDataSetPoll = this.firestore.collection('posts').ref
                    .where('groupId', '==', this.groupId)
                    .where('type', '==', 'poll')
                    .orderBy('date', 'desc')
                    .startAfter(this.lastDataSetPoll).limit(5);
                this.nextDataSetPoll.onSnapshot((po) => {
                    this.lastDataSetPoll = po.docs[po.docs.length - 1];
                    if (po.docs.length > 0) {
                        this.loadEachPollData(po);
                    }
                    event.target.complete();
                });
            }
            else {
                event.target.complete();
            }
        }
    }
    loadDataEvents(event) {
        if (this.events.length > this.maxNoOfEvents) {
            event.target.disabled = true;
        }
        else {
            if (this.lastDataSetEvent) {
                this.nextDataSetEvent = this.firestore.collection('posts').ref
                    .where('groupId', '==', this.groupId)
                    .where('type', '==', 'event')
                    .orderBy('date', 'desc')
                    .startAfter(this.lastDataSetEvent).limit(5);
                this.nextDataSetEvent.onSnapshot((po) => {
                    this.lastDataSetEvent = po.docs[po.docs.length - 1];
                    if (po.docs.length > 0) {
                        this.loadEachEventData(po);
                    }
                    event.target.complete();
                });
            }
            else {
                event.target.complete();
            }
        }
    }
    loadDataResources(event) {
        if (this.events.length > this.maxNoOfResources) {
            event.target.disabled = true;
        }
        else {
            if (this.lastDataSetResources) {
                this.nextDataSetResources = this.firestore.collection('posts').ref
                    .where('groupId', '==', this.groupId)
                    .where('type', '==', 'resource')
                    .orderBy('date', 'desc')
                    .startAfter(this.lastDataSetResources).limit(5);
                this.nextDataSetResources.onSnapshot((po) => {
                    this.lastDataSetResources = po.docs[po.docs.length - 1];
                    if (po.docs.length > 0) {
                        this.loadEachResourceData(po);
                    }
                    event.target.complete();
                });
            }
            else {
                event.target.complete();
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])
], GroupPage.prototype, "infiniteScroll", void 0);
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