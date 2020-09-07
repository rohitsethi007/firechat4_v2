(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title (click)=\"groupInfo()\">{{title}}</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button *ngIf=\"loggedInUserIsMember == true\" (click)=\"showGroupOptions()\" ><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-button>\n   <ion-button *ngIf=\"loggedInUserIsMember == false\" (click)=\"joinGroup()\" >Join Group</ion-button>\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='posts'\" (click)=\"newPost()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='polls'\" (click)=\"newPoll()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='resources'\" (click)=\"newResource()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='events'\" (click)=\"newEvent()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n\t</ion-buttons>\n\n  </ion-toolbar>\n\n  <ion-segment scrollable value=\"groupInfo\" color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n\t\t<!-- <ion-segment-button value=\"group\">\n  \t\t\t<ion-icon name=\"chatbubbles\"></ion-icon>\n    </ion-segment-button> -->\n\t\t<!-- <ion-segment-button value=\"groupInfo\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n\t\t</ion-segment-button> -->\n    <ion-segment-button value=\"posts\">\n      <ion-icon size=\"medium\" name=\"chatbubbles\"></ion-icon>\n      <!-- <span class=\"tab-title\">Posts</span> -->\n    </ion-segment-button>\n\t\t<ion-segment-button value=\"polls\">\n      <ion-icon size=\"medium\" name=\"podium\"></ion-icon>\n      <!-- <span class=\"tab-title\">Polls</span> -->\n\t\t</ion-segment-button>\n\t\t<ion-segment-button value=\"resources\">\n      <ion-icon size=\"medium\" name=\"library\"></ion-icon>\n      <!-- <span class=\"tab-title\">Resources</span> -->\n    </ion-segment-button>\n    <ion-segment-button value=\"events\">\n      <ion-icon size=\"medium\" name=\"calendar\"></ion-icon>\n      <!-- <span class=\"tab-title\">Events</span> -->\n    </ion-segment-button>\n</ion-segment>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"tab\" >\n\n  <div *ngSwitchCase=\"'posts'\">\n    <!-- No Posts to show -->\n     <div class=\"empty-list\" *ngIf=\"posts && posts.length == 0\">\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\n     <p>No new Posts added to this group.</p>\n     </div>\n     <!-- Show Posts -->\n     <div *ngIf=\"posts && posts.length > 0\" >\n     <div class=\"listing-item\" *ngFor=\"let item of posts | reverse\" >\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle class=\"addedBy\">\n           <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n            <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n             <br/>\n            <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n           <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n         </ion-card-subtitle>\n       </ion-card-header>\n       <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\n        <div (click)=\"viewPost(item)\">\n        <b>{{item.title}}.</b> {{item.data.message}} <br/>\n      </div>\n        <div class=\"reviews-wrapper\">\n        <ion-row>\n          <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n            <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\n            <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\n          </div>\n        </ion-row>\n        </div>\n        <div class=\"reactions\">\n        <ion-row >\n          <ion-col size=3>\n            <ion-buttons>\n              <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n             <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n             <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n            </ion-button>\n            </ion-buttons> \n          </ion-col>\n          <ion-col size=3>\n            <ion-buttons>\n              <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\n             <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n             <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n            </ion-button>\n            </ion-buttons> \n          </ion-col>\n          <ion-col size=2></ion-col>\n          <ion-col size=2>\n            <ion-buttons>\n              <ion-button (click)=\"showReactionsList(item)\">\n            <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\n          </ion-button>\n        </ion-buttons> \n          </ion-col>\n          <ion-col size=2>\n            <ion-buttons>\n              <ion-button>\n            <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n          </ion-button>\n        </ion-buttons> \n          </ion-col>\n        </ion-row>\n        </div>\n      </ion-card-content>\n      </ion-card>\n    </div>\n     </div>\n    </div>\n     <div *ngSwitchCase=\"'polls'\">\n    <!-- No polls to show -->\n     <div class=\"empty-list\" *ngIf=\"polls && polls.length == 0\">\n     <h1><ion-icon name=\"md-chatbubbles\"></ion-icon></h1>\n     <p>No new polls yet.</p>\n     </div>\n     <!-- Show polls -->\n     <div *ngIf=\"polls && polls.length > 0\">\n      <div class=\"listing-item\" *ngFor=\"let item of polls\">\n     <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle class=\"addedBy\">\n         <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n          <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n           <br/>\n          <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n         <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n       </ion-card-subtitle>\n     </ion-card-header>\n     <ion-card-content class=\"message\">\n      <div (click)=\"viewPoll(item)\">\n      <b>{{item.title}}.</b><br/>\n      <ion-row class=\"info-row\" *ngFor=\"let pollOption of item.data.pollOptions\">\n        <ion-col class=\"poll-option-col\">\n           <div><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checked.svg\" ></ion-icon> <span class=\"text\">{{pollOption.name}}</span></div>\n        </ion-col>\n      </ion-row>\n    </div>\n      <div class=\"reviews-wrapper\">\n        <ion-row>\n          <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n            <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\n            <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\n          </div>\n        </ion-row>\n        </div>\n\n        <ion-row class=\"info-row\" >\n       <ion-col size=\"8\">\n                 <span class=\"text\">Poll ends {{item.data.dateEnding.toDate() | DateFormat}}</span> \n              </ion-col>\n        <ion-col size=\"1\">\n        </ion-col>\n              <ion-col size=\"3\">\n                <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\n              </ion-col>\n            </ion-row>\n    </ion-card-content>\n      </ion-card>\n   </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'resources'\">\n    <!-- No Resources to show -->\n     <div class=\"empty-list\" *ngIf=\"resources && resources.length == 0\">\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\n     <p>No new Resources added to this group.</p>\n     </div>\n     <!-- Show Resources -->\n     <div *ngIf=\"resources && resources.length > 0\" >\n      <div class=\"listing-item\" *ngFor=\"let item of resources\">\n       <div>\n     <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle class=\"addedBy\">\n         <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n          <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n           <br/>\n          <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n         <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n       </ion-card-subtitle>\n     </ion-card-header>\n     <ion-card-content class=\"message\">\n      <div (click)=\"viewResource(item)\">\n      <b>{{item.title}}.</b><br/>\n      <div *ngIf=\"item?.data.type == 'contact'\">\n        {{item.data.name}}<br/>\n        {{item.data.address}}<br/><br/>\n        {{item.data.email}}<br/>\n        {{item.data.phones}}<br/>\n      </div>\n      <div *ngIf=\"item?.data.type == 'upload'\">\n        <div *ngIf=\"item.data.uploadtype == 'location'\" [innerHtml]=\"item.data.url\"></div>\n        <div *ngIf=\"item.data.uploadtype == 'contact'\">\n        {{item.data.name}}<br/>\n        {{item.data.address}}<br/>\n        {{item.data.phones}}<br/>\n        {{item.data.email}}<br/>\n        </div>\n        <div *ngIf=\"item.data.uploadtype == 'image'\">\n        <img src=\"{{item.data.resolvedurl}}\" />\n        </div>\n        <div *ngIf=\"item.data.uploadtype == 'video'\">\n          <video controls width=\"100%\" src=\"{{item.data.resolvedurl}}\" ></video>\n        </div>\n      </div>\n      <div *ngIf=\"item?.data.type == 'weblink'\">\n      {{item.data.metatitle}}<br/>\n      <img [src]=\"item.data.metaicon\"/> \n      {{item.data.metadescription}}<br/><br/>\n      <a href=\"{{item.data.metasite}}\">{{item.data.metasite}}</a>\n      </div>\n    </div>\n      <div class=\"reviews-wrapper\">\n        <ion-row>\n          <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n            <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\n            <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\n          </div>\n        </ion-row>\n      </div>\n      <div class=\"reactions\">\n         <ion-row>\n          <ion-col size=3>\n            <ion-buttons>\n            <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n           <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n           <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n            </ion-button>\n            </ion-buttons> \n          </ion-col>\n          <ion-col size=3>\n               <ion-buttons>\n               <ion-button (click)=\"submitReactionPost(item, 'Bookmark')\">\n              <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n              <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n               </ion-button>\n               </ion-buttons> \n          </ion-col>\n        <ion-col size=2></ion-col>\n        <ion-col size=2>\n               <ion-buttons>\n               <ion-button (click)=\"showReactionsList(item)\">\n               <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n             </ion-button>\n             </ion-buttons> \n             </ion-col>\n             <ion-col size=2>\n               <ion-buttons>\n               <ion-button>\n                <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n              </ion-button>\n             </ion-buttons> \n             </ion-col>\n        </ion-row>\n      \n      </div>\n    </ion-card-content>\n        </ion-card>\n           </div>\n     </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'events'\">\n      <!-- No Events to show -->\n       <div class=\"empty-list\" *ngIf=\"events && events.length == 0\">\n       <h1><ion-icon name=\"chatbubbles\"></ion-icon></h1>\n       <p>No new upcoming Events added to this group.</p>\n       </div>\n       <!-- Show Events -->\n       <div *ngIf=\"events && events.length > 0\" >\n        <div class=\"listing-item\" *ngFor=\"let item of events\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle class=\"addedBy\">\n               <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n                <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n                 <br/>\n                <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n               <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n             </ion-card-subtitle>\n           </ion-card-header>\n           <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\n            <div (click)=\"viewEvent(item)\">\n            <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\n              {{item.data.address}}<br/><br/>\n              {{item.data.link}}\n            </div>\n            <div class=\"reviews-wrapper\">\n              <ion-row>\n                <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n                  <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\n                  <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\n                </div>\n              </ion-row>\n            </div>\n            <div class=\"reactions\">\n              <ion-row>\n                <ion-col size=3>\n                  <ion-buttons>\n                    <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n                    <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                    <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                  </ion-button>\n                  </ion-buttons> \n                </ion-col>\n                <ion-col size=3>\n                  <ion-buttons>\n                    <ion-button (click)=\"submitReactionPost(item, 'Checkin')\">\n                    <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                    <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                  </ion-button>\n                  </ion-buttons> \n                </ion-col>\n                <ion-col size=2></ion-col>\n                <ion-col size=2>\n                        <ion-buttons>\n                          <ion-button (click)=\"showReactionsList(item)\">\n                        <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n                      </ion-button>\n                    </ion-buttons> \n                </ion-col>\n                <ion-col size=2>\n                        <ion-buttons>\n                          <ion-button>\n                            <div><ion-icon size=\"small\" src=\"./assets/icon/chat.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                          </ion-button>\n                    </ion-buttons> \n                </ion-col>\n               </ion-row>\n           </div>\n          </ion-card-content>\n        </ion-card>\n        </div>\n       </div>\n      </div>\n      <!-- Group Info -->\n <div  class=\"group-info\" *ngSwitchCase=\"'groupInfo'\">\n  <div>\n\n    <div class=\"group-img\">\n      <img src=\"{{group.img}}\">\n    </div>\n    <div class=\"group-name\">    \n      {{group.name}}\n    </div>\n    <div class=\"group-desc\">\n      {{group.description}}\n    </div>\n</div>\n<div class=\"group-name\"> \nGroup Tags\n</div>\n<div class=\"group-tags\">\n  <ion-row>\n    <div class=\"tags\" *ngFor=\"let tag of group.groupTags\">\n      <span class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag}}</span>\n    </div>\n  </ion-row>\n</div>\n<div class=\"group-name\"> \n  Group Members ({{groupMembers.length}})\n  </div>\n   <ion-list *ngIf=\"groupMembers\">\n    <!-- <ion-item (click)=\"addMembers()\">\n     <ion-icon name=\"add\" item-left></ion-icon>\n     <h2>Add Members</h2>\n     </ion-item>-->\n     <ion-item *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.$key)\">\n     <ion-avatar>\n       <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\"/>\n     </ion-avatar>\n     <ion-label class=\"group-member-name\">{{member.name}}</ion-label>\n     <p>{{member.description}}</p>\n     </ion-item>\n   </ion-list>\n   <ion-list-header *ngIf=\"loggedInUserIsMember == true\" >\n     More\n   </ion-list-header>\n   <ion-list *ngIf=\"loggedInUserIsMember == true\"  style=\"text-align: center;\">  \n     <ion-item no-lines tappable (click)=\"leaveGroup()\" *ngIf=\"groupMembers && groupMembers.length > 1\">\n     Leave Group\n     </ion-item>\n     <!-- When there's only one member left, allow deleting of group. -->\n     <ion-item color=\"danger\" no-lines tappable (click)=\"deleteGroup()\" *ngIf=\"groupMembers && groupMembers.length <= 1\">\n     Delete Group\n     </ion-item>\n   </ion-list>\n   <p padding style=\"color:#aaa\">Started {{group.dateCreated | DateFormat}}</p>\n   </div>\n  </div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-rating-2-color: #aa6c39;\n  --page-rating-1-color: #bbb2b2;\n}\n\n.tab-title {\n  size: 9px;\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n  --border-style: 10px;\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row ion-searchbar.items-searchbar {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.addedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n}\n\n.addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n}\n\n.addedByImg {\n  width: 50px;\n  float: left;\n  vertical-align: middle;\n}\n\n.newIcon {\n  margin-left: 10px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .reactions {\n  margin-left: -10px;\n}\n\n.message .reviews-wrapper {\n  padding-top: calc(var(--page-margin) / 1);\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.message .reviews-wrapper .tags {\n  padding-right: 5px;\n}\n\n.message .reviews-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.message .reviews-wrapper .tags .item-rating[ratingBase=\"0\"] {\n  color: var(--page-rating-1-color);\n}\n\n.message .reviews-wrapper .tags .item-rating[ratingBase=\"1\"] {\n  color: var(--page-rating-2-color);\n}\n\n.group-info {\n  margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);\n}\n\n.group-info .group-name {\n  padding-top: var(--page-margin);\n  padding-bottom: var(--page-margin);\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  text-align: left;\n  font-weight: bold;\n  font-size: 19px;\n}\n\n.group-info .group-tags {\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.group-info .group-tags .tags {\n  padding-right: 5px;\n}\n\n.group-info .group-tags .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"0\"] {\n  color: var(--page-rating-1-color);\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"1\"] {\n  color: var(--page-rating-2-color);\n}\n\n.group-info .group-member-name {\n  padding-left: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9ncm91cC9ncm91cC5wYWdlLnNjc3MiLCJzcmMvYXBwL2dyb3VwL2dyb3VwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0FDRUY7O0FEQUE7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREU7RUFDRSw4QkFBQTtBQ0dKOztBRERJO0VBQ0UsWUFBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBQ0NOOztBREVJO0VBRUUsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNGTjs7QURJTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUNKUjs7QURZQTtFQUNBLHdDQUFBO0FDVEE7O0FEWUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDVEE7O0FEWUE7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ1REOztBRFdBO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDUkQ7O0FEVUE7RUFDQSxpQkFBQTtFQUNDLGtCQUFBO0FDUEQ7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDTkY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0xGOztBRE9BO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0xGOztBRE9FO0VBQ0Usa0JBQUE7QUNMSjs7QURPRTtFQUNFLHlDQUFBO0VBQ0EsNENBQUE7QUNMSjs7QURPSTtFQUNFLGtCQUFBO0FDTE47O0FET0k7RUFFRSxtREFBQTtFQU1RLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1hkOztBRFljO0VBQ0UsaUNBQUE7QUNWaEI7O0FEWWM7RUFDRSxpQ0FBQTtBQ1ZoQjs7QURrQkE7RUFDRSxtRkFBQTtBQ2ZGOztBRG1CRTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDakJKOztBRG1CRTtFQUNFLDRDQUFBO0FDakJKOztBRG1CSTtFQUNFLGtCQUFBO0FDakJOOztBRG1CSTtFQUVFLG1EQUFBO0VBTVEsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdkJkOztBRHdCYztFQUNFLGlDQUFBO0FDdEJoQjs7QUR3QmM7RUFDRSxpQ0FBQTtBQ3RCaEI7O0FENkJFO0VBQ0UsZ0NBQUE7QUMzQkoiLCJmaWxlIjoic3JjL2FwcC9ncm91cC9ncm91cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2FhNmMzOTtcbiAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjYmJiMmIyO1xufVxuLnRhYi10aXRsZSB7XG4gIHNpemU6IDlweDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1ib3JkZXItc3R5bGU6IDEwcHg7XG5cbiAgLnNlYXJjaGJhci1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGlvbi1zZWFyY2hiYXIuaXRlbXMtc2VhcmNoYmFyIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLy8gTGVhcm4gbW9yZSBhYm91dCBDU1MgY29udGFpbiBwcm9wZXJ0eSBoZXJlOiBodHRwczovL3Rlcm12YWRlci5naXRodWIuaW8vY3NzLWNvbnRhaW4vXG4gICAgICBjb250YWluOiBjb250ZW50O1xuICAgIH1cblxuICAgIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xuICAgICAgLy9wYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgZmxleC1ncm93OiAwO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgLmZpbHRlcnMtYnRuIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDZweDtcblxuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcbiAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuLmxpc3RpbmctaXRlbSB7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4uaWNvbiB7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dHtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiBwYWRkaW5nLWxlZnQ6IDNweDtcbiB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuLmFkZGVkQnlUaXRsZSB7XG4gbWFyZ2luLWxlZnQ6IDEwcHg7XG4gbGluZS1oZWlnaHQ6IDVweDtcbiB0ZXh0LWRlY29yYXRpb246IG5vbmUgXG59XG4uYWRkZWRCeURhdGUge1xubWFyZ2luLWxlZnQ6IDEwcHg7XG4gZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmFkZGVkQnlJbWcge1xuICB3aWR0aDogNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubmV3SWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8vIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47IFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAucmVhY3Rpb25zIHtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIH0gXG4gIC5yZXZpZXdzLXdyYXBwZXIge1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgXG4gICAgLnRhZ3Mge1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuXG4gICAgLml0ZW0tcmF0aW5nIHtcbiAgICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XG4gICAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xuICAgICAgICAgICAgICAvL3BhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xuICAgICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgfVxuICB9XG59XG5cbi5ncm91cC1pbmZvIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC5ncm91cC1pbWcge1xuXG4gIH1cbiAgLmdyb3VwLW5hbWUge1xuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuICAuZ3JvdXAtdGFncyB7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gICBcbiAgICAudGFncyB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cbiAgICAuaXRlbS1yYXRpbmcge1xuICAgICAgLy8gRGVmYXVsdCBiYWNrZ3JvdW5kXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcbiAgICAgICAgICAgICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMSk7XG4gICAgICAgICAgICAgIC8vcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0xLWNvbG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG4gICAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICB9XG4gIH1cblxuICAuZ3JvdXAtbWVtYmVyLW5hbWUge1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2FhNmMzOTtcbiAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjYmJiMmIyO1xufVxuXG4udGFiLXRpdGxlIHtcbiAgc2l6ZTogOXB4O1xufVxuXG4uZmlsdGVycy10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tYm9yZGVyLXN0eWxlOiAxMHB4O1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgaW9uLXNlYXJjaGJhci5pdGVtcy1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY29udGFpbjogY29udGVudDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWdyb3c6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wgLmZpbHRlcnMtYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDZweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiBpbml0aWFsO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLmFkZGVkQnlUaXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBsaW5lLWhlaWdodDogNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hZGRlZEJ5RGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5hZGRlZEJ5SW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubmV3SWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLm1lc3NhZ2UgLnJlYWN0aW9ucyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cbi5tZXNzYWdlIC5yZXZpZXdzLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAxKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG59XG4ubWVzc2FnZSAucmV2aWV3cy13cmFwcGVyIC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLm1lc3NhZ2UgLnJldmlld3Mtd3JhcHBlciAudGFncyAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lc3NhZ2UgLnJldmlld3Mtd3JhcHBlciAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG59XG4ubWVzc2FnZSAucmV2aWV3cy13cmFwcGVyIC50YWdzIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiMVwiXSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0yLWNvbG9yKTtcbn1cblxuLmdyb3VwLWluZm8ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5ncm91cC1pbmZvIC5ncm91cC1uYW1lIHtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cbi5ncm91cC1pbmZvIC5ncm91cC10YWdzIHtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtdGFncyAudGFncyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5ncm91cC1pbmZvIC5ncm91cC10YWdzIC50YWdzIC5pdGVtLXJhdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAwLjM1KTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtdGFncyAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtdGFncyAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtbWVtYmVyLW5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn0iXX0= */");

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
            console.log('this.group', this.group);
            // Get Group Members
            if (this.group.members) {
                this.group.members.forEach((memberId) => {
                    this.dataProvider.getUser(memberId).snapshotChanges().subscribe((member) => {
                        console.log('member', member.payload);
                        if (member.payload.exists) {
                            member = Object.assign({ $key: member.payload.id }, member.payload.data());
                            this.addUpdateOrRemoveMember(member);
                        }
                    });
                });
            }
            // Get group posts
            this.firestore.collection('/posts/').ref
                .where('groupId', '==', this.groupId)
                .where('type', '==', 'general')
                .get().then((po) => {
                this.posts = [];
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
        this.firestore.collection('/posts/').ref
            .where('groupId', '==', this.groupId)
            .where('type', '==', 'poll')
            .get().then((po) => {
            this.posts = [];
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
        // Get group posts
        this.firestore.collection('/posts/').ref
            .where('groupId', '==', this.groupId)
            .where('type', '==', 'resource')
            .get().then((po) => {
            this.resources = [];
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
        });
    }
    getEvents() {
        // Get group posts
        this.firestore.collection('/posts/').ref
            .where('groupId', '==', this.groupId)
            .where('type', '==', 'event')
            .get().then((po) => {
            this.events = [];
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