(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["friends-friends-module"], {
    /***/
    "+lG5":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function lG5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n  <ion-segment color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"friends\">\n      FRIENDS\n    </ion-segment-button>\n    <ion-segment-button value=\"requests\">\n      REQUESTS\n      <span *ngIf=\"friendRequestCount != 0\">({{friendRequestCount}})</span>\n    </ion-segment-button>\n    <ion-segment-button value=\"search\">\n      FIND NEW\n    </ion-segment-button>\n  </ion-segment>\n</ion-header> \n\n<ion-content>\n  <div [ngSwitch]=\"tab\">\n    <div *ngSwitchCase=\"'friends'\">\n      <!-- No friends to show -->\n      <div class=\"empty-list\" *ngIf=\"friends && friends.length == 0\">\n        <h1>\n          <ion-icon name=\"contacts\"></ion-icon>\n        </h1>\n        <p>You don't have new friend yet</p>\n      </div>\n      <!-- Show list of friends -->\n      <ion-list lines=\"none\" *ngIf=\"friends && friends.length > 0\">\n        <!-- <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\" cancelButtonText=\"Done\"></ion-searchbar> -->\n        <ion-item *ngFor=\"let friend of friends | friendFilter:searchFriend\"\n          (click)=\"message(friend.$key); $event.stopPropagation();\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{friend.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>{{friend.description}}</p>\n            </ion-text>\n          </ion-label>\n          <ion-note slot=\"end\" *ngIf=\"friend.online == true\">online</ion-note>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'requests'\">\n      <!-- No friend requests sent or received. -->\n      <div class=\"empty-list\"\n        *ngIf=\"(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)\">\n        <h1>\n          <ion-icon name=\"md-filing\"></ion-icon>\n        </h1>\n        <p>No New Requests</p>\n      </div>\n      <!-- Show friend requests received. -->\n      <ion-list lines=\"none\" *ngIf=\"friendRequests && friendRequests.length > 0\">\n        <ion-item *ngFor=\"let friendRequest of friendRequests\" (click)=\"viewUser(friendRequest.$key)\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{friendRequest.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{friendRequest.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>has sent you a friend request.</p>\n            </ion-text>\n          </ion-label>\n          <ion-button color=\"acceptrequest\" fill=\"outline\"\n            (click)=\"acceptFriendRequest(friendRequest); $event.stopPropagation();\">\n            Accept\n          </ion-button>\n        </ion-item>\n      </ion-list>\n      <!-- Show friend requests sent. -->\n      <ion-list lines=\"none\" *ngIf=\"requestsSent && requestsSent.length > 0\">\n        <ion-item *ngFor=\"let requestSent of requestsSent\" no-lines tappable (click)=\"viewUser(requestSent.$key)\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{requestSent.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{requestSent.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>friend request sent.</p>\n            </ion-text>\n          </ion-label>\n          <ion-button slot=\"end\" fill=\"outline\" color=\"cancelrequest\"\n            (click)=\"cancelFriendRequest(requestSent); $event.stopPropagation();\">\n            Cancel\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'search'\">\n      <!-- No other users to send friend request right now. -->\n      <div class=\"empty-list\" *ngIf=\"accounts && (accounts.length == 0 || (accounts.length == excludedIds.length))\">\n        <h1>\n          <ion-icon name=\"md-search\"></ion-icon>\n        </h1>\n        <p>We can't find new users right now</p>\n      </div>\n      <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\n      <ion-list lines=\"none\" *ngIf=\"accounts && accounts.length > 0\">\n        <ion-searchbar *ngIf=\"accounts.length != excludedIds.length\" [(ngModel)]=\"searchUser\" placeholder=\"Search User\">\n        </ion-searchbar>\n        <ion-item *ngFor=\"let account of accounts | searchFilter: [excludedIds, searchUser]\" no-lines tappable\n          (click)=\"viewUser(account.$key)\">\n          <div slot=\"end\">\n            <ion-button color=\"sendrequest\" fill=\"outline\"\n              (click)=\"sendFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 0\">\n              add\n            </ion-button>\n            <ion-button color=\"cancelrequest\" fill=\"outline\"\n              (click)=\"cancelFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 1\">\n              <!-- <ion-icon name=\"md-close-circle\" class=\"danger\"></ion-icon> -->\n              cancel\n            </ion-button>\n            <ion-button color=\"acceptrequest\" fill=\"outline\"\n              (click)=\"acceptFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 2\">\n              <!-- <ion-icon name=\"md-checkmark-circle\" class=\"success\"></ion-icon> -->\n              accept\n            </ion-button>\n          </div>\n          <ion-avatar slot=\"start\">\n            <img src=\"{{account.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{account.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>@{{account.username}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "YvhV":
    /*!*****************************************!*\
      !*** ./src/app/friends/friends.page.ts ***!
      \*****************************************/

    /*! exports provided: FriendsPage */

    /***/
    function YvhV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendsPage", function () {
        return FriendsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_friends_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./friends.page.html */
      "+lG5");
      /* harmony import */


      var _friends_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./friends.page.scss */
      "lfu1");
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/firebase.service */
      "Z2Br");

      var FriendsPage = /*#__PURE__*/function () {
        // FriendsPage
        // This is the page where the user can search, view, and initiate a chat with their friends.
        function FriendsPage(dataProvider, loadingProvider, alertCtrl, firebaseProvider, afAuth, router) {
          _classCallCheck(this, FriendsPage);

          this.dataProvider = dataProvider;
          this.loadingProvider = loadingProvider;
          this.alertCtrl = alertCtrl;
          this.firebaseProvider = firebaseProvider;
          this.afAuth = afAuth;
          this.router = router;
          this.friendRequests = [];
          this.requestsSent = [];
          this.friendRequestCount = 0;
          this.accounts = [];
          this.excludedIds = [];
        }

        return _createClass(FriendsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.tab = 'friends';
            this.title = 'Friends';
            this.searchFriend = '';

            if (this.afAuth.currentUser != null) {
              this.dataProvider.getRequests(this.dataProvider.getCurrentUserId()).snapshotChanges().subscribe(function (requestsRes) {
                if (requestsRes.payload != null) {
                  var requests = requestsRes.payload.data();

                  if (requests != null) {
                    if (requests.friendRequests != null && requests.friendRequests !== undefined) {
                      _this.friendRequestCount = requests.friendRequests.length;
                    } else {
                      _this.friendRequestCount = 0;
                    }
                  } else {
                    _this.friendRequestCount = 0;
                  }
                }
              });
            }
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged($event) {
            if (this.tab === 'friends') {
              this.title = 'Friends';
              this.getFriends();
            } else if (this.tab === 'requests') {
              this.title = 'Friend Requests';
              this.getFriendRequests();
            } else if (this.tab === 'search') {
              this.title = 'Find New Friends';
              this.findNewFriends();
            }
          } // openFilter() {
          //   this.findNewFriends();
          //   let friendModal = this.modalCtrl.create(FriendsFilterPage);
          //   friendModal.present();
          //   friendModal.onDidDismiss(data => {
          //     console.log(data);
          //     if (data != undefined) {
          //       this.accounts = this.accounts.filter(acc => {
          //         if ((acc.age >= data.ageStart) && (acc.age <= data.ageEnd) && acc.location == data.location)
          //           return true;
          //         return false;
          //       })
          //     }
          //   });
          // }

        }, {
          key: "getFriends",
          value: function getFriends() {
            var _this2 = this;

            this.loadingProvider.show();
            this.friends = []; // Get user data on database and get list of friends.

            this.dataProvider.getCurrentUser().then(function (u) {
              u.snapshotChanges().subscribe(function (user) {
                var account = user.payload.data();

                _this2.loadingProvider.hide();

                if (account != null && account.friends != null) {
                  for (var i = 0; i < account.friends.length; i++) {
                    console.log('friends:', account.friends[i]);

                    _this2.dataProvider.getUser(account.friends[i]).snapshotChanges().subscribe(function (friend) {
                      if (friend.payload != null) {
                        var friendData = Object.assign({
                          $key: friend.payload.data().userId
                        }, friend.payload.data());

                        _this2.addOrUpdateFriend(friendData);
                      }
                    });
                  }
                } else {
                  _this2.friends = [];
                }
              });
            });
          } // Add or update friend data for real-time sync.

        }, {
          key: "addOrUpdateFriend",
          value: function addOrUpdateFriend(friend) {
            if (!this.friends) {
              this.friends = [friend];
            } else {
              var index = -1;

              for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key === friend.$key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.friends[index] = friend;
              } else {
                this.friends.push(friend);
              }
            }
          } // Proceed to userInfo page.

        }, {
          key: "viewUser",
          value: function viewUser(userId) {
            this.router.navigateByUrl('/userinfo/' + userId);
          } // Proceed to chat page.

        }, {
          key: "message",
          value: function message(userId) {
            this.router.navigateByUrl('/message/' + userId);
          } // Manageing Friend Requests

        }, {
          key: "getFriendRequests",
          value: function getFriendRequests() {
            var _this3 = this;

            this.friendRequests = [];
            this.requestsSent = [];
            this.loadingProvider.show(); // Get user info

            this.dataProvider.getCurrentUser().then(function (u) {
              u.snapshotChanges().subscribe(function (accountRes) {
                _this3.account = accountRes.payload.data(); // Get friendRequests and requestsSent of the user.

                _this3.dataProvider.getRequests(_this3.account.userId).snapshotChanges().subscribe(function (requestsRes) {
                  // friendRequests.
                  var requests = requestsRes.payload.data();

                  if (requests != null) {
                    if (requests.friendRequests != null && requests.friendRequests !== undefined) {
                      _this3.friendRequests = [];
                      _this3.friendRequestCount = requests.friendRequests.length;
                      requests.friendRequests.forEach(function (userId) {
                        _this3.dataProvider.getUser(userId).snapshotChanges().subscribe(function (sender) {
                          sender = Object.assign({
                            $key: sender.payload.data().userId
                          }, sender.payload.data());

                          _this3.addOrUpdateFriendRequest(sender);
                        });
                      });
                    } else {
                      _this3.friendRequests = [];
                    } // requestsSent.


                    if (requests.requestsSent != null && requests.requestsSent != undefined) {
                      _this3.requestsSent = [];
                      requests.requestsSent.forEach(function (userId) {
                        _this3.dataProvider.getUser(userId).snapshotChanges().subscribe(function (receiver) {
                          receiver = Object.assign({
                            $key: receiver.payload.data().userId
                          }, receiver.payload.data());

                          _this3.addOrUpdateRequestSent(receiver);
                        });
                      });
                    } else {
                      _this3.requestsSent = [];
                    }
                  }

                  _this3.loadingProvider.hide();
                });
              });
            });
          } // Add or update friend request only if not yet friends.

        }, {
          key: "addOrUpdateFriendRequest",
          value: function addOrUpdateFriendRequest(sender) {
            if (!this.friendRequests) {
              this.friendRequests = [sender];
            } else {
              var index = -1;

              for (var i = 0; i < this.friendRequests.length; i++) {
                if (this.friendRequests[i].$key === sender.$key) {
                  index = i;
                }
              }

              if (index > -1) {
                if (!this.isFriends(sender.$key)) {
                  this.friendRequests[index] = sender;
                }
              } else {
                if (!this.isFriends(sender.$key)) {
                  this.friendRequests.push(sender);
                }
              }
            }
          } // Add or update requests sent only if the user is not yet a friend.

        }, {
          key: "addOrUpdateRequestSent",
          value: function addOrUpdateRequestSent(receiver) {
            if (!this.requestsSent) {
              this.requestsSent = [receiver];
            } else {
              var index = -1;

              for (var j = 0; j < this.requestsSent.length; j++) {
                if (this.requestsSent[j].$key == receiver.$key) {
                  index = j;
                }
              }

              if (index > -1) {
                if (!this.isFriends(receiver.$key)) {
                  this.requestsSent[index] = receiver;
                }
              } else {
                if (!this.isFriends(receiver.$key)) {
                  this.requestsSent.push(receiver);
                }
              }
            }
          }
        }, {
          key: "findNewFriends",
          value: function findNewFriends() {
            var _this4 = this;

            this.requestsSent = [];
            this.friendRequests = []; // Initialize

            this.loadingProvider.show();
            this.searchUser = ''; // Get all users.

            this.dataProvider.getUsers().snapshotChanges().subscribe(function (accounts) {
              // TODO : why is this being called twice??????????????
              _this4.loadingProvider.hide(); // applying Filters


              var acc = accounts.filter(function (c) {
                if (c.key == null && c.key === undefined && c.payload.doc.data() == null) {
                  return false;
                }

                if (c.payload.doc.data().name === '' || c.payload.doc.data().name === ' ' || c.payload.doc.data().name === undefined) {
                  return false;
                }

                if (c.payload.doc.data().publicVisibility === false) {
                  return false;
                }

                return true;
              });
              _this4.accounts = acc.map(function (c) {
                return Object.assign({
                  $key: c.payload.doc.data().userId
                }, c.payload.doc.data());
              });

              _this4.dataProvider.getCurrentUser().then(function (u) {
                u.snapshotChanges().subscribe(function (accountRes) {
                  var account = accountRes.payload.data(); // Add own userId as exludedIds.

                  _this4.excludedIds = [];

                  if (_this4.excludedIds.indexOf(account.userId) === -1) {
                    _this4.excludedIds.push(account.userId);
                  } // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.


                  if (account != null) {
                    if (account.friends != null) {
                      account.friends.forEach(function (friend) {
                        if (_this4.excludedIds.indexOf(friend) === -1) {
                          _this4.excludedIds.push(friend);
                        }
                      });
                    }
                  } // Get requests of the currentUser.


                  _this4.dataProvider.getRequests(account.userId).get().subscribe(function (requests) {
                    if (requests.payload != null) {
                      _this4.requestsSent = requests.payload.data().requestsSent;
                      _this4.friendRequests = requests.payload.data().friendRequests;
                    }
                  });
                });
              });
            });
          } // Send friend request.

        }, {
          key: "sendFriendRequest",
          value: function sendFriendRequest(user) {
            var _this5 = this;

            this.alert = this.alertCtrl.create({
              header: 'Send Friend Request',
              message: 'Do you want to send friend request to <b>' + user.name + '</b>?',
              buttons: [{
                text: 'Cancel',
                handler: function handler(data) {}
              }, {
                text: 'Send',
                handler: function handler() {
                  _this5.firebaseProvider.sendFriendRequest(user.$key);
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          } // Accept Friend Request.

        }, {
          key: "acceptFriendRequest",
          value: function acceptFriendRequest(user) {
            var _this6 = this;

            this.alert = this.alertCtrl.create({
              header: 'Confirm Friend Request',
              message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
              buttons: [{
                text: 'Cancel',
                handler: function handler(data) {}
              }, {
                text: 'Reject Request',
                handler: function handler() {
                  _this6.firebaseProvider.deleteFriendRequest(user.$key);

                  _this6.getFriendRequests();
                }
              }, {
                text: 'Accept Request',
                handler: function handler() {
                  _this6.firebaseProvider.acceptFriendRequest(user.$key);

                  _this6.getFriendRequests();
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          } // Cancel Friend Request sent.

        }, {
          key: "cancelFriendRequest",
          value: function cancelFriendRequest(user) {
            var _this7 = this;

            this.alert = this.alertCtrl.create({
              header: 'Friend Request Pending',
              message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
              buttons: [{
                text: 'Cancel',
                handler: function handler(data) {}
              }, {
                text: 'Delete',
                handler: function handler() {
                  _this7.firebaseProvider.cancelFriendRequest(user.$key);

                  _this7.getFriendRequests();
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          } // Checks if user is already friends with this user.

        }, {
          key: "isFriends",
          value: function isFriends(userId) {
            if (this.account.friends) {
              if (this.account.friends.indexOf(userId) == -1) {
                return false;
              } else {
                return true;
              }
            } else {
              return false;
            }
          } // Get the status of the user in relation to the logged in user.

        }, {
          key: "getStatus",
          value: function getStatus(user) {
            // Returns:
            // 0 when user can be requested as friend.
            // 1 when a friend request was already sent to this user.
            // 2 when this user has a pending friend request.
            if (this.requestsSent) {
              for (var i = 0; i < this.requestsSent.length; i++) {
                if (this.requestsSent[i] === user.$key) {
                  return 1;
                }
              }
            }

            if (this.friendRequests) {
              for (var j = 0; j < this.friendRequests.length; j++) {
                if (this.friendRequests[j] === user.$key) {
                  return 2;
                }
              }
            }

            return 0;
          }
        }]);
      }();

      FriendsPage.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      FriendsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-friends',
        template: _raw_loader_friends_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_friends_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], FriendsPage);
      /***/
    },

    /***/
    "fZqB":
    /*!*******************************************!*\
      !*** ./src/app/friends/friends.module.ts ***!
      \*******************************************/

    /*! exports provided: FriendsPageModule */

    /***/
    function fZqB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function () {
        return FriendsPageModule;
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


      var _friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./friends.page */
      "YvhV");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");

      var routes = [{
        path: '',
        component: _friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]
      }];

      var FriendsPageModule = /*#__PURE__*/_createClass(function FriendsPageModule() {
        _classCallCheck(this, FriendsPageModule);
      });

      FriendsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]]
      })], FriendsPageModule);
      /***/
    },

    /***/
    "lfu1":
    /*!*******************************************!*\
      !*** ./src/app/friends/friends.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function lfu1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-background: var(--app-background);\n  --page-segment-indicator-height: 2px;\n}\n\n.user-friends-segment {\n  --background: var(--page-segment-background);\n  position: sticky;\n  top: 0;\n  z-index: 8;\n}\n\n.user-friends-segment ion-segment-button {\n  --padding-end: var(--page-margin);\n  --padding-start: var(--page-margin);\n  --color: rgba(var(--ion-color-dark-rgb), 0.4);\n  --indicator-color: var(--ion-color-dark);\n  text-transform: capitalize;\n  min-height: calc((var(--page-margin) * 3) - var(--page-segment-indicator-height));\n}\n\nion-searchbar.friends-searchbar {\n  padding: calc(var(--page-margin) * 1.5) var(--page-margin);\n}\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3);\n}\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n\nion-item.friend-item {\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin);\n}\n\nion-item.friend-item:last-child {\n  --border-style: none;\n  --padding-bottom: 0px;\n  --inner-padding-bottom: 0px;\n}\n\nion-item.friend-item .user-details-section {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  align-items: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-job {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper {\n  font-size: 14px;\n  max-width: 10ex;\n  max-width: 10ch;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper .user-action {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kcy9mcmllbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSxnREFBQTtFQUNBLG9DQUFBO0FBREo7O0FBS0U7RUFDRSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFGSjs7QUFJSTtFQUNFLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2Q0FBQTtFQUNBLHdDQUFBO0VBRUEsMEJBQUE7RUFDQSxpRkFBQTtBQUhOOztBQU9FO0VBQ0UsMERBQUE7QUFKSjs7QUFPRTtFQUNFLCtCQUFBO0VBQ0EsMkNBQUE7QUFKSjs7QUFPRTtFQUNFLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9FO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FBSko7O0FBTUk7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFKTjs7QUFPSTtFQUNFLDhCQUFBO0VBRUEsV0FBQTtFQUNBLG1CQUFBO0FBTk47O0FBUU07RUFDRSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFOUjs7QUFTVTtFQUNFLDJDQUFBO0FBUFo7O0FBVVU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUlo7O0FBV1U7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0FBVFo7O0FBY007RUFDRSxlQUFBO0VBS0EsZUFBQTtFQUNBLGVBQUE7QUFoQlI7O0FBa0JRO0VBQ0UsV0FBQTtBQWhCViIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHMvZnJpZW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gICAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gICAgLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAgIC0tcGFnZS1zZWdtZW50LWluZGljYXRvci1oZWlnaHQ6IDJweDtcbiAgfVxuICBcbiAgLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4gIC51c2VyLWZyaWVuZHMtc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZCk7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogODtcbiAgXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC0gdmFyKC0tcGFnZS1zZWdtZW50LWluZGljYXRvci1oZWlnaHQpKTtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1zZWFyY2hiYXIuZnJpZW5kcy1zZWFyY2hiYXIge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMS41KSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIH1cbiAgXG4gIC5mcmllbmRzLWxpc3Qge1xuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbiAgfVxuICBcbiAgLmVtcHR5LWxpc3QtbWVzc2FnZSB7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xuICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBpb24taXRlbS5mcmllbmQtaXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgfVxuICBcbiAgICAudXNlci1kZXRhaWxzLXNlY3Rpb24ge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gICAgICAudXNlci1kYXRhLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICAgICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAudXNlci1qb2Ige1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC51c2VyLWFjdGlvbnMtd3JhcHBlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgaGF2ZSBzcGFjZSBmb3IgMTAgY2hhcmFjdGVyc1xuICAgICAgICAvLyBBcyBjaCAod2lkdGggb2YgdGhlIGNoYXJhY3RlciAnMCcpIHVuaXQgaXMgbm90IDEwMCUgc3VwcG9ydGVkLCB3ZSB3aWxsIHVzZSBleCAoaGVpZ2h0IG9mIHRoZSAneCcgY2hhcmFjdGVyKSBhcyBhIGZhbGxiYWNrXG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvY3NzL3VuaXRzLXZhbHVlcy9cbiAgICAgICAgbWF4LXdpZHRoOiAxMGV4OyAvLyBUaGUgJ3gnIGNoYXJhY3RlciBpcyBzZW1pLXNxdWFyZSBjaGFyXG4gICAgICAgIG1heC13aWR0aDogMTBjaDsgLy8gY2ggaXMgdGhlIG9ubHkgZm9udCB1bml0IGJhc2VkIG9uIHRoZSB3aWR0aCBvZiBjaGFyYWN0ZXJzXG4gIFxuICAgICAgICAudXNlci1hY3Rpb24ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=friends-friends-module-es5.js.map