(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getting-started-getting-started-module"],{

/***/ "2klD":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getting-started/getting-started.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n  <!-- We need the form wrapping the slides so all the inputs in the different slides are part of the same form -->\n  <form class=\"getting-started-form\" [formGroup]=\"gettingStartedForm\">\n    <ion-slides class=\"getting-started-slides\" pager=\"true\">\n\n      <ion-slide class=\"interests-to-follow-slide question-slide\">\n        <ion-row class=\"slide-inner-row\">\n          <ion-col class=\"heading-col\">\n            <h2 class=\"slide-title\">Pick groups that interest you</h2>\n            <p class=\"slide-subtitle\">\n              You can add or change them later\n            </p>\n          </ion-col>\n          <ion-col class=\"question-options-col\">\n            <ion-row class=\"options-list-row\" formGroupName=\"followingInterests\">\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category1-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Tops</span>\n                      <ion-checkbox formControlName=\"tops\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category2-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Dresses</span>\n                      <ion-checkbox formControlName=\"dresses\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category3-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Jeans</span>\n                      <ion-checkbox formControlName=\"jeans\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category4-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Jackets</span>\n                      <ion-checkbox formControlName=\"jackets\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category5-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Shoes</span>\n                      <ion-checkbox formControlName=\"shoes\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n              <ion-col size=\"6\">\n                <app-checkbox-wrapper class=\"custom-checkbox\">\n                  <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"checkbox-cover add-overlay\" [src]=\"'./assets/sample-images/getting-started/category6-1.1.png'\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                      <span class=\"checkbox-title\">Glasses</span>\n                      <ion-checkbox formControlName=\"glasses\"></ion-checkbox>\n                    </app-aspect-ratio>\n                  </app-image-shell>\n                </app-checkbox-wrapper>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col class=\"call-to-action-col\">\n            <ion-button class=\"signup-button\" color=\"secondary\" expand=\"block\" (click)=\"goSignUp()\" >Sign Up</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "Exk0":
/*!************************************************************************!*\
  !*** ./src/app/getting-started/styles/getting-started.responsive.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* ----------- iPhone X ----------- */\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUFmTjtBQUNGO0FBb0JBLHFEQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUE3Qk47QUFDRjtBQWtDQSxrREFBQTtBQWFBLHFDQUFBO0FBYUEsaURBQUEiLCJmaWxlIjoic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5yZXNwb25zaXZlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAoTm90ZTogRG9uJ3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgZGV2aWNlcyBhcyBpdCBtYXkgYnJlYWsgdGhlIGNvcnJlY3QgY3NzIHByZWNlZGVuY2UpXG5cbi8vIChzZWU6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL21lZGlhLXF1ZXJpZXMtZm9yLXN0YW5kYXJkLWRldmljZXMvI2lwaG9uZS1xdWVyaWVzKVxuLy8gKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3NzUwMjYxLzExMTY5NTkpXG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIHtcbiAgICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU2OHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIHtcbiAgICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDgxMnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDQxNHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuIl19 */");

/***/ }),

/***/ "ORPE":
/*!*******************************************************************!*\
  !*** ./src/app/getting-started/styles/getting-started.shell.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.checkbox-cover {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), .4);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .4);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNFQUFBO0VBQ0EscUVBQUE7RUFDQSxzREFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC5jaGVja2JveC1jb3ZlciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAuNCk7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC40KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuIl19 */");

/***/ }),

/***/ "P67Q":
/*!*********************************************************!*\
  !*** ./src/app/getting-started/getting-started.page.ts ***!
  \*********************************************************/
/*! exports provided: GettingStartedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedPage", function() { return GettingStartedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_getting_started_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./getting-started.page.html */ "2klD");
/* harmony import */ var _styles_getting_started_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/getting-started.page.scss */ "iChh");
/* harmony import */ var _styles_getting_started_shell_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/getting-started.shell.scss */ "ORPE");
/* harmony import */ var _styles_getting_started_responsive_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/getting-started.responsive.scss */ "Exk0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let GettingStartedPage = class GettingStartedPage {
    constructor(menu, router) {
        this.menu = menu;
        this.router = router;
        this.isLastSlide = false;
        this.gettingStartedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            browsingCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('men'),
            followingInterests: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                tops: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                dresses: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                jeans: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                jackets: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                shoes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                glasses: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
            })
        });
    }
    ngOnInit() {
        this.menu.enable(false);
    }
    goSignUp() {
        console.log(this.gettingStartedForm.get('followingInterests'));
        let navigationExtras = {
            state: {
                followingGroups: this.gettingStartedForm.get('followingInterests').value
            }
        };
        this.router.navigate(['/register'], navigationExtras);
    }
    ngAfterViewInit() {
        // ViewChild is set
        this.slides.isEnd().then(isEnd => {
            this.isLastSlide = isEnd;
        });
        // Subscribe to changes
        this.slides.ionSlideWillChange.subscribe(changes => {
            this.slides.isEnd().then(isEnd => {
                this.isLastSlide = isEnd;
            });
        });
    }
};
GettingStartedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
GettingStartedPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSlides"], { static: true },] }],
    isLastSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"], args: ['class.last-slide-active',] }]
};
GettingStartedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-getting-started',
        template: _raw_loader_getting_started_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_styles_getting_started_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _styles_getting_started_shell_scss__WEBPACK_IMPORTED_MODULE_3__["default"], _styles_getting_started_responsive_scss__WEBPACK_IMPORTED_MODULE_4__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], GettingStartedPage);



/***/ }),

/***/ "Zcw4":
/*!***********************************************************!*\
  !*** ./src/app/getting-started/getting-started.module.ts ***!
  \***********************************************************/
/*! exports provided: GettingStartedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedPageModule", function() { return GettingStartedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _getting_started_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getting-started.page */ "P67Q");








const routes = [
    {
        path: '',
        component: _getting_started_page__WEBPACK_IMPORTED_MODULE_7__["GettingStartedPage"]
    }
];
let GettingStartedPageModule = class GettingStartedPageModule {
};
GettingStartedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_getting_started_page__WEBPACK_IMPORTED_MODULE_7__["GettingStartedPage"]]
    })
], GettingStartedPageModule);



/***/ }),

/***/ "iChh":
/*!******************************************************************!*\
  !*** ./src/app/getting-started/styles/getting-started.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-alt);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-max-heading-height: 16%;\n  --page-max-call-to-actions-height: 10%;\n}\n\n:host {\n  background-color: var(--page-background);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-background);\n}\n\nion-header ion-toolbar ion-button {\n  --color: var(--ion-color-lightest);\n}\n\nion-content {\n  --background: var(--page-background);\n}\n\n.getting-started-form {\n  height: 100%;\n}\n\n.getting-started-slides {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-light);\n  height: 100%;\n}\n\n.getting-started-slides .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  height: 100%;\n  width: 100%;\n  padding: var(--page-margin);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n}\n\n.question-slide .slide-title {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) calc(var(--page-margin) * 2) 0px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n.question-slide .slide-subtitle {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) var(--page-margin);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n}\n\n.browsing-categories-slide .slide-inner-row {\n  flex-flow: column;\n  justify-content: space-between;\n}\n\n.browsing-categories-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.browsing-categories-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list {\n  margin: var(--page-margin) 0px 0px;\n  background: transparent;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option {\n  --padding-start: 0px;\n  --ion-item-background: var(--ion-color-lightest);\n  --ion-item-color: var(--ion-color-dark);\n  --inner-border-width: 0px;\n  --inner-padding-end: 0px;\n  text-align: center;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option.item-radio-checked {\n  --ion-item-background: var(--ion-color-secondary);\n  --ion-item-color: var(--ion-color-lightest);\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-label {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.interests-to-follow-slide .slide-inner-row {\n  flex-flow: column;\n  justify-content: space-between;\n  border-width: 0px;\n}\n\n.interests-to-follow-slide .heading-col {\n  flex: 0 1 auto;\n  max-height: var(--page-max-heading-height);\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.interests-to-follow-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.interests-to-follow-slide .question-options-col::-webkit-scrollbar {\n  display: none;\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col {\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(odd) {\n  padding-right: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(even) {\n  padding-left: calc(var(--page-margin) / 4);\n}\n\n.interests-to-follow-slide .call-to-action-col {\n  flex: 0 1 auto;\n  max-height: var(--page-max-call-to-actions-height);\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  display: flex;\n  align-items: flex-end;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.interests-to-follow-slide .call-to-action-col .signup-button {\n  margin: 0px;\n  flex: 1 0 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox .checkbox-title {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.interests-to-follow-slide .custom-checkbox ion-checkbox {\n  --border-radius: 0px;\n  --border-width: 10vw;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --background: transparent;\n  --background-checked: var(--ion-color-secondary-rgb);\n  --background-checked: rgba(var(--ion-color-secondary-rgb), .4);\n  height: 100%;\n  width: 100%;\n}\n\n.interests-to-follow-slide .custom-checkbox.checkbox-checked .checkbox-title {\n  display: none;\n}\n\n:host(.last-slide-active) ::ng-deep .getting-started-slides .swiper-pagination {\n  display: none;\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .getting-started-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIiwic3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQ0FBQTtFQUNBLDRDQUFBO0VBRUEsb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBRUEsOEJBQUE7RUFDQSxzQ0FBQTtBQUxGOztBQVNBO0VBRUUsd0NBQUE7QUFQRjs7QUFXRTtFQUNFLG9DQUFBO0FBUko7O0FBV0k7RUFDRSxrQ0FBQTtBQVROOztBQWNBO0VBQ0Usb0NBQUE7QUFYRjs7QUFjQTtFQUNFLFlBQUE7QUFYRjs7QUFjQTtFQUNFLDJDQUFBO0VBQ0Esa0RBQUE7RUFFQSxZQUFBO0FBWkY7O0FBY0U7RUFDRSw4QkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFFQSxvRUFBQTtFQUNBLDRCQUFBO0FBZEo7O0FBbUJFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFFQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFoQko7O0FBbUJFO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFqQko7O0FBc0JFO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtBQW5CSjs7QUFzQkU7RUFDRSxnQkFBQTtFQ25GRix3QkFBQTtFQUdBLDhCQUFBO0VBQ0EscUJBQUE7QUQ4REY7O0FDM0RFO0VBQ0UsYUFBQTtBRDZESjs7QUFrQkk7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FBaEJOOztBQWtCTTtFQUNFLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFFQSxrQkFBQTtBQWpCUjs7QUFtQlE7RUFDRSxpQ0FBQTtBQWpCVjs7QUFvQlE7RUFDRSxpREFBQTtFQUNBLDJDQUFBO0FBbEJWOztBQXFCUTtFQUNFLHdDQUFBO0FBbkJWOztBQXNCUTtFQUNFLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUF0QlY7O0FBOEJFO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUdBLGlCQUFBO0FBN0JKOztBQWdDRTtFQUNFLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQUEsdUJBQUE7QUE5Qko7O0FBaUNFO0VBQ0UsZ0JBQUE7RUMvSUYsd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEK0dGOztBQzVHRTtFQUNFLGFBQUE7QUQ4R0o7O0FBNkJJO0VBQ0UsOEJBQUE7RUFFQSx5Q0FBQTtFQUNBLDRDQUFBO0FBNUJOOztBQThCTTtFQUNFLHlDQUFBO0VBQ0EsNENBQUE7QUE1QlI7O0FBOEJRO0VBQ0UsMkNBQUE7QUE1QlY7O0FBK0JRO0VBQ0UsMENBQUE7QUE3QlY7O0FBbUNFO0VBQ0UsY0FBQTtFQUNBLGtEQUFBO0VBQ0EsNEJBQUE7RUFBQSx1QkFBQTtFQUVBLGFBQUE7RUFDQSxxQkFBQTtFQUVBLHlDQUFBO0FBbkNKOztBQXFDSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBbkNOOztBQXdDSTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsUUFBQTtFQUNBLDJCQUFBO0FBeENOOztBQTJDSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxvREFBQTtFQUNBLDhEQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUExQ047O0FBZ0RNO0VBQ0UsYUFBQTtBQTlDUjs7QUFzREk7RUFDRSxhQUFBO0FBbkROOztBQTRERTtFQUNFLDRDQUFBO0VBQ0EsY0FBQTtFQUVBLCtGQUFBO0FBMURKOztBQTRESTtFQUNFLHlDQUFBO0VBQ0EsMENBQUE7QUExRE4iLCJmaWxlIjoic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcblxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtYWx0KTtcblxuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDQwcHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuXG4gIC0tcGFnZS1tYXgtaGVhZGluZy1oZWlnaHQ6IDE2JTtcbiAgLS1wYWdlLW1heC1jYWxsLXRvLWFjdGlvbnMtaGVpZ2h0OiAxMCU7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAvLyBUbyBmaXggaGFsZiBwaXhlbCBsaW5lIGJldHdlZW4gaW9uLWhlYWRlciBhbmQgIGlvbi1jb250ZW50XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gICAgLy8gRm9yIHRoZSBza2lwIGJ1dHRvblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5nZXR0aW5nLXN0YXJ0ZWQtZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gc3BhY2VcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICB9XG59XG5cbi5xdWVzdGlvbi1zbGlkZSB7XG4gIC5zbGlkZS10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxuXG4gIC5zbGlkZS1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cbn1cblxuLmJyb3dzaW5nLWNhdGVnb3JpZXMtc2xpZGUge1xuICAuc2xpZGUtaW5uZXItcm93IHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAucXVlc3Rpb24tb3B0aW9ucy1jb2wge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcblxuICAgIC5xdWVzdGlvbi1vcHRpb25zLWxpc3Qge1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAucXVlc3Rpb24tb3B0aW9uIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAgICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1yYWRpbyB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgLy8gVG8gaGlkZSB0aGUgLnJhZGlvLWljb25cbiAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgLy8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLnJhZGlvLWljb24gLnJhZGlvLWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG4gICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gIC5zbGlkZS1pbm5lci1yb3cge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC8vIEluIHRoZSBsYXN0IHNsaWRlIC5zd2lwZXItcGFnaW5hdGlvbiBpcyBoaWRkZW5cbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgfVxuXG4gIC5oZWFkaW5nLWNvbCB7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtaGVhZGluZy1oZWlnaHQpO1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG5cbiAgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAub3B0aW9ucy1saXN0LXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cbiAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1wYWdlLW1heC1jYWxsLXRvLWFjdGlvbnMtaGVpZ2h0KTtcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAuc2lnbnVwLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZsZXg6IDEgMCAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tY2hlY2tib3gge1xuICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgbGVmdDogMTUlO1xuICAgICAgLy8gdmVydGljYWxseSBjZW50ZXJlZFxuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuXG4gICAgaW9uLWNoZWNrYm94IHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDEwdnc7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpO1xuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAuNCk7XG5cbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gTm90ZTogV2UgY2Fubm90ZSBjaGFuZ2UgdGhlIHN0eWxlcyBvZiB0aGUgLmNoZWNrYm94LWljb24gYmVjYXVzZSBpdCdzIGluc2lkZSB0aGUgc2hhZG93IGRvbS5cbiAgICAgIC8vIEFuIGFsdGVybmF0aXZlIHdvdWxkIGJlIHRvIHNldCAtLXdpZHRoIGFuZCAtLWhlaWdodCB0byAwcHggYW5kIGFkZCBhIGN1c3RvbSBvdmVybGF5IGFuZCBpY29uIGluIHRoZSA8Y3VzdG9tLWNoZWNrYm94PiBodG1sXG4gICAgfVxuXG4gICAgJi5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIC5jaGVja2JveC10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkge1xuICA6Om5nLWRlZXAgLmdldHRpbmctc3RhcnRlZC1zbGlkZXMge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBJU1NVRTogLnN3aXBlci1wYWdnaW5hdGlvbiBnZXRzIHJlbmRlcmVkIGR5bmFtaWNhbGx5LiBUaGF0IHByZXZlbnRzIHN0eWxpbmcgdGhlIGVsZW1lbnRzIHdoZW4gdXNpbmcgdGhlIGRlZmF1bHQgQW5ndWxhciBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG4vLyAgICAgICAgKEFuZ3VsYXIgZG9lc24ndCBhZGQgYW4gJ19uZ2NvbnRlbnQnIGF0dHJpYnV0ZSB0byB0aGUgLnN3aXBlci1wYWdnaW5hdGlvbiBiZWNhdXNlIGl0J3MgZHluYW1pY2FsbHkgcmVuZGVyZWQpXG4vLyBGSVg6ICAgU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzYyNjUwNzIvMTExNjk1OVxuOmhvc3QgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIHtcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gaXMgMThweCBoZWlnaHQsIC5zbGlkZS1pbm5lci1yb3cgaGFzIDQwcHggb2YgcGFkZGluZy1ib3R0b20gPT4gYm90dG9tID0gKDQwcHggLSAxOHB4KS8yID0gMTFweFxuICAgIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xuXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEhpZGUgc2Nyb2xsYmFyczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4OTk0ODM3LzExMTY5NTlcbkBtaXhpbiBoaWRlLXNjcm9sbGJhcnMoKSB7XG4gIC8vIElFIDEwK1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cbiAgLy8gRmlyZWZveFxuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=getting-started-getting-started-module-es2015.js.map