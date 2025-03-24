(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_friends_friends_module_ts"],{

/***/ 95487:
/*!*******************************************!*\
  !*** ./src/app/friends/friends.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FriendsPageModule: () => (/* binding */ FriendsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends.page */ 46696);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.module */ 53952);








const routes = [{
  path: '',
  component: _friends_page__WEBPACK_IMPORTED_MODULE_0__.FriendsPage
}];
let FriendsPageModule = class FriendsPageModule {};
FriendsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_0__.FriendsPage]
})], FriendsPageModule);


/***/ }),

/***/ 46696:
/*!*****************************************!*\
  !*** ./src/app/friends/friends.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FriendsPage: () => (/* binding */ FriendsPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _friends_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends.page.html?ngResource */ 68852);
/* harmony import */ var _friends_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friends.page.scss?ngResource */ 37464);
/* harmony import */ var _friends_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_friends_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firebase.service */ 88287);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);











let FriendsPage = class FriendsPage {
  // FriendsPage
  // This is the page where the user can search, view, and initiate a chat with their friends.
  constructor(dataProvider, loadingProvider, alertCtrl, firebaseProvider, afAuth, router) {
    this.dataProvider = dataProvider;
    this.loadingProvider = loadingProvider;
    this.alertCtrl = alertCtrl;
    this.firebaseProvider = firebaseProvider;
    this.afAuth = afAuth;
    this.router = router;
    this.friendRequests = [];
    this.requestsSent = [];
    this.friendRequestCount = 0;
    this.accounts = [];
    this.excludedIds = [];
  }
  ngOnInit() {}
  ionViewDidEnter() {
    this.tab = 'friends';
    this.title = 'Friends';
    this.searchFriend = '';
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      console.info('this.afAuth.currentUser', this.loggedInUserId);
      this.dataProvider.getRequests(this.loggedInUserId).snapshotChanges().subscribe(requestsRes => {
        if (requestsRes.payload != null) {
          const requests = requestsRes.payload.data();
          if (requests != null) {
            if (requests.friendRequests != null && requests.friendRequests !== undefined) {
              this.friendRequestCount = requests.friendRequests.length;
            } else {
              this.friendRequestCount = 0;
            }
          } else {
            this.friendRequestCount = 0;
          }
        }
      });
    });
  }
  segmentChanged($event) {
    if (this.tab === 'friends') {
      this.title = 'Friends';
      this.getFriends();
    } else if (this.tab === 'requests') {
      this.title = 'Friend Requests';
      this.getFriendRequests();
    } else if (this.tab === 'search') {
      this.title = 'Find New Friends';
      this.findNewFriends();
    }
  }
  // openFilter() {
  //   this.findNewFriends();
  //   let friendModal = this.modalCtrl.create(FriendsFilterPage);
  //   friendModal.present();
  //   friendModal.onDidDismiss(data => {
  //     console.log(data);
  //     if (data != undefined) {
  //       this.accounts = this.accounts.filter(acc => {
  //         if ((acc.age >= data.ageStart) && (acc.age <= data.ageEnd) && acc.location == data.location)
  //           return true;
  //         return false;
  //       })
  //     }
  //   });
  // }
  getFriends() {
    this.loadingProvider.show();
    this.friends = [];
    // Get user data on database and get list of friends.
    this.dataProvider.getCurrentUser().then(u => {
      u.snapshotChanges().subscribe(user => {
        const account = user.payload.data();
        this.loadingProvider.hide();
        if (account != null && account.friends != null) {
          for (let i = 0; i < account.friends.length; i++) {
            console.log('friends:', account.friends[i]);
            this.dataProvider.getUser(account.friends[i]).snapshotChanges().subscribe(friend => {
              if (friend.payload != null) {
                const friendData = {
                  $key: friend.payload.data().userId,
                  ...friend.payload.data()
                };
                this.addOrUpdateFriend(friendData);
              }
            });
          }
        } else {
          this.friends = [];
        }
      });
    });
  }
  // Add or update friend data for real-time sync.
  addOrUpdateFriend(friend) {
    if (!this.friends) {
      this.friends = [friend];
    } else {
      var index = -1;
      for (let i = 0; i < this.friends.length; i++) {
        if (this.friends[i].$key === friend.$key) {
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
  // Proceed to userInfo page.
  viewUser(userId) {
    this.router.navigateByUrl('/userinfo/' + userId);
  }
  // Proceed to chat page.
  message(userId) {
    this.router.navigateByUrl('/message/' + userId);
  }
  // Manageing Friend Requests
  getFriendRequests() {
    this.friendRequests = [];
    this.requestsSent = [];
    this.loadingProvider.show();
    // Get user info
    this.dataProvider.getCurrentUser().then(u => {
      u.snapshotChanges().subscribe(accountRes => {
        this.account = accountRes.payload.data();
        // Get friendRequests and requestsSent of the user.
        this.dataProvider.getRequests(this.account.userId).snapshotChanges().subscribe(requestsRes => {
          // friendRequests.
          let requests = requestsRes.payload.data();
          if (requests != null) {
            if (requests.friendRequests != null && requests.friendRequests !== undefined) {
              this.friendRequests = [];
              this.friendRequestCount = requests.friendRequests.length;
              requests.friendRequests.forEach(userId => {
                this.dataProvider.getUser(userId).snapshotChanges().subscribe(sender => {
                  sender = {
                    $key: sender.payload.data().userId,
                    ...sender.payload.data()
                  };
                  this.addOrUpdateFriendRequest(sender);
                });
              });
            } else {
              this.friendRequests = [];
            }
            // requestsSent.
            if (requests.requestsSent != null && requests.requestsSent != undefined) {
              this.requestsSent = [];
              requests.requestsSent.forEach(userId => {
                this.dataProvider.getUser(userId).snapshotChanges().subscribe(receiver => {
                  receiver = {
                    $key: receiver.payload.data().userId,
                    ...receiver.payload.data()
                  };
                  this.addOrUpdateRequestSent(receiver);
                });
              });
            } else {
              this.requestsSent = [];
            }
          }
          this.loadingProvider.hide();
        });
      });
    });
  }
  // Add or update friend request only if not yet friends.
  addOrUpdateFriendRequest(sender) {
    if (!this.friendRequests) {
      this.friendRequests = [sender];
    } else {
      var index = -1;
      for (var i = 0; i < this.friendRequests.length; i++) {
        if (this.friendRequests[i].$key === sender.$key) {
          index = i;
        }
      }
      if (index > -1) {
        if (!this.isFriends(sender.$key)) {
          this.friendRequests[index] = sender;
        }
      } else {
        if (!this.isFriends(sender.$key)) {
          this.friendRequests.push(sender);
        }
      }
    }
  }
  // Add or update requests sent only if the user is not yet a friend.
  addOrUpdateRequestSent(receiver) {
    if (!this.requestsSent) {
      this.requestsSent = [receiver];
    } else {
      var index = -1;
      for (var j = 0; j < this.requestsSent.length; j++) {
        if (this.requestsSent[j].$key == receiver.$key) {
          index = j;
        }
      }
      if (index > -1) {
        if (!this.isFriends(receiver.$key)) {
          this.requestsSent[index] = receiver;
        }
      } else {
        if (!this.isFriends(receiver.$key)) {
          this.requestsSent.push(receiver);
        }
      }
    }
  }
  findNewFriends() {
    this.requestsSent = [];
    this.friendRequests = [];
    // Initialize
    this.loadingProvider.show();
    this.searchUser = '';
    // Get all users.
    this.dataProvider.getUsers().snapshotChanges().subscribe(accounts => {
      // TODO : why is this being called twice??????????????
      this.loadingProvider.hide();
      // applying Filters
      const acc = accounts.filter(c => {
        if (c.key == null && c.key === undefined && c.payload.doc.data() == null) {
          return false;
        }
        if (c.payload.doc.data().name === '' || c.payload.doc.data().name === ' ' || c.payload.doc.data().name === undefined) {
          return false;
        }
        if (c.payload.doc.data().publicVisibility === false) {
          return false;
        }
        return true;
      });
      this.accounts = acc.map(c => {
        return {
          $key: c.payload.doc.data().userId,
          ...c.payload.doc.data()
        };
      });
      this.dataProvider.getCurrentUser().then(u => {
        u.snapshotChanges().subscribe(accountRes => {
          const account = accountRes.payload.data();
          // Add own userId as exludedIds.
          this.excludedIds = [];
          if (this.excludedIds.indexOf(account.userId) === -1) {
            this.excludedIds.push(account.userId);
          }
          // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.
          if (account != null) {
            if (account.friends != null) {
              account.friends.forEach(friend => {
                if (this.excludedIds.indexOf(friend) === -1) {
                  this.excludedIds.push(friend);
                }
              });
            }
          }
          // Get requests of the currentUser.
          this.dataProvider.getRequests(account.userId).get().subscribe(requests => {
            if (requests.payload != null) {
              this.requestsSent = requests.payload.data().requestsSent;
              this.friendRequests = requests.payload.data().friendRequests;
            }
          });
        });
      });
    });
  }
  // Send friend request.
  sendFriendRequest(user) {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: 'Send Friend Request',
        message: `Would you like to connect with <strong>${user.name}</strong>?`,
        cssClass: 'custom-alert friend-request-alert',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
          handler: () => {}
        }, {
          text: 'Send Request',
          cssClass: 'alert-button-confirm',
          handler: () => {
            _this.firebaseProvider.sendFriendRequest(user.$key);
          }
        }]
      });
      yield alert.present();
    })();
  }
  acceptFriendRequest(user) {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: 'Friend Request',
        message: `<div class="request-content">
                  <div class="user-avatar">
                    <img src="${user.img || './assets/images/default-dp.png'}" alt="${user.name}">
                  </div>
                  <div class="request-text">
                    <strong>${user.name}</strong> wants to connect with you
                  </div>
                </div>`,
        cssClass: 'custom-alert incoming-request-alert',
        buttons: [{
          text: 'Decline',
          role: 'cancel',
          cssClass: 'alert-button-cancel'
        }, {
          text: 'Accept',
          cssClass: 'alert-button-confirm',
          handler: () => {
            _this2.firebaseProvider.acceptFriendRequest(user.$key);
          }
        }]
      });
      yield alert.present();
    })();
  }
  // Cancel Friend Request sent.
  cancelFriendRequest(user) {
    this.alert = this.alertCtrl.create({
      header: 'Friend Request Pending',
      message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
      buttons: [{
        text: 'Cancel',
        handler: data => {}
      }, {
        text: 'Delete',
        handler: () => {
          this.firebaseProvider.cancelFriendRequest(user.$key);
          this.getFriendRequests();
        }
      }]
    }).then(r => r.present());
  }
  // Checks if user is already friends with this user.
  isFriends(userId) {
    if (this.account.friends) {
      if (this.account.friends.indexOf(userId) == -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  // Get the status of the user in relation to the logged in user.
  getStatus(user) {
    // Returns:
    // 0 when user can be requested as friend.
    // 1 when a friend request was already sent to this user.
    // 2 when this user has a pending friend request.
    if (this.requestsSent) {
      for (let i = 0; i < this.requestsSent.length; i++) {
        if (this.requestsSent[i] === user.$key) {
          return 1;
        }
      }
    }
    if (this.friendRequests) {
      for (let j = 0; j < this.friendRequests.length; j++) {
        if (this.friendRequests[j] === user.$key) {
          return 2;
        }
      }
    }
    return 0;
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
  }, {
    type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__.FirebaseService
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }];
};
FriendsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-friends',
  template: _friends_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_friends_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FriendsPage);


/***/ }),

/***/ 37464:
/*!******************************************************!*\
  !*** ./src/app/friends/friends.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host ion-header ion-toolbar {
  --background: transparent;
}
:host ion-header ion-toolbar ion-title {
  font-size: 20px;
  font-weight: 600;
}
:host ion-header .segment-toolbar {
  --background: transparent;
  padding: 0 16px 8px;
}
:host ion-header .segment-toolbar .custom-segment {
  --background: var(--ion-color-light);
  border-radius: 12px;
}
:host ion-header .segment-toolbar .custom-segment ion-segment-button {
  --background-checked: var(--ion-color-primary);
  --color: var(--ion-color-medium);
  --color-checked: white;
  --indicator-color: transparent;
  min-height: 40px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
}
:host ion-header .segment-toolbar .custom-segment ion-segment-button ion-badge {
  margin-left: 4px;
  --background: var(--ion-color-primary);
  --color: white;
  font-size: 12px;
}
:host .custom-searchbar {
  --background: var(--ion-color-light);
  --border-radius: 12px;
  --box-shadow: none;
  --placeholder-color: var(--ion-color-medium);
  --icon-color: var(--ion-color-medium);
  --color: var(--ion-color-dark);
  margin: 16px 0;
  padding: 0;
}
:host .section-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--ion-color-dark);
  margin: 24px 0 16px;
}
:host ion-item {
  --background: transparent;
  --padding-start: 0;
  --padding-end: 0;
  --inner-padding-end: 0;
  margin-bottom: 16px;
}
:host ion-item ion-avatar {
  width: 48px;
  height: 48px;
  margin-right: 16px;
}
:host ion-item ion-label h2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--ion-color-dark);
  margin: 0 0 4px;
}
:host ion-item ion-label p {
  font-size: 14px;
  color: var(--ion-color-medium);
  margin: 0;
}
:host ion-item .online-badge {
  --background: var(--ion-color-success);
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px;
}
:host ion-item .online-badge ion-icon {
  font-size: 8px;
  margin-right: 4px;
}
:host ion-item ion-button {
  --padding-start: 12px;
  --padding-end: 12px;
  --border-radius: 8px;
  height: 36px;
  font-size: 14px;
}
:host ion-item ion-button ion-icon {
  font-size: 16px;
  margin-right: 4px;
}
:host .empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
}
:host .empty-state ion-icon {
  font-size: 64px;
  color: var(--ion-color-medium);
  margin-bottom: 16px;
}
:host .empty-state h2 {
  font-size: 20px;
  font-weight: 600;
  color: var(--ion-color-dark);
  margin: 0 0 8px;
}
:host .empty-state p {
  font-size: 16px;
  color: var(--ion-color-medium);
  margin: 0;
}
:host ion-list-header {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 14px;
  color: var(--ion-color-medium);
  padding-top: 16px;
}
:host .import-option {
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 12px;
  --padding-bottom: 12px;
}
:host .empty-state {
  text-align: center;
  padding: 40px 16px;
}
:host .empty-state ion-icon {
  font-size: 48px;
  color: var(--ion-color-medium);
}
:host .empty-state h2 {
  margin: 16px 0 8px;
  color: var(--ion-color-dark);
}
:host .empty-state p {
  color: var(--ion-color-medium);
  margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/app/friends/friends.page.scss"],"names":[],"mappings":"AAGI;EACE,yBAAA;AAFN;AAIM;EACE,eAAA;EACA,gBAAA;AAFR;AAMI;EACE,yBAAA;EACA,mBAAA;AAJN;AAMM;EACE,oCAAA;EACA,mBAAA;AAJR;AAMQ;EACE,8CAAA;EACA,gCAAA;EACA,sBAAA;EACA,8BAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;AAJV;AAMU;EACE,gBAAA;EACA,sCAAA;EACA,cAAA;EACA,eAAA;AAJZ;AAYE;EACE,oCAAA;EACA,qBAAA;EACA,kBAAA;EACA,4CAAA;EACA,qCAAA;EACA,8BAAA;EACA,cAAA;EACA,UAAA;AAVJ;AAaE;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,mBAAA;AAXJ;AAeE;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;AAbJ;AAeI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AAbN;AAiBM;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,eAAA;AAfR;AAkBM;EACE,eAAA;EACA,8BAAA;EACA,SAAA;AAhBR;AAoBI;EACE,sCAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAlBN;AAoBM;EACE,cAAA;EACA,iBAAA;AAlBR;AAsBI;EACE,qBAAA;EACA,mBAAA;EACA,oBAAA;EACA,YAAA;EACA,eAAA;AApBN;AAsBM;EACE,eAAA;EACA,iBAAA;AApBR;AA0BE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;AAxBJ;AA0BI;EACE,eAAA;EACA,8BAAA;EACA,mBAAA;AAxBN;AA2BI;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,eAAA;AAzBN;AA4BI;EACE,eAAA;EACA,8BAAA;EACA,SAAA;AA1BN;AA8BE;EACE,gBAAA;EACA,yBAAA;EACA,qBAAA;EACA,eAAA;EACA,8BAAA;EACA,iBAAA;AA5BJ;AA+BE;EACE,qBAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;AA7BJ;AAgCE;EACE,kBAAA;EACA,kBAAA;AA9BJ;AAgCI;EACE,eAAA;EACA,8BAAA;AA9BN;AAiCI;EACE,kBAAA;EACA,4BAAA;AA/BN;AAkCI;EACE,8BAAA;EACA,SAAA;AAhCN","sourcesContent":[":host {\n  // Header Styles\n  ion-header {\n    ion-toolbar {\n      --background: transparent;\n\n      ion-title {\n        font-size: 20px;\n        font-weight: 600;\n      }\n    }\n\n    .segment-toolbar {\n      --background: transparent;\n      padding: 0 16px 8px;\n\n      .custom-segment {\n        --background: var(--ion-color-light);\n        border-radius: 12px;\n        \n        ion-segment-button {\n          --background-checked: var(--ion-color-primary);\n          --color: var(--ion-color-medium);\n          --color-checked: white;\n          --indicator-color: transparent;\n          min-height: 40px;\n          font-size: 14px;\n          font-weight: 500;\n          letter-spacing: 0;\n          text-transform: none;\n\n          ion-badge {\n            margin-left: 4px;\n            --background: var(--ion-color-primary);\n            --color: white;\n            font-size: 12px;\n          }\n        }\n      }\n    }\n  }\n\n  // Content Styles\n  .custom-searchbar {\n    --background: var(--ion-color-light);\n    --border-radius: 12px;\n    --box-shadow: none;\n    --placeholder-color: var(--ion-color-medium);\n    --icon-color: var(--ion-color-medium);\n    --color: var(--ion-color-dark);\n    margin: 16px 0;\n    padding: 0;\n  }\n\n  .section-title {\n    font-size: 18px;\n    font-weight: 600;\n    color: var(--ion-color-dark);\n    margin: 24px 0 16px;\n  }\n\n  // List Items\n  ion-item {\n    --background: transparent;\n    --padding-start: 0;\n    --padding-end: 0;\n    --inner-padding-end: 0;\n    margin-bottom: 16px;\n\n    ion-avatar {\n      width: 48px;\n      height: 48px;\n      margin-right: 16px;\n    }\n\n    ion-label {\n      h2 {\n        font-size: 16px;\n        font-weight: 600;\n        color: var(--ion-color-dark);\n        margin: 0 0 4px;\n      }\n\n      p {\n        font-size: 14px;\n        color: var(--ion-color-medium);\n        margin: 0;\n      }\n    }\n\n    .online-badge {\n      --background: var(--ion-color-success);\n      display: flex;\n      align-items: center;\n      font-size: 12px;\n      font-weight: 500;\n      padding: 6px 12px;\n\n      ion-icon {\n        font-size: 8px;\n        margin-right: 4px;\n      }\n    }\n\n    ion-button {\n      --padding-start: 12px;\n      --padding-end: 12px;\n      --border-radius: 8px;\n      height: 36px;\n      font-size: 14px;\n\n      ion-icon {\n        font-size: 16px;\n        margin-right: 4px;\n      }\n    }\n  }\n\n  // Empty State\n  .empty-state {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 48px 24px;\n    text-align: center;\n\n    ion-icon {\n      font-size: 64px;\n      color: var(--ion-color-medium);\n      margin-bottom: 16px;\n    }\n\n    h2 {\n      font-size: 20px;\n      font-weight: 600;\n      color: var(--ion-color-dark);\n      margin: 0 0 8px;\n    }\n\n    p {\n      font-size: 16px;\n      color: var(--ion-color-medium);\n      margin: 0;\n    }\n  }\n\n  ion-list-header {\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    font-size: 14px;\n    color: var(--ion-color-medium);\n    padding-top: 16px;\n  }\n  \n  .import-option {\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --padding-top: 12px;\n    --padding-bottom: 12px;\n  }\n  \n  .empty-state {\n    text-align: center;\n    padding: 40px 16px;\n    \n    ion-icon {\n      font-size: 48px;\n      color: var(--ion-color-medium);\n    }\n  \n    h2 {\n      margin: 16px 0 8px;\n      color: var(--ion-color-dark);\n    }\n  \n    p {\n      color: var(--ion-color-medium);\n      margin: 0;\n    }\n  }\n  \n  \n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 68852:
/*!******************************************************!*\
  !*** ./src/app/friends/friends.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n  \n  <!-- Modern Segmented Control -->\n  <ion-toolbar class=\"segment-toolbar\">\n    <ion-segment [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\" mode=\"ios\" class=\"custom-segment\">\n      <ion-segment-button value=\"friends\">\n        <ion-label>Friends</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"requests\">\n        <ion-label>\n          Requests\n          <ion-badge *ngIf=\"friendRequestCount > 0\">{{friendRequestCount}}</ion-badge>\n        </ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"search\">\n        <ion-label>Find New</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n  <div [ngSwitch]=\"tab\">\n    <!-- Friends Tab -->\n    <div *ngSwitchCase=\"'friends'\" class=\"ion-padding-horizontal\">\n      <!-- Search Bar -->\n      <ion-searchbar *ngIf=\"friends?.length > 0\"\n        [(ngModel)]=\"searchFriend\" \n        placeholder=\"Search friends\" \n        animated=\"true\"\n        class=\"custom-searchbar\"\n        clear-icon=\"close-circle\"\n        search-icon=\"search-outline\">\n      </ion-searchbar>\n\n      <!-- Empty State -->\n      <div class=\"empty-state\" *ngIf=\"friends?.length === 0\">\n        <ion-icon name=\"people-outline\"></ion-icon>\n        <h2>No Friends Yet</h2>\n        <p>Start connecting with new people</p>\n      </div>\n\n      <!-- Friends List -->\n      <ion-list lines=\"none\" class=\"friends-list\" *ngIf=\"friends?.length > 0\">\n        <ion-item *ngFor=\"let friend of friends | friendFilter:searchFriend\"\n                  button\n                  detail=\"false\"\n                  class=\"friend-item\"\n                  (click)=\"message(friend.$key); $event.stopPropagation();\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"friend.img\" [alt]=\"friend.name\" onError=\"this.src='./assets/images/default-dp.png'\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{friend.name}}</h2>\n            <p>{{friend.description}}</p>\n          </ion-label>\n          <ion-badge slot=\"end\" color=\"success\" class=\"online-badge\" *ngIf=\"friend.online\">\n            <ion-icon name=\"ellipse\"></ion-icon>\n            Online\n          </ion-badge>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <!-- Requests Tab -->\n    <div *ngSwitchCase=\"'requests'\" class=\"ion-padding-horizontal\">\n      <!-- Empty State -->\n      <div class=\"empty-state\" \n           *ngIf=\"(friendRequests?.length === 0) && (requestsSent?.length === 0)\">\n        <ion-icon name=\"mail-outline\"></ion-icon>\n        <h2>No Requests</h2>\n        <p>You don't have any pending friend requests</p>\n      </div>\n\n      <!-- Received Requests -->\n      <div *ngIf=\"friendRequests?.length > 0\">\n        <h3 class=\"section-title\">Received Requests</h3>\n        <ion-list lines=\"none\" class=\"requests-list\">\n          <ion-item *ngFor=\"let request of friendRequests\" \n                    button\n                    detail=\"false\"\n                    class=\"request-item\"\n                    (click)=\"viewUser(request.$key)\">\n            <ion-avatar slot=\"start\">\n              <img [src]=\"request.img\" [alt]=\"request.name\" onError=\"this.src='./assets/images/default-dp.png'\">\n            </ion-avatar>\n            <ion-label>\n              <h2>{{request.name}}</h2>\n              <p>Sent you a friend request</p>\n            </ion-label>\n            <ion-button fill=\"solid\" \n                        color=\"primary\"\n                        (click)=\"acceptFriendRequest(request); $event.stopPropagation();\">\n              <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n              Accept\n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <!-- Sent Requests -->\n      <div *ngIf=\"requestsSent?.length > 0\">\n        <h3 class=\"section-title\">Sent Requests</h3>\n        <ion-list lines=\"none\" class=\"requests-list\">\n          <ion-item *ngFor=\"let sent of requestsSent\" \n                    button\n                    detail=\"false\"\n                    class=\"request-item\"\n                    (click)=\"viewUser(sent.$key)\">\n            <ion-avatar slot=\"start\">\n              <img [src]=\"sent.img\" [alt]=\"sent.name\" onError=\"this.src='./assets/images/default-dp.png'\">\n            </ion-avatar>\n            <ion-label>\n              <h2>{{sent.name}}</h2>\n              <p>Request sent</p>\n            </ion-label>\n            <ion-button fill=\"outline\" \n                        color=\"medium\"\n                        (click)=\"cancelFriendRequest(sent); $event.stopPropagation();\">\n              <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n              Cancel\n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n\n    <!-- Search Tab -->\n    <div *ngSwitchCase=\"'search'\" class=\"ion-padding-horizontal\">\n      <!-- Search Bar -->\n      <ion-searchbar [(ngModel)]=\"searchUser\" \n                     placeholder=\"Search people\" \n                     animated=\"true\"\n                     class=\"custom-searchbar\"\n                     clear-icon=\"close-circle\"\n                     search-icon=\"search-outline\">\n      </ion-searchbar>\n\n<!-- Discovery Methods when no search is active -->\n<div *ngIf=\"!searchUser\">\n\n  <ion-list lines=\"none\" class=\"users-list\" *ngIf=\"groupMembers?.length > 0\">\n    <ion-item *ngFor=\"let account of groupMembers\"\n              button\n              detail=\"false\"\n              class=\"user-item\"\n              (click)=\"viewUser(account.$key)\">\n      <!-- Same item template as your existing one -->\n      <ion-avatar slot=\"start\">\n        <img [src]=\"account.img\" [alt]=\"account.name\" onError=\"this.src='./assets/images/default-dp.png'\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{account.name}}</h2>\n        <p>&#64;{{account.username}}</p>\n      </ion-label>\n      \n      <!-- Your existing button logic -->\n      <ion-button *ngIf=\"getStatus(account) === 0\"\n                  fill=\"solid\"\n                  color=\"primary\"\n                  (click)=\"sendFriendRequest(account); $event.stopPropagation();\">\n        <ion-icon name=\"person-add-outline\" slot=\"start\"></ion-icon>\n        Add\n      </ion-button>\n      <!-- Include your Cancel and Accept button logic here -->\n    </ion-item>\n  </ion-list>\n\n  <!-- Import Options -->\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Import Contacts</ion-label>\n    </ion-list-header>\n\n    <ion-item button (click)=\"importPhoneContacts()\" detail=\"true\">\n      <ion-icon name=\"phone-portrait-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Phone Contacts</h2>\n        <p>Find friends from your contact list</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item button (click)=\"importFacebookContacts()\" detail=\"true\">\n      <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Facebook</h2>\n        <p>Connect with Facebook friends</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item button (click)=\"importTwitterContacts()\" detail=\"true\">\n      <ion-icon name=\"logo-twitter\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Twitter</h2>\n        <p>Find friends from Twitter</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n\n<!-- Search Results -->\n<div *ngIf=\"searchUser\">\n  <!-- Your existing empty state -->\n  <div class=\"empty-state\" *ngIf=\"accounts?.length === 0\">\n    <ion-icon name=\"search-outline\"></ion-icon>\n    <h2>No Users Found</h2>\n    <p>Try searching for people to connect with</p>\n  </div>\n\n  <!-- Your existing users list -->\n  <ion-list lines=\"none\" class=\"users-list\" *ngIf=\"accounts?.length > 0\">\n    <ion-item *ngFor=\"let account of accounts | searchFilter: [excludedIds, searchUser]\"\n              button\n              detail=\"false\"\n              class=\"user-item\"\n              (click)=\"viewUser(account.$key)\">\n      <!-- Your existing item template -->\n      <ion-avatar slot=\"start\">\n        <img [src]=\"account.img\" [alt]=\"account.name\" onError=\"this.src='./assets/images/default-dp.png'\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{account.name}}</h2>\n        <p>&#64;{{account.username}}</p>\n      </ion-label>\n      \n      <!-- Your existing buttons -->\n      <ion-button *ngIf=\"getStatus(account) === 0\"\n                  fill=\"solid\"\n                  color=\"primary\"\n                  (click)=\"sendFriendRequest(account); $event.stopPropagation();\">\n        <ion-icon name=\"person-add-outline\" slot=\"start\"></ion-icon>\n        Add\n      </ion-button>\n\n      <!-- Include your Cancel and Accept button logic here -->\n    </ion-item>\n  </ion-list>\n</div>\n\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_friends_friends_module_ts.js.map