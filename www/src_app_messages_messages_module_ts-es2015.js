"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_messages_messages_module_ts"],{

/***/ 84812:
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageModule": function() { return /* binding */ MessagesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 63567);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.module */ 32218);








const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage
    }
];
let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [
            _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage
        ]
    })
], MessagesPageModule);



/***/ }),

/***/ 63567:
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPage": function() { return /* binding */ MessagesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_messages_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./messages.page.html */ 50875);
/* harmony import */ var _messages_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.scss */ 73196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 79902);











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
        this.afAuth.currentUser.then(user => {
            this.loggedInUserId = user === null || user === void 0 ? void 0 : user.uid;
            // Set up unread messages count subscription
            this.subscriptions.push(this.afAuth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(user => {
                if (!user) {
                    console.log('No user logged in');
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(0);
                }
                return this.dataProvider.getConversations(user.uid).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((conversationsInfoRes) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    var _a;
                    let totalUnread = 0;
                    if (!conversationsInfoRes || conversationsInfoRes.length === 0) {
                        return totalUnread;
                    }
                    const conversations = conversationsInfoRes.map(c => (Object.assign({ key: c.payload.doc.id }, c.payload.doc.data())));
                    for (const conversation of conversations) {
                        try {
                            const conversationSnapshot = yield this.dataProvider
                                .getConversation(conversation.conversationId)
                                .get()
                                .toPromise();
                            if (conversationSnapshot.exists) {
                                const conversationData = conversationSnapshot.data();
                                if ((_a = conversationData === null || conversationData === void 0 ? void 0 : conversationData.messages) === null || _a === void 0 ? void 0 : _a.length) {
                                    const unreadCount = conversationData.messages.length - (conversation.messagesRead || 0);
                                    totalUnread += unreadCount;
                                }
                            }
                        }
                        catch (error) {
                            console.error(`Error calculating unread messages:`, error);
                        }
                    }
                    return totalUnread;
                })));
            })).subscribe({
                next: (count) => {
                },
                error: (error) => {
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
        }
        else {
            var index = -1;
            for (var i = 0; i < this.conversations.length; i++) {
                if (this.conversations[i].key == conversation.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.conversations[index] = conversation;
            }
            else {
                this.conversations.push(conversation);
            }
            // Sort by last active date.
            this.conversations.sort((a, b) => {
                let date1 = new Date(a.date);
                let date2 = new Date(b.date);
                if (date1 > date2) {
                    return -1;
                }
                else if (date1 < date2) {
                    return 1;
                }
                else {
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
        }
        else
            return '';
    }
    loadConversations() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const userId = yield this.afAuth.currentUser;
                if (!userId) {
                    console.error('No user logged in');
                    return;
                }
                this.dataProvider.getConversations(this.loggedInUserId).snapshotChanges().subscribe({
                    next: (conversationsInfoRes) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        console.log('Raw conversations response:', conversationsInfoRes);
                        if (!conversationsInfoRes || conversationsInfoRes.length === 0) {
                            console.log('No conversations found');
                            this.conversations = [];
                            this.loadingProvider.hide();
                            return;
                        }
                        let conversations = conversationsInfoRes.map(c => (Object.assign({ key: c.payload.doc.id }, c.payload.doc.data())));
                        console.log('Mapped conversations:', conversations);
                        const conversationPromises = conversations.map((conversation) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            var _a;
                            try {
                                const userSnapshot = yield this.dataProvider.getUser(conversation.key).get().toPromise();
                                if (!userSnapshot.exists) {
                                    console.log(`No user found for conversation ${conversation.key}`);
                                    return null;
                                }
                                conversation.friend = userSnapshot.data();
                                const conversationSnapshot = yield this.dataProvider
                                    .getConversation(conversation.conversationId)
                                    .get()
                                    .toPromise();
                                if (!conversationSnapshot.exists) {
                                    console.log(`No conversation found for ID ${conversation.conversationId}`);
                                    return null;
                                }
                                const conversationData = conversationSnapshot.data();
                                if (!((_a = conversationData === null || conversationData === void 0 ? void 0 : conversationData.messages) === null || _a === void 0 ? void 0 : _a.length)) {
                                    console.log(`No messages in conversation ${conversation.conversationId}`);
                                    return null;
                                }
                                const lastMessage = conversationData.messages[conversationData.messages.length - 1];
                                conversation.date = lastMessage.date;
                                conversation.sender = lastMessage.sender;
                                conversation.unreadMessagesCount =
                                    conversationData.messages.length - (conversation.messagesRead || 0);
                                const currentUserId = userId.uid;
                                if (lastMessage.type === 'text') {
                                    conversation.message = lastMessage.sender === currentUserId
                                        ? `You: ${lastMessage.message}`
                                        : lastMessage.message;
                                }
                                else {
                                    conversation.message = lastMessage.sender === currentUserId
                                        ? 'You sent a photo message.'
                                        : 'has sent you a photo message.';
                                }
                                return conversation;
                            }
                            catch (error) {
                                console.error(`Error processing conversation:`, error);
                                return null;
                            }
                        }));
                        const processedConversations = yield Promise.all(conversationPromises);
                        const validConversations = processedConversations
                            .filter((conv) => conv !== null)
                            .sort((a, b) => b.date - a.date);
                        console.log('Processed conversations:', validConversations);
                        validConversations.forEach(conversation => {
                            this.addOrUpdateConversation(conversation);
                        });
                    }),
                    error: (error) => {
                        console.error('Error fetching conversations:', error);
                        this.loadingProvider.hide();
                    },
                    complete: () => {
                        this.loadingProvider.hide();
                    }
                });
            }
            catch (error) {
                console.error('Error in loadConversations:', error);
                this.loadingProvider.hide();
            }
        });
    }
};
MessagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
MessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-messages',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_messages_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore,
        _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService,
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService])
], MessagesPage);



/***/ }),

/***/ 50875:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/messages/messages.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Messages</ion-title>\n  </ion-toolbar>\n\n  <!-- Search Bar (Only show if there are conversations) -->\n  <ion-toolbar class=\"search-toolbar ion-padding-horizontal\" *ngIf=\"conversations?.length > 0\">\n    <ion-searchbar [(ngModel)]=\"searchFriend\" \n                   placeholder=\"Search conversations\" \n                   animated=\"true\"\n                   class=\"custom-searchbar\"\n                   clear-icon=\"close-circle\"\n                   search-icon=\"search-outline\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Empty State -->\n  <div class=\"empty-state\" *ngIf=\"conversations?.length <= 0\">\n    <div class=\"empty-state-content\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      <h2>No Messages Yet</h2>\n      <p>Start a conversation with your friends</p>\n    </div>\n  </div>\n\n  <!-- Conversations List -->\n  <ion-list lines=\"none\" class=\"conversations-list ion-padding-horizontal\" *ngIf=\"conversations?.length > 0\">\n    <div *ngFor=\"let conversation of conversations | conversationFilter:searchFriend\"> \n      <ion-item *ngIf=\"!conversation.blocked\" \n      button\n      detail=\"false\"\n      class=\"conversation-item\"\n      [class.unread]=\"conversation.unreadMessagesCount > 0\"\n      (click)=\"message(conversation.key)\">\n\n      <!-- Avatar -->\n      <ion-avatar slot=\"start\" *ngIf=\"conversation.friend\">\n      <img [src]=\"conversation.friend.img\" \n      [alt]=\"conversation.friend.name\"\n      onError=\"this.src='./assets/images/default-dp.png'\">\n      </ion-avatar>\n\n      <!-- Message Content -->\n      <ion-label>\n      <div class=\"message-header\">\n      <h2 *ngIf=\"conversation.friend\">{{conversation.friend.name}}</h2>\n      <ion-text class=\"message-time\" color=\"medium\">\n      {{conversation.date | DateFormat}}\n      </ion-text>\n      </div>\n      <p class=\"message-preview\">{{conversation.message}}</p>\n      </ion-label>\n\n      <!-- Unread Badge -->\n      <ion-badge *ngIf=\"conversation.unreadMessagesCount > 0\"\n          slot=\"end\" \n          class=\"unread-badge\">\n      {{conversation.unreadMessagesCount}}\n      </ion-badge>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 73196:
/*!*********************************************!*\
  !*** ./src/app/messages/messages.page.scss ***!
  \*********************************************/
/***/ (function(module) {

module.exports = ":host ion-header ion-toolbar {\n  --background: transparent;\n}\n:host ion-header ion-toolbar ion-back-button {\n  --color: var(--ion-color-dark);\n  --icon-font-size: 24px;\n}\n:host ion-header ion-toolbar ion-title {\n  font-size: 20px;\n  font-weight: 600;\n}\n:host ion-header .search-toolbar {\n  --background: transparent;\n  padding-bottom: 8px;\n}\n:host ion-header .search-toolbar .custom-searchbar {\n  --background: var(--ion-color-light);\n  --border-radius: 12px;\n  --box-shadow: none;\n  --placeholder-color: var(--ion-color-medium);\n  --icon-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n  padding: 0;\n  height: 46px;\n}\n:host .empty-state {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n}\n:host .empty-state .empty-state-content {\n  text-align: center;\n}\n:host .empty-state .empty-state-content ion-icon {\n  font-size: 64px;\n  color: var(--ion-color-medium);\n  margin-bottom: 16px;\n}\n:host .empty-state .empty-state-content h2 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin: 0 0 8px;\n}\n:host .empty-state .empty-state-content p {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n  margin: 0;\n}\n:host .conversations-list {\n  background: transparent;\n  padding-top: 8px;\n}\n:host .conversations-list .conversation-item {\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --background: transparent;\n  --min-height: 60px;\n}\n:host .conversations-list .conversation-item .message-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2px;\n}\n:host .conversations-list .conversation-item .message-header h2 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n:host .conversations-list .conversation-item .message-header .message-time {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n:host .conversations-list .conversation-item .message-preview {\n  color: var(--ion-color-medium);\n  margin: 0;\n  font-size: 13px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n:host .conversations-list .conversation-item .unread-badge {\n  --background: var(--ion-color-primary);\n  --color: white;\n  --padding-start: 6px;\n  --padding-end: 6px;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 500;\n  margin-left: 6px;\n}\n:host .conversations-list .conversation-item ion-avatar {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n:host .conversations-list ion-item.conversation-item {\n  --border-style: solid;\n  --border-color: rgba(0, 0, 0, 0.08);\n  --border-width: 0 0 1px 0;\n}\n:host .conversations-list ion-item.conversation-item:last-child {\n  --border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLHlCQUFBO0FBRlI7QUFJUTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUFGVjtBQUtRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBSFY7QUFPTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQU9RO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFMVjtBQVdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVROO0FBV007RUFDRSxrQkFBQTtBQVRSO0FBV1E7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVRWO0FBWVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFWVjtBQWFRO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQVhWO0FBaUJJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQWZOO0FBaUJNO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBZlI7QUFpQlE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBZlY7QUFpQlU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFmWjtBQWtCVTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtBQWhCWjtBQW9CUTtFQUNFLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFsQlY7QUFxQlE7RUFDRSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFuQlY7QUFzQlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBcEJWO0FBeUJNO0VBQ0UscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0FBdkJSO0FBeUJRO0VBQ0UsaUJBQUE7QUF2QlYiLCJmaWxlIjoibWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC8vIEhlYWRlciBTdHlsZXNcbiAgICBpb24taGVhZGVyIHtcbiAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIC0taWNvbi1mb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAuc2VhcmNoLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBcbiAgICAgICAgLmN1c3RvbS1zZWFyY2hiYXIge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIC0taWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvLyBFbXB0eSBTdGF0ZVxuICAgIC5lbXB0eS1zdGF0ZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMzJweDtcbiAgXG4gICAgICAuZW1wdHktc3RhdGUtY29udGVudCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIENvbnZlcnNhdGlvbnMgTGlzdFxuICAgIC5jb252ZXJzYXRpb25zLWxpc3Qge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICBcbiAgICAgIC5jb252ZXJzYXRpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tbWluLWhlaWdodDogNjBweDsgLy8gRm9yIG1vcmUgY29tcGFjdCBoZWlnaHRcbiAgICAgICAgXG4gICAgICAgIC5tZXNzYWdlLWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7IC8vIFJlZHVjZWQgbWFyZ2luXG4gICAgICBcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7IC8vIFNsaWdodGx5IHNtYWxsZXIgZm9udFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgLm1lc3NhZ2UtdGltZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLm1lc3NhZ2UtcHJldmlldyB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7IC8vIFNsaWdodGx5IHNtYWxsZXIgZm9udFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC51bnJlYWQtYmFkZ2Uge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDZweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDE4cHg7IC8vIFNsaWdodGx5IHNtYWxsZXIgYmFkZ2VcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7IC8vIFNsaWdodGx5IHNtYWxsZXIgYXZhdGFyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBPcHRpb25hbDogQWRkIHN1YnRsZSBib3JkZXIgYmV0d2VlbiBpdGVtc1xuICAgICAgaW9uLWl0ZW0uY29udmVyc2F0aW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAgICAgICBcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgIH1cbiAgfVxuICAiXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_messages_messages_module_ts-es2015.js.map