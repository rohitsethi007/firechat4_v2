(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64], {
    /***/
    "edcM":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js ***!
      \***********************************************************************/

    /*! exports provided: ion_split_pane */

    /***/
    function edcM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_split_pane", function () {
        return SplitPane;
      });
      /* harmony import */


      var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core-80bde1aa.js */
      "54nT");
      /* harmony import */


      var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config-3c7f3790.js */
      "AfW+");

      var SPLIT_PANE_MAIN = 'split-pane-main';
      var SPLIT_PANE_SIDE = 'split-pane-side';
      var QUERY = {
        'xs': '(min-width: 0px)',
        'sm': '(min-width: 576px)',
        'md': '(min-width: 768px)',
        'lg': '(min-width: 992px)',
        'xl': '(min-width: 1200px)',
        'never': ''
      };

      var SplitPane = /*#__PURE__*/function () {
        function SplitPane(hostRef) {
          _classCallCheck(this, SplitPane);

          Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.visible = false;
          /**
           * If `true`, the split pane will be hidden.
           */

          this.disabled = false;
          /**
           * When the split-pane should be shown.
           * Can be a CSS media query expression, or a shortcut expression.
           * Can also be a boolean expression.
           */

          this.when = QUERY['lg'];
          this.ionSplitPaneVisible = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionSplitPaneVisible", 7);
        }

        _createClass(SplitPane, [{
          key: "visibleChanged",
          value: function visibleChanged(visible) {
            var detail = {
              visible: visible,
              isPane: this.isPane.bind(this)
            };
            this.ionSplitPaneVisible.emit(detail);
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            this.styleChildren();
            this.updateState();
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            if (this.rmL) {
              this.rmL();
              this.rmL = undefined;
            }
          }
        }, {
          key: "updateState",
          value: function updateState() {
            var _this = this;

            if (this.rmL) {
              this.rmL();
              this.rmL = undefined;
            } // Check if the split-pane is disabled


            if (this.disabled) {
              this.visible = false;
              return;
            } // When query is a boolean


            var query = this.when;

            if (typeof query === 'boolean') {
              this.visible = query;
              return;
            } // When query is a string, let's find first if it is a shortcut


            var mediaQuery = QUERY[query] || query; // Media query is empty or null, we hide it

            if (mediaQuery.length === 0) {
              this.visible = false;
              return;
            }

            if (window.matchMedia) {
              // Listen on media query
              var callback = function callback(q) {
                _this.visible = q.matches;
              };

              var mediaList = window.matchMedia(mediaQuery);
              mediaList.addListener(callback);

              this.rmL = function () {
                return mediaList.removeListener(callback);
              };

              this.visible = mediaList.matches;
            }
          }
        }, {
          key: "isPane",
          value: function isPane(element) {
            if (!this.visible) {
              return false;
            }

            return element.parentElement === this.el && element.classList.contains(SPLIT_PANE_SIDE);
          }
        }, {
          key: "styleChildren",
          value: function styleChildren() {
            var contentId = this.contentId;
            var children = this.el.children;
            var nu = this.el.childElementCount;
            var foundMain = false;

            for (var i = 0; i < nu; i++) {
              var child = children[i];
              var isMain = contentId !== undefined && child.id === contentId;

              if (isMain) {
                if (foundMain) {
                  console.warn('split pane cannot have more than one main node');
                  return;
                }

                foundMain = true;
              }

              setPaneClass(child, isMain);
            }

            if (!foundMain) {
              console.warn('split pane does not have a specified main node');
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _class;

            var mode = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
            return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, "split-pane-".concat(mode), true), _defineProperty(_class, 'split-pane-visible', this.visible), _class)
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
              "visible": ["visibleChanged"],
              "disabled": ["updateState"],
              "when": ["updateState"]
            };
          }
        }, {
          key: "style",
          get: function get() {
            return ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-main),:host(.split-pane-visible) ::slotted(.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){-ms-flex:1;flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){-ms-flex-order:-1;order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host{--border:0.55px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:var(--border);border-left:0}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){min-width:var(--side-min-width);max-width:var(--side-max-width);border-right:0;border-left:var(--border)}";
          }
        }]);

        return SplitPane;
      }();

      var setPaneClass = function setPaneClass(el, isMain) {
        var toAdd;
        var toRemove;

        if (isMain) {
          toAdd = SPLIT_PANE_MAIN;
          toRemove = SPLIT_PANE_SIDE;
        } else {
          toAdd = SPLIT_PANE_SIDE;
          toRemove = SPLIT_PANE_MAIN;
        }

        var classList = el.classList;
        classList.add(toAdd);
        classList.remove(toRemove);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=64-es5.js.map