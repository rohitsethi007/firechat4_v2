"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_newgroup_newgroup_module_ts"],{

/***/ 11495:
/*!*********************************************!*\
  !*** ./src/app/newgroup/newgroup.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewgroupPageModule": function() { return /* binding */ NewgroupPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _newgroup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newgroup.page */ 4598);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.module */ 32218);








const routes = [
    {
        path: '',
        component: _newgroup_page__WEBPACK_IMPORTED_MODULE_0__.NewgroupPage
    }
];
let NewgroupPageModule = class NewgroupPageModule {
};
NewgroupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_newgroup_page__WEBPACK_IMPORTED_MODULE_0__.NewgroupPage]
    })
], NewgroupPageModule);



/***/ }),

/***/ 4598:
/*!*******************************************!*\
  !*** ./src/app/newgroup/newgroup.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewgroupPage": function() { return /* binding */ NewgroupPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newgroup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./newgroup.page.html */ 1396);
/* harmony import */ var _newgroup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newgroup.page.scss */ 94920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/image.service */ 54249);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 34483);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);














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
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            groupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required
            ])),
            groupDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required
            ])),
            groupTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required
            ])),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
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
        this.dataProvider.getCurrentUser().then((u) => {
            u.snapshotChanges().subscribe((accounts) => {
                this.account = accounts.payload.data();
                if (!this.groupMembers) {
                    this.groupMembers = [this.account];
                }
                else {
                    this.friends = [];
                }
            });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.submitAttempt = true;
            if (this.myForm.valid) {
                this.loadingProvider.show();
                let messages = [];
                let userId = yield this.afAuth.currentUser.then((u) => { return u.uid; });
                // Add system message that group is created.
                messages.push({
                    date: new Date().toString(),
                    sender: userId,
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
                    this.dataProvider.getCurrentUser().then((u) => {
                        u.update({
                            groups: this.account.groups
                        });
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
        });
    }
    showPicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_2__.ImageService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PickerController }
];
NewgroupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-newgroup',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newgroup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_newgroup_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router,
        _services_image_service__WEBPACK_IMPORTED_MODULE_2__.ImageService,
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth,
        _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService,
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PickerController])
], NewgroupPage);



/***/ }),

/***/ 1396:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/newgroup/newgroup.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create New Group</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"outline\" (click)=\"done()\">Create</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"group\">\n      <ion-row>\n        <ion-col>\n          <div class=\"cover-wrapper\">\n            <img src=\"{{group.img}}\" *ngIf=\"group.img != ''\" tappable (click)=\"setGroupPhoto()\"\n          onError=\"this.src='./assets/images/default-group.png'\" />\n        <img src=\"{{group.img}}\"\n          onError=\"this.src='./assets/images/default-group.png'\" *ngIf=\"group.img == ''\" tappable\n          (click)=\"setGroupPhoto()\" />\n            </div>\n        </ion-col>\n        </ion-row>\n      <ion-row>\n        <ion-col> \n        <form [formGroup]=\"myForm\">\n          <ion-list style=\"margin:0;\" lines=\"none\">\n            <ion-item class=\"input-item\">\n              <ion-label position=\"stacked\">Title:</ion-label>\n              <ion-input formControlName=\"groupName\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name of Group\">\n              </ion-input>\n            </ion-item>\n            <ion-item class=\"input-item\">\n              <ion-label position=\"stacked\">Image Path:</ion-label>\n              <ion-input formControlName=\"img\" type=\"text\" [(ngModel)]=\"img\" placeholder=\"Image Path\">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Description</ion-label>\n              <ion-textarea formControlName=\"groupDescription\" rows=\"3\" [(ngModel)]=\"description\"\n                placeholder=\"Describe this Group\"></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Group Tags</ion-label>\n              <ion-textarea formControlName=\"groupTags\" rows=\"3\" [(ngModel)]=\"groupTags\"\n                placeholder=\"Add Group Tags in each line.\"></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Category</ion-label>\n              <ion-label>{{category.text}}</ion-label>\n              <ion-button (click)=\"showPicker()\">\n                Select Category\n            </ion-button>\n\n            </ion-item>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ }),

/***/ 94920:
/*!*********************************************!*\
  !*** ./src/app/newgroup/newgroup.page.scss ***!
  \*********************************************/
/***/ (function(module) {

module.exports = ".cover-wrapper {\n  margin-bottom: var(--page-margin);\n  text-align: center;\n  padding-top: 5px;\n}\n.cover-wrapper .cover-anchor {\n  display: block;\n}\n.cover-wrapper .cover-icon-wrapper {\n  margin: 0px 20%;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.cover-wrapper .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2dyb3VwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFDRSxjQUFBO0FBRU47QUFDSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUVJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUFSIiwiZmlsZSI6Im5ld2dyb3VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Zlci13cmFwcGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgLmNvdmVyLWFuY2hvciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuY292ZXItaWNvbi13cmFwcGVyIHtcbiAgICAgIG1hcmdpbjogMHB4IDIwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_newgroup_newgroup_module_ts-es2015.js.map