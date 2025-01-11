(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userinfo-userinfo-module"], {
    /***/
    "M7cr":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userinfo/userinfo.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function M7cr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"user\">{{user.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"user\">\n    <ion-row padding> \n    <div class=\"user-info\">\n      <div class=\"user-img\">\n        <img src=\"{{user.img}}\">\n      </div>\n\n    <img src=\"{{user.img}}\" (click)=\"enlargeImage(user.img)\" onError=\"this.src='./assets/images/default-dp.png'\">\n    <h4 style=\"margin:0\">{{user.name}}</h4>\n    <p style=\"color:#aaa;margin:0\">@{{user.username}}</p>\n    <p style=\"color:#444\">{{user.description}}</p>\n    <div style=\"border-top: 1px solid #ececec; padding: 10px;\">\n      <!-- Show actions based on the status of the user in relation to the current logged in user. -->\n      <div *ngIf=\"friendRequests && friendRequests.indexOf(user.$key) > -1\">\n        <p class=\"info\">Sent you a friend request.</p>\n        <ion-button size=\"small\" (click)=\"rejectFriendRequest()\">\n          Decline\n        </ion-button>\n        <ion-button size=\"small\" (click)=\"acceptFriendRequest()\">\n          Accept\n        </ion-button>\n      </div>\n      <div *ngIf=\"requestsSent && requestsSent.indexOf(user.$key) > -1\">\n        <ion-button size=\"small\" (click)=\"cancelFriendRequest()\">Cancel\n          Request</ion-button>\n      </div>\n      <div *ngIf=\"canAdd()\">\n        <ion-button size=\"small\" (click)=\"sendFriendRequest()\">Add Friend</ion-button>\n      </div>\n      <div *ngIf=\"friends && friends.indexOf(user.$key) > -1\">\n        <ion-button size=\"small\" (click)=\"sendMessage()\">Start Chat</ion-button>\n        <ion-button size=\"small\" (click)=\"block()\">Block User</ion-button>\n      </div>\n    </div>\n\n\n  </div>\n  </ion-row>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "lgMC":
    /*!*********************************************!*\
      !*** ./src/app/userinfo/userinfo.module.ts ***!
      \*********************************************/

    /*! exports provided: UserinfoPageModule */

    /***/
    function lgMC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserinfoPageModule", function () {
        return UserinfoPageModule;
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


      var _userinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./userinfo.page */
      "tHi0");

      var routes = [{
        path: '',
        component: _userinfo_page__WEBPACK_IMPORTED_MODULE_6__["UserinfoPage"]
      }];

      var UserinfoPageModule = /*#__PURE__*/_createClass(function UserinfoPageModule() {
        _classCallCheck(this, UserinfoPageModule);
      });

      UserinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_userinfo_page__WEBPACK_IMPORTED_MODULE_6__["UserinfoPage"]]
      })], UserinfoPageModule);
      /***/
    },

    /***/
    "sncI":
    /*!*********************************************!*\
      !*** ./src/app/userinfo/userinfo.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function sncI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\n.user-info {\n  margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmluZm8vdXNlcmluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUNBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0ksbUZBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJpbmZvL3VzZXJpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4udXNlci1pbmZvIHtcbiAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAudXNlci1pbWcge1xuICBcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "tHi0":
    /*!*******************************************!*\
      !*** ./src/app/userinfo/userinfo.page.ts ***!
      \*******************************************/

    /*! exports provided: UserinfoPage */

    /***/
    function tHi0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserinfoPage", function () {
        return UserinfoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_userinfo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./userinfo.page.html */
      "M7cr");
      /* harmony import */


      var _userinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./userinfo.page.scss */
      "sncI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/firebase.service */
      "Z2Br");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! firebase */
      "JZFu");

      var UserinfoPage = /*#__PURE__*/function () {
        // UserInfoPage
        // This is the page where the user can view user information, and do appropriate actions based on their relation to the current logged in user.
        function UserinfoPage( // public navCtrl: NavController,
        // public navParams: NavParams,
        router, modalCtrl, dataProvider, loadingProvider, alertCtrl, firebaseProvider, route) {
          _classCallCheck(this, UserinfoPage);

          this.router = router;
          this.modalCtrl = modalCtrl;
          this.dataProvider = dataProvider;
          this.loadingProvider = loadingProvider;
          this.alertCtrl = alertCtrl;
          this.firebaseProvider = firebaseProvider;
          this.route = route;
        }

        return _createClass(UserinfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            // this.userId = this.navParams.get('userId');
            this.userId = this.route.snapshot.params.id;
            console.log(this.userId);
            this.loadingProvider.show(); // Get user info.

            this.dataProvider.getUser(this.userId).snapshotChanges().subscribe(function (user) {
              _this.user = Object.assign({
                $key: user.key
              }, user.payload.data());
              console.log(_this.user);

              _this.loadingProvider.hide();
            }); // Get friends of current logged in user.

            this.dataProvider.getUser(firebase__WEBPACK_IMPORTED_MODULE_9__["default"].auth().currentUser.uid).snapshotChanges().subscribe(function (user) {
              if (user.payload.data() != null) _this.friends = user.payload.data().friends;
            }); // Get requests of current logged in user.

            this.dataProvider.getRequests(firebase__WEBPACK_IMPORTED_MODULE_9__["default"].auth().currentUser.uid).snapshotChanges().subscribe(function (requests) {
              console.log(requests.payload.data());

              if (requests.payload.data() != null) {
                _this.friendRequests = requests.payload.data().friendRequests;
                _this.requestsSent = requests.payload.data().requestsSent;
              }
            });
          }
        }, {
          key: "block",
          value: function block() {
            var _this2 = this;

            this.loadingProvider.show();
            console.log("block function");
            firebase__WEBPACK_IMPORTED_MODULE_9__["default"].database().ref('accounts/' + firebase__WEBPACK_IMPORTED_MODULE_9__["default"].auth().currentUser.uid + '/conversations/' + this.userId).update({
              blocked: true
            }).then(function () {
              _this2.loadingProvider.hide();

              _this2.loadingProvider.showToast("User Blocked");

              _this2.router.navigateByUrl('/');
            })["catch"](function () {
              _this2.loadingProvider.hide();

              _this2.loadingProvider.showToast("Something went wrong");
            });
          } // Enlarge user's profile image.

        }, {
          key: "enlargeImage",
          value: function enlargeImage(img) {// let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
            // imageModal.present();
          } // Accept friend request.

        }, {
          key: "acceptFriendRequest",
          value: function acceptFriendRequest() {
            var _this3 = this;

            this.alert = this.alertCtrl.create({
              header: 'Confirm Friend Request',
              message: 'Do you want to accept <b>' + this.user.name + '</b> as your friend?',
              buttons: [{
                text: 'Cancel',
                handler: function handler(data) {}
              }, {
                text: 'Accept',
                handler: function handler() {
                  _this3.firebaseProvider.acceptFriendRequest(_this3.userId);
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          } // Deny friend request.

        }, {
          key: "rejectFriendRequest",
          value: function rejectFriendRequest() {
            var _this4 = this;

            this.alert = this.alertCtrl.create({
              header: 'Reject Friend Request',
              message: 'Do you want to reject <b>' + this.user.name + '</b> as your friend?',
              buttons: [{
                text: 'Cancel',
                handler: function handler(data) {}
              }, {
                text: 'Reject',
                handler: function handler() {
                  _this4.firebaseProvider.deleteFriendRequest(_this4.userId);
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          } // Cancel friend request sent.

        }, {
          key: "cancelFriendRequest",
          value: function cancelFriendRequest() {
            var _this5 = this;

            this.alert = this.alertCtrl.create({
              header: 'Friend Request Pending',
              message: 'Do you want to delete your friend request to <b>' + this.user.name + '</b>?',
              buttons: [{
                text: 'Cancel',
                handler: function handler(data) {}
              }, {
                text: 'Delete',
                handler: function handler() {
                  _this5.firebaseProvider.cancelFriendRequest(_this5.userId);
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          } // Send friend request.

        }, {
          key: "sendFriendRequest",
          value: function sendFriendRequest() {
            var _this6 = this;

            this.alert = this.alertCtrl.create({
              header: 'Send Friend Request',
              message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
              buttons: [{
                text: 'Cancel',
                handler: function handler(data) {}
              }, {
                text: 'Send',
                handler: function handler() {
                  _this6.firebaseProvider.sendFriendRequest(_this6.userId);
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          } // Open chat with this user.

        }, {
          key: "sendMessage",
          value: function sendMessage() {
            this.router.navigateByUrl('/message/' + this.userId); // this.navCtrl.push(MessagePage, { userId: this.userId });
          } // Check if user can be added, meaning user is not yet friends nor has sent/received any friend requests.

        }, {
          key: "canAdd",
          value: function canAdd() {
            if (this.friendRequests) {
              if (this.friendRequests.indexOf(this.userId) > -1) {
                return false;
              }
            }

            if (this.requestsSent) {
              if (this.requestsSent.indexOf(this.userId) > -1) {
                return false;
              }
            }

            if (this.friends) {
              if (this.friends.indexOf(this.userId) > -1) {
                return false;
              }
            }

            return true;
          }
        }]);
      }();

      UserinfoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      };

      UserinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-userinfo',
        template: _raw_loader_userinfo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_userinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])], UserinfoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=userinfo-userinfo-module-es5.js.map