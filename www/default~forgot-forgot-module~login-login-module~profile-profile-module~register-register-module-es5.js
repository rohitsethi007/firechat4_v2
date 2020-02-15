function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~forgot-forgot-module~login-login-module~profile-profile-module~register-register-module"], {
  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(afAuth, afdb, dataService, loadingProvider, platform, gplus, facebook, router, storage) {
        _classCallCheck(this, LoginService);

        this.afAuth = afAuth;
        this.afdb = afdb;
        this.dataService = dataService;
        this.loadingProvider = loadingProvider;
        this.platform = platform;
        this.gplus = gplus;
        this.facebook = facebook;
        this.router = router;
        this.storage = storage;
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(email, password) {
          var _this = this;

          this.loadingProvider.show();
          this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
            console.log(res);
            console.log("******* " + _this.afAuth.user + " *********"); //this.dataService.getUser(this.afAuth.user.)

            _this.loadingProvider.hide();
          }).catch(function (err) {
            console.log(err);

            _this.loadingProvider.hide();

            _this.loadingProvider.showToast(err.message);
          });
        }
      }, {
        key: "register",
        value: function register(name, username, email, password, img) {
          var _this2 = this;

          this.loadingProvider.show();
          this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
            var user = _this2.afAuth.auth.currentUser;

            _this2.loadingProvider.hide();

            _this2.createNewUser(user.uid, name, username, user.email, "I am available", "Firebase", img);
          }).catch(function (err) {
            console.log(err);

            _this2.loadingProvider.hide();

            _this2.loadingProvider.showToast(err.message);
          });
        }
      }, {
        key: "reset",
        value: function reset(email) {
          var _this3 = this;

          console.log(email);
          this.loadingProvider.show();
          this.afAuth.auth.sendPasswordResetEmail(email).then(function () {
            _this3.loadingProvider.hide();

            _this3.loadingProvider.showToast("Please Check your inbox");
          }).catch(function (err) {
            _this3.loadingProvider.hide();

            _this3.loadingProvider.showToast(err.message);
          });
        }
      }, {
        key: "fbLogin",
        value: function fbLogin() {
          var _this4 = this;

          if (this.platform.is('desktop')) {
            this.loadingProvider.show();
            this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider()).then(function (res) {
              _this4.loadingProvider.hide();

              var credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider.credential(res.credential.accessToken);

              _this4.afAuth.auth.signInWithCredential(credential).then(function () {
                if (res.additionalUserInfo.isNewUser) {
                  var uid = _this4.afAuth.auth.currentUser.uid;
                  var userInfo = res.additionalUserInfo.profile;

                  _this4.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Facebook', userInfo.picture);
                } else {
                  _this4.router.navigateByUrl('tabs');
                }
              }).catch(function (err) {
                return console.log(err);
              });
            }).catch(function (err) {
              console.log(err);

              _this4.loadingProvider.hide();
            });
          } else {
            this.facebook.login(['public_profile', 'email']).then(function (res) {
              console.log(res);
              var credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);

              _this4.loadingProvider.show();

              _this4.afAuth.auth.signInWithCredential(credential).then(function (res) {
                if (res.additionalUserInfo.isNewUser) {
                  _this4.facebook.api("me/?fields=id,email,first_name,picture,gender", ["public_profile", "email"]).then(function (data) {
                    console.log(data);
                    var uid = _this4.afAuth.auth.currentUser.uid;

                    _this4.createNewUser(uid, data.first_name, uid, data.email, 'I am available', 'Facebook', data.picture.data.url);
                  }).catch(function (err) {
                    console.log(err);

                    _this4.loadingProvider.hide();
                  });
                } else {
                  _this4.router.navigateByUrl('tabs');
                }
              }).catch(function (error) {
                _this4.loadingProvider.hide();
              });
            }).catch(function (err) {
              return console.log(err);
            });
          }
        }
      }, {
        key: "gLogin",
        value: function gLogin() {
          var _this5 = this;

          if (this.platform.is('desktop')) {
            this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider()).then(function (res) {
              var credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider.credential(res.credential.idToken, res.credential.accessToken);

              _this5.afAuth.auth.signInWithCredential(credential).then(function () {
                if (res.additionalUserInfo.isNewUser) {
                  var uid = _this5.afAuth.auth.currentUser.uid;
                  var userInfo = res.additionalUserInfo.profile;

                  _this5.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
                } else {
                  _this5.router.navigateByUrl('tabs');
                }
              }).catch(function (err) {
                console.log("Err! signInWithCredential" + err);
              });
            }).catch(function (err) {
              console.log('Err! signInWithCredential' + err);
            });
          } else {
            this.gplus.login({
              webClientId: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].googleClientId
            }).then(function (result) {
              var credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider.credential(result['token'], null);

              _this5.afAuth.auth.signInWithCredential(credential).then(function (res) {
                if (res.additionalUserInfo.isNewUser) {
                  var uid = _this5.afAuth.auth.currentUser.uid;
                  var userInfo = res.additionalUserInfo.profile;

                  _this5.createNewUser(uid, userInfo.name, uid, userInfo.email, 'Available', 'Google', userInfo.picture);
                } else {
                  _this5.router.navigateByUrl('tabs');
                }
              }).catch(function (err) {
                console.log("Err! signInWithCredential" + err);
              });
            }).catch(function (err) {
              console.log(err);
            });
          }
        }
      }, {
        key: "createNewUser",
        value: function createNewUser(userId, name, username, email) {
          var _this6 = this;

          var description = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "I'm available";
          var provider = arguments.length > 5 ? arguments[5] : undefined;
          var img = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "./assets/images/default-dp.png";
          var dateCreated = new Date();
          this.afdb.object('/accounts/' + userId).update({
            dateCreated: dateCreated,
            username: username,
            name: name,
            userId: userId,
            email: email,
            description: description,
            provider: provider,
            img: img
          }).then(function () {
            _this6.router.navigateByUrl('tabs');
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this7 = this;

          this.afAuth.auth.signOut().then(function () {
            return _this7.router.navigateByUrl('/login', {
              replaceUrl: true
            });
          });
          this.storage.clear();
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"]])], LoginService);
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
//# sourceMappingURL=default~forgot-forgot-module~login-login-module~profile-profile-module~register-register-module-es5.js.map