(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"], {
    /***/
    "6AQs":
    /*!*******************************************!*\
      !*** ./src/app/messages/messages.page.ts ***!
      \*******************************************/

    /*! exports provided: MessagesPage */

    /***/
    function AQs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
        return MessagesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./messages.page.html */
      "J2ao");
      /* harmony import */


      var _messages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./messages.page.scss */
      "fOj/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "KDZV");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");

      var MessagesPage = /*#__PURE__*/function () {
        function MessagesPage(router, afAuth, firestore, loadingProvider, dataProvider) {
          _classCallCheck(this, MessagesPage);

          this.router = router;
          this.afAuth = afAuth;
          this.firestore = firestore;
          this.loadingProvider = loadingProvider;
          this.dataProvider = dataProvider;
          this.searchFriend = '';
        }

        _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.loadingProvider.show(); // Get info of conversations of current logged in user.

            this.dataProvider.getConversations().snapshotChanges().subscribe(function (conversationsInfoRes) {
              var conversations = [];
              console.log('conversationsInfoRes', conversationsInfoRes);
              conversations = conversationsInfoRes.map(function (c) {
                return Object.assign({
                  key: c.payload.doc.id
                }, c.payload.doc.data());
              });
              console.log('conversations:', conversations);

              if (conversations.length > 0) {
                conversations.forEach(function (conversation) {
                  console.log('conversation', conversation);

                  if (conversation) {
                    // Get conversation partner info.
                    _this.dataProvider.getUser(conversation.key).get().subscribe(function (user) {
                      conversation.friend = user.data(); // Get conversation info.

                      _this.dataProvider.getConversation(conversation.conversationId).snapshotChanges().subscribe(function (obj) {
                        // Get last message of conversation.
                        console.log(obj.payload.data());

                        if (obj.payload.data() != null) {
                          var lastMessage = obj.payload.data().messages[obj.payload.data().messages.length - 1];
                          conversation.date = lastMessage.date;
                          conversation.sender = lastMessage.sender; // Set unreadMessagesCount

                          conversation.unreadMessagesCount = obj.payload.data().messages.length - conversation.messagesRead;
                          console.log(obj.payload.data().messages.length + "-" + conversation.messagesRead);
                          console.log(conversation.unreadMessagesCount); // Process last message depending on messageType.

                          if (lastMessage.type == 'text') {
                            if (lastMessage.sender == _this.afAuth.auth.currentUser.uid) {
                              conversation.message = 'You: ' + lastMessage.message;
                            } else {
                              conversation.message = lastMessage.message;
                            }
                          } else {
                            if (lastMessage.sender == _this.afAuth.auth.currentUser.uid) {
                              conversation.message = 'You sent a photo message.';
                            } else {
                              conversation.message = 'has sent you a photo message.';
                            }
                          } // Add or update conversation.


                          _this.addOrUpdateConversation(conversation);
                        }
                      });
                    });
                  }
                });

                _this.loadingProvider.hide();
              } else {
                _this.conversations = [];

                _this.loadingProvider.hide();
              }
            }); // Update conversations' last active date time elapsed every minute based on Moment.js.

            var that = this;

            if (!that.updateDateTime) {
              that.updateDateTime = setInterval(function () {
                if (that.conversations) {
                  that.conversations.forEach(function (conversation) {
                    var date = conversation.date;
                    conversation.date = new Date(date);
                  });
                }
              }, 60000);
            }
          } // Add or update conversation for real-time sync based on our observer, sort by active date.

        }, {
          key: "addOrUpdateConversation",
          value: function addOrUpdateConversation(conversation) {
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
              } // Sort by last active date.


              this.conversations.sort(function (a, b) {
                var date1 = new Date(a.date);
                var date2 = new Date(b.date);

                if (date1 > date2) {
                  return -1;
                } else if (date1 < date2) {
                  return 1;
                } else {
                  return 0;
                }
              });
            }
          } // Open chat with friend.

        }, {
          key: "message",
          value: function message(userId) {
            this.router.navigateByUrl('/message/' + userId); // this.app.getRootNav().push(MessagePage, { userId: userId });
          } // Return class based if conversation has unreadMessages or not.

        }, {
          key: "hasUnreadMessages",
          value: function hasUnreadMessages(conversation) {
            if (conversation.unreadMessagesCount > 0) {
              return 'bold';
            } else return '';
          }
        }]);

        return MessagesPage;
      }();

      MessagesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }];
      };

      MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])], MessagesPage);
      /***/
    },

    /***/
    "J2ao":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function J2ao(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"empty-list\" *ngIf=\"conversations && conversations.length <= 0\">\n    <h1>\n      <ion-icon name=\"text\"></ion-icon>\n    </h1>\n    <p>No new conversation yet.</p>\n  </div>\n  <!-- Show conversations -->\n  <ion-list lines=\"none\" *ngIf=\"conversations && conversations.length > 0\">\n    <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\"\n      cancelButtonText=\"Done\"></ion-searchbar>\n    <div *ngFor=\"let conversation of conversations | conversationFilter:searchFriend\"> \n      <ion-item *ngIf=\"conversation.blocked != true\" (click)=\"message(conversation.key)\">\n\n        <ion-avatar slot=\"start\" *ngIf=\"conversation.friend\">\n          <img src=\"{{conversation.friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n        </ion-avatar>\n        <div [ngClass]=hasUnreadMessages(conversation)>\n          <ion-label>\n            <ion-text>\n              <h2 *ngIf=\"conversation.friend\">{{conversation.friend.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>{{conversation.message}}</p>\n            </ion-text>\n          </ion-label>\n        </div>\n        <div slot=\"end\" style=\"display: flex;flex-direction: column;align-items: flex-end;\">\n          <ion-badge color=\"danger\" *ngIf=\"conversation.unreadMessagesCount > 0\">\n            {{conversation.unreadMessagesCount}}\n          </ion-badge>\n          <ion-text style=\"color: #777;font-size: 12px;\">{{conversation.date | DateFormat}}</ion-text>\n        </div>\n      </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>";
      /***/
    },

    /***/
    "TdLt":
    /*!*********************************************!*\
      !*** ./src/app/messages/messages.module.ts ***!
      \*********************************************/

    /*! exports provided: MessagesPageModule */

    /***/
    function TdLt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
        return MessagesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./messages.page */
      "6AQs");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");

      var routes = [{
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
      }];

      var MessagesPageModule = function MessagesPageModule() {
        _classCallCheck(this, MessagesPageModule);
      };

      MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
      })], MessagesPageModule);
      /***/
    },

    /***/
    "fOj/":
    /*!*********************************************!*\
      !*** ./src/app/messages/messages.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function fOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=messages-messages-module-es5.js.map