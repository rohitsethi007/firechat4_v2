"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_userinfo_userinfo_module_ts"],{

/***/ 66037:
/*!*********************************************!*\
  !*** ./src/app/userinfo/userinfo.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserinfoPageModule": function() { return /* binding */ UserinfoPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _userinfo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userinfo.page */ 23742);







const routes = [
    {
        path: '',
        component: _userinfo_page__WEBPACK_IMPORTED_MODULE_0__.UserinfoPage
    }
];
let UserinfoPageModule = class UserinfoPageModule {
};
UserinfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_userinfo_page__WEBPACK_IMPORTED_MODULE_0__.UserinfoPage]
    })
], UserinfoPageModule);



/***/ }),

/***/ 23742:
/*!*******************************************!*\
  !*** ./src/app/userinfo/userinfo.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserinfoPage": function() { return /* binding */ UserinfoPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_userinfo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./userinfo.page.html */ 3097);
/* harmony import */ var _userinfo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userinfo.page.scss */ 82192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ 19446);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ 713);










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
        this.dataProvider.getUser(firebase__WEBPACK_IMPORTED_MODULE_5__.default.auth().currentUser.uid).snapshotChanges().subscribe((user) => {
            if (user.payload.data() != null)
                this.friends = user.payload.data().friends;
        });
        // Get requests of current logged in user.
        this.dataProvider.getRequests(firebase__WEBPACK_IMPORTED_MODULE_5__.default.auth().currentUser.uid).snapshotChanges().subscribe(((requests) => {
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
        firebase__WEBPACK_IMPORTED_MODULE_5__.default.database().ref('accounts/' + firebase__WEBPACK_IMPORTED_MODULE_5__.default.auth().currentUser.uid + '/conversations/' + this.userId).update({
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
UserinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-userinfo',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_userinfo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_userinfo_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController,
        _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService,
        _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController,
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseService,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute])
], UserinfoPage);



/***/ }),

/***/ 3097:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/userinfo/userinfo.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"user\">{{user.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"user\">\n    <ion-row padding> \n    <div class=\"user-info\">\n      <div class=\"user-img\">\n        <img src=\"{{user.img}}\">\n      </div>\n\n    <img src=\"{{user.img}}\" (click)=\"enlargeImage(user.img)\" onError=\"this.src='./assets/images/default-dp.png'\">\n    <h4 style=\"margin:0\">{{user.name}}</h4>\n    <p style=\"color:#aaa;margin:0\">@{{user.username}}</p>\n    <p style=\"color:#444\">{{user.description}}</p>\n    <div style=\"border-top: 1px solid #ececec; padding: 10px;\">\n      <!-- Show actions based on the status of the user in relation to the current logged in user. -->\n      <div *ngIf=\"friendRequests && friendRequests.indexOf(user.$key) > -1\">\n        <p class=\"info\">Sent you a friend request.</p>\n        <ion-button size=\"small\" (click)=\"rejectFriendRequest()\">\n          Decline\n        </ion-button>\n        <ion-button size=\"small\" (click)=\"acceptFriendRequest()\">\n          Accept\n        </ion-button>\n      </div>\n      <div *ngIf=\"requestsSent && requestsSent.indexOf(user.$key) > -1\">\n        <ion-button size=\"small\" (click)=\"cancelFriendRequest()\">Cancel\n          Request</ion-button>\n      </div>\n      <div *ngIf=\"canAdd()\">\n        <ion-button size=\"small\" (click)=\"sendFriendRequest()\">Add Friend</ion-button>\n      </div>\n      <div *ngIf=\"friends && friends.indexOf(user.$key) > -1\">\n        <ion-button size=\"small\" (click)=\"sendMessage()\">Start Chat</ion-button>\n        <ion-button size=\"small\" (click)=\"block()\">Block User</ion-button>\n      </div>\n    </div>\n\n\n  </div>\n  </ion-row>\n  </div>\n</ion-content>");

/***/ }),

/***/ 82192:
/*!*********************************************!*\
  !*** ./src/app/userinfo/userinfo.page.scss ***!
  \*********************************************/
/***/ (function(module) {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\n.user-info {\n  margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLG1GQUFBO0FBQ0oiLCJmaWxlIjoidXNlcmluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICB9XG5cbi51c2VyLWluZm8ge1xuICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC51c2VyLWltZyB7XG4gIFxuICAgIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_userinfo_userinfo_module_ts-es2015.js.map