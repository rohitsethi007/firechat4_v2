function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getting-started-getting-started-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGettingStartedGettingStartedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content>\r\n  <!-- We need the form wrapping the slides so all the inputs in the different slides are part of the same form -->\r\n  <form class=\"getting-started-form\" [formGroup]=\"gettingStartedForm\">\r\n    <ion-slides class=\"getting-started-slides\" pager=\"true\">\r\n\r\n      <ion-slide class=\"interests-to-follow-slide question-slide\">\r\n        <ion-row class=\"slide-inner-row\">\r\n          <ion-col class=\"heading-col\">\r\n            <h2 class=\"slide-title\">Pick groups that interest you</h2>\r\n            <p class=\"slide-subtitle\">\r\n              You can add or change them later\r\n            </p>\r\n          </ion-col>\r\n          <ion-col class=\"question-options-col\">\r\n            <ion-row class=\"options-list-row\" formGroupName=\"followingInterests\">\r\n              <ion-col size=\"6\">\r\n                <app-checkbox-wrapper class=\"custom-checkbox\">\r\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category1-1.1.png'\">\r\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n                      <span class=\"checkbox-title\">Tops</span>\r\n                      <ion-checkbox formControlName=\"tops\"></ion-checkbox>\r\n                    </app-aspect-ratio>\r\n                  </app-image-shell>\r\n                </app-checkbox-wrapper>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <app-checkbox-wrapper class=\"custom-checkbox\">\r\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category2-1.1.png'\">\r\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n                      <span class=\"checkbox-title\">Dresses</span>\r\n                      <ion-checkbox formControlName=\"dresses\"></ion-checkbox>\r\n                    </app-aspect-ratio>\r\n                  </app-image-shell>\r\n                </app-checkbox-wrapper>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <app-checkbox-wrapper class=\"custom-checkbox\">\r\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category3-1.1.png'\">\r\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n                      <span class=\"checkbox-title\">Jeans</span>\r\n                      <ion-checkbox formControlName=\"jeans\"></ion-checkbox>\r\n                    </app-aspect-ratio>\r\n                  </app-image-shell>\r\n                </app-checkbox-wrapper>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <app-checkbox-wrapper class=\"custom-checkbox\">\r\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category4-1.1.png'\">\r\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n                      <span class=\"checkbox-title\">Jackets</span>\r\n                      <ion-checkbox formControlName=\"jackets\"></ion-checkbox>\r\n                    </app-aspect-ratio>\r\n                  </app-image-shell>\r\n                </app-checkbox-wrapper>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <app-checkbox-wrapper class=\"custom-checkbox\">\r\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category5-1.1.png'\">\r\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n                      <span class=\"checkbox-title\">Shoes</span>\r\n                      <ion-checkbox formControlName=\"shoes\"></ion-checkbox>\r\n                    </app-aspect-ratio>\r\n                  </app-image-shell>\r\n                </app-checkbox-wrapper>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <app-checkbox-wrapper class=\"custom-checkbox\">\r\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category6-1.1.png'\">\r\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\r\n                      <span class=\"checkbox-title\">Glasses</span>\r\n                      <ion-checkbox formControlName=\"glasses\"></ion-checkbox>\r\n                    </app-aspect-ratio>\r\n                  </app-image-shell>\r\n                </app-checkbox-wrapper>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col class=\"call-to-action-col\">\r\n            <ion-button class=\"signup-button\" color=\"secondary\" expand=\"block\" (click)=\"goSignUp()\" >Sign Up</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </form>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/getting-started/getting-started.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/getting-started/getting-started.module.ts ***!
    \***********************************************************/

  /*! exports provided: GettingStartedPageModule */

  /***/
  function srcAppGettingStartedGettingStartedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GettingStartedPageModule", function () {
      return GettingStartedPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _getting_started_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./getting-started.page */
    "./src/app/getting-started/getting-started.page.ts");

    var routes = [{
      path: '',
      component: _getting_started_page__WEBPACK_IMPORTED_MODULE_7__["GettingStartedPage"]
    }];

    var GettingStartedPageModule = function GettingStartedPageModule() {
      _classCallCheck(this, GettingStartedPageModule);
    };

    GettingStartedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_getting_started_page__WEBPACK_IMPORTED_MODULE_7__["GettingStartedPage"]]
    })], GettingStartedPageModule);
    /***/
  },

  /***/
  "./src/app/getting-started/getting-started.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/getting-started/getting-started.page.ts ***!
    \*********************************************************/

  /*! exports provided: GettingStartedPage */

  /***/
  function srcAppGettingStartedGettingStartedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GettingStartedPage", function () {
      return GettingStartedPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var GettingStartedPage =
    /*#__PURE__*/
    function () {
      function GettingStartedPage(menu, router) {
        _classCallCheck(this, GettingStartedPage);

        this.menu = menu;
        this.router = router;
        this.isLastSlide = false;
        this.gettingStartedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          browsingCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('men'),
          followingInterests: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            tops: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            dresses: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            jeans: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            jackets: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            shoes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            glasses: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
          })
        });
      }

      _createClass(GettingStartedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false);
        }
      }, {
        key: "goSignUp",
        value: function goSignUp() {
          console.log(this.gettingStartedForm.get('followingInterests'));
          var navigationExtras = {
            state: {
              followingGroups: this.gettingStartedForm.get('followingInterests').value
            }
          };
          this.router.navigate(['/register'], navigationExtras);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          // ViewChild is set
          this.slides.isEnd().then(function (isEnd) {
            _this.isLastSlide = isEnd;
          }); // Subscribe to changes

          this.slides.ionSlideWillChange.subscribe(function (changes) {
            _this.slides.isEnd().then(function (isEnd) {
              _this.isLastSlide = isEnd;
            });
          });
        }
      }]);

      return GettingStartedPage;
    }();

    GettingStartedPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])], GettingStartedPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.last-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], GettingStartedPage.prototype, "isLastSlide", void 0);
    GettingStartedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-getting-started',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./getting-started.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/getting-started.page.scss */
      "./src/app/getting-started/styles/getting-started.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/getting-started.shell.scss */
      "./src/app/getting-started/styles/getting-started.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/getting-started.responsive.scss */
      "./src/app/getting-started/styles/getting-started.responsive.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], GettingStartedPage);
    /***/
  },

  /***/
  "./src/app/getting-started/styles/getting-started.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/getting-started/styles/getting-started.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGettingStartedStylesGettingStartedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-alt);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-max-heading-height: 16%;\n  --page-max-call-to-actions-height: 10%;\n}\n\n:host {\n  background-color: var(--page-background);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-background);\n}\n\nion-header ion-toolbar ion-button {\n  --color: var(--ion-color-lightest);\n}\n\nion-content {\n  --background: var(--page-background);\n}\n\n.getting-started-form {\n  height: 100%;\n}\n\n.getting-started-slides {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-light);\n  height: 100%;\n}\n\n.getting-started-slides .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  height: 100%;\n  width: 100%;\n  padding: var(--page-margin);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n}\n\n.question-slide .slide-title {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) calc(var(--page-margin) * 2) 0px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n.question-slide .slide-subtitle {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) var(--page-margin);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n}\n\n.browsing-categories-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.browsing-categories-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.browsing-categories-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list {\n  margin: var(--page-margin) 0px 0px;\n  background: transparent;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option {\n  --padding-start: 0px;\n  --ion-item-background: var(--ion-color-lightest);\n  --ion-item-color: var(--ion-color-dark);\n  --inner-border-width: 0px;\n  --inner-padding-end: 0px;\n  text-align: center;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option.item-radio-checked {\n  --ion-item-background: var(--ion-color-secondary);\n  --ion-item-color: var(--ion-color-lightest);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-label {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.interests-to-follow-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-width: 0px;\n}\n\n.interests-to-follow-slide .heading-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-heading-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.interests-to-follow-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.interests-to-follow-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col {\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(odd) {\n  padding-right: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(even) {\n  padding-left: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .call-to-action-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-call-to-actions-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.interests-to-follow-slide .call-to-action-col .signup-button {\n  margin: 0px;\n  -webkit-box-flex: 1;\n          flex: 1 0 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox .checkbox-title {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.interests-to-follow-slide .custom-checkbox ion-checkbox {\n  --border-radius: 0px;\n  --border-width: 10vw;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --background: transparent;\n  --background-checked: var(--ion-color-secondary-rgb);\n  --background-checked: rgba(var(--ion-color-secondary-rgb), .4);\n  height: 100%;\n  width: 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox.checkbox-checked .checkbox-title {\n  display: none;\n}\n\n:host(.last-slide-active) ::ng-deep .getting-started-slides .swiper-pagination {\n  display: none;\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxnZXR0aW5nLXN0YXJ0ZWRcXHN0eWxlc1xcZ2V0dGluZy1zdGFydGVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFx0aGVtZVxcbWl4aW5zXFxzY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQ0FBQTtFQUNBLDRDQUFBO0VBRUEsb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBRUEsOEJBQUE7RUFDQSxzQ0FBQTtBQ0xGOztBRFNBO0VBRUUsd0NBQUE7QUNQRjs7QURXRTtFQUNFLG9DQUFBO0FDUko7O0FEV0k7RUFDRSxrQ0FBQTtBQ1ROOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURjQTtFQUNFLFlBQUE7QUNYRjs7QURjQTtFQUNFLDJDQUFBO0VBQ0Esa0RBQUE7RUFFQSxZQUFBO0FDWkY7O0FEY0U7RUFDRSw4QkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFFQSxvRUFBQTtFQUNBLDRCQUFBO0FDZEo7O0FEbUJFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFFQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNoQko7O0FEbUJFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNqQko7O0FEc0JFO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ25CSjs7QURzQkU7RUFDRSxnQkFBQTtFRW5GRix3QkFBQTtFQUdBLDhCQUFBO0VBQ0EscUJBQUE7QUQ4REY7O0FDM0RFO0VBQ0UsYUFBQTtBRDZESjs7QURrQkk7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FDaEJOOztBRGtCTTtFQUNFLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFFQSxrQkFBQTtBQ2pCUjs7QURtQlE7RUFDRSxpQ0FBQTtBQ2pCVjs7QURvQlE7RUFDRSxpREFBQTtFQUNBLDJDQUFBO0FDbEJWOztBRHFCUTtFQUNFLHdDQUFBO0FDbkJWOztBRHNCUTtFQUNFLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUN0QlY7O0FEOEJFO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUdBLGlCQUFBO0FDN0JKOztBRGdDRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0FDOUJKOztBRGlDRTtFQUNFLGdCQUFBO0VFL0lGLHdCQUFBO0VBR0EsOEJBQUE7RUFDQSxxQkFBQTtBRCtHRjs7QUM1R0U7RUFDRSxhQUFBO0FEOEdKOztBRDZCSTtFQUNFLDhCQUFBO0VBRUEseUNBQUE7RUFDQSw0Q0FBQTtBQzVCTjs7QUQ4Qk07RUFDRSx5Q0FBQTtFQUNBLDRDQUFBO0FDNUJSOztBRDhCUTtFQUNFLDJDQUFBO0FDNUJWOztBRCtCUTtFQUNFLDBDQUFBO0FDN0JWOztBRG1DRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLGtEQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUVBLHlDQUFBO0FDbkNKOztBRHFDSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtVQUFBLGNBQUE7QUNuQ047O0FEd0NJO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ3hDTjs7QUQyQ0k7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0RBQUE7RUFDQSw4REFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0FDMUNOOztBRGdETTtFQUNFLGFBQUE7QUM5Q1I7O0FEc0RJO0VBQ0UsYUFBQTtBQ25ETjs7QUQ0REU7RUFDRSw0Q0FBQTtFQUNBLGNBQUE7RUFFQSwrRkFBQTtBQzFESjs7QUQ0REk7RUFDRSx5Q0FBQTtFQUNBLDBDQUFBO0FDMUROIiwiZmlsZSI6InNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLWFsdCk7XHJcblxyXG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogNDBweDtcclxuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xyXG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xyXG5cclxuICAtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0OiAxNiU7XHJcbiAgLS1wYWdlLW1heC1jYWxsLXRvLWFjdGlvbnMtaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLy8gVG8gZml4IGhhbGYgcGl4ZWwgbGluZSBiZXR3ZWVuIGlvbi1oZWFkZXIgYW5kICBpb24tY29udGVudFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAvLyBGb3IgdGhlIHNraXAgYnV0dG9uXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5nZXR0aW5nLXN0YXJ0ZWQtZm9ybSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ2V0dGluZy1zdGFydGVkLXNsaWRlcyB7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuc2xpZGUtaW5uZXItcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBzcGFjZVxyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxufVxyXG5cclxuLnF1ZXN0aW9uLXNsaWRlIHtcclxuICAuc2xpZGUtdGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSAwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuc2xpZGUtc3VidGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUge1xyXG4gIC5zbGlkZS1pbm5lci1yb3cge1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAucXVlc3Rpb24tb3B0aW9ucy1jb2wge1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbiAgICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcclxuXHJcbiAgICAucXVlc3Rpb24tb3B0aW9ucy1saXN0IHtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAucXVlc3Rpb24tb3B0aW9uIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLml0ZW0tcmFkaW8tY2hlY2tlZCB7XHJcbiAgICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLXJhZGlvIHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgLy8gVG8gaGlkZSB0aGUgLnJhZGlvLWljb25cclxuICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAucmFkaW8taWNvbiAucmFkaW8taW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3JcclxuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XHJcbiAgLnNsaWRlLWlubmVyLXJvdyB7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAvLyBJbiB0aGUgbGFzdCBzbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24gaXMgaGlkZGVuXHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkaW5nLWNvbCB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0KTtcclxuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG4gICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XHJcblxyXG4gICAgLm9wdGlvbnMtbGlzdC1yb3cge1xyXG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XHJcblxyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWNhbGwtdG8tYWN0aW9ucy1oZWlnaHQpO1xyXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAuc2lnbnVwLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBmbGV4OiAxIDAgMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jdXN0b20tY2hlY2tib3gge1xyXG4gICAgLmNoZWNrYm94LXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgbGVmdDogMTUlO1xyXG4gICAgICAvLyB2ZXJ0aWNhbGx5IGNlbnRlcmVkXHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNoZWNrYm94IHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxMHZ3O1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpO1xyXG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIC40KTtcclxuXHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC8vIE5vdGU6IFdlIGNhbm5vdGUgY2hhbmdlIHRoZSBzdHlsZXMgb2YgdGhlIC5jaGVja2JveC1pY29uIGJlY2F1c2UgaXQncyBpbnNpZGUgdGhlIHNoYWRvdyBkb20uXHJcbiAgICAgIC8vIEFuIGFsdGVybmF0aXZlIHdvdWxkIGJlIHRvIHNldCAtLXdpZHRoIGFuZCAtLWhlaWdodCB0byAwcHggYW5kIGFkZCBhIGN1c3RvbSBvdmVybGF5IGFuZCBpY29uIGluIHRoZSA8Y3VzdG9tLWNoZWNrYm94PiBodG1sXHJcbiAgICB9XHJcblxyXG4gICAgJi5jaGVja2JveC1jaGVja2VkIHtcclxuICAgICAgLmNoZWNrYm94LXRpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIHtcclxuICA6Om5nLWRlZXAgLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIElTU1VFOiAuc3dpcGVyLXBhZ2dpbmF0aW9uIGdldHMgcmVuZGVyZWQgZHluYW1pY2FsbHkuIFRoYXQgcHJldmVudHMgc3R5bGluZyB0aGUgZWxlbWVudHMgd2hlbiB1c2luZyB0aGUgZGVmYXVsdCBBbmd1bGFyIFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxuLy8gICAgICAgIChBbmd1bGFyIGRvZXNuJ3QgYWRkIGFuICdfbmdjb250ZW50JyBhdHRyaWJ1dGUgdG8gdGhlIC5zd2lwZXItcGFnZ2luYXRpb24gYmVjYXVzZSBpdCdzIGR5bmFtaWNhbGx5IHJlbmRlcmVkKVxyXG4vLyBGSVg6ICAgU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzYyNjUwNzIvMTExNjk1OVxyXG46aG9zdCA6Om5nLWRlZXAgLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xyXG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIGlzIDE4cHggaGVpZ2h0LCAuc2xpZGUtaW5uZXItcm93IGhhcyA0MHB4IG9mIHBhZGRpbmctYm90dG9tID0+IGJvdHRvbSA9ICg0MHB4IC0gMThweCkvMiA9IDExcHhcclxuICAgIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xyXG5cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gICAgICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtYWx0KTtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcbiAgLS1wYWdlLW1heC1oZWFkaW5nLWhlaWdodDogMTYlO1xuICAtLXBhZ2UtbWF4LWNhbGwtdG8tYWN0aW9ucy1oZWlnaHQ6IDEwJTtcbn1cblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5nZXR0aW5nLXN0YXJ0ZWQtZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmdldHRpbmctc3RhcnRlZC1zbGlkZXMgLnNsaWRlLWlubmVyLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnF1ZXN0aW9uLXNsaWRlIC5zbGlkZS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5xdWVzdGlvbi1zbGlkZSAuc2xpZGUtc3VidGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAuc2xpZGUtaW5uZXItcm93IHtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2w6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLnF1ZXN0aW9uLW9wdGlvbnMtbGlzdCAucXVlc3Rpb24tb3B0aW9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb246bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb24uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb24gaW9uLXJhZGlvIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuc2xpZGUtaW5uZXItcm93IHtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuaGVhZGluZy1jb2wge1xuICBmbGV4OiAwIDEgYXV0bztcbiAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtaGVhZGluZy1oZWlnaHQpO1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2w6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAub3B0aW9ucy1saXN0LXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5vcHRpb25zLWxpc3Qtcm93IGlvbi1jb2wge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLm9wdGlvbnMtbGlzdC1yb3cgaW9uLWNvbDpudGgtY2hpbGQob2RkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLm9wdGlvbnMtbGlzdC1yb3cgaW9uLWNvbDpudGgtY2hpbGQoZXZlbikge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgZmxleDogMCAxIGF1dG87XG4gIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWNhbGwtdG8tYWN0aW9ucy1oZWlnaHQpO1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jYWxsLXRvLWFjdGlvbi1jb2wgLnNpZ251cC1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbiAgZmxleDogMSAwIDEwMCU7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogMTUlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveCBpb24tY2hlY2tib3gge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDEwdnc7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYik7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveC5jaGVja2JveC1jaGVja2VkIC5jaGVja2JveC10aXRsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZ2V0dGluZy1zdGFydGVkLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbn0iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XHJcbkBtaXhpbiBoaWRlLXNjcm9sbGJhcnMoKSB7XHJcbiAgLy8gSUUgMTArXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG5cclxuICAvLyBGaXJlZm94XHJcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuXHJcbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/getting-started/styles/getting-started.responsive.scss":
  /*!************************************************************************!*\
    !*** ./src/app/getting-started/styles/getting-started.responsive.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGettingStartedStylesGettingStartedResponsiveScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* ----------- iPhone X ----------- */\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxnZXR0aW5nLXN0YXJ0ZWRcXHN0eWxlc1xcZ2V0dGluZy1zdGFydGVkLnJlc3BvbnNpdmUuc2NzcyIsInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUNmTjtBQUNGO0FEb0JBLHFEQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUM3Qk47QUFDRjtBRGtDQSxrREFBQTtBQWFBLHFDQUFBO0FBYUEsaURBQUEiLCJmaWxlIjoic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5yZXNwb25zaXZlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAoTm90ZTogRG9uJ3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgZGV2aWNlcyBhcyBpdCBtYXkgYnJlYWsgdGhlIGNvcnJlY3QgY3NzIHByZWNlZGVuY2UpXHJcblxyXG4vLyAoc2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9tZWRpYS1xdWVyaWVzLWZvci1zdGFuZGFyZC1kZXZpY2VzLyNpcGhvbmUtcXVlcmllcylcclxuLy8gKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3NzUwMjYxLzExMTY5NTkpXHJcblxyXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG57XHJcbiAgLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUge1xyXG4gICAgLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNTY4cHgpXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcclxue1xyXG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIHtcclxuICAgIC5jdXN0b20tY2hlY2tib3gge1xyXG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcclxue1xyXG5cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIFggLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogODEycHgpXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcclxue1xyXG5cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG57XHJcblxyXG59XHJcbiIsIi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMykge1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU2OHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MC83MSkge1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNiwgNlMsIDcgYW5kIDggLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/getting-started/styles/getting-started.shell.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/getting-started/styles/getting-started.shell.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGettingStartedStylesGettingStartedShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.checkbox-cover {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), .4);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .4);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxnZXR0aW5nLXN0YXJ0ZWRcXHN0eWxlc1xcZ2V0dGluZy1zdGFydGVkLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2dldHRpbmctc3RhcnRlZC9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzRUFBQTtFQUNBLHFFQUFBO0VBQ0Esc0RBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2dldHRpbmctc3RhcnRlZC9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwuY2hlY2tib3gtY292ZXIge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAuNCk7XHJcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjQpO1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxufVxyXG4iLCJhcHAtaW1hZ2Utc2hlbGwuY2hlY2tib3gtY292ZXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgLjQpO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn0iXX0= */";
    /***/
  }
}]);
//# sourceMappingURL=getting-started-getting-started-module-es5.js.map