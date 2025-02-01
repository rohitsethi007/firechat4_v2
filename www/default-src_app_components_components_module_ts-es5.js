(function () {
  "use strict";

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["default-src_app_components_components_module_ts"], {
    /***/
    45642:
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsModule": function ComponentsModule() {
          return (
            /* binding */
            _ComponentsModule
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shell/shell.module */
      75506);

      var _ComponentsModule = /*#__PURE__*/_createClass(function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      });

      _ComponentsModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__.ShellModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot()],
        declarations: [],
        exports: [_shell_shell_module__WEBPACK_IMPORTED_MODULE_0__.ShellModule]
      })], _ComponentsModule);
      /***/
    },

    /***/
    89330:
    /*!**************************************************************!*\
      !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AspectRatioComponent": function AspectRatioComponent() {
          return (
            /* binding */
            _AspectRatioComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_aspect_ratio_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./aspect-ratio.component.html */
      5399);
      /* harmony import */


      var _aspect_ratio_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./aspect-ratio.component.scss */
      64605);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AspectRatioComponent = /*#__PURE__*/function () {
        function AspectRatioComponent() {
          _classCallCheck(this, AspectRatioComponent);

          this.ratioPadding = '0px';
        }

        return _createClass(AspectRatioComponent, [{
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
      }();

      _AspectRatioComponent.ctorParameters = function () {
        return [];
      };

      _AspectRatioComponent.propDecorators = {
        ratioPadding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
          args: ['style.padding']
        }],
        ratio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _AspectRatioComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-aspect-ratio',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_aspect_ratio_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_aspect_ratio_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])], _AspectRatioComponent);
      /***/
    },

    /***/
    11220:
    /*!**************************************************!*\
      !*** ./src/app/shell/config/app-shell.config.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppShellConfig": function AppShellConfig() {
          return (
            /* binding */
            _AppShellConfig
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      98636); // Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/


      var AppShellConfig_1;

      var _AppShellConfig = AppShellConfig_1 = /*#__PURE__*/function () {
        function AppShellConfig(http) {
          _classCallCheck(this, AppShellConfig);

          this.http = http;
        } // Simplified version from: https://stackoverflow.com/a/49707898/1116959


        return _createClass(AppShellConfig, [{
          key: "load",
          value: function load() {
            var configFile = './assets/config/app-shell.config' + (!(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() ? '.prod' : '') + '.json';
            return this.http.get(configFile).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(function (configSettings) {
              AppShellConfig_1.settings = configSettings;
            })).toPromise()["catch"](function (error) {
              console.log("Could not load file '".concat(configFile, "'"), error);
            });
          }
        }]);
      }();

      _AppShellConfig.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _AppShellConfig = AppShellConfig_1 = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient])], _AppShellConfig);
      /***/
    },

    /***/
    71408:
    /*!************************************************************!*\
      !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageShellComponent": function ImageShellComponent() {
          return (
            /* binding */
            _ImageShellComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_image_shell_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./image-shell.component.html */
      13677);
      /* harmony import */


      var _image_shell_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-shell.component.scss */
      91957);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../config/app-shell.config */
      11220);

      var _ImageShellComponent = /*#__PURE__*/function () {
        function ImageShellComponent(platformId) {
          _classCallCheck(this, ImageShellComponent);

          this.platformId = platformId; // To debug shell styles, change configuration in the assets/app-shell.config.json file

          this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings.debug : false; // tslint:disable-next-line:variable-name

          this._src = ''; // tslint:disable-next-line:variable-name

          this._alt = ''; // tslint:disable-next-line:variable-name

          this._mode = '';
          this.imageLoaded = false;
        }

        return _createClass(ImageShellComponent, [{
          key: "mode",
          get: function get() {
            return this._mode;
          },
          set: function set(val) {
            this._mode = val !== undefined && val !== null ? val : '';
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


            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformServer)(this.platformId)) {
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
        }, {
          key: "_imageLoaded",
          value: function _imageLoaded() {
            this.imageLoaded = true; // If it's a cover image then set the background-image property accordingly

            if (this._mode === 'cover') {
              this.backgroundImage = 'url(' + this._src + ')';
            }
          }
        }]);
      }();

      _ImageShellComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
          }]
        }];
      };

      _ImageShellComponent.propDecorators = {
        imageLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding,
          args: ['class.img-loaded']
        }],
        backgroundImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding,
          args: ['style.backgroundImage']
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostBinding,
          args: ['attr.mode']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }],
        alt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }]
      };
      _ImageShellComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-image-shell',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_image_shell_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_image_shell_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [String])], _ImageShellComponent);
      /***/
    },

    /***/
    75506:
    /*!***************************************!*\
      !*** ./src/app/shell/shell.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShellModule": function ShellModule() {
          return (
            /* binding */
            _ShellModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./aspect-ratio/aspect-ratio.component */
      89330);
      /* harmony import */


      var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-shell/image-shell.component */
      71408);
      /* harmony import */


      var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./text-shell/text-shell.component */
      94840);
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config/app-shell.config */
      11220);

      var _ShellModule = /*#__PURE__*/_createClass(function ShellModule() {
        _classCallCheck(this, ShellModule);
      });

      _ShellModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent, _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent, _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent],
        providers: [// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
        {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__.APP_INITIALIZER,
          useFactory: function useFactory(appShellConfig) {
            return function () {
              return appShellConfig.load();
            };
          },
          deps: [_config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__.AppShellConfig],
          multi: true
        }],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot()],
        exports: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent, _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent, _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent]
      })], _ShellModule);
      /***/
    },

    /***/
    94840:
    /*!**********************************************************!*\
      !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TextShellComponent": function TextShellComponent() {
          return (
            /* binding */
            _TextShellComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_text_shell_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./text-shell.component.html */
      34386);
      /* harmony import */


      var _text_shell_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./text-shell.component.scss */
      22859);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../config/app-shell.config */
      11220);

      var _TextShellComponent = /*#__PURE__*/function () {
        function TextShellComponent() {
          _classCallCheck(this, TextShellComponent);

          // To debug shell styles, change configuration in the assets/app-shell.config.json file
          this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings.debug : false;
          this.textLoaded = false;
        }

        return _createClass(TextShellComponent, [{
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
      }();

      _TextShellComponent.ctorParameters = function () {
        return [];
      };

      _TextShellComponent.propDecorators = {
        textLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding,
          args: ['class.text-loaded']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _TextShellComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-text-shell',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_text_shell_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_text_shell_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      }), (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])], _TextShellComponent);
      /***/
    },

    /***/
    5399:
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shell/aspect-ratio/aspect-ratio.component.html ***!
      \*******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"content-wrapper\">\n  <ng-content></ng-content>\n</div>\n";
      /***/
    },

    /***/
    13677:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shell/image-shell/image-shell.component.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-spinner class=\"spinner\"></ion-spinner>\n<img class=\"inner-img\" [src]=\"_src\" [alt]=\"_alt\" (load)=\"_imageLoaded()\"/>\n<ng-content *ngIf=\"_mode === 'cover'\"></ng-content>\n";
      /***/
    },

    /***/
    34386:
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shell/text-shell/text-shell.component.html ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container>{{ _data }}</ng-container>\n";
      /***/
    },

    /***/
    64605:
    /*!****************************************************************!*\
      !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.scss ***!
      \****************************************************************/

    /***/
    function _(module) {
      module.exports = ":host {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n:host .content-wrapper {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJhc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    91957:
    /*!**************************************************************!*\
      !*** ./src/app/shell/image-shell/image-shell.component.scss ***!
      \**************************************************************/

    /***/
    function _(module) {
      module.exports = ":host {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n:host > .spinner {\n  display: none;\n}\n:host::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n:host:not([mode=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n:host:not([mode=cover]) > .inner-img {\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n}\n:host:not([mode=cover]).img-loaded::before {\n  display: none;\n}\n:host:not([mode=cover]).img-loaded > .inner-img {\n  opacity: 1;\n  visibility: visible;\n}\n:host[mode=cover] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n:host[mode=cover]::before, :host[mode=cover] > .spinner {\n  z-index: -1;\n}\n:host[mode=cover] > .inner-img {\n  display: none;\n  visibility: hidden;\n}\n:host[mode=cover].img-loaded::before {\n  display: none;\n}\n:host([animation=gradient]) {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n:host([animation=gradient])::before {\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  animation: animateBackground 2s ease-in-out infinite;\n}\n:host([animation=gradient]).img-loaded::before {\n  background: none;\n  animation: 0;\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n:host([animation=spinner]) {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n:host([animation=spinner]) > .spinner {\n  display: block;\n  position: absolute;\n  top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n:host([animation=spinner]).img-loaded > .spinner {\n  display: none;\n  visibility: hidden;\n}\n:host(.add-overlay) {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n:host(.add-overlay).img-loaded::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXNoZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSxnQ0FBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQUFGO0FBR0U7RUFDRSxhQUFBO0FBREo7QUFLRTtFQUNFLFdBQUE7RUFDQSxpREFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBSEo7QUFNRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUpKO0FBTUk7RUFDRSxxREFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUFKTjtBQVNNO0VBQ0UsYUFBQTtBQVBSO0FBVU07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQWNFO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQVpKO0FBZUk7RUFFRSxXQUFBO0FBZE47QUFpQkk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFmTjtBQW9CTTtFQUNFLGFBQUE7QUFsQlI7QUF3QkE7RUFDRSxzQ0FBQTtFQUNBLG1DQUFBO0FBckJGO0FBd0JFO0VBQ0Usa0tBQ0U7RUFDRiw0QkFBQTtFQUNBLG9EQUFBO0FBdkJKO0FBNEJJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBMUJOO0FBOEJFO0VBQ0U7SUFDRSw2QkFBQTtFQTVCSjtFQStCRTtJQUNFLDRCQUFBO0VBN0JKO0FBQ0Y7QUFpQ0E7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FBOUJGO0FBZ0NFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSwyREFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7QUE5Qko7QUFrQ0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFoQ047QUFxQ0E7RUFDRSxtREFBQTtBQWxDRjtBQXNDSTtFQUNFLGNBQUE7RUFDQSxpREFBQTtBQXBDTiIsImZpbGUiOiJpbWFnZS1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuM3M7XG4gIHotaW5kZXg6IDI7XG5cbiAgLy8gQnkgZGVmYXVsdCwgaGlkZSB0aGUgc3Bpbm5lclxuICAmID4gLnNwaW5uZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvLyBMb2FkaW5nIGJhY2tncm91bmRcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAmOm5vdChbbW9kZT1cImNvdmVyXCJdKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYgPiAuaW5uZXItaW1nIHtcbiAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyLCBvcGFjaXR5IC41cyBsaW5lYXI7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgICB9XG5cbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGl0IGlzIG1vZGU6IGNvdmVyXG4gICZbbW9kZT1cImNvdmVyXCJdIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAvLyBJbiBjb3ZlciBtb2RlLCB3ZSBjYW4gaGF2ZSBjb250ZW50IGluc2lkZSB0aGUgZWxlbWVudCwgdGh1cyB3ZSBuZWVkIHRvIHB1dCB0aGVzZSBlbGVtZW50cyBiZW5lYXRoXG4gICAgJjo6YmVmb3JlLFxuICAgICYgPiAuc3Bpbm5lciB7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgICYuaW1nLWxvYWRlZCB7XG4gICAgICAvLyBIaWRlIGxvYWRpbmcgYmFja2dyb3VuZCBvbmNlIHRoZSBpbWFnZSBoYXMgbG9hZGVkXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0taW1hZ2Utc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiAjREREO1xuXG4gIC8vIFRoZSBhbmltYXRpb24gdGhhdCBnb2VzIGJlbmVhdGggdGhlIG1hc2tzXG4gICY6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDpcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKSA4JSwgdmFyKC0taW1hZ2Utc2hlbGwtYW5pbWF0aW9uLWNvbG9yKSAxOCUsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgMzMlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICAmLmltZy1sb2FkZWQge1xuICAgIC8vIFJlc2V0IGJhY2tncm91bmQgYW5pbWF0aW9uIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGFuaW1hdGlvbjogMDtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcbiAgICAwJXtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gICAgfVxuXG4gICAgMTAwJXtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1cInNwaW5uZXJcIl0pIHtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDI4cHg7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogI0NDQztcblxuICAmID4gLnNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gY2FsYyh2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpIC8gMikpO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gY2FsYyh2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpIC8gMikpO1xuICAgIHdpZHRoOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBmb250LXNpemU6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgY29sb3I6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3IpO1xuICB9XG5cbiAgJi5pbWctbG9hZGVkIHtcbiAgICAmID4gLnNwaW5uZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoLmFkZC1vdmVybGF5KSB7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcblxuICAmLmltZy1sb2FkZWQge1xuICAgIC8vIEFkZCBiYWNrZ3JvdW5kIG92ZXJsYXkgYWZ0ZXIgdGhlIGltYWdlIGhhcyBsb2FkZWRcbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    22859:
    /*!************************************************************!*\
      !*** ./src/app/shell/text-shell/text-shell.component.scss ***!
      \************************************************************/

    /***/
    function _(module) {
      module.exports = ":host {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  transform-style: preserve-3d;\n  background-clip: content-box;\n}\n\n:host(:not([animation])) {\n  background-image: linear-gradient(to right, #CCC 94% , #FFF 94%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%);\n  background-position: 0 0px;\n  background-size: 100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 1) + (3px * (1 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"1\"] {\n  background-image: linear-gradient(to right, #CCC 90% , #FFF 90%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%);\n  background-position: 0 0px;\n  background-size: 100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 1) + (3px * (1 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"2\"] {\n  background-image: linear-gradient(to right, #CCC 85% , #FFF 85%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 43% , #FFF 43%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 43% , var(--text-shell-background, #FFF) 43%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 2) + (3px * (2 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host(:not([animation]))[lines=\"3\"] {\n  background-image: linear-gradient(to right, #CCC 95% , #FFF 95%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 72% , #FFF 72%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 45% , #FFF 45%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 3) + (3px * (3 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host(:not([animation]))[lines=\"4\"] {\n  background-image: linear-gradient(to right, #CCC 86% , #FFF 86%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 77% , #FFF 77%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 78% , #FFF 78%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 49% , #FFF 49%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 77% , var(--text-shell-background, #FFF) 77%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 49% , var(--text-shell-background, #FFF) 49%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1))),  0 calc((16px * (4 - 1)) + (3px * (4 - 2))),  0 calc((16px * (4 - 1)) + (3px * (4 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 4) + (3px * (4 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host(:not([animation]))[lines=\"5\"] {\n  background-image: linear-gradient(to right, #CCC 85% , #FFF 85%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 62% , #FFF 62%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 74% , #FFF 74%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 74% , #FFF 74%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 47% , #FFF 47%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1))),  0 calc((16px * (4 - 1)) + (3px * (4 - 2))),  0 calc((16px * (4 - 1)) + (3px * (4 - 1))),  0 calc((16px * (5 - 1)) + (3px * (5 - 2))),  0 calc((16px * (5 - 1)) + (3px * (5 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 5) + (3px * (5 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host(:not([animation]))[lines=\"6\"] {\n  background-image: linear-gradient(to right, #CCC 89% , #FFF 89%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 72% , #FFF 72%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 65% , #FFF 65%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 67% , #FFF 67%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 62% , #FFF 62%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 33% , #FFF 33%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 33% , var(--text-shell-background, #FFF) 33%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1))),  0 calc((16px * (4 - 1)) + (3px * (4 - 2))),  0 calc((16px * (4 - 1)) + (3px * (4 - 1))),  0 calc((16px * (5 - 1)) + (3px * (5 - 2))),  0 calc((16px * (5 - 1)) + (3px * (5 - 1))),  0 calc((16px * (6 - 1)) + (3px * (6 - 2))),  0 calc((16px * (6 - 1)) + (3px * (6 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 6) + (3px * (6 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host(:not([animation])).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=bouncing]) {\n  background-image: linear-gradient(to right, #CCC 94% , #FFF 94%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%);\n  background-position: 0 0px;\n  background-size: 100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate;\n  animation-name: animateLine;\n  min-height: calc((16px * 1) + (3px * (1 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% 16px;\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% 16px;\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"1\"] {\n  background-image: linear-gradient(to right, #CCC 93% , #FFF 93%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%);\n  background-position: 0 0px;\n  background-size: 100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate;\n  animation-name: animateLine;\n  min-height: calc((16px * 1) + (3px * (1 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% 16px;\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% 16px;\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"2\"] {\n  background-image: linear-gradient(to right, #CCC 91% , #FFF 91%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 30% , #FFF 30%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 30% , var(--text-shell-background, #FFF) 30%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: animateMultiLine;\n  min-height: calc((16px * 2) + (3px * (2 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% 16px,  100% 3px,  55% 16px;\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% 16px,  100% 3px,  100% 16px;\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"3\"] {\n  background-image: linear-gradient(to right, #CCC 90% , #FFF 90%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 60% , #FFF 60%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 35% , #FFF 35%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 35% , var(--text-shell-background, #FFF) 35%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: animateMultiLine;\n  min-height: calc((16px * 3) + (3px * (3 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% 16px,  100% 3px,  75% 16px,  100% 3px,  55% 16px;\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"4\"] {\n  background-image: linear-gradient(to right, #CCC 92% , #FFF 92%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 72% , #FFF 72%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 65% , #FFF 65%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 48% , #FFF 48%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 48% , var(--text-shell-background, #FFF) 48%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1))),  0 calc((16px * (4 - 1)) + (3px * (4 - 2))),  0 calc((16px * (4 - 1)) + (3px * (4 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: animateMultiLine;\n  min-height: calc((16px * 4) + (3px * (4 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% 16px,  100% 3px,  75% 16px,  100% 3px,  75% 16px,  100% 3px,  55% 16px;\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"5\"] {\n  background-image: linear-gradient(to right, #CCC 90% , #FFF 90%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 64% , #FFF 64%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 63% , #FFF 63%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 80% , #FFF 80%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 39% , #FFF 39%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 39% , var(--text-shell-background, #FFF) 39%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1))),  0 calc((16px * (4 - 1)) + (3px * (4 - 2))),  0 calc((16px * (4 - 1)) + (3px * (4 - 1))),  0 calc((16px * (5 - 1)) + (3px * (5 - 2))),  0 calc((16px * (5 - 1)) + (3px * (5 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: animateMultiLine;\n  min-height: calc((16px * 5) + (3px * (5 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% 16px,  100% 3px,  75% 16px,  100% 3px,  75% 16px,  100% 3px,  75% 16px,  100% 3px,  55% 16px;\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"6\"] {\n  background-image: linear-gradient(to right, #CCC 88% , #FFF 88%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 77% , #FFF 77%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 65% , #FFF 65%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 69% , #FFF 69%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 74% , #FFF 74%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 41% , #FFF 41%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 77% , var(--text-shell-background, #FFF) 77%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 41% , var(--text-shell-background, #FFF) 41%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1))),  0 calc((16px * (4 - 1)) + (3px * (4 - 2))),  0 calc((16px * (4 - 1)) + (3px * (4 - 1))),  0 calc((16px * (5 - 1)) + (3px * (5 - 2))),  0 calc((16px * (5 - 1)) + (3px * (5 - 1))),  0 calc((16px * (6 - 1)) + (3px * (6 - 2))),  0 calc((16px * (6 - 1)) + (3px * (6 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  animation-name: animateMultiLine;\n  min-height: calc((16px * 6) + (3px * (6 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% 16px,  100% 3px,  75% 16px,  100% 3px,  75% 16px,  100% 3px,  75% 16px,  100% 3px,  75% 16px,  100% 3px,  55% 16px;\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n  animation: 0;\n}\n\n:host([animation=gradient]) {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((16px * 1) + (3px * (1 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n  background-size: 800px 104px;\n  animation: animateBackground 2s ease-in-out infinite;\n}\n\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n:host([animation=gradient])::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(to right, #CCC 87% , #FFF 87%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%);\n  background-position: 0 0px;\n  background-size: 100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 1) + (3px * (1 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"] {\n  min-height: calc((16px * 1) + (3px * (1 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"]::after {\n  background-image: linear-gradient(to right, #CCC 88% , #FFF 88%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%);\n  background-position: 0 0px;\n  background-size: 100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 1) + (3px * (1 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"] {\n  min-height: calc((16px * 2) + (3px * (2 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"]::after {\n  background-image: linear-gradient(to right, #CCC 85% , #FFF 85%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 47% , #FFF 47%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 2) + (3px * (2 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"] {\n  min-height: calc((16px * 3) + (3px * (3 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"]::after {\n  background-image: linear-gradient(to right, #CCC 87% , #FFF 87%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 78% , #FFF 78%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 48% , #FFF 48%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 48% , var(--text-shell-background, #FFF) 48%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 3) + (3px * (3 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"] {\n  min-height: calc((16px * 4) + (3px * (4 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"]::after {\n  background-image: linear-gradient(to right, #CCC 85% , #FFF 85%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 78% , #FFF 78%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 75% , #FFF 75%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 30% , #FFF 30%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 30% , var(--text-shell-background, #FFF) 30%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1))),  0 calc((16px * (4 - 1)) + (3px * (4 - 2))),  0 calc((16px * (4 - 1)) + (3px * (4 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 4) + (3px * (4 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"] {\n  min-height: calc((16px * 5) + (3px * (5 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"]::after {\n  background-image: linear-gradient(to right, #CCC 94% , #FFF 94%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 68% , #FFF 68%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 78% , #FFF 78%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 76% , #FFF 76%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 39% , #FFF 39%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 39% , var(--text-shell-background, #FFF) 39%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1))),  0 calc((16px * (4 - 1)) + (3px * (4 - 2))),  0 calc((16px * (4 - 1)) + (3px * (4 - 1))),  0 calc((16px * (5 - 1)) + (3px * (5 - 2))),  0 calc((16px * (5 - 1)) + (3px * (5 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 5) + (3px * (5 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"] {\n  min-height: calc((16px * 6) + (3px * (6 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"]::after {\n  background-image: linear-gradient(to right, #CCC 91% , #FFF 91%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 71% , #FFF 71%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 64% , #FFF 64%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 70% , #FFF 70%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 71% , #FFF 71%),  linear-gradient(to right, #FFF 100%, #FFF 100%),  linear-gradient(to right, #CCC 34% , #FFF 34%);\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);\n  background-position: 0 0px,  0 calc((16px * (2 - 1)) + (3px * (2 - 2))),  0 calc((16px * (2 - 1)) + (3px * (2 - 1))),  0 calc((16px * (3 - 1)) + (3px * (3 - 2))),  0 calc((16px * (3 - 1)) + (3px * (3 - 1))),  0 calc((16px * (4 - 1)) + (3px * (4 - 2))),  0 calc((16px * (4 - 1)) + (3px * (4 - 1))),  0 calc((16px * (5 - 1)) + (3px * (5 - 2))),  0 calc((16px * (5 - 1)) + (3px * (5 - 1))),  0 calc((16px * (6 - 1)) + (3px * (6 - 2))),  0 calc((16px * (6 - 1)) + (3px * (6 - 1)));\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px,  100% 3px,  100% 16px;\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((16px * 6) + (3px * (6 - 1)));\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=gradient]).text-loaded::before, :host([animation=gradient]).text-loaded::after {\n  background: none;\n  animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCJtaXhpbnMvbWFza2VkLWxpbmVzLWJhY2tncm91bmQuc2NzcyIsIm1peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIiwibWl4aW5zL2JvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBR0EsNEJBQUE7QUFSRjs7QUFZQTtFQ1BJLGdFQUFBO0VBQUEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQUEseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDhDQUFBO0VBQUEsNEdBQUE7QUZlRjs7QUFVSTtFQ2JBLGdFQUFBO0VBQUEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQUEseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDhDQUFBO0VBQUEsNEdBQUE7QUZzQkY7O0FBR0k7RUNnQkEsbUtBQUE7RUFBQSx1VkFBQTtFQUNBLG9IQUFBO0VBQUEsZ1BBQUE7RUFDQSxpREFBQTtFQUFBLDhJQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsOENBQUE7RUFBQSw0R0FBQTtBRjZCRjs7QUFKSTtFQ2dCQSxzUUFBQTtFQUFBLGtqQkFBQTtFQUNBLDhNQUFBO0VBQUEsc2NBQUE7RUFDQSx3RUFBQTtFQUFBLG1PQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsOENBQUE7RUFBQSw0R0FBQTtBRm9DRjs7QUFYSTtFQ2dCQSx5V0FBQTtFQUFBLDZ3QkFBQTtFQUNBLHdTQUFBO0VBQUEsNHBCQUFBO0VBQ0EsK0ZBQUE7RUFBQSx3VEFBQTtFQUNBLDRCQUFBO0VDNUNGLDhDQUFBO0VBQUEsNEdBQUE7QUYyQ0Y7O0FBbEJJO0VDZ0JBLDRjQUFBO0VBQUEsdytCQUFBO0VBQ0Esa1lBQUE7RUFBQSxrM0JBQUE7RUFDQSxzSEFBQTtFQUFBLDZZQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsOENBQUE7RUFBQSw0R0FBQTtBRmtERjs7QUF6Qkk7RUNnQkEsK2lCQUFBO0VBQUEsbXNDQUFBO0VBQ0EsNGRBQUE7RUFBQSx3a0NBQUE7RUFDQSw2SUFBQTtFQUFBLGtlQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsOENBQUE7RUFBQSw0R0FBQTtBRnlERjs7QUEzQkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQTZCSjs7QUF4QkE7RUd6QkksZ0VBQUE7RUFBQSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFBQSx5REFBQTtFQUNBLDRCQUFBO0VBRUEsOEJBQUE7RUFDQSwyQkFBQTtFRG5CRiw4Q0FBQTtFQUFBLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIVkY7O0FHdkRJO0VBQ0U7SUFDRSx5QkFBQTtJQUFBLHdEQUFBO0VIeUROO0VHdERJO0lBQ0UsMEJBQUE7SUFBQSx5REFBQTtFSHdETjtBQUNGOztBQXhDSTtFRy9CQSxnRUFBQTtFQUFBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUFBLHlEQUFBO0VBQ0EsNEJBQUE7RUFFQSw4QkFBQTtFQUNBLDJCQUFBO0VEbkJGLDhDQUFBO0VBQUEsNEdBQUE7RUNtRkEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUhXRjs7QUc1RUk7RUFDRTtJQUNFLHlCQUFBO0lBQUEsd0RBQUE7RUg4RU47RUczRUk7SUFDRSwwQkFBQTtJQUFBLHlEQUFBO0VINkVOO0FBQ0Y7O0FBN0RJO0VHa0JBLG1LQUFBO0VBQUEsdVZBQUE7RUFDQSxvSEFBQTtFQUFBLGdQQUFBO0VBQ0EsaURBQUE7RUFBQSw4SUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSxnQ0FBQTtFRHBFRiw4Q0FBQTtFQUFBLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIZ0NGOztBR2hESTtFQUNFO0lBQ0UsK0NBQUE7SUFBQSw0SUFBQTtFSGtETjtFRy9DSTtJQUNFLGlEQUFBO0lBQUEsOElBQUE7RUhpRE47QUFDRjs7QUFsRkk7RUdrQkEsc1FBQUE7RUFBQSxrakJBQUE7RUFDQSw4TUFBQTtFQUFBLHNjQUFBO0VBQ0Esd0VBQUE7RUFBQSxtT0FBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSxnQ0FBQTtFRHBFRiw4Q0FBQTtFQUFBLDRHQUFBO0VDbUZBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FIcURGOztBR3JFSTtFQUNFO0lBQ0UscUVBQUE7SUFBQSxnT0FBQTtFSHVFTjtFR3BFSTtJQUNFLHdFQUFBO0lBQUEsbU9BQUE7RUhzRU47QUFDRjs7QUF2R0k7RUdrQkEseVdBQUE7RUFBQSw2d0JBQUE7RUFDQSx3U0FBQTtFQUFBLDRwQkFBQTtFQUNBLCtGQUFBO0VBQUEsd1RBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0EsZ0NBQUE7RURwRUYsOENBQUE7RUFBQSw0R0FBQTtFQ21GQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBSDBFRjs7QUcxRkk7RUFDRTtJQUNFLDJGQUFBO0lBQUEsb1RBQUE7RUg0Rk47RUd6Rkk7SUFDRSwrRkFBQTtJQUFBLHdUQUFBO0VIMkZOO0FBQ0Y7O0FBNUhJO0VHa0JBLDRjQUFBO0VBQUEsdytCQUFBO0VBQ0Esa1lBQUE7RUFBQSxrM0JBQUE7RUFDQSxzSEFBQTtFQUFBLDZZQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLGdDQUFBO0VEcEVGLDhDQUFBO0VBQUEsNEdBQUE7RUNtRkEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUgrRkY7O0FHL0dJO0VBQ0U7SUFDRSxpSEFBQTtJQUFBLHdZQUFBO0VIaUhOO0VHOUdJO0lBQ0Usc0hBQUE7SUFBQSw2WUFBQTtFSGdITjtBQUNGOztBQWpKSTtFR2tCQSwraUJBQUE7RUFBQSxtc0NBQUE7RUFDQSw0ZEFBQTtFQUFBLHdrQ0FBQTtFQUNBLDZJQUFBO0VBQUEsa2VBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0EsZ0NBQUE7RURwRUYsOENBQUE7RUFBQSw0R0FBQTtFQ21GQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBSG9IRjs7QUdwSUk7RUFDRTtJQUNFLHVJQUFBO0lBQUEsNGRBQUE7RUhzSU47RUduSUk7SUFDRSw2SUFBQTtJQUFBLGtlQUFBO0VIcUlOO0FBQ0Y7O0FBaktFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0FBa0tKOztBQTdKQTtFQUNFLDZCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VFL0RBLDhDQUFBO0VBQUEsNEdBQUE7QUZnT0Y7O0FBMUpFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1LQUNFO0VBQ0YsNEJBQUE7RUFDQSxvREFBQTtBQTJKSjs7QUF4SkU7RUFDRTtJQUNFLDZCQUFBO0VBMEpKO0VBdkpFO0lBQ0UsNEJBQUE7RUF5Sko7QUFDRjs7QUFySkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VDeEZBLGdFQUFBO0VBQUEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQUEseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDhDQUFBO0VBQUEsNEdBQUE7QUZnUUY7O0FBcEpJO0VFNUdGLDhDQUFBO0VBQUEsNEdBQUE7QUZtUUY7O0FBbkpNO0VDcEdGLGdFQUFBO0VBQUEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQUEseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDhDQUFBO0VBQUEsNEdBQUE7QUYwUUY7O0FBOUpJO0VFNUdGLDhDQUFBO0VBQUEsNEdBQUE7QUY2UUY7O0FBN0pNO0VDdkVGLG1LQUFBO0VBQUEsdVZBQUE7RUFDQSxvSEFBQTtFQUFBLGdQQUFBO0VBQ0EsaURBQUE7RUFBQSw4SUFBQTtFQUNBLDRCQUFBO0VDNUNGLDhDQUFBO0VBQUEsNEdBQUE7QUZvUkY7O0FBeEtJO0VFNUdGLDhDQUFBO0VBQUEsNEdBQUE7QUZ1UkY7O0FBdktNO0VDdkVGLHNRQUFBO0VBQUEsa2pCQUFBO0VBQ0EsOE1BQUE7RUFBQSxzY0FBQTtFQUNBLHdFQUFBO0VBQUEsbU9BQUE7RUFDQSw0QkFBQTtFQzVDRiw4Q0FBQTtFQUFBLDRHQUFBO0FGOFJGOztBQWxMSTtFRTVHRiw4Q0FBQTtFQUFBLDRHQUFBO0FGaVNGOztBQWpMTTtFQ3ZFRix5V0FBQTtFQUFBLDZ3QkFBQTtFQUNBLHdTQUFBO0VBQUEsNHBCQUFBO0VBQ0EsK0ZBQUE7RUFBQSx3VEFBQTtFQUNBLDRCQUFBO0VDNUNGLDhDQUFBO0VBQUEsNEdBQUE7QUZ3U0Y7O0FBNUxJO0VFNUdGLDhDQUFBO0VBQUEsNEdBQUE7QUYyU0Y7O0FBM0xNO0VDdkVGLDRjQUFBO0VBQUEsdytCQUFBO0VBQ0Esa1lBQUE7RUFBQSxrM0JBQUE7RUFDQSxzSEFBQTtFQUFBLDZZQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsOENBQUE7RUFBQSw0R0FBQTtBRmtURjs7QUF0TUk7RUU1R0YsOENBQUE7RUFBQSw0R0FBQTtBRnFURjs7QUFyTU07RUN2RUYsK2lCQUFBO0VBQUEsbXNDQUFBO0VBQ0EsNGRBQUE7RUFBQSx3a0NBQUE7RUFDQSw2SUFBQTtFQUFBLGtlQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsOENBQUE7RUFBQSw0R0FBQTtBRjRURjs7QUF0TUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXdNSjs7QUF0TUk7RUFFRSxnQkFBQTtFQUNBLFlBQUE7QUF1TU4iLCJmaWxlIjoidGV4dC1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodFwiO1xuQGltcG9ydCBcIi4vbWl4aW5zL21hc2tlZC1saW5lcy1iYWNrZ3JvdW5kXCI7XG5AaW1wb3J0IFwiLi9taXhpbnMvYm91bmNpbmctbGluZXMtYmFja2dyb3VuZFwiO1xuXG4kbWF4LWxpbmVzLWNvdW50OiA2O1xuXG46aG9zdCB7XG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyOiAzcHg7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQpO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAvLyBUbyBmaXggMXB4IGxpbmUgbWlzYWxpZ25tZW50IGluIGNocm9tZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtY2xpcFxuICAvLyAoSSBhbHNvIG5vdGljZWQgdGhhdCBpZiBJIHNldCB0aGUgY29sb3IgdG8gYSBzb2xpZCBjb2xvciBpbnN0ZWFkIG9mIGhhdmluZyBvcGFjaXR5LCB0aGUgaXNzdWUgZG9lc24ndCBoYXBwZW4pXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG5cbi8vIERlZmF1bHQgc3R5bGVzLiBXaGVuIG5vIGFuaW1hdGlvbiBhdHRyaWJ1dGUgaXMgcHJvdmlkZWRcbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKSB7XG4gIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgxKTtcblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRpKTtcbiAgICB9XG4gIH1cblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gQm91bmNpbmcgbGluZSBsb2FkaW5nIGFuaW1hdGlvblxuOmhvc3QoW2FuaW1hdGlvbj1cImJvdW5jaW5nXCJdKSB7XG4gIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxuICBAaW5jbHVkZSBib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kKDEpO1xuXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heC1saW5lcy1jb3VudCB7XG4gICAgJltsaW5lcz1cIiN7ICRpIH1cIl0ge1xuICAgICAgQGluY2x1ZGUgYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkaSk7XG4gICAgfVxuICB9XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIC8vIDAgaXMgdGhlIGRlZmF1bHQgdmFsdWUgKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1OTYzMDQ0LzExMTY5NTkpXG4gICAgYW5pbWF0aW9uOiAwO1xuICB9XG59XG5cbi8vIEJhY2tncm91bmQgZ3JhZGllbnQgYmVuZWF0aCBtYXNrZWQgbGluZXNcbjpob3N0KFthbmltYXRpb249XCJncmFkaWVudFwiXSkge1xuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogI0ZGRjtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogI0VFRTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcblxuXG4gIC8vIENhbGN1bGF0ZSBkZWZhdWx0IGhlaWdodCBmb3IgMSBsaW5lXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsIDEpO1xuXG4gIC8vIFRoZSBhbmltYXRpb24gdGhhdCBnb2VzIGJlbmVhdGggdGhlIG1hc2tzXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSAzMyUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlQmFja2dyb3VuZCAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZUJhY2tncm91bmQge1xuICAgIDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBtYXNrc1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgLy8gRGVmYXVsdCBvbmUgbGluZSB0ZXh0LXNoZWxsXG4gICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoMSk7XG4gIH1cblxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcbiAgICAgIC8vIENhbGN1bGF0ZSBkZWZhdWx0IGhlaWdodCBmb3IgJGkgbGluZXNcbiAgICAgIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRpKTtcblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBhbmltYXRpb246IDA7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi91dGlsc1wiO1xuQGltcG9ydCBcIi4vYmFja2dyb3VuZC1oZWlnaHRcIjtcblxuQG1peGluIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRsaW5lczogMSkge1xuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xuICAkYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQyk7XG4gICRtYXNrLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xuICAkbGluZS1iZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGJnLXktcG9zOiAwcHg7XG4gICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg4NSwgOTUpfTtcbiAgJGJnLWltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJztcbiAgJGJnLXBvc2l0aW9uOiAnMCAnICsgJGJnLXktcG9zO1xuICAkYmctc2l6ZTogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcblxuICBAaWYgKCRsaW5lcyA9PSAxKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3skYmctaW1hZ2V9O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7JGJnLXBvc2l0aW9ufTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemV9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH0gQGVsc2Uge1xuICAgIEBmb3IgJGkgZnJvbSAyIHRocm91Z2ggJGxpbmVzIHtcbiAgICAgIC8vIEFkZCBzZXBhcmF0b3IgYmV0d2VlbiBsaW5lc1xuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICN7JGxpbmUtYmctY29sb3J9IDEwMCUsICN7JGxpbmUtYmctY29sb3J9IDEwMCUpKTtcbiAgICAgIC8vIFRoaXMgbGluZWFyLWdyYWRpZW50IGFzIHNlcGFyYXRvciBzdGFydHMgYmVsb3cgdGhlIGxhc3QgbGluZSxcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLWhlaWdodCB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDIpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuXG4gICAgICAvLyBBZGQgbmV3IGxpbmVcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgc2hvdWxkIGJlIG5hcnJvdyB0aGFuIHRoZSBvdGhlcnNcbiAgICAgIEBpZiAoJGkgPT0gJGxpbmVzKSB7XG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSgzMCwgNTApfTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oNjAsIDgwKX07XG4gICAgICB9XG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknKTtcbiAgICAgIC8vIFRoaXMgbmV3IGxpbmUgc3RhcnRzIGJlbG93IHRoZSBwcnZpb3VzbHkgYWRkZWQgc2VwYXJhdG9yLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtc3BhY2luZyB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDEpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3t0by1zdHJpbmcoJGJnLWltYWdlLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3t0by1zdHJpbmcoJGJnLXBvc2l0aW9uLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cblxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkbGluZXMpO1xufVxuIiwiQG1peGluIGJhY2tncm91bmQtaGVpZ2h0KCRwcm9wZXJ0eSwgJGxpbmVzOiAxKSB7XG4gICRsaW5lLWhlaWdodDogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gICRsaW5lLXNwYWNpbmc6IHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCk7XG5cbiAgI3skcHJvcGVydHl9OiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAjeyRsaW5lc30pICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skbGluZXN9IC0gMSkpKTtcbn1cbiIsIkBpbXBvcnQgXCIuL3V0aWxzXCI7XG5cbkBtaXhpbiBib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kKCRsaW5lczogMSkge1xuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xuICAkYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQyk7XG4gICRtYXNrLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xuICAkbGluZS1iZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcbiAgJGJnLXktcG9zOiAwcHg7XG4gICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg4NSwgOTUpfTtcbiAgJGJnLWltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJztcbiAgJGJnLXBvc2l0aW9uOiAnMCAnICsgJGJnLXktcG9zO1xuICAkYmctc2l6ZTogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcbiAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206ICc4NSUgJyArICRsaW5lLWhlaWdodDtcbiAgJGJnLXNpemUtYW5pbWF0aW9uLXRvOiAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0O1xuXG4gIEBpZiAoJGxpbmVzID09IDEpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAjeyRiZy1pbWFnZX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3skYmctcG9zaXRpb259O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZX07XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZUxpbmU7XG5cbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVMaW5lIHtcbiAgICAgIDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemUtYW5pbWF0aW9uLWZyb219O1xuICAgICAgfVxuXG4gICAgICAxMDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemUtYW5pbWF0aW9uLXRvfTtcbiAgICAgIH1cbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBmb3IgJGkgZnJvbSAyIHRocm91Z2ggJGxpbmVzIHtcbiAgICAgIC8vIEFkZCBzZXBhcmF0b3IgYmV0d2VlbiBsaW5lc1xuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICN7JGxpbmUtYmctY29sb3J9IDEwMCUsICN7JGxpbmUtYmctY29sb3J9IDEwMCUpKTtcbiAgICAgIC8vIFRoaXMgbGluZWFyLWdyYWRpZW50IGFzIHNlcGFyYXRvciBzdGFydHMgYmVsb3cgdGhlIGxhc3QgbGluZSxcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLWhlaWdodCB0byBvdXIgeS1wb3MgcG9pbnRlclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDIpKSk7XG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuICAgICAgLy8gc2VwYXJhdG9yIGxpbmVzIGhhdmUgdGhlIHNhbWUgaW5pdGlhbCBhbmQgZW5kIHN0YXRlLCB0aHVzIG5vIGFuaW1hdGlvbiBvY2N1cnNcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi10bzogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuXG4gICAgICAvLyBBZGQgbmV3IGxpbmVcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgc2hvdWxkIGJlIG5hcnJvdyB0aGFuIHRoZSBvdGhlcnNcbiAgICAgIEBpZiAoJGkgPT0gJGxpbmVzKSB7XG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSgzMCwgNTApfTtcbiAgICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJzU1JSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oNjAsIDgwKX07XG4gICAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICc3NSUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKScpO1xuICAgICAgLy8gVGhpcyBuZXcgbGluZSBzdGFydHMgYmVsb3cgdGhlIHBydmlvdXNseSBhZGRlZCBzZXBhcmF0b3IsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1zcGFjaW5nIHRvIG91ciB5LXBvcyBwb2ludGVyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMSkpKTtcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi10bzogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3t0by1zdHJpbmcoJGJnLWltYWdlLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3t0by1zdHJpbmcoJGJnLXBvc2l0aW9uLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZSwgJywgJyl9O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcblxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZU11bHRpTGluZSB7XG4gICAgICAwJXtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJywgJyl9O1xuICAgICAgfVxuXG4gICAgICAxMDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJywgJyl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRsaW5lcyk7XG5cbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_components_components_module_ts-es5.js.map