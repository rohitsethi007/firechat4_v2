(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-search-feed-search-module"], {
    /***/
    "/OJ1":
    /*!***************************************************!*\
      !*** ./src/app/feed-search/feed-search.module.ts ***!
      \***************************************************/

    /*! exports provided: FeedSearchPageModule */

    /***/
    function _OJ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedSearchPageModule", function () {
        return FeedSearchPageModule;
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


      var _feed_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feed-search.page */
      "NGOb");

      var routes = [{
        path: '',
        component: _feed_search_page__WEBPACK_IMPORTED_MODULE_6__["FeedSearchPage"]
      }];

      var FeedSearchPageModule = /*#__PURE__*/_createClass(function FeedSearchPageModule() {
        _classCallCheck(this, FeedSearchPageModule);
      });

      FeedSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_feed_search_page__WEBPACK_IMPORTED_MODULE_6__["FeedSearchPage"]]
      })], FeedSearchPageModule);
      /***/
    },

    /***/
    "3Rae":
    /*!***************************************************!*\
      !*** ./src/app/feed-search/feed-search.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Rae(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\nion-searchbar {\n  --border-radius: 30px;\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row .searchbar {\n  padding: 0px;\n  height: 30px;\n  border-radius: 20px;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC1zZWFyY2gvZmVlZC1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUNBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUVDO0VBQ0UscUJBQUE7QUFDSDs7QUFFQTtFQUNHLG1DQUFBO0VBQ0EsaUNBQUE7QUFDSDs7QUFDRztFQUNFLDhCQUFBO0FBQ0w7O0FBQ0s7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ1A7O0FBRUs7RUFDRSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUFEUDs7QUFHTztFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUFIVCIsImZpbGUiOiJzcmMvYXBwL2ZlZWQtc2VhcmNoL2ZlZWQtc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiB9XG4gXG4gaW9uLXNlYXJjaGJhciB7XG4gICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gfVxuXG4uZmlsdGVycy10b29sYmFyIHtcbiAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAuc2VhcmNoYmFyLXJvdyB7XG4gICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiBcbiAgICAgLnNlYXJjaGJhciB7XG4gICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgIH1cbiBcbiAgICAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICBmbGV4LWdyb3c6IDA7XG4gXG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuIFxuICAgICAgIC5maWx0ZXJzLWJ0biB7XG4gICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcbiAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDZweDtcbiBcbiAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XG4gICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgfVxuICAgICB9XG4gICB9XG5cbiB9Il19 */";
      /***/
    },

    /***/
    "NGOb":
    /*!*************************************************!*\
      !*** ./src/app/feed-search/feed-search.page.ts ***!
      \*************************************************/

    /*! exports provided: FeedSearchPage */

    /***/
    function NGOb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedSearchPage", function () {
        return FeedSearchPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_feed_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./feed-search.page.html */
      "lV17");
      /* harmony import */


      var _feed_search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./feed-search.page.scss */
      "3Rae");
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

      var FeedSearchPage = /*#__PURE__*/function () {
        function FeedSearchPage(navCtrl, router) {
          _classCallCheck(this, FeedSearchPage);

          this.navCtrl = navCtrl;
          this.router = router;
        }

        return _createClass(FeedSearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onCancel",
          value: function onCancel(event) {
            this.router.navigateByUrl('/app/tabs/tab1');
          }
        }]);
      }();

      FeedSearchPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      FeedSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed-search',
        template: _raw_loader_feed_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], FeedSearchPage);
      /***/
    },

    /***/
    "lV17":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed-search/feed-search.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function lV17(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n    <ion-col>\n        <ion-searchbar mode=\"ios\" (ionCancel)=\"onCancel($event)\" class=\"searchbar\" showCancelButton=\"always\" placeholder=\"Search ...\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=feed-search-feed-search-module-es5.js.map