(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-join-group-join-module"],{

/***/ "0B8C":
/*!***********************************************!*\
  !*** ./src/app/group-join/group-join.page.ts ***!
  \***********************************************/
/*! exports provided: GroupJoinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupJoinPage", function() { return GroupJoinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_group_join_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./group-join.page.html */ "80LO");
/* harmony import */ var _group_join_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-join.page.scss */ "YFXC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);









let GroupJoinPage = class GroupJoinPage {
    constructor(dataProvider, route, firestore, navCtrl) {
        this.dataProvider = dataProvider;
        this.route = route;
        this.firestore = firestore;
        this.navCtrl = navCtrl;
        this.group = {};
        this.termsAgreed = false;
        this.groupId = this.route.snapshot.params.id;
        this.dataProvider.getCurrentUser().get().subscribe((u) => {
            let user = u.data();
            user.userId = firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid;
            ;
            this.loggedInUser = user;
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
        if (this.loggedInUser.groups) {
            this.loggedInUser.groups.push(this.groupId);
        }
        else {
            this.loggedInUser.groups = [this.groupId];
        }
        // Update group data on the database.
        this.dataProvider.getUser(this.loggedInUser.userId).update({
            groups: this.loggedInUser.groups
        }).then(() => {
            // Add friend as members of the group.
            this.group.members.push(firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid);
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
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
GroupJoinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-group-join',
        template: _raw_loader_group_join_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_group_join_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])
], GroupJoinPage);



/***/ }),

/***/ "80LO":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group-join/group-join.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Join Group</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\">\n    <ion-row class=\"section\">\n      <span class=\"heading\">Join {{group.name}}</span>\n      <br>\n      <span class=\"section-text\">Excitenly, you are about to join one of most interesting groups.</span>\n    </ion-row>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-row class=\"section\">\n      <span class=\"heading kind\">Be kind</span>\n      <br>\n      <span class=\"section-text\">Be respectful of others and be kind. They are here to help you. If you believe someone is not behaving in the spirit, let us know.</span>\n    </ion-row>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-row class=\"section\">\n      <span class=\"heading safe\">Be safe</span>\n      <br>\n      <span class=\"section-text\">Don't post your personal details like phone number, address etc in public posts.</span>\n    </ion-row>\n  </ion-item>\n  <ion-item lines=\"none\">\n  <ion-row class=\"section\">\n    <span class=\"heading enjoy\">Enjoy</span>\n    <br>\n    <span class=\"section-text\">Remember, we are all in the same boat.</span>\n  </ion-row>\n</ion-item>\n <ion-item lines=\"none\">\n    <ion-row class=\"section\">\n      <span class=\"heading last\">One last thing</span>\n      <br>\n      <span class=\"section-text\">To protect all members on the app we don't allow promoting, selling in our apps</span>\n    </ion-row>\n  </ion-item>\n  <ion-item text-wrap lines=\"none\">\n    <ion-row>\n      <ion-col size=1>\n    <ion-checkbox [(ngModel)]=\"termsAgreed\"></ion-checkbox>\n  </ion-col>\n    <ion-col  size=11>\n    <ion-label text-wrap class=\"agree\">I agree to look out for and support other members on this group.</ion-label>\n  </ion-col>\n</ion-row>\n</ion-item>\n  <ion-item lines=\"none\">\n  <ion-button color=\"secondary\" class=\"join ion-text-capitalize\" expand=\"block\" [disabled]=\"!termsAgreed\" (click)=\"joinGroup()\">Join &nbsp;<b>\"{{group.name}}\" </b>&nbsp; group</ion-button>\n</ion-item>\n</ion-content>\n");

/***/ }),

/***/ "YFXC":
/*!*************************************************!*\
  !*** ./src/app/group-join/group-join.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n  --ion-font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n}\n\n.section {\n  width: 100%;\n}\n\n.section .heading {\n  padding: var(--page-margin);\n  padding-top: calc(var(--page-margin) * 2);\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  width: 100%;\n}\n\n.section .kind {\n  color: blue;\n}\n\n.section .safe {\n  color: orange;\n}\n\n.section .enjoy {\n  color: turquoise;\n}\n\n.section .last {\n  color: royalblue;\n}\n\n.section .section-text {\n  padding: var(--page-margin);\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n\n.agree {\n  font-weight: bold;\n}\n\n.join {\n  width: 100%;\n  height: 40px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAtam9pbi9ncm91cC1qb2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3R0FBQTtBQUNKOztBQUVFO0VBQ0ksV0FBQTtBQUNOOztBQUNFO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtHQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFLRTtFQUNFLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSwyQkFBQTtFQUNBLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBUUE7RUFDRSxpQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9ncm91cC1qb2luL2dyb3VwLWpvaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuIFxyXG4gIC5oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAua2luZCB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICB9XHJcblxyXG4gIC5zYWZlIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgfVxyXG5cclxuICAuZW5qb3kge1xyXG4gICAgY29sb3I6IHR1cnF1b2lzZVxyXG4gIH1cclxuXHJcbiAgLmxhc3Qge1xyXG4gICAgY29sb3I6IHJveWFsYmx1ZTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRleHQge1xyXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYWdyZWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uam9pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "Z4nk":
/*!*************************************************!*\
  !*** ./src/app/group-join/group-join.module.ts ***!
  \*************************************************/
/*! exports provided: GroupJoinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupJoinPageModule", function() { return GroupJoinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _group_join_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-join.page */ "0B8C");







const routes = [
    {
        path: '',
        component: _group_join_page__WEBPACK_IMPORTED_MODULE_6__["GroupJoinPage"]
    }
];
let GroupJoinPageModule = class GroupJoinPageModule {
};
GroupJoinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_group_join_page__WEBPACK_IMPORTED_MODULE_6__["GroupJoinPage"]]
    })
], GroupJoinPageModule);



/***/ })

}]);
//# sourceMappingURL=group-join-group-join-module-es2015.js.map