(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Profile</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"logout()\">\r\n        Logout\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"user\">\r\n    <div class=\"center ion-padding\">\r\n      <img src=\"{{user.img}}\" style=\"border-radius: 100%;height: 80px;width:80px\" tappable (click)=\"setPhoto()\"\r\n        onError=\"this.src='http://placehold.it/80x80'\">\r\n    </div>\r\n    <form [formGroup]=\"myForm\">\r\n      <ion-list lines=\"none\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Fullname</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"name\" [(ngModel)]=\"user.name\"></ion-input>\r\n          <div *ngFor=\"let validation of errorMessages.name\">\r\n            <p class=\"error\"\r\n              *ngIf=\"myForm.get('name').hasError(validation.type) && (myForm.get('name').dirty || myForm.get('name').touched || submitAttempt) \">\r\n              {{validation.message}}\r\n            </p>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Username</ion-label>\r\n          <ion-input formControlName=\"username\" type=\"text\" [(ngModel)]=\"user.username\"></ion-input>\r\n          <div *ngFor=\"let validation of errorMessages.username\">\r\n            <p class=\"error\"\r\n              *ngIf=\"myForm.get('username').hasError(validation.type) && (myForm.get('username').dirty || myForm.get('username').touched || submitAttempt) \">\r\n              {{validation.message}}\r\n            </p>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Bio</ion-label>\r\n          <ion-textarea formControlName=\"bio\" [(ngModel)]=\"user.description\"></ion-textarea>\r\n          <div *ngFor=\"let validation of errorMessages.bio\">\r\n            <p class=\"error\"\r\n              *ngIf=\"myForm.get('bio').hasError(validation.type) && (myForm.get('bio').dirty || myForm.get('bio').touched || submitAttempt) \">\r\n              {{validation.message}}\r\n            </p>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Email</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"email\" [(ngModel)]=\"user.email\" disabled></ion-input>\r\n        </ion-item>\r\n        <div class=\"ion-padding\">\r\n          <ion-button expand=\"block\" (click)=\"save()\">Save Changes</ion-button>\r\n        </div>\r\n      </ion-list>\r\n    </form>\r\n    <ion-item-divider>Other Settings</ion-item-divider>\r\n    <ion-list lines=\"none\">\r\n\r\n      <ion-item>\r\n        <ion-label>Enable Public Visibility</ion-label>\r\n        <ion-toggle slot=\"end\" [(ngModel)]=\"user.publicVisibility\" (ionChange)=\"changeVisibility()\"></ion-toggle>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Show Online</ion-label>\r\n        <ion-toggle slot=\"end\" [(ngModel)]=\"user.showOnline\" (ionChange)=\"changeStatus()\"></ion-toggle>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-text>\r\n            <h3>Enable Notification</h3>\r\n          </ion-text>\r\n          <ion-text *ngIf=\"isBrowser\">\r\n            <p>Push Notification only works on browser</p>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-toggle slot=\"end\" [(ngModel)]=\"user.isPushEnabled\" [disabled]=\"isBrowser\"\r\n          (ionChange)=\"changeNotification()\">\r\n        </ion-toggle>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/blockedlist\">\r\n        <ion-label>Blocked List</ion-label>\r\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item tappable (click)=\"setPassword()\" *ngIf=\"user && user.provider == 'Email'\">\r\n        Update Password\r\n      </ion-item>\r\n      <ion-item tappable (click)=\"logout()\">Logout</ion-item>\r\n      <ion-item tappable (click)=\"deleteAccount()\" style=\"color:#F44336\">\r\n        Delete Account\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_environments_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/validator */ "./src/environments/validator.ts");













let ProfilePage = class ProfilePage {
    constructor(loginService, dataProvider, loadingProvider, afdb, afAuth, alertCtrl, imageProvider, camera, fcm, platform, formBuilder) {
        this.loginService = loginService;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.camera = camera;
        this.fcm = fcm;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.showOnline = false;
        this.isPushEnabled = false;
        this.isBrowser = true;
        this.submitAttempt = false;
        this.errorMessages = [];
        this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_12__["Validator"].errorMessages;
        this.myForm = this.formBuilder.group({
            name: src_environments_validator__WEBPACK_IMPORTED_MODULE_12__["Validator"].nameValidator,
            username: src_environments_validator__WEBPACK_IMPORTED_MODULE_12__["Validator"].usernameValidator,
            email: src_environments_validator__WEBPACK_IMPORTED_MODULE_12__["Validator"].emailValidator,
            bio: src_environments_validator__WEBPACK_IMPORTED_MODULE_12__["Validator"].bioValidator
        });
    }
    ngOnInit() {
        this.isBrowser = this.platform.is('desktop');
    }
    ionViewDidEnter() {
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((user) => {
            this.loadingProvider.hide();
            if (user != null)
                this.user = user.payload.val();
            console.log(this.user);
        });
    }
    changeStatus() {
        this.afdb.object('accounts/' + this.user.userId).update({ showOnline: this.user.showOnline });
    }
    changeVisibility() {
        this.afdb.object('accounts/' + this.user.userId).update({ publicVisibility: this.user.publicVisibility });
    }
    save() {
        this.submitAttempt = true;
        if (this.myForm.valid) {
            this.loadingProvider.show();
            this.afdb.object('accounts/' + this.user.userId).update(this.user).then(() => {
                this.loadingProvider.hide();
                this.loadingProvider.showToast("Updated Successfully");
            }).catch(err => {
                this.loadingProvider.showToast("Something went wrong");
                this.loadingProvider.hide();
            });
        }
    }
    changeNotification() {
        if (this.platform.is('desktop')) {
            this.user.isPushEnabled = false;
            this.loadingProvider.showToast("Notification only working on mobile device");
        }
        else {
            console.log(this.user.isPushEnabled);
            if (this.user.isPushEnabled == true) {
                //Registering for push notification
                this.fcm.hasPermission().then(hasPermission => {
                    if (!hasPermission) {
                        this.fcm.grantPermission().then(data => console.log(data));
                    }
                    else {
                        this.fcm.getToken().then(token => {
                            console.log(token);
                            this.afdb.object('/accounts/' + this.afAuth.auth.currentUser.uid).update({ isPushEnabled: true, pushToken: token });
                            this.user.isPushEnabled = true;
                        }).catch(err => {
                            console.log(err);
                        });
                        this.fcm.onTokenRefresh().subscribe(token => {
                            console.log(token);
                            this.afdb.object('/accounts/' + this.afAuth.auth.currentUser.uid).update({ isPushEnabled: true, pushToken: token });
                        });
                    }
                });
                this.fcm.onMessageReceived().subscribe(data => {
                    console.log(data);
                });
            }
            else {
                this.user.isPushEnabled == false;
                this.afdb.object('/accounts/' + this.afAuth.auth.currentUser.uid).update({ isPushEnabled: false, pushToken: '' });
            }
        }
    }
    setPhoto() {
        this.alertCtrl.create({
            header: 'Set Profile Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: () => {
                        // Call imageProvider to process, upload, and update user photo.
                        this.imageProvider.setProfilePhoto(this.user, this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).then(r => r.present());
    }
    setPassword() {
        this.afAuth.auth.sendPasswordResetEmail(this.afAuth.auth.currentUser.email)
            .then(res => {
            this.loadingProvider.showToast("Please Check your inbox");
        }).catch(err => {
            this.loadingProvider.showToast(err.message);
        });
    }
    // Delete the user account. After deleting the Firebase user, the userData along with their profile pic uploaded on the storage will be deleted as well.
    // If you added some other info or traces for the account, make sure to account for them when deleting the account.
    deleteAccount() {
        this.alertCtrl.create({
            header: 'Confirm Delete',
            message: 'Are you sure you want to delete your account? This cannot be undone.',
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Delete',
                    handler: data => {
                        this.loadingProvider.show();
                        // Delete Firebase user
                        this.afAuth.auth.currentUser.delete()
                            .then((success) => {
                            // Delete profilePic of user on Firebase storage
                            this.imageProvider.deleteUserImageFile(this.user);
                            // Delete user data on Database
                            this.afdb.object('/accounts/' + this.user.userId).remove().then(() => {
                                this.loadingProvider.hide();
                                this.loadingProvider.showToast("Your Account Deleted Successfully");
                                this.loginService.logout();
                            });
                        })
                            .catch((error) => {
                            this.loadingProvider.hide();
                            this.loadingProvider.showToast("Something went wrong");
                        });
                    }
                }
            ]
        }).then(r => r.present());
    }
    logout() {
        this.loginService.logout();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseX"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseX"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map