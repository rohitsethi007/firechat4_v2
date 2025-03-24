(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_emoji-picker_emoji-picker_component_ts-src_app_services_bookmark_s-0c5c8c"],{

/***/ 49841:
/*!*******************************************************************!*\
  !*** ./src/app/components/emoji-picker/emoji-picker.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmojiPickerComponent: () => (/* binding */ EmojiPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _emoji_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji-picker.component.html?ngResource */ 42691);
/* harmony import */ var _emoji_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emoji-picker.component.scss?ngResource */ 93459);
/* harmony import */ var _emoji_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emoji_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78205);





let EmojiPickerComponent = class EmojiPickerComponent {
  constructor(popoverCtrl, navParams) {
    this.popoverCtrl = popoverCtrl;
    this.navParams = navParams;
    this.generalEmojis = [{
      icon: './assets/icon/smile.svg',
      value: 'smile'
    }, {
      icon: './assets/icon/wink.svg',
      value: 'wink'
    }, {
      icon: './assets/icon/sad.svg',
      value: 'sad'
    }, {
      icon: './assets/icon/love.svg',
      value: 'love'
    }, {
      icon: './assets/icon/haha.svg',
      value: 'haha'
    }, {
      icon: './assets/icon/cool.svg',
      value: 'cool'
    }, {
      icon: './assets/icon/hug.svg',
      value: 'hug'
    }];
    this.eventEmojis = [{
      icon: './assets/icon/smile.svg',
      value: 'smile'
    }, {
      icon: './assets/icon/wink.svg',
      value: 'wink'
    }, {
      icon: './assets/icon/sad.svg',
      value: 'sad'
    }, {
      icon: './assets/icon/love.svg',
      value: 'love'
    }, {
      icon: './assets/icon/haha.svg',
      value: 'haha'
    }, {
      icon: './assets/icon/cool.svg',
      value: 'cool'
    }, {
      icon: './assets/icon/hug.svg',
      value: 'hug'
    }];
    this.postType = this.navParams.get('postType');
  }
  getEmojis() {
    return this.postType === 'event' ? this.eventEmojis : this.generalEmojis;
  }
  selectEmoji(emoji) {
    this.popoverCtrl.dismiss({
      emoji: emoji,
      post: this.navParams.get('post')
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
  }];
  static #_2 = this.propDecorators = {
    postType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  };
};
EmojiPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-emoji-picker',
  template: _emoji_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_emoji_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EmojiPickerComponent);


/***/ }),

/***/ 8098:
/*!**********************************************!*\
  !*** ./src/app/services/bookmark.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookmarkService: () => (/* binding */ BookmarkService)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 3602);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);








let BookmarkService = class BookmarkService {
  constructor(afs, auth) {
    this.afs = afs;
    this.auth = auth;
    this.userBookmarks = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.userBookmarks$ = this.userBookmarks.asObservable();
  }
  // Get user's bookmarks
  getUserBookmarks(userId) {
    return this.afs.collection('accounts').doc(userId).collection('bookmarks', ref => ref.orderBy('createdAt', 'desc')).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return {
        id,
        ...data
      };
    })));
  }
  toggleBookmark(post, userId, currentBookmarks) {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userRef = _this.afs.collection('accounts').doc(userId);
        const isCurrentlyBookmarked = currentBookmarks?.includes(post.key);
        if (isCurrentlyBookmarked) {
          yield userRef.update({
            bookmarks: firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.arrayRemove(post.key)
          });
          // Update local state
          _this.userBookmarks.next(currentBookmarks.filter(id => id !== post.key));
        } else {
          yield userRef.update({
            bookmarks: firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.arrayUnion(post.key)
          });
          // Update local state
          _this.userBookmarks.next([...currentBookmarks, post.key]);
        }
        return !isCurrentlyBookmarked;
      } catch (error) {
        console.error('Error toggling bookmark:', error);
        return false;
      }
    })();
  }
  isBookmarked(postId, bookmarks) {
    return bookmarks?.includes(postId) || false;
  }
  // Get bookmark count for a post
  getBookmarkCount(postId) {
    return this.afs.collection('posts').doc(postId).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(post => post?.bookmarkCount || 0));
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth
  }];
};
BookmarkService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], BookmarkService);


/***/ }),

/***/ 72318:
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsService: () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 3602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);


// notifications.service.ts





let NotificationsService = class NotificationsService {
  constructor(firestore, auth) {
    this.firestore = firestore;
    this.auth = auth;
  }
  // Create a new notification
  createNotification(notification) {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const notificationRef = _this.firestore.collection('notifications').doc();
      yield notificationRef.set({
        ...notification,
        id: notificationRef.ref.id,
        createdAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.serverTimestamp(),
        read: false
      });
    })();
  }
  // Get user's notifications
  getUserNotifications() {
    console.info('getting notifications');
    return this.firestore.collection('notifications', ref => ref.where('toUserId', '==', firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.uid).orderBy('createdAt', 'desc').limit(50)).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(actions => actions.map(a => {
      const data = a.payload.doc.data();
      return {
        ...data
      };
    })));
  }
  // Mark notification as read
  markAsRead(notificationId) {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.firestore.doc(`notifications/${notificationId}`).update({
        read: true
      });
    })();
  }
  // Mark all notifications as read
  markAllAsRead() {
    var _this3 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const batch = _this3.firestore.firestore.batch();
      const notifications = yield _this3.firestore.collection('notifications').ref.where('toUserId', '==', firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.uid).where('read', '==', false).get();
      notifications.docs.forEach(doc => {
        batch.update(doc.ref, {
          read: true
        });
      });
      yield batch.commit();
    })();
  }
  // Delete a notification
  deleteNotification(notificationId) {
    var _this4 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.firestore.doc(`notifications/${notificationId}`).delete();
    })();
  }
  // Clear all notifications
  clearAllNotifications() {
    var _this5 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const batch = _this5.firestore.firestore.batch();
      const notifications = yield _this5.firestore.collection('notifications').ref.where('toUserId', '==', firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.uid).get();
      notifications.docs.forEach(doc => {
        batch.delete(doc.ref);
      });
      yield batch.commit();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
  }];
};
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], NotificationsService);


/***/ }),

/***/ 93459:
/*!********************************************************************************!*\
  !*** ./src/app/components/emoji-picker/emoji-picker.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.emoji-picker-horizontal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px;
  gap: 4px;
  background: #ffffff;
  border-radius: 12px;
  min-width: 200px;
  justify-content: center;
}
.emoji-picker-horizontal .emoji-button {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 8px;
  --padding-bottom: 8px;
  margin: 0;
  height: 40px;
  width: 40px;
}
.emoji-picker-horizontal .emoji-button ion-icon {
  font-size: 24px;
  transition: transform 0.2s ease;
}
.emoji-picker-horizontal .emoji-button:hover ion-icon {
  transform: scale(1.2);
}`, "",{"version":3,"sources":["webpack://./src/app/components/emoji-picker/emoji-picker.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,QAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AACJ;AACI;EACE,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;AACN;AACM;EACE,eAAA;EACA,+BAAA;AACR;AAEM;EACE,qBAAA;AAAR","sourcesContent":[".emoji-picker-horizontal {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 8px;\n    gap: 4px;\n    background: #ffffff;\n    border-radius: 12px;\n    min-width: 200px;\n    justify-content: center;\n  \n    .emoji-button {\n      --padding-start: 8px;\n      --padding-end: 8px;\n      --padding-top: 8px;\n      --padding-bottom: 8px;\n      margin: 0;\n      height: 40px;\n      width: 40px;\n  \n      ion-icon {\n        font-size: 24px;\n        transition: transform 0.2s ease;\n      }\n  \n      &:hover ion-icon {\n        transform: scale(1.2);\n      }\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 42691:
/*!********************************************************************************!*\
  !*** ./src/app/components/emoji-picker/emoji-picker.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"emoji-picker-horizontal\">\n  <ion-button \n    *ngFor=\"let emoji of getEmojis()\" \n    (click)=\"selectEmoji(emoji)\" \n    fill=\"clear\"\n    size=\"small\"\n    class=\"emoji-button\">\n    <ion-icon [src]=\"emoji.icon\"></ion-icon>\n  </ion-button>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_emoji-picker_emoji-picker_component_ts-src_app_services_bookmark_s-0c5c8c.js.map