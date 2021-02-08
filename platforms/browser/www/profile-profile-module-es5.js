(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./profile.page */
      "ncJE");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
      }];

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "ncJE":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function ncJE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "tXh8");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "zxxS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/login.service */
      "EFyh");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/image.service */
      "mnRn");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "cGva");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_environments_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/environments/validator */
      "ZvGz");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../services/firebase.service */
      "Z2Br");
      /* harmony import */


      var _user_profile_modal_user_profile_modal_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../user-profile-modal/user-profile-modal.page */
      "l0GK");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(loginService, dataProvider, loadingProvider, firestore, afAuth, imageProvider, alertCtrl, camera, fcm, firebaseProvider, platform, formBuilder, route, router, modalCtrl, routerOutlet) {
          _classCallCheck(this, ProfilePage);

          this.loginService = loginService;
          this.dataProvider = dataProvider;
          this.loadingProvider = loadingProvider;
          this.firestore = firestore;
          this.afAuth = afAuth;
          this.imageProvider = imageProvider;
          this.alertCtrl = alertCtrl;
          this.camera = camera;
          this.fcm = fcm;
          this.firebaseProvider = firebaseProvider;
          this.platform = platform;
          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.modalCtrl = modalCtrl;
          this.routerOutlet = routerOutlet;
          this.showOnline = false;
          this.messageMe = false;
          this.isPushEnabled = false;
          this.isBrowser = true;
          this.userPosts = [];
          this.userReactions = [];
          this.userComments = [];
          this.groups = [];
          this.friends = [];
          this.myProfile = false;
          this.submitAttempt = false;
          this.errorMessages = [];
          this.userId = this.route.snapshot.params.id;
          this.loggedInUserId = this.dataProvider.getCurrentUserId();

          if (this.userId === this.loggedInUserId) {
            this.myProfile = true;
          } else {
            this.myProfile = false;
          }

          this.errorMessages = src_environments_validator__WEBPACK_IMPORTED_MODULE_14__["Validator"].errorMessages;
          this.myForm = this.formBuilder.group({
            name: src_environments_validator__WEBPACK_IMPORTED_MODULE_14__["Validator"].nameValidator,
            username: src_environments_validator__WEBPACK_IMPORTED_MODULE_14__["Validator"].usernameValidator,
            email: src_environments_validator__WEBPACK_IMPORTED_MODULE_14__["Validator"].emailValidator,
            bio: src_environments_validator__WEBPACK_IMPORTED_MODULE_14__["Validator"].bioValidator
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
            this.getUserData();
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            var _this = this;

            this.dataProvider.getUser(this.userId).snapshotChanges().subscribe(function (user) {
              var account = user.payload.data();

              if (account != null) {
                _this.user = account;
                _this.title = _this.user.username; // get user Posts

                if (_this.user.userPosts) {
                  _this.firestore.collection('posts').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_15__["default"].firestore.FieldPath.documentId(), 'in', _this.user.userPosts).get().then(function (po) {
                    _this.userPosts = [];

                    _this.loadEachPostData(po, 'userPosts');
                  });
                } // get user Reaction Posts


                if (_this.user.userReactions) {
                  _this.firestore.collection('posts').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_15__["default"].firestore.FieldPath.documentId(), 'in', _this.user.userReactions).get().then(function (po) {
                    _this.userReactions = [];

                    _this.loadEachPostData(po, 'userReactions');
                  });
                } // get user Posts


                if (_this.user.userComments) {
                  _this.firestore.collection('posts').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_15__["default"].firestore.FieldPath.documentId(), 'in', _this.user.userComments).get().then(function (po) {
                    _this.userComments = [];

                    _this.loadEachPostData(po, 'userComments');
                  });
                } // Get User Friends list


                if (_this.user.friends) {
                  _this.firestore.collection('accounts').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_15__["default"].firestore.FieldPath.documentId(), 'in', _this.user.friends).get().then(function (user) {
                    _this.friends = [];
                    user.forEach(function (f) {
                      var friend;
                      friend = f.data();
                      friend.key = f.id;

                      _this.addOrUpdateUserFriend(friend);
                    });
                    console.log('this.friends', _this.friends); // check if logged in user is a friend

                    var foundFriend = _this.friends.some(function (el) {
                      return el.userId === _this.loggedInUserId;
                    });

                    if (foundFriend) {
                      _this.messageMe = true;
                    } else {
                      _this.messageMe = false;
                    }
                  });
                } // Get User Groups List


                if (_this.user.groups) {
                  _this.firestore.collection('groups').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_15__["default"].firestore.FieldPath.documentId(), 'in', _this.user.groups).get().then(function (group) {
                    _this.groups = [];
                    group.forEach(function (g) {
                      var group;
                      group = g.data();
                      group.key = g.id;

                      _this.addOrUpdateUserGroup(group);
                    });
                  });
                }
              }
            });
          }
        }, {
          key: "loadEachPostData",
          value: function loadEachPostData(po, collection) {
            var _this2 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              post.postTags = post.postTags.filter(function (x) {
                return x.isChecked !== false;
              });

              if (collection === 'userPosts') {
                _this2.addOrUpdateUserPost(post);
              }

              if (collection === 'userComments') {
                _this2.addOrUpdateCommentPost(post);
              }

              if (collection === 'userReactions') {
                _this2.addOrUpdateReactionPost(post);
              }
            });
          }
        }, {
          key: "addOrUpdateUserPost",
          value: function addOrUpdateUserPost(post) {
            if (!this.userPosts) {
              this.userPosts = [post];
            } else {
              var index = -1;

              for (var i = 0; i < this.userPosts.length; i++) {
                if (this.userPosts[i].key == post.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.userPosts[index] = post;
              } else {
                this.userPosts.push(post);
              }
            }
          }
        }, {
          key: "addOrUpdateUserFriend",
          value: function addOrUpdateUserFriend(friend) {
            if (!this.friends) {
              this.friends = [friend];
            } else {
              var index = -1;

              for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].key == friend.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.friends[index] = friend;
              } else {
                this.friends.push(friend);
              }
            }
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
          key: "addOrUpdateReactionPost",
          value: function addOrUpdateReactionPost(post) {
            if (!this.userReactions) {
              this.userReactions = [post];
            } else {
              var index = -1;

              for (var i = 0; i < this.userReactions.length; i++) {
                if (this.userReactions[i].key == post.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.userReactions[index] = post;
              } else {
                this.userReactions.push(post);
              }
            }
          }
        }, {
          key: "addOrUpdateCommentPost",
          value: function addOrUpdateCommentPost(post) {
            if (!this.userComments) {
              this.userComments = [post];
            } else {
              var index = -1;

              for (var i = 0; i < this.userComments.length; i++) {
                if (this.userComments[i].key == post.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.userComments[index] = post;
              } else {
                this.userComments.push(post);
              }
            }
          }
        }, {
          key: "changeStatus",
          value: function changeStatus() {
            this.firestore.doc('accounts/' + this.user.userId).update({
              showOnline: this.user.showOnline
            });
          }
        }, {
          key: "changeVisibility",
          value: function changeVisibility() {
            this.firestore.doc('accounts/' + this.user.userId).update({
              publicVisibility: this.user.publicVisibility
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this3 = this;

            this.submitAttempt = true;

            if (this.myForm.valid) {
              this.loadingProvider.show();
              this.firestore.doc('accounts/' + this.user.userId).update(this.user).then(function () {
                _this3.loadingProvider.hide();

                _this3.loadingProvider.showToast("Updated Successfully");
              })["catch"](function (err) {
                _this3.loadingProvider.showToast("Something went wrong");

                _this3.loadingProvider.hide();
              });
            }
          }
        }, {
          key: "changeNotification",
          value: function changeNotification() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var uid;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.afAuth.currentUser.then(function (u) {
                        return u.uid;
                      });

                    case 2:
                      uid = _context.sent;

                      if (this.platform.is('desktop')) {
                        this.user.isPushEnabled = false;
                        this.loadingProvider.showToast("Notification only working on mobile device");
                      } else {
                        console.log(this.user.isPushEnabled);

                        if (this.user.isPushEnabled == true) {
                          //Registering for push notification
                          this.fcm.hasPermission().then(function (hasPermission) {
                            if (!hasPermission) {
                              _this4.fcm.grantPermission().then(function (data) {
                                return console.log(data);
                              });
                            } else {
                              _this4.fcm.getToken().then(function (token) {
                                console.log(token);

                                _this4.firestore.doc('/accounts/' + uid).update({
                                  isPushEnabled: true,
                                  pushToken: token
                                });

                                _this4.user.isPushEnabled = true;
                              })["catch"](function (err) {
                                console.log(err);
                              });

                              _this4.fcm.onTokenRefresh().subscribe(function (token) {
                                console.log(token);

                                _this4.firestore.doc('/accounts/' + uid).update({
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
                          this.firestore.doc('/accounts/' + uid).update({
                            isPushEnabled: false,
                            pushToken: ''
                          });
                        }
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "setPhoto",
          value: function setPhoto() {
            var _this5 = this;

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
                  _this5.imageProvider.setProfilePhoto(_this5.user, _this5.camera.PictureSourceType.PHOTOLIBRARY);
                }
              }, {
                text: 'Take Photo',
                handler: function handler() {
                  // Call imageProvider to process, upload, and update user photo.
                  _this5.imageProvider.setProfilePhoto(_this5.user, _this5.camera.PictureSourceType.CAMERA);
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "setPassword",
          value: function setPassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var email;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.afAuth.currentUser.then(function (u) {
                        return u.email;
                      });

                    case 2:
                      email = _context2.sent;
                      this.afAuth.sendPasswordResetEmail(email).then(function (res) {
                        _this6.loadingProvider.showToast("Please Check your inbox");
                      })["catch"](function (err) {
                        _this6.loadingProvider.showToast(err.message);
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // Delete the user account. After deleting the Firebase user, the userData along with their profile pic uploaded on the storage will be deleted as well.
          // If you added some other info or traces for the account, make sure to account for them when deleting the account.

        }, {
          key: "deleteAccount",
          value: function deleteAccount() {
            var _this7 = this;

            this.alertCtrl.create({
              header: 'Confirm Delete',
              message: 'Are you sure you want to delete your account? This cannot be undone.',
              buttons: [{
                text: 'Cancel'
              }, {
                text: 'Delete',
                handler: function handler(data) {
                  _this7.loadingProvider.show(); // Delete Firebase user


                  _this7.afAuth.currentUser.then(function (u) {
                    u["delete"]().then(function (success) {
                      // Delete profilePic of user on Firebase storage
                      _this7.imageProvider.deleteUserImageFile(_this7.user); // Delete user data on Database


                      _this7.firestore.doc('/accounts/' + _this7.user.userId)["delete"]().then(function () {
                        _this7.loadingProvider.hide();

                        _this7.loadingProvider.showToast("Your Account Deleted Successfully");

                        _this7.loginService.logout();
                      });
                    })["catch"](function (error) {
                      _this7.loadingProvider.hide();

                      _this7.loadingProvider.showToast("Something went wrong");
                    });
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
        }, {
          key: "viewPost",
          value: function viewPost(post) {
            this.router.navigateByUrl('post/' + post.key);
          }
        }, {
          key: "viewUser",
          value: function viewUser(userId) {
            this.router.navigateByUrl('profile/' + userId);
          }
        }, {
          key: "viewGroup",
          value: function viewGroup(groupId) {
            this.router.navigateByUrl('group/' + groupId);
          }
        }, {
          key: "editProfile",
          value: function editProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalCtrl.create({
                        component: _user_profile_modal_user_profile_modal_page__WEBPACK_IMPORTED_MODULE_18__["UserProfileModalPage"],
                        componentProps: {
                          user: this.user
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "messageUser",
          value: function messageUser() {
            this.router.navigateByUrl('/message/' + this.userId);
          }
        }, {
          key: "connectUser",
          value: function connectUser() {
            var _this8 = this;

            this.alert = this.alertCtrl.create({
              header: 'Send Friend Request',
              message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
              buttons: [{
                text: 'Cancel',
                handler: function handler(data) {}
              }, {
                text: 'Send',
                handler: function handler() {
                  _this8.firebaseProvider.sendFriendRequest(_this8.userId);
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
        }, {
          type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_11__["FirebaseX"]
        }, {
          type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_17__["FirebaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRouterOutlet"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"], _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_11__["FirebaseX"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_17__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRouterOutlet"]])], ProfilePage);
      /***/
    },

    /***/
    "tXh8":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function tXh8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"logout\" color=\"secondary\" (click)=\"logout()\">\n        Logout\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"user\">\n    <ion-row> \n      <div class=\"user-info\">\n        <div class=\"user-img\"> \n          <img src=\"{{user.img}}\" tappable (click)=\"setPhoto()\"\n          onError=\"this.src='./assets/images/default-dp_rect.png'\">\n        </div>\n        <div>\n          <ion-item lines=\"none\">\n          <ion-text class=\"profile-summary-name\">{{user.name}}</ion-text>\n          <ion-button *ngIf=\"myProfile\" color=\"primary\" slot=\"end\" (click)=\"editProfile()\" class=\"profile-edit-button\">Edit</ion-button>\n        </ion-item>\n        <ion-text class=\"profile-component-title ion-padding\">@{{user.username}}<span *ngIf=\"myProfile\"> · {{user.email}}</span></ion-text>\n      </div>\n        <br>\n        <div class=\"ion-no-border\">\n          <ion-item class=\"toggle-text\" lines=\"none\">\n            <ion-text>{{user.description}}</ion-text>\n          </ion-item>\n        </div>\n        <ion-row *ngIf=\"!myProfile\">\n          <div *ngIf=\"!messageMe\" class=\"ion-padding save\">\n            <ion-button color=\"secondary\" expand=\"block\" (click)=\"connectUser()\">Connect with me</ion-button>\n          </div>\n          <div *ngIf=\"messageMe\" class=\"ion-padding save\">\n            <ion-button color=\"secondary\" expand=\"block\" (click)=\"messageUser()\">Message me</ion-button>\n          </div>\n        </ion-row>\n        <br><br>\n        <ion-item-divider *ngIf=\"myProfile\" class=\"profile-component-title\">Other Settings</ion-item-divider>\n    <ion-list *ngIf=\"myProfile\" lines=\"none\">\n      <ion-item>\n        <ion-label class=\"toggle-text\">Enable Public Visibility</ion-label>\n        <ion-toggle  slot=\"end\" color=\"secondary\" [(ngModel)]=\"user.publicVisibility\" (ionChange)=\"changeVisibility()\"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"toggle-text\">Show Online</ion-label>\n        <ion-toggle slot=\"end\" color=\"secondary\" [(ngModel)]=\"user.showOnline\" (ionChange)=\"changeStatus()\"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"toggle-text\">Enable Notification</ion-label>\n        <ion-toggle slot=\"end\" color=\"secondary\" [(ngModel)]=\"user.isPushEnabled\" [disabled]=\"isBrowser\"\n          (ionChange)=\"changeNotification()\">\n        </ion-toggle>\n      </ion-item>\n      <ion-item  routerLink=\"/blockedlist\">\n        <ion-label class=\"toggle-text\">Blocked List</ion-label>\n        <ion-icon slot=\"end\" name=\"arrow-forward-circle-outline\"></ion-icon>\n      </ion-item>\n      <ion-item tappable (click)=\"setPassword()\" *ngIf=\"user && user.provider == 'Email'\">\n        Update Password\n      </ion-item>\n     </ion-list>\n     <ion-item-divider class=\"profile-component-title\">Activity</ion-item-divider>\n     <ion-list class=\"activities\" lines=\"none\" > \n      <ion-item *ngIf=\"userPosts.length == 0\" class=\"toggle-text\">\n       <ion-label>You have not created or commented on any posts.</ion-label>\n      </ion-item>\n      <ion-item class=\"toggle-text activities-item\"  *ngFor=\"let item of userPosts\">\n        New post: <a class=\"link\" [routerLink]=\"['/post', item.key]\"> \"{{item.title}}\"</a>\n      <ion-text slot=\"end\" class=\"addedByDate\">{{item.date.toDate() | date:'mediumDate'}}</ion-text>  \n    </ion-item>\n    <ion-item class=\"toggle-text activities-item\"  *ngFor=\"let item of userReactions\">\n      Reacted on: <a class=\"link\" [routerLink]=\"['/post', item.key]\"> \"{{item.title}}\"</a>\n    <ion-text slot=\"end\" class=\"addedByDate\">{{item.date.toDate() | date:'mediumDate'}}</ion-text>  \n  </ion-item>\n     </ion-list>\n     <ion-item-divider class=\"profile-component-title\">Groups</ion-item-divider>\n     <ion-list lines=\"none\">\n      <ion-item *ngIf=\"groups.length == 0\" class=\"toggle-text\">\n          <ion-label>You have not joined any groups.</ion-label>\n      </ion-item>\n        <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"viewGroup(group.key)\">\n          <ion-avatar slot=\"start\">\n            <ion-img src=\"{{group.img}}\"></ion-img>\n          </ion-avatar>\n          <ion-label class=\"toggle-text\">\n              <ion-label class=\"ion-no-padding\">{{group.name}}<br/>\n              {{group.description}}</ion-label>\n          </ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-item-divider class=\"profile-component-title\">Connected to:</ion-item-divider>\n    <ion-list lines=\"none\">\n      <ion-list lines=\"none\">\n        <ion-item  *ngIf=\"friends.length == 0\" class=\"toggle-text\">\n          <ion-label>You are not connected to any fellow members.</ion-label>\n        </ion-item>  \n        <ion-item text-wrap *ngFor=\"let friend of friends\" (click)=\"viewUser(friend.key)\">\n          <ion-avatar slot=\"start\">\n            <ion-img src=\"{{friend.img}}\"></ion-img>\n          </ion-avatar>\n          <ion-label class=\"toggle-text\">\n              <ion-label class=\"ion-no-padding\">{{friend.username}}<br/>\n              {{friend.description}}</ion-label>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-list>\n    </div>\n</ion-row>\n<ion-row *ngIf=\"myProfile\">\n  <div class=\"ion-padding save\">\n    <ion-button color=\"danger\" expand=\"block\" (click)=\"deleteAccount()\">Delete Account</ion-button>\n  </div>\n</ion-row>\n</div>\n</ion-content>";
      /***/
    },

    /***/
    "zxxS":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zxxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\n.user-info {\n  width: 100%;\n}\n\n.save {\n  height: 25px;\n  width: 100%;\n  text-transform: initial !important;\n}\n\n.myform {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.toggle-text {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.profile-summary-name {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Helvetica-Bold\", \"Roboto-Medium\", \"Segoe UI Semibold\", Arial-Bold, sans-serif;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 26px;\n  margin: 4px 0;\n  display: inline-block;\n}\n\n.profile-component-title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", Helvetica-Bold, \"Roboto-Medium\", \"Segoe UI Semibold\", Arial-Bold, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.addedByDate {\n  font-style: italic;\n  font-size: 12px;\n}\n\n.logout {\n  text-transform: capitalize !important;\n}\n\n.profile-edit-button {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.link {\n  color: #007B99;\n  text-decoration: none;\n}\n\n.activities {\n  padding-bottom: 20px;\n}\n\n.activities .activities-item {\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFRTtFQUNFLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVFO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSw0SUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSwwSUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFRTtFQUNFLHFDQUFBO0FBQ0o7O0FBRUU7RUFDRSxnSkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBQUU7RUFDQSxZQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICB9XG5cbiAgLnVzZXItaW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2F2ZSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXlmb3JtIHtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICAudG9nZ2xlLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgLnByb2ZpbGUtc3VtbWFyeS1uYW1lIHtcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUtTWVkaXVtJywgJ0hlbHZldGljYSBOZXVlIE1lZGl1bScsICdIZWx2ZXRpY2EtQm9sZCcsICdSb2JvdG8tTWVkaXVtJywgJ1NlZ29lIFVJIFNlbWlib2xkJywgQXJpYWwtQm9sZCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5wcm9maWxlLWNvbXBvbmVudC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLU1lZGl1bScsICdIZWx2ZXRpY2EgTmV1ZSBNZWRpdW0nLCBIZWx2ZXRpY2EtQm9sZCwgJ1JvYm90by1NZWRpdW0nLCAnU2Vnb2UgVUkgU2VtaWJvbGQnLCBBcmlhbC1Cb2xkLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4uYWRkZWRCeURhdGUge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5sb2dvdXQge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJvZmlsZS1lZGl0LWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjMDA3Qjk5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hY3Rpdml0aWVzIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIC5hY3Rpdml0aWVzLWl0ZW0ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAuZW1wdHktbGlzdCB7XG4gICAgXG4gIH1cbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map