(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_new-poll_new-poll_module_ts"], {
    /***/
    5702:
    /*!*********************************************!*\
      !*** ./src/app/new-poll/new-poll.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewPollPageModule": function NewPollPageModule() {
          return (
            /* binding */
            _NewPollPageModule
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


      var _new_poll_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-poll.page */
      12831);
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/share.module */
      32218);

      var routes = [{
        path: '',
        component: _new_poll_page__WEBPACK_IMPORTED_MODULE_0__.NewPollPage
      }];

      var _NewPollPageModule = /*#__PURE__*/_createClass(function NewPollPageModule() {
        _classCallCheck(this, NewPollPageModule);
      });

      _NewPollPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_new_poll_page__WEBPACK_IMPORTED_MODULE_0__.NewPollPage]
      })], _NewPollPageModule);
      /***/
    },

    /***/
    12831:
    /*!*******************************************!*\
      !*** ./src/app/new-poll/new-poll.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewPollPage": function NewPollPage() {
          return (
            /* binding */
            _NewPollPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_poll_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-poll.page.html */
      24273);
      /* harmony import */


      var _new_poll_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-poll.page.scss */
      93832);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      52468);
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/loading.service */
      4471);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/app */
      77199);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);

      var _NewPollPage = /*#__PURE__*/function () {
        function NewPollPage(dataProvider, loadingProvider, route, router, firestore) {
          _classCallCheck(this, NewPollPage);

          this.dataProvider = dataProvider;
          this.loadingProvider = loadingProvider;
          this.route = route;
          this.router = router;
          this.firestore = firestore;
          this.step = 1;
          this.userNotifications = [];
          this.userPosts = [];
          this.groupId = this.route.snapshot.params.id;
          this.group = {
            name: ''
          };

          if (this.groupId === 'undefined') {
            this.step = 1;
          } else {
            this.step = 2;
          }

          this.pollForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([// Validators.minLength(10),
            // Validators.maxLength(50),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])),
            pollOption1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([// Validators.minLength(1),
            // Validators.maxLength(20),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])),
            pollOption2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([// Validators.minLength(1),
            // Validators.maxLength(20),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])),
            pollOption3: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            pollOption4: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('') // tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1))

          });
        }

        return _createClass(NewPollPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Initialize
            this.dataProvider.getCurrentUser().then(function (u) {
              u.snapshotChanges().subscribe(function (value) {
                _this.user = value.payload.data();
                _this.addedByUser = {
                  addedByKey: value.payload.data().userId,
                  addedByUsername: value.payload.data().username,
                  addedByImg: value.payload.data().img
                };
                _this.userNotifications = value.payload.data().userNotifications;
                _this.userPosts = value.payload.data().userPosts;
                _this.poll = {
                  addedByUser: _this.addedByUser,
                  date: '',
                  title: '',
                  // postTags: [],
                  groupId: '',
                  groupName: '',
                  type: 'poll',
                  data: {},
                  totalReactionCount: 0,
                  totalReviewCount: 0,
                  totalPollCount: 0
                };

                if (_this.step === 1) {
                  _this.title = 'Select a group ...'; // Get User Groups List

                  if (_this.user.groups) {
                    _this.firestore.collection('groups').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldPath.documentId(), 'in', _this.user.groups).get().then(function (group) {
                      _this.groups = [];
                      group.forEach(function (g) {
                        var group;
                        group = g.data();
                        group.key = g.id;

                        _this.addOrUpdateUserGroup(group);
                      });
                    });
                  }
                } else {
                  _this.title = 'New Poll';
                }
              });
            });
          }
        }, {
          key: "addOrUpdateUserGroup",
          value: function addOrUpdateUserGroup(group) {
            if (!this.groups) {
              this.groups = [group];
            } else {
              var index = -1;

              for (var i = 0; i < this.groups.length; i++) {
                if (this.groups[i].key == group.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.groups[index] = group;
              } else {
                this.groups.push(group);
              }
            }
          }
        }, {
          key: "submitPollForm",
          value: function submitPollForm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var today, dd, mm, yyyy, date, dateEnding, success, pollId;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    // Add poll info and date.
                    this.poll.groupId = this.groupId;
                    this.poll.groupName = this.group.name;
                    this.poll.date = new Date();
                    this.poll.title = this.pollForm.value.description; // this.poll.postTags = [];
                    // this.poll.postTags = this.postTags;

                    today = new Date();
                    dd = today.getDate();
                    mm = today.getMonth(); // January is 0!

                    yyyy = today.getFullYear();
                    date = new Date(yyyy, mm, dd + 2);
                    dateEnding = date;
                    this.poll.data = {
                      dateCreated: new Date(),
                      dateEnding: dateEnding,
                      pollOptions: []
                    };

                    if (this.pollForm.value.pollOption1 != null && this.pollForm.value.pollOption1.trim() !== '') {
                      this.poll.data.pollOptions.push({
                        name: this.pollForm.value.pollOption1.trim()
                      });
                    }

                    if (this.pollForm.value.pollOption2 != null && this.pollForm.value.pollOption2.trim() !== '') {
                      this.poll.data.pollOptions.push({
                        name: this.pollForm.value.pollOption2.trim()
                      });
                    }

                    if (this.pollForm.value.pollOption3 != null && this.pollForm.value.pollOption3.trim() !== '') {
                      this.poll.data.pollOptions.push({
                        name: this.pollForm.value.pollOption3.trim()
                      });
                    }

                    if (this.pollForm.value.pollOption4 != null && this.pollForm.value.pollOption4.trim() !== '') {
                      this.poll.data.pollOptions.push({
                        name: this.pollForm.value.pollOption4.trim()
                      });
                    }

                    console.info('this.poll:', this.poll); // Add the poll and get the ID

                    _context.next = 18;
                    return this.dataProvider.addPost(this.poll);

                  case 18:
                    success = _context.sent;
                    pollId = success.id;
                    this.pollId = pollId; // Initialize group if needed

                    if (!this.group) {
                      this.group = {};
                    } // Initialize group arrays


                    if (!this.group.posts) {
                      this.group.posts = [];
                    }

                    if (!this.group.polls) {
                      this.group.polls = [];
                    } // Initialize user arrays


                    this.userNotifications = this.userNotifications || [];
                    this.userPosts = this.userPosts || []; // Update arrays

                    this.group.polls.push(pollId);
                    this.userNotifications.push(pollId);
                    this.userPosts.push(pollId); // Perform updates

                    _context.next = 31;
                    return Promise.all([// Update group
                    this.dataProvider.getGroup(this.groupId).update({
                      posts: this.group.posts,
                      polls: this.group.polls
                    }), // Update user
                    this.dataProvider.getUser(this.addedByUser.addedByKey).update({
                      userNotifications: this.userNotifications,
                      userPosts: this.userPosts
                    })]);

                  case 31:
                    this.router.navigateByUrl('/app/tabs/tab1');

                  case 32:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "selectGroup",
          value: function selectGroup(groupId) {
            var _this2 = this;

            this.groupId = groupId;
            console.log('groupId', groupId);
            this.step = 2;
            this.title = 'New Poll';
            this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this2.group = group.payload.data();
            });
          }
        }]);
      }();

      _NewPollPage.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore
        }];
      };

      _NewPollPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-new-poll',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_poll_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_poll_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService, _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService, _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute, _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore])], _NewPollPage);
      /***/
    },

    /***/
    24273:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/new-poll/new-poll.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <!-- <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button color=\"primary\" class=\"ion-text-capitalize\" [disabled]=\"!pollForm.valid\" (click)=\"submitPollForm()\">Submit</ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\"> \n      <ion-list class=\"ion-no-padding\">\n        <ion-item class=\"ion-margin-left\" text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n            <h3 class=\"ion-no-margin\">{{group.name}}</h3>\n            <p class=\"ion-text-wrap\">\n              <ion-text color=\"medium\">\n                {{group.description}}\n              </ion-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step === 2\" class=\"poll-form-container\">\n    <form [formGroup]=\"pollForm\" (ngSubmit)=\"submitPollForm()\">\n      <ion-item lines=\"none\" class=\"selected-group\">\n        <ion-label>\n          <h2>Creating poll in <strong>{{group.name}}</strong></h2>\n        </ion-label>\n        <ion-button fill=\"clear\" (click)=\"step = 1\" slot=\"end\">\n          <ion-icon name=\"create-outline\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <div class=\"form-section\">\n        <ion-item class=\"question-input\">\n          <ion-label position=\"stacked\">Question</ion-label>\n          <ion-input type=\"text\" \n                     formControlName=\"description\" \n                     placeholder=\"What would you like to ask?\"\n                     class=\"custom-input\">\n          </ion-input>\n        </ion-item>\n\n        <div class=\"options-container\">\n          <ion-text color=\"medium\" class=\"ion-padding-bottom\">\n            <h3>Poll Options</h3>\n          </ion-text>\n\n          <!-- Required Options -->\n          <ion-item>\n            <ion-label position=\"stacked\">Option 1 *</ion-label>\n            <ion-input formControlName=\"pollOption1\" \n                      placeholder=\"Enter first option\"\n                      class=\"custom-input\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Option 2 *</ion-label>\n            <ion-input formControlName=\"pollOption2\" \n                      placeholder=\"Enter second option\"\n                      class=\"custom-input\">\n            </ion-input>\n          </ion-item>\n\n          <!-- Optional Options -->\n          <ion-item>\n            <ion-label position=\"stacked\">Option 3 (Optional)</ion-label>\n            <ion-input formControlName=\"pollOption3\" \n                      placeholder=\"Add another option\"\n                      class=\"custom-input\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Option 4 (Optional)</ion-label>\n            <ion-input formControlName=\"pollOption4\" \n                      placeholder=\"Add another option\"\n                      class=\"custom-input\">\n            </ion-input>\n          </ion-item>\n        </div>\n      </div>\n\n      <!-- Submit Button -->\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" \n                    type=\"submit\" \n                    [disabled]=\"!pollForm.valid\"\n                    class=\"submit-button\">\n          <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\n          Create Poll\n        </ion-button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    93832:
    /*!*********************************************!*\
      !*** ./src/app/new-poll/new-poll.page.scss ***!
      \*********************************************/

    /***/
    function _(module) {
      module.exports = ".groups-container {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.group-card {\n  margin: 8px 0;\n  border-radius: 12px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.group-card:active {\n  transform: scale(0.98);\n}\n\n.selected-group {\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  margin: 16px 0;\n}\n\n.selected-group h2 {\n  font-size: 14px;\n  margin-bottom: 4px;\n  padding-left: 10px;\n}\n\n.selected-group h3 {\n  font-weight: 600;\n  margin: 0;\n}\n\n.form-section {\n  background: transparent;\n  border-radius: 12px;\n  padding: 6px;\n  margin: 0px 0;\n}\n\n.question-input {\n  --background: var(--ion-color-white);\n  border-radius: 8px;\n  margin-bottom: 24px;\n}\n\n.options-container ion-item {\n  --background: var(--ion-color-white);\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n\n.custom-input {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  font-size: 16px;\n}\n\n.submit-button {\n  margin-top: 24px;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.2);\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.poll-form-container {\n  padding: 16px;\n}\n\n.poll-form-container ion-item {\n  --padding-start: 16px;\n  --inner-padding-end: 0;\n  --background: transparent;\n}\n\n.poll-form-container form {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 16px;\n  gap: 16px;\n}\n\n.poll-form-container ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.poll-form-container ion-item.item-has-focus {\n  --highlight-background: var(--ion-color-primary);\n}\n\n.poll-form-container ion-label {\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n\n.poll-form-container ion-label[position=stacked] {\n  margin-bottom: 4px;\n}\n\n.poll-form-container .error-message {\n  color: var(--ion-color-danger);\n  font-size: 12px;\n  margin-top: 4px;\n  padding-left: 16px;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wb2xsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBQUY7O0FBRUU7RUFDRSxzQkFBQTtBQUFKOztBQUlBO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFHRTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFISjs7QUFPQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUpGOztBQU9BO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBUUU7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdFQUFBO0FBTkY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBU0E7RUFFRSxhQUFBO0FBUEY7O0FBUUU7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBUEo7O0FBVUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBUko7O0FBVUk7RUFDRSxnREFBQTtBQVJOOztBQVlFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQVZKOztBQVlJO0VBQ0Usa0JBQUE7QUFWTjs7QUFjRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWlCQTtFQUNFLFdBQUE7QUFkRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWJGOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBYkY7O0FBZUE7RUFDRSxVQUFBO0FBYkYiLCJmaWxlIjoibmV3LXBvbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZ3JvdXBzLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDcwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5ncm91cC1jYXJkIHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICB9XG59XG5cbi5zZWxlY3RlZC1ncm91cCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbjogMTZweCAwO1xuICBcbiAgaDIge1xuXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luOiAwcHggMDtcbn1cblxuLnF1ZXN0aW9uLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5vcHRpb25zLWNvbnRhaW5lciB7XG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cbn1cblxuLmN1c3RvbS1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4yKTtcbn1cblxuLy8gQWRkIHJpcHBsZSBlZmZlY3Qgc3R5bGVzXG4ucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wb2xsLWZvcm0tY29udGFpbmVyIHtcblxuICBwYWRkaW5nOiAxNnB4O1xuICBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICB9XG4gIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgXG4gICAgJi5pdGVtLWhhcy1mb2N1cyB7XG4gICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBcbiAgICAmW3Bvc2l0aW9uPVwic3RhY2tlZFwiXSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICB9XG5cbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgfVxufVxuXG5cbi51cGxvYWRzIHtcbiAgbWFyZ2luOiA1cHg7XG4uaW1nLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaW1nLXdyYXAgLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIHJpZ2h0OiAtN3B4O1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDVweCAycHggMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pbWctd3JhcDpob3ZlciAuY2xvc2Uge1xuICBvcGFjaXR5OiAxO1xufVxufVxuXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_new-poll_new-poll_module_ts-es5.js.map