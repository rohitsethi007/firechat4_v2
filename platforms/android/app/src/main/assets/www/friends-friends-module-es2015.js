(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["friends-friends-module"],{

/***/ "+lG5":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n  <ion-segment color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"friends\">\n      FRIENDS\n    </ion-segment-button>\n    <ion-segment-button value=\"requests\">\n      REQUESTS\n      <span *ngIf=\"friendRequestCount != 0\">({{friendRequestCount}})</span>\n    </ion-segment-button>\n    <ion-segment-button value=\"search\">\n      FIND NEW\n    </ion-segment-button>\n  </ion-segment>\n</ion-header> \n\n<ion-content>\n  <div [ngSwitch]=\"tab\">\n    <div *ngSwitchCase=\"'friends'\">\n      <!-- No friends to show -->\n      <div class=\"empty-list\" *ngIf=\"friends && friends.length == 0\">\n        <h1>\n          <ion-icon name=\"contacts\"></ion-icon>\n        </h1>\n        <p>You don't have new friend yet</p>\n      </div>\n      <!-- Show list of friends -->\n      <ion-list lines=\"none\" *ngIf=\"friends && friends.length > 0\">\n        <!-- <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\" cancelButtonText=\"Done\"></ion-searchbar> -->\n        <ion-item *ngFor=\"let friend of friends | friendFilter:searchFriend\"\n          (click)=\"message(friend.$key); $event.stopPropagation();\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{friend.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>{{friend.description}}</p>\n            </ion-text>\n          </ion-label>\n          <ion-note slot=\"end\" *ngIf=\"friend.online == true\">online</ion-note>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'requests'\">\n      <!-- No friend requests sent or received. -->\n      <div class=\"empty-list\"\n        *ngIf=\"(friendRequests && friendRequests.length == 0) && (requestsSent && requestsSent.length == 0)\">\n        <h1>\n          <ion-icon name=\"md-filing\"></ion-icon>\n        </h1>\n        <p>No New Requests</p>\n      </div>\n      <!-- Show friend requests received. -->\n      <ion-list lines=\"none\" *ngIf=\"friendRequests && friendRequests.length > 0\">\n        <ion-item *ngFor=\"let friendRequest of friendRequests\" (click)=\"viewUser(friendRequest.$key)\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{friendRequest.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{friendRequest.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>has sent you a friend request.</p>\n            </ion-text>\n          </ion-label>\n          <ion-button color=\"acceptrequest\" fill=\"outline\"\n            (click)=\"acceptFriendRequest(friendRequest); $event.stopPropagation();\">\n            Accept\n          </ion-button>\n        </ion-item>\n      </ion-list>\n      <!-- Show friend requests sent. -->\n      <ion-list lines=\"none\" *ngIf=\"requestsSent && requestsSent.length > 0\">\n        <ion-item *ngFor=\"let requestSent of requestsSent\" no-lines tappable (click)=\"viewUser(requestSent.$key)\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{requestSent.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{requestSent.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>friend request sent.</p>\n            </ion-text>\n          </ion-label>\n          <ion-button slot=\"end\" fill=\"outline\" color=\"cancelrequest\"\n            (click)=\"cancelFriendRequest(requestSent); $event.stopPropagation();\">\n            Cancel\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'search'\">\n      <!-- No other users to send friend request right now. -->\n      <div class=\"empty-list\" *ngIf=\"accounts && (accounts.length == 0 || (accounts.length == excludedIds.length))\">\n        <h1>\n          <ion-icon name=\"md-search\"></ion-icon>\n        </h1>\n        <p>We can't find new users right now</p>\n      </div>\n      <!-- Show other users excluding yourself, and friends with the help of searchFilter pipe. -->\n      <ion-list lines=\"none\" *ngIf=\"accounts && accounts.length > 0\">\n        <ion-searchbar *ngIf=\"accounts.length != excludedIds.length\" [(ngModel)]=\"searchUser\" placeholder=\"Search User\">\n        </ion-searchbar>\n        <ion-item *ngFor=\"let account of accounts | searchFilter: [excludedIds, searchUser]\" no-lines tappable\n          (click)=\"viewUser(account.$key)\">\n          <div slot=\"end\">\n            <ion-button color=\"sendrequest\" fill=\"outline\"\n              (click)=\"sendFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 0\">\n              add\n            </ion-button>\n            <ion-button color=\"cancelrequest\" fill=\"outline\"\n              (click)=\"cancelFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 1\">\n              <!-- <ion-icon name=\"md-close-circle\" class=\"danger\"></ion-icon> -->\n              cancel\n            </ion-button>\n            <ion-button color=\"acceptrequest\" fill=\"outline\"\n              (click)=\"acceptFriendRequest(account); $event.stopPropagation();\" *ngIf=\"getStatus(account) == 2\">\n              <!-- <ion-icon name=\"md-checkmark-circle\" class=\"success\"></ion-icon> -->\n              accept\n            </ion-button>\n          </div>\n          <ion-avatar slot=\"start\">\n            <img src=\"{{account.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n          </ion-avatar>\n          <ion-label>\n            <ion-text>\n              <h2>{{account.name}}</h2>\n            </ion-text>\n            <ion-text>\n              <p>@{{account.username}}</p>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "YvhV":
/*!*****************************************!*\
  !*** ./src/app/friends/friends.page.ts ***!
  \*****************************************/
/*! exports provided: FriendsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPage", function() { return FriendsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_friends_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./friends.page.html */ "+lG5");
/* harmony import */ var _friends_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friends.page.scss */ "lfu1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");










let FriendsPage = class FriendsPage {
    // FriendsPage
    // This is the page where the user can search, view, and initiate a chat with their friends.
    constructor(dataProvider, loadingProvider, alertCtrl, firebaseProvider, afAuth, router) {
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
    ngOnInit() { }
    ionViewDidEnter() {
        this.tab = 'friends';
        this.title = 'Friends';
        this.searchFriend = '';
        if (this.afAuth.auth.currentUser != null) {
            this.dataProvider.getRequests(this.dataProvider.getCurrentUserId()).snapshotChanges().subscribe((requestsRes) => {
                if (requestsRes.payload != null) {
                    const requests = requestsRes.payload.data();
                    if (requests != null) {
                        if (requests.friendRequests != null && requests.friendRequests !== undefined) {
                            this.friendRequestCount = requests.friendRequests.length;
                        }
                        else {
                            this.friendRequestCount = 0;
                        }
                    }
                    else {
                        this.friendRequestCount = 0;
                    }
                }
            });
        }
    }
    segmentChanged($event) {
        if (this.tab === 'friends') {
            this.title = 'Friends';
            this.getFriends();
        }
        else if (this.tab === 'requests') {
            this.title = 'Friend Requests';
            this.getFriendRequests();
        }
        else if (this.tab === 'search') {
            this.title = 'Find New Friends';
            this.findNewFriends();
        }
    }
    // openFilter() {
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
    getFriends() {
        this.loadingProvider.show();
        this.friends = [];
        // Get user data on database and get list of friends.
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((user) => {
            const account = user.payload.data();
            this.loadingProvider.hide();
            if (account != null && account.friends != null) {
                for (let i = 0; i < account.friends.length; i++) {
                    console.log('friends:', account.friends[i]);
                    this.dataProvider.getUser(account.friends[i]).snapshotChanges().subscribe((friend) => {
                        if (friend.payload != null) {
                            const friendData = Object.assign({ $key: friend.payload.data().userId }, friend.payload.data());
                            this.addOrUpdateFriend(friendData);
                        }
                    });
                }
            }
            else {
                this.friends = [];
            }
        });
    }
    // Add or update friend data for real-time sync.
    addOrUpdateFriend(friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (let i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key === friend.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    }
    // Proceed to userInfo page.
    viewUser(userId) {
        this.router.navigateByUrl('/userinfo/' + userId);
    }
    // Proceed to chat page.
    message(userId) {
        this.router.navigateByUrl('/message/' + userId);
    }
    // Manageing Friend Requests
    getFriendRequests() {
        this.friendRequests = [];
        this.requestsSent = [];
        this.loadingProvider.show();
        // Get user info
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((accountRes) => {
            this.account = accountRes.payload.data();
            // Get friendRequests and requestsSent of the user.
            this.dataProvider.getRequests(this.account.userId).snapshotChanges().subscribe((requestsRes) => {
                // friendRequests.
                let requests = requestsRes.payload.data();
                if (requests != null) {
                    if (requests.friendRequests != null && requests.friendRequests !== undefined) {
                        this.friendRequests = [];
                        this.friendRequestCount = requests.friendRequests.length;
                        requests.friendRequests.forEach((userId) => {
                            this.dataProvider.getUser(userId).snapshotChanges().subscribe((sender) => {
                                sender = Object.assign({ $key: sender.payload.data().userId }, sender.payload.data());
                                this.addOrUpdateFriendRequest(sender);
                            });
                        });
                    }
                    else {
                        this.friendRequests = [];
                    }
                    // requestsSent.
                    if (requests.requestsSent != null && requests.requestsSent != undefined) {
                        this.requestsSent = [];
                        requests.requestsSent.forEach((userId) => {
                            this.dataProvider.getUser(userId).snapshotChanges().subscribe((receiver) => {
                                receiver = Object.assign({ $key: receiver.payload.data().userId }, receiver.payload.data());
                                this.addOrUpdateRequestSent(receiver);
                            });
                        });
                    }
                    else {
                        this.requestsSent = [];
                    }
                }
                this.loadingProvider.hide();
            });
        });
    }
    // Add or update friend request only if not yet friends.
    addOrUpdateFriendRequest(sender) {
        if (!this.friendRequests) {
            this.friendRequests = [sender];
        }
        else {
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
            }
            else {
                if (!this.isFriends(sender.$key)) {
                    this.friendRequests.push(sender);
                }
            }
        }
    }
    // Add or update requests sent only if the user is not yet a friend.
    addOrUpdateRequestSent(receiver) {
        if (!this.requestsSent) {
            this.requestsSent = [receiver];
        }
        else {
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
            }
            else {
                if (!this.isFriends(receiver.$key)) {
                    this.requestsSent.push(receiver);
                }
            }
        }
    }
    findNewFriends() {
        this.requestsSent = [];
        this.friendRequests = [];
        // Initialize
        this.loadingProvider.show();
        this.searchUser = '';
        // Get all users.
        this.dataProvider.getUsers().snapshotChanges().subscribe((accounts) => {
            // TODO : why is this being called twice??????????????
            this.loadingProvider.hide();
            // applying Filters
            const acc = accounts.filter((c) => {
                if (c.key == null && c.key === undefined && c.payload.doc.data() == null) {
                    return false;
                }
                if (c.payload.doc.data().name === ''
                    || c.payload.doc.data().name === ' '
                    || c.payload.doc.data().name === undefined) {
                    return false;
                }
                if (c.payload.doc.data().publicVisibility === false) {
                    return false;
                }
                return true;
            });
            this.accounts = acc.map(c => {
                return Object.assign({ $key: c.payload.doc.data().userId }, c.payload.doc.data());
            });
            this.dataProvider.getCurrentUser().snapshotChanges().subscribe((accountRes) => {
                const account = accountRes.payload.data();
                // Add own userId as exludedIds.
                this.excludedIds = [];
                if (this.excludedIds.indexOf(account.userId) === -1) {
                    this.excludedIds.push(account.userId);
                }
                // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.
                if (account != null) {
                    if (account.friends != null) {
                        account.friends.forEach(friend => {
                            if (this.excludedIds.indexOf(friend) === -1) {
                                this.excludedIds.push(friend);
                            }
                        });
                    }
                }
                // Get requests of the currentUser.
                this.dataProvider.getRequests(account.userId).get().subscribe((requests) => {
                    if (requests.payload != null) {
                        this.requestsSent = requests.payload.data().requestsSent;
                        this.friendRequests = requests.payload.data().friendRequests;
                    }
                });
            });
        });
    }
    // Send friend request.
    sendFriendRequest(user) {
        this.alert = this.alertCtrl.create({
            header: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Send',
                    handler: () => {
                        this.firebaseProvider.sendFriendRequest(user.$key);
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Accept Friend Request.
    acceptFriendRequest(user) {
        this.alert = this.alertCtrl.create({
            header: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Reject Request',
                    handler: () => {
                        this.firebaseProvider.deleteFriendRequest(user.$key);
                        this.getFriendRequests();
                    }
                },
                {
                    text: 'Accept Request',
                    handler: () => {
                        this.firebaseProvider.acceptFriendRequest(user.$key);
                        this.getFriendRequests();
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Cancel Friend Request sent.
    cancelFriendRequest(user) {
        this.alert = this.alertCtrl.create({
            header: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.firebaseProvider.cancelFriendRequest(user.$key);
                        this.getFriendRequests();
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Checks if user is already friends with this user.
    isFriends(userId) {
        if (this.account.friends) {
            if (this.account.friends.indexOf(userId) == -1) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
    // Get the status of the user in relation to the logged in user.
    getStatus(user) {
        // Returns:
        // 0 when user can be requested as friend.
        // 1 when a friend request was already sent to this user.
        // 2 when this user has a pending friend request.
        if (this.requestsSent) {
            for (let i = 0; i < this.requestsSent.length; i++) {
                if (this.requestsSent[i] === user.$key) {
                    return 1;
                }
            }
        }
        if (this.friendRequests) {
            for (let j = 0; j < this.friendRequests.length; j++) {
                if (this.friendRequests[j] === user.$key) {
                    return 2;
                }
            }
        }
        return 0;
    }
};
FriendsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
FriendsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-friends',
        template: _raw_loader_friends_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_friends_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], FriendsPage);



/***/ }),

/***/ "fZqB":
/*!*******************************************!*\
  !*** ./src/app/friends/friends.module.ts ***!
  \*******************************************/
/*! exports provided: FriendsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function() { return FriendsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friends.page */ "YvhV");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "vxGH");








const routes = [
    {
        path: '',
        component: _friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]
    }
];
let FriendsPageModule = class FriendsPageModule {
};
FriendsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]
        ]
    })
], FriendsPageModule);



/***/ }),

/***/ "lfu1":
/*!*******************************************!*\
  !*** ./src/app/friends/friends.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-background: var(--app-background);\n  --page-segment-indicator-height: 2px;\n}\n\n.user-friends-segment {\n  --background: var(--page-segment-background);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n}\n\n.user-friends-segment ion-segment-button {\n  --padding-end: var(--page-margin);\n  --padding-start: var(--page-margin);\n  --color: rgba(var(--ion-color-dark-rgb), 0.4);\n  --indicator-color: var(--ion-color-dark);\n  text-transform: capitalize;\n  min-height: calc((var(--page-margin) * 3) - var(--page-segment-indicator-height));\n}\n\nion-searchbar.friends-searchbar {\n  padding: calc(var(--page-margin) * 1.5) var(--page-margin);\n}\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3);\n}\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n\nion-item.friend-item {\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin);\n}\n\nion-item.friend-item:last-child {\n  --border-style: none;\n  --padding-bottom: 0px;\n  --inner-padding-bottom: 0px;\n}\n\nion-item.friend-item .user-details-section {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  align-items: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-job {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper {\n  font-size: 14px;\n  max-width: 10ex;\n  max-width: 10ch;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper .user-action {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kcy9mcmllbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVDQUFBO0VBQ0EsNENBQUE7RUFDQSxnREFBQTtFQUNBLG9DQUFBO0FBREo7O0FBS0U7RUFDRSw0Q0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUlJO0VBQ0UsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esd0NBQUE7RUFFQSwwQkFBQTtFQUNBLGlGQUFBO0FBSE47O0FBT0U7RUFDRSwwREFBQTtBQUpKOztBQU9FO0VBQ0UsK0JBQUE7RUFDQSwyQ0FBQTtBQUpKOztBQU9FO0VBQ0Usb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0U7RUFDRSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7QUFKSjs7QUFNSTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQUpOOztBQU9JO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7QUFOTjs7QUFRTTtFQUNFLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQU5SOztBQVNVO0VBQ0UsMkNBQUE7QUFQWjs7QUFVVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFSWjs7QUFXVTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUFUWjs7QUFjTTtFQUNFLGVBQUE7RUFLQSxlQUFBO0VBQ0EsZUFBQTtBQWhCUjs7QUFrQlE7RUFDRSxXQUFBO0FBaEJWIiwiZmlsZSI6InNyYy9hcHAvZnJpZW5kcy9mcmllbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgICAtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gICAgLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodDogMnB4O1xuICB9XG4gIFxuICAvLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbiAgLnVzZXItZnJpZW5kcy1zZWdtZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA4O1xuICBcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbWluLWhlaWdodDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLSB2YXIoLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodCkpO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLXNlYXJjaGJhci5mcmllbmRzLXNlYXJjaGJhciB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAxLjUpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxuICBcbiAgLmZyaWVuZHMtbGlzdCB7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xuICB9XG4gIFxuICAuZW1wdHktbGlzdC1tZXNzYWdlIHtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XG4gICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIGlvbi1pdGVtLmZyaWVuZC1pdGVtIHtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIFxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG4gIFxuICAgIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICAgIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIC51c2VyLWpvYiB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLnVzZXItYWN0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICBcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGFsd2F5cyBoYXZlIHNwYWNlIGZvciAxMCBjaGFyYWN0ZXJzXG4gICAgICAgIC8vIEFzIGNoICh3aWR0aCBvZiB0aGUgY2hhcmFjdGVyICcwJykgdW5pdCBpcyBub3QgMTAwJSBzdXBwb3J0ZWQsIHdlIHdpbGwgdXNlIGV4IChoZWlnaHQgb2YgdGhlICd4JyBjaGFyYWN0ZXIpIGFzIGEgZmFsbGJhY2tcbiAgICAgICAgLy8gU2VlOiBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9jc3MvdW5pdHMtdmFsdWVzL1xuICAgICAgICBtYXgtd2lkdGg6IDEwZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXJcbiAgICAgICAgbWF4LXdpZHRoOiAxMGNoOyAvLyBjaCBpcyB0aGUgb25seSBmb250IHVuaXQgYmFzZWQgb24gdGhlIHdpZHRoIG9mIGNoYXJhY3RlcnNcbiAgXG4gICAgICAgIC51c2VyLWFjdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */");

/***/ })

}]);
//# sourceMappingURL=friends-friends-module-es2015.js.map