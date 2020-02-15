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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Create New Group</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"outline\" (click)=\"done()\">Create</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"group\">\r\n    <ion-row>\r\n      <ion-col size=\"3\" style=\"text-align:center; margin-top: 4rem;\">\r\n        <img src=\"{{group.img}}\" *ngIf=\"group.img != ''\" tappable (click)=\"setGroupPhoto()\"\r\n          onError=\"this.src='./assets/images/default-group.png'\" />\r\n        <img style=\"border-radius: 100%; width: 100px; height: 100px;\" src=\"{{group.img}}\"\r\n          onError=\"this.src='./assets/images/default-group.png'\" *ngIf=\"group.img == ''\" tappable\r\n          (click)=\"setGroupPhoto()\" />\r\n      </ion-col>\r\n      <ion-col size=\"9\">\r\n        <form [formGroup]=\"myForm\">\r\n          <ion-list style=\"margin:0;\" lines=\"none\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Group Name</ion-label>\r\n              <ion-input formControlName=\"groupName\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name of Group\">\r\n              </ion-input>\r\n              <div *ngFor=\"let validation of errorMessages.groupName\">\r\n                <p class=\"error\"\r\n                  *ngIf=\"myForm.get('groupName').hasError(validation.type) && (myForm.get('groupName').dirty || myForm.get('groupName').touched || submitAttempt) \">\r\n                  {{validation.message}}\r\n                </p>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Description</ion-label>\r\n              <ion-textarea formControlName=\"groupDescription\" rows=\"3\" [(ngModel)]=\"description\"\r\n                placeholder=\"Describe this Group\"></ion-textarea>\r\n              <div *ngFor=\"let validation of errorMessages.groupDescription\">\r\n                <p class=\"error\"\r\n                  *ngIf=\"myForm.get('groupDescription').hasError(validation.type) && (myForm.get('groupDescription').dirty || myForm.get('groupDescription').touched || submitAttempt) \">\r\n                  {{validation.message}}\r\n                </p>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Group Tags</ion-label>\r\n              <ion-textarea formControlName=\"groupTags\" rows=\"3\" [(ngModel)]=\"groupTags\"\r\n                placeholder=\"Add Group Tags in each line.\"></ion-textarea>\r\n              <div *ngFor=\"let validation of errorMessages.groupTags\">\r\n                <p class=\"error\"\r\n                  *ngIf=\"myForm.get('groupTags').hasError(validation.type) && (myForm.get('groupTags').dirty || myForm.get('groupTags').touched || submitAttempt) \">\r\n                  {{validation.message}}\r\n                </p>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"groupMembers\">\r\n      <ion-list-header>\r\n        Group Members ({{groupMembers.length}})\r\n      </ion-list-header>\r\n      <ion-list lines=\"none\">\r\n        <ion-item  *ngFor=\"let member of groupMembers\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\" />\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{member.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>{{member.username}}</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-button slot=\"end\" fill=\"outline\" (click)=\"removeFromGroup(member)\">Remove</ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n\r\n  \r\n    <ion-list-header>\r\n      Add New Members\r\n    </ion-list-header>\r\n    <div class=\"form\">\r\n      <!-- No friends to create a group. -->\r\n      <div class=\"empty\" *ngIf=\"friends && friends.length == 0\">\r\n        <p>You have no friends right now to start a group conversation.</p>\r\n      </div>\r\n      <!-- Show friends to add/remove to group. -->\r\n      <ion-list lines=\"none\" *ngIf=\"friends && friends.length > 0\">\r\n        <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\"\r\n          cancelButtonText=\"Done\"></ion-searchbar>\r\n        <ion-item *ngFor=\"let friend of friends | friendFilter:searchFriend\" (click)=\"addOrRemoveFromGroup(friend)\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"{{friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <ion-text>\r\n              <h2>{{friend.name}}</h2>\r\n            </ion-text>\r\n            <ion-text>\r\n              <p>@{{friend.username}}</p>\r\n            </ion-text>\r\n          </ion-label>\r\n          <ion-button slot=\"end\" fill=\"outline\" color=\"primary\" (click)=\"addToGroup(friend); $event.stopPropagation();\"\r\n            *ngIf=\"!inGroup(friend)\">Add</ion-button>\r\n          <ion-button slot=\"end\" fill=\"outline\" color=\"primary\"\r\n            (click)=\"removeFromGroup(friend); $event.stopPropagation();\" *ngIf=\"inGroup(friend)\">Remove</ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n</ion-content>";
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
    "./node_modules/@ionic/angular/dist/fesm5.js");
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2dyb3VwL25ld2dyb3VwLnBhZ2Uuc2NzcyJ9 */";
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
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_environments_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/environments/validator */
    "./src/environments/validator.ts");

    var NewgroupPage =
    /*#__PURE__*/
    function () {
      function NewgroupPage(router, imageProvider, dataProvider, alertCtrl, angularfire, afAuth, loadingProvider, camera, formBuilder) {
        _classCallCheck(this, NewgroupPage);

        this.router = router;
        this.imageProvider = imageProvider;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
        this.angularfire = angularfire;
        this.afAuth = afAuth;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.errorMessages = [];
        this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_11__["Validator"].errorMessages;
        this.myForm = this.formBuilder.group({
          groupName: src_environments_validator__WEBPACK_IMPORTED_MODULE_11__["Validator"].groupNameValidator,
          groupDescription: src_environments_validator__WEBPACK_IMPORTED_MODULE_11__["Validator"].groupDescriptionValidator,
          groupTags: src_environments_validator__WEBPACK_IMPORTED_MODULE_11__["Validator"].groupTagsValidator
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
            img: './assets/images/default-group.png'
          };
          this.searchFriend = ''; // Get user's friends to add to the group.

          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (accountRes) {
            var account = Object.assign({
              $key: accountRes.key
            }, accountRes.payload.val());

            if (!_this.groupMembers) {
              _this.groupMembers = [account];
            }

            if (account.friends) {
              for (var i = 0; i < account.friends.length; i++) {
                _this.dataProvider.getUser(account.friends[i]).snapshotChanges().subscribe(function (friendRes) {
                  if (friendRes.key != null) {
                    var friend = Object.assign({
                      $key: friendRes.key
                    }, friendRes.payload.val());

                    _this.addOrUpdateFriend(friend);
                  }
                });
              }
            } else {
              _this.friends = [];
            }
          });
        } // Add or update friend for real-time sync.

      }, {
        key: "addOrUpdateFriend",
        value: function addOrUpdateFriend(friend) {
          if (!this.friends) {
            this.friends = [friend];
          } else {
            var index = -1;

            for (var i = 0; i < this.friends.length; i++) {
              if (this.friends[i].$key == friend.$key) {
                index = i;
              }
            }

            if (index > -1) {
              this.friends[index] = friend;
            } else {
              this.friends.push(friend);
            }
          }
        } // Proceed with group creation.

      }, {
        key: "done",
        value: function done() {
          var _this2 = this;

          this.submitAttempt = true;
          var polls = [];
          var resources = [];

          if (this.myForm.valid) {
            this.loadingProvider.show();
            var messages = []; // Add system message that group is created.

            messages.push({
              date: new Date().toString(),
              sender: this.afAuth.auth.currentUser.uid,
              type: 'system',
              message: 'This group has been created.',
              icon: 'md-chatbubbles'
            }); // Add empty poll. 

            polls.push("system0000");
            resources.push("system0000"); // Add members of the group.

            var members = [];

            for (var i = 0; i < this.groupMembers.length; i++) {
              members.push(this.groupMembers[i].$key);
            } // Add group info and date.


            this.group.dateCreated = new Date().toString();
            this.group.messages = messages;
            this.group.members = members;
            this.group.polls = polls;
            this.group.resources = resources;
            this.group.name = this.name;
            this.group.description = this.description;
            this.group.groupTags = this.groupTags.split('\n');
            console.log('Group Tags: ', this.group.groupTags); // Add group to database.

            this.angularfire.list('groups').push(this.group).then(function (success) {
              var groupId = success.key; // Add group reference to users.

              _this2.angularfire.object('/accounts/' + _this2.groupMembers[0].$key + '/groups/' + groupId).update({
                messagesRead: 1
              });

              for (var i = 1; i < _this2.groupMembers.length; i++) {
                _this2.angularfire.object('/accounts/' + _this2.groupMembers[i].$key + '/groups/' + groupId).update({
                  messagesRead: 0
                });
              }

              _this2.router.navigateByUrl('/group/' + groupId);
            });
          }
        } // Add friend to members of group.

      }, {
        key: "addToGroup",
        value: function addToGroup(friend) {
          this.groupMembers.push(friend);
        } // Remove friend from members of group.

      }, {
        key: "removeFromGroup",
        value: function removeFromGroup(friend) {
          var index = -1;

          for (var i = 1; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].$key == friend.$key) {
              index = i;
            }
          }

          if (index > -1) {
            this.groupMembers.splice(index, 1);
          }
        } // Check if friend is already added to the group or not.

      }, {
        key: "inGroup",
        value: function inGroup(friend) {
          for (var i = 0; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].$key == friend.$key) {
              return true;
            }
          }

          return false;
        } // Toggle to add/remove friend from the group.

      }, {
        key: "addOrRemoveFromGroup",
        value: function addOrRemoveFromGroup(friend) {
          if (this.inGroup(friend)) {
            this.removeFromGroup(friend);
          } else {
            this.addToGroup(friend);
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]])], NewgroupPage);
    /***/
  },

  /***/
  "./src/environments/validator.ts":
  /*!***************************************!*\
    !*** ./src/environments/validator.ts ***!
    \***************************************/

  /*! exports provided: Validator */

  /***/
  function srcEnvironmentsValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Validator", function () {
      return Validator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var Validator;

    (function (Validator) {
      Validator.emailValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]];
      Validator.passwordValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]];
      Validator.nameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]];
      Validator.usernameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]];
      Validator.bioValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]];
      Validator.groupNameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]];
      Validator.groupDescriptionValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]];
      Validator.groupTagsValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]];
      Validator.errorMessages = {
        email: [{
          type: 'required',
          message: 'Email is required'
        }, {
          type: 'pattern',
          message: 'Email looks like invalid'
        }],
        password: [{
          type: 'required',
          message: 'Password is required'
        }, {
          type: 'minlength',
          message: 'Password must be 6 char'
        }],
        name: [{
          type: 'required',
          message: 'Name is required'
        }],
        username: [{
          type: 'required',
          message: 'Username is required'
        }, {
          type: 'minlength',
          message: 'Username must be 5 char'
        }],
        bio: [{
          type: 'required',
          message: 'Bio is required'
        }],
        groupName: [{
          type: 'required',
          message: 'Group Name is required'
        }],
        groupDescription: [{
          type: 'required',
          message: 'Group Description is required'
        }]
      }; // Poll Form Validators

      Validator.pollNameValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]];
      Validator.pollDescriptionValidator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]];
      Validator.pollOption1Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]];
      Validator.pollOption2Validator = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]];
    })(Validator || (Validator = {}));
    /***/

  }
}]);
//# sourceMappingURL=newgroup-newgroup-module-es5.js.map