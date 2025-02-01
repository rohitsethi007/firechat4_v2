(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_messages_messages_module_ts"], {
    /***/
    84812:
    /*!*********************************************!*\
      !*** ./src/app/messages/messages.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessagesPageModule": function MessagesPageModule() {
          return (
            /* binding */
            _MessagesPageModule
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


      var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./messages.page */
      63567);
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/share.module */
      32218);

      var routes = [{
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage
      }];

      var _MessagesPageModule = /*#__PURE__*/_createClass(function MessagesPageModule() {
        _classCallCheck(this, MessagesPageModule);
      });

      _MessagesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage]
      })], _MessagesPageModule);
      /***/
    },

    /***/
    63567:
    /*!*******************************************!*\
      !*** ./src/app/messages/messages.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessagesPage": function MessagesPage() {
          return (
            /* binding */
            _MessagesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_messages_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./messages.page.html */
      50875);
      /* harmony import */


      var _messages_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./messages.page.scss */
      73196);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/loading.service */
      4471);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/data.service */
      52468);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      79902);

      var _MessagesPage = /*#__PURE__*/function () {
        function MessagesPage(router, afAuth, firestore, loadingProvider, dataProvider) {
          _classCallCheck(this, MessagesPage);

          this.router = router;
          this.afAuth = afAuth;
          this.firestore = firestore;
          this.loadingProvider = loadingProvider;
          this.dataProvider = dataProvider;
          this.searchFriend = '';
          this.subscriptions = [];
          this.unreadMessageCount = 0;
        }

        return _createClass(MessagesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.afAuth.currentUser.then(function (user) {
              _this.loggedInUserId = user === null || user === void 0 ? void 0 : user.uid; // Set up unread messages count subscription

              _this.subscriptions.push(_this.afAuth.authState.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(function (user) {
                if (!user) {
                  console.log('No user logged in');
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(0);
                }

                return _this.dataProvider.getConversations(user.uid).snapshotChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(function (conversationsInfoRes) {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var _a, totalUnread, conversations, _iterator, _step, conversation, conversationSnapshot, conversationData, unreadCount;

                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          totalUnread = 0;

                          if (!(!conversationsInfoRes || conversationsInfoRes.length === 0)) {
                            _context.next = 3;
                            break;
                          }

                          return _context.abrupt("return", totalUnread);

                        case 3:
                          conversations = conversationsInfoRes.map(function (c) {
                            return Object.assign({
                              key: c.payload.doc.id
                            }, c.payload.doc.data());
                          });
                          _iterator = _createForOfIteratorHelper(conversations);
                          _context.prev = 5;

                          _iterator.s();

                        case 7:
                          if ((_step = _iterator.n()).done) {
                            _context.next = 21;
                            break;
                          }

                          conversation = _step.value;
                          _context.prev = 9;
                          _context.next = 12;
                          return this.dataProvider.getConversation(conversation.conversationId).get().toPromise();

                        case 12:
                          conversationSnapshot = _context.sent;

                          if (conversationSnapshot.exists) {
                            conversationData = conversationSnapshot.data();

                            if ((_a = conversationData === null || conversationData === void 0 ? void 0 : conversationData.messages) === null || _a === void 0 ? void 0 : _a.length) {
                              unreadCount = conversationData.messages.length - (conversation.messagesRead || 0);
                              totalUnread += unreadCount;
                            }
                          }

                          _context.next = 19;
                          break;

                        case 16:
                          _context.prev = 16;
                          _context.t0 = _context["catch"](9);
                          console.error("Error calculating unread messages:", _context.t0);

                        case 19:
                          _context.next = 7;
                          break;

                        case 21:
                          _context.next = 26;
                          break;

                        case 23:
                          _context.prev = 23;
                          _context.t1 = _context["catch"](5);

                          _iterator.e(_context.t1);

                        case 26:
                          _context.prev = 26;

                          _iterator.f();

                          return _context.finish(26);

                        case 29:
                          return _context.abrupt("return", totalUnread);

                        case 30:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee, this, [[5, 23, 26, 29], [9, 16]]);
                  }));
                }));
              })).subscribe({
                next: function next(count) {},
                error: function error(_error) {
                  console.error('Error in unread messages subscription:', _error);
                }
              }));
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Clean up subscriptions
            this.subscriptions.forEach(function (sub) {
              return sub.unsubscribe();
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.loadingProvider.show();
            this.loadConversations();
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
        }, {
          key: "loadConversations",
          value: function loadConversations() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this2 = this;

              var userId;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return this.afAuth.currentUser;

                  case 3:
                    userId = _context4.sent;

                    if (userId) {
                      _context4.next = 7;
                      break;
                    }

                    console.error('No user logged in');
                    return _context4.abrupt("return");

                  case 7:
                    this.dataProvider.getConversations(this.loggedInUserId).snapshotChanges().subscribe({
                      next: function next(conversationsInfoRes) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                          var _this3 = this;

                          var conversations, conversationPromises, processedConversations, validConversations;
                          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                            while (1) switch (_context3.prev = _context3.next) {
                              case 0:
                                console.log('Raw conversations response:', conversationsInfoRes);

                                if (!(!conversationsInfoRes || conversationsInfoRes.length === 0)) {
                                  _context3.next = 6;
                                  break;
                                }

                                console.log('No conversations found');
                                this.conversations = [];
                                this.loadingProvider.hide();
                                return _context3.abrupt("return");

                              case 6:
                                conversations = conversationsInfoRes.map(function (c) {
                                  return Object.assign({
                                    key: c.payload.doc.id
                                  }, c.payload.doc.data());
                                });
                                console.log('Mapped conversations:', conversations);
                                conversationPromises = conversations.map(function (conversation) {
                                  return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                                    var _a, userSnapshot, conversationSnapshot, conversationData, lastMessage, currentUserId;

                                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                      while (1) switch (_context2.prev = _context2.next) {
                                        case 0:
                                          _context2.prev = 0;
                                          _context2.next = 3;
                                          return this.dataProvider.getUser(conversation.key).get().toPromise();

                                        case 3:
                                          userSnapshot = _context2.sent;

                                          if (userSnapshot.exists) {
                                            _context2.next = 7;
                                            break;
                                          }

                                          console.log("No user found for conversation ".concat(conversation.key));
                                          return _context2.abrupt("return", null);

                                        case 7:
                                          conversation.friend = userSnapshot.data();
                                          _context2.next = 10;
                                          return this.dataProvider.getConversation(conversation.conversationId).get().toPromise();

                                        case 10:
                                          conversationSnapshot = _context2.sent;

                                          if (conversationSnapshot.exists) {
                                            _context2.next = 14;
                                            break;
                                          }

                                          console.log("No conversation found for ID ".concat(conversation.conversationId));
                                          return _context2.abrupt("return", null);

                                        case 14:
                                          conversationData = conversationSnapshot.data();

                                          if ((_a = conversationData === null || conversationData === void 0 ? void 0 : conversationData.messages) === null || _a === void 0 ? void 0 : _a.length) {
                                            _context2.next = 18;
                                            break;
                                          }

                                          console.log("No messages in conversation ".concat(conversation.conversationId));
                                          return _context2.abrupt("return", null);

                                        case 18:
                                          lastMessage = conversationData.messages[conversationData.messages.length - 1];
                                          conversation.date = lastMessage.date;
                                          conversation.sender = lastMessage.sender;
                                          conversation.unreadMessagesCount = conversationData.messages.length - (conversation.messagesRead || 0);
                                          currentUserId = userId.uid;

                                          if (lastMessage.type === 'text') {
                                            conversation.message = lastMessage.sender === currentUserId ? "You: ".concat(lastMessage.message) : lastMessage.message;
                                          } else {
                                            conversation.message = lastMessage.sender === currentUserId ? 'You sent a photo message.' : 'has sent you a photo message.';
                                          }

                                          return _context2.abrupt("return", conversation);

                                        case 27:
                                          _context2.prev = 27;
                                          _context2.t0 = _context2["catch"](0);
                                          console.error("Error processing conversation:", _context2.t0);
                                          return _context2.abrupt("return", null);

                                        case 31:
                                        case "end":
                                          return _context2.stop();
                                      }
                                    }, _callee2, this, [[0, 27]]);
                                  }));
                                });
                                _context3.next = 11;
                                return Promise.all(conversationPromises);

                              case 11:
                                processedConversations = _context3.sent;
                                validConversations = processedConversations.filter(function (conv) {
                                  return conv !== null;
                                }).sort(function (a, b) {
                                  return b.date - a.date;
                                });
                                console.log('Processed conversations:', validConversations);
                                validConversations.forEach(function (conversation) {
                                  _this3.addOrUpdateConversation(conversation);
                                });

                              case 15:
                              case "end":
                                return _context3.stop();
                            }
                          }, _callee3, this);
                        }));
                      },
                      error: function error(_error2) {
                        console.error('Error fetching conversations:', _error2);

                        _this2.loadingProvider.hide();
                      },
                      complete: function complete() {
                        _this2.loadingProvider.hide();
                      }
                    });
                    _context4.next = 14;
                    break;

                  case 10:
                    _context4.prev = 10;
                    _context4.t0 = _context4["catch"](0);
                    console.error('Error in loadConversations:', _context4.t0);
                    this.loadingProvider.hide();

                  case 14:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this, [[0, 10]]);
            }));
          }
        }]);
      }();

      _MessagesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
        }];
      };

      _MessagesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-messages',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_messages_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore, _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService, _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService])], _MessagesPage);
      /***/
    },

    /***/
    50875:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/messages/messages.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Messages</ion-title>\n  </ion-toolbar>\n\n  <!-- Search Bar (Only show if there are conversations) -->\n  <ion-toolbar class=\"search-toolbar ion-padding-horizontal\" *ngIf=\"conversations?.length > 0\">\n    <ion-searchbar [(ngModel)]=\"searchFriend\" \n                   placeholder=\"Search conversations\" \n                   animated=\"true\"\n                   class=\"custom-searchbar\"\n                   clear-icon=\"close-circle\"\n                   search-icon=\"search-outline\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Empty State -->\n  <div class=\"empty-state\" *ngIf=\"conversations?.length <= 0\">\n    <div class=\"empty-state-content\">\n      <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n      <h2>No Messages Yet</h2>\n      <p>Start a conversation with your friends</p>\n    </div>\n  </div>\n\n  <!-- Conversations List -->\n  <ion-list lines=\"none\" class=\"conversations-list ion-padding-horizontal\" *ngIf=\"conversations?.length > 0\">\n    <div *ngFor=\"let conversation of conversations | conversationFilter:searchFriend\"> \n      <ion-item *ngIf=\"!conversation.blocked\" \n      button\n      detail=\"false\"\n      class=\"conversation-item\"\n      [class.unread]=\"conversation.unreadMessagesCount > 0\"\n      (click)=\"message(conversation.key)\">\n\n      <!-- Avatar -->\n      <ion-avatar slot=\"start\" *ngIf=\"conversation.friend\">\n      <img [src]=\"conversation.friend.img\" \n      [alt]=\"conversation.friend.name\"\n      onError=\"this.src='./assets/images/default-dp.png'\">\n      </ion-avatar>\n\n      <!-- Message Content -->\n      <ion-label>\n      <div class=\"message-header\">\n      <h2 *ngIf=\"conversation.friend\">{{conversation.friend.name}}</h2>\n      <ion-text class=\"message-time\" color=\"medium\">\n      {{conversation.date | DateFormat}}\n      </ion-text>\n      </div>\n      <p class=\"message-preview\">{{conversation.message}}</p>\n      </ion-label>\n\n      <!-- Unread Badge -->\n      <ion-badge *ngIf=\"conversation.unreadMessagesCount > 0\"\n          slot=\"end\" \n          class=\"unread-badge\">\n      {{conversation.unreadMessagesCount}}\n      </ion-badge>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    73196:
    /*!*********************************************!*\
      !*** ./src/app/messages/messages.page.scss ***!
      \*********************************************/

    /***/
    function _(module) {
      module.exports = ":host ion-header ion-toolbar {\n  --background: transparent;\n}\n:host ion-header ion-toolbar ion-back-button {\n  --color: var(--ion-color-dark);\n  --icon-font-size: 24px;\n}\n:host ion-header ion-toolbar ion-title {\n  font-size: 20px;\n  font-weight: 600;\n}\n:host ion-header .search-toolbar {\n  --background: transparent;\n  padding-bottom: 8px;\n}\n:host ion-header .search-toolbar .custom-searchbar {\n  --background: var(--ion-color-light);\n  --border-radius: 12px;\n  --box-shadow: none;\n  --placeholder-color: var(--ion-color-medium);\n  --icon-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n  padding: 0;\n  height: 46px;\n}\n:host .empty-state {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n}\n:host .empty-state .empty-state-content {\n  text-align: center;\n}\n:host .empty-state .empty-state-content ion-icon {\n  font-size: 64px;\n  color: var(--ion-color-medium);\n  margin-bottom: 16px;\n}\n:host .empty-state .empty-state-content h2 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  margin: 0 0 8px;\n}\n:host .empty-state .empty-state-content p {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n  margin: 0;\n}\n:host .conversations-list {\n  background: transparent;\n  padding-top: 8px;\n}\n:host .conversations-list .conversation-item {\n  --padding-start: 12px;\n  --padding-end: 12px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --background: transparent;\n  --min-height: 60px;\n}\n:host .conversations-list .conversation-item .message-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2px;\n}\n:host .conversations-list .conversation-item .message-header h2 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n:host .conversations-list .conversation-item .message-header .message-time {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n:host .conversations-list .conversation-item .message-preview {\n  color: var(--ion-color-medium);\n  margin: 0;\n  font-size: 13px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n:host .conversations-list .conversation-item .unread-badge {\n  --background: var(--ion-color-primary);\n  --color: white;\n  --padding-start: 6px;\n  --padding-end: 6px;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 500;\n  margin-left: 6px;\n}\n:host .conversations-list .conversation-item ion-avatar {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n:host .conversations-list ion-item.conversation-item {\n  --border-style: solid;\n  --border-color: rgba(0, 0, 0, 0.08);\n  --border-width: 0 0 1px 0;\n}\n:host .conversations-list ion-item.conversation-item:last-child {\n  --border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLHlCQUFBO0FBRlI7QUFJUTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUFGVjtBQUtRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBSFY7QUFPTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQU9RO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFMVjtBQVdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVROO0FBV007RUFDRSxrQkFBQTtBQVRSO0FBV1E7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVRWO0FBWVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFWVjtBQWFRO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQVhWO0FBaUJJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQWZOO0FBaUJNO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBZlI7QUFpQlE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBZlY7QUFpQlU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFmWjtBQWtCVTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtBQWhCWjtBQW9CUTtFQUNFLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFsQlY7QUFxQlE7RUFDRSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFuQlY7QUFzQlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBcEJWO0FBeUJNO0VBQ0UscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0FBdkJSO0FBeUJRO0VBQ0UsaUJBQUE7QUF2QlYiLCJmaWxlIjoibWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC8vIEhlYWRlciBTdHlsZXNcbiAgICBpb24taGVhZGVyIHtcbiAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIC0taWNvbi1mb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAuc2VhcmNoLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBcbiAgICAgICAgLmN1c3RvbS1zZWFyY2hiYXIge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIC0taWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvLyBFbXB0eSBTdGF0ZVxuICAgIC5lbXB0eS1zdGF0ZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMzJweDtcbiAgXG4gICAgICAuZW1wdHktc3RhdGUtY29udGVudCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIENvbnZlcnNhdGlvbnMgTGlzdFxuICAgIC5jb252ZXJzYXRpb25zLWxpc3Qge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICBcbiAgICAgIC5jb252ZXJzYXRpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tbWluLWhlaWdodDogNjBweDsgLy8gRm9yIG1vcmUgY29tcGFjdCBoZWlnaHRcbiAgICAgICAgXG4gICAgICAgIC5tZXNzYWdlLWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7IC8vIFJlZHVjZWQgbWFyZ2luXG4gICAgICBcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7IC8vIFNsaWdodGx5IHNtYWxsZXIgZm9udFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgLm1lc3NhZ2UtdGltZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLm1lc3NhZ2UtcHJldmlldyB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7IC8vIFNsaWdodGx5IHNtYWxsZXIgZm9udFxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC51bnJlYWQtYmFkZ2Uge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDZweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDE4cHg7IC8vIFNsaWdodGx5IHNtYWxsZXIgYmFkZ2VcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7IC8vIFNsaWdodGx5IHNtYWxsZXIgYXZhdGFyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBPcHRpb25hbDogQWRkIHN1YnRsZSBib3JkZXIgYmV0d2VlbiBpdGVtc1xuICAgICAgaW9uLWl0ZW0uY29udmVyc2F0aW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICAgICAgICBcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgIH1cbiAgfVxuICAiXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_messages_messages_module_ts-es5.js.map