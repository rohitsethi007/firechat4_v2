(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    "Dl6n":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function Dl6n(module, __webpack_exports__, __webpack_require__) {
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


      var createColorClasses = function createColorClasses(color) {
        return typeof color === 'string' && color.length > 0 ? _defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true) : undefined;
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
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
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

                  return _context.abrupt("return", router.push(url, direction));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3) {
          return _ref2.apply(this, arguments);
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
      "NzdG");
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      "SPri");
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

        _createClass(LoginService, [{
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
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var uid, userInfo;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
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
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var uid;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
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
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                    var uid, userInfo;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
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
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                    var uid, userInfo;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
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

        return LoginService;
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
    "TMBv":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function TMBv(module, __webpack_exports__, __webpack_require__) {
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
    "Uch9":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-3528f139.js ***!
      \*************************************************************/

    /*! exports provided: d, g, l, s, t */

    /***/
    function Uch9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return deepReady;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getIonPageElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return lifecycle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return setPageHidden;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return transition;
      });
      /* harmony import */


      var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core-80bde1aa.js */
      "54nT");
      /* harmony import */


      var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constants-3c3e1099.js */
      "kBU6");

      var iosTransitionAnimation = function iosTransitionAnimation() {
        return __webpack_require__.e(
        /*! import() | ios-transition-1850e475-js */
        "ios-transition-1850e475-js").then(__webpack_require__.bind(null,
        /*! ./ios.transition-1850e475.js */
        "QtHV"));
      };

      var mdTransitionAnimation = function mdTransitionAnimation() {
        return __webpack_require__.e(
        /*! import() | md-transition-083fcf52-js */
        "md-transition-083fcf52-js").then(__webpack_require__.bind(null,
        /*! ./md.transition-083fcf52.js */
        "cmQl"));
      };

      var transition = function transition(opts) {
        return new Promise(function (resolve, reject) {
          Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
            beforeTransition(opts);
            runTransition(opts).then(function (result) {
              if (result.animation) {
                result.animation.destroy();
              }

              afterTransition(opts);
              resolve(result);
            }, function (error) {
              afterTransition(opts);
              reject(error);
            });
          });
        });
      };

      var beforeTransition = function beforeTransition(opts) {
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        setZIndex(enteringEl, leavingEl, opts.direction);

        if (opts.showGoBack) {
          enteringEl.classList.add('can-go-back');
        } else {
          enteringEl.classList.remove('can-go-back');
        }

        setPageHidden(enteringEl, false);

        if (leavingEl) {
          setPageHidden(leavingEl, false);
        }
      };

      var runTransition = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(opts) {
          var animationBuilder, ani;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return getAnimationBuilder(opts);

                case 2:
                  animationBuilder = _context6.sent;
                  ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

                  return _context6.abrupt("return", ani);

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function runTransition(_x4) {
          return _ref3.apply(this, arguments);
        };
      }();

      var afterTransition = function afterTransition(opts) {
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        enteringEl.classList.remove('ion-page-invisible');

        if (leavingEl !== undefined) {
          leavingEl.classList.remove('ion-page-invisible');
        }
      };

      var getAnimationBuilder = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(opts) {
          var getAnimation;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                    _context7.next = 2;
                    break;
                  }

                  return _context7.abrupt("return", undefined);

                case 2:
                  if (!opts.animationBuilder) {
                    _context7.next = 4;
                    break;
                  }

                  return _context7.abrupt("return", opts.animationBuilder);

                case 4:
                  if (!(opts.mode === 'ios')) {
                    _context7.next = 10;
                    break;
                  }

                  _context7.next = 7;
                  return iosTransitionAnimation();

                case 7:
                  _context7.t0 = _context7.sent.iosTransitionAnimation;
                  _context7.next = 13;
                  break;

                case 10:
                  _context7.next = 12;
                  return mdTransitionAnimation();

                case 12:
                  _context7.t0 = _context7.sent.mdTransitionAnimation;

                case 13:
                  getAnimation = _context7.t0;
                  return _context7.abrupt("return", getAnimation);

                case 15:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function getAnimationBuilder(_x5) {
          return _ref4.apply(this, arguments);
        };
      }();

      var animation = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(animationBuilder, opts) {
          var trans, didComplete;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return waitForReady(opts, true);

                case 2:
                  trans = animationBuilder(opts.baseEl, opts);
                  fireWillEvents(opts.enteringEl, opts.leavingEl);
                  _context8.next = 6;
                  return playTransition(trans, opts);

                case 6:
                  didComplete = _context8.sent;

                  if (opts.progressCallback) {
                    opts.progressCallback(undefined);
                  }

                  if (didComplete) {
                    fireDidEvents(opts.enteringEl, opts.leavingEl);
                  }

                  return _context8.abrupt("return", {
                    hasCompleted: didComplete,
                    animation: trans
                  });

                case 10:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function animation(_x6, _x7) {
          return _ref5.apply(this, arguments);
        };
      }();

      var noAnimation = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(opts) {
          var enteringEl, leavingEl;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  enteringEl = opts.enteringEl;
                  leavingEl = opts.leavingEl;
                  _context9.next = 4;
                  return waitForReady(opts, false);

                case 4:
                  fireWillEvents(enteringEl, leavingEl);
                  fireDidEvents(enteringEl, leavingEl);
                  return _context9.abrupt("return", {
                    hasCompleted: true
                  });

                case 7:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function noAnimation(_x8) {
          return _ref6.apply(this, arguments);
        };
      }();

      var waitForReady = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(opts, defaultDeep) {
          var deep, promises;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                  promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
                  _context10.next = 4;
                  return Promise.all(promises);

                case 4:
                  _context10.next = 6;
                  return notifyViewReady(opts.viewIsReady, opts.enteringEl);

                case 6:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function waitForReady(_x9, _x10) {
          return _ref7.apply(this, arguments);
        };
      }();

      var notifyViewReady = /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(viewIsReady, enteringEl) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  if (!viewIsReady) {
                    _context11.next = 3;
                    break;
                  }

                  _context11.next = 3;
                  return viewIsReady(enteringEl);

                case 3:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        return function notifyViewReady(_x11, _x12) {
          return _ref8.apply(this, arguments);
        };
      }();

      var playTransition = function playTransition(trans, opts) {
        var progressCallback = opts.progressCallback;
        var promise = new Promise(function (resolve) {
          trans.onFinish(function (currentStep) {
            return resolve(currentStep === 1);
          });
        }); // cool, let's do this, start the transition

        if (progressCallback) {
          // this is a swipe to go back, just get the transition progress ready
          // kick off the swipe animation start
          trans.progressStart(true);
          progressCallback(trans);
        } else {
          // only the top level transition should actually start "play"
          // kick it off and let it play through
          // ******** DOM WRITE ****************
          trans.play();
        } // create a callback for when the animation is done


        return promise;
      };

      var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
        lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
        lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
      };

      var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
        lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
        lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
      };

      var lifecycle = function lifecycle(el, eventName) {
        if (el) {
          var ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false
          });
          el.dispatchEvent(ev);
        }
      };

      var shallowReady = function shallowReady(el) {
        if (el && el.componentOnReady) {
          return el.componentOnReady();
        }

        return Promise.resolve();
      };

      var deepReady = /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(el) {
          var element, stencilEl;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  element = el;

                  if (!element) {
                    _context12.next = 10;
                    break;
                  }

                  if (!(element.componentOnReady != null)) {
                    _context12.next = 8;
                    break;
                  }

                  _context12.next = 5;
                  return element.componentOnReady();

                case 5:
                  stencilEl = _context12.sent;

                  if (!(stencilEl != null)) {
                    _context12.next = 8;
                    break;
                  }

                  return _context12.abrupt("return");

                case 8:
                  _context12.next = 10;
                  return Promise.all(Array.from(element.children).map(deepReady));

                case 10:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));

        return function deepReady(_x13) {
          return _ref9.apply(this, arguments);
        };
      }();

      var setPageHidden = function setPageHidden(el, hidden) {
        if (hidden) {
          el.setAttribute('aria-hidden', 'true');
          el.classList.add('ion-page-hidden');
        } else {
          el.hidden = false;
          el.removeAttribute('aria-hidden');
          el.classList.remove('ion-page-hidden');
        }
      };

      var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
        if (enteringEl !== undefined) {
          enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
        }

        if (leavingEl !== undefined) {
          leavingEl.style.zIndex = '100';
        }
      };

      var getIonPageElement = function getIonPageElement(element) {
        if (element.classList.contains('ion-page')) {
          return element;
        }

        var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

        if (ionPage) {
          return ionPage;
        } // idk, return the original element so at least something animates and we don't have a null pointer


        return element;
      };
      /***/

    },

    /***/
    "YtD4":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
      \*************************************************************/

    /*! exports provided: s */

    /***/
    function YtD4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return sanitizeDOMString;
      });
      /**
       * Does a simple sanitization of all elements
       * in an untrusted string
       */


      var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
        try {
          if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
          }
          /**
           * Create a document fragment
           * separate from the main DOM,
           * create a div to do our work in
           */


          var documentFragment = document.createDocumentFragment();
          var workingDiv = document.createElement('div');
          documentFragment.appendChild(workingDiv);
          workingDiv.innerHTML = untrustedString;
          /**
           * Remove any elements
           * that are blocked
           */

          blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
              var element = getElementsToRemove[elementIndex];

              if (element.parentNode) {
                element.parentNode.removeChild(element);
              } else {
                documentFragment.removeChild(element);
              }
              /**
               * We still need to sanitize
               * the children of this element
               * as they are left behind
               */


              var childElements = getElementChildren(element);
              /* tslint:disable-next-line */

              for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                sanitizeElement(childElements[childIndex]);
              }
            }
          });
          /**
           * Go through remaining elements and remove
           * non-allowed attribs
           */
          // IE does not support .children on document fragments, only .childNodes

          var dfChildren = getElementChildren(documentFragment);
          /* tslint:disable-next-line */

          for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
          } // Append document fragment to div


          var fragmentDiv = document.createElement('div');
          fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

          var getInnerDiv = fragmentDiv.querySelector('div');
          return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
        } catch (err) {
          console.error(err);
          return '';
        }
      };
      /**
       * Clean up current element based on allowed attributes
       * and then recursively dig down into any child elements to
       * clean those up as well
       */


      var sanitizeElement = function sanitizeElement(element) {
        // IE uses childNodes, so ignore nodes that are not elements
        if (element.nodeType && element.nodeType !== 1) {
          return;
        }

        for (var i = element.attributes.length - 1; i >= 0; i--) {
          var attribute = element.attributes.item(i);
          var attributeName = attribute.name; // remove non-allowed attribs

          if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
          } // clean up any allowed attribs
          // that attempt to do any JS funny-business


          var attributeValue = attribute.value;
          /* tslint:disable-next-line */

          if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
          }
        }
        /**
         * Sanitize any nested children
         */


        var childElements = getElementChildren(element);
        /* tslint:disable-next-line */

        for (var _i = 0; _i < childElements.length; _i++) {
          sanitizeElement(childElements[_i]);
        }
      };
      /**
       * IE doesn't always support .children
       * so we revert to .childNodes instead
       */


      var getElementChildren = function getElementChildren(el) {
        return el.children != null ? el.children : el.childNodes;
      };

      var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
      var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
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


        _createClass(FirebaseService, [{
          key: "sendFriendRequest",
          value: function sendFriendRequest(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this8 = this;

              var loggedInUserId, requestsSent;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.afAuth.currentUser.then(function (data) {
                        return data.uid;
                      });

                    case 2:
                      loggedInUserId = _context13.sent;
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
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          } // Cancel friend request sent to userId.

        }, {
          key: "cancelFriendRequest",
          value: function cancelFriendRequest(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this9 = this;

              var loggedInUserId, requestsSent;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.afAuth.currentUser.then(function (data) {
                        return data.uid;
                      });

                    case 2:
                      loggedInUserId = _context14.sent;
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
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          } // Delete friend request.

        }, {
          key: "deleteFriendRequest",
          value: function deleteFriendRequest(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this10 = this;

              var loggedInUserId, friendRequests;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.afAuth.currentUser.then(function (data) {
                        return data.uid;
                      });

                    case 2:
                      loggedInUserId = _context15.sent;
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
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          } // Accept friend request.

        }, {
          key: "acceptFriendRequest",
          value: function acceptFriendRequest(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this11 = this;

              var loggedInUserId;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.afAuth.currentUser.then(function (data) {
                        return data.uid;
                      });

                    case 2:
                      loggedInUserId = _context16.sent;
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
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }]);

        return FirebaseService;
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
    "m9yc":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function m9yc(module, __webpack_exports__, __webpack_require__) {
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

      var attachComponent = /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  if (!delegate) {
                    _context17.next = 2;
                    break;
                  }

                  return _context17.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context17.next = 4;
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

                  if (!el.componentOnReady) {
                    _context17.next = 11;
                    break;
                  }

                  _context17.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context17.abrupt("return", el);

                case 12:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));

        return function attachComponent(_x14, _x15, _x16, _x17, _x18) {
          return _ref10.apply(this, arguments);
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

    },

    /***/
    "opz7":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, h */

    /***/
    function opz7(module, __webpack_exports__, __webpack_require__) {
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
        return hapticSelectionEnd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelection;
      });
      /**
       * Check to see if the Haptic Plugin is available
       * @return Returns `true` or false if the plugin is available
       */

      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */


      var hapticSelection = function hapticSelection() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.selection();
        }
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.gestureSelectionStart();
        }
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.gestureSelectionChanged();
        }
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.gestureSelectionEnd();
        }
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map