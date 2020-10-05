(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rohisethi\Documents\ionic\firechat4_v2\src\main.ts */"zUnb");


/***/ }),

/***/ "2MtO":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating-input/rating-input.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button class=\"rating-icon\" fill=\"clear\" shape=\"round\" *ngFor=\"let r of range; let i = index\" (click)=\"rate(i + 1)\">\r\n\t<ion-icon slot=\"icon-only\" [name]=\"value === undefined ? (r === 1 ? 'star' : (r === 2 ? 'star-half' : 'star-outline')) : (value > i ? (value < i+1 ? 'star-half' : 'star') : 'star-outline')\"></ion-icon>\r\n</ion-button>\r\n");

/***/ }),

/***/ "2gss":
/*!************************************************************!*\
  !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
  \************************************************************/
/*! exports provided: ImageShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageShellComponent", function() { return ImageShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_image_shell_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./image-shell.component.html */ "7EgT");
/* harmony import */ var _image_shell_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-shell.component.scss */ "DenP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/app-shell.config */ "Kt/9");






let ImageShellComponent = class ImageShellComponent {
    constructor(platformId) {
        this.platformId = platformId;
        // To debug shell styles, change configuration in the assets/app-shell.config.json file
        this.debugMode = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__["AppShellConfig"].settings.debug) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_5__["AppShellConfig"].settings.debug : false;
        // tslint:disable-next-line:variable-name
        this._src = '';
        // tslint:disable-next-line:variable-name
        this._alt = '';
        // tslint:disable-next-line:variable-name
        this._mode = '';
        this.imageLoaded = false;
    }
    set mode(val) {
        this._mode = (val !== undefined && val !== null) ? val : '';
    }
    get mode() {
        return this._mode;
    }
    set src(val) {
        if (!this.debugMode) {
            this._src = (val !== undefined && val !== null) ? val : '';
        }
        if (this._mode === 'cover') {
            // Unset the background-image
            this.backgroundImage = 'unset';
        }
        // Show loading indicator
        // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this.platformId)) {
            this.imageLoaded = true;
        }
        else {
            this.imageLoaded = false;
        }
    }
    set alt(val) {
        this._alt = (val !== undefined && val !== null) ? val : '';
    }
    _imageLoaded() {
        this.imageLoaded = true;
        // If it's a cover image then set the background-image property accordingly
        if (this._mode === 'cover') {
            this.backgroundImage = 'url(' + this._src + ')';
        }
    }
};
ImageShellComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] }
];
ImageShellComponent.propDecorators = {
    imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.img-loaded',] }],
    backgroundImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.backgroundImage',] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.mode',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    alt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ImageShellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-image-shell',
        template: _raw_loader_image_shell_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_shell_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])
], ImageShellComponent);



/***/ }),

/***/ "3TL5":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-wrapper/checkbox-wrapper.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\r\n");

/***/ }),

/***/ "5ofZ":
/*!************************************************************!*\
  !*** ./src/app/shell/text-shell/text-shell.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  transform-style: preserve-3d;\n  background-clip: content-box;\n}\n\n:host(:not([animation])) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"1\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"2\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 35% , var(--text-shell-background, #FFF) 35%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host(:not([animation]))[lines=\"3\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 33% , var(--text-shell-background, #FFF) 33%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host(:not([animation]))[lines=\"4\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 41% , var(--text-shell-background, #FFF) 41%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host(:not([animation]))[lines=\"5\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 46% , var(--text-shell-background, #FFF) 46%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host(:not([animation]))[lines=\"6\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 43% , var(--text-shell-background, #FFF) 43%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host(:not([animation])).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=bouncing]) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"1\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"2\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 30% , var(--text-shell-background, #FFF) 30%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"3\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 40% , var(--text-shell-background, #FFF) 40%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"4\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 43% , var(--text-shell-background, #FFF) 43%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"5\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 39% , var(--text-shell-background, #FFF) 39%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"6\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n  -webkit-animation: 0;\n          animation: 0;\n}\n\n:host([animation=gradient]) {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n:host([animation=gradient])::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 33% , var(--text-shell-background, #FFF) 33%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 64% , var(--text-shell-background, #FFF) 64%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 31% , var(--text-shell-background, #FFF) 31%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 48% , var(--text-shell-background, #FFF) 48%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 77% , var(--text-shell-background, #FFF) 77%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 38% , var(--text-shell-background, #FFF) 38%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=gradient]).text-loaded::before, :host([animation=gradient]).text-loaded::after {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9ib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSw0QkFBQTtFQUdBLDRCQUFBO0FBUkY7O0FBWUE7RUNQSSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGZUY7O0FBVUk7RUNiQSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGc0JGOztBQUdJO0VDZ0JBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGNkJGOztBQUpJO0VDZ0JBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRm9DRjs7QUFYSTtFQ2dCQSw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGMkNGOztBQWxCSTtFQ2dCQSx3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGa0RGOztBQXpCSTtFQ2dCQSxtc0NBQUE7RUFDQSx3a0NBQUE7RUFDQSxrZUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGeURGOztBQTNCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBNkJKOztBQXhCQTtFR3pCSSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VEbkJGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhWRjs7QUd2REk7RUFDRTtJQUNFLHdEQUFBO0VIeUROO0VHdERJO0lBQ0UseURBQUE7RUh3RE47QUFDRjs7QUcvREk7RUFDRTtJQUNFLHdEQUFBO0VIeUROO0VHdERJO0lBQ0UseURBQUE7RUh3RE47QUFDRjs7QUF4Q0k7RUcvQkEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFRG5CRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIV0Y7O0FHNUVJO0VBQ0U7SUFDRSx3REFBQTtFSDhFTjtFRzNFSTtJQUNFLHlEQUFBO0VINkVOO0FBQ0Y7O0FBN0RJO0VHa0JBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhnQ0Y7O0FHaERJO0VBQ0U7SUFDRSw0SUFBQTtFSGtETjtFRy9DSTtJQUNFLDhJQUFBO0VIaUROO0FBQ0Y7O0FHeERJO0VBQ0U7SUFDRSw0SUFBQTtFSGtETjtFRy9DSTtJQUNFLDhJQUFBO0VIaUROO0FBQ0Y7O0FBbEZJO0VHa0JBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIcURGOztBR3JFSTtFQUNFO0lBQ0UsZ09BQUE7RUh1RU47RUdwRUk7SUFDRSxtT0FBQTtFSHNFTjtBQUNGOztBQXZHSTtFR2tCQSw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUgwRUY7O0FHMUZJO0VBQ0U7SUFDRSxvVEFBQTtFSDRGTjtFR3pGSTtJQUNFLHdUQUFBO0VIMkZOO0FBQ0Y7O0FBNUhJO0VHa0JBLHcrQkFBQTtFQUNBLGszQkFBQTtFQUNBLDZZQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSCtGRjs7QUcvR0k7RUFDRTtJQUNFLHdZQUFBO0VIaUhOO0VHOUdJO0lBQ0UsNllBQUE7RUhnSE47QUFDRjs7QUFqSkk7RUdrQkEsbXNDQUFBO0VBQ0Esd2tDQUFBO0VBQ0Esa2VBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIb0hGOztBR3BJSTtFQUNFO0lBQ0UsNGRBQUE7RUhzSU47RUduSUk7SUFDRSxrZUFBQTtFSHFJTjtBQUNGOztBQWpLRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7VUFBQSxZQUFBO0FBa0tKOztBQTdKQTtFQUNFLDZCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VFL0RBLDRHQUFBO0FGZ09GOztBQTFKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtS0FDRTtFQUNGLDRCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQTJKSjs7QUF4SkU7RUFDRTtJQUNFLDZCQUFBO0VBMEpKO0VBdkpFO0lBQ0UsNEJBQUE7RUF5Sko7QUFDRjs7QUFoS0U7RUFDRTtJQUNFLDZCQUFBO0VBMEpKO0VBdkpFO0lBQ0UsNEJBQUE7RUF5Sko7QUFDRjs7QUFySkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VDeEZBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZnUUY7O0FBcEpJO0VFNUdGLDRHQUFBO0FGbVFGOztBQW5KTTtFQ3BHRiw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGMFFGOztBQTlKSTtFRTVHRiw0R0FBQTtBRjZRRjs7QUE3Sk07RUN2RUYsdVZBQUE7RUFDQSxnUEFBQTtFQUNBLDhJQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZvUkY7O0FBeEtJO0VFNUdGLDRHQUFBO0FGdVJGOztBQXZLTTtFQ3ZFRixrakJBQUE7RUFDQSxzY0FBQTtFQUNBLG1PQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY4UkY7O0FBbExJO0VFNUdGLDRHQUFBO0FGaVNGOztBQWpMTTtFQ3ZFRiw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGd1NGOztBQTVMSTtFRTVHRiw0R0FBQTtBRjJTRjs7QUEzTE07RUN2RUYsdytCQUFBO0VBQ0EsazNCQUFBO0VBQ0EsNllBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRmtURjs7QUF0TUk7RUU1R0YsNEdBQUE7QUZxVEY7O0FBck1NO0VDdkVGLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY0VEY7O0FBdE1FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF3TUo7O0FBdE1JO0VBRUUsZ0JBQUE7RUFDQSxvQkFBQTtVQUFBLFlBQUE7QUF1TU4iLCJmaWxlIjoic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL3RleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9taXhpbnMvYmFja2dyb3VuZC1oZWlnaHRcIjtcclxuQGltcG9ydCBcIi4vbWl4aW5zL21hc2tlZC1saW5lcy1iYWNrZ3JvdW5kXCI7XHJcbkBpbXBvcnQgXCIuL21peGlucy9ib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kXCI7XHJcblxyXG4kbWF4LWxpbmVzLWNvdW50OiA2O1xyXG5cclxuOmhvc3Qge1xyXG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogI0VFRTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyOiAzcHg7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kKTtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIC8vIFRvIGZpeCAxcHggbGluZSBtaXNhbGlnbm1lbnQgaW4gY2hyb21lOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1jbGlwXHJcbiAgLy8gKEkgYWxzbyBub3RpY2VkIHRoYXQgaWYgSSBzZXQgdGhlIGNvbG9yIHRvIGEgc29saWQgY29sb3IgaW5zdGVhZCBvZiBoYXZpbmcgb3BhY2l0eSwgdGhlIGlzc3VlIGRvZXNuJ3QgaGFwcGVuKVxyXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbi8vIERlZmF1bHQgc3R5bGVzLiBXaGVuIG5vIGFuaW1hdGlvbiBhdHRyaWJ1dGUgaXMgcHJvdmlkZWRcclxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpIHtcclxuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcclxuICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgxKTtcclxuXHJcbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xyXG4gICAgJltsaW5lcz1cIiN7ICRpIH1cIl0ge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCb3VuY2luZyBsaW5lIGxvYWRpbmcgYW5pbWF0aW9uXHJcbjpob3N0KFthbmltYXRpb249XCJib3VuY2luZ1wiXSkge1xyXG4gIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxyXG4gIEBpbmNsdWRlIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoMSk7XHJcblxyXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcclxuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcclxuICAgICAgQGluY2x1ZGUgYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAvLyAwIGlzIHRoZSBkZWZhdWx0IHZhbHVlIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTk2MzA0NC8xMTE2OTU5KVxyXG4gICAgYW5pbWF0aW9uOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQmFja2dyb3VuZCBncmFkaWVudCBiZW5lYXRoIG1hc2tlZCBsaW5lc1xyXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcclxuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogI0ZGRjtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6ICNFRUU7XHJcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcclxuXHJcblxyXG4gIC8vIENhbGN1bGF0ZSBkZWZhdWx0IGhlaWdodCBmb3IgMSBsaW5lXHJcbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgMSk7XHJcblxyXG4gIC8vIFRoZSBhbmltYXRpb24gdGhhdCBnb2VzIGJlbmVhdGggdGhlIG1hc2tzXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSAzMyUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcclxuICAgIDAle1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxyXG4gICAgfVxyXG5cclxuICAgIDEwMCV7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFRoZSBtYXNrc1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBvbmUgbGluZSB0ZXh0LXNoZWxsXHJcbiAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgxKTtcclxuICB9XHJcblxyXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcclxuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcclxuICAgICAgLy8gQ2FsY3VsYXRlIGRlZmF1bHQgaGVpZ2h0IGZvciAkaSBsaW5lc1xyXG4gICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkaSk7XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcblxyXG4gICAgJjo6YmVmb3JlLFxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBhbmltYXRpb246IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3V0aWxzXCI7XHJcbkBpbXBvcnQgXCIuL2JhY2tncm91bmQtaGVpZ2h0XCI7XHJcblxyXG5AbWl4aW4gbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGxpbmVzOiAxKSB7XHJcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcclxuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xyXG4gICRiZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKTtcclxuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcclxuICAkbGluZS1iZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcclxuICAkYmcteS1wb3M6IDBweDtcclxuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XHJcbiAgJGJnLWltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJztcclxuICAkYmctcG9zaXRpb246ICcwICcgKyAkYmcteS1wb3M7XHJcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBpZiAoJGxpbmVzID09IDEpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7JGJnLWltYWdlfTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7JGJnLXBvc2l0aW9ufTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZX07XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAkbGluZXMge1xyXG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcclxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICN7JGxpbmUtYmctY29sb3J9IDEwMCUsICN7JGxpbmUtYmctY29sb3J9IDEwMCUpKTtcclxuICAgICAgLy8gVGhpcyBsaW5lYXItZ3JhZGllbnQgYXMgc2VwYXJhdG9yIHN0YXJ0cyBiZWxvdyB0aGUgbGFzdCBsaW5lLFxyXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDIpKSk7XHJcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XHJcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcclxuXHJcbiAgICAgIC8vIEFkZCBuZXcgbGluZVxyXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXHJcbiAgICAgIEBpZiAoJGkgPT0gJGxpbmVzKSB7XHJcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDMwLCA1MCl9O1xyXG4gICAgICB9IEBlbHNlIHtcclxuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oNjAsIDgwKX07XHJcbiAgICAgIH1cclxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJyk7XHJcbiAgICAgIC8vIFRoaXMgbmV3IGxpbmUgc3RhcnRzIGJlbG93IHRoZSBwcnZpb3VzbHkgYWRkZWQgc2VwYXJhdG9yLFxyXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1zcGFjaW5nIHRvIG91ciB5LXBvcyBwb2ludGVyXHJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAxKSkpO1xyXG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xyXG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAje3RvLXN0cmluZygkYmctaW1hZ2UsICcsICcpfTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZSwgJywgJyl9O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRsaW5lcyk7XHJcbn1cclxuIiwiQG1peGluIGJhY2tncm91bmQtaGVpZ2h0KCRwcm9wZXJ0eSwgJGxpbmVzOiAxKSB7XHJcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcclxuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xyXG5cclxuICAjeyRwcm9wZXJ0eX06IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICN7JGxpbmVzfSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRsaW5lc30gLSAxKSkpO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3V0aWxzXCI7XHJcblxyXG5AbWl4aW4gYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcclxuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xyXG4gICRsaW5lLXNwYWNpbmc6IHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCk7XHJcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xyXG4gICRtYXNrLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xyXG4gICRsaW5lLWJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xyXG4gICRiZy15LXBvczogMHB4O1xyXG4gICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg4NSwgOTUpfTtcclxuICAkYmctaW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknO1xyXG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcclxuICAkYmctc2l6ZTogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcclxuICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogJzg1JSAnICsgJGxpbmUtaGVpZ2h0O1xyXG4gICRiZy1zaXplLWFuaW1hdGlvbi10bzogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcclxuXHJcbiAgQGlmICgkbGluZXMgPT0gMSkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3skYmctaW1hZ2V9O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3skYmctcG9zaXRpb259O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplfTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVMaW5lO1xyXG5cclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUxpbmUge1xyXG4gICAgICAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemUtYW5pbWF0aW9uLWZyb219O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZS1hbmltYXRpb24tdG99O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XHJcbiAgICAgIC8vIEFkZCBzZXBhcmF0b3IgYmV0d2VlbiBsaW5lc1xyXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSkpO1xyXG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXHJcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLWhlaWdodCB0byBvdXIgeS1wb3MgcG9pbnRlclxyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMikpKTtcclxuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcclxuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xyXG4gICAgICAvLyBzZXBhcmF0b3IgbGluZXMgaGF2ZSB0aGUgc2FtZSBpbml0aWFsIGFuZCBlbmQgc3RhdGUsIHRodXMgbm8gYW5pbWF0aW9uIG9jY3Vyc1xyXG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XHJcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi10bzogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xyXG5cclxuICAgICAgLy8gQWRkIG5ldyBsaW5lXHJcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgc2hvdWxkIGJlIG5hcnJvdyB0aGFuIHRoZSBvdGhlcnNcclxuICAgICAgQGlmICgkaSA9PSAkbGluZXMpIHtcclxuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XHJcbiAgICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJzU1JSAnICsgJGxpbmUtaGVpZ2h0KTtcclxuICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xyXG4gICAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICc3NSUgJyArICRsaW5lLWhlaWdodCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKScpO1xyXG4gICAgICAvLyBUaGlzIG5ldyBsaW5lIHN0YXJ0cyBiZWxvdyB0aGUgcHJ2aW91c2x5IGFkZGVkIHNlcGFyYXRvcixcclxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtc3BhY2luZyB0byBvdXIgeS1wb3MgcG9pbnRlclxyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMSkpKTtcclxuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcclxuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XHJcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi10bzogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3t0by1zdHJpbmcoJGJnLWltYWdlLCAnLCAnKX07XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAje3RvLXN0cmluZygkYmctcG9zaXRpb24sICcsICcpfTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcclxuXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xyXG4gICAgICAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnLCAnKX07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDEwMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZS1hbmltYXRpb24tdG8sICcsICcpfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGxpbmVzKTtcclxuXHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "7Bqo":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-hide-password/show-hide-password.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\r\n<a class=\"type-toggle\" (click)=\"toggleShow()\">\r\n\t<ion-icon class=\"show-option\" [hidden]=\"show\" src=\"./assets/sample-icons/auth/eye-show.svg\"></ion-icon>\r\n\t<ion-icon class=\"hide-option\" [hidden]=\"!show\" src=\"./assets/sample-icons/auth/eye-hide.svg\"></ion-icon>\r\n  <!-- In case you want to use text instead of icons -->\r\n\t<!--\r\n  <span class=\"show-option\" [hidden]=\"show\">show</span>\r\n\t<span class=\"hide-option\" [hidden]=\"!show\">hide</span>\r\n  -->\r\n</a>\r\n");

/***/ }),

/***/ "7EgT":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/image-shell/image-shell.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-spinner class=\"spinner\"></ion-spinner>\r\n<img class=\"inner-img\" [src]=\"_src\" [alt]=\"_alt\" (load)=\"_imageLoaded()\"/>\r\n<ng-content *ngIf=\"_mode === 'cover'\"></ng-content>\r\n");

/***/ }),

/***/ "7ONW":
/*!*****************************************************************!*\
  !*** ./src/app/reaction-list-modal/reaction-list-modal.page.ts ***!
  \*****************************************************************/
/*! exports provided: ReactionListModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactionListModalPage", function() { return ReactionListModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reaction_list_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reaction-list-modal.page.html */ "wKnH");
/* harmony import */ var _reaction_list_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reaction-list-modal.page.scss */ "habw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ReactionListModalPage = class ReactionListModalPage {
    constructor(modal, navParam) {
        this.modal = modal;
        this.navParam = navParam;
        this.items = [];
        let r = this.navParam.data.reactions;
        this.items = Object.keys(r).map(function (e) {
            return r[e];
        });
        this.items.forEach(i => {
            if (i.reactionType.some(el => el === 'Thanks')) {
                i.reactionThanks = true;
            }
            if (i.reactionType.some(el => el === 'Hug')) {
                i.reactionHug = true;
            }
        });
        console.log('this.items', r);
    }
    ngOnInit() {
    }
    dismissModal() {
        this.modal.dismiss();
    }
};
ReactionListModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
ReactionListModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reaction-list-modal',
        template: _raw_loader_reaction_list_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reaction_list_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]])
], ReactionListModalPage);



/***/ }),

/***/ "7ch9":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let LoadingService = class LoadingService {
    constructor(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    show() {
        if (!this.loading) {
            this.loadingCtrl.create({ spinner: 'circles', duration: 2000 }).then(res => {
                this.loading = res;
                this.loading.present();
            });
        }
    }
    hide() {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    }
    showToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 3000,
                position: 'top',
                animated: true,
                color: 'secondary',
                cssClass: 'toastCss',
                mode: 'ios'
            });
            toast.present();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], LoadingService);



/***/ }),

/***/ "8E8H":
/*!*************************************************!*\
  !*** ./src/app/imagemodal/imagemodal.module.ts ***!
  \*************************************************/
/*! exports provided: ImagemodalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagemodalPageModule", function() { return ImagemodalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _imagemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imagemodal.page */ "S0ud");







const routes = [
    {
        path: '',
        component: _imagemodal_page__WEBPACK_IMPORTED_MODULE_6__["ImagemodalPage"]
    }
];
let ImagemodalPageModule = class ImagemodalPageModule {
};
ImagemodalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_imagemodal_page__WEBPACK_IMPORTED_MODULE_6__["ImagemodalPage"]]
    })
], ImagemodalPageModule);



/***/ }),

/***/ "A0kb":
/*!*******************************************************************************!*\
  !*** ./src/app/components/show-hide-password/show-hide-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ShowHidePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHidePasswordComponent", function() { return ShowHidePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_show_hide_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./show-hide-password.component.html */ "7Bqo");
/* harmony import */ var _show_hide_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-hide-password.component.scss */ "iSCB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ShowHidePasswordComponent = class ShowHidePasswordComponent {
    constructor() {
        this.show = false;
    }
    toggleShow() {
        this.show = !this.show;
        if (this.show) {
            this.input.type = 'text';
        }
        else {
            this.input.type = 'password';
        }
    }
};
ShowHidePasswordComponent.ctorParameters = () => [];
ShowHidePasswordComponent.propDecorators = {
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"],] }]
};
ShowHidePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-hide-password',
        template: _raw_loader_show_hide_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_hide_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ShowHidePasswordComponent);



/***/ }),

/***/ "A5lX":
/*!*******************************************!*\
  !*** ./src/app/popover/popover.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wb3Zlci9wb3BvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICB3aWR0aDogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "B7gC":
/*!**************************************************************!*\
  !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
  \**************************************************************/
/*! exports provided: AspectRatioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectRatioComponent", function() { return AspectRatioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_aspect_ratio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./aspect-ratio.component.html */ "x9SX");
/* harmony import */ var _aspect_ratio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aspect-ratio.component.scss */ "oXAZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AspectRatioComponent = class AspectRatioComponent {
    constructor() {
        this.ratioPadding = '0px';
    }
    set ratio(ratio) {
        ratio = (ratio !== undefined && ratio !== null) ? ratio : { w: 1, h: 1 };
        const heightRatio = (ratio.h / ratio.w * 100) + '%';
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
    }
};
AspectRatioComponent.ctorParameters = () => [];
AspectRatioComponent.propDecorators = {
    ratioPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.padding',] }],
    ratio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AspectRatioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-aspect-ratio',
        template: _raw_loader_aspect_ratio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_aspect_ratio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AspectRatioComponent);



/***/ }),

/***/ "BF4z":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tag-modal/tag-modal.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ModalPage</ion-title>\r\n    <ion-buttons end>\r\n      <button ion-button (click)=\"closeModal()\">Close</button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n<!-- Checkboxes in a List -->\r\n<ion-list>\r\n  <ion-item *ngFor=\"let entry of form\">\r\n    <ion-label>{{entry.val}}</ion-label>\r\n    <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\r\n  </ion-item>\r\n</ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "D39k":
/*!*******************************!*\
  !*** ./src/app/pipes/date.ts ***!
  \*******************************/
/*! exports provided: DateFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return DateFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let DateFormatPipe = class DateFormatPipe {
    transform(date, args) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(new Date(date)).fromNow();
    }
};
DateFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'DateFormat'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DateFormatPipe);



/***/ }),

/***/ "DenP":
/*!**************************************************************!*\
  !*** ./src/app/shell/image-shell/image-shell.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n:host > .spinner {\n  display: none;\n}\n:host::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n:host:not([mode=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n:host:not([mode=cover]) > .inner-img {\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n}\n:host:not([mode=cover]).img-loaded::before {\n  display: none;\n}\n:host:not([mode=cover]).img-loaded > .inner-img {\n  opacity: 1;\n  visibility: visible;\n}\n:host[mode=cover] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n:host[mode=cover]::before, :host[mode=cover] > .spinner {\n  z-index: -1;\n}\n:host[mode=cover] > .inner-img {\n  display: none;\n  visibility: hidden;\n}\n:host[mode=cover].img-loaded::before {\n  display: none;\n}\n:host([animation=gradient]) {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n:host([animation=gradient])::before {\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n:host([animation=gradient]).img-loaded::before {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n:host([animation=spinner]) {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n:host([animation=spinner]) > .spinner {\n  display: block;\n  position: absolute;\n  top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n:host([animation=spinner]).img-loaded > .spinner {\n  display: none;\n  visibility: hidden;\n}\n:host(.add-overlay) {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n:host(.add-overlay).img-loaded::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLGdDQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBQUY7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNFLHFEQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUpOO0FBU007RUFDRSxhQUFBO0FBUFI7QUFVTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVJSO0FBY0U7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FBWko7QUFlSTtFQUVFLFdBQUE7QUFkTjtBQWlCSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWZOO0FBb0JNO0VBQ0UsYUFBQTtBQWxCUjtBQXdCQTtFQUNFLHNDQUFBO0VBQ0EsbUNBQUE7QUFyQkY7QUF3QkU7RUFDRSxrS0FDRTtFQUNGLDRCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQXZCSjtBQTRCSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7VUFBQSxZQUFBO0FBMUJOO0FBOEJFO0VBQ0U7SUFDRSw2QkFBQTtFQTVCSjtFQStCRTtJQUNFLDRCQUFBO0VBN0JKO0FBQ0Y7QUFzQkU7RUFDRTtJQUNFLDZCQUFBO0VBNUJKO0VBK0JFO0lBQ0UsNEJBQUE7RUE3Qko7QUFDRjtBQWlDQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUE5QkY7QUFnQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtFQUNBLDJEQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQTlCSjtBQWtDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQWhDTjtBQXFDQTtFQUNFLG1EQUFBO0FBbENGO0FBc0NJO0VBQ0UsY0FBQTtFQUNBLGlEQUFBO0FBcENOIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6ICNFRUU7XHJcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiAwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcclxuICB6LWluZGV4OiAyO1xyXG5cclxuICAvLyBCeSBkZWZhdWx0LCBoaWRlIHRoZSBzcGlubmVyXHJcbiAgJiA+IC5zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvLyBMb2FkaW5nIGJhY2tncm91bmRcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAmOm5vdChbbW9kZT1cImNvdmVyXCJdKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJiA+IC5pbm5lci1pbWcge1xyXG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciwgb3BhY2l0eSAuNXMgbGluZWFyO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW1nLWxvYWRlZCB7XHJcbiAgICAgIC8vIEhpZGUgbG9hZGluZyBiYWNrZ3JvdW5kIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmID4gLmlubmVyLWltZyB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJZiBpdCBpcyBtb2RlOiBjb3ZlclxyXG4gICZbbW9kZT1cImNvdmVyXCJdIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIC8vIEluIGNvdmVyIG1vZGUsIHdlIGNhbiBoYXZlIGNvbnRlbnQgaW5zaWRlIHRoZSBlbGVtZW50LCB0aHVzIHdlIG5lZWQgdG8gcHV0IHRoZXNlIGVsZW1lbnRzIGJlbmVhdGhcclxuICAgICY6OmJlZm9yZSxcclxuICAgICYgPiAuc3Bpbm5lciB7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuaW5uZXItaW1nIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW1nLWxvYWRlZCB7XHJcbiAgICAgIC8vIEhpZGUgbG9hZGluZyBiYWNrZ3JvdW5kIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcclxuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcclxuXHJcbiAgLy8gVGhlIGFuaW1hdGlvbiB0aGF0IGdvZXMgYmVuZWF0aCB0aGUgbWFza3NcclxuICAmOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDglLCB2YXIoLS1pbWFnZS1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKSAzMyUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAmLmltZy1sb2FkZWQge1xyXG4gICAgLy8gUmVzZXQgYmFja2dyb3VuZCBhbmltYXRpb24gb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYW5pbWF0aW9uOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XHJcbiAgICAwJXtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcclxuICAgIH1cclxuXHJcbiAgICAxMDAle1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdChbYW5pbWF0aW9uPVwic3Bpbm5lclwiXSkge1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAyOHB4O1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogI0NDQztcclxuXHJcbiAgJiA+IC5zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gY2FsYyh2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpIC8gMikpO1xyXG4gICAgd2lkdGg6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yKTtcclxuICB9XHJcblxyXG4gICYuaW1nLWxvYWRlZCB7XHJcbiAgICAmID4gLnNwaW5uZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCguYWRkLW92ZXJsYXkpIHtcclxuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XHJcblxyXG4gICYuaW1nLWxvYWRlZCB7XHJcbiAgICAvLyBBZGQgYmFja2dyb3VuZCBvdmVybGF5IGFmdGVyIHRoZSBpbWFnZSBoYXMgbG9hZGVkXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image.service */ "mnRn");





// import * as firebase from 'firebase';


let DataService = class DataService {
    constructor(afAuth, storage, firestore, imageProvider) {
        this.afAuth = afAuth;
        this.storage = storage;
        this.firestore = firestore;
        this.imageProvider = imageProvider;
    }
    // Get all users
    getUsers() {
        return this.firestore.collection('accounts');
    }
    // Get user with username
    getUserWithUsername(username) {
        return this.firestore.collection('accounts').ref.where('username', '==', username);
    }
    // Get logged in user data
    getCurrentUser() {
        return this.getUser(this.afAuth.auth.currentUser.uid);
    }
    getCurrentUserId() {
        return this.afAuth.auth.currentUser.uid;
    }
    // Get user by their userId
    getUser(userId) {
        return this.firestore.doc('accounts/' + userId);
    }
    // Get requests given the userId.
    getRequests(userId) {
        return this.firestore.doc('requests/' + userId);
        // return this.afdb.object('/requests/' + userId);
    }
    // Get friend requests given the userId.
    getFriendRequests(userId) {
        return this.firestore.doc('requests/' + userId);
        // return this.afdb.list('/requests', ref => ref.orderByChild('receiver').equalTo(userId));
    }
    // Get conversation given the conversationId.
    getConversation(conversationId) {
        return this.firestore.doc('conversations/' + conversationId);
        // return this.afdb.object('/conversations/' + conversationId);
    }
    // Get conversations of the current logged in user.
    getConversations() {
        return this.firestore.doc('accounts/' + this.getCurrentUserId()).collection('conversations');
        // return this.afdb.list('/accounts/' + this.afAuth.auth.currentUser.uid + '/conversations');
    }
    // Get messages of the conversation given the Id.
    getConversationMessages(conversationId) {
        return this.firestore.doc('conversations/' + conversationId);
        // return this.afdb.object('/conversations/' + conversationId + '/messages');
    }
    // Get messages of the group given the Id.
    getGroupMessages(groupId) {
        return this.firestore.doc('groups/' + groupId).collection('messages');
        // return this.afdb.object('/groups/' + groupId + '/messages');
    }
    getGroup(groupId) {
        return this.firestore.doc('groups/' + groupId);
    }
    getBlockedLists() {
        return this.firestore.doc('accounts/' + this.afAuth.auth.currentUser.uid).collection('conversations').ref.where('blocked', '==', true);
    }
    // Get Polls of the logged in user.
    getPollDetails(pId) {
        return this.firestore.doc('posts/' + pId);
    }
    // Get Polls of the logged in user.
    getGroupPolls(groupId) {
        return this.firestore.doc('groups/' + groupId).collection('polls');
    }
    // Get Resources of the logged in user.
    getGroupResources(groupId) {
        return this.firestore.doc('groups/' + groupId).collection('resources');
        // return this.afdb.object('/groups/' + groupId + '/resources/');
    }
    // Get Events of the logged in user.
    getGroupEvents(groupId) {
        return this.firestore.doc('groups/' + groupId).collection('events');
        // return this.afdb.object('/groups/' + groupId + '/events/');
    }
    // Get Resource details of the logged in user.
    getResourceDetails(rId) {
        return this.firestore.doc('posts/' + rId);
    }
    // Get Post details of the logged in user.
    getPostDetails(pId) {
        return this.firestore.doc('posts/' + pId);
    }
    // Get Events details of the logged in user.
    getEventDetails(eId) {
        return this.firestore.doc('posts/' + eId);
    }
    // Get Polls of the logged in user.
    getGroupMembers(groupId) {
        return this.firestore.doc('groups/' + groupId).collection('members');
        // return this.afdb.object('/groups/' + groupId + '/members/');
    }
    updatePollMembers(pollKey, pollData) {
        this.firestore.doc('posts/' + pollKey).update({
            data: pollData
        }).then(() => {
            const increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(1);
            this.firestore.collection('posts').doc(pollKey).update({
                totalPollCount: increment
            });
        });
    }
    updatePollComments(pollKey, comments) {
        this.firestore.doc('polls/' + pollKey).update({
            comments
        });
    }
    addPoll(poll) {
        return this.firestore.collection('polls').add(poll);
    }
    // Get all groups.
    getGroups() {
        return this.firestore.collection('groups');
    }
    addReports(userId, post) {
        const report = {
            reportedBy: userId,
            postId: post.key
        };
        return this.firestore.collection('reports').add(report);
    }
    addResource(resource) {
        return this.firestore.collection('resources').add(resource);
    }
    addPost(post) {
        return new Promise(resolve => {
            this.imageProvider.uploadPostPhotos(post.postMedia).then((postMediaUrls) => {
                post.postMedia = [];
                if (postMediaUrls) {
                    post.postMedia = postMediaUrls;
                }
                return resolve(this.firestore.collection('posts').add(post));
            });
        });
    }
    addEvent(event) {
        return this.firestore.collection('events').add(event);
    }
    updateResourceReviews(resourceKey, review) {
        // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
        this.firestore.doc('resources/' + resourceKey).collection('reviews').add(review);
        // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    }
    addFirstResourceReview(resourceKey, review) {
        let r = [];
        this.firestore.doc('resources/' + resourceKey).update({
            reviews: r
        });
        // this.afdb.object('/resources/' + resourceKey).update( {
        //   reviews: r
        // });
        this.updateResourceReviews(resourceKey, review);
    }
    updatePostReviews(postKey, review) {
        return this.firestore.collection('posts').doc(postKey).collection('reviews').add(review).then(() => {
            const increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(1);
            this.firestore.collection('posts').doc(postKey).update({
                totalReviewCount: increment
            });
        });
    }
    updateEventReviews(eventKey, review) {
        this.firestore.doc('events/' + eventKey).collection('reviews').add(review);
    }
    addFirstEventReview(eventKey, review) {
        let r = [];
        this.firestore.doc('events/' + eventKey).update({
            reviews: r
        });
        this.updateEventReviews(eventKey, review);
    }
    addPostReactions(postKey, reaction) {
        return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(() => {
            const increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(1);
            this.firestore.collection('posts').doc(postKey).update({
                totalReactionCount: increment
            });
        });
    }
    updatePostReactions(postKey, reaction) {
        return this.firestore.collection('posts').doc(postKey).collection('reactions').doc(reaction.key).update(reaction).then(() => {
            const increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(1);
            this.firestore.collection('posts').doc(postKey).update({
                totalReactionCount: increment
            });
        });
    }
    removePostReaction(postKey, reactionKey) {
        this.firestore.collection('posts').doc(postKey).collection('reactions').doc(reactionKey).delete().then(() => {
            const decrement = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(-1);
            this.firestore.collection('posts').doc(postKey).update({
                totalReactionCount: decrement
            });
        });
    }
    updateResourceReactions(resourceKey, reaction) {
        // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
        this.firestore.doc('/resources/' + resourceKey).collection('/reactions/').add(reaction);
        // var newRef = this.afdb.list('/resources/' + resourceKey + '/reactions/').push(reaction);
        // return newRef.key;
    }
    addFirstResourceReactions(resourceKey, reaction) {
        let r = [];
        this.firestore.doc('resources/' + resourceKey).update({
            reactions: r
        });
        // this.afdb.object('/resources/' + resourceKey).update( {
        //   reactions: r
        // });
        return this.updateResourceReactions(resourceKey, reaction);
    }
    removeEventReaction(eventKey, reactionKey) {
        this.firestore.doc('/events/' + eventKey + '/reactions/' + reactionKey).delete();
        // var adaRef = this.afdb.database.ref('/events/' + eventKey + '/reactions/' + reactionKey);
        // adaRef.remove()
        //   .then(function() {
        //     console.log("Remove succeeded.")
        //   })
        //   .catch(function(error) {
        //     console.log("Remove failed: " + error.message)
        //   });  
    }
    updateEventReactions(eventKey, reaction) {
        // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
        this.firestore.doc('/events/' + eventKey).collection('/reactions/').add(reaction);
        // var newRef = this.afdb.list('/events/' + eventKey + '/reactions/').push(reaction);
        // return newRef.key;
    }
    addFirstEventReactions(eventKey, reaction) {
        let r = [];
        this.firestore.doc('events/' + eventKey).update({
            reactions: r
        });
        // this.afdb.object('/events/' + eventKey).update( {
        //   reactions: r
        // });
        return this.updateEventReactions(eventKey, reaction);
    }
    removeResourceReaction(resourceKey, reactionKey) {
        this.firestore.doc('/resources/' + resourceKey + '/reactions/' + reactionKey).delete();
        // var adaRef = this.afdb.database.ref('/resources/' + resourceKey + '/reactions/' + reactionKey);
        // adaRef.remove()
        //   .then(function() {
        //     console.log("Remove succeeded.")
        //   })
        //   .catch(function(error) {
        //     console.log("Remove failed: " + error.message)
        //   });
    }
    updatePollReviews(pollId, review) {
        // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
        this.firestore.doc('/polls/' + pollId).collection('/reviews/').add(review);
        //    this.afdb.list('/polls/' + pollId + '/reviews/').push(review);
    }
    addFirstPollReview(pollId, review) {
        let r = [];
        this.firestore.doc('polls/' + pollId).update({
            reactions: r
        });
        this.updatePollReviews(pollId, review);
    }
    getFromStorageAsync(section) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('inside getFromStorageAsync');
            return yield this.storage.get(section).then((val) => val);
        });
    }
    // Get messages of the group given the Id.
    getGroupPosts(groupId) {
        return this.firestore.doc('groups/' + groupId).collection('posts');
    }
};
DataService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]])
], DataService);



/***/ }),

/***/ "GCFz":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imagemodal/imagemodal.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"content\" (click)=\"close()\" tappable>\r\n    <img src={{img}} />\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "HUk6":
/*!*********************************************!*\
  !*** ./src/app/tag-modal/tag-modal.page.ts ***!
  \*********************************************/
/*! exports provided: TagModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagModalPage", function() { return TagModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tag_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tag-modal.page.html */ "BF4z");
/* harmony import */ var _tag_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-modal.page.scss */ "qVJx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let TagModalPage = class TagModalPage {
    constructor(modal, route, router) {
        this.modal = modal;
        this.route = route;
        this.router = router;
        this.form = [];
        this.form = [];
        this.groupTags = this.route.snapshot.params.groupTags;
        this.form = this.groupTags;
    }
    ngOnInit() {
    }
    closeModal() {
        const data = [];
        this.form.forEach(element => {
            data.push(element);
        });
        this.modal.dismiss(data, null, null);
    }
};
TagModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TagModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tag-modal',
        template: _raw_loader_tag_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tag_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], TagModalPage);



/***/ }),

/***/ "IFuf":
/*!***************************************!*\
  !*** ./src/app/pipes/reverse.pipe.ts ***!
  \***************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ReversePipe = class ReversePipe {
    transform(value, ...args) {
        return value.slice().reverse();
    }
};
ReversePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'reverse'
    })
], ReversePipe);



/***/ }),

/***/ "IUqK":
/*!***************************************************************************!*\
  !*** ./src/app/components/countdown-timer/countdown-timer.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 0px;\n  --countdown-fill-background: transparent;\n  --countdown-fill-shadow: none;\n  --countdown-value-color: #CCC;\n  --countdown-unit-color: #CCC;\n  --countdown-time-flex-direction: row-reverse;\n  display: block;\n}\n:host .countdown {\n  margin: var(--countdown-margin);\n  padding: var(--countdown-padding);\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n:host .time {\n  padding: var(--countdown-time-padding);\n  margin: var(--countdown-time-margin);\n  display: flex;\n  flex-direction: var(--countdown-time-flex-direction);\n  align-items: center;\n  justify-content: center;\n}\n:host .time .time-unit {\n  display: block;\n  color: var(--countdown-unit-color);\n  font-size: 0.7em;\n  text-align: center;\n  text-transform: uppercase;\n  width: 2ex;\n}\n:host .time .time-value {\n  display: block;\n  color: var(--countdown-value-color);\n  text-align: center;\n  font-size: 1em;\n  line-height: 1em;\n  min-height: 1em;\n  min-width: 2.2ex;\n  min-width: 2.1ch;\n}\n:host .inner-time {\n  margin: var(--countdown-inner-time-margin);\n  padding: var(--countdown-inner-time-padding);\n}\n:host([fill=countdown]) .countdown {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n:host([fill=time]) .time {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n:host([fill=inner-time]) .inner-time {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFFQSw2QkFBQTtFQUNBLDRCQUFBO0VBRUEsNENBQUE7RUFFQSxjQUFBO0FBVkY7QUFZRTtFQUNFLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSx1QkFBQTtFQUNBLGlCQUFBO0FBWEo7QUFjRTtFQUNFLHNDQUFBO0VBQ0Esb0NBQUE7RUFFQSxhQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBYko7QUFlSTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFiTjtBQWdCSTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUtBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFsQk47QUFzQkU7RUFDRSwwQ0FBQTtFQUNBLDRDQUFBO0FBcEJKO0FBeUJFO0VBM0VBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FBc0RGO0FBd0JFO0VBakZBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FBNkRGO0FBdUJFO0VBdkZBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FBb0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZpbGwtY29udGFpbmVyKCl7XHJcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAtLWNvdW50ZG93bi1tYXJnaW46IDBweDtcclxuICAtLWNvdW50ZG93bi1wYWRkaW5nOiAwcHg7XHJcbiAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcclxuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweDtcclxuICAtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbjogMnB4O1xyXG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogMHB4O1xyXG5cclxuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlcjogbm9uZTtcclxuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiBub25lO1xyXG5cclxuICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogI0NDQztcclxuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiAjQ0NDO1xyXG5cclxuICAtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIC5jb3VudGRvd24ge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tbWFyZ2luKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1wYWRkaW5nKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLnRpbWUge1xyXG4gICAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLXRpbWUtcGFkZGluZyk7XHJcbiAgICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi10aW1lLW1hcmdpbik7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLnRpbWUtdW5pdCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY291bnRkb3duLXVuaXQtY29sb3IpO1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHdpZHRoOiAyZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbWUtdmFsdWUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29sb3I6IHZhcigtLWNvdW50ZG93bi12YWx1ZS1jb2xvcik7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDFlbTtcclxuXHJcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgaGF2ZSBzcGFjZSBmb3IgdHdvIGNoYXJhY3RlcnNcclxuICAgICAgLy8gQXMgY2ggKHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgJzAnKSB1bml0IGlzIG5vdCAxMDAlIHN1cHBvcnRlZCwgd2Ugd2lsbCB1c2UgZXggKGhlaWdodCBvZiB0aGUgJ3gnIGNoYXJhY3RlcikgYXMgYSBmYWxsYmFja1xyXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Nzcy91bml0cy12YWx1ZXMvXHJcbiAgICAgIG1pbi13aWR0aDogMi4yZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXIsIHRoYXQncyB3aHkgd2Ugc2V0IDIuMmV4XHJcbiAgICAgIG1pbi13aWR0aDogMi4xY2g7IC8vIGNoIGlzIHRoZSBvbmx5IGZvbnQgdW5pdCBiYXNlZCBvbiB0aGUgd2lkdGggb2YgY2hhcmFjdGVyc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlubmVyLXRpbWUge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW4pO1xyXG4gICAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZyk7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdChbZmlsbD1cImNvdW50ZG93blwiXSkge1xyXG4gIC5jb3VudGRvd24ge1xyXG4gICAgQGluY2x1ZGUgZmlsbC1jb250YWluZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0KFtmaWxsPVwidGltZVwiXSkge1xyXG4gIC50aW1lIHtcclxuICAgIEBpbmNsdWRlIGZpbGwtY29udGFpbmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdChbZmlsbD1cImlubmVyLXRpbWVcIl0pIHtcclxuICAuaW5uZXItdGltZSB7XHJcbiAgICBAaW5jbHVkZSBmaWxsLWNvbnRhaW5lcigpO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Irq3":
/*!*******************************!*\
  !*** ./src/app/pipes/poll.ts ***!
  \*******************************/
/*! exports provided: PollPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollPipe", function() { return PollPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let PollPipe = class PollPipe {
    // PollPipe
    // Filter poll by name
    transform(polls, search) {
        if (!polls) {
            return;
        }
        else if (!search) {
            return polls;
        }
        else {
            let term = search.toLowerCase();
            return polls.filter(poll => poll.description.toLowerCase().indexOf(term) > -1);
        }
    }
};
PollPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pollFilter'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PollPipe);



/***/ }),

/***/ "Kt/9":
/*!**************************************************!*\
  !*** ./src/app/shell/config/app-shell.config.ts ***!
  \**************************************************/
/*! exports provided: AppShellConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellConfig", function() { return AppShellConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
var AppShellConfig_1;




let AppShellConfig = AppShellConfig_1 = class AppShellConfig {
    constructor(http) {
        this.http = http;
    }
    // Simplified version from: https://stackoverflow.com/a/49707898/1116959
    load() {
        const configFile = './assets/config/app-shell.config' + ((!Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) ? '.prod' : '') + '.json';
        return this.http.get(configFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(configSettings => {
            AppShellConfig_1.settings = configSettings;
        }))
            .toPromise()
            .catch((error) => {
            console.log(`Could not load file '${configFile}'`, error);
        });
    }
};
AppShellConfig.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppShellConfig = AppShellConfig_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppShellConfig);



/***/ }),

/***/ "KuNH":
/*!*************************************************!*\
  !*** ./src/app/imagemodal/imagemodal.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-content {\n  background-image: none;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.7) !important;\n  display: flex;\n  align-items: center;\n}\n\n.content img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2Vtb2RhbC9pbWFnZW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDRSxXQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9pbWFnZW1vZGFsL2ltYWdlbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ "M0Xy":
/*!*****************************************!*\
  !*** ./src/app/popover/popover.page.ts ***!
  \*****************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_popover_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./popover.page.html */ "g1fN");
/* harmony import */ var _popover_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover.page.scss */ "A5lX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let PopoverPage = class PopoverPage {
    constructor(route, popCtrl) {
        this.route = route;
        this.popCtrl = popCtrl;
        this.message = this.route.snapshot.params.message;
        this.groupId = this.route.snapshot.params.groupId;
    }
    ngOnInit() {
    }
    close() {
        //this.app.getRootNav().push(NewResourcePage, { message: this.message, groupId: this.groupId });
        this.popCtrl.dismiss();
    }
};
PopoverPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
];
PopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popover',
        template: _raw_loader_popover_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popover_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])
], PopoverPage);



/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "EnSQ");




let AuthGuardService = class AuthGuardService {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    canActivate(route) {
        console.log(route);
        const val = this.dataService.getFromStorageAsync('currentUser');
        console.log('val:' + val);
        if (val === null) {
            return false;
        }
        else {
            return true;
        }
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], AuthGuardService);



/***/ }),

/***/ "Ox2M":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile-modal/user-profile-modal.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">Update Profile</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button (click)=\"dismissModal()\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"forms-validations-content\">\n    <form class=\"validations-form\" [formGroup]=\"myForm\">\n      <ion-list class=\"inputs-list\" lines=\"none\">\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">Full Name:</ion-label>\n          <ion-input type=\"text\" class=\"myform\" placeholder=\"Full name\" formControlName=\"name\" [(ngModel)]=\"user.name\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">Username:</ion-label>\n          <ion-input placeholder=\"Username\" class=\"myform\"  formControlName=\"username\" type=\"text\" [(ngModel)]=\"user.username\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label position=\"stacked\">My Story:</ion-label>\n          <ion-textarea rows=\"10\" formControlName=\"bio\" class=\"myform\"  placeholder=\"Status\" [(ngModel)]=\"user.description\"></ion-textarea>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input placeholder=\"Email\" class=\"myform\"  type=\"text\" formControlName=\"email\" [(ngModel)]=\"user.email\" disabled></ion-input>\n        </ion-item>\n        <div class=\"ion-padding\">\n          <ion-button class=\"save\" color=\"secondary\" expand=\"block\" (click)=\"save()\">Save Changes</ion-button>\n        </div>\n      </ion-list>\n    </form>\n</ion-content>");

/***/ }),

/***/ "OyRk":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review-modal/review-modal.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Write a Review - {{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"filters-content\">\n  <ion-item-group class=\"filters-group\">\n  <form [formGroup]=\"ratingForm\">\n    <ion-list class=\"ratings-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Comments</ion-label>\n        <ion-textarea rows=\"6\"  placeholder=\"Enter more information here...\" type=\"text\" formControlName=\"review\" clearInput placeholder=\"Enter any additional comments that might help other members (optional) ...\"></ion-textarea>\n      </ion-item>\n      <ion-item class=\"rating-item\">\n        <ion-label class=\"rating-label\">Rate</ion-label>\n        <app-rating-input formControlName=\"rating\" max=\"5\"></app-rating-input>\n      </ion-item>\n    </ion-list>\n\n    <hr class=\"details-divider\">\n    <ion-button class=\"write-reviews-btn\" color=\"dark\" (click)=\"submitReview()\" expand=\"block\" fill=\"solid\">Submit</ion-button>\n\n  </form>\n  </ion-item-group>\n</ion-content>\n");

/***/ }),

/***/ "Qj2i":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/text-shell/text-shell.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>{{ _data }}</ng-container>\r\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
	if(!__webpack_require__.o(map, req)) {
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

/***/ }),

/***/ "S0ud":
/*!***********************************************!*\
  !*** ./src/app/imagemodal/imagemodal.page.ts ***!
  \***********************************************/
/*! exports provided: ImagemodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagemodalPage", function() { return ImagemodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_imagemodal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./imagemodal.page.html */ "GCFz");
/* harmony import */ var _imagemodal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagemodal.page.scss */ "KuNH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ImagemodalPage = class ImagemodalPage {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
        console.log(this.img);
    }
    close() {
        this.modal.dismiss();
    }
};
ImagemodalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ImagemodalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-imagemodal',
        template: _raw_loader_imagemodal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_imagemodal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ImagemodalPage);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "y2f/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "p74H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");









let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, router, afAuth) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.afAuth = afAuth;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.platform.backButton.subscribe(() => null);
            this.afAuth.auth.onAuthStateChanged(user => {
                if (user == null)
                    this.router.navigateByUrl('walkthrough', { replaceUrl: true, skipLocationChange: true });
                else
                    this.router.navigateByUrl('/app/tabs/tab1', { skipLocationChange: true, replaceUrl: true });
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])
], AppComponent);



/***/ }),

/***/ "VkdX":
/*!*****************************************************************!*\
  !*** ./src/app/user-profile-modal/user-profile-modal.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlLW1vZGFsL3VzZXItcHJvZmlsZS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1Q0FBQTtBQUFKOztBQUlJO0VBQ0MsMkNBQUE7QUFETDs7QUFHSztFQUNFLDJFQUFBO0FBRFA7O0FBR087RUFDRSxlQUFBO0FBRFQ7O0FBSVM7RUFDRSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUZYOztBQUlXO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUFGYjs7QUFRSztFQUNFLDBCQUFBO0FBTlAiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUtbW9kYWwvdXNlci1wcm9maWxlLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCB7XHJcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcbiAgfVxyXG5cclxuICAuZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XHJcbiAgICAudmFsaWRhdGlvbnMtZm9ybSB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuIFxyXG4gICAgIC5pbnB1dHMtbGlzdCB7XHJcbiAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcbiBcclxuICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAuZXJyb3ItY29udGFpbmVyIHtcclxuICAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiBcclxuICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIFxyXG4gICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgIH1cclxuICAgfVxyXG4gXHJcbiB9XHJcblxyXG4gICJdfQ== */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "XmS3":
/*!*****************************************************************************!*\
  !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94LXdyYXBwZXIvY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Xs6v":
/*!*****************************************************************!*\
  !*** ./src/app/user-profile-modal/user-profile-modal.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserProfileModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModalPageModule", function() { return UserProfileModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_profile_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile-modal.page */ "l0GK");







const routes = [
    {
        path: '',
        component: _user_profile_modal_page__WEBPACK_IMPORTED_MODULE_6__["UserProfileModalPage"]
    }
];
let UserProfileModalPageModule = class UserProfileModalPageModule {
};
UserProfileModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_profile_modal_page__WEBPACK_IMPORTED_MODULE_6__["UserProfileModalPage"]]
    })
], UserProfileModalPageModule);



/***/ }),

/***/ "YXOY":
/*!*******************************************************************!*\
  !*** ./src/app/reaction-list-modal/reaction-list-modal.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReactionListModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactionListModalPageModule", function() { return ReactionListModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reaction-list-modal.page */ "7ONW");







const routes = [
    {
        path: '',
        component: _reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReactionListModalPage"]
    }
];
let ReactionListModalPageModule = class ReactionListModalPageModule {
};
ReactionListModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReactionListModalPage"]]
    })
], ReactionListModalPageModule);



/***/ }),

/***/ "Z8da":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown-timer/countdown-timer.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"countdown\">\r\n  <ion-col class=\"time\" *ngIf=\"_initialUnit === 'day'\">\r\n    <span class=\"time-unit\">D</span>\r\n    <div class=\"inner-time\">\r\n      <span class=\"time-value\">{{ _daysLeft }}</span>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col class=\"time\" *ngIf=\"(_initialUnit === 'day' && _endingUnit !== 'day') || _initialUnit === 'hour' || _endingUnit === 'hour'\">\r\n    <span class=\"time-unit\">H</span>\r\n    <div class=\"inner-time\">\r\n      <span class=\"time-value\">{{ _hoursLeft }}</span>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col class=\"time\" *ngIf=\"(_initialUnit === 'day' && (_endingUnit !== 'day' && _endingUnit !== 'hour')) || (_initialUnit === 'hour' && _endingUnit !== 'hour') || _initialUnit === 'minute'\">\r\n    <span class=\"time-unit\">M</span>\r\n    <div class=\"inner-time\">\r\n      <span class=\"time-value\">{{ _minutesLeft }}</span>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col class=\"time\" *ngIf=\"_endingUnit === 'second'\">\r\n    <span class=\"time-unit\">S</span>\r\n    <div class=\"inner-time\">\r\n      <span class=\"time-value\">{{ _secondsLeft }}</span>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "y2f/");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "p74H");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "05qF");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "g1va");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment.prod */ "cxbk");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "NzdG");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "SPri");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "cGva");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "Pn9U");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "DJEK");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/file/ngx */ "t8sF");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "RzHS");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "gTw3");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "41F/");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "Zr1d");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/share.module */ "vxGH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./imagemodal/imagemodal.module */ "8E8H");
/* harmony import */ var _tag_modal_tag_modal_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tag-modal/tag-modal.module */ "x+G+");
/* harmony import */ var _user_profile_modal_user_profile_modal_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./user-profile-modal/user-profile-modal.module */ "Xs6v");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./popover/popover.module */ "p2ut");
/* harmony import */ var _review_modal_review_modal_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./review-modal/review-modal.module */ "sMbM");
/* harmony import */ var _reaction_list_modal_reaction_list_modal_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./reaction-list-modal/reaction-list-modal.module */ "YXOY");
/* harmony import */ var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ionic-native/chooser/ngx */ "wi5F");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "XqOP");






































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
                mode: 'md',
            }),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
            _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_29__["ImagemodalPageModule"],
            _review_modal_review_modal_module__WEBPACK_IMPORTED_MODULE_33__["ReviewModalPageModule"],
            _tag_modal_tag_modal_module__WEBPACK_IMPORTED_MODULE_30__["TagModalPageModule"],
            _popover_popover_module__WEBPACK_IMPORTED_MODULE_32__["PopoverPageModule"],
            _reaction_list_modal_reaction_list_modal_module__WEBPACK_IMPORTED_MODULE_34__["ReactionListModalPageModule"],
            _user_profile_modal_user_profile_modal_module__WEBPACK_IMPORTED_MODULE_31__["UserProfileModalPageModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_15__["GooglePlus"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_16__["Facebook"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__["Camera"],
            _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_19__["MediaCapture"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_23__["FilePath"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_22__["FileChooser"],
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_17__["FirebaseX"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_24__["Geolocation"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_20__["ImagePicker"],
            _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_25__["Contacts"],
            _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_35__["Chooser"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_26__["Keyboard"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_36__["LocalNotifications"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_37__["FCM"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZGG5":
/*!***************************************************!*\
  !*** ./src/app/review-modal/review-modal.page.ts ***!
  \***************************************************/
/*! exports provided: ReviewModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewModalPage", function() { return ReviewModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_review_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./review-modal.page.html */ "OyRk");
/* harmony import */ var _review_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-modal.page.scss */ "a9JK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");









let ReviewModalPage = class ReviewModalPage {
    constructor(modal, route, router, dataProvider, navParam, loadingProvider) {
        this.modal = modal;
        this.route = route;
        this.router = router;
        this.dataProvider = dataProvider;
        this.navParam = navParam;
        this.loadingProvider = loadingProvider;
        this.data = this.navParam.data.data;
        this.title = this.data.title;
        this.ratingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            review: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.review = {
            review: '',
            rating: ''
        };
    }
    submitReview() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingProvider.show();
            this.review.review = this.ratingForm.value['review'];
            this.review.rating = this.ratingForm.value['rating'];
            this.loadingProvider.hide();
            yield this.modal.dismiss(this.review);
        });
    }
};
ReviewModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"] }
];
ReviewModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-review-modal',
        template: _raw_loader_review_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_review_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])
], ReviewModalPage);



/***/ }),

/***/ "ZpN7":
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-shell/image-shell.component */ "2gss");
/* harmony import */ var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-shell/text-shell.component */ "zK/y");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/app-shell.config */ "Kt/9");









let ShellModule = class ShellModule {
};
ShellModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"],
            _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"],
            _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"]
        ],
        providers: [
            // Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                useFactory: (appShellConfig) => {
                    return () => appShellConfig.load();
                },
                deps: [_config_app_shell_config__WEBPACK_IMPORTED_MODULE_8__["AppShellConfig"]],
                multi: true
            }
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot()
        ],
        exports: [
            _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"],
            _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"],
            _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"]
        ]
    })
], ShellModule);



/***/ }),

/***/ "ZvGz":
/*!***************************************!*\
  !*** ./src/environments/validator.ts ***!
  \***************************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

var Validator;
(function (Validator) {
    Validator.emailValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ]
    ];
    Validator.passwordValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)
        ]];
    Validator.nameValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ]];
    Validator.usernameValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)
        ]];
    Validator.bioValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ]];
    Validator.groupNameValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ]];
    Validator.groupDescriptionValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ]];
    Validator.groupTagsValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ]];
    Validator.errorMessages = {
        email: [
            { type: 'required', message: 'Email is required' },
            { type: 'pattern', message: 'Email looks like invalid' },
        ],
        password: [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Password must be 6 char' },
        ],
        name: [
            { type: 'required', message: 'Name is required' },
        ],
        username: [
            { type: 'required', message: 'Username is required' },
            { type: 'minlength', message: 'Username must be 5 char' },
        ],
        bio: [
            { type: 'required', message: 'Bio is required' },
        ],
        groupName: [
            { type: 'required', message: 'Group Name is required' },
        ],
        groupDescription: [
            { type: 'required', message: 'Group Description is required' },
        ],
    };
    // Poll Form Validators
    Validator.pollNameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]];
    Validator.pollDescriptionValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]];
    Validator.pollOption1Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]];
    Validator.pollOption2Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1)]];
})(Validator || (Validator = {}));


/***/ }),

/***/ "a9JK":
/*!*****************************************************!*\
  !*** ./src/app/review-modal/review-modal.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n  --page-color-radio-items-per-row: 5;\n  --page-color-radio-gutter: 2%;\n  --page-color-radio-width: calc((100% - (2 * var(--page-color-radio-gutter) * var(--page-color-radio-items-per-row))) / var(--page-color-radio-items-per-row));\n}\n\n.filters-content {\n  --background: var(--page-background);\n}\n\n.filters-content ion-item-divider {\n  --background: var(--page-background);\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.filters-content .range-list {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .range-list .range-item {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content .range-list .range-item .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-content .range-list .range-item .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item .checkbox-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .checkbox-list .checkbox-item ion-checkbox {\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.filters-content .radio-list .radio-group {\n  display: block;\n}\n\n.filters-content .radio-list .radio-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .radio-list .radio-item .radio-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .radio-list .radio-item ion-radio {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n}\n\n.filters-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-lightest);\n  --checkbox-tag-background: var(--ion-color-light-shade);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .radio-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  background-color: var(--page-background);\n  justify-content: space-between;\n  --radio-tag-color: #000;\n  --radio-tag-background: #FFF;\n  --radio-tag-active-color: #FFF;\n  --radio-tag-active-background: #000;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --min-height: 38px;\n  --border-radius: 8px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--radio-tag-color);\n  --ion-item-background: var(--radio-tag-background);\n  --ion-item-color: var(--radio-tag-color);\n  flex: 1;\n}\n\n.filters-content .radio-tags .radio-tag.item-radio-checked {\n  --ion-item-background: var(--radio-tag-active-background);\n  --ion-item-color: var(--radio-tag-active-color);\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .radio-tags .radio-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .radio-tags .radio-tag ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --radio-tag-color: var(--ion-color-secondary);\n  --radio-tag-background: var(--ion-color-lightest);\n  --radio-tag-active-color: var(--ion-color-lightest);\n  --radio-tag-active-background: var(--ion-color-secondary);\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .toggle-list .toggle-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .toggle-list .toggle-item .toggle-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .toggle-list .toggle-item ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.filters-content .counter-list .counter-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .counter-list .counter-item .counter-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .counter-list .counter-item .counter-value {\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n\n.filters-content .counter-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-secondary);\n  --counter-border-color: var(--ion-color-secondary);\n}\n\n.filters-content .ratings-list .rating-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .ratings-list .rating-item .rating-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .ratings-list .rating-item app-rating-input {\n  --rating-color: var(--ion-color-secondary);\n}\n\n.filters-content .color-radio-group {\n  padding: var(--page-margin) calc(var(--page-margin) - var(--page-color-radio-gutter));\n  background-color: var(--ion-color-lightest);\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: 255,255,255;\n  --color-radio-border-radius: 50%;\n}\n\n.filters-content .color-radio-group .color-radio {\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: var(--ion-color-darkest-rgb);\n  --color-radio-border-radius: 40%;\n  flex: 0 0 var(--page-color-radio-width);\n  max-width: var(--page-color-radio-width);\n  margin: var(--page-color-radio-gutter);\n}\n\n.filters-content .color-radio-group .color-radio .color-radio-inner-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.filters-content .color-radio-group ion-item.color-radio {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --border-width: 4px;\n  --border-style: solid;\n  --border-color: var(--color-radio-background);\n  --background: var(--color-radio-background);\n  --inner-padding-end: 0px;\n  --inner-border-width: 0px;\n  --min-height: initial;\n  --border-radius: var(--color-radio-border-radius);\n  border-radius: var(--color-radio-border-radius);\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked {\n  --border-color: rgba(var(--color-radio-active-border-rgb), .3) !important;\n  --box-shadow: none;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio .color-label {\n  --color: var(--color-radio-color);\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n.filters-content .color-radio-group ion-item.color-radio ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n:host-context(.md) .ratings-list,\n:host-context(.md) .counter-list,\n:host-context(.md) .toggle-list,\n:host-context(.md) .radio-list,\n:host-context(.md) .checkbox-list,\n:host-context(.md) .range-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n:host-context(.ios) .radio-tags,\n:host-context(.ios) .checkbox-tags {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3LW1vZGFsL3Jldmlldy1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWcuc2NzcyIsInNyYy90aGVtZS9taXhpbnMvaW5wdXRzL3JhZGlvLXRhZy5zY3NzIiwic3JjL3RoZW1lL21peGlucy9pbnB1dHMvY29sb3ItcmFkaW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7RUFFQSx1QkFBQTtFQUVBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSw2SkFBQTtBQVBGOztBQVdBO0VBQ0Usb0NBQUE7QUFSRjs7QUFVQztFQUNDLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFFQSxZQUFBO0FBVEY7O0FBWUU7RUFDRSwyQ0FBQTtBQVZKOztBQVlJO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSx1Q0FBQTtVQUFBLHNDQUFBO0VBRUEseURBQUE7QUFaTjs7QUFjTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0FBWlI7O0FBY1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBWlY7O0FBZVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBYlY7O0FBaUJNO0VBRUUseUNBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBakJSOztBQXVCSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQXJCTjs7QUF1Qk07RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDhCQUFBO0FBckJMOztBQXdCTTtFQUNFLHVCQUFBO1VBQUEsc0JBQUE7QUF0QlI7O0FBNEJJO0VBQ0UsY0FBQTtBQTFCTjs7QUE2Qkk7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUEzQk47O0FBNkJNO0VBQ0UsZUFBQTtFQUNKLGdCQUFBO0VBQ0EscUJBQUE7RUFDQyw4QkFBQTtBQTNCTDs7QUE4Qk07RUFDRSx5QkFBQTtVQUFBLHdCQUFBO0FBNUJSOztBQWlDQztFQUNDLHdGQUFBO0VDbEhBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEb0ZGOztBQ2xGQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QURtRko7O0FDakZJO0VBQ0QsdUJBQUE7QURtRkg7O0FDaEZFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRGtGTjs7QUMvRUk7RUFDRSxZQUFBO0FEaUZOOztBQy9FTTtFQUVFLFVBQUE7QURnRlI7O0FDNUVFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUQ4RU47O0FDM0VFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRDJFSDs7QUFISTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7QUFLTjs7QUFESTtFQUNFLHdDQUFBO0FBR047O0FBRE07RUFDRSw2Q0FBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSw0REFBQTtBQUdSOztBQUVJO0VBQ0EsMkNBQUE7QUFBSjs7QUFFTTtFQUNFLCtDQUFBO0VBQ0EsdURBQUE7RUFDQSxzREFBQTtFQUNBLDREQUFBO0FBQVI7O0FBS0U7RUFDRSwrREFBQTtFQUNGLHdDQUFBO0VBQ0UsOEJBQUE7RUV2SkYsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7QUZxSkY7O0FFbkpDO0VBRUcsb0JBQUE7RUFDQSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0Usa0JBQUE7RUFFRixvQkFBQTtFQUNFLG1CQUFBO0VBQ0YscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esd0NBQUE7RUFFRSxPQUFBO0FGa0pKOztBRWhKRTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QUZrSk47O0FFL0lJO0VBQ0UsWUFBQTtBRmlKTjs7QUUvSU07RUFFRSxVQUFBO0FGZ0pSOztBRTVJSTtFQUNELFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FGOElOOztBRTNJRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUYySUg7O0FBakNJO0VBQ0UsNkNBQUE7RUFDQSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EseURBQUE7RUFFQSxvQ0FBQTtFQUNBLG1DQUFBO0FBa0NOOztBQTdCSTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQStCTjs7QUE3Qk07RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLDhCQUFBO0FBK0JMOztBQTVCTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUE4QlI7O0FBeEJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FBMEJOOztBQXhCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUEwQkw7O0FBdkJNO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQXlCUjs7QUF0Qk07RUFDRSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0RBQUE7QUF3QlI7O0FBbEJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FBb0JOOztBQWxCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUFvQkw7O0FBakJNO0VBQ0UsMENBQUE7QUFtQlI7O0FBZEM7RUFFQyxxRkFBQTtFQUNBLDJDQUFBO0VHMU9BLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0FIMFBGOztBQWhCSTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2REFBQTtFQUNBLGdDQUFBO0VBRUEsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHNDQUFBO0FBaUJOOztBQWZNO0VBQ0YsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQWlCUjs7QUd4UUM7RUFFRyxxQkFBQTtFQUNGLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBR0UsaURBQUE7RUFFRiwrQ0FBQTtBSHNRRjs7QUdwUUU7RUFDQyx5RUFBQTtFQUNBLGtCQUFBO0FIc1FIOztBR3BRRztFQUNLLFVBQUE7QUhzUVI7O0FHbFFFO0VBQ0MsWUFBQTtBSG9RSDs7QUdsUU07RUFFRSxVQUFBO0FIbVFSOztBRy9QSTtFQUNFLGlDQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7QUhnUU47O0FHN1BJO0VBQ0UsV0FBQTtFQUVILFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBSDZQSDs7QUFoREU7Ozs7OztFQU1FLGdCQUFBO0VBQ0EsbUJBQUE7QUFtREo7O0FBOUNFOztFQUVFLDJDQUFBO0FBaURKIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3LW1vZGFsL3Jldmlldy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcclxuQGltcG9ydCBcIi4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvcmFkaW8tdGFnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL2NvbG9yLXJhZGlvXCI7XHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcclxuXHJcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3c6IDU7XHJcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcjogMiU7XHJcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoOiBjYWxjKCgxMDAlIC0gKDIgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcikgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKSkgLyB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKTtcclxufVxyXG5cclxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbi5maWx0ZXJzLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcblx0aW9uLWl0ZW0tZGl2aWRlciB7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblx0XHQtLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cdFx0LS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cdFx0LS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblxyXG4gIC5yYW5nZS1saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgLnJhbmdlLWl0ZW0ge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLy8gYm94LXNoYWRvdyBhdCB0aGUgdG9wXHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XHJcblxyXG4gICAgICAucmFuZ2UtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAgICAgLnJhbmdlLXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmFuZ2UtbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yYW5nZS1jb250cm9sIHtcclxuICAgICAgICAvLyBvdmVycmlkZSB0aGUgcGluIGNvbG9yXHJcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcblxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94LWxpc3Qge1xyXG4gICAgLmNoZWNrYm94LWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAuY2hlY2tib3gtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICBcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJhZGlvLWxpc3Qge1xyXG4gICAgLnJhZGlvLWdyb3VwIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnJhZGlvLWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAucmFkaW8tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICBcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHQuY2hlY2tib3gtdGFncyB7XHJcblx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xyXG5cclxuXHRcdEBpbmNsdWRlIGNoZWNrYm94LXRhZygpO1xyXG5cclxuICAgIC5jaGVja2JveC10YWcge1xyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgJi5zcXVhcmUtY2hlY2tib3gtdGFncyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblxyXG4gICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XHJcbiAgXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblxyXG4gIC5yYWRpby10YWdzIHtcclxuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5cdFx0QGluY2x1ZGUgcmFkaW8tdGFnKCk7XHJcblxyXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAucmFkaW8tdGFnIHtcclxuICAgICAgLS1yYWRpby10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuXHJcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XHJcbiAgICB9XHJcblx0fVxyXG5cclxuICAudG9nZ2xlLWxpc3Qge1xyXG4gICAgLnRvZ2dsZS1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgLnRvZ2dsZS1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gIFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLXRvZ2dsZSB7XHJcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb3VudGVyLWxpc3Qge1xyXG4gICAgLmNvdW50ZXItaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgIC5jb3VudGVyLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY291bnRlci12YWx1ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBwLWNvdW50ZXItaW5wdXQge1xyXG4gICAgICAgIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmF0aW5ncy1saXN0IHtcclxuICAgIC5yYXRpbmctaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgIC5yYXRpbmctbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICBcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwcC1yYXRpbmctaW5wdXQge1xyXG4gICAgICAgIC0tcmF0aW5nLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cdH1cclxuXHJcblx0LmNvbG9yLXJhZGlvLWdyb3VwIHtcclxuICAgIC8vIEFjY291bnQgZm9yIDIlIHN0YXJ0IGFuZCBlbmQgbWFyZ2luIHNldCBieSAuY29sb3ItdGFnIGNoaWxkc1xyXG5cdFx0cGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpKTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAuY29sb3ItcmFkaW8ge1xyXG4gICAgICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xyXG4gICAgICAtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQ6ICNDQ0M7XHJcbiAgICAgIC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYik7XHJcbiAgICAgIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNDAlO1xyXG5cclxuICAgICAgZmxleDogMCAwIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xyXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKTtcclxuXHJcbiAgICAgIC5jb2xvci1yYWRpby1pbm5lci13cmFwcGVyIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHR9XHJcbiAgICB9XHJcblxyXG5cdFx0QGluY2x1ZGUgY29sb3ItcmFkaW8oKTtcclxuXHR9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLm1kKSB7XHJcbiAgLnJhdGluZ3MtbGlzdCxcclxuICAuY291bnRlci1saXN0LFxyXG4gIC50b2dnbGUtbGlzdCxcclxuICAucmFkaW8tbGlzdCxcclxuICAuY2hlY2tib3gtbGlzdCxcclxuICAucmFuZ2UtbGlzdCB7IFxyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcclxuICAucmFkaW8tdGFncyxcclxuICAuY2hlY2tib3gtdGFncyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gY2hlY2tib3gtdGFnKCkge1xyXG4gIC8vIERlZmF1bHQgdmFsdWVzXHJcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XHJcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcclxuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XHJcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XHJcblxyXG5cdC5jaGVja2JveC10YWcge1xyXG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcclxuICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XHJcblxyXG4gICAgJi5yb3VuZGVkLXRhZyB7XHJcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcclxuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xyXG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcclxuXHRcdH1cclxuXHJcbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcblxyXG4gICAgICAudGFnLWxhYmVsIHtcclxuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRcdC50YWctbGFiZWwge1xyXG5cdFx0XHRtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRpb24tY2hlY2tib3gge1xyXG5cdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLmNoZWNrYm94LWljb25cclxuXHRcdFx0d2lkdGg6IDBweDtcclxuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcclxuXHRcdFx0aGVpZ2h0OiAwcHg7XHJcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxyXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJAbWl4aW4gcmFkaW8tdGFnKCkge1xyXG4gIC8vIERlZmF1bHQgdmFsdWVzXHJcbiAgLS1yYWRpby10YWctY29sb3I6ICMwMDA7XHJcbiAgLS1yYWRpby10YWctYmFja2dyb3VuZDogI0ZGRjtcclxuICAtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XHJcbiAgLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XHJcblxyXG5cdC5yYWRpby10YWcge1xyXG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDM4cHg7XHJcblxyXG5cdFx0LS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG5cdFx0LS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0LS1ib3JkZXItY29sb3I6IHZhcigtLXJhZGlvLXRhZy1jb2xvcik7XHJcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kKTtcclxuXHRcdC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLXJhZGlvLXRhZy1jb2xvcik7XHJcblxyXG4gICAgZmxleDogMTtcclxuXHJcblx0XHQmLml0ZW0tcmFkaW8tY2hlY2tlZCB7XHJcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcclxuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcik7XHJcblx0XHR9XHJcblxyXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG5cclxuICAgICAgLnRhZy1sYWJlbCB7XHJcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFnLWxhYmVsIHtcclxuXHRcdFx0bWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLXJhZGlvIHtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5yYWRpby1pY29uXHJcblx0XHRcdHdpZHRoOiAwcHg7XHJcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcblx0XHRcdGhlaWdodDogMHB4O1xyXG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAucmFkaW8taWNvbiAucmFkaW8taW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3JcclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiQG1peGluIGNvbG9yLXJhZGlvKCkge1xyXG4gIC8vIERlZmF1bHQgdmFsdWVzXHJcbiAgLS1jb2xvci1yYWRpby1jb2xvcjogI0ZGRjtcclxuICAtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQ6ICNDQ0M7XHJcbiAgLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYjogMjU1LDI1NSwyNTU7XHJcbiAgLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG5cdGlvbi1pdGVtLmNvbG9yLXJhZGlvIHtcclxuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcblx0XHQtLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHQtLXBhZGRpbmctdG9wOiAwcHg7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuXHRcdC0tYm9yZGVyLXdpZHRoOiA0cHg7XHJcblx0XHQtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHQtLWJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZCk7XHJcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQpO1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcclxuXHRcdC0tbWluLWhlaWdodDogaW5pdGlhbDtcclxuICAgIC8vIEJvdGggdGhlIGlvbi1pdGVtIGFuZCBpdCdzIHNoYWRvdyBkb20gaW5uZXJzIGhhdmUgYm9yZGVyLXJhZGl1cyBwcm9wZXJ0aWVzIGFwcGxpZWRcclxuICAgIC8vIFRoaXMgaXMgZm9yIHRoZSAuaXRlbS1pbm5lciAuaW5wdXQtd3JhcHBlciBlbGVtZW50IGluc2lkZSB0aGUgaW9uLWl0ZW0gc2hhZG93IHJvb3RcclxuICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAvLyBUaGlzIGlzIGZvciB0aGUgaW9uLWl0ZW0gZWxlbWVudFxyXG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1cyk7XHJcblxyXG5cdFx0Ji5pdGVtLXJhZGlvLWNoZWNrZWQge1xyXG5cdFx0XHQtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYiksIC4zKSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG5cdFx0XHQuY29sb3ItbGFiZWwge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xyXG5cdFx0XHRvcGFjaXR5OiAwLjU7XHJcblxyXG4gICAgICAuY29sb3ItbGFiZWwge1xyXG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblxyXG4gICAgLmNvbG9yLWxhYmVsIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0tY29sb3ItcmFkaW8tY29sb3IpO1xyXG5cclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXJhZGlvIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5yYWRpby1pY29uXHJcblx0XHRcdHdpZHRoOiAwcHg7XHJcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcblx0XHRcdGhlaWdodDogMHB4O1xyXG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAucmFkaW8taWNvbiAucmFkaW8taW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3JcclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHR9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "cEW6":
/*!********************************!*\
  !*** ./src/app/pipes/group.ts ***!
  \********************************/
/*! exports provided: GroupPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPipe", function() { return GroupPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let GroupPipe = class GroupPipe {
    // GroupPipe
    // Filter group by name
    transform(groups, search) {
        if (!groups) {
            return;
        }
        else if (!search) {
            return groups;
        }
        else {
            let term = search.toLowerCase();
            return groups.filter(group => group.name.toLowerCase().indexOf(term) > -1);
        }
    }
};
GroupPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'groupFilter'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GroupPipe);



/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
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


/***/ }),

/***/ "dAQS":
/*!*************************************************************************!*\
  !*** ./src/app/components/countdown-timer/countdown-timer.component.ts ***!
  \*************************************************************************/
/*! exports provided: CountdownTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownTimerComponent", function() { return CountdownTimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_countdown_timer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./countdown-timer.component.html */ "Z8da");
/* harmony import */ var _countdown_timer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countdown-timer.component.scss */ "IUqK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);






// TODO:  dayjs is throwing this ERROR:
//        error TS2339: Property 'to' does not exist on type 'Dayjs'.
// Luckily there's a PR that apparently fixes this (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
// When fixed, uncomment this
// import * as dayjs from 'dayjs';
// When fixed, remove this

const dayjs = dayjs__WEBPACK_IMPORTED_MODULE_6__;
let CountdownTimerComponent = class CountdownTimerComponent {
    constructor() {
        this._initialUnit = 'hour';
        this._endingUnit = 'second';
        this._updateInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000);
        this._unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // DIVISORS
        // 60 seconds * 60 (minutes) * 24 (hours) = 86400 seconds = 1 day
        this._dayDivisor = (60 * 60 * 24);
        // 60 seconds * 60 (minutes) = 3600 seconds = 1 hour
        this._hourDivisor = (60 * 60);
        // 60 seconds = 1 minute
        this._minuteDivisor = 60;
        this._secondDivisor = 1;
        // MODULUS
        // Neutral modulus
        this._dayModulus = (secondsLeft) => secondsLeft;
        // The modulus operator (%) returns the division remainder.
        // To figure out how many hours are left after taking in consideration the days, we should do:
        //    (secondsLeft % hourModulus) / hourDivisor
        // In 1 day there are 86400 seconds, and in 1 hour 3600 seconds. 1 day + 1 hour = 90000 seconds
        //    (90000s % 86400s) / 3600s = 1h
        this._hourModulus = (secondsLeft) => (secondsLeft % this._dayDivisor);
        this._minuteModulus = (secondsLeft) => (secondsLeft % this._hourDivisor);
        this._secondModulus = (secondsLeft) => (secondsLeft % this._minuteDivisor);
    }
    set end(endingTime) {
        this._endingTime = (endingTime !== undefined && endingTime !== null) ? dayjs(endingTime) : dayjs();
    }
    set units(units) {
        // 'day', 'hour, 'minute', 'second'
        this._initialUnit = (units !== undefined && (units.from !== undefined && units.from !== null)) ? units.from : 'hour';
        this._endingUnit = (units !== undefined && (units.to !== undefined && units.to !== null)) ? units.to : 'second';
        // For 'day' unit, use the default modulus
        // Adjust modulus depending on the unit
        if (this._initialUnit === 'hour') {
            // Cancelation modulus
            this._dayModulus = (secondsLeft) => 1;
            // Neutral modulus
            this._hourModulus = (secondsLeft) => secondsLeft;
        }
        if (this._initialUnit === 'minute') {
            // Cancelation modulus
            this._dayModulus = (secondsLeft) => 1;
            this._hourModulus = (secondsLeft) => 1;
            // Neutral modulus
            this._minuteModulus = (secondsLeft) => secondsLeft;
        }
        if (this._initialUnit === 'second') {
            // Cancelation modulus
            this._dayModulus = (secondsLeft) => 1;
            this._hourModulus = (secondsLeft) => 1;
            this._minuteModulus = (secondsLeft) => 1;
            // Neutral modulus
            this._secondModulus = (secondsLeft) => secondsLeft;
        }
    }
    ngOnInit() {
        this._updateInterval.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._unsubscribeSubject)).subscribe((val) => {
            const secondsLeft = this._endingTime.diff(dayjs(), 'second');
            this._daysLeft = Math.floor(this._dayModulus(secondsLeft) / this._dayDivisor);
            this._hoursLeft = Math.floor(this._hourModulus(secondsLeft) / this._hourDivisor);
            this._minutesLeft = Math.floor(this._minuteModulus(secondsLeft) / this._minuteDivisor);
            this._secondsLeft = Math.floor(this._secondModulus(secondsLeft) / this._secondDivisor);
        }, (error) => console.error(error)
        // () => console.log('[takeUntil] complete')
        );
    }
    ngOnDestroy() {
        this._unsubscribeSubject.next();
        this._unsubscribeSubject.complete();
    }
};
CountdownTimerComponent.ctorParameters = () => [];
CountdownTimerComponent.propDecorators = {
    end: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    units: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CountdownTimerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-countdown-timer',
        template: _raw_loader_countdown_timer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_countdown_timer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CountdownTimerComponent);



/***/ }),

/***/ "dD9Q":
/*!*********************************!*\
  !*** ./src/app/pipes/search.ts ***!
  \*********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let SearchPipe = class SearchPipe {
    // SearchPipe
    // Filter user search results for name or username excluding the excludedIds.
    transform(accounts, data) {
        let excludedIds = data[0];
        var term = data[1];
        if (!accounts) {
            return;
        }
        else if (!excludedIds) {
            return accounts;
        }
        else if (excludedIds && !term) {
            return accounts.filter((account) => excludedIds.indexOf(account.userId) == -1);
        }
        else {
            term = term.toLowerCase();
            return accounts.filter((account) => excludedIds.indexOf(account.userId) == -1 && (account.name.toLowerCase().indexOf(term) > -1 || account.username.toLowerCase().indexOf(term) > -1));
        }
    }
};
SearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchFilter'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SearchPipe);



/***/ }),

/***/ "e6VL":
/*!***********************************************************************!*\
  !*** ./src/app/components/counter-input/counter-input.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-counter-input {\n  --counter-background: #000;\n  --counter-color: #FFF;\n  --counter-border-color: #000;\n  --counter-border-radius-outer: 50%;\n  --counter-border-radius-inner: 50%;\n  --counter-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\napp-counter-input ion-button.counter-icon {\n  --background: var(--counter-background);\n  --color: var(--counter-color);\n  --color-activated: var(--counter-color);\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--counter-border-color);\n  --box-shadow: none;\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n  --padding-bottom: 3px;\n  --padding-end: 3px;\n  --padding-start: 3px;\n  --padding-top: 3px;\n  margin: 0px;\n}\napp-counter-input .counter-value {\n  color: var(--counter-color);\n  margin: 0px 10px;\n}\napp-counter-input:not([basic]) .button-outer {\n  width: var(--counter-size);\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  padding-bottom: 100%;\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper .counter-icon {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: auto;\n  width: 100%;\n}\napp-counter-input[basic] {\n  --counter-border-radius-outer: 12px;\n  --counter-border-radius-inner: 0px;\n}\napp-counter-input[basic] .counter-value {\n  display: none;\n}\napp-counter-input[basic] .button-outer:first-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n}\napp-counter-input[basic] .button-outer:last-child {\n  margin-left: -1px;\n}\napp-counter-input[basic] .button-outer:last-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-inner) var(--counter-border-radius-outer) var(--counter-border-radius-outer) var(--counter-border-radius-inner);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyLWlucHV0L2NvdW50ZXItaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUU7RUFDRSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLDRKQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0FBREo7QUFJRTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQU9JO0VBQ0UsMEJBQUE7QUFMTjtBQU9NO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFMUjtBQU9RO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMVjtBQVdFO0VBQ0UsbUNBQUE7RUFDQSxrQ0FBQTtBQVRKO0FBV0k7RUFDRSxhQUFBO0FBVE47QUFjUTtFQUNFLDRKQUFBO0FBWlY7QUFnQk07RUFFRSxpQkFBQTtBQWZSO0FBaUJRO0VBQ0UsNEpBQUE7QUFmViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRlci1pbnB1dC9jb3VudGVyLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNvdW50ZXItaW5wdXQge1xyXG4gIC0tY291bnRlci1iYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIC0tY291bnRlci1jb2xvcjogI0ZGRjtcclxuICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiAjMDAwO1xyXG4gIC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyOiA1MCU7XHJcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXI6IDUwJTtcclxuICAtLWNvdW50ZXItc2l6ZTogMzBweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gIGlvbi1idXR0b24uY291bnRlci1pY29uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY291bnRlci1iYWNrZ3JvdW5kKTtcclxuICAgIC0tY29sb3I6IHZhcigtLWNvdW50ZXItY29sb3IpO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWNvdW50ZXItY29sb3IpO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb3VudGVyLWJvcmRlci1jb2xvcik7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcik7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuXHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcblxyXG4gIC5jb3VudGVyLXZhbHVlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmOm5vdChbYmFzaWNdKSB7XHJcbiAgICAvLyBGb3JjZSBlYWNoIGNvdW50ZXIgYnV0dG9uIHRvIGhhdmUgYSAxOjEgYXNwZWN0IHJhdGlvXHJcbiAgICAuYnV0dG9uLW91dGVyIHtcclxuICAgICAgd2lkdGg6IHZhcigtLWNvdW50ZXItc2l6ZSk7XHJcblxyXG4gICAgICAuYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG5cclxuICAgICAgICAuY291bnRlci1pY29uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmW2Jhc2ljXSB7XHJcbiAgICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcjogMTJweDtcclxuICAgIC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyOiAwcHg7XHJcblxyXG4gICAgLmNvdW50ZXItdmFsdWUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tb3V0ZXIge1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIC8vIFRvIGF2b2lkIGRvdWJsZSBib3JkZXJcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24ge1xyXG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "eecM":
/*!***********************************!*\
  !*** ./src/app/pipes/resource.ts ***!
  \***********************************/
/*! exports provided: ResourcePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcePipe", function() { return ResourcePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ResourcePipe = class ResourcePipe {
    // ResourcePipe
    // Filter resource by name
    transform(resources, search) {
        if (!resources) {
            return;
        }
        else if (!search) {
            return resources;
        }
        else {
            let term = search.toLowerCase();
            return resources.filter(resource => resource.name.toLowerCase().indexOf(term) > -1);
        }
    }
};
ResourcePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'resourceFilter'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ResourcePipe);



/***/ }),

/***/ "fpyr":
/*!***************************************************************************!*\
  !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts ***!
  \***************************************************************************/
/*! exports provided: CheckboxWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponent", function() { return CheckboxWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkbox_wrapper_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkbox-wrapper.component.html */ "3TL5");
/* harmony import */ var _checkbox_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox-wrapper.component.scss */ "XmS3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




// Reference to the @ionic/angular Components List:
// https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts

let CheckboxWrapperComponent = class CheckboxWrapperComponent {
    constructor() { }
    ngAfterContentInit() {
        // ContentChild is set
        this.isChecked = this.checkbox.checked;
        // Subscribe to changes
        this.checkbox.ionChange.subscribe(changes => {
            this.isChecked = changes.detail.checked;
        });
    }
};
CheckboxWrapperComponent.ctorParameters = () => [];
CheckboxWrapperComponent.propDecorators = {
    checkbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"],] }],
    isChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.checkbox-checked',] }]
};
CheckboxWrapperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkbox-wrapper',
        template: _raw_loader_checkbox_wrapper_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkbox_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CheckboxWrapperComponent);



/***/ }),

/***/ "g1fN":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-float-left\">\r\n  <ion-list>\r\n    <!--<ion-list-header>Ionic</ion-list-header>-->\r\n    <ion-item button>Tag as as Resource</ion-item>\r\n    <ion-item button>Report inappropriate</ion-item>\r\n    <ion-item button>Message user</ion-item>\r\n    <ion-item lines=\"none\" detail=\"false\" button onClick=\"close()\">Close</ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "gLxg":
/*!*******************************************************************!*\
  !*** ./src/app/components/rating-input/rating-input.component.ts ***!
  \*******************************************************************/
/*! exports provided: RatingInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingInputComponent", function() { return RatingInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rating_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rating-input.component.html */ "2MtO");
/* harmony import */ var _rating_input_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating-input.component.scss */ "reyE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var RatingInputComponent_1;





let RatingInputComponent = RatingInputComponent_1 = class RatingInputComponent {
    constructor() {
        this.max = 5;
        this.readOnly = false;
        this.propagateChange = () => { }; // Noop function
    }
    ngOnInit() {
        const states = [];
        for (let i = 0; i < this.max; i++) {
            if (this.innerValue > i && this.innerValue < i + 1) {
                states[i] = 2;
            }
            else if (this.innerValue > i) {
                states[i] = 1;
            }
            else {
                states[i] = 0;
            }
        }
        this.range = states;
    }
    get value() {
        return this.innerValue;
    }
    set value(val) {
        if (val !== this.innerValue) {
            this.innerValue = val;
            this.propagateChange(val);
        }
    }
    writeValue(value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
    rate(amount) {
        if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
            this.value = amount;
        }
    }
};
RatingInputComponent.propDecorators = {
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    readOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RatingInputComponent = RatingInputComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rating-input',
        template: _raw_loader_rating_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => RatingInputComponent_1), multi: true }
        ],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_rating_input_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RatingInputComponent);



/***/ }),

/***/ "habw":
/*!*******************************************************************!*\
  !*** ./src/app/reaction-list-modal/reaction-list-modal.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhY3Rpb24tbGlzdC1tb2RhbC9yZWFjdGlvbi1saXN0LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVDQUFBO0VBQ0Esd0NBQUE7QUFBRjs7QUFHRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0aW9uLWxpc3QtbW9kYWwvcmVhY3Rpb24tbGlzdC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG4gIH1cclxuICBcclxuICAuaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "iSCB":
/*!*********************************************************************************!*\
  !*** ./src/app/components/show-hide-password/show-hide-password.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host .type-toggle {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\n:host .type-toggle .show-option,\n:host .type-toggle .hide-option {\n  font-size: 1.4rem;\n  display: block;\n}\n:host .type-toggle .show-option:not(ion-icon),\n:host .type-toggle .hide-option:not(ion-icon) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSw2QkFBQTtVQUFBLDRCQUFBO0FBQ0o7QUFDSTs7RUFFRSxpQkFBQTtFQUNBLGNBQUE7QUFDTjtBQUVNOztFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLnR5cGUtdG9nZ2xlIHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XHJcblxyXG4gICAgLnNob3ctb3B0aW9uLFxyXG4gICAgLmhpZGUtb3B0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgLy8gSW4gY2FzZSB5b3Ugd2FudCB0byB1c2UgdGV4dCBpbnN0ZWFkIG9mIGljb25zXHJcbiAgICAgICY6bm90KGlvbi1pY29uKSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shell/shell.module */ "ZpN7");
/* harmony import */ var _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox-wrapper/checkbox-wrapper.component */ "fpyr");
/* harmony import */ var _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-hide-password/show-hide-password.component */ "A0kb");
/* harmony import */ var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./countdown-timer/countdown-timer.component */ "dAQS");
/* harmony import */ var _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./counter-input/counter-input.component */ "lfmG");
/* harmony import */ var _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rating-input/rating-input.component */ "gLxg");











let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot()
        ],
        declarations: [
            _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxWrapperComponent"],
            _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordComponent"],
            _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__["CountdownTimerComponent"],
            _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__["CounterInputComponent"],
            _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__["RatingInputComponent"]
        ],
        exports: [
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"],
            _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxWrapperComponent"],
            _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordComponent"],
            _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__["CountdownTimerComponent"],
            _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__["CounterInputComponent"],
            _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__["RatingInputComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "jfhx":
/*!***************************************!*\
  !*** ./src/app/pipes/conversation.ts ***!
  \***************************************/
/*! exports provided: ConversationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPipe", function() { return ConversationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ConversationPipe = class ConversationPipe {
    // ConversationPipe
    // Filter conversation based on friend's name or username.
    transform(conversations, search) {
        if (!conversations) {
            return;
        }
        else if (!search) {
            return conversations;
        }
        else {
            let term = search.toLowerCase();
            return conversations.filter(conversation => conversation.friend.name.toLowerCase().indexOf(term) > -1 || conversation.friend.username.toLowerCase().indexOf(term) > -1);
        }
    }
};
ConversationPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'conversationFilter'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConversationPipe);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-ios.entry.js": [
		"bnjm",
		"common",
		0
	],
	"./ion-action-sheet-md.entry.js": [
		"utt2",
		"common",
		1
	],
	"./ion-alert-ios.entry.js": [
		"yaSn",
		"common",
		2
	],
	"./ion-alert-md.entry.js": [
		"2/RY",
		"common",
		3
	],
	"./ion-app_8-ios.entry.js": [
		"iInF",
		"common",
		4
	],
	"./ion-app_8-md.entry.js": [
		"K9Nc",
		"common",
		5
	],
	"./ion-avatar_3-ios.entry.js": [
		"hH1s",
		"common",
		6
	],
	"./ion-avatar_3-md.entry.js": [
		"Jw9y",
		"common",
		7
	],
	"./ion-back-button-ios.entry.js": [
		"ouVF",
		"common",
		8
	],
	"./ion-back-button-md.entry.js": [
		"/joy",
		"common",
		9
	],
	"./ion-backdrop-ios.entry.js": [
		"uJLv",
		10
	],
	"./ion-backdrop-md.entry.js": [
		"fSmE",
		11
	],
	"./ion-button_2-ios.entry.js": [
		"s1jK",
		"common",
		12
	],
	"./ion-button_2-md.entry.js": [
		"Wou7",
		"common",
		13
	],
	"./ion-card_5-ios.entry.js": [
		"qshq",
		"common",
		14
	],
	"./ion-card_5-md.entry.js": [
		"Q1uX",
		"common",
		15
	],
	"./ion-checkbox-ios.entry.js": [
		"059i",
		"common",
		16
	],
	"./ion-checkbox-md.entry.js": [
		"eLfv",
		"common",
		17
	],
	"./ion-chip-ios.entry.js": [
		"+FzG",
		"common",
		18
	],
	"./ion-chip-md.entry.js": [
		"yRpg",
		"common",
		19
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		20
	],
	"./ion-datetime_3-ios.entry.js": [
		"Z1Jy",
		"common",
		21
	],
	"./ion-datetime_3-md.entry.js": [
		"X0Dk",
		"common",
		22
	],
	"./ion-fab_3-ios.entry.js": [
		"wvyA",
		"common",
		23
	],
	"./ion-fab_3-md.entry.js": [
		"NkKY",
		"common",
		24
	],
	"./ion-img.entry.js": [
		"wHD8",
		25
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"nf6t",
		"common",
		26
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"lg/V",
		"common",
		27
	],
	"./ion-input-ios.entry.js": [
		"sdJS",
		"common",
		28
	],
	"./ion-input-md.entry.js": [
		"uQUw",
		"common",
		29
	],
	"./ion-item-option_3-ios.entry.js": [
		"Pa1g",
		"common",
		30
	],
	"./ion-item-option_3-md.entry.js": [
		"KTnd",
		"common",
		31
	],
	"./ion-item_8-ios.entry.js": [
		"Z51p",
		"common",
		32
	],
	"./ion-item_8-md.entry.js": [
		"8bam",
		"common",
		33
	],
	"./ion-loading-ios.entry.js": [
		"J3Yu",
		"common",
		34
	],
	"./ion-loading-md.entry.js": [
		"N3W9",
		"common",
		35
	],
	"./ion-menu_3-ios.entry.js": [
		"IlGI",
		"common",
		36
	],
	"./ion-menu_3-md.entry.js": [
		"WHty",
		"common",
		37
	],
	"./ion-modal-ios.entry.js": [
		"mgaC",
		"common",
		38
	],
	"./ion-modal-md.entry.js": [
		"EpFf",
		"common",
		39
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		40
	],
	"./ion-popover-ios.entry.js": [
		"Gdks",
		"common",
		41
	],
	"./ion-popover-md.entry.js": [
		"VgKV",
		"common",
		42
	],
	"./ion-progress-bar-ios.entry.js": [
		"0PGG",
		"common",
		43
	],
	"./ion-progress-bar-md.entry.js": [
		"h/Bu",
		"common",
		44
	],
	"./ion-radio_2-ios.entry.js": [
		"5bK7",
		"common",
		45
	],
	"./ion-radio_2-md.entry.js": [
		"pOmE",
		"common",
		46
	],
	"./ion-range-ios.entry.js": [
		"5g9+",
		"common",
		47
	],
	"./ion-range-md.entry.js": [
		"fD4w",
		"common",
		48
	],
	"./ion-refresher_2-ios.entry.js": [
		"CXux",
		"common",
		49
	],
	"./ion-refresher_2-md.entry.js": [
		"RODS",
		"common",
		50
	],
	"./ion-reorder_2-ios.entry.js": [
		"IdzL",
		"common",
		51
	],
	"./ion-reorder_2-md.entry.js": [
		"Ftzj",
		"common",
		52
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		53
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		54
	],
	"./ion-searchbar-ios.entry.js": [
		"l0q3",
		"common",
		55
	],
	"./ion-searchbar-md.entry.js": [
		"mLlG",
		"common",
		56
	],
	"./ion-segment_2-ios.entry.js": [
		"Iymp",
		"common",
		57
	],
	"./ion-segment_2-md.entry.js": [
		"3msy",
		"common",
		58
	],
	"./ion-select_3-ios.entry.js": [
		"rYLK",
		"common",
		59
	],
	"./ion-select_3-md.entry.js": [
		"WOXB",
		"common",
		60
	],
	"./ion-slide_2-ios.entry.js": [
		"F/Xn",
		61
	],
	"./ion-slide_2-md.entry.js": [
		"k8us",
		62
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		63
	],
	"./ion-split-pane-ios.entry.js": [
		"edcM",
		64
	],
	"./ion-split-pane-md.entry.js": [
		"RyPD",
		65
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"DP4G",
		"common",
		66
	],
	"./ion-tab-bar_2-md.entry.js": [
		"gaXT",
		"common",
		67
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		68
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		69
	],
	"./ion-textarea-ios.entry.js": [
		"xNZy",
		"common",
		70
	],
	"./ion-textarea-md.entry.js": [
		"p1XJ",
		"common",
		71
	],
	"./ion-toast-ios.entry.js": [
		"XGfm",
		"common",
		72
	],
	"./ion-toast-md.entry.js": [
		"Y/uG",
		"common",
		73
	],
	"./ion-toggle-ios.entry.js": [
		"WbT0",
		"common",
		74
	],
	"./ion-toggle-md.entry.js": [
		"upP9",
		"common",
		75
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		76
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "l0GK":
/*!***************************************************************!*\
  !*** ./src/app/user-profile-modal/user-profile-modal.page.ts ***!
  \***************************************************************/
/*! exports provided: UserProfileModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModalPage", function() { return UserProfileModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_profile_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-profile-modal.page.html */ "Ox2M");
/* harmony import */ var _user_profile_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile-modal.page.scss */ "VkdX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/validator */ "ZvGz");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");









let UserProfileModalPage = class UserProfileModalPage {
    constructor(modal, navParam, formBuilder, firestore, loadingProvider) {
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
    ngOnInit() {
    }
    save() {
        this.submitAttempt = true;
        if (this.myForm.valid) {
            this.loadingProvider.show();
            this.firestore.doc('accounts/' + this.user.userId).update(this.user).then(() => {
                this.loadingProvider.hide();
                this.loadingProvider.showToast("Updated Successfully");
                this.modal.dismiss();
            }).catch(err => {
                this.loadingProvider.showToast("Something went wrong");
                this.loadingProvider.hide();
            });
        }
    }
    dismissModal() {
        this.modal.dismiss();
    }
};
UserProfileModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] }
];
UserProfileModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-profile-modal',
        template: _raw_loader_user_profile_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_profile_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]])
], UserProfileModalPage);



/***/ }),

/***/ "lfmG":
/*!*********************************************************************!*\
  !*** ./src/app/components/counter-input/counter-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: counterRangeValidator, CounterInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterRangeValidator", function() { return counterRangeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterInputComponent", function() { return CounterInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_counter_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./counter-input.component.html */ "sMFE");
/* harmony import */ var _counter_input_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter-input.component.scss */ "e6VL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var CounterInputComponent_1;





function counterRangeValidator(minValue, maxValue) {
    return (c) => {
        const err = {
            rangeError: {
                given: c.value,
                min: minValue || 0,
                max: maxValue || 10
            }
        };
        return (c.value > +maxValue || c.value < +minValue) ? err : null;
    };
}
let CounterInputComponent = CounterInputComponent_1 = class CounterInputComponent {
    constructor() {
        // tslint:disable-next-line:no-input-rename
        this._counterValue = 0;
        this.propagateChange = () => { }; // Noop function
        this.validateFn = () => { }; // Noop function
    }
    get counterValue() {
        return this._counterValue;
    }
    set counterValue(val) {
        this._counterValue = val;
        this.propagateChange(val);
    }
    ngOnChanges(inputs) {
        if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = counterRangeValidator(this.counterRangeMin, this.counterRangeMax);
        }
    }
    writeValue(value) {
        if (value) {
            this.counterValue = value;
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
    increase() {
        this.counterValue++;
    }
    decrease() {
        this.counterValue--;
    }
    validate(c) {
        return this.validateFn(c);
    }
};
CounterInputComponent.propDecorators = {
    _counterValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['counterValue',] }],
    counterRangeMax: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['max',] }],
    counterRangeMin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['min',] }]
};
CounterInputComponent = CounterInputComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-counter-input',
        template: _raw_loader_counter_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => CounterInputComponent_1), multi: true },
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => CounterInputComponent_1), multi: true }
        ],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_counter_input_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CounterInputComponent);



/***/ }),

/***/ "mnRn":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "Pn9U");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "DJEK");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "t8sF");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading.service */ "7ch9");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");









let ImageService = class ImageService {
    constructor(firestore, loadingProvider, camera, mediaCapture, imagePicker, file) {
        this.firestore = firestore;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.mediaCapture = mediaCapture;
        this.imagePicker = imagePicker;
        this.file = file;
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
    }
    // Function to convert dataURI to Blob needed by Firebase
    imgURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    }
    // Generate a random filename of length for the image to be uploaded
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    }
    // Set ProfilePhoto given the user and the cameraSourceType.
    // This function processes the imageURI returned and uploads the file on Firebase,
    // Finally the user data on the database is updated.
    setProfilePhoto(user, sourceType) {
        console.log(user);
        this.profilePhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.profilePhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
                'contentType': imgBlob.type
            };
            let name = this.generateFilename();
            let dpStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + user.userId + '/' + name);
            // Generate filename and upload to Firebase Storage.
            dpStorageRef.put(imgBlob, metadata).then((snapshot) => {
                // Delete previous profile photo on Storage if it exists.
                // this.deleteImageFile(user.img);
                // URL of the uploaded image!
                console.log(snapshot);
                dpStorageRef.getDownloadURL().then(res => {
                    console.log(res);
                    let url = res;
                    let profile = {
                        displayName: user.name,
                        photoURL: url
                    };
                    // Update Firebase User.
                    firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.updateProfile(profile)
                        .then((success) => {
                        // Update User Data on Database.
                        this.firestore.doc('/accounts/' + user.userId).update({
                            img: url
                        }).then((success) => {
                            this.loadingProvider.hide();
                            this.loadingProvider.showToast("Profile Updated");
                        }).catch((error) => {
                            console.log(error);
                            this.loadingProvider.hide();
                            this.loadingProvider.showToast("Something went wrong");
                        });
                    })
                        .catch((error) => {
                        console.log(error);
                        this.loadingProvider.hide();
                        this.loadingProvider.showToast("Something went wrong");
                    });
                });
            }).catch((error) => {
                console.log(error);
                this.loadingProvider.hide();
                this.loadingProvider.showToast("Something went wrong");
            });
        }).catch((error) => {
            this.loadingProvider.hide();
        });
    }
    // Upload and set the group object's image.
    setGroupPhoto(group, sourceType) {
        this.groupPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.groupPhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
                'contentType': imgBlob.type
            };
            let name = this.generateFilename();
            let groupStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + name);
            groupStorageRef.put(imgBlob, metadata).then((snapshot) => {
                // this.deleteImageFile(group.img);
                // URL of the uploaded image!
                groupStorageRef.getDownloadURL().then(url => {
                    group.img = url;
                    this.loadingProvider.hide();
                });
            }).catch((error) => {
                this.loadingProvider.hide();
                this.loadingProvider.showToast("Something went wrong");
            });
        }).catch((error) => {
            this.loadingProvider.hide();
        });
    }
    // Set group photo and return the group object as promise.
    setGroupPhotoPromise(group, sourceType) {
        return new Promise(resolve => {
            this.groupPhotoOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.groupPhotoOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                let gPPStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + this.generateFilename());
                gPPStorageRef.put(imgBlob, metadata).then((snapshot) => {
                    this.deleteImageFile(group.img);
                    // URL of the uploaded image!
                    gPPStorageRef.getDownloadURL().then(url => {
                        group.img = url;
                        this.loadingProvider.hide();
                        resolve(group);
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.loadingProvider.showToast("Something went wrong");
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    //Delete the image given the url.
    deleteImageFile(path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        // tslint:disable-next-line: max-line-length
        firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error); });
    }
    //Delete the user.img given the user.
    deleteUserImageFile(user) {
        var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
        // tslint:disable-next-line: max-line-length
        firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + user.userId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error); });
    }
    // Delete group image file on group storage reference.
    deleteGroupImageFile(groupId, path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error); });
    }
    // Upload photo message and return the url as promise.
    uploadPhotoMessage(conversationId, sourceType) {
        return new Promise(resolve => {
            this.photoMessageOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                let upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + conversationId + '/' + this.generateFilename());
                upRef.put(imgBlob, metadata).then((snapshot) => {
                    // URL of the uploaded image!
                    upRef.getDownloadURL().then(url => {
                        this.loadingProvider.hide();
                        resolve(url);
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.loadingProvider.showToast("Something went wrong");
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    // Upload photo message and return the url as promise.
    uploadPostPhoto(sourceType) {
        return new Promise(resolve => {
            this.photoMessageOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                let upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/posts/' + this.generateFilename());
                upRef.put(imgBlob, metadata).then((snapshot) => {
                    // URL of the uploaded image!
                    upRef.getDownloadURL().then(url => {
                        this.loadingProvider.hide();
                        resolve(url);
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.loadingProvider.showToast("Something went wrong");
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    uploadPostPhotos(postMedia) {
        let promises = [];
        return new Promise(resolve => {
            if (postMedia && postMedia.length > 0) {
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < postMedia.length; i++) {
                    promises.push(this.getDownloadUrlImage(postMedia[i]));
                }
                Promise.all(promises).then((results) => {
                    resolve(results);
                });
            }
            else {
                resolve(postMedia);
            }
        });
    }
    getDownloadUrlImage(imageBase64) {
        return new Promise(resolve => {
            // Process the returned imageURI.
            let imgBlob = this.imgURItoBlob(imageBase64);
            let metadata = {
                'contentType': imgBlob.type
            };
            // Generate filename and upload to Firebase Storage.
            let upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/posts/' + this.generateFilename());
            upRef.put(imgBlob, metadata).then((snapshot) => {
                // URL of the uploaded image!
                upRef.getDownloadURL().then(url => {
                    resolve(url);
                }).catch((err) => { console.log('Error occurred while downloading the url of images.'); });
            }).catch((error) => {
                console.log('Error occured while uploading images:', error);
            });
        });
    }
    deletePostPhoto(url) {
        var fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
        firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/posts/' + fileName).delete().then(() => { }).catch((error) => { console.log(error); });
    }
    uploadPostReactionPhoto(postId, userId, sourceType) {
        return new Promise(resolve => {
            this.photoMessageOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                let upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/posts' + postId + '/' + userId + '/' + this.generateFilename());
                upRef.put(imgBlob, metadata).then((snapshot) => {
                    // URL of the uploaded image!
                    upRef.getDownloadURL().then(url => {
                        this.loadingProvider.hide();
                        resolve(url);
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.loadingProvider.showToast("Something went wrong");
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    uploadPostVideo() {
        return new Promise(resolve => {
            this.loadingProvider.show();
            this.mediaCapture.captureVideo().then(data => {
                let videoUrl = data[0].fullPath;
                let x = videoUrl.split("/");
                let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                let name = x[x.length - 1];
                this.file.readAsArrayBuffer(filepath, name).then(success => {
                    let blob = new Blob([success], { type: "video/mp4" });
                    let uploadRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + name);
                    uploadRef.put(blob).then(res => {
                        let process = res.bytesTransferred / res.totalBytes * 100;
                        console.log(process);
                        this.loadingProvider.hide();
                        uploadRef.getDownloadURL().then(url => {
                            resolve(url);
                        });
                    }, err => {
                        this.loadingProvider.hide();
                        console.log("Failed");
                    });
                });
            }, err => {
                this.loadingProvider.hide();
                console.log("Media Err = " + err);
            });
        });
    }
    deletePostReactionPhoto(postId, url) {
        var fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
        firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + postId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error); });
    }
    // Upload group photo message and return a promise as url.
    uploadGroupPhotoMessage(groupId, sourceType) {
        return new Promise(resolve => {
            this.photoMessageOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                let ugpRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + this.generateFilename());
                ugpRef.put(imgBlob, metadata).then((snapshot) => {
                    // URL of the uploaded image!
                    ugpRef.getDownloadURL().then(url => {
                        this.loadingProvider.hide();
                        resolve(url);
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.loadingProvider.showToast("Something went wrong");
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    uploadGroupVideoMessage(groupId) {
        return new Promise(resolve => {
            this.loadingProvider.show();
            this.mediaCapture.captureVideo().then(data => {
                let videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                let x = videoUrl.split("/");
                let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                let name = x[x.length - 1];
                console.log(filepath + " - " + name);
                this.file.readAsArrayBuffer(filepath, name).then(success => {
                    console.log(success);
                    let blob = new Blob([success], { type: "video/mp4" });
                    console.log(blob);
                    let upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + groupId + "/" + name).put(blob);
                    upload.then(res => {
                        let process = res.bytesTransferred / res.totalBytes * 100;
                        console.log(process);
                        this.loadingProvider.hide();
                        resolve(res.downloadURL);
                    }, err => {
                        this.loadingProvider.hide();
                        console.log("Failed");
                    });
                });
            }, err => {
                this.loadingProvider.hide();
                console.log("Media Err = " + err);
            });
        });
    }
    uploadVideoMessage(conversationId) {
        return new Promise(resolve => {
            this.loadingProvider.show();
            this.mediaCapture.captureVideo().then(data => {
                let videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                let x = videoUrl.split("/");
                let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                let name = x[x.length - 1];
                console.log(filepath + " - " + name);
                this.file.readAsArrayBuffer(filepath, name).then(success => {
                    console.log(success);
                    let blob = new Blob([success], { type: "video/mp4" });
                    console.log(blob);
                    // let timestamp = (Math.floor(Date.now() / 1000)).toString();
                    let uploadRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + name);
                    uploadRef.put(blob).then(res => {
                        let process = res.bytesTransferred / res.totalBytes * 100;
                        console.log(process);
                        this.loadingProvider.hide();
                        uploadRef.getDownloadURL().then(url => {
                            resolve(url);
                        });
                    }, err => {
                        this.loadingProvider.hide();
                        console.log("Failed");
                    });
                });
            }, err => {
                this.loadingProvider.hide();
                console.log("Media Err = " + err);
            });
        });
    }
    // Upload group photo message and return a promise as url.
    uploadGroupPhotoResource(groupId, sourceType) {
        return new Promise(resolve => {
            this.photoMessageOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                let ugpRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + this.generateFilename());
                ugpRef.put(imgBlob, metadata).then((snapshot) => {
                    // URL of the uploaded image!
                    ugpRef.getDownloadURL().then(url => {
                        this.loadingProvider.hide();
                        resolve(url);
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.loadingProvider.showToast("Something went wrong");
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    uploadGroupVideoResource(groupId) {
        return new Promise(resolve => {
            this.loadingProvider.show();
            this.mediaCapture.captureVideo().then(data => {
                let videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                let x = videoUrl.split("/");
                let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                let name = x[x.length - 1];
                console.log(filepath + " - " + name);
                this.file.readAsArrayBuffer(filepath, name).then(success => {
                    console.log(success);
                    let blob = new Blob([success], { type: "video/mp4" });
                    console.log(blob);
                    let upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + groupId + "/" + name).put(blob);
                    upload.then(res => {
                        let process = res.bytesTransferred / res.totalBytes * 100;
                        console.log(process);
                        this.loadingProvider.hide();
                        resolve(res.downloadURL);
                    }, err => {
                        this.loadingProvider.hide();
                        console.log("Failed");
                    });
                });
            }, err => {
                this.loadingProvider.hide();
                console.log("Media Err = " + err);
            });
        });
    }
    getGroupVideoResource(resourceurl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child(resourceurl).getDownloadURL().then(function (url) {
                return url;
            }).catch(function (error) {
                // Handle any errors
            });
        });
    }
    getImages() {
        return new Promise(resolve => {
            this.options = {
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
            this.imageResponse = [];
            this.imagePicker.getPictures(this.options).then((results) => {
                for (let i = 0; i < results.length; i++) {
                    this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
                }
                resolve(this.imageResponse);
            }, (err) => {
                alert(err);
            });
        });
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] }
];
ImageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]])
], ImageService);



/***/ }),

/***/ "oXAZ":
/*!****************************************************************!*\
  !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n:host .content-wrapper {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "p2ut":
/*!*******************************************!*\
  !*** ./src/app/popover/popover.module.ts ***!
  \*******************************************/
/*! exports provided: PopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover.page */ "M0Xy");







const routes = [
    {
        path: '',
        component: _popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]
    }
];
let PopoverPageModule = class PopoverPageModule {
};
PopoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]]
    })
], PopoverPageModule);



/***/ }),

/***/ "qVJx":
/*!***********************************************!*\
  !*** ./src/app/tag-modal/tag-modal.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZy1tb2RhbC90YWctbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "reyE":
/*!*********************************************************************!*\
  !*** ./src/app/components/rating-input/rating-input.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-rating-input {\n  --rating-background: transparent;\n  --rating-color: #000;\n  --rating-size: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\napp-rating-input ion-button.rating-icon {\n  --background: var(--rating-background);\n  --color: var(--rating-color);\n  --color-activated: var(--rating-color);\n  --box-shadow: none;\n  --padding-bottom: 0px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 0px;\n  margin: 0px;\n  flex: 1;\n  width: var(--rating-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYXRpbmctaW5wdXQvcmF0aW5nLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVDO0VBQ0csc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDRixPQUFBO0VBQ0MseUJBQUE7QUFESCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nLWlucHV0L3JhdGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1yYXRpbmctaW5wdXQge1xyXG4gIC0tcmF0aW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tcmF0aW5nLWNvbG9yOiAjMDAwO1xyXG4gIC0tcmF0aW5nLXNpemU6IDMycHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuXHRpb24tYnV0dG9uLnJhdGluZy1pY29uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcmF0aW5nLWJhY2tncm91bmQpO1xyXG4gICAgLS1jb2xvcjogdmFyKC0tcmF0aW5nLWNvbG9yKTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1yYXRpbmctY29sb3IpO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcblxyXG4gICAgbWFyZ2luOiAwcHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdCAgd2lkdGg6IHZhcigtLXJhdGluZy1zaXplKTtcclxuXHR9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "sMFE":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter-input/counter-input.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"button-outer\">\r\n  <div class=\"button-wrapper\">\r\n    <ion-button class=\"counter-icon\" (click)=\"decrease()\">\r\n      <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</div>\r\n<span class=\"counter-value\">{{ _counterValue }}</span>\r\n<div class=\"button-outer\">\r\n  <div class=\"button-wrapper\">\r\n    <ion-button class=\"counter-icon\" (click)=\"increase()\">\r\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "sMbM":
/*!*****************************************************!*\
  !*** ./src/app/review-modal/review-modal.module.ts ***!
  \*****************************************************/
/*! exports provided: ReviewModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewModalPageModule", function() { return ReviewModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _review_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-modal.page */ "ZGG5");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");








const routes = [
    {
        path: '',
        component: _review_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReviewModalPage"]
    }
];
let ReviewModalPageModule = class ReviewModalPageModule {
};
ReviewModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_review_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReviewModalPage"]]
    })
], ReviewModalPageModule);



/***/ }),

/***/ "tqTd":
/*!*********************************!*\
  !*** ./src/app/pipes/friend.ts ***!
  \*********************************/
/*! exports provided: FriendPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendPipe", function() { return FriendPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let FriendPipe = class FriendPipe {
    // FriendPipe
    // Filter friend by name or username.
    transform(friends, search) {
        if (!friends) {
            return;
        }
        else if (!search) {
            return friends;
        }
        else {
            let term = search.toLowerCase();
            return friends.filter(friend => friend.name.toLowerCase().indexOf(term) > -1 || friend.username.toLowerCase().indexOf(term) > -1);
        }
    }
};
FriendPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'friendFilter'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FriendPipe);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");




const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'app',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    { path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    { path: 'friends', loadChildren: './friends/friends.module#FriendsPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'group/:id', loadChildren: './group/group.module#GroupPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'addmembers/:id', loadChildren: './addmembers/addmembers.module#AddmembersPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'groupinfo/:id', loadChildren: './groupinfo/groupinfo.module#GroupinfoPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'groups', loadChildren: './groups/groups.module#GroupsPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'imagemodal', loadChildren: './imagemodal/imagemodal.module#ImagemodalPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'message/:id', loadChildren: './message/message.module#MessagePageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'newgroup', loadChildren: './newgroup/newgroup.module#NewgroupPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'blockedlist', loadChildren: './blockedlist/blockedlist.module#BlockedlistPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'userinfo/:id', loadChildren: './userinfo/userinfo.module#UserinfoPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'profile/:id', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'forgot', loadChildren: './forgot/forgot.module#ForgotPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'tag-modal/:groupTags', loadChildren: './tag-modal/tag-modal.module#TagModalPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    // { path: 'poll/:id', loadChildren: './poll/poll.module#PollPageModule', canActivate: [AuthGuardService] },
    { path: 'new-poll/:id', loadChildren: './new-poll/new-poll.module#NewPollPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'walkthrough', loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule' },
    { path: 'getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedPageModule' },
    // { path: 'new-resource/:id', loadChildren: './new-resource/new-resource.module#NewResourcePageModule', canActivate: [AuthGuardService] },
    // { path: 'resource/:id', loadChildren: './resource/resource.module#ResourcePageModule', canActivate: [AuthGuardService] },
    { path: 'review-modal', loadChildren: './review-modal/review-modal.module#ReviewModalPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    // { path: 'event/:id', loadChildren: './event/event.module#EventPageModule', canActivate: [AuthGuardService] },
    { path: 'new-event/:id', loadChildren: './new-event/new-event.module#NewEventPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'new-post/:id', loadChildren: './new-post/new-post.module#NewPostPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'post/:id', loadChildren: './post/post.module#PostPageModule', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'reaction-list-modal', loadChildren: './reaction-list-modal/reaction-list-modal.module#ReactionListModalPageModule' },
    { path: 'new-resource/:id', loadChildren: './new-resources/new-resources.module#NewResourcesPageModule' },
    { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' },
    { path: 'user-profile-modal', loadChildren: './user-profile-modal/user-profile-modal.module#UserProfileModalPageModule' },
    { path: 'search-modal', loadChildren: './search-modal/search-modal.module#SearchModalPageModule' },
    { path: 'admin-categories', loadChildren: './admin-categories/admin-categories.module#AdminCategoriesPageModule' },
    { path: 'new-category-modal', loadChildren: './new-category-modal/new-category-modal.module#NewCategoryModalPageModule' },
    { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
    { path: 'group-search', loadChildren: './group-search/group-search.module#GroupSearchPageModule' },
    { path: 'group-join/:id', loadChildren: './group-join/group-join.module#GroupJoinPageModule' },
    { path: 'feed-search', loadChildren: './feed-search/feed-search.module#FeedSearchPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vxGH":
/*!******************************************!*\
  !*** ./src/app/services/share.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pipes_friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/friend */ "tqTd");
/* harmony import */ var _pipes_conversation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/conversation */ "jfhx");
/* harmony import */ var _pipes_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/group */ "cEW6");
/* harmony import */ var _pipes_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/search */ "dD9Q");
/* harmony import */ var _pipes_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/date */ "D39k");
/* harmony import */ var _pipes_poll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/poll */ "Irq3");
/* harmony import */ var _pipes_resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/resource */ "eecM");
/* harmony import */ var angular_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-pipes */ "+1ss");
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/reverse.pipe */ "IFuf");











let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        declarations: [
            _pipes_friend__WEBPACK_IMPORTED_MODULE_2__["FriendPipe"],
            _pipes_conversation__WEBPACK_IMPORTED_MODULE_3__["ConversationPipe"],
            _pipes_group__WEBPACK_IMPORTED_MODULE_4__["GroupPipe"],
            _pipes_search__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"],
            _pipes_date__WEBPACK_IMPORTED_MODULE_6__["DateFormatPipe"],
            _pipes_poll__WEBPACK_IMPORTED_MODULE_7__["PollPipe"],
            _pipes_resource__WEBPACK_IMPORTED_MODULE_8__["ResourcePipe"],
            angular_pipes__WEBPACK_IMPORTED_MODULE_9__["FloorPipe"],
            _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__["ReversePipe"]
        ],
        exports: [
            _pipes_friend__WEBPACK_IMPORTED_MODULE_2__["FriendPipe"],
            _pipes_conversation__WEBPACK_IMPORTED_MODULE_3__["ConversationPipe"],
            _pipes_group__WEBPACK_IMPORTED_MODULE_4__["GroupPipe"],
            _pipes_search__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"],
            _pipes_date__WEBPACK_IMPORTED_MODULE_6__["DateFormatPipe"],
            _pipes_poll__WEBPACK_IMPORTED_MODULE_7__["PollPipe"],
            _pipes_resource__WEBPACK_IMPORTED_MODULE_8__["ResourcePipe"],
            angular_pipes__WEBPACK_IMPORTED_MODULE_9__["FloorPipe"],
            _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__["ReversePipe"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "wKnH":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reaction-list-modal/reaction-list-modal.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title\">Reactions</ion-title>\r\n    <ion-buttons slot=\"end\"> \r\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of items\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-img src=\"{{item.addedByUser.addedByImg}}\"></ion-img>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{item.addedByUser.addedByUsername}}</h2>\r\n        <!--<p>Sneaky little hobbitses!</p> -->\r\n      </ion-label>\r\n      <ion-icon size=\"small\" *ngIf=\"item.reactionThanks\" class=\"icon\" src=\"./assets/icon/smile-active.svg\"></ion-icon>\r\n      <ion-icon size=\"small\" *ngIf=\"item.reactionHug\" class=\"icon\" src=\"./assets/icon/hug-active.svg\"></ion-icon>\r\n      <ion-icon size=\"small\" *ngIf=\"item.reactionBookmark\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\"></ion-icon>\r\n      <ion-icon size=\"small\" *ngIf=\"item.reactionCheckin\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "x+G+":
/*!***********************************************!*\
  !*** ./src/app/tag-modal/tag-modal.module.ts ***!
  \***********************************************/
/*! exports provided: TagModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagModalPageModule", function() { return TagModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tag_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag-modal.page */ "HUk6");







const routes = [
    {
        path: '',
        component: _tag_modal_page__WEBPACK_IMPORTED_MODULE_6__["TagModalPage"]
    }
];
let TagModalPageModule = class TagModalPageModule {
};
TagModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tag_modal_page__WEBPACK_IMPORTED_MODULE_6__["TagModalPage"]]
    })
], TagModalPageModule);



/***/ }),

/***/ "x9SX":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/aspect-ratio/aspect-ratio.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\r\n  <ng-content></ng-content>\r\n</div>\r\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zK/y":
/*!**********************************************************!*\
  !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
  \**********************************************************/
/*! exports provided: TextShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextShellComponent", function() { return TextShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_text_shell_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./text-shell.component.html */ "Qj2i");
/* harmony import */ var _text_shell_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-shell.component.scss */ "5ofZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/app-shell.config */ "Kt/9");





let TextShellComponent = class TextShellComponent {
    constructor() {
        // To debug shell styles, change configuration in the assets/app-shell.config.json file
        this.debugMode = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_4__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_4__["AppShellConfig"].settings.debug) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_4__["AppShellConfig"].settings.debug : false;
        this.textLoaded = false;
    }
    set data(val) {
        if (!this.debugMode) {
            this._data = (val !== undefined && val !== null) ? val : '';
        }
        if (this._data && this._data !== '') {
            this.textLoaded = true;
        }
        else {
            this.textLoaded = false;
        }
    }
};
TextShellComponent.ctorParameters = () => [];
TextShellComponent.propDecorators = {
    textLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.text-loaded',] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TextShellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-text-shell',
        template: _raw_loader_text_shell_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_text_shell_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TextShellComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




 // HAMMER TIME
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./addmembers/addmembers.module": [
		"Zxef",
		"addmembers-addmembers-module"
	],
	"./admin-categories/admin-categories.module": [
		"SGmz",
		"admin-categories-admin-categories-module"
	],
	"./blockedlist/blockedlist.module": [
		"Y9ka",
		"blockedlist-blockedlist-module"
	],
	"./categories/categories.module": [
		"kMJQ",
		"categories-categories-module"
	],
	"./feed-search/feed-search.module": [
		"/OJ1",
		"feed-search-feed-search-module"
	],
	"./feed/feed.module": [
		"xQww",
		"feed-feed-module"
	],
	"./forgot/forgot.module": [
		"kgyS",
		"common",
		"forgot-forgot-module"
	],
	"./friends/friends.module": [
		"fZqB",
		"common",
		"friends-friends-module"
	],
	"./getting-started/getting-started.module": [
		"Zcw4",
		"getting-started-getting-started-module"
	],
	"./group-join/group-join.module": [
		"Z4nk",
		"group-join-group-join-module"
	],
	"./group-search/group-search.module": [
		"BmgJ",
		"group-search-group-search-module"
	],
	"./group/group.module": [
		"J4zT",
		"group-group-module"
	],
	"./groupinfo/groupinfo.module": [
		"mkRt",
		"groupinfo-groupinfo-module"
	],
	"./groups/groups.module": [
		"zOVB",
		"groups-groups-module"
	],
	"./imagemodal/imagemodal.module": [
		"8E8H"
	],
	"./login/login.module": [
		"X3zk",
		"common",
		"login-login-module"
	],
	"./message/message.module": [
		"3tpA",
		"message-message-module"
	],
	"./messages/messages.module": [
		"TdLt",
		"messages-messages-module"
	],
	"./new-category-modal/new-category-modal.module": [
		"iH78",
		"new-category-modal-new-category-modal-module"
	],
	"./new-event/new-event.module": [
		"uZUT",
		"default~new-event-new-event-module~new-resources-new-resources-module",
		"new-event-new-event-module"
	],
	"./new-poll/new-poll.module": [
		"EoSc",
		"new-poll-new-poll-module"
	],
	"./new-post/new-post.module": [
		"R4F1",
		"new-post-new-post-module"
	],
	"./new-resources/new-resources.module": [
		"Q9Mr",
		"default~new-event-new-event-module~new-resources-new-resources-module",
		"new-resources-new-resources-module"
	],
	"./newgroup/newgroup.module": [
		"T2Rd",
		"newgroup-newgroup-module"
	],
	"./popover/popover.module": [
		"p2ut"
	],
	"./post/post.module": [
		"WuFp",
		"post-post-module"
	],
	"./profile/profile.module": [
		"cRhG",
		"common",
		"profile-profile-module"
	],
	"./reaction-list-modal/reaction-list-modal.module": [
		"YXOY"
	],
	"./register/register.module": [
		"x5bZ",
		"common",
		"register-register-module"
	],
	"./review-modal/review-modal.module": [
		"sMbM"
	],
	"./search-modal/search-modal.module": [
		"DsDU",
		"search-modal-search-modal-module"
	],
	"./tag-modal/tag-modal.module": [
		"x+G+"
	],
	"./user-profile-modal/user-profile-modal.module": [
		"Xs6v"
	],
	"./userinfo/userinfo.module": [
		"lgMC",
		"common",
		"userinfo-userinfo-module"
	],
	"./walkthrough/walkthrough.module": [
		"fE2E",
		"walkthrough-walkthrough-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map