(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 4219:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageModule: () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/share.module */ 53952);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 55553);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page */ 76980);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);









const routes = [{
  path: '',
  component: _profile_page__WEBPACK_IMPORTED_MODULE_2__.ProfilePage
}];
let ProfilePageModule = class ProfilePageModule {};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
  declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_2__.ProfilePage]
})], ProfilePageModule);


/***/ }),

/***/ 76980:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePage: () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8904);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 42692);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ 53067);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 78205);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/image.service */ 62499);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/push-notifications */ 92132);
/* harmony import */ var _capacitor_firebase_messaging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor-firebase/messaging */ 76635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_environments_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/validator */ 82319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/firebase.service */ 88287);
/* harmony import */ var _user_profile_modal_user_profile_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user-profile-modal/user-profile-modal.page */ 90436);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/compat/app */ 3602);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);




















let ProfilePage = class ProfilePage {
  constructor(loginService, dataProvider, loadingProvider, firestore, afAuth, imageProvider, alertCtrl, firebaseProvider, platform, formBuilder, route, router, modalCtrl, routerOutlet, alertController) {
    this.loginService = loginService;
    this.dataProvider = dataProvider;
    this.loadingProvider = loadingProvider;
    this.firestore = firestore;
    this.afAuth = afAuth;
    this.imageProvider = imageProvider;
    this.alertCtrl = alertCtrl;
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
    this.loggedInUserId = firebase_compat_app__WEBPACK_IMPORTED_MODULE_12__["default"].auth().currentUser.uid;
    console.info('profile page, loggedinuser', this.loggedInUserId);
    this.userId = this.route.snapshot.params.id;
    console.info('profile page, userId', this.userId);
    if (this.userId === this.loggedInUserId) {
      this.myProfile = true;
    } else {
      this.myProfile = false;
    }
    if (typeof this.userId === 'undefined') {
      this.myProfile = true;
    }
    console.info('profile page, myProfile', this.myProfile);
    this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_9__.Validator.errorMessages;
    this.myForm = this.formBuilder.group({
      name: src_environments_validator__WEBPACK_IMPORTED_MODULE_9__.Validator.nameValidator,
      username: src_environments_validator__WEBPACK_IMPORTED_MODULE_9__.Validator.usernameValidator,
      email: src_environments_validator__WEBPACK_IMPORTED_MODULE_9__.Validator.emailValidator,
      bio: src_environments_validator__WEBPACK_IMPORTED_MODULE_9__.Validator.bioValidator
    });
  }
  ngOnInit() {
    this.isBrowser = this.platform.is('desktop');
  }
  ionViewDidEnter() {
    this.getUserData();
  }
  getUserData() {
    this.dataProvider.getUser(this.loggedInUserId).snapshotChanges().subscribe(user => {
      let account = user.payload.data();
      if (account != null) {
        this.user = account;
        console.log('user data', this.user);
        this.title = this.user.username;
        // get user Posts
        if (this.user.userPosts) {
          this.firestore.collection('posts').ref.where(firebase_compat_app__WEBPACK_IMPORTED_MODULE_12__["default"].firestore.FieldPath.documentId(), 'in', this.user.userPosts).get().then(po => {
            this.userPosts = [];
            this.loadEachPostData(po, 'userPosts');
          });
        }
        // get user Reaction Posts
        if (this.user.userReactions) {
          this.firestore.collection('posts').ref.where(firebase_compat_app__WEBPACK_IMPORTED_MODULE_12__["default"].firestore.FieldPath.documentId(), 'in', this.user.userReactions).get().then(po => {
            this.userReactions = [];
            this.loadEachPostData(po, 'userReactions');
          });
        }
        // get user Posts
        if (this.user.userComments) {
          this.firestore.collection('posts').ref.where(firebase_compat_app__WEBPACK_IMPORTED_MODULE_12__["default"].firestore.FieldPath.documentId(), 'in', this.user.userComments).get().then(po => {
            this.userComments = [];
            this.loadEachPostData(po, 'userComments');
          });
        }
        // Get User Friends list
        if (this.user.friends) {
          this.firestore.collection('accounts').ref.where(firebase_compat_app__WEBPACK_IMPORTED_MODULE_12__["default"].firestore.FieldPath.documentId(), 'in', this.user.friends).get().then(user => {
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
            } else {
              this.messageMe = false;
            }
          });
        }
        // Get User Groups List
        if (this.user.groups && this.user.groups.length > 0) {
          this.firestore.collection('groups').ref.where(firebase_compat_app__WEBPACK_IMPORTED_MODULE_12__["default"].firestore.FieldPath.documentId(), 'in', this.user.groups).get().then(group => {
            this.groups = [];
            group.forEach(g => {
              let group;
              group = g.data();
              group.key = g.id;
              this.addOrUpdateUserGroup(group);
            });
          });
        } else {
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
    } else {
      let index = -1;
      for (let i = 0; i < this.userPosts.length; i++) {
        if (this.userPosts[i].key == post.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.userPosts[index] = post;
      } else {
        this.userPosts.push(post);
      }
    }
  }
  addOrUpdateUserFriend(friend) {
    if (!this.friends) {
      this.friends = [friend];
    } else {
      let index = -1;
      for (let i = 0; i < this.friends.length; i++) {
        if (this.friends[i].key == friend.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.friends[index] = friend;
      } else {
        this.friends.push(friend);
      }
    }
  }
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
  addOrUpdateReactionPost(post) {
    if (!this.userReactions) {
      this.userReactions = [post];
    } else {
      let index = -1;
      for (let i = 0; i < this.userReactions.length; i++) {
        if (this.userReactions[i].key == post.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.userReactions[index] = post;
      } else {
        this.userReactions.push(post);
      }
    }
  }
  addOrUpdateCommentPost(post) {
    if (!this.userComments) {
      this.userComments = [post];
    } else {
      let index = -1;
      for (let i = 0; i < this.userComments.length; i++) {
        if (this.userComments[i].key == post.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.userComments[index] = post;
      } else {
        this.userComments.push(post);
      }
    }
  }
  changeStatus() {
    this.firestore.doc('accounts/' + this.user.userId).update({
      showOnline: this.user.showOnline
    });
  }
  changeVisibility() {
    this.firestore.doc('accounts/' + this.user.userId).update({
      publicVisibility: this.user.publicVisibility
    });
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
  setPhoto() {
    this.alertCtrl.create({
      header: 'Set Profile Photo',
      message: 'Do you want to take a photo or choose from your photo gallery?',
      buttons: [{
        text: 'Cancel',
        handler: data => {}
      }, {
        text: 'Choose from Gallery',
        handler: () => {
          // Call imageProvider to process, upload, and update user photo.
          this.imageProvider.setProfilePhoto(this.user, 'PHOTOLIBRARY');
        }
      }, {
        text: 'Take Photo',
        handler: () => {
          // Call imageProvider to process, upload, and update user photo.
          this.imageProvider.setProfilePhoto(this.user, 'CAMERA');
        }
      }]
    }).then(r => r.present());
  }
  setPassword() {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let email = yield _this.afAuth.currentUser.then(u => {
        return u.email;
      });
      _this.afAuth.sendPasswordResetEmail(email).then(res => {
        _this.loadingProvider.showToast("Please Check your inbox");
      }).catch(err => {
        _this.loadingProvider.showToast(err.message);
      });
    })();
  }
  // Delete the user account. After deleting the Firebase user, the userData along with their profile pic uploaded on the storage will be deleted as well.
  // If you added some other info or traces for the account, make sure to account for them when deleting the account.
  deleteAccount() {
    this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete your account? This cannot be undone.',
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Delete',
        handler: data => {
          this.loadingProvider.show();
          // Delete Firebase user
          this.afAuth.currentUser.then(u => {
            u.delete().then(success => {
              // Delete profilePic of user on Firebase storage
              this.imageProvider.deleteUserImageFile(this.user);
              // Delete user data on Database
              this.firestore.doc('/accounts/' + this.user.userId).delete().then(() => {
                this.loadingProvider.hide();
                this.loadingProvider.showToast("Your Account Deleted Successfully");
                this.loginService.logout();
              });
            }).catch(error => {
              this.loadingProvider.hide();
              this.loadingProvider.showToast("Something went wrong");
            });
          });
        }
      }]
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
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _user_profile_modal_user_profile_modal_page__WEBPACK_IMPORTED_MODULE_11__.UserProfileModalPage,
        componentProps: {
          user: _this2.user
        }
      });
      return yield modal.present();
    })();
  }
  messageUser() {
    this.router.navigateByUrl('/message/' + this.userId);
  }
  connectUser() {
    this.alert = this.alertCtrl.create({
      header: 'Send Friend Request',
      message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
      buttons: [{
        text: 'Cancel',
        handler: data => {}
      }, {
        text: 'Send',
        handler: () => {
          this.firebaseProvider.sendFriendRequest(this.userId);
        }
      }]
    }).then(r => r.present());
  }
  confirmLeaveGroup(group) {
    var _this3 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Leave Group',
        message: 'Are you sure you want to leave this group? Your posts will remain in the group but you will no longer have access to group content.',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Leave Group',
          role: 'destructive',
          handler: () => {
            _this3.leaveGroup(group);
          }
        }],
        cssClass: 'custom-alert'
      });
      yield alert.present();
    })();
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
    batch.update(groupRef, {
      members: updatedMembers
    });
    // Update user's groups array using arrayRemove
    batch.update(userRef, {
      groups: firebase_compat_app__WEBPACK_IMPORTED_MODULE_12__["default"].firestore.FieldValue.arrayRemove(group.key)
    });
    // Commit the batch
    batch.commit().then(() => {
      // Update local group data
      group.isUserMember = false;
      group.members = updatedMembers;
      console.log('Successfully left group');
    }).catch(error => {
      console.error('Error leaving group:', error);
      // Handle error (show toast message)
    });
  }
  changeNotification() {
    var _this4 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Get current user
        const user = yield _this4.afAuth.currentUser;
        if (!user) {
          _this4.loadingProvider.showToast('User not authenticated');
          return;
        }
        const uid = user.uid;
        // Check if desktop
        if (_this4.platform.is('desktop')) {
          _this4.user.isPushEnabled = false;
          yield _this4.firestore.doc(`/accounts/${uid}`).update({
            isPushEnabled: false,
            pushToken: ''
          });
          _this4.loadingProvider.showToast('Notifications only work on mobile devices');
          return;
        }
        // Handle mobile push notification logic
        if (_this4.user.isPushEnabled) {
          yield _this4.enablePushNotifications(uid);
        } else {
          yield _this4.disablePushNotifications(uid);
        }
      } catch (error) {
        console.error('Error in changeNotification:', error);
        _this4.loadingProvider.showToast('Failed to update notification settings');
      }
    })();
  }
  enablePushNotifications(uid) {
    var _this5 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Request permission
        const permissionStatus = yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.requestPermissions();
        if (permissionStatus.receive === 'granted') {
          // Register for push notifications
          yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.register();
          // Set up listeners
          _this5.setupPushListeners();
          // Get the token
          const token = yield _capacitor_firebase_messaging__WEBPACK_IMPORTED_MODULE_8__.FirebaseMessaging.getToken();
          token => {
            console.log('Push registration success:', token);
            return token;
          };
          // Update Firestore
          yield _this5.firestore.doc(`/accounts/${uid}`).update({
            isPushEnabled: true,
            pushToken: token
          });
          _this5.user.isPushEnabled = true;
          _this5.loadingProvider.showToast('Push notifications enabled');
        } else {
          _this5.user.isPushEnabled = false;
          yield _this5.firestore.doc(`/accounts/${uid}`).update({
            isPushEnabled: false,
            pushToken: ''
          });
          _this5.loadingProvider.showToast('Push notification permission denied');
        }
      } catch (error) {
        console.error('Error enabling push notifications:', error);
        throw error;
      }
    })();
  }
  disablePushNotifications(uid) {
    var _this6 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Remove all listeners
        yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.removeAllListeners();
        // Update Firestore
        yield _this6.firestore.doc(`/accounts/${uid}`).update({
          isPushEnabled: false,
          pushToken: ''
        });
        _this6.user.isPushEnabled = false;
        _this6.loadingProvider.showToast('Push notifications disabled');
      } catch (error) {
        console.error('Error disabling push notifications:', error);
        throw error;
      }
    })();
  }
  setupPushListeners() {
    var _this7 = this;
    // Registration error listener
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('registrationError', error => {
      console.error('Push registration error:', error);
    });
    // Notification received listener
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received:', notification);
    });
    // Notification action performed listener
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed:', notification);
    });
    // Token refresh listener
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_7__.PushNotifications.addListener('registration', /*#__PURE__*/function () {
      var _ref = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (token) {
        console.log('Push token refreshed:', token);
        const user = yield _this7.afAuth.currentUser;
        if (user) {
          yield _this7.firestore.doc(`/accounts/${user.uid}`).update({
            pushToken: token
          });
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestore
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_14__.AngularFireAuth
  }, {
    type: _services_image_service__WEBPACK_IMPORTED_MODULE_6__.ImageService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
  }, {
    type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_10__.FirebaseService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRouterOutlet
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
  }];
};
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
  selector: 'app-profile',
  template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ProfilePage);


/***/ }),

/***/ 36105:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor-firebase/messaging/dist/esm/definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Importance: () => (/* binding */ Importance),
/* harmony export */   Visibility: () => (/* binding */ Visibility)
/* harmony export */ });
/// <reference types="@capacitor/cli" />
/**
 * The importance level.
 *
 * For more details, see the [Android Developer Docs](https://developer.android.com/reference/android/app/NotificationManager#IMPORTANCE_DEFAULT)
 *
 * @since 1.4.0
 */
var Importance;
(function (Importance) {
  /**
   * @since 1.4.0
   */
  Importance[Importance["Min"] = 1] = "Min";
  /**
   * @since 1.4.0
   */
  Importance[Importance["Low"] = 2] = "Low";
  /**
   * @since 1.4.0
   */
  Importance[Importance["Default"] = 3] = "Default";
  /**
   * @since 1.4.0
   */
  Importance[Importance["High"] = 4] = "High";
  /**
   * @since 1.4.0
   */
  Importance[Importance["Max"] = 5] = "Max";
})(Importance || (Importance = {}));
/**
 * The notification visibility.
 *
 * For more details, see the [Android Developer Docs](https://developer.android.com/reference/androidx/core/app/NotificationCompat#VISIBILITY_PRIVATE())
 *
 * @since 1.4.0
 */
var Visibility;
(function (Visibility) {
  /**
   * @since 1.4.0
   */
  Visibility[Visibility["Secret"] = -1] = "Secret";
  /**
   * @since 1.4.0
   */
  Visibility[Visibility["Private"] = 0] = "Private";
  /**
   * @since 1.4.0
   */
  Visibility[Visibility["Public"] = 1] = "Public";
})(Visibility || (Visibility = {}));

/***/ }),

/***/ 76635:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor-firebase/messaging/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseMessaging: () => (/* binding */ FirebaseMessaging),
/* harmony export */   Importance: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Importance),
/* harmony export */   Visibility: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Visibility)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 14070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 36105);

const FirebaseMessaging = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('FirebaseMessaging', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-firebase_messaging_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 22657)).then(m => new m.FirebaseMessagingWeb())
});



/***/ }),

/***/ 39158:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 92132:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PushNotifications: () => (/* binding */ PushNotifications)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 14070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 39158);

const PushNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('PushNotifications', {});



/***/ }),

/***/ 42692:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host ion-item {
  --background: transparent;
}
:host .join-group-btn {
  --padding-start: 16px;
  --padding-end: 16px;
  --border-radius: 8px;
}
:host .join-group-btn[color=danger] {
  --background: transparent;
  --color: var(--ion-color-danger);
  --border-color: var(--ion-color-danger);
  --border-style: solid;
  --border-width: 1px;
}
:host .join-group-btn[color=danger]:hover {
  --background: var(--ion-color-danger);
  --color: var(--ion-color-danger-contrast);
}

.profile-content {
  --background: #f5f5f5;
}

.profile-container {
  max-width: 768px;
  margin: 0 auto;
  padding: 16px;
}

ion-header ion-toolbar {
  --background: transparent;
}
ion-header ion-toolbar .logout-button {
  --color: var(--ion-color-primary);
  font-weight: 500;
}
ion-header ion-toolbar .logout-button ion-icon {
  margin-right: 8px;
}

.profile-header {
  background: #ffffff;
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.profile-header .profile-image-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
}
.profile-header .profile-image-container img {
  width: 100%;
  height: 100%;
  border-radius: 60px;
  object-fit: cover;
  border: 3px solid var(--ion-color-light);
}
.profile-header .profile-image-container .edit-overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--ion-color-primary);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.profile-header .profile-image-container .edit-overlay ion-icon {
  color: #ffffff;
  font-size: 20px;
}
.profile-header .profile-info {
  text-align: center;
}
.profile-header .profile-info .name-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;
}
.profile-header .profile-info .name-section h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: var(--ion-color-dark);
}
.profile-header .profile-info .username {
  color: var(--ion-color-medium);
  font-size: 14px;
  margin: 8px 0;
}
.profile-header .profile-info .username .email {
  margin-left: 8px;
}
.profile-header .profile-info .bio {
  margin: 16px 0;
  font-size: 15px;
  line-height: 1.5;
  color: var(--ion-color-dark);
}
.profile-header .profile-info .action-buttons {
  margin-top: 16px;
}
.profile-header .profile-info .action-buttons ion-button {
  --border-radius: 12px;
  --padding-top: 16px;
  --padding-bottom: 16px;
}
.profile-header .profile-info .action-buttons ion-button ion-icon {
  margin-right: 8px;
}

.settings-section {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.settings-section .section-title {
  padding: 20px;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--ion-color-dark);
  border-bottom: 1px solid var(--ion-color-light);
}
.settings-section ion-list {
  padding: 8px 0;
}
.settings-section ion-list ion-item {
  --padding-start: 20px;
  --padding-end: 10px;
  --min-height: 56px;
  --background: transparent;
  align-items: flex-start;
}
.settings-section ion-list ion-item ion-icon[slot=start] {
  color: var(--ion-color-medium);
  margin-right: 16px;
  font-size: 20px;
}
.settings-section ion-list ion-item ion-label {
  white-space: normal;
}
.settings-section ion-list ion-item ion-label h3 {
  font-size: 16px;
  font-weight: 500;
  color: var(--ion-color-dark);
}
.settings-section ion-list ion-item ion-label .setting-description {
  font-size: 13px;
  color: var(--ion-color-medium);
  margin: 0;
  line-height: 1.4;
  white-space: normal;
  overflow: visible;
  max-width: 90%;
}
.settings-section ion-list ion-item ion-toggle {
  --background: var(--ion-color-light);
  --background-checked: var(--ion-color-primary);
  --handle-background: #ffffff;
}

.activity-section {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.activity-section .section-title {
  padding: 20px;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--ion-color-dark);
  border-bottom: 1px solid var(--ion-color-light);
}
.activity-section .empty-state {
  text-align: center;
  padding: 32px 20px;
}
.activity-section .empty-state ion-icon {
  font-size: 48px;
  color: var(--ion-color-medium);
  margin-bottom: 16px;
}
.activity-section .empty-state p {
  color: var(--ion-color-medium);
  margin: 0;
  font-size: 15px;
}
.activity-section .activity-item {
  --padding-start: 20px;
  --padding-end: 20px;
  --min-height: 72px;
}
.activity-section .activity-item ion-icon[slot=start] {
  color: var(--ion-color-medium);
  font-size: 20px;
}
.activity-section .activity-item .activity-text {
  font-size: 15px;
  color: var(--ion-color-dark);
  margin: 0 0 4px;
}
.activity-section .activity-item .activity-text a {
  color: var(--ion-color-primary);
  text-decoration: none;
}
.activity-section .activity-item .activity-text a:hover {
  text-decoration: underline;
}
.activity-section .activity-item .activity-date {
  font-size: 13px;
  color: var(--ion-color-medium);
  margin: 0;
}

.groups-section {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 16px;
}
.groups-section .section-title {
  padding: 20px;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--ion-color-dark);
}
.groups-section .group-item {
  background: #ffffff;
  --padding-start: 20px;
  --padding-end: 20px;
  --min-height: 72px;
}
.groups-section .group-item ion-avatar {
  width: 48px;
  height: 48px;
}
.groups-section .group-item ion-label h3 {
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 4px;
}
.groups-section .group-item ion-label p {
  font-size: 13px;
  margin: 0;
}

.danger-zone {
  margin: 32px 0;
  padding: 0 16px;
}
.danger-zone .delete-account-button {
  --border-radius: 12px;
  --padding-top: 16px;
  --padding-bottom: 16px;
}
.danger-zone .delete-account-button ion-icon {
  margin-right: 8px;
}

@media (max-width: 576px) {
  .profile-container {
    padding: 12px;
  }
  .profile-header {
    padding: 20px;
  }
  .profile-header .profile-image-container {
    width: 100px;
    height: 100px;
  }
  .profile-header .profile-info .name-section h1 {
    font-size: 20px;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/profile/profile.page.scss"],"names":[],"mappings":"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","sourcesContent":["\n:host {\n\n  ion-item {\n    --background: transparent;\n  }\n\n\n  .join-group-btn {\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --border-radius: 8px;\n    \n    &[color=\"danger\"] {\n      --background: transparent;\n      --color: var(--ion-color-danger);\n      --border-color: var(--ion-color-danger);\n      --border-style: solid;\n      --border-width: 1px;\n      \n      &:hover {\n        --background: var(--ion-color-danger);\n        --color: var(--ion-color-danger-contrast);\n      }\n    }\n  }\n\n}\n// Profile Page Styles\n.profile-content {\n  --background: #f5f5f5;\n}\n\n// Profile Container\n.profile-container {\n  max-width: 768px;\n  margin: 0 auto;\n  padding: 16px;\n}\n\n// Header Styles\nion-header {\n  ion-toolbar {\n    --background: transparent;\n    \n    .logout-button {\n      --color: var(--ion-color-primary);\n      font-weight: 500;\n      \n      ion-icon {\n        margin-right: 8px;\n      }\n    }\n  }\n}\n\n// Profile Header Section\n.profile-header {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 24px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n\n  .profile-image-container {\n    position: relative;\n    width: 120px;\n    height: 120px;\n    margin: 0 auto 24px;\n    \n    img {\n      width: 100%;\n      height: 100%;\n      border-radius: 60px;\n      object-fit: cover;\n      border: 3px solid var(--ion-color-light);\n    }\n\n    .edit-overlay {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      background: var(--ion-color-primary);\n      border-radius: 50%;\n      width: 36px;\n      height: 36px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      \n      ion-icon {\n        color: #ffffff;\n        font-size: 20px;\n      }\n    }\n  }\n\n  .profile-info {\n    text-align: center;\n\n    .name-section {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 12px;\n      margin-bottom: 8px;\n\n      h1 {\n        margin: 0;\n        font-size: 24px;\n        font-weight: 600;\n        color: var(--ion-color-dark);\n      }\n    }\n\n    .username {\n      color: var(--ion-color-medium);\n      font-size: 14px;\n      margin: 8px 0;\n\n      .email {\n        margin-left: 8px;\n      }\n    }\n\n    .bio {\n      margin: 16px 0;\n      font-size: 15px;\n      line-height: 1.5;\n      color: var(--ion-color-dark);\n    }\n\n    .action-buttons {\n      margin-top: 16px;\n      \n      ion-button {\n        --border-radius: 12px;\n        --padding-top: 16px;\n        --padding-bottom: 16px;\n        \n        ion-icon {\n          margin-right: 8px;\n        }\n      }\n    }\n  }\n}\n\n// Settings Section\n.settings-section {\n  background: #ffffff;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n\n  .section-title {\n    padding: 20px;\n    margin: 0;\n    font-size: 18px;\n    font-weight: 600;\n    color: var(--ion-color-dark);\n    border-bottom: 1px solid var(--ion-color-light);\n  }\n\n  ion-list {\n    padding: 8px 0;\n\n    ion-item {\n      --padding-start: 20px;\n      --padding-end: 10px;\n      --min-height: 56px;\n      --background: transparent;\n      align-items: flex-start; // Align items to top for better text wrapping\n      \n      ion-icon[slot=\"start\"] {\n        color: var(--ion-color-medium);\n        margin-right: 16px;\n        font-size: 20px;\n      }\n\n      ion-label {\n        white-space: normal; // Allow text wrapping\n        h3 {\n          font-size: 16px;\n          font-weight: 500;\n          color: var(--ion-color-dark);\n        }\n  \n        .setting-description {\n          font-size: 13px;\n          color: var(--ion-color-medium);\n          margin: 0;\n          line-height: 1.4;\n          white-space: normal; // Ensure description wraps\n          overflow: visible; // Show all text\n          max-width: 90%; // Prevent text from touching the toggle\n        }\n      }\n\n      ion-toggle {\n        --background: var(--ion-color-light);\n        --background-checked: var(--ion-color-primary);\n        --handle-background: #ffffff;\n      }\n    }\n  }\n}\n\n// Activity Section\n.activity-section {\n  background: #ffffff;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n\n  .section-title {\n    padding: 20px;\n    margin: 0;\n    font-size: 18px;\n    font-weight: 600;\n    color: var(--ion-color-dark);\n    border-bottom: 1px solid var(--ion-color-light);\n  }\n\n  .empty-state {\n    text-align: center;\n    padding: 32px 20px;\n    \n    ion-icon {\n      font-size: 48px;\n      color: var(--ion-color-medium);\n      margin-bottom: 16px;\n    }\n\n    p {\n      color: var(--ion-color-medium);\n      margin: 0;\n      font-size: 15px;\n    }\n  }\n\n  .activity-item {\n    --padding-start: 20px;\n    --padding-end: 20px;\n    --min-height: 72px;\n    \n    ion-icon[slot=\"start\"] {\n      color: var(--ion-color-medium);\n      font-size: 20px;\n    }\n\n    .activity-text {\n      font-size: 15px;\n      color: var(--ion-color-dark);\n      margin: 0 0 4px;\n\n      a {\n        color: var(--ion-color-primary);\n        text-decoration: none;\n        \n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    .activity-date {\n      font-size: 13px;\n      color: var(--ion-color-medium);\n      margin: 0;\n    }\n  }\n}\n\n// Groups Section\n.groups-section {\n  background: #ffffff;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 16px;\n\n  .section-title {\n    padding: 20px;\n    margin: 0;\n    font-size: 18px;\n    font-weight: 600;\n    color: var(--ion-color-dark);\n  }\n\n  .group-item {\n    background: #ffffff;\n    --padding-start: 20px;\n    --padding-end: 20px;\n    --min-height: 72px;\n\n    ion-avatar {\n      width: 48px;\n      height: 48px;\n    }\n\n    ion-label {\n      h3 {\n        font-size: 15px;\n        font-weight: 500;\n        margin: 0 0 4px;\n      }\n\n      p {\n        font-size: 13px;\n        margin: 0;\n      }\n    }\n  }\n}\n\n// Danger Zone\n.danger-zone {\n  margin: 32px 0;\n  padding: 0 16px;\n\n  .delete-account-button {\n    --border-radius: 12px;\n    --padding-top: 16px;\n    --padding-bottom: 16px;\n    \n    ion-icon {\n      margin-right: 8px;\n    }\n  }\n}\n\n// Responsive Adjustments\n@media (max-width: 576px) {\n  .profile-container {\n    padding: 12px;\n  }\n\n  .profile-header {\n    padding: 20px;\n    \n    .profile-image-container {\n      width: 100px;\n      height: 100px;\n    }\n\n    .profile-info {\n      .name-section h1 {\n        font-size: 20px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8904:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!myProfile\" slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"myProfile\" class=\"logout-button\" (click)=\"logout()\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n        <span>Logout</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile-content\">\n  <div class=\"profile-container\" *ngIf=\"user\">\n    <!-- Profile Header Section -->\n    <section class=\"profile-header\">\n      <div class=\"profile-image-container\">\n        <img [src]=\"user.img\" \n             (click)=\"setPhoto()\"\n             [alt]=\"user.name\"\n             onerror=\"this.src='./assets/images/default-dp_rect.png'\"\n             class=\"profile-image\">\n        <div class=\"edit-overlay\" *ngIf=\"myProfile\" (click)=\"setPhoto()\">\n          <ion-icon name=\"camera\"></ion-icon>\n        </div>\n      </div>\n\n      <div class=\"profile-info\">\n        <div class=\"name-section\">\n          <h1>{{user.name}}</h1>\n          <ion-button *ngIf=\"myProfile\" \n                      (click)=\"editProfile()\" \n                      fill=\"outline\" \n                      size=\"small\" \n                      class=\"edit-button\">\n            <ion-icon name=\"create-outline\"></ion-icon>\n            Edit\n          </ion-button>\n        </div>\n        \n        <p class=\"username\">&#64;{{user.username}}<span *ngIf=\"myProfile\" class=\"email\">· {{user.email}}</span></p>\n        \n        <p class=\"bio\">{{user.description}}</p>\n\n        <!-- Action Buttons for non-profile owner -->\n        <div class=\"action-buttons\" *ngIf=\"!myProfile\">\n          <ion-button *ngIf=\"!messageMe\" \n                      (click)=\"connectUser()\" \n                      expand=\"block\" \n                      class=\"connect-button\">\n            <ion-icon name=\"person-add-outline\"></ion-icon>\n            Connect with me\n          </ion-button>\n          <ion-button *ngIf=\"messageMe\" \n                      (click)=\"messageUser()\" \n                      expand=\"block\" \n                      class=\"message-button\">\n            <ion-icon name=\"chatbubble-outline\"></ion-icon>\n            Message me\n          </ion-button>\n        </div>\n      </div>\n    </section>\n\n    <!-- Settings Section -->\n    <section class=\"settings-section\" *ngIf=\"myProfile\">\n      <h2 class=\"section-title\">Settings</h2>\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h3>Public Visibility</h3>\n            <p class=\"setting-description\">Allow other users to find and send you friend requests</p>\n          </ion-label>\n          <ion-toggle [(ngModel)]=\"user.publicVisibility\" \n                     (ionChange)=\"changeVisibility()\">\n          </ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name=\"radio-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h3>Show Online</h3>\n            <p class=\"setting-description\">Let friends see when you're active and available to chat</p>\n          </ion-label>\n          <ion-toggle [(ngModel)]=\"user.showOnline\" \n                     (ionChange)=\"changeStatus()\">\n          </ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name=\"notifications-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h3>Enable Notifications</h3>\n            <p class=\"setting-description\">Get instant alerts for new messages and friend requests</p>\n          </ion-label>\n          <ion-toggle [(ngModel)]=\"user.isPushEnabled\" \n                     [disabled]=\"isBrowser\"\n                     (ionChange)=\"changeNotification()\">\n          </ion-toggle>\n        </ion-item>\n\n        <ion-item button routerLink=\"/blockedlist\">\n          <ion-icon name=\"ban-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h3>Blocked Users</h3>\n            <p class=\"setting-description\">Get instant alerts for new messages and friend requests</p>\n          </ion-label>\n          <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-item button (click)=\"setPassword()\" *ngIf=\"user?.provider === 'Email'\">\n          <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Update Password</ion-label>\n          <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <!-- Activity Section -->\n    <section class=\"activity-section\">\n      <h2 class=\"section-title\">Activity</h2>\n      <ion-list lines=\"none\">\n        <ion-item *ngIf=\"userPosts.length === 0\" class=\"empty-state\" slot=\"start\">\n          <ion-icon name=\"document-text-outline\"></ion-icon>\n          <ion-label>\n            <p>You have not created or commented on any posts.</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let item of userPosts\" class=\"activity-item\">\n          <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <p class=\"activity-text\">\n              New post: <a [routerLink]=\"['/post', item.key]\">\"{{item.title}}\"</a>\n            </p>\n            <p class=\"activity-date\">{{item.date.toDate() | date:'mediumDate'}}</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let item of userReactions\" class=\"activity-item\">\n          <ion-icon name=\"heart-outline\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <p class=\"activity-text\">\n              Reacted on: <a [routerLink]=\"['/post', item.key]\">\"{{item.title}}\"</a>\n            </p>\n            <p class=\"activity-date\">{{item.date.toDate() | date:'mediumDate'}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <!-- Groups Section -->\n    <section class=\"groups-section\">\n      <h2 class=\"section-title\">Groups</h2>\n      <ion-list class=\"ion-no-padding\">\n        <ion-item *ngIf=\"groups.length === 0\">\n          <ion-label>\n            <ion-icon size=\"medium\" name=\"people-outline\"></ion-icon>\n            You have not joined any groups.\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngFor=\"let group of groups\" \n                  class=\"group-item\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"group.img\" [alt]=\"group.name\">\n          </ion-avatar>\n          <ion-label>\n            <h3>{{group.name}}</h3>\n            <p>{{group.description}}</p>\n          </ion-label>\n          <ion-button *ngIf=\"myProfile\" slot=\"end\" \n          fill=\"solid\"\n          [color]=\"'danger'\"\n          (click)=\"confirmLeaveGroup(group)\"\n          class=\"join-group-btn\">\n            <ion-icon [name]=\"'exit-outline'\"\n                    slot=\"start\"></ion-icon>\n                    Leave\n                  </ion-button>\n          \n        </ion-item>\n      </ion-list>\n    </section>\n\n    <!-- Delete Account Button -->\n    <section class=\"danger-zone\" *ngIf=\"myProfile\">\n      <ion-button color=\"danger\" \n                  expand=\"block\" \n                  (click)=\"deleteAccount()\"\n                  class=\"delete-account-button\">\n        <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n        Delete Account\n      </ion-button>\n    </section>\n  </div>\n\n  <!-- settings.page.html -->\n<ion-content>\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>Test Data Controls</ion-label>\n      </ion-item-divider>\n      \n      <ion-item>\n        <ion-button expand=\"block\" (click)=\"loadTestData()\">\n          <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\n          Load Test Data\n        </ion-button>\n      </ion-item>\n      \n      <ion-item>\n        <ion-button expand=\"block\" color=\"danger\" (click)=\"clearTestData()\">\n          <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>\n          Clear Test Data\n        </ion-button>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map