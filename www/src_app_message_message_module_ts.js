(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_message_message_module_ts"],{

/***/ 82471:
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagePageModule: () => (/* binding */ MessagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.page */ 12512);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.module */ 53952);








const routes = [{
  path: '',
  component: _message_page__WEBPACK_IMPORTED_MODULE_0__.MessagePage
}];
let MessagePageModule = class MessagePageModule {};
MessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  declarations: [_message_page__WEBPACK_IMPORTED_MODULE_0__.MessagePage]
})], MessagePageModule);


/***/ }),

/***/ 12512:
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagePage: () => (/* binding */ MessagePage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _message_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.page.html?ngResource */ 86060);
/* harmony import */ var _message_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.page.scss?ngResource */ 27160);
/* harmony import */ var _message_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_message_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/image.service */ 62499);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/camera */ 54982);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/geolocation */ 78321);
/* harmony import */ var _imagemodal_imagemodal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imagemodal/imagemodal.page */ 39814);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/compat/app */ 3602);
















let MessagePage = class MessagePage {
  // MessagePage
  // This is the page where the user can chat with a friend.
  constructor(
  // public navCtrl: NavController,
  // public navParams: NavParams,
  router, route, dataProvider, firestore, loadingProvider, alertCtrl, imageProvider, modalCtrl, actionSheet, geolocation, afAuth) {
    this.router = router;
    this.route = route;
    this.dataProvider = dataProvider;
    this.firestore = firestore;
    this.loadingProvider = loadingProvider;
    this.alertCtrl = alertCtrl;
    this.imageProvider = imageProvider;
    this.modalCtrl = modalCtrl;
    this.actionSheet = actionSheet;
    this.geolocation = geolocation;
    this.afAuth = afAuth;
    this.startIndex = -1;
    // Set number of messages to show.
    this.numberOfMessages = 10;
  }
  ngOnInit() {
    this.scrollBottom();
  }
  ionViewDidEnter() {
    this.userId = this.route.snapshot.params.id;
    this.loggedInUserId = firebase_compat_app__WEBPACK_IMPORTED_MODULE_9__["default"].auth().currentUser.uid;
    console.log(this.userId);
    // Get friend details.
    this.dataProvider.getUser(this.userId).snapshotChanges().subscribe(user => {
      this.title = user.payload.data().name;
    });
    // Get conversationInfo with friend.
    // tslint:disable-next-line: max-line-length
    this.firestore.doc('/accounts/' + this.loggedInUserId + '/conversations/' + this.userId).snapshotChanges().subscribe(conversation => {
      if (conversation.payload.data()) {
        // User already have conversation with this friend, get conversation
        this.conversationId = conversation.payload.data().conversationId;
        // Get conversation
        this.dataProvider.getConversationMessages(this.conversationId).snapshotChanges().subscribe(messagesRes => {
          let messages = messagesRes.payload.data().messages;
          if (messages == null) {
            messages = [];
          }
          if (this.messages) {
            // Just append newly added messages to the bottom of the view.
            if (messages.length > this.messages.length) {
              let message = messages[messages.length - 1];
              this.dataProvider.getUser(message.sender).snapshotChanges().subscribe(user => {
                message.avatar = user.payload.data().img;
              });
              this.messages.push(message);
              this.messagesToShow.push(message);
            }
          } else {
            // Get all messages, this will be used as reference object for messagesToShow.
            this.messages = [];
            messages.forEach(message => {
              this.dataProvider.getUser(message.sender).snapshotChanges().subscribe(user => {
                message.avatar = user.payload.data().img;
              });
              this.messages.push(message);
            });
            // Load messages in relation to numOfMessages.
            if (this.startIndex === -1) {
              // Get initial index for numberOfMessages to show.
              if (this.messages.length - this.numberOfMessages > 0) {
                this.startIndex = this.messages.length - this.numberOfMessages;
              } else {
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
          that.messages.forEach(message => {
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
      if (that.startIndex - that.numberOfMessages > -1) {
        that.startIndex -= that.numberOfMessages;
      } else {
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
      this.firestore.doc(`conversations/${this.conversationId}`).get().subscribe(doc => {
        if (doc.exists) {
          const data = doc.data();
          const messagesLength = data.messages?.length || 0;
          console.log('Total messages:', messagesLength);
          // Update the messagesRead count in user's conversation reference
          this.firestore.doc(`/accounts/${this.loggedInUserId}/conversations/${this.userId}`).update({
            messagesRead: messagesLength
          }).then(() => {
            console.log('Messages marked as read:', messagesLength);
          }).catch(error => {
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
    } else {
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
      } else {
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
        }).then(success => {
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
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const action = yield _this.actionSheet.create({
        header: 'Choose attachments',
        backdropDismiss: true,
        mode: 'md',
        cssClass: 'post-options-action-sheet',
        buttons: [{
          text: 'Camera',
          icon: 'camera-outline',
          cssClass: 'actionicon',
          handler: () => _this.handlePhotoUpload(_capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraSource.Camera)
        }, {
          text: 'Photo Library',
          icon: 'images-outline',
          cssClass: 'actionicon',
          handler: () => _this.handlePhotoUpload(_capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraSource.Photos)
        }, {
          text: 'Video',
          icon: 'videocam-outline',
          cssClass: 'actionicon',
          handler: () => _this.handleVideoUpload()
        }, {
          text: 'Location',
          icon: 'location-outline',
          cssClass: 'actionicon',
          handler: () => _this.handleLocation()
        },
        // {
        //   text: 'Contact',
        //   icon: 'person-outline',
        //   cssClass: 'actionicon',
        //   handler: () => this.handleContact()
        // },
        {
          text: 'Cancel',
          icon: 'close',
          cssClass: 'cancelAction',
          role: 'cancel',
          handler: () => console.log('Cancel clicked')
        }]
      });
      yield action.present();
    })();
  }
  handlePhotoUpload(sourceType) {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const url = yield _this2.imageProvider.uploadPhotoMessage(_this2.conversationId, sourceType);
        _this2.message = url;
        yield _this2.send('image');
      } catch (error) {
        console.error('Error uploading photo:', error);
      }
    })();
  }
  handleVideoUpload() {
    var _this3 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const url = yield _this3.imageProvider.uploadVideoMessage(_this3.conversationId);
        _this3.message = url;
        yield _this3.send('video');
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    })();
  }
  handleLocation() {
    var _this4 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check location permissions first
        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.checkPermissions();
        if (permissionStatus.location === 'denied') {
          const request = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.requestPermissions();
          if (request.location === 'denied') {
            yield _this4.showErrorAlert('Location permission is required to share your location.');
            return;
          }
        }
        // Show loading if you have a loading provider
        if (_this4.loadingProvider) {
          yield _this4.loadingProvider.show();
        }
        // Get current position
        const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 5000
        });
        // Hide loading
        if (_this4.loadingProvider) {
          yield _this4.loadingProvider.hide();
        }
        // Create location message using template literals
        const locationMessage = `Location:<br> lat:${position.coords.latitude}<br> lng:${position.coords.longitude}`;
        const mapUrl = `<a href='https://www.google.com/maps/search/${position.coords.latitude},${position.coords.longitude}'>View on Map</a>`;
        // Create and show confirmation alert
        const alert = yield _this4.alertCtrl.create({
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
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'location-cancel-btn'
          }, {
            text: 'Share',
            cssClass: 'location-share-btn',
            handler: function () {
              var _ref = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                try {
                  _this4.message = `${locationMessage}<br>${mapUrl}`;
                  yield _this4.send("location");
                } catch (error) {
                  console.error('Error sending location message:', error);
                  yield _this4.showErrorAlert('Failed to send location message.');
                }
              });
              return function handler() {
                return _ref.apply(this, arguments);
              };
            }()
          }]
        });
        yield alert.present();
      } catch (error) {
        console.error('Error getting location:', error);
        // Hide loading if it was shown
        if (_this4.loadingProvider) {
          yield _this4.loadingProvider.hide();
        }
        let errorMessage = 'Unable to get your location. Please check your GPS settings and try again.';
        if (error.message.includes('timeout')) {
          errorMessage = 'Location request timed out. Please try again.';
        } else if (error.message.includes('denied')) {
          errorMessage = 'Location permission is required to share your location.';
        }
        yield _this4.showErrorAlert(errorMessage);
      }
    })();
  }
  // Helper method for showing error alerts
  showErrorAlert(message) {
    var _this5 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const errorAlert = yield _this5.alertCtrl.create({
        header: 'Location Error',
        cssClass: 'error-alert',
        message: message,
        buttons: [{
          text: 'OK',
          role: 'cancel'
        }]
      });
      yield errorAlert.present();
    })();
  }
  // private async handleContact(): Promise<void> {
  //   try {
  //     const contact = await this.contacts.pickContact();
  //     // Transform the contact to match our interface
  //     const contactData: ContactData = {
  //       displayName: contact.displayName,
  //       name: {
  //         givenName: contact.name?.givenName || '',
  //         familyName: contact.name?.familyName || ''
  //       },
  //       phoneNumbers: contact.phoneNumbers || []
  //     };
  //     const contactMessage = this.formatContactMessage(contactData);
  //     this.message = contactMessage;
  //     await this.send('contact');
  //   } catch (error) {
  //     console.error('Error picking contact:', error);
  //   }
  // }
  formatLocationMessage(location) {
    const text = `Location:<br> lat:${location.latitude}<br> lng:${location.longitude}`;
    const mapUrl = `<a href='https://www.google.com/maps/search/${location.latitude},${location.longitude}'>View on Map</a>`;
    return {
      text,
      fullMessage: `${text}<br>${mapUrl}`
    };
  }
  formatContactMessage(contact) {
    // Add parentheses to properly group the operators
    const name = (contact.displayName ?? `${contact.name?.givenName || ''} ${contact.name?.familyName || ''}`.trim()) || 'Unknown';
    // Safely access phone number with additional null checks
    const phoneNumber = contact.phoneNumbers?.[0]?.value || '';
    return phoneNumber ? `<b>Name:</b> ${name}<br><b>Mobile:</b> <a href='tel:${phoneNumber}'>${phoneNumber}</a>` : `<b>Name:</b> ${name}`;
  }
  // Enlarge image messages.
  enlargeImage(img) {
    this.modalCtrl.create({
      component: _imagemodal_imagemodal_page__WEBPACK_IMPORTED_MODULE_8__.ImagemodalPage,
      componentProps: {
        img
      }
    }).then(res => {
      res.present();
    });
  }
  getUnreadUserMessagesCount() {}
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
  }, {
    type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__.ImageService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController
  }, {
    type: _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_13__.AngularFireAuth
  }];
  static #_2 = this.propDecorators = {
    contentArea: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, null]
    }]
  };
};
MessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-message',
  template: _message_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_message_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MessagePage);


/***/ }),

/***/ 68735:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 78321:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geolocation: () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 14070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 68735);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 48659)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 27160:
/*!******************************************************!*\
  !*** ./src/app/message/message.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --chat-background: #F4F7FA;
  --sender-message-bg: #0084FF;
  --receiver-message-bg: #E4E6EB;
  --sender-message-color: #FFFFFF;
  --receiver-message-color: #050505;
  --timestamp-color: #65676B;
  --input-bg: #F0F2F5;
  --border-radius: 18px;
}

ion-header ion-toolbar {
  --background: #FFFFFF;
  --border-width: 0;
  --min-height: 60px;
}
ion-header ion-toolbar .chat-header {
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 12px;
}
ion-header ion-toolbar .chat-header ion-avatar {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}
ion-header ion-toolbar .chat-header .user-details h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
}
ion-header ion-toolbar .chat-header .user-details p {
  margin: 0;
  font-size: 12px;
  color: var(--timestamp-color);
}

ion-footer ion-toolbar {
  --border-width: 0;
  --padding-top: 0;
  --padding-bottom: 0;
}
ion-footer ion-toolbar .input-container {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #FFFFFF;
}
ion-footer ion-toolbar .input-container .message-input {
  --background: var(--input-bg);
  --padding-top: 8px;
  --padding-bottom: 8px;
  --padding-start: 16px;
  --padding-end: 16px;
  border-radius: 24px;
  margin-right: 8px;
  flex: 1;
}
ion-footer ion-toolbar .input-container .action-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}
ion-footer ion-toolbar .input-container .action-buttons .attachment-btn {
  --padding-start: 8px;
  --padding-end: 8px;
  --color: #65676B;
  height: 40px;
  width: 40px;
  margin: 0;
}
ion-footer ion-toolbar .input-container .action-buttons .attachment-btn ion-icon {
  font-size: 20px;
}
ion-footer ion-toolbar .input-container .action-buttons .send-btn {
  --padding-start: 0;
  --padding-end: 0;
  --border-radius: 50%;
  --background: var(--sender-message-bg);
  height: 40px;
  width: 40px;
  margin: 0;
}
ion-footer ion-toolbar .input-container .action-buttons .send-btn ion-icon {
  font-size: 18px;
  margin: 0;
}
ion-footer ion-toolbar .input-container .action-buttons .send-btn:disabled {
  --background: #E4E6EB;
}

.chat-content {
  --background: var(--chat-background);
}
.chat-content .messages-container {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.message-wrapper {
  display: flex;
  margin: 4px 0;
}
.message-wrapper .message-bubble {
  max-width: 75%;
  padding: 12px 16px;
  border-radius: var(--border-radius);
  position: relative;
}
.message-wrapper .message-bubble.sender {
  background: var(--sender-message-bg);
  color: var(--sender-message-color);
  margin-left: auto;
  border-bottom-right-radius: 4px;
}
.message-wrapper .message-bubble.sender .message-timestamp {
  color: rgba(255, 255, 255, 0.7);
}
.message-wrapper .message-bubble.receiver {
  background: var(--receiver-message-bg);
  color: var(--receiver-message-color);
  margin-right: auto;
  border-bottom-left-radius: 4px;
}

.message-text {
  font-size: 15px;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
}

.message-image-container img {
  max-width: 240px;
  border-radius: 12px;
  cursor: pointer;
}

.message-video-container video {
  max-width: 240px;
  border-radius: 12px;
}

.message-timestamp {
  font-size: 11px;
  margin-top: 4px;
  color: var(--timestamp-color);
  text-align: right;
}

.input-container {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #FFFFFF;
}
.input-container .message-input {
  --background: var(--input-bg);
  --padding-top: 8px;
  --padding-bottom: 8px;
  --padding-start: 16px;
  --padding-end: 16px;
  border-radius: 24px;
  margin-right: 8px;
  flex: 1;
}
.input-container .action-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}
.input-container .action-buttons .attachment-btn {
  --padding-start: 8px;
  --padding-end: 8px;
  --color: #65676B;
}
.input-container .action-buttons .send-btn {
  --padding-start: 8px;
  --padding-end: 8px;
  --border-radius: 50%;
  --background: var(--sender-message-bg);
}
.input-container .action-buttons .send-btn:disabled {
  --background: #E4E6EB;
}

.load-more-btn {
  align-self: center;
  --color: var(--sender-message-bg);
  font-size: 14px;
}

.custom-action-sheet {
  --background: var(--ion-color-light);
  border-radius: 20px;
}
.custom-action-sheet .action-sheet-group {
  background: var(--ion-color-light);
  border-radius: 20px;
  overflow: hidden;
}
.custom-action-sheet .action-sheet-title {
  color: var(--ion-color-dark);
  font-size: 1.1em;
  font-weight: 600;
  padding: 16px;
}
.custom-action-sheet .action-sheet-button {
  color: var(--ion-color-dark);
  font-size: 1em;
  min-height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.custom-action-sheet .action-sheet-button ion-icon {
  margin-right: 32px;
  font-size: 24px;
  padding: 8px;
  border: 2px solid #2dd36f;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(45, 211, 111, 0.1);
  transition: all 0.3s ease;
}
.custom-action-sheet .action-sheet-button:hover {
  background: var(--ion-color-light-shade);
}
.custom-action-sheet .action-sheet-button:hover ion-icon {
  background: rgba(45, 211, 111, 0.2);
  transform: scale(1.05);
}
.custom-action-sheet .action-sheet-button.action-sheet-cancel-btn {
  color: var(--ion-color-danger);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 8px;
}
.custom-action-sheet .action-sheet-button.action-sheet-cancel-btn ion-icon {
  border-color: var(--ion-color-danger);
  background: rgba(235, 68, 90, 0.1);
}
.custom-action-sheet .action-sheet-button.action-sheet-cancel-btn:hover ion-icon {
  background: rgba(235, 68, 90, 0.2);
}
.custom-action-sheet .action-sheet-camera-btn ion-icon {
  color: var(--ion-color-primary);
}
.custom-action-sheet .action-sheet-gallery-btn ion-icon {
  color: var(--ion-color-secondary);
}
.custom-action-sheet .action-sheet-video-btn ion-icon {
  color: var(--ion-color-tertiary);
}
.custom-action-sheet .action-sheet-location-btn ion-icon {
  color: var(--ion-color-success);
}
.custom-action-sheet .action-sheet-contact-btn ion-icon {
  color: var(--ion-color-warning);
}

.location-alert .alert-wrapper {
  --min-width: 320px;
  --max-width: 90%;
  border-radius: 16px;
}
.location-alert .alert-head {
  padding: 16px;
}
.location-alert .alert-head h2 {
  font-size: 18px;
  font-weight: 600;
}
.location-alert .location-preview {
  padding: 8px 0;
  text-align: center;
}
.location-alert .location-preview .location-icon {
  margin-bottom: 16px;
}
.location-alert .location-preview .location-icon ion-icon {
  font-size: 32px;
  --ionicon-stroke-width: 2px;
}
.location-alert .location-preview .location-details {
  font-size: 14px;
  line-height: 1.5;
  color: var(--ion-color-dark);
}
.location-alert .location-preview .location-details a {
  color: var(--ion-color-primary);
  text-decoration: none;
}
.location-alert .alert-button-group {
  padding: 8px;
  display: flex;
  gap: 8px;
}
.location-alert .alert-button-group button {
  margin: 0;
  border-radius: 8px;
  text-transform: none;
  flex: 1;
}
.location-alert .alert-button-group .location-cancel-btn {
  --background: var(--ion-color-light);
  --color: var(--ion-color-medium);
  border: 1px solid var(--ion-color-medium);
}
.location-alert .alert-button-group .location-share-btn {
  --background: var(--ion-color-primary);
  --color: white;
}

.error-alert .alert-wrapper {
  border-radius: 16px;
}
.error-alert .alert-head {
  padding: 16px;
}
.error-alert .alert-head h2 {
  color: var(--ion-color-danger);
}
.error-alert .alert-message {
  color: var(--ion-color-dark);
}`, "",{"version":3,"sources":["webpack://./src/app/message/message.page.scss"],"names":[],"mappings":"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","sourcesContent":["// Chat Variables\n:host {\n  --chat-background: #F4F7FA;\n  --sender-message-bg: #0084FF;\n  --receiver-message-bg: #E4E6EB;\n  --sender-message-color: #FFFFFF;\n  --receiver-message-color: #050505;\n  --timestamp-color: #65676B;\n  --input-bg: #F0F2F5;\n  --border-radius: 18px;\n}\n\n// Header Styles\nion-header {\n  ion-toolbar {\n    --background: #FFFFFF;\n    --border-width: 0;\n    --min-height: 60px;\n    \n    .chat-header {\n      display: flex;\n      align-items: center;\n      padding: 0 8px;\n      gap: 12px;\n      \n      ion-avatar {\n        width: 40px;\n        height: 40px;\n        flex-shrink: 0;\n      }\n      \n      .user-details {\n        h2 {\n          margin: 0;\n          font-size: 16px;\n          font-weight: 600;\n          color: #000000;\n        }\n        \n        p {\n          margin: 0;\n          font-size: 12px;\n          color: var(--timestamp-color);\n        }\n      }\n    }\n  }\n}\n\n// Footer Styles\nion-footer {\n  ion-toolbar {\n    --border-width: 0;\n    --padding-top: 0;\n    --padding-bottom: 0;\n    \n    .input-container {\n      display: flex;\n      align-items: center;\n      padding: 8px 12px;\n      background: #FFFFFF;\n      \n      .message-input {\n        --background: var(--input-bg);\n        --padding-top: 8px;\n        --padding-bottom: 8px;\n        --padding-start: 16px;\n        --padding-end: 16px;\n        border-radius: 24px;\n        margin-right: 8px;\n        flex: 1;\n      }\n      \n      .action-buttons {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        \n        .attachment-btn {\n          --padding-start: 8px;\n          --padding-end: 8px;\n          --color: #65676B;\n          height: 40px;\n          width: 40px;\n          margin: 0;\n          \n          ion-icon {\n            font-size: 20px;\n          }\n        }\n        \n        .send-btn {\n          --padding-start: 0;\n          --padding-end: 0;\n          --border-radius: 50%;\n          --background: var(--sender-message-bg);\n          height: 40px;\n          width: 40px;\n          margin: 0;\n          \n          ion-icon {\n            font-size: 18px;\n            margin: 0;\n          }\n          \n          &:disabled {\n            --background: #E4E6EB;\n          }\n        }\n      }\n    }\n  }\n}\n\n// Content Styles\n.chat-content {\n  --background: var(--chat-background);\n  \n  .messages-container {\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n\n// Message Styles\n.message-wrapper {\n  display: flex;\n  margin: 4px 0;\n  \n  .message-bubble {\n    max-width: 75%;\n    padding: 12px 16px;\n    border-radius: var(--border-radius);\n    position: relative;\n    \n    &.sender {\n      background: var(--sender-message-bg);\n      color: var(--sender-message-color);\n      margin-left: auto;\n      border-bottom-right-radius: 4px;\n      \n      .message-timestamp {\n        color: rgba(255, 255, 255, 0.7);\n      }\n    }\n    \n    &.receiver {\n      background: var(--receiver-message-bg);\n      color: var(--receiver-message-color);\n      margin-right: auto;\n      border-bottom-left-radius: 4px;\n    }\n  }\n}\n\n// Message Content Styles\n.message-text {\n  font-size: 15px;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.message-image-container {\n  img {\n    max-width: 240px;\n    border-radius: 12px;\n    cursor: pointer;\n  }\n}\n\n.message-video-container {\n  video {\n    max-width: 240px;\n    border-radius: 12px;\n  }\n}\n\n.message-timestamp {\n  font-size: 11px;\n  margin-top: 4px;\n  color: var(--timestamp-color);\n  text-align: right;\n}\n\n// Input Area Styles\n.input-container {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  background: #FFFFFF;\n  \n  .message-input {\n    --background: var(--input-bg);\n    --padding-top: 8px;\n    --padding-bottom: 8px;\n    --padding-start: 16px;\n    --padding-end: 16px;\n    border-radius: 24px;\n    margin-right: 8px;\n    flex: 1;\n  }\n  \n  .action-buttons {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    \n    .attachment-btn {\n      --padding-start: 8px;\n      --padding-end: 8px;\n      --color: #65676B;\n    }\n    \n    .send-btn {\n      --padding-start: 8px;\n      --padding-end: 8px;\n      --border-radius: 50%;\n      --background: var(--sender-message-bg);\n      \n      &:disabled {\n        --background: #E4E6EB;\n      }\n    }\n  }\n}\n\n// Load More Button\n.load-more-btn {\n  align-self: center;\n  --color: var(--sender-message-bg);\n  font-size: 14px;\n}\n\n.custom-action-sheet {\n  --background: var(--ion-color-light);\n  border-radius: 20px;\n  \n  .action-sheet-group {\n    background: var(--ion-color-light);\n    border-radius: 20px;\n    overflow: hidden;\n  }\n\n  .action-sheet-title {\n    color: var(--ion-color-dark);\n    font-size: 1.1em;\n    font-weight: 600;\n    padding: 16px;\n  }\n\n  .action-sheet-button {\n    color: var(--ion-color-dark);\n    font-size: 1em;\n    min-height: 56px;\n    padding: 0 16px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    position: relative;\n    \n    ion-icon {\n      margin-right: 32px;\n      font-size: 24px;\n      padding: 8px;\n      border: 2px solid #2dd36f;\n      border-radius: 50%;\n      width: 40px;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: rgba(45, 211, 111, 0.1);\n      transition: all 0.3s ease;\n    }\n\n    &:hover {\n      background: var(--ion-color-light-shade);\n      \n      ion-icon {\n        background: rgba(45, 211, 111, 0.2);\n        transform: scale(1.05);\n      }\n    }\n\n    &.action-sheet-cancel-btn {\n      color: var(--ion-color-danger);\n      border-top: 1px solid rgba(0, 0, 0, 0.1);\n      margin-top: 8px;\n      \n      ion-icon {\n        border-color: var(--ion-color-danger);\n        background: rgba(235, 68, 90, 0.1);\n      }\n\n      &:hover ion-icon {\n        background: rgba(235, 68, 90, 0.2);\n      }\n    }\n  }\n\n  // Custom icon colors with green outline maintained\n  .action-sheet-camera-btn ion-icon {\n    color: var(--ion-color-primary);\n  }\n\n  .action-sheet-gallery-btn ion-icon {\n    color: var(--ion-color-secondary);\n  }\n\n  .action-sheet-video-btn ion-icon {\n    color: var(--ion-color-tertiary);\n  }\n\n  .action-sheet-location-btn ion-icon {\n    color: var(--ion-color-success);\n  }\n\n  .action-sheet-contact-btn ion-icon {\n    color: var(--ion-color-warning);\n  }\n}\n\n.location-alert {\n  .alert-wrapper {\n    --min-width: 320px;\n    --max-width: 90%;\n    border-radius: 16px;\n  }\n\n  .alert-head {\n    padding: 16px;\n    h2 {\n      font-size: 18px;\n      font-weight: 600;\n    }\n  }\n\n  .location-preview {\n    padding: 8px 0;\n    text-align: center;\n\n    .location-icon {\n      margin-bottom: 16px;\n      \n      ion-icon {\n        font-size: 32px;\n        --ionicon-stroke-width: 2px;\n      }\n    }\n\n    .location-details {\n      font-size: 14px;\n      line-height: 1.5;\n      color: var(--ion-color-dark);\n      \n      a {\n        color: var(--ion-color-primary);\n        text-decoration: none;\n      }\n    }\n  }\n\n  .alert-button-group {\n    padding: 8px;\n    display: flex;\n    gap: 8px;\n\n    button {\n      margin: 0;\n      border-radius: 8px;\n      text-transform: none;\n      flex: 1;\n    }\n\n    .location-cancel-btn {\n      --background: var(--ion-color-light);\n      --color: var(--ion-color-medium);\n      border: 1px solid var(--ion-color-medium);\n    }\n\n    .location-share-btn {\n      --background: var(--ion-color-primary);\n      --color: white;\n    }\n  }\n}\n\n.error-alert {\n  .alert-wrapper {\n    border-radius: 16px;\n  }\n\n  .alert-head {\n    padding: 16px;\n    h2 {\n      color: var(--ion-color-danger);\n    }\n  }\n\n  .alert-message {\n    color: var(--ion-color-dark);\n  }\n}\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86060:
/*!******************************************************!*\
  !*** ./src/app/message/message.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"chat-header\">\n      <ion-avatar>\n        <img [src]=\"userAvatar || './assets/images/default-dp.png'\" alt=\"User avatar\">\n      </ion-avatar>\n      <div class=\"user-details\">\n        <h2>{{title}}</h2>\n        <p *ngIf=\"isOnline\">Online</p>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [scrollEvents]=\"true\" #content class=\"chat-content\">\n  <div class=\"messages-container\" #contentArea>\n    <ion-button \n      *ngIf=\"startIndex > 0\" \n      fill=\"clear\" \n      class=\"load-more-btn\"\n      (click)=\"loadPreviousMessages()\">\n      Load previous messages\n    </ion-button>\n\n    <div class=\"message-wrapper\" *ngFor=\"let message of messagesToShow; trackBy: trackByFn\">\n      <div class=\"message-bubble\" [ngClass]=\"{'sender': isSender(message), 'receiver': !isSender(message)}\">\n        <!-- Text Message -->\n        <div *ngIf=\"message.type === 'text'\" class=\"message-text\">\n          {{message.message}}\n        </div>\n\n        <!-- Image Message -->\n        <div *ngIf=\"message.type === 'image'\" class=\"message-image-container\">\n          <img [src]=\"message.message\" \n               (click)=\"enlargeImage(message.message)\"\n               loading=\"lazy\"\n               alt=\"Shared image\">\n        </div>\n\n        <!-- Video Message -->\n        <div *ngIf=\"message.type === 'video'\" class=\"message-video-container\">\n          <video controls playsinline>\n            <source [src]=\"message.message\" type=\"video/mp4\">\n          </video>\n        </div>\n\n        <!-- Location Message -->\n        <div *ngIf=\"message.type === 'location'\" class=\"message-location\">\n          <div [innerHtml]=\"message.message\"></div>\n        </div>\n\n        <!-- Contact Message -->\n        <div *ngIf=\"message.type === 'contact'\" class=\"message-contact\">\n          <div [innerHtml]=\"message.message\"></div>\n        </div>\n\n        <div class=\"message-timestamp\">\n          {{message.date | DateFormat}}\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"input-container\">\n      <ion-textarea\n        #messageInput\n        [(ngModel)]=\"message\"\n        placeholder=\"Message\"\n        [autoGrow]=\"true\"\n        [rows]=\"1\"\n        class=\"message-input\">\n      </ion-textarea>\n\n      <div class=\"action-buttons\">\n        <ion-button class=\"attachment-btn\" fill=\"clear\" (click)=\"attach()\">\n          <ion-icon slot=\"icon-only\" name=\"attach-outline\"></ion-icon>\n        </ion-button>\n        <ion-button \n          class=\"send-btn\" \n          [disabled]=\"!message?.trim()\"\n          (click)=\"send('text')\">\n          <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_message_message_module_ts.js.map