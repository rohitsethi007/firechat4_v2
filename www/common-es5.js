(function () {
  "use strict";

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  (self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["common"], {
    /***/
    80631:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      76842);
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      99502);
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      88910);

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
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
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
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
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

        return (0, _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    78086:
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      19369);
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      11540);

      var attachComponent = /*#__PURE__*/function () {
        var _ref = (0, _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
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
                _context.next = 10;
                return new Promise(function (resolve) {
                  return (0, _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve);
                });

              case 10:
                return _context.abrupt("return", el);

              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
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
    99502:
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

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
    15907:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

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
    43784:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createColorClasses
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getClassMap
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hostContext
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            openURL
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      19369);

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
        var _ref = (0, _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, ev, direction, animation) {
          var router;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    77258:
    /*!******************************************************!*\
      !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/auth */
      96287);
      /***/

    },

    /***/
    51064:
    /*!*******************************************************************!*\
      !*** ./src/app/components/emoji-picker/emoji-picker.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmojiPickerComponent": function EmojiPickerComponent() {
          return (
            /* binding */
            _EmojiPickerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_emoji_picker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./emoji-picker.component.html */
      82426);
      /* harmony import */


      var _emoji_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./emoji-picker.component.scss */
      81575);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _EmojiPickerComponent = /*#__PURE__*/function () {
        function EmojiPickerComponent(popoverCtrl, navParams) {
          _classCallCheck(this, EmojiPickerComponent);

          this.popoverCtrl = popoverCtrl;
          this.navParams = navParams;
          this.generalEmojis = [{
            icon: './assets/icon/smile.svg',
            value: 'smile'
          }, {
            icon: './assets/icon/wink.svg',
            value: 'wink'
          }, {
            icon: './assets/icon/sad.svg',
            value: 'sad'
          }, {
            icon: './assets/icon/love.svg',
            value: 'love'
          }, {
            icon: './assets/icon/haha.svg',
            value: 'haha'
          }, {
            icon: './assets/icon/cool.svg',
            value: 'cool'
          }, {
            icon: './assets/icon/hug.svg',
            value: 'hug'
          }];
          this.eventEmojis = [{
            icon: './assets/icon/smile.svg',
            value: 'smile'
          }, {
            icon: './assets/icon/wink.svg',
            value: 'wink'
          }, {
            icon: './assets/icon/sad.svg',
            value: 'sad'
          }, {
            icon: './assets/icon/love.svg',
            value: 'love'
          }, {
            icon: './assets/icon/haha.svg',
            value: 'haha'
          }, {
            icon: './assets/icon/cool.svg',
            value: 'cool'
          }, {
            icon: './assets/icon/hug.svg',
            value: 'hug'
          }];
          this.postType = this.navParams.get('postType');
        }

        return _createClass(EmojiPickerComponent, [{
          key: "getEmojis",
          value: function getEmojis() {
            return this.postType === 'event' ? this.eventEmojis : this.generalEmojis;
          }
        }, {
          key: "selectEmoji",
          value: function selectEmoji(emoji) {
            this.popoverCtrl.dismiss({
              emoji: emoji,
              post: this.navParams.get('post')
            });
          }
        }]);
      }();

      _EmojiPickerComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams
        }];
      };

      _EmojiPickerComponent.propDecorators = {
        postType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _EmojiPickerComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-emoji-picker',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_emoji_picker_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_emoji_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams])], _EmojiPickerComponent);
      /***/
    },

    /***/
    95740:
    /*!**********************************************!*\
      !*** ./src/app/services/bookmark.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookmarkService": function BookmarkService() {
          return (
            /* binding */
            _BookmarkService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/app */
      77199);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/auth */
      77258);
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/firestore */
      33527);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      76491);

      var _BookmarkService = /*#__PURE__*/function () {
        function BookmarkService(afs, auth) {
          _classCallCheck(this, BookmarkService);

          this.afs = afs;
          this.auth = auth;
          this.userBookmarks = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
          this.userBookmarks$ = this.userBookmarks.asObservable();
        } // Get user's bookmarks


        return _createClass(BookmarkService, [{
          key: "getUserBookmarks",
          value: function getUserBookmarks(userId) {
            return this.afs.collection('accounts').doc(userId).collection('bookmarks', function (ref) {
              return ref.orderBy('createdAt', 'desc');
            }).snapshotChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return Object.assign({
                  id: id
                }, data);
              });
            }));
          }
        }, {
          key: "toggleBookmark",
          value: function toggleBookmark(post, userId, currentBookmarks) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var userRef, isCurrentlyBookmarked;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    userRef = this.afs.collection('accounts').doc(userId);
                    isCurrentlyBookmarked = currentBookmarks === null || currentBookmarks === void 0 ? void 0 : currentBookmarks.includes(post.key);

                    if (!isCurrentlyBookmarked) {
                      _context3.next = 9;
                      break;
                    }

                    _context3.next = 6;
                    return userRef.update({
                      bookmarks: firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.arrayRemove(post.key)
                    });

                  case 6:
                    // Update local state
                    this.userBookmarks.next(currentBookmarks.filter(function (id) {
                      return id !== post.key;
                    }));
                    _context3.next = 12;
                    break;

                  case 9:
                    _context3.next = 11;
                    return userRef.update({
                      bookmarks: firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.arrayUnion(post.key)
                    });

                  case 11:
                    // Update local state
                    this.userBookmarks.next([].concat(_toConsumableArray(currentBookmarks), [post.key]));

                  case 12:
                    return _context3.abrupt("return", !isCurrentlyBookmarked);

                  case 15:
                    _context3.prev = 15;
                    _context3.t0 = _context3["catch"](0);
                    console.error('Error toggling bookmark:', _context3.t0);
                    return _context3.abrupt("return", false);

                  case 19:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[0, 15]]);
            }));
          }
        }, {
          key: "isBookmarked",
          value: function isBookmarked(postId, bookmarks) {
            return (bookmarks === null || bookmarks === void 0 ? void 0 : bookmarks.includes(postId)) || false;
          } // Get bookmark count for a post

        }, {
          key: "getBookmarkCount",
          value: function getBookmarkCount(postId) {
            return this.afs.collection('posts').doc(postId).valueChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (post) {
              return (post === null || post === void 0 ? void 0 : post.bookmarkCount) || 0;
            }));
          }
        }]);
      }();

      _BookmarkService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
        }];
      };

      _BookmarkService = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth])], _BookmarkService);
      /***/
    },

    /***/
    19446:
    /*!**********************************************!*\
      !*** ./src/app/services/firebase.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FirebaseService": function FirebaseService() {
          return (
            /* binding */
            _FirebaseService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./loading.service */
      4471);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data.service */
      52468);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);

      var _FirebaseService = /*#__PURE__*/function () {
        function FirebaseService(firestore, loadingProvider, afAuth, dataProvider) {
          _classCallCheck(this, FirebaseService);

          this.firestore = firestore;
          this.loadingProvider = loadingProvider;
          this.afAuth = afAuth;
          this.dataProvider = dataProvider;
        }

        return _createClass(FirebaseService, [{
          key: "joinGroup",
          value: function joinGroup(id) {
            throw new Error('Method not implemented.');
          } // Send friend request to userId.

        }, {
          key: "sendFriendRequest",
          value: function sendFriendRequest(userId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this = this;

              var loggedInUserId, requestsSent;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.afAuth.currentUser.then(function (data) {
                      return data.uid;
                    });

                  case 2:
                    loggedInUserId = _context4.sent;
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


                      _this.firestore.collection('requests').doc(loggedInUserId).set({
                        requestsSent: requestsSent
                      }).then(function (success) {
                        var friendRequests; // tslint:disable-next-line: no-shadowed-variable

                        _this.dataProvider.getRequests(userId).get().subscribe(function (requests) {
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


                          _this.firestore.collection('requests').doc(userId).set({
                            friendRequests: friendRequests
                          }).then(function (succ) {
                            _this.loadingProvider.hide();

                            _this.loadingProvider.showToast('Friend Request Sent');
                          })["catch"](function (error) {
                            _this.loadingProvider.hide();
                          });
                        });
                      })["catch"](function (error) {
                        console.log('error', error);

                        _this.loadingProvider.hide();
                      });
                    });

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          } // Cancel friend request sent to userId.

        }, {
          key: "cancelFriendRequest",
          value: function cancelFriendRequest(userId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this2 = this;

              var loggedInUserId, requestsSent;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.afAuth.currentUser.then(function (data) {
                      return data.uid;
                    });

                  case 2:
                    loggedInUserId = _context5.sent;
                    this.loadingProvider.show();
                    requestsSent = [];
                    this.dataProvider.getRequests(loggedInUserId).get().subscribe(function (requests) {
                      requestsSent = requests.data().requestsSent;
                      requestsSent.splice(requestsSent.indexOf(userId), 1); // Update requestSent information.

                      _this2.firestore.collection('requests').doc(loggedInUserId).set({
                        requestsSent: requestsSent
                      }).then(function (success) {
                        var friendRequests;

                        _this2.dataProvider.getRequests(userId).get().subscribe(function (req) {
                          friendRequests = req.data().friendRequests;
                          console.log(friendRequests);
                          friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1); // Update friendRequests information.

                          _this2.firestore.collection('requests').doc(userId).set({
                            friendRequests: friendRequests
                          }).then(function (succ) {
                            console.log(succ);

                            _this2.loadingProvider.hide();

                            _this2.loadingProvider.showToast('Removed Friend Request');
                          })["catch"](function (error) {
                            console.log(error);

                            _this2.loadingProvider.hide();
                          });
                        });
                      })["catch"](function (error) {
                        console.log(error);

                        _this2.loadingProvider.hide();
                      });
                    });

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          } // Delete friend request.

        }, {
          key: "deleteFriendRequest",
          value: function deleteFriendRequest(userId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this3 = this;

              var loggedInUserId, friendRequests;
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
                    friendRequests = [];
                    this.dataProvider.getRequests(loggedInUserId).get().subscribe(function (requests) {
                      friendRequests = requests.data().friendRequests;
                      friendRequests = friendRequests.filter(function (u) {
                        return u !== userId;
                      }); // Update friendRequests information.

                      _this3.firestore.collection('requests').doc(loggedInUserId).set({
                        friendRequests: friendRequests
                      }).then(function (success) {
                        var requestsSent;

                        _this3.dataProvider.getRequests(userId).get().subscribe(function (req) {
                          requestsSent = req.data().requestsSent;
                          requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1);
                          console.log('requestsSent:', requestsSent, loggedInUserId, requestsSent.indexOf(userId), 1); // Update requestsSent information.

                          _this3.firestore.collection('requests').doc(userId).set({
                            requestsSent: requestsSent
                          }).then(function (succ) {
                            console.log(succ);

                            _this3.loadingProvider.hide();
                          })["catch"](function (error) {
                            console.log(error);

                            _this3.loadingProvider.hide();
                          });
                        });
                      })["catch"](function (err) {
                        console.log(err);

                        _this3.loadingProvider.hide();
                      });
                    });

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          } // Accept friend request.

        }, {
          key: "acceptFriendRequest",
          value: function acceptFriendRequest(userId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this4 = this;

              var loggedInUserId;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.afAuth.currentUser.then(function (data) {
                      return data.uid;
                    });

                  case 2:
                    loggedInUserId = _context7.sent;
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


                      _this4.dataProvider.getUser(loggedInUserId).update({
                        friends: friends
                      }).then(function (success) {
                        _this4.dataProvider.getUser(userId).get().subscribe(function (acc) {
                          var friends = acc.data().friends;

                          if (!friends) {
                            friends = [loggedInUserId];
                          } else {
                            friends.push(loggedInUserId);
                          }

                          _this4.dataProvider.getUser(userId).update({
                            friends: friends
                          }).then(function (succ) {
                            _this4.loadingProvider.hide();
                          })["catch"](function (error) {
                            _this4.loadingProvider.hide();
                          });
                        });
                      })["catch"](function (error) {
                        _this4.loadingProvider.hide();
                      });
                    });

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }]);
      }();

      _FirebaseService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService
        }];
      };

      _FirebaseService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore, _loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth, _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService])], _FirebaseService);
      /***/
    },

    /***/
    54120:
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginService": function LoginService() {
          return (
            /* binding */
            _LoginService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/auth */
      36363);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/firestore */
      43789);
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/app */
      77199);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/auth */
      77258);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data.service */
      52468);
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loading.service */
      4471);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      147);
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      64357);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _LoginService = /*#__PURE__*/function () {
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
            var _this5 = this;

            this.loadingProvider.show();
            this.afAuth.signInWithEmailAndPassword(email, password).then(function (res) {
              console.log(res);
              console.log("******* " + _this5.afAuth.user + " *********"); //this.dataService.getUser(this.afAuth.user.)

              _this5.loadingProvider.hide();
            })["catch"](function (err) {
              console.log(err);

              _this5.loadingProvider.hide();

              _this5.loadingProvider.showToast(err.message);
            });
          }
        }, {
          key: "register",
          value: function register(name, username, email, password, img) {
            var _this6 = this;

            this.loadingProvider.show();
            this.afAuth.createUserWithEmailAndPassword(email, password).then(function (userCredential) {
              // userCredential.user contains the user information
              var user = userCredential.user;
              console.info('New user created:', user); // If you need specific user properties

              if (user) {
                _this6.createNewUser(user.uid, name, username, user.email, "I am available", "Firebase", img);

                console.info('User data:', user);
              }
            })["catch"](function (err) {
              console.log(err);

              _this6.loadingProvider.hide();

              _this6.loadingProvider.showToast(err.message);
            });
          }
        }, {
          key: "reset",
          value: function reset(email) {
            var _this7 = this;

            console.log(email);
            this.loadingProvider.show();
            this.afAuth.sendPasswordResetEmail(email).then(function () {
              _this7.loadingProvider.hide();

              _this7.loadingProvider.showToast("Please Check your inbox");
            })["catch"](function (err) {
              _this7.loadingProvider.hide();

              _this7.loadingProvider.showToast(err.message);
            });
          }
        }, {
          key: "fbLogin",
          value: function fbLogin() {
            var _this8 = this;

            if (this.platform.is('desktop')) {
              this.loadingProvider.show();
              this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.FacebookAuthProvider()).then(function (res) {
                _this8.loadingProvider.hide();

                var credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.FacebookAuthProvider.credential(res.credential.accessToken);

                _this8.afAuth.signInWithCredential(credential).then(function () {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                    var uid, userInfo;
                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                      while (1) switch (_context8.prev = _context8.next) {
                        case 0:
                          if (!res.additionalUserInfo.isNewUser) {
                            _context8.next = 8;
                            break;
                          }

                          _context8.next = 3;
                          return this.afAuth.currentUser.then(function (data) {
                            return data.uid;
                          });

                        case 3:
                          uid = _context8.sent;
                          userInfo = res.additionalUserInfo.profile;
                          this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Facebook', userInfo.picture);
                          _context8.next = 9;
                          break;

                        case 8:
                          this.router.navigateByUrl('tabs');

                        case 9:
                        case "end":
                          return _context8.stop();
                      }
                    }, _callee8, this);
                  }));
                })["catch"](function (err) {
                  return console.log(err);
                });
              })["catch"](function (err) {
                console.log(err);

                _this8.loadingProvider.hide();
              });
            } else {
              this.facebook.login(['public_profile', 'email']).then(function (res) {
                console.log(res);
                var credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.FacebookAuthProvider.credential(res.authResponse.accessToken);

                _this8.loadingProvider.show();

                _this8.afAuth.signInWithCredential(credential).then(function (res) {
                  if (res.additionalUserInfo.isNewUser) {
                    _this8.facebook.api("me/?fields=id,email,first_name,picture,gender", ["public_profile", "email"]).then(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                        var uid;
                        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                          while (1) switch (_context9.prev = _context9.next) {
                            case 0:
                              console.log(data);
                              _context9.next = 3;
                              return this.afAuth.currentUser.then(function (data) {
                                return data.uid;
                              });

                            case 3:
                              uid = _context9.sent;
                              this.createNewUser(uid, data.first_name, uid, data.email, 'I am available', 'Facebook', data.picture.data.url);

                            case 5:
                            case "end":
                              return _context9.stop();
                          }
                        }, _callee9, this);
                      }));
                    })["catch"](function (err) {
                      console.log(err);

                      _this8.loadingProvider.hide();
                    });
                  } else {
                    _this8.router.navigateByUrl('tabs');
                  }
                })["catch"](function (error) {
                  _this8.loadingProvider.hide();
                });
              })["catch"](function (err) {
                return console.log(err);
              });
            }
          }
        }, {
          key: "gLogin",
          value: function gLogin() {
            var _this9 = this;

            if (this.platform.is('desktop')) {
              this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider()).then(function (res) {
                var credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider.credential(res.credential.idToken, res.credential.accessToken);

                _this9.afAuth.signInWithCredential(credential).then(function () {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                    var uid, userInfo;
                    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                      while (1) switch (_context10.prev = _context10.next) {
                        case 0:
                          if (!res.additionalUserInfo.isNewUser) {
                            _context10.next = 8;
                            break;
                          }

                          _context10.next = 3;
                          return this.afAuth.currentUser.then(function (data) {
                            return data.uid;
                          });

                        case 3:
                          uid = _context10.sent;
                          userInfo = res.additionalUserInfo.profile;
                          this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
                          _context10.next = 9;
                          break;

                        case 8:
                          this.router.navigateByUrl('tabs');

                        case 9:
                        case "end":
                          return _context10.stop();
                      }
                    }, _callee10, this);
                  }));
                })["catch"](function (err) {
                  console.log("Err! signInWithCredential" + err);
                });
              })["catch"](function (err) {
                console.log('Err! signInWithCredential' + err);
              });
            } else {
              this.gplus.login({
                webClientId: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.googleClientId
              }).then(function (result) {
                var credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider.credential(result['token'], null);

                _this9.afAuth.signInWithCredential(credential).then(function (res) {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                    var uid, userInfo;
                    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                      while (1) switch (_context11.prev = _context11.next) {
                        case 0:
                          if (!res.additionalUserInfo.isNewUser) {
                            _context11.next = 8;
                            break;
                          }

                          _context11.next = 3;
                          return this.afAuth.currentUser.then(function (data) {
                            return data.uid;
                          });

                        case 3:
                          uid = _context11.sent;
                          userInfo = res.additionalUserInfo.profile;
                          this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
                          _context11.next = 9;
                          break;

                        case 8:
                          this.router.navigateByUrl('tabs');

                        case 9:
                        case "end":
                          return _context11.stop();
                      }
                    }, _callee11, this);
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
            var _this10 = this;

            var description = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "I'm available";
            var provider = arguments.length > 5 ? arguments[5] : undefined;
            var img = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "./assets/images/default-dp.png";
            var dateCreated = new Date();
            var publicVisibility = false;
            var showOnline = false;
            this.firestore.collection('accounts').doc(userId).set({
              dateCreated: dateCreated,
              username: username,
              name: name,
              userId: userId,
              email: email,
              description: description,
              provider: provider,
              img: img,
              publicVisibility: publicVisibility,
              showOnline: showOnline
            }).then(function () {
              _this10.router.navigateByUrl('tabs');
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this11 = this;

            this.afAuth.signOut().then(function () {
              return _this11.router.navigateByUrl('/login', {
                replaceUrl: true
              });
            });
          }
        }]);
      }();

      _LoginService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__.GooglePlus
        }, {
          type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__.Facebook
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }];
      };

      _LoginService = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore, _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService, _loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform, _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__.GooglePlus, _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__.Facebook, _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router])], _LoginService);
      /***/
    },

    /***/
    82426:
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/emoji-picker/emoji-picker.component.html ***!
      \************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"emoji-picker-horizontal\">\n  <ion-button \n    *ngFor=\"let emoji of getEmojis()\" \n    (click)=\"selectEmoji(emoji)\" \n    fill=\"clear\"\n    size=\"small\"\n    class=\"emoji-button\">\n    <ion-icon [src]=\"emoji.icon\"></ion-icon>\n  </ion-button>\n</div>\n";
      /***/
    },

    /***/
    81575:
    /*!*********************************************************************!*\
      !*** ./src/app/components/emoji-picker/emoji-picker.component.scss ***!
      \*********************************************************************/

    /***/
    function _(module) {
      module.exports = ".emoji-picker-horizontal {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 8px;\n  grid-gap: 4px;\n  gap: 4px;\n  background: #ffffff;\n  border-radius: 12px;\n  min-width: 200px;\n  justify-content: center;\n}\n.emoji-picker-horizontal .emoji-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  margin: 0;\n  height: 40px;\n  width: 40px;\n}\n.emoji-picker-horizontal .emoji-button ion-icon {\n  font-size: 24px;\n  transition: transform 0.2s ease;\n}\n.emoji-picker-horizontal .emoji-button:hover ion-icon {\n  transform: scale(1.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtb2ppLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNOO0FBQ007RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFDUjtBQUVNO0VBQ0UscUJBQUE7QUFBUiIsImZpbGUiOiJlbW9qaS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1vamktcGlja2VyLWhvcml6b250YWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGdhcDogNHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbiAgICAuZW1vamktYnV0dG9uIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgICB9XG4gIFxuICAgICAgJjpob3ZlciBpb24taWNvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map