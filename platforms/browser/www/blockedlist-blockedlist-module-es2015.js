(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blockedlist-blockedlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blockedlist/blockedlist.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blockedlist/blockedlist.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Blocked Contacts</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p *ngIf=\"blockedList.length == 0\" style=\"text-align: center\">No Blocked List</p>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let user of blockedList\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"{{user.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <ion-text>\r\n          <h2>{{user.name}}</h2>\r\n        </ion-text>\r\n      </ion-label>\r\n      <ion-button slot=\"end\" fill=\"outline\" (click)=\"unblock(user.key)\">Unblock</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/blockedlist/blockedlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/blockedlist/blockedlist.module.ts ***!
  \***************************************************/
/*! exports provided: BlockedlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockedlistPageModule", function() { return BlockedlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _blockedlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blockedlist.page */ "./src/app/blockedlist/blockedlist.page.ts");







const routes = [
    {
        path: '',
        component: _blockedlist_page__WEBPACK_IMPORTED_MODULE_6__["BlockedlistPage"]
    }
];
let BlockedlistPageModule = class BlockedlistPageModule {
};
BlockedlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_blockedlist_page__WEBPACK_IMPORTED_MODULE_6__["BlockedlistPage"]]
    })
], BlockedlistPageModule);



/***/ }),

/***/ "./src/app/blockedlist/blockedlist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/blockedlist/blockedlist.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrZWRsaXN0L2Jsb2NrZWRsaXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/blockedlist/blockedlist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/blockedlist/blockedlist.page.ts ***!
  \*************************************************/
/*! exports provided: BlockedlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockedlistPage", function() { return BlockedlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");





let BlockedlistPage = class BlockedlistPage {
    constructor(afAuth, dataProvider, firestore) {
        this.afAuth = afAuth;
        this.dataProvider = dataProvider;
        this.firestore = firestore;
        this.blockedList = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.dataProvider.getBlockedLists().get().then((conversations => {
            let tmp = [];
            conversations.forEach(conversation => {
                // fetch blocked conversation & user info
                this.dataProvider.getUser(conversation.id).snapshotChanges().subscribe((data) => {
                    tmp.push({ key: conversation.id, name: data.name, img: data.img });
                });
            });
            console.log(tmp);
            this.blockedList = tmp;
        }));
    }
    unblock(uid) {
        console.log(uid);
        this.firestore.doc('accounts/' + this.afAuth.auth.currentUser.uid + '/conversations/' + uid).update({
            blocked: false
        });
        // this.afdb.object('accounts/' + this.afAuth.auth.currentUser.uid + '/conversations/' + uid).update({
        //   blocked: false
        // })
    }
};
BlockedlistPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
BlockedlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blockedlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blockedlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blockedlist/blockedlist.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blockedlist.page.scss */ "./src/app/blockedlist/blockedlist.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], BlockedlistPage);



/***/ })

}]);
//# sourceMappingURL=blockedlist-blockedlist-module-es2015.js.map