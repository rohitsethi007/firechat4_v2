(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16], {
    /***/
    "059i":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js ***!
      \*********************************************************************/

    /*! exports provided: ion_checkbox */

    /***/
    function i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_checkbox", function () {
        return Checkbox;
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


      var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./helpers-46f4a262.js */
      "aiEM");
      /* harmony import */


      var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme-18cbe2cc.js */
      "Dl6n");

      var Checkbox = /*#__PURE__*/function () {
        function Checkbox(hostRef) {
          var _this = this;

          _classCallCheck(this, Checkbox);

          Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.inputId = "ion-cb-".concat(checkboxIds++);
          /**
           * The name of the control, which is submitted with the form data.
           */

          this.name = this.inputId;
          /**
           * If `true`, the checkbox is selected.
           */

          this.checked = false;
          /**
           * If `true`, the checkbox will visually appear as indeterminate.
           */

          this.indeterminate = false;
          /**
           * If `true`, the user cannot interact with the checkbox.
           */

          this.disabled = false;
          /**
           * The value of the toggle does not mean if it's checked or not, use the `checked`
           * property for that.
           *
           * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
           * it's only used when the toggle participates in a native `<form>`.
           */

          this.value = 'on';

          this.onClick = function () {
            _this.setFocus();

            _this.checked = !_this.checked;
            _this.indeterminate = false;
          };

          this.onFocus = function () {
            _this.ionFocus.emit();
          };

          this.onBlur = function () {
            _this.ionBlur.emit();
          };

          this.ionChange = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionChange", 7);
          this.ionFocus = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionFocus", 7);
          this.ionBlur = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBlur", 7);
          this.ionStyle = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionStyle", 7);
        }

        _createClass(Checkbox, [{
          key: "componentWillLoad",
          value: function componentWillLoad() {
            this.emitStyle();
          }
        }, {
          key: "checkedChanged",
          value: function checkedChanged(isChecked) {
            this.ionChange.emit({
              checked: isChecked,
              value: this.value
            });
            this.emitStyle();
          }
        }, {
          key: "disabledChanged",
          value: function disabledChanged() {
            this.emitStyle();
          }
        }, {
          key: "emitStyle",
          value: function emitStyle() {
            this.ionStyle.emit({
              'checkbox-checked': this.checked,
              'interactive-disabled': this.disabled
            });
          }
        }, {
          key: "setFocus",
          value: function setFocus() {
            if (this.buttonEl) {
              this.buttonEl.focus();
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _Object$assign,
                _this2 = this;

            var inputId = this.inputId,
                indeterminate = this.indeterminate,
                disabled = this.disabled,
                checked = this.checked,
                value = this.value,
                color = this.color,
                el = this.el;
            var labelId = inputId + '-lbl';
            var mode = Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
            var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);

            if (label) {
              label.id = labelId;
            }

            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, this.name, checked ? value : '', disabled);
            var path = indeterminate ? Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", {
              d: "M6 12L18 12"
            }) : Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", {
              d: "M5.9,12.5l3.8,3.8l8.8-8.8"
            });

            if (mode === 'md') {
              path = indeterminate ? Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", {
                d: "M2 12H22"
              }) : Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", {
                d: "M1.73,12.91 8.1,19.28 22.79,4.59"
              });
            }

            return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
              onClick: this.onClick,
              role: "checkbox",
              "aria-disabled": disabled ? 'true' : null,
              "aria-checked": "".concat(checked),
              "aria-labelledby": labelId,
              "class": Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(color)), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'in-item', Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el)), _defineProperty(_Object$assign, 'checkbox-checked', checked), _defineProperty(_Object$assign, 'checkbox-disabled', disabled), _defineProperty(_Object$assign, 'checkbox-indeterminate', indeterminate), _defineProperty(_Object$assign, 'interactive', true), _Object$assign))
            }, Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", {
              "class": "checkbox-icon",
              viewBox: "0 0 24 24"
            }, path), Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
              type: "button",
              onFocus: this.onFocus,
              onBlur: this.onBlur,
              disabled: this.disabled,
              ref: function ref(btnEl) {
                return _this2.buttonEl = btnEl;
              }
            }));
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
              "checked": ["checkedChanged"],
              "disabled": ["disabledChanged"]
            };
          }
        }, {
          key: "style",
          get: function get() {
            return ":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.23);--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:20px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:20px;margin-inline-end:20px}}";
          }
        }]);

        return Checkbox;
      }();

      var checkboxIds = 0;
      /***/
    }
  }]);
})();
//# sourceMappingURL=16-es5.js.map