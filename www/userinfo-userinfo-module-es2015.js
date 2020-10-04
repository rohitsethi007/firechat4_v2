(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userinfo-userinfo-module"],{

/***/ "M7cr":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userinfo/userinfo.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"user\">{{user.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"user\">\r\n    <ion-row padding> \r\n    <div class=\"user-info\">\r\n      <div class=\"user-img\">\r\n        <img src=\"{{user.img}}\">\r\n      </div>\r\n\r\n    <img src=\"{{user.img}}\" (click)=\"enlargeImage(user.img)\" onError=\"this.src='./assets/images/default-dp.png'\">\r\n    <h4 style=\"margin:0\">{{user.name}}</h4>\r\n    <p style=\"color:#aaa;margin:0\">@{{user.username}}</p>\r\n    <p style=\"color:#444\">{{user.description}}</p>\r\n    <div style=\"border-top: 1px solid #ececec; padding: 10px;\">\r\n      <!-- Show actions based on the status of the user in relation to the current logged in user. -->\r\n      <div *ngIf=\"friendRequests && friendRequests.indexOf(user.$key) > -1\">\r\n        <p class=\"info\">Sent you a friend request.</p>\r\n        <ion-button size=\"small\" (click)=\"rejectFriendRequest()\">\r\n          Decline\r\n        </ion-button>\r\n        <ion-button size=\"small\" (click)=\"acceptFriendRequest()\">\r\n          Accept\r\n        </ion-button>\r\n      </div>\r\n      <div *ngIf=\"requestsSent && requestsSent.indexOf(user.$key) > -1\">\r\n        <ion-button size=\"small\" (click)=\"cancelFriendRequest()\">Cancel\r\n          Request</ion-button>\r\n      </div>\r\n      <div *ngIf=\"canAdd()\">\r\n        <ion-button size=\"small\" (click)=\"sendFriendRequest()\">Add Friend</ion-button>\r\n      </div>\r\n      <div *ngIf=\"friends && friends.indexOf(user.$key) > -1\">\r\n        <ion-button size=\"small\" (click)=\"sendMessage()\">Start Chat</ion-button>\r\n        <ion-button size=\"small\" (click)=\"block()\">Block User</ion-button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "lgMC":
/*!*********************************************!*\
  !*** ./src/app/userinfo/userinfo.module.ts ***!
  \*********************************************/
/*! exports provided: UserinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserinfoPageModule", function() { return UserinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _userinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userinfo.page */ "tHi0");







const routes = [
    {
        path: '',
        component: _userinfo_page__WEBPACK_IMPORTED_MODULE_6__["UserinfoPage"]
    }
];
let UserinfoPageModule = class UserinfoPageModule {
};
UserinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_userinfo_page__WEBPACK_IMPORTED_MODULE_6__["UserinfoPage"]]
    })
], UserinfoPageModule);



/***/ }),

/***/ "sncI":
/*!*********************************************!*\
  !*** ./src/app/userinfo/userinfo.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\n.user-info {\n  margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmluZm8vdXNlcmluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUNBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0ksbUZBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJpbmZvL3VzZXJpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcclxuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XHJcbiAgfVxyXG5cclxuLnVzZXItaW5mbyB7XHJcbiAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC51c2VyLWltZyB7XHJcbiAgXHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "tHi0":
/*!*******************************************!*\
  !*** ./src/app/userinfo/userinfo.page.ts ***!
  \*******************************************/
/*! exports provided: UserinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserinfoPage", function() { return UserinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_userinfo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./userinfo.page.html */ "M7cr");
/* harmony import */ var _userinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userinfo.page.scss */ "sncI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);










let UserinfoPage = class UserinfoPage {
    // UserInfoPage
    // This is the page where the user can view user information, and do appropriate actions based on their relation to the current logged in user.
    constructor(
    // public navCtrl: NavController,
    // public navParams: NavParams,
    router, modalCtrl, dataProvider, loadingProvider, alertCtrl, firebaseProvider, route) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider = firebaseProvider;
        this.route = route;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // this.userId = this.navParams.get('userId');
        this.userId = this.route.snapshot.params.id;
        console.log(this.userId);
        this.loadingProvider.show();
        // Get user info.
        this.dataProvider.getUser(this.userId).snapshotChanges().subscribe((user) => {
            this.user = Object.assign({ $key: user.key }, user.payload.data());
            console.log(this.user);
            this.loadingProvider.hide();
        });
        // Get friends of current logged in user.
        this.dataProvider.getUser(firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid).snapshotChanges().subscribe((user) => {
            if (user.payload.data() != null)
                this.friends = user.payload.data().friends;
        });
        // Get requests of current logged in user.
        this.dataProvider.getRequests(firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid).snapshotChanges().subscribe(((requests) => {
            console.log(requests.payload.data());
            if (requests.payload.data() != null) {
                this.friendRequests = requests.payload.data().friendRequests;
                this.requestsSent = requests.payload.data().requestsSent;
            }
        }));
    }
    block() {
        this.loadingProvider.show();
        console.log("block function");
        firebase__WEBPACK_IMPORTED_MODULE_9__["database"]().ref('accounts/' + firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid + '/conversations/' + this.userId).update({
            blocked: true
        }).then(() => {
            this.loadingProvider.hide();
            this.loadingProvider.showToast("User Blocked");
            this.router.navigateByUrl('/');
        }).catch(() => {
            this.loadingProvider.hide();
            this.loadingProvider.showToast("Something went wrong");
        });
    }
    // Enlarge user's profile image.
    enlargeImage(img) {
        // let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
        // imageModal.present();
    }
    // Accept friend request.
    acceptFriendRequest() {
        this.alert = this.alertCtrl.create({
            header: 'Confirm Friend Request',
            message: 'Do you want to accept <b>' + this.user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Accept',
                    handler: () => {
                        this.firebaseProvider.acceptFriendRequest(this.userId);
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Deny friend request.
    rejectFriendRequest() {
        this.alert = this.alertCtrl.create({
            header: 'Reject Friend Request',
            message: 'Do you want to reject <b>' + this.user.name + '</b> as your friend?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Reject',
                    handler: () => {
                        this.firebaseProvider.deleteFriendRequest(this.userId);
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Cancel friend request sent.
    cancelFriendRequest() {
        this.alert = this.alertCtrl.create({
            header: 'Friend Request Pending',
            message: 'Do you want to delete your friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.firebaseProvider.cancelFriendRequest(this.userId);
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Send friend request.
    sendFriendRequest() {
        this.alert = this.alertCtrl.create({
            header: 'Send Friend Request',
            message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Send',
                    handler: () => {
                        this.firebaseProvider.sendFriendRequest(this.userId);
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Open chat with this user.
    sendMessage() {
        this.router.navigateByUrl('/message/' + this.userId);
        // this.navCtrl.push(MessagePage, { userId: this.userId });
    }
    // Check if user can be added, meaning user is not yet friends nor has sent/received any friend requests.
    canAdd() {
        if (this.friendRequests) {
            if (this.friendRequests.indexOf(this.userId) > -1) {
                return false;
            }
        }
        if (this.requestsSent) {
            if (this.requestsSent.indexOf(this.userId) > -1) {
                return false;
            }
        }
        if (this.friends) {
            if (this.friends.indexOf(this.userId) > -1) {
                return false;
            }
        }
        return true;
    }
};
UserinfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
UserinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-userinfo',
        template: _raw_loader_userinfo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_userinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
], UserinfoPage);



/***/ })

}]);
//# sourceMappingURL=userinfo-userinfo-module-es2015.js.map