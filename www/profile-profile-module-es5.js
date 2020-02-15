function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Profile</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"logout()\">\r\n        Logout\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"user\">\r\n    <div class=\"center ion-padding\">\r\n      <img src=\"{{user.img}}\" style=\"border-radius: 100%;height: 80px;width:80px\" tappable (click)=\"setPhoto()\"\r\n        onError=\"this.src='http://placehold.it/80x80'\">\r\n    </div>\r\n    <form [formGroup]=\"myForm\">\r\n      <ion-list lines=\"none\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Fullname</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"name\" [(ngModel)]=\"user.name\"></ion-input>\r\n          <div *ngFor=\"let validation of errorMessages.name\">\r\n            <p class=\"error\"\r\n              *ngIf=\"myForm.get('name').hasError(validation.type) && (myForm.get('name').dirty || myForm.get('name').touched || submitAttempt) \">\r\n              {{validation.message}}\r\n            </p>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Username</ion-label>\r\n          <ion-input formControlName=\"username\" type=\"text\" [(ngModel)]=\"user.username\"></ion-input>\r\n          <div *ngFor=\"let validation of errorMessages.username\">\r\n            <p class=\"error\"\r\n              *ngIf=\"myForm.get('username').hasError(validation.type) && (myForm.get('username').dirty || myForm.get('username').touched || submitAttempt) \">\r\n              {{validation.message}}\r\n            </p>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Bio</ion-label>\r\n          <ion-textarea formControlName=\"bio\" [(ngModel)]=\"user.description\"></ion-textarea>\r\n          <div *ngFor=\"let validation of errorMessages.bio\">\r\n            <p class=\"error\"\r\n              *ngIf=\"myForm.get('bio').hasError(validation.type) && (myForm.get('bio').dirty || myForm.get('bio').touched || submitAttempt) \">\r\n              {{validation.message}}\r\n            </p>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Email</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"email\" [(ngModel)]=\"user.email\" disabled></ion-input>\r\n        </ion-item>\r\n        <div class=\"ion-padding\">\r\n          <ion-button expand=\"block\" (click)=\"save()\">Save Changes</ion-button>\r\n        </div>\r\n      </ion-list>\r\n    </form>\r\n    <ion-item-divider>Other Settings</ion-item-divider>\r\n    <ion-list lines=\"none\">\r\n\r\n      <ion-item>\r\n        <ion-label>Enable Public Visibility</ion-label>\r\n        <ion-toggle slot=\"end\" [(ngModel)]=\"user.publicVisibility\" (ionChange)=\"changeVisibility()\"></ion-toggle>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Show Online</ion-label>\r\n        <ion-toggle slot=\"end\" [(ngModel)]=\"user.showOnline\" (ionChange)=\"changeStatus()\"></ion-toggle>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>\r\n          <ion-text>\r\n            <h3>Enable Notification</h3>\r\n          </ion-text>\r\n          <ion-text *ngIf=\"isBrowser\">\r\n            <p>Push Notification only works on browser</p>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-toggle slot=\"end\" [(ngModel)]=\"user.isPushEnabled\" [disabled]=\"isBrowser\"\r\n          (ionChange)=\"changeNotification()\">\r\n        </ion-toggle>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/blockedlist\">\r\n        <ion-label>Blocked List</ion-label>\r\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item tappable (click)=\"setPassword()\" *ngIf=\"user && user.provider == 'Email'\">\r\n        Update Password\r\n      </ion-item>\r\n      <ion-item tappable (click)=\"logout()\">Logout</ion-item>\r\n      <ion-item tappable (click)=\"deleteAccount()\" style=\"color:#F44336\">\r\n        Delete Account\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }];

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/profile/profile.page.ts ***!
    \*****************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/firebase-x/ngx */
    "./node_modules/@ionic-native/firebase-x/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_environments_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/environments/validator */
    "./src/environments/validator.ts");

    var ProfilePage =
    /*#__PURE__*/
    function () {
      function ProfilePage(loginService, dataProvider, loadingProvider, afdb, afAuth, alertCtrl, imageProvider, camera, fcm, platform, formBuilder) {
        _classCallCheck(this, ProfilePage);

        this.loginService = loginService;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.afdb = afdb;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.imageProvider = imageProvider;
        this.camera = camera;
        this.fcm = fcm;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.showOnline = false;
        this.isPushEnabled = false;
        this.isBrowser = true;
        this.submitAttempt = false;
        this.errorMessages = [];
        this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_12__["Validator"].errorMessages;
        this.myForm = this.formBuilder.group({
          name: src_environments_validator__WEBPACK_IMPORTED_MODULE_12__["Validator"].nameValidator,
          username: src_environments_validator__WEBPACK_IMPORTED_MODULE_12__["Validator"].usernameValidator,
          email: src_environments_validator__WEBPACK_IMPORTED_MODULE_12__["Validator"].emailValidator,
          bio: src_environments_validator__WEBPACK_IMPORTED_MODULE_12__["Validator"].bioValidator
        });
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isBrowser = this.platform.is('desktop');
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (user) {
            _this.loadingProvider.hide();

            if (user != null) _this.user = user.payload.val();
            console.log(_this.user);
          });
        }
      }, {
        key: "changeStatus",
        value: function changeStatus() {
          this.afdb.object('accounts/' + this.user.userId).update({
            showOnline: this.user.showOnline
          });
        }
      }, {
        key: "changeVisibility",
        value: function changeVisibility() {
          this.afdb.object('accounts/' + this.user.userId).update({
            publicVisibility: this.user.publicVisibility
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          this.submitAttempt = true;

          if (this.myForm.valid) {
            this.loadingProvider.show();
            this.afdb.object('accounts/' + this.user.userId).update(this.user).then(function () {
              _this2.loadingProvider.hide();

              _this2.loadingProvider.showToast("Updated Successfully");
            }).catch(function (err) {
              _this2.loadingProvider.showToast("Something went wrong");

              _this2.loadingProvider.hide();
            });
          }
        }
      }, {
        key: "changeNotification",
        value: function changeNotification() {
          var _this3 = this;

          if (this.platform.is('desktop')) {
            this.user.isPushEnabled = false;
            this.loadingProvider.showToast("Notification only working on mobile device");
          } else {
            console.log(this.user.isPushEnabled);

            if (this.user.isPushEnabled == true) {
              //Registering for push notification
              this.fcm.hasPermission().then(function (hasPermission) {
                if (!hasPermission) {
                  _this3.fcm.grantPermission().then(function (data) {
                    return console.log(data);
                  });
                } else {
                  _this3.fcm.getToken().then(function (token) {
                    console.log(token);

                    _this3.afdb.object('/accounts/' + _this3.afAuth.auth.currentUser.uid).update({
                      isPushEnabled: true,
                      pushToken: token
                    });

                    _this3.user.isPushEnabled = true;
                  }).catch(function (err) {
                    console.log(err);
                  });

                  _this3.fcm.onTokenRefresh().subscribe(function (token) {
                    console.log(token);

                    _this3.afdb.object('/accounts/' + _this3.afAuth.auth.currentUser.uid).update({
                      isPushEnabled: true,
                      pushToken: token
                    });
                  });
                }
              });
              this.fcm.onMessageReceived().subscribe(function (data) {
                console.log(data);
              });
            } else {
              this.user.isPushEnabled == false;
              this.afdb.object('/accounts/' + this.afAuth.auth.currentUser.uid).update({
                isPushEnabled: false,
                pushToken: ''
              });
            }
          }
        }
      }, {
        key: "setPhoto",
        value: function setPhoto() {
          var _this4 = this;

          this.alertCtrl.create({
            header: 'Set Profile Photo',
            message: 'Do you want to take a photo or choose from your photo gallery?',
            buttons: [{
              text: 'Cancel',
              handler: function handler(data) {}
            }, {
              text: 'Choose from Gallery',
              handler: function handler() {
                // Call imageProvider to process, upload, and update user photo.
                _this4.imageProvider.setProfilePhoto(_this4.user, _this4.camera.PictureSourceType.PHOTOLIBRARY);
              }
            }, {
              text: 'Take Photo',
              handler: function handler() {
                // Call imageProvider to process, upload, and update user photo.
                _this4.imageProvider.setProfilePhoto(_this4.user, _this4.camera.PictureSourceType.CAMERA);
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        }
      }, {
        key: "setPassword",
        value: function setPassword() {
          var _this5 = this;

          this.afAuth.auth.sendPasswordResetEmail(this.afAuth.auth.currentUser.email).then(function (res) {
            _this5.loadingProvider.showToast("Please Check your inbox");
          }).catch(function (err) {
            _this5.loadingProvider.showToast(err.message);
          });
        } // Delete the user account. After deleting the Firebase user, the userData along with their profile pic uploaded on the storage will be deleted as well.
        // If you added some other info or traces for the account, make sure to account for them when deleting the account.

      }, {
        key: "deleteAccount",
        value: function deleteAccount() {
          var _this6 = this;

          this.alertCtrl.create({
            header: 'Confirm Delete',
            message: 'Are you sure you want to delete your account? This cannot be undone.',
            buttons: [{
              text: 'Cancel'
            }, {
              text: 'Delete',
              handler: function handler(data) {
                _this6.loadingProvider.show(); // Delete Firebase user


                _this6.afAuth.auth.currentUser.delete().then(function (success) {
                  // Delete profilePic of user on Firebase storage
                  _this6.imageProvider.deleteUserImageFile(_this6.user); // Delete user data on Database


                  _this6.afdb.object('/accounts/' + _this6.user.userId).remove().then(function () {
                    _this6.loadingProvider.hide();

                    _this6.loadingProvider.showToast("Your Account Deleted Successfully");

                    _this6.loginService.logout();
                  });
                }).catch(function (error) {
                  _this6.loadingProvider.hide();

                  _this6.loadingProvider.showToast("Something went wrong");
                });
              }
            }]
          }).then(function (r) {
            return r.present();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginService.logout();
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }, {
        type: _services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
      }, {
        type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseX"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _services_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseX"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map