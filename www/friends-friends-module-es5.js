function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["friends-friends-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFriendsFriendsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n  <ion-segment color=\"primary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button value=\"friends\">\r\n      FRIENDS\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"requests\">\r\n      REQUESTS\r\n      <span *ngIf=\"friendRequestCount != 0\">({{friendRequestCount}})</span>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"search\">\r\n      FIND NEW\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header> \r\n\r\n<ion-content>\r\n  <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'friends'\">\r\n      <!-- No friends to show -->\r\n      <div class=\"empty-list\" *ngIf=\"friends && friends.length == 0\">\r\n        <h1>\r\n          <ion-icon name=\"contacts\"></ion-icon>\r\n        </h1>\r\n        <p>You don't have new friend yet</p>\r\n      </div>\r\n      <!-- Show list of friends -->\r\n      <ion-list lines=\"none\" *ngIf=\"friends && friends.length > 0\">\r\n        <!-- <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\" cancelButtonText=\"Done\"></ion-searchbar> -->\r\n        <ion-item *ngFor=\"let friend of friends | friendFilter:searchFriend\"\r\n          (click)=\"message(friend.$key); $event.stopPropagation();\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{friend.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>{{friend.description}}</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" *ngIf=\"friend.online == true\">online</ion-note>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <div *ngSwitchCase=\"'requests'\">\r\n      <!-- No friend requests sent or received. -->\r\n      <div class=\"empty-list\"\r\n        *ngIf=\"(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)\">\r\n        <h1>\r\n          <ion-icon name=\"md-filing\"></ion-icon>\r\n        </h1>\r\n        <p>No New Requests</p>\r\n      </div>\r\n      <!-- Show friend requests received. -->\r\n      <ion-list lines=\"none\" *ngIf=\"friendRequests && friendRequests.length > 0\">\r\n        <ion-item *ngFor=\"let friendRequest of friendRequests\" (click)=\"viewUser(friendRequest.$key)\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{friendRequest.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{friendRequest.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>has sent you a friend request.</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-button color=\"acceptrequest\" fill=\"outline\"\r\n            (click)=\"acceptFriendRequest(friendRequest); $event.stopPropagation();\">\r\n            Accept\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n      <!-- Show friend requests sent. -->\r\n      <ion-list lines=\"none\" *ngIf=\"requestsSent && requestsSent.length > 0\">\r\n        <ion-item *ngFor=\"let requestSent of requestsSent\" no-lines tappable (click)=\"viewUser(requestSent.$key)\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{requestSent.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{requestSent.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>friend request sent.</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-button slot=\"end\" fill=\"outline\" color=\"cancelrequest\"\r\n            (click)=\"cancelFriendRequest(requestSent); $event.stopPropagation();\">\r\n            Cancel\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <div *ngSwitchCase=\"'search'\">\r\n      <!-- No other users to send friend request right now. -->\r\n      <div class=\"empty-list\" *ngIf=\"accounts && (accounts.length == 0 || (accounts.length == excludedIds.length))\">\r\n        <h1>\r\n          <ion-icon name=\"md-search\"></ion-icon>\r\n        </h1>\r\n        <p>We can't find new users right now</p>\r\n      </div>\r\n      <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\r\n      <ion-list lines=\"none\" *ngIf=\"accounts && accounts.length > 0\">\r\n        <ion-searchbar *ngIf=\"accounts.length != excludedIds.length\" [(ngModel)]=\"searchUser\" placeholder=\"Search User\">\r\n        </ion-searchbar>\r\n        <ion-item *ngFor=\"let account of accounts | searchFilter: [excludedIds, searchUser]\" no-lines tappable\r\n          (click)=\"viewUser(account.$key)\">\r\n          <div slot=\"end\">\r\n            <ion-button color=\"sendrequest\" fill=\"outline\"\r\n              (click)=\"sendFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 0\">\r\n              add\r\n            </ion-button>\r\n            <ion-button color=\"cancelrequest\" fill=\"outline\"\r\n              (click)=\"cancelFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 1\">\r\n              <!-- <ion-icon name=\"md-close-circle\" class=\"danger\"></ion-icon> -->\r\n              cancel\r\n            </ion-button>\r\n            <ion-button color=\"acceptrequest\" fill=\"outline\"\r\n              (click)=\"acceptFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 2\">\r\n              <!-- <ion-icon name=\"md-checkmark-circle\" class=\"success\"></ion-icon> -->\r\n              accept\r\n            </ion-button>\r\n          </div>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{account.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{account.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>@{{account.username}}</p>\r\n            </ion-text>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/friends/friends.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/friends/friends.module.ts ***!
    \*******************************************/

  /*! exports provided: FriendsPageModule */

  /***/
  function srcAppFriendsFriendsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function () {
      return FriendsPageModule;
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


    var _friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./friends.page */
    "./src/app/friends/friends.page.ts");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");

    var routes = [{
      path: '',
      component: _friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]
    }];

    var FriendsPageModule = function FriendsPageModule() {
      _classCallCheck(this, FriendsPageModule);
    };

    FriendsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]]
    })], FriendsPageModule);
    /***/
  },

  /***/
  "./src/app/friends/friends.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/friends/friends.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppFriendsFriendsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input {\n  border: 1px solid #eee !important;\n  background: #eee !important;\n}\n\n.searchbar-search-icon {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kcy9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxmcmllbmRzXFxmcmllbmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZnJpZW5kcy9mcmllbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURDQTtFQUNJLHdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9mcmllbmRzL2ZyaWVuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaGJhci1zZWFyY2gtaWNvbntcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufSIsImlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/friends/friends.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/friends/friends.page.ts ***!
    \*****************************************/

  /*! exports provided: FriendsPage */

  /***/
  function srcAppFriendsFriendsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsPage", function () {
      return FriendsPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var FriendsPage =
    /*#__PURE__*/
    function () {
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

      _createClass(FriendsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.tab = 'friends';
          this.title = 'Friends';
          this.searchFriend = '';

          if (this.afAuth.auth.currentUser != null) {
            this.dataProvider.getRequests(this.dataProvider.getCurrentUserId()).get().then(function (requestsRes) {
              if (requestsRes.payload != null) {
                var requests = requestsRes.payload.data();
                console.log(requests);

                if (requests != null) {
                  if (requests.friendRequests != null && requests.friendRequests != undefined) {
                    _this.friendRequestCount = requests.friendRequests.length;
                  } else {
                    _this.friendRequestCount = 0;
                  }
                } else {
                  _this.friendRequestCount = 0;
                }

                console.log(_this.friendRequestCount);
              }
            });
            this.getFriends();
          }
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged($event) {
          if (this.tab == 'friends') {
            this.title = "Friends";
            this.getFriends();
          } else if (this.tab == 'requests') {
            this.title = "Friend Requests";
            this.getFriendRequests();
          } else if (this.tab == 'search') {
            this.title = "Find New Friends";
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

          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (user) {
            var account = user.payload.data();
            console.log(account);

            _this2.loadingProvider.hide();

            if (account != null && account.friends != null) {
              for (var i = 0; i < account.friends.length; i++) {
                _this2.dataProvider.getUser(account.payload.data().friends[i]).snapshotChanges().subscribe(function (friend) {
                  if (friend.payload != null) {
                    var friendData = Object.assign({
                      $key: friend.payload.id
                    }, friend.payload.data);

                    _this2.addOrUpdateFriend(friendData);
                  }
                });
              }
            } else {
              _this2.friends = [];
            }
          });
        } // Add or update friend data for real-time sync.

      }, {
        key: "addOrUpdateFriend",
        value: function addOrUpdateFriend(friend) {
          console.log(friend);

          if (!this.friends) {
            this.friends = [friend];
          } else {
            var index = -1;

            for (var i = 0; i < this.friends.length; i++) {
              if (this.friends[i].$key == friend.$key) {
                index = i;
              }
            }

            if (index > -1) {
              this.friends[index] = friend;
            } else {
              this.friends.push(friend);
            }
          }

          console.log(this.friends);
        } // Proceed to userInfo page.

      }, {
        key: "viewUser",
        value: function viewUser(userId) {
          console.log(userId);
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

          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (accountRes) {
            _this3.account = accountRes.payload.data();
            console.log(_this3.account); // Get friendRequests and requestsSent of the user.

            _this3.dataProvider.getRequests(_this3.account.userId).get().then(function (requestsRes) {
              // friendRequests.
              var requests = requestsRes.payload.data();

              if (requests != null) {
                if (requests.friendRequests != null && requests.friendRequests != undefined) {
                  _this3.friendRequests = [];
                  _this3.friendRequestCount = requests.friendRequests.length;
                  requests.friendRequests.forEach(function (userId) {
                    _this3.dataProvider.getUser(userId).snapshotChanges().subscribe(function (sender) {
                      sender = Object.assign({
                        $key: sender.key
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
                        $key: receiver.key
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
        } // Add or update friend request only if not yet friends.

      }, {
        key: "addOrUpdateFriendRequest",
        value: function addOrUpdateFriendRequest(sender) {
          if (!this.friendRequests) {
            this.friendRequests = [sender];
          } else {
            var index = -1;

            for (var i = 0; i < this.friendRequests.length; i++) {
              if (this.friendRequests[i].$key == sender.$key) {
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
            _this4.loadingProvider.hide(); // applying Filters


            var acc = accounts.filter(function (c) {
              if (c.key == null && c.key == undefined && c.payload.doc.data() == null) {
                return false;
              }

              if (c.payload.doc.data().name == '' || c.payload.doc.data().name == ' ' || c.payload.doc.data().name == undefined) {
                return false;
              }

              if (c.payload.doc.data().publicVisibility == false) {
                return false;
              }

              return true;
            });
            _this4.accounts = acc.map(function (c) {
              return Object.assign({
                $key: c.key
              }, c.payload.doc.data());
            });

            _this4.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (accountRes) {
              var account = accountRes.payload.data(); // Add own userId as exludedIds.
              // console.log(account.payload.data());

              _this4.excludedIds = [];

              if (_this4.excludedIds.indexOf(account.userId) == -1) {
                _this4.excludedIds.push(account.userId);
              } // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.


              if (account != null) {
                // console.log(account.payload.data().friends);
                if (account.friends != null) {
                  account.friends.forEach(function (friend) {
                    if (_this4.excludedIds.indexOf(friend) == -1) {
                      _this4.excludedIds.push(friend);
                    }
                  });
                }
              } // Get requests of the currentUser.


              _this4.dataProvider.getRequests(account.userId).get().then(function (requests) {
                if (requests.payload != null) {
                  _this4.requestsSent = requests.payload.data().requestsSent;
                  _this4.friendRequests = requests.payload.data().friendRequests;
                }
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
              if (this.requestsSent[i] == user.$key) {
                return 1;
              }
            }
          }

          if (this.friendRequests) {
            for (var j = 0; j < this.friendRequests.length; j++) {
              if (this.friendRequests[j] == user.$key) {
                return 2;
              }
            }
          }

          return 0;
        }
      }]);

      return FriendsPage;
    }();

    FriendsPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    FriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friends',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friends.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friends.page.scss */
      "./src/app/friends/friends.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], FriendsPage);
    /***/
  }
}]);
//# sourceMappingURL=friends-friends-module-es5.js.map