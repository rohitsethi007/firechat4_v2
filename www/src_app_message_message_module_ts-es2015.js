"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_message_message_module_ts"],{

/***/ 42770:
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePageModule": function() { return /* binding */ MessagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.page */ 18070);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.module */ 32218);








const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_0__.MessagePage
    }
];
let MessagePageModule = class MessagePageModule {
};
MessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_0__.MessagePage]
    })
], MessagePageModule);



/***/ }),

/***/ 18070:
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePage": function() { return /* binding */ MessagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./message.page.html */ 20243);
/* harmony import */ var _message_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.page.scss */ 50853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ 713);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 34483);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/image.service */ 54249);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ 1084);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 616);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 89131);
/* harmony import */ var _imagemodal_imagemodal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imagemodal/imagemodal.page */ 4576);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
















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
        this.loggedInUserId = firebase__WEBPACK_IMPORTED_MODULE_2__.default.auth().currentUser.uid;
        console.log(this.userId);
        // Get friend details.
        this.dataProvider.getUser(this.userId).snapshotChanges().subscribe((user) => {
            this.title = user.payload.data().name;
        });
        // Get conversationInfo with friend.
        // tslint:disable-next-line: max-line-length
        this.firestore.doc('/accounts/' + this.loggedInUserId + '/conversations/' + this.userId).snapshotChanges().subscribe((conversation) => {
            if (conversation.payload.data()) {
                // User already have conversation with this friend, get conversation
                this.conversationId = conversation.payload.data().conversationId;
                // Get conversation
                this.dataProvider.getConversationMessages(this.conversationId).snapshotChanges().subscribe((messagesRes) => {
                    let messages = messagesRes.payload.data().messages;
                    if (messages == null) {
                        messages = [];
                    }
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
                        if (this.startIndex === -1) {
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
                        for (let i = this.startIndex; i < this.messages.length; i++) {
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
        this.scrollBottom();
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
        if (this.conversationId) {
            // Get messages from Firestore conversation
            this.firestore.doc(`conversations/${this.conversationId}`)
                .get()
                .subscribe(doc => {
                var _a;
                if (doc.exists) {
                    const data = doc.data();
                    const messagesLength = ((_a = data.messages) === null || _a === void 0 ? void 0 : _a.length) || 0;
                    console.log('Total messages:', messagesLength);
                    // Update the messagesRead count in user's conversation reference
                    this.firestore.doc(`/accounts/${this.loggedInUserId}/conversations/${this.userId}`)
                        .update({
                        messagesRead: messagesLength
                    })
                        .then(() => {
                        console.log('Messages marked as read:', messagesLength);
                    })
                        .catch(error => {
                        console.error('Error updating messagesRead:', error);
                    });
                }
            });
        }
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
                    this.firestore.doc('/accounts/' + this.loggedInUserId + '/conversations/' + this.userId).set({
                        conversationId,
                        messagesRead: 1
                    });
                    this.firestore.doc('/accounts/' + this.userId + '/conversations/' + this.loggedInUserId).set({
                        conversationId,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const action = yield this.actionSheet.create({
                header: 'Choose attachments',
                backdropDismiss: true,
                mode: 'md',
                cssClass: 'post-options-action-sheet',
                buttons: [
                    {
                        text: 'Camera',
                        icon: 'camera-outline',
                        cssClass: 'actionicon',
                        handler: () => this.handlePhotoUpload(this.camera.PictureSourceType.CAMERA)
                    },
                    {
                        text: 'Photo Library',
                        icon: 'images-outline',
                        cssClass: 'actionicon',
                        handler: () => this.handlePhotoUpload(this.camera.PictureSourceType.PHOTOLIBRARY)
                    },
                    {
                        text: 'Video',
                        icon: 'videocam-outline',
                        cssClass: 'actionicon',
                        handler: () => this.handleVideoUpload()
                    },
                    {
                        text: 'Location',
                        icon: 'location-outline',
                        cssClass: 'actionicon',
                        handler: () => this.handleLocation()
                    },
                    {
                        text: 'Contact',
                        icon: 'person-outline',
                        cssClass: 'actionicon',
                        handler: () => this.handleContact()
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        cssClass: 'cancelAction',
                        role: 'cancel',
                        handler: () => console.log('Cancel clicked')
                    }
                ]
            });
            yield action.present();
        });
    }
    handlePhotoUpload(sourceType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const url = yield this.imageProvider.uploadPhotoMessage(this.conversationId, sourceType);
                this.message = url;
                yield this.send('image');
            }
            catch (error) {
                console.error('Error uploading photo:', error);
            }
        });
    }
    handleVideoUpload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const url = yield this.imageProvider.uploadVideoMessage(this.conversationId);
                this.message = url;
                yield this.send('video');
            }
            catch (error) {
                console.error('Error uploading video:', error);
            }
        });
    }
    handleLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const position = yield this.geolocation.getCurrentPosition({
                    timeout: 5000
                });
                const locationMessage = "Location:<br> lat:" + position.coords.latitude + "<br> lng:" + position.coords.longitude;
                const mapUrl = "<a href='https://www.google.com/maps/search/" + position.coords.latitude + "," + position.coords.longitude + "'>View on Map</a>";
                const alert = yield this.alertCtrl.create({
                    header: 'Share Location',
                    cssClass: 'location-alert',
                    message: `
          <div class="location-preview">
            <div class="location-icon">
              <ion-icon name="location-outline" color="primary"></ion-icon>
            </div>
            <div class="location-details">
              ${locationMessage}
            </div>
          </div>
        `,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'location-cancel-btn'
                        },
                        {
                            text: 'Share',
                            cssClass: 'location-share-btn',
                            handler: () => {
                                this.message = locationMessage + "<br>" + mapUrl;
                                this.send("location");
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            catch (error) {
                console.error('Error getting location:', error);
                const errorAlert = yield this.alertCtrl.create({
                    header: 'Location Error',
                    cssClass: 'error-alert',
                    message: 'Unable to get your location. Please check your GPS settings and try again.',
                    buttons: [{
                            text: 'OK',
                            role: 'cancel'
                        }]
                });
                yield errorAlert.present();
            }
        });
    }
    handleContact() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const contact = yield this.contacts.pickContact();
                // Transform the contact to match our interface
                const contactData = {
                    displayName: contact.displayName,
                    name: {
                        givenName: ((_a = contact.name) === null || _a === void 0 ? void 0 : _a.givenName) || '',
                        familyName: ((_b = contact.name) === null || _b === void 0 ? void 0 : _b.familyName) || ''
                    },
                    phoneNumbers: contact.phoneNumbers || []
                };
                const contactMessage = this.formatContactMessage(contactData);
                this.message = contactMessage;
                yield this.send('contact');
            }
            catch (error) {
                console.error('Error picking contact:', error);
            }
        });
    }
    formatLocationMessage(location) {
        const text = `Location:<br> lat:${location.latitude}<br> lng:${location.longitude}`;
        const mapUrl = `<a href='https://www.google.com/maps/search/${location.latitude},${location.longitude}'>View on Map</a>`;
        return {
            text,
            fullMessage: `${text}<br>${mapUrl}`
        };
    }
    formatContactMessage(contact) {
        var _a, _b, _c, _d, _e;
        // Add parentheses to properly group the operators
        const name = ((_a = contact.displayName) !== null && _a !== void 0 ? _a : (`${((_b = contact.name) === null || _b === void 0 ? void 0 : _b.givenName) || ''} ${((_c = contact.name) === null || _c === void 0 ? void 0 : _c.familyName) || ''}`.trim())) || 'Unknown';
        // Safely access phone number with additional null checks
        const phoneNumber = ((_e = (_d = contact.phoneNumbers) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.value) || '';
        return phoneNumber ?
            `<b>Name:</b> ${name}<br><b>Mobile:</b> <a href='tel:${phoneNumber}'>${phoneNumber}</a>` :
            `<b>Name:</b> ${name}`;
    }
    // Enlarge image messages.
    enlargeImage(img) {
        this.modalCtrl.create({
            component: _imagemodal_imagemodal_page__WEBPACK_IMPORTED_MODULE_10__.ImagemodalPage,
            componentProps: {
                img
            }
        }).then(res => {
            res.present();
        });
    }
    getUnreadUserMessagesCount() {
    }
};
MessagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestore },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_6__.ImageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__.Keyboard },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ActionSheetController },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_7__.Contacts },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.Geolocation }
];
MessagePage.propDecorators = {
    contentArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, null,] }]
};
MessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-message',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_message_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute,
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestore,
        _services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController,
        _services_image_service__WEBPACK_IMPORTED_MODULE_6__.ImageService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController,
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera,
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__.Keyboard,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ActionSheetController,
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_7__.Contacts,
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.Geolocation])
], MessagePage);



/***/ }),

/***/ 20243:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/message/message.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"chat-header\">\n      <ion-avatar>\n        <img [src]=\"userAvatar || './assets/images/default-dp.png'\" alt=\"User avatar\">\n      </ion-avatar>\n      <div class=\"user-details\">\n        <h2>{{title}}</h2>\n        <p *ngIf=\"isOnline\">Online</p>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [scrollEvents]=\"true\" #content class=\"chat-content\">\n  <div class=\"messages-container\" #contentArea>\n    <ion-button \n      *ngIf=\"startIndex > 0\" \n      fill=\"clear\" \n      class=\"load-more-btn\"\n      (click)=\"loadPreviousMessages()\">\n      Load previous messages\n    </ion-button>\n\n    <div class=\"message-wrapper\" *ngFor=\"let message of messagesToShow; trackBy: trackByFn\">\n      <div class=\"message-bubble\" [ngClass]=\"{'sender': isSender(message), 'receiver': !isSender(message)}\">\n        <!-- Text Message -->\n        <div *ngIf=\"message.type === 'text'\" class=\"message-text\">\n          {{message.message}}\n        </div>\n\n        <!-- Image Message -->\n        <div *ngIf=\"message.type === 'image'\" class=\"message-image-container\">\n          <img [src]=\"message.message\" \n               (click)=\"enlargeImage(message.message)\"\n               loading=\"lazy\"\n               alt=\"Shared image\">\n        </div>\n\n        <!-- Video Message -->\n        <div *ngIf=\"message.type === 'video'\" class=\"message-video-container\">\n          <video controls playsinline>\n            <source [src]=\"message.message\" type=\"video/mp4\">\n          </video>\n        </div>\n\n        <!-- Location Message -->\n        <div *ngIf=\"message.type === 'location'\" class=\"message-location\">\n          <div [innerHtml]=\"message.message\"></div>\n        </div>\n\n        <!-- Contact Message -->\n        <div *ngIf=\"message.type === 'contact'\" class=\"message-contact\">\n          <div [innerHtml]=\"message.message\"></div>\n        </div>\n\n        <div class=\"message-timestamp\">\n          {{message.date | DateFormat}}\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"input-container\">\n      <ion-textarea\n        #messageInput\n        [(ngModel)]=\"message\"\n        placeholder=\"Message\"\n        [autoGrow]=\"true\"\n        [rows]=\"1\"\n        class=\"message-input\">\n      </ion-textarea>\n\n      <div class=\"action-buttons\">\n        <ion-button class=\"attachment-btn\" fill=\"clear\" (click)=\"attach()\">\n          <ion-icon slot=\"icon-only\" name=\"attach-outline\"></ion-icon>\n        </ion-button>\n        <ion-button \n          class=\"send-btn\" \n          [disabled]=\"!message?.trim()\"\n          (click)=\"send('text')\">\n          <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ 50853:
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/***/ (function(module) {

module.exports = ":host {\n  --chat-background: #F4F7FA;\n  --sender-message-bg: #0084FF;\n  --receiver-message-bg: #E4E6EB;\n  --sender-message-color: #FFFFFF;\n  --receiver-message-color: #050505;\n  --timestamp-color: #65676B;\n  --input-bg: #F0F2F5;\n  --border-radius: 18px;\n}\n\nion-header ion-toolbar {\n  --background: #FFFFFF;\n  --border-width: 0;\n  --min-height: 60px;\n}\n\nion-header ion-toolbar .chat-header {\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n  grid-gap: 12px;\n  gap: 12px;\n}\n\nion-header ion-toolbar .chat-header ion-avatar {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n\nion-header ion-toolbar .chat-header .user-details h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #000000;\n}\n\nion-header ion-toolbar .chat-header .user-details p {\n  margin: 0;\n  font-size: 12px;\n  color: var(--timestamp-color);\n}\n\nion-footer ion-toolbar {\n  --border-width: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\nion-footer ion-toolbar .input-container {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  background: #FFFFFF;\n}\n\nion-footer ion-toolbar .input-container .message-input {\n  --background: var(--input-bg);\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  border-radius: 24px;\n  margin-right: 8px;\n  flex: 1;\n}\n\nion-footer ion-toolbar .input-container .action-buttons {\n  display: flex;\n  align-items: center;\n  grid-gap: 8px;\n  gap: 8px;\n}\n\nion-footer ion-toolbar .input-container .action-buttons .attachment-btn {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --color: #65676B;\n  height: 40px;\n  width: 40px;\n  margin: 0;\n}\n\nion-footer ion-toolbar .input-container .action-buttons .attachment-btn ion-icon {\n  font-size: 20px;\n}\n\nion-footer ion-toolbar .input-container .action-buttons .send-btn {\n  --padding-start: 0;\n  --padding-end: 0;\n  --border-radius: 50%;\n  --background: var(--sender-message-bg);\n  height: 40px;\n  width: 40px;\n  margin: 0;\n}\n\nion-footer ion-toolbar .input-container .action-buttons .send-btn ion-icon {\n  font-size: 18px;\n  margin: 0;\n}\n\nion-footer ion-toolbar .input-container .action-buttons .send-btn:disabled {\n  --background: #E4E6EB;\n}\n\n.chat-content {\n  --background: var(--chat-background);\n}\n\n.chat-content .messages-container {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  grid-gap: 8px;\n  gap: 8px;\n}\n\n.message-wrapper {\n  display: flex;\n  margin: 4px 0;\n}\n\n.message-wrapper .message-bubble {\n  max-width: 75%;\n  padding: 12px 16px;\n  border-radius: var(--border-radius);\n  position: relative;\n}\n\n.message-wrapper .message-bubble.sender {\n  background: var(--sender-message-bg);\n  color: var(--sender-message-color);\n  margin-left: auto;\n  border-bottom-right-radius: 4px;\n}\n\n.message-wrapper .message-bubble.sender .message-timestamp {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.message-wrapper .message-bubble.receiver {\n  background: var(--receiver-message-bg);\n  color: var(--receiver-message-color);\n  margin-right: auto;\n  border-bottom-left-radius: 4px;\n}\n\n.message-text {\n  font-size: 15px;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.message-image-container img {\n  max-width: 240px;\n  border-radius: 12px;\n  cursor: pointer;\n}\n\n.message-video-container video {\n  max-width: 240px;\n  border-radius: 12px;\n}\n\n.message-timestamp {\n  font-size: 11px;\n  margin-top: 4px;\n  color: var(--timestamp-color);\n  text-align: right;\n}\n\n.input-container {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  background: #FFFFFF;\n}\n\n.input-container .message-input {\n  --background: var(--input-bg);\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  border-radius: 24px;\n  margin-right: 8px;\n  flex: 1;\n}\n\n.input-container .action-buttons {\n  display: flex;\n  align-items: center;\n  grid-gap: 8px;\n  gap: 8px;\n}\n\n.input-container .action-buttons .attachment-btn {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --color: #65676B;\n}\n\n.input-container .action-buttons .send-btn {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --border-radius: 50%;\n  --background: var(--sender-message-bg);\n}\n\n.input-container .action-buttons .send-btn:disabled {\n  --background: #E4E6EB;\n}\n\n.load-more-btn {\n  align-self: center;\n  --color: var(--sender-message-bg);\n  font-size: 14px;\n}\n\n.custom-action-sheet {\n  --background: var(--ion-color-light);\n  border-radius: 20px;\n}\n\n.custom-action-sheet .action-sheet-group {\n  background: var(--ion-color-light);\n  border-radius: 20px;\n  overflow: hidden;\n}\n\n.custom-action-sheet .action-sheet-title {\n  color: var(--ion-color-dark);\n  font-size: 1.1em;\n  font-weight: 600;\n  padding: 16px;\n}\n\n.custom-action-sheet .action-sheet-button {\n  color: var(--ion-color-dark);\n  font-size: 1em;\n  min-height: 56px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n}\n\n.custom-action-sheet .action-sheet-button ion-icon {\n  margin-right: 32px;\n  font-size: 24px;\n  padding: 8px;\n  border: 2px solid #2dd36f;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(45, 211, 111, 0.1);\n  transition: all 0.3s ease;\n}\n\n.custom-action-sheet .action-sheet-button:hover {\n  background: var(--ion-color-light-shade);\n}\n\n.custom-action-sheet .action-sheet-button:hover ion-icon {\n  background: rgba(45, 211, 111, 0.2);\n  transform: scale(1.05);\n}\n\n.custom-action-sheet .action-sheet-button.action-sheet-cancel-btn {\n  color: var(--ion-color-danger);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  margin-top: 8px;\n}\n\n.custom-action-sheet .action-sheet-button.action-sheet-cancel-btn ion-icon {\n  border-color: var(--ion-color-danger);\n  background: rgba(235, 68, 90, 0.1);\n}\n\n.custom-action-sheet .action-sheet-button.action-sheet-cancel-btn:hover ion-icon {\n  background: rgba(235, 68, 90, 0.2);\n}\n\n.custom-action-sheet .action-sheet-camera-btn ion-icon {\n  color: var(--ion-color-primary);\n}\n\n.custom-action-sheet .action-sheet-gallery-btn ion-icon {\n  color: var(--ion-color-secondary);\n}\n\n.custom-action-sheet .action-sheet-video-btn ion-icon {\n  color: var(--ion-color-tertiary);\n}\n\n.custom-action-sheet .action-sheet-location-btn ion-icon {\n  color: var(--ion-color-success);\n}\n\n.custom-action-sheet .action-sheet-contact-btn ion-icon {\n  color: var(--ion-color-warning);\n}\n\n.location-alert .alert-wrapper {\n  --min-width: 320px;\n  --max-width: 90%;\n  border-radius: 16px;\n}\n\n.location-alert .alert-head {\n  padding: 16px;\n}\n\n.location-alert .alert-head h2 {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.location-alert .location-preview {\n  padding: 8px 0;\n  text-align: center;\n}\n\n.location-alert .location-preview .location-icon {\n  margin-bottom: 16px;\n}\n\n.location-alert .location-preview .location-icon ion-icon {\n  font-size: 32px;\n  --ionicon-stroke-width: 2px;\n}\n\n.location-alert .location-preview .location-details {\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-dark);\n}\n\n.location-alert .location-preview .location-details a {\n  color: var(--ion-color-primary);\n  text-decoration: none;\n}\n\n.location-alert .alert-button-group {\n  padding: 8px;\n  display: flex;\n  grid-gap: 8px;\n  gap: 8px;\n}\n\n.location-alert .alert-button-group button {\n  margin: 0;\n  border-radius: 8px;\n  text-transform: none;\n  flex: 1;\n}\n\n.location-alert .alert-button-group .location-cancel-btn {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-medium);\n  border: 1px solid var(--ion-color-medium);\n}\n\n.location-alert .alert-button-group .location-share-btn {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\n\n.error-alert .alert-wrapper {\n  border-radius: 16px;\n}\n\n.error-alert .alert-head {\n  padding: 16px;\n}\n\n.error-alert .alert-head h2 {\n  color: var(--ion-color-danger);\n}\n\n.error-alert .alert-message {\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUtFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFGTjs7QUFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUZSOztBQU1RO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFKVjs7QUFPUTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFMVjs7QUFjRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVhOOztBQWFNO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0FBWFI7O0FBY007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQVpSOztBQWNRO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBWlY7O0FBY1U7RUFDRSxlQUFBO0FBWlo7O0FBZ0JRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFkVjs7QUFnQlU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQWRaOztBQWlCVTtFQUNFLHFCQUFBO0FBZlo7O0FBd0JBO0VBQ0Usb0NBQUE7QUFyQkY7O0FBdUJFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBckJKOztBQTBCQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBdkJGOztBQXlCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUF2Qko7O0FBeUJJO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUF2Qk47O0FBeUJNO0VBQ0UsK0JBQUE7QUF2QlI7O0FBMkJJO0VBQ0Usc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUF6Qk47O0FBK0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQTVCRjs7QUFnQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQTdCSjs7QUFrQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBL0JKOztBQW1DQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQWhDRjs7QUFvQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBakNGOztBQW1DRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtBQWpDSjs7QUFvQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQWxDSjs7QUFvQ0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFsQ047O0FBcUNJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0NBQUE7QUFuQ047O0FBcUNNO0VBQ0UscUJBQUE7QUFuQ1I7O0FBMENBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUF2Q0Y7O0FBMENBO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtBQXZDRjs7QUF5Q0U7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUF2Q0o7O0FBMENFO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQXhDSjs7QUEyQ0U7RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBekNKOztBQTJDSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7QUF6Q047O0FBNENJO0VBQ0Usd0NBQUE7QUExQ047O0FBNENNO0VBQ0UsbUNBQUE7RUFDQSxzQkFBQTtBQTFDUjs7QUE4Q0k7RUFDRSw4QkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQTVDTjs7QUE4Q007RUFDRSxxQ0FBQTtFQUNBLGtDQUFBO0FBNUNSOztBQStDTTtFQUNFLGtDQUFBO0FBN0NSOztBQW1ERTtFQUNFLCtCQUFBO0FBakRKOztBQW9ERTtFQUNFLGlDQUFBO0FBbERKOztBQXFERTtFQUNFLGdDQUFBO0FBbkRKOztBQXNERTtFQUNFLCtCQUFBO0FBcERKOztBQXVERTtFQUNFLCtCQUFBO0FBckRKOztBQTBERTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXZESjs7QUEwREU7RUFDRSxhQUFBO0FBeERKOztBQXlESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXZETjs7QUEyREU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUF6REo7O0FBMkRJO0VBQ0UsbUJBQUE7QUF6RE47O0FBMkRNO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FBekRSOztBQTZESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBM0ROOztBQTZETTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7QUEzRFI7O0FBZ0VFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQTlESjs7QUFnRUk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLE9BQUE7QUE5RE47O0FBaUVJO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHlDQUFBO0FBL0ROOztBQWtFSTtFQUNFLHNDQUFBO0VBQ0EsY0FBQTtBQWhFTjs7QUFzRUU7RUFDRSxtQkFBQTtBQW5FSjs7QUFzRUU7RUFDRSxhQUFBO0FBcEVKOztBQXFFSTtFQUNFLDhCQUFBO0FBbkVOOztBQXVFRTtFQUNFLDRCQUFBO0FBckVKIiwiZmlsZSI6Im1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hhdCBWYXJpYWJsZXNcbjpob3N0IHtcbiAgLS1jaGF0LWJhY2tncm91bmQ6ICNGNEY3RkE7XG4gIC0tc2VuZGVyLW1lc3NhZ2UtYmc6ICMwMDg0RkY7XG4gIC0tcmVjZWl2ZXItbWVzc2FnZS1iZzogI0U0RTZFQjtcbiAgLS1zZW5kZXItbWVzc2FnZS1jb2xvcjogI0ZGRkZGRjtcbiAgLS1yZWNlaXZlci1tZXNzYWdlLWNvbG9yOiAjMDUwNTA1O1xuICAtLXRpbWVzdGFtcC1jb2xvcjogIzY1Njc2QjtcbiAgLS1pbnB1dC1iZzogI0YwRjJGNTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xufVxuXG4vLyBIZWFkZXIgU3R5bGVzXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAtLW1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgXG4gICAgLmNoYXQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBcbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnVzZXItZGV0YWlscyB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRpbWVzdGFtcC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gRm9vdGVyIFN0eWxlc1xuaW9uLWZvb3RlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgIFxuICAgICAgLm1lc3NhZ2UtaW5wdXQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBcbiAgICAgICAgLmF0dGFjaG1lbnQtYnRuIHtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICAgICAgLS1jb2xvcjogIzY1Njc2QjtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIFxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zZW5kLWJ0biB7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zZW5kZXItbWVzc2FnZS1iZyk7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRTRFNkVCO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDb250ZW50IFN0eWxlc1xuLmNoYXQtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY2hhdC1iYWNrZ3JvdW5kKTtcbiAgXG4gIC5tZXNzYWdlcy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xuICB9XG59XG5cbi8vIE1lc3NhZ2UgU3R5bGVzXG4ubWVzc2FnZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA0cHggMDtcbiAgXG4gIC5tZXNzYWdlLWJ1YmJsZSB7XG4gICAgbWF4LXdpZHRoOiA3NSU7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICAmLnNlbmRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZW5kZXItbWVzc2FnZS1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tc2VuZGVyLW1lc3NhZ2UtY29sb3IpO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgXG4gICAgICAubWVzc2FnZS10aW1lc3RhbXAge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmLnJlY2VpdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJlY2VpdmVyLW1lc3NhZ2UtYmcpO1xuICAgICAgY29sb3I6IHZhcigtLXJlY2VpdmVyLW1lc3NhZ2UtY29sb3IpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZXNzYWdlIENvbnRlbnQgU3R5bGVzXG4ubWVzc2FnZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5tZXNzYWdlLWltYWdlLWNvbnRhaW5lciB7XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4ubWVzc2FnZS12aWRlby1jb250YWluZXIge1xuICB2aWRlbyB7XG4gICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG59XG5cbi5tZXNzYWdlLXRpbWVzdGFtcCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBjb2xvcjogdmFyKC0tdGltZXN0YW1wLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8vIElucHV0IEFyZWEgU3R5bGVzXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIFxuICAubWVzc2FnZS1pbnB1dCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pbnB1dC1iZyk7XG4gICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIFxuICAgIC5hdHRhY2htZW50LWJ0biB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgIC0tY29sb3I6ICM2NTY3NkI7XG4gICAgfVxuICAgIFxuICAgIC5zZW5kLWJ0biB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zZW5kZXItbWVzc2FnZS1iZyk7XG4gICAgICBcbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNFNEU2RUI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExvYWQgTW9yZSBCdXR0b25cbi5sb2FkLW1vcmUtYnRuIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAtLWNvbG9yOiB2YXIoLS1zZW5kZXItbWVzc2FnZS1iZyk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmN1c3RvbS1hY3Rpb24tc2hlZXQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIFxuICAuYWN0aW9uLXNoZWV0LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5hY3Rpb24tc2hlZXQtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuYWN0aW9uLXNoZWV0LWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMmRkMzZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg0NSwgMjExLCAxMTEsIDAuMSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCAyMTEsIDExMSwgMC4yKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGlvbi1zaGVldC1jYW5jZWwtYnRuIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzUsIDY4LCA5MCwgMC4xKTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciBpb24taWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM1LCA2OCwgOTAsIDAuMik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VzdG9tIGljb24gY29sb3JzIHdpdGggZ3JlZW4gb3V0bGluZSBtYWludGFpbmVkXG4gIC5hY3Rpb24tc2hlZXQtY2FtZXJhLWJ0biBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIC5hY3Rpb24tc2hlZXQtZ2FsbGVyeS1idG4gaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgfVxuXG4gIC5hY3Rpb24tc2hlZXQtdmlkZW8tYnRuIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgfVxuXG4gIC5hY3Rpb24tc2hlZXQtbG9jYXRpb24tYnRuIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICB9XG5cbiAgLmFjdGlvbi1zaGVldC1jb250YWN0LWJ0biBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgfVxufVxuXG4ubG9jYXRpb24tYWxlcnQge1xuICAuYWxlcnQtd3JhcHBlciB7XG4gICAgLS1taW4td2lkdGg6IDMyMHB4O1xuICAgIC0tbWF4LXdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuXG4gIC5hbGVydC1oZWFkIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cbiAgLmxvY2F0aW9uLXByZXZpZXcge1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5sb2NhdGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxvY2F0aW9uLWRldGFpbHMge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFsZXJ0LWJ1dHRvbi1ncm91cCB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5sb2NhdGlvbi1jYW5jZWwtYnRuIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuXG4gICAgLmxvY2F0aW9uLXNoYXJlLWJ0biB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4uZXJyb3ItYWxlcnQge1xuICAuYWxlcnQtd3JhcHBlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuXG4gIC5hbGVydC1oZWFkIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGgyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gIH1cblxuICAuYWxlcnQtbWVzc2FnZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgfVxufVxuXG5cblxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_message_message_module_ts-es2015.js.map