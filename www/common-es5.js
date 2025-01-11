(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }

  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "6nsN":
    /*!******************************************************!*\
      !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
      \******************************************************/

    /*! no exports provided */

    /***/
    function nsN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/auth */
      "t6oF"); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, ev, direction, animation) {
          var router;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context.abrupt("return", false);

              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "EFyh":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function EFyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./data.service */
      "EnSQ");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./loading.service */
      "7ch9");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "up+p");
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      "GGTb");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(afAuth, firestore, dataService, loadingProvider, platform, gplus, facebook, router) {
          _classCallCheck(this, LoginService);

          this.afAuth = afAuth;
          this.firestore = firestore;
          this.dataService = dataService;
          this.loadingProvider = loadingProvider;
          this.platform = platform;
          this.gplus = gplus;
          this.facebook = facebook;
          this.router = router;
        }

        return _createClass(LoginService, [{
          key: "login",
          value: function login(email, password) {
            var _this = this;

            this.loadingProvider.show();
            this.afAuth.signInWithEmailAndPassword(email, password).then(function (res) {
              console.log(res);
              console.log("******* " + _this.afAuth.user + " *********"); //this.dataService.getUser(this.afAuth.user.)

              _this.loadingProvider.hide();
            })["catch"](function (err) {
              console.log(err);

              _this.loadingProvider.hide();

              _this.loadingProvider.showToast(err.message);
            });
          }
        }, {
          key: "register",
          value: function register(name, username, email, password, img) {
            var _this2 = this;

            this.loadingProvider.show();
            this.afAuth.createUserWithEmailAndPassword(email, password).then(function (res) {
              var user = _this2.afAuth.currentUser;

              _this2.loadingProvider.hide();

              _this2.createNewUser(user.uid, name, username, user.email, "I am available", "Firebase", img);
            })["catch"](function (err) {
              console.log(err);

              _this2.loadingProvider.hide();

              _this2.loadingProvider.showToast(err.message);
            });
          }
        }, {
          key: "reset",
          value: function reset(email) {
            var _this3 = this;

            console.log(email);
            this.loadingProvider.show();
            this.afAuth.sendPasswordResetEmail(email).then(function () {
              _this3.loadingProvider.hide();

              _this3.loadingProvider.showToast("Please Check your inbox");
            })["catch"](function (err) {
              _this3.loadingProvider.hide();

              _this3.loadingProvider.showToast(err.message);
            });
          }
        }, {
          key: "fbLogin",
          value: function fbLogin() {
            var _this4 = this;

            if (this.platform.is('desktop')) {
              this.loadingProvider.show();
              this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.FacebookAuthProvider()).then(function (res) {
                _this4.loadingProvider.hide();

                var credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.FacebookAuthProvider.credential(res.credential.accessToken);

                _this4.afAuth.signInWithCredential(credential).then(function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    var uid, userInfo;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!res.additionalUserInfo.isNewUser) {
                            _context2.next = 8;
                            break;
                          }

                          _context2.next = 3;
                          return this.afAuth.currentUser.then(function (data) {
                            return data.uid;
                          });

                        case 3:
                          uid = _context2.sent;
                          userInfo = res.additionalUserInfo.profile;
                          this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Facebook', userInfo.picture);
                          _context2.next = 9;
                          break;

                        case 8:
                          this.router.navigateByUrl('tabs');

                        case 9:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2, this);
                  }));
                })["catch"](function (err) {
                  return console.log(err);
                });
              })["catch"](function (err) {
                console.log(err);

                _this4.loadingProvider.hide();
              });
            } else {
              this.facebook.login(['public_profile', 'email']).then(function (res) {
                console.log(res);
                var credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.FacebookAuthProvider.credential(res.authResponse.accessToken);

                _this4.loadingProvider.show();

                _this4.afAuth.signInWithCredential(credential).then(function (res) {
                  if (res.additionalUserInfo.isNewUser) {
                    _this4.facebook.api("me/?fields=id,email,first_name,picture,gender", ["public_profile", "email"]).then(function (data) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                        var uid;
                        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                          while (1) switch (_context3.prev = _context3.next) {
                            case 0:
                              console.log(data);
                              _context3.next = 3;
                              return this.afAuth.currentUser.then(function (data) {
                                return data.uid;
                              });

                            case 3:
                              uid = _context3.sent;
                              this.createNewUser(uid, data.first_name, uid, data.email, 'I am available', 'Facebook', data.picture.data.url);

                            case 5:
                            case "end":
                              return _context3.stop();
                          }
                        }, _callee3, this);
                      }));
                    })["catch"](function (err) {
                      console.log(err);

                      _this4.loadingProvider.hide();
                    });
                  } else {
                    _this4.router.navigateByUrl('tabs');
                  }
                })["catch"](function (error) {
                  _this4.loadingProvider.hide();
                });
              })["catch"](function (err) {
                return console.log(err);
              });
            }
          }
        }, {
          key: "gLogin",
          value: function gLogin() {
            var _this5 = this;

            if (this.platform.is('desktop')) {
              this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.GoogleAuthProvider()).then(function (res) {
                var credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.GoogleAuthProvider.credential(res.credential.idToken, res.credential.accessToken);

                _this5.afAuth.signInWithCredential(credential).then(function () {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                    var uid, userInfo;
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!res.additionalUserInfo.isNewUser) {
                            _context4.next = 8;
                            break;
                          }

                          _context4.next = 3;
                          return this.afAuth.currentUser.then(function (data) {
                            return data.uid;
                          });

                        case 3:
                          uid = _context4.sent;
                          userInfo = res.additionalUserInfo.profile;
                          this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
                          _context4.next = 9;
                          break;

                        case 8:
                          this.router.navigateByUrl('tabs');

                        case 9:
                        case "end":
                          return _context4.stop();
                      }
                    }, _callee4, this);
                  }));
                })["catch"](function (err) {
                  console.log("Err! signInWithCredential" + err);
                });
              })["catch"](function (err) {
                console.log('Err! signInWithCredential' + err);
              });
            } else {
              this.gplus.login({
                webClientId: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].googleClientId
              }).then(function (result) {
                var credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.GoogleAuthProvider.credential(result['token'], null);

                _this5.afAuth.signInWithCredential(credential).then(function (res) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                    var uid, userInfo;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          if (!res.additionalUserInfo.isNewUser) {
                            _context5.next = 8;
                            break;
                          }

                          _context5.next = 3;
                          return this.afAuth.currentUser.then(function (data) {
                            return data.uid;
                          });

                        case 3:
                          uid = _context5.sent;
                          userInfo = res.additionalUserInfo.profile;
                          this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
                          _context5.next = 9;
                          break;

                        case 8:
                          this.router.navigateByUrl('tabs');

                        case 9:
                        case "end":
                          return _context5.stop();
                      }
                    }, _callee5, this);
                  }));
                })["catch"](function (err) {
                  console.log("Err! signInWithCredential" + err);
                });
              })["catch"](function (err) {
                console.log(err);
              });
            }
          }
        }, {
          key: "createNewUser",
          value: function createNewUser(userId, name, username, email) {
            var _this6 = this;

            var description = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "I'm available";
            var provider = arguments.length > 5 ? arguments[5] : undefined;
            var img = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "./assets/images/default-dp.png";
            var dateCreated = new Date();
            this.firestore.collection('accounts').doc(userId).set({
              dateCreated: dateCreated,
              username: username,
              name: name,
              userId: userId,
              email: email,
              description: description,
              provider: provider,
              img: img
            }).then(function () {
              _this6.router.navigateByUrl('tabs');
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this7 = this;

            this.afAuth.signOut().then(function () {
              return _this7.router.navigateByUrl('/login', {
                replaceUrl: true
              });
            });
          }
        }]);
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"]
        }, {
          type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__["Facebook"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }];
      };

      LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__["Facebook"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])], LoginService);
      /***/
    },

    /***/
    "Z2Br":
    /*!**********************************************!*\
      !*** ./src/app/services/firebase.service.ts ***!
      \**********************************************/

    /*! exports provided: FirebaseService */

    /***/
    function Z2Br(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
        return FirebaseService;
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


      var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loading.service */
      "7ch9");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data.service */
      "EnSQ");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");

      var FirebaseService = /*#__PURE__*/function () {
        function FirebaseService(firestore, loadingProvider, afAuth, dataProvider) {
          _classCallCheck(this, FirebaseService);

          this.firestore = firestore;
          this.loadingProvider = loadingProvider;
          this.afAuth = afAuth;
          this.dataProvider = dataProvider;
        } // Send friend request to userId.


        return _createClass(FirebaseService, [{
          key: "sendFriendRequest",
          value: function sendFriendRequest(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this8 = this;

              var loggedInUserId, requestsSent;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.afAuth.currentUser.then(function (data) {
                      return data.uid;
                    });

                  case 2:
                    loggedInUserId = _context6.sent;
                    this.loadingProvider.show();
                    // Use take(1) so that subscription will only trigger once.
                    this.dataProvider.getRequests(loggedInUserId).get().subscribe(function (requests) {
                      if (requests.data() != null && requests.data().requestsSent != null) {
                        requestsSent = requests.data().requestsSent;
                      }

                      if (requestsSent == null || requestsSent === undefined) {
                        requestsSent = [userId];
                      } else {
                        if (requestsSent.indexOf(userId) === -1) {
                          requestsSent.push(userId);
                        }
                      } // Add requestsSent information.


                      _this8.firestore.collection('requests').doc(loggedInUserId).set({
                        requestsSent: requestsSent
                      }).then(function (success) {
                        var friendRequests; // tslint:disable-next-line: no-shadowed-variable

                        _this8.dataProvider.getRequests(userId).get().subscribe(function (requests) {
                          if (requests.data() != null && requests.data().friendRequests != null) {
                            friendRequests = requests.data().friendRequests;
                          }

                          if (friendRequests == null) {
                            friendRequests = [loggedInUserId];
                          } else {
                            if (friendRequests.indexOf(userId) === -1) {
                              friendRequests.push(loggedInUserId);
                            }
                          } // Add friendRequest information.


                          _this8.firestore.collection('requests').doc(userId).set({
                            friendRequests: friendRequests
                          }).then(function (succ) {
                            _this8.loadingProvider.hide();

                            _this8.loadingProvider.showToast('Friend Request Sent');
                          })["catch"](function (error) {
                            _this8.loadingProvider.hide();
                          });
                        });
                      })["catch"](function (error) {
                        console.log('error', error);

                        _this8.loadingProvider.hide();
                      });
                    });

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          } // Cancel friend request sent to userId.

        }, {
          key: "cancelFriendRequest",
          value: function cancelFriendRequest(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this9 = this;

              var loggedInUserId, requestsSent;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.afAuth.currentUser.then(function (data) {
                      return data.uid;
                    });

                  case 2:
                    loggedInUserId = _context7.sent;
                    this.loadingProvider.show();
                    requestsSent = [];
                    this.dataProvider.getRequests(loggedInUserId).get().subscribe(function (requests) {
                      requestsSent = requests.data().requestsSent;
                      requestsSent.splice(requestsSent.indexOf(userId), 1); // Update requestSent information.

                      _this9.firestore.collection('requests').doc(loggedInUserId).set({
                        requestsSent: requestsSent
                      }).then(function (success) {
                        var friendRequests;

                        _this9.dataProvider.getRequests(userId).get().subscribe(function (req) {
                          friendRequests = req.data().friendRequests;
                          console.log(friendRequests);
                          friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1); // Update friendRequests information.

                          _this9.firestore.collection('requests').doc(userId).set({
                            friendRequests: friendRequests
                          }).then(function (succ) {
                            console.log(succ);

                            _this9.loadingProvider.hide();

                            _this9.loadingProvider.showToast('Removed Friend Request');
                          })["catch"](function (error) {
                            console.log(error);

                            _this9.loadingProvider.hide();
                          });
                        });
                      })["catch"](function (error) {
                        console.log(error);

                        _this9.loadingProvider.hide();
                      });
                    });

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          } // Delete friend request.

        }, {
          key: "deleteFriendRequest",
          value: function deleteFriendRequest(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this10 = this;

              var loggedInUserId, friendRequests;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.afAuth.currentUser.then(function (data) {
                      return data.uid;
                    });

                  case 2:
                    loggedInUserId = _context8.sent;
                    this.loadingProvider.show();
                    friendRequests = [];
                    this.dataProvider.getRequests(loggedInUserId).get().subscribe(function (requests) {
                      friendRequests = requests.data().friendRequests;
                      friendRequests = friendRequests.filter(function (u) {
                        return u !== userId;
                      }); // Update friendRequests information.

                      _this10.firestore.collection('requests').doc(loggedInUserId).set({
                        friendRequests: friendRequests
                      }).then(function (success) {
                        var requestsSent;

                        _this10.dataProvider.getRequests(userId).get().subscribe(function (req) {
                          requestsSent = req.data().requestsSent;
                          requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1);
                          console.log('requestsSent:', requestsSent, loggedInUserId, requestsSent.indexOf(userId), 1); // Update requestsSent information.

                          _this10.firestore.collection('requests').doc(userId).set({
                            requestsSent: requestsSent
                          }).then(function (succ) {
                            console.log(succ);

                            _this10.loadingProvider.hide();
                          })["catch"](function (error) {
                            console.log(error);

                            _this10.loadingProvider.hide();
                          });
                        });
                      })["catch"](function (err) {
                        console.log(err);

                        _this10.loadingProvider.hide();
                      });
                    });

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          } // Accept friend request.

        }, {
          key: "acceptFriendRequest",
          value: function acceptFriendRequest(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this11 = this;

              var loggedInUserId;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.afAuth.currentUser.then(function (data) {
                      return data.uid;
                    });

                  case 2:
                    loggedInUserId = _context9.sent;
                    // Delete friend request.
                    this.deleteFriendRequest(userId);
                    this.loadingProvider.show();
                    this.dataProvider.getUser(loggedInUserId).get().subscribe(function (account) {
                      var friends = account.data().friends;

                      if (!friends) {
                        friends = [userId];
                      } else {
                        friends.push(userId);
                      } // Add both users as friends.


                      _this11.dataProvider.getUser(loggedInUserId).update({
                        friends: friends
                      }).then(function (success) {
                        _this11.dataProvider.getUser(userId).get().subscribe(function (acc) {
                          var friends = acc.data().friends;

                          if (!friends) {
                            friends = [loggedInUserId];
                          } else {
                            friends.push(loggedInUserId);
                          }

                          _this11.dataProvider.getUser(userId).update({
                            friends: friends
                          }).then(function (succ) {
                            _this11.loadingProvider.hide();
                          })["catch"](function (error) {
                            _this11.loadingProvider.hide();
                          });
                        });
                      })["catch"](function (error) {
                        _this11.loadingProvider.hide();
                      });
                    });

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }]);
      }();

      FirebaseService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      };

      FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], FirebaseService);
      /***/
    },

    /***/
    "Zcj0":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function Zcj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      "KF81");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "spDm":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function spDm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      "W6o/");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(delegate, container, component, cssClasses, componentProps) {
          var el;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                if (!delegate) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context10.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);
                _context10.next = 10;
                return new Promise(function (resolve) {
                  return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                });

              case 10:
                return _context10.abrupt("return", el);

              case 11:
              case "end":
                return _context10.stop();
            }
          }, _callee10);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map