(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~forgot-forgot-module~login-login-module~profile-profile-module~register-register-module"],{

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");













let LoginService = class LoginService {
    constructor(afAuth, afdb, dataService, loadingProvider, platform, gplus, facebook, router, storage) {
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.dataService = dataService;
        this.loadingProvider = loadingProvider;
        this.platform = platform;
        this.gplus = gplus;
        this.facebook = facebook;
        this.router = router;
        this.storage = storage;
    }
    login(email, password) {
        this.loadingProvider.show();
        this.afAuth.auth.signInWithEmailAndPassword(email, password).then((res) => {
            console.log(res);
            console.log("******* " + this.afAuth.user + " *********");
            //this.dataService.getUser(this.afAuth.user.)
            this.loadingProvider.hide();
        }).catch(err => {
            console.log(err);
            this.loadingProvider.hide();
            this.loadingProvider.showToast(err.message);
        });
    }
    register(name, username, email, password, img) {
        this.loadingProvider.show();
        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
            let user = this.afAuth.auth.currentUser;
            this.loadingProvider.hide();
            this.createNewUser(user.uid, name, username, user.email, "I am available", "Firebase", img);
        }).catch(err => {
            console.log(err);
            this.loadingProvider.hide();
            this.loadingProvider.showToast(err.message);
        });
    }
    reset(email) {
        console.log(email);
        this.loadingProvider.show();
        this.afAuth.auth.sendPasswordResetEmail(email).then(() => {
            this.loadingProvider.hide();
            this.loadingProvider.showToast("Please Check your inbox");
        }).catch(err => {
            this.loadingProvider.hide();
            this.loadingProvider.showToast(err.message);
        });
    }
    fbLogin() {
        if (this.platform.is('desktop')) {
            this.loadingProvider.show();
            this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider()).then((res) => {
                this.loadingProvider.hide();
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider.credential(res.credential.accessToken);
                this.afAuth.auth.signInWithCredential(credential).then(() => {
                    if (res.additionalUserInfo.isNewUser) {
                        let uid = this.afAuth.auth.currentUser.uid;
                        let userInfo = res.additionalUserInfo.profile;
                        this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Facebook', userInfo.picture);
                    }
                    else {
                        this.router.navigateByUrl('tabs');
                    }
                }).catch(err => console.log(err));
            }).catch(err => {
                console.log(err);
                this.loadingProvider.hide();
            });
        }
        else {
            this.facebook.login(['public_profile', 'email']).then(res => {
                console.log(res);
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                this.loadingProvider.show();
                this.afAuth.auth.signInWithCredential(credential).then((res) => {
                    if (res.additionalUserInfo.isNewUser) {
                        this.facebook.api("me/?fields=id,email,first_name,picture,gender", ["public_profile", "email"])
                            .then(data => {
                            console.log(data);
                            let uid = this.afAuth.auth.currentUser.uid;
                            this.createNewUser(uid, data.first_name, uid, data.email, 'I am available', 'Facebook', data.picture.data.url);
                        })
                            .catch(err => {
                            console.log(err);
                            this.loadingProvider.hide();
                        });
                    }
                    else {
                        this.router.navigateByUrl('tabs');
                    }
                })
                    .catch((error) => {
                    this.loadingProvider.hide();
                });
            }).catch(err => console.log(err));
        }
    }
    gLogin() {
        if (this.platform.is('desktop')) {
            this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider()).then((res) => {
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider.credential(res.credential.idToken, res.credential.accessToken);
                this.afAuth.auth.signInWithCredential(credential).then(() => {
                    if (res.additionalUserInfo.isNewUser) {
                        let uid = this.afAuth.auth.currentUser.uid;
                        let userInfo = res.additionalUserInfo.profile;
                        this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
                    }
                    else {
                        this.router.navigateByUrl('tabs');
                    }
                }).catch((err) => {
                    console.log("Err! signInWithCredential" + err);
                });
            }).catch(err => {
                console.log('Err! signInWithCredential' + err);
            });
        }
        else {
            this.gplus.login({
                webClientId: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].googleClientId
            }).then((result) => {
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider.credential(result['token'], null);
                this.afAuth.auth.signInWithCredential(credential).then((res) => {
                    if (res.additionalUserInfo.isNewUser) {
                        let uid = this.afAuth.auth.currentUser.uid;
                        let userInfo = res.additionalUserInfo.profile;
                        this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
                    }
                    else {
                        this.router.navigateByUrl('tabs');
                    }
                }).catch((err) => {
                    console.log("Err! signInWithCredential" + err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
    }
    createNewUser(userId, name, username, email, description = "I'm available", provider, img = "./assets/images/default-dp.png") {
        let dateCreated = new Date();
        this.afdb.object('/accounts/' + userId).update({
            dateCreated, username, name, userId, email, description, provider, img
        }).then(() => {
            this.router.navigateByUrl('tabs');
        });
    }
    logout() {
        this.afAuth.auth.signOut().then(() => this.router.navigateByUrl('/login', { replaceUrl: true }));
        this.storage.clear();
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
        _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"]])
], LoginService);



/***/ }),

/***/ "./src/environments/validator.ts":
/*!***************************************!*\
  !*** ./src/environments/validator.ts ***!
  \***************************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


var Validator;
(function (Validator) {
    Validator.emailValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
        ]
    ];
    Validator.passwordValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
        ]];
    Validator.nameValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]];
    Validator.usernameValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
        ]];
    Validator.bioValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]];
    Validator.groupNameValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]];
    Validator.groupDescriptionValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]];
    Validator.groupTagsValidator = ['', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]];
    Validator.errorMessages = {
        email: [
            { type: 'required', message: 'Email is required' },
            { type: 'pattern', message: 'Email looks like invalid' },
        ],
        password: [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Password must be 6 char' },
        ],
        name: [
            { type: 'required', message: 'Name is required' },
        ],
        username: [
            { type: 'required', message: 'Username is required' },
            { type: 'minlength', message: 'Username must be 5 char' },
        ],
        bio: [
            { type: 'required', message: 'Bio is required' },
        ],
        groupName: [
            { type: 'required', message: 'Group Name is required' },
        ],
        groupDescription: [
            { type: 'required', message: 'Group Description is required' },
        ],
    };
    // Poll Form Validators
    Validator.pollNameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]];
    Validator.pollDescriptionValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]];
    Validator.pollOption1Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]];
    Validator.pollOption2Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]];
})(Validator || (Validator = {}));


/***/ })

}]);
//# sourceMappingURL=default~forgot-forgot-module~login-login-module~profile-profile-module~register-register-module-es2015.js.map