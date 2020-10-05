(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"],{

/***/ "6AQs":
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./messages.page.html */ "J2ao");
/* harmony import */ var _messages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.page.scss */ "fOj/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");









let MessagesPage = class MessagesPage {
    constructor(router, afAuth, firestore, loadingProvider, dataProvider) {
        this.router = router;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.loadingProvider = loadingProvider;
        this.dataProvider = dataProvider;
        this.searchFriend = '';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.loadingProvider.show();
        // Get info of conversations of current logged in user.
        this.dataProvider.getConversations().snapshotChanges().subscribe((conversationsInfoRes) => {
            let conversations = [];
            console.log('conversationsInfoRes', conversationsInfoRes);
            conversations = conversationsInfoRes.map(c => (Object.assign({ key: c.payload.doc.id }, c.payload.doc.data())));
            console.log('conversations:', conversations);
            if (conversations.length > 0) {
                conversations.forEach((conversation) => {
                    console.log('conversation', conversation);
                    if (conversation) {
                        // Get conversation partner info.
                        this.dataProvider.getUser(conversation.key).get().subscribe((user) => {
                            conversation.friend = user.data();
                            // Get conversation info.
                            this.dataProvider.getConversation(conversation.conversationId).snapshotChanges().subscribe((obj) => {
                                // Get last message of conversation.
                                console.log(obj.payload.data());
                                if (obj.payload.data() != null) {
                                    let lastMessage = obj.payload.data().messages[obj.payload.data().messages.length - 1];
                                    conversation.date = lastMessage.date;
                                    conversation.sender = lastMessage.sender;
                                    // Set unreadMessagesCount
                                    conversation.unreadMessagesCount = obj.payload.data().messages.length - conversation.messagesRead;
                                    console.log(obj.payload.data().messages.length + "-" + conversation.messagesRead);
                                    console.log(conversation.unreadMessagesCount);
                                    // Process last message depending on messageType.
                                    if (lastMessage.type == 'text') {
                                        if (lastMessage.sender == this.afAuth.auth.currentUser.uid) {
                                            conversation.message = 'You: ' + lastMessage.message;
                                        }
                                        else {
                                            conversation.message = lastMessage.message;
                                        }
                                    }
                                    else {
                                        if (lastMessage.sender == this.afAuth.auth.currentUser.uid) {
                                            conversation.message = 'You sent a photo message.';
                                        }
                                        else {
                                            conversation.message = 'has sent you a photo message.';
                                        }
                                    }
                                    // Add or update conversation.
                                    this.addOrUpdateConversation(conversation);
                                }
                            });
                        });
                    }
                });
                this.loadingProvider.hide();
            }
            else {
                this.conversations = [];
                this.loadingProvider.hide();
            }
        });
        // Update conversations' last active date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.conversations) {
                    that.conversations.forEach((conversation) => {
                        let date = conversation.date;
                        conversation.date = new Date(date);
                    });
                }
            }, 60000);
        }
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
};
MessagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
];
MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
], MessagesPage);



/***/ }),

/***/ "J2ao":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Messages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"empty-list\" *ngIf=\"conversations && conversations.length <= 0\">\r\n    <h1>\r\n      <ion-icon name=\"text\"></ion-icon>\r\n    </h1>\r\n    <p>No new conversation yet.</p>\r\n  </div>\r\n  <!-- Show conversations -->\r\n  <ion-list lines=\"none\" *ngIf=\"conversations && conversations.length > 0\">\r\n    <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\"\r\n      cancelButtonText=\"Done\"></ion-searchbar>\r\n    <div *ngFor=\"let conversation of conversations | conversationFilter:searchFriend\"> \r\n      <ion-item *ngIf=\"conversation.blocked != true\" (click)=\"message(conversation.key)\">\r\n\r\n        <ion-avatar slot=\"start\" *ngIf=\"conversation.friend\">\r\n          <img src=\"{{conversation.friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\r\n        </ion-avatar>\r\n        <div [ngClass]=hasUnreadMessages(conversation)>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2 *ngIf=\"conversation.friend\">{{conversation.friend.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>{{conversation.message}}</p>\r\n            </ion-text>\r\n          </ion-label>\r\n        </div>\r\n        <div slot=\"end\" style=\"display: flex;flex-direction: column;align-items: flex-end;\">\r\n          <ion-badge color=\"danger\" *ngIf=\"conversation.unreadMessagesCount > 0\">\r\n            {{conversation.unreadMessagesCount}}\r\n          </ion-badge>\r\n          <ion-text style=\"color: #777;font-size: 12px;\">{{conversation.date | DateFormat}}</ion-text>\r\n        </div>\r\n      </ion-item>\r\n    </div>\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ }),

/***/ "TdLt":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "6AQs");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "vxGH");








const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
    }
];
let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
        ]
    })
], MessagesPageModule);



/***/ }),

/***/ "fOj/":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=messages-messages-module-es2015.js.map