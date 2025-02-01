"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_group-join_group-join_module_ts"],{

/***/ 96781:
/*!*************************************************!*\
  !*** ./src/app/group-join/group-join.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupJoinPageModule": function() { return /* binding */ GroupJoinPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _group_join_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-join.page */ 49399);







const routes = [
    {
        path: '',
        component: _group_join_page__WEBPACK_IMPORTED_MODULE_0__.GroupJoinPage
    }
];
let GroupJoinPageModule = class GroupJoinPageModule {
};
GroupJoinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_group_join_page__WEBPACK_IMPORTED_MODULE_0__.GroupJoinPage]
    })
], GroupJoinPageModule);



/***/ }),

/***/ 49399:
/*!***********************************************!*\
  !*** ./src/app/group-join/group-join.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupJoinPage": function() { return /* binding */ GroupJoinPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_group_join_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./group-join.page.html */ 20997);
/* harmony import */ var _group_join_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-join.page.scss */ 50801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 36363);









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
        this.afAuth.currentUser.then(user => {
            this.loggedInUserId = user === null || user === void 0 ? void 0 : user.uid;
            this.loggedInUser = user;
            console.info('userId', user);
        });
    }
    ngOnInit() {
        this.getGroupData();
    }
    getGroupData() {
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((p) => {
            let group = p.payload.data();
            group.key = p.key;
            this.group = group;
        });
    }
    joinGroup() {
        console.info('loggedinuser', this.loggedInUser);
        if (this.loggedInUser.groups) {
            this.loggedInUser.groups.push(this.groupId);
        }
        else {
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
};
GroupJoinPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
GroupJoinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-group-join',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_group_join_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_group_join_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController])
], GroupJoinPage);



/***/ }),

/***/ 20997:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/group-join/group-join.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/groups\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Join Group</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- Welcome Section -->\n  <div class=\"welcome-section\">\n    <h1>Join <ion-text color=\"primary\">{{group.name}}</ion-text> Group</h1>\n    <p class=\"subtitle\">You're about to join one of our most engaging communities.</p>\n  </div>\n\n  <!-- Guidelines Cards -->\n  <ion-list class=\"guidelines-list\">\n    <!-- Be Kind -->\n    <ion-card class=\"guideline-card\">\n      <ion-card-content>\n        <div class=\"guideline-header\">\n          <ion-icon name=\"heart-outline\" color=\"danger\"></ion-icon>\n          <h2>Be kind</h2>\n        </div>\n        <p>Be respectful of others and be kind. They are here to help you. If you believe someone is not behaving appropriately, let us know.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Be Safe -->\n    <ion-card class=\"guideline-card\">\n      <ion-card-content>\n        <div class=\"guideline-header\">\n          <ion-icon name=\"shield-checkmark-outline\" color=\"success\"></ion-icon>\n          <h2>Be safe</h2>\n        </div>\n        <p>Don't share personal details like phone numbers or addresses in public posts.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Enjoy -->\n    <ion-card class=\"guideline-card\">\n      <ion-card-content>\n        <div class=\"guideline-header\">\n          <ion-icon name=\"happy-outline\" color=\"warning\"></ion-icon>\n          <h2>Enjoy</h2>\n        </div>\n        <p>Remember, we are all in this together.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- One Last Thing -->\n    <ion-card class=\"guideline-card\">\n      <ion-card-content>\n        <div class=\"guideline-header\">\n          <ion-icon name=\"information-circle-outline\" color=\"primary\"></ion-icon>\n          <h2>One last thing</h2>\n        </div>\n        <p>To protect all members, we don't allow promotional or sales content in our groups.</p>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n  <!-- Agreement Section -->\n  <div class=\"agreement-section ion-padding\">\n    <ion-item lines=\"none\" class=\"checkbox-item\">\n      <ion-checkbox slot=\"start\" \n                   [(ngModel)]=\"termsAgreed\">\n      </ion-checkbox>\n      <ion-label class=\"ion-text-wrap\">\n        I agree to look out for and support other members in this group\n      </ion-label>\n    </ion-item>\n  \n    <ion-button expand=\"block\" \n                class=\"join-button\" \n                [disabled]=\"!termsAgreed\" \n                (click)=\"joinGroup()\">\n      <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\n      Join \"{{group.name}}\"\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 50801:
/*!*************************************************!*\
  !*** ./src/app/group-join/group-join.page.scss ***!
  \*************************************************/
/***/ (function(module) {

module.exports = ":host {\n  --page-padding: 16px;\n}\n:host .welcome-section {\n  padding: 24px var(--page-padding) 16px;\n  text-align: center;\n}\n:host .welcome-section h1 {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--ion-color-dark);\n}\n:host .welcome-section .subtitle {\n  margin: 8px 0 0;\n  font-size: 16px;\n  color: var(--ion-color-medium);\n}\n:host .guidelines-list {\n  padding: 0 var(--page-padding);\n  background: transparent;\n}\n:host .guidelines-list .guideline-card {\n  margin: 16px 0;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  background: var(--ion-card-background);\n}\n:host .guidelines-list .guideline-card ion-card-content {\n  padding: 16px;\n}\n:host .guidelines-list .guideline-card .guideline-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n:host .guidelines-list .guideline-card .guideline-header ion-icon {\n  font-size: 24px;\n  margin-right: 12px;\n}\n:host .guidelines-list .guideline-card .guideline-header h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n:host .guidelines-list .guideline-card p {\n  margin: 0;\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  line-height: 1.4;\n}\n:host .agreement-section {\n  position: sticky;\n  bottom: 0;\n  background: var(--ion-background-color);\n  padding-top: 16px;\n  border-top: 1px solid var(--ion-color-light);\n}\n:host .agreement-section .checkbox-item {\n  --background: transparent;\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 16px;\n}\n:host .agreement-section .checkbox-item ion-checkbox {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary);\n  --border-color: var(--ion-color-medium);\n  --border-radius: 4px;\n  margin-right: 16px;\n}\n:host .agreement-section .checkbox-item ion-label {\n  color: var(--ion-color-dark);\n  font-size: 14px;\n  margin-left: 8px;\n}\n:host .agreement-section .join-button {\n  --border-radius: 8px;\n  margin: 0;\n  height: 48px;\n  font-weight: 600;\n  text-transform: none;\n}\n:host .agreement-section .join-button:not([disabled]) {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-primary-contrast);\n}\n:host .agreement-section .join-button ion-icon {\n  margin-right: 8px;\n}\n:host .guideline-card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n:host .guideline-card:active {\n  transform: scale(0.98);\n}\n:host .join-button {\n  transition: opacity 0.2s ease;\n}\n:host .join-button[disabled] {\n  opacity: 0.7;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n:host .guideline-card {\n  animation: slideUp 0.3s ease forwards;\n}\n:host .guideline-card:nth-child(1) {\n  animation-delay: 0.1s;\n}\n:host .guideline-card:nth-child(2) {\n  animation-delay: 0.2s;\n}\n:host .guideline-card:nth-child(3) {\n  animation-delay: 0.3s;\n}\n:host .guideline-card:nth-child(4) {\n  animation-delay: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLWpvaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjtBQUNFO0VBQ0Usc0NBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDTjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUFOO0FBSUU7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0FBRko7QUFJSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esc0NBQUE7QUFGTjtBQUlNO0VBQ0UsYUFBQTtBQUZSO0FBS007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBS1E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFIVjtBQU1RO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBSlY7QUFRTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQU5SO0FBV0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7QUFUSjtBQVdJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVROO0FBV007RUFDRSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBVFI7QUFZTTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVlI7QUFjSTtFQUNFLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBWk47QUFjTTtFQUNFLHNDQUFBO0VBQ0EsMENBQUE7QUFaUjtBQWVNO0VBQ0UsaUJBQUE7QUFiUjtBQW9CQTtFQUNFLHFEQUFBO0FBbEJGO0FBb0JFO0VBQ0Usc0JBQUE7QUFsQko7QUFzQkE7RUFDRSw2QkFBQTtBQXBCRjtBQXNCRTtFQUNFLFlBQUE7QUFwQko7QUF5QkE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQXZCRjtFQXlCQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXZCRjtBQUNGO0FBMEJBO0VBQ0UscUNBQUE7QUF4QkY7QUEwQkk7RUFDRSxxQkFBQTtBQXhCTjtBQXVCSTtFQUNFLHFCQUFBO0FBckJOO0FBb0JJO0VBQ0UscUJBQUE7QUFsQk47QUFpQkk7RUFDRSxxQkFBQTtBQWZOIiwiZmlsZSI6Imdyb3VwLWpvaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLXBhZ2UtcGFkZGluZzogMTZweDtcblxuICAud2VsY29tZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAyNHB4IHZhcigtLXBhZ2UtcGFkZGluZykgMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgaDEge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB9XG4gIH1cblxuICAuZ3VpZGVsaW5lcy1saXN0IHtcbiAgICBwYWRkaW5nOiAwIHZhcigtLXBhZ2UtcGFkZGluZyk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAuZ3VpZGVsaW5lLWNhcmQge1xuICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtYmFja2dyb3VuZCk7XG5cbiAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZ3VpZGVsaW5lLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWdyZWVtZW50LXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgXG4gICAgLmNoZWNrYm94LWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgXG4gICAgICBpb24tY2hlY2tib3gge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICB9XG4gIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmpvaW4tYnV0dG9uIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgXG4gICAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICB9XG4gIFxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG5cbiAgLy8gQWRkIHRvIHRoZSBleGlzdGluZyBTQ1NTXG4uZ3VpZGVsaW5lLWNhcmQge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxufVxuXG4uam9pbi1idXR0b24ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgXG4gICZbZGlzYWJsZWRdIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cblxuLy8gT3B0aW9uYWw6IEFkZCBlbnRyYW5jZSBhbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLmd1aWRlbGluZS1jYXJkIHtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgZWFzZSBmb3J3YXJkcztcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA0IHtcbiAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAjeyRpICogMC4xfXM7XG4gICAgfVxuICB9XG59XG5cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_group-join_group-join_module_ts-es2015.js.map