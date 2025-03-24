(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-event_new-event_module_ts"],{

/***/ 75519:
/*!***********************************************!*\
  !*** ./src/app/new-event/new-event.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewEventPageModule: () => (/* binding */ NewEventPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/share.module */ 53952);
/* harmony import */ var _new_event_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-event.page */ 69000);








const routes = [{
  path: '',
  component: _new_event_page__WEBPACK_IMPORTED_MODULE_1__.NewEventPage
}];
let NewEventPageModule = class NewEventPageModule {};
NewEventPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _services_share_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  declarations: [_new_event_page__WEBPACK_IMPORTED_MODULE_1__.NewEventPage]
})], NewEventPageModule);


/***/ }),

/***/ 69000:
/*!*********************************************!*\
  !*** ./src/app/new-event/new-event.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewEventPage: () => (/* binding */ NewEventPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _new_event_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-event.page.html?ngResource */ 13468);
/* harmony import */ var _new_event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-event.page.scss?ngResource */ 37488);
/* harmony import */ var _new_event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_new_event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78205);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/image.service */ 62499);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/compat/app */ 3602);














let NewEventPage = class NewEventPage {
  constructor(route, router, dataProvider, loadingProvider, navCtrl, http, actionSheet, imageProvider, firestore, formBuilder) {
    this.route = route;
    this.router = router;
    this.dataProvider = dataProvider;
    this.loadingProvider = loadingProvider;
    this.navCtrl = navCtrl;
    this.http = http;
    this.actionSheet = actionSheet;
    this.imageProvider = imageProvider;
    this.firestore = firestore;
    this.formBuilder = formBuilder;
    this.step = 1;
    this.userNotifications = [];
    this.userPosts = [];
    this.postMedia = [];
    // In your component class
    this.bannerImage = null;
    this.groupId = this.route.snapshot.params.id;
    this.group = {
      name: ''
    };
    if (this.groupId === 'undefined') {
      this.step = 1;
    } else {
      this.step = 2;
    }
    // Set min and max event dates
    const dateObj = new Date();
    this.minEventMonth = dateObj.getUTCMonth() + 1;
    this.minEventDay = dateObj.getUTCDate() + 1;
    this.minEventYear = dateObj.getUTCFullYear();
    this.maxEventYear = this.minEventYear + 1;
    this.minDate = new Date().toISOString();
  }
  ionViewDidEnter() {}
  ngOnInit() {
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
        this.eventForm = this.formBuilder.group({
          addedByUser: this.addedByUser,
          title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
          eventDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
          eventTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
          location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
          videoLink: [''],
          groupId: '',
          totalReactionCount: 0,
          totalReviewCount: 0,
          groupName: '',
          type: 'event'
        });
        this.event = {
          addedByUser: this.addedByUser,
          date: '',
          title: '',
          postTags: [],
          groupId: '',
          groupName: '',
          type: 'event',
          data: {},
          totalReactionCount: 0,
          totalReviewCount: 0,
          postMedia: []
        };
        if (this.step === 1) {
          this.title = 'Select a group ...';
          // Get User Groups List
          if (this.user.groups) {
            this.firestore.collection('groups').ref.where(firebase_compat_app__WEBPACK_IMPORTED_MODULE_6__["default"].firestore.FieldPath.documentId(), 'in', this.user.groups).get().then(group => {
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
          this.title = 'Event';
          this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(group => {
            this.group = group.payload.data();
          });
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
  submitEventForm() {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loadingProvider.show();
      console.info('new group id', _this.groupId);
      // Add post info and date.
      _this.event.date = new Date();
      _this.event.title = _this.eventForm.value.title;
      _this.event.data.eventDate = _this.eventForm.value.eventDate;
      _this.event.data.eventTime = _this.eventForm.value.eventTime;
      _this.event.data.location = _this.eventForm.value.location;
      _this.event.data.videoLink = _this.eventForm.value.videoLink;
      _this.event.groupId = _this.groupId;
      _this.event.groupName = _this.group.name;
      // Add the poll and get the ID
      const success = yield _this.dataProvider.addPost(_this.event);
      const eventId = success.id;
      _this.eventId = eventId;
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
      _this.group.polls.push(eventId);
      _this.userNotifications.push(eventId);
      _this.userPosts.push(eventId);
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
    this.title = 'New Event';
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(group => {
      this.group = group.payload.data();
    });
  }
  uploadBanner() {
    // Implement your image upload logic here
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController
  }, {
    type: _services_image_service__WEBPACK_IMPORTED_MODULE_4__.ImageService
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestore
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder
  }];
};
NewEventPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-new-event',
  template: _new_event_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_new_event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], NewEventPage);


/***/ }),

/***/ 37488:
/*!**********************************************************!*\
  !*** ./src/app/new-event/new-event.page.scss?ngResource ***!
  \**********************************************************/
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

.event-container {
  padding: 16px;
}
.event-container ion-item {
  --padding-start: 16px;
  --inner-padding-end: 0;
  --background: transparent;
}
.event-container form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.event-container ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}
.event-container ion-item.item-has-focus {
  --highlight-background: var(--ion-color-primary);
}
.event-container ion-label {
  margin-bottom: 8px;
  font-weight: 500;
}
.event-container ion-label[position=stacked] {
  margin-bottom: 4px;
}
.event-container .error-message {
  color: var(--ion-color-danger);
  font-size: 12px;
  margin-top: 4px;
  padding-left: 16px;
}

.banner-field {
  margin-bottom: 20px;
}
.banner-field .banner-container {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}
.banner-field .banner-container .banner-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  justify-content: center;
}
.banner-field .banner-container .banner-overlay .upload-button {
  --background: rgba(255,255,255,0.2);
  --color: white;
}

.start-segment {
  margin: 16px 0;
  --background: var(--ion-color-light);
  border-radius: 8px;
}
.start-segment ion-segment-button {
  --indicator-color: var(--ion-color-primary);
  --color-checked: var(--ion-color-primary);
  --color: var(--ion-color-medium);
}

.input-item {
  --background: var(--ion-color-light);
  --border-radius: 8px;
  margin-bottom: 12px;
}
.input-item .input-icon {
  margin-right: 8px;
  color: var(--ion-color-medium);
}

.submit-button-container {
  margin-top: 24px;
}
.submit-button-container .submit-button {
  --border-radius: 8px;
  margin: 0;
}

.error-message {
  font-size: 12px;
  margin-left: 16px;
  margin-top: 4px;
  display: block;
}

.input-item.item-has-error {
  --border-color: var(--ion-color-danger);
}

.checkbox-item {
  --background: var(--ion-color-light);
  --border-radius: 8px;
  margin: 16px 0;
}
.checkbox-item ion-checkbox {
  margin-right: 8px;
}`, "",{"version":3,"sources":["webpack://./src/app/new-event/new-event.page.scss"],"names":[],"mappings":"AACA;EACE,gBAAA;EACA,gBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,wCAAA;AAAF;AAEE;EACE,sBAAA;AAAJ;;AAIA;EACE,kCAAA;EACA,mBAAA;EACA,cAAA;AADF;AAGE;EAEE,eAAA;EACA,kBAAA;EACA,kBAAA;AAFJ;AAKE;EACE,gBAAA;EACA,SAAA;AAHJ;;AAOA;EACE,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;AAJF;;AAOA;EACE,oCAAA;EACA,kBAAA;EACA,mBAAA;AAJF;;AAQE;EACE,oCAAA;EACA,kBAAA;EACA,mBAAA;AALJ;;AASA;EACE,qBAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;AANF;;AASA;EACE,gBAAA;EACA,qBAAA;EACA,gEAAA;AANF;;AAUA;EACE,kBAAA;EACA,gBAAA;AAPF;;AASA;EAEE,aAAA;AAPF;AAQE;EACE,qBAAA;EACA,sBAAA;EACA,yBAAA;AANJ;AASE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAPJ;AAUE;EACE,kBAAA;EACA,sBAAA;AARJ;AAUI;EACE,gDAAA;AARN;AAYE;EACE,kBAAA;EACA,gBAAA;AAVJ;AAYI;EACE,kBAAA;AAVN;AAcE;EACE,8BAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;AAZJ;;AAeA;EACE,mBAAA;AAZF;AAcE;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AAZJ;AAcI;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;EACA,oEAAA;EACA,aAAA;EACA,uBAAA;AAZN;AAcM;EACE,mCAAA;EACA,cAAA;AAZR;;AAkBA;EACE,cAAA;EACA,oCAAA;EACA,kBAAA;AAfF;AAiBE;EACE,2CAAA;EACA,yCAAA;EACA,gCAAA;AAfJ;;AAmBA;EACE,oCAAA;EACA,oBAAA;EACA,mBAAA;AAhBF;AAkBE;EACE,iBAAA;EACA,8BAAA;AAhBJ;;AAoBA;EACE,gBAAA;AAjBF;AAmBE;EACE,oBAAA;EACA,SAAA;AAjBJ;;AAqBA;EACE,eAAA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;AAlBF;;AAsBE;EACE,uCAAA;AAnBJ;;AAuBA;EACE,oCAAA;EACA,oBAAA;EACA,cAAA;AApBF;AAsBE;EACE,iBAAA;AApBJ","sourcesContent":["\n.groups-container {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.group-card {\n  margin: 8px 0;\n  border-radius: 12px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  \n  &:active {\n    transform: scale(0.98);\n  }\n}\n\n.selected-group {\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  margin: 16px 0;\n  \n  h2 {\n\n    font-size: 14px;\n    margin-bottom: 4px;\n    padding-left: 10px;\n  }\n  \n  h3 {\n    font-weight: 600;\n    margin: 0;\n  }\n}\n\n.form-section {\n  background: transparent;\n  border-radius: 12px;\n  padding: 6px;\n  margin: 0px 0;\n}\n\n.question-input {\n  --background: var(--ion-color-white);\n  border-radius: 8px;\n  margin-bottom: 24px;\n}\n\n.options-container {\n  ion-item {\n    --background: var(--ion-color-white);\n    border-radius: 8px;\n    margin-bottom: 12px;\n  }\n}\n\n.custom-input {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  font-size: 16px;\n}\n\n.submit-button {\n  margin-top: 24px;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.2);\n}\n\n// Add ripple effect styles\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n.event-container {\n\n  padding: 16px;\n  ion-item {\n    --padding-start: 16px;\n    --inner-padding-end: 0;\n    --background: transparent;\n\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  ion-item {\n    --padding-start: 0;\n    --inner-padding-end: 0;\n    \n    &.item-has-focus {\n      --highlight-background: var(--ion-color-primary);\n    }\n  }\n\n  ion-label {\n    margin-bottom: 8px;\n    font-weight: 500;\n    \n    &[position=\"stacked\"] {\n      margin-bottom: 4px;\n    }\n  }\n\n  .error-message {\n    color: var(--ion-color-danger);\n    font-size: 12px;\n    margin-top: 4px;\n    padding-left: 16px;\n  }\n}\n.banner-field {\n  margin-bottom: 20px;\n\n  .banner-container {\n    width: 100%;\n    height: 200px;\n    background-size: cover;\n    background-position: center;\n    border-radius: 12px;\n    position: relative;\n    overflow: hidden;\n\n    .banner-overlay {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      padding: 16px;\n      background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);\n      display: flex;\n      justify-content: center;\n\n      .upload-button {\n        --background: rgba(255,255,255,0.2);\n        --color: white;\n      }\n    }\n  }\n}\n\n.start-segment {\n  margin: 16px 0;\n  --background: var(--ion-color-light);\n  border-radius: 8px;\n  \n  ion-segment-button {\n    --indicator-color: var(--ion-color-primary);\n    --color-checked: var(--ion-color-primary);\n    --color: var(--ion-color-medium);\n  }\n}\n\n.input-item {\n  --background: var(--ion-color-light);\n  --border-radius: 8px;\n  margin-bottom: 12px;\n\n  .input-icon {\n    margin-right: 8px;\n    color: var(--ion-color-medium);\n  }\n}\n\n.submit-button-container {\n  margin-top: 24px;\n\n  .submit-button {\n    --border-radius: 8px;\n    margin: 0;\n  }\n}\n\n.error-message {\n  font-size: 12px;\n  margin-left: 16px;\n  margin-top: 4px;\n  display: block;\n}\n\n.input-item {\n  &.item-has-error {\n    --border-color: var(--ion-color-danger);\n  }\n}\n\n.checkbox-item {\n  --background: var(--ion-color-light);\n  --border-radius: 8px;\n  margin: 16px 0;\n  \n  ion-checkbox {\n    margin-right: 8px;\n  }\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 13468:
/*!**********************************************************!*\
  !*** ./src/app/new-event/new-event.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <!-- <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button color=\"primary\" class=\"ion-text-capitalize\" [disabled]=\"!pollForm.valid\" (click)=\"submitPollForm()\">Submit</ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\"> \n      <ion-list class=\"ion-no-padding\">\n        <ion-item class=\"ion-margin-left\" text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n            <h3 class=\"ion-no-margin\">{{group.name}}</h3>\n            <p class=\"ion-text-wrap\">\n              <ion-text color=\"medium\">\n                {{group.description}}\n              </ion-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n  <!-- Step 2: Event Form -->\n  <div class=\"event-container\" *ngIf=\"step==2\">\n    <form [formGroup]=\"eventForm\" (ngSubmit)=\"submitEventForm()\">\n      <ion-item lines=\"none\" class=\"selected-group\">\n        <ion-label>\n          <h2>Creating event in <strong>{{group.name}}</strong></h2>\n        </ion-label>\n        <ion-button fill=\"clear\" (click)=\"step = 1\" slot=\"end\">\n          <ion-icon name=\"create-outline\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-item>    \n    \n      <div class=\"post-content\">\n        <!-- Banner Image -->\n        <div class=\"form-field banner-field\">\n          <div class=\"banner-container\" \n               [style.backgroundImage]=\"bannerImage ? 'url(' + bannerImage + ')' : 'url(./assets/images/default-banner.jpg)'\">\n            <div class=\"banner-overlay\">\n              <ion-button class=\"upload-button\" (click)=\"uploadBanner()\">\n                <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n                Change Banner\n              </ion-button>\n            </div>\n          </div>\n        </div>\n    \n        <!-- Event Title -->\n        <div class=\"form-field\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">\n              Event Title <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-input type=\"text\" \n                      formControlName=\"title\" \n                      placeholder=\"Enter event title\"\n                      class=\"title-input\"\n                      required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\" class=\"error-message\" *ngIf=\"eventForm.get('title').touched && eventForm.get('title').errors?.required\">\n            Event title is required\n          </ion-text>\n        </div>\n    \n        <!-- Date & Time -->\n        <div class=\"form-field-group\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">\n              Date <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-datetime formControlName=\"eventDate\" \n                        [min]=\"minDate\" \n                        [max]=\"maxEventYear\"\n                        displayFormat=\"DDD. MMM DD, YYYY\"\n                        required>\n            </ion-datetime>\n          </ion-item>\n          <ion-text color=\"danger\" class=\"error-message\" *ngIf=\"eventForm.get('eventDate').touched && eventForm.get('eventDate').errors?.required\">\n            Date is required\n          </ion-text>\n    \n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">\n              Time <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-datetime formControlName=\"eventTime\" \n                        displayFormat=\"h:mm A\" \n                        minuteValues=\"0,15,30,45\"\n                        required>\n            </ion-datetime>\n          </ion-item>\n          <ion-text color=\"danger\" class=\"error-message\" *ngIf=\"eventForm.get('eventTime').touched && eventForm.get('eventTime').errors?.required\">\n            Time is required\n          </ion-text>\n        </div>\n    \n        <!-- Location -->\n        <div class=\"form-field\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"location-outline\" class=\"input-icon\"></ion-icon>\n              Location <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-input type=\"text\" \n                      formControlName=\"location\" \n                      placeholder=\"Add location\"\n                      required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\" class=\"error-message\" *ngIf=\"eventForm.get('location').touched && eventForm.get('location').errors?.required\">\n            Location is required\n          </ion-text>\n        </div>\n    \n        <!-- Video Link (Optional) -->\n        <div class=\"form-field\">\n          <ion-item class=\"input-item\">\n            <ion-label position=\"floating\">\n              <ion-icon name=\"videocam-outline\" class=\"input-icon\"></ion-icon>\n              Video Link\n            </ion-label>\n            <ion-input type=\"url\" \n                      formControlName=\"videoLink\" \n                      placeholder=\"Add video link (optional)\">\n            </ion-input>\n          </ion-item>\n        </div>\n    \n        <!-- Attendance Checkbox\n        <div class=\"form-field\">\n          <ion-item class=\"checkbox-item\">\n            <ion-label>I'll be attending the Event</ion-label>\n            <ion-checkbox formControlName=\"isAttending\" \n                        color=\"primary\"\n                        slot=\"end\">\n            </ion-checkbox>\n          </ion-item>\n        </div> -->\n    \n        <!-- Submit Button -->\n        <div class=\"submit-button-container\">\n          <ion-button expand=\"block\" \n                    type=\"submit\" \n                    [disabled]=\"!eventForm.valid\"\n                    class=\"submit-button\">\n            Create Event\n          </ion-button>\n        </div>\n      </div>\n    </form>\n      </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_new-event_new-event_module_ts.js.map