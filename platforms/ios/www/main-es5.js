(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/ritasethi/Documents/GitHub/firechat4_v2/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2MtO":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating-input/rating-input.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MtO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button class=\"rating-icon\" fill=\"clear\" shape=\"round\" *ngFor=\"let r of range; let i = index\" (click)=\"rate(i + 1)\">\n\t<ion-icon slot=\"icon-only\" [name]=\"value === undefined ? (r === 1 ? 'star' : (r === 2 ? 'star-half' : 'star-outline')) : (value > i ? (value < i+1 ? 'star-half' : 'star') : 'star-outline')\"></ion-icon>\n</ion-button>\n";
      /***/
    },

    /***/
    "2gss":
    /*!************************************************************!*\
      !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
      \************************************************************/

    /*! exports provided: ImageShellComponent */

    /***/
    function gss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageShellComponent", function () {
        return ImageShellComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_image_shell_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./image-shell.component.html */
      "7EgT");
      /* harmony import */


      var _image_shell_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-shell.component.scss */
      "DenP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../config/app-shell.config */
      "Kt/9");

      var ImageShellComponent = /*#__PURE__*/function () {
        function ImageShellComponent(platformId) {
          _classCallCheck(this, ImageShellComponent);

          this.platformId = platformId; // To debug shell styles, change configuration in the assets/app-shell.config.json file

          this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__["AppShellConfig"].settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__["AppShellConfig"].settings.debug : false; // tslint:disable-next-line:variable-name

          this._src = ''; // tslint:disable-next-line:variable-name

          this._alt = ''; // tslint:disable-next-line:variable-name

          this._mode = '';
          this.imageLoaded = false;
        }

        _createClass(ImageShellComponent, [{
          key: "_imageLoaded",
          value: function _imageLoaded() {
            this.imageLoaded = true; // If it's a cover image then set the background-image property accordingly

            if (this._mode === 'cover') {
              this.backgroundImage = 'url(' + this._src + ')';
            }
          }
        }, {
          key: "mode",
          set: function set(val) {
            this._mode = val !== undefined && val !== null ? val : '';
          },
          get: function get() {
            return this._mode;
          }
        }, {
          key: "src",
          set: function set(val) {
            if (!this.debugMode) {
              this._src = val !== undefined && val !== null ? val : '';
            }

            if (this._mode === 'cover') {
              // Unset the background-image
              this.backgroundImage = 'unset';
            } // Show loading indicator
            // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded


            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this.platformId)) {
              this.imageLoaded = true;
            } else {
              this.imageLoaded = false;
            }
          }
        }, {
          key: "alt",
          set: function set(val) {
            this._alt = val !== undefined && val !== null ? val : '';
          }
        }]);

        return ImageShellComponent;
      }();

      ImageShellComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }];
      };

      ImageShellComponent.propDecorators = {
        imageLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['class.img-loaded']
        }],
        backgroundImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['style.backgroundImage']
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['attr.mode']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        alt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ImageShellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-image-shell',
        template: _raw_loader_image_shell_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_shell_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], ImageShellComponent);
      /***/
    },

    /***/
    "3TL5":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-wrapper/checkbox-wrapper.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TL5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-content></ng-content>\n";
      /***/
    },

    /***/
    "5ofZ":
    /*!************************************************************!*\
      !*** ./src/app/shell/text-shell/text-shell.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function ofZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  transform-style: preserve-3d;\n  background-clip: content-box;\n}\n\n:host(:not([animation])) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"1\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"2\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host(:not([animation]))[lines=\"3\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 77% , var(--text-shell-background, #FFF) 77%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host(:not([animation]))[lines=\"4\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 40% , var(--text-shell-background, #FFF) 40%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host(:not([animation]))[lines=\"5\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host(:not([animation]))[lines=\"6\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 38% , var(--text-shell-background, #FFF) 38%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host(:not([animation])).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=bouncing]) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"1\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"2\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 38% , var(--text-shell-background, #FFF) 38%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"3\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"4\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 49% , var(--text-shell-background, #FFF) 49%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"5\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 38% , var(--text-shell-background, #FFF) 38%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"6\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 50% , var(--text-shell-background, #FFF) 50%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n  -webkit-animation: 0;\n          animation: 0;\n}\n\n:host([animation=gradient]) {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n:host([animation=gradient])::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 44% , var(--text-shell-background, #FFF) 44%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 48% , var(--text-shell-background, #FFF) 48%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 43% , var(--text-shell-background, #FFF) 43%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 46% , var(--text-shell-background, #FFF) 46%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=gradient]).text-loaded::before, :host([animation=gradient]).text-loaded::after {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9ib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSw0QkFBQTtFQUdBLDRCQUFBO0FBUkY7O0FBWUE7RUNQSSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGZUY7O0FBVUk7RUNiQSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGc0JGOztBQUdJO0VDZ0JBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGNkJGOztBQUpJO0VDZ0JBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRm9DRjs7QUFYSTtFQ2dCQSw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGMkNGOztBQWxCSTtFQ2dCQSx3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGa0RGOztBQXpCSTtFQ2dCQSxtc0NBQUE7RUFDQSx3a0NBQUE7RUFDQSxrZUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGeURGOztBQTNCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBNkJKOztBQXhCQTtFR3pCSSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VEbkJGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhWRjs7QUd2REk7RUFDRTtJQUNFLHdEQUFBO0VIeUROO0VHdERJO0lBQ0UseURBQUE7RUh3RE47QUFDRjs7QUcvREk7RUFDRTtJQUNFLHdEQUFBO0VIeUROO0VHdERJO0lBQ0UseURBQUE7RUh3RE47QUFDRjs7QUF4Q0k7RUcvQkEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFRG5CRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIV0Y7O0FHNUVJO0VBQ0U7SUFDRSx3REFBQTtFSDhFTjtFRzNFSTtJQUNFLHlEQUFBO0VINkVOO0FBQ0Y7O0FBN0RJO0VHa0JBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhnQ0Y7O0FHaERJO0VBQ0U7SUFDRSw0SUFBQTtFSGtETjtFRy9DSTtJQUNFLDhJQUFBO0VIaUROO0FBQ0Y7O0FHeERJO0VBQ0U7SUFDRSw0SUFBQTtFSGtETjtFRy9DSTtJQUNFLDhJQUFBO0VIaUROO0FBQ0Y7O0FBbEZJO0VHa0JBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIcURGOztBR3JFSTtFQUNFO0lBQ0UsZ09BQUE7RUh1RU47RUdwRUk7SUFDRSxtT0FBQTtFSHNFTjtBQUNGOztBQXZHSTtFR2tCQSw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUgwRUY7O0FHMUZJO0VBQ0U7SUFDRSxvVEFBQTtFSDRGTjtFR3pGSTtJQUNFLHdUQUFBO0VIMkZOO0FBQ0Y7O0FBNUhJO0VHa0JBLHcrQkFBQTtFQUNBLGszQkFBQTtFQUNBLDZZQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSCtGRjs7QUcvR0k7RUFDRTtJQUNFLHdZQUFBO0VIaUhOO0VHOUdJO0lBQ0UsNllBQUE7RUhnSE47QUFDRjs7QUFqSkk7RUdrQkEsbXNDQUFBO0VBQ0Esd2tDQUFBO0VBQ0Esa2VBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIb0hGOztBR3BJSTtFQUNFO0lBQ0UsNGRBQUE7RUhzSU47RUduSUk7SUFDRSxrZUFBQTtFSHFJTjtBQUNGOztBQWpLRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7VUFBQSxZQUFBO0FBa0tKOztBQTdKQTtFQUNFLDZCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VFL0RBLDRHQUFBO0FGZ09GOztBQTFKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtS0FDRTtFQUNGLDRCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQTJKSjs7QUF4SkU7RUFDRTtJQUNFLDZCQUFBO0VBMEpKO0VBdkpFO0lBQ0UsNEJBQUE7RUF5Sko7QUFDRjs7QUFoS0U7RUFDRTtJQUNFLDZCQUFBO0VBMEpKO0VBdkpFO0lBQ0UsNEJBQUE7RUF5Sko7QUFDRjs7QUFySkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VDeEZBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZnUUY7O0FBcEpJO0VFNUdGLDRHQUFBO0FGbVFGOztBQW5KTTtFQ3BHRiw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGMFFGOztBQTlKSTtFRTVHRiw0R0FBQTtBRjZRRjs7QUE3Sk07RUN2RUYsdVZBQUE7RUFDQSxnUEFBQTtFQUNBLDhJQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZvUkY7O0FBeEtJO0VFNUdGLDRHQUFBO0FGdVJGOztBQXZLTTtFQ3ZFRixrakJBQUE7RUFDQSxzY0FBQTtFQUNBLG1PQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY4UkY7O0FBbExJO0VFNUdGLDRHQUFBO0FGaVNGOztBQWpMTTtFQ3ZFRiw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGd1NGOztBQTVMSTtFRTVHRiw0R0FBQTtBRjJTRjs7QUEzTE07RUN2RUYsdytCQUFBO0VBQ0EsazNCQUFBO0VBQ0EsNllBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRmtURjs7QUF0TUk7RUU1R0YsNEdBQUE7QUZxVEY7O0FBck1NO0VDdkVGLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY0VEY7O0FBdE1FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF3TUo7O0FBdE1JO0VBRUUsZ0JBQUE7RUFDQSxvQkFBQTtVQUFBLFlBQUE7QUF1TU4iLCJmaWxlIjoic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL3RleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9taXhpbnMvYmFja2dyb3VuZC1oZWlnaHRcIjtcbkBpbXBvcnQgXCIuL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZFwiO1xuQGltcG9ydCBcIi4vbWl4aW5zL2JvdW5jaW5nLWxpbmVzLWJhY2tncm91bmRcIjtcblxuJG1heC1saW5lcy1jb3VudDogNjtcblxuOmhvc3Qge1xuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiAjRUVFO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlcjogM3B4O1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kKTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLy8gVG8gZml4IDFweCBsaW5lIG1pc2FsaWdubWVudCBpbiBjaHJvbWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZ3JvdW5kLWNsaXBcbiAgLy8gKEkgYWxzbyBub3RpY2VkIHRoYXQgaWYgSSBzZXQgdGhlIGNvbG9yIHRvIGEgc29saWQgY29sb3IgaW5zdGVhZCBvZiBoYXZpbmcgb3BhY2l0eSwgdGhlIGlzc3VlIGRvZXNuJ3QgaGFwcGVuKVxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xufVxuXG4vLyBEZWZhdWx0IHN0eWxlcy4gV2hlbiBubyBhbmltYXRpb24gYXR0cmlidXRlIGlzIHByb3ZpZGVkXG46aG9zdCg6bm90KFthbmltYXRpb25dKSkge1xuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcbiAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoMSk7XG5cbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XG4gICAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkaSk7XG4gICAgfVxuICB9XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIEJvdW5jaW5nIGxpbmUgbG9hZGluZyBhbmltYXRpb25cbjpob3N0KFthbmltYXRpb249XCJib3VuY2luZ1wiXSkge1xuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcbiAgQGluY2x1ZGUgYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgxKTtcblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIEBpbmNsdWRlIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoJGkpO1xuICAgIH1cbiAgfVxuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAvLyAwIGlzIHRoZSBkZWZhdWx0IHZhbHVlIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTk2MzA0NC8xMTE2OTU5KVxuICAgIGFuaW1hdGlvbjogMDtcbiAgfVxufVxuXG4vLyBCYWNrZ3JvdW5kIGdyYWRpZW50IGJlbmVhdGggbWFza2VkIGxpbmVzXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcbiAgLS10ZXh0LXNoZWxsLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6ICNEREQ7XG5cblxuICAvLyBDYWxjdWxhdGUgZGVmYXVsdCBoZWlnaHQgZm9yIDEgbGluZVxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAxKTtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSA4JSwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZCkgMzMlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcbiAgICAwJXtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gICAgfVxuXG4gICAgMTAwJXtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcbiAgICB9XG4gIH1cblxuICAvLyBUaGUgbWFza3NcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcblxuICAgIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKDEpO1xuICB9XG5cbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XG4gICAgICAvLyBDYWxjdWxhdGUgZGVmYXVsdCBoZWlnaHQgZm9yICRpIGxpbmVzXG4gICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkaSk7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYW5pbWF0aW9uOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4vdXRpbHNcIjtcbkBpbXBvcnQgXCIuL2JhY2tncm91bmQtaGVpZ2h0XCI7XG5cbkBtaXhpbiBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGxpbmUtYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRiZy15LXBvczogMHB4O1xuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XG4gICRiZy1pbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKSc7XG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG5cbiAgQGlmICgkbGluZXMgPT0gMSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7JGJnLWltYWdlfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAjeyRiZy1wb3NpdGlvbn07XG4gICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9IEBlbHNlIHtcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlLCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlKSk7XG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAyKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcblxuICAgICAgLy8gQWRkIG5ldyBsaW5lXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXG4gICAgICBAaWYgKCRpID09ICRsaW5lcykge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xuICAgICAgfVxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJyk7XG4gICAgICAvLyBUaGlzIG5ldyBsaW5lIHN0YXJ0cyBiZWxvdyB0aGUgcHJ2aW91c2x5IGFkZGVkIHNlcGFyYXRvcixcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLXNwYWNpbmcgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAxKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7dG8tc3RyaW5nKCRiZy1pbWFnZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG5cbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGxpbmVzKTtcbn1cbiIsIkBtaXhpbiBiYWNrZ3JvdW5kLWhlaWdodCgkcHJvcGVydHksICRsaW5lczogMSkge1xuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xuXG4gICN7JHByb3BlcnR5fTogY2FsYygoI3skbGluZS1oZWlnaHR9ICogI3skbGluZXN9KSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGxpbmVzfSAtIDEpKSk7XG59XG4iLCJAaW1wb3J0IFwiLi91dGlsc1wiO1xuXG5AbWl4aW4gYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGxpbmUtYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRiZy15LXBvczogMHB4O1xuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XG4gICRiZy1pbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKSc7XG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG4gICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiAnODUlICcgKyAkbGluZS1oZWlnaHQ7XG4gICRiZy1zaXplLWFuaW1hdGlvbi10bzogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcblxuICBAaWYgKCRsaW5lcyA9PSAxKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3skYmctaW1hZ2V9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7JGJnLXBvc2l0aW9ufTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemV9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVMaW5lO1xuXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTGluZSB7XG4gICAgICAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplLWFuaW1hdGlvbi1mcm9tfTtcbiAgICAgIH1cblxuICAgICAgMTAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplLWFuaW1hdGlvbi10b307XG4gICAgICB9XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlLCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlKSk7XG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAyKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcbiAgICAgIC8vIHNlcGFyYXRvciBsaW5lcyBoYXZlIHRoZSBzYW1lIGluaXRpYWwgYW5kIGVuZCBzdGF0ZSwgdGh1cyBubyBhbmltYXRpb24gb2NjdXJzXG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tdG86IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tdG8sICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcblxuICAgICAgLy8gQWRkIG5ldyBsaW5lXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXG4gICAgICBAaWYgKCRpID09ICRsaW5lcykge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XG4gICAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICc1NSUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xuICAgICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnNzUlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknKTtcbiAgICAgIC8vIFRoaXMgbmV3IGxpbmUgc3RhcnRzIGJlbG93IHRoZSBwcnZpb3VzbHkgYWRkZWQgc2VwYXJhdG9yLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtc3BhY2luZyB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDEpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tdG86IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tdG8sICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7dG8tc3RyaW5nKCRiZy1pbWFnZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XG5cbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAgICAgMCV7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICcsICcpfTtcbiAgICAgIH1cblxuICAgICAgMTAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZS1hbmltYXRpb24tdG8sICcsICcpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkbGluZXMpO1xuXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "7Bqo":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-hide-password/show-hide-password.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-content></ng-content>\n<a class=\"type-toggle\" (click)=\"toggleShow()\">\n\t<ion-icon class=\"show-option\" [hidden]=\"show\" src=\"./assets/sample-icons/auth/eye-show.svg\"></ion-icon>\n\t<ion-icon class=\"hide-option\" [hidden]=\"!show\" src=\"./assets/sample-icons/auth/eye-hide.svg\"></ion-icon>\n  <!-- In case you want to use text instead of icons -->\n\t<!--\n  <span class=\"show-option\" [hidden]=\"show\">show</span>\n\t<span class=\"hide-option\" [hidden]=\"!show\">hide</span>\n  -->\n</a>\n";
      /***/
    },

    /***/
    "7EgT":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/image-shell/image-shell.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EgT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-spinner class=\"spinner\"></ion-spinner>\n<img class=\"inner-img\" [src]=\"_src\" [alt]=\"_alt\" (load)=\"_imageLoaded()\"/>\n<ng-content *ngIf=\"_mode === 'cover'\"></ng-content>\n";
      /***/
    },

    /***/
    "7ONW":
    /*!*****************************************************************!*\
      !*** ./src/app/reaction-list-modal/reaction-list-modal.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ReactionListModalPage */

    /***/
    function ONW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactionListModalPage", function () {
        return ReactionListModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reaction_list_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reaction-list-modal.page.html */
      "wKnH");
      /* harmony import */


      var _reaction_list_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reaction-list-modal.page.scss */
      "habw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ReactionListModalPage = /*#__PURE__*/function () {
        function ReactionListModalPage(modal, navParam) {
          _classCallCheck(this, ReactionListModalPage);

          this.modal = modal;
          this.navParam = navParam;
          this.items = [];
          var r = this.navParam.data.reactions;
          this.items = Object.keys(r).map(function (e) {
            return r[e];
          });
          this.items.forEach(function (i) {
            if (i.reactionType.some(function (el) {
              return el === 'Thanks';
            })) {
              i.reactionThanks = true;
            }

            if (i.reactionType.some(function (el) {
              return el === 'Hug';
            })) {
              i.reactionHug = true;
            }
          });
        }

        _createClass(ReactionListModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modal.dismiss();
          }
        }]);

        return ReactionListModalPage;
      }();

      ReactionListModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      ReactionListModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reaction-list-modal',
        template: _raw_loader_reaction_list_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reaction_list_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]])], ReactionListModalPage);
      /***/
    },

    /***/
    "7ch9":
    /*!*********************************************!*\
      !*** ./src/app/services/loading.service.ts ***!
      \*********************************************/

    /*! exports provided: LoadingService */

    /***/
    function ch9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingCtrl, toastCtrl) {
          _classCallCheck(this, LoadingService);

          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
        }

        _createClass(LoadingService, [{
          key: "show",
          value: function show() {
            var _this = this;

            if (!this.loading) {
              this.loadingCtrl.create({
                spinner: 'circles',
                duration: 2000
              }).then(function (res) {
                _this.loading = res;

                _this.loading.present();
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 3000,
                        position: 'top',
                        animated: true,
                        color: 'secondary',
                        cssClass: 'toastCss',
                        mode: 'ios'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], LoadingService);
      /***/
    },

    /***/
    "8E8H":
    /*!*************************************************!*\
      !*** ./src/app/imagemodal/imagemodal.module.ts ***!
      \*************************************************/

    /*! exports provided: ImagemodalPageModule */

    /***/
    function E8H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagemodalPageModule", function () {
        return ImagemodalPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _imagemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./imagemodal.page */
      "S0ud");

      var routes = [{
        path: '',
        component: _imagemodal_page__WEBPACK_IMPORTED_MODULE_6__["ImagemodalPage"]
      }];

      var ImagemodalPageModule = function ImagemodalPageModule() {
        _classCallCheck(this, ImagemodalPageModule);
      };

      ImagemodalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_imagemodal_page__WEBPACK_IMPORTED_MODULE_6__["ImagemodalPage"]]
      })], ImagemodalPageModule);
      /***/
    },

    /***/
    "A0kb":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/show-hide-password/show-hide-password.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ShowHidePasswordComponent */

    /***/
    function A0kb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHidePasswordComponent", function () {
        return ShowHidePasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_show_hide_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./show-hide-password.component.html */
      "7Bqo");
      /* harmony import */


      var _show_hide_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./show-hide-password.component.scss */
      "iSCB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ShowHidePasswordComponent = /*#__PURE__*/function () {
        function ShowHidePasswordComponent() {
          _classCallCheck(this, ShowHidePasswordComponent);

          this.show = false;
        }

        _createClass(ShowHidePasswordComponent, [{
          key: "toggleShow",
          value: function toggleShow() {
            this.show = !this.show;

            if (this.show) {
              this.input.type = 'text';
            } else {
              this.input.type = 'password';
            }
          }
        }]);

        return ShowHidePasswordComponent;
      }();

      ShowHidePasswordComponent.ctorParameters = function () {
        return [];
      };

      ShowHidePasswordComponent.propDecorators = {
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"]]
        }]
      };
      ShowHidePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-hide-password',
        template: _raw_loader_show_hide_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_hide_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ShowHidePasswordComponent);
      /***/
    },

    /***/
    "A5lX":
    /*!*******************************************!*\
      !*** ./src/app/popover/popover.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function A5lX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wb3Zlci9wb3BvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgd2lkdGg6IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "B7gC":
    /*!**************************************************************!*\
      !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
      \**************************************************************/

    /*! exports provided: AspectRatioComponent */

    /***/
    function B7gC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AspectRatioComponent", function () {
        return AspectRatioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_aspect_ratio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./aspect-ratio.component.html */
      "x9SX");
      /* harmony import */


      var _aspect_ratio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aspect-ratio.component.scss */
      "oXAZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AspectRatioComponent = /*#__PURE__*/function () {
        function AspectRatioComponent() {
          _classCallCheck(this, AspectRatioComponent);

          this.ratioPadding = '0px';
        }

        _createClass(AspectRatioComponent, [{
          key: "ratio",
          set: function set(ratio) {
            ratio = ratio !== undefined && ratio !== null ? ratio : {
              w: 1,
              h: 1
            };
            var heightRatio = ratio.h / ratio.w * 100 + '%'; // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)

            this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
          }
        }]);

        return AspectRatioComponent;
      }();

      AspectRatioComponent.ctorParameters = function () {
        return [];
      };

      AspectRatioComponent.propDecorators = {
        ratioPadding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['style.padding']
        }],
        ratio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AspectRatioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-aspect-ratio',
        template: _raw_loader_aspect_ratio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_aspect_ratio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AspectRatioComponent);
      /***/
    },

    /***/
    "BF4z":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tag-modal/tag-modal.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function BF4z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ModalPage</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)=\"closeModal()\">Close</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<!-- Checkboxes in a List -->\n<ion-list>\n  <ion-item *ngFor=\"let entry of form\">\n    <ion-label>{{entry.val}}</ion-label>\n    <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n  </ion-item>\n</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "D39k":
    /*!*******************************!*\
      !*** ./src/app/pipes/date.ts ***!
      \*******************************/

    /*! exports provided: DateFormatPipe */

    /***/
    function D39k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function () {
        return DateFormatPipe;
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

      var DateFormatPipe = /*#__PURE__*/function () {
        function DateFormatPipe() {
          _classCallCheck(this, DateFormatPipe);
        }

        _createClass(DateFormatPipe, [{
          key: "transform",
          value: function transform(date, args) {
            return moment__WEBPACK_IMPORTED_MODULE_2__(new Date(date)).fromNow();
          }
        }]);

        return DateFormatPipe;
      }();

      DateFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'DateFormat'
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DateFormatPipe);
      /***/
    },

    /***/
    "DenP":
    /*!**************************************************************!*\
      !*** ./src/app/shell/image-shell/image-shell.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function DenP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n:host > .spinner {\n  display: none;\n}\n:host::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n:host:not([mode=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n:host:not([mode=cover]) > .inner-img {\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n}\n:host:not([mode=cover]).img-loaded::before {\n  display: none;\n}\n:host:not([mode=cover]).img-loaded > .inner-img {\n  opacity: 1;\n  visibility: visible;\n}\n:host[mode=cover] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n:host[mode=cover]::before, :host[mode=cover] > .spinner {\n  z-index: -1;\n}\n:host[mode=cover] > .inner-img {\n  display: none;\n  visibility: hidden;\n}\n:host[mode=cover].img-loaded::before {\n  display: none;\n}\n:host([animation=gradient]) {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n:host([animation=gradient])::before {\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n:host([animation=gradient]).img-loaded::before {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n:host([animation=spinner]) {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n:host([animation=spinner]) > .spinner {\n  display: block;\n  position: absolute;\n  top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n:host([animation=spinner]).img-loaded > .spinner {\n  display: none;\n  visibility: hidden;\n}\n:host(.add-overlay) {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n:host(.add-overlay).img-loaded::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLGdDQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBQUY7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNFLHFEQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUpOO0FBU007RUFDRSxhQUFBO0FBUFI7QUFVTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVJSO0FBY0U7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FBWko7QUFlSTtFQUVFLFdBQUE7QUFkTjtBQWlCSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWZOO0FBb0JNO0VBQ0UsYUFBQTtBQWxCUjtBQXdCQTtFQUNFLHNDQUFBO0VBQ0EsbUNBQUE7QUFyQkY7QUF3QkU7RUFDRSxrS0FDRTtFQUNGLDRCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQXZCSjtBQTRCSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7VUFBQSxZQUFBO0FBMUJOO0FBOEJFO0VBQ0U7SUFDRSw2QkFBQTtFQTVCSjtFQStCRTtJQUNFLDRCQUFBO0VBN0JKO0FBQ0Y7QUFzQkU7RUFDRTtJQUNFLDZCQUFBO0VBNUJKO0VBK0JFO0lBQ0UsNEJBQUE7RUE3Qko7QUFDRjtBQWlDQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUE5QkY7QUFnQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtFQUNBLDJEQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQTlCSjtBQWtDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWhDTjtBQXFDQTtFQUNFLG1EQUFBO0FBbENGO0FBc0NJO0VBQ0UsY0FBQTtFQUNBLGlEQUFBO0FBcENOIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDBweDtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICB6LWluZGV4OiAyO1xuXG4gIC8vIEJ5IGRlZmF1bHQsIGhpZGUgdGhlIHNwaW5uZXJcbiAgJiA+IC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLy8gTG9hZGluZyBiYWNrZ3JvdW5kXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgJjpub3QoW21vZGU9XCJjb3ZlclwiXSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciwgb3BhY2l0eSAuNXMgbGluZWFyO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gICAgfVxuXG4gICAgJi5pbWctbG9hZGVkIHtcbiAgICAgIC8vIEhpZGUgbG9hZGluZyBiYWNrZ3JvdW5kIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYgPiAuaW5uZXItaW1nIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJZiBpdCBpcyBtb2RlOiBjb3ZlclxuICAmW21vZGU9XCJjb3ZlclwiXSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgLy8gSW4gY292ZXIgbW9kZSwgd2UgY2FuIGhhdmUgY29udGVudCBpbnNpZGUgdGhlIGVsZW1lbnQsIHRodXMgd2UgbmVlZCB0byBwdXQgdGhlc2UgZWxlbWVudHMgYmVuZWF0aFxuICAgICY6OmJlZm9yZSxcbiAgICAmID4gLnNwaW5uZXIge1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1cImdyYWRpZW50XCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgOCUsIHZhcigtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgJi5pbWctbG9hZGVkIHtcbiAgICAvLyBSZXNldCBiYWNrZ3JvdW5kIGFuaW1hdGlvbiBvbmNlIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBhbmltYXRpb246IDA7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XG4gICAgMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxuICAgIH1cblxuICAgIDEwMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXG4gICAgfVxuICB9XG59XG5cbjpob3N0KFthbmltYXRpb249XCJzcGlubmVyXCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAyOHB4O1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6ICNDQ0M7XG5cbiAgJiA+IC5zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgICB3aWR0aDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yKTtcbiAgfVxuXG4gICYuaW1nLWxvYWRlZCB7XG4gICAgJiA+IC5zcGlubmVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5hZGQtb3ZlcmxheSkge1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgJi5pbWctbG9hZGVkIHtcbiAgICAvLyBBZGQgYmFja2dyb3VuZCBvdmVybGF5IGFmdGVyIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "EnSQ":
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /*! exports provided: DataService */

    /***/
    function EnSQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var _image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./image.service */
      "mnRn"); // import * as firebase from 'firebase';


      var DataService = /*#__PURE__*/function () {
        function DataService(afAuth, storage, firestore, imageProvider) {
          _classCallCheck(this, DataService);

          this.afAuth = afAuth;
          this.storage = storage;
          this.firestore = firestore;
          this.imageProvider = imageProvider;
        } // Get all users


        _createClass(DataService, [{
          key: "getUsers",
          value: function getUsers() {
            return this.firestore.collection('accounts');
          } // Get user with username

        }, {
          key: "getUserWithUsername",
          value: function getUserWithUsername(username) {
            return this.firestore.collection('accounts').ref.where('username', '==', username);
          } // Get logged in user data

        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loggedInUserId;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.afAuth.currentUser.then(function (data) {
                        return data.uid;
                      });

                    case 2:
                      loggedInUserId = _context2.sent;
                      return _context2.abrupt("return", this.getUser(loggedInUserId));

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getCurrentUserId",
          value: function getCurrentUserId() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loggedInUserId;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.afAuth.currentUser.then(function (data) {
                        return data.uid;
                      });

                    case 2:
                      loggedInUserId = _context3.sent;
                      return _context3.abrupt("return", loggedInUserId);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
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
          } // Get friend requests given the userId.

        }, {
          key: "getFriendRequests",
          value: function getFriendRequests(userId) {
            return this.firestore.doc('requests/' + userId); // return this.afdb.list('/requests', ref => ref.orderByChild('receiver').equalTo(userId));
          } // Get conversation given the conversationId.

        }, {
          key: "getConversation",
          value: function getConversation(conversationId) {
            return this.firestore.doc('conversations/' + conversationId); // return this.afdb.object('/conversations/' + conversationId);
          } // Get conversations of the current logged in user.

        }, {
          key: "getConversations",
          value: function getConversations() {
            return this.firestore.doc('accounts/' + this.getCurrentUserId()).collection('conversations'); // return this.afdb.list('/accounts/' + this.afAuth.currentUser.uid + '/conversations');
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var loggedInUserId;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.afAuth.currentUser.then(function (data) {
                        return data.uid;
                      });

                    case 2:
                      loggedInUserId = _context4.sent;
                      return _context4.abrupt("return", this.firestore.doc('accounts/' + loggedInUserId).collection('conversations').ref.where('blocked', '==', true));

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // Get Polls of the logged in user.

        }, {
          key: "getPollDetails",
          value: function getPollDetails(pId) {
            return this.firestore.doc('posts/' + pId);
          } // Get Polls of the logged in user.

        }, {
          key: "getGroupPolls",
          value: function getGroupPolls(groupId) {
            return this.firestore.doc('groups/' + groupId).collection('polls');
          } // Get Resources of the logged in user.

        }, {
          key: "getGroupResources",
          value: function getGroupResources(groupId) {
            return this.firestore.doc('groups/' + groupId).collection('resources'); // return this.afdb.object('/groups/' + groupId + '/resources/');
          } // Get Events of the logged in user.

        }, {
          key: "getGroupEvents",
          value: function getGroupEvents(groupId) {
            return this.firestore.doc('groups/' + groupId).collection('events'); // return this.afdb.object('/groups/' + groupId + '/events/');
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
          } // Get Events details of the logged in user.

        }, {
          key: "getEventDetails",
          value: function getEventDetails(eId) {
            return this.firestore.doc('posts/' + eId);
          } // Get Polls of the logged in user.

        }, {
          key: "getGroupMembers",
          value: function getGroupMembers(groupId) {
            return this.firestore.doc('groups/' + groupId).collection('members'); // return this.afdb.object('/groups/' + groupId + '/members/');
          }
        }, {
          key: "updatePollMembers",
          value: function updatePollMembers(pollKey, pollData) {
            var _this2 = this;

            this.firestore.doc('posts/' + pollKey).update({
              data: pollData
            }).then(function () {
              var increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.increment(1);

              _this2.firestore.collection('posts').doc(pollKey).update({
                totalPollCount: increment
              });
            });
          }
        }, {
          key: "updatePollComments",
          value: function updatePollComments(pollKey, comments) {
            this.firestore.doc('polls/' + pollKey).update({
              comments: comments
            });
          }
        }, {
          key: "addPoll",
          value: function addPoll(poll) {
            return this.firestore.collection('polls').add(poll);
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
          key: "addResource",
          value: function addResource(resource) {
            return this.firestore.collection('resources').add(resource);
          }
        }, {
          key: "addPost",
          value: function addPost(post) {
            var _this3 = this;

            return new Promise(function (resolve) {
              _this3.imageProvider.uploadPostPhotos(post.postMedia).then(function (postMediaUrls) {
                post.postMedia = [];

                if (postMediaUrls) {
                  post.postMedia = postMediaUrls;
                }

                return resolve(_this3.firestore.collection('posts').add(post));
              });
            });
          }
        }, {
          key: "addEvent",
          value: function addEvent(event) {
            return this.firestore.collection('events').add(event);
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
            var _this4 = this;

            return this.firestore.collection('posts').doc(postKey).collection('reviews').add(review).then(function () {
              var increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.increment(1);

              _this4.firestore.collection('posts').doc(postKey).update({
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
          key: "addFirstEventReview",
          value: function addFirstEventReview(eventKey, review) {
            var r = [];
            this.firestore.doc('events/' + eventKey).update({
              reviews: r
            });
            this.updateEventReviews(eventKey, review);
          }
        }, {
          key: "addPostReactions",
          value: function addPostReactions(postKey, reaction) {
            var _this5 = this;

            return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(function () {
              var increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.increment(1);

              _this5.firestore.collection('posts').doc(postKey).update({
                totalReactionCount: increment
              });
            });
          }
        }, {
          key: "updatePostReactions",
          value: function updatePostReactions(postKey, reaction) {
            var _this6 = this;

            return this.firestore.collection('posts').doc(postKey).collection('reactions').doc(reaction.key).update(reaction).then(function () {
              var increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.increment(1);

              _this6.firestore.collection('posts').doc(postKey).update({
                totalReactionCount: increment
              });
            });
          }
        }, {
          key: "removePostReaction",
          value: function removePostReaction(postKey, reactionKey) {
            var _this7 = this;

            this.firestore.collection('posts').doc(postKey).collection('reactions').doc(reactionKey)["delete"]().then(function () {
              var decrement = firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.increment(-1);

              _this7.firestore.collection('posts').doc(postKey).update({
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
          key: "addFirstResourceReactions",
          value: function addFirstResourceReactions(resourceKey, reaction) {
            var r = [];
            this.firestore.doc('resources/' + resourceKey).update({
              reactions: r
            }); // this.afdb.object('/resources/' + resourceKey).update( {
            //   reactions: r
            // });

            return this.updateResourceReactions(resourceKey, reaction);
          }
        }, {
          key: "removeEventReaction",
          value: function removeEventReaction(eventKey, reactionKey) {
            this.firestore.doc('/events/' + eventKey + '/reactions/' + reactionKey)["delete"](); // var adaRef = this.afdb.database.ref('/events/' + eventKey + '/reactions/' + reactionKey);
            // adaRef.remove()
            //   .then(function() {
            //     console.log("Remove succeeded.")
            //   })
            //   .catch(function(error) {
            //     console.log("Remove failed: " + error.message)
            //   });  
          }
        }, {
          key: "updateEventReactions",
          value: function updateEventReactions(eventKey, reaction) {
            // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
            this.firestore.doc('/events/' + eventKey).collection('/reactions/').add(reaction); // var newRef = this.afdb.list('/events/' + eventKey + '/reactions/').push(reaction);
            // return newRef.key;
          }
        }, {
          key: "addFirstEventReactions",
          value: function addFirstEventReactions(eventKey, reaction) {
            var r = [];
            this.firestore.doc('events/' + eventKey).update({
              reactions: r
            }); // this.afdb.object('/events/' + eventKey).update( {
            //   reactions: r
            // });

            return this.updateEventReactions(eventKey, reaction);
          }
        }, {
          key: "removeResourceReaction",
          value: function removeResourceReaction(resourceKey, reactionKey) {
            this.firestore.doc('/resources/' + resourceKey + '/reactions/' + reactionKey)["delete"](); // var adaRef = this.afdb.database.ref('/resources/' + resourceKey + '/reactions/' + reactionKey);
            // adaRef.remove()
            //   .then(function() {
            //     console.log("Remove succeeded.")
            //   })
            //   .catch(function(error) {
            //     console.log("Remove failed: " + error.message)
            //   });
          }
        }, {
          key: "updatePollReviews",
          value: function updatePollReviews(pollId, review) {
            // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
            this.firestore.doc('/polls/' + pollId).collection('/reviews/').add(review); //    this.afdb.list('/polls/' + pollId + '/reviews/').push(review);
          }
        }, {
          key: "addFirstPollReview",
          value: function addFirstPollReview(pollId, review) {
            var r = [];
            this.firestore.doc('polls/' + pollId).update({
              reactions: r
            });
            this.updatePollReviews(pollId, review);
          }
        }, {
          key: "getFromStorageAsync",
          value: function getFromStorageAsync(section) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log('inside getFromStorageAsync');
                      _context5.next = 3;
                      return this.storage.get(section).then(function (val) {
                        return val;
                      });

                    case 3:
                      return _context5.abrupt("return", _context5.sent);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // Get messages of the group given the Id.

        }, {
          key: "getGroupPosts",
          value: function getGroupPosts(groupId) {
            return this.firestore.doc('groups/' + groupId).collection('posts');
          }
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]
        }];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]])], DataService);
      /***/
    },

    /***/
    "GCFz":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imagemodal/imagemodal.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function GCFz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"content\" (click)=\"close()\" tappable>\n    <img src={{img}} />\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "HUk6":
    /*!*********************************************!*\
      !*** ./src/app/tag-modal/tag-modal.page.ts ***!
      \*********************************************/

    /*! exports provided: TagModalPage */

    /***/
    function HUk6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagModalPage", function () {
        return TagModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tag_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tag-modal.page.html */
      "BF4z");
      /* harmony import */


      var _tag_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tag-modal.page.scss */
      "qVJx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var TagModalPage = /*#__PURE__*/function () {
        function TagModalPage(modal, route, router) {
          _classCallCheck(this, TagModalPage);

          this.modal = modal;
          this.route = route;
          this.router = router;
          this.form = [];
          this.form = [];
          this.groupTags = this.route.snapshot.params.groupTags;
          this.form = this.groupTags;
        }

        _createClass(TagModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            var data = [];
            this.form.forEach(function (element) {
              data.push(element);
            });
            this.modal.dismiss(data, null, null);
          }
        }]);

        return TagModalPage;
      }();

      TagModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      TagModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tag-modal',
        template: _raw_loader_tag_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tag_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], TagModalPage);
      /***/
    },

    /***/
    "IFuf":
    /*!***************************************!*\
      !*** ./src/app/pipes/reverse.pipe.ts ***!
      \***************************************/

    /*! exports provided: ReversePipe */

    /***/
    function IFuf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReversePipe", function () {
        return ReversePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReversePipe = /*#__PURE__*/function () {
        function ReversePipe() {
          _classCallCheck(this, ReversePipe);
        }

        _createClass(ReversePipe, [{
          key: "transform",
          value: function transform(value) {
            return value.slice().reverse();
          }
        }]);

        return ReversePipe;
      }();

      ReversePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'reverse'
      })], ReversePipe);
      /***/
    },

    /***/
    "IUqK":
    /*!***************************************************************************!*\
      !*** ./src/app/components/countdown-timer/countdown-timer.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function IUqK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 0px;\n  --countdown-fill-background: transparent;\n  --countdown-fill-shadow: none;\n  --countdown-value-color: #CCC;\n  --countdown-unit-color: #CCC;\n  --countdown-time-flex-direction: row-reverse;\n  display: block;\n}\n:host .countdown {\n  margin: var(--countdown-margin);\n  padding: var(--countdown-padding);\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n:host .time {\n  padding: var(--countdown-time-padding);\n  margin: var(--countdown-time-margin);\n  display: flex;\n  flex-direction: var(--countdown-time-flex-direction);\n  align-items: center;\n  justify-content: center;\n}\n:host .time .time-unit {\n  display: block;\n  color: var(--countdown-unit-color);\n  font-size: 0.7em;\n  text-align: center;\n  text-transform: uppercase;\n  width: 2ex;\n}\n:host .time .time-value {\n  display: block;\n  color: var(--countdown-value-color);\n  text-align: center;\n  font-size: 1em;\n  line-height: 1em;\n  min-height: 1em;\n  min-width: 2.2ex;\n  min-width: 2.1ch;\n}\n:host .inner-time {\n  margin: var(--countdown-inner-time-margin);\n  padding: var(--countdown-inner-time-padding);\n}\n:host([fill=countdown]) .countdown {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n:host([fill=time]) .time {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n:host([fill=inner-time]) .inner-time {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFFQSw2QkFBQTtFQUNBLDRCQUFBO0VBRUEsNENBQUE7RUFFQSxjQUFBO0FBVkY7QUFZRTtFQUNFLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSx1QkFBQTtFQUNBLGlCQUFBO0FBWEo7QUFjRTtFQUNFLHNDQUFBO0VBQ0Esb0NBQUE7RUFFQSxhQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBYko7QUFlSTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFiTjtBQWdCSTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUtBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFsQk47QUFzQkU7RUFDRSwwQ0FBQTtFQUNBLDRDQUFBO0FBcEJKO0FBeUJFO0VBM0VBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FBc0RGO0FBd0JFO0VBakZBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FBNkRGO0FBdUJFO0VBdkZBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FBb0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZpbGwtY29udGFpbmVyKCl7XG4gIGJvcmRlcjogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jb3VudGRvd24tZmlsbC1zaGFkb3cpO1xufVxuXG46aG9zdCB7XG4gIC0tY291bnRkb3duLW1hcmdpbjogMHB4O1xuICAtLWNvdW50ZG93bi1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLXRpbWUtbWFyZ2luOiAwcHg7XG4gIC0tY291bnRkb3duLXRpbWUtcGFkZGluZzogMHB4O1xuICAtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbjogMnB4O1xuICAtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmc6IDBweDtcblxuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlcjogbm9uZTtcbiAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiBub25lO1xuXG4gIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiAjQ0NDO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiAjQ0NDO1xuXG4gIC0tY291bnRkb3duLXRpbWUtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5jb3VudGRvd24ge1xuICAgIG1hcmdpbjogdmFyKC0tY291bnRkb3duLW1hcmdpbik7XG4gICAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLXBhZGRpbmcpO1xuXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cblxuICAudGltZSB7XG4gICAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLXRpbWUtcGFkZGluZyk7XG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tdGltZS1tYXJnaW4pO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogdmFyKC0tY291bnRkb3duLXRpbWUtZmxleC1kaXJlY3Rpb24pO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAudGltZS11bml0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IHZhcigtLWNvdW50ZG93bi11bml0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgd2lkdGg6IDJleDtcbiAgICB9XG5cbiAgICAudGltZS12YWx1ZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbG9yOiB2YXIoLS1jb3VudGRvd24tdmFsdWUtY29sb3IpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgbWluLWhlaWdodDogMWVtO1xuXG4gICAgICAvLyBNYWtlIHN1cmUgd2UgYWx3YXlzIGhhdmUgc3BhY2UgZm9yIHR3byBjaGFyYWN0ZXJzXG4gICAgICAvLyBBcyBjaCAod2lkdGggb2YgdGhlIGNoYXJhY3RlciAnMCcpIHVuaXQgaXMgbm90IDEwMCUgc3VwcG9ydGVkLCB3ZSB3aWxsIHVzZSBleCAoaGVpZ2h0IG9mIHRoZSAneCcgY2hhcmFjdGVyKSBhcyBhIGZhbGxiYWNrXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Nzcy91bml0cy12YWx1ZXMvXG4gICAgICBtaW4td2lkdGg6IDIuMmV4OyAvLyBUaGUgJ3gnIGNoYXJhY3RlciBpcyBzZW1pLXNxdWFyZSBjaGFyLCB0aGF0J3Mgd2h5IHdlIHNldCAyLjJleFxuICAgICAgbWluLXdpZHRoOiAyLjFjaDsgLy8gY2ggaXMgdGhlIG9ubHkgZm9udCB1bml0IGJhc2VkIG9uIHRoZSB3aWR0aCBvZiBjaGFyYWN0ZXJzXG4gICAgfVxuICB9XG5cbiAgLmlubmVyLXRpbWUge1xuICAgIG1hcmdpbjogdmFyKC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24taW5uZXItdGltZS1wYWRkaW5nKTtcbiAgfVxufVxuXG46aG9zdChbZmlsbD1cImNvdW50ZG93blwiXSkge1xuICAuY291bnRkb3duIHtcbiAgICBAaW5jbHVkZSBmaWxsLWNvbnRhaW5lcigpO1xuICB9XG59XG5cbjpob3N0KFtmaWxsPVwidGltZVwiXSkge1xuICAudGltZSB7XG4gICAgQGluY2x1ZGUgZmlsbC1jb250YWluZXIoKTtcbiAgfVxufVxuXG46aG9zdChbZmlsbD1cImlubmVyLXRpbWVcIl0pIHtcbiAgLmlubmVyLXRpbWUge1xuICAgIEBpbmNsdWRlIGZpbGwtY29udGFpbmVyKCk7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "Irq3":
    /*!*******************************!*\
      !*** ./src/app/pipes/poll.ts ***!
      \*******************************/

    /*! exports provided: PollPipe */

    /***/
    function Irq3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PollPipe", function () {
        return PollPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PollPipe = /*#__PURE__*/function () {
        function PollPipe() {
          _classCallCheck(this, PollPipe);
        }

        _createClass(PollPipe, [{
          key: "transform",
          // PollPipe
          // Filter poll by name
          value: function transform(polls, search) {
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

        return PollPipe;
      }();

      PollPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pollFilter'
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PollPipe);
      /***/
    },

    /***/
    "Kt/9":
    /*!**************************************************!*\
      !*** ./src/app/shell/config/app-shell.config.ts ***!
      \**************************************************/

    /*! exports provided: AppShellConfig */

    /***/
    function Kt9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppShellConfig", function () {
        return AppShellConfig;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); // Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/


      var AppShellConfig_1;

      var AppShellConfig = AppShellConfig_1 = /*#__PURE__*/function () {
        function AppShellConfig(http) {
          _classCallCheck(this, AppShellConfig);

          this.http = http;
        } // Simplified version from: https://stackoverflow.com/a/49707898/1116959


        _createClass(AppShellConfig, [{
          key: "load",
          value: function load() {
            var configFile = './assets/config/app-shell.config' + (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() ? '.prod' : '') + '.json';
            return this.http.get(configFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (configSettings) {
              AppShellConfig_1.settings = configSettings;
            })).toPromise()["catch"](function (error) {
              console.log("Could not load file '".concat(configFile, "'"), error);
            });
          }
        }]);

        return AppShellConfig;
      }();

      AppShellConfig.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AppShellConfig = AppShellConfig_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AppShellConfig);
      /***/
    },

    /***/
    "KuNH":
    /*!*************************************************!*\
      !*** ./src/app/imagemodal/imagemodal.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function KuNH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".scroll-content {\n  background-image: none;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.7) !important;\n  display: flex;\n  align-items: center;\n}\n\n.content img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2Vtb2RhbC9pbWFnZW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDRSxXQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9pbWFnZW1vZGFsL2ltYWdlbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "M0Xy":
    /*!*****************************************!*\
      !*** ./src/app/popover/popover.page.ts ***!
      \*****************************************/

    /*! exports provided: PopoverPage */

    /***/
    function M0Xy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
        return PopoverPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_popover_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./popover.page.html */
      "g1fN");
      /* harmony import */


      var _popover_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popover.page.scss */
      "A5lX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var PopoverPage = /*#__PURE__*/function () {
        function PopoverPage(route, popCtrl) {
          _classCallCheck(this, PopoverPage);

          this.route = route;
          this.popCtrl = popCtrl;
          this.message = this.route.snapshot.params.message;
          this.groupId = this.route.snapshot.params.groupId;
        }

        _createClass(PopoverPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            //this.app.getRootNav().push(NewResourcePage, { message: this.message, groupId: this.groupId });
            this.popCtrl.dismiss();
          }
        }]);

        return PopoverPage;
      }();

      PopoverPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }];
      };

      PopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popover',
        template: _raw_loader_popover_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popover_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])], PopoverPage);
      /***/
    },

    /***/
    "MKys":
    /*!************************************************!*\
      !*** ./src/app/services/auth-guard.service.ts ***!
      \************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function MKys(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data.service */
      "EnSQ");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(router, dataService) {
          _classCallCheck(this, AuthGuardService);

          this.router = router;
          this.dataService = dataService;
        }

        _createClass(AuthGuardService, [{
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

        return AuthGuardService;
      }();

      AuthGuardService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      };

      AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], AuthGuardService);
      /***/
    },

    /***/
    "Ox2M":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile-modal/user-profile-modal.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ox2M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Update Profile</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button (click)=\"dismissModal()\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"forms-validations-content\">\n    <form class=\"validations-form\" [formGroup]=\"myForm\">\n      <ion-list class=\"inputs-list\" lines=\"none\">\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">Full Name:</ion-label>\n          <ion-input type=\"text\" class=\"myform\" placeholder=\"Full name\" formControlName=\"name\" [(ngModel)]=\"user.name\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">Username:</ion-label>\n          <ion-input placeholder=\"Username\" class=\"myform\"  formControlName=\"username\" type=\"text\" [(ngModel)]=\"user.username\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">My Story:</ion-label>\n          <ion-textarea rows=\"10\" formControlName=\"bio\" class=\"myform\"  placeholder=\"Status\" [(ngModel)]=\"user.description\"></ion-textarea>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input placeholder=\"Email\" class=\"myform\"  type=\"text\" formControlName=\"email\" [(ngModel)]=\"user.email\" disabled></ion-input>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button class=\"save\" color=\"secondary\" expand=\"block\" (click)=\"save()\">Save Changes</ion-button>\n        </div>\n      </ion-list>\n    </form>\n</ion-content>";
      /***/
    },

    /***/
    "OyRk":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review-modal/review-modal.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function OyRk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Write a Review - {{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"filters-content\">\n  <ion-item-group class=\"filters-group\">\n  <form [formGroup]=\"ratingForm\">\n    <ion-list class=\"ratings-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Comments</ion-label>\n        <ion-textarea rows=\"6\"  placeholder=\"Enter more information here...\" type=\"text\" formControlName=\"review\" clearInput placeholder=\"Enter any additional comments that might help other members (optional) ...\"></ion-textarea>\n      </ion-item>\n      <ion-item class=\"rating-item\">\n        <ion-label class=\"rating-label\">Rate</ion-label>\n        <app-rating-input formControlName=\"rating\" max=\"5\"></app-rating-input>\n      </ion-item>\n    </ion-list>\n\n    <hr class=\"details-divider\">\n    <ion-button class=\"write-reviews-btn\" color=\"dark\" (click)=\"submitReview()\" expand=\"block\" fill=\"solid\">Submit</ion-button>\n\n  </form>\n  </ion-item-group>\n</ion-content>\n";
      /***/
    },

    /***/
    "Qj2i":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/text-shell/text-shell.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qj2i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container>{{ _data }}</ng-container>\n";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-SG": "zavE",
        "./en-SG.js": "zavE",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
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
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "S0ud":
    /*!***********************************************!*\
      !*** ./src/app/imagemodal/imagemodal.page.ts ***!
      \***********************************************/

    /*! exports provided: ImagemodalPage */

    /***/
    function S0ud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagemodalPage", function () {
        return ImagemodalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_imagemodal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./imagemodal.page.html */
      "GCFz");
      /* harmony import */


      var _imagemodal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./imagemodal.page.scss */
      "KuNH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ImagemodalPage = /*#__PURE__*/function () {
        function ImagemodalPage(modal) {
          _classCallCheck(this, ImagemodalPage);

          this.modal = modal;
        }

        _createClass(ImagemodalPage, [{
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

        return ImagemodalPage;
      }();

      ImagemodalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      ImagemodalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-imagemodal',
        template: _raw_loader_imagemodal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_imagemodal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], ImagemodalPage);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "y2f/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "p74H");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router, afAuth) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.afAuth = afAuth;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this8 = this;

            this.platform.ready().then(function () {
              _this8.statusBar.styleDefault();

              _this8.splashScreen.hide();

              _this8.platform.backButton.subscribe(function () {
                return null;
              });

              _this8.afAuth.onAuthStateChanged(function (user) {
                if (user == null) _this8.router.navigateByUrl('walkthrough', {
                  replaceUrl: true,
                  skipLocationChange: true
                });else _this8.router.navigateByUrl('/app/tabs/tab1', {
                  skipLocationChange: true,
                  replaceUrl: true
                });
              });
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])], AppComponent);
      /***/
    },

    /***/
    "VkdX":
    /*!*****************************************************************!*\
      !*** ./src/app/user-profile-modal/user-profile-modal.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function VkdX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlLW1vZGFsL3VzZXItcHJvZmlsZS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1Q0FBQTtBQUFKOztBQUlJO0VBQ0MsMkNBQUE7QUFETDs7QUFHSztFQUNFLDJFQUFBO0FBRFA7O0FBR087RUFDRSxlQUFBO0FBRFQ7O0FBSVM7RUFDRSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUZYOztBQUlXO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUFGYjs7QUFRSztFQUNFLDBCQUFBO0FBTlAiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUtbW9kYWwvdXNlci1wcm9maWxlLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgfVxuXG4gIC5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IHtcbiAgICAudmFsaWRhdGlvbnMtZm9ybSB7XG4gICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG4gXG4gICAgIC5pbnB1dHMtbGlzdCB7XG4gICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuIFxuICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgIH1cbiAgICAgICAuZXJyb3ItY29udGFpbmVyIHtcbiAgICAgICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gXG4gICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgfVxuIFxuICAgICAuc3VibWl0LWJ0biB7XG4gICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgIH1cbiAgIH1cbiBcbiB9XG5cbiAgIl19 */";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "XmS3":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function XmS3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94LXdyYXBwZXIvY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "Xs6v":
    /*!*****************************************************************!*\
      !*** ./src/app/user-profile-modal/user-profile-modal.module.ts ***!
      \*****************************************************************/

    /*! exports provided: UserProfileModalPageModule */

    /***/
    function Xs6v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileModalPageModule", function () {
        return UserProfileModalPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _user_profile_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-profile-modal.page */
      "l0GK");

      var routes = [{
        path: '',
        component: _user_profile_modal_page__WEBPACK_IMPORTED_MODULE_6__["UserProfileModalPage"]
      }];

      var UserProfileModalPageModule = function UserProfileModalPageModule() {
        _classCallCheck(this, UserProfileModalPageModule);
      };

      UserProfileModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_user_profile_modal_page__WEBPACK_IMPORTED_MODULE_6__["UserProfileModalPage"]]
      })], UserProfileModalPageModule);
      /***/
    },

    /***/
    "YXOY":
    /*!*******************************************************************!*\
      !*** ./src/app/reaction-list-modal/reaction-list-modal.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ReactionListModalPageModule */

    /***/
    function YXOY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactionListModalPageModule", function () {
        return ReactionListModalPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reaction-list-modal.page */
      "7ONW");

      var routes = [{
        path: '',
        component: _reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReactionListModalPage"]
      }];

      var ReactionListModalPageModule = function ReactionListModalPageModule() {
        _classCallCheck(this, ReactionListModalPageModule);
      };

      ReactionListModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReactionListModalPage"]]
      })], ReactionListModalPageModule);
      /***/
    },

    /***/
    "Z8da":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown-timer/countdown-timer.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z8da(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row class=\"countdown\">\n  <ion-col class=\"time\" *ngIf=\"_initialUnit === 'day'\">\n    <span class=\"time-unit\">D</span>\n    <div class=\"inner-time\">\n      <span class=\"time-value\">{{ _daysLeft }}</span>\n    </div>\n  </ion-col>\n  <ion-col class=\"time\" *ngIf=\"(_initialUnit === 'day' && _endingUnit !== 'day') || _initialUnit === 'hour' || _endingUnit === 'hour'\">\n    <span class=\"time-unit\">H</span>\n    <div class=\"inner-time\">\n      <span class=\"time-value\">{{ _hoursLeft }}</span>\n    </div>\n  </ion-col>\n  <ion-col class=\"time\" *ngIf=\"(_initialUnit === 'day' && (_endingUnit !== 'day' && _endingUnit !== 'hour')) || (_initialUnit === 'hour' && _endingUnit !== 'hour') || _initialUnit === 'minute'\">\n    <span class=\"time-unit\">M</span>\n    <div class=\"inner-time\">\n      <span class=\"time-value\">{{ _minutesLeft }}</span>\n    </div>\n  </ion-col>\n  <ion-col class=\"time\" *ngIf=\"_endingUnit === 'second'\">\n    <span class=\"time-unit\">S</span>\n    <div class=\"inner-time\">\n      <span class=\"time-value\">{{ _secondsLeft }}</span>\n    </div>\n  </ion-col>\n</ion-row>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule, FileReaderA */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileReaderA", function () {
        return FileReaderA;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "y2f/");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "p74H");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "NzdG");
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      "SPri");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "cGva");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "DJEK");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/file-chooser/ngx */
      "RzHS");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "G769");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "gTw3");
      /* harmony import */


      var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/contacts/ngx */
      "41F/");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "Zr1d");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./services/share.module */
      "vxGH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./imagemodal/imagemodal.module */
      "8E8H");
      /* harmony import */


      var _tag_modal_tag_modal_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./tag-modal/tag-modal.module */
      "x+G+");
      /* harmony import */


      var _user_profile_modal_user_profile_modal_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./user-profile-modal/user-profile-modal.module */
      "Xs6v");
      /* harmony import */


      var _popover_popover_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./popover/popover.module */
      "p2ut");
      /* harmony import */


      var _review_modal_review_modal_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./review-modal/review-modal.module */
      "sMbM");
      /* harmony import */


      var _reaction_list_modal_reaction_list_modal_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./reaction-list-modal/reaction-list-modal.module */
      "YXOY");
      /* harmony import */


      var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @ionic-native/chooser/ngx */
      "wi5F");
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      "Bg0J");
      /* harmony import */


      var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @ionic-native/fcm/ngx */
      "XqOP");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
          mode: 'md'
        }), _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_28__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"], _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_30__["ImagemodalPageModule"], _review_modal_review_modal_module__WEBPACK_IMPORTED_MODULE_34__["ReviewModalPageModule"], _tag_modal_tag_modal_module__WEBPACK_IMPORTED_MODULE_31__["TagModalPageModule"], _popover_popover_module__WEBPACK_IMPORTED_MODULE_33__["PopoverPageModule"], _reaction_list_modal_reaction_list_modal_module__WEBPACK_IMPORTED_MODULE_35__["ReactionListModalPageModule"], _user_profile_modal_user_profile_modal_module__WEBPACK_IMPORTED_MODULE_32__["UserProfileModalPageModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_15__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_16__["Facebook"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__["Camera"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_19__["MediaCapture"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_22__["FileTransfer"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_24__["FilePath"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_23__["FileChooser"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_17__["FirebaseX"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_25__["Geolocation"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_20__["ImagePicker"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_26__["Contacts"], _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_36__["Chooser"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_27__["Keyboard"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_37__["LocalNotifications"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_38__["FCM"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);

      var FileReaderA = /*#__PURE__*/function (_window$FileReader) {
        _inherits(FileReaderA, _window$FileReader);

        var _super = _createSuper(FileReaderA);

        function FileReaderA() {
          var _this9;

          _classCallCheck(this, FileReaderA);

          _this9 = _super.call(this);
          var zoneOriginalInstance = _this9['__zone_symbol__originalInstance'];
          return _possibleConstructorReturn(_this9, zoneOriginalInstance || _assertThisInitialized(_this9));
        }

        return FileReaderA;
      }(window.FileReader);

      window.FileReader = FileReaderA;
      /***/
    },

    /***/
    "ZGG5":
    /*!***************************************************!*\
      !*** ./src/app/review-modal/review-modal.page.ts ***!
      \***************************************************/

    /*! exports provided: ReviewModalPage */

    /***/
    function ZGG5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewModalPage", function () {
        return ReviewModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_review_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./review-modal.page.html */
      "OyRk");
      /* harmony import */


      var _review_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./review-modal.page.scss */
      "a9JK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");

      var ReviewModalPage = /*#__PURE__*/function () {
        function ReviewModalPage(modal, route, router, dataProvider, navParam, loadingProvider) {
          _classCallCheck(this, ReviewModalPage);

          this.modal = modal;
          this.route = route;
          this.router = router;
          this.dataProvider = dataProvider;
          this.navParam = navParam;
          this.loadingProvider = loadingProvider;
          this.data = this.navParam.data.data;
          this.title = this.data.title;
          this.ratingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            review: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
        }

        _createClass(ReviewModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.review = {
              review: '',
              rating: ''
            };
          }
        }, {
          key: "submitReview",
          value: function submitReview() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.loadingProvider.show();
                      this.review.review = this.ratingForm.value['review'];
                      this.review.rating = this.ratingForm.value['rating'];
                      this.loadingProvider.hide();
                      _context6.next = 6;
                      return this.modal.dismiss(this.review);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return ReviewModalPage;
      }();

      ReviewModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]
        }];
      };

      ReviewModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-review-modal',
        template: _raw_loader_review_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_review_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])], ReviewModalPage);
      /***/
    },

    /***/
    "ZpN7":
    /*!***************************************!*\
      !*** ./src/app/shell/shell.module.ts ***!
      \***************************************/

    /*! exports provided: ShellModule */

    /***/
    function ZpN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShellModule", function () {
        return ShellModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./text-shell/text-shell.component */
      "zK/y");
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./config/app-shell.config */
      "Kt/9");

      var ShellModule = function ShellModule() {
        _classCallCheck(this, ShellModule);
      };

      ShellModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"]],
        providers: [// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
        {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
          useFactory: function useFactory(appShellConfig) {
            return function () {
              return appShellConfig.load();
            };
          },
          deps: [_config_app_shell_config__WEBPACK_IMPORTED_MODULE_8__["AppShellConfig"]],
          multi: true
        }],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot()],
        exports: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"]]
      })], ShellModule);
      /***/
    },

    /***/
    "ZvGz":
    /*!***************************************!*\
      !*** ./src/environments/validator.ts ***!
      \***************************************/

    /*! exports provided: Validator */

    /***/
    function ZvGz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Validator", function () {
        return Validator;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var Validator;

      (function (Validator) {
        Validator.emailValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]];
        Validator.passwordValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]];
        Validator.nameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]];
        Validator.usernameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]];
        Validator.bioValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]];
        Validator.groupNameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]];
        Validator.groupDescriptionValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]];
        Validator.groupTagsValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]];
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

        Validator.pollNameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]];
        Validator.pollDescriptionValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]];
        Validator.pollOption1Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]];
        Validator.pollOption2Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]];
      })(Validator || (Validator = {}));
      /***/

    },

    /***/
    "a9JK":
    /*!*****************************************************!*\
      !*** ./src/app/review-modal/review-modal.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function a9JK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n  --page-color-radio-items-per-row: 5;\n  --page-color-radio-gutter: 2%;\n  --page-color-radio-width: calc((100% - (2 * var(--page-color-radio-gutter) * var(--page-color-radio-items-per-row))) / var(--page-color-radio-items-per-row));\n}\n\n.filters-content {\n  --background: var(--page-background);\n}\n\n.filters-content ion-item-divider {\n  --background: var(--page-background);\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.filters-content .range-list {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .range-list .range-item {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content .range-list .range-item .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-content .range-list .range-item .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item .checkbox-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .checkbox-list .checkbox-item ion-checkbox {\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.filters-content .radio-list .radio-group {\n  display: block;\n}\n\n.filters-content .radio-list .radio-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .radio-list .radio-item .radio-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .radio-list .radio-item ion-radio {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n}\n\n.filters-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-lightest);\n  --checkbox-tag-background: var(--ion-color-light-shade);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .radio-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  background-color: var(--page-background);\n  justify-content: space-between;\n  --radio-tag-color: #000;\n  --radio-tag-background: #FFF;\n  --radio-tag-active-color: #FFF;\n  --radio-tag-active-background: #000;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --min-height: 38px;\n  --border-radius: 8px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--radio-tag-color);\n  --ion-item-background: var(--radio-tag-background);\n  --ion-item-color: var(--radio-tag-color);\n  flex: 1;\n}\n\n.filters-content .radio-tags .radio-tag.item-radio-checked {\n  --ion-item-background: var(--radio-tag-active-background);\n  --ion-item-color: var(--radio-tag-active-color);\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .radio-tags .radio-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .radio-tags .radio-tag ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --radio-tag-color: var(--ion-color-secondary);\n  --radio-tag-background: var(--ion-color-lightest);\n  --radio-tag-active-color: var(--ion-color-lightest);\n  --radio-tag-active-background: var(--ion-color-secondary);\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .toggle-list .toggle-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .toggle-list .toggle-item .toggle-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .toggle-list .toggle-item ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.filters-content .counter-list .counter-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .counter-list .counter-item .counter-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .counter-list .counter-item .counter-value {\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n\n.filters-content .counter-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-secondary);\n  --counter-border-color: var(--ion-color-secondary);\n}\n\n.filters-content .ratings-list .rating-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .ratings-list .rating-item .rating-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .ratings-list .rating-item app-rating-input {\n  --rating-color: var(--ion-color-secondary);\n}\n\n.filters-content .color-radio-group {\n  padding: var(--page-margin) calc(var(--page-margin) - var(--page-color-radio-gutter));\n  background-color: var(--ion-color-lightest);\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: 255,255,255;\n  --color-radio-border-radius: 50%;\n}\n\n.filters-content .color-radio-group .color-radio {\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: var(--ion-color-darkest-rgb);\n  --color-radio-border-radius: 40%;\n  flex: 0 0 var(--page-color-radio-width);\n  max-width: var(--page-color-radio-width);\n  margin: var(--page-color-radio-gutter);\n}\n\n.filters-content .color-radio-group .color-radio .color-radio-inner-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.filters-content .color-radio-group ion-item.color-radio {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --border-width: 4px;\n  --border-style: solid;\n  --border-color: var(--color-radio-background);\n  --background: var(--color-radio-background);\n  --inner-padding-end: 0px;\n  --inner-border-width: 0px;\n  --min-height: initial;\n  --border-radius: var(--color-radio-border-radius);\n  border-radius: var(--color-radio-border-radius);\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked {\n  --border-color: rgba(var(--color-radio-active-border-rgb), .3) !important;\n  --box-shadow: none;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio .color-label {\n  --color: var(--color-radio-color);\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n.filters-content .color-radio-group ion-item.color-radio ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n:host-context(.md) .ratings-list,\n:host-context(.md) .counter-list,\n:host-context(.md) .toggle-list,\n:host-context(.md) .radio-list,\n:host-context(.md) .checkbox-list,\n:host-context(.md) .range-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n:host-context(.ios) .radio-tags,\n:host-context(.ios) .checkbox-tags {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3LW1vZGFsL3Jldmlldy1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWcuc2NzcyIsInNyYy90aGVtZS9taXhpbnMvaW5wdXRzL3JhZGlvLXRhZy5zY3NzIiwic3JjL3RoZW1lL21peGlucy9pbnB1dHMvY29sb3ItcmFkaW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7RUFFQSx1QkFBQTtFQUVBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSw2SkFBQTtBQVBGOztBQVdBO0VBQ0Usb0NBQUE7QUFSRjs7QUFVQztFQUNDLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFFQSxZQUFBO0FBVEY7O0FBWUU7RUFDRSwyQ0FBQTtBQVZKOztBQVlJO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSx1Q0FBQTtVQUFBLHNDQUFBO0VBRUEseURBQUE7QUFaTjs7QUFjTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0FBWlI7O0FBY1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBWlY7O0FBZVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBYlY7O0FBaUJNO0VBRUUseUNBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBakJSOztBQXVCSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQXJCTjs7QUF1Qk07RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDhCQUFBO0FBckJMOztBQXdCTTtFQUNFLHVCQUFBO1VBQUEsc0JBQUE7QUF0QlI7O0FBNEJJO0VBQ0UsY0FBQTtBQTFCTjs7QUE2Qkk7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUEzQk47O0FBNkJNO0VBQ0UsZUFBQTtFQUNKLGdCQUFBO0VBQ0EscUJBQUE7RUFDQyw4QkFBQTtBQTNCTDs7QUE4Qk07RUFDRSx5QkFBQTtVQUFBLHdCQUFBO0FBNUJSOztBQWlDQztFQUNDLHdGQUFBO0VDbEhBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEb0ZGOztBQ2xGQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QURtRko7O0FDakZJO0VBQ0QsdUJBQUE7QURtRkg7O0FDaEZFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRGtGTjs7QUMvRUk7RUFDRSxZQUFBO0FEaUZOOztBQy9FTTtFQUVFLFVBQUE7QURnRlI7O0FDNUVFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUQ4RU47O0FDM0VFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRDJFSDs7QUFISTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7QUFLTjs7QUFESTtFQUNFLHdDQUFBO0FBR047O0FBRE07RUFDRSw2Q0FBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSw0REFBQTtBQUdSOztBQUVJO0VBQ0EsMkNBQUE7QUFBSjs7QUFFTTtFQUNFLCtDQUFBO0VBQ0EsdURBQUE7RUFDQSxzREFBQTtFQUNBLDREQUFBO0FBQVI7O0FBS0U7RUFDRSwrREFBQTtFQUNGLHdDQUFBO0VBQ0UsOEJBQUE7RUV2SkYsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7QUZxSkY7O0FFbkpDO0VBRUcsb0JBQUE7RUFDQSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0Usa0JBQUE7RUFFRixvQkFBQTtFQUNFLG1CQUFBO0VBQ0YscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esd0NBQUE7RUFFRSxPQUFBO0FGa0pKOztBRWhKRTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QUZrSk47O0FFL0lJO0VBQ0UsWUFBQTtBRmlKTjs7QUUvSU07RUFFRSxVQUFBO0FGZ0pSOztBRTVJSTtFQUNELFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FGOElOOztBRTNJRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUYySUg7O0FBakNJO0VBQ0UsNkNBQUE7RUFDQSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EseURBQUE7RUFFQSxvQ0FBQTtFQUNBLG1DQUFBO0FBa0NOOztBQTdCSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQStCTjs7QUE3Qk07RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDhCQUFBO0FBK0JMOztBQTVCTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUE4QlI7O0FBeEJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FBMEJOOztBQXhCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUEwQkw7O0FBdkJNO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQXlCUjs7QUF0Qk07RUFDRSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0RBQUE7QUF3QlI7O0FBbEJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FBb0JOOztBQWxCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUFvQkw7O0FBakJNO0VBQ0UsMENBQUE7QUFtQlI7O0FBZEM7RUFFQyxxRkFBQTtFQUNBLDJDQUFBO0VHMU9BLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0FIMFBGOztBQWhCSTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2REFBQTtFQUNBLGdDQUFBO0VBRUEsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHNDQUFBO0FBaUJOOztBQWZNO0VBQ0YsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQWlCUjs7QUd4UUM7RUFFRyxxQkFBQTtFQUNGLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBR0UsaURBQUE7RUFFRiwrQ0FBQTtBSHNRRjs7QUdwUUU7RUFDQyx5RUFBQTtFQUNBLGtCQUFBO0FIc1FIOztBR3BRRztFQUNLLFVBQUE7QUhzUVI7O0FHbFFFO0VBQ0MsWUFBQTtBSG9RSDs7QUdsUU07RUFFRSxVQUFBO0FIbVFSOztBRy9QSTtFQUNFLGlDQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7QUhnUU47O0FHN1BJO0VBQ0UsV0FBQTtFQUVILFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBSDZQSDs7QUFoREU7Ozs7OztFQU1FLGdCQUFBO0VBQ0EsbUJBQUE7QUFtREo7O0FBOUNFOztFQUVFLDJDQUFBO0FBaURKIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3LW1vZGFsL3Jldmlldy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcbkBpbXBvcnQgXCIuLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL3JhZGlvLXRhZ1wiO1xuQGltcG9ydCBcIi4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY29sb3ItcmFkaW9cIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG5cbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3c6IDU7XG4gIC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXI6IDIlO1xuICAtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGg6IGNhbGMoKDEwMCUgLSAoMiAqIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSAqIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8taXRlbXMtcGVyLXJvdykpKSAvIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8taXRlbXMtcGVyLXJvdykpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5maWx0ZXJzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cblx0aW9uLWl0ZW0tZGl2aWRlciB7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXHRcdC0tcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cdFx0LS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblx0XHQtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cblx0XHRib3JkZXI6IG5vbmU7XG5cdH1cblxuICAucmFuZ2UtbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblxuICAgIC5yYW5nZS1pdGVtIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgLnJhbmdlLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgLnJhbmdlLXZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJhbmdlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5yYW5nZS1jb250cm9sIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jaGVja2JveC1saXN0IHtcbiAgICAuY2hlY2tib3gtaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgLmNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cblxuICAgICAgaW9uLWNoZWNrYm94IHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmFkaW8tbGlzdCB7XG4gICAgLnJhZGlvLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5yYWRpby1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAucmFkaW8tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuXG4gICAgICBpb24tcmFkaW8ge1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblx0LmNoZWNrYm94LXRhZ3Mge1xuXHRcdHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG5cblx0XHRAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcblxuICAgIC5jaGVja2JveC10YWcge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG4gICAgfVxuXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXG4gICAgJi5zcXVhcmUtY2hlY2tib3gtdGFncyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gICAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcbiAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAuY2hlY2tib3gtdGFnIHtcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgfVxuICAgIH1cblx0fVxuXG4gIC5yYWRpby10YWdzIHtcbiAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0XHRAaW5jbHVkZSByYWRpby10YWcoKTtcblxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xuICAgIC5yYWRpby10YWcge1xuICAgICAgLS1yYWRpby10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgLS1yYWRpby10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcblxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG4gICAgfVxuXHR9XG5cbiAgLnRvZ2dsZS1saXN0IHtcbiAgICAudG9nZ2xlLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgIC50b2dnbGUtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuXG4gICAgICBpb24tdG9nZ2xlIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvdW50ZXItbGlzdCB7XG4gICAgLmNvdW50ZXItaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgLmNvdW50ZXItbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuXG4gICAgICAuY291bnRlci12YWx1ZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgfVxuXG4gICAgICBhcHAtY291bnRlci1pbnB1dCB7XG4gICAgICAgIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJhdGluZ3MtbGlzdCB7XG4gICAgLnJhdGluZy1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAucmF0aW5nLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cblxuICAgICAgYXBwLXJhdGluZy1pbnB1dCB7XG4gICAgICAgIC0tcmF0aW5nLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIH1cbiAgICB9XG5cdH1cblxuXHQuY29sb3ItcmFkaW8tZ3JvdXAge1xuICAgIC8vIEFjY291bnQgZm9yIDIlIHN0YXJ0IGFuZCBlbmQgbWFyZ2luIHNldCBieSAuY29sb3ItdGFnIGNoaWxkc1xuXHRcdHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xuICAgIC5jb2xvci1yYWRpbyB7XG4gICAgICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xuICAgICAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xuICAgICAgLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKTtcbiAgICAgIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNDAlO1xuXG4gICAgICBmbGV4OiAwIDAgdmFyKC0tcGFnZS1jb2xvci1yYWRpby13aWR0aCk7XG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcik7XG5cbiAgICAgIC5jb2xvci1yYWRpby1pbm5lci13cmFwcGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cdFx0XHR9XG4gICAgfVxuXG5cdFx0QGluY2x1ZGUgY29sb3ItcmFkaW8oKTtcblx0fVxufVxuXG46aG9zdC1jb250ZXh0KC5tZCkge1xuICAucmF0aW5ncy1saXN0LFxuICAuY291bnRlci1saXN0LFxuICAudG9nZ2xlLWxpc3QsXG4gIC5yYWRpby1saXN0LFxuICAuY2hlY2tib3gtbGlzdCxcbiAgLnJhbmdlLWxpc3QgeyBcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbn1cblxuOmhvc3QtY29udGV4dCguaW9zKSB7XG4gIC5yYWRpby10YWdzLFxuICAuY2hlY2tib3gtdGFncyB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgfVxufVxuIiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG5cblx0LmNoZWNrYm94LXRhZyB7XG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcblxuICAgICYucm91bmRlZC10YWcge1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG5cdFx0fVxuXG5cdFx0Ji5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG5cdFx0fVxuXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgLnRhZy1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cblx0XHQudGFnLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tY2hlY2tib3gge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAuY2hlY2tib3gtaWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cdH1cbn1cbiIsIkBtaXhpbiByYWRpby10YWcoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tcmFkaW8tdGFnLWNvbG9yOiAjMDAwO1xuICAtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xuXG5cdC5yYWRpby10YWcge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0tbWluLWhlaWdodDogMzhweDtcblxuXHRcdC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG5cdFx0LS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1yYWRpby10YWctY29sb3IpO1xuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcmFkaW8tdGFnLWJhY2tncm91bmQpO1xuXHRcdC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLXJhZGlvLXRhZy1jb2xvcik7XG5cbiAgICBmbGV4OiAxO1xuXG5cdFx0Ji5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcik7XG5cdFx0fVxuXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgLnRhZy1sYWJlbCB7XG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGFnLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHRpb24tcmFkaW8ge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAucmFkaW8taWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5yYWRpby1pY29uIC5yYWRpby1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcblx0XHR9XG5cdH1cbn1cbiIsIkBtaXhpbiBjb2xvci1yYWRpbygpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1jb2xvci1yYWRpby1jb2xvcjogI0ZGRjtcbiAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xuICAtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzOiA1MCU7XG5cblx0aW9uLWl0ZW0uY29sb3ItcmFkaW8ge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuXHRcdC0tcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLXBhZGRpbmctdG9wOiAwcHg7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG5cdFx0LS1ib3JkZXItd2lkdGg6IDRweDtcblx0XHQtLWJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0LS1ib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQpO1xuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZCk7XG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0LS1taW4taGVpZ2h0OiBpbml0aWFsO1xuICAgIC8vIEJvdGggdGhlIGlvbi1pdGVtIGFuZCBpdCdzIHNoYWRvdyBkb20gaW5uZXJzIGhhdmUgYm9yZGVyLXJhZGl1cyBwcm9wZXJ0aWVzIGFwcGxpZWRcbiAgICAvLyBUaGlzIGlzIGZvciB0aGUgLml0ZW0taW5uZXIgLmlucHV0LXdyYXBwZXIgZWxlbWVudCBpbnNpZGUgdGhlIGlvbi1pdGVtIHNoYWRvdyByb290XG4gICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzKTtcbiAgICAvLyBUaGlzIGlzIGZvciB0aGUgaW9uLWl0ZW0gZWxlbWVudFxuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xuXG5cdFx0Ji5pdGVtLXJhZGlvLWNoZWNrZWQge1xuXHRcdFx0LS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2IpLCAuMykgIWltcG9ydGFudDtcblx0XHRcdC0tYm94LXNoYWRvdzogbm9uZTtcblxuXHRcdFx0LmNvbG9yLWxhYmVsIHtcbiAgICAgICAgb3BhY2l0eTogMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuXHRcdFx0b3BhY2l0eTogMC41O1xuXG4gICAgICAuY29sb3ItbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cdFx0fVxuXG4gICAgLmNvbG9yLWxhYmVsIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWNvbG9yLXJhZGlvLWNvbG9yKTtcblxuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cblxuICAgIGlvbi1yYWRpbyB7XG4gICAgICBtYXJnaW46IDBweDtcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5yYWRpby1pY29uXG5cdFx0XHR3aWR0aDogMHB4O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMHB4O1xuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLnJhZGlvLWljb24gLnJhZGlvLWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblx0fVxufVxuIl19 */";
      /***/
    },

    /***/
    "cEW6":
    /*!********************************!*\
      !*** ./src/app/pipes/group.ts ***!
      \********************************/

    /*! exports provided: GroupPipe */

    /***/
    function cEW6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupPipe", function () {
        return GroupPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GroupPipe = /*#__PURE__*/function () {
        function GroupPipe() {
          _classCallCheck(this, GroupPipe);
        }

        _createClass(GroupPipe, [{
          key: "transform",
          // GroupPipe
          // Filter group by name
          value: function transform(groups, search) {
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

        return GroupPipe;
      }();

      GroupPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'groupFilter'
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], GroupPipe);
      /***/
    },

    /***/
    "cxbk":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: environment */

    /***/
    function cxbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
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
    "dAQS":
    /*!*************************************************************************!*\
      !*** ./src/app/components/countdown-timer/countdown-timer.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CountdownTimerComponent */

    /***/
    function dAQS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownTimerComponent", function () {
        return CountdownTimerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_countdown_timer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./countdown-timer.component.html */
      "Z8da");
      /* harmony import */


      var _countdown_timer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./countdown-timer.component.scss */
      "IUqK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__); // TODO:  dayjs is throwing this ERROR:
      //        error TS2339: Property 'to' does not exist on type 'Dayjs'.
      // Luckily there's a PR that apparently fixes this (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
      // When fixed, uncomment this
      // import * as dayjs from 'dayjs';
      // When fixed, remove this


      var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_6__;

      var CountdownTimerComponent = /*#__PURE__*/function () {
        function CountdownTimerComponent() {
          var _this10 = this;

          _classCallCheck(this, CountdownTimerComponent);

          this._initialUnit = 'hour';
          this._endingUnit = 'second';
          this._updateInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000);
          this._unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); // DIVISORS
          // 60 seconds * 60 (minutes) * 24 (hours) = 86400 seconds = 1 day

          this._dayDivisor = 60 * 60 * 24; // 60 seconds * 60 (minutes) = 3600 seconds = 1 hour

          this._hourDivisor = 60 * 60; // 60 seconds = 1 minute

          this._minuteDivisor = 60;
          this._secondDivisor = 1; // MODULUS
          // Neutral modulus

          this._dayModulus = function (secondsLeft) {
            return secondsLeft;
          }; // The modulus operator (%) returns the division remainder.
          // To figure out how many hours are left after taking in consideration the days, we should do:
          //    (secondsLeft % hourModulus) / hourDivisor
          // In 1 day there are 86400 seconds, and in 1 hour 3600 seconds. 1 day + 1 hour = 90000 seconds
          //    (90000s % 86400s) / 3600s = 1h


          this._hourModulus = function (secondsLeft) {
            return secondsLeft % _this10._dayDivisor;
          };

          this._minuteModulus = function (secondsLeft) {
            return secondsLeft % _this10._hourDivisor;
          };

          this._secondModulus = function (secondsLeft) {
            return secondsLeft % _this10._minuteDivisor;
          };
        }

        _createClass(CountdownTimerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this._updateInterval.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeSubject)).subscribe(function (val) {
              var secondsLeft = _this11._endingTime.diff(dayjs(), 'second');

              _this11._daysLeft = Math.floor(_this11._dayModulus(secondsLeft) / _this11._dayDivisor);
              _this11._hoursLeft = Math.floor(_this11._hourModulus(secondsLeft) / _this11._hourDivisor);
              _this11._minutesLeft = Math.floor(_this11._minuteModulus(secondsLeft) / _this11._minuteDivisor);
              _this11._secondsLeft = Math.floor(_this11._secondModulus(secondsLeft) / _this11._secondDivisor);
            }, function (error) {
              return console.error(error);
            } // () => console.log('[takeUntil] complete')
            );
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubscribeSubject.next();

            this._unsubscribeSubject.complete();
          }
        }, {
          key: "end",
          set: function set(endingTime) {
            this._endingTime = endingTime !== undefined && endingTime !== null ? dayjs(endingTime) : dayjs();
          }
        }, {
          key: "units",
          set: function set(units) {
            // 'day', 'hour, 'minute', 'second'
            this._initialUnit = units !== undefined && units.from !== undefined && units.from !== null ? units.from : 'hour';
            this._endingUnit = units !== undefined && units.to !== undefined && units.to !== null ? units.to : 'second'; // For 'day' unit, use the default modulus
            // Adjust modulus depending on the unit

            if (this._initialUnit === 'hour') {
              // Cancelation modulus
              this._dayModulus = function (secondsLeft) {
                return 1;
              }; // Neutral modulus


              this._hourModulus = function (secondsLeft) {
                return secondsLeft;
              };
            }

            if (this._initialUnit === 'minute') {
              // Cancelation modulus
              this._dayModulus = function (secondsLeft) {
                return 1;
              };

              this._hourModulus = function (secondsLeft) {
                return 1;
              }; // Neutral modulus


              this._minuteModulus = function (secondsLeft) {
                return secondsLeft;
              };
            }

            if (this._initialUnit === 'second') {
              // Cancelation modulus
              this._dayModulus = function (secondsLeft) {
                return 1;
              };

              this._hourModulus = function (secondsLeft) {
                return 1;
              };

              this._minuteModulus = function (secondsLeft) {
                return 1;
              }; // Neutral modulus


              this._secondModulus = function (secondsLeft) {
                return secondsLeft;
              };
            }
          }
        }]);

        return CountdownTimerComponent;
      }();

      CountdownTimerComponent.ctorParameters = function () {
        return [];
      };

      CountdownTimerComponent.propDecorators = {
        end: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        units: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CountdownTimerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-countdown-timer',
        template: _raw_loader_countdown_timer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_countdown_timer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CountdownTimerComponent);
      /***/
    },

    /***/
    "dD9Q":
    /*!*********************************!*\
      !*** ./src/app/pipes/search.ts ***!
      \*********************************/

    /*! exports provided: SearchPipe */

    /***/
    function dD9Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
        return SearchPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SearchPipe = /*#__PURE__*/function () {
        function SearchPipe() {
          _classCallCheck(this, SearchPipe);
        }

        _createClass(SearchPipe, [{
          key: "transform",
          // SearchPipe
          // Filter user search results for name or username excluding the excludedIds.
          value: function transform(accounts, data) {
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

        return SearchPipe;
      }();

      SearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchFilter'
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SearchPipe);
      /***/
    },

    /***/
    "e6VL":
    /*!***********************************************************************!*\
      !*** ./src/app/components/counter-input/counter-input.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function e6VL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-counter-input {\n  --counter-background: #000;\n  --counter-color: #FFF;\n  --counter-border-color: #000;\n  --counter-border-radius-outer: 50%;\n  --counter-border-radius-inner: 50%;\n  --counter-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\napp-counter-input ion-button.counter-icon {\n  --background: var(--counter-background);\n  --color: var(--counter-color);\n  --color-activated: var(--counter-color);\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--counter-border-color);\n  --box-shadow: none;\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n  --padding-bottom: 3px;\n  --padding-end: 3px;\n  --padding-start: 3px;\n  --padding-top: 3px;\n  margin: 0px;\n}\napp-counter-input .counter-value {\n  color: var(--counter-color);\n  margin: 0px 10px;\n}\napp-counter-input:not([basic]) .button-outer {\n  width: var(--counter-size);\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  padding-bottom: 100%;\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper .counter-icon {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: auto;\n  width: 100%;\n}\napp-counter-input[basic] {\n  --counter-border-radius-outer: 12px;\n  --counter-border-radius-inner: 0px;\n}\napp-counter-input[basic] .counter-value {\n  display: none;\n}\napp-counter-input[basic] .button-outer:first-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n}\napp-counter-input[basic] .button-outer:last-child {\n  margin-left: -1px;\n}\napp-counter-input[basic] .button-outer:last-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-inner) var(--counter-border-radius-outer) var(--counter-border-radius-outer) var(--counter-border-radius-inner);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyLWlucHV0L2NvdW50ZXItaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUU7RUFDRSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLDRKQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0FBREo7QUFJRTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQU9JO0VBQ0UsMEJBQUE7QUFMTjtBQU9NO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFMUjtBQU9RO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMVjtBQVdFO0VBQ0UsbUNBQUE7RUFDQSxrQ0FBQTtBQVRKO0FBV0k7RUFDRSxhQUFBO0FBVE47QUFjUTtFQUNFLDRKQUFBO0FBWlY7QUFnQk07RUFFRSxpQkFBQTtBQWZSO0FBaUJRO0VBQ0UsNEpBQUE7QUFmViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRlci1pbnB1dC9jb3VudGVyLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNvdW50ZXItaW5wdXQge1xuICAtLWNvdW50ZXItYmFja2dyb3VuZDogIzAwMDtcbiAgLS1jb3VudGVyLWNvbG9yOiAjRkZGO1xuICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiAjMDAwO1xuICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcjogNTAlO1xuICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcjogNTAlO1xuICAtLWNvdW50ZXItc2l6ZTogMzBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gIGlvbi1idXR0b24uY291bnRlci1pY29uIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvdW50ZXItYmFja2dyb3VuZCk7XG4gICAgLS1jb2xvcjogdmFyKC0tY291bnRlci1jb2xvcik7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWNvdW50ZXItY29sb3IpO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb3VudGVyLWJvcmRlci1jb2xvcik7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogM3B4O1xuICAgIC0tcGFkZGluZy10b3A6IDNweDtcblxuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLmNvdW50ZXItdmFsdWUge1xuICAgIGNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICB9XG5cbiAgJjpub3QoW2Jhc2ljXSkge1xuICAgIC8vIEZvcmNlIGVhY2ggY291bnRlciBidXR0b24gdG8gaGF2ZSBhIDE6MSBhc3BlY3QgcmF0aW9cbiAgICAuYnV0dG9uLW91dGVyIHtcbiAgICAgIHdpZHRoOiB2YXIoLS1jb3VudGVyLXNpemUpO1xuXG4gICAgICAuYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG5cbiAgICAgICAgLmNvdW50ZXItaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZbYmFzaWNdIHtcbiAgICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcjogMTJweDtcbiAgICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcjogMHB4O1xuXG4gICAgLmNvdW50ZXItdmFsdWUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuYnV0dG9uLW91dGVyIHtcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIC8vIFRvIGF2b2lkIGRvdWJsZSBib3JkZXJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG5cbiAgICAgICAgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24ge1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "eecM":
    /*!***********************************!*\
      !*** ./src/app/pipes/resource.ts ***!
      \***********************************/

    /*! exports provided: ResourcePipe */

    /***/
    function eecM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResourcePipe", function () {
        return ResourcePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ResourcePipe = /*#__PURE__*/function () {
        function ResourcePipe() {
          _classCallCheck(this, ResourcePipe);
        }

        _createClass(ResourcePipe, [{
          key: "transform",
          // ResourcePipe
          // Filter resource by name
          value: function transform(resources, search) {
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

        return ResourcePipe;
      }();

      ResourcePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'resourceFilter'
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ResourcePipe);
      /***/
    },

    /***/
    "fpyr":
    /*!***************************************************************************!*\
      !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CheckboxWrapperComponent */

    /***/
    function fpyr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponent", function () {
        return CheckboxWrapperComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_checkbox_wrapper_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./checkbox-wrapper.component.html */
      "3TL5");
      /* harmony import */


      var _checkbox_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./checkbox-wrapper.component.scss */
      "XmS3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); // Reference to the @ionic/angular Components List:
      // https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts


      var CheckboxWrapperComponent = /*#__PURE__*/function () {
        function CheckboxWrapperComponent() {
          _classCallCheck(this, CheckboxWrapperComponent);
        }

        _createClass(CheckboxWrapperComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this12 = this;

            // ContentChild is set
            this.isChecked = this.checkbox.checked; // Subscribe to changes

            this.checkbox.ionChange.subscribe(function (changes) {
              _this12.isChecked = changes.detail.checked;
            });
          }
        }]);

        return CheckboxWrapperComponent;
      }();

      CheckboxWrapperComponent.ctorParameters = function () {
        return [];
      };

      CheckboxWrapperComponent.propDecorators = {
        checkbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"]]
        }],
        isChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['class.checkbox-checked']
        }]
      };
      CheckboxWrapperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkbox-wrapper',
        template: _raw_loader_checkbox_wrapper_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkbox_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CheckboxWrapperComponent);
      /***/
    },

    /***/
    "g1fN":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function g1fN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-float-left\">\n  <ion-list>\n    <!--<ion-list-header>Ionic</ion-list-header>-->\n    <ion-item button>Tag as as Resource</ion-item>\n    <ion-item button>Report inappropriate</ion-item>\n    <ion-item button>Message user</ion-item>\n    <ion-item lines=\"none\" detail=\"false\" button onClick=\"close()\">Close</ion-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "gLxg":
    /*!*******************************************************************!*\
      !*** ./src/app/components/rating-input/rating-input.component.ts ***!
      \*******************************************************************/

    /*! exports provided: RatingInputComponent */

    /***/
    function gLxg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingInputComponent", function () {
        return RatingInputComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rating_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rating-input.component.html */
      "2MtO");
      /* harmony import */


      var _rating_input_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rating-input.component.scss */
      "reyE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var RatingInputComponent_1;

      var RatingInputComponent = RatingInputComponent_1 = /*#__PURE__*/function () {
        function RatingInputComponent() {
          _classCallCheck(this, RatingInputComponent);

          this.max = 5;
          this.readOnly = false;

          this.propagateChange = function () {}; // Noop function

        }

        _createClass(RatingInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var states = [];

            for (var i = 0; i < this.max; i++) {
              if (this.innerValue > i && this.innerValue < i + 1) {
                states[i] = 2;
              } else if (this.innerValue > i) {
                states[i] = 1;
              } else {
                states[i] = 0;
              }
            }

            this.range = states;
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (value !== this.innerValue) {
              this.innerValue = value;
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.propagateChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched() {}
        }, {
          key: "rate",
          value: function rate(amount) {
            if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
              this.value = amount;
            }
          }
        }, {
          key: "value",
          get: function get() {
            return this.innerValue;
          },
          set: function set(val) {
            if (val !== this.innerValue) {
              this.innerValue = val;
              this.propagateChange(val);
            }
          }
        }]);

        return RatingInputComponent;
      }();

      RatingInputComponent.propDecorators = {
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        readOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      RatingInputComponent = RatingInputComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rating-input',
        template: _raw_loader_rating_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
            return RatingInputComponent_1;
          }),
          multi: true
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_rating_input_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RatingInputComponent);
      /***/
    },

    /***/
    "habw":
    /*!*******************************************************************!*\
      !*** ./src/app/reaction-list-modal/reaction-list-modal.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function habw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhY3Rpb24tbGlzdC1tb2RhbC9yZWFjdGlvbi1saXN0LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVDQUFBO0VBQ0Esd0NBQUE7QUFBRjs7QUFHRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0aW9uLWxpc3QtbW9kYWwvcmVhY3Rpb24tbGlzdC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICB9XG4gIFxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICB9XG4iXX0= */";
      /***/
    },

    /***/
    "iSCB":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/show-hide-password/show-hide-password.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function iSCB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host .type-toggle {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\n:host .type-toggle .show-option,\n:host .type-toggle .hide-option {\n  font-size: 1.4rem;\n  display: block;\n}\n:host .type-toggle .show-option:not(ion-icon),\n:host .type-toggle .hide-option:not(ion-icon) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSw2QkFBQTtVQUFBLDRCQUFBO0FBQ0o7QUFDSTs7RUFFRSxpQkFBQTtFQUNBLGNBQUE7QUFDTjtBQUVNOztFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAudHlwZS10b2dnbGUge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XG5cbiAgICAuc2hvdy1vcHRpb24sXG4gICAgLmhpZGUtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIC8vIEluIGNhc2UgeW91IHdhbnQgdG8gdXNlIHRleHQgaW5zdGVhZCBvZiBpY29uc1xuICAgICAgJjpub3QoaW9uLWljb24pIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shell/shell.module */
      "ZpN7");
      /* harmony import */


      var _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkbox-wrapper/checkbox-wrapper.component */
      "fpyr");
      /* harmony import */


      var _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./show-hide-password/show-hide-password.component */
      "A0kb");
      /* harmony import */


      var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./countdown-timer/countdown-timer.component */
      "dAQS");
      /* harmony import */


      var _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./counter-input/counter-input.component */
      "lfmG");
      /* harmony import */


      var _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./rating-input/rating-input.component */
      "gLxg");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot()],
        declarations: [_checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxWrapperComponent"], _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordComponent"], _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__["CountdownTimerComponent"], _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__["CounterInputComponent"], _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__["RatingInputComponent"]],
        exports: [_shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"], _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxWrapperComponent"], _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordComponent"], _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__["CountdownTimerComponent"], _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__["CounterInputComponent"], _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__["RatingInputComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "jfhx":
    /*!***************************************!*\
      !*** ./src/app/pipes/conversation.ts ***!
      \***************************************/

    /*! exports provided: ConversationPipe */

    /***/
    function jfhx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConversationPipe", function () {
        return ConversationPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConversationPipe = /*#__PURE__*/function () {
        function ConversationPipe() {
          _classCallCheck(this, ConversationPipe);
        }

        _createClass(ConversationPipe, [{
          key: "transform",
          // ConversationPipe
          // Filter conversation based on friend's name or username.
          value: function transform(conversations, search) {
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

        return ConversationPipe;
      }();

      ConversationPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'conversationFilter'
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ConversationPipe);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet-ios.entry.js": ["bnjm", "common", 0],
        "./ion-action-sheet-md.entry.js": ["utt2", "common", 1],
        "./ion-alert-ios.entry.js": ["yaSn", "common", 2],
        "./ion-alert-md.entry.js": ["2/RY", "common", 3],
        "./ion-app_8-ios.entry.js": ["iInF", "common", 4],
        "./ion-app_8-md.entry.js": ["K9Nc", "common", 5],
        "./ion-avatar_3-ios.entry.js": ["hH1s", "common", 6],
        "./ion-avatar_3-md.entry.js": ["Jw9y", "common", 7],
        "./ion-back-button-ios.entry.js": ["ouVF", "common", 8],
        "./ion-back-button-md.entry.js": ["/joy", "common", 9],
        "./ion-backdrop-ios.entry.js": ["uJLv", 10],
        "./ion-backdrop-md.entry.js": ["fSmE", 11],
        "./ion-button_2-ios.entry.js": ["s1jK", "common", 12],
        "./ion-button_2-md.entry.js": ["Wou7", "common", 13],
        "./ion-card_5-ios.entry.js": ["qshq", "common", 14],
        "./ion-card_5-md.entry.js": ["Q1uX", "common", 15],
        "./ion-checkbox-ios.entry.js": ["059i", "common", 16],
        "./ion-checkbox-md.entry.js": ["eLfv", "common", 17],
        "./ion-chip-ios.entry.js": ["+FzG", "common", 18],
        "./ion-chip-md.entry.js": ["yRpg", "common", 19],
        "./ion-col_3.entry.js": ["/CAe", 20],
        "./ion-datetime_3-ios.entry.js": ["Z1Jy", "common", 21],
        "./ion-datetime_3-md.entry.js": ["X0Dk", "common", 22],
        "./ion-fab_3-ios.entry.js": ["wvyA", "common", 23],
        "./ion-fab_3-md.entry.js": ["NkKY", "common", 24],
        "./ion-img.entry.js": ["wHD8", 25],
        "./ion-infinite-scroll_2-ios.entry.js": ["nf6t", "common", 26],
        "./ion-infinite-scroll_2-md.entry.js": ["lg/V", "common", 27],
        "./ion-input-ios.entry.js": ["sdJS", "common", 28],
        "./ion-input-md.entry.js": ["uQUw", "common", 29],
        "./ion-item-option_3-ios.entry.js": ["Pa1g", "common", 30],
        "./ion-item-option_3-md.entry.js": ["KTnd", "common", 31],
        "./ion-item_8-ios.entry.js": ["Z51p", "common", 32],
        "./ion-item_8-md.entry.js": ["8bam", "common", 33],
        "./ion-loading-ios.entry.js": ["J3Yu", "common", 34],
        "./ion-loading-md.entry.js": ["N3W9", "common", 35],
        "./ion-menu_3-ios.entry.js": ["IlGI", "common", 36],
        "./ion-menu_3-md.entry.js": ["WHty", "common", 37],
        "./ion-modal-ios.entry.js": ["mgaC", "common", 38],
        "./ion-modal-md.entry.js": ["EpFf", "common", 39],
        "./ion-nav_2.entry.js": ["vnES", "common", 40],
        "./ion-popover-ios.entry.js": ["Gdks", "common", 41],
        "./ion-popover-md.entry.js": ["VgKV", "common", 42],
        "./ion-progress-bar-ios.entry.js": ["0PGG", "common", 43],
        "./ion-progress-bar-md.entry.js": ["h/Bu", "common", 44],
        "./ion-radio_2-ios.entry.js": ["5bK7", "common", 45],
        "./ion-radio_2-md.entry.js": ["pOmE", "common", 46],
        "./ion-range-ios.entry.js": ["5g9+", "common", 47],
        "./ion-range-md.entry.js": ["fD4w", "common", 48],
        "./ion-refresher_2-ios.entry.js": ["CXux", "common", 49],
        "./ion-refresher_2-md.entry.js": ["RODS", "common", 50],
        "./ion-reorder_2-ios.entry.js": ["IdzL", "common", 51],
        "./ion-reorder_2-md.entry.js": ["Ftzj", "common", 52],
        "./ion-ripple-effect.entry.js": ["STjf", 53],
        "./ion-route_4.entry.js": ["k5eQ", "common", 54],
        "./ion-searchbar-ios.entry.js": ["l0q3", "common", 55],
        "./ion-searchbar-md.entry.js": ["mLlG", "common", 56],
        "./ion-segment_2-ios.entry.js": ["Iymp", "common", 57],
        "./ion-segment_2-md.entry.js": ["3msy", "common", 58],
        "./ion-select_3-ios.entry.js": ["rYLK", "common", 59],
        "./ion-select_3-md.entry.js": ["WOXB", "common", 60],
        "./ion-slide_2-ios.entry.js": ["F/Xn", 61],
        "./ion-slide_2-md.entry.js": ["k8us", 62],
        "./ion-spinner.entry.js": ["nI0H", "common", 63],
        "./ion-split-pane-ios.entry.js": ["edcM", 64],
        "./ion-split-pane-md.entry.js": ["RyPD", 65],
        "./ion-tab-bar_2-ios.entry.js": ["DP4G", "common", 66],
        "./ion-tab-bar_2-md.entry.js": ["gaXT", "common", 67],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 68],
        "./ion-text.entry.js": ["ISmu", "common", 69],
        "./ion-textarea-ios.entry.js": ["xNZy", "common", 70],
        "./ion-textarea-md.entry.js": ["p1XJ", "common", 71],
        "./ion-toast-ios.entry.js": ["XGfm", "common", 72],
        "./ion-toast-md.entry.js": ["Y/uG", "common", 73],
        "./ion-toggle-ios.entry.js": ["WbT0", "common", 74],
        "./ion-toggle-md.entry.js": ["upP9", "common", 75],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 76]
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

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "l0GK":
    /*!***************************************************************!*\
      !*** ./src/app/user-profile-modal/user-profile-modal.page.ts ***!
      \***************************************************************/

    /*! exports provided: UserProfileModalPage */

    /***/
    function l0GK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileModalPage", function () {
        return UserProfileModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_profile_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-profile-modal.page.html */
      "Ox2M");
      /* harmony import */


      var _user_profile_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-profile-modal.page.scss */
      "VkdX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_environments_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/validator */
      "ZvGz");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var UserProfileModalPage = /*#__PURE__*/function () {
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
          this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].errorMessages;
          this.myForm = this.formBuilder.group({
            name: src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].nameValidator,
            username: src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].usernameValidator,
            email: src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].emailValidator,
            bio: src_environments_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].bioValidator
          });
        }

        _createClass(UserProfileModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "save",
          value: function save() {
            var _this13 = this;

            this.submitAttempt = true;

            if (this.myForm.valid) {
              this.loadingProvider.show();
              this.firestore.doc('accounts/' + this.user.userId).update(this.user).then(function () {
                _this13.loadingProvider.hide();

                _this13.loadingProvider.showToast("Updated Successfully");

                _this13.modal.dismiss();
              })["catch"](function (err) {
                _this13.loadingProvider.showToast("Something went wrong");

                _this13.loadingProvider.hide();
              });
            }
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modal.dismiss();
          }
        }]);

        return UserProfileModalPage;
      }();

      UserProfileModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }];
      };

      UserProfileModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-profile-modal',
        template: _raw_loader_user_profile_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_profile_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]])], UserProfileModalPage);
      /***/
    },

    /***/
    "lfmG":
    /*!*********************************************************************!*\
      !*** ./src/app/components/counter-input/counter-input.component.ts ***!
      \*********************************************************************/

    /*! exports provided: counterRangeValidator, CounterInputComponent */

    /***/
    function lfmG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "counterRangeValidator", function () {
        return counterRangeValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CounterInputComponent", function () {
        return CounterInputComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_counter_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./counter-input.component.html */
      "sMFE");
      /* harmony import */


      var _counter_input_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./counter-input.component.scss */
      "e6VL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CounterInputComponent_1;

      function counterRangeValidator(minValue, maxValue) {
        return function (c) {
          var err = {
            rangeError: {
              given: c.value,
              min: minValue || 0,
              max: maxValue || 10
            }
          };
          return c.value > +maxValue || c.value < +minValue ? err : null;
        };
      }

      var CounterInputComponent = CounterInputComponent_1 = /*#__PURE__*/function () {
        function CounterInputComponent() {
          _classCallCheck(this, CounterInputComponent);

          // tslint:disable-next-line:no-input-rename
          this._counterValue = 0;

          this.propagateChange = function () {}; // Noop function


          this.validateFn = function () {}; // Noop function

        }

        _createClass(CounterInputComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(inputs) {
            if (inputs.counterRangeMax || inputs.counterRangeMin) {
              this.validateFn = counterRangeValidator(this.counterRangeMin, this.counterRangeMax);
            }
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (value) {
              this.counterValue = value;
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.propagateChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched() {}
        }, {
          key: "increase",
          value: function increase() {
            this.counterValue++;
          }
        }, {
          key: "decrease",
          value: function decrease() {
            this.counterValue--;
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validateFn(c);
          }
        }, {
          key: "counterValue",
          get: function get() {
            return this._counterValue;
          },
          set: function set(val) {
            this._counterValue = val;
            this.propagateChange(val);
          }
        }]);

        return CounterInputComponent;
      }();

      CounterInputComponent.propDecorators = {
        _counterValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['counterValue']
        }],
        counterRangeMax: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['max']
        }],
        counterRangeMin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['min']
        }]
      };
      CounterInputComponent = CounterInputComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-counter-input',
        template: _raw_loader_counter_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
            return CounterInputComponent_1;
          }),
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
            return CounterInputComponent_1;
          }),
          multi: true
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_counter_input_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CounterInputComponent);
      /***/
    },

    /***/
    "mnRn":
    /*!*******************************************!*\
      !*** ./src/app/services/image.service.ts ***!
      \*******************************************/

    /*! exports provided: ImageService */

    /***/
    function mnRn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageService", function () {
        return ImageService;
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "JZFu");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "DJEK");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "G769");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./loading.service */
      "7ch9");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/ionic-webview/ngx */
      "eHpL");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"],
          CameraCap = _capacitor_core__WEBP.CameraCap,
          Filesystem = _capacitor_core__WEBP.Filesystem;

      var ImageService = /*#__PURE__*/function () {
        function ImageService(firestore, loadingProvider, camera, mediaCapture, imagePicker, file, filePath, webview) {
          _classCallCheck(this, ImageService);

          this.firestore = firestore;
          this.loadingProvider = loadingProvider;
          this.camera = camera;
          this.mediaCapture = mediaCapture;
          this.imagePicker = imagePicker;
          this.file = file;
          this.filePath = filePath;
          this.webview = webview;
          this.profilePhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
          };
          this.photoMessageOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            allowEdit: true
          };
          this.groupPhotoOptions = {
            quality: 50,
            targetWidth: 384,
            targetHeight: 384,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
          };
        } // Function to convert dataURI to Blob needed by Firebase


        _createClass(ImageService, [{
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
          } // Set ProfilePhoto given the user and the cameraSourceType.
          // This function processes the imageURI returned and uploads the file on Firebase,
          // Finally the user data on the database is updated.

        }, {
          key: "setProfilePhoto",
          value: function setProfilePhoto(user, sourceType) {
            var _this14 = this;

            console.log(user);
            this.profilePhotoOptions.sourceType = sourceType;
            this.loadingProvider.show(); // Get picture from camera or gallery.

            this.camera.getPicture(this.profilePhotoOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this14.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              };

              var name = _this14.generateFilename();

              var dpStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/' + user.userId + '/' + name); // Generate filename and upload to Firebase Storage.

              dpStorageRef.put(imgBlob, metadata).then(function (snapshot) {
                // Delete previous profile photo on Storage if it exists.
                // this.deleteImageFile(user.img);
                // URL of the uploaded image!
                console.log(snapshot);
                dpStorageRef.getDownloadURL().then(function (res) {
                  console.log(res);
                  var url = res;
                  var profile = {
                    displayName: user.name,
                    photoURL: url
                  }; // Update Firebase User.

                  firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.updateProfile(profile).then(function (success) {
                    // Update User Data on Database.
                    _this14.firestore.doc('/accounts/' + user.userId).update({
                      img: url
                    }).then(function (success) {
                      _this14.loadingProvider.hide();

                      _this14.loadingProvider.showToast("Profile Updated");
                    })["catch"](function (error) {
                      console.log(error);

                      _this14.loadingProvider.hide();

                      _this14.loadingProvider.showToast("Something went wrong");
                    });
                  })["catch"](function (error) {
                    console.log(error);

                    _this14.loadingProvider.hide();

                    _this14.loadingProvider.showToast("Something went wrong");
                  });
                });
              })["catch"](function (error) {
                console.log(error);

                _this14.loadingProvider.hide();

                _this14.loadingProvider.showToast("Something went wrong");
              });
            })["catch"](function (error) {
              _this14.loadingProvider.hide();
            });
          } // Upload and set the group object's image.

        }, {
          key: "setGroupPhoto",
          value: function setGroupPhoto(group, sourceType) {
            var _this15 = this;

            this.groupPhotoOptions.sourceType = sourceType;
            this.loadingProvider.show(); // Get picture from camera or gallery.

            this.camera.getPicture(this.groupPhotoOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this15.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              };

              var name = _this15.generateFilename();

              var groupStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.uid + '/' + name);
              groupStorageRef.put(imgBlob, metadata).then(function (snapshot) {
                // this.deleteImageFile(group.img);
                // URL of the uploaded image!
                groupStorageRef.getDownloadURL().then(function (url) {
                  group.img = url;

                  _this15.loadingProvider.hide();
                });
              })["catch"](function (error) {
                _this15.loadingProvider.hide();

                _this15.loadingProvider.showToast("Something went wrong");
              });
            })["catch"](function (error) {
              _this15.loadingProvider.hide();
            });
          } // Set group photo and return the group object as promise.

        }, {
          key: "setGroupPhotoPromise",
          value: function setGroupPhotoPromise(group, sourceType) {
            var _this16 = this;

            return new Promise(function (resolve) {
              _this16.groupPhotoOptions.sourceType = sourceType;

              _this16.loadingProvider.show(); // Get picture from camera or gallery.


              _this16.camera.getPicture(_this16.groupPhotoOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this16.imgURItoBlob("data:image/jpeg;base64," + imageData);

                var metadata = {
                  'contentType': imgBlob.type
                };
                var gPPStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.uid + '/' + _this16.generateFilename());
                gPPStorageRef.put(imgBlob, metadata).then(function (snapshot) {
                  _this16.deleteImageFile(group.img); // URL of the uploaded image!


                  gPPStorageRef.getDownloadURL().then(function (url) {
                    group.img = url;

                    _this16.loadingProvider.hide();

                    resolve(group);
                  });
                })["catch"](function (error) {
                  _this16.loadingProvider.hide();

                  _this16.loadingProvider.showToast("Something went wrong");
                });
              })["catch"](function (error) {
                _this16.loadingProvider.hide();
              });
            });
          } //Delete the image given the url.

        }, {
          key: "deleteImageFile",
          value: function deleteImageFile(path) {
            var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?')); // tslint:disable-next-line: max-line-length

            firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.uid + '/' + fileName)["delete"]().then(function () {})["catch"](function (error) {
              console.log(error);
            });
          } //Delete the user.img given the user.

        }, {
          key: "deleteUserImageFile",
          value: function deleteUserImageFile(user) {
            var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?')); // tslint:disable-next-line: max-line-length

            firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/' + user.userId + '/' + fileName)["delete"]().then(function () {})["catch"](function (error) {
              console.log(error);
            });
          } // Delete group image file on group storage reference.

        }, {
          key: "deleteGroupImageFile",
          value: function deleteGroupImageFile(groupId, path) {
            var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
            firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/' + groupId + '/' + fileName)["delete"]().then(function () {})["catch"](function (error) {
              console.log(error);
            });
          } // Upload photo message and return the url as promise.

        }, {
          key: "uploadPhotoMessage",
          value: function uploadPhotoMessage(conversationId, sourceType) {
            var _this17 = this;

            return new Promise(function (resolve) {
              _this17.photoMessageOptions.sourceType = sourceType;

              _this17.loadingProvider.show(); // Get picture from camera or gallery.


              _this17.camera.getPicture(_this17.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this17.imgURItoBlob("data:image/jpeg;base64," + imageData);

                var metadata = {
                  'contentType': imgBlob.type
                }; // Generate filename and upload to Firebase Storage.

                var upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/' + conversationId + '/' + _this17.generateFilename());
                upRef.put(imgBlob, metadata).then(function (snapshot) {
                  // URL of the uploaded image!
                  upRef.getDownloadURL().then(function (url) {
                    _this17.loadingProvider.hide();

                    resolve(url);
                  });
                })["catch"](function (error) {
                  _this17.loadingProvider.hide();

                  _this17.loadingProvider.showToast("Something went wrong");
                });
              })["catch"](function (error) {
                _this17.loadingProvider.hide();
              });
            });
          } // Upload photo message and return the url as promise.

        }, {
          key: "uploadPostPhoto",
          value: function uploadPostPhoto(sourceType) {
            var _this18 = this;

            return new Promise(function (resolve) {
              _this18.photoMessageOptions.sourceType = sourceType;

              _this18.loadingProvider.show(); // Get picture from camera or gallery.


              _this18.camera.getPicture(_this18.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this18.imgURItoBlob("data:image/jpeg;base64," + imageData);

                var metadata = {
                  'contentType': imgBlob.type
                }; // Generate filename and upload to Firebase Storage.

                var upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/posts/' + _this18.generateFilename());
                upRef.put(imgBlob, metadata).then(function (snapshot) {
                  // URL of the uploaded image!
                  upRef.getDownloadURL().then(function (url) {
                    _this18.loadingProvider.hide();

                    resolve(url);
                  });
                })["catch"](function (error) {
                  _this18.loadingProvider.hide();

                  _this18.loadingProvider.showToast("Something went wrong");
                });
              })["catch"](function (error) {
                _this18.loadingProvider.hide();
              });
            });
          }
        }, {
          key: "uploadPostPhotos",
          value: function uploadPostPhotos(postMedia) {
            var _this19 = this;

            var promises = [];
            return new Promise(function (resolve) {
              if (postMedia && postMedia.length > 0) {
                // tslint:disable-next-line: prefer-for-of
                for (var i = 0; i < postMedia.length; i++) {
                  promises.push(_this19.getDownloadUrlImage(postMedia[i]));
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
          value: function getDownloadUrlImage(imageBase64) {
            var _this20 = this;

            return new Promise(function (resolve) {
              // Process the returned imageURI.
              var imgBlob = _this20.imgURItoBlob(imageBase64);

              var metadata = {
                'contentType': imgBlob.type
              }; // Generate filename and upload to Firebase Storage.

              var upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/posts/' + _this20.generateFilename());
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
            firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/posts/' + fileName)["delete"]().then(function () {})["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "uploadPostReactionPhoto",
          value: function uploadPostReactionPhoto(postId, userId, sourceType) {
            var _this21 = this;

            return new Promise(function (resolve) {
              _this21.photoMessageOptions.sourceType = sourceType;

              _this21.loadingProvider.show(); // Get picture from camera or gallery.


              _this21.camera.getPicture(_this21.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this21.imgURItoBlob("data:image/jpeg;base64," + imageData);

                var metadata = {
                  'contentType': imgBlob.type
                }; // Generate filename and upload to Firebase Storage.

                var upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/posts' + postId + '/' + userId + '/' + _this21.generateFilename());
                upRef.put(imgBlob, metadata).then(function (snapshot) {
                  // URL of the uploaded image!
                  upRef.getDownloadURL().then(function (url) {
                    _this21.loadingProvider.hide();

                    resolve(url);
                  });
                })["catch"](function (error) {
                  _this21.loadingProvider.hide();

                  _this21.loadingProvider.showToast("Something went wrong");
                });
              })["catch"](function (error) {
                _this21.loadingProvider.hide();
              });
            });
          }
        }, {
          key: "uploadPostVideo",
          value: function uploadPostVideo() {
            var _this22 = this;

            var options = {
              destinationType: this.camera.DestinationType.FILE_URI,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              mediaType: this.camera.MediaType.VIDEO
            };
            return new Promise(function (resolve) {
              _this22.loadingProvider.show();

              _this22.camera.getPicture(options).then(function (videoUrl) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  var filename, dirpath;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
                          dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
                          dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                          _context7.prev = 3;
                          //   console.log('dirpath', dirpath);
                          //   console.log('filename',filename);
                          //   console.log('file exists', this.file.checkFile(dirpath,filename).then(sd => {
                          //     console.log('sd:', sd);
                          //   }));
                          console.log('dirpath+filename', dirpath + filename);
                          console.log('this.webview.convertFileSrc(', this.webview.convertFileSrc('dirpath+filename'));
                          resolve(this.webview.convertFileSrc('dirpath+filename')); //   this.file.readAsArrayBuffer(dirpath, filename)
                          //   .then((success) => {
                          //   let blob = new Blob([success], { type: "video/mp4" });
                          //   let uploadRef = firebase.default.storage().ref().child('videos/' + filename);
                          //   uploadRef.put(blob).then(res => {
                          //     let process = res.bytesTransferred / res.totalBytes * 100;
                          //     uploadRef.getDownloadURL().then(url => {
                          //       console.log('downloaded url', url);
                          //       resolve(url);
                          //       this.loadingProvider.hide();
                          //     })
                          //   }, err => {
                          //     this.loadingProvider.hide();
                          //     console.log("Failed")
                          //   });
                          // }).catch(err => {
                          //     return console.log("Error","Error in readasbuffer", err);
                          //   });

                          _context7.next = 12;
                          break;

                        case 9:
                          _context7.prev = 9;
                          _context7.t0 = _context7["catch"](3);
                          return _context7.abrupt("return", console.log("Error", "Something went wrong:", _context7.t0));

                        case 12:
                          console.log('im here now');

                        case 13:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7, this, [[3, 9]]);
                }));
              }, function (err) {
                _this22.loadingProvider.hide();

                console.log("Media Err = " + err);
              });
            });
          }
        }, {
          key: "uploadPostVideoCapacitor",
          value: function uploadPostVideoCapacitor() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var options, originalPhoto, photoInTempStorage, date, time, fileName, finalPhotoUri, photoPath;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      options = {
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["CameraResultType"].Uri
                      };
                      _context8.next = 3;
                      return CameraCap.getPhoto(options);

                    case 3:
                      originalPhoto = _context8.sent;
                      _context8.next = 6;
                      return Filesystem.readFile({
                        path: originalPhoto.path
                      });

                    case 6:
                      photoInTempStorage = _context8.sent;
                      date = new Date(), time = date.getTime(), fileName = time + ".jpeg";
                      _context8.next = 10;
                      return Filesystem.writeFile({
                        data: photoInTempStorage.data,
                        path: fileName,
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["FilesystemDirectory"].Data
                      });

                    case 10:
                      _context8.next = 12;
                      return Filesystem.getUri({
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["FilesystemDirectory"].Data,
                        path: fileName
                      });

                    case 12:
                      finalPhotoUri = _context8.sent;
                      photoPath = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Capacitor"].convertFileSrc(finalPhotoUri.uri);
                      console.log(photoPath);

                    case 15:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          }
        }, {
          key: "deletePostReactionPhoto",
          value: function deletePostReactionPhoto(postId, url) {
            var fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
            firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/' + postId + '/' + fileName)["delete"]().then(function () {})["catch"](function (error) {
              console.log(error);
            });
          } // Upload group photo message and return a promise as url.

        }, {
          key: "uploadGroupPhotoMessage",
          value: function uploadGroupPhotoMessage(groupId, sourceType) {
            var _this23 = this;

            return new Promise(function (resolve) {
              _this23.photoMessageOptions.sourceType = sourceType;

              _this23.loadingProvider.show(); // Get picture from camera or gallery.


              _this23.camera.getPicture(_this23.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this23.imgURItoBlob("data:image/jpeg;base64," + imageData);

                var metadata = {
                  'contentType': imgBlob.type
                }; // Generate filename and upload to Firebase Storage.

                var ugpRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/' + groupId + '/' + _this23.generateFilename());
                ugpRef.put(imgBlob, metadata).then(function (snapshot) {
                  // URL of the uploaded image!
                  ugpRef.getDownloadURL().then(function (url) {
                    _this23.loadingProvider.hide();

                    resolve(url);
                  });
                })["catch"](function (error) {
                  _this23.loadingProvider.hide();

                  _this23.loadingProvider.showToast("Something went wrong");
                });
              })["catch"](function (error) {
                _this23.loadingProvider.hide();
              });
            });
          }
        }, {
          key: "uploadGroupVideoMessage",
          value: function uploadGroupVideoMessage(groupId) {
            var _this24 = this;

            return new Promise(function (resolve) {
              _this24.loadingProvider.show();

              _this24.mediaCapture.captureVideo().then(function (data) {
                var videoUrl = data[0].fullPath;
                var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
                var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
                dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
                console.log("video path: " + videoUrl);
                var x = videoUrl.split("/");
                var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                var name = x[x.length - 1];
                console.log(filepath + " - " + name);

                _this24.file.readAsArrayBuffer(dirpath, filename).then(function (success) {
                  console.log(success);
                  var blob = new Blob([success], {
                    type: "video/mp4"
                  });
                  console.log(blob);
                  var upload = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('videos/' + groupId + "/" + name).put(blob);
                  upload.then(function (res) {
                    var process = res.bytesTransferred / res.totalBytes * 100;
                    console.log(process);

                    _this24.loadingProvider.hide();

                    resolve(res.downloadURL);
                  }, function (err) {
                    _this24.loadingProvider.hide();

                    console.log("Failed");
                  });
                });
              }, function (err) {
                _this24.loadingProvider.hide();

                console.log("Media Err = " + err);
              });
            });
          }
        }, {
          key: "uploadVideoMessage",
          value: function uploadVideoMessage(conversationId) {
            var _this25 = this;

            return new Promise(function (resolve) {
              _this25.loadingProvider.show();

              _this25.mediaCapture.captureVideo().then(function (data) {
                var videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                var x = videoUrl.split("/");
                var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                var name = x[x.length - 1];
                console.log(filepath + " - " + name);

                _this25.file.readAsArrayBuffer(filepath, name).then(function (success) {
                  console.log(success);
                  var blob = new Blob([success], {
                    type: "video/mp4"
                  });
                  console.log(blob); // let timestamp = (Math.floor(Date.now() / 1000)).toString();

                  var uploadRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('videos/' + name);
                  uploadRef.put(blob).then(function (res) {
                    var process = res.bytesTransferred / res.totalBytes * 100;
                    console.log(process);

                    _this25.loadingProvider.hide();

                    uploadRef.getDownloadURL().then(function (url) {
                      resolve(url);
                    });
                  }, function (err) {
                    _this25.loadingProvider.hide();

                    console.log("Failed");
                  });
                });
              }, function (err) {
                _this25.loadingProvider.hide();

                console.log("Media Err = " + err);
              });
            });
          } // Upload group photo message and return a promise as url.

        }, {
          key: "uploadGroupPhotoResource",
          value: function uploadGroupPhotoResource(groupId, sourceType) {
            var _this26 = this;

            return new Promise(function (resolve) {
              _this26.photoMessageOptions.sourceType = sourceType;

              _this26.loadingProvider.show(); // Get picture from camera or gallery.


              _this26.camera.getPicture(_this26.photoMessageOptions).then(function (imageData) {
                // Process the returned imageURI.
                var imgBlob = _this26.imgURItoBlob("data:image/jpeg;base64," + imageData);

                var metadata = {
                  'contentType': imgBlob.type
                }; // Generate filename and upload to Firebase Storage.

                var ugpRef = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('images/' + groupId + '/' + _this26.generateFilename());
                ugpRef.put(imgBlob, metadata).then(function (snapshot) {
                  // URL of the uploaded image!
                  ugpRef.getDownloadURL().then(function (url) {
                    _this26.loadingProvider.hide();

                    resolve(url);
                  });
                })["catch"](function (error) {
                  _this26.loadingProvider.hide();

                  _this26.loadingProvider.showToast("Something went wrong");
                });
              })["catch"](function (error) {
                _this26.loadingProvider.hide();
              });
            });
          }
        }, {
          key: "uploadGroupVideoResource",
          value: function uploadGroupVideoResource(groupId) {
            var _this27 = this;

            return new Promise(function (resolve) {
              _this27.loadingProvider.show();

              _this27.mediaCapture.captureVideo().then(function (data) {
                var videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                var x = videoUrl.split("/");
                var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                var name = x[x.length - 1];
                console.log(filepath + " - " + name);

                _this27.file.readAsArrayBuffer(filepath, name).then(function (success) {
                  console.log(success);
                  var blob = new Blob([success], {
                    type: "video/mp4"
                  });
                  console.log(blob);
                  var upload = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child('videos/' + groupId + "/" + name).put(blob);
                  upload.then(function (res) {
                    var process = res.bytesTransferred / res.totalBytes * 100;
                    console.log(process);

                    _this27.loadingProvider.hide();

                    resolve(res.downloadURL);
                  }, function (err) {
                    _this27.loadingProvider.hide();

                    console.log("Failed");
                  });
                });
              }, function (err) {
                _this27.loadingProvider.hide();

                console.log("Media Err = " + err);
              });
            });
          }
        }, {
          key: "getGroupVideoResource",
          value: function getGroupVideoResource(resourceurl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref().child(resourceurl).getDownloadURL().then(function (url) {
                        return url;
                      })["catch"](function (error) {// Handle any errors
                      });

                    case 2:
                      return _context9.abrupt("return", _context9.sent);

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));
          }
        }, {
          key: "getImages",
          value: function getImages() {
            var _this28 = this;

            return new Promise(function (resolve) {
              _this28.options = {
                // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
                // selection of a single image, the plugin will return it.
                maximumImagesCount: 10,
                // max width and height to allow the images to be.  Will keep aspect
                // ratio no matter what.  So if both are 800, the returned image
                // will be at most 800 pixels wide and 800 pixels tall.  If the width is
                // 800 and height 0 the image will be 800 pixels wide if the source
                // is at least that wide.
                // quality of resized image, defaults to 100
                quality: 80,
                // output type, defaults to FILE_URIs.
                // available options are
                // window.imagePicker.OutputType.FILE_URI (0) or 
                // window.imagePicker.OutputType.BASE64_STRING (1)
                outputType: 1
              };
              _this28.imageResponse = [];

              _this28.imagePicker.getPictures(_this28.options).then(function (results) {
                for (var i = 0; i < results.length; i++) {
                  _this28.imageResponse.push('data:image/jpeg;base64,' + results[i]);
                }

                resolve(_this28.imageResponse);
              }, function (err) {
                alert(err);
              });
            });
          }
        }]);

        return ImageService;
      }();

      ImageService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__["FilePath"]
        }, {
          type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"]
        }];
      };

      ImageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__["FilePath"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"]])], ImageService);
      /***/
    },

    /***/
    "oXAZ":
    /*!****************************************************************!*\
      !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function oXAZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n:host .content-wrapper {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "p2ut":
    /*!*******************************************!*\
      !*** ./src/app/popover/popover.module.ts ***!
      \*******************************************/

    /*! exports provided: PopoverPageModule */

    /***/
    function p2ut(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function () {
        return PopoverPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./popover.page */
      "M0Xy");

      var routes = [{
        path: '',
        component: _popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]
      }];

      var PopoverPageModule = function PopoverPageModule() {
        _classCallCheck(this, PopoverPageModule);
      };

      PopoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]]
      })], PopoverPageModule);
      /***/
    },

    /***/
    "qVJx":
    /*!***********************************************!*\
      !*** ./src/app/tag-modal/tag-modal.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function qVJx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZy1tb2RhbC90YWctbW9kYWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "reyE":
    /*!*********************************************************************!*\
      !*** ./src/app/components/rating-input/rating-input.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function reyE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-rating-input {\n  --rating-background: transparent;\n  --rating-color: #000;\n  --rating-size: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\napp-rating-input ion-button.rating-icon {\n  --background: var(--rating-background);\n  --color: var(--rating-color);\n  --color-activated: var(--rating-color);\n  --box-shadow: none;\n  --padding-bottom: 0px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 0px;\n  margin: 0px;\n  flex: 1;\n  width: var(--rating-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYXRpbmctaW5wdXQvcmF0aW5nLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVDO0VBQ0csc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDRixPQUFBO0VBQ0MseUJBQUE7QUFESCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nLWlucHV0L3JhdGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1yYXRpbmctaW5wdXQge1xuICAtLXJhdGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1yYXRpbmctY29sb3I6ICMwMDA7XG4gIC0tcmF0aW5nLXNpemU6IDMycHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuXHRpb24tYnV0dG9uLnJhdGluZy1pY29uIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXJhdGluZy1iYWNrZ3JvdW5kKTtcbiAgICAtLWNvbG9yOiB2YXIoLS1yYXRpbmctY29sb3IpO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1yYXRpbmctY29sb3IpO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcblxuICAgIG1hcmdpbjogMHB4O1xuXHRcdGZsZXg6IDE7XG5cdCAgd2lkdGg6IHZhcigtLXJhdGluZy1zaXplKTtcblx0fVxufVxuIl19 */";
      /***/
    },

    /***/
    "sMFE":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter-input/counter-input.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sMFE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"button-outer\">\n  <div class=\"button-wrapper\">\n    <ion-button class=\"counter-icon\" (click)=\"decrease()\">\n      <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\n    </ion-button>\n  </div>\n</div>\n<span class=\"counter-value\">{{ _counterValue }}</span>\n<div class=\"button-outer\">\n  <div class=\"button-wrapper\">\n    <ion-button class=\"counter-icon\" (click)=\"increase()\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "sMbM":
    /*!*****************************************************!*\
      !*** ./src/app/review-modal/review-modal.module.ts ***!
      \*****************************************************/

    /*! exports provided: ReviewModalPageModule */

    /***/
    function sMbM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewModalPageModule", function () {
        return ReviewModalPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _review_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./review-modal.page */
      "ZGG5");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");

      var routes = [{
        path: '',
        component: _review_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReviewModalPage"]
      }];

      var ReviewModalPageModule = function ReviewModalPageModule() {
        _classCallCheck(this, ReviewModalPageModule);
      };

      ReviewModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_review_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReviewModalPage"]]
      })], ReviewModalPageModule);
      /***/
    },

    /***/
    "tqTd":
    /*!*********************************!*\
      !*** ./src/app/pipes/friend.ts ***!
      \*********************************/

    /*! exports provided: FriendPipe */

    /***/
    function tqTd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendPipe", function () {
        return FriendPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FriendPipe = /*#__PURE__*/function () {
        function FriendPipe() {
          _classCallCheck(this, FriendPipe);
        }

        _createClass(FriendPipe, [{
          key: "transform",
          // FriendPipe
          // Filter friend by name or username.
          value: function transform(friends, search) {
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

        return FriendPipe;
      }();

      FriendPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'friendFilter'
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FriendPipe);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/auth-guard.service */
      "MKys");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'app',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'friends',
        loadChildren: './friends/friends.module#FriendsPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'group/:id',
        loadChildren: './group/group.module#GroupPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'addmembers/:id',
        loadChildren: './addmembers/addmembers.module#AddmembersPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'groupinfo/:id',
        loadChildren: './groupinfo/groupinfo.module#GroupinfoPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'groups',
        loadChildren: './groups/groups.module#GroupsPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
      }, {
        path: 'imagemodal',
        loadChildren: './imagemodal/imagemodal.module#ImagemodalPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'message/:id',
        loadChildren: './message/message.module#MessagePageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'messages',
        loadChildren: './messages/messages.module#MessagesPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'newgroup',
        loadChildren: './newgroup/newgroup.module#NewgroupPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'blockedlist',
        loadChildren: './blockedlist/blockedlist.module#BlockedlistPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'register',
        loadChildren: './register/register.module#RegisterPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'userinfo/:id',
        loadChildren: './userinfo/userinfo.module#UserinfoPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'profile/:id',
        loadChildren: './profile/profile.module#ProfilePageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'forgot',
        loadChildren: './forgot/forgot.module#ForgotPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'popover',
        loadChildren: './popover/popover.module#PopoverPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'tag-modal/:groupTags',
        loadChildren: './tag-modal/tag-modal.module#TagModalPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, // { path: 'poll/:id', loadChildren: './poll/poll.module#PollPageModule', canActivate: [AuthGuardService] },
      {
        path: 'new-poll/:id',
        loadChildren: './new-poll/new-poll.module#NewPollPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'walkthrough',
        loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule'
      }, {
        path: 'getting-started',
        loadChildren: './getting-started/getting-started.module#GettingStartedPageModule'
      }, // { path: 'new-resource/:id', loadChildren: './new-resource/new-resource.module#NewResourcePageModule', canActivate: [AuthGuardService] },
      // { path: 'resource/:id', loadChildren: './resource/resource.module#ResourcePageModule', canActivate: [AuthGuardService] },
      {
        path: 'review-modal',
        loadChildren: './review-modal/review-modal.module#ReviewModalPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, // { path: 'event/:id', loadChildren: './event/event.module#EventPageModule', canActivate: [AuthGuardService] },
      {
        path: 'new-event/:id',
        loadChildren: './new-event/new-event.module#NewEventPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'new-post/:id',
        loadChildren: './new-post/new-post.module#NewPostPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'post/:id',
        loadChildren: './post/post.module#PostPageModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: 'reaction-list-modal',
        loadChildren: './reaction-list-modal/reaction-list-modal.module#ReactionListModalPageModule'
      }, {
        path: 'new-resource/:id',
        loadChildren: './new-resources/new-resources.module#NewResourcesPageModule'
      }, {
        path: 'feed',
        loadChildren: './feed/feed.module#FeedPageModule'
      }, {
        path: 'user-profile-modal',
        loadChildren: './user-profile-modal/user-profile-modal.module#UserProfileModalPageModule'
      }, {
        path: 'search-modal',
        loadChildren: './search-modal/search-modal.module#SearchModalPageModule'
      }, {
        path: 'admin-categories',
        loadChildren: './admin-categories/admin-categories.module#AdminCategoriesPageModule'
      }, {
        path: 'new-category-modal',
        loadChildren: './new-category-modal/new-category-modal.module#NewCategoryModalPageModule'
      }, {
        path: 'categories',
        loadChildren: './categories/categories.module#CategoriesPageModule'
      }, {
        path: 'group-search',
        loadChildren: './group-search/group-search.module#GroupSearchPageModule'
      }, {
        path: 'group-join/:id',
        loadChildren: './group-join/group-join.module#GroupJoinPageModule'
      }, {
        path: 'feed-search',
        loadChildren: './feed-search/feed-search.module#FeedSearchPageModule'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vxGH":
    /*!******************************************!*\
      !*** ./src/app/services/share.module.ts ***!
      \******************************************/

    /*! exports provided: SharedModule */

    /***/
    function vxGH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _pipes_friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../pipes/friend */
      "tqTd");
      /* harmony import */


      var _pipes_conversation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pipes/conversation */
      "jfhx");
      /* harmony import */


      var _pipes_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/group */
      "cEW6");
      /* harmony import */


      var _pipes_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../pipes/search */
      "dD9Q");
      /* harmony import */


      var _pipes_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../pipes/date */
      "D39k");
      /* harmony import */


      var _pipes_poll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/poll */
      "Irq3");
      /* harmony import */


      var _pipes_resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pipes/resource */
      "eecM");
      /* harmony import */


      var angular_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-pipes */
      "+1ss");
      /* harmony import */


      var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../pipes/reverse.pipe */
      "IFuf");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        declarations: [_pipes_friend__WEBPACK_IMPORTED_MODULE_2__["FriendPipe"], _pipes_conversation__WEBPACK_IMPORTED_MODULE_3__["ConversationPipe"], _pipes_group__WEBPACK_IMPORTED_MODULE_4__["GroupPipe"], _pipes_search__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"], _pipes_date__WEBPACK_IMPORTED_MODULE_6__["DateFormatPipe"], _pipes_poll__WEBPACK_IMPORTED_MODULE_7__["PollPipe"], _pipes_resource__WEBPACK_IMPORTED_MODULE_8__["ResourcePipe"], angular_pipes__WEBPACK_IMPORTED_MODULE_9__["FloorPipe"], _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__["ReversePipe"]],
        exports: [_pipes_friend__WEBPACK_IMPORTED_MODULE_2__["FriendPipe"], _pipes_conversation__WEBPACK_IMPORTED_MODULE_3__["ConversationPipe"], _pipes_group__WEBPACK_IMPORTED_MODULE_4__["GroupPipe"], _pipes_search__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"], _pipes_date__WEBPACK_IMPORTED_MODULE_6__["DateFormatPipe"], _pipes_poll__WEBPACK_IMPORTED_MODULE_7__["PollPipe"], _pipes_resource__WEBPACK_IMPORTED_MODULE_8__["ResourcePipe"], angular_pipes__WEBPACK_IMPORTED_MODULE_9__["FloorPipe"], _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__["ReversePipe"]]
      })], SharedModule);
      /***/
    },

    /***/
    "wKnH":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reaction-list-modal/reaction-list-modal.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wKnH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Reactions</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-avatar slot=\"start\">\n        <ion-img src=\"{{item.addedByUser.addedByImg}}\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.addedByUser.addedByUsername}}</h2>\n        <!--<p>Sneaky little hobbitses!</p> -->\n      </ion-label>\n      <ion-icon size=\"small\" *ngIf=\"item.reactionThanks\" class=\"icon\" src=\"./assets/icon/smile-active.svg\"></ion-icon>\n      <ion-icon size=\"small\" *ngIf=\"item.reactionHug\" class=\"icon\" src=\"./assets/icon/hug-active.svg\"></ion-icon>\n      <ion-icon size=\"small\" *ngIf=\"item.reactionBookmark\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\"></ion-icon>\n      <ion-icon size=\"small\" *ngIf=\"item.reactionCheckin\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "x+G+":
    /*!***********************************************!*\
      !*** ./src/app/tag-modal/tag-modal.module.ts ***!
      \***********************************************/

    /*! exports provided: TagModalPageModule */

    /***/
    function xG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagModalPageModule", function () {
        return TagModalPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _tag_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tag-modal.page */
      "HUk6");

      var routes = [{
        path: '',
        component: _tag_modal_page__WEBPACK_IMPORTED_MODULE_6__["TagModalPage"]
      }];

      var TagModalPageModule = function TagModalPageModule() {
        _classCallCheck(this, TagModalPageModule);
      };

      TagModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_tag_modal_page__WEBPACK_IMPORTED_MODULE_6__["TagModalPage"]]
      })], TagModalPageModule);
      /***/
    },

    /***/
    "x9SX":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/aspect-ratio/aspect-ratio.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x9SX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"content-wrapper\">\n  <ng-content></ng-content>\n</div>\n";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "zK/y":
    /*!**********************************************************!*\
      !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
      \**********************************************************/

    /*! exports provided: TextShellComponent */

    /***/
    function zKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextShellComponent", function () {
        return TextShellComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_text_shell_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./text-shell.component.html */
      "Qj2i");
      /* harmony import */


      var _text_shell_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./text-shell.component.scss */
      "5ofZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../config/app-shell.config */
      "Kt/9");

      var TextShellComponent = /*#__PURE__*/function () {
        function TextShellComponent() {
          _classCallCheck(this, TextShellComponent);

          // To debug shell styles, change configuration in the assets/app-shell.config.json file
          this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_4__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_4__["AppShellConfig"].settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_4__["AppShellConfig"].settings.debug : false;
          this.textLoaded = false;
        }

        _createClass(TextShellComponent, [{
          key: "data",
          set: function set(val) {
            if (!this.debugMode) {
              this._data = val !== undefined && val !== null ? val : '';
            }

            if (this._data && this._data !== '') {
              this.textLoaded = true;
            } else {
              this.textLoaded = false;
            }
          }
        }]);

        return TextShellComponent;
      }();

      TextShellComponent.ctorParameters = function () {
        return [];
      };

      TextShellComponent.propDecorators = {
        textLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['class.text-loaded']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TextShellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-text-shell',
        template: _raw_loader_text_shell_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_text_shell_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TextShellComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__); // HAMMER TIME


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports, __webpack_require__) {
      var map = {
        "./addmembers/addmembers.module": ["Zxef", "addmembers-addmembers-module"],
        "./admin-categories/admin-categories.module": ["SGmz", "admin-categories-admin-categories-module"],
        "./blockedlist/blockedlist.module": ["Y9ka", "blockedlist-blockedlist-module"],
        "./categories/categories.module": ["kMJQ", "categories-categories-module"],
        "./feed-search/feed-search.module": ["/OJ1", "feed-search-feed-search-module"],
        "./feed/feed.module": ["xQww", "feed-feed-module"],
        "./forgot/forgot.module": ["kgyS", "common", "forgot-forgot-module"],
        "./friends/friends.module": ["fZqB", "common", "friends-friends-module"],
        "./getting-started/getting-started.module": ["Zcw4", "getting-started-getting-started-module"],
        "./group-join/group-join.module": ["Z4nk", "group-join-group-join-module"],
        "./group-search/group-search.module": ["BmgJ", "group-search-group-search-module"],
        "./group/group.module": ["J4zT", "group-group-module"],
        "./groupinfo/groupinfo.module": ["mkRt", "groupinfo-groupinfo-module"],
        "./groups/groups.module": ["zOVB", "groups-groups-module"],
        "./imagemodal/imagemodal.module": ["8E8H"],
        "./login/login.module": ["X3zk", "common", "login-login-module"],
        "./message/message.module": ["3tpA", "message-message-module"],
        "./messages/messages.module": ["TdLt", "messages-messages-module"],
        "./new-category-modal/new-category-modal.module": ["iH78", "new-category-modal-new-category-modal-module"],
        "./new-event/new-event.module": ["uZUT", "default~new-event-new-event-module~new-resources-new-resources-module", "new-event-new-event-module"],
        "./new-poll/new-poll.module": ["EoSc", "new-poll-new-poll-module"],
        "./new-post/new-post.module": ["R4F1", "new-post-new-post-module"],
        "./new-resources/new-resources.module": ["Q9Mr", "default~new-event-new-event-module~new-resources-new-resources-module", "new-resources-new-resources-module"],
        "./newgroup/newgroup.module": ["T2Rd", "newgroup-newgroup-module"],
        "./popover/popover.module": ["p2ut"],
        "./post/post.module": ["WuFp", "post-post-module"],
        "./profile/profile.module": ["cRhG", "common", "profile-profile-module"],
        "./reaction-list-modal/reaction-list-modal.module": ["YXOY"],
        "./register/register.module": ["x5bZ", "common", "register-register-module"],
        "./review-modal/review-modal.module": ["sMbM"],
        "./search-modal/search-modal.module": ["DsDU", "search-modal-search-modal-module"],
        "./tag-modal/tag-modal.module": ["x+G+"],
        "./user-profile-modal/user-profile-modal.module": ["Xs6v"],
        "./userinfo/userinfo.module": ["lgMC", "common", "userinfo-userinfo-module"],
        "./walkthrough/walkthrough.module": ["fE2E", "walkthrough-walkthrough-module"]
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

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "zn8P";
      module.exports = webpackAsyncContext;
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map