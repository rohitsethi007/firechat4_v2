"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["common"],{

/***/ 80631:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createButtonActiveGesture; }
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 76842);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 99502);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 88910);




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
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
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
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 78086:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ attachComponent; },
/* harmony export */   "d": function() { return /* binding */ detachComponent; }
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-1457892a.js */ 11540);



const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (delegate, container, component, cssClasses, componentProps) {
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

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

/***/ 99502:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ hapticSelectionStart; },
/* harmony export */   "b": function() { return /* binding */ hapticSelectionChanged; },
/* harmony export */   "c": function() { return /* binding */ hapticSelection; },
/* harmony export */   "d": function() { return /* binding */ hapticImpact; },
/* harmony export */   "h": function() { return /* binding */ hapticSelectionEnd; }
/* harmony export */ });
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

/***/ 15907:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ SPINNERS; }
/* harmony export */ });
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

/***/ 43784:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createColorClasses; },
/* harmony export */   "g": function() { return /* binding */ getClassMap; },
/* harmony export */   "h": function() { return /* binding */ hostContext; },
/* harmony export */   "o": function() { return /* binding */ openURL; }
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);


const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};

const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }

  return [];
};

const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

const openURL = /*#__PURE__*/function () {
  var _ref = (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (url, ev, direction, animation) {
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
  });

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ 77258:
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ 96287);



/***/ }),

/***/ 51064:
/*!*******************************************************************!*\
  !*** ./src/app/components/emoji-picker/emoji-picker.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiPickerComponent": function() { return /* binding */ EmojiPickerComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_emoji_picker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./emoji-picker.component.html */ 82426);
/* harmony import */ var _emoji_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emoji-picker.component.scss */ 81575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 7602);





let EmojiPickerComponent = class EmojiPickerComponent {
    constructor(popoverCtrl, navParams) {
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.generalEmojis = [
            { icon: './assets/icon/smile.svg', value: 'smile' },
            { icon: './assets/icon/wink.svg', value: 'wink' },
            { icon: './assets/icon/sad.svg', value: 'sad' },
            { icon: './assets/icon/love.svg', value: 'love' },
            { icon: './assets/icon/haha.svg', value: 'haha' },
            { icon: './assets/icon/cool.svg', value: 'cool' },
            { icon: './assets/icon/hug.svg', value: 'hug' }
        ];
        this.eventEmojis = [
            { icon: './assets/icon/smile.svg', value: 'smile' },
            { icon: './assets/icon/wink.svg', value: 'wink' },
            { icon: './assets/icon/sad.svg', value: 'sad' },
            { icon: './assets/icon/love.svg', value: 'love' },
            { icon: './assets/icon/haha.svg', value: 'haha' },
            { icon: './assets/icon/cool.svg', value: 'cool' },
            { icon: './assets/icon/hug.svg', value: 'hug' }
        ];
        this.postType = this.navParams.get('postType');
    }
    getEmojis() {
        return this.postType === 'event' ? this.eventEmojis : this.generalEmojis;
    }
    selectEmoji(emoji) {
        this.popoverCtrl.dismiss({
            emoji: emoji,
            post: this.navParams.get('post')
        });
    }
};
EmojiPickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams }
];
EmojiPickerComponent.propDecorators = {
    postType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
EmojiPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-emoji-picker',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_emoji_picker_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_emoji_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams])
], EmojiPickerComponent);



/***/ }),

/***/ 95740:
/*!**********************************************!*\
  !*** ./src/app/services/bookmark.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookmarkService": function() { return /* binding */ BookmarkService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 77199);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 77258);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 33527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76491);









let BookmarkService = class BookmarkService {
    constructor(afs, auth) {
        this.afs = afs;
        this.auth = auth;
        this.userBookmarks = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.userBookmarks$ = this.userBookmarks.asObservable();
    }
    // Get user's bookmarks
    getUserBookmarks(userId) {
        return this.afs
            .collection('accounts')
            .doc(userId)
            .collection('bookmarks', ref => ref.orderBy('createdAt', 'desc'))
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    toggleBookmark(post, userId, currentBookmarks) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const userRef = this.afs.collection('accounts').doc(userId);
                const isCurrentlyBookmarked = currentBookmarks === null || currentBookmarks === void 0 ? void 0 : currentBookmarks.includes(post.key);
                if (isCurrentlyBookmarked) {
                    yield userRef.update({
                        bookmarks: firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore.FieldValue.arrayRemove(post.key)
                    });
                    // Update local state
                    this.userBookmarks.next(currentBookmarks.filter(id => id !== post.key));
                }
                else {
                    yield userRef.update({
                        bookmarks: firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore.FieldValue.arrayUnion(post.key)
                    });
                    // Update local state
                    this.userBookmarks.next([...currentBookmarks, post.key]);
                }
                return !isCurrentlyBookmarked;
            }
            catch (error) {
                console.error('Error toggling bookmark:', error);
                return false;
            }
        });
    }
    isBookmarked(postId, bookmarks) {
        return (bookmarks === null || bookmarks === void 0 ? void 0 : bookmarks.includes(postId)) || false;
    }
    // Get bookmark count for a post
    getBookmarkCount(postId) {
        return this.afs
            .collection('posts')
            .doc(postId)
            .valueChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((post) => (post === null || post === void 0 ? void 0 : post.bookmarkCount) || 0));
    }
};
BookmarkService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth }
];
BookmarkService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth])
], BookmarkService);



/***/ }),

/***/ 19446:
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseService": function() { return /* binding */ FirebaseService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.service */ 4471);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ 52468);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 36363);






let FirebaseService = class FirebaseService {
    constructor(firestore, loadingProvider, afAuth, dataProvider) {
        this.firestore = firestore;
        this.loadingProvider = loadingProvider;
        this.afAuth = afAuth;
        this.dataProvider = dataProvider;
    }
    joinGroup(id) {
        throw new Error('Method not implemented.');
    }
    // Send friend request to userId.
    sendFriendRequest(userId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService }
];
FirebaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore,
        _loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth,
        _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService])
], FirebaseService);



/***/ }),

/***/ 54120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": function() { return /* binding */ LoginService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 77199);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 77258);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ 52468);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 147);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 64357);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);













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
        this.afAuth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            // userCredential.user contains the user information
            const user = userCredential.user;
            console.info('New user created:', user);
            // If you need specific user properties
            if (user) {
                this.createNewUser(user.uid, name, username, user.email, "I am available", "Firebase", img);
                console.info('User data:', user);
            }
        }).catch((err) => {
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
            this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.FacebookAuthProvider()).then((res) => {
                this.loadingProvider.hide();
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.FacebookAuthProvider.credential(res.credential.accessToken);
                this.afAuth.signInWithCredential(credential).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                this.loadingProvider.show();
                this.afAuth.signInWithCredential(credential).then((res) => {
                    if (res.additionalUserInfo.isNewUser) {
                        this.facebook.api("me/?fields=id,email,first_name,picture,gender", ["public_profile", "email"])
                            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
            this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider()).then((res) => {
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.credential(res.credential.idToken, res.credential.accessToken);
                this.afAuth.signInWithCredential(credential).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
                webClientId: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.googleClientId
            }).then((result) => {
                let credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.credential(result['token'], null);
                this.afAuth.signInWithCredential(credential).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        let publicVisibility = false;
        let showOnline = false;
        this.firestore.collection('accounts').doc(userId).set({
            dateCreated, username, name, userId, email, description, provider, img, publicVisibility, showOnline
        }).then(() => {
            this.router.navigateByUrl('tabs');
        });
    }
    logout() {
        this.afAuth.signOut().then(() => this.router.navigateByUrl('/login', { replaceUrl: true }));
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__.GooglePlus },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__.Facebook },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore,
        _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService,
        _loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform,
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__.GooglePlus,
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__.Facebook,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router])
], LoginService);



/***/ }),

/***/ 82426:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/emoji-picker/emoji-picker.component.html ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"emoji-picker-horizontal\">\n  <ion-button \n    *ngFor=\"let emoji of getEmojis()\" \n    (click)=\"selectEmoji(emoji)\" \n    fill=\"clear\"\n    size=\"small\"\n    class=\"emoji-button\">\n    <ion-icon [src]=\"emoji.icon\"></ion-icon>\n  </ion-button>\n</div>\n");

/***/ }),

/***/ 81575:
/*!*********************************************************************!*\
  !*** ./src/app/components/emoji-picker/emoji-picker.component.scss ***!
  \*********************************************************************/
/***/ (function(module) {

module.exports = ".emoji-picker-horizontal {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 8px;\n  grid-gap: 4px;\n  gap: 4px;\n  background: #ffffff;\n  border-radius: 12px;\n  min-width: 200px;\n  justify-content: center;\n}\n.emoji-picker-horizontal .emoji-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  margin: 0;\n  height: 40px;\n  width: 40px;\n}\n.emoji-picker-horizontal .emoji-button ion-icon {\n  font-size: 24px;\n  transition: transform 0.2s ease;\n}\n.emoji-picker-horizontal .emoji-button:hover ion-icon {\n  transform: scale(1.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtb2ppLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNOO0FBQ007RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFDUjtBQUVNO0VBQ0UscUJBQUE7QUFBUiIsImZpbGUiOiJlbW9qaS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1vamktcGlja2VyLWhvcml6b250YWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGdhcDogNHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbiAgICAuZW1vamktYnV0dG9uIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgICB9XG4gIFxuICAgICAgJjpob3ZlciBpb24taWNvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map