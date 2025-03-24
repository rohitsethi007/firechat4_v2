(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 55553:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsModule: () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.module */ 4635);






let ComponentsModule = class ComponentsModule {};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _shell_shell_module__WEBPACK_IMPORTED_MODULE_0__.ShellModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot()],
  declarations: [],
  exports: [_shell_shell_module__WEBPACK_IMPORTED_MODULE_0__.ShellModule]
})], ComponentsModule);


/***/ }),

/***/ 20979:
/*!**************************************************************!*\
  !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AspectRatioComponent: () => (/* binding */ AspectRatioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _aspect_ratio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aspect-ratio.component.html?ngResource */ 2525);
/* harmony import */ var _aspect_ratio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aspect-ratio.component.scss?ngResource */ 4787);
/* harmony import */ var _aspect_ratio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aspect_ratio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




let AspectRatioComponent = class AspectRatioComponent {
  set ratio(ratio) {
    ratio = ratio !== undefined && ratio !== null ? ratio : {
      w: 1,
      h: 1
    };
    const heightRatio = ratio.h / ratio.w * 100 + '%';
    // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
    this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
  }
  constructor() {
    this.ratioPadding = '0px';
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    ratioPadding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
      args: ['style.padding']
    }],
    ratio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
AspectRatioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-aspect-ratio',
  template: _aspect_ratio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_aspect_ratio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AspectRatioComponent);


/***/ }),

/***/ 64020:
/*!**************************************************!*\
  !*** ./src/app/shell/config/app-shell.config.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppShellConfig: () => (/* binding */ AppShellConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 98764);
// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
var AppShellConfig_1;




let AppShellConfig = class AppShellConfig {
  static #_ = AppShellConfig_1 = this;
  constructor(http) {
    this.http = http;
  }
  // Simplified version from: https://stackoverflow.com/a/49707898/1116959
  load() {
    const configFile = './assets/config/app-shell.config' + (!(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() ? '.prod' : '') + '.json';
    return this.http.get(configFile).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(configSettings => {
      AppShellConfig_1.settings = configSettings;
    })).toPromise().catch(error => {
      console.log(`Could not load file '${configFile}'`, error);
    });
  }
  static #_2 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};
AppShellConfig = AppShellConfig_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], AppShellConfig);


/***/ }),

/***/ 55529:
/*!************************************************************!*\
  !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageShellComponent: () => (/* binding */ ImageShellComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _image_shell_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-shell.component.html?ngResource */ 31187);
/* harmony import */ var _image_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-shell.component.scss?ngResource */ 69345);
/* harmony import */ var _image_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_image_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app-shell.config */ 64020);






let ImageShellComponent = class ImageShellComponent {
  set mode(val) {
    this._mode = val !== undefined && val !== null ? val : '';
  }
  get mode() {
    return this._mode;
  }
  set src(val) {
    if (!this.debugMode) {
      this._src = val !== undefined && val !== null ? val : '';
    }
    if (this._mode === 'cover') {
      // Unset the background-image
      this.backgroundImage = 'unset';
    }
    // Show loading indicator
    // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformServer)(this.platformId)) {
      this.imageLoaded = true;
    } else {
      this.imageLoaded = false;
    }
  }
  set alt(val) {
    this._alt = val !== undefined && val !== null ? val : '';
  }
  constructor(platformId) {
    this.platformId = platformId;
    // To debug shell styles, change configuration in the assets/app-shell.config.json file
    this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings.debug : false;
    // tslint:disable-next-line:variable-name
    this._src = '';
    // tslint:disable-next-line:variable-name
    this._alt = '';
    // tslint:disable-next-line:variable-name
    this._mode = '';
    this.imageLoaded = false;
  }
  _imageLoaded() {
    this.imageLoaded = true;
    // If it's a cover image then set the background-image property accordingly
    if (this._mode === 'cover') {
      this.backgroundImage = 'url(' + this._src + ')';
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
    }]
  }];
  static #_2 = this.propDecorators = {
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
};
ImageShellComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-image-shell',
  template: _image_shell_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_image_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ImageShellComponent);


/***/ }),

/***/ 4635:
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShellModule: () => (/* binding */ ShellModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aspect-ratio/aspect-ratio.component */ 20979);
/* harmony import */ var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-shell/image-shell.component */ 55529);
/* harmony import */ var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-shell/text-shell.component */ 10511);
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app-shell.config */ 64020);









let ShellModule = class ShellModule {};
ShellModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent, _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent, _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent],
  providers: [
  // Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
  {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__.APP_INITIALIZER,
    useFactory: appShellConfig => {
      return () => appShellConfig.load();
    },
    deps: [_config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__.AppShellConfig],
    multi: true
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot()],
  exports: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_0__.AspectRatioComponent, _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_1__.ImageShellComponent, _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_2__.TextShellComponent]
})], ShellModule);


/***/ }),

/***/ 10511:
/*!**********************************************************!*\
  !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextShellComponent: () => (/* binding */ TextShellComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _text_shell_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-shell.component.html?ngResource */ 28222);
/* harmony import */ var _text_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-shell.component.scss?ngResource */ 69139);
/* harmony import */ var _text_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_text_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app-shell.config */ 64020);





let TextShellComponent = class TextShellComponent {
  set data(val) {
    if (!this.debugMode) {
      this._data = val !== undefined && val !== null ? val : '';
    }
    if (this._data && this._data !== '') {
      this.textLoaded = true;
    } else {
      this.textLoaded = false;
    }
  }
  constructor() {
    // To debug shell styles, change configuration in the assets/app-shell.config.json file
    this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__.AppShellConfig.settings.debug : false;
    this.textLoaded = false;
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    textLoaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding,
      args: ['class.text-loaded']
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
TextShellComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-text-shell',
  template: _text_shell_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_text_shell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TextShellComponent);


/***/ }),

/***/ 4787:
/*!***************************************************************************!*\
  !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
}
:host .content-wrapper {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}`, "",{"version":3,"sources":["webpack://./src/app/shell/aspect-ratio/aspect-ratio.component.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;AACF;AACE;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;AACJ","sourcesContent":[":host {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n\n  .content-wrapper {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 69345:
/*!*************************************************************************!*\
  !*** ./src/app/shell/image-shell/image-shell.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --image-shell-loading-background: #EEE;
  --image-shell-border-radius: 0px;
  display: block;
  position: relative;
  height: 100%;
  border-radius: var(--image-shell-border-radius);
  transition: all ease-in-out 0.3s;
  z-index: 2;
}
:host > .spinner {
  display: none;
}
:host::before {
  content: "";
  background: var(--image-shell-loading-background);
  border-radius: var(--image-shell-border-radius);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
:host:not([mode=cover]) {
  width: 100%;
  overflow: hidden;
}
:host:not([mode=cover]) > .inner-img {
  transition: visibility 0s linear, opacity 0.5s linear;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  height: 100%;
  border-radius: var(--image-shell-border-radius);
}
:host:not([mode=cover]).img-loaded::before {
  display: none;
}
:host:not([mode=cover]).img-loaded > .inner-img {
  opacity: 1;
  visibility: visible;
}
:host[mode=cover] {
  background-size: cover;
  background-repeat: no-repeat;
}
:host[mode=cover]::before, :host[mode=cover] > .spinner {
  z-index: -1;
}
:host[mode=cover] > .inner-img {
  display: none;
  visibility: hidden;
}
:host[mode=cover].img-loaded::before {
  display: none;
}

:host([animation=gradient]) {
  --image-shell-loading-background: #EEE;
  --image-shell-animation-color: #DDD;
}
:host([animation=gradient])::before {
  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);
  background-size: 800px 104px;
  animation: animateBackground 2s ease-in-out infinite;
}
:host([animation=gradient]).img-loaded::before {
  background: none;
  animation: 0;
}
@keyframes animateBackground {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

:host([animation=spinner]) {
  --image-shell-spinner-size: 28px;
  --image-shell-spinner-color: #CCC;
}
:host([animation=spinner]) > .spinner {
  display: block;
  position: absolute;
  top: calc(50% - var(--image-shell-spinner-size) / 2);
  left: calc(50% - var(--image-shell-spinner-size) / 2);
  width: var(--image-shell-spinner-size);
  height: var(--image-shell-spinner-size);
  font-size: var(--image-shell-spinner-size);
  line-height: var(--image-shell-spinner-size);
  color: var(--image-shell-spinner-color);
}
:host([animation=spinner]).img-loaded > .spinner {
  display: none;
  visibility: hidden;
}

:host(.add-overlay) {
  --image-shell-overlay-background: rgba(0, 0, 0, .4);
}
:host(.add-overlay).img-loaded::before {
  display: block;
  background: var(--image-shell-overlay-background);
}`, "",{"version":3,"sources":["webpack://./src/app/shell/image-shell/image-shell.component.scss"],"names":[],"mappings":"AAAA;EACE,sCAAA;EACA,gCAAA;EAEA,cAAA;EACA,kBAAA;EACA,YAAA;EACA,+CAAA;EACA,gCAAA;EACA,UAAA;AAAF;AAGE;EACE,aAAA;AADJ;AAKE;EACE,WAAA;EACA,iDAAA;EACA,+CAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;AAHJ;AAME;EACE,WAAA;EACA,gBAAA;AAJJ;AAMI;EACE,qDAAA;EACA,UAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,+CAAA;AAJN;AASM;EACE,aAAA;AAPR;AAUM;EACE,UAAA;EACA,mBAAA;AARR;AAcE;EACE,sBAAA;EACA,4BAAA;AAZJ;AAeI;EAEE,WAAA;AAdN;AAiBI;EACE,aAAA;EACA,kBAAA;AAfN;AAoBM;EACE,aAAA;AAlBR;;AAwBA;EACE,sCAAA;EACA,mCAAA;AArBF;AAwBE;EACE,kKACE;EACF,4BAAA;EACA,oDAAA;AAvBJ;AA4BI;EACE,gBAAA;EACA,YAAA;AA1BN;AA8BE;EACE;IACE,6BAAA;EA5BJ;EA+BE;IACE,4BAAA;EA7BJ;AACF;;AAiCA;EACE,gCAAA;EACA,iCAAA;AA9BF;AAgCE;EACE,cAAA;EACA,kBAAA;EACA,oDAAA;EACA,qDAAA;EACA,sCAAA;EACA,uCAAA;EACA,0CAAA;EACA,4CAAA;EACA,uCAAA;AA9BJ;AAkCI;EACE,aAAA;EACA,kBAAA;AAhCN;;AAqCA;EACE,mDAAA;AAlCF;AAsCI;EACE,cAAA;EACA,iDAAA;AApCN","sourcesContent":[":host {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out .3s;\n  z-index: 2;\n\n  // By default, hide the spinner\n  & > .spinner {\n    display: none;\n  }\n\n  // Loading background\n  &::before {\n    content: '';\n    background: var(--image-shell-loading-background);\n    border-radius: var(--image-shell-border-radius);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  &:not([mode=\"cover\"]) {\n    width: 100%;\n    overflow: hidden;\n\n    & > .inner-img {\n      transition: visibility 0s linear, opacity .5s linear;\n      opacity: 0;\n      visibility: hidden;\n      width: 100%;\n      height: 100%;\n      border-radius: var(--image-shell-border-radius);\n    }\n\n    &.img-loaded {\n      // Hide loading background once the image has loaded\n      &::before {\n        display: none;\n      }\n\n      & > .inner-img {\n        opacity: 1;\n        visibility: visible;\n      }\n    }\n  }\n\n  // If it is mode: cover\n  &[mode=\"cover\"] {\n    background-size: cover;\n    background-repeat: no-repeat;\n\n    // In cover mode, we can have content inside the element, thus we need to put these elements beneath\n    &::before,\n    & > .spinner {\n      z-index: -1;\n    }\n\n    & > .inner-img {\n      display: none;\n      visibility: hidden;\n    }\n\n    &.img-loaded {\n      // Hide loading background once the image has loaded\n      &::before {\n        display: none;\n      }\n    }\n  }\n}\n\n:host([animation=\"gradient\"]) {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n\n  // The animation that goes beneath the masks\n  &::before {\n    background:\n      linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n    background-size: 800px 104px;\n    animation: animateBackground 2s ease-in-out infinite;\n  }\n\n  &.img-loaded {\n    // Reset background animation once the image has loaded\n    &::before {\n      background: none;\n      animation: 0;\n    }\n  }\n\n  @keyframes animateBackground {\n    0%{\n      background-position: -468px 0\n    }\n\n    100%{\n      background-position: 468px 0\n    }\n  }\n}\n\n:host([animation=\"spinner\"]) {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n\n  & > .spinner {\n    display: block;\n    position: absolute;\n    top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n    left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n    width: var(--image-shell-spinner-size);\n    height: var(--image-shell-spinner-size);\n    font-size: var(--image-shell-spinner-size);\n    line-height: var(--image-shell-spinner-size);\n    color: var(--image-shell-spinner-color);\n  }\n\n  &.img-loaded {\n    & > .spinner {\n      display: none;\n      visibility: hidden;\n    }\n  }\n}\n\n:host(.add-overlay) {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n\n  &.img-loaded {\n    // Add background overlay after the image has loaded\n    &::before {\n      display: block;\n      background: var(--image-shell-overlay-background);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 69139:
/*!***********************************************************************!*\
  !*** ./src/app/shell/text-shell/text-shell.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --text-shell-background: transparent;
  --text-shell-line-color: #EEE;
  --text-shell-line-height: 16px;
  --text-shell-line-gutter: 3px;
  display: block;
  position: relative;
  color: transparent;
  background-color: var(--text-shell-background);
  transform-style: preserve-3d;
  background-clip: content-box;
}

:host(:not([animation])) {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%);
  background-position: 0 0px;
  background-size: 100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 1 + var(--text-shell-line-gutter, 3px) * (1 - 1));
}
:host(:not([animation]))[lines="1"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%);
  background-position: 0 0px;
  background-size: 100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 1 + var(--text-shell-line-gutter, 3px) * (1 - 1));
}
:host(:not([animation]))[lines="2"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 2 + var(--text-shell-line-gutter, 3px) * (2 - 1));
}
:host(:not([animation]))[lines="3"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 31% , var(--text-shell-background, #FFF) 31%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 3 + var(--text-shell-line-gutter, 3px) * (3 - 1));
}
:host(:not([animation]))[lines="4"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 41% , var(--text-shell-background, #FFF) 41%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 4 + var(--text-shell-line-gutter, 3px) * (4 - 1));
}
:host(:not([animation]))[lines="5"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 5 + var(--text-shell-line-gutter, 3px) * (5 - 1));
}
:host(:not([animation]))[lines="6"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 41% , var(--text-shell-background, #FFF) 41%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (6 - 1) + var(--text-shell-line-gutter, 3px) * (6 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (6 - 1) + var(--text-shell-line-gutter, 3px) * (6 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 6 + var(--text-shell-line-gutter, 3px) * (6 - 1));
}
:host(:not([animation])).text-loaded {
  background: none;
  min-height: inherit;
  color: inherit;
}

:host([animation=bouncing]) {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%);
  background-position: 0 0px;
  background-size: 100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  animation-direction: alternate;
  animation-name: animateLine;
  min-height: calc(var(--text-shell-line-height, 16px) * 1 + var(--text-shell-line-gutter, 3px) * (1 - 1));
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
}
@keyframes animateLine {
  0% {
    background-size: 85% var(--text-shell-line-height, 16px);
  }
  100% {
    background-size: 100% var(--text-shell-line-height, 16px);
  }
}
:host([animation=bouncing])[lines="1"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%);
  background-position: 0 0px;
  background-size: 100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  animation-direction: alternate;
  animation-name: animateLine;
  min-height: calc(var(--text-shell-line-height, 16px) * 1 + var(--text-shell-line-gutter, 3px) * (1 - 1));
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
}
@keyframes animateLine {
  0% {
    background-size: 85% var(--text-shell-line-height, 16px);
  }
  100% {
    background-size: 100% var(--text-shell-line-height, 16px);
  }
}
:host([animation=bouncing])[lines="2"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  animation-direction: alternate-reverse;
  animation-name: animateMultiLine;
  min-height: calc(var(--text-shell-line-height, 16px) * 2 + var(--text-shell-line-gutter, 3px) * (2 - 1));
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
}
@keyframes animateMultiLine {
  0% {
    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);
  }
  100% {
    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  }
}
:host([animation=bouncing])[lines="3"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 48% , var(--text-shell-background, #FFF) 48%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  animation-direction: alternate-reverse;
  animation-name: animateMultiLine;
  min-height: calc(var(--text-shell-line-height, 16px) * 3 + var(--text-shell-line-gutter, 3px) * (3 - 1));
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
}
@keyframes animateMultiLine {
  0% {
    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);
  }
  100% {
    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  }
}
:host([animation=bouncing])[lines="4"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 46% , var(--text-shell-background, #FFF) 46%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  animation-direction: alternate-reverse;
  animation-name: animateMultiLine;
  min-height: calc(var(--text-shell-line-height, 16px) * 4 + var(--text-shell-line-gutter, 3px) * (4 - 1));
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
}
@keyframes animateMultiLine {
  0% {
    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);
  }
  100% {
    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  }
}
:host([animation=bouncing])[lines="5"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 41% , var(--text-shell-background, #FFF) 41%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  animation-direction: alternate-reverse;
  animation-name: animateMultiLine;
  min-height: calc(var(--text-shell-line-height, 16px) * 5 + var(--text-shell-line-gutter, 3px) * (5 - 1));
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
}
@keyframes animateMultiLine {
  0% {
    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);
  }
  100% {
    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  }
}
:host([animation=bouncing])[lines="6"] {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 44% , var(--text-shell-background, #FFF) 44%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (6 - 1) + var(--text-shell-line-gutter, 3px) * (6 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (6 - 1) + var(--text-shell-line-gutter, 3px) * (6 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  animation-direction: alternate-reverse;
  animation-name: animateMultiLine;
  min-height: calc(var(--text-shell-line-height, 16px) * 6 + var(--text-shell-line-gutter, 3px) * (6 - 1));
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
}
@keyframes animateMultiLine {
  0% {
    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);
  }
  100% {
    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  }
}
:host([animation=bouncing]).text-loaded {
  background: none;
  min-height: inherit;
  color: inherit;
  animation: 0;
}

:host([animation=gradient]) {
  --text-shell-background: #FFF;
  --text-shell-line-color: transparent !important;
  --text-shell-animation-background: #EEE;
  --text-shell-animation-color: #DDD;
  min-height: calc(var(--text-shell-line-height, 16px) * 1 + var(--text-shell-line-gutter, 3px) * (1 - 1));
}
:host([animation=gradient])::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);
  background-size: 800px 104px;
  animation: animateBackground 2s ease-in-out infinite;
}
@keyframes animateBackground {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
:host([animation=gradient])::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%);
  background-position: 0 0px;
  background-size: 100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 1 + var(--text-shell-line-gutter, 3px) * (1 - 1));
}
:host([animation=gradient])[lines="1"] {
  min-height: calc(var(--text-shell-line-height, 16px) * 1 + var(--text-shell-line-gutter, 3px) * (1 - 1));
}
:host([animation=gradient])[lines="1"]::after {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%);
  background-position: 0 0px;
  background-size: 100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 1 + var(--text-shell-line-gutter, 3px) * (1 - 1));
}
:host([animation=gradient])[lines="2"] {
  min-height: calc(var(--text-shell-line-height, 16px) * 2 + var(--text-shell-line-gutter, 3px) * (2 - 1));
}
:host([animation=gradient])[lines="2"]::after {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 30% , var(--text-shell-background, #FFF) 30%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 2 + var(--text-shell-line-gutter, 3px) * (2 - 1));
}
:host([animation=gradient])[lines="3"] {
  min-height: calc(var(--text-shell-line-height, 16px) * 3 + var(--text-shell-line-gutter, 3px) * (3 - 1));
}
:host([animation=gradient])[lines="3"]::after {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 3 + var(--text-shell-line-gutter, 3px) * (3 - 1));
}
:host([animation=gradient])[lines="4"] {
  min-height: calc(var(--text-shell-line-height, 16px) * 4 + var(--text-shell-line-gutter, 3px) * (4 - 1));
}
:host([animation=gradient])[lines="4"]::after {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 30% , var(--text-shell-background, #FFF) 30%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 4 + var(--text-shell-line-gutter, 3px) * (4 - 1));
}
:host([animation=gradient])[lines="5"] {
  min-height: calc(var(--text-shell-line-height, 16px) * 5 + var(--text-shell-line-gutter, 3px) * (5 - 1));
}
:host([animation=gradient])[lines="5"]::after {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 39% , var(--text-shell-background, #FFF) 39%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 5 + var(--text-shell-line-gutter, 3px) * (5 - 1));
}
:host([animation=gradient])[lines="6"] {
  min-height: calc(var(--text-shell-line-height, 16px) * 6 + var(--text-shell-line-gutter, 3px) * (6 - 1));
}
:host([animation=gradient])[lines="6"]::after {
  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 38% , var(--text-shell-background, #FFF) 38%);
  background-position: 0 0px,  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (2 - 1) + var(--text-shell-line-gutter, 3px) * (2 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (3 - 1) + var(--text-shell-line-gutter, 3px) * (3 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (4 - 1) + var(--text-shell-line-gutter, 3px) * (4 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (5 - 1) + var(--text-shell-line-gutter, 3px) * (5 - 1)),  0 calc(var(--text-shell-line-height, 16px) * (6 - 1) + var(--text-shell-line-gutter, 3px) * (6 - 2)),  0 calc(var(--text-shell-line-height, 16px) * (6 - 1) + var(--text-shell-line-gutter, 3px) * (6 - 1));
  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);
  background-repeat: no-repeat;
  min-height: calc(var(--text-shell-line-height, 16px) * 6 + var(--text-shell-line-gutter, 3px) * (6 - 1));
}
:host([animation=gradient]).text-loaded {
  background: none;
  min-height: inherit;
  color: inherit;
}
:host([animation=gradient]).text-loaded::before, :host([animation=gradient]).text-loaded::after {
  background: none;
  animation: 0;
}`, "",{"version":3,"sources":["webpack://./src/app/shell/text-shell/text-shell.component.scss","webpack://./src/app/shell/text-shell/mixins/masked-lines-background.scss","webpack://./src/app/shell/text-shell/mixins/background-height.scss","webpack://./src/app/shell/text-shell/mixins/bouncing-lines-background.scss"],"names":[],"mappings":"AAMA;EACE,oCAAA;EACA,6BAAA;EACA,8BAAA;EACA,6BAAA;EAEA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,8CAAA;EACA,4BAAA;EAGA,4BAAA;AARF;;AAYA;ECPI,4HAAA;EACA,0BAAA;EACA,yDAAA;EACA,4BAAA;ECfF,wGAAA;AFeF;AAUI;ECbA,4HAAA;EACA,0BAAA;EACA,yDAAA;EACA,4BAAA;ECfF,wGAAA;AFsBF;AAGI;ECgBA,uVAAA;EACA,wOAAA;EACA,8IAAA;EACA,4BAAA;EC5CF,wGAAA;AF6BF;AAJI;ECgBA,kjBAAA;EACA,sbAAA;EACA,mOAAA;EACA,4BAAA;EC5CF,wGAAA;AFoCF;AAXI;ECgBA,6wBAAA;EACA,ooBAAA;EACA,wTAAA;EACA,4BAAA;EC5CF,wGAAA;AF2CF;AAlBI;ECgBA,w+BAAA;EACA,k1BAAA;EACA,6YAAA;EACA,4BAAA;EC5CF,wGAAA;AFkDF;AAzBI;ECgBA,msCAAA;EACA,giCAAA;EACA,keAAA;EACA,4BAAA;EC5CF,wGAAA;AFyDF;AA3BE;EACE,gBAAA;EACA,mBAAA;EACA,cAAA;AA6BJ;;AAxBA;EGzBI,4HAAA;EACA,0BAAA;EACA,yDAAA;EACA,4BAAA;EAEA,8BAAA;EACA,2BAAA;EDnBF,wGAAA;ECmFA,6BAAA;EACA,mCAAA;EACA,sCAAA;EACA,sBAAA;AHVF;AGvDI;EACE;IACE,wDAAA;EHyDN;EGtDI;IACE,yDAAA;EHwDN;AACF;AAxCI;EG/BA,4HAAA;EACA,0BAAA;EACA,yDAAA;EACA,4BAAA;EAEA,8BAAA;EACA,2BAAA;EDnBF,wGAAA;ECmFA,6BAAA;EACA,mCAAA;EACA,sCAAA;EACA,sBAAA;AHWF;AG5EI;EACE;IACE,wDAAA;EH8EN;EG3EI;IACE,yDAAA;EH6EN;AACF;AA7DI;EGkBA,uVAAA;EACA,wOAAA;EACA,8IAAA;EACA,4BAAA;EAEA,sCAAA;EACA,gCAAA;EDpEF,wGAAA;ECmFA,6BAAA;EACA,mCAAA;EACA,sCAAA;EACA,sBAAA;AHgCF;AGhDI;EACE;IACE,4IAAA;EHkDN;EG/CI;IACE,8IAAA;EHiDN;AACF;AAlFI;EGkBA,kjBAAA;EACA,sbAAA;EACA,mOAAA;EACA,4BAAA;EAEA,sCAAA;EACA,gCAAA;EDpEF,wGAAA;ECmFA,6BAAA;EACA,mCAAA;EACA,sCAAA;EACA,sBAAA;AHqDF;AGrEI;EACE;IACE,gOAAA;EHuEN;EGpEI;IACE,mOAAA;EHsEN;AACF;AAvGI;EGkBA,6wBAAA;EACA,ooBAAA;EACA,wTAAA;EACA,4BAAA;EAEA,sCAAA;EACA,gCAAA;EDpEF,wGAAA;ECmFA,6BAAA;EACA,mCAAA;EACA,sCAAA;EACA,sBAAA;AH0EF;AG1FI;EACE;IACE,oTAAA;EH4FN;EGzFI;IACE,wTAAA;EH2FN;AACF;AA5HI;EGkBA,w+BAAA;EACA,k1BAAA;EACA,6YAAA;EACA,4BAAA;EAEA,sCAAA;EACA,gCAAA;EDpEF,wGAAA;ECmFA,6BAAA;EACA,mCAAA;EACA,sCAAA;EACA,sBAAA;AH+FF;AG/GI;EACE;IACE,wYAAA;EHiHN;EG9GI;IACE,6YAAA;EHgHN;AACF;AAjJI;EGkBA,msCAAA;EACA,giCAAA;EACA,keAAA;EACA,4BAAA;EAEA,sCAAA;EACA,gCAAA;EDpEF,wGAAA;ECmFA,6BAAA;EACA,mCAAA;EACA,sCAAA;EACA,sBAAA;AHoHF;AGpII;EACE;IACE,4dAAA;EHsIN;EGnII;IACE,keAAA;EHqIN;AACF;AAjKE;EACE,gBAAA;EACA,mBAAA;EACA,cAAA;EAEA,YAAA;AAkKJ;;AA7JA;EACE,6BAAA;EACA,+CAAA;EACA,uCAAA;EACA,kCAAA;EE/DA,wGAAA;AFgOF;AA1JE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,mKACE;EACF,4BAAA;EACA,oDAAA;AA2JJ;AAxJE;EACE;IACE,6BAAA;EA0JJ;EAvJE;IACE,4BAAA;EAyJJ;AACF;AArJE;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;ECxFA,4HAAA;EACA,0BAAA;EACA,yDAAA;EACA,4BAAA;ECfF,wGAAA;AFgQF;AApJI;EE5GF,wGAAA;AFmQF;AAnJM;ECpGF,4HAAA;EACA,0BAAA;EACA,yDAAA;EACA,4BAAA;ECfF,wGAAA;AF0QF;AA9JI;EE5GF,wGAAA;AF6QF;AA7JM;ECvEF,uVAAA;EACA,wOAAA;EACA,8IAAA;EACA,4BAAA;EC5CF,wGAAA;AFoRF;AAxKI;EE5GF,wGAAA;AFuRF;AAvKM;ECvEF,kjBAAA;EACA,sbAAA;EACA,mOAAA;EACA,4BAAA;EC5CF,wGAAA;AF8RF;AAlLI;EE5GF,wGAAA;AFiSF;AAjLM;ECvEF,6wBAAA;EACA,ooBAAA;EACA,wTAAA;EACA,4BAAA;EC5CF,wGAAA;AFwSF;AA5LI;EE5GF,wGAAA;AF2SF;AA3LM;ECvEF,w+BAAA;EACA,k1BAAA;EACA,6YAAA;EACA,4BAAA;EC5CF,wGAAA;AFkTF;AAtMI;EE5GF,wGAAA;AFqTF;AArMM;ECvEF,msCAAA;EACA,giCAAA;EACA,keAAA;EACA,4BAAA;EC5CF,wGAAA;AF4TF;AAtME;EACE,gBAAA;EACA,mBAAA;EACA,cAAA;AAwMJ;AAtMI;EAEE,gBAAA;EACA,YAAA;AAuMN","sourcesContent":["@import \"./mixins/background-height\";\n@import \"./mixins/masked-lines-background\";\n@import \"./mixins/bouncing-lines-background\";\n\n$max-lines-count: 6;\n\n:host {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  transform-style: preserve-3d;\n  // To fix 1px line misalignment in chrome: https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip\n  // (I also noticed that if I set the color to a solid color instead of having opacity, the issue doesn't happen)\n  background-clip: content-box;\n}\n\n// Default styles. When no animation attribute is provided\n:host(:not([animation])) {\n  // Default one line text-shell\n  @include masked-lines-background(1);\n\n  // Support for [lines] attribute\n  @for $i from 1 through $max-lines-count {\n    &[lines=\"#{ $i }\"] {\n      @include masked-lines-background($i);\n    }\n  }\n\n  &.text-loaded {\n    background: none;\n    min-height: inherit;\n    color: inherit;\n  }\n}\n\n// Bouncing line loading animation\n:host([animation=\"bouncing\"]) {\n  // Default one line text-shell\n  @include bouncing-lines-background(1);\n\n  // Support for [lines] attribute\n  @for $i from 1 through $max-lines-count {\n    &[lines=\"#{ $i }\"] {\n      @include bouncing-lines-background($i);\n    }\n  }\n\n  &.text-loaded {\n    background: none;\n    min-height: inherit;\n    color: inherit;\n    // 0 is the default value (see: https://stackoverflow.com/a/15963044/1116959)\n    animation: 0;\n  }\n}\n\n// Background gradient beneath masked lines\n:host([animation=\"gradient\"]) {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n\n\n  // Calculate default height for 1 line\n  @include background-height(min-height, 1);\n\n  // The animation that goes beneath the masks\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background:\n      linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n    background-size: 800px 104px;\n    animation: animateBackground 2s ease-in-out infinite;\n  }\n\n  @keyframes animateBackground {\n    0%{\n      background-position: -468px 0\n    }\n\n    100%{\n      background-position: 468px 0\n    }\n  }\n\n  // The masks\n  &::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n\n    // Default one line text-shell\n    @include masked-lines-background(1);\n  }\n\n  // Support for [lines] attribute\n  @for $i from 1 through $max-lines-count {\n    &[lines=\"#{ $i }\"] {\n      // Calculate default height for $i lines\n      @include background-height(min-height, $i);\n\n      &::after {\n        @include masked-lines-background($i);\n      }\n    }\n  }\n\n  &.text-loaded {\n    background: none;\n    min-height: inherit;\n    color: inherit;\n\n    &::before,\n    &::after {\n      background: none;\n      animation: 0;\n    }\n  }\n}\n","@import \"./utils\";\n@import \"./background-height\";\n\n@mixin masked-lines-background($lines: 1) {\n  $line-height: var(--text-shell-line-height, 16px);\n  $line-spacing: var(--text-shell-line-gutter, 3px);\n  $bg-color: var(--text-shell-line-color, #CCC);\n  $mask-color: var(--text-shell-background, #FFF);\n  $line-bg-color: var(--text-shell-background, #FFF);\n  $bg-y-pos: 0px;\n  $rand-width: #{randomNum(85, 95)};\n  $bg-image: 'linear-gradient(to right, ' + $bg-color + ' ' + $rand-width + '% , ' + $mask-color + ' ' + $rand-width + '%)';\n  $bg-position: '0 ' + $bg-y-pos;\n  $bg-size: '100% ' + $line-height;\n\n  @if ($lines == 1) {\n    background-image: #{$bg-image};\n    background-position: #{$bg-position};\n    background-size: #{$bg-size};\n    background-repeat: no-repeat;\n  } @else {\n    @for $i from 2 through $lines {\n      // Add separator between lines\n      $bg-image: append($bg-image, linear-gradient(to right, #{$line-bg-color} 100%, #{$line-bg-color} 100%));\n      // This linear-gradient as separator starts below the last line,\n      // so we have to add $line-height to our y-pos pointer\n      $bg-y-pos: calc((#{$line-height} * (#{$i} - 1)) + (#{$line-spacing} * (#{$i} - 2)));\n      $bg-position: append($bg-position, '0 ' + $bg-y-pos);\n      $bg-size: append($bg-size, '100% ' + $line-spacing);\n\n      // Add new line\n      // The last line should be narrow than the others\n      @if ($i == $lines) {\n        $rand-width: #{randomNum(30, 50)};\n      } @else {\n        $rand-width: #{randomNum(60, 80)};\n      }\n      $bg-image: append($bg-image, 'linear-gradient(to right, ' + $bg-color + ' ' + $rand-width + '% , ' + $mask-color + ' ' + $rand-width + '%)');\n      // This new line starts below the prviously added separator,\n      // so we have to add $line-spacing to our y-pos pointer\n      $bg-y-pos: calc((#{$line-height} * (#{$i} - 1)) + (#{$line-spacing} * (#{$i} - 1)));\n      $bg-position: append($bg-position, '0 ' + $bg-y-pos);\n      $bg-size: append($bg-size, '100% ' + $line-height);\n    }\n\n    background-image: #{to-string($bg-image, ', ')};\n    background-position: #{to-string($bg-position, ', ')};\n    background-size: #{to-string($bg-size, ', ')};\n    background-repeat: no-repeat;\n  }\n\n  @include background-height(min-height, $lines);\n}\n","@mixin background-height($property, $lines: 1) {\n  $line-height: var(--text-shell-line-height, 16px);\n  $line-spacing: var(--text-shell-line-gutter, 3px);\n\n  #{$property}: calc((#{$line-height} * #{$lines}) + (#{$line-spacing} * (#{$lines} - 1)));\n}\n","@import \"./utils\";\n\n@mixin bouncing-lines-background($lines: 1) {\n  $line-height: var(--text-shell-line-height, 16px);\n  $line-spacing: var(--text-shell-line-gutter, 3px);\n  $bg-color: var(--text-shell-line-color, #CCC);\n  $mask-color: var(--text-shell-background, #FFF);\n  $line-bg-color: var(--text-shell-background, #FFF);\n  $bg-y-pos: 0px;\n  $rand-width: #{randomNum(85, 95)};\n  $bg-image: 'linear-gradient(to right, ' + $bg-color + ' ' + $rand-width + '% , ' + $mask-color + ' ' + $rand-width + '%)';\n  $bg-position: '0 ' + $bg-y-pos;\n  $bg-size: '100% ' + $line-height;\n  $bg-size-animation-from: '85% ' + $line-height;\n  $bg-size-animation-to: '100% ' + $line-height;\n\n  @if ($lines == 1) {\n    background-image: #{$bg-image};\n    background-position: #{$bg-position};\n    background-size: #{$bg-size};\n    background-repeat: no-repeat;\n\n    animation-direction: alternate;\n    animation-name: animateLine;\n\n    @keyframes animateLine {\n      0%{\n        background-size: #{$bg-size-animation-from};\n      }\n\n      100%{\n        background-size: #{$bg-size-animation-to};\n      }\n    }\n  } @else {\n    @for $i from 2 through $lines {\n      // Add separator between lines\n      $bg-image: append($bg-image, linear-gradient(to right, #{$line-bg-color} 100%, #{$line-bg-color} 100%));\n      // This linear-gradient as separator starts below the last line,\n      // so we have to add $line-height to our y-pos pointer\n      $bg-y-pos: calc((#{$line-height} * (#{$i} - 1)) + (#{$line-spacing} * (#{$i} - 2)));\n      $bg-position: append($bg-position, '0 ' + $bg-y-pos);\n      $bg-size: append($bg-size, '100% ' + $line-spacing);\n      // separator lines have the same initial and end state, thus no animation occurs\n      $bg-size-animation-from: append($bg-size-animation-from, '100% ' + $line-spacing);\n      $bg-size-animation-to: append($bg-size-animation-to, '100% ' + $line-spacing);\n\n      // Add new line\n      // The last line should be narrow than the others\n      @if ($i == $lines) {\n        $rand-width: #{randomNum(30, 50)};\n        $bg-size-animation-from: append($bg-size-animation-from, '55% ' + $line-height);\n      } @else {\n        $rand-width: #{randomNum(60, 80)};\n        $bg-size-animation-from: append($bg-size-animation-from, '75% ' + $line-height);\n      }\n\n      $bg-image: append($bg-image, 'linear-gradient(to right, ' + $bg-color + ' ' + $rand-width + '% , ' + $mask-color + ' ' + $rand-width + '%)');\n      // This new line starts below the prviously added separator,\n      // so we have to add $line-spacing to our y-pos pointer\n      $bg-y-pos: calc((#{$line-height} * (#{$i} - 1)) + (#{$line-spacing} * (#{$i} - 1)));\n      $bg-position: append($bg-position, '0 ' + $bg-y-pos);\n      $bg-size: append($bg-size, '100% ' + $line-height);\n      $bg-size-animation-to: append($bg-size-animation-to, '100% ' + $line-height);\n    }\n\n    background-image: #{to-string($bg-image, ', ')};\n    background-position: #{to-string($bg-position, ', ')};\n    background-size: #{to-string($bg-size, ', ')};\n    background-repeat: no-repeat;\n\n    animation-direction: alternate-reverse;\n    animation-name: animateMultiLine;\n\n    @keyframes animateMultiLine {\n      0%{\n        background-size: #{to-string($bg-size-animation-from, ', ')};\n      }\n\n      100%{\n        background-size: #{to-string($bg-size-animation-to, ', ')};\n      }\n    }\n  }\n\n  @include background-height(min-height, $lines);\n\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2525:
/*!***************************************************************************!*\
  !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"content-wrapper\">\n  <ng-content></ng-content>\n</div>\n";

/***/ }),

/***/ 31187:
/*!*************************************************************************!*\
  !*** ./src/app/shell/image-shell/image-shell.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-spinner class=\"spinner\"></ion-spinner>\n<img class=\"inner-img\" [src]=\"_src\" [alt]=\"_alt\" (load)=\"_imageLoaded()\"/>\n<ng-content *ngIf=\"_mode === 'cover'\"></ng-content>\n";

/***/ }),

/***/ 28222:
/*!***********************************************************************!*\
  !*** ./src/app/shell/text-shell/text-shell.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container>{{ _data }}</ng-container>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map