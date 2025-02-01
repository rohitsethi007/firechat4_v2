"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_new-post_new-post_module_ts"],{

/***/ 50096:
/*!*********************************************!*\
  !*** ./src/app/new-post/new-post.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPostPageModule": function() { return /* binding */ NewPostPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/share.module */ 32218);
/* harmony import */ var _new_post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-post.page */ 13281);








const routes = [
    {
        path: '',
        component: _new_post_page__WEBPACK_IMPORTED_MODULE_1__.NewPostPage
    }
];
let NewPostPageModule = class NewPostPageModule {
};
NewPostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _services_share_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_new_post_page__WEBPACK_IMPORTED_MODULE_1__.NewPostPage]
    })
], NewPostPageModule);



/***/ }),

/***/ 13281:
/*!*******************************************!*\
  !*** ./src/app/new-post/new-post.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPostPage": function() { return /* binding */ NewPostPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_post_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-post.page.html */ 4227);
/* harmony import */ var _new_post_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-post.page.scss */ 54355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/image.service */ 54249);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 34483);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ 77199);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);













let NewPostPage = class NewPostPage {
    constructor(route, router, dataProvider, imageProvider, loadingProvider, camera, actionSheet, firestore, ngZone) {
        this.route = route;
        this.router = router;
        this.dataProvider = dataProvider;
        this.imageProvider = imageProvider;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
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
        this.group = { name: '' };
        if (this.groupId === 'undefined') {
            this.step = 1;
        }
        else {
            this.step = 2;
        }
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([
                // Validators.minLength(5),
                // Validators.maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required
            ])),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([
                // Validators.minLength(10),
                // Validators.maxLength(100),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required
            ]))
            //  tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1))
        });
    }
    ionViewDidEnter() { }
    addOrUpdateUserGroup(group) {
        if (!this.groups) {
            this.groups = [group];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.groups.length; i++) {
                if (this.groups[i].key == group.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groups[index] = group;
            }
            else {
                this.groups.push(group);
            }
        }
    }
    // TAGS Commented
    // addTagControls() {
    //   this.postTags.forEach((o, i) => {
    //     const control = new FormControl(i === 0); // if first item set to true, else false
    //     (this.postForm.controls.tags as FormArray).push(control);
    //   });
    // }
    ngOnInit() {
        this.dataProvider.getCurrentUser().then((u) => {
            u.snapshotChanges().subscribe((value) => {
                this.user = value.payload.data();
                console.info('value', value);
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
                        this.firestore.collection('groups').ref
                            .where(firebase_app__WEBPACK_IMPORTED_MODULE_6__.default.firestore.FieldPath.documentId(), 'in', this.user.groups)
                            .get().then((group) => {
                            this.groups = [];
                            group.forEach(g => {
                                let group;
                                group = g.data();
                                group.key = g.id;
                                this.addOrUpdateUserGroup(group);
                            });
                        });
                    }
                }
                else {
                    this.title = 'Create a Post in';
                    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
                        this.group = group.payload.data();
                        this.group.groupTags.forEach((element) => {
                            this.postTags.push({ val: element, isChecked: false });
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
        this.dataProvider.addPost(this.post).then((success) => {
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
            }
            else {
                this.userNotifications.push(this.postId);
            }
            this.dataProvider.getUser(this.addedByUser.addedByKey).update({
                userNotifications: this.userNotifications
            });
            // Update user activity.
            if (!this.userPosts) {
                this.userPosts = [this.postId];
            }
            else {
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
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
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
                        this.imageProvider.getImages().then((url) => {
                            this.ngZone.run(() => {
                                this.postMediaImgs = [];
                                this.postMediaVideo = [];
                                url.forEach(element => {
                                    this.postMediaImgs = this.postMediaImgs.concat(element);
                                });
                            });
                        });
                    }
                },
                {
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
                },
                {
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
};
NewPostPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone }
];
NewPostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-new-post',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_post_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_post_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router,
        _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService,
        _services_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService,
        _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService,
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore,
        _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone])
], NewPostPage);



/***/ }),

/***/ 4227:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/new-post/new-post.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button color=\"primary\" class=\"ion-text-capitalize\" [disabled]=\"!postForm.valid\" (click)=\"submitPostForm()\">Submit</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>  \n\n<ion-content class=\"forms-validations-content\">\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\">\n      <ion-list class=\"ion-no-padding\">\n        <ion-item class=\"ion-margin-left\" text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n            <h3 class=\"ion-no-margin\">{{group.name}}</h3>\n            <p class=\"ion-text-wrap\">\n              <ion-text color=\"medium\">\n                {{group.description}}\n              </ion-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step==2\">\n  <form class=\"validations-form\" [formGroup]=\"postForm\" (ngSubmit)=\"submitPostForm()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-list-header class=\"header\">\n        posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n      </ion-list-header>\n      <ion-item class=\"input-item\">\n        <ion-input type=\"text\" formControlName=\"title\" placeholder=\"Subject\"></ion-input>\n      </ion-item>\n      <ion-item class=\"input-item\">\n        <ion-textarea rows=\"6\"  formControlName=\"message\" clearInput placeholder=\"Message\"></ion-textarea>\n      </ion-item>\n      <!-- <ion-list class=\"inputs-list\" lines=\"full\">\n        <ion-list-header>\n          <ion-label class=\"header-title\">Select relevant tags</ion-label>\n        </ion-list-header>\n        <div class=\"reviews-wrapper\">\n        <ion-row>\n          <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of postForm.controls.tags.controls; let i = index\">\n            <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n            <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n            <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n          </div>\n        </ion-row>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.tags\">\n            <div class=\"error-message\" *ngIf=\"postForm.get('tags').hasError(validation.type) && (postForm.get('tags').dirty || postForm.get('tags').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n        </div>\n      </ion-list> -->\n\n    <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!postForm.valid\" >Submit</ion-button> -->\n    </ion-list>\n  </form>\n</div>\n</ion-content>\n<ion-footer *ngIf=\"step==2\">\n  <ion-toolbar>\n    <ion-row lines=\"none\" class=\"uploads item-text-wrap\" *ngIf=\"postMediaImgs.length > 0 || postMediaVideo.length > 0\">\n      <div class=\"img-wrap\" *ngFor=\"let media of postMediaImgs\">\n          <ion-thumbnail slot=\"start\">\n            <span class=\"close\" (click)=\"removeMedia(media)\">&times;</span>\n            <!-- <ion-img [src]=\"media\"> -->\n              <ion-img [src]=\"media\">\n              </ion-img>\n          </ion-thumbnail>\n        </div>\n        <div class=\"img-wrap\" *ngFor=\"let media of postMediaVideo\">\n          <ion-thumbnail slot=\"start\">\n            <span class=\"close\" (click)=\"removeMedia(media)\">&times;</span>\n            <!-- <ion-img [src]=\"media\"> -->\n              <ion-img [src]=\"media\">\n              </ion-img>\n          </ion-thumbnail>\n        </div>\n    </ion-row>\n    <ion-item lines=\"none\">\n      <ion-button class=\"ion-text-capitalize\" fill=\"clear\" (click)=\"attach()\">\n        <ion-icon class=\"ion-padding-end\" size=\"large\" name=\"camera-outline\"></ion-icon>Add photo or video\n      </ion-button>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 54355:
/*!*********************************************!*\
  !*** ./src/app/new-post/new-post.page.scss ***!
  \*********************************************/
/***/ (function(module) {

module.exports = ":host ion-item {\n  --padding-start: 16px;\n  --inner-padding-end: 0;\n  --background: transparent;\n}\n:host ion-item ion-thumbnail {\n  --size: 60px;\n  --border-radius: 8px;\n  margin: 8px 8px 8px 0;\n}\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n.uploads {\n  margin: 5px;\n}\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQURKO0FBR0k7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUROO0FBU0c7RUFDQywyQ0FBQTtBQU5KO0FBUUk7RUFDRSwyRUFBQTtBQU5OO0FBUU07RUFDRSxlQUFBO0FBTlI7QUFTUTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBUFY7QUFTVTtFQUNFLGdEQUFBO0VBQ0EsY0FBQTtBQVBaO0FBYUk7RUFDRSwwQkFBQTtBQVhOO0FBZUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBYko7QUFjRTtFQUVFLG1EQUFBO0VBQ1EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWJaO0FBY1k7RUFDRSx5QkFBQTtBQVpkO0FBY1k7RUFDRSx5QkFBQTtBQVpkO0FBZUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQWJKO0FBbUJBO0VBQ0UsV0FBQTtBQWhCRjtBQWlCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWZGO0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBZkY7QUFpQkE7RUFDRSxVQUFBO0FBZkYiLCJmaWxlIjoibmV3LXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIFxuICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgLS1zaXplOiA2MHB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7IC8vIHRvcCByaWdodCBib3R0b20gbGVmdFxuICAgIH1cbiAgfVxuICBcblxufVxuXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XG4gICAudmFsaWRhdGlvbnMtZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5pbnB1dHMtbGlzdCB7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAuZXJyb3ItY29udGFpbmVyIHtcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJtaXQtYnRuIHtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC50YWdzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgLml0ZW0tcmF0aW5nIHtcbiAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiMmIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XG4gICAgICAgICAgICB9XG4gIH1cbiAgaW9uLWNoZWNrYm94IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxufVxufVxuXG4udXBsb2FkcyB7XG4gIG1hcmdpbjogNXB4O1xuLmltZy13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmltZy13cmFwIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMnB4O1xuICByaWdodDogLTdweDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiA1cHggMnB4IDJweDtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaW1nLXdyYXA6aG92ZXIgLmNsb3NlIHtcbiAgb3BhY2l0eTogMTtcbn1cbn1cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_new-post_new-post_module_ts-es2015.js.map