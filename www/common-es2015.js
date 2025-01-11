(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "6nsN":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "t6oF");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading.service */ "7ch9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "GGTb");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");













let LoginService = class LoginService {
    constructor(afAuth, firestore, dataService, loadingProvider, platform, gplus, facebook, router) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.dataService = dataService;
        this.loadingProvider = loadingProvider;
        this.platform = platform;
        this.gplus = gplus;
        this.facebook = facebook;
        this.router = router;
    }
    login(email, password) {
        this.loadingProvider.show();
        this.afAuth.signInWithEmailAndPassword(email, password).then((res) => {
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
        this.afAuth.createUserWithEmailAndPassword(email, password).then((res) => {
            let user = this.afAuth.currentUser;
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
        this.afAuth.sendPasswordResetEmail(email).then(() => {
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
            this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.FacebookAuthProvider()).then((res) => {
                this.loadingProvider.hide();
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.FacebookAuthProvider.credential(res.credential.accessToken);
                this.afAuth.signInWithCredential(credential).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (res.additionalUserInfo.isNewUser) {
                        let uid = yield this.afAuth.currentUser.then((data) => { return data.uid; });
                        let userInfo = res.additionalUserInfo.profile;
                        this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Facebook', userInfo.picture);
                    }
                    else {
                        this.router.navigateByUrl('tabs');
                    }
                })).catch(err => console.log(err));
            }).catch(err => {
                console.log(err);
                this.loadingProvider.hide();
            });
        }
        else {
            this.facebook.login(['public_profile', 'email']).then(res => {
                console.log(res);
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                this.loadingProvider.show();
                this.afAuth.signInWithCredential(credential).then((res) => {
                    if (res.additionalUserInfo.isNewUser) {
                        this.facebook.api("me/?fields=id,email,first_name,picture,gender", ["public_profile", "email"])
                            .then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log(data);
                            let uid = yield this.afAuth.currentUser.then((data) => { return data.uid; });
                            this.createNewUser(uid, data.first_name, uid, data.email, 'I am available', 'Facebook', data.picture.data.url);
                        }))
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
            this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.GoogleAuthProvider()).then((res) => {
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.GoogleAuthProvider.credential(res.credential.idToken, res.credential.accessToken);
                this.afAuth.signInWithCredential(credential).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (res.additionalUserInfo.isNewUser) {
                        let uid = yield this.afAuth.currentUser.then((data) => { return data.uid; });
                        let userInfo = res.additionalUserInfo.profile;
                        this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
                    }
                    else {
                        this.router.navigateByUrl('tabs');
                    }
                })).catch((err) => {
                    console.log("Err! signInWithCredential" + err);
                });
            }).catch(err => {
                console.log('Err! signInWithCredential' + err);
            });
        }
        else {
            this.gplus.login({
                webClientId: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].googleClientId
            }).then((result) => {
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.GoogleAuthProvider.credential(result['token'], null);
                this.afAuth.signInWithCredential(credential).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (res.additionalUserInfo.isNewUser) {
                        let uid = yield this.afAuth.currentUser.then((data) => { return data.uid; });
                        let userInfo = res.additionalUserInfo.profile;
                        this.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
                    }
                    else {
                        this.router.navigateByUrl('tabs');
                    }
                })).catch((err) => {
                    console.log("Err! signInWithCredential" + err);
                });
            }).catch((err) => {
                console.log(err);
            });
        }
    }
    createNewUser(userId, name, username, email, description = "I'm available", provider, img = "./assets/images/default-dp.png") {
        let dateCreated = new Date();
        this.firestore.collection('accounts').doc(userId).set({
            dateCreated, username, name, userId, email, description, provider, img
        }).then(() => {
            this.router.navigateByUrl('tabs');
        });
    }
    logout() {
        this.afAuth.signOut().then(() => this.router.navigateByUrl('/login', { replaceUrl: true }));
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__["Facebook"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__["Facebook"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
], LoginService);



/***/ }),

/***/ "Z2Br":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.service */ "7ch9");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "EnSQ");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");






let FirebaseService = class FirebaseService {
    constructor(firestore, loadingProvider, afAuth, dataProvider) {
        this.firestore = firestore;
        this.loadingProvider = loadingProvider;
        this.afAuth = afAuth;
        this.dataProvider = dataProvider;
    }
    // Send friend request to userId.
    sendFriendRequest(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedInUserId = yield this.afAuth.currentUser.then((data) => { return data.uid; });
            this.loadingProvider.show();
            let requestsSent;
            // Use take(1) so that subscription will only trigger once.
            this.dataProvider.getRequests(loggedInUserId).get().subscribe((requests) => {
                if (requests.data() != null
                    && requests.data().requestsSent != null) {
                    requestsSent = requests.data().requestsSent;
                }
                if (requestsSent == null || requestsSent === undefined) {
                    requestsSent = [userId];
                }
                else {
                    if (requestsSent.indexOf(userId) === -1) {
                        requestsSent.push(userId);
                    }
                }
                // Add requestsSent information.
                this.firestore.collection('requests').doc(loggedInUserId).set({
                    requestsSent
                }).then((success) => {
                    let friendRequests;
                    // tslint:disable-next-line: no-shadowed-variable
                    this.dataProvider.getRequests(userId).get().subscribe((requests) => {
                        if (requests.data() != null
                            && requests.data().friendRequests != null) {
                            friendRequests = requests.data().friendRequests;
                        }
                        if (friendRequests == null) {
                            friendRequests = [loggedInUserId];
                        }
                        else {
                            if (friendRequests.indexOf(userId) === -1) {
                                friendRequests.push(loggedInUserId);
                            }
                        }
                        // Add friendRequest information.
                        this.firestore.collection('requests').doc(userId).set({
                            friendRequests
                        }).then((succ) => {
                            this.loadingProvider.hide();
                            this.loadingProvider.showToast('Friend Request Sent');
                        }).catch((error) => {
                            this.loadingProvider.hide();
                        });
                    });
                }).catch((error) => {
                    console.log('error', error);
                    this.loadingProvider.hide();
                });
            });
        });
    }
    // Cancel friend request sent to userId.
    cancelFriendRequest(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedInUserId = yield this.afAuth.currentUser.then((data) => { return data.uid; });
            this.loadingProvider.show();
            let requestsSent = [];
            this.dataProvider.getRequests(loggedInUserId).get().subscribe((requests) => {
                requestsSent = requests.data().requestsSent;
                requestsSent.splice(requestsSent.indexOf(userId), 1);
                // Update requestSent information.
                this.firestore.collection('requests').doc(loggedInUserId).set({
                    requestsSent
                }).then((success) => {
                    let friendRequests;
                    this.dataProvider.getRequests(userId).get().subscribe((req) => {
                        friendRequests = req.data().friendRequests;
                        console.log(friendRequests);
                        friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1);
                        // Update friendRequests information.
                        this.firestore.collection('requests').doc(userId).set({
                            friendRequests
                        }).then((succ) => {
                            console.log(succ);
                            this.loadingProvider.hide();
                            this.loadingProvider.showToast('Removed Friend Request');
                        }).catch((error) => {
                            console.log(error);
                            this.loadingProvider.hide();
                        });
                    });
                }).catch((error) => {
                    console.log(error);
                    this.loadingProvider.hide();
                });
            });
        });
    }
    // Delete friend request.
    deleteFriendRequest(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedInUserId = yield this.afAuth.currentUser.then((data) => { return data.uid; });
            this.loadingProvider.show();
            let friendRequests = [];
            this.dataProvider.getRequests(loggedInUserId).get().subscribe((requests) => {
                friendRequests = requests.data().friendRequests;
                friendRequests = friendRequests.filter(u => u !== userId);
                // Update friendRequests information.
                this.firestore.collection('requests').doc(loggedInUserId).set({
                    friendRequests
                }).then((success) => {
                    let requestsSent;
                    this.dataProvider.getRequests(userId).get().subscribe((req) => {
                        requestsSent = req.data().requestsSent;
                        requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1);
                        console.log('requestsSent:', requestsSent, loggedInUserId, requestsSent.indexOf(userId), 1);
                        // Update requestsSent information.
                        this.firestore.collection('requests').doc(userId).set({
                            requestsSent
                        }).then((succ) => {
                            console.log(succ);
                            this.loadingProvider.hide();
                        }).catch((error) => {
                            console.log(error);
                            this.loadingProvider.hide();
                        });
                    });
                }).catch((err) => {
                    console.log(err);
                    this.loadingProvider.hide();
                });
            });
        });
    }
    // Accept friend request.
    acceptFriendRequest(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedInUserId = yield this.afAuth.currentUser.then((data) => { return data.uid; });
            // Delete friend request.
            this.deleteFriendRequest(userId);
            this.loadingProvider.show();
            this.dataProvider.getUser(loggedInUserId).get().subscribe((account) => {
                let friends = account.data().friends;
                if (!friends) {
                    friends = [userId];
                }
                else {
                    friends.push(userId);
                }
                // Add both users as friends.
                this.dataProvider.getUser(loggedInUserId).update({
                    friends
                }).then((success) => {
                    this.dataProvider.getUser(userId).get().subscribe((acc) => {
                        let friends = acc.data().friends;
                        if (!friends) {
                            friends = [loggedInUserId];
                        }
                        else {
                            friends.push(loggedInUserId);
                        }
                        this.dataProvider.getUser(userId).update({
                            friends
                        }).then((succ) => {
                            this.loadingProvider.hide();
                        }).catch((error) => {
                            this.loadingProvider.hide();
                        });
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                });
            });
        });
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], FirebaseService);



/***/ }),

/***/ "Zcj0":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "KF81");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "spDm":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "W6o/");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map