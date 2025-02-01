(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_friends_friends_module_ts"], {
    /***/
    50945:
    /*!*******************************************!*\
      !*** ./src/app/friends/friends.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FriendsPageModule": function FriendsPageModule() {
          return (
            /* binding */
            _FriendsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _friends_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./friends.page */
      50488);
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/share.module */
      32218);

      var routes = [{
        path: '',
        component: _friends_page__WEBPACK_IMPORTED_MODULE_0__.FriendsPage
      }];

      var _FriendsPageModule = /*#__PURE__*/_createClass(function FriendsPageModule() {
        _classCallCheck(this, FriendsPageModule);
      });

      _FriendsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_0__.FriendsPage]
      })], _FriendsPageModule);
      /***/
    },

    /***/
    50488:
    /*!*****************************************!*\
      !*** ./src/app/friends/friends.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FriendsPage": function FriendsPage() {
          return (
            /* binding */
            _FriendsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_friends_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./friends.page.html */
      92696);
      /* harmony import */


      var _friends_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./friends.page.scss */
      1172);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      52468);
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/loading.service */
      4471);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/firebase.service */
      19446);

      var _FriendsPage = /*#__PURE__*/function () {
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
            this.afAuth.currentUser.then(function (user) {
              _this.loggedInUserId = user === null || user === void 0 ? void 0 : user.uid;
              console.info('this.afAuth.currentUser', _this.loggedInUserId);

              _this.dataProvider.getRequests(_this.loggedInUserId).snapshotChanges().subscribe(function (requestsRes) {
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
            });
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this5 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Send Friend Request',
                      message: "Would you like to connect with <strong>".concat(user.name, "</strong>?"),
                      cssClass: 'custom-alert friend-request-alert',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'alert-button-cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Send Request',
                        cssClass: 'alert-button-confirm',
                        handler: function handler() {
                          _this5.firebaseProvider.sendFriendRequest(user.$key);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "acceptFriendRequest",
          value: function acceptFriendRequest(user) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this6 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: 'Friend Request',
                      message: "<div class=\"request-content\">\n                  <div class=\"user-avatar\">\n                    <img src=\"".concat(user.img || './assets/images/default-dp.png', "\" alt=\"").concat(user.name, "\">\n                  </div>\n                  <div class=\"request-text\">\n                    <strong>").concat(user.name, "</strong> wants to connect with you\n                  </div>\n                </div>"),
                      cssClass: 'custom-alert incoming-request-alert',
                      buttons: [{
                        text: 'Decline',
                        role: 'cancel',
                        cssClass: 'alert-button-cancel'
                      }, {
                        text: 'Accept',
                        cssClass: 'alert-button-confirm',
                        handler: function handler() {
                          _this6.firebaseProvider.acceptFriendRequest(user.$key);
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
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

      _FriendsPage.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseService
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }];
      };

      _FriendsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-friends',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_friends_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_friends_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService, _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController, _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseService, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth, _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router])], _FriendsPage);
      /***/
    },

    /***/
    92696:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/friends/friends.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n  \n  <!-- Modern Segmented Control -->\n  <ion-toolbar class=\"segment-toolbar\">\n    <ion-segment [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\" mode=\"ios\" class=\"custom-segment\">\n      <ion-segment-button value=\"friends\">\n        <ion-label>Friends</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"requests\">\n        <ion-label>\n          Requests\n          <ion-badge *ngIf=\"friendRequestCount > 0\">{{friendRequestCount}}</ion-badge>\n        </ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"search\">\n        <ion-label>Find New</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n  <div [ngSwitch]=\"tab\">\n    <!-- Friends Tab -->\n    <div *ngSwitchCase=\"'friends'\" class=\"ion-padding-horizontal\">\n      <!-- Search Bar -->\n      <ion-searchbar *ngIf=\"friends?.length > 0\"\n        [(ngModel)]=\"searchFriend\" \n        placeholder=\"Search friends\" \n        animated=\"true\"\n        class=\"custom-searchbar\"\n        clear-icon=\"close-circle\"\n        search-icon=\"search-outline\">\n      </ion-searchbar>\n\n      <!-- Empty State -->\n      <div class=\"empty-state\" *ngIf=\"friends?.length === 0\">\n        <ion-icon name=\"people-outline\"></ion-icon>\n        <h2>No Friends Yet</h2>\n        <p>Start connecting with new people</p>\n      </div>\n\n      <!-- Friends List -->\n      <ion-list lines=\"none\" class=\"friends-list\" *ngIf=\"friends?.length > 0\">\n        <ion-item *ngFor=\"let friend of friends | friendFilter:searchFriend\"\n                  button\n                  detail=\"false\"\n                  class=\"friend-item\"\n                  (click)=\"message(friend.$key); $event.stopPropagation();\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"friend.img\" [alt]=\"friend.name\" onError=\"this.src='./assets/images/default-dp.png'\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{friend.name}}</h2>\n            <p>{{friend.description}}</p>\n          </ion-label>\n          <ion-badge slot=\"end\" color=\"success\" class=\"online-badge\" *ngIf=\"friend.online\">\n            <ion-icon name=\"ellipse\"></ion-icon>\n            Online\n          </ion-badge>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <!-- Requests Tab -->\n    <div *ngSwitchCase=\"'requests'\" class=\"ion-padding-horizontal\">\n      <!-- Empty State -->\n      <div class=\"empty-state\" \n           *ngIf=\"(friendRequests?.length === 0) && (requestsSent?.length === 0)\">\n        <ion-icon name=\"mail-outline\"></ion-icon>\n        <h2>No Requests</h2>\n        <p>You don't have any pending friend requests</p>\n      </div>\n\n      <!-- Received Requests -->\n      <div *ngIf=\"friendRequests?.length > 0\">\n        <h3 class=\"section-title\">Received Requests</h3>\n        <ion-list lines=\"none\" class=\"requests-list\">\n          <ion-item *ngFor=\"let request of friendRequests\" \n                    button\n                    detail=\"false\"\n                    class=\"request-item\"\n                    (click)=\"viewUser(request.$key)\">\n            <ion-avatar slot=\"start\">\n              <img [src]=\"request.img\" [alt]=\"request.name\" onError=\"this.src='./assets/images/default-dp.png'\">\n            </ion-avatar>\n            <ion-label>\n              <h2>{{request.name}}</h2>\n              <p>Sent you a friend request</p>\n            </ion-label>\n            <ion-button fill=\"solid\" \n                        color=\"primary\"\n                        (click)=\"acceptFriendRequest(request); $event.stopPropagation();\">\n              <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\n              Accept\n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <!-- Sent Requests -->\n      <div *ngIf=\"requestsSent?.length > 0\">\n        <h3 class=\"section-title\">Sent Requests</h3>\n        <ion-list lines=\"none\" class=\"requests-list\">\n          <ion-item *ngFor=\"let sent of requestsSent\" \n                    button\n                    detail=\"false\"\n                    class=\"request-item\"\n                    (click)=\"viewUser(sent.$key)\">\n            <ion-avatar slot=\"start\">\n              <img [src]=\"sent.img\" [alt]=\"sent.name\" onError=\"this.src='./assets/images/default-dp.png'\">\n            </ion-avatar>\n            <ion-label>\n              <h2>{{sent.name}}</h2>\n              <p>Request sent</p>\n            </ion-label>\n            <ion-button fill=\"outline\" \n                        color=\"medium\"\n                        (click)=\"cancelFriendRequest(sent); $event.stopPropagation();\">\n              <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n              Cancel\n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n\n    <!-- Search Tab -->\n    <div *ngSwitchCase=\"'search'\" class=\"ion-padding-horizontal\">\n      <!-- Search Bar -->\n      <ion-searchbar [(ngModel)]=\"searchUser\" \n                     placeholder=\"Search people\" \n                     animated=\"true\"\n                     class=\"custom-searchbar\"\n                     clear-icon=\"close-circle\"\n                     search-icon=\"search-outline\">\n      </ion-searchbar>\n\n<!-- Discovery Methods when no search is active -->\n<div *ngIf=\"!searchUser\">\n\n  <ion-list lines=\"none\" class=\"users-list\" *ngIf=\"groupMembers?.length > 0\">\n    <ion-item *ngFor=\"let account of groupMembers\"\n              button\n              detail=\"false\"\n              class=\"user-item\"\n              (click)=\"viewUser(account.$key)\">\n      <!-- Same item template as your existing one -->\n      <ion-avatar slot=\"start\">\n        <img [src]=\"account.img\" [alt]=\"account.name\" onError=\"this.src='./assets/images/default-dp.png'\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{account.name}}</h2>\n        <p>@{{account.username}}</p>\n      </ion-label>\n      \n      <!-- Your existing button logic -->\n      <ion-button *ngIf=\"getStatus(account) === 0\"\n                  fill=\"solid\"\n                  color=\"primary\"\n                  (click)=\"sendFriendRequest(account); $event.stopPropagation();\">\n        <ion-icon name=\"person-add-outline\" slot=\"start\"></ion-icon>\n        Add\n      </ion-button>\n      <!-- Include your Cancel and Accept button logic here -->\n    </ion-item>\n  </ion-list>\n\n  <!-- Import Options -->\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Import Contacts</ion-label>\n    </ion-list-header>\n\n    <ion-item button (click)=\"importPhoneContacts()\" detail=\"true\">\n      <ion-icon name=\"phone-portrait-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Phone Contacts</h2>\n        <p>Find friends from your contact list</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item button (click)=\"importFacebookContacts()\" detail=\"true\">\n      <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Facebook</h2>\n        <p>Connect with Facebook friends</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item button (click)=\"importTwitterContacts()\" detail=\"true\">\n      <ion-icon name=\"logo-twitter\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Twitter</h2>\n        <p>Find friends from Twitter</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n\n<!-- Search Results -->\n<div *ngIf=\"searchUser\">\n  <!-- Your existing empty state -->\n  <div class=\"empty-state\" *ngIf=\"accounts?.length === 0\">\n    <ion-icon name=\"search-outline\"></ion-icon>\n    <h2>No Users Found</h2>\n    <p>Try searching for people to connect with</p>\n  </div>\n\n  <!-- Your existing users list -->\n  <ion-list lines=\"none\" class=\"users-list\" *ngIf=\"accounts?.length > 0\">\n    <ion-item *ngFor=\"let account of accounts | searchFilter: [excludedIds, searchUser]\"\n              button\n              detail=\"false\"\n              class=\"user-item\"\n              (click)=\"viewUser(account.$key)\">\n      <!-- Your existing item template -->\n      <ion-avatar slot=\"start\">\n        <img [src]=\"account.img\" [alt]=\"account.name\" onError=\"this.src='./assets/images/default-dp.png'\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{account.name}}</h2>\n        <p>@{{account.username}}</p>\n      </ion-label>\n      \n      <!-- Your existing buttons -->\n      <ion-button *ngIf=\"getStatus(account) === 0\"\n                  fill=\"solid\"\n                  color=\"primary\"\n                  (click)=\"sendFriendRequest(account); $event.stopPropagation();\">\n        <ion-icon name=\"person-add-outline\" slot=\"start\"></ion-icon>\n        Add\n      </ion-button>\n\n      <!-- Include your Cancel and Accept button logic here -->\n    </ion-item>\n  </ion-list>\n</div>\n\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    1172:
    /*!*******************************************!*\
      !*** ./src/app/friends/friends.page.scss ***!
      \*******************************************/

    /***/
    function _(module) {
      module.exports = ":host ion-header ion-toolbar {\n  --background: transparent;\n}\n:host ion-header ion-toolbar ion-title {\n  font-size: 20px;\n  font-weight: 600;\n}\n:host ion-header .segment-toolbar {\n  --background: transparent;\n  padding: 0 16px 8px;\n}\n:host ion-header .segment-toolbar .custom-segment {\n  --background: var(--ion-color-light);\n  border-radius: 12px;\n}\n:host ion-header .segment-toolbar .custom-segment ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --color: var(--ion-color-medium);\n  --color-checked: white;\n  --indicator-color: transparent;\n  min-height: 40px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n}\n:host ion-header .segment-toolbar .custom-segment ion-segment-button ion-badge {\n  margin-left: 4px;\n  --background: var(--ion-color-primary);\n  --color: white;\n  font-size: 12px;\n}\n:host .custom-searchbar {\n  --background: var(--ion-color-light);\n  --border-radius: 12px;\n  --box-shadow: none;\n  --placeholder-color: var(--ion-color-medium);\n  --icon-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n  margin: 16px 0;\n  padding: 0;\n}\n:host .section-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin: 24px 0 16px;\n}\n:host ion-item {\n  --background: transparent;\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 16px;\n}\n:host ion-item ion-avatar {\n  width: 48px;\n  height: 48px;\n  margin-right: 16px;\n}\n:host ion-item ion-label h2 {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin: 0 0 4px;\n}\n:host ion-item ion-label p {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  margin: 0;\n}\n:host ion-item .online-badge {\n  --background: var(--ion-color-success);\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 6px 12px;\n}\n:host ion-item .online-badge ion-icon {\n  font-size: 8px;\n  margin-right: 4px;\n}\n:host ion-item ion-button {\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --border-radius: 8px;\n  height: 36px;\n  font-size: 14px;\n}\n:host ion-item ion-button ion-icon {\n  font-size: 16px;\n  margin-right: 4px;\n}\n:host .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 24px;\n  text-align: center;\n}\n:host .empty-state ion-icon {\n  font-size: 64px;\n  color: var(--ion-color-medium);\n  margin-bottom: 16px;\n}\n:host .empty-state h2 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin: 0 0 8px;\n}\n:host .empty-state p {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n  margin: 0;\n}\n:host ion-list-header {\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  padding-top: 16px;\n}\n:host .import-option {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n:host .empty-state {\n  text-align: center;\n  padding: 40px 16px;\n}\n:host .empty-state ion-icon {\n  font-size: 48px;\n  color: var(--ion-color-medium);\n}\n:host .empty-state h2 {\n  margin: 16px 0 8px;\n  color: var(--ion-color-dark);\n}\n:host .empty-state p {\n  color: var(--ion-color-medium);\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UseUJBQUE7QUFGTjtBQUlNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRlI7QUFNSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU1NO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtBQUpSO0FBTVE7RUFDRSw4Q0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUpWO0FBTVU7RUFDRSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFKWjtBQVlFO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFWSjtBQWFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQVhKO0FBZUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBYko7QUFlSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFiTjtBQWlCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQWZSO0FBa0JNO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQWhCUjtBQW9CSTtFQUNFLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFsQk47QUFvQk07RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFsQlI7QUFzQkk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXBCTjtBQXNCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQXBCUjtBQTBCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBeEJKO0FBMEJJO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUF4Qk47QUEyQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUF6Qk47QUE0Qkk7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBMUJOO0FBOEJFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUE1Qko7QUErQkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQTdCSjtBQWdDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUE5Qko7QUFnQ0k7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUE5Qk47QUFpQ0k7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0FBL0JOO0FBa0NJO0VBQ0UsOEJBQUE7RUFDQSxTQUFBO0FBaENOIiwiZmlsZSI6ImZyaWVuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAvLyBIZWFkZXIgU3R5bGVzXG4gIGlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VnbWVudC10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiAwIDE2cHggOHB4O1xuXG4gICAgICAuY3VzdG9tLXNlZ21lbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIFxuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblxuICAgICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDb250ZW50IFN0eWxlc1xuICAuY3VzdG9tLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIG1hcmdpbjogMjRweCAwIDE2cHg7XG4gIH1cblxuICAvLyBMaXN0IEl0ZW1zXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5vbmxpbmUtYmFkZ2Uge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBFbXB0eSBTdGF0ZVxuICAuZW1wdHktc3RhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQ4cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICB9XG4gIFxuICAuaW1wb3J0LW9wdGlvbiB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB9XG4gIFxuICAuZW1wdHktc3RhdGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4IDE2cHg7XG4gICAgXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cbiAgXG4gICAgaDIge1xuICAgICAgbWFyZ2luOiAxNnB4IDAgOHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB9XG4gIFxuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICBcbiAgXG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_friends_friends_module_ts-es5.js.map