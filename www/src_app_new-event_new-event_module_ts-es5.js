(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_new-event_new-event_module_ts"], {
    /***/
    35077:
    /*!***********************************************!*\
      !*** ./src/app/new-event/new-event.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewEventPageModule": function NewEventPageModule() {
          return (
            /* binding */
            _NewEventPageModule
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


      var _services_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/share.module */
      32218);
      /* harmony import */


      var _new_event_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-event.page */
      10964);

      var routes = [{
        path: '',
        component: _new_event_page__WEBPACK_IMPORTED_MODULE_1__.NewEventPage
      }];

      var _NewEventPageModule = /*#__PURE__*/_createClass(function NewEventPageModule() {
        _classCallCheck(this, NewEventPageModule);
      });

      _NewEventPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _services_share_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_new_event_page__WEBPACK_IMPORTED_MODULE_1__.NewEventPage]
      })], _NewEventPageModule);
      /***/
    },

    /***/
    10964:
    /*!*********************************************!*\
      !*** ./src/app/new-event/new-event.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewEventPage": function NewEventPage() {
          return (
            /* binding */
            _NewEventPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_event_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-event.page.html */
      16547);
      /* harmony import */


      var _new_event_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-event.page.scss */
      76756);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/data.service */
      52468);
      /* harmony import */


      var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/image.service */
      54249);
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/loading.service */
      4471);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      34483);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase/app */
      77199);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);

      var _NewEventPage = /*#__PURE__*/function () {
        function NewEventPage(route, router, dataProvider, loadingProvider, navCtrl, http, camera, actionSheet, imageProvider, firestore, formBuilder) {
          _classCallCheck(this, NewEventPage);

          this.route = route;
          this.router = router;
          this.dataProvider = dataProvider;
          this.loadingProvider = loadingProvider;
          this.navCtrl = navCtrl;
          this.http = http;
          this.camera = camera;
          this.actionSheet = actionSheet;
          this.imageProvider = imageProvider;
          this.firestore = firestore;
          this.formBuilder = formBuilder;
          this.step = 1;
          this.userNotifications = [];
          this.userPosts = [];
          this.postMedia = []; // In your component class

          this.bannerImage = null;
          this.groupId = this.route.snapshot.params.id;
          this.group = {
            name: ''
          };

          if (this.groupId === 'undefined') {
            this.step = 1;
          } else {
            this.step = 2;
          } // Set min and max event dates


          var dateObj = new Date();
          this.minEventMonth = dateObj.getUTCMonth() + 1;
          this.minEventDay = dateObj.getUTCDate() + 1;
          this.minEventYear = dateObj.getUTCFullYear();
          this.maxEventYear = this.minEventYear + 1;
          this.minDate = new Date().toISOString();
        }

        return _createClass(NewEventPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

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
                _this.eventForm = _this.formBuilder.group({
                  addedByUser: _this.addedByUser,
                  title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                  eventDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                  eventTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                  location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                  videoLink: [''],
                  groupId: '',
                  totalReactionCount: 0,
                  totalReviewCount: 0,
                  groupName: '',
                  type: 'event'
                });
                _this.event = {
                  addedByUser: _this.addedByUser,
                  date: '',
                  title: '',
                  postTags: [],
                  groupId: '',
                  groupName: '',
                  type: 'event',
                  data: {},
                  totalReactionCount: 0,
                  totalReviewCount: 0,
                  postMedia: []
                };

                if (_this.step === 1) {
                  _this.title = 'Select a group ...'; // Get User Groups List

                  if (_this.user.groups) {
                    _this.firestore.collection('groups').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].firestore.FieldPath.documentId(), 'in', _this.user.groups).get().then(function (group) {
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
                  _this.title = 'Event';

                  _this.dataProvider.getGroup(_this.groupId).snapshotChanges().subscribe(function (group) {
                    _this.group = group.payload.data();
                  });
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
          key: "submitEventForm",
          value: function submitEventForm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var success, eventId;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.loadingProvider.show();
                    console.info('new group id', this.groupId); // Add post info and date.

                    this.event.date = new Date();
                    this.event.title = this.eventForm.value.title;
                    this.event.data.eventDate = this.eventForm.value.eventDate;
                    this.event.data.eventTime = this.eventForm.value.eventTime;
                    this.event.data.location = this.eventForm.value.location;
                    this.event.data.videoLink = this.eventForm.value.videoLink;
                    this.event.groupId = this.groupId;
                    this.event.groupName = this.group.name; // Add the poll and get the ID

                    _context.next = 12;
                    return this.dataProvider.addPost(this.event);

                  case 12:
                    success = _context.sent;
                    eventId = success.id;
                    this.eventId = eventId; // Initialize group if needed

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

                    this.group.polls.push(eventId);
                    this.userNotifications.push(eventId);
                    this.userPosts.push(eventId); // Perform updates

                    _context.next = 25;
                    return Promise.all([// Update group
                    this.dataProvider.getGroup(this.groupId).update({
                      posts: this.group.posts,
                      polls: this.group.polls
                    }), // Update user
                    this.dataProvider.getUser(this.addedByUser.addedByKey).update({
                      userNotifications: this.userNotifications,
                      userPosts: this.userPosts
                    })]);

                  case 25:
                    this.router.navigateByUrl('/app/tabs/tab1');

                  case 26:
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
            this.title = 'New Event';
            this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this2.group = group.payload.data();
            });
          }
        }, {
          key: "uploadBanner",
          value: function uploadBanner() {// Implement your image upload logic here
          }
        }]);
      }();

      _NewEventPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestore
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        }];
      };

      _NewEventPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-new-event',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_event_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_event_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService, _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController, _services_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestore, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder])], _NewEventPage);
      /***/
    },

    /***/
    16547:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/new-event/new-event.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <!-- <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button color=\"primary\" class=\"ion-text-capitalize\" [disabled]=\"!pollForm.valid\" (click)=\"submitPollForm()\">Submit</ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\"> \n      <ion-list class=\"ion-no-padding\">\n        <ion-item class=\"ion-margin-left\" text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n            <h3 class=\"ion-no-margin\">{{group.name}}</h3>\n            <p class=\"ion-text-wrap\">\n              <ion-text color=\"medium\">\n                {{group.description}}\n              </ion-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n  <!-- Step 2: Event Form -->\n  <div class=\"event-container\" *ngIf=\"step==2\">\n    <form [formGroup]=\"eventForm\" (ngSubmit)=\"submitEventForm()\">\n      <ion-item lines=\"none\" class=\"selected-group\">\n        <ion-label>\n          <h2>Creating event in <strong>{{group.name}}</strong></h2>\n        </ion-label>\n        <ion-button fill=\"clear\" (click)=\"step = 1\" slot=\"end\">\n          <ion-icon name=\"create-outline\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-item>    \n    \n      <div class=\"post-content\">\n        <!-- Banner Image -->\n        <div class=\"form-field banner-field\">\n          <div class=\"banner-container\" \n               [style.backgroundImage]=\"bannerImage ? 'url(' + bannerImage + ')' : 'url(./assets/images/default-banner.jpg)'\">\n            <div class=\"banner-overlay\">\n              <ion-button class=\"upload-button\" (click)=\"uploadBanner()\">\n                <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n                Change Banner\n              </ion-button>\n            </div>\n          </div>\n        </div>\n    \n        <!-- Event Title -->\n        <div class=\"form-field\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">\n              Event Title <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-input type=\"text\" \n                      formControlName=\"title\" \n                      placeholder=\"Enter event title\"\n                      class=\"title-input\"\n                      required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\" class=\"error-message\" *ngIf=\"eventForm.get('title').touched && eventForm.get('title').errors?.required\">\n            Event title is required\n          </ion-text>\n        </div>\n    \n        <!-- Date & Time -->\n        <div class=\"form-field-group\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">\n              Date <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-datetime formControlName=\"eventDate\" \n                        [min]=\"minDate\" \n                        [max]=\"maxEventYear\"\n                        displayFormat=\"DDD. MMM DD, YYYY\"\n                        required>\n            </ion-datetime>\n          </ion-item>\n          <ion-text color=\"danger\" class=\"error-message\" *ngIf=\"eventForm.get('eventDate').touched && eventForm.get('eventDate').errors?.required\">\n            Date is required\n          </ion-text>\n    \n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">\n              Time <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-datetime formControlName=\"eventTime\" \n                        displayFormat=\"h:mm A\" \n                        minuteValues=\"0,15,30,45\"\n                        required>\n            </ion-datetime>\n          </ion-item>\n          <ion-text color=\"danger\" class=\"error-message\" *ngIf=\"eventForm.get('eventTime').touched && eventForm.get('eventTime').errors?.required\">\n            Time is required\n          </ion-text>\n        </div>\n    \n        <!-- Location -->\n        <div class=\"form-field\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"location-outline\" class=\"input-icon\"></ion-icon>\n              Location <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-input type=\"text\" \n                      formControlName=\"location\" \n                      placeholder=\"Add location\"\n                      required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\" class=\"error-message\" *ngIf=\"eventForm.get('location').touched && eventForm.get('location').errors?.required\">\n            Location is required\n          </ion-text>\n        </div>\n    \n        <!-- Video Link (Optional) -->\n        <div class=\"form-field\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"videocam-outline\" class=\"input-icon\"></ion-icon>\n              Video Link\n            </ion-label>\n            <ion-input type=\"url\" \n                      formControlName=\"videoLink\" \n                      placeholder=\"Add video link (optional)\">\n            </ion-input>\n          </ion-item>\n        </div>\n    \n        <!-- Attendance Checkbox\n        <div class=\"form-field\">\n          <ion-item class=\"checkbox-item\">\n            <ion-label>I'll be attending the Event</ion-label>\n            <ion-checkbox formControlName=\"isAttending\" \n                        color=\"primary\"\n                        slot=\"end\">\n            </ion-checkbox>\n          </ion-item>\n        </div> -->\n    \n        <!-- Submit Button -->\n        <div class=\"submit-button-container\">\n          <ion-button expand=\"block\" \n                    type=\"submit\" \n                    [disabled]=\"!eventForm.valid\"\n                    class=\"submit-button\">\n            Create Event\n          </ion-button>\n        </div>\n      </div>\n    </form>\n      </div>\n</ion-content>\n\n";
      /***/
    },

    /***/
    76756:
    /*!***********************************************!*\
      !*** ./src/app/new-event/new-event.page.scss ***!
      \***********************************************/

    /***/
    function _(module) {
      module.exports = ".groups-container {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.group-card {\n  margin: 8px 0;\n  border-radius: 12px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.group-card:active {\n  transform: scale(0.98);\n}\n\n.selected-group {\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  margin: 16px 0;\n}\n\n.selected-group h2 {\n  font-size: 14px;\n  margin-bottom: 4px;\n  padding-left: 10px;\n}\n\n.selected-group h3 {\n  font-weight: 600;\n  margin: 0;\n}\n\n.form-section {\n  background: transparent;\n  border-radius: 12px;\n  padding: 6px;\n  margin: 0px 0;\n}\n\n.question-input {\n  --background: var(--ion-color-white);\n  border-radius: 8px;\n  margin-bottom: 24px;\n}\n\n.options-container ion-item {\n  --background: var(--ion-color-white);\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n\n.custom-input {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  font-size: 16px;\n}\n\n.submit-button {\n  margin-top: 24px;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.2);\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.event-container {\n  padding: 16px;\n}\n\n.event-container ion-item {\n  --padding-start: 16px;\n  --inner-padding-end: 0;\n  --background: transparent;\n}\n\n.event-container form {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 16px;\n  gap: 16px;\n}\n\n.event-container ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.event-container ion-item.item-has-focus {\n  --highlight-background: var(--ion-color-primary);\n}\n\n.event-container ion-label {\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n\n.event-container ion-label[position=stacked] {\n  margin-bottom: 4px;\n}\n\n.event-container .error-message {\n  color: var(--ion-color-danger);\n  font-size: 12px;\n  margin-top: 4px;\n  padding-left: 16px;\n}\n\n.banner-field {\n  margin-bottom: 20px;\n}\n\n.banner-field .banner-container {\n  width: 100%;\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n  border-radius: 12px;\n  position: relative;\n  overflow: hidden;\n}\n\n.banner-field .banner-container .banner-overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 16px;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);\n  display: flex;\n  justify-content: center;\n}\n\n.banner-field .banner-container .banner-overlay .upload-button {\n  --background: rgba(255,255,255,0.2);\n  --color: white;\n}\n\n.start-segment {\n  margin: 16px 0;\n  --background: var(--ion-color-light);\n  border-radius: 8px;\n}\n\n.start-segment ion-segment-button {\n  --indicator-color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-primary);\n  --color: var(--ion-color-medium);\n}\n\n.input-item {\n  --background: var(--ion-color-light);\n  --border-radius: 8px;\n  margin-bottom: 12px;\n}\n\n.input-item .input-icon {\n  margin-right: 8px;\n  color: var(--ion-color-medium);\n}\n\n.submit-button-container {\n  margin-top: 24px;\n}\n\n.submit-button-container .submit-button {\n  --border-radius: 8px;\n  margin: 0;\n}\n\n.error-message {\n  font-size: 12px;\n  margin-left: 16px;\n  margin-top: 4px;\n  display: block;\n}\n\n.input-item.item-has-error {\n  --border-color: var(--ion-color-danger);\n}\n\n.checkbox-item {\n  --background: var(--ion-color-light);\n  --border-radius: 8px;\n  margin: 16px 0;\n}\n\n.checkbox-item ion-checkbox {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQUFGOztBQUVFO0VBQ0Usc0JBQUE7QUFBSjs7QUFJQTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0U7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FBSEo7O0FBT0E7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFKRjs7QUFPQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQVFFO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnRUFBQTtBQU5GOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVNBO0VBRUUsYUFBQTtBQVBGOztBQVFFO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQVBKOztBQVVFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQVJKOztBQVVJO0VBQ0UsZ0RBQUE7QUFSTjs7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFZSTtFQUNFLGtCQUFBO0FBVk47O0FBY0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFaSjs7QUFlQTtFQUNFLG1CQUFBO0FBWkY7O0FBY0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFaSjs7QUFjSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG9FQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBWk47O0FBY007RUFDRSxtQ0FBQTtFQUNBLGNBQUE7QUFaUjs7QUFrQkE7RUFDRSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQWZGOztBQWlCRTtFQUNFLDJDQUFBO0VBQ0EseUNBQUE7RUFDQSxnQ0FBQTtBQWZKOztBQW1CQTtFQUNFLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQWhCRjs7QUFrQkU7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBaEJKOztBQW9CQTtFQUNFLGdCQUFBO0FBakJGOztBQW1CRTtFQUNFLG9CQUFBO0VBQ0EsU0FBQTtBQWpCSjs7QUFxQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWxCRjs7QUFzQkU7RUFDRSx1Q0FBQTtBQW5CSjs7QUF1QkE7RUFDRSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQXBCRjs7QUFzQkU7RUFDRSxpQkFBQTtBQXBCSiIsImZpbGUiOiJuZXctZXZlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZ3JvdXBzLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDcwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5ncm91cC1jYXJkIHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICB9XG59XG5cbi5zZWxlY3RlZC1ncm91cCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbjogMTZweCAwO1xuICBcbiAgaDIge1xuXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luOiAwcHggMDtcbn1cblxuLnF1ZXN0aW9uLWlucHV0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5vcHRpb25zLWNvbnRhaW5lciB7XG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cbn1cblxuLmN1c3RvbS1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLS1ib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4yKTtcbn1cblxuLy8gQWRkIHJpcHBsZSBlZmZlY3Qgc3R5bGVzXG4ucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ldmVudC1jb250YWluZXIge1xuXG4gIHBhZGRpbmc6IDE2cHg7XG4gIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gIH1cbiAgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICBcbiAgICAmLml0ZW0taGFzLWZvY3VzIHtcbiAgICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIFxuICAgICZbcG9zaXRpb249XCJzdGFja2VkXCJdIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gIH1cblxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB9XG59XG4uYmFubmVyLWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAuYmFubmVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLmJhbm5lci1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDAuNyksIHRyYW5zcGFyZW50KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLnVwbG9hZC1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zdGFydC1zZWdtZW50IHtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG59XG5cbi5pbnB1dC1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAuaW5wdXQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG59XG5cbi5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG5cbiAgLnN1Ym1pdC1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbnB1dC1pdGVtIHtcbiAgJi5pdGVtLWhhcy1lcnJvciB7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICB9XG59XG5cbi5jaGVja2JveC1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIFxuICBpb24tY2hlY2tib3gge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG59XG5cblxuXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_new-event_new-event_module_ts-es5.js.map