function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walkthrough-walkthrough-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough/walkthrough.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough/walkthrough.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWalkthroughWalkthroughPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"skip-walkthrough-button\" fill=\"clear\" (click)=\"skipWalkthrough()\">skip</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides class=\"walkthrough-slides\" pager=\"true\" [options]=\"slidesOptions\">\r\n    <ion-slide class=\"first-slide illustration-and-decoration-slide\">\r\n      <ion-row class=\"slide-inner-row\">\r\n        <ion-col class=\"illustration-col\">\r\n          <app-aspect-ratio [ratio]=\"{w:915, h:849}\">\r\n            <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/images/walkthrough-illustration-1.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\r\n          </app-aspect-ratio>\r\n        </ion-col>\r\n        <ion-col class=\"decoration-col\">\r\n          <!-- http://jxnblk.com/paths/?d=M0%200%20V5%20H5%20C25%205%2025%2020%2045%2020%20S65%205%2085%205%20H90%20V0%20Z -->\r\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 90 20\" style=\"enable-background:new 0 0 90 20;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\r\n            <path d=\"M0 0 V5 H5 C25 5 25 20 45 20 S65 5 85 5 H90 V0 Z\"/>\r\n          </svg>\r\n        </ion-col>\r\n        <ion-col class=\"info-col\">\r\n          <div class=\"info-wrapper\">\r\n            <h3 class=\"info-title\">This App is built with Ionic 4</h3>\r\n            <p class=\"info-paragraph\">\r\n              It was created by the <b>IonicThemes</b> team to help you jump start your Ionic app development.\r\n            </p>\r\n            <p class=\"info-paragraph\">\r\n              <b>You will love Ionic 4, and if you get lost, remember we have lots of tutorials to help you.</b>\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-slide>\r\n    <ion-slide class=\"second-slide illustration-and-decoration-slide\">\r\n      <ion-row class=\"slide-inner-row\">\r\n        <ion-col class=\"illustration-col\">\r\n          <app-aspect-ratio [ratio]=\"{w:1096, h:806}\">\r\n            <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/images/walkthrough-illustration-2.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\r\n          </app-aspect-ratio>\r\n        </ion-col>\r\n        <ion-col class=\"decoration-col\">\r\n          <!-- http://jxnblk.com/paths/?d=M0%200%20L64%200%20L64%2024%20Q56%2024%2048%2016%20Q34%200%2022%2010%20Q10%2022%200%208%20Z -->\r\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 24\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\r\n            <path d=\"M0 0 L64 0 L64 24 Q56 24 48 16 Q34 0 22 10 Q10 22 0 8 Z\"/>\r\n          </svg>\r\n        </ion-col>\r\n        <ion-col class=\"info-col\">\r\n          <div class=\"info-wrapper\">\r\n            <h3 class=\"info-title\">How to use this template?</h3>\r\n            <p class=\"info-paragraph\">\r\n              We want to help you build better and faster Ionic apps. We have put a lot of effort building and styling each component of this template.\r\n            </p>\r\n            <p class=\"info-paragraph\">\r\n              You are free to reuse and modify every component of this template.\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-slide>\r\n    <ion-slide class=\"third-slide illustration-and-decoration-slide\">\r\n      <ion-row class=\"slide-inner-row\">\r\n        <ion-col class=\"illustration-col\">\r\n          <app-aspect-ratio [ratio]=\"{w:918, h:703}\">\r\n            <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/images/walkthrough-illustration-3.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\r\n          </app-aspect-ratio>\r\n        </ion-col>\r\n        <ion-col class=\"decoration-col\">\r\n          <!-- http://jxnblk.com/paths/?d=M0%200%20V5%20H5%20C19%205%2025%2014%2032%2014%20S45%205%2059%205%20H64%20V0%20Z -->\r\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 14\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\r\n            <path d=\"M0 0 V5 H5 C19 5 25 14 32 14 S45 5 59 5 H64 V0 Z\"/>\r\n          </svg>\r\n        </ion-col>\r\n        <ion-col class=\"info-col\">\r\n          <div class=\"info-wrapper\">\r\n            <h3 class=\"info-title\">Which components are available in this Ionic 4 app?</h3>\r\n            <p class=\"info-paragraph\">\r\n              Tabs, Notifications, Profile, SideMenu, Authentication, Getting Started, Walkthrough, Forms and Validations, Categories, <b>Travel</b>, <b>Fashion</b>, <b>Food</b>, <b>Deals</b> and <b>Real Estate</b> listings and details page and many more!\r\n            </p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-slide>\r\n    <ion-slide class=\"last-slide illustration-and-decoration-slide\">\r\n      <ion-row class=\"slide-inner-row\">\r\n        <ion-col class=\"illustration-col\">\r\n          <app-aspect-ratio [ratio]=\"{w:924, h:819}\">\r\n            <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/images/walkthrough-illustration-4.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\r\n          </app-aspect-ratio>\r\n        </ion-col>\r\n        <ion-col class=\"decoration-col\">\r\n          <!-- http://jxnblk.com/paths/?d=M0%200%20L64%200%20L64%2010%20Q56%2024%2046%2012%20Q34%200%2026%208%20Q10%2022%200%208%20Z -->\r\n          <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 18\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\r\n            <path d=\"M0 0 L64 0 L64 10 Q56 24 46 12 Q34 0 26 8 Q10 22 0 8 Z\"/>\r\n          </svg>\r\n        </ion-col>\r\n        <ion-col class=\"info-col\">\r\n          <ion-row class=\"info-outer\">\r\n            <ion-col>\r\n              <div class=\"info-wrapper\">\r\n                <h3 class=\"info-title\">It's time to start</h3>\r\n                <p class=\"info-paragraph\">\r\n                  Hope you like this Ionic v4 template and please let us know your feedback so we can keep improving it! Enjoy ;)\r\n                </p>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col class=\"call-to-actions-wrapper\">\r\n              <ion-button class=\"get-started-button\" expand=\"block\" [routerLink]=\"['/getting-started']\">Get Started</ion-button>\r\n              <ion-row class=\"alt-call-to-action-row\">\r\n                <span class=\"cta-leading-text\">Already have an account?</span>\r\n                <ion-button class=\"login-button\" fill=\"clear\" [routerLink]=\"['/login']\">\r\n                  Login here\r\n                </ion-button>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/walkthrough/styles/walkthrough.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/walkthrough/styles/walkthrough.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughStylesWalkthroughPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-first-slide-background: #c1ebff;\n  --page-second-slide-background: #a9ebd2;\n  --page-third-slide-background: #f0cbe5;\n  --page-last-slide-background: #eef3ff;\n  --page-vector-decoration-fill: var(--ion-color-light-shade);\n}\n\nion-header ion-toolbar {\n  --ion-toolbar-background: transparent;\n}\n\nion-header ion-toolbar ion-button {\n  --color: var(--ion-color-lightest);\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n}\n\n.walkthrough-slides {\n  --bullet-background: var(--ion-color-dark);\n  --bullet-background-active: var(--ion-color-dark);\n  height: 100%;\n}\n\n.walkthrough-slides .slide-inner-row {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-top: var(--app-header-height);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n  background-color: var(--page-vector-decoration-fill);\n}\n\n.illustration-and-decoration-slide .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.illustration-and-decoration-slide .illustration-col {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-shrink: 0;\n  min-height: auto;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  max-width: 30vh;\n  padding: 0px;\n}\n\n.illustration-and-decoration-slide .decoration-col {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-shrink: 1;\n  min-height: 12vh;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide .decoration-col .vector-decoration {\n  fill: currentColor;\n  color: var(--page-vector-decoration-fill);\n  background-color: var(--page-background);\n  padding-bottom: 4px;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  shape-rendering: geometricprecision;\n  height: calc(100% + 1px);\n}\n\n.illustration-and-decoration-slide .info-col {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-shrink: 0;\n  min-height: auto;\n  background-color: var(--page-background);\n  margin-bottom: -1px;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper {\n  margin: calc(var(--page-margin) * -1) var(--page-margin) 0px;\n  text-align: left;\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-title {\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n  color: var(--ion-color-dark);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-paragraph {\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n  margin: 0px 0px calc(var(--page-margin) / 2);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-paragraph:last-child {\n  margin-bottom: 0px;\n}\n\n.first-slide {\n  --page-vector-decoration-fill: var(--page-first-slide-background);\n}\n\n.second-slide {\n  --page-vector-decoration-fill: var(--page-second-slide-background);\n}\n\n.third-slide {\n  --page-vector-decoration-fill: var(--page-third-slide-background);\n}\n\n.last-slide {\n  --page-vector-decoration-fill: var(--page-last-slide-background);\n}\n\n.last-slide .slide-inner-row {\n  border-width: 0px;\n}\n\n.last-slide .info-col {\n  padding: var(--page-margin);\n}\n\n.last-slide .info-col .info-outer {\n  height: 100%;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.last-slide .info-col .info-outer .info-wrapper {\n  margin: calc(var(--page-margin) * -1) 0px 0px;\n}\n\n.last-slide .info-col .info-outer .call-to-actions-wrapper {\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.last-slide .info-col .get-started-button {\n  margin: 0px;\n}\n\n.last-slide .info-col .alt-call-to-action-row {\n  padding-top: 5px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.last-slide .info-col .alt-call-to-action-row .cta-leading-text {\n  color: var(--ion-color-medium);\n  font-size: 16px;\n}\n\n.last-slide .info-col .alt-call-to-action-row .login-button {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n:host(.first-slide-active) .skip-walkthrough-button {\n  visibility: hidden;\n}\n\n:host(.last-slide-active) ::ng-deep .walkthrough-slides .swiper-pagination {\n  display: none;\n}\n\n:host(.last-slide-active) .skip-walkthrough-button {\n  visibility: hidden;\n}\n\n:host ::ng-deep .walkthrough-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .walkthrough-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXHdhbGt0aHJvdWdoXFxzdHlsZXNcXHdhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNDQUFBO0VBQ0Esd0NBQUE7RUFFQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFFQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUVBLDJEQUFBO0FDSkY7O0FEU0U7RUFDRSxxQ0FBQTtBQ05KOztBRFNJO0VBQ0Usa0NBQUE7QUNQTjs7QURZQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtBQ1ZGOztBRGFBO0VBQ0UsMENBQUE7RUFDQSxpREFBQTtFQUVBLFlBQUE7QUNYRjs7QURhRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHFDQUFBO0VBRUEsb0VBQUE7RUFDQSw0QkFBQTtFQUNBLG9EQUFBO0FDYko7O0FEa0JFO0VBQ0UsOEJBQUE7RUFFQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2pCSjs7QURvQkU7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxjQUFBO0VBR0EsZ0JBQUE7RUFDQSw2Q0FBQTtVQUFBLHFDQUFBO0FDcEJKOztBRHNCSTtFQUNFLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBR0EsNkNBQUE7VUFBQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esd0JBQUE7QUN0Qk47O0FEMEJFO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFHQSxtQkFBQTtFQUVBLDZDQUFBO1VBQUEscUNBQUE7QUMzQko7O0FENkJJO0VBQ0UsNERBQUE7RUFDQSxnQkFBQTtBQzNCTjs7QUQ2Qk07RUFDRSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQzNCUjs7QUQ4Qk07RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQzVCUjs7QUQ4QlE7RUFDRSxrQkFBQTtBQzVCVjs7QURtQ0E7RUFDRSxpRUFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxrRUFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxpRUFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxnRUFBQTtBQ2hDRjs7QURrQ0U7RUFFRSxpQkFBQTtBQ2pDSjs7QURvQ0U7RUFDRSwyQkFBQTtBQ2xDSjs7QURvQ0k7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ2xDTjs7QURvQ007RUFDRSw2Q0FBQTtBQ2xDUjs7QURxQ007RUFDRSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7QUNuQ1I7O0FEdUNJO0VBQ0UsV0FBQTtBQ3JDTjs7QUR3Q0k7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0FDdENOOztBRHdDTTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBQ3RDUjs7QUR5Q007RUFDRSxtQ0FBQTtFQUVBLFdBQUE7QUN4Q1I7O0FEK0NFO0VBQ0Usa0JBQUE7QUM1Q0o7O0FEa0RJO0VBQ0UsYUFBQTtBQy9DTjs7QURtREU7RUFDRSxrQkFBQTtBQ2pESjs7QUR5REU7RUFDRSw0Q0FBQTtFQUNBLGNBQUE7RUFFQSwrRkFBQTtBQ3ZESjs7QUR5REk7RUFDRSx5Q0FBQTtFQUNBLDBDQUFBO0FDdkROIiwiZmlsZSI6InNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG5cclxuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDQwcHg7XHJcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcclxuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcclxuXHJcbiAgLS1wYWdlLWZpcnN0LXNsaWRlLWJhY2tncm91bmQ6ICNjMWViZmY7XHJcbiAgLS1wYWdlLXNlY29uZC1zbGlkZS1iYWNrZ3JvdW5kOiAjYTllYmQyO1xyXG4gIC0tcGFnZS10aGlyZC1zbGlkZS1iYWNrZ3JvdW5kOiAjZjBjYmU1O1xyXG4gIC0tcGFnZS1sYXN0LXNsaWRlLWJhY2tncm91bmQ6ICNlZWYzZmY7XHJcblxyXG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG59XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAvLyBGb3IgdGhlIHNraXAgYnV0dG9uXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAvLyBUbyBnZXQgdGhlIGlvbi1jb250ZW50IGJlaGluZCB0aGUgaW9uLWhlYWRlclxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi53YWxrdGhyb3VnaC1zbGlkZXMge1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5zbGlkZS1pbm5lci1yb3cge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAvLyBIZWFkZXIgc3BhY2VcclxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1hcHAtaGVhZGVyLWhlaWdodCk7XHJcbiAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gc3BhY2VcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcclxuICAuc2xpZGUtaW5uZXItcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaWxsdXN0cmF0aW9uLWNvbCB7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1heC13aWR0aDogMzB2aDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcblxyXG4gIC5kZWNvcmF0aW9uLWNvbCB7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICBmbGV4LXNocmluazogMTtcclxuXHJcbiAgICAvLyBUbyBwcmV2ZW50IHRyYW5zcGFyZW50IGxpbmUgY2F1c2VkIGJ5IHBpeGVsIGZyYWN0aW9uc1xyXG4gICAgbWluLWhlaWdodDogMTJ2aDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcblxyXG4gICAgLnZlY3Rvci1kZWNvcmF0aW9uIHtcclxuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuXHJcbiAgICAgIC8vIFRvIHByZXZlbnQgdHJhbnNwYXJlbnQgbGluZSBjYXVzZWQgYnkgcGl4ZWwgZnJhY3Rpb25zXHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbiAgICAgIHNoYXBlLXJlbmRlcmluZzogZ2VvbWV0cmljcHJlY2lzaW9uO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDFweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5mby1jb2wge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAvLyBUbyBwcmV2ZW50IHRyYW5zcGFyZW50IGxpbmUgY2F1c2VkIGJ5IHBpeGVsIGZyYWN0aW9uc1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIC8vIFByZXZlbnQgLmluZm8td3JhcHBlciB0ZXh0IHRvIGJsaW5rIGFzIGl0J3Mgb3ZlciB0aGUgcHJldmlvdXMgZWxlbWVudCAoU2FmYXJpIGlzc3VlKVxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcclxuXHJcbiAgICAuaW5mby13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgLmluZm8tdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mby1wYXJhZ3JhcGgge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmlyc3Qtc2xpZGUge1xyXG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLWZpcnN0LXNsaWRlLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uc2Vjb25kLXNsaWRlIHtcclxuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi50aGlyZC1zbGlkZSB7XHJcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2UtdGhpcmQtc2xpZGUtYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi5sYXN0LXNsaWRlIHtcclxuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1sYXN0LXNsaWRlLWJhY2tncm91bmQpO1xyXG5cclxuICAuc2xpZGUtaW5uZXItcm93IHtcclxuICAgIC8vIEluIHRoZSBsYXN0IHNsaWRlIC5zd2lwZXItcGFnaW5hdGlvbiBpcyBoaWRkZW5cclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmluZm8tY29sIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgICAuaW5mby1vdXRlciB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLmluZm8td3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSAwcHggMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FsbC10by1hY3Rpb25zLXdyYXBwZXIge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdldC1zdGFydGVkLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IHtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgICAuY3RhLWxlYWRpbmctdGV4dCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCguZmlyc3Qtc2xpZGUtYWN0aXZlKSB7XHJcbiAgLnNraXAtd2Fsa3Rocm91Z2gtYnV0dG9uIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkge1xyXG4gIDo6bmctZGVlcCAud2Fsa3Rocm91Z2gtc2xpZGVzIHtcclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2tpcC13YWxrdGhyb3VnaC1idXR0b24ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSVNTVUU6IC5zd2lwZXItcGFnZ2luYXRpb24gZ2V0cyByZW5kZXJlZCBkeW5hbWljYWxseS4gVGhhdCBwcmV2ZW50cyBzdHlsaW5nIHRoZSBlbGVtZW50cyB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IEFuZ3VsYXIgVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG4vLyAgICAgICAgKEFuZ3VsYXIgZG9lc24ndCBhZGQgYW4gJ19uZ2NvbnRlbnQnIGF0dHJpYnV0ZSB0byB0aGUgLnN3aXBlci1wYWdnaW5hdGlvbiBiZWNhdXNlIGl0J3MgZHluYW1pY2FsbHkgcmVuZGVyZWQpXHJcbi8vIEZJWDogICBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNjI2NTA3Mi8xMTE2OTU5XHJcbjpob3N0IDo6bmctZGVlcCAud2Fsa3Rocm91Z2gtc2xpZGVzIHtcclxuICAuc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBpcyAxOHB4IGhlaWdodCwgLnNsaWRlLWlubmVyLXJvdyBoYXMgNDBweCBvZiBwYWRkaW5nLWJvdHRvbSA9PiBib3R0b20gPSAoNDBweCAtIDE4cHgpLzIgPSAxMXB4XHJcbiAgICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcclxuXHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgICAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XHJcbiAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcbiAgLS1wYWdlLWZpcnN0LXNsaWRlLWJhY2tncm91bmQ6ICNjMWViZmY7XG4gIC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZDogI2E5ZWJkMjtcbiAgLS1wYWdlLXRoaXJkLXNsaWRlLWJhY2tncm91bmQ6ICNmMGNiZTU7XG4gIC0tcGFnZS1sYXN0LXNsaWRlLWJhY2tncm91bmQ6ICNlZWYzZmY7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG5cbi53YWxrdGhyb3VnaC1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53YWxrdGhyb3VnaC1zbGlkZXMgLnNsaWRlLWlubmVyLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IHZhcigtLWFwcC1oZWFkZXItaGVpZ2h0KTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbCk7XG59XG5cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLnNsaWRlLWlubmVyLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAzMHZoO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5kZWNvcmF0aW9uLWNvbCB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDE7XG4gIG1pbi1oZWlnaHQ6IDEydmg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5kZWNvcmF0aW9uLWNvbCAudmVjdG9yLWRlY29yYXRpb24ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGwpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICBzaGFwZS1yZW5kZXJpbmc6IGdlb21ldHJpY3ByZWNpc2lvbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxcHgpO1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSkgdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmluZm8tY29sIC5pbmZvLXdyYXBwZXIgLmluZm8tdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby1wYXJhZ3JhcGgge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCAuaW5mby13cmFwcGVyIC5pbmZvLXBhcmFncmFwaDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZmlyc3Qtc2xpZGUge1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1maXJzdC1zbGlkZS1iYWNrZ3JvdW5kKTtcbn1cblxuLnNlY29uZC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLXNlY29uZC1zbGlkZS1iYWNrZ3JvdW5kKTtcbn1cblxuLnRoaXJkLXNsaWRlIHtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2UtdGhpcmQtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi5sYXN0LXNsaWRlIHtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2UtbGFzdC1zbGlkZS1iYWNrZ3JvdW5kKTtcbn1cbi5sYXN0LXNsaWRlIC5zbGlkZS1pbm5lci1yb3cge1xuICBib3JkZXItd2lkdGg6IDBweDtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuaW5mby1vdXRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5pbmZvLW91dGVyIC5pbmZvLXdyYXBwZXIge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpIDBweCAwcHg7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmluZm8tb3V0ZXIgLmNhbGwtdG8tYWN0aW9ucy13cmFwcGVyIHtcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmdldC1zdGFydGVkLWJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmFsdC1jYWxsLXRvLWFjdGlvbi1yb3cgLmN0YS1sZWFkaW5nLXRleHQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuYWx0LWNhbGwtdG8tYWN0aW9uLXJvdyAubG9naW4tYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbjogMHB4O1xufVxuXG46aG9zdCguZmlyc3Qtc2xpZGUtYWN0aXZlKSAuc2tpcC13YWxrdGhyb3VnaC1idXR0b24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkgOjpuZy1kZWVwIC53YWxrdGhyb3VnaC1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0KC5sYXN0LXNsaWRlLWFjdGl2ZSkgLnNraXAtd2Fsa3Rocm91Z2gtYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLndhbGt0aHJvdWdoLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC53YWxrdGhyb3VnaC1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/walkthrough/styles/walkthrough.responsive.scss":
  /*!****************************************************************!*\
    !*** ./src/app/walkthrough/styles/walkthrough.responsive.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughStylesWalkthroughResponsiveScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 30vh;\n    padding: 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 12vh;\n  }\n  .illustration-and-decoration-slide .info-col .info-wrapper .info-title {\n    margin-bottom: calc(var(--page-margin) / 2);\n    font-size: 20px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 32vh;\n    padding: 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 12vh;\n  }\n  .illustration-and-decoration-slide .info-col .info-wrapper .info-title {\n    margin-bottom: calc(var(--page-margin) / 2);\n    font-size: 20px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 36vh;\n    padding: 2vh 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 14vh;\n  }\n}\n/* ----------- iPhone X ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 34vh;\n    padding: 6vh 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 12vh;\n  }\n}\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 38vh;\n    padding: 4vh 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 14vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXHdhbGt0aHJvdWdoXFxzdHlsZXNcXHdhbGt0aHJvdWdoLnJlc3BvbnNpdmUuc2NzcyIsInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnJlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSw0Q0FBQTtBQUNBO0VBV0k7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQ2RKO0VEaUJFO0lBQ0UsZ0JBQUE7RUNmSjtFRG9CTTtJQUNFLDJDQUFBO0lBQ0EsZUFBQTtFQ2xCUjtBQUNGO0FEd0JBLHFEQUFBO0FBQ0E7RUFXSTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VDaENKO0VEbUNFO0lBQ0UsZ0JBQUE7RUNqQ0o7RURzQ007SUFDRSwyQ0FBQTtJQUNBLGVBQUE7RUNwQ1I7QUFDRjtBRDBDQSxrREFBQTtBQUNBO0VBVUk7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUNqREo7RURvREU7SUFDRSxnQkFBQTtFQ2xESjtBQUNGO0FEc0RBLHFDQUFBO0FBQ0E7RUFVSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQzdESjtFRGdFRTtJQUNFLGdCQUFBO0VDOURKO0FBQ0Y7QURrRUEsaURBQUE7QUFDQTtFQVVJO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDekVKO0VENEVFO0lBQ0UsZ0JBQUE7RUMxRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3dhbGt0aHJvdWdoL3N0eWxlcy93YWxrdGhyb3VnaC5yZXNwb25zaXZlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAoTm90ZTogRG9uJ3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgZGV2aWNlcyBhcyBpdCBtYXkgYnJlYWsgdGhlIGNvcnJlY3QgY3NzIHByZWNlZGVuY2UpXHJcblxyXG4vLyAoc2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9tZWRpYS1xdWVyaWVzLWZvci1zdGFuZGFyZC1kZXZpY2VzLyNpcGhvbmUtcXVlcmllcylcclxuLy8gKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3NzUwMjYxLzExMTY5NTkpXHJcblxyXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG57XHJcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSB7XHJcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XHJcbiAgICAgIG1heC13aWR0aDogMzB2aDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEydmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tY29sIHtcclxuICAgICAgLmluZm8td3JhcHBlciB7XHJcbiAgICAgICAgLmluZm8tdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwIC8gNzEpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG57XHJcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSB7XHJcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XHJcbiAgICAgIG1heC13aWR0aDogMzJ2aDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEydmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tY29sIHtcclxuICAgICAgLmluZm8td3JhcHBlciB7XHJcbiAgICAgICAgLmluZm8tdGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXHJcbntcclxuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcclxuICAgIC5pbGx1c3RyYXRpb24tY29sIHtcclxuICAgICAgbWF4LXdpZHRoOiAzNnZoO1xyXG4gICAgICBwYWRkaW5nOiAydmggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDE0dmg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDMpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG57XHJcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSB7XHJcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XHJcbiAgICAgIG1heC13aWR0aDogMzR2aDtcclxuICAgICAgcGFkZGluZzogNnZoIDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVjb3JhdGlvbi1jb2wge1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMnZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG57XHJcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSB7XHJcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XHJcbiAgICAgIG1heC13aWR0aDogMzh2aDtcclxuICAgICAgcGFkZGluZzogNHZoIDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVjb3JhdGlvbi1jb2wge1xyXG4gICAgICBtaW4taGVpZ2h0OiAxNHZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiAtLS0tLS0tLS0tLSBpUGhvbmUgNCBhbmQgNFMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpIHtcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgbWF4LXdpZHRoOiAzMHZoO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgbWluLWhlaWdodDogMTJ2aDtcbiAgfVxuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCAuaW5mby13cmFwcGVyIC5pbmZvLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0gaVBob25lIDUsIDVTLCA1QyBhbmQgNVNFIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1NjhweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAvNzEpIHtcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgbWF4LXdpZHRoOiAzMnZoO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgbWluLWhlaWdodDogMTJ2aDtcbiAgfVxuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCAuaW5mby13cmFwcGVyIC5pbmZvLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgbWF4LXdpZHRoOiAzNnZoO1xuICAgIHBhZGRpbmc6IDJ2aCAwcHg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDE0dmg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgbWF4LXdpZHRoOiAzNHZoO1xuICAgIHBhZGRpbmc6IDZ2aCAwcHg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MzZweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgbWF4LXdpZHRoOiAzOHZoO1xuICAgIHBhZGRpbmc6IDR2aCAwcHg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDE0dmg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/walkthrough/styles/walkthrough.shell.scss":
  /*!***********************************************************!*\
    !*** ./src/app/walkthrough/styles/walkthrough.shell.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughStylesWalkthroughShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.illustration-image {\n  --image-shell-loading-background: transparent;\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXHdhbGt0aHJvdWdoXFxzdHlsZXNcXHdhbGt0aHJvdWdoLnNoZWxsLnNjc3MiLCJzcmMvYXBwL3dhbGt0aHJvdWdoL3N0eWxlcy93YWxrdGhyb3VnaC5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFDQSxzREFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwuaWxsdXN0cmF0aW9uLWltYWdlIHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG59XHJcbiIsImFwcC1pbWFnZS1zaGVsbC5pbGx1c3RyYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/walkthrough/walkthrough.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/walkthrough/walkthrough.module.ts ***!
    \***************************************************/

  /*! exports provided: WalkthroughPageModule */

  /***/
  function srcAppWalkthroughWalkthroughModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function () {
      return WalkthroughPageModule;
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


    var _walkthrough_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./walkthrough.page */
    "./src/app/walkthrough/walkthrough.page.ts");

    var routes = [{
      path: '',
      component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_7__["WalkthroughPage"]
    }];

    var WalkthroughPageModule = function WalkthroughPageModule() {
      _classCallCheck(this, WalkthroughPageModule);
    };

    WalkthroughPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_7__["WalkthroughPage"]]
    })], WalkthroughPageModule);
    /***/
  },

  /***/
  "./src/app/walkthrough/walkthrough.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/walkthrough/walkthrough.page.ts ***!
    \*************************************************/

  /*! exports provided: WalkthroughPage */

  /***/
  function srcAppWalkthroughWalkthroughPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function () {
      return WalkthroughPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var WalkthroughPage =
    /*#__PURE__*/
    function () {
      function WalkthroughPage(menu) {
        _classCallCheck(this, WalkthroughPage);

        this.menu = menu;
        this.slidesOptions = {
          zoom: {
            toggle: false // Disable zooming to prevent weird double tap zomming on slide images

          }
        };
        this.isFirstSlide = true;
        this.isLastSlide = false;
      }

      _createClass(WalkthroughPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          // ViewChild is set
          this.slides.isBeginning().then(function (isBeginning) {
            _this.isFirstSlide = isBeginning;
          });
          this.slides.isEnd().then(function (isEnd) {
            _this.isLastSlide = isEnd;
          }); // Subscribe to changes

          this.slides.ionSlideWillChange.subscribe(function (changes) {
            _this.slides.isBeginning().then(function (isBeginning) {
              _this.isFirstSlide = isBeginning;
            });

            _this.slides.isEnd().then(function (isEnd) {
              _this.isLastSlide = isEnd;
            });
          });
        }
      }, {
        key: "skipWalkthrough",
        value: function skipWalkthrough() {
          var _this2 = this;

          // Skip to the last slide
          this.slides.length().then(function (length) {
            _this2.slides.slideTo(length);
          });
        }
      }]);

      return WalkthroughPage;
    }();

    WalkthroughPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], WalkthroughPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.first-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WalkthroughPage.prototype, "isFirstSlide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.last-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WalkthroughPage.prototype, "isLastSlide", void 0);
    WalkthroughPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-walkthrough',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./walkthrough.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough/walkthrough.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/walkthrough.page.scss */
      "./src/app/walkthrough/styles/walkthrough.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/walkthrough.shell.scss */
      "./src/app/walkthrough/styles/walkthrough.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/walkthrough.responsive.scss */
      "./src/app/walkthrough/styles/walkthrough.responsive.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], WalkthroughPage);
    /***/
  }
}]);
//# sourceMappingURL=walkthrough-walkthrough-module-es5.js.map