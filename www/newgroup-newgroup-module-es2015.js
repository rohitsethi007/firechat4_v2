(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newgroup-newgroup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/newgroup/newgroup.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newgroup/newgroup.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Create New Group</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"outline\" (click)=\"done()\">Create</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"group\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"cover-wrapper\">\r\n            <img src=\"{{group.img}}\" *ngIf=\"group.img != ''\" tappable (click)=\"setGroupPhoto()\"\r\n          onError=\"this.src='./assets/images/default-group.png'\" />\r\n        <img src=\"{{group.img}}\"\r\n          onError=\"this.src='./assets/images/default-group.png'\" *ngIf=\"group.img == ''\" tappable\r\n          (click)=\"setGroupPhoto()\" />\r\n            </div>\r\n        </ion-col>\r\n        </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n        <form [formGroup]=\"myForm\">\r\n          <ion-list style=\"margin:0;\" lines=\"none\">\r\n            <ion-item class=\"input-item\">\r\n              <ion-label position=\"stacked\">Title:</ion-label>\r\n              <ion-input formControlName=\"groupName\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name of Group\">\r\n              </ion-input>\r\n              <div *ngFor=\"let validation of errorMessages.groupName\">\r\n                <p class=\"error\"\r\n                  *ngIf=\"myForm.get('groupName').hasError(validation.type) && (myForm.get('groupName').dirty || myForm.get('groupName').touched || submitAttempt) \">\r\n                  {{validation.message}}\r\n                </p>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Description</ion-label>\r\n              <ion-textarea formControlName=\"groupDescription\" rows=\"3\" [(ngModel)]=\"description\"\r\n                placeholder=\"Describe this Group\"></ion-textarea>\r\n              <div *ngFor=\"let validation of errorMessages.groupDescription\">\r\n                <p class=\"error\"\r\n                  *ngIf=\"myForm.get('groupDescription').hasError(validation.type) && (myForm.get('groupDescription').dirty || myForm.get('groupDescription').touched || submitAttempt) \">\r\n                  {{validation.message}}\r\n                </p>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Group Tags</ion-label>\r\n              <ion-textarea formControlName=\"groupTags\" rows=\"3\" [(ngModel)]=\"groupTags\"\r\n                placeholder=\"Add Group Tags in each line.\"></ion-textarea>\r\n              <div *ngFor=\"let validation of errorMessages.groupTags\">\r\n                <p class=\"error\"\r\n                  *ngIf=\"myForm.get('groupTags').hasError(validation.type) && (myForm.get('groupTags').dirty || myForm.get('groupTags').touched || submitAttempt) \">\r\n                  {{validation.message}}\r\n                </p>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/newgroup/newgroup.module.ts":
/*!*********************************************!*\
  !*** ./src/app/newgroup/newgroup.module.ts ***!
  \*********************************************/
/*! exports provided: NewgroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgroupPageModule", function() { return NewgroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _newgroup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newgroup.page */ "./src/app/newgroup/newgroup.page.ts");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");








const routes = [
    {
        path: '',
        component: _newgroup_page__WEBPACK_IMPORTED_MODULE_6__["NewgroupPage"]
    }
];
let NewgroupPageModule = class NewgroupPageModule {
};
NewgroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_newgroup_page__WEBPACK_IMPORTED_MODULE_6__["NewgroupPage"]]
    })
], NewgroupPageModule);



/***/ }),

/***/ "./src/app/newgroup/newgroup.page.scss":
/*!*********************************************!*\
  !*** ./src/app/newgroup/newgroup.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cover-wrapper {\n  margin-bottom: var(--page-margin);\n  text-align: center;\n  padding-top: 5px;\n}\n.cover-wrapper .cover-anchor {\n  display: block;\n}\n.cover-wrapper .cover-icon-wrapper {\n  margin: 0px 20%;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.cover-wrapper .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3Z3JvdXAvQzpcXFVzZXJzXFxzZXRoaVxcZmlyZWNoYXQ0X3YyXFxmaXJlY2hhdDQvc3JjXFxhcHBcXG5ld2dyb3VwXFxuZXdncm91cC5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld2dyb3VwL25ld2dyb3VwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDRSxjQUFBO0FDRU47QURDSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDTjtBREVJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvbmV3Z3JvdXAvbmV3Z3JvdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdmVyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIC5jb3Zlci1hbmNob3Ige1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY292ZXItaWNvbi13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luOiAwcHggMjAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1pdGVtIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB9XHJcbiAgfSIsIi5jb3Zlci13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uY292ZXItd3JhcHBlciAuY292ZXItYW5jaG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY292ZXItd3JhcHBlciAuY292ZXItaWNvbi13cmFwcGVyIHtcbiAgbWFyZ2luOiAwcHggMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvdmVyLXdyYXBwZXIgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/newgroup/newgroup.page.ts":
/*!*******************************************!*\
  !*** ./src/app/newgroup/newgroup.page.ts ***!
  \*******************************************/
/*! exports provided: NewgroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgroupPage", function() { return NewgroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");











let NewgroupPage = class NewgroupPage {
    constructor(router, imageProvider, dataProvider, alertCtrl, firestore, afAuth, loadingProvider, camera, formBuilder) {
        this.router = router;
        this.imageProvider = imageProvider;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.errorMessages = {
            groupName: [
                { type: 'required', message: 'Name is a required field.' }
            ],
            groupDescription: [
                { type: 'required', message: 'Description is a required field.' }
            ],
            groupTags: [
                { type: 'required', message: 'GroupTags is a required field.' }
            ]
        };
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            groupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
            ])),
            groupDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
            ])),
            groupTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
            ]))
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // Initialize
        this.group = {
            img: './assets/images/default-group.png',
            dateCreated: new Date().toString(),
            messages: [],
            members: [],
            name: '',
            description: '',
            groupTags: []
        };
        this.searchFriend = '';
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((accounts) => {
            this.account = accounts.payload.data();
            if (!this.groupMembers) {
                this.groupMembers = [this.account];
            }
            else {
                this.friends = [];
            }
        });
    }
    // Proceed with group creation.
    done() {
        this.submitAttempt = true;
        if (this.myForm.valid) {
            this.loadingProvider.show();
            let messages = [];
            // Add system message that group is created.
            messages.push({
                date: new Date().toString(),
                sender: this.afAuth.auth.currentUser.uid,
                type: 'system',
                message: 'This group has been created.',
                icon: 'md-chatbubbles'
            });
            // Add members of the group.
            let members = [];
            for (let i = 0; i < this.groupMembers.length; i++) {
                members.push(this.groupMembers[i].userId);
            }
            // Add group info and date.
            this.group.dateCreated = new Date().toString();
            this.group.messages = messages;
            this.group.members = members;
            this.group.name = this.name;
            this.group.description = this.description;
            this.group.groupTags = this.groupTags.split('\n');
            // Add group to database.
            this.firestore.collection('groups').add(this.group).then((success) => {
                let groupId = success.id;
                this.router.navigateByUrl('/group/' + groupId);
                this.account.groups.push(groupId);
                this.dataProvider.getCurrentUser().update({
                    groups: this.account.groups
                });
            });
        }
    }
    // Set group photo.
    setGroupPhoto() {
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
                        this.imageProvider.setGroupPhoto(this.group, this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Take Photo',
                    handler: () => {
                        this.imageProvider.setGroupPhoto(this.group, this.camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).then(r => r.present());
    }
};
NewgroupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] }
];
NewgroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newgroup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newgroup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/newgroup/newgroup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./newgroup.page.scss */ "./src/app/newgroup/newgroup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]])
], NewgroupPage);



/***/ })

}]);
//# sourceMappingURL=newgroup-newgroup-module-es2015.js.map