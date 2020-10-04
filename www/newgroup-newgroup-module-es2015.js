(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newgroup-newgroup-module"],{

/***/ "T2Rd":
/*!*********************************************!*\
  !*** ./src/app/newgroup/newgroup.module.ts ***!
  \*********************************************/
/*! exports provided: NewgroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgroupPageModule", function() { return NewgroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _newgroup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newgroup.page */ "fiZI");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "vxGH");








const routes = [
    {
        path: '',
        component: _newgroup_page__WEBPACK_IMPORTED_MODULE_6__["NewgroupPage"]
    }
];
let NewgroupPageModule = class NewgroupPageModule {
};
NewgroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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

/***/ "fiZI":
/*!*******************************************!*\
  !*** ./src/app/newgroup/newgroup.page.ts ***!
  \*******************************************/
/*! exports provided: NewgroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgroupPage", function() { return NewgroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_newgroup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./newgroup.page.html */ "peJf");
/* harmony import */ var _newgroup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newgroup.page.scss */ "xVBm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/image.service */ "mnRn");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "Pn9U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "KDZV");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














let NewgroupPage = class NewgroupPage {
    constructor(router, imageProvider, dataProvider, alertCtrl, firestore, afAuth, loadingProvider, camera, formBuilder, pickerController) {
        this.router = router;
        this.imageProvider = imageProvider;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.pickerController = pickerController;
        this.category = { text: '', value: '' };
        this.submitAttempt = false;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroup"]({
            groupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required
            ])),
            groupDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required
            ])),
            groupTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required
            ])),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]('')
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
        this.firestore.collection('categories').snapshotChanges().subscribe((catsRes) => {
            if (catsRes) {
                this.categoriesOption = [];
                this.categories = [];
                catsRes.forEach(cat => {
                    let category = cat.payload.doc.data();
                    category.key = cat.payload.doc.id;
                    this.categories.push(category);
                    this.categoriesOption.push({ text: category.name, value: category.key });
                });
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
            this.group.categoryId = this.category.value;
            this.group.img = '';
            // Add group to database.
            this.firestore.collection('groups').add(this.group).then((success) => {
                let groupId = success.id;
                this.router.navigateByUrl('/group/' + groupId);
                if (this.account.groups) {
                    this.account.groups.push(groupId);
                }
                else {
                    this.account.groups = [groupId];
                }
                this.dataProvider.getCurrentUser().update({
                    groups: this.account.groups
                });
                let cat = this.categories.find(c => c.id = this.category.value);
                console.log('cat', cat, this.categories);
                if (!cat.groups) {
                    cat.groups = [groupId];
                }
                else {
                    cat.groups.push(groupId);
                }
                this.firestore.collection('categories').doc(this.category.value).update({
                    groups: cat.groups
                });
            });
        }
    }
    showPicker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            this.category = value.Categories;
                        }
                    }
                ],
                columns: [{
                        name: 'Categories',
                        options: this.getColumnOptions()
                    }]
            };
            let picker = yield this.pickerController.create(options);
            picker.present();
        });
    }
    getColumnOptions() {
        return this.categoriesOption;
    }
};
NewgroupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"] }
];
NewgroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newgroup',
        template: _raw_loader_newgroup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newgroup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"]])
], NewgroupPage);



/***/ }),

/***/ "peJf":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newgroup/newgroup.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Create New Group</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"outline\" (click)=\"done()\">Create</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"group\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"cover-wrapper\">\r\n            <img src=\"{{group.img}}\" *ngIf=\"group.img != ''\" tappable (click)=\"setGroupPhoto()\"\r\n          onError=\"this.src='./assets/images/default-group.png'\" />\r\n        <img src=\"{{group.img}}\"\r\n          onError=\"this.src='./assets/images/default-group.png'\" *ngIf=\"group.img == ''\" tappable\r\n          (click)=\"setGroupPhoto()\" />\r\n            </div>\r\n        </ion-col>\r\n        </ion-row>\r\n      <ion-row>\r\n        <ion-col> \r\n        <form [formGroup]=\"myForm\">\r\n          <ion-list style=\"margin:0;\" lines=\"none\">\r\n            <ion-item class=\"input-item\">\r\n              <ion-label position=\"stacked\">Title:</ion-label>\r\n              <ion-input formControlName=\"groupName\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name of Group\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"input-item\">\r\n              <ion-label position=\"stacked\">Image Path:</ion-label>\r\n              <ion-input formControlName=\"img\" type=\"text\" [(ngModel)]=\"img\" placeholder=\"Image Path\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Description</ion-label>\r\n              <ion-textarea formControlName=\"groupDescription\" rows=\"3\" [(ngModel)]=\"description\"\r\n                placeholder=\"Describe this Group\"></ion-textarea>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Group Tags</ion-label>\r\n              <ion-textarea formControlName=\"groupTags\" rows=\"3\" [(ngModel)]=\"groupTags\"\r\n                placeholder=\"Add Group Tags in each line.\"></ion-textarea>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Category</ion-label>\r\n              <ion-label>{{category.text}}</ion-label>\r\n              <ion-button (click)=\"showPicker()\">\r\n                Select Category\r\n            </ion-button>\r\n\r\n            </ion-item>\r\n          </ion-list>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "xVBm":
/*!*********************************************!*\
  !*** ./src/app/newgroup/newgroup.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cover-wrapper {\n  margin-bottom: var(--page-margin);\n  text-align: center;\n  padding-top: 5px;\n}\n.cover-wrapper .cover-anchor {\n  display: block;\n}\n.cover-wrapper .cover-icon-wrapper {\n  margin: 0px 20%;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.cover-wrapper .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3Z3JvdXAvbmV3Z3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNFLGNBQUE7QUFFTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNOO0FBRUk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9uZXdncm91cC9uZXdncm91cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgLmNvdmVyLWFuY2hvciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3Zlci1pY29uLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW46IDBweCAyMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuICB9Il19 */");

/***/ })

}]);
//# sourceMappingURL=newgroup-newgroup-module-es2015.js.map