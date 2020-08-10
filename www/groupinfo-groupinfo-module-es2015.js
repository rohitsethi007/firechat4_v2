(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groupinfo-groupinfo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/groupinfo/groupinfo.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groupinfo/groupinfo.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"group\">{{group.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"group\">\r\n    <ion-row style=\"background:#f3f3f3\" padding>\r\n      <ion-col size=\"8\">\r\n        <h4 tappable (click)=\"setName()\">{{group.name}} <ion-icon name=\"create\"></ion-icon>\r\n        </h4>\r\n        <p tappable style=\"color:#aaa\" (click)=\"setDescription()\">{{group.description}} <ion-icon name=\"create\">\r\n          </ion-icon>\r\n        </p>\r\n        <p style=\"color:#aaa;margin:0\">Started {{group.dateCreated | DateFormat}}</p>\r\n        <div>\r\n          <ion-button size=\"small\" (click)=\"leaveGroup()\" *ngIf=\"groupMembers && groupMembers.length > 1\">Leave\r\n          </ion-button>\r\n          <ion-button size=\"small\" (click)=\"deleteGroup()\" *ngIf=\"groupMembers && groupMembers.length <= 1\">Delete\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <img src=\"{{group.img}}\" style=\"border-radius: 100%; width: 80px; height: 80px;\" tappable (click)=\"setPhoto()\"\r\n          onError=\"this.src='./assets/images/default-group.png'\">\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-list *ngIf=\"groupMembers\" lines=\"none\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-text>\r\n            Group Members ({{groupMembers.length}})\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-button slot=\"end\" (click)=\"addMembers()\" fill=\"outline\">Add</ion-button>\r\n      </ion-item>\r\n      <ion-item *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.$key)\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-text>\r\n            <h2>{{member.name}}</h2>\r\n          </ion-text>\r\n          <ion-text>\r\n            <p>{{member.description}}</p>\r\n          </ion-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwaW5mby9ncm91cGluZm8ucGFnZS5zY3NzIn0= */");

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
            this.user = Object.assign({ $key: account.key }, account);
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