(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_messages_messages_module_ts"],{

/***/ 97477:
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesPageModule: () => (/* binding */ MessagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 37342);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.module */ 53952);








const routes = [{
  path: '',
  component: _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage
}];
let MessagesPageModule = class MessagesPageModule {};
MessagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage]
})], MessagesPageModule);


/***/ }),

/***/ 37342:
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesPage: () => (/* binding */ MessagesPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.html?ngResource */ 67722);
/* harmony import */ var _messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.page.scss?ngResource */ 22718);
/* harmony import */ var _messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);












let MessagesPage = class MessagesPage {
  constructor(router, afAuth, firestore, loadingProvider, dataProvider) {
    this.router = router;
    this.afAuth = afAuth;
    this.firestore = firestore;
    this.loadingProvider = loadingProvider;
    this.dataProvider = dataProvider;
    this.searchFriend = '';
    this.subscriptions = [];
    this.unreadMessageCount = 0;
  }
  ngOnInit() {
    var _this = this;
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      // Set up unread messages count subscription
      this.subscriptions.push(this.afAuth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(user => {
        if (!user) {
          console.log('No user logged in');
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(0);
        }
        return this.dataProvider.getConversations(user.uid).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)( /*#__PURE__*/function () {
          var _ref = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (conversationsInfoRes) {
            let totalUnread = 0;
            if (!conversationsInfoRes || conversationsInfoRes.length === 0) {
              return totalUnread;
            }
            const conversations = conversationsInfoRes.map(c => ({
              key: c.payload.doc.id,
              ...c.payload.doc.data()
            }));
            for (const conversation of conversations) {
              try {
                const conversationSnapshot = yield _this.dataProvider.getConversation(conversation.conversationId).get().toPromise();
                if (conversationSnapshot.exists) {
                  const conversationData = conversationSnapshot.data();
                  if (conversationData?.messages?.length) {
                    const unreadCount = conversationData.messages.length - (conversation.messagesRead || 0);
                    totalUnread += unreadCount;
                  }
                }
              } catch (error) {
                console.error(`Error calculating unread messages:`, error);
              }
            }
            return totalUnread;
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()));
      })).subscribe({
        next: count => {},
        error: error => {
          console.error('Error in unread messages subscription:', error);
        }
      }));
    });
  }
  ngOnDestroy() {
    // Clean up subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  ionViewDidEnter() {
    this.loadingProvider.show();
    this.loadConversations();
  }
  // Add or update conversation for real-time sync based on our observer, sort by active date.
  addOrUpdateConversation(conversation) {
    if (!this.conversations) {
      this.conversations = [conversation];
    } else {
      var index = -1;
      for (var i = 0; i < this.conversations.length; i++) {
        if (this.conversations[i].key == conversation.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.conversations[index] = conversation;
      } else {
        this.conversations.push(conversation);
      }
      // Sort by last active date.
      this.conversations.sort((a, b) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);
        if (date1 > date2) {
          return -1;
        } else if (date1 < date2) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }
  // Open chat with friend.
  message(userId) {
    this.router.navigateByUrl('/message/' + userId);
    // this.app.getRootNav().push(MessagePage, { userId: userId });
  }
  // Return class based if conversation has unreadMessages or not.
  hasUnreadMessages(conversation) {
    if (conversation.unreadMessagesCount > 0) {
      return 'bold';
    } else return '';
  }
  loadConversations() {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userId = yield _this2.afAuth.currentUser;
        if (!userId) {
          console.error('No user logged in');
          return;
        }
        _this2.dataProvider.getConversations(_this2.loggedInUserId).snapshotChanges().subscribe({
          next: function () {
            var _ref2 = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (conversationsInfoRes) {
              console.log('Raw conversations response:', conversationsInfoRes);
              if (!conversationsInfoRes || conversationsInfoRes.length === 0) {
                console.log('No conversations found');
                _this2.conversations = [];
                _this2.loadingProvider.hide();
                return;
              }
              let conversations = conversationsInfoRes.map(c => ({
                key: c.payload.doc.id,
                ...c.payload.doc.data()
              }));
              console.log('Mapped conversations:', conversations);
              const conversationPromises = conversations.map( /*#__PURE__*/function () {
                var _ref3 = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (conversation) {
                  try {
                    const userSnapshot = yield _this2.dataProvider.getUser(conversation.key).get().toPromise();
                    if (!userSnapshot.exists) {
                      console.log(`No user found for conversation ${conversation.key}`);
                      return null;
                    }
                    conversation.friend = userSnapshot.data();
                    const conversationSnapshot = yield _this2.dataProvider.getConversation(conversation.conversationId).get().toPromise();
                    if (!conversationSnapshot.exists) {
                      console.log(`No conversation found for ID ${conversation.conversationId}`);
                      return null;
                    }
                    const conversationData = conversationSnapshot.data();
                    if (!conversationData?.messages?.length) {
                      console.log(`No messages in conversation ${conversation.conversationId}`);
                      return null;
                    }
                    const lastMessage = conversationData.messages[conversationData.messages.length - 1];
                    conversation.date = lastMessage.date;
                    conversation.sender = lastMessage.sender;
                    conversation.unreadMessagesCount = conversationData.messages.length - (conversation.messagesRead || 0);
                    const currentUserId = userId.uid;
                    if (lastMessage.type === 'text') {
                      conversation.message = lastMessage.sender === currentUserId ? `You: ${lastMessage.message}` : lastMessage.message;
                    } else {
                      conversation.message = lastMessage.sender === currentUserId ? 'You sent a photo message.' : 'has sent you a photo message.';
                    }
                    return conversation;
                  } catch (error) {
                    console.error(`Error processing conversation:`, error);
                    return null;
                  }
                });
                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }());
              const processedConversations = yield Promise.all(conversationPromises);
              const validConversations = processedConversations.filter(conv => conv !== null).sort((a, b) => b.date - a.date);
              console.log('Processed conversations:', validConversations);
              validConversations.forEach(conversation => {
                _this2.addOrUpdateConversation(conversation);
              });
            });
            return function next(_x2) {
              return _ref2.apply(this, arguments);
            };
          }(),
          error: error => {
            console.error('Error fetching conversations:', error);
            _this2.loadingProvider.hide();
          },
          complete: () => {
            _this2.loadingProvider.hide();
          }
        });
      } catch (error) {
        console.error('Error in loadConversations:', error);
        _this2.loadingProvider.hide();
      }
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }];
};
MessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-messages',
  template: _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MessagesPage);


/***/ }),

/***/ 22718:
/*!********************************************************!*\
  !*** ./src/app/messages/messages.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host ion-header ion-toolbar {
  --background: transparent;
}
:host ion-header ion-toolbar ion-back-button {
  --color: var(--ion-color-dark);
  --icon-font-size: 24px;
}
:host ion-header ion-toolbar ion-title {
  font-size: 20px;
  font-weight: 600;
}
:host ion-header .search-toolbar {
  --background: transparent;
  padding-bottom: 8px;
}
:host ion-header .search-toolbar .custom-searchbar {
  --background: var(--ion-color-light);
  --border-radius: 12px;
  --box-shadow: none;
  --placeholder-color: var(--ion-color-medium);
  --icon-color: var(--ion-color-medium);
  --color: var(--ion-color-dark);
  padding: 0;
  height: 46px;
}
:host .empty-state {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}
:host .empty-state .empty-state-content {
  text-align: center;
}
:host .empty-state .empty-state-content ion-icon {
  font-size: 64px;
  color: var(--ion-color-medium);
  margin-bottom: 16px;
}
:host .empty-state .empty-state-content h2 {
  font-size: 20px;
  font-weight: 600;
  color: var(--ion-color-dark);
  margin: 0 0 8px;
}
:host .empty-state .empty-state-content p {
  font-size: 16px;
  color: var(--ion-color-medium);
  margin: 0;
}
:host .conversations-list {
  background: transparent;
  padding-top: 8px;
}
:host .conversations-list .conversation-item {
  --padding-start: 12px;
  --padding-end: 12px;
  --padding-top: 8px;
  --padding-bottom: 8px;
  --background: transparent;
  --min-height: 60px;
}
:host .conversations-list .conversation-item .message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
}
:host .conversations-list .conversation-item .message-header h2 {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: var(--ion-color-dark);
}
:host .conversations-list .conversation-item .message-header .message-time {
  font-size: 12px;
  color: var(--ion-color-medium);
}
:host .conversations-list .conversation-item .message-preview {
  color: var(--ion-color-medium);
  margin: 0;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
:host .conversations-list .conversation-item .unread-badge {
  --background: var(--ion-color-primary);
  --color: white;
  --padding-start: 6px;
  --padding-end: 6px;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 500;
  margin-left: 6px;
}
:host .conversations-list .conversation-item ion-avatar {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
:host .conversations-list ion-item.conversation-item {
  --border-style: solid;
  --border-color: rgba(0, 0, 0, 0.08);
  --border-width: 0 0 1px 0;
}
:host .conversations-list ion-item.conversation-item:last-child {
  --border-width: 0;
}`, "",{"version":3,"sources":["webpack://./src/app/messages/messages.page.scss"],"names":[],"mappings":"AAGM;EACE,yBAAA;AAFR;AAIQ;EACE,8BAAA;EACA,sBAAA;AAFV;AAKQ;EACE,eAAA;EACA,gBAAA;AAHV;AAOM;EACE,yBAAA;EACA,mBAAA;AALR;AAOQ;EACE,oCAAA;EACA,qBAAA;EACA,kBAAA;EACA,4CAAA;EACA,qCAAA;EACA,8BAAA;EACA,UAAA;EACA,YAAA;AALV;AAWI;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AATN;AAWM;EACE,kBAAA;AATR;AAWQ;EACE,eAAA;EACA,8BAAA;EACA,mBAAA;AATV;AAYQ;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,eAAA;AAVV;AAaQ;EACE,eAAA;EACA,8BAAA;EACA,SAAA;AAXV;AAiBI;EACE,uBAAA;EACA,gBAAA;AAfN;AAiBM;EACE,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,kBAAA;AAfR;AAiBQ;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;AAfV;AAiBU;EACE,SAAA;EACA,eAAA;EACA,gBAAA;EACA,4BAAA;AAfZ;AAkBU;EACE,eAAA;EACA,8BAAA;AAhBZ;AAoBQ;EACE,8BAAA;EACA,SAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AAlBV;AAqBQ;EACE,sCAAA;EACA,cAAA;EACA,oBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AAnBV;AAsBQ;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AApBV;AAyBM;EACE,qBAAA;EACA,mCAAA;EACA,yBAAA;AAvBR;AAyBQ;EACE,iBAAA;AAvBV","sourcesContent":[":host {\n    // Header Styles\n    ion-header {\n      ion-toolbar {\n        --background: transparent;\n        \n        ion-back-button {\n          --color: var(--ion-color-dark);\n          --icon-font-size: 24px;\n        }\n  \n        ion-title {\n          font-size: 20px;\n          font-weight: 600;\n        }\n      }\n  \n      .search-toolbar {\n        --background: transparent;\n        padding-bottom: 8px;\n  \n        .custom-searchbar {\n          --background: var(--ion-color-light);\n          --border-radius: 12px;\n          --box-shadow: none;\n          --placeholder-color: var(--ion-color-medium);\n          --icon-color: var(--ion-color-medium);\n          --color: var(--ion-color-dark);\n          padding: 0;\n          height: 46px;\n        }\n      }\n    }\n  \n    // Empty State\n    .empty-state {\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 32px;\n  \n      .empty-state-content {\n        text-align: center;\n  \n        ion-icon {\n          font-size: 64px;\n          color: var(--ion-color-medium);\n          margin-bottom: 16px;\n        }\n  \n        h2 {\n          font-size: 20px;\n          font-weight: 600;\n          color: var(--ion-color-dark);\n          margin: 0 0 8px;\n        }\n  \n        p {\n          font-size: 16px;\n          color: var(--ion-color-medium);\n          margin: 0;\n        }\n      }\n    }\n  \n    // Conversations List\n    .conversations-list {\n      background: transparent;\n      padding-top: 8px;\n  \n      .conversation-item {\n        --padding-start: 12px;\n        --padding-end: 12px;\n        --padding-top: 8px;\n        --padding-bottom: 8px;\n        --background: transparent;\n        --min-height: 60px; // For more compact height\n        \n        .message-header {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          margin-bottom: 2px; // Reduced margin\n      \n          h2 {\n            margin: 0;\n            font-size: 15px; // Slightly smaller font\n            font-weight: 500;\n            color: var(--ion-color-dark);\n          }\n      \n          .message-time {\n            font-size: 12px;\n            color: var(--ion-color-medium);\n          }\n        }\n      \n        .message-preview {\n          color: var(--ion-color-medium);\n          margin: 0;\n          font-size: 13px; // Slightly smaller font\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n      \n        .unread-badge {\n          --background: var(--ion-color-primary);\n          --color: white;\n          --padding-start: 6px;\n          --padding-end: 6px;\n          min-width: 18px; // Slightly smaller badge\n          height: 18px;\n          border-radius: 9px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          font-size: 11px;\n          font-weight: 500;\n          margin-left: 6px;\n        }\n      \n        ion-avatar {\n          width: 40px; // Slightly smaller avatar\n          height: 40px;\n          margin-right: 10px;\n        }\n      }\n      \n      // Optional: Add subtle border between items\n      ion-item.conversation-item {\n        --border-style: solid;\n        --border-color: rgba(0, 0, 0, 0.08);\n        --border-width: 0 0 1px 0;\n        \n        &:last-child {\n          --border-width: 0;\n        }\n      }\n      \n      \n      \n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 67722:
/*!********************************************************!*\
  !*** ./src/app/messages/messages.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Messages</ion-title>\n  </ion-toolbar>\n\n  <!-- Search Bar (Only show if there are conversations) -->\n  <ion-toolbar class=\"search-toolbar ion-padding-horizontal\" *ngIf=\"conversations?.length > 0\">\n    <ion-searchbar [(ngModel)]=\"searchFriend\" \n                   placeholder=\"Search conversations\" \n                   animated=\"true\"\n                   class=\"custom-searchbar\"\n                   clear-icon=\"close-circle\"\n                   search-icon=\"search-outline\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Empty State -->\n  <div class=\"empty-state\" *ngIf=\"conversations?.length <= 0\">\n    <div class=\"empty-state-content\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      <h2>No Messages Yet</h2>\n      <p>Start a conversation with your friends</p>\n    </div>\n  </div>\n\n  <!-- Conversations List -->\n  <ion-list lines=\"none\" class=\"conversations-list ion-padding-horizontal\" *ngIf=\"conversations?.length > 0\">\n    <div *ngFor=\"let conversation of conversations | conversationFilter:searchFriend\"> \n      <ion-item *ngIf=\"!conversation.blocked\" \n      button\n      detail=\"false\"\n      class=\"conversation-item\"\n      [class.unread]=\"conversation.unreadMessagesCount > 0\"\n      (click)=\"message(conversation.key)\">\n\n      <!-- Avatar -->\n      <ion-avatar slot=\"start\" *ngIf=\"conversation.friend\">\n      <img [src]=\"conversation.friend.img\" \n      [alt]=\"conversation.friend.name\"\n      onError=\"this.src='./assets/images/default-dp.png'\">\n      </ion-avatar>\n\n      <!-- Message Content -->\n      <ion-label>\n      <div class=\"message-header\">\n      <h2 *ngIf=\"conversation.friend\">{{conversation.friend.name}}</h2>\n      <ion-text class=\"message-time\" color=\"medium\">\n      {{conversation.date | DateFormat}}\n      </ion-text>\n      </div>\n      <p class=\"message-preview\">{{conversation.message}}</p>\n      </ion-label>\n\n      <!-- Unread Badge -->\n      <ion-badge *ngIf=\"conversation.unreadMessagesCount > 0\"\n          slot=\"end\" \n          class=\"unread-badge\">\n      {{conversation.unreadMessagesCount}}\n      </ion-badge>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_messages_messages_module_ts.js.map