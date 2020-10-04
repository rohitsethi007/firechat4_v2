(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-search-feed-search-module"],{

/***/ "/OJ1":
/*!***************************************************!*\
  !*** ./src/app/feed-search/feed-search.module.ts ***!
  \***************************************************/
/*! exports provided: FeedSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedSearchPageModule", function() { return FeedSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _feed_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-search.page */ "NGOb");







const routes = [
    {
        path: '',
        component: _feed_search_page__WEBPACK_IMPORTED_MODULE_6__["FeedSearchPage"]
    }
];
let FeedSearchPageModule = class FeedSearchPageModule {
};
FeedSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_feed_search_page__WEBPACK_IMPORTED_MODULE_6__["FeedSearchPage"]]
    })
], FeedSearchPageModule);



/***/ }),

/***/ "3Rae":
/*!***************************************************!*\
  !*** ./src/app/feed-search/feed-search.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\nion-searchbar {\n  --border-radius: 30px;\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row .searchbar {\n  padding: 0px;\n  height: 30px;\n  border-radius: 20px;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC1zZWFyY2gvZmVlZC1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUNBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUVDO0VBQ0UscUJBQUE7QUFDSDs7QUFFQTtFQUNHLG1DQUFBO0VBQ0EsaUNBQUE7QUFDSDs7QUFDRztFQUNFLDhCQUFBO0FBQ0w7O0FBQ0s7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ1A7O0FBRUs7RUFDRSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtBQURQOztBQUdPO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBRUEsZUFBQTtBQUhUIiwiZmlsZSI6InNyYy9hcHAvZmVlZC1zZWFyY2gvZmVlZC1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuIH1cclxuIFxyXG4gaW9uLXNlYXJjaGJhciB7XHJcbiAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuIH1cclxuXHJcbi5maWx0ZXJzLXRvb2xiYXIge1xyXG4gICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAgLnNlYXJjaGJhci1yb3cge1xyXG4gICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuIFxyXG4gICAgIC5zZWFyY2hiYXIge1xyXG4gICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgIH1cclxuIFxyXG4gICAgIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xyXG4gICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgZmxleC1ncm93OiAwO1xyXG4gXHJcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuIFxyXG4gICAgICAgLmZpbHRlcnMtYnRuIHtcclxuICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XHJcbiAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDZweDtcclxuIFxyXG4gICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcclxuICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG5cclxuIH0iXX0= */");

/***/ }),

/***/ "NGOb":
/*!*************************************************!*\
  !*** ./src/app/feed-search/feed-search.page.ts ***!
  \*************************************************/
/*! exports provided: FeedSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedSearchPage", function() { return FeedSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feed_search_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feed-search.page.html */ "lV17");
/* harmony import */ var _feed_search_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed-search.page.scss */ "3Rae");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let FeedSearchPage = class FeedSearchPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    onCancel(event) {
        this.router.navigateByUrl('/app/tabs/tab1');
    }
};
FeedSearchPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
FeedSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed-search',
        template: _raw_loader_feed_search_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_search_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], FeedSearchPage);



/***/ }),

/***/ "lV17":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed-search/feed-search.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n    <ion-col>\n        <ion-searchbar mode=\"ios\" (ionCancel)=\"onCancel($event)\" class=\"searchbar\" showCancelButton=\"always\" placeholder=\"Search ...\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=feed-search-feed-search-module-es2015.js.map