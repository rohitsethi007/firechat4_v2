(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_newgroup_newgroup_module_ts"],{

/***/ 63367:
/*!*********************************************!*\
  !*** ./src/app/newgroup/newgroup.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewgroupPageModule: () => (/* binding */ NewgroupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _newgroup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newgroup.page */ 60640);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.module */ 53952);








const routes = [{
  path: '',
  component: _newgroup_page__WEBPACK_IMPORTED_MODULE_0__.NewgroupPage
}];
let NewgroupPageModule = class NewgroupPageModule {};
NewgroupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  declarations: [_newgroup_page__WEBPACK_IMPORTED_MODULE_0__.NewgroupPage]
})], NewgroupPageModule);


/***/ }),

/***/ 60640:
/*!*******************************************!*\
  !*** ./src/app/newgroup/newgroup.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewgroupPage: () => (/* binding */ NewgroupPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _newgroup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newgroup.page.html?ngResource */ 97108);
/* harmony import */ var _newgroup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newgroup.page.scss?ngResource */ 92864);
/* harmony import */ var _newgroup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_newgroup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/image.service */ 62499);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);














let NewgroupPage = class NewgroupPage {
  constructor(router, imageProvider, dataProvider, alertCtrl, firestore, afAuth, loadingProvider, formBuilder, pickerController) {
    this.router = router;
    this.imageProvider = imageProvider;
    this.dataProvider = dataProvider;
    this.alertCtrl = alertCtrl;
    this.firestore = firestore;
    this.afAuth = afAuth;
    this.loadingProvider = loadingProvider;
    this.formBuilder = formBuilder;
    this.pickerController = pickerController;
    this.category = {
      text: '',
      value: ''
    };
    this.submitAttempt = false;
    this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      groupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])),
      groupDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])),
      groupTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])),
      img: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('')
    });
  }
  ngOnInit() {}
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
    this.dataProvider.getCurrentUser().then(u => {
      u.snapshotChanges().subscribe(accounts => {
        this.account = accounts.payload.data();
        if (!this.groupMembers) {
          this.groupMembers = [this.account];
        } else {
          this.friends = [];
        }
      });
    });
    this.firestore.collection('categories').snapshotChanges().subscribe(catsRes => {
      if (catsRes) {
        this.categoriesOption = [];
        this.categories = [];
        catsRes.forEach(cat => {
          let category = cat.payload.doc.data();
          category.key = cat.payload.doc.id;
          this.categories.push(category);
          this.categoriesOption.push({
            text: category.name,
            value: category.key
          });
        });
      }
    });
  }
  // Proceed with group creation.
  done() {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.submitAttempt = true;
      if (_this.myForm.valid) {
        _this.loadingProvider.show();
        let messages = [];
        let userId = yield _this.afAuth.currentUser.then(u => {
          return u.uid;
        });
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
        for (let i = 0; i < _this.groupMembers.length; i++) {
          members.push(_this.groupMembers[i].userId);
        }
        // Add group info and date.
        _this.group.dateCreated = new Date().toString();
        _this.group.messages = messages;
        _this.group.members = members;
        _this.group.name = _this.name;
        _this.group.description = _this.description;
        _this.group.groupTags = _this.groupTags.split('\n');
        _this.group.categoryId = _this.category.value;
        _this.group.img = '';
        // Add group to database.
        _this.firestore.collection('groups').add(_this.group).then(success => {
          let groupId = success.id;
          _this.router.navigateByUrl('/group/' + groupId);
          if (_this.account.groups) {
            _this.account.groups.push(groupId);
          } else {
            _this.account.groups = [groupId];
          }
          _this.dataProvider.getCurrentUser().then(u => {
            u.update({
              groups: _this.account.groups
            });
          });
          let cat = _this.categories.find(c => c.id = _this.category.value);
          console.log('cat', cat, _this.categories);
          if (!cat.groups) {
            cat.groups = [groupId];
          } else {
            cat.groups.push(groupId);
          }
          _this.firestore.collection('categories').doc(_this.category.value).update({
            groups: cat.groups
          });
        });
      }
    })();
  }
  showPicker() {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let options = {
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Ok',
          handler: value => {
            _this2.category = value.Categories;
          }
        }],
        columns: [{
          name: 'Categories',
          options: _this2.getColumnOptions()
        }]
      };
      let picker = yield _this2.pickerController.create(options);
      picker.present();
    })();
  }
  getColumnOptions() {
    return this.categoriesOption;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _services_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PickerController
  }];
};
NewgroupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-newgroup',
  template: _newgroup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_newgroup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], NewgroupPage);


/***/ }),

/***/ 92864:
/*!********************************************************!*\
  !*** ./src/app/newgroup/newgroup.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cover-wrapper {
  margin-bottom: var(--page-margin);
  text-align: center;
  padding-top: 5px;
}
.cover-wrapper .cover-anchor {
  display: block;
}
.cover-wrapper .cover-icon-wrapper {
  margin: 0px 20%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.cover-wrapper .input-item {
  --padding-start: 0px;
  --padding-end: 0px;
  --inner-padding-end: 0px;
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, "Roboto", "Segoe UI", Arial, sans-serif;
  font-weight: 400;
  font-size: 20px;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  overflow: hidden;
  text-overflow: ellipsis;
}`, "",{"version":3,"sources":["webpack://./src/app/newgroup/newgroup.page.scss"],"names":[],"mappings":"AAAA;EACI,iCAAA;EACA,kBAAA;EACA,gBAAA;AACJ;AAAI;EACE,cAAA;AAEN;AACI;EACE,eAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;AACN;AAEI;EACI,oBAAA;EACA,kBAAA;EACA,wBAAA;EACA,kGAAA;EACA,gBAAA;EACA,eAAA;EACA,4CAAA;EACA,6BAAA;EACA,gBAAA;EACA,uBAAA;AAAR","sourcesContent":[".cover-wrapper {\n    margin-bottom: var(--page-margin);\n    text-align: center;\n    padding-top: 5px;\n    .cover-anchor {\n      display: block;\n    }\n\n    .cover-icon-wrapper {\n      margin: 0px 20%;\n      display: flex;\n      height: 100%;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .input-item {\n        --padding-start: 0px;\n        --padding-end: 0px;\n        --inner-padding-end: 0px;\n        font-family: 'HelveticaNeue', 'Helvetica Neue', Helvetica, 'Roboto', 'Segoe UI', Arial, sans-serif;\n        font-weight: 400;\n        font-size: 20px;\n        -webkit-font-smoothing: subpixel-antialiased;\n        -moz-osx-font-smoothing: auto;\n        overflow: hidden; \n        text-overflow: ellipsis;\n      }\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 97108:
/*!********************************************************!*\
  !*** ./src/app/newgroup/newgroup.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create New Group</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"outline\" (click)=\"done()\">Create</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"group\">\n      <ion-row>\n        <ion-col>\n          <div class=\"cover-wrapper\">\n            <img src=\"{{group.img}}\" *ngIf=\"group.img != ''\" tappable (click)=\"setGroupPhoto()\"\n          onError=\"this.src='./assets/images/default-group.png'\" />\n        <img src=\"{{group.img}}\"\n          onError=\"this.src='./assets/images/default-group.png'\" *ngIf=\"group.img == ''\" tappable\n          (click)=\"setGroupPhoto()\" />\n            </div>\n        </ion-col>\n        </ion-row>\n      <ion-row>\n        <ion-col> \n        <form [formGroup]=\"myForm\">\n          <ion-list style=\"margin:0;\" lines=\"none\">\n            <ion-item class=\"input-item\">\n              <ion-label position=\"stacked\">Title:</ion-label>\n              <ion-input formControlName=\"groupName\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name of Group\">\n              </ion-input>\n            </ion-item>\n            <ion-item class=\"input-item\">\n              <ion-label position=\"stacked\">Image Path:</ion-label>\n              <ion-input formControlName=\"img\" type=\"text\" [(ngModel)]=\"img\" placeholder=\"Image Path\">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Description</ion-label>\n              <ion-textarea formControlName=\"groupDescription\" rows=\"3\" [(ngModel)]=\"description\"\n                placeholder=\"Describe this Group\"></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Group Tags</ion-label>\n              <ion-textarea formControlName=\"groupTags\" rows=\"3\" [(ngModel)]=\"groupTags\"\n                placeholder=\"Add Group Tags in each line.\"></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Category</ion-label>\n              <ion-label>{{category.text}}</ion-label>\n              <ion-button (click)=\"showPicker()\">\n                Select Category\n            </ion-button>\n\n            </ion-item>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_newgroup_newgroup_module_ts.js.map