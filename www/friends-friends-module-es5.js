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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n  <ion-segment color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button value=\"friends\">\r\n      FRIENDS\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"requests\">\r\n      REQUESTS\r\n      <span *ngIf=\"friendRequestCount != 0\">({{friendRequestCount}})</span>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"search\">\r\n      FIND NEW\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header> \r\n\r\n<ion-content>\r\n  <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'friends'\">\r\n      <!-- No friends to show -->\r\n      <div class=\"empty-list\" *ngIf=\"friends && friends.length == 0\">\r\n        <h1>\r\n          <ion-icon name=\"contacts\"></ion-icon>\r\n        </h1>\r\n        <p>You don't have new friend yet</p>\r\n      </div>\r\n      <!-- Show list of friends -->\r\n      <ion-list lines=\"none\" *ngIf=\"friends && friends.length > 0\">\r\n        <!-- <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\" cancelButtonText=\"Done\"></ion-searchbar> -->\r\n        <ion-item *ngFor=\"let friend of friends | friendFilter:searchFriend\"\r\n          (click)=\"message(friend.$key); $event.stopPropagation();\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{friend.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>{{friend.description}}</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-note slot=\"end\" *ngIf=\"friend.online == true\">online</ion-note>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <div *ngSwitchCase=\"'requests'\">\r\n      <!-- No friend requests sent or received. -->\r\n      <div class=\"empty-list\"\r\n        *ngIf=\"(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)\">\r\n        <h1>\r\n          <ion-icon name=\"md-filing\"></ion-icon>\r\n        </h1>\r\n        <p>No New Requests</p>\r\n      </div>\r\n      <!-- Show friend requests received. -->\r\n      <ion-list lines=\"none\" *ngIf=\"friendRequests && friendRequests.length > 0\">\r\n        <ion-item *ngFor=\"let friendRequest of friendRequests\" (click)=\"viewUser(friendRequest.$key)\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{friendRequest.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{friendRequest.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>has sent you a friend request.</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-button color=\"acceptrequest\" fill=\"outline\"\r\n            (click)=\"acceptFriendRequest(friendRequest); $event.stopPropagation();\">\r\n            Accept\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n      <!-- Show friend requests sent. -->\r\n      <ion-list lines=\"none\" *ngIf=\"requestsSent && requestsSent.length > 0\">\r\n        <ion-item *ngFor=\"let requestSent of requestsSent\" no-lines tappable (click)=\"viewUser(requestSent.$key)\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{requestSent.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{requestSent.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>friend request sent.</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-button slot=\"end\" fill=\"outline\" color=\"cancelrequest\"\r\n            (click)=\"cancelFriendRequest(requestSent); $event.stopPropagation();\">\r\n            Cancel\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <div *ngSwitchCase=\"'search'\">\r\n      <!-- No other users to send friend request right now. -->\r\n      <div class=\"empty-list\" *ngIf=\"accounts && (accounts.length == 0 || (accounts.length == excludedIds.length))\">\r\n        <h1>\r\n          <ion-icon name=\"md-search\"></ion-icon>\r\n        </h1>\r\n        <p>We can't find new users right now</p>\r\n      </div>\r\n      <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\r\n      <ion-list lines=\"none\" *ngIf=\"accounts && accounts.length > 0\">\r\n        <ion-searchbar *ngIf=\"accounts.length != excludedIds.length\" [(ngModel)]=\"searchUser\" placeholder=\"Search User\">\r\n        </ion-searchbar>\r\n        <ion-item *ngFor=\"let account of accounts | searchFilter: [excludedIds, searchUser]\" no-lines tappable\r\n          (click)=\"viewUser(account.$key)\">\r\n          <div slot=\"end\">\r\n            <ion-button color=\"sendrequest\" fill=\"outline\"\r\n              (click)=\"sendFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 0\">\r\n              add\r\n            </ion-button>\r\n            <ion-button color=\"cancelrequest\" fill=\"outline\"\r\n              (click)=\"cancelFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 1\">\r\n              <!-- <ion-icon name=\"md-close-circle\" class=\"danger\"></ion-icon> -->\r\n              cancel\r\n            </ion-button>\r\n            <ion-button color=\"acceptrequest\" fill=\"outline\"\r\n              (click)=\"acceptFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 2\">\r\n              <!-- <ion-icon name=\"md-checkmark-circle\" class=\"success\"></ion-icon> -->\r\n              accept\r\n            </ion-button>\r\n          </div>\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{account.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{account.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>@{{account.username}}</p>\r\n            </ion-text>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n</ion-content>";
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


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-background: var(--app-background);\n  --page-segment-indicator-height: 2px;\n}\n\n.user-friends-segment {\n  --background: var(--page-segment-background);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n}\n\n.user-friends-segment ion-segment-button {\n  --padding-end: var(--page-margin);\n  --padding-start: var(--page-margin);\n  --color: rgba(var(--ion-color-dark-rgb), 0.4);\n  --indicator-color: var(--ion-color-dark);\n  text-transform: capitalize;\n  min-height: calc((var(--page-margin) * 3) - var(--page-segment-indicator-height));\n}\n\nion-searchbar.friends-searchbar {\n  padding: calc(var(--page-margin) * 1.5) var(--page-margin);\n}\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3);\n}\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n\nion-item.friend-item {\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin);\n}\n\nion-item.friend-item:last-child {\n  --border-style: none;\n  --padding-bottom: 0px;\n  --inner-padding-bottom: 0px;\n}\n\nion-item.friend-item .user-details-section {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-job {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper {\n  font-size: 14px;\n  max-width: 10ex;\n  max-width: 10ch;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper .user-action {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kcy9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxmcmllbmRzXFxmcmllbmRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZnJpZW5kcy9mcmllbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSxnREFBQTtFQUNBLG9DQUFBO0FDREo7O0FES0U7RUFDRSw0Q0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBRElJO0VBQ0UsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esd0NBQUE7RUFFQSwwQkFBQTtFQUNBLGlGQUFBO0FDSE47O0FET0U7RUFDRSwwREFBQTtBQ0pKOztBRE9FO0VBQ0UsK0JBQUE7RUFDQSwyQ0FBQTtBQ0pKOztBRE9FO0VBQ0Usb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDSko7O0FET0U7RUFDRSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QUNKSjs7QURNSTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ0pOOztBRE9JO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ05OOztBRFFNO0VBQ0UsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNOUjs7QURTVTtFQUNFLDJDQUFBO0FDUFo7O0FEVVU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDUlo7O0FEV1U7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0FDVFo7O0FEY007RUFDRSxlQUFBO0VBS0EsZUFBQTtFQUNBLGVBQUE7QUNoQlI7O0FEa0JRO0VBQ0UsV0FBQTtBQ2hCViIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHMvZnJpZW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcclxuICAgIC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuICAgIC0tcGFnZS1zZWdtZW50LWluZGljYXRvci1oZWlnaHQ6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbiAgLnVzZXItZnJpZW5kcy1zZWdtZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1zZWdtZW50LWJhY2tncm91bmQpO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgXHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XHJcbiAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgXHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAtIHZhcigtLXBhZ2Utc2VnbWVudC1pbmRpY2F0b3ItaGVpZ2h0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zZWFyY2hiYXIuZnJpZW5kcy1zZWFyY2hiYXIge1xyXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAxLjUpIHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICB9XHJcbiAgXHJcbiAgLmZyaWVuZHMtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcclxuICB9XHJcbiAgXHJcbiAgLmVtcHR5LWxpc3QtbWVzc2FnZSB7XHJcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XHJcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbS5mcmllbmQtaXRlbSB7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIFxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAgICAgLnVzZXItZGF0YS13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAudXNlci1uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLnVzZXItam9iIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnVzZXItYWN0aW9ucy13cmFwcGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgXHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGFsd2F5cyBoYXZlIHNwYWNlIGZvciAxMCBjaGFyYWN0ZXJzXHJcbiAgICAgICAgLy8gQXMgY2ggKHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgJzAnKSB1bml0IGlzIG5vdCAxMDAlIHN1cHBvcnRlZCwgd2Ugd2lsbCB1c2UgZXggKGhlaWdodCBvZiB0aGUgJ3gnIGNoYXJhY3RlcikgYXMgYSBmYWxsYmFja1xyXG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvY3NzL3VuaXRzLXZhbHVlcy9cclxuICAgICAgICBtYXgtd2lkdGg6IDEwZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXJcclxuICAgICAgICBtYXgtd2lkdGg6IDEwY2g7IC8vIGNoIGlzIHRoZSBvbmx5IGZvbnQgdW5pdCBiYXNlZCBvbiB0aGUgd2lkdGggb2YgY2hhcmFjdGVyc1xyXG4gIFxyXG4gICAgICAgIC51c2VyLWFjdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gIC0tcGFnZS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1zZWdtZW50LWluZGljYXRvci1oZWlnaHQ6IDJweDtcbn1cblxuLnVzZXItZnJpZW5kcy1zZWdtZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZCk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogODtcbn1cbi51c2VyLWZyaWVuZHMtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAtIHZhcigtLXBhZ2Utc2VnbWVudC1pbmRpY2F0b3ItaGVpZ2h0KSk7XG59XG5cbmlvbi1zZWFyY2hiYXIuZnJpZW5kcy1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDEuNSkgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4uZnJpZW5kcy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbn1cblxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbS5mcmllbmQtaXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDBweDtcbn1cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taXRlbS5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWRhdGEtd3JhcHBlciAudXNlci1pbmZvOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWRhdGEtd3JhcHBlciAudXNlci1pbmZvIC51c2VyLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24taXRlbS5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItZGF0YS13cmFwcGVyIC51c2VyLWluZm8gLnVzZXItam9iIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1hY3Rpb25zLXdyYXBwZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1heC13aWR0aDogMTBleDtcbiAgbWF4LXdpZHRoOiAxMGNoO1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWFjdGlvbnMtd3JhcHBlciAudXNlci1hY3Rpb24ge1xuICBtYXJnaW46IDBweDtcbn0iXX0= */";
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