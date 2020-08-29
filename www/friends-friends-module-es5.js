function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["friends-friends-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFriendsFriendsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n  <ion-segment color=\"primary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"friends\">\n      FRIENDS\n    </ion-segment-button>\n    <ion-segment-button value=\"requests\">\n      REQUESTS\n      <span *ngIf=\"friendRequestCount != 0\">({{friendRequestCount}})</span>\n    </ion-segment-button>\n    <ion-segment-button value=\"search\">\n      FIND NEW\n    </ion-segment-button>\n  </ion-segment>\n</ion-header> \n\n<ion-content>\n  <div [ngSwitch]=\"tab\">\n    <div *ngSwitchCase=\"'friends'\">\n      <!-- No friends to show -->\n      <div class=\"empty-list\" *ngIf=\"friends && friends.length == 0\">\n        <h1>\n          <ion-icon name=\"contacts\"></ion-icon>\n        </h1>\n        <p>You don't have new friend yet</p>\n      </div>\n      <!-- Show list of friends -->\n      <ion-list lines=\"none\" *ngIf=\"friends && friends.length > 0\">\n        <!-- <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\" cancelButtonText=\"Done\"></ion-searchbar> -->\n        <ion-item *ngFor=\"let friend of friends | friendFilter:searchFriend\"\n          (click)=\"message(friend.$key); $event.stopPropagation();\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{friend.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>{{friend.description}}</p>\n            </ion-text>\n          </ion-label>\n          <ion-note slot=\"end\" *ngIf=\"friend.online == true\">online</ion-note>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'requests'\">\n      <!-- No friend requests sent or received. -->\n      <div class=\"empty-list\"\n        *ngIf=\"(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)\">\n        <h1>\n          <ion-icon name=\"md-filing\"></ion-icon>\n        </h1>\n        <p>No New Requests</p>\n      </div>\n      <!-- Show friend requests received. -->\n      <ion-list lines=\"none\" *ngIf=\"friendRequests && friendRequests.length > 0\">\n        <ion-item *ngFor=\"let friendRequest of friendRequests\" (click)=\"viewUser(friendRequest.$key)\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{friendRequest.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{friendRequest.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>has sent you a friend request.</p>\n            </ion-text>\n          </ion-label>\n          <ion-button color=\"acceptrequest\" fill=\"outline\"\n            (click)=\"acceptFriendRequest(friendRequest); $event.stopPropagation();\">\n            Accept\n          </ion-button>\n        </ion-item>\n      </ion-list>\n      <!-- Show friend requests sent. -->\n      <ion-list lines=\"none\" *ngIf=\"requestsSent && requestsSent.length > 0\">\n        <ion-item *ngFor=\"let requestSent of requestsSent\" no-lines tappable (click)=\"viewUser(requestSent.$key)\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{requestSent.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{requestSent.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>friend request sent.</p>\n            </ion-text>\n          </ion-label>\n          <ion-button slot=\"end\" fill=\"outline\" color=\"cancelrequest\"\n            (click)=\"cancelFriendRequest(requestSent); $event.stopPropagation();\">\n            Cancel\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'search'\">\n      <!-- No other users to send friend request right now. -->\n      <div class=\"empty-list\" *ngIf=\"accounts && (accounts.length == 0 || (accounts.length == excludedIds.length))\">\n        <h1>\n          <ion-icon name=\"md-search\"></ion-icon>\n        </h1>\n        <p>We can't find new users right now</p>\n      </div>\n      <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\n      <ion-list lines=\"none\" *ngIf=\"accounts && accounts.length > 0\">\n        <ion-searchbar *ngIf=\"accounts.length != excludedIds.length\" [(ngModel)]=\"searchUser\" placeholder=\"Search User\">\n        </ion-searchbar>\n        <ion-item *ngFor=\"let account of accounts | searchFilter: [excludedIds, searchUser]\" no-lines tappable\n          (click)=\"viewUser(account.$key)\">\n          <div slot=\"end\">\n            <ion-button color=\"sendrequest\" fill=\"outline\"\n              (click)=\"sendFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 0\">\n              add\n            </ion-button>\n            <ion-button color=\"cancelrequest\" fill=\"outline\"\n              (click)=\"cancelFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 1\">\n              <!-- <ion-icon name=\"md-close-circle\" class=\"danger\"></ion-icon> -->\n              cancel\n            </ion-button>\n            <ion-button color=\"acceptrequest\" fill=\"outline\"\n              (click)=\"acceptFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 2\">\n              <!-- <ion-icon name=\"md-checkmark-circle\" class=\"success\"></ion-icon> -->\n              accept\n            </ion-button>\n          </div>\n          <ion-avatar slot=\"start\">\n            <img src=\"{{account.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{account.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>@{{account.username}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/friends/friends.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/friends/friends.module.ts ***!
    \*******************************************/

  /*! exports provided: FriendsPageModule */

  /***/
  function srcAppFriendsFriendsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function () {
      return FriendsPageModule;
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


    var _friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./friends.page */
    "./src/app/friends/friends.page.ts");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");

    var routes = [{
      path: '',
      component: _friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]
    }];

    var FriendsPageModule = function FriendsPageModule() {
      _classCallCheck(this, FriendsPageModule);
    };

    FriendsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]]
    })], FriendsPageModule);
    /***/
  },

  /***/
  "./src/app/friends/friends.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/friends/friends.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppFriendsFriendsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-background: var(--app-background);\n  --page-segment-indicator-height: 2px;\n}\n\n.user-friends-segment {\n  --background: var(--page-segment-background);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n}\n\n.user-friends-segment ion-segment-button {\n  --padding-end: var(--page-margin);\n  --padding-start: var(--page-margin);\n  --color: rgba(var(--ion-color-dark-rgb), 0.4);\n  --indicator-color: var(--ion-color-dark);\n  text-transform: capitalize;\n  min-height: calc((var(--page-margin) * 3) - var(--page-segment-indicator-height));\n}\n\nion-searchbar.friends-searchbar {\n  padding: calc(var(--page-margin) * 1.5) var(--page-margin);\n}\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3);\n}\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n\nion-item.friend-item {\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin);\n}\n\nion-item.friend-item:last-child {\n  --border-style: none;\n  --padding-bottom: 0px;\n  --inner-padding-bottom: 0px;\n}\n\nion-item.friend-item .user-details-section {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-job {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper {\n  font-size: 14px;\n  max-width: 10ex;\n  max-width: 10ch;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper .user-action {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9mcmllbmRzL2ZyaWVuZHMucGFnZS5zY3NzIiwic3JjL2FwcC9mcmllbmRzL2ZyaWVuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdEQUFBO0VBQ0Esb0NBQUE7QUNESjs7QURLRTtFQUNFLDRDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDRko7O0FESUk7RUFDRSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7RUFDQSx3Q0FBQTtFQUVBLDBCQUFBO0VBQ0EsaUZBQUE7QUNITjs7QURPRTtFQUNFLDBEQUFBO0FDSko7O0FET0U7RUFDRSwrQkFBQTtFQUNBLDJDQUFBO0FDSko7O0FET0U7RUFDRSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPRTtFQUNFLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQ0pKOztBRE1JO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDSk47O0FET0k7RUFDRSw4QkFBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTk47O0FEUU07RUFDRSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ05SOztBRFNVO0VBQ0UsMkNBQUE7QUNQWjs7QURVVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNSWjs7QURXVTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUNUWjs7QURjTTtFQUNFLGVBQUE7RUFLQSxlQUFBO0VBQ0EsZUFBQTtBQ2hCUjs7QURrQlE7RUFDRSxXQUFBO0FDaEJWIiwiZmlsZSI6InNyYy9hcHAvZnJpZW5kcy9mcmllbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgICAtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gICAgLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodDogMnB4O1xuICB9XG4gIFxuICAvLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbiAgLnVzZXItZnJpZW5kcy1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA4O1xuICBcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbWluLWhlaWdodDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLSB2YXIoLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodCkpO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLXNlYXJjaGJhci5mcmllbmRzLXNlYXJjaGJhciB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAxLjUpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuICBcbiAgLmZyaWVuZHMtbGlzdCB7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xuICB9XG4gIFxuICAuZW1wdHktbGlzdC1tZXNzYWdlIHtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XG4gICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIGlvbi1pdGVtLmZyaWVuZC1pdGVtIHtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIFxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG4gIFxuICAgIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICAgIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIC51c2VyLWpvYiB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLnVzZXItYWN0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICBcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGFsd2F5cyBoYXZlIHNwYWNlIGZvciAxMCBjaGFyYWN0ZXJzXG4gICAgICAgIC8vIEFzIGNoICh3aWR0aCBvZiB0aGUgY2hhcmFjdGVyICcwJykgdW5pdCBpcyBub3QgMTAwJSBzdXBwb3J0ZWQsIHdlIHdpbGwgdXNlIGV4IChoZWlnaHQgb2YgdGhlICd4JyBjaGFyYWN0ZXIpIGFzIGEgZmFsbGJhY2tcbiAgICAgICAgLy8gU2VlOiBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9jc3MvdW5pdHMtdmFsdWVzL1xuICAgICAgICBtYXgtd2lkdGg6IDEwZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXJcbiAgICAgICAgbWF4LXdpZHRoOiAxMGNoOyAvLyBjaCBpcyB0aGUgb25seSBmb250IHVuaXQgYmFzZWQgb24gdGhlIHdpZHRoIG9mIGNoYXJhY3RlcnNcbiAgXG4gICAgICAgIC51c2VyLWFjdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gIC0tcGFnZS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1zZWdtZW50LWluZGljYXRvci1oZWlnaHQ6IDJweDtcbn1cblxuLnVzZXItZnJpZW5kcy1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZCk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcbn1cbi51c2VyLWZyaWVuZHMtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAtIHZhcigtLXBhZ2Utc2VnbWVudC1pbmRpY2F0b3ItaGVpZ2h0KSk7XG59XG5cbmlvbi1zZWFyY2hiYXIuZnJpZW5kcy1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDEuNSkgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4uZnJpZW5kcy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbn1cblxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbS5mcmllbmQtaXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDBweDtcbn1cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taXRlbS5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWRhdGEtd3JhcHBlciAudXNlci1pbmZvOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWRhdGEtd3JhcHBlciAudXNlci1pbmZvIC51c2VyLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24taXRlbS5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItZGF0YS13cmFwcGVyIC51c2VyLWluZm8gLnVzZXItam9iIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1hY3Rpb25zLXdyYXBwZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1heC13aWR0aDogMTBleDtcbiAgbWF4LXdpZHRoOiAxMGNoO1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWFjdGlvbnMtd3JhcHBlciAudXNlci1hY3Rpb24ge1xuICBtYXJnaW46IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/friends/friends.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/friends/friends.page.ts ***!
    \*****************************************/

  /*! exports provided: FriendsPage */

  /***/
  function srcAppFriendsFriendsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsPage", function () {
      return FriendsPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var FriendsPage =
    /*#__PURE__*/
    function () {
      // FriendsPage
      // This is the page where the user can search, view, and initiate a chat with their friends.
      function FriendsPage(dataProvider, loadingProvider, alertCtrl, firebaseProvider, afAuth, router) {
        _classCallCheck(this, FriendsPage);

        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider = firebaseProvider;
        this.afAuth = afAuth;
        this.router = router;
        this.friendRequests = [];
        this.requestsSent = [];
        this.friendRequestCount = 0;
        this.accounts = [];
        this.excludedIds = [];
      }

      _createClass(FriendsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.tab = 'friends';
          this.title = 'Friends';
          this.searchFriend = '';

          if (this.afAuth.auth.currentUser != null) {
            this.dataProvider.getRequests(this.dataProvider.getCurrentUserId()).snapshotChanges().subscribe(function (requestsRes) {
              if (requestsRes.payload != null) {
                var requests = requestsRes.payload.data();

                if (requests != null) {
                  if (requests.friendRequests != null && requests.friendRequests !== undefined) {
                    _this.friendRequestCount = requests.friendRequests.length;
                  } else {
                    _this.friendRequestCount = 0;
                  }
                } else {
                  _this.friendRequestCount = 0;
                }
              }
            });
          }
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged($event) {
          if (this.tab === 'friends') {
            this.title = 'Friends';
            this.getFriends();
          } else if (this.tab === 'requests') {
            this.title = 'Friend Requests';
            this.getFriendRequests();
          } else if (this.tab === 'search') {
            this.title = 'Find New Friends';
            this.findNewFriends();
          }
        } // openFilter() {
        //   this.findNewFriends();
        //   let friendModal = this.modalCtrl.create(FriendsFilterPage);
        //   friendModal.present();
        //   friendModal.onDidDismiss(data => {
        //     console.log(data);
        //     if (data != undefined) {
        //       this.accounts = this.accounts.filter(acc => {
        //         if ((acc.age >= data.ageStart) && (acc.age <= data.ageEnd) && acc.location == data.location)
        //           return true;
        //         return false;
        //       })
        //     }
        //   });
        // }

      }, {
        key: "getFriends",
        value: function getFriends() {
          var _this2 = this;

          this.loadingProvider.show();
          this.friends = []; // Get user data on database and get list of friends.

          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (user) {
            var account = user.payload.data();

            _this2.loadingProvider.hide();

            if (account != null && account.friends != null) {
              for (var i = 0; i < account.friends.length; i++) {
                console.log('friends:', account.friends[i]);

                _this2.dataProvider.getUser(account.friends[i]).snapshotChanges().subscribe(function (friend) {
                  if (friend.payload != null) {
                    var friendData = Object.assign({
                      $key: friend.payload.data().userId
                    }, friend.payload.data());

                    _this2.addOrUpdateFriend(friendData);
                  }
                });
              }
            } else {
              _this2.friends = [];
            }
          });
        } // Add or update friend data for real-time sync.

      }, {
        key: "addOrUpdateFriend",
        value: function addOrUpdateFriend(friend) {
          if (!this.friends) {
            this.friends = [friend];
          } else {
            var index = -1;

            for (var i = 0; i < this.friends.length; i++) {
              if (this.friends[i].$key === friend.$key) {
                index = i;
              }
            }

            if (index > -1) {
              this.friends[index] = friend;
            } else {
              this.friends.push(friend);
            }
          }
        } // Proceed to userInfo page.

      }, {
        key: "viewUser",
        value: function viewUser(userId) {
          this.router.navigateByUrl('/userinfo/' + userId);
        } // Proceed to chat page.

      }, {
        key: "message",
        value: function message(userId) {
          this.router.navigateByUrl('/message/' + userId);
        } // Manageing Friend Requests

      }, {
        key: "getFriendRequests",
        value: function getFriendRequests() {
          var _this3 = this;

          this.friendRequests = [];
          this.requestsSent = [];
          this.loadingProvider.show(); // Get user info

          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (accountRes) {
            _this3.account = accountRes.payload.data(); // Get friendRequests and requestsSent of the user.

            _this3.dataProvider.getRequests(_this3.account.userId).snapshotChanges().subscribe(function (requestsRes) {
              // friendRequests.
              var requests = requestsRes.payload.data();

              if (requests != null) {
                if (requests.friendRequests != null && requests.friendRequests !== undefined) {
                  _this3.friendRequests = [];
                  _this3.friendRequestCount = requests.friendRequests.length;
                  requests.friendRequests.forEach(function (userId) {
                    _this3.dataProvider.getUser(userId).snapshotChanges().subscribe(function (sender) {
                      sender = Object.assign({
                        $key: sender.payload.data().userId
                      }, sender.payload.data());

                      _this3.addOrUpdateFriendRequest(sender);
                    });
                  });
                } else {
                  _this3.friendRequests = [];
                } // requestsSent.


                if (requests.requestsSent != null && requests.requestsSent != undefined) {
                  _this3.requestsSent = [];
                  requests.requestsSent.forEach(function (userId) {
                    _this3.dataProvider.getUser(userId).snapshotChanges().subscribe(function (receiver) {
                      receiver = Object.assign({
                        $key: receiver.payload.data().userId
                      }, receiver.payload.data());

                      _this3.addOrUpdateRequestSent(receiver);
                    });
                  });
                } else {
                  _this3.requestsSent = [];
                }
              }

              _this3.loadingProvider.hide();
            });
          });
        } // Add or update friend request only if not yet friends.

      }, {
        key: "addOrUpdateFriendRequest",
        value: function addOrUpdateFriendRequest(sender) {
          if (!this.friendRequests) {
            this.friendRequests = [sender];
          } else {
            var index = -1;

            for (var i = 0; i < this.friendRequests.length; i++) {
              if (this.friendRequests[i].$key === sender.$key) {
                index = i;
              }
            }

            if (index > -1) {
              if (!this.isFriends(sender.$key)) {
                this.friendRequests[index] = sender;
              }
            } else {
              if (!this.isFriends(sender.$key)) {
                this.friendRequests.push(sender);
              }
            }
          }
        } // Add or update requests sent only if the user is not yet a friend.

      }, {
        key: "addOrUpdateRequestSent",
        value: function addOrUpdateRequestSent(receiver) {
          if (!this.requestsSent) {
            this.requestsSent = [receiver];
          } else {
            var index = -1;

            for (var j = 0; j < this.requestsSent.length; j++) {
              if (this.requestsSent[j].$key == receiver.$key) {
                index = j;
              }
            }

            if (index > -1) {
              if (!this.isFriends(receiver.$key)) {
                this.requestsSent[index] = receiver;
              }
            } else {
              if (!this.isFriends(receiver.$key)) {
                this.requestsSent.push(receiver);
              }
            }
          }
        }
      }, {
        key: "findNewFriends",
        value: function findNewFriends() {
          var _this4 = this;

          this.requestsSent = [];
          this.friendRequests = []; // Initialize

          this.loadingProvider.show();
          this.searchUser = ''; // Get all users.

          this.dataProvider.getUsers().snapshotChanges().subscribe(function (accounts) {
            // TODO : why is this being called twice??????????????
            _this4.loadingProvider.hide(); // applying Filters


            var acc = accounts.filter(function (c) {
              if (c.key == null && c.key === undefined && c.payload.doc.data() == null) {
                return false;
              }

              if (c.payload.doc.data().name === '' || c.payload.doc.data().name === ' ' || c.payload.doc.data().name === undefined) {
                return false;
              }

              if (c.payload.doc.data().publicVisibility === false) {
                return false;
              }

              return true;
            });
            _this4.accounts = acc.map(function (c) {
              return Object.assign({
                $key: c.payload.doc.data().userId
              }, c.payload.doc.data());
            });

            _this4.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (accountRes) {
              var account = accountRes.payload.data(); // Add own userId as exludedIds.

              _this4.excludedIds = [];

              if (_this4.excludedIds.indexOf(account.userId) === -1) {
                _this4.excludedIds.push(account.userId);
              } // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.


              if (account != null) {
                if (account.friends != null) {
                  account.friends.forEach(function (friend) {
                    if (_this4.excludedIds.indexOf(friend) === -1) {
                      _this4.excludedIds.push(friend);
                    }
                  });
                }
              } // Get requests of the currentUser.


              _this4.dataProvider.getRequests(account.userId).get().subscribe(function (requests) {
                if (requests.payload != null) {
                  _this4.requestsSent = requests.payload.data().requestsSent;
                  _this4.friendRequests = requests.payload.data().friendRequests;
                }
              });
            });
          });
        } // Send friend request.

      }, {
        key: "sendFriendRequest",
        value: function sendFriendRequest(user) {
          var _this5 = this;

          this.alert = this.alertCtrl.create({
            header: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + user.name + '</b>?',
            buttons: [{
              text: 'Cancel',
              handler: function handler(data) {}
            }, {
              text: 'Send',
              handler: function handler() {
                _this5.firebaseProvider.sendFriendRequest(user.$key);
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        } // Accept Friend Request.

      }, {
        key: "acceptFriendRequest",
        value: function acceptFriendRequest(user) {
          var _this6 = this;

          this.alert = this.alertCtrl.create({
            header: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
            buttons: [{
              text: 'Cancel',
              handler: function handler(data) {}
            }, {
              text: 'Reject Request',
              handler: function handler() {
                _this6.firebaseProvider.deleteFriendRequest(user.$key);

                _this6.getFriendRequests();
              }
            }, {
              text: 'Accept Request',
              handler: function handler() {
                _this6.firebaseProvider.acceptFriendRequest(user.$key);

                _this6.getFriendRequests();
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        } // Cancel Friend Request sent.

      }, {
        key: "cancelFriendRequest",
        value: function cancelFriendRequest(user) {
          var _this7 = this;

          this.alert = this.alertCtrl.create({
            header: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
            buttons: [{
              text: 'Cancel',
              handler: function handler(data) {}
            }, {
              text: 'Delete',
              handler: function handler() {
                _this7.firebaseProvider.cancelFriendRequest(user.$key);

                _this7.getFriendRequests();
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        } // Checks if user is already friends with this user.

      }, {
        key: "isFriends",
        value: function isFriends(userId) {
          if (this.account.friends) {
            if (this.account.friends.indexOf(userId) == -1) {
              return false;
            } else {
              return true;
            }
          } else {
            return false;
          }
        } // Get the status of the user in relation to the logged in user.

      }, {
        key: "getStatus",
        value: function getStatus(user) {
          // Returns:
          // 0 when user can be requested as friend.
          // 1 when a friend request was already sent to this user.
          // 2 when this user has a pending friend request.
          if (this.requestsSent) {
            for (var i = 0; i < this.requestsSent.length; i++) {
              if (this.requestsSent[i] === user.$key) {
                return 1;
              }
            }
          }

          if (this.friendRequests) {
            for (var j = 0; j < this.friendRequests.length; j++) {
              if (this.friendRequests[j] === user.$key) {
                return 2;
              }
            }
          }

          return 0;
        }
      }]);

      return FriendsPage;
    }();

    FriendsPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    FriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friends',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friends.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friends.page.scss */
      "./src/app/friends/friends.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], FriendsPage);
    /***/
  }
}]);
//# sourceMappingURL=friends-friends-module-es5.js.map