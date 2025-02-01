"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": function() { return /* binding */ ProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/share.module */ 32218);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 45642);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page */ 72919);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);









const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_2__.ProfilePage
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _services_share_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_2__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 72919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 30259);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 72083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ 54120);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/image.service */ 54249);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 34483);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 4084);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_environments_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/validator */ 86590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/firebase.service */ 19446);
/* harmony import */ var _user_profile_modal_user_profile_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user-profile-modal/user-profile-modal.page */ 61370);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ 77199);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/firestore */ 33527);




















let ProfilePage = class ProfilePage {
    constructor(loginService, dataProvider, loadingProvider, firestore, afAuth, imageProvider, alertCtrl, camera, fcm, firebaseProvider, platform, formBuilder, route, router, modalCtrl, routerOutlet, alertController) {
        this.loginService = loginService;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.imageProvider = imageProvider;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.fcm = fcm;
        this.firebaseProvider = firebaseProvider;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.routerOutlet = routerOutlet;
        this.alertController = alertController;
        this.showOnline = false;
        this.messageMe = false;
        this.isPushEnabled = false;
        this.isBrowser = true;
        this.userPosts = [];
        this.userReactions = [];
        this.userComments = [];
        this.groups = [];
        this.friends = [];
        this.myProfile = false;
        this.submitAttempt = false;
        this.errorMessages = [];
        this.loggedInUserId = firebase_app__WEBPACK_IMPORTED_MODULE_11__.default.auth().currentUser.uid;
        this.userId = this.route.snapshot.params.id;
        if (this.userId === this.loggedInUserId) {
            this.myProfile = true;
        }
        else {
            this.myProfile = false;
        }
        this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_8__.Validator.errorMessages;
        this.myForm = this.formBuilder.group({
            name: src_environments_validator__WEBPACK_IMPORTED_MODULE_8__.Validator.nameValidator,
            username: src_environments_validator__WEBPACK_IMPORTED_MODULE_8__.Validator.usernameValidator,
            email: src_environments_validator__WEBPACK_IMPORTED_MODULE_8__.Validator.emailValidator,
            bio: src_environments_validator__WEBPACK_IMPORTED_MODULE_8__.Validator.bioValidator
        });
    }
    ngOnInit() {
        this.isBrowser = this.platform.is('desktop');
    }
    ionViewDidEnter() {
        this.getUserData();
    }
    getUserData() {
        this.dataProvider.getUser(this.userId).snapshotChanges().subscribe((user) => {
            let account = user.payload.data();
            if (account != null) {
                this.user = account;
                console.log('user data', this.user);
                this.title = this.user.username;
                // get user Posts
                if (this.user.userPosts) {
                    this.firestore.collection('posts').ref
                        .where(firebase_app__WEBPACK_IMPORTED_MODULE_11__.default.firestore.FieldPath.documentId(), 'in', this.user.userPosts)
                        .get().then((po) => {
                        this.userPosts = [];
                        this.loadEachPostData(po, 'userPosts');
                    });
                }
                // get user Reaction Posts
                if (this.user.userReactions) {
                    this.firestore.collection('posts').ref
                        .where(firebase_app__WEBPACK_IMPORTED_MODULE_11__.default.firestore.FieldPath.documentId(), 'in', this.user.userReactions)
                        .get().then((po) => {
                        this.userReactions = [];
                        this.loadEachPostData(po, 'userReactions');
                    });
                }
                // get user Posts
                if (this.user.userComments) {
                    this.firestore.collection('posts').ref
                        .where(firebase_app__WEBPACK_IMPORTED_MODULE_11__.default.firestore.FieldPath.documentId(), 'in', this.user.userComments)
                        .get().then((po) => {
                        this.userComments = [];
                        this.loadEachPostData(po, 'userComments');
                    });
                }
                // Get User Friends list
                if (this.user.friends) {
                    this.firestore.collection('accounts').ref
                        .where(firebase_app__WEBPACK_IMPORTED_MODULE_11__.default.firestore.FieldPath.documentId(), 'in', this.user.friends)
                        .get().then((user) => {
                        this.friends = [];
                        user.forEach(f => {
                            let friend;
                            friend = f.data();
                            friend.key = f.id;
                            this.addOrUpdateUserFriend(friend);
                        });
                        console.log('this.friends', this.friends);
                        // check if logged in user is a friend
                        const foundFriend = this.friends.some(el => el.userId === this.loggedInUserId);
                        if (foundFriend) {
                            this.messageMe = true;
                        }
                        else {
                            this.messageMe = false;
                        }
                    });
                }
                // Get User Groups List
                if (this.user.groups && this.user.groups.length > 0) {
                    this.firestore.collection('groups').ref
                        .where(firebase_app__WEBPACK_IMPORTED_MODULE_11__.default.firestore.FieldPath.documentId(), 'in', this.user.groups)
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
                else {
                    this.groups = [];
                }
            }
        });
    }
    loadEachPostData(po, collection) {
        po.forEach(p => {
            let post;
            post = p.data();
            post.key = p.id;
            if (collection === 'userPosts') {
                this.addOrUpdateUserPost(post);
            }
            if (collection === 'userComments') {
                this.addOrUpdateCommentPost(post);
            }
            if (collection === 'userReactions') {
                this.addOrUpdateReactionPost(post);
            }
        });
    }
    addOrUpdateUserPost(post) {
        console.info('adding post', post);
        if (!this.userPosts) {
            this.userPosts = [post];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.userPosts.length; i++) {
                if (this.userPosts[i].key == post.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.userPosts[index] = post;
            }
            else {
                this.userPosts.push(post);
            }
        }
    }
    addOrUpdateUserFriend(friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.friends.length; i++) {
                if (this.friends[i].key == friend.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    }
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
    addOrUpdateReactionPost(post) {
        if (!this.userReactions) {
            this.userReactions = [post];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.userReactions.length; i++) {
                if (this.userReactions[i].key == post.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.userReactions[index] = post;
            }
            else {
                this.userReactions.push(post);
            }
        }
    }
    addOrUpdateCommentPost(post) {
        if (!this.userComments) {
            this.userComments = [post];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.userComments.length; i++) {
                if (this.userComments[i].key == post.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.userComments[index] = post;
            }
            else {
                this.userComments.push(post);
            }
        }
    }
    changeStatus() {
        this.firestore.doc('accounts/' + this.user.userId).update({ showOnline: this.user.showOnline });
    }
    changeVisibility() {
        this.firestore.doc('accounts/' + this.user.userId).update({ publicVisibility: this.user.publicVisibility });
    }
    save() {
        this.submitAttempt = true;
        if (this.myForm.valid) {
            this.loadingProvider.show();
            this.firestore.doc('accounts/' + this.user.userId).update(this.user).then(() => {
                this.loadingProvider.hide();
                this.loadingProvider.showToast("Updated Successfully");
            }).catch(err => {
                this.loadingProvider.showToast("Something went wrong");
                this.loadingProvider.hide();
            });
        }
    }
    changeNotification() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let uid = yield this.afAuth.currentUser.then((u) => u.uid);
            if (this.platform.is('desktop')) {
                this.user.isPushEnabled = false;
                this.loadingProvider.showToast("Notification only working on mobile device");
            }
            else {
                console.log(this.user.isPushEnabled);
                if (this.user.isPushEnabled == true) {
                    //Registering for push notification
                    this.fcm.hasPermission().then(hasPermission => {
                        if (!hasPermission) {
                            this.fcm.grantPermission().then(data => console.log(data));
                        }
                        else {
                            this.fcm.getToken().then(token => {
                                console.log(token);
                                this.firestore.doc('/accounts/' + uid).update({ isPushEnabled: true, pushToken: token });
                                this.user.isPushEnabled = true;
                            }).catch(err => {
                                console.log(err);
                            });
                            this.fcm.onTokenRefresh().subscribe(token => {
                                console.log(token);
                                this.firestore.doc('/accounts/' + uid).update({ isPushEnabled: true, pushToken: token });
                            });
                        }
                    });
                    this.fcm.onMessageReceived().subscribe(data => {
                        console.log(data);
                    });
                }
                else {
                    this.user.isPushEnabled == false;
                    this.firestore.doc('/accounts/' + uid).update({ isPushEnabled: false, pushToken: '' });
                }
            }
        });
    }
    setPhoto() {
        this.alertCtrl.create({
            header: 'Set Profile Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).then(r => r.present());
    }
    setPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let email = yield this.afAuth.currentUser.then((u) => { return u.email; });
            this.afAuth.sendPasswordResetEmail(email)
                .then(res => {
                this.loadingProvider.showToast("Please Check your inbox");
            }).catch(err => {
                this.loadingProvider.showToast(err.message);
            });
        });
    }
    // Delete the user account. After deleting the Firebase user, the userData along with their profile pic uploaded on the storage will be deleted as well.
    // If you added some other info or traces for the account, make sure to account for them when deleting the account.
    deleteAccount() {
        this.alertCtrl.create({
            header: 'Confirm Delete',
            message: 'Are you sure you want to delete your account? This cannot be undone.',
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Delete',
                    handler: data => {
                        this.loadingProvider.show();
                        // Delete Firebase user
                        this.afAuth.currentUser.then((u) => {
                            u.delete()
                                .then((success) => {
                                // Delete profilePic of user on Firebase storage
                                this.imageProvider.deleteUserImageFile(this.user);
                                // Delete user data on Database
                                this.firestore.doc('/accounts/' + this.user.userId).delete().then(() => {
                                    this.loadingProvider.hide();
                                    this.loadingProvider.showToast("Your Account Deleted Successfully");
                                    this.loginService.logout();
                                });
                            })
                                .catch((error) => {
                                this.loadingProvider.hide();
                                this.loadingProvider.showToast("Something went wrong");
                            });
                        });
                    }
                }
            ]
        }).then(r => r.present());
    }
    logout() {
        this.loginService.logout();
    }
    viewPost(post) {
        this.router.navigateByUrl('post/' + post.key);
    }
    viewUser(userId) {
        this.router.navigateByUrl('profile/' + userId);
    }
    viewGroup(groupId) {
        this.router.navigateByUrl('group/' + groupId);
    }
    editProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _user_profile_modal_user_profile_modal_page__WEBPACK_IMPORTED_MODULE_10__.UserProfileModalPage,
                componentProps: {
                    user: this.user
                }
            });
            return yield modal.present();
        });
    }
    messageUser() {
        this.router.navigateByUrl('/message/' + this.userId);
    }
    connectUser() {
        this.alert = this.alertCtrl.create({
            header: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Send',
                    handler: () => {
                        this.firebaseProvider.sendFriendRequest(this.userId);
                    }
                }
            ]
        }).then(r => r.present());
    }
    confirmLeaveGroup(group) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Leave Group',
                message: 'Are you sure you want to leave this group? Your posts will remain in the group but you will no longer have access to group content.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary'
                    },
                    {
                        text: 'Leave Group',
                        role: 'destructive',
                        handler: () => {
                            this.leaveGroup(group);
                        }
                    }
                ],
                cssClass: 'custom-alert'
            });
            yield alert.present();
        });
    }
    leaveGroup(group) {
        // Remove user from group members
        const updatedMembers = group.members.filter(memberId => memberId !== this.loggedInUserId);
        // Create a batch write to update both documents
        const batch = this.firestore.firestore.batch();
        // Reference to group document
        const groupRef = this.firestore.collection('groups').doc(group.key).ref;
        // Reference to user's account document
        const userRef = this.firestore.collection('accounts').doc(this.loggedInUserId).ref;
        // Update group members
        batch.update(groupRef, { members: updatedMembers });
        // Update user's groups array using arrayRemove
        batch.update(userRef, {
            groups: firebase_app__WEBPACK_IMPORTED_MODULE_11__.default.firestore.FieldValue.arrayRemove(group.key)
        });
        // Commit the batch
        batch.commit()
            .then(() => {
            // Update local group data
            group.isUserMember = false;
            group.members = updatedMembers;
            console.log('Successfully left group');
        })
            .catch(error => {
            console.error('Error leaving group:', error);
            // Handle error (show toast message)
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.AngularFirestore },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuth },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__.ImageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__.FirebaseX },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_9__.FirebaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRouterOutlet },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-profile',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService,
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService,
        _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.AngularFirestore,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuth,
        _services_image_service__WEBPACK_IMPORTED_MODULE_5__.ImageService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController,
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera,
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__.FirebaseX,
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_9__.FirebaseService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder,
        _angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRouterOutlet,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController])
], ProfilePage);



/***/ }),

/***/ 30259:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/profile/profile.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!myProfile\" slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"myProfile\" class=\"logout-button\" (click)=\"logout()\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n        <span>Logout</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile-content\">\n  <div class=\"profile-container\" *ngIf=\"user\">\n    <!-- Profile Header Section -->\n    <section class=\"profile-header\">\n      <div class=\"profile-image-container\">\n        <img [src]=\"user.img\" \n             (click)=\"setPhoto()\"\n             [alt]=\"user.name\"\n             onerror=\"this.src='./assets/images/default-dp_rect.png'\"\n             class=\"profile-image\">\n        <div class=\"edit-overlay\" *ngIf=\"myProfile\" (click)=\"setPhoto()\">\n          <ion-icon name=\"camera\"></ion-icon>\n        </div>\n      </div>\n\n      <div class=\"profile-info\">\n        <div class=\"name-section\">\n          <h1>{{user.name}}</h1>\n          <ion-button *ngIf=\"myProfile\" \n                      (click)=\"editProfile()\" \n                      fill=\"outline\" \n                      size=\"small\" \n                      class=\"edit-button\">\n            <ion-icon name=\"create-outline\"></ion-icon>\n            Edit\n          </ion-button>\n        </div>\n        \n        <p class=\"username\">@{{user.username}}<span *ngIf=\"myProfile\" class=\"email\">· {{user.email}}</span></p>\n        \n        <p class=\"bio\">{{user.description}}</p>\n\n        <!-- Action Buttons for non-profile owner -->\n        <div class=\"action-buttons\" *ngIf=\"!myProfile\">\n          <ion-button *ngIf=\"!messageMe\" \n                      (click)=\"connectUser()\" \n                      expand=\"block\" \n                      class=\"connect-button\">\n            <ion-icon name=\"person-add-outline\"></ion-icon>\n            Connect with me\n          </ion-button>\n          <ion-button *ngIf=\"messageMe\" \n                      (click)=\"messageUser()\" \n                      expand=\"block\" \n                      class=\"message-button\">\n            <ion-icon name=\"chatbubble-outline\"></ion-icon>\n            Message me\n          </ion-button>\n        </div>\n      </div>\n    </section>\n\n    <!-- Settings Section -->\n    <section class=\"settings-section\" *ngIf=\"myProfile\">\n      <h2 class=\"section-title\">Settings</h2>\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h3>Public Visibility</h3>\n            <p class=\"setting-description\">Allow other users to find and send you friend requests</p>\n          </ion-label>\n          <ion-toggle [(ngModel)]=\"user.publicVisibility\" \n                     (ionChange)=\"changeVisibility()\">\n          </ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name=\"radio-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h3>Show Online</h3>\n            <p class=\"setting-description\">Let friends see when you're active and available to chat</p>\n          </ion-label>\n          <ion-toggle [(ngModel)]=\"user.showOnline\" \n                     (ionChange)=\"changeStatus()\">\n          </ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name=\"notifications-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h3>Enable Notifications</h3>\n            <p class=\"setting-description\">Get instant alerts for new messages and friend requests</p>\n          </ion-label>\n          <ion-toggle [(ngModel)]=\"user.isPushEnabled\" \n                     [disabled]=\"isBrowser\"\n                     (ionChange)=\"changeNotification()\">\n          </ion-toggle>\n        </ion-item>\n\n        <ion-item button routerLink=\"/blockedlist\">\n          <ion-icon name=\"ban-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h3>Blocked Users</h3>\n            <p class=\"setting-description\">Get instant alerts for new messages and friend requests</p>\n          </ion-label>\n          <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-item button (click)=\"setPassword()\" *ngIf=\"user?.provider === 'Email'\">\n          <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Update Password</ion-label>\n          <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <!-- Activity Section -->\n    <section class=\"activity-section\">\n      <h2 class=\"section-title\">Activity</h2>\n      <ion-list lines=\"none\">\n        <ion-item *ngIf=\"userPosts.length === 0\" class=\"empty-state\" slot=\"start\">\n          <ion-icon name=\"document-text-outline\"></ion-icon>\n          <ion-label>\n            <p>You have not created or commented on any posts.</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let item of userPosts\" class=\"activity-item\">\n          <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <p class=\"activity-text\">\n              New post: <a [routerLink]=\"['/post', item.key]\">\"{{item.title}}\"</a>\n            </p>\n            <p class=\"activity-date\">{{item.date.toDate() | date:'mediumDate'}}</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let item of userReactions\" class=\"activity-item\">\n          <ion-icon name=\"heart-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <p class=\"activity-text\">\n              Reacted on: <a [routerLink]=\"['/post', item.key]\">\"{{item.title}}\"</a>\n            </p>\n            <p class=\"activity-date\">{{item.date.toDate() | date:'mediumDate'}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <!-- Groups Section -->\n    <section class=\"groups-section\">\n      <h2 class=\"section-title\">Groups</h2>\n      <ion-list class=\"ion-no-padding\">\n        <ion-item *ngIf=\"groups.length === 0\">\n          <ion-label>\n            <ion-icon size=\"medium\" name=\"people-outline\"></ion-icon>\n            You have not joined any groups.\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let group of groups\" \n                  class=\"group-item\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"group.img\" [alt]=\"group.name\">\n          </ion-avatar>\n          <ion-label>\n            <h3>{{group.name}}</h3>\n            <p>{{group.description}}</p>\n          </ion-label>\n          <ion-button *ngIf=\"myProfile\" slot=\"end\" \n          fill=\"solid\"\n          [color]=\"'danger'\"\n          (click)=\"confirmLeaveGroup(group)\"\n          class=\"join-group-btn\">\n            <ion-icon [name]=\"'exit-outline'\"\n                    slot=\"start\"></ion-icon>\n                    Leave\n                  </ion-button>\n          \n        </ion-item>\n      </ion-list>\n    </section>\n\n    <!-- Delete Account Button -->\n    <section class=\"danger-zone\" *ngIf=\"myProfile\">\n      <ion-button color=\"danger\" \n                  expand=\"block\" \n                  (click)=\"deleteAccount()\"\n                  class=\"delete-account-button\">\n        <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n        Delete Account\n      </ion-button>\n    </section>\n  </div>\n\n  <!-- settings.page.html -->\n<ion-content>\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>Test Data Controls</ion-label>\n      </ion-item-divider>\n      \n      <ion-item>\n        <ion-button expand=\"block\" (click)=\"loadTestData()\">\n          <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\n          Load Test Data\n        </ion-button>\n      </ion-item>\n      \n      <ion-item>\n        <ion-button expand=\"block\" color=\"danger\" (click)=\"clearTestData()\">\n          <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n          Clear Test Data\n        </ion-button>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 72083:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ (function(module) {

module.exports = ":host ion-item {\n  --background: transparent;\n}\n:host .join-group-btn {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --border-radius: 8px;\n}\n:host .join-group-btn[color=danger] {\n  --background: transparent;\n  --color: var(--ion-color-danger);\n  --border-color: var(--ion-color-danger);\n  --border-style: solid;\n  --border-width: 1px;\n}\n:host .join-group-btn[color=danger]:hover {\n  --background: var(--ion-color-danger);\n  --color: var(--ion-color-danger-contrast);\n}\n.profile-content {\n  --background: #f5f5f5;\n}\n.profile-container {\n  max-width: 768px;\n  margin: 0 auto;\n  padding: 16px;\n}\nion-header ion-toolbar {\n  --background: transparent;\n}\nion-header ion-toolbar .logout-button {\n  --color: var(--ion-color-primary);\n  font-weight: 500;\n}\nion-header ion-toolbar .logout-button ion-icon {\n  margin-right: 8px;\n}\n.profile-header {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 24px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.profile-header .profile-image-container {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  margin: 0 auto 24px;\n}\n.profile-header .profile-image-container img {\n  width: 100%;\n  height: 100%;\n  border-radius: 60px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 3px solid var(--ion-color-light);\n}\n.profile-header .profile-image-container .edit-overlay {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: var(--ion-color-primary);\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.profile-header .profile-image-container .edit-overlay ion-icon {\n  color: #ffffff;\n  font-size: 20px;\n}\n.profile-header .profile-info {\n  text-align: center;\n}\n.profile-header .profile-info .name-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 12px;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.profile-header .profile-info .name-section h1 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.profile-header .profile-info .username {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n  margin: 8px 0;\n}\n.profile-header .profile-info .username .email {\n  margin-left: 8px;\n}\n.profile-header .profile-info .bio {\n  margin: 16px 0;\n  font-size: 15px;\n  line-height: 1.5;\n  color: var(--ion-color-dark);\n}\n.profile-header .profile-info .action-buttons {\n  margin-top: 16px;\n}\n.profile-header .profile-info .action-buttons ion-button {\n  --border-radius: 12px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n.profile-header .profile-info .action-buttons ion-button ion-icon {\n  margin-right: 8px;\n}\n.settings-section {\n  background: #ffffff;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.settings-section .section-title {\n  padding: 20px;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.settings-section ion-list {\n  padding: 8px 0;\n}\n.settings-section ion-list ion-item {\n  --padding-start: 20px;\n  --padding-end: 10px;\n  --min-height: 56px;\n  --background: transparent;\n  align-items: flex-start;\n}\n.settings-section ion-list ion-item ion-icon[slot=start] {\n  color: var(--ion-color-medium);\n  margin-right: 16px;\n  font-size: 20px;\n}\n.settings-section ion-list ion-item ion-label {\n  white-space: normal;\n}\n.settings-section ion-list ion-item ion-label h3 {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n.settings-section ion-list ion-item ion-label .setting-description {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin: 0;\n  line-height: 1.4;\n  white-space: normal;\n  overflow: visible;\n  max-width: 90%;\n}\n.settings-section ion-list ion-item ion-toggle {\n  --background: var(--ion-color-light);\n  --background-checked: var(--ion-color-primary);\n  --handle-background: #ffffff;\n}\n.activity-section {\n  background: #ffffff;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.activity-section .section-title {\n  padding: 20px;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.activity-section .empty-state {\n  text-align: center;\n  padding: 32px 20px;\n}\n.activity-section .empty-state ion-icon {\n  font-size: 48px;\n  color: var(--ion-color-medium);\n  margin-bottom: 16px;\n}\n.activity-section .empty-state p {\n  color: var(--ion-color-medium);\n  margin: 0;\n  font-size: 15px;\n}\n.activity-section .activity-item {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --min-height: 72px;\n}\n.activity-section .activity-item ion-icon[slot=start] {\n  color: var(--ion-color-medium);\n  font-size: 20px;\n}\n.activity-section .activity-item .activity-text {\n  font-size: 15px;\n  color: var(--ion-color-dark);\n  margin: 0 0 4px;\n}\n.activity-section .activity-item .activity-text a {\n  color: var(--ion-color-primary);\n  text-decoration: none;\n}\n.activity-section .activity-item .activity-text a:hover {\n  text-decoration: underline;\n}\n.activity-section .activity-item .activity-date {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin: 0;\n}\n.groups-section {\n  background: #ffffff;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.groups-section .section-title {\n  padding: 20px;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.groups-section .group-item {\n  background: #ffffff;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --min-height: 72px;\n}\n.groups-section .group-item ion-avatar {\n  width: 48px;\n  height: 48px;\n}\n.groups-section .group-item ion-label h3 {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0 0 4px;\n}\n.groups-section .group-item ion-label p {\n  font-size: 13px;\n  margin: 0;\n}\n.danger-zone {\n  margin: 32px 0;\n  padding: 0 16px;\n}\n.danger-zone .delete-account-button {\n  --border-radius: 12px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n.danger-zone .delete-account-button ion-icon {\n  margin-right: 8px;\n}\n@media (max-width: 576px) {\n  .profile-container {\n    padding: 12px;\n  }\n\n  .profile-header {\n    padding: 20px;\n  }\n  .profile-header .profile-image-container {\n    width: 100px;\n    height: 100px;\n  }\n  .profile-header .profile-info .name-section h1 {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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RUFDQSxlQUFBO0FBdkNOO0FBMkNFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekNKO0FBMkNJO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FBekNOO0FBNENJO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQTFDTjtBQTRDTTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7QUExQ1I7QUE0Q1E7RUFDRSwwQkFBQTtBQTFDVjtBQStDSTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUE3Q047QUFtREE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWhERjtBQWtERTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFoREo7QUFtREU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWpESjtBQW1ESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBakROO0FBcURNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQW5EUjtBQXNETTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FBcERSO0FBMkRBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUF4REY7QUEwREU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUF4REo7QUEwREk7RUFDRSxpQkFBQTtBQXhETjtBQThEQTtFQUNFO0lBQ0UsYUFBQTtFQTNERjs7RUE4REE7SUFDRSxhQUFBO0VBM0RGO0VBNkRFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUEzREo7RUErREk7SUFDRSxlQUFBO0VBN0ROO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcblxuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG5cbiAgLmpvaW4tZ3JvdXAtYnRuIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBcbiAgICAmW2NvbG9yPVwiZGFuZ2VyXCJdIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuLy8gUHJvZmlsZSBQYWdlIFN0eWxlc1xuLnByb2ZpbGUtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuLy8gUHJvZmlsZSBDb250YWluZXJcbi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4vLyBIZWFkZXIgU3R5bGVzXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgXG4gICAgLmxvZ291dC1idXR0b24ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUHJvZmlsZSBIZWFkZXIgU2VjdGlvblxuLnByb2ZpbGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuXG4gIC5wcm9maWxlLWltYWdlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDI0cHg7XG4gICAgXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG5cbiAgICAuZWRpdC1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnByb2ZpbGUtaW5mbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLm5hbWUtc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VybmFtZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuXG4gICAgICAuZW1haWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5iaW8ge1xuICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBTZXR0aW5ncyBTZWN0aW9uXG4uc2V0dGluZ3Mtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcblxuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAtLW1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8vIEFsaWduIGl0ZW1zIHRvIHRvcCBmb3IgYmV0dGVyIHRleHQgd3JhcHBpbmdcbiAgICAgIFxuICAgICAgaW9uLWljb25bc2xvdD1cInN0YXJ0XCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLy8gQWxsb3cgdGV4dCB3cmFwcGluZ1xuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLnNldHRpbmctZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLy8gRW5zdXJlIGRlc2NyaXB0aW9uIHdyYXBzXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7IC8vIFNob3cgYWxsIHRleHRcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwJTsgLy8gUHJldmVudCB0ZXh0IGZyb20gdG91Y2hpbmcgdGhlIHRvZ2dsZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi10b2dnbGUge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFjdGl2aXR5IFNlY3Rpb25cbi5hY3Rpdml0eS1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG5cbiAgLmVtcHR5LXN0YXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzJweCAyMHB4O1xuICAgIFxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLmFjdGl2aXR5LWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAgIC0tbWluLWhlaWdodDogNzJweDtcbiAgICBcbiAgICBpb24taWNvbltzbG90PVwic3RhcnRcIl0ge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5hY3Rpdml0eS10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBtYXJnaW46IDAgMCA0cHg7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpdml0eS1kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cblxuLy8gR3JvdXBzIFNlY3Rpb25cbi5ncm91cHMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIH1cblxuICAuZ3JvdXAtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDcycHg7XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiAwIDAgNHB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIERhbmdlciBab25lXG4uZGFuZ2VyLXpvbmUge1xuICBtYXJnaW46IDMycHggMDtcbiAgcGFkZGluZzogMCAxNnB4O1xuXG4gIC5kZWxldGUtYWNjb3VudC1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgQWRqdXN0bWVudHNcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucHJvZmlsZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cblxuICAucHJvZmlsZS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgXG4gICAgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuXG4gICAgLnByb2ZpbGUtaW5mbyB7XG4gICAgICAubmFtZS1zZWN0aW9uIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts-es2015.js.map