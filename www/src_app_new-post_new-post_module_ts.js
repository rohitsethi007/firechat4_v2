(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-post_new-post_module_ts"],{

/***/ 31147:
/*!*********************************************!*\
  !*** ./src/app/new-post/new-post.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewPostPageModule: () => (/* binding */ NewPostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/share.module */ 53952);
/* harmony import */ var _new_post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-post.page */ 41636);








const routes = [{
  path: '',
  component: _new_post_page__WEBPACK_IMPORTED_MODULE_1__.NewPostPage
}];
let NewPostPageModule = class NewPostPageModule {};
NewPostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _services_share_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  declarations: [_new_post_page__WEBPACK_IMPORTED_MODULE_1__.NewPostPage]
})], NewPostPageModule);


/***/ }),

/***/ 41636:
/*!*******************************************!*\
  !*** ./src/app/new-post/new-post.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewPostPage: () => (/* binding */ NewPostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _new_post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-post.page.html?ngResource */ 81952);
/* harmony import */ var _new_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-post.page.scss?ngResource */ 30992);
/* harmony import */ var _new_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_new_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/image.service */ 62499);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/app */ 3602);












let NewPostPage = class NewPostPage {
  constructor(route, router, dataProvider, imageProvider, loadingProvider, actionSheet, firestore, ngZone) {
    this.route = route;
    this.router = router;
    this.dataProvider = dataProvider;
    this.imageProvider = imageProvider;
    this.loadingProvider = loadingProvider;
    this.actionSheet = actionSheet;
    this.firestore = firestore;
    this.ngZone = ngZone;
    this.step = 1;
    this.userNotifications = [];
    this.userPosts = [];
    this.postMediaImgs = [];
    this.postMediaVideo = [];
    this.postMediaImgs = [];
    this.postMediaVideo = [];
    this.groupId = this.route.snapshot.params.id;
    this.group = {
      name: ''
    };
    if (this.groupId === 'undefined') {
      this.step = 1;
    } else {
      this.step = 2;
    }
    this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
      // Validators.minLength(5),
      // Validators.maxLength(20),
      _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])),
      message: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
      // Validators.minLength(10),
      // Validators.maxLength(100),
      _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]))
      //  tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1))
    });
  }
  ionViewDidEnter() {}
  addOrUpdateUserGroup(group) {
    if (!this.groups) {
      this.groups = [group];
    } else {
      let index = -1;
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].key == group.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.groups[index] = group;
      } else {
        this.groups.push(group);
      }
    }
  }
  ngOnInit() {
    this.dataProvider.getCurrentUser().then(u => {
      u.snapshotChanges().subscribe(value => {
        this.user = value.payload.data();
        console.info('value', value.payload.data());
        this.addedByUser = {
          addedByKey: value.payload.data().userId,
          addedByUsername: value.payload.data().username,
          addedByImg: value.payload.data().img
        };
        this.userNotifications = value.payload.data().userNotifications;
        this.userPosts = value.payload.data().userPosts;
        this.post = {
          addedByUser: this.addedByUser,
          date: '',
          title: '',
          postTags: [],
          groupId: '',
          groupName: '',
          type: 'event',
          data: {},
          totalReactionCount: 0,
          totalReviewCount: 0,
          postMedia: []
        };
        if (this.step === 1) {
          this.title = 'Select a group ...';
          // Get User Groups List
          if (this.user.groups) {
            this.firestore.collection('groups').ref.where(firebase_compat_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldPath.documentId(), 'in', this.user.groups).get().then(group => {
              this.groups = [];
              group.forEach(g => {
                let group;
                group = g.data();
                group.key = g.id;
                this.addOrUpdateUserGroup(group);
              });
            });
          }
        } else {
          this.title = 'Create a Post in';
          this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(group => {
            this.group = group.payload.data();
            this.group.groupTags.forEach(element => {
              this.postTags.push({
                val: element,
                isChecked: false
              });
            });
            //TAGS commented
            // this.addTagControls();
          });
        }
      });
    });
  }
  submitPostForm() {
    this.loadingProvider.show();
    // Add post info and date.
    this.post.date = new Date();
    this.post.title = this.postForm.value.title;
    this.post.data.message = this.postForm.value.message;
    this.post.postTags = [];
    this.post.postTags = this.postTags;
    this.post.groupId = this.groupId;
    this.post.groupName = this.group.name;
    this.post.type = 'general';
    // Add post to database.
    this.dataProvider.addPost(this.post).then(success => {
      const postId = success.id;
      this.postId = postId;
      console.log('step 1');
      // Update group data on the database.
      if (this.group.posts === undefined) {
        this.group.posts = [];
      }
      this.group.posts.push(this.postId);
      this.dataProvider.getGroup(this.groupId).update({
        posts: this.group.posts
      });
      // Update user notifications.
      if (!this.userNotifications) {
        this.userNotifications = [this.postId];
      } else {
        this.userNotifications.push(this.postId);
      }
      this.dataProvider.getUser(this.addedByUser.addedByKey).update({
        userNotifications: this.userNotifications
      });
      // Update user activity.
      if (!this.userPosts) {
        this.userPosts = [this.postId];
      } else {
        this.userPosts.push(this.postId);
      }
      this.dataProvider.getUser(this.addedByUser.addedByKey).update({
        userPosts: this.userPosts
      });
    }).then(() => {
      this.loadingProvider.hide();
      this.router.navigateByUrl('/app/tabs/tab1');
    });
    ;
  }
  selectGroup(groupId) {
    this.groupId = groupId;
    this.step = 2;
    this.title = 'New Post';
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(group => {
      this.group = group.payload.data();
      // this.group.groupTags.forEach((element: any) => {
      //   this.postTags.push({val: element, isChecked: false});
      //});
      // TAGS Commented
      // this.addTagControls();
    });
  }
  attach() {
    this.actionSheet.create({
      header: 'Attach images',
      buttons: [{
        text: 'Photo Library',
        icon: 'images-outline',
        cssClass: 'actionicon',
        handler: () => {
          this.imageProvider.getImages().then(url => {
            this.ngZone.run(() => {
              this.postMediaImgs = [];
              this.postMediaVideo = [];
              url.forEach(element => {
                this.postMediaImgs = this.postMediaImgs.concat(element);
              });
            });
          });
        }
      }, {
        text: 'Video',
        icon: 'videocam-outline',
        cssClass: 'actionicon',
        handler: () => {
          this.imageProvider.uploadPostVideo().then(url => {
            this.postMediaVideo = [];
            this.postMediaImgs = [];
            this.ngZone.run(() => {
              this.postMediaVideo = this.postMediaVideo.concat(url);
              console.log(url);
            });
          });
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancelled');
        }
      }]
    }).then(r => r.present());
  }
  removeMedia(media) {
    this.postMediaImgs.splice();
    this.postMediaImgs = this.postMediaImgs.filter(x => x !== media);
    console.log('this.postMedia:', this.postMediaImgs);
    // this.imageProvider.deletePostPhoto(media);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
  }, {
    type: _services_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
  }];
};
NewPostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-new-post',
  template: _new_post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_new_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NewPostPage);


/***/ }),

/***/ 30992:
/*!********************************************************!*\
  !*** ./src/app/new-post/new-post.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host ion-item {
  --padding-start: 16px;
  --inner-padding-end: 0;
  --background: transparent;
}
:host ion-item ion-thumbnail {
  --size: 60px;
  --border-radius: 8px;
  margin: 8px 8px 8px 0;
}

.forms-validations-content .validations-form {
  margin-bottom: calc(var(--page-margin) * 2);
}
.forms-validations-content .validations-form .inputs-list {
  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);
}
.forms-validations-content .validations-form .inputs-list .header {
  font-size: 14px;
}
.forms-validations-content .validations-form .inputs-list .error-container .error-message {
  margin: calc(var(--page-margin) / 2) 0px;
  display: flex;
  align-items: center;
  color: var(--ion-color-danger);
  font-size: 14px;
}
.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {
  padding-inline-end: calc(var(--page-margin) / 2);
  flex-shrink: 0;
}
.forms-validations-content .validations-form .submit-btn {
  margin: var(--page-margin);
}
.forms-validations-content .tags {
  padding-right: 5px;
  padding-bottom: 5px;
}
.forms-validations-content .tags .item-rating {
  background-color: rgba(var(--page-color-rgb), 0.35);
  color: var(--ion-color-lightest);
  border-radius: var(--app-narrow-radius);
  padding-top: calc(var(--page-margin) / 3);
  padding-bottom: calc(var(--page-margin) / 3);
  padding-left: calc(var(--page-margin) / 2);
  padding-right: calc(var(--page-margin) / 2);
  font-size: 12px;
  font-weight: 600;
  width: 100%;
  display: block;
  text-align: center;
}
.forms-validations-content .tags .item-rating[ratingBase="0"] {
  background-color: #bbb2b2;
}
.forms-validations-content .tags .item-rating[ratingBase="1"] {
  background-color: #e0c77c;
}
.forms-validations-content .tags ion-checkbox {
  margin: 0px;
  width: 50px;
  align-content: center;
  --border-width: 0px;
  --color-checked: transparent;
  margin-left: 9px;
  margin-top: -20px;
  display: block;
  opacity: 0;
}

.uploads {
  margin: 5px;
}
.uploads .img-wrap {
  position: relative;
  display: inline-block;
  font-size: 0;
  padding: 5px;
}
.uploads .img-wrap .close {
  position: absolute;
  top: -2px;
  right: -7px;
  z-index: 100;
  background-color: #FFF;
  padding: 5px 2px 2px;
  color: #000;
  cursor: pointer;
  text-align: center;
  font-size: 22px;
  line-height: 10px;
  border-radius: 50%;
}
.uploads .img-wrap:hover .close {
  opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/app/new-post/new-post.page.scss"],"names":[],"mappings":"AAEE;EACE,qBAAA;EACA,sBAAA;EACA,yBAAA;AADJ;AAGI;EACE,YAAA;EACA,oBAAA;EACA,qBAAA;AADN;;AASG;EACC,2CAAA;AANJ;AAQI;EACE,2EAAA;AANN;AAQM;EACE,eAAA;AANR;AASQ;EACE,wCAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;AAPV;AASU;EACE,gDAAA;EACA,cAAA;AAPZ;AAaI;EACE,0BAAA;AAXN;AAeE;EACE,kBAAA;EACA,mBAAA;AAbJ;AAcE;EAEE,mDAAA;EACQ,gCAAA;EACA,uCAAA;EACA,yCAAA;EACA,4CAAA;EACA,0CAAA;EACA,2CAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;AAbZ;AAcY;EACE,yBAAA;AAZd;AAcY;EACE,yBAAA;AAZd;AAeE;EACE,WAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;EACA,4BAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;EACA,UAAA;AAbJ;;AAmBA;EACE,WAAA;AAhBF;AAiBA;EACE,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,YAAA;AAfF;AAiBA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,oBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAfF;AAiBA;EACE,UAAA;AAfF","sourcesContent":[":host {\n\n  ion-item {\n    --padding-start: 16px;\n    --inner-padding-end: 0;\n    --background: transparent;\n    \n    ion-thumbnail {\n      --size: 60px;\n      --border-radius: 8px;\n      margin: 8px 8px 8px 0; // top right bottom left\n    }\n  }\n  \n\n}\n\n.forms-validations-content {\n   .validations-form {\n    margin-bottom: calc(var(--page-margin) * 2);\n\n    .inputs-list {\n      padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n\n      .header {\n        font-size: 14px;\n      }\n      .error-container {\n        .error-message {\n          margin: calc(var(--page-margin) / 2) 0px;\n          display: flex;\n          align-items: center;\n          color: var(--ion-color-danger);\n          font-size: 14px;\n\n          ion-icon {\n            padding-inline-end: calc(var(--page-margin) / 2);\n            flex-shrink: 0;\n          }\n        }\n        }\n    }\n\n    .submit-btn {\n      margin: var(--page-margin);\n    }\n  }\n\n  .tags {\n    padding-right: 5px;\n    padding-bottom: 5px;\n  .item-rating {\n    // Default background\n    background-color: rgba(var(--page-color-rgb), .35);\n            color: var(--ion-color-lightest);\n            border-radius: var(--app-narrow-radius);\n            padding-top: calc(var(--page-margin) / 3);\n            padding-bottom: calc(var(--page-margin) / 3);\n            padding-left: calc(var(--page-margin) / 2);\n            padding-right: calc(var(--page-margin) / 2);\n            font-size: 12px;\n            font-weight: 600;\n            width: 100%;\n            display: block;\n            text-align: center;\n            &[ratingBase=\"0\"] {\n              background-color: #bbb2b2;\n            }\n            &[ratingBase=\"1\"] {\n              background-color: #e0c77c;\n            }\n  }\n  ion-checkbox {\n    margin: 0px;\n    width: 50px;\n    align-content: center;\n    --border-width: 0px;\n    --color-checked: transparent;\n    margin-left: 9px;\n    margin-top: -20px;\n    display:block;\n    opacity: 0;\n  }\n  \n}\n}\n\n.uploads {\n  margin: 5px;\n.img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n.img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n.img-wrap:hover .close {\n  opacity: 1;\n}\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 81952:
/*!********************************************************!*\
  !*** ./src/app/new-post/new-post.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button color=\"primary\" class=\"ion-text-capitalize\" [disabled]=\"!postForm.valid\" (click)=\"submitPostForm()\">Submit</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>  \n\n<ion-content class=\"forms-validations-content\">\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\">\n      <ion-list class=\"ion-no-padding\">\n        <ion-item class=\"ion-margin-left\" text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n            <h3 class=\"ion-no-margin\">{{group.name}}</h3>\n            <p class=\"ion-text-wrap\">\n              <ion-text color=\"medium\">\n                {{group.description}}\n              </ion-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step==2\">\n  <form class=\"validations-form\" [formGroup]=\"postForm\" (ngSubmit)=\"submitPostForm()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-list-header class=\"header\">\n        posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n      </ion-list-header>\n      <ion-item class=\"input-item\">\n        <ion-input type=\"text\" formControlName=\"title\" placeholder=\"Subject\"></ion-input>\n      </ion-item>\n      <ion-item class=\"input-item\">\n        <ion-textarea rows=\"6\"  formControlName=\"message\" clearInput placeholder=\"Message\"></ion-textarea>\n      </ion-item>\n      <!-- <ion-list class=\"inputs-list\" lines=\"full\">\n        <ion-list-header>\n          <ion-label class=\"header-title\">Select relevant tags</ion-label>\n        </ion-list-header>\n        <div class=\"reviews-wrapper\">\n        <ion-row>\n          <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of postForm.controls.tags.controls; let i = index\">\n            <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n            <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n            <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n          </div>\n        </ion-row>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.tags\">\n            <div class=\"error-message\" *ngIf=\"postForm.get('tags').hasError(validation.type) && (postForm.get('tags').dirty || postForm.get('tags').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n        </div>\n      </ion-list> -->\n\n    <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!postForm.valid\" >Submit</ion-button> -->\n    </ion-list>\n  </form>\n</div>\n</ion-content>\n<ion-footer *ngIf=\"step==2\">\n  <ion-toolbar>\n    <ion-row lines=\"none\" class=\"uploads item-text-wrap\" *ngIf=\"postMediaImgs.length > 0 || postMediaVideo.length > 0\">\n      <div class=\"img-wrap\" *ngFor=\"let media of postMediaImgs\">\n          <ion-thumbnail slot=\"start\">\n            <span class=\"close\" (click)=\"removeMedia(media)\">&times;</span>\n            <!-- <ion-img [src]=\"media\"> -->\n              <ion-img [src]=\"media\">\n              </ion-img>\n          </ion-thumbnail>\n        </div>\n        <div class=\"img-wrap\" *ngFor=\"let media of postMediaVideo\">\n          <ion-thumbnail slot=\"start\">\n            <span class=\"close\" (click)=\"removeMedia(media)\">&times;</span>\n            <!-- <ion-img [src]=\"media\"> -->\n              <ion-img [src]=\"media\">\n              </ion-img>\n          </ion-thumbnail>\n        </div>\n    </ion-row>\n    <ion-item lines=\"none\">\n      <ion-button class=\"ion-text-capitalize\" fill=\"clear\" (click)=\"attach()\">\n        <ion-icon class=\"ion-padding-end\" size=\"large\" name=\"camera-outline\"></ion-icon>Add photo or video\n      </ion-button>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_new-post_new-post_module_ts.js.map