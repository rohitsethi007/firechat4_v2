(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title (click)=\"viewUser(userId)\">{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" #content>\r\n  <div class=\"messages\" #contentArea>\r\n    <p class=\"center\" *ngIf=\"startIndex > 0\"><span tappable (click)=\"loadPreviousMessages()\">Load previous\r\n        messages</span></p>\r\n    <div *ngFor=\"let message of messagesToShow\">\r\n      <div *ngIf=\"isSender(message)\" class=\"chatbox right sender\">\r\n        <div *ngIf=\"message.type == 'text'\">\r\n          <p style=\"margin:0\">{{message.message}}</p>\r\n        </div>\r\n        <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\r\n        <div *ngIf=\"message.type == 'contact'\" [innerHtml]=\"message.message\"></div>\r\n        <div *ngIf=\"message.type == 'image'\">\r\n          <img tappable (click)=\"enlargeImage(message.message)\" src=\"{{message.message}}\" />\r\n        </div>\r\n        <div *ngIf=\"message.type == 'video'\">\r\n          <video controls width=\"100%\">\r\n            <source src=\"{{message.message}}\" type=\"video/mp4\">\r\n          </video>\r\n        </div>\r\n        <span>{{message.date | DateFormat}}</span>\r\n      </div>\r\n      <div *ngIf=\"!isSender(message)\" class=\"chatbox left\">\r\n        <div *ngIf=\"message.type == 'text'\">\r\n          <p style=\"margin:0\">{{message.message}}</p>\r\n        </div>\r\n        <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\r\n        <div *ngIf=\"message.type == 'contact'\" [innerHtml]=\"message.message\"></div>\r\n        <div *ngIf=\"message.type == 'image'\">\r\n          <img tappable (click)=\"enlargeImage(message.message)\" src=\"{{message.message}}\" />\r\n        </div>\r\n        <div *ngIf=\"message.type == 'video'\">\r\n          <video controls width=\"100%\">\r\n            <source src=\"{{message.message}}\" type=\"video/mp4\">\r\n          </video>\r\n        </div>\r\n        <span>{{message.date | DateFormat}}</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-item class=\"bottom_bar\">\r\n      <ion-textarea style=\"margin:0\" rows=\"0\" placeholder=\"Type your message\" [(ngModel)]=\"message\">\r\n      </ion-textarea>\r\n      <ion-buttons slot=\"end\" style=\"margin-left:4px;\">\r\n        <ion-button fill=\"clear\" (click)=\"attach()\">\r\n          <ion-icon name=\"attach\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"send('text')\" [disabled]=\"!message\">\r\n          send\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/message/message.module.ts":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "./src/app/message/message.page.ts");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");








const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]
    }
];
let MessagePageModule = class MessagePageModule {
};
MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
    })
], MessagePageModule);



/***/ }),

/***/ "./src/app/message/message.page.scss":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea {\n  font-size: 12px;\n  resize: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxtZXNzYWdlXFxtZXNzYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlL21lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRhcmVhe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcmVzaXplOiBib3RoO1xyXG59IiwiaW9uLXRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICByZXNpemU6IGJvdGg7XG59Il19 */");

/***/ }),

/***/ "./src/app/message/message.page.ts":
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _imagemodal_imagemodal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../imagemodal/imagemodal.page */ "./src/app/imagemodal/imagemodal.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");














let MessagePage = class MessagePage {
    // MessagePage
    // This is the page where the user can chat with a friend.
    constructor(
    // public navCtrl: NavController,
    // public navParams: NavParams,
    router, route, dataProvider, firestore, loadingProvider, alertCtrl, imageProvider, modalCtrl, camera, keyboard, actionSheet, contacts, geolocation) {
        this.router = router;
        this.route = route;
        this.dataProvider = dataProvider;
        this.firestore = firestore;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.keyboard = keyboard;
        this.actionSheet = actionSheet;
        this.contacts = contacts;
        this.geolocation = geolocation;
        this.startIndex = -1;
        // Set number of messages to show.
        this.numberOfMessages = 10;
    }
    ngOnInit() {
        this.scrollBottom();
    }
    ionViewDidEnter() {
        this.userId = this.route.snapshot.params.id;
        this.loggedInUserId = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        console.log(this.userId);
        // Get friend details.
        this.dataProvider.getUser(this.userId).snapshotChanges().subscribe((user) => {
            this.title = user.payload.data().name;
        });
        // Get conversationInfo with friend.
        // tslint:disable-next-line: max-line-length
        this.firestore.doc('/accounts/' + this.loggedInUserId + '/conversations/' + this.userId).snapshotChanges().subscribe((conversation) => {
            if (conversation.payload.exists()) {
                // User already have conversation with this friend, get conversation
                this.conversationId = conversation.payload.data().conversationId;
                // Get conversation
                this.dataProvider.getConversationMessages(this.conversationId).snapshotChanges().subscribe((messagesRes) => {
                    let messages = messagesRes.payload.data();
                    console.log(messages);
                    if (messages == null)
                        messages = [];
                    if (this.messages) {
                        // Just append newly added messages to the bottom of the view.
                        if (messages.length > this.messages.length) {
                            let message = messages[messages.length - 1];
                            this.dataProvider.getUser(message.sender).snapshotChanges().subscribe((user) => {
                                message.avatar = user.payload.data().img;
                            });
                            this.messages.push(message);
                            this.messagesToShow.push(message);
                        }
                    }
                    else {
                        // Get all messages, this will be used as reference object for messagesToShow.
                        this.messages = [];
                        messages.forEach((message) => {
                            this.dataProvider.getUser(message.sender).snapshotChanges().subscribe((user) => {
                                message.avatar = user.payload.data().img;
                            });
                            this.messages.push(message);
                        });
                        // Load messages in relation to numOfMessages.
                        if (this.startIndex == -1) {
                            // Get initial index for numberOfMessages to show.
                            if ((this.messages.length - this.numberOfMessages) > 0) {
                                this.startIndex = this.messages.length - this.numberOfMessages;
                            }
                            else {
                                this.startIndex = 0;
                            }
                        }
                        if (!this.messagesToShow) {
                            this.messagesToShow = [];
                        }
                        // Set messagesToShow
                        for (var i = this.startIndex; i < this.messages.length; i++) {
                            this.messagesToShow.push(this.messages[i]);
                        }
                        this.loadingProvider.hide();
                    }
                });
            }
        });
        // Update messages' date time elapsed every minute based on Moment.js.
        var that = this;
        if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
                if (that.messages) {
                    that.messages.forEach((message) => {
                        let date = message.date;
                        message.date = new Date(date);
                    });
                }
            }, 60000);
        }
        // this.scrollBottom();
    }
    // Load previous messages in relation to numberOfMessages.
    loadPreviousMessages() {
        var that = this;
        // Show loading.
        this.loadingProvider.show();
        setTimeout(function () {
            // Set startIndex to load more messages.
            if ((that.startIndex - that.numberOfMessages) > -1) {
                that.startIndex -= that.numberOfMessages;
            }
            else {
                that.startIndex = 0;
            }
            // Refresh our messages list.
            that.messages = null;
            that.messagesToShow = null;
            that.scrollTop();
            // Populate list again.
            that.ionViewDidEnter();
        }, 1000);
    }
    // Update messagesRead when user lefts this page.
    ionViewWillLeave() {
        this.setMessagesRead();
    }
    // Check if currentPage is active, then update user's messagesRead.
    setMessagesRead() {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/conversations/' + this.conversationId + '/messages').once('value', snap => {
            console.log(snap.val());
            if (snap.val() != null) {
                this.firestore.doc('/accounts/' + this.loggedInUserId + '/conversations/' + this.userId).update({
                    messagesRead: snap.val().length
                });
            }
        });
    }
    scrollBottom() {
        console.log("Calling Sb");
        setTimeout(() => {
            if (this.contentArea.scrollToBottom) {
                this.contentArea.scrollToBottom();
            }
        }, 500);
        this.setMessagesRead();
    }
    scrollTop() {
        console.log("Calling St");
        setTimeout(() => {
            if (this.contentArea.scrollToTop) {
                this.contentArea.scrollToTop();
            }
        }, 500);
    }
    // Check if the user is the sender of the message.
    isSender(message) {
        if (message.sender == this.loggedInUserId) {
            return true;
        }
        else {
            return false;
        }
    }
    // Send message, if there's no conversation yet, create a new conversation.
    send(type) {
        if (this.message) {
            // User entered a text on messagebox
            if (this.conversationId) {
                let messages = JSON.parse(JSON.stringify(this.messages));
                messages.push({
                    date: new Date().toString(),
                    sender: this.loggedInUserId,
                    type: type,
                    message: this.message
                });
                // Update conversation on database.
                this.dataProvider.getConversation(this.conversationId).update({
                    messages: messages
                });
                // Clear messagebox.
                this.message = '';
                this.scrollBottom();
            }
            else {
                console.log("else");
                // New Conversation with friend.
                var messages = [];
                messages.push({
                    date: new Date().toString(),
                    sender: this.loggedInUserId,
                    type: type,
                    message: this.message
                });
                var users = [];
                users.push(this.loggedInUserId);
                users.push(this.userId);
                // Add conversation.
                this.firestore.collection('conversations').add({
                    dateCreated: new Date().toString(),
                    messages: messages,
                    users: users
                }).then((success) => {
                    let conversationId = success.id;
                    this.message = '';
                    // Add conversation reference to the users.
                    this.firestore.doc('/accounts/' + this.loggedInUserId + '/conversations/' + this.userId).update({
                        conversationId: conversationId,
                        messagesRead: 1
                    });
                    this.firestore.doc('/accounts/' + this.userId + '/conversations/' + this.loggedInUserId).update({
                        conversationId: conversationId,
                        messagesRead: 0
                    });
                });
                this.scrollBottom();
            }
        }
    }
    viewUser(userId) {
        this.router.navigateByUrl('userinfo/' + userId);
    }
    attach() {
        this.actionSheet.create({
            header: 'Choose attachments',
            buttons: [{
                    text: 'Camera',
                    handler: () => {
                        this.imageProvider.uploadPhotoMessage(this.conversationId, this.camera.PictureSourceType.CAMERA).then((url) => {
                            this.message = url;
                            this.send("image");
                        });
                    }
                }, {
                    text: 'Photo Library',
                    handler: () => {
                        this.imageProvider.uploadPhotoMessage(this.conversationId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
                            this.message = url;
                            this.send("image");
                        });
                    }
                },
                {
                    text: 'Video',
                    handler: () => {
                        this.imageProvider.uploadVideoMessage(this.conversationId).then(url => {
                            this.message = url;
                            this.send("video");
                        });
                    }
                },
                {
                    text: 'Location',
                    handler: () => {
                        this.geolocation.getCurrentPosition({
                            timeout: 5000
                        }).then(res => {
                            let locationMessage = "Location:<br> lat:" + res.coords.latitude + "<br> lng:" + res.coords.longitude;
                            let mapUrl = "<a href='https://www.google.com/maps/search/" + res.coords.latitude + "," + res.coords.longitude + "'>View on Map</a>";
                            let confirm = this.alertCtrl.create({
                                header: 'Your Location',
                                message: locationMessage,
                                buttons: [{
                                        text: 'cancel',
                                        handler: () => {
                                            console.log("canceled");
                                        }
                                    }, {
                                        text: 'Share',
                                        handler: () => {
                                            this.message = locationMessage + "<br>" + mapUrl;
                                            this.send("location");
                                        }
                                    }]
                            }).then(r => r.present());
                        }, locationErr => {
                            console.log("Location Error" + JSON.stringify(locationErr));
                        });
                    }
                }, {
                    text: 'Contact',
                    handler: () => {
                        this.contacts.pickContact().then(data => {
                            let name;
                            if (data.displayName !== null)
                                name = data.displayName;
                            else
                                name = data.name.givenName + " " + data.name.familyName;
                            this.message = "<b>Name:</b> " + name + "<br><b>Mobile:</b> <a href='tel:" + data.phoneNumbers[0].value + "'>" + data.phoneNumbers[0].value + "</a>";
                            this.send("contact");
                        }, err => {
                            console.log(err);
                        });
                    }
                }, {
                    text: 'cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log("cancelled");
                    }
                }]
        }).then(r => r.present());
    }
    // Enlarge image messages.
    enlargeImage(img) {
        this.modalCtrl.create({
            component: _imagemodal_imagemodal_page__WEBPACK_IMPORTED_MODULE_12__["ImagemodalPage"],
            componentProps: {
                img: img
            }
        }).then(res => {
            res.present();
        });
        // let imageModal = this.modalCtrl.create(ImageModalPage, { img: img });
        // imageModal.present();
    }
};
MessagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__["Contacts"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"])
], MessagePage.prototype, "contentArea", void 0);
MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.page.scss */ "./src/app/message/message.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__["Contacts"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]])
], MessagePage);



/***/ })

}]);
//# sourceMappingURL=message-message-module-es2015.js.map