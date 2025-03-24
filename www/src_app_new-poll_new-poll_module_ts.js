(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-poll_new-poll_module_ts"],{

/***/ 59005:
/*!*********************************************!*\
  !*** ./src/app/new-poll/new-poll.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewPollPageModule: () => (/* binding */ NewPollPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _new_poll_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-poll.page */ 80678);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.module */ 53952);








const routes = [{
  path: '',
  component: _new_poll_page__WEBPACK_IMPORTED_MODULE_0__.NewPollPage
}];
let NewPollPageModule = class NewPollPageModule {};
NewPollPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  declarations: [_new_poll_page__WEBPACK_IMPORTED_MODULE_0__.NewPollPage]
})], NewPollPageModule);


/***/ }),

/***/ 80678:
/*!*******************************************!*\
  !*** ./src/app/new-poll/new-poll.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewPollPage: () => (/* binding */ NewPollPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _new_poll_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-poll.page.html?ngResource */ 45954);
/* harmony import */ var _new_poll_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-poll.page.scss?ngResource */ 63946);
/* harmony import */ var _new_poll_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_new_poll_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/compat/app */ 3602);











let NewPollPage = class NewPollPage {
  constructor(dataProvider, loadingProvider, route, router, firestore) {
    this.dataProvider = dataProvider;
    this.loadingProvider = loadingProvider;
    this.route = route;
    this.router = router;
    this.firestore = firestore;
    this.step = 1;
    this.userNotifications = [];
    this.userPosts = [];
    this.groupId = this.route.snapshot.params.id;
    this.group = {
      name: ''
    };
    if (this.groupId === 'undefined') {
      this.step = 1;
    } else {
      this.step = 2;
    }
    this.pollForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
      // Validators.minLength(10),
      // Validators.maxLength(50),
      _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])),
      pollOption1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
      // Validators.minLength(1),
      // Validators.maxLength(20),
      _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])),
      pollOption2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
      // Validators.minLength(1),
      // Validators.maxLength(20),
      _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])),
      pollOption3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(''),
      pollOption4: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('')
      // tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1))
    });
  }
  ionViewDidEnter() {}
  ngOnInit() {
    // Initialize
    this.dataProvider.getCurrentUser().then(u => {
      u.snapshotChanges().subscribe(value => {
        this.user = value.payload.data();
        this.addedByUser = {
          addedByKey: value.payload.data().userId,
          addedByUsername: value.payload.data().username,
          addedByImg: value.payload.data().img
        };
        this.userNotifications = value.payload.data().userNotifications;
        this.userPosts = value.payload.data().userPosts;
        this.poll = {
          addedByUser: this.addedByUser,
          date: '',
          title: '',
          // postTags: [],
          groupId: '',
          groupName: '',
          type: 'poll',
          data: {},
          totalReactionCount: 0,
          totalReviewCount: 0,
          totalPollCount: 0
        };
        if (this.step === 1) {
          this.title = 'Select a group ...';
          // Get User Groups List
          if (this.user.groups) {
            this.firestore.collection('groups').ref.where(firebase_compat_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldPath.documentId(), 'in', this.user.groups).get().then(group => {
              this.groups = [];
              group.forEach(g => {
                let group;
                group = g.data();
                group.key = g.id;
                this.addOrUpdateUserGroup(group);
              });
            });
          }
        } else {
          this.title = 'New Poll';
        }
      });
    });
  }
  addOrUpdateUserGroup(group) {
    if (!this.groups) {
      this.groups = [group];
    } else {
      let index = -1;
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].key == group.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.groups[index] = group;
      } else {
        this.groups.push(group);
      }
    }
  }
  submitPollForm() {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Add poll info and date.
      _this.poll.groupId = _this.groupId;
      _this.poll.groupName = _this.group.name;
      _this.poll.date = new Date();
      _this.poll.title = _this.pollForm.value.description;
      // this.poll.postTags = [];
      // this.poll.postTags = this.postTags;
      const today = new Date();
      const dd = today.getDate();
      const mm = today.getMonth(); // January is 0!
      const yyyy = today.getFullYear();
      const date = new Date(yyyy, mm, dd + 2);
      const dateEnding = date;
      _this.poll.data = {
        dateCreated: new Date(),
        dateEnding,
        pollOptions: []
      };
      if (_this.pollForm.value.pollOption1 != null && _this.pollForm.value.pollOption1.trim() !== '') {
        _this.poll.data.pollOptions.push({
          name: _this.pollForm.value.pollOption1.trim()
        });
      }
      if (_this.pollForm.value.pollOption2 != null && _this.pollForm.value.pollOption2.trim() !== '') {
        _this.poll.data.pollOptions.push({
          name: _this.pollForm.value.pollOption2.trim()
        });
      }
      if (_this.pollForm.value.pollOption3 != null && _this.pollForm.value.pollOption3.trim() !== '') {
        _this.poll.data.pollOptions.push({
          name: _this.pollForm.value.pollOption3.trim()
        });
      }
      if (_this.pollForm.value.pollOption4 != null && _this.pollForm.value.pollOption4.trim() !== '') {
        _this.poll.data.pollOptions.push({
          name: _this.pollForm.value.pollOption4.trim()
        });
      }
      console.info('this.poll:', _this.poll);
      // Add the poll and get the ID
      const success = yield _this.dataProvider.addPost(_this.poll);
      const pollId = success.id;
      _this.pollId = pollId;
      // Initialize group if needed
      if (!_this.group) {
        _this.group = {};
      }
      // Initialize group arrays
      if (!_this.group.posts) {
        _this.group.posts = [];
      }
      if (!_this.group.polls) {
        _this.group.polls = [];
      }
      // Initialize user arrays
      _this.userNotifications = _this.userNotifications || [];
      _this.userPosts = _this.userPosts || [];
      // Update arrays
      _this.group.polls.push(pollId);
      _this.userNotifications.push(pollId);
      _this.userPosts.push(pollId);
      // Perform updates
      yield Promise.all([
      // Update group
      _this.dataProvider.getGroup(_this.groupId).update({
        posts: _this.group.posts,
        polls: _this.group.polls
      }),
      // Update user
      _this.dataProvider.getUser(_this.addedByUser.addedByKey).update({
        userNotifications: _this.userNotifications,
        userPosts: _this.userPosts
      })]);
      _this.router.navigateByUrl('/app/tabs/tab1');
    })();
  }
  selectGroup(groupId) {
    this.groupId = groupId;
    console.log('groupId', groupId);
    this.step = 2;
    this.title = 'New Poll';
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(group => {
      this.group = group.payload.data();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore
  }];
};
NewPollPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-new-poll',
  template: _new_poll_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_new_poll_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], NewPollPage);


/***/ }),

/***/ 63946:
/*!********************************************************!*\
  !*** ./src/app/new-poll/new-poll.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.groups-container {
  max-height: 70vh;
  overflow-y: auto;
}

.group-card {
  margin: 8px 0;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.group-card:active {
  transform: scale(0.98);
}

.selected-group {
  background: var(--ion-color-light);
  border-radius: 12px;
  margin: 16px 0;
}
.selected-group h2 {
  font-size: 14px;
  margin-bottom: 4px;
  padding-left: 10px;
}
.selected-group h3 {
  font-weight: 600;
  margin: 0;
}

.form-section {
  background: transparent;
  border-radius: 12px;
  padding: 6px;
  margin: 0px 0;
}

.question-input {
  --background: var(--ion-color-white);
  border-radius: 8px;
  margin-bottom: 24px;
}

.options-container ion-item {
  --background: var(--ion-color-white);
  border-radius: 8px;
  margin-bottom: 12px;
}

.custom-input {
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  font-size: 16px;
}

.submit-button {
  margin-top: 24px;
  --border-radius: 12px;
  --box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.2);
}

.ripple-parent {
  position: relative;
  overflow: hidden;
}

.poll-form-container {
  padding: 16px;
}
.poll-form-container ion-item {
  --padding-start: 16px;
  --inner-padding-end: 0;
  --background: transparent;
}
.poll-form-container form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.poll-form-container ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}
.poll-form-container ion-item.item-has-focus {
  --highlight-background: var(--ion-color-primary);
}
.poll-form-container ion-label {
  margin-bottom: 8px;
  font-weight: 500;
}
.poll-form-container ion-label[position=stacked] {
  margin-bottom: 4px;
}
.poll-form-container .error-message {
  color: var(--ion-color-danger);
  font-size: 12px;
  margin-top: 4px;
  padding-left: 16px;
}

.uploads {
  margin: 5px;
}
.uploads .img-wrap {
  position: relative;
  display: inline-block;
  font-size: 0;
  padding: 5px;
}
.uploads .img-wrap .close {
  position: absolute;
  top: -2px;
  right: -7px;
  z-index: 100;
  background-color: #FFF;
  padding: 5px 2px 2px;
  color: #000;
  cursor: pointer;
  text-align: center;
  font-size: 22px;
  line-height: 10px;
  border-radius: 50%;
}
.uploads .img-wrap:hover .close {
  opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/app/new-poll/new-poll.page.scss"],"names":[],"mappings":"AACA;EACE,gBAAA;EACA,gBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,wCAAA;AAAF;AAEE;EACE,sBAAA;AAAJ;;AAIA;EACE,kCAAA;EACA,mBAAA;EACA,cAAA;AADF;AAGE;EAEE,eAAA;EACA,kBAAA;EACA,kBAAA;AAFJ;AAKE;EACE,gBAAA;EACA,SAAA;AAHJ;;AAOA;EACE,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;AAJF;;AAOA;EACE,oCAAA;EACA,kBAAA;EACA,mBAAA;AAJF;;AAQE;EACE,oCAAA;EACA,kBAAA;EACA,mBAAA;AALJ;;AASA;EACE,qBAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;AANF;;AASA;EACE,gBAAA;EACA,qBAAA;EACA,gEAAA;AANF;;AAUA;EACE,kBAAA;EACA,gBAAA;AAPF;;AASA;EAEE,aAAA;AAPF;AAQE;EACE,qBAAA;EACA,sBAAA;EACA,yBAAA;AANJ;AASE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAPJ;AAUE;EACE,kBAAA;EACA,sBAAA;AARJ;AAUI;EACE,gDAAA;AARN;AAYE;EACE,kBAAA;EACA,gBAAA;AAVJ;AAYI;EACE,kBAAA;AAVN;AAcE;EACE,8BAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;AAZJ;;AAiBA;EACE,WAAA;AAdF;AAeA;EACE,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,YAAA;AAbF;AAeA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,oBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAbF;AAeA;EACE,UAAA;AAbF","sourcesContent":["\n.groups-container {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.group-card {\n  margin: 8px 0;\n  border-radius: 12px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  \n  &:active {\n    transform: scale(0.98);\n  }\n}\n\n.selected-group {\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  margin: 16px 0;\n  \n  h2 {\n\n    font-size: 14px;\n    margin-bottom: 4px;\n    padding-left: 10px;\n  }\n  \n  h3 {\n    font-weight: 600;\n    margin: 0;\n  }\n}\n\n.form-section {\n  background: transparent;\n  border-radius: 12px;\n  padding: 6px;\n  margin: 0px 0;\n}\n\n.question-input {\n  --background: var(--ion-color-white);\n  border-radius: 8px;\n  margin-bottom: 24px;\n}\n\n.options-container {\n  ion-item {\n    --background: var(--ion-color-white);\n    border-radius: 8px;\n    margin-bottom: 12px;\n  }\n}\n\n.custom-input {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  font-size: 16px;\n}\n\n.submit-button {\n  margin-top: 24px;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.2);\n}\n\n// Add ripple effect styles\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n.poll-form-container {\n\n  padding: 16px;\n  ion-item {\n    --padding-start: 16px;\n    --inner-padding-end: 0;\n    --background: transparent;\n\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  ion-item {\n    --padding-start: 0;\n    --inner-padding-end: 0;\n    \n    &.item-has-focus {\n      --highlight-background: var(--ion-color-primary);\n    }\n  }\n\n  ion-label {\n    margin-bottom: 8px;\n    font-weight: 500;\n    \n    &[position=\"stacked\"] {\n      margin-bottom: 4px;\n    }\n  }\n\n  .error-message {\n    color: var(--ion-color-danger);\n    font-size: 12px;\n    margin-top: 4px;\n    padding-left: 16px;\n  }\n}\n\n\n.uploads {\n  margin: 5px;\n.img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n.img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n.img-wrap:hover .close {\n  opacity: 1;\n}\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 45954:
/*!********************************************************!*\
  !*** ./src/app/new-poll/new-poll.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <!-- <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button color=\"primary\" class=\"ion-text-capitalize\" [disabled]=\"!pollForm.valid\" (click)=\"submitPollForm()\">Submit</ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\"> \n      <ion-list class=\"ion-no-padding\">\n        <ion-item class=\"ion-margin-left\" text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n            <h3 class=\"ion-no-margin\">{{group.name}}</h3>\n            <p class=\"ion-text-wrap\">\n              <ion-text color=\"medium\">\n                {{group.description}}\n              </ion-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step === 2\" class=\"poll-form-container\">\n    <form [formGroup]=\"pollForm\" (ngSubmit)=\"submitPollForm()\">\n      <ion-item lines=\"none\" class=\"selected-group\">\n        <ion-label>\n          <h2>Creating poll in <strong>{{group.name}}</strong></h2>\n        </ion-label>\n        <ion-button fill=\"clear\" (click)=\"step = 1\" slot=\"end\">\n          <ion-icon name=\"create-outline\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <div class=\"form-section\">\n        <ion-item class=\"question-input\">\n          <ion-label position=\"stacked\">Question</ion-label>\n          <ion-input type=\"text\" \n                     formControlName=\"description\" \n                     placeholder=\"What would you like to ask?\"\n                     class=\"custom-input\">\n          </ion-input>\n        </ion-item>\n\n        <div class=\"options-container\">\n          <ion-text color=\"medium\" class=\"ion-padding-bottom\">\n            <h3>Poll Options</h3>\n          </ion-text>\n\n          <!-- Required Options -->\n          <ion-item>\n            <ion-label position=\"stacked\">Option 1 *</ion-label>\n            <ion-input formControlName=\"pollOption1\" \n                      placeholder=\"Enter first option\"\n                      class=\"custom-input\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Option 2 *</ion-label>\n            <ion-input formControlName=\"pollOption2\" \n                      placeholder=\"Enter second option\"\n                      class=\"custom-input\">\n            </ion-input>\n          </ion-item>\n\n          <!-- Optional Options -->\n          <ion-item>\n            <ion-label position=\"stacked\">Option 3 (Optional)</ion-label>\n            <ion-input formControlName=\"pollOption3\" \n                      placeholder=\"Add another option\"\n                      class=\"custom-input\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Option 4 (Optional)</ion-label>\n            <ion-input formControlName=\"pollOption4\" \n                      placeholder=\"Add another option\"\n                      class=\"custom-input\">\n            </ion-input>\n          </ion-item>\n        </div>\n      </div>\n\n      <!-- Submit Button -->\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" \n                    type=\"submit\" \n                    [disabled]=\"!pollForm.valid\"\n                    class=\"submit-button\">\n          <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\n          Create Poll\n        </ion-button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_new-poll_new-poll_module_ts.js.map