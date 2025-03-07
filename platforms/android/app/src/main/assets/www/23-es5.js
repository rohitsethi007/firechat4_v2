(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23], {
    /***/
    "wvyA":
    /*!******************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js ***!
      \******************************************************************/

    /*! exports provided: ion_fab, ion_fab_button, ion_fab_list */

    /***/
    function wvyA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_fab", function () {
        return Fab;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_fab_button", function () {
        return FabButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_fab_list", function () {
        return FabList;
      });
      /* harmony import */


      var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core-80bde1aa.js */
      "54nT");
      /* harmony import */


      var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config-3c7f3790.js */
      "AfW+");
      /* harmony import */


      var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme-18cbe2cc.js */
      "Dl6n");

      var Fab = /*#__PURE__*/function () {
        function Fab(hostRef) {
          var _this = this;

          _classCallCheck(this, Fab);

          Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the fab will display on the edge of the header if
           * `vertical` is `"top"`, and on the edge of the footer if
           * it is `"bottom"`. Should be used with a `fixed` slot.
           */

          this.edge = false;
          /**
           * If `true`, both the `ion-fab-button` and all `ion-fab-list` inside `ion-fab` will become active.
           * That means `ion-fab-button` will become a `close` icon and `ion-fab-list` will become visible.
           */

          this.activated = false;

          this.onClick = function () {
            var hasList = !!_this.el.querySelector('ion-fab-list');

            var getButton = _this.getFab();

            var isButtonDisabled = getButton && getButton.disabled;

            if (hasList && !isButtonDisabled) {
              _this.activated = !_this.activated;
            }
          };
        }

        _createClass(Fab, [{
          key: "activatedChanged",
          value: function activatedChanged() {
            var activated = this.activated;
            var fab = this.getFab();

            if (fab) {
              fab.activated = activated;
            }

            Array.from(this.el.querySelectorAll('ion-fab-list')).forEach(function (list) {
              list.activated = activated;
            });
          }
        }, {
          key: "componentDidLoad",
          value: function componentDidLoad() {
            if (this.activated) {
              this.activatedChanged();
            }
          }
          /**
           * Close an active FAB list container.
           */

        }, {
          key: "close",
          value: function () {
            var _close = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.activated = false;

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function close() {
              return _close.apply(this, arguments);
            }

            return close;
          }()
        }, {
          key: "getFab",
          value: function getFab() {
            return this.el.querySelector('ion-fab-button');
          }
        }, {
          key: "render",
          value: function render() {
            var _class;

            var horizontal = this.horizontal,
                vertical = this.vertical,
                edge = this.edge;
            var mode = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
            return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, "fab-horizontal-".concat(horizontal), horizontal !== undefined), _defineProperty(_class, "fab-vertical-".concat(vertical), vertical !== undefined), _defineProperty(_class, 'fab-edge', edge), _class)
            }, Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "activated": ["activatedChanged"]
            };
          }
        }, {
          key: "style",
          get: function get() {
            return ":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]).fab-horizontal-center,:host-context([dir=rtl]):host(.fab-horizontal-center){left:unset;right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]).fab-horizontal-start,:host-context([dir=rtl]):host(.fab-horizontal-start){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]).fab-horizontal-end,:host-context([dir=rtl]):host(.fab-horizontal-end){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}";
          }
        }]);

        return Fab;
      }();

      var FabButton = /*#__PURE__*/function () {
        function FabButton(hostRef) {
          var _this2 = this;

          _classCallCheck(this, FabButton);

          Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the fab button will be show a close icon.
           */

          this.activated = false;
          /**
           * If `true`, the user cannot interact with the fab button.
           */

          this.disabled = false;
          /**
           * When using a router, it specifies the transition direction when navigating to
           * another page using `href`.
           */

          this.routerDirection = 'forward';
          /**
           * If `true`, the fab button will show when in a fab-list.
           */

          this.show = false;
          /**
           * If `true`, the fab button will be translucent.
           * Only applies when the mode is `"ios"` and the device supports
           * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
           */

          this.translucent = false;
          /**
           * The type of the button.
           */

          this.type = 'button';

          this.onFocus = function () {
            _this2.ionFocus.emit();
          };

          this.onBlur = function () {
            _this2.ionBlur.emit();
          };

          this.ionFocus = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionFocus", 7);
          this.ionBlur = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBlur", 7);
        }

        _createClass(FabButton, [{
          key: "render",
          value: function render() {
            var _Object$assign,
                _this3 = this;

            var el = this.el,
                disabled = this.disabled,
                color = this.color,
                href = this.href,
                activated = this.activated,
                show = this.show,
                translucent = this.translucent,
                size = this.size;
            var inList = Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-fab-list', el);
            var mode = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
            var TagType = href === undefined ? 'button' : 'a';
            var attrs = TagType === 'button' ? {
              type: this.type
            } : {
              download: this.download,
              href: href,
              rel: this.rel,
              target: this.target
            };
            return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "aria-disabled": disabled ? 'true' : null,
              "class": Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color)), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'fab-button-in-list', inList), _defineProperty(_Object$assign, 'fab-button-translucent-in-list', inList && translucent), _defineProperty(_Object$assign, 'fab-button-close-active', activated), _defineProperty(_Object$assign, 'fab-button-show', show), _defineProperty(_Object$assign, 'fab-button-disabled', disabled), _defineProperty(_Object$assign, 'fab-button-translucent', translucent), _defineProperty(_Object$assign, 'ion-activatable', true), _defineProperty(_Object$assign, 'ion-focusable', true), _defineProperty(_Object$assign, "fab-button-".concat(size), size !== undefined), _Object$assign))
            }, Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, {
              "class": "button-native",
              disabled: disabled,
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              onClick: function onClick(ev) {
                return Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["o"])(href, ev, _this3.routerDirection);
              }
            }), Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "close-icon"
            }, Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              name: "close",
              lazy: false
            })), Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "button-inner"
            }, Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), mode === 'md' && Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "style",
          get: function get() {
            return ":host{--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast,#fff);--background-hover-opacity:.08;--transition:background-color,opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native:after{bottom:0;content:\"\";opacity:0}.button-inner,.button-native:after{left:0;right:0;top:0;position:absolute}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native:after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:var(--ion-color-primary-tint,#4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1;--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--color-activated);--transition:0.2s transform cubic-bezier(0.25,1.11,0.78,1.59)}:host,:host(.ion-activated){--box-shadow:0 4px 16px rgba(0,0,0,0.12)}:host(.ion-activated){--transform:scale(1.1);--transition:0.2s transform ease-out}.close-icon,::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light,#f4f5f8);--background-activated:var(--ion-color-light-shade,#d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint,#f5f6f9);--color:var(--ion-color-light-contrast,#000);--color-activated:var(--ion-color-light-contrast,#000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms,opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native:after{background:var(--ion-color-shade)}:host(.ion-color.ion-activated) .button-native,:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native:after,:host(.ion-color.ion-focused) .button-native:after{background:var(--ion-color-shade)}\@media (any-hover:hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native:after{background:var(--ion-color-tint)}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.9);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.8);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb,244,245,248),0.9);--background-hover:rgba(var(--ion-color-light-rgb,244,245,248),0.8);--background-focused:rgba(var(--ion-color-light-rgb,244,245,248),0.82)}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){\@media (any-hover:hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb),.9)}:host(.ion-color.ion-activated.fab-button-translucent) .button-native,:host(.ion-color.ion-focused.fab-button-translucent) .button-native{background:var(--ion-color-base)}}";
          }
        }]);

        return FabButton;
      }();

      var FabList = /*#__PURE__*/function () {
        function FabList(hostRef) {
          _classCallCheck(this, FabList);

          Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          /**
           * If `true`, the fab list will show all fab buttons in the list.
           */

          this.activated = false;
          /**
           * The side the fab list will show on relative to the main fab button.
           */

          this.side = 'bottom';
        }

        _createClass(FabList, [{
          key: "activatedChanged",
          value: function activatedChanged(activated) {
            var fabs = Array.from(this.el.querySelectorAll('ion-fab-button')); // if showing the fabs add a timeout, else show immediately

            var timeout = activated ? 30 : 0;
            fabs.forEach(function (fab, i) {
              setTimeout(function () {
                return fab.show = activated;
              }, i * timeout);
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _class2;

            var mode = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
            return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, 'fab-list-active', this.activated), _defineProperty(_class2, "fab-list-side-".concat(this.side), true), _class2)
            }, Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "activated": ["activatedChanged"]
            };
          }
        }, {
          key: "style",
          get: function get() {
            return ":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list),:host(.fab-list-side-top) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:5px;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;right:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-start){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-start,:host-context([dir=rtl]):host(.fab-list-side-start){left:unset;right:unset;left:0}:host(.fab-list-side-end){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;left:0;-ms-flex-direction:row;flex-direction:row}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-end,:host-context([dir=rtl]):host(.fab-list-side-end){left:unset;right:unset;right:0}";
          }
        }]);

        return FabList;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=23-es5.js.map