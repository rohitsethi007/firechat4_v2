(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_intro_intro_module_ts"],{

/***/ 60858:
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntroPageRoutingModule: () => (/* binding */ IntroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page */ 26956);




const routes = [{
  path: '',
  component: _intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage
}];
let IntroPageRoutingModule = class IntroPageRoutingModule {};
IntroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], IntroPageRoutingModule);


/***/ }),

/***/ 76291:
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntroPageModule: () => (/* binding */ IntroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-routing.module */ 60858);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page */ 26956);







let IntroPageModule = class IntroPageModule {};
IntroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroPageRoutingModule],
  declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_1__.IntroPage]
})], IntroPageModule);


/***/ }),

/***/ 26956:
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntroPage: () => (/* binding */ IntroPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _intro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.html?ngResource */ 91600);
/* harmony import */ var _intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro.page.scss?ngResource */ 20820);
/* harmony import */ var _intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 60850);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/app */ 3602);
/* harmony import */ var _components_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/phone-auth/phone-auth.component */ 93933);




// src/app/intro/intro.page.ts








let IntroPage = class IntroPage {
  constructor(router, storage, afAuth, firestore, animationCtrl, modalCtrl) {
    this.router = router;
    this.storage = storage;
    this.afAuth = afAuth;
    this.firestore = firestore;
    this.animationCtrl = animationCtrl;
    this.modalCtrl = modalCtrl;
    this.currentSlide = 0;
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      allowTouchMove: false
    };
    this.categories = [{
      id: 1,
      name: 'Technology',
      icon: 'hardware-chip-outline'
    }, {
      id: 2,
      name: 'Sports',
      icon: 'football-outline'
    }, {
      id: 3,
      name: 'Music',
      icon: 'musical-notes-outline'
    }, {
      id: 4,
      name: 'Art',
      icon: 'color-palette-outline'
    }
    // Add more categories
    ];
    this.selectedCategories = [];
    this.loading = false;
  }
  // Handle successful authentication
  onAuthSuccess() {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Move to categories slide
      _this.currentSlide = 1;
      yield _this.animateSlide('forward');
    })();
  }
  next() {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.currentSlide < 2) {
        _this2.currentSlide++;
        yield _this2.animateSlide('forward');
      } else {
        yield _this2.finishIntro();
      }
    })();
  }
  prev() {
    var _this3 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.currentSlide > 0) {
        _this3.currentSlide--;
        yield _this3.animateSlide('backward');
      }
    })();
  }
  animateSlide(direction) {
    var _this4 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const current = document.querySelector(`.slide-${_this4.currentSlide}`);
      const prev = document.querySelector(`.slide-${_this4.currentSlide - 1}`);
      const next = document.querySelector(`.slide-${_this4.currentSlide + 1}`);
      if (direction === 'forward' && current && next) {
        const animation = _this4.animationCtrl.create().addElement(current).duration(300).fromTo('transform', 'translateX(100%)', 'translateX(0)');
        yield animation.play();
      } else if (direction === 'backward' && current && prev) {
        const animation = _this4.animationCtrl.create().addElement(current).duration(300).fromTo('transform', 'translateX(-100%)', 'translateX(0)');
        yield animation.play();
      }
    })();
  }
  toggleCategory(categoryId) {
    const index = this.selectedCategories.indexOf(categoryId);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(categoryId);
    }
  }
  signInWithEmail() {
    var _this5 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Navigate to email signup page
      _this5.router.navigate(['/register']);
    })();
  }
  signInWithFacebook() {
    var _this6 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.FacebookAuthProvider();
        const result = yield _this6.afAuth.signInWithPopup(provider);
        if (result.user) {
          _this6.next();
        }
      } catch (error) {
        console.error('Facebook sign in error:', error);
      }
    })();
  }
  signInWithGoogle() {
    var _this7 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider();
        const result = yield _this7.afAuth.signInWithPopup(provider);
        if (result.user) {
          _this7.next();
        }
      } catch (error) {
        console.error('Google sign in error:', error);
      }
    })();
  }
  signInWithApple() {
    var _this8 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.OAuthProvider('apple.com');
        const result = yield _this8.afAuth.signInWithPopup(provider);
        if (result.user) {
          _this8.next();
        }
      } catch (error) {
        console.error('Apple sign in error:', error);
      }
    })();
  }
  signInWithPhone() {
    var _this9 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this9.modalCtrl.create({
        component: _components_phone_auth_phone_auth_component__WEBPACK_IMPORTED_MODULE_4__.PhoneAuthComponent,
        cssClass: 'phone-auth-modal'
      });
      yield modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
      if (role === 'success') {
        _this9.next(); // Move to next slide after successful phone auth
      }
    })();
  }
  updateUserCategories(userId, categories) {
    var _this10 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this10.firestore.doc(`users/${userId}`).set({
        categories: categories,
        updatedAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.FieldValue.serverTimestamp()
      }, {
        merge: true
      });
    })();
  }
  finishIntro() {
    var _this11 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this11.loading = true;
      try {
        const user = yield _this11.afAuth.currentUser;
        if (user) {
          // Save selected categories
          yield _this11.updateUserCategories(user.uid, _this11.selectedCategories);
          // Mark intro as completed
          yield _this11.storage.set('introCompleted', true);
          // Navigate to feed
          yield _this11.router.navigate(['/feed']);
        }
      } catch (error) {
        console.error('Error finishing intro:', error);
      } finally {
        _this11.loading = false;
      }
    })();
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AnimationController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
  }];
};
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-intro',
  template: _intro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], IntroPage);


/***/ }),

/***/ 20820:
/*!**************************************************!*\
  !*** ./src/app/intro/intro.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-content {
  --background: var(--ion-color-light);
}

ion-slides {
  height: 100%;
}

.splash-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
.splash-container img {
  max-width: 60%;
  margin-bottom: 2rem;
}

.signup-container {
  width: 100%;
  padding: 2rem;
}
.signup-container .logo {
  width: 120px;
  margin-bottom: 3rem;
}
.signup-container .auth-buttons ion-button {
  margin-bottom: 1rem;
  height: 48px;
}
.signup-container .auth-buttons ion-button.phone-button {
  --background: var(--ion-color-success);
  margin-bottom: 1rem;
}
.signup-container .auth-buttons ion-button.email-button {
  --background: var(--ion-color-primary);
}
.signup-container .auth-buttons ion-button.facebook-button {
  --background: #3b5998;
}
.signup-container .auth-buttons ion-button.google-button {
  --background: #fff;
  --color: #666;
  border: 1px solid #ddd;
}
.signup-container .auth-buttons ion-button.apple-button {
  --background: #000;
}
.signup-container .login-text {
  margin-top: 2rem;
  color: var(--ion-color-medium);
}
.signup-container .login-text a {
  color: var(--ion-color-primary);
  text-decoration: none;
}

.categories-container {
  padding: 2rem;
}
.categories-container h2 {
  font-size: 24px;
  margin-bottom: 0.5rem;
}
.categories-container p {
  color: var(--ion-color-medium);
  margin-bottom: 2rem;
}
.categories-container .category-item {
  padding: 1rem;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  transition: all 0.2s ease;
}
.categories-container .category-item.selected {
  background: var(--ion-color-primary);
  color: #fff;
}
.categories-container .category-item ion-icon {
  font-size: 24px;
  margin-bottom: 0.5rem;
}
.categories-container ion-button {
  margin-top: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/app/intro/intro.page.scss"],"names":[],"mappings":"AACA;EACI,oCAAA;AAAJ;;AAGE;EACE,YAAA;AAAJ;;AAGE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,2BAAA;AAAJ;AAEI;EACE,cAAA;EACA,mBAAA;AAAN;;AAIE;EACE,WAAA;EACA,aAAA;AADJ;AAGI;EACE,YAAA;EACA,mBAAA;AADN;AAKM;EACE,mBAAA;EACA,YAAA;AAHR;AAIQ;EACI,sCAAA;EACA,mBAAA;AAFZ;AAKQ;EACE,sCAAA;AAHV;AAMQ;EACE,qBAAA;AAJV;AAOQ;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;AALV;AAQQ;EACE,kBAAA;AANV;AAWI;EACE,gBAAA;EACA,8BAAA;AATN;AAWM;EACE,+BAAA;EACA,qBAAA;AATR;;AAcE;EACE,aAAA;AAXJ;AAaI;EACE,eAAA;EACA,qBAAA;AAXN;AAcI;EACE,8BAAA;EACA,mBAAA;AAZN;AAeI;EACE,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;AAbN;AAeM;EACE,oCAAA;EACA,WAAA;AAbR;AAgBM;EACE,eAAA;EACA,qBAAA;AAdR;AAkBI;EACE,gBAAA;AAhBN","sourcesContent":["// src/app/intro/intro.page.scss\nion-content {\n    --background: var(--ion-color-light);\n  }\n  \n  ion-slides {\n    height: 100%;\n  }\n  \n  .splash-container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-size: cover;\n    background-position: center;\n    \n    img {\n      max-width: 60%;\n      margin-bottom: 2rem;\n    }\n  }\n  \n  .signup-container {\n    width: 100%;\n    padding: 2rem;\n    \n    .logo {\n      width: 120px;\n      margin-bottom: 3rem;\n    }\n    \n    .auth-buttons {\n      ion-button {\n        margin-bottom: 1rem;\n        height: 48px;\n        &.phone-button {\n            --background: var(--ion-color-success);\n            margin-bottom: 1rem;\n        }\n\n        &.email-button {\n          --background: var(--ion-color-primary);\n        }\n        \n        &.facebook-button {\n          --background: #3b5998;\n        }\n        \n        &.google-button {\n          --background: #fff;\n          --color: #666;\n          border: 1px solid #ddd;\n        }\n        \n        &.apple-button {\n          --background: #000;\n        }\n      }\n    }\n    \n    .login-text {\n      margin-top: 2rem;\n      color: var(--ion-color-medium);\n      \n      a {\n        color: var(--ion-color-primary);\n        text-decoration: none;\n      }\n    }\n  }\n  \n  .categories-container {\n    padding: 2rem;\n    \n    h2 {\n      font-size: 24px;\n      margin-bottom: 0.5rem;\n    }\n    \n    p {\n      color: var(--ion-color-medium);\n      margin-bottom: 2rem;\n    }\n    \n    .category-item {\n      padding: 1rem;\n      border-radius: 8px;\n      background: #fff;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-bottom: 1rem;\n      transition: all 0.2s ease;\n      \n      &.selected {\n        background: var(--ion-color-primary);\n        color: #fff;\n      }\n      \n      ion-icon {\n        font-size: 24px;\n        margin-bottom: 0.5rem;\n      }\n    }\n    \n    ion-button {\n      margin-top: 2rem;\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 91600:
/*!**************************************************!*\
  !*** ./src/app/intro/intro.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- src/app/intro/intro.page.html -->\n<ion-content>\n  <div class=\"slides-container\">\n    <!-- Splash Screen -->\n    <div class=\"slide slide-0\" [class.active]=\"currentSlide === 0\">\n      <div class=\"splash-container\">\n        <img src=\"assets/splash-image.png\" alt=\"Welcome\">\n        <ion-button (click)=\"next()\" expand=\"block\" fill=\"clear\">\n          Get Started\n        </ion-button>\n      </div>\n    </div>\n\n    <!-- Sign Up Options -->\n    <div class=\"slide slide-1\" [class.active]=\"currentSlide === 1\">\n      <div class=\"signup-container\">\n        <img src=\"assets/logo.png\" alt=\"Logo\" class=\"logo\">\n        \n        <div class=\"auth-buttons\">\n          <ion-button expand=\"block\" (click)=\"signInWithPhone()\" class=\"phone-button\">\n            <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon>\n            Continue with Phone\n          </ion-button>\n          <ion-button expand=\"block\" (click)=\"signInWithEmail()\" class=\"email-button\">\n            <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\n            Continue with Email\n          </ion-button>\n\n          <ion-button expand=\"block\" (click)=\"signInWithFacebook()\" class=\"facebook-button\">\n            <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n            Continue with Facebook\n          </ion-button>\n\n          <ion-button expand=\"block\" (click)=\"signInWithGoogle()\" class=\"google-button\">\n            <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n            Continue with Google\n          </ion-button>\n\n          <ion-button expand=\"block\" (click)=\"signInWithApple()\" class=\"apple-button\">\n            <ion-icon slot=\"start\" name=\"logo-apple\"></ion-icon>\n            Continue with Apple\n          </ion-button>\n        </div>\n\n        <p class=\"login-text\">\n          Already a member? \n          <a (click)=\"goToLogin()\">Log In</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_intro_intro_module_ts.js.map