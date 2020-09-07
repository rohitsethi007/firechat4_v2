(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groupinfo-groupinfo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/groupinfo/groupinfo.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groupinfo/groupinfo.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"group\">{{group.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"group\"> \n    <ion-row padding>\n      <div class=\"group-info\">\n        <div class=\"group-img\">\n          <img src=\"{{group.img}}\">\n        </div>\n        <div class=\"group-name\">    \n          {{group.name}}\n        </div>\n        <div class=\"group-desc\">\n          {{group.description}}\n        </div>\n        <div class=\"group-name\"> \n          Group Tags\n          </div>\n          <div class=\"group-tags\">\n            <ion-row>\n              <div class=\"tags\" *ngFor=\"let tag of group.groupTags\">\n                <span class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag}}</span>\n              </div>\n            </ion-row>\n          </div>\n        <div>\n          <ion-button expand=\"block\" color=\"secondary\" (click)=\"leaveGroup()\" *ngIf=\"groupMembers && groupMembers.length > 1\">Leave Group\n          </ion-button>\n        </div> \n   </div>\n \n    </ion-row>\n <ion-list *ngIf=\"groupMembers\" lines=\"none\">\n      <ion-item>\n        <ion-label>\n          <ion-text>\n            Group Members ({{groupMembers.length}})\n          </ion-text>\n        </ion-label>\n        <ion-button slot=\"end\" (click)=\"addMembers()\" fill=\"outline\">Add</ion-button>\n      </ion-item>\n      <ion-item *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.$key)\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\n        </ion-avatar>\n        <ion-label>\n          <ion-text>\n            <h2>{{member.name}}</h2>\n          </ion-text>\n          <ion-text>\n            <p>{{member.description}}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/groupinfo/groupinfo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/groupinfo/groupinfo.module.ts ***!
  \***********************************************/
/*! exports provided: GroupinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupinfoPageModule", function() { return GroupinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _groupinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groupinfo.page */ "./src/app/groupinfo/groupinfo.page.ts");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");








const routes = [
    {
        path: '',
        component: _groupinfo_page__WEBPACK_IMPORTED_MODULE_6__["GroupinfoPage"]
    }
];
let GroupinfoPageModule = class GroupinfoPageModule {
};
GroupinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_groupinfo_page__WEBPACK_IMPORTED_MODULE_6__["GroupinfoPage"]]
    })
], GroupinfoPageModule);



/***/ }),

/***/ "./src/app/groupinfo/groupinfo.page.scss":
/*!***********************************************!*\
  !*** ./src/app/groupinfo/groupinfo.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-rating-2-color: #aa6c39;\n  --page-rating-1-color: #bbb2b2;\n}\n\n.group-info {\n  margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);\n}\n\n.group-info .group-name {\n  padding-top: var(--page-margin);\n  padding-bottom: var(--page-margin);\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  text-align: left;\n  font-weight: bold;\n  font-size: 19px;\n}\n\n.group-info .group-tags {\n  padding-bottom: calc(var(--page-margin));\n}\n\n.group-info .group-tags .tags {\n  padding-right: 5px;\n}\n\n.group-info .group-tags .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"0\"] {\n  color: var(--page-rating-1-color);\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"1\"] {\n  color: var(--page-rating-2-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaXRhc2V0aGkvRG9jdW1lbnRzL0dpdEh1Yi9maXJlY2hhdDRfdjIvc3JjL2FwcC9ncm91cGluZm8vZ3JvdXBpbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ3JvdXBpbmZvL2dyb3VwaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUZBQUE7QUNDSjs7QURHSTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRE47O0FESUk7RUFDRSx3Q0FBQTtBQ0ZOOztBRElNO0VBQ0Usa0JBQUE7QUNGUjs7QURJTTtFQUVFLG1EQUFBO0VBTVEsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDUmhCOztBRFNnQjtFQUNFLGlDQUFBO0FDUGxCOztBRFNnQjtFQUNFLGlDQUFBO0FDUGxCIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBpbmZvL2dyb3VwaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAgIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2FhNmMzOTtcbiAgICAtLXBhZ2UtcmF0aW5nLTEtY29sb3I6ICNiYmIyYjI7XG4gIH1cblxuLmdyb3VwLWluZm8ge1xuICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC5ncm91cC1pbWcge1xuICBcbiAgICB9XG4gICAgLmdyb3VwLW5hbWUge1xuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB9XG5cbiAgICAuZ3JvdXAtdGFncyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikpO1xuICAgICBcbiAgICAgIC50YWdzIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICBcbiAgICAgIC5pdGVtLXJhdGluZyB7XG4gICAgICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMSk7XG4gICAgICAgICAgICAgICAgLy9wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTEtY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0yLWNvbG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgfVxuICAgIH1cbiAgfSIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXJhdGluZy0yLWNvbG9yOiAjYWE2YzM5O1xuICAtLXBhZ2UtcmF0aW5nLTEtY29sb3I6ICNiYmIyYjI7XG59XG5cbi5ncm91cC1pbmZvIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtbmFtZSB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE5cHg7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtdGFncyB7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSk7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtdGFncyAudGFncyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5ncm91cC1pbmZvIC5ncm91cC10YWdzIC50YWdzIC5pdGVtLXJhdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAwLjM1KTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtdGFncyAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG59XG4uZ3JvdXAtaW5mbyAuZ3JvdXAtdGFncyAudGFncyAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG59Il19 */");

/***/ }),

/***/ "./src/app/groupinfo/groupinfo.page.ts":
/*!*********************************************!*\
  !*** ./src/app/groupinfo/groupinfo.page.ts ***!
  \*********************************************/
/*! exports provided: GroupinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupinfoPage", function() { return GroupinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");









let GroupinfoPage = class GroupinfoPage {
    // GroupInfoPage
    // This is the page where the user can view group information, change group information, add members, and leave/delete group.
    constructor(router, route, dataProvider, firestore, loadingProvider, modalCtrl, alertCtrl, imageProvider, camera) {
        this.router = router;
        this.route = route;
        this.dataProvider = dataProvider;
        this.firestore = firestore;
        this.loadingProvider = loadingProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.camera = camera;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // Initialize
        this.groupId = this.route.snapshot.params.id;
        console.log(this.groupId);
        // Get group details.
        this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((groupRes) => {
            let group = Object.assign({ $key: groupRes.payload.id }, groupRes.payload.data());
            console.log(group);
            if (group != null) {
                this.loadingProvider.show();
                this.group = group;
                console.log('group.members', group.members);
                group.members.forEach((memberId) => {
                    this.dataProvider.getUser(memberId).snapshotChanges().subscribe((memberRes) => {
                        let member = Object.assign({ $key: memberRes.payload.id }, memberRes.payload.data());
                        this.addUpdateOrRemoveMember(member);
                    });
                });
                this.loadingProvider.hide();
            }
            else {
                this.router.navigateByUrl('/');
            }
        });
        // Get user details.
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((accounts) => {
            let account = accounts.payload.data();
            this.user = Object.assign({ $key: account.userId }, account);
        });
    }
    // Delete subscription.
    // ionViewDidLeave() {
    //   if(this.deleteSubscription)
    //
    // }
    // Check if user exists in the group then add/update user.
    // If the user has already left the group, remove user from the list.
    addUpdateOrRemoveMember(member) {
        console.log(member);
        if (this.group) {
            if (this.group.members.indexOf(member.$key) > -1) {
                // User exists in the group.
                if (!this.groupMembers) {
                    this.groupMembers = [member];
                }
                else {
                    var index = -1;
                    console.log('this.groupMembers.length:', this.groupMembers);
                    for (var i = 0; i < this.groupMembers.length; i++) {
                        if (this.groupMembers[i].$key == member.$key) {
                            index = i;
                        }
                    }
                    // Add/Update User.
                    if (index > -1) {
                        this.groupMembers[index] = member;
                    }
                    else {
                        this.groupMembers.push(member);
                    }
                }
            }
            else {
                // User already left the group, remove member from list.
                var index1 = -1;
                for (var j = 0; j < this.groupMembers.length; j++) {
                    if (this.groupMembers[j].$key == member.$key) {
                        index1 = j;
                    }
                }
                if (index1 > -1) {
                    this.groupMembers.splice(index1, 1);
                }
            }
        }
    }
    // View user info.
    viewUser(userId) {
        if (this.dataProvider.getCurrentUserId !== userId) {
            this.router.navigateByUrl('/userinfo/' + userId);
        }
    }
    // Enlarge group image.
    enlargeImage(img) {
        // let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
        // imageModal.present();
    }
    // Change group name.
    setName() {
        this.alert = this.alertCtrl.create({
            header: 'Change Group Name',
            message: 'Please enter a new group name.',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Group Name',
                    value: this.group.name
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Save',
                    handler: data => {
                        let name = data['name'];
                        if (this.group.name != name) {
                            this.loadingProvider.show();
                            // Add system message.
                            this.group.messages.push({
                                date: new Date().toString(),
                                sender: this.user.$key,
                                type: 'system',
                                message: this.user.name + ' has changed the group name to: ' + name + '.',
                                icon: 'md-create'
                            });
                            // Update group on database.
                            this.dataProvider.getGroup(this.groupId).update({
                                name: name,
                                messages: this.group.messages
                            }).then((success) => {
                                this.loadingProvider.hide();
                                this.loadingProvider.showToast('Updated Succesfully');
                            }).catch((error) => {
                                this.loadingProvider.hide();
                                this.loadingProvider.showToast('Something went wrong');
                            });
                        }
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Change group image, the user is asked if they want to take a photo or choose from gallery.
    setPhoto() {
        this.alert = this.alertCtrl.create({
            header: 'Set Group Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Choose from Gallery',
                    handler: () => {
                        this.loadingProvider.show();
                        // Upload photo and set to group photo, afterwards, return the group object as promise.
                        this.imageProvider.setGroupPhotoPromise(this.group, this.camera.PictureSourceType.PHOTOLIBRARY).then((group) => {
                            // Add system message.
                            this.group.messages.push({
                                date: new Date().toString(),
                                sender: this.user.$key,
                                type: 'system',
                                message: this.user.name + ' has changed the group photo.',
                                icon: 'ios-camera'
                            });
                            // Update group image on database.
                            this.dataProvider.getGroup(this.groupId).update({
                                img: group.img,
                                messages: this.group.messages
                            }).then((success) => {
                                this.loadingProvider.hide();
                                this.loadingProvider.showToast("Updated Successfully");
                            }).catch((error) => {
                                this.loadingProvider.hide();
                                this.loadingProvider.showToast("Something went wrong");
                            });
                        });
                    }
                },
                {
                    text: 'Take Photo',
                    handler: () => {
                        this.loadingProvider.show();
                        // Upload photo and set to group photo, afterwwards, return the group object as promise.
                        this.imageProvider.setGroupPhotoPromise(this.group, this.camera.PictureSourceType.CAMERA).then((group) => {
                            // Add system message.
                            this.group.messages.push({
                                date: new Date().toString(),
                                sender: this.user.$key,
                                type: 'system',
                                message: this.user.name + ' has changed the group photo.',
                                icon: 'ios-camera'
                            });
                            // Update group image on database.
                            this.dataProvider.getGroup(this.groupId).update({
                                img: group.img,
                                messages: this.group.messages
                            }).then((success) => {
                                this.loadingProvider.hide();
                                this.loadingProvider.showToast("Updated Successfully");
                            }).catch((error) => {
                                this.loadingProvider.hide();
                                this.loadingProvider.showToast("Something went wrong");
                            });
                        });
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Change group description.
    setDescription() {
        this.alert = this.alertCtrl.create({
            header: 'Change Group Description',
            message: "Please enter a new group description.",
            inputs: [
                {
                    name: 'description',
                    placeholder: 'Group Description',
                    value: this.group.description
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => { }
                },
                {
                    text: 'Save',
                    handler: data => {
                        let description = data["description"];
                        if (this.group.description != description) {
                            this.loadingProvider.show();
                            // Add system message.
                            this.group.messages.push({
                                date: new Date().toString(),
                                sender: this.user.$key,
                                type: 'system',
                                message: this.user.name + ' has changed the group description.',
                                icon: 'md-clipboard'
                            });
                            // Update group on database.
                            this.dataProvider.getGroup(this.groupId).update({
                                description: description,
                                messages: this.group.messages
                            }).then((success) => {
                                this.loadingProvider.hide();
                                this.loadingProvider.showToast("Updated Successfully");
                            }).catch((error) => {
                                this.loadingProvider.hide();
                                this.loadingProvider.showToast("Something went wrong");
                            });
                        }
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Leave group.
    leaveGroup() {
        this.alert = this.alertCtrl.create({
            header: 'Confirm Leave',
            message: 'Are you sure you want to leave this group?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Leave',
                    handler: data => {
                        this.loadingProvider.show();
                        // Remove member from group.
                        this.group.members.splice(this.group.members.indexOf(this.user.$key), 1);
                        // Add system message.
                        this.group.messages.push({
                            date: new Date().toString(),
                            sender: this.user.$key,
                            type: 'system',
                            message: this.user.name + ' has left this group.',
                            icon: 'md-log-out'
                        });
                        // Update group on database.
                        this.dataProvider.getGroup(this.groupId).update({
                            members: this.group.members,
                            messages: this.group.messages
                        }).then((success) => {
                            // Remove group from user's group list.
                            this.firestore.doc('/accounts/' + this.dataProvider.getCurrentUserId + '/groups/' + this.groupId).delete().then(() => {
                                // Pop this view because user already has left this group.
                                this.group = null;
                                setTimeout(() => {
                                    this.loadingProvider.hide();
                                    this.router.navigateByUrl('/');
                                }, 300);
                            });
                        }).catch((error) => {
                            this.loadingProvider.showToast("Something went wrong");
                        });
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Delete group.
    deleteGroup() {
        this.alert = this.alertCtrl.create({
            header: 'Confirm Delete',
            message: 'Are you sure you want to delete this group?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Delete',
                    handler: data => {
                        let group = JSON.parse(JSON.stringify(this.group));
                        console.log(group);
                        // Delete all images of image messages.
                        group.messages.forEach((message) => {
                            if (message.type == 'image') {
                                console.log("Delete: " + message.url + " of " + group.$key);
                                this.imageProvider.deleteGroupImageFile(group.$key, message.url);
                            }
                        });
                        this.firestore.doc('/accounts/' + this.dataProvider.getCurrentUserId + '/groups/' + group.$key).delete().then(() => {
                            this.dataProvider.getGroup(group.$key).delete();
                        });
                        // Delete group image.
                        console.log("Delete: " + group.img);
                        this.imageProvider.deleteImageFile(group.img);
                        // this.navCtrl.popToRoot();
                        this.router.navigateByUrl('/');
                    }
                }
            ]
        }).then(r => r.present());
    }
    // Add members.
    addMembers() {
        this.router.navigateByUrl('/addmembers/' + this.groupId);
    }
};
GroupinfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] }
];
GroupinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groupinfo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groupinfo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/groupinfo/groupinfo.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groupinfo.page.scss */ "./src/app/groupinfo/groupinfo.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]])
], GroupinfoPage);



/***/ })

}]);
//# sourceMappingURL=groupinfo-groupinfo-module-es2015.js.map