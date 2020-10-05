(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-event-new-event-module"],{

/***/ "N3BR":
/*!*********************************************!*\
  !*** ./src/app/new-event/new-event.page.ts ***!
  \*********************************************/
/*! exports provided: NewEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventPage", function() { return NewEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_event_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-event.page.html */ "lyRr");
/* harmony import */ var _new_event_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-event.page.scss */ "uqSK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/image.service */ "mnRn");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/loading.service */ "7ch9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "Pn9U");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "mrps");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../validators/checkbox-checked.validator */ "ypRl");
















let NewEventPage = class NewEventPage {
    constructor(route, router, dataProvider, loadingProvider, navCtrl, http, camera, actionSheet, imageProvider, firestore) {
        this.route = route;
        this.router = router;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.navCtrl = navCtrl;
        this.http = http;
        this.camera = camera;
        this.actionSheet = actionSheet;
        this.imageProvider = imageProvider;
        this.firestore = firestore;
        this.postTags = [];
        this.step = 1;
        this.userNotifications = [];
        this.postMedia = [];
        this.validations = {
            title: [
                { type: 'required', message: 'Title is a required field.' }
            ],
            description: [
                { type: 'required', message: 'Description is a required field.' }
            ],
            eventDate: [
                { type: 'required', message: 'Please select the Event date.' }
            ],
            eventTime: [
                { type: 'required', message: 'Please select the Event time.' }
            ],
            tags: [
                { type: 'required', message: 'Please select at least one tag.' }
            ]
        };
        this.groupId = this.route.snapshot.params.id;
        this.group = { name: '' };
        if (this.groupId === 'undefined') {
            this.step = 1;
        }
        else {
            this.step = 2;
        }
        this.eventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            eventDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            eventTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_15__["CheckboxCheckedValidator"].tagsSelected(1)),
            eventAttending: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            weblink: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        // Set min and max event dates
        const dateObj = new Date();
        this.minEventMonth = dateObj.getUTCMonth() + 1;
        this.minEventDay = dateObj.getUTCDate() + 1;
        this.minEventYear = dateObj.getUTCFullYear();
        this.maxEventYear = this.minEventYear + 1;
        this.minDate = new Date().toISOString();
    }
    ionViewDidEnter() { }
    ngOnInit() {
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((value) => {
            this.user = value.payload.data();
            this.addedByUser = {
                addedByKey: value.payload.data().userId,
                addedByUsername: value.payload.data().username,
                addedByImg: value.payload.data().img
            };
            // Initialize
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
                    this.firestore.collection('groups').ref
                        .where(firebase_app__WEBPACK_IMPORTED_MODULE_12__["firestore"].FieldPath.documentId(), 'in', this.user.groups)
                        .get().then((group) => {
                        this.groups = [];
                        group.forEach(g => {
                            let group;
                            group = g.data();
                            group.key = g.id;
                            this.addOrUpdateUserGroup(group);
                        });
                    });
                }
            }
            else {
                this.title = 'Poll';
                this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
                    this.group = group.payload.data();
                    this.group.groupTags.forEach((element) => {
                        this.postTags.push({ val: element, isChecked: false });
                    });
                    this.addTagControls();
                });
            }
        });
    }
    addOrUpdateUserGroup(group) {
        if (!this.groups) {
            this.groups = [group];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.groups.length; i++) {
                if (this.groups[i].key == group.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groups[index] = group;
            }
            else {
                this.groups.push(group);
            }
        }
    }
    addTagControls() {
        this.postTags.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false
            this.eventForm.controls.tags.push(control);
        });
    }
    submitEventForm() {
        this.loadingProvider.show();
        // Add event info and date.
        this.event.groupId = this.groupId;
        this.event.groupName = this.group.name;
        this.event.date = new Date();
        this.event.title = this.eventForm.value.title;
        this.event.postTags = [];
        this.event.postTags = this.postTags;
        this.event.postMedia = this.postMedia;
        this.event.data = {
            message: this.eventForm.value.description,
            eventDate: this.eventForm.value.eventDate,
            eventTime: moment__WEBPACK_IMPORTED_MODULE_14__(this.eventForm.value.eventTime).format('h:mm A'),
            address: this.eventForm.value.address,
            link: this.eventForm.value.weblink
        };
        // Add event to database.
        this.dataProvider.addPost(this.event).then((success) => {
            const eventId = success.id;
            this.eventId = eventId;
            if (this.group.posts === undefined) {
                this.group.posts = [];
            }
            this.group.posts.push(this.eventId);
            // Update group data on the database.
            this.dataProvider.getGroup(this.groupId).update({
                posts: this.group.posts
            });
            // Update the Checkin data for this event
            if (this.eventForm.value.eventAttending === true) {
                const reaction = {
                    addedByUser: this.addedByUser,
                    dateCreated: new Date(),
                    reactionType: 'Checkin'
                };
                this.dataProvider.updatePostReactions(eventId, reaction);
            }
            this.loadingProvider.hide();
            this.router.navigateByUrl('tabs/tab3');
        });
    }
    linkFocusOut() {
        this.loadingProvider.show();
        const getMeta = __webpack_require__(/*! lets-get-meta */ "zxjh");
        this.http.get(this.eventForm.value.weblink, { responseType: 'text' })
            .subscribe(res => {
            const o = getMeta(res);
            this.linkDescription = o.description;
            this.loadingProvider.hide();
        });
        // const o = getMeta("<meta name='page' content='index'><meta property='description' content='This is the index page'>")
        // this.linkDescription = o.description;
    }
    selectGroup(groupId) {
        this.groupId = groupId;
        console.log('groupId', groupId);
        this.step = 2;
        this.title = 'Event';
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
            this.group.groupTags.forEach((element) => {
                this.postTags.push({ val: element, isChecked: false });
            });
            this.addTagControls();
        });
    }
    attach() {
        this.actionSheet.create({
            header: 'Attach images',
            buttons: [{
                    text: 'Camera',
                    handler: () => {
                        this.imageProvider.uploadPostPhoto(this.camera.PictureSourceType.CAMERA).then((url) => {
                            this.postMedia.push(url);
                            console.log(url);
                        });
                    }
                }, {
                    text: 'Photo Library',
                    handler: () => {
                        this.imageProvider.getImages().then((url) => {
                            this.postMedia = this.postMedia.concat(url);
                            console.log(url);
                        });
                    }
                },
                {
                    text: 'Video',
                    handler: () => {
                        this.imageProvider.uploadPostVideo().then(url => {
                            this.postMedia(url);
                            console.log(url);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancelled');
                    }
                }]
        }).then(r => r.present());
    }
    removeMedia(media) {
        this.postMedia.splice();
        this.postMedia = this.postMedia.filter(x => x !== media);
        console.log('this.postMedia:', this.postMedia);
        this.imageProvider.deletePostPhoto(media);
    }
};
NewEventPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"] }
];
NewEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-event',
        template: _raw_loader_new_event_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_event_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"]])
], NewEventPage);



/***/ }),

/***/ "lyRr":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\r\n      <ion-button color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!eventForm.valid\" (click)=\"submitEventForm()\">Post</ion-button>\r\n    </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content  class=\"forms-validations-content\">\r\n  <div *ngIf=\"step==1\"> \r\n    <div *ngIf=\"groups && groups.length > 0\">\r\n      <ion-list>\r\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n              <b>{{group.name}}</b><br/>\r\n              {{group.description}}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"step==2\">\r\n  <form class=\"validations-form\" [formGroup]=\"eventForm\" (ngSubmit)=\"submitEventForm()\">\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-list-header class=\"header\">\r\n        posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\r\n      </ion-list-header>\r\n      <ion-item class=\"input-item\">\r\n        <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Event Date:</ion-label>\r\n        <ion-datetime formControlName=\"eventDate\" value=\"{minEventYear}-{minEventMonth}-{minEventDay}\" [min]=\"minDate\" [max]=\"maxEventYear\"\r\n        [dayShortNames]=\"customDayShortNames\"\r\n        displayFormat=\"DDD. MMM DD, YYYY\"\r\n        monthShortNames=\"January, February, March, April, May, June, July, August, September, October, November, December\"></ion-datetime>\r\n        </ion-item>\r\n      <ion-item class=\"input-item\">\r\n        <ion-label position=\"floating\">Event Time:</ion-label>\r\n        <ion-datetime  formControlName=\"eventTime\" displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\r\n      </ion-item>\r\n      <ion-item class=\"input-item\">\r\n        <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the event\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item class=\"input-item\">\r\n        <ion-input type=\"text\" formControlName=\"weblink\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\r\n      </ion-item> \r\n      <ion-item class=\"input-item\">\r\n        <ion-textarea rows=\"6\"   [(ngModel)]=\"linkDescription\" name=\"linkDescription\" formControlName=\"description\" clearInput placeholder=\"Enter the details of the event\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>I'll be attending the Event.</ion-label>\r\n        <ion-checkbox formControlName=\"eventAttending\" checked=\"false\"  color=\"primary\"></ion-checkbox>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list class=\"inputs-list\" lines=\"full\">\r\n      <ion-list-header>\r\n        <ion-label class=\"header-title\">Select relevant tags</ion-label>\r\n      </ion-list-header>\r\n \r\n      <div class=\"reviews-wrapper\">\r\n      <ion-row>\r\n        <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of eventForm.controls.tags.controls; let i = index\">\r\n          <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\r\n          <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \r\n          <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\r\n        </div>\r\n      </ion-row>\r\n\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validations.tags\">\r\n          <div class=\"error-message\" *ngIf=\"eventForm.get('tags').hasError(validation.type) && (eventForm.get('tags').dirty || eventForm.get('tags').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            <span>{{ validation.message }}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n      </div>\r\n    </ion-list>\r\n\r\n    <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!eventForm.valid\">Submit</ion-button> -->\r\n\r\n  </form>\r\n  </div>\r\n\r\n</ion-content>\r\n<ion-footer *ngIf=\"step==2\">\r\n  <ion-toolbar>\r\n    <ion-row lines=\"none\" class=\"uploads item-text-wrap\" *ngIf=\"postMedia && postMedia.length > 0\">\r\n      <div class=\"img-wrap\" *ngFor=\"let media of postMedia\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <span class=\"close\" (click)=\"removeMedia(media)\">&times;</span>\r\n            <ion-img [src]=\"media\">\r\n              <!-- <ion-buttons class=\"\"> \r\n                <ion-button (click)=\"removeMedia()\">\r\n                  <ion-icon size=\"small\" name=\"close-circle-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-buttons> -->\r\n            </ion-img>\r\n          </ion-thumbnail>\r\n        </div>\r\n    </ion-row>\r\n    <ion-item lines=\"none\">\r\n      <ion-button class=\"ion-text-capitalize\" fill=\"clear\" (click)=\"attach()\">\r\n        <ion-icon class=\"ion-padding-end\" size=\"large\" name=\"camera-outline\"></ion-icon>\r\n        Add photo or video\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "uZUT":
/*!***********************************************!*\
  !*** ./src/app/new-event/new-event.module.ts ***!
  \***********************************************/
/*! exports provided: NewEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventPageModule", function() { return NewEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/share.module */ "vxGH");
/* harmony import */ var _new_event_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-event.page */ "N3BR");








const routes = [
    {
        path: '',
        component: _new_event_page__WEBPACK_IMPORTED_MODULE_7__["NewEventPage"]
    }
];
let NewEventPageModule = class NewEventPageModule {
};
NewEventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_new_event_page__WEBPACK_IMPORTED_MODULE_7__["NewEventPage"]]
    })
], NewEventPageModule);



/***/ }),

/***/ "uqSK":
/*!***********************************************!*\
  !*** ./src/app/new-event/new-event.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWV2ZW50L25ldy1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtBQUNGOztBQUdHO0VBQ0MsMkNBQUE7QUFBSjs7QUFFSTtFQUNFLDJFQUFBO0FBQU47O0FBRU07RUFDRSxlQUFBO0FBQVI7O0FBR1E7RUFDRSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQURWOztBQUdVO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUFEWjs7QUFPSTtFQUNFLDBCQUFBO0FBTE47O0FBU0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBUUU7RUFFRSxtREFBQTtFQUNRLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFQWjs7QUFRWTtFQUNFLHlCQUFBO0FBTmQ7O0FBUVk7RUFDRSx5QkFBQTtBQU5kOztBQVNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFQSjs7QUFhQTtFQUNFLFdBQUE7QUFWRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVEY7O0FBV0E7RUFDRSxVQUFBO0FBVEYiLCJmaWxlIjoic3JjL2FwcC9uZXctZXZlbnQvbmV3LWV2ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcbn1cclxuXHJcbi5mb3Jtcy12YWxpZGF0aW9ucy1jb250ZW50IHtcclxuICAgLnZhbGlkYXRpb25zLWZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuXHJcbiAgICAuaW5wdXRzLWxpc3Qge1xyXG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcblxyXG4gICAgICAuaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGFncyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIC5pdGVtLXJhdGluZyB7XHJcbiAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuMzUpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMFwiXSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjJiMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIxXCJdIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNzdjO1xyXG4gICAgICAgICAgICB9XHJcbiAgfVxyXG4gIGlvbi1jaGVja2JveCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbn1cclxufVxyXG5cclxuLnVwbG9hZHMge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4uaW1nLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uaW1nLXdyYXAgLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIHJpZ2h0OiAtN3B4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIHBhZGRpbmc6IDVweCAycHggMnB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaW1nLXdyYXA6aG92ZXIgLmNsb3NlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=new-event-new-event-module-es2015.js.map