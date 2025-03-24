(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_blockedlist_blockedlist_module_ts"],{

/***/ 17539:
/*!***************************************************!*\
  !*** ./src/app/blockedlist/blockedlist.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockedlistPageModule: () => (/* binding */ BlockedlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _blockedlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockedlist.page */ 45388);







const routes = [{
  path: '',
  component: _blockedlist_page__WEBPACK_IMPORTED_MODULE_0__.BlockedlistPage
}];
let BlockedlistPageModule = class BlockedlistPageModule {};
BlockedlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_blockedlist_page__WEBPACK_IMPORTED_MODULE_0__.BlockedlistPage]
})], BlockedlistPageModule);


/***/ }),

/***/ 45388:
/*!*************************************************!*\
  !*** ./src/app/blockedlist/blockedlist.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockedlistPage: () => (/* binding */ BlockedlistPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _blockedlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockedlist.page.html?ngResource */ 53664);
/* harmony import */ var _blockedlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockedlist.page.scss?ngResource */ 79588);
/* harmony import */ var _blockedlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blockedlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);








let BlockedlistPage = class BlockedlistPage {
  constructor(afAuth, dataProvider, firestore) {
    this.afAuth = afAuth;
    this.dataProvider = dataProvider;
    this.firestore = firestore;
    this.blockedList = [];
  }
  ngOnInit() {}
  ionViewDidEnter() {
    this.dataProvider.getBlockedLists().then(conversations => {
      let tmp = [];
      conversations.get().then(conversation => {
        conversation.forEach(conversation => {
          // fetch blocked conversation & user info
          this.dataProvider.getUser(conversation.id).snapshotChanges().subscribe(data => {
            tmp.push({
              key: conversation.id,
              name: data.name,
              img: data.img
            });
          });
        });
      });
      console.log(tmp);
      this.blockedList = tmp;
    });
  }
  unblock(uid) {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(uid);
      let fuid = yield _this.afAuth.currentUser.then(data => {
        return data.uid;
      });
      _this.firestore.doc('accounts/' + fuid + '/conversations/' + uid).update({
        blocked: false
      });
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
  }];
};
BlockedlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-blockedlist',
  template: _blockedlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_blockedlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BlockedlistPage);


/***/ }),

/***/ 79588:
/*!**************************************************************!*\
  !*** ./src/app/blockedlist/blockedlist.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-header ion-toolbar {
  --background: transparent;
}
ion-header ion-toolbar ion-back-button {
  --color: var(--ion-color-primary);
  --icon-font-size: 24px;
}
ion-header ion-toolbar ion-title {
  font-size: 20px;
  font-weight: 700;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  padding: 24px;
  text-align: center;
}
.empty-state ion-icon {
  font-size: 64px;
  color: var(--ion-color-medium);
  margin-bottom: 16px;
  opacity: 0.5;
}
.empty-state h3 {
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 600;
  color: var(--ion-color-dark);
}
.empty-state p {
  margin: 0;
  font-size: 15px;
  color: var(--ion-color-medium);
}

.blocked-list {
  background: transparent;
  padding: 8px 0;
}
.blocked-list ion-item-sliding {
  margin-bottom: 8px;
  border-radius: 12px;
  overflow: hidden;
}
.blocked-list ion-item-sliding:last-child {
  margin-bottom: 0;
}
.blocked-list .user-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  --background: var(--ion-color-light);
  --border-radius: 12px;
  --border-width: 0;
}
.blocked-list .user-item ion-avatar {
  width: 48px;
  height: 48px;
  margin-right: 16px;
}
.blocked-list .user-item ion-label h2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--ion-color-dark);
  margin: 0 0 4px;
}
.blocked-list .user-item ion-label p {
  font-size: 13px;
  color: var(--ion-color-medium);
  margin: 0;
}
.blocked-list .user-item .unblock-button {
  --padding-start: 12px;
  --padding-end: 12px;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
}
.blocked-list .user-item .unblock-button ion-icon {
  font-size: 18px;
  margin-right: 4px;
}

@media (prefers-color-scheme: dark) {
  .blocked-list .user-item {
    --background: rgba(var(--ion-color-light-rgb), 0.1);
  }
}
.blocked-list ion-item-sliding {
  animation: slideIn 0.3s forwards;
  opacity: 0;
}
.blocked-list ion-item-sliding:nth-child(1) {
  animation-delay: 0.05s;
}
.blocked-list ion-item-sliding:nth-child(2) {
  animation-delay: 0.1s;
}
.blocked-list ion-item-sliding:nth-child(3) {
  animation-delay: 0.15s;
}
.blocked-list ion-item-sliding:nth-child(4) {
  animation-delay: 0.2s;
}
.blocked-list ion-item-sliding:nth-child(5) {
  animation-delay: 0.25s;
}
.blocked-list ion-item-sliding:nth-child(6) {
  animation-delay: 0.3s;
}
.blocked-list ion-item-sliding:nth-child(7) {
  animation-delay: 0.35s;
}
.blocked-list ion-item-sliding:nth-child(8) {
  animation-delay: 0.4s;
}
.blocked-list ion-item-sliding:nth-child(9) {
  animation-delay: 0.45s;
}
.blocked-list ion-item-sliding:nth-child(10) {
  animation-delay: 0.5s;
}
.blocked-list ion-item-sliding:nth-child(11) {
  animation-delay: 0.55s;
}
.blocked-list ion-item-sliding:nth-child(12) {
  animation-delay: 0.6s;
}
.blocked-list ion-item-sliding:nth-child(13) {
  animation-delay: 0.65s;
}
.blocked-list ion-item-sliding:nth-child(14) {
  animation-delay: 0.7s;
}
.blocked-list ion-item-sliding:nth-child(15) {
  animation-delay: 0.75s;
}
.blocked-list ion-item-sliding:nth-child(16) {
  animation-delay: 0.8s;
}
.blocked-list ion-item-sliding:nth-child(17) {
  animation-delay: 0.85s;
}
.blocked-list ion-item-sliding:nth-child(18) {
  animation-delay: 0.9s;
}
.blocked-list ion-item-sliding:nth-child(19) {
  animation-delay: 0.95s;
}
.blocked-list ion-item-sliding:nth-child(20) {
  animation-delay: 1s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`, "",{"version":3,"sources":["webpack://./src/app/blockedlist/blockedlist.page.scss"],"names":[],"mappings":"AAEI;EACE,yBAAA;AADN;AAGM;EACE,iCAAA;EACA,sBAAA;AADR;AAIM;EACE,eAAA;EACA,gBAAA;AAFR;;AAQE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;AALJ;AAOI;EACE,eAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;AALN;AAQI;EACE,eAAA;EACA,eAAA;EACA,gBAAA;EACA,4BAAA;AANN;AASI;EACE,SAAA;EACA,eAAA;EACA,8BAAA;AAPN;;AAYE;EACE,uBAAA;EACA,cAAA;AATJ;AAWI;EACE,kBAAA;EACA,mBAAA;EACA,gBAAA;AATN;AAWM;EACE,gBAAA;AATR;AAaI;EACE,qBAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,oCAAA;EACA,qBAAA;EACA,iBAAA;AAXN;AAaM;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AAXR;AAeQ;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,eAAA;AAbV;AAgBQ;EACE,eAAA;EACA,8BAAA;EACA,SAAA;AAdV;AAkBM;EACE,qBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;AAhBR;AAkBQ;EACE,eAAA;EACA,iBAAA;AAhBV;;AAuBE;EAEI;IACE,mDAAA;EArBN;AACF;AA2BI;EACE,gCAAA;EACA,UAAA;AAzBN;AA4BQ;EACE,sBAAA;AA1BV;AAyBQ;EACE,qBAAA;AAvBV;AAsBQ;EACE,sBAAA;AApBV;AAmBQ;EACE,qBAAA;AAjBV;AAgBQ;EACE,sBAAA;AAdV;AAaQ;EACE,qBAAA;AAXV;AAUQ;EACE,sBAAA;AARV;AAOQ;EACE,qBAAA;AALV;AAIQ;EACE,sBAAA;AAFV;AACQ;EACE,qBAAA;AACV;AAFQ;EACE,sBAAA;AAIV;AALQ;EACE,qBAAA;AAOV;AARQ;EACE,sBAAA;AAUV;AAXQ;EACE,qBAAA;AAaV;AAdQ;EACE,sBAAA;AAgBV;AAjBQ;EACE,qBAAA;AAmBV;AApBQ;EACE,sBAAA;AAsBV;AAvBQ;EACE,qBAAA;AAyBV;AA1BQ;EACE,sBAAA;AA4BV;AA7BQ;EACE,mBAAA;AA+BV;;AAzBE;EACE;IACE,UAAA;IACA,4BAAA;EA4BJ;EA1BE;IACE,UAAA;IACA,wBAAA;EA4BJ;AACF","sourcesContent":["// Header styling\nion-header {\n    ion-toolbar {\n      --background: transparent;\n      \n      ion-back-button {\n        --color: var(--ion-color-primary);\n        --icon-font-size: 24px;\n      }\n      \n      ion-title {\n        font-size: 20px;\n        font-weight: 700;\n      }\n    }\n  }\n  \n  // Empty state styling\n  .empty-state {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 60vh;\n    padding: 24px;\n    text-align: center;\n    \n    ion-icon {\n      font-size: 64px;\n      color: var(--ion-color-medium);\n      margin-bottom: 16px;\n      opacity: 0.5;\n    }\n    \n    h3 {\n      margin: 0 0 8px;\n      font-size: 20px;\n      font-weight: 600;\n      color: var(--ion-color-dark);\n    }\n    \n    p {\n      margin: 0;\n      font-size: 15px;\n      color: var(--ion-color-medium);\n    }\n  }\n  \n  // Blocked list styling\n  .blocked-list {\n    background: transparent;\n    padding: 8px 0;\n    \n    ion-item-sliding {\n      margin-bottom: 8px;\n      border-radius: 12px;\n      overflow: hidden;\n      \n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n    \n    .user-item {\n      --padding-start: 16px;\n      --padding-end: 16px;\n      --padding-top: 12px;\n      --padding-bottom: 12px;\n      --background: var(--ion-color-light);\n      --border-radius: 12px;\n      --border-width: 0;\n      \n      ion-avatar {\n        width: 48px;\n        height: 48px;\n        margin-right: 16px;\n      }\n      \n      ion-label {\n        h2 {\n          font-size: 16px;\n          font-weight: 600;\n          color: var(--ion-color-dark);\n          margin: 0 0 4px;\n        }\n        \n        p {\n          font-size: 13px;\n          color: var(--ion-color-medium);\n          margin: 0;\n        }\n      }\n      \n      .unblock-button {\n        --padding-start: 12px;\n        --padding-end: 12px;\n        height: 36px;\n        font-size: 14px;\n        font-weight: 500;\n        \n        ion-icon {\n          font-size: 18px;\n          margin-right: 4px;\n        }\n      }\n    }\n  }\n  \n  // Dark mode support\n  @media (prefers-color-scheme: dark) {\n    .blocked-list {\n      .user-item {\n        --background: rgba(var(--ion-color-light-rgb), 0.1);\n      }\n    }\n  }\n  \n  // Optional: Add animations\n  .blocked-list {\n    ion-item-sliding {\n      animation: slideIn 0.3s forwards;\n      opacity: 0;\n      \n      @for $i from 1 through 20 {\n        &:nth-child(#{$i}) {\n          animation-delay: #{$i * 0.05}s;\n        }\n      }\n    }\n  }\n  \n  @keyframes slideIn {\n    from {\n      opacity: 0;\n      transform: translateX(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 53664:
/*!**************************************************************!*\
  !*** ./src/app/blockedlist/blockedlist.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Blocked Contacts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- Empty State -->\n  <div *ngIf=\"blockedList.length === 0\" class=\"empty-state\">\n    <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\n    <h3>No Blocked Contacts</h3>\n    <p>When you block someone, they'll appear here</p>\n  </div>\n\n  <!-- Blocked List -->\n  <ion-list *ngIf=\"blockedList.length > 0\" class=\"blocked-list\">\n    <ion-item-sliding *ngFor=\"let user of blockedList\">\n      <ion-item class=\"user-item\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"user.img\" \n               [alt]=\"user.name\"\n               (error)=\"$event.target.src='assets/images/default-avatar.png'\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{user.name}}</h2>\n          <p>Blocked</p>\n        </ion-label>\n        <ion-button slot=\"end\" \n                    (click)=\"unblock(user.key)\"\n                    fill=\"clear\"\n                    color=\"medium\"\n                    class=\"unblock-button\">\n          <ion-icon slot=\"start\" name=\"lock-open-outline\"></ion-icon>\n          Unblock\n        </ion-button>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_blockedlist_blockedlist_module_ts.js.map