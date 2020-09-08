function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newgroup-newgroup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/newgroup/newgroup.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newgroup/newgroup.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewgroupNewgroupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Create New Group</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"outline\" (click)=\"done()\">Create</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"group\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"cover-wrapper\">\r\n            <img src=\"{{group.img}}\" *ngIf=\"group.img != ''\" tappable (click)=\"setGroupPhoto()\"\r\n          onError=\"this.src='./assets/images/default-group.png'\" />\r\n        <img src=\"{{group.img}}\"\r\n          onError=\"this.src='./assets/images/default-group.png'\" *ngIf=\"group.img == ''\" tappable\r\n          (click)=\"setGroupPhoto()\" />\r\n            </div>\r\n        </ion-col>\r\n        </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n        <form [formGroup]=\"myForm\">\r\n          <ion-list style=\"margin:0;\" lines=\"none\">\r\n            <ion-item class=\"input-item\">\r\n              <ion-label position=\"stacked\">Title:</ion-label>\r\n              <ion-input formControlName=\"groupName\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name of Group\">\r\n              </ion-input>\r\n              <div *ngFor=\"let validation of errorMessages.groupName\">\r\n                <p class=\"error\"\r\n                  *ngIf=\"myForm.get('groupName').hasError(validation.type) && (myForm.get('groupName').dirty || myForm.get('groupName').touched || submitAttempt) \">\r\n                  {{validation.message}}\r\n                </p>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Description</ion-label>\r\n              <ion-textarea formControlName=\"groupDescription\" rows=\"3\" [(ngModel)]=\"description\"\r\n                placeholder=\"Describe this Group\"></ion-textarea>\r\n              <div *ngFor=\"let validation of errorMessages.groupDescription\">\r\n                <p class=\"error\"\r\n                  *ngIf=\"myForm.get('groupDescription').hasError(validation.type) && (myForm.get('groupDescription').dirty || myForm.get('groupDescription').touched || submitAttempt) \">\r\n                  {{validation.message}}\r\n                </p>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Group Tags</ion-label>\r\n              <ion-textarea formControlName=\"groupTags\" rows=\"3\" [(ngModel)]=\"groupTags\"\r\n                placeholder=\"Add Group Tags in each line.\"></ion-textarea>\r\n              <div *ngFor=\"let validation of errorMessages.groupTags\">\r\n                <p class=\"error\"\r\n                  *ngIf=\"myForm.get('groupTags').hasError(validation.type) && (myForm.get('groupTags').dirty || myForm.get('groupTags').touched || submitAttempt) \">\r\n                  {{validation.message}}\r\n                </p>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/newgroup/newgroup.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/newgroup/newgroup.module.ts ***!
    \*********************************************/

  /*! exports provided: NewgroupPageModule */

  /***/
  function srcAppNewgroupNewgroupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewgroupPageModule", function () {
      return NewgroupPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _newgroup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./newgroup.page */
    "./src/app/newgroup/newgroup.page.ts");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/share.module */
    "./src/app/services/share.module.ts");

    var routes = [{
      path: '',
      component: _newgroup_page__WEBPACK_IMPORTED_MODULE_6__["NewgroupPage"]
    }];

    var NewgroupPageModule = function NewgroupPageModule() {
      _classCallCheck(this, NewgroupPageModule);
    };

    NewgroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_newgroup_page__WEBPACK_IMPORTED_MODULE_6__["NewgroupPage"]]
    })], NewgroupPageModule);
    /***/
  },

  /***/
  "./src/app/newgroup/newgroup.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/newgroup/newgroup.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewgroupNewgroupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cover-wrapper {\n  margin-bottom: var(--page-margin);\n  text-align: center;\n  padding-top: 5px;\n}\n.cover-wrapper .cover-anchor {\n  display: block;\n}\n.cover-wrapper .cover-icon-wrapper {\n  margin: 0px 20%;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.cover-wrapper .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3Z3JvdXAvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcbmV3Z3JvdXBcXG5ld2dyb3VwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3Z3JvdXAvbmV3Z3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNFLGNBQUE7QUNFTjtBRENJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NOO0FERUk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9uZXdncm91cC9uZXdncm91cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgLmNvdmVyLWFuY2hvciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3Zlci1pY29uLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW46IDBweCAyMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIH1cclxuICB9IiwiLmNvdmVyLXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5jb3Zlci13cmFwcGVyIC5jb3Zlci1hbmNob3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb3Zlci13cmFwcGVyIC5jb3Zlci1pY29uLXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY292ZXItd3JhcHBlciAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/newgroup/newgroup.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/newgroup/newgroup.page.ts ***!
    \*******************************************/

  /*! exports provided: NewgroupPage */

  /***/
  function srcAppNewgroupNewgroupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewgroupPage", function () {
      return NewgroupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var NewgroupPage =
    /*#__PURE__*/
    function () {
      function NewgroupPage(router, imageProvider, dataProvider, alertCtrl, firestore, afAuth, loadingProvider, camera, formBuilder) {
        _classCallCheck(this, NewgroupPage);

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
          groupName: [{
            type: 'required',
            message: 'Name is a required field.'
          }],
          groupDescription: [{
            type: 'required',
            message: 'Description is a required field.'
          }],
          groupTags: [{
            type: 'required',
            message: 'GroupTags is a required field.'
          }]
        };
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
          groupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])),
          groupDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required])),
          groupTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]))
        });
      }

      _createClass(NewgroupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

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
          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (accounts) {
            _this.account = accounts.payload.data();

            if (!_this.groupMembers) {
              _this.groupMembers = [_this.account];
            } else {
              _this.friends = [];
            }
          });
        } // Proceed with group creation.

      }, {
        key: "done",
        value: function done() {
          var _this2 = this;

          this.submitAttempt = true;

          if (this.myForm.valid) {
            this.loadingProvider.show();
            var messages = []; // Add system message that group is created.

            messages.push({
              date: new Date().toString(),
              sender: this.afAuth.auth.currentUser.uid,
              type: 'system',
              message: 'This group has been created.',
              icon: 'md-chatbubbles'
            }); // Add members of the group.

            var members = [];

            for (var i = 0; i < this.groupMembers.length; i++) {
              members.push(this.groupMembers[i].userId);
            } // Add group info and date.


            this.group.dateCreated = new Date().toString();
            this.group.messages = messages;
            this.group.members = members;
            this.group.name = this.name;
            this.group.description = this.description;
            this.group.groupTags = this.groupTags.split('\n'); // Add group to database.

            this.firestore.collection('groups').add(this.group).then(function (success) {
              var groupId = success.id;

              _this2.router.navigateByUrl('/group/' + groupId);

              _this2.account.groups.push(groupId);

              _this2.dataProvider.getCurrentUser().update({
                groups: _this2.account.groups
              });
            });
          }
        } // Set group photo.

      }, {
        key: "setGroupPhoto",
        value: function setGroupPhoto() {
          var _this3 = this;

          this.alert = this.alertCtrl.create({
            header: 'Set Group Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [{
              text: 'Cancel',
              handler: function handler(data) {}
            }, {
              text: 'Choose from Gallery',
              handler: function handler() {
                _this3.imageProvider.setGroupPhoto(_this3.group, _this3.camera.PictureSourceType.PHOTOLIBRARY);
              }
            }, {
              text: 'Take Photo',
              handler: function handler() {
                _this3.imageProvider.setGroupPhoto(_this3.group, _this3.camera.PictureSourceType.CAMERA);
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        }
      }]);

      return NewgroupPage;
    }();

    NewgroupPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
      }];
    };

    NewgroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newgroup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./newgroup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/newgroup/newgroup.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./newgroup.page.scss */
      "./src/app/newgroup/newgroup.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"], _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]])], NewgroupPage);
    /***/
  }
}]);
//# sourceMappingURL=newgroup-newgroup-module-es5.js.map