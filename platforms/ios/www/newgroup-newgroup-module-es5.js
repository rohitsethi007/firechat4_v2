(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newgroup-newgroup-module"], {
    /***/
    "T2Rd":
    /*!*********************************************!*\
      !*** ./src/app/newgroup/newgroup.module.ts ***!
      \*********************************************/

    /*! exports provided: NewgroupPageModule */

    /***/
    function T2Rd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewgroupPageModule", function () {
        return NewgroupPageModule;
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


      var _newgroup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./newgroup.page */
      "fiZI");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");

      var routes = [{
        path: '',
        component: _newgroup_page__WEBPACK_IMPORTED_MODULE_6__["NewgroupPage"]
      }];

      var NewgroupPageModule = function NewgroupPageModule() {
        _classCallCheck(this, NewgroupPageModule);
      };

      NewgroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_newgroup_page__WEBPACK_IMPORTED_MODULE_6__["NewgroupPage"]]
      })], NewgroupPageModule);
      /***/
    },

    /***/
    "fiZI":
    /*!*******************************************!*\
      !*** ./src/app/newgroup/newgroup.page.ts ***!
      \*******************************************/

    /*! exports provided: NewgroupPage */

    /***/
    function fiZI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewgroupPage", function () {
        return NewgroupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_newgroup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./newgroup.page.html */
      "peJf");
      /* harmony import */


      var _newgroup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./newgroup.page.scss */
      "xVBm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/image.service */
      "mnRn");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/auth */
      "KDZV");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var NewgroupPage = /*#__PURE__*/function () {
        function NewgroupPage(router, imageProvider, dataProvider, alertCtrl, firestore, afAuth, loadingProvider, camera, formBuilder, pickerController) {
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
          this.pickerController = pickerController;
          this.category = {
            text: '',
            value: ''
          };
          this.submitAttempt = false;
          this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroup"]({
            groupName: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required])),
            groupDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required])),
            groupTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required])),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]('')
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
            this.firestore.collection('categories').snapshotChanges().subscribe(function (catsRes) {
              if (catsRes) {
                _this.categoriesOption = [];
                _this.categories = [];
                catsRes.forEach(function (cat) {
                  var category = cat.payload.doc.data();
                  category.key = cat.payload.doc.id;

                  _this.categories.push(category);

                  _this.categoriesOption.push({
                    text: category.name,
                    value: category.key
                  });
                });
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
              this.group.groupTags = this.groupTags.split('\n');
              this.group.categoryId = this.category.value;
              this.group.img = ''; // Add group to database.

              this.firestore.collection('groups').add(this.group).then(function (success) {
                var groupId = success.id;

                _this2.router.navigateByUrl('/group/' + groupId);

                if (_this2.account.groups) {
                  _this2.account.groups.push(groupId);
                } else {
                  _this2.account.groups = [groupId];
                }

                _this2.dataProvider.getCurrentUser().update({
                  groups: _this2.account.groups
                });

                var cat = _this2.categories.find(function (c) {
                  return c.id = _this2.category.value;
                });

                console.log('cat', cat, _this2.categories);

                if (!cat.groups) {
                  cat.groups = [groupId];
                } else {
                  cat.groups.push(groupId);
                }

                _this2.firestore.collection('categories').doc(_this2.category.value).update({
                  groups: cat.groups
                });
              });
            }
          }
        }, {
          key: "showPicker",
          value: function showPicker() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var options, picker;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      options = {
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel'
                        }, {
                          text: 'Ok',
                          handler: function handler(value) {
                            _this3.category = value.Categories;
                          }
                        }],
                        columns: [{
                          name: 'Categories',
                          options: this.getColumnOptions()
                        }]
                      };
                      _context.next = 3;
                      return this.pickerController.create(options);

                    case 3:
                      picker = _context.sent;
                      picker.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getColumnOptions",
          value: function getColumnOptions() {
            return this.categoriesOption;
          }
        }]);

        return NewgroupPage;
      }();

      NewgroupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"]
        }];
      };

      NewgroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newgroup',
        template: _raw_loader_newgroup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newgroup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"], _services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"]])], NewgroupPage);
      /***/
    },

    /***/
    "peJf":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newgroup/newgroup.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function peJf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create New Group</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"outline\" (click)=\"done()\">Create</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"group\">\n      <ion-row>\n        <ion-col>\n          <div class=\"cover-wrapper\">\n            <img src=\"{{group.img}}\" *ngIf=\"group.img != ''\" tappable (click)=\"setGroupPhoto()\"\n          onError=\"this.src='./assets/images/default-group.png'\" />\n        <img src=\"{{group.img}}\"\n          onError=\"this.src='./assets/images/default-group.png'\" *ngIf=\"group.img == ''\" tappable\n          (click)=\"setGroupPhoto()\" />\n            </div>\n        </ion-col>\n        </ion-row>\n      <ion-row>\n        <ion-col> \n        <form [formGroup]=\"myForm\">\n          <ion-list style=\"margin:0;\" lines=\"none\">\n            <ion-item class=\"input-item\">\n              <ion-label position=\"stacked\">Title:</ion-label>\n              <ion-input formControlName=\"groupName\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Name of Group\">\n              </ion-input>\n            </ion-item>\n            <ion-item class=\"input-item\">\n              <ion-label position=\"stacked\">Image Path:</ion-label>\n              <ion-input formControlName=\"img\" type=\"text\" [(ngModel)]=\"img\" placeholder=\"Image Path\">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Description</ion-label>\n              <ion-textarea formControlName=\"groupDescription\" rows=\"3\" [(ngModel)]=\"description\"\n                placeholder=\"Describe this Group\"></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Group Tags</ion-label>\n              <ion-textarea formControlName=\"groupTags\" rows=\"3\" [(ngModel)]=\"groupTags\"\n                placeholder=\"Add Group Tags in each line.\"></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Category</ion-label>\n              <ion-label>{{category.text}}</ion-label>\n              <ion-button (click)=\"showPicker()\">\n                Select Category\n            </ion-button>\n\n            </ion-item>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "xVBm":
    /*!*********************************************!*\
      !*** ./src/app/newgroup/newgroup.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function xVBm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cover-wrapper {\n  margin-bottom: var(--page-margin);\n  text-align: center;\n  padding-top: 5px;\n}\n.cover-wrapper .cover-anchor {\n  display: block;\n}\n.cover-wrapper .cover-icon-wrapper {\n  margin: 0px 20%;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.cover-wrapper .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3Z3JvdXAvbmV3Z3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNFLGNBQUE7QUFFTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNOO0FBRUk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9uZXdncm91cC9uZXdncm91cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXItd3JhcHBlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIC5jb3Zlci1hbmNob3Ige1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmNvdmVyLWljb24td3JhcHBlciB7XG4gICAgICBtYXJnaW46IDBweCAyMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgfSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=newgroup-newgroup-module-es5.js.map