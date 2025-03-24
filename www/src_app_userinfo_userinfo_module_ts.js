(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_userinfo_userinfo_module_ts"],{

/***/ 15247:
/*!*********************************************!*\
  !*** ./src/app/userinfo/userinfo.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserinfoPageModule: () => (/* binding */ UserinfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _userinfo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userinfo.page */ 89112);







const routes = [{
  path: '',
  component: _userinfo_page__WEBPACK_IMPORTED_MODULE_0__.UserinfoPage
}];
let UserinfoPageModule = class UserinfoPageModule {};
UserinfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_userinfo_page__WEBPACK_IMPORTED_MODULE_0__.UserinfoPage]
})], UserinfoPageModule);


/***/ }),

/***/ 89112:
/*!*******************************************!*\
  !*** ./src/app/userinfo/userinfo.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserinfoPage: () => (/* binding */ UserinfoPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _userinfo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userinfo.page.html?ngResource */ 63524);
/* harmony import */ var _userinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userinfo.page.scss?ngResource */ 72536);
/* harmony import */ var _userinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_userinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firebase.service */ 88287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/compat/auth */ 12043);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/compat/firestore */ 15108);
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/compat/storage */ 45700);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);















let UserinfoPage = class UserinfoPage {
  // UserInfoPage
  // This is the page where the user can view user information, and do appropriate actions based on their relation to the current logged in user.
  constructor(
  // public navCtrl: NavController,
  // public navParams: NavParams,
  router, modalCtrl, dataProvider, loadingProvider, alertCtrl, firebaseProvider, route, afAuth, firestore) {
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.dataProvider = dataProvider;
    this.loadingProvider = loadingProvider;
    this.alertCtrl = alertCtrl;
    this.firebaseProvider = firebaseProvider;
    this.route = route;
    this.afAuth = afAuth;
    this.firestore = firestore;
  }
  ngOnInit() {}
  ionViewDidEnter() {
    // this.userId = this.navParams.get('userId');
    this.userId = this.route.snapshot.params.id;
    console.log(this.userId);
    this.loadingProvider.show();
    // Get user info.
    this.dataProvider.getUser(this.userId).snapshotChanges().subscribe(user => {
      this.user = {
        $key: user.key,
        ...user.payload.data()
      };
      console.log(this.user);
      this.loadingProvider.hide();
      // Get friends of current logged in user.
      this.dataProvider.getUser(this.userId).snapshotChanges().subscribe(user => {
        if (user.payload.data() != null) this.friends = user.payload.data().friends;
      });
      // Get requests of current logged in user.
      this.dataProvider.getRequests(this.userId).snapshotChanges().subscribe(requests => {
        console.log(requests.payload.data());
        if (requests.payload.data() != null) {
          this.friendRequests = requests.payload.data().friendRequests;
          this.requestsSent = requests.payload.data().requestsSent;
        }
      });
    });
  }
  block() {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.loadingProvider.show();
        console.log("block function");
        const currentUser = yield _this.afAuth.currentUser;
        if (!currentUser) {
          throw new Error('No user logged in');
        }
        // Update the conversations collection in Firestore
        yield _this.firestore.collection('accounts').doc(currentUser.uid).collection('conversations').doc(_this.userId).set({
          blocked: true
        }, {
          merge: true
        });
        _this.loadingProvider.hide();
        _this.loadingProvider.showToast("User Blocked");
        _this.router.navigateByUrl('/');
      } catch (error) {
        console.error('Error blocking user:', error);
        _this.loadingProvider.hide();
        _this.loadingProvider.showToast("Something went wrong");
      }
    })();
  }
  // Enlarge user's profile image.
  enlargeImage(img) {
    // let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
    // imageModal.present();
  }
  // Accept friend request.
  acceptFriendRequest() {
    this.alert = this.alertCtrl.create({
      header: 'Confirm Friend Request',
      message: 'Do you want to accept <b>' + this.user.name + '</b> as your friend?',
      buttons: [{
        text: 'Cancel',
        handler: data => {}
      }, {
        text: 'Accept',
        handler: () => {
          this.firebaseProvider.acceptFriendRequest(this.userId);
        }
      }]
    }).then(r => r.present());
  }
  // Deny friend request.
  rejectFriendRequest() {
    this.alert = this.alertCtrl.create({
      header: 'Reject Friend Request',
      message: 'Do you want to reject <b>' + this.user.name + '</b> as your friend?',
      buttons: [{
        text: 'Cancel',
        handler: data => {}
      }, {
        text: 'Reject',
        handler: () => {
          this.firebaseProvider.deleteFriendRequest(this.userId);
        }
      }]
    }).then(r => r.present());
  }
  // Cancel friend request sent.
  cancelFriendRequest() {
    this.alert = this.alertCtrl.create({
      header: 'Friend Request Pending',
      message: 'Do you want to delete your friend request to <b>' + this.user.name + '</b>?',
      buttons: [{
        text: 'Cancel',
        handler: data => {}
      }, {
        text: 'Delete',
        handler: () => {
          this.firebaseProvider.cancelFriendRequest(this.userId);
        }
      }]
    }).then(r => r.present());
  }
  // Send friend request.
  sendFriendRequest() {
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
  // Open chat with this user.
  sendMessage() {
    this.router.navigateByUrl('/message/' + this.userId);
    // this.navCtrl.push(MessagePage, { userId: this.userId });
  }
  // Check if user can be added, meaning user is not yet friends nor has sent/received any friend requests.
  canAdd() {
    if (this.friendRequests) {
      if (this.friendRequests.indexOf(this.userId) > -1) {
        return false;
      }
    }
    if (this.requestsSent) {
      if (this.requestsSent.indexOf(this.userId) > -1) {
        return false;
      }
    }
    if (this.friends) {
      if (this.friends.indexOf(this.userId) > -1) {
        return false;
      }
    }
    return true;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
  }, {
    type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__.FirebaseService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestore
  }];
};
UserinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-userinfo',
  template: _userinfo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_userinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], UserinfoPage);


/***/ }),

/***/ 72536:
/*!********************************************************!*\
  !*** ./src/app/userinfo/userinfo.page.scss?ngResource ***!
  \********************************************************/
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

.user-info {
  margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);
}`, "",{"version":3,"sources":["webpack://./src/app/userinfo/userinfo.page.scss"],"names":[],"mappings":"AAAA;EACI,uCAAA;EACA,wCAAA;AACJ;;AAEA;EACI,mFAAA;AACJ","sourcesContent":[":host {\n    --page-margin: var(--app-narrow-margin);\n    --page-background: var(--app-background);\n  }\n\n.user-info {\n    margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);\n    .user-img {\n  \n    }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 63524:
/*!********************************************************!*\
  !*** ./src/app/userinfo/userinfo.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"user\">{{user.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"user\">\n    <ion-row padding> \n    <div class=\"user-info\">\n      <div class=\"user-img\">\n        <img src=\"{{user.img}}\">\n      </div>\n\n    <img src=\"{{user.img}}\" (click)=\"enlargeImage(user.img)\" onError=\"this.src='./assets/images/default-dp.png'\">\n    <h4 style=\"margin:0\">{{user.name}}</h4>\n    <p style=\"color:#aaa;margin:0\">&#64;{{user.username}}</p>\n    <p style=\"color:#444\">{{user.description}}</p>\n    <div style=\"border-top: 1px solid #ececec; padding: 10px;\">\n      <!-- Show actions based on the status of the user in relation to the current logged in user. -->\n      <div *ngIf=\"friendRequests && friendRequests.indexOf(user.$key) > -1\">\n        <p class=\"info\">Sent you a friend request.</p>\n        <ion-button size=\"small\" (click)=\"rejectFriendRequest()\">\n          Decline\n        </ion-button>\n        <ion-button size=\"small\" (click)=\"acceptFriendRequest()\">\n          Accept\n        </ion-button>\n      </div>\n      <div *ngIf=\"requestsSent && requestsSent.indexOf(user.$key) > -1\">\n        <ion-button size=\"small\" (click)=\"cancelFriendRequest()\">Cancel\n          Request</ion-button>\n      </div>\n      <div *ngIf=\"canAdd()\">\n        <ion-button size=\"small\" (click)=\"sendFriendRequest()\">Add Friend</ion-button>\n      </div>\n      <div *ngIf=\"friends && friends.indexOf(user.$key) > -1\">\n        <ion-button size=\"small\" (click)=\"sendMessage()\">Start Chat</ion-button>\n        <ion-button size=\"small\" (click)=\"block()\">Block User</ion-button>\n      </div>\n    </div>\n\n\n  </div>\n  </ion-row>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_userinfo_userinfo_module_ts.js.map