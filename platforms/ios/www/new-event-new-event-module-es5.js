(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-event-new-event-module"], {
    /***/
    "N3BR":
    /*!*********************************************!*\
      !*** ./src/app/new-event/new-event.page.ts ***!
      \*********************************************/

    /*! exports provided: NewEventPage */

    /***/
    function N3BR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewEventPage", function () {
        return NewEventPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_new_event_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./new-event.page.html */
      "lyRr");
      /* harmony import */


      var _new_event_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-event.page.scss */
      "uqSK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/image.service */
      "mnRn");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../validators/checkbox-checked.validator */
      "ypRl");

      var NewEventPage = /*#__PURE__*/function () {
        function NewEventPage(route, router, dataProvider, loadingProvider, navCtrl, http, camera, actionSheet, imageProvider, firestore) {
          _classCallCheck(this, NewEventPage);

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
            title: [{
              type: 'required',
              message: 'Title is a required field.'
            }],
            description: [{
              type: 'required',
              message: 'Description is a required field.'
            }],
            eventDate: [{
              type: 'required',
              message: 'Please select the Event date.'
            }],
            eventTime: [{
              type: 'required',
              message: 'Please select the Event time.'
            }],
            tags: [{
              type: 'required',
              message: 'Please select at least one tag.'
            }]
          };
          this.groupId = this.route.snapshot.params.id;
          this.group = {
            name: ''
          };

          if (this.groupId === 'undefined') {
            this.step = 1;
          } else {
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
          }); // Set min and max event dates

          var dateObj = new Date();
          this.minEventMonth = dateObj.getUTCMonth() + 1;
          this.minEventDay = dateObj.getUTCDate() + 1;
          this.minEventYear = dateObj.getUTCFullYear();
          this.maxEventYear = this.minEventYear + 1;
          this.minDate = new Date().toISOString();
        }

        _createClass(NewEventPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (value) {
              _this.user = value.payload.data();
              _this.addedByUser = {
                addedByKey: value.payload.data().userId,
                addedByUsername: value.payload.data().username,
                addedByImg: value.payload.data().img
              }; // Initialize

              _this.event = {
                addedByUser: _this.addedByUser,
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

              if (_this.step === 1) {
                _this.title = 'Select a group ...'; // Get User Groups List

                if (_this.user.groups) {
                  _this.firestore.collection('groups').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_12__["firestore"].FieldPath.documentId(), 'in', _this.user.groups).get().then(function (group) {
                    _this.groups = [];
                    group.forEach(function (g) {
                      var group;
                      group = g.data();
                      group.key = g.id;

                      _this.addOrUpdateUserGroup(group);
                    });
                  });
                }
              } else {
                _this.title = 'Poll';

                _this.dataProvider.getGroup(_this.groupId).snapshotChanges().subscribe(function (group) {
                  _this.group = group.payload.data();

                  _this.group.groupTags.forEach(function (element) {
                    _this.postTags.push({
                      val: element,
                      isChecked: false
                    });
                  });

                  _this.addTagControls();
                });
              }
            });
          }
        }, {
          key: "addOrUpdateUserGroup",
          value: function addOrUpdateUserGroup(group) {
            if (!this.groups) {
              this.groups = [group];
            } else {
              var index = -1;

              for (var i = 0; i < this.groups.length; i++) {
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
        }, {
          key: "addTagControls",
          value: function addTagControls() {
            var _this2 = this;

            this.postTags.forEach(function (o, i) {
              var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false

              _this2.eventForm.controls.tags.push(control);
            });
          }
        }, {
          key: "submitEventForm",
          value: function submitEventForm() {
            var _this3 = this;

            this.loadingProvider.show(); // Add event info and date.

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
            }; // Add event to database.

            this.dataProvider.addPost(this.event).then(function (success) {
              var eventId = success.id;
              _this3.eventId = eventId;

              if (_this3.group.posts === undefined) {
                _this3.group.posts = [];
              }

              _this3.group.posts.push(_this3.eventId); // Update group data on the database.


              _this3.dataProvider.getGroup(_this3.groupId).update({
                posts: _this3.group.posts
              }); // Update the Checkin data for this event


              if (_this3.eventForm.value.eventAttending === true) {
                var reaction = {
                  addedByUser: _this3.addedByUser,
                  dateCreated: new Date(),
                  reactionType: 'Checkin'
                };

                _this3.dataProvider.updatePostReactions(eventId, reaction);
              }

              _this3.loadingProvider.hide();

              _this3.router.navigateByUrl('tabs/tab3');
            });
          }
        }, {
          key: "linkFocusOut",
          value: function linkFocusOut() {
            var _this4 = this;

            this.loadingProvider.show();

            var getMeta = __webpack_require__(
            /*! lets-get-meta */
            "zxjh");

            this.http.get(this.eventForm.value.weblink, {
              responseType: 'text'
            }).subscribe(function (res) {
              var o = getMeta(res);
              _this4.linkDescription = o.description;

              _this4.loadingProvider.hide();
            }); // const o = getMeta("<meta name='page' content='index'><meta property='description' content='This is the index page'>")
            // this.linkDescription = o.description;
          }
        }, {
          key: "selectGroup",
          value: function selectGroup(groupId) {
            var _this5 = this;

            this.groupId = groupId;
            console.log('groupId', groupId);
            this.step = 2;
            this.title = 'Event';
            this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this5.group = group.payload.data();

              _this5.group.groupTags.forEach(function (element) {
                _this5.postTags.push({
                  val: element,
                  isChecked: false
                });
              });

              _this5.addTagControls();
            });
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this6 = this;

            this.actionSheet.create({
              header: 'Attach images',
              buttons: [{
                text: 'Camera',
                handler: function handler() {
                  _this6.imageProvider.uploadPostPhoto(_this6.camera.PictureSourceType.CAMERA).then(function (url) {
                    _this6.postMedia.push(url);

                    console.log(url);
                  });
                }
              }, {
                text: 'Photo Library',
                handler: function handler() {
                  _this6.imageProvider.getImages().then(function (url) {
                    _this6.postMedia = _this6.postMedia.concat(url);
                    console.log(url);
                  });
                }
              }, {
                text: 'Video',
                handler: function handler() {
                  _this6.imageProvider.uploadPostVideo().then(function (url) {
                    _this6.postMedia(url);

                    console.log(url);
                  });
                }
              }, {
                text: 'Cancel',
                role: 'cancel',
                handler: function handler() {
                  console.log('cancelled');
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "removeMedia",
          value: function removeMedia(media) {
            this.postMedia.splice();
            this.postMedia = this.postMedia.filter(function (x) {
              return x !== media;
            });
            console.log('this.postMedia:', this.postMedia);
            this.imageProvider.deletePostPhoto(media);
          }
        }]);

        return NewEventPage;
      }();

      NewEventPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"]
        }];
      };

      NewEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-event',
        template: _raw_loader_new_event_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_event_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"]])], NewEventPage);
      /***/
    },

    /***/
    "lyRr":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-event/new-event.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function lyRr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons *ngIf=\"step==2\" slot=\"end\">\n      <ion-button color=\"secondary\" class=\"ion-text-capitalize\" [disabled]=\"!eventForm.valid\" (click)=\"submitEventForm()\">Post</ion-button>\n    </ion-buttons>\n</ion-toolbar>\n</ion-header> \n\n<ion-content  class=\"forms-validations-content\">\n  <div *ngIf=\"step==1\"> \n    <div *ngIf=\"groups && groups.length > 0\">\n      <ion-list>\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"selectGroup(group.$key)\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-group.png'\">\n          </ion-thumbnail>\n          <ion-label>\n              <b>{{group.name}}</b><br/>\n              {{group.description}}\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf=\"step==2\">\n  <form class=\"validations-form\" [formGroup]=\"eventForm\" (ngSubmit)=\"submitEventForm()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-list-header class=\"header\">\n        posting in &nbsp;<ion-label><b>{{group.name}}</b></ion-label>\n      </ion-list-header>\n      <ion-item class=\"input-item\">\n        <ion-input type=\"text\" formControlName=\"title\" clearInput placeholder=\"Enter a short description\"></ion-input>\n      </ion-item>\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Event Date:</ion-label>\n        <ion-datetime formControlName=\"eventDate\" value=\"{minEventYear}-{minEventMonth}-{minEventDay}\" [min]=\"minDate\" [max]=\"maxEventYear\"\n        [dayShortNames]=\"customDayShortNames\"\n        displayFormat=\"DDD. MMM DD, YYYY\"\n        monthShortNames=\"January, February, March, April, May, June, July, August, September, October, November, December\"></ion-datetime>\n        </ion-item>\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Event Time:</ion-label>\n        <ion-datetime  formControlName=\"eventTime\" displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\n      </ion-item>\n      <ion-item class=\"input-item\">\n        <ion-textarea rows=\"6\"  formControlName=\"address\" clearInput placeholder=\"Enter the full address of the event\"></ion-textarea>\n      </ion-item>\n      <ion-item class=\"input-item\">\n        <ion-input type=\"text\" formControlName=\"weblink\" clearInput placeholder=\"Paste or type the link\" (focusout)=\"linkFocusOut()\"></ion-input>\n      </ion-item> \n      <ion-item class=\"input-item\">\n        <ion-textarea rows=\"6\"   [(ngModel)]=\"linkDescription\" name=\"linkDescription\" formControlName=\"description\" clearInput placeholder=\"Enter the details of the event\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>I'll be attending the Event.</ion-label>\n        <ion-checkbox formControlName=\"eventAttending\" checked=\"false\"  color=\"primary\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-list-header>\n        <ion-label class=\"header-title\">Select relevant tags</ion-label>\n      </ion-list-header>\n \n      <div class=\"reviews-wrapper\">\n      <ion-row>\n        <div class=\"tags\" formArrayName=\"tags\" *ngFor=\"let entry of eventForm.controls.tags.controls; let i = index\">\n          <ion-label *ngIf=\"postTags[i] === undefined || !postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"0\">{{postTags[i].val}}</ion-label>\n          <ion-label *ngIf=\"postTags[i] !== undefined && postTags[i].isChecked\" class=\"item-rating\" [attr.ratingBase]=\"1\">{{postTags[i].val}}</ion-label>  \n          <ion-checkbox slot=\"start\" [formControlName]=\"i\" [(ngModel)]=\"postTags[i].isChecked\"></ion-checkbox>\n        </div>\n      </ion-row>\n\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.tags\">\n          <div class=\"error-message\" *ngIf=\"eventForm.get('tags').hasError(validation.type) && (eventForm.get('tags').dirty || eventForm.get('tags').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      </div>\n    </ion-list>\n\n    <!-- <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" fill=\"outline\" [disabled]=\"!eventForm.valid\">Submit</ion-button> -->\n\n  </form>\n  </div>\n\n</ion-content>\n<ion-footer *ngIf=\"step==2\">\n  <ion-toolbar>\n    <ion-row lines=\"none\" class=\"uploads item-text-wrap\" *ngIf=\"postMedia && postMedia.length > 0\">\n      <div class=\"img-wrap\" *ngFor=\"let media of postMedia\">\n          <ion-thumbnail slot=\"start\">\n            <span class=\"close\" (click)=\"removeMedia(media)\">&times;</span>\n            <ion-img [src]=\"media\">\n              <!-- <ion-buttons class=\"\"> \n                <ion-button (click)=\"removeMedia()\">\n                  <ion-icon size=\"small\" name=\"close-circle-outline\"></ion-icon>\n                </ion-button>\n              </ion-buttons> -->\n            </ion-img>\n          </ion-thumbnail>\n        </div>\n    </ion-row>\n    <ion-item lines=\"none\">\n      <ion-button class=\"ion-text-capitalize\" fill=\"clear\" (click)=\"attach()\">\n        <ion-icon class=\"ion-padding-end\" size=\"large\" name=\"camera-outline\"></ion-icon>\n        Add photo or video\n      </ion-button>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "uZUT":
    /*!***********************************************!*\
      !*** ./src/app/new-event/new-event.module.ts ***!
      \***********************************************/

    /*! exports provided: NewEventPageModule */

    /***/
    function uZUT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewEventPageModule", function () {
        return NewEventPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");
      /* harmony import */


      var _new_event_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./new-event.page */
      "N3BR");

      var routes = [{
        path: '',
        component: _new_event_page__WEBPACK_IMPORTED_MODULE_7__["NewEventPage"]
      }];

      var NewEventPageModule = function NewEventPageModule() {
        _classCallCheck(this, NewEventPageModule);
      };

      NewEventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_new_event_page__WEBPACK_IMPORTED_MODULE_7__["NewEventPage"]]
      })], NewEventPageModule);
      /***/
    },

    /***/
    "uqSK":
    /*!***********************************************!*\
      !*** ./src/app/new-event/new-event.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function uqSK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.forms-validations-content .validations-form {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list {\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.forms-validations-content .validations-form .inputs-list .header {\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.forms-validations-content .validations-form .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n\n.forms-validations-content .validations-form .submit-btn {\n  margin: var(--page-margin);\n}\n\n.forms-validations-content .tags {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.forms-validations-content .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"0\"] {\n  background-color: #bbb2b2;\n}\n\n.forms-validations-content .tags .item-rating[ratingBase=\"1\"] {\n  background-color: #e0c77c;\n}\n\n.forms-validations-content .tags ion-checkbox {\n  margin: 0px;\n  width: 50px;\n  align-content: center;\n  --border-width: 0px;\n  --color-checked: transparent;\n  margin-left: 9px;\n  margin-top: -20px;\n  display: block;\n  opacity: 0;\n}\n\n.uploads {\n  margin: 5px;\n}\n\n.uploads .img-wrap {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n  padding: 5px;\n}\n\n.uploads .img-wrap .close {\n  position: absolute;\n  top: -2px;\n  right: -7px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 5px 2px 2px;\n  color: #000;\n  cursor: pointer;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.uploads .img-wrap:hover .close {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWV2ZW50L25ldy1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtBQUNGOztBQUdHO0VBQ0MsMkNBQUE7QUFBSjs7QUFFSTtFQUNFLDJFQUFBO0FBQU47O0FBRU07RUFDRSxlQUFBO0FBQVI7O0FBR1E7RUFDRSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQURWOztBQUdVO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUFEWjs7QUFPSTtFQUNFLDBCQUFBO0FBTE47O0FBU0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBUUU7RUFFRSxtREFBQTtFQUNRLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFQWjs7QUFRWTtFQUNFLHlCQUFBO0FBTmQ7O0FBUVk7RUFDRSx5QkFBQTtBQU5kOztBQVNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFQSjs7QUFhQTtFQUNFLFdBQUE7QUFWRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVEY7O0FBV0E7RUFDRSxVQUFBO0FBVEYiLCJmaWxlIjoic3JjL2FwcC9uZXctZXZlbnQvbmV3LWV2ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xufVxuXG4uZm9ybXMtdmFsaWRhdGlvbnMtY29udGVudCB7XG4gICAudmFsaWRhdGlvbnMtZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5pbnB1dHMtbGlzdCB7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAuZXJyb3ItY29udGFpbmVyIHtcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJtaXQtYnRuIHtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC50YWdzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgLml0ZW0tcmF0aW5nIHtcbiAgICAvLyBEZWZhdWx0IGJhY2tncm91bmRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICZbcmF0aW5nQmFzZT1cIjBcIl0ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiMmIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3N2M7XG4gICAgICAgICAgICB9XG4gIH1cbiAgaW9uLWNoZWNrYm94IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxufVxufVxuXG4udXBsb2FkcyB7XG4gIG1hcmdpbjogNXB4O1xuLmltZy13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmltZy13cmFwIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMnB4O1xuICByaWdodDogLTdweDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiA1cHggMnB4IDJweDtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaW1nLXdyYXA6aG92ZXIgLmNsb3NlIHtcbiAgb3BhY2l0eTogMTtcbn1cbn1cblxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=new-event-new-event-module-es5.js.map