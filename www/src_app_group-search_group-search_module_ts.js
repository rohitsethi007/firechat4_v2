(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_group-search_group-search_module_ts"],{

/***/ 44049:
/*!*****************************************************!*\
  !*** ./src/app/group-search/group-search.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupSearchPageModule: () => (/* binding */ GroupSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/share.module */ 53952);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _group_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-search.page */ 29386);








const routes = [{
  path: '',
  component: _group_search_page__WEBPACK_IMPORTED_MODULE_1__.GroupSearchPage
}];
let GroupSearchPageModule = class GroupSearchPageModule {};
GroupSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  declarations: [_group_search_page__WEBPACK_IMPORTED_MODULE_1__.GroupSearchPage]
})], GroupSearchPageModule);


/***/ }),

/***/ 29386:
/*!***************************************************!*\
  !*** ./src/app/group-search/group-search.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupSearchPage: () => (/* binding */ GroupSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _group_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-search.page.html?ngResource */ 1318);
/* harmony import */ var _group_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-search.page.scss?ngResource */ 13778);
/* harmony import */ var _group_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_group_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78205);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);








let GroupSearchPage = class GroupSearchPage {
  constructor(route, router, dataProvider, firestore, navCtrl) {
    this.route = route;
    this.router = router;
    this.dataProvider = dataProvider;
    this.firestore = firestore;
    this.navCtrl = navCtrl;
    this.category = this.router.getCurrentNavigation().extras.state.category;
    this.loggedInUserId = this.dataProvider.getCurrentUserId();
  }
  ngOnInit() {
    this.firestore.collection('groups').ref.where('categoryId', '==', this.category.key).get().then(groupsRes => {
      this.groups = [];
      groupsRes.forEach(f => {
        let group;
        group = f.data();
        group.key = f.id;
        if (group.members.some(e => e === this.loggedInUserId)) {
          group.isUserMember = true;
        } else {
          group.isUserMember = false;
        }
        this.groups.push(group);
      });
    });
  }
  onCancel() {
    this.navCtrl.back();
  }
  // Open Group Chat.
  viewGroup(groupId) {
    this.router.navigateByUrl('group/' + groupId);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
  }];
};
GroupSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-group-search',
  template: _group_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_group_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GroupSearchPage);


/***/ }),

/***/ 13778:
/*!****************************************************************!*\
  !*** ./src/app/group-search/group-search.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host .search-toolbar {
  --background: transparent;
  padding-bottom: 8px;
}
:host .search-toolbar .custom-searchbar {
  --background: var(--ion-color-light);
  --border-radius: 12px;
  --box-shadow: none;
  --placeholder-color: var(--ion-color-medium);
  --icon-color: var(--ion-color-medium);
  --color: var(--ion-color-dark);
  padding: 0;
  height: 46px;
}
:host .search-toolbar .custom-searchbar .searchbar-input {
  font-size: 16px;
  line-height: 24px;
}
:host .search-toolbar .custom-searchbar .searchbar-search-icon {
  width: 20px;
  height: 20px;
}
:host .search-toolbar .custom-searchbar .searchbar-clear-button {
  width: 40px;
  height: 40px;
}
:host .category-header h2 {
  font-size: 18px;
  font-weight: 500;
  color: var(--ion-color-dark);
}
:host ion-list {
  background: transparent;
}
:host h2 {
  font-size: 20px;
  font-weight: 600;
}
:host ion-item {
  --background: transparent;
  --padding-start: 0;
  --padding-end: 0;
  --inner-padding-end: 0;
  margin-bottom: 8px;
}
:host ion-item ion-thumbnail {
  --size: 60px;
  --border-radius: 8px;
  margin-right: 16px;
}
:host .join-group-btn {
  --padding-start: 16px;
  --padding-end: 16px;
  --border-radius: 8px;
}
:host .join-group-btn[disabled] {
  opacity: 1;
  --background: var(--ion-color-success);
  --color: var(--ion-color-success-contrast);
}
:host .join-group-btn ion-icon {
  margin-right: 4px;
}`, "",{"version":3,"sources":["webpack://./src/app/group-search/group-search.page.scss"],"names":[],"mappings":"AACE;EACE,yBAAA;EACA,mBAAA;AAAJ;AAEI;EACE,oCAAA;EACA,qBAAA;EACA,kBAAA;EACA,4CAAA;EACA,qCAAA;EACA,8BAAA;EACA,UAAA;EACA,YAAA;AAAN;AAEM;EACE,eAAA;EACA,iBAAA;AAAR;AAGM;EACE,WAAA;EACA,YAAA;AADR;AAIM;EACE,WAAA;EACA,YAAA;AAFR;AAQI;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;AANN;AAUE;EACE,uBAAA;AARJ;AAaE;EACE,eAAA;EACA,gBAAA;AAXJ;AAcE;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;AAZJ;AAcI;EACE,YAAA;EACA,oBAAA;EACA,kBAAA;AAZN;AAgBE;EACE,qBAAA;EACA,mBAAA;EACA,oBAAA;AAdJ;AAgBI;EACE,UAAA;EACA,sCAAA;EACA,0CAAA;AAdN;AAiBI;EACE,iBAAA;AAfN","sourcesContent":[":host {\n  .search-toolbar {\n    --background: transparent;\n    padding-bottom: 8px;\n\n    .custom-searchbar {\n      --background: var(--ion-color-light);\n      --border-radius: 12px;\n      --box-shadow: none;\n      --placeholder-color: var(--ion-color-medium);\n      --icon-color: var(--ion-color-medium);\n      --color: var(--ion-color-dark);\n      padding: 0;\n      height: 46px;\n      \n      .searchbar-input {\n        font-size: 16px;\n        line-height: 24px;\n      }\n\n      .searchbar-search-icon {\n        width: 20px;\n        height: 20px;\n      }\n\n      .searchbar-clear-button {\n        width: 40px;\n        height: 40px;\n      }\n    }\n  }\n\n  .category-header {\n    h2 {\n      font-size: 18px;\n      font-weight: 500;\n      color: var(--ion-color-dark);\n    }\n  }\n\n  ion-list {\n    background: transparent;\n  }\n\n\n\n  h2 {\n    font-size: 20px;\n    font-weight: 600;\n  }\n\n  ion-item {\n    --background: transparent;\n    --padding-start: 0;  // Important: Set to 0 since we're using list padding\n    --padding-end: 0;    // Important: Set to 0 since we're using list padding\n    --inner-padding-end: 0;\n    margin-bottom: 8px;\n    \n    ion-thumbnail {\n      --size: 60px;\n      --border-radius: 8px;\n      margin-right: 16px;\n    }\n  }\n\n  .join-group-btn {\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --border-radius: 8px;\n    \n    &[disabled] {\n      opacity: 1; // Keep full opacity even when disabled\n      --background: var(--ion-color-success);\n      --color: var(--ion-color-success-contrast);\n    }\n  \n    ion-icon {\n      margin-right: 4px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1318:
/*!****************************************************************!*\
  !*** ./src/app/group-search/group-search.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"search-toolbar ion-padding-horizontal\">\n    <ion-searchbar \n      [(ngModel)]=\"searchGroup\" \n      mode=\"ios\" \n      (ionCancel)=\"onCancel($event)\" \n      placeholder=\"Search in {{category.name}}...\"\n      animated=\"true\"\n      class=\"custom-searchbar\"\n      clear-icon=\"close-circle\"\n      search-icon=\"search-outline\"\n      showCancelButton=\"always\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Category Header -->\n  <ion-item lines=\"none\" class=\"category-header ion-padding\">\n    <ion-label>\n      <h2>Search in category <ion-text color=\"primary\"><b>{{category.name}}</b></ion-text></h2>\n    </ion-label>\n  </ion-item>\n\n\n  <!-- Groups List - Exactly matching groups.html -->\n  <ion-list class=\"ion-no-padding ion-padding-horizontal\">\n    <ion-item *ngFor=\"let group of groups | groupFilter:searchGroup\" \n              button \n              detail=\"false\" \n              class=\"ion-margin-bottom\"\n              (click)=\"viewGroup(group.key)\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"group.img\" [alt]=\"group.name\"></ion-img>\n      </ion-thumbnail>\n      \n      <ion-label>\n        <h3 class=\"ion-no-margin\">{{group.name}}</h3>\n        <p class=\"ion-text-wrap\">\n          <ion-text color=\"medium\">\n            <ion-icon name=\"people-outline\"></ion-icon>\n            {{group.members?.length || 0}} Members · \n            <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n            {{group.posts?.length || 0}} posts\n          </ion-text>\n        </p>\n      </ion-label>\n\n      <ion-button slot=\"end\" \n          fill=\"solid\"\n          [color]=\"group.isUserMember ? 'success' : 'primary'\"\n          class=\"join-group-btn\">\n            <ion-icon [name]=\"group.isUserMember ? 'checkmark-outline' : 'add-outline'\"\n                  slot=\"start\"></ion-icon>\n            {{group.isUserMember ? 'Joined' : 'Join'}}\n      </ion-button>\n    </ion-item>\n  </ion-list>\n\n  <!-- Empty State -->\n  <ion-list *ngIf=\"(groups | groupFilter:searchGroup)?.length === 0\">\n    <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-center\">\n        <ion-icon name=\"search-outline\" size=\"large\" color=\"medium\"></ion-icon>\n        <h2>No Groups Found</h2>\n        <p>Try different search terms</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_group-search_group-search_module_ts.js.map