function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessageMessagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title (click)=\"viewUser(userId)\">{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" #content>\r\n  <div class=\"messages\" #contentArea>\r\n    <p class=\"center\" *ngIf=\"startIndex > 0\"><span tappable (click)=\"loadPreviousMessages()\">Load previous\r\n        messages</span></p>\r\n    <div *ngFor=\"let message of messagesToShow\">\r\n      <div *ngIf=\"isSender(message)\" class=\"chatbox right sender\">\r\n        <div *ngIf=\"message.type == 'text'\">\r\n          <p style=\"margin:0\">{{message.message}}</p>\r\n        </div>\r\n        <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\r\n        <div *ngIf=\"message.type == 'contact'\" [innerHtml]=\"message.message\"></div>\r\n        <div *ngIf=\"message.type == 'image'\">\r\n          <img tappable (click)=\"enlargeImage(message.message)\" src=\"{{message.message}}\" />\r\n        </div>\r\n        <div *ngIf=\"message.type == 'video'\">\r\n          <video controls width=\"100%\">\r\n            <source src=\"{{message.message}}\" type=\"video/mp4\">\r\n          </video>\r\n        </div>\r\n        <span>{{message.date | DateFormat}}</span>\r\n      </div>\r\n      <div *ngIf=\"!isSender(message)\" class=\"chatbox left\">\r\n        <div *ngIf=\"message.type == 'text'\">\r\n          <p style=\"margin:0\">{{message.message}}</p>\r\n        </div>\r\n        <div *ngIf=\"message.type == 'location'\" [innerHtml]=\"message.message\"></div>\r\n        <div *ngIf=\"message.type == 'contact'\" [innerHtml]=\"message.message\"></div>\r\n        <div *ngIf=\"message.type == 'image'\">\r\n          <img tappable (click)=\"enlargeImage(message.message)\" src=\"{{message.message}}\" />\r\n        </div>\r\n        <div *ngIf=\"message.type == 'video'\">\r\n          <video controls width=\"100%\">\r\n            <source src=\"{{message.message}}\" type=\"video/mp4\">\r\n          </video>\r\n        </div>\r\n        <span>{{message.date | DateFormat}}</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-item class=\"bottom_bar\">\r\n      <ion-textarea style=\"margin:0\" rows=\"0\" placeholder=\"Type your message\" [(ngModel)]=\"message\">\r\n      </ion-textarea>\r\n      <ion-buttons slot=\"end\" style=\"margin-left:4px;\">\r\n        <ion-button fill=\"clear\" (click)=\"attach()\">\r\n          <ion-icon name=\"attach\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"send('text')\" [disabled]=\"!message\">\r\n          send\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/message/message.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/message/message.module.ts ***!
    \*******************************************/

  /*! exports provided: MessagePageModule */

  /***/
  function srcAppMessageMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagePageModule", function () {
      return MessagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./message.page */
    "./src/app/message/message.page.ts");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");

    var routes = [{
      path: '',
      component: _message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]
    }];

    var MessagePageModule = function MessagePageModule() {
      _classCallCheck(this, MessagePageModule);
    };

    MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
    })], MessagePageModule);
    /***/
  },

  /***/
  "./src/app/message/message.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/message/message.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessageMessagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-textarea {\n  font-size: 12px;\n  resize: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxtZXNzYWdlXFxtZXNzYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlL21lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRhcmVhe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcmVzaXplOiBib3RoO1xyXG59IiwiaW9uLXRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICByZXNpemU6IGJvdGg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/message/message.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/message/message.page.ts ***!
    \*****************************************/

  /*! exports provided: MessagePage */

  /***/
  function srcAppMessageMessagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagePage", function () {
      return MessagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _imagemodal_imagemodal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../imagemodal/imagemodal.page */
    "./src/app/imagemodal/imagemodal.page.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var MessagePage =
    /*#__PURE__*/
    function () {
      // MessagePage
      // This is the page where the user can chat with a friend.
      function MessagePage( // public navCtrl: NavController,
      // public navParams: NavParams,
      router, route, dataProvider, firestore, loadingProvider, alertCtrl, imageProvider, modalCtrl, camera, keyboard, actionSheet, contacts, geolocation) {
        _classCallCheck(this, MessagePage);

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
        this.startIndex = -1; // Set number of messages to show.

        this.numberOfMessages = 10;
      }

      _createClass(MessagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scrollBottom();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.userId = this.route.snapshot.params.id;
          this.loggedInUserId = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
          console.log(this.userId); // Get friend details.

          this.dataProvider.getUser(this.userId).snapshotChanges().subscribe(function (user) {
            _this.title = user.payload.data().name;
          }); // Get conversationInfo with friend.
          // tslint:disable-next-line: max-line-length

          this.firestore.doc('/accounts/' + this.loggedInUserId + '/conversations/' + this.userId).snapshotChanges().subscribe(function (conversation) {
            if (conversation.payload.exists()) {
              // User already have conversation with this friend, get conversation
              _this.conversationId = conversation.payload.data().conversationId; // Get conversation

              _this.dataProvider.getConversationMessages(_this.conversationId).snapshotChanges().subscribe(function (messagesRes) {
                var messages = messagesRes.payload.data();
                console.log(messages);
                if (messages == null) messages = [];

                if (_this.messages) {
                  // Just append newly added messages to the bottom of the view.
                  if (messages.length > _this.messages.length) {
                    var message = messages[messages.length - 1];

                    _this.dataProvider.getUser(message.sender).snapshotChanges().subscribe(function (user) {
                      message.avatar = user.payload.data().img;
                    });

                    _this.messages.push(message);

                    _this.messagesToShow.push(message);
                  }
                } else {
                  // Get all messages, this will be used as reference object for messagesToShow.
                  _this.messages = [];
                  messages.forEach(function (message) {
                    _this.dataProvider.getUser(message.sender).snapshotChanges().subscribe(function (user) {
                      message.avatar = user.payload.data().img;
                    });

                    _this.messages.push(message);
                  }); // Load messages in relation to numOfMessages.

                  if (_this.startIndex == -1) {
                    // Get initial index for numberOfMessages to show.
                    if (_this.messages.length - _this.numberOfMessages > 0) {
                      _this.startIndex = _this.messages.length - _this.numberOfMessages;
                    } else {
                      _this.startIndex = 0;
                    }
                  }

                  if (!_this.messagesToShow) {
                    _this.messagesToShow = [];
                  } // Set messagesToShow


                  for (var i = _this.startIndex; i < _this.messages.length; i++) {
                    _this.messagesToShow.push(_this.messages[i]);
                  }

                  _this.loadingProvider.hide();
                }
              });
            }
          }); // Update messages' date time elapsed every minute based on Moment.js.

          var that = this;

          if (!that.updateDateTime) {
            that.updateDateTime = setInterval(function () {
              if (that.messages) {
                that.messages.forEach(function (message) {
                  var date = message.date;
                  message.date = new Date(date);
                });
              }
            }, 60000);
          } // this.scrollBottom();

        } // Load previous messages in relation to numberOfMessages.

      }, {
        key: "loadPreviousMessages",
        value: function loadPreviousMessages() {
          var that = this; // Show loading.

          this.loadingProvider.show();
          setTimeout(function () {
            // Set startIndex to load more messages.
            if (that.startIndex - that.numberOfMessages > -1) {
              that.startIndex -= that.numberOfMessages;
            } else {
              that.startIndex = 0;
            } // Refresh our messages list.


            that.messages = null;
            that.messagesToShow = null;
            that.scrollTop(); // Populate list again.

            that.ionViewDidEnter();
          }, 1000);
        } // Update messagesRead when user lefts this page.

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.setMessagesRead();
        } // Check if currentPage is active, then update user's messagesRead.

      }, {
        key: "setMessagesRead",
        value: function setMessagesRead() {
          var _this2 = this;

          firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/conversations/' + this.conversationId + '/messages').once('value', function (snap) {
            console.log(snap.val());

            if (snap.val() != null) {
              _this2.firestore.doc('/accounts/' + _this2.loggedInUserId + '/conversations/' + _this2.userId).update({
                messagesRead: snap.val().length
              });
            }
          });
        }
      }, {
        key: "scrollBottom",
        value: function scrollBottom() {
          var _this3 = this;

          console.log("Calling Sb");
          setTimeout(function () {
            if (_this3.contentArea.scrollToBottom) {
              _this3.contentArea.scrollToBottom();
            }
          }, 500);
          this.setMessagesRead();
        }
      }, {
        key: "scrollTop",
        value: function scrollTop() {
          var _this4 = this;

          console.log("Calling St");
          setTimeout(function () {
            if (_this4.contentArea.scrollToTop) {
              _this4.contentArea.scrollToTop();
            }
          }, 500);
        } // Check if the user is the sender of the message.

      }, {
        key: "isSender",
        value: function isSender(message) {
          if (message.sender == this.loggedInUserId) {
            return true;
          } else {
            return false;
          }
        } // Send message, if there's no conversation yet, create a new conversation.

      }, {
        key: "send",
        value: function send(type) {
          var _this5 = this;

          if (this.message) {
            // User entered a text on messagebox
            if (this.conversationId) {
              var _messages = JSON.parse(JSON.stringify(this.messages));

              _messages.push({
                date: new Date().toString(),
                sender: this.loggedInUserId,
                type: type,
                message: this.message
              }); // Update conversation on database.


              this.dataProvider.getConversation(this.conversationId).update({
                messages: _messages
              }); // Clear messagebox.

              this.message = '';
              this.scrollBottom();
            } else {
              console.log("else"); // New Conversation with friend.

              var messages = [];
              messages.push({
                date: new Date().toString(),
                sender: this.loggedInUserId,
                type: type,
                message: this.message
              });
              var users = [];
              users.push(this.loggedInUserId);
              users.push(this.userId); // Add conversation.

              this.firestore.collection('conversations').add({
                dateCreated: new Date().toString(),
                messages: messages,
                users: users
              }).then(function (success) {
                var conversationId = success.id;
                _this5.message = ''; // Add conversation reference to the users.

                _this5.firestore.doc('/accounts/' + _this5.loggedInUserId + '/conversations/' + _this5.userId).update({
                  conversationId: conversationId,
                  messagesRead: 1
                });

                _this5.firestore.doc('/accounts/' + _this5.userId + '/conversations/' + _this5.loggedInUserId).update({
                  conversationId: conversationId,
                  messagesRead: 0
                });
              });
              this.scrollBottom();
            }
          }
        }
      }, {
        key: "viewUser",
        value: function viewUser(userId) {
          this.router.navigateByUrl('userinfo/' + userId);
        }
      }, {
        key: "attach",
        value: function attach() {
          var _this6 = this;

          this.actionSheet.create({
            header: 'Choose attachments',
            buttons: [{
              text: 'Camera',
              handler: function handler() {
                _this6.imageProvider.uploadPhotoMessage(_this6.conversationId, _this6.camera.PictureSourceType.CAMERA).then(function (url) {
                  _this6.message = url;

                  _this6.send("image");
                });
              }
            }, {
              text: 'Photo Library',
              handler: function handler() {
                _this6.imageProvider.uploadPhotoMessage(_this6.conversationId, _this6.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                  _this6.message = url;

                  _this6.send("image");
                });
              }
            }, {
              text: 'Video',
              handler: function handler() {
                _this6.imageProvider.uploadVideoMessage(_this6.conversationId).then(function (url) {
                  _this6.message = url;

                  _this6.send("video");
                });
              }
            }, {
              text: 'Location',
              handler: function handler() {
                _this6.geolocation.getCurrentPosition({
                  timeout: 5000
                }).then(function (res) {
                  var locationMessage = "Location:<br> lat:" + res.coords.latitude + "<br> lng:" + res.coords.longitude;
                  var mapUrl = "<a href='https://www.google.com/maps/search/" + res.coords.latitude + "," + res.coords.longitude + "'>View on Map</a>";

                  var confirm = _this6.alertCtrl.create({
                    header: 'Your Location',
                    message: locationMessage,
                    buttons: [{
                      text: 'cancel',
                      handler: function handler() {
                        console.log("canceled");
                      }
                    }, {
                      text: 'Share',
                      handler: function handler() {
                        _this6.message = locationMessage + "<br>" + mapUrl;

                        _this6.send("location");
                      }
                    }]
                  }).then(function (r) {
                    return r.present();
                  });
                }, function (locationErr) {
                  console.log("Location Error" + JSON.stringify(locationErr));
                });
              }
            }, {
              text: 'Contact',
              handler: function handler() {
                _this6.contacts.pickContact().then(function (data) {
                  var name;
                  if (data.displayName !== null) name = data.displayName;else name = data.name.givenName + " " + data.name.familyName;
                  _this6.message = "<b>Name:</b> " + name + "<br><b>Mobile:</b> <a href='tel:" + data.phoneNumbers[0].value + "'>" + data.phoneNumbers[0].value + "</a>";

                  _this6.send("contact");
                }, function (err) {
                  console.log(err);
                });
              }
            }, {
              text: 'cancel',
              role: 'cancel',
              handler: function handler() {
                console.log("cancelled");
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        } // Enlarge image messages.

      }, {
        key: "enlargeImage",
        value: function enlargeImage(img) {
          this.modalCtrl.create({
            component: _imagemodal_imagemodal_page__WEBPACK_IMPORTED_MODULE_12__["ImagemodalPage"],
            componentProps: {
              img: img
            }
          }).then(function (res) {
            res.present();
          }); // let imageModal = this.modalCtrl.create(ImageModalPage, { img: img });
          // imageModal.present();
        }
      }]);

      return MessagePage;
    }();

    MessagePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__["Contacts"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"])], MessagePage.prototype, "contentArea", void 0);
    MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message.page.scss */
      "./src/app/message/message.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_9__["Contacts"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]])], MessagePage);
    /***/
  }
}]);
//# sourceMappingURL=message-message-module-es5.js.map