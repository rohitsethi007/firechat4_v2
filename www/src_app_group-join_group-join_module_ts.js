(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_group-join_group-join_module_ts"],{

/***/ 98965:
/*!*************************************************!*\
  !*** ./src/app/group-join/group-join.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupJoinPageModule: () => (/* binding */ GroupJoinPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _group_join_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-join.page */ 80046);







const routes = [{
  path: '',
  component: _group_join_page__WEBPACK_IMPORTED_MODULE_0__.GroupJoinPage
}];
let GroupJoinPageModule = class GroupJoinPageModule {};
GroupJoinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  declarations: [_group_join_page__WEBPACK_IMPORTED_MODULE_0__.GroupJoinPage]
})], GroupJoinPageModule);


/***/ }),

/***/ 80046:
/*!***********************************************!*\
  !*** ./src/app/group-join/group-join.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupJoinPage: () => (/* binding */ GroupJoinPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _group_join_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-join.page.html?ngResource */ 86954);
/* harmony import */ var _group_join_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-join.page.scss?ngResource */ 32742);
/* harmony import */ var _group_join_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_group_join_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 31159);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78205);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);









let GroupJoinPage = class GroupJoinPage {
  constructor(dataProvider, afAuth, route, firestore, navCtrl) {
    this.dataProvider = dataProvider;
    this.afAuth = afAuth;
    this.route = route;
    this.firestore = firestore;
    this.navCtrl = navCtrl;
    this.group = {};
    this.termsAgreed = false;
    this.groupId = this.route.snapshot.params.id;
    console.info('groupId', this.groupId);
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.loggedInUserId = user.uid;
        this.loggedInUser = user;
        console.info('userId', user);
      } else {
        this.loggedInUserId = null;
        this.loggedInUser = null;
        console.info('userId', user);
      }
    });
  }
  ngOnInit() {
    this.getGroupData();
  }
  getGroupData() {
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(p => {
      let group = p.payload.data();
      group.key = p.key;
      this.group = group;
    });
  }
  joinGroup() {
    console.info('loggedinuser', this.loggedInUser);
    if (this.loggedInUser.groups) {
      this.loggedInUser.groups.push(this.groupId);
    } else {
      this.loggedInUser.groups = [this.groupId];
    }
    // Update group data on the database.
    this.dataProvider.getUser(this.loggedInUserId).update({
      groups: this.loggedInUser.groups
    }).then(() => {
      // Add friend as members of the group.
      this.group.members.push(this.loggedInUserId);
      // Update group data on the database.
      this.dataProvider.getGroup(this.groupId).update({
        members: this.group.members,
        messages: this.group.messages
      });
    }).then(() => {
      this.navCtrl.back();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }, {
    type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
  }];
};
GroupJoinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-group-join',
  template: _group_join_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_group_join_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GroupJoinPage);


/***/ }),

/***/ 32742:
/*!************************************************************!*\
  !*** ./src/app/group-join/group-join.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --page-padding: 16px;
}
:host .welcome-section {
  padding: 24px var(--page-padding) 16px;
  text-align: center;
}
:host .welcome-section h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: var(--ion-color-dark);
}
:host .welcome-section .subtitle {
  margin: 8px 0 0;
  font-size: 16px;
  color: var(--ion-color-medium);
}
:host .guidelines-list {
  padding: 0 var(--page-padding);
  background: transparent;
}
:host .guidelines-list .guideline-card {
  margin: 16px 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  background: var(--ion-card-background);
}
:host .guidelines-list .guideline-card ion-card-content {
  padding: 16px;
}
:host .guidelines-list .guideline-card .guideline-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
:host .guidelines-list .guideline-card .guideline-header ion-icon {
  font-size: 24px;
  margin-right: 12px;
}
:host .guidelines-list .guideline-card .guideline-header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--ion-color-dark);
}
:host .guidelines-list .guideline-card p {
  margin: 0;
  font-size: 14px;
  color: var(--ion-color-medium);
  line-height: 1.4;
}
:host .agreement-section {
  position: sticky;
  bottom: 0;
  background: var(--ion-background-color);
  padding-top: 16px;
  border-top: 1px solid var(--ion-color-light);
}
:host .agreement-section .checkbox-item {
  --background: transparent;
  --padding-start: 0;
  --padding-end: 0;
  --inner-padding-end: 0;
  margin-bottom: 16px;
}
:host .agreement-section .checkbox-item ion-checkbox {
  --background: transparent;
  --background-checked: var(--ion-color-primary);
  --border-color: var(--ion-color-medium);
  --border-radius: 4px;
  margin-right: 16px;
}
:host .agreement-section .checkbox-item ion-label {
  color: var(--ion-color-dark);
  font-size: 14px;
  margin-left: 8px;
}
:host .agreement-section .join-button {
  --border-radius: 8px;
  margin: 0;
  height: 48px;
  font-weight: 600;
  text-transform: none;
}
:host .agreement-section .join-button:not([disabled]) {
  --background: var(--ion-color-primary);
  --color: var(--ion-color-primary-contrast);
}
:host .agreement-section .join-button ion-icon {
  margin-right: 8px;
}
:host .guideline-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
:host .guideline-card:active {
  transform: scale(0.98);
}
:host .join-button {
  transition: opacity 0.2s ease;
}
:host .join-button[disabled] {
  opacity: 0.7;
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
:host .guideline-card {
  animation: slideUp 0.3s ease forwards;
}
:host .guideline-card:nth-child(1) {
  animation-delay: 0.1s;
}
:host .guideline-card:nth-child(2) {
  animation-delay: 0.2s;
}
:host .guideline-card:nth-child(3) {
  animation-delay: 0.3s;
}
:host .guideline-card:nth-child(4) {
  animation-delay: 0.4s;
}`, "",{"version":3,"sources":["webpack://./src/app/group-join/group-join.page.scss"],"names":[],"mappings":"AAAA;EACE,oBAAA;AACF;AACE;EACE,sCAAA;EACA,kBAAA;AACJ;AACI;EACE,SAAA;EACA,eAAA;EACA,gBAAA;EACA,4BAAA;AACN;AAEI;EACE,eAAA;EACA,eAAA;EACA,8BAAA;AAAN;AAIE;EACE,8BAAA;EACA,uBAAA;AAFJ;AAII;EACE,cAAA;EACA,mBAAA;EACA,0CAAA;EACA,sCAAA;AAFN;AAIM;EACE,aAAA;AAFR;AAKM;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;AAHR;AAKQ;EACE,eAAA;EACA,kBAAA;AAHV;AAMQ;EACE,SAAA;EACA,eAAA;EACA,gBAAA;EACA,4BAAA;AAJV;AAQM;EACE,SAAA;EACA,eAAA;EACA,8BAAA;EACA,gBAAA;AANR;AAWE;EACE,gBAAA;EACA,SAAA;EACA,uCAAA;EACA,iBAAA;EACA,4CAAA;AATJ;AAWI;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;AATN;AAWM;EACE,yBAAA;EACA,8CAAA;EACA,uCAAA;EACA,oBAAA;EACA,kBAAA;AATR;AAYM;EACE,4BAAA;EACA,eAAA;EACA,gBAAA;AAVR;AAcI;EACE,oBAAA;EACA,SAAA;EACA,YAAA;EACA,gBAAA;EACA,oBAAA;AAZN;AAcM;EACE,sCAAA;EACA,0CAAA;AAZR;AAeM;EACE,iBAAA;AAbR;AAoBA;EACE,qDAAA;AAlBF;AAoBE;EACE,sBAAA;AAlBJ;AAsBA;EACE,6BAAA;AApBF;AAsBE;EACE,YAAA;AApBJ;AAyBA;EACE;IACE,UAAA;IACA,2BAAA;EAvBF;EAyBA;IACE,UAAA;IACA,wBAAA;EAvBF;AACF;AA0BA;EACE,qCAAA;AAxBF;AA0BI;EACE,qBAAA;AAxBN;AAuBI;EACE,qBAAA;AArBN;AAoBI;EACE,qBAAA;AAlBN;AAiBI;EACE,qBAAA;AAfN","sourcesContent":[":host {\n  --page-padding: 16px;\n\n  .welcome-section {\n    padding: 24px var(--page-padding) 16px;\n    text-align: center;\n    \n    h1 {\n      margin: 0;\n      font-size: 24px;\n      font-weight: 700;\n      color: var(--ion-color-dark);\n    }\n\n    .subtitle {\n      margin: 8px 0 0;\n      font-size: 16px;\n      color: var(--ion-color-medium);\n    }\n  }\n\n  .guidelines-list {\n    padding: 0 var(--page-padding);\n    background: transparent;\n\n    .guideline-card {\n      margin: 16px 0;\n      border-radius: 12px;\n      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n      background: var(--ion-card-background);\n\n      ion-card-content {\n        padding: 16px;\n      }\n\n      .guideline-header {\n        display: flex;\n        align-items: center;\n        margin-bottom: 8px;\n\n        ion-icon {\n          font-size: 24px;\n          margin-right: 12px;\n        }\n\n        h2 {\n          margin: 0;\n          font-size: 18px;\n          font-weight: 600;\n          color: var(--ion-color-dark);\n        }\n      }\n\n      p {\n        margin: 0;\n        font-size: 14px;\n        color: var(--ion-color-medium);\n        line-height: 1.4;\n      }\n    }\n  }\n\n  .agreement-section {\n    position: sticky;\n    bottom: 0;\n    background: var(--ion-background-color);\n    padding-top: 16px;\n    border-top: 1px solid var(--ion-color-light);\n  \n    .checkbox-item {\n      --background: transparent;\n      --padding-start: 0;\n      --padding-end: 0;\n      --inner-padding-end: 0;\n      margin-bottom: 16px;\n  \n      ion-checkbox {\n        --background: transparent;\n        --background-checked: var(--ion-color-primary);\n        --border-color: var(--ion-color-medium);\n        --border-radius: 4px;\n        margin-right: 16px;\n      }\n  \n      ion-label {\n        color: var(--ion-color-dark);\n        font-size: 14px;\n        margin-left: 8px;\n      }\n    }\n  \n    .join-button {\n      --border-radius: 8px;\n      margin: 0;\n      height: 48px;\n      font-weight: 600;\n      text-transform: none;\n      \n      &:not([disabled]) {\n        --background: var(--ion-color-primary);\n        --color: var(--ion-color-primary-contrast);\n      }\n  \n      ion-icon {\n        margin-right: 8px;\n      }\n    }\n  }\n  \n\n  // Add to the existing SCSS\n.guideline-card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n\n  &:active {\n    transform: scale(0.98);\n  }\n}\n\n.join-button {\n  transition: opacity 0.2s ease;\n  \n  &[disabled] {\n    opacity: 0.7;\n  }\n}\n\n// Optional: Add entrance animations\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.guideline-card {\n  animation: slideUp 0.3s ease forwards;\n  @for $i from 1 through 4 {\n    &:nth-child(#{$i}) {\n      animation-delay: #{$i * 0.1}s;\n    }\n  }\n}\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86954:
/*!************************************************************!*\
  !*** ./src/app/group-join/group-join.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/groups\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Join Group</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- Welcome Section -->\n  <div class=\"welcome-section\">\n    <h1>Join <ion-text color=\"primary\">{{group.name}}</ion-text> Group</h1>\n    <p class=\"subtitle\">You're about to join one of our most engaging communities.</p>\n  </div>\n\n  <!-- Guidelines Cards -->\n  <ion-list class=\"guidelines-list\">\n    <!-- Be Kind -->\n    <ion-card class=\"guideline-card\">\n      <ion-card-content>\n        <div class=\"guideline-header\">\n          <ion-icon name=\"heart-outline\" color=\"danger\"></ion-icon>\n          <h2>Be kind</h2>\n        </div>\n        <p>Be respectful of others and be kind. They are here to help you. If you believe someone is not behaving appropriately, let us know.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Be Safe -->\n    <ion-card class=\"guideline-card\">\n      <ion-card-content>\n        <div class=\"guideline-header\">\n          <ion-icon name=\"shield-checkmark-outline\" color=\"success\"></ion-icon>\n          <h2>Be safe</h2>\n        </div>\n        <p>Don't share personal details like phone numbers or addresses in public posts.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Enjoy -->\n    <ion-card class=\"guideline-card\">\n      <ion-card-content>\n        <div class=\"guideline-header\">\n          <ion-icon name=\"happy-outline\" color=\"warning\"></ion-icon>\n          <h2>Enjoy</h2>\n        </div>\n        <p>Remember, we are all in this together.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- One Last Thing -->\n    <ion-card class=\"guideline-card\">\n      <ion-card-content>\n        <div class=\"guideline-header\">\n          <ion-icon name=\"information-circle-outline\" color=\"primary\"></ion-icon>\n          <h2>One last thing</h2>\n        </div>\n        <p>To protect all members, we don't allow promotional or sales content in our groups.</p>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <!-- Agreement Section -->\n  <div class=\"agreement-section ion-padding\">\n    <ion-item lines=\"none\" class=\"checkbox-item\">\n      <ion-checkbox slot=\"start\" \n                   [(ngModel)]=\"termsAgreed\">\n      </ion-checkbox>\n      <ion-label class=\"ion-text-wrap\">\n        I agree to look out for and support other members in this group\n      </ion-label>\n    </ion-item>\n  \n    <ion-button expand=\"block\" \n                class=\"join-button\" \n                [disabled]=\"!termsAgreed\" \n                (click)=\"joinGroup()\">\n      <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\n      Join \"{{group.name}}\"\n    </ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_group-join_group-join_module_ts.js.map