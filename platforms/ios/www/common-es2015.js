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

/***/ "Dl6n":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
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
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
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
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
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
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "NzdG");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "SPri");
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

/***/ "TMBv":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
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

/***/ "Uch9":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3528f139.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-80bde1aa.js */ "54nT");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "kBU6");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-1850e475-js */ "ios-transition-1850e475-js").then(__webpack_require__.bind(null, /*! ./ios.transition-1850e475.js */ "QtHV"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-083fcf52-js */ "md-transition-083fcf52-js").then(__webpack_require__.bind(null, /*! ./md.transition-083fcf52.js */ "cmQl"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    const trans = animationBuilder(opts.baseEl, opts);
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => resolve(currentStep === 1));
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "YtD4":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




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

/***/ "m9yc":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
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
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
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




/***/ }),

/***/ "opz7":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map