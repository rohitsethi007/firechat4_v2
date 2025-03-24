(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_groupinfo_groupinfo_module_ts"],{

/***/ 85063:
/*!***********************************************!*\
  !*** ./src/app/groupinfo/groupinfo.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupinfoPageModule: () => (/* binding */ GroupinfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _groupinfo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupinfo.page */ 8096);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.module */ 53952);








const routes = [{
  path: '',
  component: _groupinfo_page__WEBPACK_IMPORTED_MODULE_0__.GroupinfoPage
}];
let GroupinfoPageModule = class GroupinfoPageModule {};
GroupinfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  declarations: [_groupinfo_page__WEBPACK_IMPORTED_MODULE_0__.GroupinfoPage]
})], GroupinfoPageModule);


/***/ }),

/***/ 8096:
/*!*********************************************!*\
  !*** ./src/app/groupinfo/groupinfo.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupinfoPage: () => (/* binding */ GroupinfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _groupinfo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groupinfo.page.html?ngResource */ 19852);
/* harmony import */ var _groupinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groupinfo.page.scss?ngResource */ 78680);
/* harmony import */ var _groupinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_groupinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ 3602);










let GroupinfoPage = class GroupinfoPage {
  // GroupInfoPage
  // This is the page where the user can view group information, change group information, add members, and leave/delete group.
  constructor(router, route, dataProvider, firestore, loadingProvider, alertCtrl) {
    this.router = router;
    this.route = route;
    this.dataProvider = dataProvider;
    this.firestore = firestore;
    this.loadingProvider = loadingProvider;
    this.alertCtrl = alertCtrl;
    this.groupMembers = [];
    this.groupPosts = [];
  }
  ngOnInit() {}
  ionViewDidEnter() {
    // Initialize
    this.groupId = this.route.snapshot.params.id;
    // Get group details.
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(p => {
      let group = p.payload.data();
      group.key = p.key;
      if (group != null) {
        this.loadingProvider.show();
        this.group = group;
        group.members.forEach(memberId => {
          this.dataProvider.getUser(memberId).snapshotChanges().subscribe(memberRes => {
            let member = {
              $key: memberRes.payload.id,
              ...memberRes.payload.data()
            };
            this.addUpdateOrRemoveMember(member);
          });
        });
        // get group Posts
        if (this.group.posts) {
          this.firestore.collection('posts').ref.where(firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldPath.documentId(), 'in', this.group.posts).get().then(po => {
            this.groupPosts = [];
            this.loadEachPostData(po);
          });
        }
        this.loadingProvider.hide();
      } else {
        this.router.navigateByUrl('/');
      }
    });
    // Get user details.
    this.dataProvider.getCurrentUser().then(u => {
      u.snapshotChanges().subscribe(accounts => {
        let account = accounts.payload.data();
        this.user = {
          $key: account.userId,
          ...account
        };
      });
    });
  }
  loadEachPostData(po) {
    po.forEach(p => {
      let post;
      post = p.data();
      post.key = p.id;
      post.postTags = post.postTags.filter(x => x.isChecked !== false);
      if (!this.groupPosts) {
        this.groupPosts = [post];
      } else {
        let index = -1;
        for (let i = 0; i < this.groupPosts.length; i++) {
          if (this.groupPosts[i].key == post.key) {
            index = i;
          }
        }
        if (index > -1) {
          this.groupPosts[index] = post;
        } else {
          this.groupPosts.push(post);
        }
      }
    });
  }
  // Check if user exists in the group then add/update user.
  // If the user has already left the group, remove user from the list.
  addUpdateOrRemoveMember(member) {
    if (this.group) {
      if (this.group.members.indexOf(member.$key) > -1) {
        // User exists in the group.
        if (!this.groupMembers) {
          this.groupMembers = [member];
        } else {
          var index = -1;
          for (var i = 0; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].$key == member.$key) {
              index = i;
            }
          }
          // Add/Update User.
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
          if (this.groupMembers[j].$key == member.$key) {
            index1 = j;
          }
        }
        if (index1 > -1) {
          this.groupMembers.splice(index1, 1);
        }
      }
    }
  }
  // View user info.
  viewUser(userId) {
    if (this.dataProvider.getCurrentUserId !== userId) {
      this.router.navigateByUrl('/userinfo/' + userId);
    }
  }
  // Leave group.
  leaveGroup() {
    this.alert = this.alertCtrl.create({
      header: 'Confirm Leave',
      message: 'Are you sure you want to leave this group?',
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Leave',
        handler: data => {
          this.loadingProvider.show();
          // Remove member from group.
          this.group.members.splice(this.group.members.indexOf(this.user.$key), 1);
          // Add system message.
          this.group.messages.push({
            date: new Date().toString(),
            sender: this.user.$key,
            type: 'system',
            message: this.user.name + ' has left this group.',
            icon: 'md-log-out'
          });
          // Update group on database.
          this.dataProvider.getGroup(this.groupId).update({
            members: this.group.members,
            messages: this.group.messages
          }).then(success => {
            // Remove group from user's group list.
            this.firestore.doc('/accounts/' + this.dataProvider.getCurrentUserId + '/groups/' + this.groupId).delete().then(() => {
              // Pop this view because user already has left this group.
              this.group = null;
              setTimeout(() => {
                this.loadingProvider.hide();
                this.router.navigateByUrl('/');
              }, 300);
            });
          }).catch(error => {
            this.loadingProvider.showToast("Something went wrong");
          });
        }
      }]
    }).then(r => r.present());
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
  }];
};
GroupinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-groupinfo',
  template: _groupinfo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_groupinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GroupinfoPage);


/***/ }),

/***/ 78680:
/*!**********************************************************!*\
  !*** ./src/app/groupinfo/groupinfo.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --page-margin: var(--app-narrow-margin);
  --page-background: var(--app-background);
}

.group-info {
  width: 100%;
}

.group-img {
  padding-top: var(--page-margin);
}

.save {
  height: 25px;
  width: 100%;
  text-transform: initial !important;
}

.toggle-text {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, "Roboto", "Segoe UI", Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  overflow: hidden;
  text-overflow: ellipsis;
}

.profile-summary-name {
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium", "Helvetica-Bold", "Roboto-Medium", "Segoe UI Semibold", Arial-Bold, sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  margin: 4px 0;
  display: inline-block;
}

.profile-component-title {
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium", Helvetica-Bold, "Roboto-Medium", "Segoe UI Semibold", Arial-Bold, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
}

.addedByDate {
  font-style: italic;
  font-size: 12px;
}

.logout {
  text-transform: capitalize !important;
}

.link {
  color: #007B99;
  text-decoration: none;
}

.activities {
  padding-bottom: 20px;
}
.activities .activities-item {
  height: 30px;
}

.tags {
  padding-right: 5px;
}
.tags .item-rating {
  background-color: rgba(var(--page-color-rgb), 0.35);
  padding-left: var(--page-margin);
  padding-right: calc(var(--page-margin) / 2);
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  display: block;
  text-align: left;
  color: #aa6c39;
}`, "",{"version":3,"sources":["webpack://./src/app/groupinfo/groupinfo.page.scss"],"names":[],"mappings":"AAAA;EACE,uCAAA;EACA,wCAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACC,+BAAA;AACD;;AAEA;EACE,YAAA;EACA,WAAA;EACA,kCAAA;AACF;;AAEA;EACE,kGAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,4CAAA;EACA,6BAAA;EACA,gBAAA;EACA,uBAAA;AACF;;AAEA;EACE,4IAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,qBAAA;AACF;;AAEA;EACE,0IAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AACF;;AAEA;EACA,kBAAA;EACA,eAAA;AACA;;AAEA;EACE,qCAAA;AACF;;AAEA;EACA,cAAA;EACA,qBAAA;AACA;;AAEA;EACA,oBAAA;AACA;AAAA;EACA,YAAA;AAEA;;AAIE;EACE,kBAAA;AADJ;AAGE;EAEE,mDAAA;EACA,gCAAA;EACA,2CAAA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,cAAA;AAFJ","sourcesContent":[":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\n.group-info {\n  width: 100%;\n}\n\n.group-img {\n padding-top: var(--page-margin);\n}\n\n.save {\n  height: 25px;\n  width: 100%;\n  text-transform: initial !important;\n}\n\n.toggle-text {\n  font-family: 'HelveticaNeue', 'Helvetica Neue', Helvetica, 'Roboto', 'Segoe UI', Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden; \n  text-overflow: ellipsis;\n}\n\n.profile-summary-name {\n  font-family: 'HelveticaNeue-Medium', 'Helvetica Neue Medium', 'Helvetica-Bold', 'Roboto-Medium', 'Segoe UI Semibold', Arial-Bold, sans-serif;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 26px;\n  margin: 4px 0;\n  display: inline-block;\n}\n\n.profile-component-title {\n  font-family: 'HelveticaNeue-Medium', 'Helvetica Neue Medium', Helvetica-Bold, 'Roboto-Medium', 'Segoe UI Semibold', Arial-Bold, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.addedByDate {\nfont-style: italic;\nfont-size: 12px;\n}\n\n.logout {\n  text-transform: capitalize !important;\n}\n\n.link {\ncolor: #007B99;\ntext-decoration: none;\n}\n\n.activities {\npadding-bottom: 20px;\n.activities-item {\nheight: 30px;\n}\n\n}\n\n       \n  .tags {\n    padding-right: 5px;\n\n  .item-rating {\n    // Default background\n    background-color: rgba(var(--page-color-rgb), .35);\n    padding-left: var(--page-margin);\n    padding-right: calc(var(--page-margin) / 2);\n    font-size: 14px;\n    font-weight: bold;\n    width: 100%;\n    display: block;\n    text-align: left;\n    color: #aa6c39;\n  }\n\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 19852:
/*!**********************************************************!*\
  !*** ./src/app/groupinfo/groupinfo.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"group\">{{group.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"group\">\n      <ion-row>\n        <ion-col size=3>\n        <div class=\"group-img\"> \n          <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-dp_rect.png'\">\n        </div>\n      </ion-col>\n      <ion-col size=9>\n        <div>\n          <ion-item lines=\"none\">\n          <ion-text class=\"profile-summary-name\">{{group.name}}</ion-text>\n        </ion-item>\n      </div>\n        <div class=\"ion-no-border\">\n          <ion-item class=\"toggle-text\" lines=\"none\">\n            <ion-text>{{group.description}}</ion-text>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-item-divider class=\"profile-component-title\">Group Tags</ion-item-divider>\n    <ion-list lines=\"none\">\n      <div class=\"tags\" *ngFor=\"let tag of group.groupTags\">\n        <span class=\"item-rating\">#{{tag}}</span>\n      </div>\n     </ion-list>\n     <ion-item-divider class=\"profile-component-title\">Activity</ion-item-divider>\n     <ion-list class=\"activities\" lines=\"none\" > \n      <ion-item *ngIf=\"groupPosts.length == 0\" class=\"toggle-text\">\n       <ion-label>No Group Activity</ion-label>\n      </ion-item>\n      <ion-item class=\"toggle-text activities-item\"  *ngFor=\"let item of groupPosts\">\n        New post: <a class=\"link\" [routerLink]=\"['/post', item.key]\"> \"{{item.title}}\"</a>\n      <ion-text slot=\"end\" class=\"addedByDate\">{{item.date.toDate() | date:'mediumDate'}}</ion-text>  \n    </ion-item>\n     </ion-list>\n\n    <ion-item-divider class=\"profile-component-title\">Group Members:</ion-item-divider>\n    <ion-list lines=\"none\">\n      <ion-list lines=\"none\">\n        <ion-item  *ngIf=\"groupMembers.length == 0\" class=\"toggle-text\">\n          <ion-label>Build a community, invite others to join</ion-label>\n        </ion-item>  \n        <ion-item text-wrap *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.key)\">\n          <ion-avatar slot=\"start\">\n            <ion-img src=\"{{member.img}}\"></ion-img>\n          </ion-avatar>\n          <ion-label class=\"toggle-text\">\n              <ion-label class=\"ion-no-padding\">{{member.username}}<br/>\n              {{member.description}}</ion-label>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-list>\n </div>\n<ion-row *ngIf=\"myProfile\">\n  <div class=\"ion-padding save\">\n    <ion-button expand=\"block\" color=\"secondary\">Leave Group</ion-button>\n  </div>\n</ion-row>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_groupinfo_groupinfo_module_ts.js.map