function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/cubic-bezier-90d0df24.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-90d0df24.js ***!
    \********************************************************************/

  /*! exports provided: P, g */

  /***/
  function node_modulesIonicCoreDistEsmCubicBezier90d0df24Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P", function () {
      return Point;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getTimeGivenProgression;
    });
    /**
     * Based on:
     * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
     * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
     * TODO: Reduce rounding error
     */


    var Point = function Point(x, y) {
      _classCallCheck(this, Point);

      this.x = x;
      this.y = y;
    };
    /**
     * Given a cubic-bezier curve, get the x value (time) given
     * the y value (progression).
     * Ex: cubic-bezier(0.32, 0.72, 0, 1);
     * P0: (0, 0)
     * P1: (0.32, 0.72)
     * P2: (0, 1)
     * P3: (1, 1)
     */


    var getTimeGivenProgression = function getTimeGivenProgression(p0, p1, p2, p3, progression) {
      var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
      return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
    };
    /**
     * Solve a cubic equation in one dimension (time)
     */


    var solveCubicParametricEquation = function solveCubicParametricEquation(p0, p1, p2, p3, t) {
      var partA = 3 * p1 * Math.pow(t - 1, 2);
      var partB = -3 * p2 * t + 3 * p2 + p3 * t;
      var partC = p0 * Math.pow(t - 1, 3);
      return t * (partA + t * partB) - partC;
    };
    /**
     * Find the `t` value for a cubic bezier using Cardano's formula
     */


    var solveCubicBezier = function solveCubicBezier(p0, p1, p2, p3, refPoint) {
      p0 -= refPoint;
      p1 -= refPoint;
      p2 -= refPoint;
      p3 -= refPoint;
      var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
      return roots.filter(function (root) {
        return root >= 0 && root <= 1;
      });
    };

    var solveQuadraticEquation = function solveQuadraticEquation(a, b, c) {
      var discriminant = b * b - 4 * a * c;

      if (discriminant < 0) {
        return [];
      } else {
        return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
      }
    };

    var solveCubicEquation = function solveCubicEquation(a, b, c, d) {
      if (a === 0) {
        return solveQuadraticEquation(b, c, d);
      }

      b /= a;
      c /= a;
      d /= a;
      var p = (3 * c - b * b) / 3;
      var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;

      if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
      } else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
      }

      var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

      if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
      } else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3];
      }

      var r = Math.sqrt(Math.pow(-(p / 3), 3));
      var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
      var s = 2 * Math.pow(r, 1 / 3);
      return [s * Math.cos(phi / 3) - b / 3, s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3, s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3];
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-00265c49.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-00265c49.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegate00265c49Js(module, __webpack_exports__, __webpack_require__) {
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

    var attachComponent = function attachComponent(delegate, container, component, cssClasses, componentProps) {
      var el;
      return regeneratorRuntime.async(function attachComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
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

              if (!el.componentOnReady) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return regeneratorRuntime.awrap(el.componentOnReady());

            case 11:
              return _context.abrupt("return", el);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      });
    };

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
  "./node_modules/@ionic/core/dist/esm/haptic-4e92c885.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-4e92c885.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic4e92c885Js(module, __webpack_exports__, __webpack_require__) {
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

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/helpers-c90aaa66.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/helpers-c90aaa66.js ***!
    \***************************************************************/

  /*! exports provided: a, b, c, d, e, f, h, i, n, p, r */

  /***/
  function node_modulesIonicCoreDistEsmHelpersC90aaa66Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return rIC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return assert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return clamp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return debounceEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "e", function () {
      return debounce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "f", function () {
      return findItemLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hasShadowDom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "i", function () {
      return isEndSide;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "n", function () {
      return now;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "p", function () {
      return pointerCoord;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "r", function () {
      return renderHiddenInput;
    });

    var rIC = function rIC(callback) {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
      } else {
        setTimeout(callback, 32);
      }
    };

    var hasShadowDom = function hasShadowDom(el) {
      return !!el.shadowRoot && !!el.attachShadow;
    };

    var findItemLabel = function findItemLabel(componentEl) {
      var itemEl = componentEl.closest('ion-item');

      if (itemEl) {
        return itemEl.querySelector('ion-label');
      }

      return null;
    };

    var renderHiddenInput = function renderHiddenInput(always, container, name, value, disabled) {
      if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');

        if (!input) {
          input = container.ownerDocument.createElement('input');
          input.type = 'hidden';
          input.classList.add('aux-input');
          container.appendChild(input);
        }

        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
      }
    };

    var clamp = function clamp(min, n, max) {
      return Math.max(min, Math.min(n, max));
    };

    var assert = function assert(actual, reason) {
      if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line

        throw new Error(message);
      }
    };

    var now = function now(ev) {
      return ev.timeStamp || Date.now();
    };

    var pointerCoord = function pointerCoord(ev) {
      // get X coordinates for either a mouse click
      // or a touch depending on the given event
      if (ev) {
        var changedTouches = ev.changedTouches;

        if (changedTouches && changedTouches.length > 0) {
          var touch = changedTouches[0];
          return {
            x: touch.clientX,
            y: touch.clientY
          };
        }

        if (ev.pageX !== undefined) {
          return {
            x: ev.pageX,
            y: ev.pageY
          };
        }
      }

      return {
        x: 0,
        y: 0
      };
    };
    /**
     * @hidden
     * Given a side, return if it should be on the end
     * based on the value of dir
     * @param side the side
     * @param isRTL whether the application dir is rtl
     */


    var isEndSide = function isEndSide(side) {
      var isRTL = document.dir === 'rtl';

      switch (side) {
        case 'start':
          return isRTL;

        case 'end':
          return !isRTL;

        default:
          throw new Error("\"".concat(side, "\" is not a valid value for [side]. Use \"start\" or \"end\" instead."));
      }
    };

    var debounceEvent = function debounceEvent(event, wait) {
      var original = event._original || event;
      return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
      };
    };

    var debounce = function debounce(func) {
      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var timer;
      return function () {
        clearTimeout(timer);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        timer = setTimeout.apply(void 0, [func, wait].concat(args));
      };
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-064a03a9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-064a03a9.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex064a03a9Js(module, __webpack_exports__, __webpack_require__) {
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

        var documentFragmentChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
          sanitizeElement(documentFragmentChildren[childIndex]);
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


    var getElementChildren = function getElementChildren(element) {
      return element.children != null ? element.children : element.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-a15151df.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-a15151df.js ***!
    \*************************************************************/

  /*! exports provided: d, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmIndexA15151dfJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
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


    var _core_c02a05e9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-c02a05e9.js */
    "./node_modules/@ionic/core/dist/esm/core-c02a05e9.js");
    /* harmony import */


    var _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants-94c4865f.js */
    "./node_modules/@ionic/core/dist/esm/constants-94c4865f.js");

    var iosTransitionAnimation = function iosTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | ios-transition-96fe915f-js */
      "ios-transition-96fe915f-js").then(__webpack_require__.bind(null,
      /*! ./ios.transition-96fe915f.js */
      "./node_modules/@ionic/core/dist/esm/ios.transition-96fe915f.js"));
    };

    var mdTransitionAnimation = function mdTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | md-transition-bf76a31e-js */
      "md-transition-bf76a31e-js").then(__webpack_require__.bind(null,
      /*! ./md.transition-bf76a31e.js */
      "./node_modules/@ionic/core/dist/esm/md.transition-bf76a31e.js"));
    };

    var transition = function transition(opts) {
      return new Promise(function (resolve, reject) {
        Object(_core_c02a05e9_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
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

    var runTransition = function runTransition(opts) {
      var animationBuilder, ani;
      return regeneratorRuntime.async(function runTransition$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(getAnimationBuilder(opts));

            case 2:
              animationBuilder = _context2.sent;
              ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

              return _context2.abrupt("return", ani);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    };

    var afterTransition = function afterTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    var getAnimationBuilder = function getAnimationBuilder(opts) {
      var getAnimation;
      return regeneratorRuntime.async(function getAnimationBuilder$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", undefined);

            case 2:
              if (!opts.animationBuilder) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", opts.animationBuilder);

            case 4:
              if (!(opts.mode === 'ios')) {
                _context3.next = 10;
                break;
              }

              _context3.next = 7;
              return regeneratorRuntime.awrap(iosTransitionAnimation());

            case 7:
              _context3.t0 = _context3.sent.iosTransitionAnimation;
              _context3.next = 13;
              break;

            case 10:
              _context3.next = 12;
              return regeneratorRuntime.awrap(mdTransitionAnimation());

            case 12:
              _context3.t0 = _context3.sent.mdTransitionAnimation;

            case 13:
              getAnimation = _context3.t0;
              return _context3.abrupt("return", getAnimation);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      });
    };

    var animation = function animation(animationBuilder, opts) {
      var trans, mod, didComplete;
      return regeneratorRuntime.async(function animation$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(waitForReady(opts, true));

            case 2:
              _context4.prev = 2;
              _context4.next = 5;
              return regeneratorRuntime.awrap(__webpack_require__.e(
              /*! import() | index-ae28cb4b-js */
              "index-ae28cb4b-js").then(__webpack_require__.bind(null,
              /*! ./index-ae28cb4b.js */
              "./node_modules/@ionic/core/dist/esm/index-ae28cb4b.js")));

            case 5:
              mod = _context4.sent;
              _context4.next = 8;
              return regeneratorRuntime.awrap(mod.create(animationBuilder, opts.baseEl, opts));

            case 8:
              trans = _context4.sent;
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](2);
              trans = animationBuilder(opts.baseEl, opts);

            case 14:
              fireWillEvents(opts.enteringEl, opts.leavingEl);
              _context4.next = 17;
              return regeneratorRuntime.awrap(playTransition(trans, opts));

            case 17:
              didComplete = _context4.sent;
              // TODO: Remove AnimationBuilder
              trans.hasCompleted = didComplete;

              if (opts.progressCallback) {
                opts.progressCallback(undefined);
              }

              if (trans.hasCompleted) {
                fireDidEvents(opts.enteringEl, opts.leavingEl);
              }

              return _context4.abrupt("return", {
                hasCompleted: trans.hasCompleted,
                animation: trans
              });

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[2, 11]]);
    };

    var noAnimation = function noAnimation(opts) {
      var enteringEl, leavingEl;
      return regeneratorRuntime.async(function noAnimation$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              enteringEl = opts.enteringEl;
              leavingEl = opts.leavingEl;
              _context5.next = 4;
              return regeneratorRuntime.awrap(waitForReady(opts, false));

            case 4:
              fireWillEvents(enteringEl, leavingEl);
              fireDidEvents(enteringEl, leavingEl);
              return _context5.abrupt("return", {
                hasCompleted: true
              });

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      });
    };

    var waitForReady = function waitForReady(opts, defaultDeep) {
      var deep, promises;
      return regeneratorRuntime.async(function waitForReady$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
              promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
              _context6.next = 4;
              return regeneratorRuntime.awrap(Promise.all(promises));

            case 4:
              _context6.next = 6;
              return regeneratorRuntime.awrap(notifyViewReady(opts.viewIsReady, opts.enteringEl));

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      });
    };

    var notifyViewReady = function notifyViewReady(viewIsReady, enteringEl) {
      return regeneratorRuntime.async(function notifyViewReady$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!viewIsReady) {
                _context7.next = 3;
                break;
              }

              _context7.next = 3;
              return regeneratorRuntime.awrap(viewIsReady(enteringEl));

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      });
    };

    var playTransition = function playTransition(trans, opts) {
      var progressCallback = opts.progressCallback; // TODO: Remove AnimationBuilder

      var promise = new Promise(function (resolve) {
        return trans.onFinish(resolve);
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
      lifecycle(leavingEl, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
      lifecycle(enteringEl, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _constants_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
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

    var deepReady = function deepReady(el) {
      var element, stencilEl;
      return regeneratorRuntime.async(function deepReady$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              element = el;

              if (!element) {
                _context8.next = 10;
                break;
              }

              if (!(element.componentOnReady != null)) {
                _context8.next = 8;
                break;
              }

              _context8.next = 5;
              return regeneratorRuntime.awrap(element.componentOnReady());

            case 5:
              stencilEl = _context8.sent;

              if (!(stencilEl != null)) {
                _context8.next = 8;
                break;
              }

              return _context8.abrupt("return");

            case 8:
              _context8.next = 10;
              return regeneratorRuntime.awrap(Promise.all(Array.from(element.children).map(deepReady)));

            case 10:
            case "end":
              return _context8.stop();
          }
        }
      });
    };

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
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-353a032e.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-353a032e.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme353a032eJs(module, __webpack_exports__, __webpack_require__) {
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

    var openURL = function openURL(url, ev, direction) {
      var router;
      return regeneratorRuntime.async(function openURL$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                _context9.next = 5;
                break;
              }

              router = document.querySelector('ion-router');

              if (!router) {
                _context9.next = 5;
                break;
              }

              if (ev != null) {
                ev.preventDefault();
              }

              return _context9.abrupt("return", router.push(url, direction));

            case 5:
              return _context9.abrupt("return", false);

            case 6:
            case "end":
              return _context9.stop();
          }
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/watch-options-56e2e31f.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/watch-options-56e2e31f.js ***!
    \*********************************************************************/

  /*! exports provided: f, w */

  /***/
  function node_modulesIonicCoreDistEsmWatchOptions56e2e31fJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "f", function () {
      return findCheckedOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "w", function () {
      return watchForOptions;
    });

    var watchForOptions = function watchForOptions(containerEl, tagName, onChange) {
      var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
      });
      mutation.observe(containerEl, {
        childList: true,
        subtree: true
      });
      return mutation;
    };

    var getSelectedOption = function getSelectedOption(mutationList, tagName) {
      var newOption;
      mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
          newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
      });
      return newOption;
    };

    var findCheckedOption = function findCheckedOption(el, tagName) {
      if (el.nodeType !== 1) {
        return undefined;
      }

      var options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
      return options.find(function (o) {
        return o.checked === true;
      });
    };
    /***/

  },

  /***/
  "./src/app/services/firebase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/firebase.service.ts ***!
    \**********************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppServicesFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
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


    var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FirebaseService =
    /*#__PURE__*/
    function () {
      function FirebaseService(angularfire, loadingProvider, afAuth, dataProvider) {
        _classCallCheck(this, FirebaseService);

        this.angularfire = angularfire;
        this.loadingProvider = loadingProvider;
        this.afAuth = afAuth;
        this.dataProvider = dataProvider;
        console.log("Initializing Firebase Provider");
      } // Send friend request to userId.


      _createClass(FirebaseService, [{
        key: "sendFriendRequest",
        value: function sendFriendRequest(userId) {
          var _this = this;

          var loggedInUserId = this.afAuth.auth.currentUser.uid;
          this.loadingProvider.show();
          var requestsSent; // Use take(1) so that subscription will only trigger once.

          this.dataProvider.getRequests(loggedInUserId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (requests) {
            console.log(requests.payload.val());
            if (requests.payload.val() != null && requests.payload.val().requestsSent != null) requestsSent = requests.payload.val().requestsSent;

            if (requestsSent == null || requestsSent == undefined) {
              requestsSent = [userId];
            } else {
              if (requestsSent.indexOf(userId) == -1) requestsSent.push(userId);
            } // Add requestsSent information.


            _this.angularfire.object('/requests/' + loggedInUserId).update({
              requestsSent: requestsSent
            }).then(function (success) {
              var friendRequests;

              _this.dataProvider.getRequests(userId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (requests) {
                if (requests.payload.val() != null && requests.payload.val().friendRequests != null) friendRequests = requests.payload.val().friendRequests;

                if (friendRequests == null) {
                  friendRequests = [loggedInUserId];
                } else {
                  if (friendRequests.indexOf(userId) == -1) friendRequests.push(loggedInUserId);
                } // Add friendRequest information.


                _this.angularfire.object('/requests/' + userId).update({
                  friendRequests: friendRequests
                }).then(function (success) {
                  _this.loadingProvider.hide();

                  _this.loadingProvider.showToast("Friend Request Sent"); // this.alertProvider.showFriendRequestSent();

                }).catch(function (error) {
                  _this.loadingProvider.hide();
                });
              });
            }).catch(function (error) {
              _this.loadingProvider.hide();
            });
          });
        } // Cancel friend request sent to userId.

      }, {
        key: "cancelFriendRequest",
        value: function cancelFriendRequest(userId) {
          var _this2 = this;

          var loggedInUserId = this.afAuth.auth.currentUser.uid;
          this.loadingProvider.show();
          var requestsSent;
          this.dataProvider.getRequests(loggedInUserId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (requests) {
            requestsSent = requests.payload.val().requestsSent;
            requestsSent.splice(requestsSent.indexOf(userId), 1); // Update requestSent information.

            _this2.angularfire.object('/requests/' + loggedInUserId).update({
              requestsSent: requestsSent
            }).then(function (success) {
              var friendRequests;

              _this2.dataProvider.getRequests(userId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (requests) {
                friendRequests = requests.payload.val().friendRequests;
                console.log(friendRequests);
                friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1); // Update friendRequests information.

                _this2.angularfire.object('/requests/' + userId).update({
                  friendRequests: friendRequests
                }).then(function (success) {
                  _this2.loadingProvider.hide();

                  _this2.loadingProvider.showToast("Removed Friend Request"); // this.alertProvider.showFriendRequestRemoved();

                }).catch(function (error) {
                  _this2.loadingProvider.hide();
                });
              });
            }).catch(function (error) {
              _this2.loadingProvider.hide();
            });
          });
        } // Delete friend request.

      }, {
        key: "deleteFriendRequest",
        value: function deleteFriendRequest(userId) {
          var _this3 = this;

          var loggedInUserId = this.afAuth.auth.currentUser.uid;
          this.loadingProvider.show();
          var friendRequests;
          this.dataProvider.getRequests(loggedInUserId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (requests) {
            friendRequests = requests.payload.val().friendRequests;
            console.log(friendRequests);
            friendRequests.splice(friendRequests.indexOf(userId), 1); // Update friendRequests information.

            _this3.angularfire.object('/requests/' + loggedInUserId).update({
              friendRequests: friendRequests
            }).then(function (success) {
              var requestsSent;

              _this3.dataProvider.getRequests(userId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (requests) {
                requestsSent = requests.payload.val().requestsSent;
                requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1); // Update requestsSent information.

                _this3.angularfire.object('/requests/' + userId).update({
                  requestsSent: requestsSent
                }).then(function (success) {
                  _this3.loadingProvider.hide();
                }).catch(function (error) {
                  _this3.loadingProvider.hide();
                });
              });
            }).catch(function (error) {
              _this3.loadingProvider.hide(); //TODO ERROR

            });
          });
        } // Accept friend request.

      }, {
        key: "acceptFriendRequest",
        value: function acceptFriendRequest(userId) {
          var _this4 = this;

          var loggedInUserId = this.afAuth.auth.currentUser.uid; // Delete friend request.

          this.deleteFriendRequest(userId);
          this.loadingProvider.show();
          this.dataProvider.getUser(loggedInUserId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (account) {
            var friends = account.payload.val().friends;

            if (!friends) {
              friends = [userId];
            } else {
              friends.push(userId);
            } // Add both users as friends.


            _this4.dataProvider.getUser(loggedInUserId).update({
              friends: friends
            }).then(function (success) {
              _this4.dataProvider.getUser(userId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (account) {
                var friends = account.payload.val().friends;

                if (!friends) {
                  friends = [loggedInUserId];
                } else {
                  friends.push(loggedInUserId);
                }

                _this4.dataProvider.getUser(userId).update({
                  friends: friends
                }).then(function (success) {
                  _this4.loadingProvider.hide();
                }).catch(function (error) {
                  _this4.loadingProvider.hide();
                });
              });
            }).catch(function (error) {
              _this4.loadingProvider.hide();
            });
          });
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
      }, {
        type: _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], FirebaseService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map