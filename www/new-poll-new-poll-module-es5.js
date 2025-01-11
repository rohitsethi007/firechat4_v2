(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-poll-new-poll-module"], {
    /***/
    "EoSc":
    /*!*********************************************!*\
      !*** ./src/app/new-poll/new-poll.module.ts ***!
      \*********************************************/

    /*! exports provided: NewPollPageModule */

    /***/
    function EoSc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPollPageModule", function () {
        return NewPollPageModule;
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


      var _new_poll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-poll.page */
      "j8EI");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");

      var routes = [{
        path: '',
        component: _new_poll_page__WEBPACK_IMPORTED_MODULE_6__["NewPollPage"]
      }];

      var NewPollPageModule = /*#__PURE__*/_createClass(function NewPollPageModule() {
        _classCallCheck(this, NewPollPageModule);
      });

      NewPollPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_new_poll_page__WEBPACK_IMPORTED_MODULE_6__["NewPollPage"]]
      })], NewPollPageModule);
      /***/
    },

    /***/
    "GELP":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-poll/new-poll.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function GELP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!pollForm.valid\" (click)=\"submitPollForm()\">Post</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content class=\"forms-validations-content\">\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\"> \n      <ion-list>\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n              <b>{{group.name}}</b><br/>\n              {{group.description}}\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step==2\">\n    <form class=\"validations-form\" [formGroup]=\"pollForm\" (ngSubmit)=\"submitPollForm()\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n        <ion-list-header class=\"header\">\n          posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n        </ion-list-header>\n        <ion-item class=\"input-item\">\n          <ion-input type=\"text\" formControlName=\"description\" clearInput placeholder=\"What would like to ask?\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input type=\"text\" formControlName=\"pollOption1\" clearInput placeholder=\"Enter the first option\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input type=\"text\" formControlName=\"pollOption2\" clearInput placeholder=\"Enter the second option\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input type=\"text\" formControlName=\"pollOption3\" clearInput placeholder=\"This is optional\"></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-input type=\"text\" formControlName=\"pollOption4\" clearInput placeholder=\"This is optional\"></ion-input>\n        </ion-item>\n      </ion-list>\n \n      <ion-list class=\"inputs-list\" lines=\"full\">\n        <ion-list-header>\n          <ion-label class=\"header-title\">Select relevant tags</ion-label>\n        </ion-list-header>\n  \n        <div class=\"reviews-wrapper\">\n        <ion-row>\n          <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of pollForm.controls.tags.controls; let i = index\">\n            <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n            <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n            <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n          </div>\n        </ion-row>\n\n        <div class=\"error-container\">\n          <ng-container *ngFor=\"let validation of validations.tags\">\n            <div class=\"error-message\" *ngIf=\"pollForm.get('tags').hasError(validation.type) && (pollForm.get('tags').dirty || pollForm.get('tags').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n              <span>{{ validation.message }}</span>\n            </div>\n          </ng-container>\n        </div>\n        </div>\n      </ion-list>\n      <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!pollForm.valid\">Submit</ion-button> -->\n  </form>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "Thc8":
    /*!*********************************************!*\
      !*** ./src/app/new-poll/new-poll.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Thc8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXBvbGwvbmV3LXBvbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7QUFDRjs7QUFHRztFQUNDLDJDQUFBO0FBQUo7O0FBRUk7RUFDRSwyRUFBQTtBQUFOOztBQUVNO0VBQ0UsZUFBQTtBQUFSOztBQUdRO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFEVjs7QUFHVTtFQUNFLGdEQUFBO0VBQ0EsY0FBQTtBQURaOztBQU9JO0VBQ0UsMEJBQUE7QUFMTjs7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFRRTtFQUVFLG1EQUFBO0VBQ1EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVBaOztBQVFZO0VBQ0UseUJBQUE7QUFOZDs7QUFRWTtFQUNFLHlCQUFBO0FBTmQ7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVBKOztBQWFBO0VBQ0UsV0FBQTtBQVZGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVEY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFXQTtFQUNFLFVBQUE7QUFURiIsImZpbGUiOiJzcmMvYXBwL25ldy1wb2xsL25ldy1wb2xsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xufVxuXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XG4gICAudmFsaWRhdGlvbnMtZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5pbnB1dHMtbGlzdCB7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAuZXJyb3ItY29udGFpbmVyIHtcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJtaXQtYnRuIHtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC50YWdzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgLml0ZW0tcmF0aW5nIHtcbiAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiMmIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XG4gICAgICAgICAgICB9XG4gIH1cbiAgaW9uLWNoZWNrYm94IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxufVxufVxuXG4udXBsb2FkcyB7XG4gIG1hcmdpbjogNXB4O1xuLmltZy13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmltZy13cmFwIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMnB4O1xuICByaWdodDogLTdweDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiA1cHggMnB4IDJweDtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaW1nLXdyYXA6aG92ZXIgLmNsb3NlIHtcbiAgb3BhY2l0eTogMTtcbn1cbn1cblxuIl19 */";
      /***/
    },

    /***/
    "j8EI":
    /*!*******************************************!*\
      !*** ./src/app/new-poll/new-poll.page.ts ***!
      \*******************************************/

    /*! exports provided: NewPollPage */

    /***/
    function j8EI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPollPage", function () {
        return NewPollPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_new_poll_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./new-poll.page.html */
      "GELP");
      /* harmony import */


      var _new_poll_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-poll.page.scss */
      "Thc8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../validators/checkbox-checked.validator */
      "ypRl");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var NewPollPage = /*#__PURE__*/function () {
        function NewPollPage(dataProvider, loadingProvider, route, router, firestore) {
          _classCallCheck(this, NewPollPage);

          this.dataProvider = dataProvider;
          this.loadingProvider = loadingProvider;
          this.route = route;
          this.router = router;
          this.firestore = firestore;
          this.postTags = [];
          this.step = 1;
          this.validations = {
            name: [{
              type: 'required',
              message: 'Title is required.'
            }, {
              type: 'minlength',
              message: 'Title must be at least 5 characters long.'
            }, {
              type: 'maxlength',
              message: 'Title cannot be more than 25 characters long.'
            }],
            description: [{
              type: 'required',
              message: 'Poll Question is required.'
            }, {
              type: 'minlength',
              message: 'Poll Question must be at least 10 characters long.'
            }, {
              type: 'maxlength',
              message: 'Poll Question cannot be more than 50 characters long.'
            }],
            pollOption1: [{
              type: 'required',
              message: 'Poll Question is required.'
            }, {
              type: 'minlength',
              message: 'Poll Question must be at least 10 characters long.'
            }, {
              type: 'maxlength',
              message: 'Poll Question cannot be more than 50 characters long.'
            }],
            pollOption2: [{
              type: 'required',
              message: 'Poll Question is required.'
            }, {
              type: 'minlength',
              message: 'Poll Question must be at least 10 characters long.'
            }, {
              type: 'maxlength',
              message: 'Poll Question cannot be more than 50 characters long.'
            }],
            tags: [{
              type: 'required',
              message: 'Please select at least one tag.'
            }]
          };
          this.groupId = this.route.snapshot.params.id;
          this.group = {
            name: ''
          };

          if (this.groupId === 'undefined') {
            this.step = 1;
          } else {
            this.step = 2;
          }

          this.pollForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([// Validators.minLength(10),
            // Validators.maxLength(50),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            pollOption1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([// Validators.minLength(1),
            // Validators.maxLength(20),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            pollOption2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([// Validators.minLength(1),
            // Validators.maxLength(20),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            pollOption3: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            pollOption4: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_8__["CheckboxCheckedValidator"].tagsSelected(1))
          });
        }

        return _createClass(NewPollPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // Initialize
            this.dataProvider.getCurrentUser().then(function (u) {
              u.snapshotChanges().subscribe(function (value) {
                _this.user = value.payload.data();
                _this.addedByUser = {
                  addedByKey: value.payload.data().userId,
                  addedByUsername: value.payload.data().username,
                  addedByImg: value.payload.data().img
                };
                _this.poll = {
                  addedByUser: _this.addedByUser,
                  date: '',
                  title: '',
                  postTags: [],
                  groupId: '',
                  groupName: '',
                  type: 'poll',
                  data: {},
                  totalReactionCount: 0,
                  totalReviewCount: 0,
                  totalPollCount: 0
                };

                if (_this.step === 1) {
                  _this.title = 'Select a group ...'; // Get User Groups List

                  if (_this.user.groups) {
                    _this.firestore.collection('groups').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.FieldPath.documentId(), 'in', _this.user.groups).get().then(function (group) {
                      _this.groups = [];
                      group.forEach(function (g) {
                        var group;
                        group = g.data();
                        group.key = g.id;

                        _this.addOrUpdateUserGroup(group);
                      });
                    });
                  }
                } else {
                  _this.title = 'Poll';

                  _this.dataProvider.getGroup(_this.groupId).snapshotChanges().subscribe(function (group) {
                    _this.group = group.payload.data();

                    _this.group.groupTags.forEach(function (element) {
                      _this.postTags.push({
                        val: element,
                        isChecked: false
                      });
                    });

                    _this.addTagControls();
                  });
                }
              });
            });
          }
        }, {
          key: "addOrUpdateUserGroup",
          value: function addOrUpdateUserGroup(group) {
            if (!this.groups) {
              this.groups = [group];
            } else {
              var index = -1;

              for (var i = 0; i < this.groups.length; i++) {
                if (this.groups[i].key == group.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.groups[index] = group;
              } else {
                this.groups.push(group);
              }
            }
          }
        }, {
          key: "addTagControls",
          value: function addTagControls() {
            var _this2 = this;

            this.postTags.forEach(function (o, i) {
              var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](i === 0); // if first item set to true, else false

              _this2.pollForm.controls.tags.push(control);
            });
          }
        }, {
          key: "submitPollForm",
          value: function submitPollForm() {
            var _this3 = this;

            this.loadingProvider.show(); // Add poll info and date.

            this.poll.groupId = this.groupId;
            this.poll.groupName = this.group.name;
            this.poll.date = new Date();
            this.poll.title = this.pollForm.value.description;
            this.poll.postTags = [];
            this.poll.postTags = this.postTags;
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth(); // January is 0!

            var yyyy = today.getFullYear();
            var date = new Date(yyyy, mm, dd + 2);
            var dateEnding = date;
            this.poll.data = {
              dateCreated: new Date(),
              dateEnding: dateEnding,
              pollOptions: []
            };

            if (this.pollForm.value.pollOption1 != null && this.pollForm.value.pollOption1.trim() !== '') {
              this.poll.data.pollOptions.push({
                name: this.pollForm.value.pollOption1.trim()
              });
            }

            if (this.pollForm.value.pollOption2 != null && this.pollForm.value.pollOption2.trim() !== '') {
              this.poll.data.pollOptions.push({
                name: this.pollForm.value.pollOption2.trim()
              });
            }

            if (this.pollForm.value.pollOption3 != null && this.pollForm.value.pollOption3.trim() !== '') {
              this.poll.data.pollOptions.push({
                name: this.pollForm.value.pollOption3.trim()
              });
            }

            if (this.pollForm.value.pollOption4 != null && this.pollForm.value.pollOption4.trim() !== '') {
              this.poll.data.pollOptions.push({
                name: this.pollForm.value.pollOption4.trim()
              });
            }

            this.dataProvider.addPost(this.poll).then(function (success) {
              var pollId = success.id;
              _this3.pollId = pollId;

              if (_this3.group.polls === undefined) {
                _this3.group.polls = [];
              }

              _this3.group.polls.push(_this3.pollId); // Update group data on the database.


              _this3.dataProvider.getGroup(_this3.groupId).update({
                posts: _this3.group.posts
              }).then(function () {
                // Back.
                _this3.loadingProvider.hide();

                _this3.router.navigateByUrl('tabs/tab2');
              });
            });
          }
        }, {
          key: "selectGroup",
          value: function selectGroup(groupId) {
            var _this4 = this;

            this.groupId = groupId;
            console.log('groupId', groupId);
            this.step = 2;
            this.title = 'Event';
            this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this4.group = group.payload.data();

              _this4.group.groupTags.forEach(function (element) {
                _this4.postTags.push({
                  val: element,
                  isChecked: false
                });
              });

              _this4.addTagControls();
            });
          }
        }]);
      }();

      NewPollPage.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"]
        }];
      };

      NewPollPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-poll',
        template: _raw_loader_new_poll_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_poll_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"]])], NewPollPage);
      /***/
    },

    /***/
    "ypRl":
    /*!**********************************************************!*\
      !*** ./src/app/validators/checkbox-checked.validator.ts ***!
      \**********************************************************/

    /*! exports provided: CheckboxCheckedValidator */

    /***/
    function ypRl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function () {
        return CheckboxCheckedValidator;
      });

      var CheckboxCheckedValidator = /*#__PURE__*/function () {
        function CheckboxCheckedValidator() {
          _classCallCheck(this, CheckboxCheckedValidator);
        }

        return _createClass(CheckboxCheckedValidator, null, [{
          key: "tagsSelected",
          value: function tagsSelected(min) {
            var validator = function validator(formArray) {
              var totalSelected = formArray.controls.map(function (control) {
                return control.value;
              }).reduce(function (prev, next) {
                return next ? prev + next : prev;
              }, 0);
              return totalSelected >= min ? null : {
                required: true
              };
            };

            return validator;
          }
        }]);
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=new-poll-new-poll-module-es5.js.map