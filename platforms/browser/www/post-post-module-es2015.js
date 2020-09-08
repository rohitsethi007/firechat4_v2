(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"tertiary\" >\r\n    <ion-buttons color=\"primary\" slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title\" color=\"primary\">{{title}}</ion-title>\r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n<ion-content fullscreen> \r\n<div class=\"listing-item\">\r\n <ion-card *ngIf=\"post.type=='general'\">\r\n        <ion-card-header>\r\n          <ion-row>\r\n            <ion-col size=10>\r\n          <ion-card-subtitle class=\"addedBy\">\r\n            <img class=\"addedByImg\" src=\"{{post.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n             <p><a class=\"addedByTitle\" (click)=\"viewUser(post.addedByUser.addedByKey)\" ><b>{{post.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n              <br/>\r\n             <span class=\"addedByDate\">posted {{post.date.toDate() | DateFormat}}</span><br/>\r\n            <a (click)=\"viewGroup(post.groupId)\" class=\"addedByTitle\">in <b>{{post.groupName}}</b></a></p>\r\n          </ion-card-subtitle>\r\n        </ion-col>\r\n        <ion-col size=2>\r\n          <ion-buttons>\r\n            <ion-button (click)=\"showPostOptions(post)\">\r\n              <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        </ion-row>\r\n        </ion-card-header>\r\n      <ion-card-content class=\"message\">\r\n        <div>\r\n        <div *ngIf=\"post.postMedia\">\r\n          <ion-slides class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\r\n          <ion-slide *ngFor=\"let s of post.postMedia\">\r\n            <div class=\"bgSizeContain\" \r\n            [ngStyle]=\"{'background-image':'url('+s+')'}\">\r\n          </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        </div>\r\n\r\n        <ion-label><b>{{post.title}}.</b> {{post.data.message}} <br/></ion-label>\r\n      </div>\r\n      <div class=\"tags-wrapper\">\r\n          <ion-row >\r\n            <div class=\"tags\" *ngFor=\"let tag of post.postTags\">\r\n              <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\r\n              <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\r\n            </div>\r\n          </ion-row>\r\n        </div>\r\n        <div class=\"reactions\">\r\n          <ion-row>\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"submitReactionSmile()\">\r\n               <div *ngIf=\"post.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n               <div *ngIf=\"!post.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=3>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"submitReactionHug()\">\r\n               <div *ngIf=\"post.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n               <div *ngIf=\"!post.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \r\n              </ion-button>\r\n              </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=2></ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button (click)=\"showReactionsList()\">\r\n              <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{post.totalReactionCount}}</span></div>\r\n            </ion-button>\r\n          </ion-buttons> \r\n            </ion-col>\r\n            <ion-col size=2>\r\n              <ion-buttons>\r\n                <ion-button>\r\n              <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{post.totalReviewCount}}</span></div>\r\n            </ion-button>\r\n          </ion-buttons> \r\n          </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-card-content>\r\n <!-- <hr class=\"details-divider\">\r\n  \r\n    <h3 class=\"detail-title\">Selected Tags</h3> -->\r\n  <hr class=\"details-divider\">\r\n  <div class=\"user-preferences-wrapper\">\r\n    <div  >\r\n      <div class=\"reviews\" *ngFor=\"let r of postReviews\">\r\n        <ion-row>\r\n          <ion-col size=\"2\">\r\n              <img class=\"addedByImgReview\" src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n          </ion-col>\r\n          <ion-col class=\"review\" size=\"9\">\r\n              <span class=\"addedByTitleReview\"><a (click)=\"viewUser(r.addedByUser.addedByKey)\" >\r\n                <b>{{post.addedByUser.addedByUsername}}</b></a>, <span class=\"addedByDateReview\">{{r.dateCreated.toDate() | DateFormat}}</span>\r\n              </span>\r\n                  <br/>\r\n                  <br/>\r\n                  <div *ngIf=\"r.reviewMedia.length > 0\" class=\"bgSizeContain\" \r\n                  [ngStyle]=\"{'background-image':'url('+r.reviewMedia+')'}\"></div>\r\n                  <div class=\"messageReview\" [innerHTML]=\"r.review\"></div>\r\n            </ion-col>\r\n      </ion-row>\r\n     </div>\r\n    </div>\r\n  </div>\r\n\r\n </ion-card>\r\n\r\n <ion-card *ngIf=\"post.type=='event'\">\r\n  <ion-card-header>\r\n    <ion-row>\r\n      <ion-col size=10>\r\n    <ion-card-subtitle class=\"addedBy\">\r\n      <img class=\"addedByImg\" src=\"{{post.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n       <p><a class=\"addedByTitle\" (click)=\"viewUser(post.addedByUser.addedByKey)\" ><b>{{post.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n        <br/>\r\n       <span class=\"addedByDate\">posted {{post.date.toDate() | DateFormat}}</span><br/>\r\n      <a (click)=\"viewGroup(post.groupId)\" class=\"addedByTitle\">in <b>{{post.groupName}}</b></a></p>\r\n    </ion-card-subtitle>\r\n  </ion-col>\r\n  <ion-col size=2>\r\n    <ion-buttons>\r\n      <ion-button (click)=\"showPostOptions(post)\">\r\n        <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-card-header>\r\n  <ion-card-content class=\"message\">\r\n    <div>\r\n      <div *ngIf=\"post.postMedia\">\r\n        <ion-slides class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\r\n        <ion-slide *ngFor=\"let s of post.postMedia\">\r\n          <div class=\"bgSizeContain\" \r\n          [ngStyle]=\"{'background-image':'url('+s+')'}\">\r\n        </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      </div>\r\n      <ion-label> <b>{{post.title}}.</b> <br/>{{post.data.eventDate}} at {{post.data.eventTime}}<br/><br/>\r\n      {{post.data.address}}<br/><br/>\r\n      {{post.data.link}}</ion-label>\r\n    </div>\r\n    <div class=\"tags-wrapper\">\r\n      <ion-row >\r\n        <div class=\"tags\" *ngFor=\"let tag of post.postTags\">\r\n          <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\r\n          <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\r\n        </div>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"reactions\">\r\n      <ion-row>\r\n        <ion-col size=3>\r\n          <ion-buttons>\r\n            <ion-button (click)=\"submitReactionSmile()\">\r\n           <div *ngIf=\"post.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n           <div *ngIf=\"!post.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n          </ion-button>\r\n          </ion-buttons> \r\n        </ion-col>\r\n        <ion-col size=3> \r\n          <ion-buttons>\r\n            <ion-button (click)=\"submitReactionCheckin()\">\r\n           <div *ngIf=\"post.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n           <div *ngIf=\"!post.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \r\n          </ion-button>\r\n          </ion-buttons> \r\n        </ion-col>\r\n        <ion-col size=2></ion-col>\r\n        <ion-col size=2>\r\n          <ion-buttons>\r\n            <ion-button (click)=\"showReactionsList()\">\r\n          <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{post.totalReactionCount}}</span></div>\r\n        </ion-button>\r\n        </ion-buttons> \r\n        </ion-col>\r\n        <ion-col size=2>\r\n          <ion-buttons>\r\n            <ion-button>\r\n          <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{post.totalReviewCount}}</span></div>\r\n        </ion-button>\r\n        </ion-buttons> \r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-card-content>\r\n\r\n <!-- <hr class=\"details-divider\">\r\n  \r\n    <h3 class=\"detail-title\">Selected Tags</h3> -->\r\n    <hr class=\"details-divider\">\r\n    <div class=\"user-preferences-wrapper\">\r\n      <div  >\r\n        <div class=\"reviews\" *ngFor=\"let r of postReviews\">\r\n          <ion-row>\r\n            <ion-col size=\"2\">\r\n                <img class=\"addedByImgReview\" src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n            </ion-col>\r\n            <ion-col class=\"review\" size=\"9\">\r\n                <span class=\"addedByTitleReview\"><a (click)=\"viewUser(r.addedByUser.addedByKey)\" >\r\n                  <b>{{post.addedByUser.addedByUsername}}</b></a>, <span class=\"addedByDateReview\">{{r.dateCreated.toDate() | DateFormat}}</span>\r\n                </span>\r\n                    <br/>\r\n                    <br/>\r\n                    <div *ngIf=\"r.reviewMedia.length > 0\" class=\"bgSizeContain\" \r\n                    [ngStyle]=\"{'background-image':'url('+r.reviewMedia+')'}\"></div>\r\n                    <div class=\"messageReview\" [innerHTML]=\"r.review\"></div>\r\n              </ion-col>\r\n        </ion-row>\r\n       </div>\r\n      </div>\r\n    </div>\r\n</ion-card>\r\n\r\n<ion-card *ngIf=\"post.type=='poll'\">\r\n  <ion-card-header>\r\n    <ion-row>\r\n      <ion-col size=10>\r\n    <ion-card-subtitle class=\"addedBy\">\r\n      <img class=\"addedByImg\" src=\"{{post.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n       <p><a class=\"addedByTitle\" (click)=\"viewUser(post.addedByUser.addedByKey)\" ><b>{{post.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n        <br/>\r\n       <span class=\"addedByDate\">posted {{post.date.toDate() | DateFormat}}</span><br/>\r\n      <a (click)=\"viewGroup(post.groupId)\" class=\"addedByTitle\">in <b>{{post.groupName}}</b></a></p>\r\n    </ion-card-subtitle>\r\n  </ion-col>\r\n  <ion-col size=2>\r\n    <ion-buttons>\r\n      <ion-button (click)=\"showPostOptions(post)\">\r\n        <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-card-header>\r\n  <ion-card-content class=\"message\">\r\n    <div>\r\n      <div *ngIf=\"post.postMedia\">\r\n        <ion-slides class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\r\n        <ion-slide *ngFor=\"let s of post.postMedia\">\r\n          <div class=\"bgSizeContain\" \r\n          [ngStyle]=\"{'background-image':'url('+s+')'}\">\r\n        </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      </div>\r\n      <ion-label>         <b>{{post.title}}.</b>       </ion-label>\r\n        <p class=\"sub-header\" *ngIf=\"!voted && !pollClosed\">* Please vote to see results</p>\r\n        <form [formGroup]=\"pollOptionForm\">\r\n        <ion-list class=\"radio-list\" lines=\"full\" *ngIf=\"!voted && !pollClosed\">\r\n        <ion-radio-group class=\"radio-group\" formControlName=\"selected_poll_option\">\r\n          <ion-item class=\"radio-item\">\r\n          <ion-label class=\"radio-label\">{{post.data.pollOptions[0].name}}</ion-label>\r\n          <ion-radio slot=\"start\" color=\"secondary\" value=\"0\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item class=\"radio-item\">\r\n          <ion-label class=\"radio-label\">{{post.data.pollOptions[1].name}}</ion-label>\r\n          <ion-radio slot=\"start\" color=\"secondary\" value=\"1\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item class=\"radio-item\" *ngIf=\"post.data.pollOptions[2] != null\">\r\n          <ion-label class=\"radio-label\">{{post.data.pollOptions[2].name}}</ion-label>\r\n          <ion-radio slot=\"start\" color=\"secondary\" value=\"2\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item class=\"radio-item\" *ngIf=\"post.data.pollOptions[3] != null\">\r\n          <ion-label class=\"radio-label\">{{post.data.pollOptions[3].name}}</ion-label>\r\n          <ion-radio slot=\"start\" color=\"secondary\" value=\"3\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n        </ion-list>\r\n        </form>\r\n\r\n    </div>\r\n    <div>\r\n    <ion-button *ngIf=\"!voted && !pollClosed\" class=\"submit-btn\" type=\"submit\" expand=\"block\" (click)=\"vote()\" fill=\"outline\" [disabled]=\"!pollOptionForm.valid\">Submit</ion-button>\r\n    </div>\r\n    <div class=\"canvas\" *ngIf=\"voted || pollClosed\">\r\n    <!-- <canvas baseChart  [data]=\"chartData\" [options]=\"chartOptions\" [labels]=\"optionsArray\" [chartType]=\"chartType\"></canvas> -->\r\n    <canvas baseChart \r\n    [datasets]=\"chartData\" \r\n    [labels]=\"chartLabels\" \r\n    [options]=\"chartOptions\" \r\n    [colors]=\"chartColors\"\r\n    [legend]=\"showLegend\" \r\n    [chartType]=\"chartType\">\r\n    </canvas>\t\t\t  \r\n    <div id=\"legend\"></div>\r\n    </div>\r\n    <div class=\"tags-wrapper\">\r\n      <ion-row >\r\n        <div class=\"tags\" *ngFor=\"let tag of post.postTags\">\r\n          <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\r\n          <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\r\n        </div>\r\n      </ion-row>\r\n    </div>\r\n  </ion-card-content>\r\n   <!-- <hr class=\"details-divider\">\r\n  \r\n    <h3 class=\"detail-title\">Selected Tags</h3> -->\r\n    <hr class=\"details-divider\">\r\n    <div class=\"user-preferences-wrapper\">\r\n      <div>\r\n        <div class=\"reviews\" *ngFor=\"let r of postReviews\">\r\n          <ion-row>\r\n            <ion-col size=\"2\">\r\n                <img class=\"addedByImgReview\" src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n            </ion-col>\r\n            <ion-col class=\"review\" size=\"9\">\r\n                <span class=\"addedByTitleReview\"><a (click)=\"viewUser(r.addedByUser.addedByKey)\" >\r\n                  <b>{{post.addedByUser.addedByUsername}}</b></a>, <span class=\"addedByDateReview\">{{r.dateCreated.toDate() | DateFormat}}</span>\r\n                </span>\r\n                    <br/>\r\n                    <br/>\r\n                    <div *ngIf=\"r.reviewMedia.length > 0\" class=\"bgSizeContain\" \r\n                    [ngStyle]=\"{'background-image':'url('+r.reviewMedia+')'}\"></div>\r\n                    <div class=\"messageReview\" [innerHTML]=\"r.review\"></div>\r\n              </ion-col>\r\n        </ion-row>\r\n       </div>\r\n      </div>\r\n    </div>\r\n</ion-card>\r\n\r\n<ion-card *ngIf=\"post.type=='resource'\">\r\n    <ion-card-header>\r\n      <ion-row>\r\n        <ion-col size=10>\r\n      <ion-card-subtitle class=\"addedBy\">\r\n        <img class=\"addedByImg\" src=\"{{post.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \r\n         <p><a class=\"addedByTitle\" (click)=\"viewUser(post.addedByUser.addedByKey)\" ><b>{{post.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\r\n          <br/>\r\n         <span class=\"addedByDate\">posted {{post.date.toDate() | DateFormat}}</span><br/>\r\n        <a (click)=\"viewGroup(post.groupId)\" class=\"addedByTitle\">in <b>{{post.groupName}}</b></a></p>\r\n      </ion-card-subtitle>\r\n    </ion-col>\r\n    <ion-col size=2>\r\n      <ion-buttons>\r\n        <ion-button (click)=\"showPostOptions(post)\">\r\n          <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    </ion-row>\r\n    </ion-card-header>\r\n    <ion-card-content class=\"message\">\r\n      <div *ngIf=\"post.postMedia\">\r\n        <ion-slides class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\r\n        <ion-slide *ngFor=\"let s of post.postMedia\">\r\n          <div class=\"bgSizeContain\" \r\n          [ngStyle]=\"{'background-image':'url('+s+')'}\">\r\n        </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      </div>\r\n      <ion-label>         <b>{{post.title}}.</b>       </ion-label>\r\n      <div *ngIf=\"post.data.type == 'contact'\" >\r\n        {{post.data.name}}<br/>\r\n        {{post.data.address}}<br/><br/>\r\n        {{post.data.email}}<br/>\r\n        {{post.data.phones}}<br/>\r\n    </div>\r\n    <div *ngIf=\"post.data.type == 'weblink'\" >\r\n      {{post.data.metatitle}}<br/>\r\n      <img [src]=\"post.data.metaicon\"/>   \r\n       {{post.data.metadescription}}<br/><br/>\r\n       <a href=\"{{post.data.metasite}}\">{{post.data.metasite}}</a>\r\n    </div>\r\n    <div *ngIf=\"post.data.type == 'upload'\" >\r\n      <div *ngIf=\"post.data.uploadtype == 'location'\" [innerHtml]=\"resource.url\"></div>\r\n      <div *ngIf=\"post.data.uploadtype == 'contact'\">\r\n        {{post.data.name}}<br/>\r\n        {{post.data.address}}<br/>\r\n        {{post.data.phones}}<br/>\r\n        {{post.data.email}}<br/>\r\n      </div>\r\n      <div *ngIf=\"post.data.uploadtype == 'image'\">\r\n        <img src=\"{{post.data.resolvedurl}}\" />\r\n      </div>\r\n      <div *ngIf=\"post.data.uploadtype == 'video'\">\r\n        <video controls width=\"100%\" src=\"{{post.data.resolvedurl}}\" ></video>\r\n      </div>\r\n    </div>\r\n    <div class=\"tags-wrapper\">\r\n      <ion-row >\r\n        <div class=\"tags\" *ngFor=\"let tag of post.postTags\">\r\n          <span *ngIf=\"tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag.val}}</span>\r\n          <span *ngIf=\"!tag.isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">#{{tag.val}}</span>\r\n        </div>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"reactions\">\r\n      <ion-row>\r\n        <ion-col size=3>\r\n          <ion-buttons>\r\n            <ion-button (click)=\"submitReactionSmile()\">\r\n           <div *ngIf=\"post.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n           <div *ngIf=\"!post.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \r\n          </ion-button>\r\n          </ion-buttons> \r\n        </ion-col>\r\n        <ion-col size=3>\r\n          <ion-buttons>\r\n            <ion-button (click)=\"submitReactionBookmark()\">\r\n           <div *ngIf=\"post.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n           <div *ngIf=\"!post.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \r\n          </ion-button>\r\n          </ion-buttons> \r\n        </ion-col>\r\n        <ion-col size=2></ion-col>\r\n        <ion-col size=2>\r\n          <ion-buttons>\r\n            <ion-button (click)=\"showReactionsList()\">\r\n          <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{post.totalReactionCount}}</span></div>\r\n        </ion-button>\r\n      </ion-buttons> \r\n        </ion-col>\r\n        <ion-col size=2>\r\n          <ion-buttons>\r\n            <ion-button>\r\n             <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{post.totalReviewCount}}</span></div>\r\n           </ion-button>\r\n      </ion-buttons> \r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    </ion-card-content>\r\n <!-- <hr class=\"details-divider\">\r\n  \r\n    <h3 class=\"detail-title\">Selected Tags</h3> -->\r\n    <hr class=\"details-divider\">\r\n    <div class=\"user-preferences-wrapper\">\r\n      <div  >\r\n        <div class=\"reviews\" *ngFor=\"let r of postReviews\">\r\n          <ion-row>\r\n            <ion-col size=\"2\">\r\n                <img class=\"addedByImgReview\" src=\"{{r.addedByUser.addedByImg}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n            </ion-col>\r\n            <ion-col class=\"review\" size=\"9\">\r\n                <span class=\"addedByTitleReview\"><a (click)=\"viewUser(r.addedByUser.addedByKey)\" >\r\n                  <b>{{post.addedByUser.addedByUsername}}</b></a>, <span class=\"addedByDateReview\">{{r.dateCreated.toDate() | DateFormat}}</span>\r\n                </span>\r\n                    <br/>\r\n                    <br/>\r\n                    <div *ngIf=\"r.reviewMedia.length > 0\" class=\"bgSizeContain\" \r\n                    [ngStyle]=\"{'background-image':'url('+r.reviewMedia+')'}\"></div>\r\n                    <div class=\"messageReview\" [innerHTML]=\"r.review\"></div>\r\n              </ion-col>\r\n        </ion-row>\r\n       </div>\r\n      </div>\r\n    </div>\r\n</ion-card>\r\n</div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row lines=\"none\" class=\"uploads item-text-wrap\" *ngIf=\"reviewMedia && reviewMedia.length > 0\">\r\n      <div class=\"img-wrap\" *ngFor=\"let media of reviewMedia\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <span class=\"close\" (click)=\"removeMedia(media)\">&times;</span>\r\n            <ion-img [src]=\"media\"></ion-img>\r\n          </ion-thumbnail>\r\n        </div>\r\n    </ion-row>\r\n    <ion-item>\r\n      <ion-button fill=\"clear\" (click)=\"attach()\" [disabled]=\"reviewMedia.length >= 1\">\r\n        <ion-icon size=\"large\" name=\"camera-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-textarea class=\"comment\" rows=\"0\" placeholder=\"Type your message\" [(ngModel)]=\"message\"></ion-textarea>\r\n       <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"clear\" (click)=\"submitReply()\" [disabled]=\"!message && !uploadingImage\">\r\n          <ion-icon size=\"large\" color=\"secondary\" name=\"arrow-forward-circle\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post.page */ "./src/app/post/post.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");










const routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_8__["PostPage"]
    }
];
let PostPageModule = class PostPageModule {
};
PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_8__["PostPage"]]
    })
], PostPageModule);



/***/ }),

/***/ "./src/app/post/post.page.scss":
/*!*************************************!*\
  !*** ./src/app/post/post.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\nion-content ion-card {\n  width: 100%;\n  padding-top: 0px;\n  margin-top: 0px;\n  margin-left: 0px;\n}\n\nion-card ion-card-header {\n  padding-top: 0px;\n  margin-top: 0px;\n  padding-bottom: 0px;\n}\n\n.title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Roboto-Medium\", \"Segoe UI Semibold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.poll-icon {\n  display: inline-block;\n  vertical-align: middle;\n  padding-right: 5px;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-size: 12px;\n}\n\n.addedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n}\n\n.addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n  font-size: 12px;\n}\n\n.addedByImg {\n  width: 45px;\n  float: left;\n  vertical-align: middle;\n}\n\n.newIcon {\n  margin-left: 10px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .slider {\n  margin-bottom: 5px;\n}\n\n.message .slider .bgSizeContain {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100%;\n  width: 100%;\n  height: 200px;\n  text-shadow: white 0px 0px 2px;\n  font-size: 16px;\n  border-radius: 10px;\n}\n\n.message .reactions {\n  margin-bottom: 0px;\n  margin-left: -10px;\n}\n\n.message .tags-wrapper {\n  padding-top: 5px;\n}\n\n.message .tags-wrapper .tags {\n  padding-right: 5px;\n}\n\n.message .tags-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #aa6c39;\n}\n\nion-slides {\n  height: auto;\n}\n\n.details-divider {\n  margin: 3px var(--page-margin) 3px;\n  border-top: 2px solid rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.user-preferences-wrapper .header {\n  width: 100%;\n}\n\n.user-preferences-wrapper .messageReview {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400px;\n  font-size: 12px;\n  line-height: 19px;\n  margin-left: 10px;\n}\n\n.user-preferences-wrapper .title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Roboto-Medium\", \"Segoe UI Semibold\", sans-serif;\n  font-weight: 500px;\n  font-size: 18px;\n  line-height: 23px;\n  margin: 1 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.user-preferences-wrapper .subtitle {\n  line-height: 20px;\n  width: 100%;\n}\n\n.user-preferences-wrapper .subtitle img {\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.user-preferences-wrapper .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.user-preferences-wrapper .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.user-preferences-wrapper .bgSizeContain {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100%;\n  width: 100%;\n  height: 200px;\n  text-shadow: white 0px 0px 2px;\n  font-size: 16px;\n  border-radius: 10px;\n}\n\n.user-preferences-wrapper .addedByTitleReview {\n  margin-left: 10px;\n  margin-right: 5px;\n  font-size: 12px;\n}\n\n.user-preferences-wrapper .addedByDateReview {\n  font-style: italic;\n  font-size: 12px;\n}\n\n.user-preferences-wrapper .addedByImgReview {\n  width: 40px;\n  margin-left: 10px;\n  float: left;\n  vertical-align: middle;\n}\n\n.user-preferences-wrapper .messageMedia {\n  width: 100px;\n}\n\n.reviews-wrapper .reviews-list {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.reviews-wrapper .reviews-list .review-item {\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  background-color: #f9f9fa;\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.reviews-wrapper .reviews-list .review-item .icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.reviews-wrapper .reviews-list .review-item .text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.reviews-wrapper .reviews-list .review-item .review-date {\n  padding-top: 3px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.reviews-wrapper .reviews-list .review-item .review img {\n  height: 25px;\n  width: 25px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.reviews-wrapper .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.reviews-wrapper .detail-title-reply {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n\n.reviews-wrapper .placeholder {\n  box-sizing: border-box;\n  -webkit-margin-before: 0px;\n          margin-block-start: 0px;\n  -webkit-margin-after: 0px;\n          margin-block-end: 0px;\n  text-rendering: optimizelegibility;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\", Helvetica, \"Segoe UI\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n}\n\n.postMedia {\n  width: 50px;\n}\n\n.comment {\n  font-size: 12px;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxwb3N0XFxwb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9zdC9wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0Esd0NBQUE7RUFDQSw4REFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsOEdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQ0U7RUFDRSx3Q0FBQTtBQ0VKOztBRENFO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQ0VKOztBRENHO0VBQ0MscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0c7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7QUNFTDs7QURBRztFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0dMOztBREFHO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBRTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNHTjs7QURESTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDSU47O0FERkk7RUFDRSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNLTjs7QURITTtFQUNFLGtCQUFBO0FDS1I7O0FESlE7RUFDRSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUdBLG1CQUFBO0FDTVY7O0FERk07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDSVI7O0FERk07RUFDRSxnQkFBQTtBQ0lSOztBREZRO0VBQ0Usa0JBQUE7QUNJVjs7QURGUTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0lWOztBREVJO0VBQ0UsWUFBQTtBQ0NOOztBRENJO0VBQ0Usa0NBQUE7RUFDQSxpRUFBQTtBQ0VOOztBREVNO0VBQ0UsV0FBQTtBQ0NSOztBREVNO0VBQ0Usa0dBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQVI7O0FESU07RUFDRSw4R0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNGUjs7QURLTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0hSOztBRE1NO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDSlI7O0FEUU07RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDTlI7O0FEU007RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ1BSOztBRFNNO0VBQ0UsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFHQSxtQkFBQTtBQ1BSOztBRFNNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNQUjs7QURTTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ1BSOztBRFVNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDUlI7O0FEV007RUFDRSxZQUFBO0FDVFI7O0FEY0k7RUFDRSwyQ0FBQTtBQ1hOOztBRFlNO0VBRUUsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUdBLHNCQUFBO0FDYlI7O0FEbUJNO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQ2pCUjs7QURvQk07RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbEJSOztBRHFCTTtFQUNFLGdCQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNuQlI7O0FEc0JNO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDcEJOOztBRHlCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FDdkJOOztBRDBCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQ3hCTjs7QUQyQkk7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVFQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDekJOOztBRGdDQTtFQUNFLFdBQUE7QUM3QkY7O0FEK0JBO0VBQ0UsZUFBQTtBQzVCRjs7QUQrQkE7RUFDRSxXQUFBO0FDNUJGOztBRDZCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQzNCRjs7QUQ2QkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMzQkY7O0FENkJBO0VBQ0UsVUFBQTtBQzNCRiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcbiAgLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IGlvbi1jYXJke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlcntcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLU1lZGl1bScsICdIZWx2ZXRpY2EgTmV1ZSBNZWRpdW0nLCdSb2JvdG8tTWVkaXVtJywgJ1NlZ29lIFVJIFNlbWlib2xkJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIG1hcmdpbjogMSAwIDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4gIC5saXN0aW5nLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgfVxyXG4gIFxyXG4gIC5pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5wb2xsLWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgfVxyXG4gIFxyXG4gICAudGV4dHtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgfVxyXG4gICAuYWRkZWRCeVRpdGxlIHtcclxuICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICBsaW5lLWhlaWdodDogNXB4O1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC8vICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICB9XHJcbiAgIC5hZGRlZEJ5RGF0ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG4gIC5hZGRlZEJ5SW1nIHtcclxuICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLm5ld0ljb24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgXHJcbiAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAuYmdTaXplQ29udGFpbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiB3aGl0ZSAwcHggMHB4IDJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucmVhY3Rpb25zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgICB9IFxyXG4gICAgICAudGFncy13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgLnRhZ3Mge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIFxyXG4gICAgICAgIC5pdGVtLXJhdGluZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogI2FhNmMzOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tc2xpZGVzIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMtZGl2aWRlciB7XHJcbiAgICAgIG1hcmdpbjogM3B4IHZhcigtLXBhZ2UtbWFyZ2luKSAzcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAuNCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciB7XHJcbiAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5tZXNzYWdlUmV2aWV3IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLU1lZGl1bScsICdIZWx2ZXRpY2EgTmV1ZSBNZWRpdW0nLCdSb2JvdG8tTWVkaXVtJywgJ1NlZ29lIFVJIFNlbWlib2xkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIG1hcmdpbjogMSAwIDRweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5zdWJ0aXRsZXtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc3VidGl0bGUgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICAgICBcclxuICAgICAgLnRleHR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuYmdTaXplQ29udGFpbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHRleHQtc2hhZG93OiB3aGl0ZSAwcHggMHB4IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgICAuYWRkZWRCeVRpdGxlUmV2aWV3IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7ICBcclxuICAgICAgfVxyXG4gICAgICAuYWRkZWRCeURhdGVSZXZpZXcge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgICAgfVxyXG5cclxuICAgICAgLmFkZGVkQnlJbWdSZXZpZXcge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZXNzYWdlTWVkaWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIC5yZXZpZXdzLXdyYXBwZXIge1xyXG4gICAgLy8gcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAucmV2aWV3cy1saXN0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgLnJldmlldy1pdGVtIHtcclxuICAgICAgICAvLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBweDtcclxuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI1MCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgIC8vIGJvcmRlci1jb2xvcjogcmdiKDIzOSwgMjQxLCAyNDMpO1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIC8vIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICBcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAudGV4dHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXZpZXctZGF0ZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXZpZXcgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIC5kZXRhaWwtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsLXRpdGxlLXJlcGx5IHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xyXG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiAwcHg7XHJcbiAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4ucG9zdE1lZGlhIHtcclxuICB3aWR0aDo1MHB4O1xyXG59XHJcbi5jb21tZW50IHtcclxuICBmb250LXNpemU6MTJweDtcclxufVxyXG5cclxuLnVwbG9hZHMge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4uaW1nLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uaW1nLXdyYXAgLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIHJpZ2h0OiAtN3B4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIHBhZGRpbmc6IDVweCAycHggMnB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaW1nLXdyYXA6aG92ZXIgLmNsb3NlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xufVxuXG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1NZWRpdW1cIiwgXCJIZWx2ZXRpY2EgTmV1ZSBNZWRpdW1cIiwgXCJSb2JvdG8tTWVkaXVtXCIsIFwiU2Vnb2UgVUkgU2VtaWJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBtYXJnaW46IDEgMCA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wb2xsLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hZGRlZEJ5VGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYWRkZWRCeURhdGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hZGRlZEJ5SW1nIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubmV3SWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5tZXNzYWdlIC5zbGlkZXIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWVzc2FnZSAuc2xpZGVyIC5iZ1NpemVDb250YWluIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1zaGFkb3c6IHdoaXRlIDBweCAwcHggMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm1lc3NhZ2UgLnJlYWN0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ubWVzc2FnZSAudGFncy13cmFwcGVyIC50YWdzIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLm1lc3NhZ2UgLnRhZ3Mtd3JhcHBlciAudGFncyAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2FhNmMzOTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmRldGFpbHMtZGl2aWRlciB7XG4gIG1hcmdpbjogM3B4IHZhcigtLXBhZ2UtbWFyZ2luKSAzcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjQpO1xufVxuXG4udXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLm1lc3NhZ2VSZXZpZXcge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLU1lZGl1bVwiLCBcIkhlbHZldGljYSBOZXVlIE1lZGl1bVwiLCBcIlJvYm90by1NZWRpdW1cIiwgXCJTZWdvZSBVSSBTZW1pYm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbjogMSAwIDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5zdWJ0aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnN1YnRpdGxlIGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4udXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cbi51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmJnU2l6ZUNvbnRhaW4ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LXNoYWRvdzogd2hpdGUgMHB4IDBweCAycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4udXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5VGl0bGVSZXZpZXcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLmFkZGVkQnlEYXRlUmV2aWV3IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEycHg7XG59XG4udXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5hZGRlZEJ5SW1nUmV2aWV3IHtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLm1lc3NhZ2VNZWRpYSB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0ge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ucmV2aWV3cy13cmFwcGVyIC5yZXZpZXdzLWxpc3QgLnJldmlldy1pdGVtIC5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAudGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5yZXZpZXdzLXdyYXBwZXIgLnJldmlld3MtbGlzdCAucmV2aWV3LWl0ZW0gLnJldmlldy1kYXRlIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnJldmlld3Mtd3JhcHBlciAucmV2aWV3cy1saXN0IC5yZXZpZXctaXRlbSAucmV2aWV3IGltZyB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5yZXZpZXdzLXdyYXBwZXIgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnJldmlld3Mtd3JhcHBlciAuZGV0YWlsLXRpdGxlLXJlcGx5IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4O1xufVxuLnJldmlld3Mtd3JhcHBlciAucGxhY2Vob2xkZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMHB4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnBvc3RNZWRpYSB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnVwbG9hZHMge1xuICBtYXJnaW46IDVweDtcbn1cbi51cGxvYWRzIC5pbWctd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDA7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi51cGxvYWRzIC5pbWctd3JhcCAuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJweDtcbiAgcmlnaHQ6IC03cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogNXB4IDJweCAycHg7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnVwbG9hZHMgLmltZy13cmFwOmhvdmVyIC5jbG9zZSB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/post/post.page.ts":
/*!***********************************!*\
  !*** ./src/app/post/post.page.ts ***!
  \***********************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reaction-list-modal/reaction-list-modal.page */ "./src/app/reaction-list-modal/reaction-list-modal.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_14__);















let PostPage = class PostPage {
    constructor(dataProvider, loadingProvider, route, router, firestore, actionSheet, modalCtrl, imageProvider, camera, keyboard, contacts, geolocation, alertCtrl) {
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.route = route;
        this.router = router;
        this.firestore = firestore;
        this.actionSheet = actionSheet;
        this.modalCtrl = modalCtrl;
        this.imageProvider = imageProvider;
        this.camera = camera;
        this.keyboard = keyboard;
        this.contacts = contacts;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.notifications = [];
        this.reviewMedia = [];
        this.chartType = 'pie';
        // Data
        this.chartData = [{ data: [], label: 'Poll Results', backgroundColor: [
                    "#f43004",
                    "#decf3f",
                    "#FFA500",
                    "#9b59b6",
                ],
            }];
        // Options
        this.chartOptions = {
            legend: {
                display: true
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = this.chartData.datasets[0];
                var sum = ds.data.reduce(function add(a, b) {
                    return a + b;
                }, 0);
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    var perc = Math.round(100 * ds.data[i] / sum);
                    // tslint:disable-next-line: max-line-length
                    text.push('<span style="background-color:' + ds.backgroundColor[i] + '">' + '</span>' + this.chartData.labels[i] + ' (' + ds.data[i] + ') (' + perc + '%)');
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join('');
            }
        };
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: false
        };
        // this.reviewMedia.push('https://firebasestorage.googleapis.com/v0/b/firechat-8fb8c.appspot.com/o/images%2Fposts%2FkjD2RUnc.jpg?alt=media&token=d0073c88-58cf-4fc0-9e5c-c6a491bb2673');
        this.post = { showSmiley: false, showHug: false, addedByUser: {}, data: {}, date: firebase_app__WEBPACK_IMPORTED_MODULE_14__["firestore"].Timestamp.now(), reviewMedia: [] };
        this.pollOptionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            selected_poll_option: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]))
        });
        this.getPostDetails();
    }
    ionViewDidEnter() {
        this.loggedInUserId = firebase_app__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid;
    }
    ngOnInit() {
    }
    getPostDetails() {
        this.loadingProvider.show();
        this.postId = this.route.snapshot.params.id;
        this.post.reactions = [];
        this.post.reviews = [];
        this.dataProvider.getPostDetails(this.postId).get().subscribe((post) => {
            if (post) {
                let p = post.data();
                p.reactions = [];
                p.key = post.id;
                this.title = post.data().title;
                let totalReactionCount = 0;
                let totalReviewCount = 0;
                p.postTags = p.postTags.filter(x => x.isChecked !== false);
                // get reactions list
                this.firestore.collection('posts').doc(post.id).collection('reactions').snapshotChanges().subscribe((reactions) => {
                    this.post.reactions = [];
                    reactions.forEach(element => {
                        let reaction = element.payload.doc.data();
                        reaction.key = element.payload.doc.id;
                        p.reactions.push(reaction);
                    });
                    // Check for Thanks
                    if (reactions) {
                        totalReactionCount = p.reactions.length;
                        let foundSmiley = false;
                        if (p.reactions !== undefined) {
                            foundSmiley = p.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                && el.reactionType === 'Thanks');
                        }
                        if (foundSmiley) {
                            p.showSmiley = true;
                        }
                        else {
                            p.showSmiley = false;
                        }
                        // Check for Hugs
                        let foundHug = false;
                        if (p.reactions !== undefined) {
                            foundHug = p.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                && el.reactionType === 'Hug');
                        }
                        if (foundHug) {
                            p.showHug = true;
                        }
                        else {
                            p.showHug = false;
                        }
                        // Check for Checkin
                        let foundCheckin = false;
                        if (p.reactions !== undefined) {
                            foundCheckin = p.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                && el.reactionType === 'Checkin');
                        }
                        if (foundCheckin) {
                            p.showCheckin = true;
                        }
                        else {
                            p.showCheckin = false;
                        }
                        // Check for Bookmark
                        let foundBookmark = false;
                        if (p.reactions !== undefined) {
                            foundBookmark = p.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                && el.reactionType === 'Bookmark');
                        }
                        if (foundBookmark) {
                            p.showBookmark = true;
                        }
                        else {
                            p.showBookmark = false;
                        }
                        p.totalReactionCount = totalReactionCount;
                    }
                });
                // get reviews list
                this.firestore.collection('posts').doc(post.id).collection('reviews')
                    .ref.orderBy("dateCreated", "desc").onSnapshot((reviews) => {
                    this.post.reviews = [];
                    p.reviews = [];
                    reviews.forEach(element => {
                        let review = element.data();
                        review.key = element.id;
                        p.reviews.push(review);
                    });
                    totalReviewCount = p.reviews.length;
                    p.totalReviewCount = totalReviewCount;
                    this.postReviews = p.reviews;
                    if (p.reviews !== undefined) {
                        this.postReviews = [];
                        let values = Object.keys(p.reviews).map(function (e) {
                            p.reviews[e].key = e;
                            return p.reviews[e];
                        });
                        this.postReviews = values;
                        this.postReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
                    }
                });
                // poll related data
                if (p.type === 'poll') {
                    console.log('inside poll');
                    let pollOption0Votes;
                    let pollOption1Votes;
                    let pollOption2Votes;
                    let pollOption3Votes;
                    let pollOption0Name;
                    let pollOption1Name;
                    let pollOption2Name;
                    let pollOption3Name;
                    pollOption0Name = p.data.pollOptions[0].name;
                    pollOption1Name = p.data.pollOptions[1].name;
                    if (p.data.pollOptions[2] != null) {
                        pollOption2Name = p.data.pollOptions[2].name;
                    }
                    if (p.data.pollOptions[3] != null) {
                        pollOption3Name = p.data.pollOptions[3].name;
                    }
                    if (p.data.pollOptions[0].members == null) {
                        pollOption0Votes = 0;
                    }
                    else {
                        pollOption0Votes = p.data.pollOptions[0].members.length;
                    }
                    if (p.data.pollOptions[1].members == null) {
                        pollOption1Votes = 0;
                    }
                    else {
                        pollOption1Votes = p.data.pollOptions[1].members.length;
                    }
                    if (p.data.pollOptions[2] == null || p.data.pollOptions[2].members == null) {
                        pollOption2Votes = 0;
                    }
                    else {
                        pollOption2Votes = p.data.pollOptions[2].members.length;
                    }
                    if (p.data.pollOptions[3] == null || p.data.pollOptions[3].members == null) {
                        pollOption3Votes = 0;
                    }
                    else {
                        pollOption3Votes = p.data.pollOptions[3].members.length;
                    }
                    // this.optionsArray = [pollOption0Name, pollOption1Name, pollOption2Name, pollOption3Name];
                    // this.chartData = [pollOption0Votes, pollOption1Votes, pollOption3Votes, pollOption3Votes];
                    this.chartLabels = [];
                    this.chartData[0].data = [];
                    this.chartData[0].data.push(pollOption0Votes);
                    this.chartData[0].data.push(pollOption1Votes);
                    this.chartLabels.push(pollOption0Name);
                    this.chartLabels.push(pollOption1Name);
                    if (p.data.pollOptions[2] != null) {
                        this.chartData[0].data.push(pollOption2Votes);
                        this.chartLabels.push(pollOption2Name);
                    }
                    if (p.data.pollOptions[3] != null) {
                        this.chartData[0].data.push(pollOption3Votes);
                        this.chartLabels.push(pollOption3Name);
                    }
                    this.selectedOption = '';
                    this.voted = false;
                    const today = new Date();
                    const de = p.data.dateEnding.toDate();
                    if (de < today) {
                        this.pollClosed = true;
                    }
                    else {
                        this.pollClosed = false;
                    }
                    p.data.pollOptions.forEach(pollOption => {
                        if (pollOption.members != null) {
                            pollOption.members.forEach(member => {
                                if (member === this.dataProvider.getCurrentUserId()) {
                                    this.voted = true;
                                }
                            });
                        }
                    });
                }
                this.post = p;
            }
            this.loadingProvider.hide();
        });
    }
    submitReactionSmile() {
        const reaction = this.post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
            && el.reactionType === 'Thanks');
        if (reaction === undefined) {
            this.dataProvider.getCurrentUser().get().subscribe((account) => {
                if (account) {
                    const currentUserName = account.data().username;
                    let reaction = {
                        key: '',
                        dateCreated: new Date(),
                        addedByUser: {
                            addedByKey: this.dataProvider.getCurrentUserId(),
                            addedByUsername: account.data().username,
                            addedByImg: account.data().img
                        },
                        reactionType: 'Thanks'
                    };
                    this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
                        this.post.showSmiley = true;
                    });
                }
            });
        }
        else {
            this.post.showSmiley = false;
            this.dataProvider.removePostReaction(this.post.key, reaction.key);
        }
    }
    submitReactionHug() {
        const reaction = this.post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
            && el.reactionType === 'Hug');
        if (reaction === undefined) {
            this.dataProvider.getCurrentUser().get().subscribe((account) => {
                if (account) {
                    const currentUserName = account.data().username;
                    let reaction = {
                        key: '',
                        dateCreated: new Date(),
                        addedByUser: {
                            addedByKey: this.dataProvider.getCurrentUserId(),
                            addedByUsername: account.data().username,
                            addedByImg: account.data().img
                        },
                        reactionType: 'Hug'
                    };
                    this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
                        this.post.showHug = true;
                    });
                }
            });
        }
        else {
            this.post.showHug = false;
            this.dataProvider.removePostReaction(this.post.key, reaction.key);
        }
    }
    submitReactionCheckin() {
        const reaction = this.post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
            && el.reactionType === 'Checkin');
        if (reaction === undefined) {
            this.dataProvider.getCurrentUser().get().subscribe((account) => {
                if (account) {
                    const currentUserName = account.data().username;
                    let reaction = {
                        key: '',
                        dateCreated: new Date(),
                        addedByUser: {
                            addedByKey: this.dataProvider.getCurrentUserId(),
                            addedByUsername: account.data().username,
                            addedByImg: account.data().img
                        },
                        reactionType: 'Checkin'
                    };
                    this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
                        this.post.showCheckin = true;
                    });
                }
            });
        }
        else {
            this.post.showCheckin = false;
            this.dataProvider.removePostReaction(this.post.key, reaction.key);
        }
    }
    submitReactionBookmark() {
        const reaction = this.post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
            && el.reactionType === 'Bookmark');
        if (reaction === undefined) {
            this.dataProvider.getCurrentUser().get().subscribe((account) => {
                if (account) {
                    const currentUserName = account.data().username;
                    let reaction = {
                        key: '',
                        dateCreated: new Date(),
                        addedByUser: {
                            addedByKey: this.dataProvider.getCurrentUserId(),
                            addedByUsername: account.data().username,
                            addedByImg: account.data().img
                        },
                        reactionType: 'Bookmark'
                    };
                    this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
                        this.post.showBookmark = true;
                    });
                }
            });
        }
        else {
            this.post.showBookmark = false;
            this.dataProvider.removePostReaction(this.post.key, reaction.key);
        }
    }
    showReactionsList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.post.totalReactionCount === 0) {
                return;
            }
            const p = this.post;
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_8__["ReactionListModalPage"],
                componentProps: {
                    reactions: p.reactions
                }
            });
            return yield modal.present();
        });
    }
    submitReply() {
        this.message = this.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
        let review;
        let currentUserName;
        this.dataProvider.getCurrentUser().get().subscribe((account) => {
            if (account) {
                currentUserName = account.data().username;
                review = {
                    dateCreated: new Date(),
                    addedByUser: {
                        addedByKey: this.dataProvider.getCurrentUserId(),
                        addedByUsername: account.data().username,
                        addedByImg: account.data().img
                    },
                    review: this.message,
                    reviewMedia: this.reviewMedia
                };
                this.dataProvider.updatePostReviews(this.postId, review);
                this.message = '';
                this.reviewMedia = [];
            }
        });
    }
    attach() {
        this.actionSheet.create({
            header: 'Choose images',
            buttons: [{
                    text: 'Camera',
                    handler: () => {
                        this.uploadingImage = true;
                        this.imageProvider.uploadPostReactionPhoto(this.postId, this.loggedInUserId, this.camera.PictureSourceType.CAMERA).then((url) => {
                            this.reviewMedia.push(url);
                            this.uploadingImage = false;
                        });
                    }
                }, {
                    text: 'Photo Library',
                    handler: () => {
                        this.uploadingImage = true;
                        this.imageProvider.uploadPostReactionPhoto(this.postId, this.loggedInUserId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
                            this.reviewMedia.push(url);
                            this.uploadingImage = false;
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
    removeMedia(media) {
        this.reviewMedia.splice();
        this.reviewMedia = this.reviewMedia.filter(x => x !== media);
        this.imageProvider.deletePostPhoto(media);
    }
    viewUser(userId) {
        if (this.loggedInUserId === userId) {
            this.router.navigateByUrl('/profile');
        }
        else {
            this.router.navigateByUrl('/userinfo/' + userId);
        }
    }
    viewGroup(groupId) {
        this.router.navigateByUrl('/group/' + groupId);
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
    vote() {
        const pollOptionIndex = this.pollOptionForm.value["selected_poll_option"];
        console.log('pollOptionIndex', pollOptionIndex);
        const members = [];
        members.push(this.dataProvider.getCurrentUserId());
        this.post.data.pollOptions[pollOptionIndex].members = members;
        this.voted = true;
        this.dataProvider.updatePollMembers(this.postId, this.post.data);
        this.ngOnInit();
    }
};
PostPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__["Contacts"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.page.scss */ "./src/app/post/post.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__["Contacts"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], PostPage);



/***/ })

}]);
//# sourceMappingURL=post-post-module-es2015.js.map