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


    __webpack_exports__["default"] = "\n\n<ion-content>\n  <!-- We need the form wrapping the slides so all the inputs in the different slides are part of the same form -->\n  <form class=\"getting-started-form\" [formGroup]=\"gettingStartedForm\">\n    <ion-slides class=\"getting-started-slides\" pager=\"true\">\n\n      <ion-slide class=\"interests-to-follow-slide question-slide\">\n        <ion-row class=\"slide-inner-row\">\n          <ion-col class=\"heading-col\">\n            <h2 class=\"slide-title\">Pick groups that interest you</h2>\n            <p class=\"slide-subtitle\">\n              You can add or change them later\n            </p>\n          </ion-col>\n          <ion-col class=\"question-options-col\">\n            <ion-row class=\"options-list-row\" formGroupName=\"followingInterests\">\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category1-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Tops</span>\n                      <ion-checkbox formControlName=\"tops\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category2-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Dresses</span>\n                      <ion-checkbox formControlName=\"dresses\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category3-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Jeans</span>\n                      <ion-checkbox formControlName=\"jeans\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category4-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Jackets</span>\n                      <ion-checkbox formControlName=\"jackets\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category5-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Shoes</span>\n                      <ion-checkbox formControlName=\"shoes\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category6-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Glasses</span>\n                      <ion-checkbox formControlName=\"glasses\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"call-to-action-col\">\n            <ion-button class=\"signup-button\" color=\"secondary\" expand=\"block\" (click)=\"goSignUp()\" >Sign Up</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </form>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-alt);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-max-heading-height: 16%;\n  --page-max-call-to-actions-height: 10%;\n}\n\n:host {\n  background-color: var(--page-background);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-background);\n}\n\nion-header ion-toolbar ion-button {\n  --color: var(--ion-color-lightest);\n}\n\nion-content {\n  --background: var(--page-background);\n}\n\n.getting-started-form {\n  height: 100%;\n}\n\n.getting-started-slides {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-light);\n  height: 100%;\n}\n\n.getting-started-slides .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  height: 100%;\n  width: 100%;\n  padding: var(--page-margin);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n}\n\n.question-slide .slide-title {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) calc(var(--page-margin) * 2) 0px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n.question-slide .slide-subtitle {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) var(--page-margin);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n}\n\n.browsing-categories-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.browsing-categories-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.browsing-categories-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list {\n  margin: var(--page-margin) 0px 0px;\n  background: transparent;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option {\n  --padding-start: 0px;\n  --ion-item-background: var(--ion-color-lightest);\n  --ion-item-color: var(--ion-color-dark);\n  --inner-border-width: 0px;\n  --inner-padding-end: 0px;\n  text-align: center;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option.item-radio-checked {\n  --ion-item-background: var(--ion-color-secondary);\n  --ion-item-color: var(--ion-color-lightest);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-label {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.interests-to-follow-slide .slide-inner-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-width: 0px;\n}\n\n.interests-to-follow-slide .heading-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-heading-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.interests-to-follow-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.interests-to-follow-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col {\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(odd) {\n  padding-right: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(even) {\n  padding-left: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .call-to-action-col {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  max-height: var(--page-max-call-to-actions-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.interests-to-follow-slide .call-to-action-col .signup-button {\n  margin: 0px;\n  -webkit-box-flex: 1;\n          flex: 1 0 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox .checkbox-title {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.interests-to-follow-slide .custom-checkbox ion-checkbox {\n  --border-radius: 0px;\n  --border-width: 10vw;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --background: transparent;\n  --background-checked: var(--ion-color-secondary-rgb);\n  --background-checked: rgba(var(--ion-color-secondary-rgb), .4);\n  height: 100%;\n  width: 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox.checkbox-checked .checkbox-title {\n  display: none;\n}\n\n:host(.last-slide-active) ::ng-deep .getting-started-slides .swiper-pagination {\n  display: none;\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2dldHRpbmctc3RhcnRlZC9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQ0FBQTtFQUNBLDRDQUFBO0VBRUEsb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBRUEsOEJBQUE7RUFDQSxzQ0FBQTtBQ0xGOztBRFNBO0VBRUUsd0NBQUE7QUNQRjs7QURXRTtFQUNFLG9DQUFBO0FDUko7O0FEV0k7RUFDRSxrQ0FBQTtBQ1ROOztBRGNBO0VBQ0Usb0NBQUE7QUNYRjs7QURjQTtFQUNFLFlBQUE7QUNYRjs7QURjQTtFQUNFLDJDQUFBO0VBQ0Esa0RBQUE7RUFFQSxZQUFBO0FDWkY7O0FEY0U7RUFDRSw4QkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFFQSxvRUFBQTtFQUNBLDRCQUFBO0FDZEo7O0FEbUJFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFFQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNoQko7O0FEbUJFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNqQko7O0FEc0JFO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ25CSjs7QURzQkU7RUFDRSxnQkFBQTtFRW5GRix3QkFBQTtFQUdBLDhCQUFBO0VBQ0EscUJBQUE7QUQ4REY7O0FDM0RFO0VBQ0UsYUFBQTtBRDZESjs7QURrQkk7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FDaEJOOztBRGtCTTtFQUNFLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFFQSxrQkFBQTtBQ2pCUjs7QURtQlE7RUFDRSxpQ0FBQTtBQ2pCVjs7QURvQlE7RUFDRSxpREFBQTtFQUNBLDJDQUFBO0FDbEJWOztBRHFCUTtFQUNFLHdDQUFBO0FDbkJWOztBRHNCUTtFQUNFLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUN0QlY7O0FEOEJFO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUdBLGlCQUFBO0FDN0JKOztBRGdDRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0FDOUJKOztBRGlDRTtFQUNFLGdCQUFBO0VFL0lGLHdCQUFBO0VBR0EsOEJBQUE7RUFDQSxxQkFBQTtBRCtHRjs7QUM1R0U7RUFDRSxhQUFBO0FEOEdKOztBRDZCSTtFQUNFLDhCQUFBO0VBRUEseUNBQUE7RUFDQSw0Q0FBQTtBQzVCTjs7QUQ4Qk07RUFDRSx5Q0FBQTtFQUNBLDRDQUFBO0FDNUJSOztBRDhCUTtFQUNFLDJDQUFBO0FDNUJWOztBRCtCUTtFQUNFLDBDQUFBO0FDN0JWOztBRG1DRTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLGtEQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUVBLHlDQUFBO0FDbkNKOztBRHFDSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtVQUFBLGNBQUE7QUNuQ047O0FEd0NJO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ3hDTjs7QUQyQ0k7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0RBQUE7RUFDQSw4REFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0FDMUNOOztBRGdETTtFQUNFLGFBQUE7QUM5Q1I7O0FEc0RJO0VBQ0UsYUFBQTtBQ25ETjs7QUQ0REU7RUFDRSw0Q0FBQTtFQUNBLGNBQUE7RUFFQSwrRkFBQTtBQzFESjs7QUQ0REk7RUFDRSx5Q0FBQTtFQUNBLDBDQUFBO0FDMUROIiwiZmlsZSI6InNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLWFsdCk7XG5cbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcblxuICAtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0OiAxNiU7XG4gIC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodDogMTAlO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLy8gVG8gZml4IGhhbGYgcGl4ZWwgbGluZSBiZXR3ZWVuIGlvbi1oZWFkZXIgYW5kICBpb24tY29udGVudFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAgIC8vIEZvciB0aGUgc2tpcCBidXR0b25cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4uZ2V0dGluZy1zdGFydGVkLWZvcm0ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5zbGlkZS1pbm5lci1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIHNwYWNlXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgfVxufVxuXG4ucXVlc3Rpb24tc2xpZGUge1xuICAuc2xpZGUtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSAwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAuc2xpZGUtc3VidGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB9XG59XG5cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIHtcbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAucXVlc3Rpb24tb3B0aW9ucy1saXN0IHtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgLnF1ZXN0aW9uLW9wdGlvbiB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tcmFkaW8ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIC8vIFRvIGhpZGUgdGhlIC5yYWRpby1pY29uXG4gICAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgIC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5yYWRpby1pY29uIC5yYWRpby1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUge1xuICAuc2xpZGUtaW5uZXItcm93IHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAvLyBJbiB0aGUgbGFzdCBzbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24gaXMgaGlkZGVuXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIH1cblxuICAuaGVhZGluZy1jb2wge1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0KTtcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG4gIC5xdWVzdGlvbi1vcHRpb25zLWNvbCB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuXG4gICAgLm9wdGlvbnMtbGlzdC1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuXG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodCk7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgLnNpZ251cC1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmbGV4OiAxIDAgMTAwJTtcbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGxlZnQ6IDE1JTtcbiAgICAgIC8vIHZlcnRpY2FsbHkgY2VudGVyZWRcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cblxuICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxMHZ3O1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKTtcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjQpO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIE5vdGU6IFdlIGNhbm5vdGUgY2hhbmdlIHRoZSBzdHlsZXMgb2YgdGhlIC5jaGVja2JveC1pY29uIGJlY2F1c2UgaXQncyBpbnNpZGUgdGhlIHNoYWRvdyBkb20uXG4gICAgICAvLyBBbiBhbHRlcm5hdGl2ZSB3b3VsZCBiZSB0byBzZXQgLS13aWR0aCBhbmQgLS1oZWlnaHQgdG8gMHB4IGFuZCBhZGQgYSBjdXN0b20gb3ZlcmxheSBhbmQgaWNvbiBpbiB0aGUgPGN1c3RvbS1jaGVja2JveD4gaHRtbFxuICAgIH1cblxuICAgICYuY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIHtcbiAgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIHtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gSVNTVUU6IC5zd2lwZXItcGFnZ2luYXRpb24gZ2V0cyByZW5kZXJlZCBkeW5hbWljYWxseS4gVGhhdCBwcmV2ZW50cyBzdHlsaW5nIHRoZSBlbGVtZW50cyB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IEFuZ3VsYXIgVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuLy8gICAgICAgIChBbmd1bGFyIGRvZXNuJ3QgYWRkIGFuICdfbmdjb250ZW50JyBhdHRyaWJ1dGUgdG8gdGhlIC5zd2lwZXItcGFnZ2luYXRpb24gYmVjYXVzZSBpdCdzIGR5bmFtaWNhbGx5IHJlbmRlcmVkKVxuLy8gRklYOiAgIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2MjY1MDcyLzExMTY5NTlcbjpob3N0IDo6bmctZGVlcCAuZ2V0dGluZy1zdGFydGVkLXNsaWRlcyB7XG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIGlzIDE4cHggaGVpZ2h0LCAuc2xpZGUtaW5uZXItcm93IGhhcyA0MHB4IG9mIHBhZGRpbmctYm90dG9tID0+IGJvdHRvbSA9ICg0MHB4IC0gMThweCkvMiA9IDExcHhcbiAgICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcblxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtYWx0KTtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcbiAgLS1wYWdlLW1heC1oZWFkaW5nLWhlaWdodDogMTYlO1xuICAtLXBhZ2UtbWF4LWNhbGwtdG8tYWN0aW9ucy1oZWlnaHQ6IDEwJTtcbn1cblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5nZXR0aW5nLXN0YXJ0ZWQtZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmdldHRpbmctc3RhcnRlZC1zbGlkZXMgLnNsaWRlLWlubmVyLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnF1ZXN0aW9uLXNsaWRlIC5zbGlkZS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5xdWVzdGlvbi1zbGlkZSAuc2xpZGUtc3VidGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAuc2xpZGUtaW5uZXItcm93IHtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2w6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYnJvd3NpbmctY2F0ZWdvcmllcy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLnF1ZXN0aW9uLW9wdGlvbnMtbGlzdCAucXVlc3Rpb24tb3B0aW9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb246bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb24uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbn1cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAucXVlc3Rpb24tb3B0aW9ucy1saXN0IC5xdWVzdGlvbi1vcHRpb24gaW9uLXJhZGlvIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuc2xpZGUtaW5uZXItcm93IHtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuaGVhZGluZy1jb2wge1xuICBmbGV4OiAwIDEgYXV0bztcbiAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtaGVhZGluZy1oZWlnaHQpO1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2w6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5xdWVzdGlvbi1vcHRpb25zLWNvbCAub3B0aW9ucy1saXN0LXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIC5vcHRpb25zLWxpc3Qtcm93IGlvbi1jb2wge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLm9wdGlvbnMtbGlzdC1yb3cgaW9uLWNvbDpudGgtY2hpbGQob2RkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAucXVlc3Rpb24tb3B0aW9ucy1jb2wgLm9wdGlvbnMtbGlzdC1yb3cgaW9uLWNvbDpudGgtY2hpbGQoZXZlbikge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgZmxleDogMCAxIGF1dG87XG4gIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWNhbGwtdG8tYWN0aW9ucy1oZWlnaHQpO1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIC5jYWxsLXRvLWFjdGlvbi1jb2wgLnNpZ251cC1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbiAgZmxleDogMSAwIDEwMCU7XG59XG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbGVmdDogMTUlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveCBpb24tY2hlY2tib3gge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDEwdnc7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYik7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUgLmN1c3RvbS1jaGVja2JveC5jaGVja2JveC1jaGVja2VkIC5jaGVja2JveC10aXRsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZ2V0dGluZy1zdGFydGVkLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbn0iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XG5AbWl4aW4gaGlkZS1zY3JvbGxiYXJzKCkge1xuICAvLyBJRSAxMCtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuXG4gIC8vIEZpcmVmb3hcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */";
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


    __webpack_exports__["default"] = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* ----------- iPhone X ----------- */\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5yZXNwb25zaXZlLnNjc3MiLCJzcmMvYXBwL2dldHRpbmctc3RhcnRlZC9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSw0Q0FBQTtBQUNBO0VBWU07SUFDRSxlQUFBO0VDZk47QUFDRjtBRG9CQSxxREFBQTtBQUNBO0VBWU07SUFDRSxlQUFBO0VDN0JOO0FBQ0Y7QURrQ0Esa0RBQUE7QUFhQSxxQ0FBQTtBQWFBLGlEQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucmVzcG9uc2l2ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKE5vdGU6IERvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGRldmljZXMgYXMgaXQgbWF5IGJyZWFrIHRoZSBjb3JyZWN0IGNzcyBwcmVjZWRlbmNlKVxuXG4vLyAoc2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9tZWRpYS1xdWVyaWVzLWZvci1zdGFuZGFyZC1kZXZpY2VzLyNpcGhvbmUtcXVlcmllcylcbi8vIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Nzc1MDI2MS8xMTE2OTU5KVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gICAgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gICAgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cbiIsIi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMykge1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU2OHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MC83MSkge1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSAuY3VzdG9tLWNoZWNrYm94IC5jaGVja2JveC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNiwgNlMsIDcgYW5kIDggLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqLyJdfQ== */";
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


    __webpack_exports__["default"] = "app-image-shell.checkbox-cover {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), .4);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .4);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5zaGVsbC5zY3NzIiwic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0VBQUE7RUFDQSxxRUFBQTtFQUNBLHNEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLmNoZWNrYm94LWNvdmVyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIC40KTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjQpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwuY2hlY2tib3gtY292ZXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgLjQpO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn0iXX0= */";
    /***/
  }
}]);
//# sourceMappingURL=getting-started-getting-started-module-es5.js.map