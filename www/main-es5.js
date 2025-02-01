(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/auth-guard.service */
      78968);

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'app',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./tabs/tabs.module */
          15564)).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./tabs/tabs.module */
          15564)).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'friends',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_friends_friends_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./friends/friends.module */
          50945)).then(function (m) {
            return m.FriendsPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'groupinfo/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_groupinfo_groupinfo_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./groupinfo/groupinfo.module */
          35890)).then(function (m) {
            return m.GroupinfoPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'groups',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_groups_groups_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./groups/groups.module */
          33596)).then(function (m) {
            return m.GroupsPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./login/login.module */
          80107)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'imagemodal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./imagemodal/imagemodal.module */
          82657)).then(function (m) {
            return m.ImagemodalPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'message/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_message_message_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./message/message.module */
          42770)).then(function (m) {
            return m.MessagePageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'messages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_messages_messages_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./messages/messages.module */
          84812)).then(function (m) {
            return m.MessagesPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'newgroup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_newgroup_newgroup_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./newgroup/newgroup.module */
          11495)).then(function (m) {
            return m.NewgroupPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'blockedlist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_blockedlist_blockedlist_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./blockedlist/blockedlist.module */
          29239)).then(function (m) {
            return m.BlockedlistPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./register/register.module */
          18723)).then(function (m) {
            return m.RegisterPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'userinfo/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_userinfo_userinfo_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./userinfo/userinfo.module */
          66037)).then(function (m) {
            return m.UserinfoPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'profile/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./profile/profile.module */
          84523)).then(function (m) {
            return m.ProfilePageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'forgot',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_forgot_forgot_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./forgot/forgot.module */
          76938)).then(function (m) {
            return m.ForgotPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'new-poll/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_new-poll_new-poll_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./new-poll/new-poll.module */
          5702)).then(function (m) {
            return m.NewPollPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'walkthrough',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_walkthrough_walkthrough_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./walkthrough/walkthrough.module */
          19507)).then(function (m) {
            return m.WalkthroughPageModule;
          });
        }
      }, {
        path: 'getting-started',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_getting-started_getting-started_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./getting-started/getting-started.module */
          52938)).then(function (m) {
            return m.GettingStartedPageModule;
          });
        }
      }, {
        path: 'new-event/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("src_app_new-event_new-event_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./new-event/new-event.module */
          35077)).then(function (m) {
            return m.NewEventPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'new-post/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_new-post_new-post_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./new-post/new-post.module */
          50096)).then(function (m) {
            return m.NewPostPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'post/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_post_post_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./post/post.module */
          32076)).then(function (m) {
            return m.PostPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
      }, {
        path: 'reaction-list-modal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./reaction-list-modal/reaction-list-modal.module */
          64053)).then(function (m) {
            return m.ReactionListModalPageModule;
          });
        }
      }, {
        path: 'feed',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_common___ivy_ngcc___fesm2015_http_js"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_feed_feed_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./feed/feed.module */
          5628)).then(function (m) {
            return m.FeedPageModule;
          });
        }
      }, {
        path: 'user-profile-modal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./user-profile-modal/user-profile-modal.module */
          68943)).then(function (m) {
            return m.UserProfileModalPageModule;
          });
        }
      }, {
        path: 'search-modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_search-modal_search-modal_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./search-modal/search-modal.module */
          32744)).then(function (m) {
            return m.SearchModalPageModule;
          });
        }
      }, {
        path: 'admin-categories',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_admin-categories_admin-categories_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./admin-categories/admin-categories.module */
          25779)).then(function (m) {
            return m.AdminCategoriesPageModule;
          });
        }
      }, {
        path: 'new-category-modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_new-category-modal_new-category-modal_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./new-category-modal/new-category-modal.module */
          48694)).then(function (m) {
            return m.NewCategoryModalPageModule;
          });
        }
      }, {
        path: 'group-search',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_group-search_group-search_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./group-search/group-search.module */
          59060)).then(function (m) {
            return m.GroupSearchPageModule;
          });
        }
      }, {
        path: 'group-join/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_group-join_group-join_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./group-join/group-join.module */
          96781)).then(function (m) {
            return m.GroupJoinPageModule;
          });
        }
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      53040);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73588);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router, afAuth) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.afAuth = afAuth;
          this.initializeApp();
        }

        return _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();

              _this.platform.backButton.subscribe(function () {
                return null;
              });

              _this.afAuth.onAuthStateChanged(function (user) {
                if (user == null) _this.router.navigateByUrl('walkthrough', {
                  replaceUrl: true,
                  skipLocationChange: true
                });else _this.router.navigateByUrl('/app/tabs/tab1', {
                  skipLocationChange: true,
                  replaceUrl: true
                });
              });
            });
          }
        }]);
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar, _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth])], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        },

        /* harmony export */
        "FileReaderA": function FileReaderA() {
          return (
            /* binding */
            _FileReaderA
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @ionic/storage-angular */
      90516);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73588);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/fire */
      18690);
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/fire/storage */
      26776);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment.prod */
      89019);
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      147);
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      64357);
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      4084);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      34483);
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      45169);
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      40868);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      18659);
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      85864);
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      69130);
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      40773);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      89131);
      /* harmony import */


      var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/contacts/ngx */
      1084);
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      616);
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/share.module */
      32218);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./imagemodal/imagemodal.module */
      82657);
      /* harmony import */


      var _user_profile_modal_user_profile_modal_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./user-profile-modal/user-profile-modal.module */
      68943);
      /* harmony import */


      var _reaction_list_modal_reaction_list_modal_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./reaction-list-modal/reaction-list-modal.module */
      64053);
      /* harmony import */


      var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/chooser/ngx */
      33737);
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      91558);
      /* harmony import */


      var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic-native/fcm/ngx */
      68897);
      /* harmony import */


      var _feed_filter_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./feed/filter.component */
      32346);

      var _AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_27__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _feed_filter_component__WEBPACK_IMPORTED_MODULE_25__.FilterComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonicModule.forRoot({
          mode: 'md'
        }), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_30__.IonicStorageModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_fire__WEBPACK_IMPORTED_MODULE_31__.AngularFireModule.initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__.environment.firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__.AngularFirestoreModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_33__.AngularFireStorageModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_34__.AngularFireAuthModule, _services_share_module__WEBPACK_IMPORTED_MODULE_18__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule, _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_19__.ImagemodalPageModule, _reaction_list_modal_reaction_list_modal_module__WEBPACK_IMPORTED_MODULE_21__.ReactionListModalPageModule, _user_profile_modal_user_profile_modal_module__WEBPACK_IMPORTED_MODULE_20__.UserProfileModalPageModule],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen, _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__.GooglePlus, _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__.Facebook, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera, _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__.MediaCapture, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__.FileTransfer, _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__.FilePath, _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_13__.FileChooser, _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__.FirebaseX, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__.Geolocation, _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_10__.ImagePicker, _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_16__.Contacts, _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_22__.Chooser, _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_17__.Keyboard, _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_23__.LocalNotifications, _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_24__.FCM, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      })], _AppModule);

      var _FileReaderA = /*#__PURE__*/function (_window$FileReader) {
        function _FileReaderA() {
          var _this2;

          _classCallCheck(this, _FileReaderA);

          _this2 = _callSuper(this, _FileReaderA);
          var zoneOriginalInstance = _this2['__zone_symbol__originalInstance'];
          return _possibleConstructorReturn(_this2, zoneOriginalInstance || _this2);
        }

        _inherits(_FileReaderA, _window$FileReader);

        return _createClass(_FileReaderA);
      }(window.FileReader);

      window.FileReader = _FileReaderA;
      /***/
    },

    /***/
    32346:
    /*!******************************************!*\
      !*** ./src/app/feed/filter.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilterComponent": function FilterComponent() {
          return (
            /* binding */
            _FilterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts_css_Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZmlsdGVyLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDIwcHg7CiAgICAgIHdpZHRoOiAzMjBweDsKICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5maWx0ZXItaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwoKICAgICAgaDQgewogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgfQoKICAgICAgaW9uLWJ1dHRvbiB7CiAgICAgICAgaGVpZ2h0OiAzMnB4OwogICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4OwogICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDsKICAgICAgICBmb250LXNpemU6IDEwcHg7CiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICBvcGFjaXR5OiAwLjU7CiAgICAgICAgfQoKICAgICAgICBpb24taWNvbiB7CiAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmZpbHRlci1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKCiAgICAgIC5zZWN0aW9uLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OwoKICAgICAgICAudGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7CiAgICAgICAgfQoKICAgICAgICAuc3VidGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmNvbnRlbnQtdHlwZXMgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOwogICAgICBnYXA6IDhweDsKCiAgICAgIC5maWx0ZXItY2hpcCB7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxOwogICAgICAgIHBhZGRpbmc6IDEycHggOHB4OwogICAgICAgIAogICAgICAgIGlvbi1pY29uIHsKICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAuZ3JvdXAtc2VhcmNoIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsKCiAgICAgIC5ncm91cC1zZWFyY2hiYXIgewogICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOwogICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTsKICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgICAKICAgICAgICAuc2VhcmNoYmFyLWlucHV0IHsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCi5ncm91cC1jaGlwcyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIGdhcDogOHB4OwogIG1heC1oZWlnaHQ6IDIwMHB4OwogIG92ZXJmbG93LXk6IGF1dG87CiAgcGFkZGluZy1yaWdodDogNHB4OwoKICAmLmhhcy1zZWFyY2ggewogICAgbWF4LWhlaWdodDogMTUwcHg7CiAgfQoKICAuZmlsdGVyLWNoaXAgewogICAgcGFkZGluZzogMTBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwoKICAgICYuYWN0aXZlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAKICAgICAgLmdyb3VwLWljb24gewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgIAogICAgICAgIHNwYW4gewogICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1pY29uIHsKICAgICAgd2lkdGg6IDI4cHg7CiAgICAgIGhlaWdodDogMjhweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OwogICAgICBvdmVyZmxvdzogaGlkZGVuOyAKCiAgICAgIGltZyB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsKICAgICAgfQoKICAgICAgc3BhbiB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1uYW1lIHsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CgogICAgLmNoZWNrLWljb24gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNHB4OwogICAgICByaWdodDogNHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAmOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC45OwogICAgfQoKICAgICY6YWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsKICAgIH0KICB9Cn0KCgogICAgLmZpbHRlci1jaGlwIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDRweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAgIAogICAgICAgIGlvbi1pY29uLCBzcGFuIHsKICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICAgICAgfQoKICAgICAgICAuZ3JvdXAtbmFtZSB7CiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsKICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBsaW5lLWhlaWdodDogMS4yOwogICAgICB9CgogICAgICAuY2hlY2staWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNHB4OwogICAgICAgIHJpZ2h0OiA0cHg7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7CiAgICAgIH0KCiAgICAgICY6YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgIH0KICAgIH0KCiAgICAuZmlsdGVyLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIAogICAgICBpb24tYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgaGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLmZpbHRlci1jaGlwcy5jb250ZW50LXR5cGVzIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiA4cHg7CgogIC5maWx0ZXItY2hpcCB7CiAgICBwYWRkaW5nOiA4cHggNHB4OwogICAgCiAgICBpb24taWNvbiB7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsgCiAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgCiAgICB9CgogICAgc3BhbiB7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgCiAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7CiAgICB9CiAgfQp9CgoKICAgIC8vIERhcmsgbW9kZSBhZGp1c3RtZW50cwogICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgICAuZmlsdGVyLWNoaXAgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSk7CgogICAgICAgICYuYWN0aXZlIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1uYW1lIHsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAgIH0KCiAgICAgICAgLmdyb3VwLWljb24gewogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuZ3JvdXAtc2VhcmNoYmFyIHsKICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDsKICAgICAgfQogICAgfQogIA_3D_3D_Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./src/app/feed/filter.component.ts.css!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZmlsdGVyLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDIwcHg7CiAgICAgIHdpZHRoOiAzMjBweDsKICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5maWx0ZXItaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwoKICAgICAgaDQgewogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgfQoKICAgICAgaW9uLWJ1dHRvbiB7CiAgICAgICAgaGVpZ2h0OiAzMnB4OwogICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4OwogICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDsKICAgICAgICBmb250LXNpemU6IDEwcHg7CiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICBvcGFjaXR5OiAwLjU7CiAgICAgICAgfQoKICAgICAgICBpb24taWNvbiB7CiAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmZpbHRlci1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKCiAgICAgIC5zZWN0aW9uLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OwoKICAgICAgICAudGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7CiAgICAgICAgfQoKICAgICAgICAuc3VidGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmNvbnRlbnQtdHlwZXMgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOwogICAgICBnYXA6IDhweDsKCiAgICAgIC5maWx0ZXItY2hpcCB7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxOwogICAgICAgIHBhZGRpbmc6IDEycHggOHB4OwogICAgICAgIAogICAgICAgIGlvbi1pY29uIHsKICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAuZ3JvdXAtc2VhcmNoIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsKCiAgICAgIC5ncm91cC1zZWFyY2hiYXIgewogICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOwogICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTsKICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgICAKICAgICAgICAuc2VhcmNoYmFyLWlucHV0IHsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCi5ncm91cC1jaGlwcyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIGdhcDogOHB4OwogIG1heC1oZWlnaHQ6IDIwMHB4OwogIG92ZXJmbG93LXk6IGF1dG87CiAgcGFkZGluZy1yaWdodDogNHB4OwoKICAmLmhhcy1zZWFyY2ggewogICAgbWF4LWhlaWdodDogMTUwcHg7CiAgfQoKICAuZmlsdGVyLWNoaXAgewogICAgcGFkZGluZzogMTBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwoKICAgICYuYWN0aXZlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAKICAgICAgLmdyb3VwLWljb24gewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgIAogICAgICAgIHNwYW4gewogICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1pY29uIHsKICAgICAgd2lkdGg6IDI4cHg7CiAgICAgIGhlaWdodDogMjhweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OwogICAgICBvdmVyZmxvdzogaGlkZGVuOyAKCiAgICAgIGltZyB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsKICAgICAgfQoKICAgICAgc3BhbiB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1uYW1lIHsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CgogICAgLmNoZWNrLWljb24gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNHB4OwogICAgICByaWdodDogNHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAmOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC45OwogICAgfQoKICAgICY6YWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsKICAgIH0KICB9Cn0KCgogICAgLmZpbHRlci1jaGlwIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDRweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAgIAogICAgICAgIGlvbi1pY29uLCBzcGFuIHsKICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICAgICAgfQoKICAgICAgICAuZ3JvdXAtbmFtZSB7CiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsKICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBsaW5lLWhlaWdodDogMS4yOwogICAgICB9CgogICAgICAuY2hlY2staWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNHB4OwogICAgICAgIHJpZ2h0OiA0cHg7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7CiAgICAgIH0KCiAgICAgICY6YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgIH0KICAgIH0KCiAgICAuZmlsdGVyLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIAogICAgICBpb24tYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgaGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLmZpbHRlci1jaGlwcy5jb250ZW50LXR5cGVzIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiA4cHg7CgogIC5maWx0ZXItY2hpcCB7CiAgICBwYWRkaW5nOiA4cHggNHB4OwogICAgCiAgICBpb24taWNvbiB7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsgCiAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgCiAgICB9CgogICAgc3BhbiB7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgCiAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7CiAgICB9CiAgfQp9CgoKICAgIC8vIERhcmsgbW9kZSBhZGp1c3RtZW50cwogICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgICAuZmlsdGVyLWNoaXAgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSk7CgogICAgICAgICYuYWN0aXZlIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1uYW1lIHsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAgIH0KCiAgICAgICAgLmdyb3VwLWljb24gewogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuZ3JvdXAtc2VhcmNoYmFyIHsKICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDsKICAgICAgfQogICAgfQogIA%3D%3D!./src/app/feed/filter.component.ts */
      84487);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/data.service */
      52468); // filter.component.ts


      var _FilterComponent = /*#__PURE__*/function () {
        function FilterComponent(popoverCtrl, afAuth, dataProvider) {
          _classCallCheck(this, FilterComponent);

          this.popoverCtrl = popoverCtrl;
          this.afAuth = afAuth;
          this.dataProvider = dataProvider;
          this.selectedTypes = ['all'];
          this.groupSearchTerm = '';
          this.groups = [];
          this.filteredGroups = _toConsumableArray(this.groups);
        }

        return _createClass(FilterComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            console.log('Entering feed view');
            this.afAuth.currentUser.then(function (user) {
              _this3.loggedInUserId = user === null || user === void 0 ? void 0 : user.uid; // Get groups

              _this3.dataProvider.getGroups().snapshotChanges().subscribe(function (groups) {
                _this3.groups = [];
                groups.forEach(function (element) {
                  var group = element.payload.doc.data();
                  group.key = element.payload.doc.id;

                  if (group.members.some(function (e) {
                    return e === _this3.loggedInUserId;
                  })) {
                    group.isUserMember = true;
                  } else {
                    group.isUserMember = false;
                  }

                  _this3.groups.push(group);
                });
                _this3.filteredGroups = _this3.groups; // Initialize filtered groups
              });
            });
          }
        }, {
          key: "filterGroups",
          value: function filterGroups(event) {
            if (event && event.target.value === '') this.groupSearchTerm = '';

            if (!this.groupSearchTerm) {
              this.filteredGroups = _toConsumableArray(this.groups);
              return;
            }

            var searchTerm = this.groupSearchTerm.toLowerCase();
            this.filteredGroups = this.groups.filter(function (group) {
              return group.name.toLowerCase().includes(searchTerm);
            });
          }
        }, {
          key: "onSearchClear",
          value: function onSearchClear() {
            this.groupSearchTerm = '';
            this.filterGroups();
          }
        }, {
          key: "selectFilter",
          value: function selectFilter(type) {
            if (type === 'all') {
              // If 'all' is selected, clear other selections
              this.selectedTypes = ['all'];
              return;
            } // Remove 'all' if it exists when selecting other types


            this.selectedTypes = this.selectedTypes.filter(function (t) {
              return t !== 'all';
            }); // Toggle the selected type

            if (this.selectedTypes.includes(type)) {
              this.selectedTypes = this.selectedTypes.filter(function (t) {
                return t !== type;
              }); // If no types selected, default back to 'all'

              if (this.selectedTypes.length === 0) {
                this.selectedTypes = ['all'];
              }
            } else {
              this.selectedTypes.push(type);
            }
          }
        }, {
          key: "toggleGroup",
          value: function toggleGroup(group) {
            group.selected = !group.selected;
          }
        }, {
          key: "getSelectedGroupsCount",
          value: function getSelectedGroupsCount() {
            return this.groups.filter(function (g) {
              return g.selected;
            }).length;
          }
        }, {
          key: "hasActiveFilters",
          value: function hasActiveFilters() {
            return this.selectedTypes.length > 1 || this.selectedTypes.length === 1 && this.selectedTypes[0] !== 'all' || this.getSelectedGroupsCount() > 0;
          }
        }, {
          key: "resetFilters",
          value: function resetFilters() {
            this.selectedTypes = ['all'];
            this.groups.forEach(function (g) {
              return g.selected = false;
            });
            this.groupSearchTerm = '';
            this.filterGroups();
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            var selectedGroups = this.groups.filter(function (g) {
              return g.selected;
            }).map(function (g) {
              return {
                id: g.id,
                name: g.name
              };
            });
            this.popoverCtrl.dismiss({
              types: this.selectedTypes,
              groups: selectedGroups
            });
          }
        }]);
      }();

      _FilterComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService
        }];
      };

      _FilterComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-filter',
        template: "\n    <div class=\"filter-container\">\n      <!-- Header -->\n      <div class=\"filter-header\">\n        <h4>Filter Content</h4>\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"resetFilters()\" \n                    [disabled]=\"!hasActiveFilters()\">\n          <ion-icon slot=\"start\" name=\"refresh-outline\"></ion-icon>\n          Reset\n        </ion-button>\n      </div>\n\n      <!-- Content Type Section -->\n        <!-- In your filter chips section -->\n        <div class=\"filter-chips content-types\">\n        <div class=\"filter-chip\" \n            [class.active]=\"selectedTypes.includes('all')\"\n            (click)=\"selectFilter('all')\">\n            <ion-icon name=\"apps-outline\"></ion-icon>\n            <span>All</span>\n        </div>\n        \n        <div class=\"filter-chip\" \n            [class.active]=\"selectedTypes.includes('posts')\"\n            (click)=\"selectFilter('posts')\">\n            <ion-icon name=\"newspaper-outline\"></ion-icon>\n            <span>Posts</span>\n        </div>\n        \n        <div class=\"filter-chip\" \n            [class.active]=\"selectedTypes.includes('events')\"\n            (click)=\"selectFilter('events')\">\n            <ion-icon name=\"calendar-outline\"></ion-icon>\n            <span>Events</span>\n        </div>\n        \n        <div class=\"filter-chip\" \n            [class.active]=\"selectedTypes.includes('polls')\"\n            (click)=\"selectFilter('polls')\">\n            <ion-icon name=\"document-outline\"></ion-icon>\n            <span>Polls</span>\n        </div>\n        </div>\n\n        <br/>\n      <!-- Groups Section -->\n      <div class=\"filter-section\">\n        <div class=\"section-header\">\n          <span class=\"title\">Groups</span>\n          <span class=\"subtitle\" *ngIf=\"getSelectedGroupsCount() > 0\">\n            {{getSelectedGroupsCount()}} selected\n          </span>\n        </div>\n        \n        <!-- Search Groups -->\n        <div class=\"group-search\">\n          <ion-searchbar placeholder=\"Search groups\" \n                        mode=\"ios\"\n                        [(ngModel)]=\"groupSearchTerm\"\n                        (ionInput)=\"filterGroups($event)\"\n                        (ionClear)=\"onSearchClear()\"\n                        class=\"group-searchbar\">\n          </ion-searchbar>\n        </div>\n\n        <!-- Groups Grid -->\n        <div class=\"group-chips\" [class.has-search]=\"groupSearchTerm\">\n        <div class=\"filter-chip\" \n            *ngFor=\"let group of filteredGroups\"\n            [class.active]=\"group.selected\"\n            (click)=\"toggleGroup(group)\">\n            <div class=\"group-icon\" \n                [style.background-color]=\"!group.imageUrl ? group.color : 'transparent'\">\n            <img *ngIf=\"group.img\" [src]=\"group.img\" [alt]=\"group.name\">\n            <span *ngIf=\"!group.img\">{{group.name.charAt(0)}}</span>\n            </div>\n            <span class=\"group-name\">{{group.name}}</span>\n            <ion-icon name=\"checkmark\" \n                    class=\"check-icon\"\n                    *ngIf=\"group.selected\">\n            </ion-icon>\n        </div>\n        </div>\n\n      </div>\n\n      <!-- Apply Button -->\n      <div class=\"filter-actions\">\n        <ion-button expand=\"block\" \n                    (click)=\"applyFilters()\"\n                    [disabled]=\"!hasActiveFilters()\">\n          Apply Filters\n        </ion-button>\n      </div>\n    </div>\n  ",
        styles: [_Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts_css_Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAuZmlsdGVyLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDIwcHg7CiAgICAgIHdpZHRoOiAzMjBweDsKICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5maWx0ZXItaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwoKICAgICAgaDQgewogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgfQoKICAgICAgaW9uLWJ1dHRvbiB7CiAgICAgICAgaGVpZ2h0OiAzMnB4OwogICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4OwogICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDsKICAgICAgICBmb250LXNpemU6IDEwcHg7CiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICBvcGFjaXR5OiAwLjU7CiAgICAgICAgfQoKICAgICAgICBpb24taWNvbiB7CiAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmZpbHRlci1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKCiAgICAgIC5zZWN0aW9uLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OwoKICAgICAgICAudGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7CiAgICAgICAgfQoKICAgICAgICAuc3VidGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmNvbnRlbnQtdHlwZXMgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOwogICAgICBnYXA6IDhweDsKCiAgICAgIC5maWx0ZXItY2hpcCB7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxOwogICAgICAgIHBhZGRpbmc6IDEycHggOHB4OwogICAgICAgIAogICAgICAgIGlvbi1pY29uIHsKICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAuZ3JvdXAtc2VhcmNoIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsKCiAgICAgIC5ncm91cC1zZWFyY2hiYXIgewogICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOwogICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTsKICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgICAKICAgICAgICAuc2VhcmNoYmFyLWlucHV0IHsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCi5ncm91cC1jaGlwcyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIGdhcDogOHB4OwogIG1heC1oZWlnaHQ6IDIwMHB4OwogIG92ZXJmbG93LXk6IGF1dG87CiAgcGFkZGluZy1yaWdodDogNHB4OwoKICAmLmhhcy1zZWFyY2ggewogICAgbWF4LWhlaWdodDogMTUwcHg7CiAgfQoKICAuZmlsdGVyLWNoaXAgewogICAgcGFkZGluZzogMTBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwoKICAgICYuYWN0aXZlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAKICAgICAgLmdyb3VwLWljb24gewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgIAogICAgICAgIHNwYW4gewogICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1pY29uIHsKICAgICAgd2lkdGg6IDI4cHg7CiAgICAgIGhlaWdodDogMjhweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OwogICAgICBvdmVyZmxvdzogaGlkZGVuOyAKCiAgICAgIGltZyB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsKICAgICAgfQoKICAgICAgc3BhbiB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1uYW1lIHsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CgogICAgLmNoZWNrLWljb24gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNHB4OwogICAgICByaWdodDogNHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAmOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC45OwogICAgfQoKICAgICY6YWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsKICAgIH0KICB9Cn0KCgogICAgLmZpbHRlci1jaGlwIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDRweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAgIAogICAgICAgIGlvbi1pY29uLCBzcGFuIHsKICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICAgICAgfQoKICAgICAgICAuZ3JvdXAtbmFtZSB7CiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsKICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBsaW5lLWhlaWdodDogMS4yOwogICAgICB9CgogICAgICAuY2hlY2staWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNHB4OwogICAgICAgIHJpZ2h0OiA0cHg7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7CiAgICAgIH0KCiAgICAgICY6YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgIH0KICAgIH0KCiAgICAuZmlsdGVyLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIAogICAgICBpb24tYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgaGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLmZpbHRlci1jaGlwcy5jb250ZW50LXR5cGVzIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiA4cHg7CgogIC5maWx0ZXItY2hpcCB7CiAgICBwYWRkaW5nOiA4cHggNHB4OwogICAgCiAgICBpb24taWNvbiB7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsgCiAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgCiAgICB9CgogICAgc3BhbiB7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgCiAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7CiAgICB9CiAgfQp9CgoKICAgIC8vIERhcmsgbW9kZSBhZGp1c3RtZW50cwogICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgICAuZmlsdGVyLWNoaXAgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSk7CgogICAgICAgICYuYWN0aXZlIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1uYW1lIHsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAgIH0KCiAgICAgICAgLmdyb3VwLWljb24gewogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuZ3JvdXAtc2VhcmNoYmFyIHsKICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDsKICAgICAgfQogICAgfQogIA_3D_3D_Users_rohitsethi_Documents_firechat4_v2_src_app_feed_filter_component_ts__WEBPACK_IMPORTED_MODULE_0__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth, _services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService])], _FilterComponent);
      /***/
    },

    /***/
    82657:
    /*!*************************************************!*\
      !*** ./src/app/imagemodal/imagemodal.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImagemodalPageModule": function ImagemodalPageModule() {
          return (
            /* binding */
            _ImagemodalPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _imagemodal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./imagemodal.page */
      4576);

      var routes = [{
        path: '',
        component: _imagemodal_page__WEBPACK_IMPORTED_MODULE_0__.ImagemodalPage
      }];

      var _ImagemodalPageModule = /*#__PURE__*/_createClass(function ImagemodalPageModule() {
        _classCallCheck(this, ImagemodalPageModule);
      });

      _ImagemodalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_imagemodal_page__WEBPACK_IMPORTED_MODULE_0__.ImagemodalPage]
      })], _ImagemodalPageModule);
      /***/
    },

    /***/
    4576:
    /*!***********************************************!*\
      !*** ./src/app/imagemodal/imagemodal.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImagemodalPage": function ImagemodalPage() {
          return (
            /* binding */
            _ImagemodalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_imagemodal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./imagemodal.page.html */
      52411);
      /* harmony import */


      var _imagemodal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./imagemodal.page.scss */
      90764);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _ImagemodalPage = /*#__PURE__*/function () {
        function ImagemodalPage(modal) {
          _classCallCheck(this, ImagemodalPage);

          this.modal = modal;
        }

        return _createClass(ImagemodalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.img);
          }
        }, {
          key: "close",
          value: function close() {
            this.modal.dismiss();
          }
        }]);
      }();

      _ImagemodalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _ImagemodalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-imagemodal',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_imagemodal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_imagemodal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController])], _ImagemodalPage);
      /***/
    },

    /***/
    57597:
    /*!***************************************!*\
      !*** ./src/app/pipes/conversation.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConversationPipe": function ConversationPipe() {
          return (
            /* binding */
            _ConversationPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ConversationPipe = /*#__PURE__*/function () {
        function ConversationPipe() {
          _classCallCheck(this, ConversationPipe);
        }

        return _createClass(ConversationPipe, [{
          key: "transform",
          value: // ConversationPipe
          // Filter conversation based on friend's name or username.
          function transform(conversations, search) {
            if (!conversations) {
              return;
            } else if (!search) {
              return conversations;
            } else {
              var term = search.toLowerCase();
              return conversations.filter(function (conversation) {
                return conversation.friend.name.toLowerCase().indexOf(term) > -1 || conversation.friend.username.toLowerCase().indexOf(term) > -1;
              });
            }
          }
        }]);
      }();

      _ConversationPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'conversationFilter'
      }), (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], _ConversationPipe);
      /***/
    },

    /***/
    74250:
    /*!*******************************!*\
      !*** ./src/app/pipes/date.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DateFormatPipe": function DateFormatPipe() {
          return (
            /* binding */
            _DateFormatPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

      var _DateFormatPipe = /*#__PURE__*/function () {
        function DateFormatPipe() {
          _classCallCheck(this, DateFormatPipe);
        }

        return _createClass(DateFormatPipe, [{
          key: "transform",
          value: function transform(date, args) {
            return moment__WEBPACK_IMPORTED_MODULE_0__(new Date(date)).fromNow();
          }
        }]);
      }();

      _DateFormatPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'DateFormat'
      }), (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _DateFormatPipe);
      /***/
    },

    /***/
    93197:
    /*!*********************************!*\
      !*** ./src/app/pipes/friend.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FriendPipe": function FriendPipe() {
          return (
            /* binding */
            _FriendPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FriendPipe = /*#__PURE__*/function () {
        function FriendPipe() {
          _classCallCheck(this, FriendPipe);
        }

        return _createClass(FriendPipe, [{
          key: "transform",
          value: // FriendPipe
          // Filter friend by name or username.
          function transform(friends, search) {
            if (!friends) {
              return;
            } else if (!search) {
              return friends;
            } else {
              var term = search.toLowerCase();
              return friends.filter(function (friend) {
                return friend.name.toLowerCase().indexOf(term) > -1 || friend.username.toLowerCase().indexOf(term) > -1;
              });
            }
          }
        }]);
      }();

      _FriendPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'friendFilter'
      }), (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], _FriendPipe);
      /***/
    },

    /***/
    50367:
    /*!********************************!*\
      !*** ./src/app/pipes/group.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GroupPipe": function GroupPipe() {
          return (
            /* binding */
            _GroupPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _GroupPipe = /*#__PURE__*/function () {
        function GroupPipe() {
          _classCallCheck(this, GroupPipe);
        }

        return _createClass(GroupPipe, [{
          key: "transform",
          value: // GroupPipe
          // Filter group by name
          function transform(groups, search) {
            if (!groups) {
              return;
            } else if (!search) {
              return groups;
            } else {
              var term = search.toLowerCase();
              return groups.filter(function (group) {
                return group.name.toLowerCase().indexOf(term) > -1;
              });
            }
          }
        }]);
      }();

      _GroupPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'groupFilter'
      }), (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], _GroupPipe);
      /***/
    },

    /***/
    82713:
    /*!*******************************!*\
      !*** ./src/app/pipes/poll.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PollPipe": function PollPipe() {
          return (
            /* binding */
            _PollPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _PollPipe = /*#__PURE__*/function () {
        function PollPipe() {
          _classCallCheck(this, PollPipe);
        }

        return _createClass(PollPipe, [{
          key: "transform",
          value: // PollPipe
          // Filter poll by name
          function transform(polls, search) {
            if (!polls) {
              return;
            } else if (!search) {
              return polls;
            } else {
              var term = search.toLowerCase();
              return polls.filter(function (poll) {
                return poll.description.toLowerCase().indexOf(term) > -1;
              });
            }
          }
        }]);
      }();

      _PollPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'pollFilter'
      }), (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], _PollPipe);
      /***/
    },

    /***/
    79940:
    /*!***********************************!*\
      !*** ./src/app/pipes/resource.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResourcePipe": function ResourcePipe() {
          return (
            /* binding */
            _ResourcePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ResourcePipe = /*#__PURE__*/function () {
        function ResourcePipe() {
          _classCallCheck(this, ResourcePipe);
        }

        return _createClass(ResourcePipe, [{
          key: "transform",
          value: // ResourcePipe
          // Filter resource by name
          function transform(resources, search) {
            if (!resources) {
              return;
            } else if (!search) {
              return resources;
            } else {
              var term = search.toLowerCase();
              return resources.filter(function (resource) {
                return resource.name.toLowerCase().indexOf(term) > -1;
              });
            }
          }
        }]);
      }();

      _ResourcePipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'resourceFilter'
      }), (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], _ResourcePipe);
      /***/
    },

    /***/
    69223:
    /*!***************************************!*\
      !*** ./src/app/pipes/reverse.pipe.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReversePipe": function ReversePipe() {
          return (
            /* binding */
            _ReversePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ReversePipe = /*#__PURE__*/function () {
        function ReversePipe() {
          _classCallCheck(this, ReversePipe);
        }

        return _createClass(ReversePipe, [{
          key: "transform",
          value: function transform(value) {
            return value.slice().reverse();
          }
        }]);
      }();

      _ReversePipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'reverse'
      })], _ReversePipe);
      /***/
    },

    /***/
    38659:
    /*!*********************************!*\
      !*** ./src/app/pipes/search.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPipe": function SearchPipe() {
          return (
            /* binding */
            _SearchPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SearchPipe = /*#__PURE__*/function () {
        function SearchPipe() {
          _classCallCheck(this, SearchPipe);
        }

        return _createClass(SearchPipe, [{
          key: "transform",
          value: // SearchPipe
          // Filter user search results for name or username excluding the excludedIds.
          function transform(accounts, data) {
            var excludedIds = data[0];
            var term = data[1];

            if (!accounts) {
              return;
            } else if (!excludedIds) {
              return accounts;
            } else if (excludedIds && !term) {
              return accounts.filter(function (account) {
                return excludedIds.indexOf(account.userId) == -1;
              });
            } else {
              term = term.toLowerCase();
              return accounts.filter(function (account) {
                return excludedIds.indexOf(account.userId) == -1 && (account.name.toLowerCase().indexOf(term) > -1 || account.username.toLowerCase().indexOf(term) > -1);
              });
            }
          }
        }]);
      }();

      _SearchPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'searchFilter'
      }), (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], _SearchPipe);
      /***/
    },

    /***/
    64053:
    /*!*******************************************************************!*\
      !*** ./src/app/reaction-list-modal/reaction-list-modal.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReactionListModalPageModule": function ReactionListModalPageModule() {
          return (
            /* binding */
            _ReactionListModalPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reaction-list-modal.page */
      62744);

      var routes = [{
        path: '',
        component: _reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_0__.ReactionListModalPage
      }];

      var _ReactionListModalPageModule = /*#__PURE__*/_createClass(function ReactionListModalPageModule() {
        _classCallCheck(this, ReactionListModalPageModule);
      });

      _ReactionListModalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_0__.ReactionListModalPage]
      })], _ReactionListModalPageModule);
      /***/
    },

    /***/
    62744:
    /*!*****************************************************************!*\
      !*** ./src/app/reaction-list-modal/reaction-list-modal.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReactionListModalPage": function ReactionListModalPage() {
          return (
            /* binding */
            _ReactionListModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reaction_list_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reaction-list-modal.page.html */
      20228);
      /* harmony import */


      var _reaction_list_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reaction-list-modal.page.scss */
      91295);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _ReactionListModalPage = /*#__PURE__*/function () {
        function ReactionListModalPage(modal, navParam) {
          _classCallCheck(this, ReactionListModalPage);

          this.modal = modal;
          this.navParam = navParam;
          this.items = [];
          var r = this.navParam.data.reactions;
          this.items = Object.keys(r).map(function (e) {
            return r[e];
          });
        }

        return _createClass(ReactionListModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modal.dismiss();
          }
        }]);
      }();

      _ReactionListModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams
        }];
      };

      _ReactionListModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-reaction-list-modal',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reaction_list_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reaction_list_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams])], _ReactionListModalPage);
      /***/
    },

    /***/
    78968:
    /*!************************************************!*\
      !*** ./src/app/services/auth-guard.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuardService": function AuthGuardService() {
          return (
            /* binding */
            _AuthGuardService
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data.service */
      52468);

      var _AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(router, dataService) {
          _classCallCheck(this, AuthGuardService);

          this.router = router;
          this.dataService = dataService;
        }

        return _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(route) {
            console.log(route);
            var val = this.dataService.getFromStorageAsync('currentUser');
            console.log('val:' + val);

            if (val === null) {
              return false;
            } else {
              return true;
            }
          }
        }]);
      }();

      _AuthGuardService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService
        }];
      };

      _AuthGuardService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router, _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService])], _AuthGuardService);
      /***/
    },

    /***/
    52468:
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataService": function DataService() {
          return (
            /* binding */
            _DataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/storage */
      54357);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/app */
      77199);
      /* harmony import */


      var _image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image.service */
      54249); // import * as firebase from 'firebase';


      var _DataService = /*#__PURE__*/function () {
        function DataService(afAuth, storage, firestore, imageProvider) {
          _classCallCheck(this, DataService);

          this.afAuth = afAuth;
          this.storage = storage;
          this.firestore = firestore;
          this.imageProvider = imageProvider;
        } // Get all users


        return _createClass(DataService, [{
          key: "getUsers",
          value: function getUsers() {
            return this.firestore.collection('accounts');
          } // Get logged in user data

        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var loggedInUserId;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.afAuth.currentUser.then(function (data) {
                      return data.uid;
                    });

                  case 2:
                    loggedInUserId = _context.sent;
                    console.info('loggedInUserId', loggedInUserId);
                    return _context.abrupt("return", this.getUser(loggedInUserId));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getCurrentUserId",
          value: function getCurrentUserId() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var loggedInUserId;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.afAuth.currentUser.then(function (data) {
                      return data.uid;
                    });

                  case 2:
                    loggedInUserId = _context2.sent;
                    return _context2.abrupt("return", loggedInUserId);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          } // Get user by their userId

        }, {
          key: "getUser",
          value: function getUser(userId) {
            return this.firestore.doc('accounts/' + userId);
          } // Get requests given the userId.

        }, {
          key: "getRequests",
          value: function getRequests(userId) {
            return this.firestore.doc('requests/' + userId); // return this.afdb.object('/requests/' + userId);
          } // Get conversation given the conversationId.

        }, {
          key: "getConversation",
          value: function getConversation(conversationId) {
            return this.firestore.doc('conversations/' + conversationId); // return this.afdb.object('/conversations/' + conversationId);
          } // Get conversations of the current logged in user.

        }, {
          key: "getConversations",
          value: function getConversations(userId) {
            return this.firestore.doc('accounts/' + userId).collection('conversations'); // return this.afdb.list('/accounts/' + this.afAuth.currentUser.uid + '/conversations');
          } // Get messages of the conversation given the Id.

        }, {
          key: "getConversationMessages",
          value: function getConversationMessages(conversationId) {
            return this.firestore.doc('conversations/' + conversationId); // return this.afdb.object('/conversations/' + conversationId + '/messages');
          } // Get messages of the group given the Id.

        }, {
          key: "getGroupMessages",
          value: function getGroupMessages(groupId) {
            return this.firestore.doc('groups/' + groupId).collection('messages'); // return this.afdb.object('/groups/' + groupId + '/messages');
          }
        }, {
          key: "getGroup",
          value: function getGroup(groupId) {
            return this.firestore.doc('groups/' + groupId);
          }
        }, {
          key: "getBlockedLists",
          value: function getBlockedLists() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var loggedInUserId;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.afAuth.currentUser.then(function (data) {
                      return data.uid;
                    });

                  case 2:
                    loggedInUserId = _context3.sent;
                    return _context3.abrupt("return", this.firestore.doc('accounts/' + loggedInUserId).collection('conversations').ref.where('blocked', '==', true));

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          } // Get Polls of the logged in user.

        }, {
          key: "getPollDetails",
          value: function getPollDetails(pId) {
            return this.firestore.doc('posts/' + pId);
          } // Get Resource details of the logged in user.

        }, {
          key: "getResourceDetails",
          value: function getResourceDetails(rId) {
            return this.firestore.doc('posts/' + rId);
          } // Get Post details of the logged in user.

        }, {
          key: "getPostDetails",
          value: function getPostDetails(pId) {
            return this.firestore.doc('posts/' + pId);
          } // Get Polls of the logged in user.

        }, {
          key: "getGroupMembers",
          value: function getGroupMembers(groupId) {
            return this.firestore.doc('groups/' + groupId).collection('members'); // return this.afdb.object('/groups/' + groupId + '/members/');
          }
        }, {
          key: "updatePollMembers",
          value: function updatePollMembers(pollKey, pollData) {
            var _this4 = this;

            this.firestore.doc('posts/' + pollKey).update({
              data: pollData
            }).then(function () {
              var increment = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.increment(1);

              _this4.firestore.collection('posts').doc(pollKey).update({
                totalPollCount: increment
              });
            });
          } // Get all groups.

        }, {
          key: "getGroups",
          value: function getGroups() {
            return this.firestore.collection('groups');
          }
        }, {
          key: "addReports",
          value: function addReports(userId, post) {
            var report = {
              reportedBy: userId,
              postId: post.key
            };
            return this.firestore.collection('reports').add(report);
          }
        }, {
          key: "addPost",
          value: function addPost(post) {
            var _this5 = this;

            var _a; // add searchable data
            // Extract text from different fields


            var searchKeywords;
            var searchableText = [post.title || '', ((_a = post.data) === null || _a === void 0 ? void 0 : _a.message) || ''].join(' ').toLowerCase(); // Generate keywords including phrases

            var keywords = this.generateSearchKeywords(searchableText);

            if (post.type !== 'general') {
              var _searchableText = "".concat(post.title).toLowerCase();
            } else {
              var _searchableText2 = "".concat(post.title, " ").concat(post.data.message).toLowerCase();
            }

            post.searchableText = searchableText;
            post.searchKeywords = Array.from(new Set(keywords)); // Remove duplicates;

            return new Promise(function (resolve, reject) {
              _this5.firestore.collection('posts').add(post).then(function (success) {
                var postId = success.id; // If there are images to upload

                if (post.postMediaImgs && post.postMediaImgs.length > 0) {
                  _this5.imageProvider.uploadPostPhotos(postId, post.postMediaImgs).then(function (postMediaUrls) {
                    post.postMediaImgs = [];

                    if (postMediaUrls) {
                      post.postMediaImgs = postMediaUrls;
                      return _this5.firestore.doc('posts/' + postId).update({
                        postMediaImgs: postMediaUrls
                      });
                    } else {
                      return null;
                    }
                  }).then(function () {
                    resolve(success);
                  })["catch"](function (error) {
                    reject(error);
                  });
                } else {
                  // Important: Resolve immediately if no images to upload
                  resolve(success);
                }
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "generateSearchKeywords",
          value: function generateSearchKeywords(text) {
            // Common English stop words that should be ignored in search
            var stopWords = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the', 'to', 'was', 'were', 'will', 'with', 'the', 'this', 'but', 'they', 'have', 'had', 'what', 'when', 'where', 'who', 'which', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very']); // Remove special characters and extra spaces

            var cleanText = text.replace(/[^\w\s]/gi, '') // Remove special characters
            .toLowerCase().trim(); // Split into words

            var words = cleanText.split(/\s+/).filter(function (word) {
              return word.length > 0 && !stopWords.has(word) && // Remove stop words
              !/^\d+$/.test(word); // Remove pure numbers
            });
            var keywords = new Set();
            words.forEach(function (word) {
              // Only process words with minimum length of 3
              if (word.length >= 3) {
                // Add full word
                keywords.add(word); // Add important word combinations (phrases)

                for (var i = 0; i < words.length - 1; i++) {
                  if (words[i] === word) {
                    var phrase = "".concat(words[i], " ").concat(words[i + 1]);
                    keywords.add(phrase);
                  }
                } // Add partial words for prefix search (min 3 chars)


                for (var _i = 3; _i <= word.length; _i++) {
                  keywords.add(word.substring(0, _i));
                }
              }
            });
            return Array.from(keywords);
          }
        }, {
          key: "updateResourceReviews",
          value: function updateResourceReviews(resourceKey, review) {
            this.firestore.doc('resources/' + resourceKey).collection('reviews').add(review);
          }
        }, {
          key: "addFirstResourceReview",
          value: function addFirstResourceReview(resourceKey, review) {
            var r = [];
            this.firestore.doc('resources/' + resourceKey).update({
              reviews: r
            });
            this.updateResourceReviews(resourceKey, review);
          }
        }, {
          key: "updatePostReviews",
          value: function updatePostReviews(postKey, review) {
            var _this6 = this;

            return this.firestore.collection('posts').doc(postKey).collection('reviews').add(review).then(function () {
              var increment = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.increment(1);

              _this6.firestore.collection('posts').doc(postKey).update({
                totalReviewCount: increment
              });
            });
          }
        }, {
          key: "updateEventReviews",
          value: function updateEventReviews(eventKey, review) {
            this.firestore.doc('events/' + eventKey).collection('reviews').add(review);
          }
        }, {
          key: "addPostReactions",
          value: function addPostReactions(postKey, reaction) {
            var _this7 = this;

            return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(function () {
              var increment = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.increment(1);

              _this7.firestore.collection('posts').doc(postKey).update({
                totalReactionCount: increment
              });
            });
          }
        }, {
          key: "updatePostReactions",
          value: function updatePostReactions(postKey, reaction) {
            var _this8 = this;

            console.info('reaction', reaction);
            console.info('postkey', postKey);
            return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(function () {
              console.info('reaction added');
              var increment = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.increment(1);

              _this8.firestore.collection('posts').doc(postKey).update({
                totalReactionCount: increment
              });
            });
          }
        }, {
          key: "removePostReaction",
          value: function removePostReaction(postKey, reactionKey) {
            var _this9 = this;

            this.firestore.collection('posts').doc(postKey).collection('reactions').doc(reactionKey)["delete"]().then(function () {
              var decrement = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.increment(-1);

              _this9.firestore.collection('posts').doc(postKey).update({
                totalReactionCount: decrement
              });
            });
          }
        }, {
          key: "updateResourceReactions",
          value: function updateResourceReactions(resourceKey, reaction) {
            // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
            this.firestore.doc('/resources/' + resourceKey).collection('/reactions/').add(reaction); // var newRef = this.afdb.list('/resources/' + resourceKey + '/reactions/').push(reaction);
            // return newRef.key;
          }
        }, {
          key: "updateEventReactions",
          value: function updateEventReactions(eventKey, reaction) {
            // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
            this.firestore.doc('/events/' + eventKey).collection('/reactions/').add(reaction); // var newRef = this.afdb.list('/events/' + eventKey + '/reactions/').push(reaction);
            // return newRef.key;
          }
        }, {
          key: "updatePollReviews",
          value: function updatePollReviews(pollId, review) {
            // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
            this.firestore.doc('/polls/' + pollId).collection('/reviews/').add(review); //    this.afdb.list('/polls/' + pollId + '/reviews/').push(review);
          }
        }, {
          key: "getFromStorageAsync",
          value: function getFromStorageAsync(section) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log('inside getFromStorageAsync');
                    _context4.next = 3;
                    return this.storage.get(section).then(function (val) {
                      return val;
                    });

                  case 3:
                    return _context4.abrupt("return", _context4.sent);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }]);
      }();

      _DataService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
        }, {
          type: _image_service__WEBPACK_IMPORTED_MODULE_2__.ImageService
        }];
      };

      _DataService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth, _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore, _image_service__WEBPACK_IMPORTED_MODULE_2__.ImageService])], _DataService);
      /***/
    },

    /***/
    54249:
    /*!*******************************************!*\
      !*** ./src/app/services/image.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageService": function ImageService() {
          return (
            /* binding */
            _ImageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      19889);
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase */
      713);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      45169);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      18659);
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      40773);
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loading.service */
      4471);
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      40868);

      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Plugins.Camera;

      var _ImageService = /*#__PURE__*/function () {
        function ImageService(firestore, loadingProvider, mediaCapture, imagePicker, file, filePath) {
          _classCallCheck(this, ImageService);

          this.firestore = firestore;
          this.loadingProvider = loadingProvider;
          this.mediaCapture = mediaCapture;
          this.imagePicker = imagePicker;
          this.file = file;
          this.filePath = filePath;
          this.profilePhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.DataUrl,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera
          };
          this.photoMessageOptions = {
            quality: 50,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.DataUrl,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
            allowEditing: true
          };
          this.groupPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.DataUrl,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera
          };
        } // Function to convert dataURI to Blob needed by Firebase


        return _createClass(ImageService, [{
          key: "imgURItoBlob",
          value: function imgURItoBlob(dataURI) {
            var binary = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var array = [];

            for (var i = 0; i < binary.length; i++) {
              array.push(binary.charCodeAt(i));
            }

            return new Blob([new Uint8Array(array)], {
              type: mimeString
            });
          } // Generate a random filename of length for the image to be uploaded

        }, {
          key: "generateFilename",
          value: function generateFilename() {
            var length = 8;
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < length; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text + ".jpg";
          }
        }, {
          key: "setProfilePhoto",
          value: function setProfilePhoto(user, sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var image, imageData, imgBlob, metadata, name, dpStorageRef;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log(user);
                    this.profilePhotoOptions.source = sourceType;
                    this.loadingProvider.show();
                    _context5.prev = 3;
                    _context5.next = 6;
                    return Camera.getPhoto(this.profilePhotoOptions);

                  case 6:
                    image = _context5.sent;
                    imageData = image.dataUrl.split(',')[1]; // Process the returned imageURI.

                    imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                    metadata = {
                      'contentType': imgBlob.type
                    };
                    name = this.generateFilename();
                    dpStorageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/' + user.userId + '/' + name); // Rest of your existing upload code...

                    _context5.next = 18;
                    break;

                  case 14:
                    _context5.prev = 14;
                    _context5.t0 = _context5["catch"](3);
                    this.loadingProvider.hide();
                    console.error('Error taking photo:', _context5.t0);

                  case 18:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this, [[3, 14]]);
            }));
          } // Update other methods similarly

        }, {
          key: "setGroupPhoto",
          value: function setGroupPhoto(group, sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var image, imageData;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    this.groupPhotoOptions.source = sourceType;
                    this.loadingProvider.show();
                    _context6.prev = 2;
                    _context6.next = 5;
                    return Camera.getPhoto(this.groupPhotoOptions);

                  case 5:
                    image = _context6.sent;
                    imageData = image.dataUrl.split(',')[1]; // Rest of your existing code...

                    _context6.next = 13;
                    break;

                  case 9:
                    _context6.prev = 9;
                    _context6.t0 = _context6["catch"](2);
                    this.loadingProvider.hide();
                    console.error('Error taking photo:', _context6.t0);

                  case 13:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this, [[2, 9]]);
            }));
          } // Set group photo and return the group object as promise.

        }, {
          key: "setGroupPhotoPromise",
          value: function setGroupPhotoPromise(group, sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this10 = this;

              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    return _context8.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                        var image, imageData, imgBlob, metadata, gPPStorageRef, snapshot, url;
                        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                          while (1) switch (_context7.prev = _context7.next) {
                            case 0:
                              this.groupPhotoOptions.source = sourceType;
                              this.loadingProvider.show();
                              _context7.prev = 2;
                              _context7.next = 5;
                              return Camera.getPhoto(this.groupPhotoOptions);

                            case 5:
                              image = _context7.sent;
                              imageData = image.dataUrl.split(',')[1];
                              imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                              metadata = {
                                'contentType': imgBlob.type
                              };
                              gPPStorageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.uid + '/' + this.generateFilename());
                              _context7.next = 12;
                              return gPPStorageRef.put(imgBlob, metadata);

                            case 12:
                              snapshot = _context7.sent;
                              this.deleteImageFile(group.img);
                              _context7.next = 16;
                              return gPPStorageRef.getDownloadURL();

                            case 16:
                              url = _context7.sent;
                              group.img = url;
                              this.loadingProvider.hide();
                              resolve(group);
                              _context7.next = 26;
                              break;

                            case 22:
                              _context7.prev = 22;
                              _context7.t0 = _context7["catch"](2);
                              this.loadingProvider.hide();
                              this.loadingProvider.showToast("Something went wrong");

                            case 26:
                            case "end":
                              return _context7.stop();
                          }
                        }, _callee7, this, [[2, 22]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }));
          } //Delete the image given the url.

        }, {
          key: "deleteImageFile",
          value: function deleteImageFile(path) {
            var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?')); // tslint:disable-next-line: max-line-length

            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.uid + '/' + fileName)["delete"]().then(function () {})["catch"](function (error) {
              console.log(error);
            });
          } //Delete the user.img given the user.

        }, {
          key: "deleteUserImageFile",
          value: function deleteUserImageFile(user) {
            var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?')); // tslint:disable-next-line: max-line-length

            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/' + user.userId + '/' + fileName)["delete"]().then(function () {})["catch"](function (error) {
              console.log(error);
            });
          } // Delete group image file on group storage reference.

        }, {
          key: "deleteGroupImageFile",
          value: function deleteGroupImageFile(groupId, path) {
            var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/' + groupId + '/' + fileName)["delete"]().then(function () {})["catch"](function (error) {
              console.log(error);
            });
          } // Update uploadPhotoMessage method

        }, {
          key: "uploadPhotoMessage",
          value: function uploadPhotoMessage(conversationId, sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var _this11 = this;

              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    return _context10.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                        var image, imageData;
                        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                          while (1) switch (_context9.prev = _context9.next) {
                            case 0:
                              this.photoMessageOptions.source = sourceType;
                              this.loadingProvider.show();
                              _context9.prev = 2;
                              _context9.next = 5;
                              return Camera.getPhoto(this.photoMessageOptions);

                            case 5:
                              image = _context9.sent;
                              imageData = image.dataUrl.split(',')[1]; // Rest of your existing code...

                              _context9.next = 13;
                              break;

                            case 9:
                              _context9.prev = 9;
                              _context9.t0 = _context9["catch"](2);
                              this.loadingProvider.hide();
                              console.error('Error taking photo:', _context9.t0);

                            case 13:
                            case "end":
                              return _context9.stop();
                          }
                        }, _callee9, this, [[2, 9]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10);
            }));
          } // Upload photo message and return the url as promise.

        }, {
          key: "uploadPostPhoto",
          value: function uploadPostPhoto(sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var _this12 = this;

              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    return _context12.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                        var image, imageData, imgBlob, metadata, upRef, url;
                        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                          while (1) switch (_context11.prev = _context11.next) {
                            case 0:
                              this.photoMessageOptions.source = sourceType;
                              this.loadingProvider.show();
                              _context11.prev = 2;
                              _context11.next = 5;
                              return Camera.getPhoto(this.photoMessageOptions);

                            case 5:
                              image = _context11.sent;
                              imageData = image.dataUrl.split(',')[1];
                              imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                              metadata = {
                                'contentType': imgBlob.type
                              };
                              upRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/posts/' + this.generateFilename());
                              _context11.next = 12;
                              return upRef.put(imgBlob, metadata);

                            case 12:
                              _context11.next = 14;
                              return upRef.getDownloadURL();

                            case 14:
                              url = _context11.sent;
                              this.loadingProvider.hide();
                              resolve(url);
                              _context11.next = 23;
                              break;

                            case 19:
                              _context11.prev = 19;
                              _context11.t0 = _context11["catch"](2);
                              this.loadingProvider.hide();
                              this.loadingProvider.showToast("Something went wrong");

                            case 23:
                            case "end":
                              return _context11.stop();
                          }
                        }, _callee11, this, [[2, 19]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12);
            }));
          }
        }, {
          key: "uploadPostPhotos",
          value: function uploadPostPhotos(postId, postMedia) {
            var _this13 = this;

            var promises = [];
            return new Promise(function (resolve) {
              if (postMedia && postMedia.length > 0) {
                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < postMedia.length; i++) {
                  promises.push(_this13.getDownloadUrlImage(postId, postMedia[i]));
                }

                Promise.all(promises).then(function (results) {
                  resolve(results);
                });
              } else {
                resolve(postMedia);
              }
            });
          }
        }, {
          key: "getDownloadUrlImage",
          value: function getDownloadUrlImage(postId, imageBase64) {
            var _this14 = this;

            return new Promise(function (resolve) {
              // Process the returned imageURI.
              var imgBlob = _this14.imgURItoBlob(imageBase64);

              var metadata = {
                'contentType': imgBlob.type
              }; // Generate filename and upload to Firebase Storage.

              var upRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/posts/' + postId + _this14.generateFilename());
              upRef.put(imgBlob, metadata).then(function (snapshot) {
                // URL of the uploaded image!
                upRef.getDownloadURL().then(function (url) {
                  resolve(url);
                })["catch"](function (err) {
                  console.log('Error occurred while downloading the url of images.');
                });
              })["catch"](function (error) {
                console.log('Error occured while uploading images:', error);
              });
            });
          }
        }, {
          key: "deletePostPhoto",
          value: function deletePostPhoto(url) {
            var fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/posts/' + fileName)["delete"]().then(function () {})["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "uploadPostReactionPhoto",
          value: function uploadPostReactionPhoto(postId, userId, sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var _this15 = this;

              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    return _context14.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                        var image, imageData, imgBlob, metadata, upRef, url;
                        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                          while (1) switch (_context13.prev = _context13.next) {
                            case 0:
                              this.photoMessageOptions.source = sourceType;
                              this.loadingProvider.show();
                              _context13.prev = 2;
                              _context13.next = 5;
                              return Camera.getPhoto(this.photoMessageOptions);

                            case 5:
                              image = _context13.sent;
                              imageData = image.dataUrl.split(',')[1];
                              imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                              metadata = {
                                'contentType': imgBlob.type
                              };
                              upRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/posts' + postId + '/' + userId + '/' + this.generateFilename());
                              _context13.next = 12;
                              return upRef.put(imgBlob, metadata);

                            case 12:
                              _context13.next = 14;
                              return upRef.getDownloadURL();

                            case 14:
                              url = _context13.sent;
                              this.loadingProvider.hide();
                              resolve(url);
                              _context13.next = 23;
                              break;

                            case 19:
                              _context13.prev = 19;
                              _context13.t0 = _context13["catch"](2);
                              this.loadingProvider.hide();
                              this.loadingProvider.showToast("Something went wrong");

                            case 23:
                            case "end":
                              return _context13.stop();
                          }
                        }, _callee13, this, [[2, 19]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14);
            }));
          }
        }, {
          key: "uploadPostVideo",
          value: function uploadPostVideo() {
            var _this16 = this;

            return new Promise(function (resolve, reject) {
              var options = {
                limit: 1,
                duration: 30
              };

              _this16.mediaCapture.captureVideo(options).then(function (data) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this16, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                  var capturedFile, fileName, dir, fromDirectory, toDirectory, videoBlob, storageRef, uploadTask, downloadURL;
                  return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                      case 0:
                        _context15.prev = 0;
                        capturedFile = data[0];
                        fileName = capturedFile.name;
                        dir = capturedFile['localURL'].split('/');
                        dir.pop();
                        fromDirectory = dir.join('/');
                        toDirectory = this.file.dataDirectory;
                        this.loadingProvider.show(); // Move the file to permanent storage

                        _context15.next = 10;
                        return this.file.moveFile(fromDirectory, fileName, toDirectory, fileName);

                      case 10:
                        _context15.next = 12;
                        return this.file.readAsArrayBuffer(toDirectory, fileName);

                      case 12:
                        videoBlob = _context15.sent;
                        // Upload to Firebase
                        storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child("videos/posts/".concat(new Date().getTime(), "_").concat(fileName));
                        _context15.next = 16;
                        return storageRef.put(videoBlob, {
                          contentType: 'video/mp4'
                        });

                      case 16:
                        uploadTask = _context15.sent;
                        _context15.next = 19;
                        return storageRef.getDownloadURL();

                      case 19:
                        downloadURL = _context15.sent;
                        _context15.next = 22;
                        return this.file.removeFile(toDirectory, fileName);

                      case 22:
                        this.loadingProvider.hide();
                        resolve(downloadURL);
                        _context15.next = 31;
                        break;

                      case 26:
                        _context15.prev = 26;
                        _context15.t0 = _context15["catch"](0);
                        this.loadingProvider.hide();
                        console.error('Error in uploadPostVideo:', _context15.t0);
                        reject(_context15.t0);

                      case 31:
                      case "end":
                        return _context15.stop();
                    }
                  }, _callee15, this, [[0, 26]]);
                }));
              })["catch"](function (error) {
                console.error('Error capturing video:', error);
                reject(error);
              });
            });
          }
        }, {
          key: "deletePostReactionPhoto",
          value: function deletePostReactionPhoto(postId, url) {
            var fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
            firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/' + postId + '/' + fileName)["delete"]().then(function () {})["catch"](function (error) {
              console.log(error);
            });
          } // Upload group photo message and return a promise as url.

        }, {
          key: "uploadGroupPhotoMessage",
          value: function uploadGroupPhotoMessage(groupId, sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var _this17 = this;

              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    return _context17.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this17, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                        var image, imageData, imgBlob, metadata, ugpRef, url;
                        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                          while (1) switch (_context16.prev = _context16.next) {
                            case 0:
                              this.photoMessageOptions.source = sourceType;
                              this.loadingProvider.show();
                              _context16.prev = 2;
                              _context16.next = 5;
                              return Camera.getPhoto(this.photoMessageOptions);

                            case 5:
                              image = _context16.sent;
                              imageData = image.dataUrl.split(',')[1];
                              imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                              metadata = {
                                'contentType': imgBlob.type
                              };
                              ugpRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/' + groupId + '/' + this.generateFilename());
                              _context16.next = 12;
                              return ugpRef.put(imgBlob, metadata);

                            case 12:
                              _context16.next = 14;
                              return ugpRef.getDownloadURL();

                            case 14:
                              url = _context16.sent;
                              this.loadingProvider.hide();
                              resolve(url);
                              _context16.next = 23;
                              break;

                            case 19:
                              _context16.prev = 19;
                              _context16.t0 = _context16["catch"](2);
                              this.loadingProvider.hide();
                              this.loadingProvider.showToast("Something went wrong");

                            case 23:
                            case "end":
                              return _context16.stop();
                          }
                        }, _callee16, this, [[2, 19]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17);
            }));
          }
        }, {
          key: "uploadGroupVideoMessage",
          value: function uploadGroupVideoMessage(groupId) {
            var _this18 = this;

            return new Promise(function (resolve) {
              _this18.loadingProvider.show();

              _this18.mediaCapture.captureVideo().then(function (data) {
                var videoUrl = data[0].fullPath;
                var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
                var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
                dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                console.log("video path: " + videoUrl);
                var x = videoUrl.split("/");
                var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                var name = x[x.length - 1];
                console.log(filepath + " - " + name);

                _this18.file.readAsArrayBuffer(dirpath, filename).then(function (success) {
                  console.log(success);
                  var blob = new Blob([success], {
                    type: "video/mp4"
                  });
                  console.log(blob);
                  var upload = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('videos/' + groupId + "/" + name).put(blob);
                  upload.then(function (res) {
                    var process = res.bytesTransferred / res.totalBytes * 100;
                    console.log(process);

                    _this18.loadingProvider.hide();

                    resolve(res.downloadURL);
                  }, function (err) {
                    _this18.loadingProvider.hide();

                    console.log("Failed");
                  });
                });
              }, function (err) {
                _this18.loadingProvider.hide();

                console.log("Media Err = " + err);
              });
            });
          }
        }, {
          key: "uploadVideoMessage",
          value: function uploadVideoMessage(conversationId) {
            var _this19 = this;

            return new Promise(function (resolve) {
              _this19.loadingProvider.show();

              _this19.mediaCapture.captureVideo().then(function (data) {
                var videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                var x = videoUrl.split("/");
                var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                var name = x[x.length - 1];
                console.log(filepath + " - " + name);

                _this19.file.readAsArrayBuffer(filepath, name).then(function (success) {
                  console.log(success);
                  var blob = new Blob([success], {
                    type: "video/mp4"
                  });
                  console.log(blob); // let timestamp = (Math.floor(Date.now() / 1000)).toString();

                  var uploadRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('videos/' + name);
                  uploadRef.put(blob).then(function (res) {
                    var process = res.bytesTransferred / res.totalBytes * 100;
                    console.log(process);

                    _this19.loadingProvider.hide();

                    uploadRef.getDownloadURL().then(function (url) {
                      resolve(url);
                    });
                  }, function (err) {
                    _this19.loadingProvider.hide();

                    console.log("Failed");
                  });
                });
              }, function (err) {
                _this19.loadingProvider.hide();

                console.log("Media Err = " + err);
              });
            });
          } // Upload group photo message and return a promise as url.

        }, {
          key: "uploadGroupPhotoResource",
          value: function uploadGroupPhotoResource(groupId, sourceType) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              var _this20 = this;

              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    return _context19.abrupt("return", new Promise(function (resolve) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this20, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
                        var image, imageData, imgBlob, metadata, ugpRef, url;
                        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                          while (1) switch (_context18.prev = _context18.next) {
                            case 0:
                              this.photoMessageOptions.source = sourceType;
                              this.loadingProvider.show();
                              _context18.prev = 2;
                              _context18.next = 5;
                              return Camera.getPhoto(this.photoMessageOptions);

                            case 5:
                              image = _context18.sent;
                              imageData = image.dataUrl.split(',')[1];
                              imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                              metadata = {
                                'contentType': imgBlob.type
                              };
                              ugpRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/' + groupId + '/' + this.generateFilename());
                              _context18.next = 12;
                              return ugpRef.put(imgBlob, metadata);

                            case 12:
                              _context18.next = 14;
                              return ugpRef.getDownloadURL();

                            case 14:
                              url = _context18.sent;
                              this.loadingProvider.hide();
                              resolve(url);
                              _context18.next = 23;
                              break;

                            case 19:
                              _context18.prev = 19;
                              _context18.t0 = _context18["catch"](2);
                              this.loadingProvider.hide();
                              this.loadingProvider.showToast("Something went wrong");

                            case 23:
                            case "end":
                              return _context18.stop();
                          }
                        }, _callee18, this, [[2, 19]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19);
            }));
          }
        }, {
          key: "uploadGroupVideoResource",
          value: function uploadGroupVideoResource(groupId) {
            var _this21 = this;

            return new Promise(function (resolve) {
              _this21.loadingProvider.show();

              _this21.mediaCapture.captureVideo().then(function (data) {
                var videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                var x = videoUrl.split("/");
                var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                var name = x[x.length - 1];
                console.log(filepath + " - " + name);

                _this21.file.readAsArrayBuffer(filepath, name).then(function (success) {
                  console.log(success);
                  var blob = new Blob([success], {
                    type: "video/mp4"
                  });
                  console.log(blob);
                  var upload = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('videos/' + groupId + "/" + name).put(blob);
                  upload.then(function (res) {
                    var process = res.bytesTransferred / res.totalBytes * 100;
                    console.log(process);

                    _this21.loadingProvider.hide();

                    resolve(res.downloadURL);
                  }, function (err) {
                    _this21.loadingProvider.hide();

                    console.log("Failed");
                  });
                });
              }, function (err) {
                _this21.loadingProvider.hide();

                console.log("Media Err = " + err);
              });
            });
          }
        }, {
          key: "getGroupVideoResource",
          value: function getGroupVideoResource(resourceurl) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child(resourceurl).getDownloadURL().then(function (url) {
                      return url;
                    })["catch"](function (error) {// Handle any errors
                    });

                  case 2:
                    return _context20.abrupt("return", _context20.sent);

                  case 3:
                  case "end":
                    return _context20.stop();
                }
              }, _callee20);
            }));
          }
        }, {
          key: "getImages",
          value: function getImages() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
              var _this22 = this;

              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) switch (_context22.prev = _context22.next) {
                  case 0:
                    return _context22.abrupt("return", new Promise(function (resolve, reject) {
                      var options = {
                        maximumImagesCount: 4,
                        width: 500,
                        height: 500,
                        quality: 75
                      };

                      _this22.imagePicker.getPictures(options).then(function (results) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this22, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
                          var uploadedUrls, _iterator, _step, result, response, blob, fileName, storageRef, downloadUrl;

                          return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                            while (1) switch (_context21.prev = _context21.next) {
                              case 0:
                                _context21.prev = 0;
                                uploadedUrls = [];
                                _iterator = _createForOfIteratorHelper(results);
                                _context21.prev = 3;

                                _iterator.s();

                              case 5:
                                if ((_step = _iterator.n()).done) {
                                  _context21.next = 23;
                                  break;
                                }

                                result = _step.value;
                                _context21.next = 9;
                                return fetch(result);

                              case 9:
                                response = _context21.sent;
                                _context21.next = 12;
                                return response.blob();

                              case 12:
                                blob = _context21.sent;
                                // Upload to Firebase
                                fileName = this.generateFilename();
                                storageRef = firebase__WEBPACK_IMPORTED_MODULE_1__["default"].storage().ref().child('images/' + fileName);
                                _context21.next = 17;
                                return storageRef.put(blob);

                              case 17:
                                _context21.next = 19;
                                return storageRef.getDownloadURL();

                              case 19:
                                downloadUrl = _context21.sent;
                                uploadedUrls.push(downloadUrl);

                              case 21:
                                _context21.next = 5;
                                break;

                              case 23:
                                _context21.next = 28;
                                break;

                              case 25:
                                _context21.prev = 25;
                                _context21.t0 = _context21["catch"](3);

                                _iterator.e(_context21.t0);

                              case 28:
                                _context21.prev = 28;

                                _iterator.f();

                                return _context21.finish(28);

                              case 31:
                                resolve(uploadedUrls);
                                _context21.next = 37;
                                break;

                              case 34:
                                _context21.prev = 34;
                                _context21.t1 = _context21["catch"](0);
                                reject(_context21.t1);

                              case 37:
                              case "end":
                                return _context21.stop();
                            }
                          }, _callee21, this, [[0, 34], [3, 25, 28, 31]]);
                        }));
                      })["catch"](function (err) {
                        reject(err);
                      });
                    }));

                  case 1:
                  case "end":
                    return _context22.stop();
                }
              }, _callee22);
            }));
          }
        }]);
      }();

      _ImageService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__.MediaCapture
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__.ImagePicker
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath
        }];
      };

      _ImageService = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore, _loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService, _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__.MediaCapture, _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__.ImagePicker, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File, _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__.FilePath])], _ImageService);
      /***/
    },

    /***/
    4471:
    /*!*********************************************!*\
      !*** ./src/app/services/loading.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoadingService": function LoadingService() {
          return (
            /* binding */
            _LoadingService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingCtrl, toastCtrl) {
          _classCallCheck(this, LoadingService);

          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
        }

        return _createClass(LoadingService, [{
          key: "show",
          value: function show() {
            var _this23 = this;

            if (!this.loading) {
              this.loadingCtrl.create({
                spinner: 'circles',
                duration: 2000
              }).then(function (res) {
                _this23.loading = res;

                _this23.loading.present();
              });
            }
          }
        }, {
          key: "hide",
          value: function hide() {
            if (this.loading) {
              this.loading.dismiss();
              this.loading = null;
            }
          }
        }, {
          key: "showToast",
          value: function showToast(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 3000,
                      position: 'top',
                      animated: true,
                      color: 'primary',
                      cssClass: 'custom-toast',
                      mode: 'ios'
                    });

                  case 2:
                    toast = _context23.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context23.stop();
                }
              }, _callee23, this);
            }));
          }
        }]);
      }();

      _LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
        }];
      };

      _LoadingService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController])], _LoadingService);
      /***/
    },

    /***/
    32218:
    /*!******************************************!*\
      !*** ./src/app/services/share.module.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _pipes_friend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../pipes/friend */
      93197);
      /* harmony import */


      var _pipes_conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../pipes/conversation */
      57597);
      /* harmony import */


      var _pipes_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../pipes/group */
      50367);
      /* harmony import */


      var _pipes_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pipes/search */
      38659);
      /* harmony import */


      var _pipes_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/date */
      74250);
      /* harmony import */


      var _pipes_poll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pipes/poll */
      82713);
      /* harmony import */


      var _pipes_resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../pipes/resource */
      79940);
      /* harmony import */


      var angular_pipes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular-pipes */
      34302);
      /* harmony import */


      var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/reverse.pipe */
      69223);

      var _SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      _SharedModule = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [],
        declarations: [_pipes_friend__WEBPACK_IMPORTED_MODULE_0__.FriendPipe, _pipes_conversation__WEBPACK_IMPORTED_MODULE_1__.ConversationPipe, _pipes_group__WEBPACK_IMPORTED_MODULE_2__.GroupPipe, _pipes_search__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _pipes_date__WEBPACK_IMPORTED_MODULE_4__.DateFormatPipe, _pipes_poll__WEBPACK_IMPORTED_MODULE_5__.PollPipe, _pipes_resource__WEBPACK_IMPORTED_MODULE_6__.ResourcePipe, angular_pipes__WEBPACK_IMPORTED_MODULE_10__.FloorPipe, _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_7__.ReversePipe],
        exports: [_pipes_friend__WEBPACK_IMPORTED_MODULE_0__.FriendPipe, _pipes_conversation__WEBPACK_IMPORTED_MODULE_1__.ConversationPipe, _pipes_group__WEBPACK_IMPORTED_MODULE_2__.GroupPipe, _pipes_search__WEBPACK_IMPORTED_MODULE_3__.SearchPipe, _pipes_date__WEBPACK_IMPORTED_MODULE_4__.DateFormatPipe, _pipes_poll__WEBPACK_IMPORTED_MODULE_5__.PollPipe, _pipes_resource__WEBPACK_IMPORTED_MODULE_6__.ResourcePipe, angular_pipes__WEBPACK_IMPORTED_MODULE_10__.FloorPipe, _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_7__.ReversePipe]
      })], _SharedModule);
      /***/
    },

    /***/
    68943:
    /*!*****************************************************************!*\
      !*** ./src/app/user-profile-modal/user-profile-modal.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserProfileModalPageModule": function UserProfileModalPageModule() {
          return (
            /* binding */
            _UserProfileModalPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _user_profile_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-profile-modal.page */
      61370);

      var routes = [{
        path: '',
        component: _user_profile_modal_page__WEBPACK_IMPORTED_MODULE_0__.UserProfileModalPage
      }];

      var _UserProfileModalPageModule = /*#__PURE__*/_createClass(function UserProfileModalPageModule() {
        _classCallCheck(this, UserProfileModalPageModule);
      });

      _UserProfileModalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_user_profile_modal_page__WEBPACK_IMPORTED_MODULE_0__.UserProfileModalPage]
      })], _UserProfileModalPageModule);
      /***/
    },

    /***/
    61370:
    /*!***************************************************************!*\
      !*** ./src/app/user-profile-modal/user-profile-modal.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserProfileModalPage": function UserProfileModalPage() {
          return (
            /* binding */
            _UserProfileModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_profile_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-profile-modal.page.html */
      94788);
      /* harmony import */


      var _user_profile_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-profile-modal.page.scss */
      45840);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_environments_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/validator */
      86590);
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/loading.service */
      4471);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);

      var _UserProfileModalPage = /*#__PURE__*/function () {
        function UserProfileModalPage(modal, navParam, formBuilder, firestore, loadingProvider) {
          _classCallCheck(this, UserProfileModalPage);

          this.modal = modal;
          this.navParam = navParam;
          this.formBuilder = formBuilder;
          this.firestore = firestore;
          this.loadingProvider = loadingProvider;
          this.submitAttempt = false;
          this.errorMessages = [];
          this.user = this.navParam.data.user;
          this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.errorMessages;
          this.myForm = this.formBuilder.group({
            name: src_environments_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.nameValidator,
            username: src_environments_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.usernameValidator,
            email: src_environments_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.emailValidator,
            bio: src_environments_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.bioValidator
          });
        }

        return _createClass(UserProfileModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "save",
          value: function save() {
            var _this24 = this;

            this.submitAttempt = true;

            if (this.myForm.valid) {
              this.loadingProvider.show();
              this.firestore.doc('accounts/' + this.user.userId).update(this.user).then(function () {
                _this24.loadingProvider.hide();

                _this24.loadingProvider.showToast("Updated Successfully");

                _this24.modal.dismiss();
              })["catch"](function (err) {
                _this24.loadingProvider.showToast("Something went wrong");

                _this24.loadingProvider.hide();
              });
            }
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modal.dismiss();
          }
        }]);
      }();

      _UserProfileModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }];
      };

      _UserProfileModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-user-profile-modal',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_profile_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_profile_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore, _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService])], _UserProfileModalPage);
      /***/
    },

    /***/
    89019:
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });

      var _environment = {
        production: true,
        firebase: {
          /* apiKey: "AIzaSyBzI-lGb36R6EqUfX3gyA3jYVJjr-vUbQ0",//"AIzaSyDN6WmBnJGfN64BnR-r4TW9V8N1IHgps1w",
            authDomain: "chatapp-3f829.firebaseapp.com",
            databaseURL: "https://chatapp-3f829.firebaseio.com",
            projectId: "chatapp-3f829",
            storageBucket: "chatapp-3f829.appspot.com",
            messagingSenderId: "845839389008" */
          apiKey: "AIzaSyBzI-lGb36R6EqUfX3gyA3jYVJjr-vUbQ0",
          authDomain: "firechat-8fb8c.firebaseapp.com",
          databaseURL: "https://firechat-8fb8c.firebaseio.com",
          projectId: "firechat-8fb8c",
          storageBucket: "firechat-8fb8c.appspot.com",
          messagingSenderId: "1094106358076",
          appId: "1:1094106358076:web:aeafa6eda64aafc78afe39",
          measurementId: "G-4CLJ8NC2RF"
        },
        googleClientId: "845839389008-s0scp3mghdi67t5ga9t56j6265ibonp5.apps.googleusercontent.com"
      };
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment2
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment2 = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    86590:
    /*!***************************************!*\
      !*** ./src/environments/validator.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Validator": function Validator() {
          return (
            /* binding */
            _Validator
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _Validator;

      (function (Validator) {
        Validator.emailValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]];
        Validator.passwordValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(6)]];
        Validator.nameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]];
        Validator.usernameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(5)]];
        Validator.bioValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]];
        Validator.groupNameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]];
        Validator.groupDescriptionValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]];
        Validator.groupTagsValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]];
        Validator.errorMessages = {
          email: [{
            type: 'required',
            message: 'Email is required'
          }, {
            type: 'pattern',
            message: 'Email looks like invalid'
          }],
          password: [{
            type: 'required',
            message: 'Password is required'
          }, {
            type: 'minlength',
            message: 'Password must be 6 char'
          }],
          name: [{
            type: 'required',
            message: 'Name is required'
          }],
          username: [{
            type: 'required',
            message: 'Username is required'
          }, {
            type: 'minlength',
            message: 'Username must be 5 char'
          }],
          bio: [{
            type: 'required',
            message: 'Bio is required'
          }],
          groupName: [{
            type: 'required',
            message: 'Group Name is required'
          }],
          groupDescription: [{
            type: 'required',
            message: 'Group Description is required'
          }]
        }; // Poll Form Validators

        Validator.pollNameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1)]];
        Validator.pollDescriptionValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1)]];
        Validator.pollOption1Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1)]];
        Validator.pollOption2Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1)]];
      })(_Validator || (_Validator = {}));
      /***/

    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! hammerjs */
      58256);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__); // HAMMER TIME


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [90733, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [20985, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [93899, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [5121, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [52960, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [45473, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [19787, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66165, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [69569, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [35119, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [90799, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68918, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [94028, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [98107, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [72178, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [42868, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [18706, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [12099, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [84868, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [54377, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [15678, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [16735, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [87686, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [48555, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [30568, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [6231, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [45772, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [14977, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [42886, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [54990, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [13810, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [2446, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [47619, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [28393, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [56281, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [35932, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [57970, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [80298, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [71006, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [74783, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [62749, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [55404, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [39043, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    75158:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    52411:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/imagemodal/imagemodal.page.html ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"content\" (click)=\"close()\" tappable>\n    <img src={{img}} />\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    20228:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/reaction-list-modal/reaction-list-modal.page.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Reactions</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-avatar slot=\"start\">\n        <ion-img src=\"{{item.addedByUser.addedByImg}}\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.addedByUser.addedByUsername}}</h2>\n        <!--<p>Sneaky little hobbitses!</p> -->\n      </ion-label>\n      <ion-icon size=\"small\" *ngIf=\"item.reactionType\" class=\"icon\" [src]=\"'./assets/icon/' + item.reactionType + '.svg'\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    94788:
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/user-profile-modal/user-profile-modal.page.html ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Update Profile</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button (click)=\"dismissModal()\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"forms-validations-content\">\n    <form class=\"validations-form\" [formGroup]=\"myForm\">\n      <ion-list class=\"inputs-list\" lines=\"none\">\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">Full Name:</ion-label>\n          <ion-input type=\"text\" class=\"myform\" placeholder=\"Full name\" formControlName=\"name\" [(ngModel)]=\"user.name\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">Username:</ion-label>\n          <ion-input placeholder=\"Username\" class=\"myform\"  formControlName=\"username\" type=\"text\" [(ngModel)]=\"user.username\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">My Story:</ion-label>\n          <ion-textarea rows=\"10\" formControlName=\"bio\" class=\"myform\"  placeholder=\"Status\" [(ngModel)]=\"user.description\"></ion-textarea>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input placeholder=\"Email\" class=\"myform\"  type=\"text\" formControlName=\"email\" [(ngModel)]=\"user.email\" disabled></ion-input>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button class=\"save\" color=\"secondary\" expand=\"block\" (click)=\"save()\">Save Changes</ion-button>\n        </div>\n      </ion-list>\n    </form>\n</ion-content>";
      /***/
    },

    /***/
    46700:
    /*!***************************************************!*\
      !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
      \***************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 62275,
        "./af.js": 62275,
        "./ar": 90857,
        "./ar-dz": 11218,
        "./ar-dz.js": 11218,
        "./ar-kw": 14754,
        "./ar-kw.js": 14754,
        "./ar-ly": 66680,
        "./ar-ly.js": 66680,
        "./ar-ma": 92178,
        "./ar-ma.js": 92178,
        "./ar-ps": 42060,
        "./ar-ps.js": 42060,
        "./ar-sa": 56522,
        "./ar-sa.js": 56522,
        "./ar-tn": 95682,
        "./ar-tn.js": 95682,
        "./ar.js": 90857,
        "./az": 70164,
        "./az.js": 70164,
        "./be": 79774,
        "./be.js": 79774,
        "./bg": 60947,
        "./bg.js": 60947,
        "./bm": 21832,
        "./bm.js": 21832,
        "./bn": 89650,
        "./bn-bd": 74477,
        "./bn-bd.js": 74477,
        "./bn.js": 89650,
        "./bo": 66005,
        "./bo.js": 66005,
        "./br": 98492,
        "./br.js": 98492,
        "./bs": 70534,
        "./bs.js": 70534,
        "./ca": 52061,
        "./ca.js": 52061,
        "./cs": 84737,
        "./cs.js": 84737,
        "./cv": 61167,
        "./cv.js": 61167,
        "./cy": 77996,
        "./cy.js": 77996,
        "./da": 9528,
        "./da.js": 9528,
        "./de": 14540,
        "./de-at": 49430,
        "./de-at.js": 49430,
        "./de-ch": 67978,
        "./de-ch.js": 67978,
        "./de.js": 14540,
        "./dv": 83426,
        "./dv.js": 83426,
        "./el": 6616,
        "./el.js": 6616,
        "./en-au": 63816,
        "./en-au.js": 63816,
        "./en-ca": 32162,
        "./en-ca.js": 32162,
        "./en-gb": 83305,
        "./en-gb.js": 83305,
        "./en-ie": 61954,
        "./en-ie.js": 61954,
        "./en-il": 43060,
        "./en-il.js": 43060,
        "./en-in": 59923,
        "./en-in.js": 59923,
        "./en-nz": 13540,
        "./en-nz.js": 13540,
        "./en-sg": 16505,
        "./en-sg.js": 16505,
        "./eo": 41907,
        "./eo.js": 41907,
        "./es": 86640,
        "./es-do": 41246,
        "./es-do.js": 41246,
        "./es-mx": 56131,
        "./es-mx.js": 56131,
        "./es-us": 36430,
        "./es-us.js": 36430,
        "./es.js": 86640,
        "./et": 62551,
        "./et.js": 62551,
        "./eu": 32711,
        "./eu.js": 32711,
        "./fa": 54572,
        "./fa.js": 54572,
        "./fi": 33390,
        "./fi.js": 33390,
        "./fil": 87860,
        "./fil.js": 87860,
        "./fo": 48216,
        "./fo.js": 48216,
        "./fr": 99291,
        "./fr-ca": 98527,
        "./fr-ca.js": 98527,
        "./fr-ch": 58407,
        "./fr-ch.js": 58407,
        "./fr.js": 99291,
        "./fy": 47054,
        "./fy.js": 47054,
        "./ga": 49540,
        "./ga.js": 49540,
        "./gd": 73917,
        "./gd.js": 73917,
        "./gl": 51486,
        "./gl.js": 51486,
        "./gom-deva": 56245,
        "./gom-deva.js": 56245,
        "./gom-latn": 48868,
        "./gom-latn.js": 48868,
        "./gu": 59652,
        "./gu.js": 59652,
        "./he": 48680,
        "./he.js": 48680,
        "./hi": 42040,
        "./hi.js": 42040,
        "./hr": 63402,
        "./hr.js": 63402,
        "./hu": 79322,
        "./hu.js": 79322,
        "./hy-am": 27609,
        "./hy-am.js": 27609,
        "./id": 57942,
        "./id.js": 57942,
        "./is": 98275,
        "./is.js": 98275,
        "./it": 73053,
        "./it-ch": 4378,
        "./it-ch.js": 4378,
        "./it.js": 73053,
        "./ja": 46176,
        "./ja.js": 46176,
        "./jv": 679,
        "./jv.js": 679,
        "./ka": 92726,
        "./ka.js": 92726,
        "./kk": 72953,
        "./kk.js": 72953,
        "./km": 86957,
        "./km.js": 86957,
        "./kn": 59181,
        "./kn.js": 59181,
        "./ko": 47148,
        "./ko.js": 47148,
        "./ku": 27752,
        "./ku-kmr": 63898,
        "./ku-kmr.js": 63898,
        "./ku.js": 27752,
        "./ky": 65675,
        "./ky.js": 65675,
        "./lb": 41263,
        "./lb.js": 41263,
        "./lo": 65746,
        "./lo.js": 65746,
        "./lt": 11143,
        "./lt.js": 11143,
        "./lv": 38753,
        "./lv.js": 38753,
        "./me": 44054,
        "./me.js": 44054,
        "./mi": 31573,
        "./mi.js": 31573,
        "./mk": 30202,
        "./mk.js": 30202,
        "./ml": 68523,
        "./ml.js": 68523,
        "./mn": 79794,
        "./mn.js": 79794,
        "./mr": 56681,
        "./mr.js": 56681,
        "./ms": 56975,
        "./ms-my": 39859,
        "./ms-my.js": 39859,
        "./ms.js": 56975,
        "./mt": 3691,
        "./mt.js": 3691,
        "./my": 5152,
        "./my.js": 5152,
        "./nb": 7607,
        "./nb.js": 7607,
        "./ne": 21526,
        "./ne.js": 21526,
        "./nl": 86368,
        "./nl-be": 40076,
        "./nl-be.js": 40076,
        "./nl.js": 86368,
        "./nn": 68420,
        "./nn.js": 68420,
        "./oc-lnc": 51906,
        "./oc-lnc.js": 51906,
        "./pa-in": 94504,
        "./pa-in.js": 94504,
        "./pl": 54721,
        "./pl.js": 54721,
        "./pt": 74645,
        "./pt-br": 54548,
        "./pt-br.js": 54548,
        "./pt.js": 74645,
        "./ro": 71977,
        "./ro.js": 71977,
        "./ru": 26042,
        "./ru.js": 26042,
        "./sd": 78849,
        "./sd.js": 78849,
        "./se": 27739,
        "./se.js": 27739,
        "./si": 50084,
        "./si.js": 50084,
        "./sk": 92449,
        "./sk.js": 92449,
        "./sl": 23086,
        "./sl.js": 23086,
        "./sq": 33139,
        "./sq.js": 33139,
        "./sr": 30607,
        "./sr-cyrl": 30063,
        "./sr-cyrl.js": 30063,
        "./sr.js": 30607,
        "./ss": 40131,
        "./ss.js": 40131,
        "./sv": 21665,
        "./sv.js": 21665,
        "./sw": 5642,
        "./sw.js": 5642,
        "./ta": 33622,
        "./ta.js": 33622,
        "./te": 74825,
        "./te.js": 74825,
        "./tet": 48336,
        "./tet.js": 48336,
        "./tg": 39238,
        "./tg.js": 39238,
        "./th": 99463,
        "./th.js": 99463,
        "./tk": 39986,
        "./tk.js": 39986,
        "./tl-ph": 29672,
        "./tl-ph.js": 29672,
        "./tlh": 40043,
        "./tlh.js": 40043,
        "./tr": 51212,
        "./tr.js": 51212,
        "./tzl": 50110,
        "./tzl.js": 50110,
        "./tzm": 80482,
        "./tzm-latn": 38309,
        "./tzm-latn.js": 38309,
        "./tzm.js": 80482,
        "./ug-cn": 42495,
        "./ug-cn.js": 42495,
        "./uk": 54157,
        "./uk.js": 54157,
        "./ur": 80984,
        "./ur.js": 80984,
        "./uz": 64141,
        "./uz-latn": 43662,
        "./uz-latn.js": 43662,
        "./uz.js": 64141,
        "./vi": 12607,
        "./vi.js": 12607,
        "./x-pseudo": 66460,
        "./x-pseudo.js": 66460,
        "./yo": 92948,
        "./yo.js": 92948,
        "./zh-cn": 62658,
        "./zh-cn.js": 62658,
        "./zh-hk": 39352,
        "./zh-hk.js": 39352,
        "./zh-mo": 38274,
        "./zh-mo.js": 38274,
        "./zh-tw": 98451,
        "./zh-tw.js": 98451
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    },

    /***/
    84487:
    /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./src/app/feed/filter.component.ts.css!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAuZmlsdGVyLWNvbnRhaW5lciB7CiAgICAgIHBhZGRpbmc6IDIwcHg7CiAgICAgIHdpZHRoOiAzMjBweDsKICAgICAgbWF4LXdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5maWx0ZXItaGVhZGVyIHsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OwoKICAgICAgaDQgewogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgfQoKICAgICAgaW9uLWJ1dHRvbiB7CiAgICAgICAgaGVpZ2h0OiAzMnB4OwogICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4OwogICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDsKICAgICAgICBmb250LXNpemU6IDEwcHg7CiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICBvcGFjaXR5OiAwLjU7CiAgICAgICAgfQoKICAgICAgICBpb24taWNvbiB7CiAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmZpbHRlci1zZWN0aW9uIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsKCiAgICAgIC5zZWN0aW9uLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OwoKICAgICAgICAudGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7CiAgICAgICAgfQoKICAgICAgICAuc3VidGl0bGUgewogICAgICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgLmNvbnRlbnQtdHlwZXMgewogICAgICBkaXNwbGF5OiBncmlkOwogICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOwogICAgICBnYXA6IDhweDsKCiAgICAgIC5maWx0ZXItY2hpcCB7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxOwogICAgICAgIHBhZGRpbmc6IDEycHggOHB4OwogICAgICAgIAogICAgICAgIGlvbi1pY29uIHsKICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICAuZ3JvdXAtc2VhcmNoIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsKCiAgICAgIC5ncm91cC1zZWFyY2hiYXIgewogICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lOwogICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTsKICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsKICAgICAgICAKICAgICAgICAuc2VhcmNoYmFyLWlucHV0IHsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCi5ncm91cC1jaGlwcyB7CiAgZGlzcGxheTogZ3JpZDsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIGdhcDogOHB4OwogIG1heC1oZWlnaHQ6IDIwMHB4OwogIG92ZXJmbG93LXk6IGF1dG87CiAgcGFkZGluZy1yaWdodDogNHB4OwoKICAmLmhhcy1zZWFyY2ggewogICAgbWF4LWhlaWdodDogMTUwcHg7CiAgfQoKICAuZmlsdGVyLWNoaXAgewogICAgcGFkZGluZzogMTBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwoKICAgICYuYWN0aXZlIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAKICAgICAgLmdyb3VwLWljb24gewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgIAogICAgICAgIHNwYW4gewogICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1pY29uIHsKICAgICAgd2lkdGg6IDI4cHg7CiAgICAgIGhlaWdodDogMjhweDsKICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OwogICAgICBvdmVyZmxvdzogaGlkZGVuOyAKCiAgICAgIGltZyB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDsKICAgICAgfQoKICAgICAgc3BhbiB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsKICAgICAgfQogICAgfQoKICAgIC5ncm91cC1uYW1lIHsKICAgICAgZm9udC1zaXplOiAxM3B4OwogICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogMTAwJTsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CgogICAgLmNoZWNrLWljb24gewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNHB4OwogICAgICByaWdodDogNHB4OwogICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAmOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC45OwogICAgfQoKICAgICY6YWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsKICAgIH0KICB9Cn0KCgogICAgLmZpbHRlci1jaGlwIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICBwYWRkaW5nOiAxMHB4OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICBnYXA6IDRweDsKICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47CgogICAgICAmLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOwogICAgICAgIAogICAgICAgIGlvbi1pY29uLCBzcGFuIHsKICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAhaW1wb3J0YW50OwogICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7CiAgICAgICAgfQoKICAgICAgICAuZ3JvdXAtbmFtZSB7CiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5ncm91cC1pY29uIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsKICAgICAgfQoKICAgICAgLmdyb3VwLW5hbWUgewogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBsaW5lLWhlaWdodDogMS4yOwogICAgICB9CgogICAgICAuY2hlY2staWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNHB4OwogICAgICAgIHJpZ2h0OiA0cHg7CiAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgfQoKICAgICAgJjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7CiAgICAgIH0KCiAgICAgICY6YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgIH0KICAgIH0KCiAgICAuZmlsdGVyLWFjdGlvbnMgewogICAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICAgIAogICAgICBpb24tYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgaGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgCiAgICAgICAgJjpkaXNhYmxlZCB7CiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOwogICAgICAgICAgb3BhY2l0eTogMC41OwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLmZpbHRlci1jaGlwcy5jb250ZW50LXR5cGVzIHsKICBkaXNwbGF5OiBncmlkOwogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgZ2FwOiA4cHg7CgogIC5maWx0ZXItY2hpcCB7CiAgICBwYWRkaW5nOiA4cHggNHB4OwogICAgCiAgICBpb24taWNvbiB7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsgCiAgICAgIG1hcmdpbi1ib3R0b206IDJweDsgCiAgICB9CgogICAgc3BhbiB7CiAgICAgIGZvbnQtc2l6ZTogMTFweDsKICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgCiAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7CiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7CiAgICB9CiAgfQp9CgoKICAgIC8vIERhcmsgbW9kZSBhZGp1c3RtZW50cwogICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgICAuZmlsdGVyLWNoaXAgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSk7CgogICAgICAgICYuYWN0aXZlIHsKICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsKICAgICAgICB9CgogICAgICAgIC5ncm91cC1uYW1lIHsKICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOwogICAgICAgIH0KCiAgICAgICAgLmdyb3VwLWljb24gewogICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuZ3JvdXAtc2VhcmNoYmFyIHsKICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDsKICAgICAgfQogICAgfQogIA%3D%3D!./src/app/feed/filter.component.ts ***!
      \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n    .filter-container {\n      padding: 20px;\n      width: 320px;\n      max-width: 100%;\n    }\n\n    .filter-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 20px;\n\n      h4 {\n        margin: 0;\n        font-size: 16px;\n        font-weight: 600;\n      }\n\n      ion-button {\n        height: 32px;\n        --padding-start: 8px;\n        --padding-end: 8px;\n        font-size: 10px;\n        --color: var(--ion-color-medium);\n        \n        &:disabled {\n          opacity: 0.5;\n        }\n\n        ion-icon {\n          font-size: 16px;\n        }\n      }\n    }\n\n    .filter-section {\n      margin-bottom: 24px;\n\n      .section-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 12px;\n\n        .title {\n          font-size: 14px;\n          font-weight: 600;\n          color: var(--ion-color-dark);\n        }\n\n        .subtitle {\n          font-size: 12px;\n          color: var(--ion-color-primary);\n          font-weight: 500;\n        }\n      }\n    }\n\n    .content-types {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      grid-gap: 8px;\n      gap: 8px;\n\n      .filter-chip {\n        aspect-ratio: 1;\n        padding: 12px 8px;\n        \n        ion-icon {\n          font-size: 20px;\n          margin-bottom: 6px;\n        }\n      }\n    }\n\n    .group-search {\n      margin-bottom: 12px;\n\n      .group-searchbar {\n        padding: 0;\n        --box-shadow: none;\n        --background: var(--ion-color-light);\n        --border-radius: 8px;\n        --placeholder-opacity: 0.5;\n        --placeholder-color: var(--ion-color-medium);\n        \n        .searchbar-input {\n          font-size: 14px;\n        }\n      }\n    }\n\n    .group-chips {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n  gap: 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  padding-right: 4px;\n\n  &.has-search {\n    max-height: 150px;\n  }\n\n  .filter-chip {\n    padding: 10px;\n    position: relative;\n    background: var(--ion-color-light);\n    border-radius: 8px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n\n    &.active {\n      background: var(--ion-color-primary);\n      \n      .group-icon {\n        background: rgba(255, 255, 255, 0.2) !important;\n        \n        span {\n          color: white;\n        }\n      }\n\n      .group-name {\n        color: white;\n      }\n    }\n\n    .group-icon {\n      width: 28px;\n      height: 28px;\n      border-radius: 6px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 4px;\n      overflow: hidden; \n\n      img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 6px;\n      }\n\n      span {\n        font-weight: 600;\n        font-size: 14px;\n        color: var(--ion-color-dark);\n      }\n    }\n\n    .group-name {\n      font-size: 13px;\n      color: var(--ion-color-dark);\n      text-align: center;\n      line-height: 1.2;\n      display: block;\n      width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .check-icon {\n      position: absolute;\n      top: 4px;\n      right: 4px;\n      font-size: 16px;\n      color: white;\n    }\n\n    &:hover {\n      opacity: 0.9;\n    }\n\n    &:active {\n      transform: scale(0.98);\n    }\n  }\n}\n\n    .filter-chip {\n      background: var(--ion-color-light);\n      border-radius: 8px;\n      padding: 10px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      grid-gap: 4px;\n      gap: 4px;\n      cursor: pointer;\n      transition: all 0.2s ease;\n      position: relative;\n      overflow: hidden;\n\n      &.active {\n        background: var(--ion-color-primary);\n        \n        ion-icon, span {\n          color: white;\n        }\n\n        .group-icon {\n          background: rgba(255, 255, 255, 0.2) !important;\n          color: white !important;\n        }\n\n        .group-name {\n          color: white !important;\n        }\n      }\n\n      .group-icon {\n        width: 28px;\n        height: 28px;\n        border-radius: 6px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-weight: 600;\n        font-size: 14px;\n        color: var(--ion-color-dark);\n        margin-bottom: 4px;\n      }\n\n      .group-name {\n        font-size: 13px;\n        color: var(--ion-color-dark);\n        text-align: center;\n        line-height: 1.2;\n      }\n\n      .check-icon {\n        position: absolute;\n        top: 4px;\n        right: 4px;\n        font-size: 16px;\n        color: white;\n      }\n\n      &:hover {\n        transform: translateY(-1px);\n        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n      }\n\n      &:active {\n        transform: translateY(0);\n      }\n    }\n\n    .filter-actions {\n      margin-top: 8px;\n      \n      ion-button {\n        margin: 0;\n        --border-radius: 8px;\n        height: 44px;\n        font-weight: 500;\n        \n        &:disabled {\n          --background: var(--ion-color-medium);\n          opacity: 0.5;\n        }\n      }\n    }\n\n    .filter-chips.content-types {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 8px;\n  gap: 8px;\n\n  .filter-chip {\n    padding: 8px 4px;\n    \n    ion-icon {\n      font-size: 20px; \n      margin-bottom: 2px; \n    }\n\n    span {\n      font-size: 11px;\n      font-weight: 500; \n      line-height: 1;\n      text-align: center;\n      -webkit-transform: translate3d(0,0,0);\n      letter-spacing: -0.2px;\n    }\n  }\n}\n\n    // Dark mode adjustments\n    @media (prefers-color-scheme: dark) {\n      .filter-chip {\n        background: rgba(var(--ion-color-light-rgb), 0.1);\n\n        &.active {\n          background: var(--ion-color-primary);\n        }\n\n        .group-name {\n          color: var(--ion-color-light);\n        }\n\n        .group-icon {\n          color: var(--ion-color-light);\n        }\n      }\n\n      .group-searchbar {\n        --background: rgba(var(--ion-color-light-rgb), 0.1) !important;\n      }\n    }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsYUFBYTtNQUNiLFlBQVk7TUFDWixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsbUJBQW1COztNQUVuQjtRQUNFLFNBQVM7UUFDVCxlQUFlO1FBQ2YsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdDQUFnQzs7UUFFaEM7VUFDRSxZQUFZO1FBQ2Q7O1FBRUE7VUFDRSxlQUFlO1FBQ2pCO01BQ0Y7SUFDRjs7SUFFQTtNQUNFLG1CQUFtQjs7TUFFbkI7UUFDRSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQixtQkFBbUI7O1FBRW5CO1VBQ0UsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQiw0QkFBNEI7UUFDOUI7O1FBRUE7VUFDRSxlQUFlO1VBQ2YsK0JBQStCO1VBQy9CLGdCQUFnQjtRQUNsQjtNQUNGO0lBQ0Y7O0lBRUE7TUFDRSxhQUFhO01BQ2IscUNBQXFDO01BQ3JDLGFBQVE7TUFBUixRQUFROztNQUVSO1FBQ0UsZUFBZTtRQUNmLGlCQUFpQjs7UUFFakI7VUFDRSxlQUFlO1VBQ2Ysa0JBQWtCO1FBQ3BCO01BQ0Y7SUFDRjs7SUFFQTtNQUNFLG1CQUFtQjs7TUFFbkI7UUFDRSxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLG9DQUFvQztRQUNwQyxvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLDRDQUE0Qzs7UUFFNUM7VUFDRSxlQUFlO1FBQ2pCO01BQ0Y7SUFDRjs7SUFFSjtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBUTtFQUFSLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEI7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5Qjs7SUFFekI7TUFDRSxvQ0FBb0M7O01BRXBDO1FBQ0UsK0NBQStDOztRQUUvQztVQUNFLFlBQVk7UUFDZDtNQUNGOztNQUVBO1FBQ0UsWUFBWTtNQUNkO0lBQ0Y7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsZ0JBQWdCOztNQUVoQjtRQUNFLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0JBQWlCO1dBQWpCLGlCQUFpQjtRQUNqQixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLDRCQUE0QjtNQUM5QjtJQUNGOztJQUVBO01BQ0UsZUFBZTtNQUNmLDRCQUE0QjtNQUM1QixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLHVCQUF1QjtNQUN2QixtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFVBQVU7TUFDVixlQUFlO01BQ2YsWUFBWTtJQUNkOztJQUVBO01BQ0UsWUFBWTtJQUNkOztJQUVBO01BQ0Usc0JBQXNCO0lBQ3hCO0VBQ0Y7QUFDRjs7SUFHSTtNQUNFLGtDQUFrQztNQUNsQyxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLGFBQVE7TUFBUixRQUFRO01BQ1IsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsZ0JBQWdCOztNQUVoQjtRQUNFLG9DQUFvQzs7UUFFcEM7VUFDRSxZQUFZO1FBQ2Q7O1FBRUE7VUFDRSwrQ0FBK0M7VUFDL0MsdUJBQXVCO1FBQ3pCOztRQUVBO1VBQ0UsdUJBQXVCO1FBQ3pCO01BQ0Y7O01BRUE7UUFDRSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLDRCQUE0QjtRQUM1QixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxlQUFlO1FBQ2YsNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQixnQkFBZ0I7TUFDbEI7O01BRUE7UUFDRSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFVBQVU7UUFDVixlQUFlO1FBQ2YsWUFBWTtNQUNkOztNQUVBO1FBQ0UsMkJBQTJCO1FBQzNCLHFDQUFxQztNQUN2Qzs7TUFFQTtRQUNFLHdCQUF3QjtNQUMxQjtJQUNGOztJQUVBO01BQ0UsZUFBZTs7TUFFZjtRQUNFLFNBQVM7UUFDVCxvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLGdCQUFnQjs7UUFFaEI7VUFDRSxxQ0FBcUM7VUFDckMsWUFBWTtRQUNkO01BQ0Y7SUFDRjs7SUFDQTtFQUNGLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsYUFBUTtFQUFSLFFBQVE7O0VBRVI7SUFDRSxnQkFBZ0I7O0lBRWhCO01BQ0UsZUFBZTtNQUNmLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixxQ0FBcUM7TUFDckMsc0JBQXNCO0lBQ3hCO0VBQ0Y7QUFDRjs7SUFHSTs7TUFFRTtRQUNFLGlEQUFpRDs7UUFFakQ7VUFDRSxvQ0FBb0M7UUFDdEM7O1FBRUE7VUFDRSw2QkFBNkI7UUFDL0I7O1FBRUE7VUFDRSw2QkFBNkI7UUFDL0I7TUFDRjs7TUFFQTtRQUNFLDhEQUE4RDtNQUNoRTtJQUNGIiwiZmlsZSI6ImZpbHRlci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5maWx0ZXItaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgaDQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmlsdGVyLXNlY3Rpb24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50LXR5cGVzIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIC5maWx0ZXItY2hpcCB7XG4gICAgICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgICAgICAgcGFkZGluZzogMTJweCA4cHg7XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5ncm91cC1zZWFyY2gge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAgICAgLmdyb3VwLXNlYXJjaGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBcbiAgICAgICAgLnNlYXJjaGJhci1pbnB1dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4uZ3JvdXAtY2hpcHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDhweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcblxuICAmLmhhcy1zZWFyY2gge1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgLmZpbHRlci1jaGlwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIFxuICAgICAgLmdyb3VwLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgIWltcG9ydGFudDtcbiAgICAgICAgXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZ3JvdXAtbmFtZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZ3JvdXAtaWNvbiB7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyBcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZ3JvdXAtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC5jaGVjay1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNHB4O1xuICAgICAgcmlnaHQ6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIH1cbiAgfVxufVxuXG5cbiAgICAuZmlsdGVyLWNoaXAge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uLCBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JvdXAtaWNvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JvdXAtbmFtZSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmdyb3VwLWljb24ge1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cblxuICAgICAgLmdyb3VwLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIH1cblxuICAgICAgLmNoZWNrLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNHB4O1xuICAgICAgICByaWdodDogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZpbHRlci1hY3Rpb25zIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5maWx0ZXItY2hpcHMuY29udGVudC10eXBlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogOHB4O1xuXG4gIC5maWx0ZXItY2hpcCB7XG4gICAgcGFkZGluZzogOHB4IDRweDtcbiAgICBcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7IFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4OyBcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IFxuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgICB9XG4gIH1cbn1cblxuXG4gICAgLy8gRGFyayBtb2RlIGFkanVzdG1lbnRzXG4gICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgICAgLmZpbHRlci1jaGlwIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4xKTtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyb3VwLW5hbWUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyb3VwLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ncm91cC1zZWFyY2hiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    53040:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    90764:
    /*!*************************************************!*\
      !*** ./src/app/imagemodal/imagemodal.page.scss ***!
      \*************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = ".scroll-content {\n  background-image: none;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.7) !important;\n  display: flex;\n  align-items: center;\n}\n\n.content img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDSTtFQUNFLFdBQUE7QUFDTiIsImZpbGUiOiJpbWFnZW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNykgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9Il19 */";
      /***/
    },

    /***/
    91295:
    /*!*******************************************************************!*\
      !*** ./src/app/reaction-list-modal/reaction-list-modal.page.scss ***!
      \*******************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "ion-header ion-toolbar:first-child {\n  --background: transparent;\n  --border-width: 0;\n}\nion-header ion-segment {\n  --background: transparent;\n  padding: 8px 0;\n}\nion-header ion-segment ion-segment-button {\n  --background-checked: var(--ion-color-primary-tint);\n  --color-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  min-width: 80px;\n}\nion-header ion-segment ion-segment-button ion-icon {\n  font-size: 20px;\n  margin-right: 4px;\n}\nion-header ion-segment ion-segment-button ion-label {\n  font-size: 14px;\n}\nion-content {\n  --background: transparent;\n}\nion-content ion-list {\n  background: transparent;\n  padding: 8px 0;\n}\nion-content ion-list ion-item {\n  --background: transparent;\n  --background-hover: var(--ion-color-light-shade);\n  margin-bottom: 1px;\n}\nion-content ion-list ion-item ion-avatar {\n  width: 40px;\n  height: 40px;\n}\nion-content ion-list ion-item ion-label h2 {\n  font-weight: 500;\n  font-size: 16px;\n  margin-bottom: 4px;\n}\nion-content ion-list ion-item ion-label .reaction-info {\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-medium);\n}\nion-content ion-list ion-item ion-label .reaction-info .reaction-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n}\nion-content ion-list ion-item ion-label .reaction-info .reaction-type {\n  font-size: 14px;\n}\nion-content ion-list ion-item .timestamp {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\nion-content .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 32px;\n  text-align: center;\n  color: var(--ion-color-medium);\n}\nion-content .empty-state .empty-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\nion-content .empty-state h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 500;\n}\nion-content .empty-state p {\n  margin: 8px 0 0;\n  font-size: 14px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nion-item {\n  animation: fadeIn 0.3s ease-out;\n}\n:host-context(.dark-theme) ion-content {\n  --background: var(--ion-color-dark);\n}\n:host-context(.dark-theme) ion-content ion-item {\n  --background: var(--ion-color-dark);\n  --background-hover: var(--ion-color-dark-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0aW9uLWxpc3QtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFGSjtBQUlJO0VBQ0UsbURBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtBQUZOO0FBSU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUtNO0VBQ0UsZUFBQTtBQUhSO0FBU0E7RUFDRSx5QkFBQTtBQU5GO0FBUUU7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUFOSjtBQVFJO0VBQ0UseUJBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FBTk47QUFRTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTlI7QUFVUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBUlY7QUFXUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBVFY7QUFXVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFUWjtBQVlVO0VBQ0UsZUFBQTtBQVZaO0FBZU07RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUFiUjtBQWtCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFoQko7QUFrQkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFoQk47QUFtQkk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBakJOO0FBb0JJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFsQk47QUF3QkE7RUFDRTtJQUFPLFVBQUE7RUFwQlA7RUFxQkE7SUFBSyxVQUFBO0VBbEJMO0FBQ0Y7QUFvQkE7RUFDRSwrQkFBQTtBQWxCRjtBQXVCRTtFQUNFLG1DQUFBO0FBcEJKO0FBc0JJO0VBQ0UsbUNBQUE7RUFDQSw4Q0FBQTtBQXBCTiIsImZpbGUiOiJyZWFjdGlvbi1saXN0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlYWN0aW9uLWxpc3QtbW9kYWwucGFnZS5zY3NzXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIH1cblxuICBpb24tc2VnbWVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICAgIFxuICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVhY3Rpb24taW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBcbiAgICAgICAgICAucmVhY3Rpb24taWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFjdGlvbi10eXBlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRpbWVzdGFtcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lbXB0eS1zdGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICAgIC5lbXB0eS1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIGFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbmlvbi1pdGVtIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLW91dDtcbn1cblxuLy8gRGFyayBtb2RlIHN1cHBvcnRcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIFxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    45840:
    /*!*****************************************************************!*\
      !*** ./src/app/user-profile-modal/user-profile-modal.page.scss ***!
      \*****************************************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1Q0FBQTtBQUFKOztBQUlJO0VBQ0MsMkNBQUE7QUFETDs7QUFHSztFQUNFLDJFQUFBO0FBRFA7O0FBR087RUFDRSxlQUFBO0FBRFQ7O0FBSVM7RUFDRSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUZYOztBQUlXO0VBQ0UsZ0RBQUE7RUFDQSxjQUFBO0FBRmI7O0FBUUs7RUFDRSwwQkFBQTtBQU5QIiwiZmlsZSI6InVzZXItcHJvZmlsZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gIH1cblxuICAuZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XG4gICAgLnZhbGlkYXRpb25zLWZvcm0ge1xuICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuIFxuICAgICAuaW5wdXRzLWxpc3Qge1xuICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiBcbiAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICB9XG4gICAgICAgLmVycm9yLWNvbnRhaW5lciB7XG4gICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuIFxuICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICB9XG4gICAgIH1cbiBcbiAgICAgLnN1Ym1pdC1idG4ge1xuICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICB9XG4gICB9XG4gXG4gfVxuXG4gICJdfQ== */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map