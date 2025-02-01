"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_group-search_group-search_module_ts"],{

/***/ 59060:
/*!*****************************************************!*\
  !*** ./src/app/group-search/group-search.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupSearchPageModule": function() { return /* binding */ GroupSearchPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/share.module */ 32218);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _group_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-search.page */ 74096);








const routes = [
    {
        path: '',
        component: _group_search_page__WEBPACK_IMPORTED_MODULE_1__.GroupSearchPage
    }
];
let GroupSearchPageModule = class GroupSearchPageModule {
};
GroupSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _services_share_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_group_search_page__WEBPACK_IMPORTED_MODULE_1__.GroupSearchPage]
    })
], GroupSearchPageModule);



/***/ }),

/***/ 74096:
/*!***************************************************!*\
  !*** ./src/app/group-search/group-search.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupSearchPage": function() { return /* binding */ GroupSearchPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_group_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./group-search.page.html */ 28960);
/* harmony import */ var _group_search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-search.page.scss */ 38648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);








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
        this.firestore.collection('groups').ref
            .where('categoryId', '==', this.category.key)
            .get().then((groupsRes) => {
            this.groups = [];
            groupsRes.forEach(f => {
                let group;
                group = f.data();
                group.key = f.id;
                if (group.members.some(e => e === this.loggedInUserId)) {
                    group.isUserMember = true;
                }
                else {
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
};
GroupSearchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
GroupSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-group-search',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_group_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_group_search_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router,
        _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController])
], GroupSearchPage);



/***/ }),

/***/ 28960:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/group-search/group-search.page.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"search-toolbar ion-padding-horizontal\">\n    <ion-searchbar \n      [(ngModel)]=\"searchGroup\" \n      mode=\"ios\" \n      (ionCancel)=\"onCancel($event)\" \n      placeholder=\"Search in {{category.name}}...\"\n      animated=\"true\"\n      class=\"custom-searchbar\"\n      clear-icon=\"close-circle\"\n      search-icon=\"search-outline\"\n      showCancelButton=\"always\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Category Header -->\n  <ion-item lines=\"none\" class=\"category-header ion-padding\">\n    <ion-label>\n      <h2>Search in category <ion-text color=\"primary\"><b>{{category.name}}</b></ion-text></h2>\n    </ion-label>\n  </ion-item>\n\n\n  <!-- Groups List - Exactly matching groups.html -->\n  <ion-list class=\"ion-no-padding ion-padding-horizontal\">\n    <ion-item *ngFor=\"let group of groups | groupFilter:searchGroup\" \n              button \n              detail=\"false\" \n              class=\"ion-margin-bottom\"\n              (click)=\"viewGroup(group.key)\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"group.img\" [alt]=\"group.name\"></ion-img>\n      </ion-thumbnail>\n      \n      <ion-label>\n        <h3 class=\"ion-no-margin\">{{group.name}}</h3>\n        <p class=\"ion-text-wrap\">\n          <ion-text color=\"medium\">\n            <ion-icon name=\"people-outline\"></ion-icon>\n            {{group.members?.length || 0}} Members · \n            <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n            {{group.posts?.length || 0}} posts\n          </ion-text>\n        </p>\n      </ion-label>\n\n      <ion-button slot=\"end\" \n          fill=\"solid\"\n          [color]=\"group.isUserMember ? 'success' : 'primary'\"\n          class=\"join-group-btn\">\n            <ion-icon [name]=\"group.isUserMember ? 'checkmark-outline' : 'add-outline'\"\n                  slot=\"start\"></ion-icon>\n            {{group.isUserMember ? 'Joined' : 'Join'}}\n      </ion-button>\n    </ion-item>\n  </ion-list>\n\n  <!-- Empty State -->\n  <ion-list *ngIf=\"(groups | groupFilter:searchGroup)?.length === 0\">\n    <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-center\">\n        <ion-icon name=\"search-outline\" size=\"large\" color=\"medium\"></ion-icon>\n        <h2>No Groups Found</h2>\n        <p>Try different search terms</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 38648:
/*!*****************************************************!*\
  !*** ./src/app/group-search/group-search.page.scss ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = ":host .search-toolbar {\n  --background: transparent;\n  padding-bottom: 8px;\n}\n:host .search-toolbar .custom-searchbar {\n  --background: var(--ion-color-light);\n  --border-radius: 12px;\n  --box-shadow: none;\n  --placeholder-color: var(--ion-color-medium);\n  --icon-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n  padding: 0;\n  height: 46px;\n}\n:host .search-toolbar .custom-searchbar .searchbar-input {\n  font-size: 16px;\n  line-height: 24px;\n}\n:host .search-toolbar .custom-searchbar .searchbar-search-icon {\n  width: 20px;\n  height: 20px;\n}\n:host .search-toolbar .custom-searchbar .searchbar-clear-button {\n  width: 40px;\n  height: 40px;\n}\n:host .category-header h2 {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n}\n:host ion-list {\n  background: transparent;\n}\n:host h2 {\n  font-size: 20px;\n  font-weight: 600;\n}\n:host ion-item {\n  --background: transparent;\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 8px;\n}\n:host ion-item ion-thumbnail {\n  --size: 60px;\n  --border-radius: 8px;\n  margin-right: 16px;\n}\n:host .join-group-btn {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --border-radius: 8px;\n}\n:host .join-group-btn[disabled] {\n  opacity: 1;\n  --background: var(--ion-color-success);\n  --color: var(--ion-color-success-contrast);\n}\n:host .join-group-btn ion-icon {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQU47QUFFTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFSO0FBR007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURSO0FBSU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZSO0FBUUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQU5OO0FBVUU7RUFDRSx1QkFBQTtBQVJKO0FBYUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFYSjtBQWNFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVpKO0FBY0k7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVpOO0FBZ0JFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBZEo7QUFnQkk7RUFDRSxVQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtBQWROO0FBaUJJO0VBQ0UsaUJBQUE7QUFmTiIsImZpbGUiOiJncm91cC1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuc2VhcmNoLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcblxuICAgIC5jdXN0b20tc2VhcmNoYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICBcbiAgICAgIC5zZWFyY2hiYXItaW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoYmFyLXNlYXJjaC1pY29uIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaGJhci1jbGVhci1idXR0b24ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYXRlZ29yeS1oZWFkZXIge1xuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG5cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7ICAvLyBJbXBvcnRhbnQ6IFNldCB0byAwIHNpbmNlIHdlJ3JlIHVzaW5nIGxpc3QgcGFkZGluZ1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7ICAgIC8vIEltcG9ydGFudDogU2V0IHRvIDAgc2luY2Ugd2UncmUgdXNpbmcgbGlzdCBwYWRkaW5nXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgXG4gICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAtLXNpemU6IDYwcHg7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gIH1cblxuICAuam9pbi1ncm91cC1idG4ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIFxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIG9wYWNpdHk6IDE7IC8vIEtlZXAgZnVsbCBvcGFjaXR5IGV2ZW4gd2hlbiBkaXNhYmxlZFxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCk7XG4gICAgfVxuICBcbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_group-search_group-search_module_ts-es2015.js.map