(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addmembers-addmembers-module"], {
    /***/
    "0G1C":
    /*!***********************************************!*\
      !*** ./src/app/addmembers/addmembers.page.ts ***!
      \***********************************************/

    /*! exports provided: AddmembersPage */

    /***/
    function G1C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddmembersPage", function () {
        return AddmembersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_addmembers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./addmembers.page.html */
      "9hWg");
      /* harmony import */


      var _addmembers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addmembers.page.scss */
      "VtPE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AddmembersPage = /*#__PURE__*/function () {
        // AddMemberPage
        // This is the page where the user can add their friends to an existing group.
        // The user can only add their friends to the group.
        function AddmembersPage(router, route, dataProvider, loadingProvider, firestore, alertCtrl) {
          _classCallCheck(this, AddmembersPage);

          this.router = router;
          this.route = route;
          this.dataProvider = dataProvider;
          this.loadingProvider = loadingProvider;
          this.firestore = firestore;
          this.alertCtrl = alertCtrl;
        }

        _createClass(AddmembersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            // Initialize
            this.groupId = this.route.snapshot.params.id;
            this.searchFriend = '';
            this.toAdd = [];
            this.loadingProvider.show(); // Get user information for system message sent to the group when a member was added.

            this.dataProvider.getCurrentUser().then(function (u) {
              u.snapshotChanges().subscribe(function (user) {
                _this.user = user.payload.data();
              });
            }); // Get group information

            this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this.group = group.payload.data();
              _this.groupMembers = null; // Get group members

              if (group.payload.data().members) {
                group.payload.data().members.forEach(function (memberId) {
                  _this.dataProvider.getUser(memberId).snapshotChanges().subscribe(function (member) {
                    _this.addOrUpdateMember(member);
                  });
                }); // Get user's friends to add

                _this.dataProvider.getCurrentUser().then(function (u) {
                  u.snapshotChanges().subscribe(function (user) {
                    var account = user.payload.data();

                    if (account.friends) {
                      for (var i = 0; i < account.friends.length; i++) {
                        _this.dataProvider.getUser(account.friends[i]).snapshotChanges().subscribe(function (friendRes) {
                          // Only friends that are not yet a member of this group can be added.
                          var friend = Object.assign({
                            $key: friendRes.key
                          }, friendRes.payload.data());
                          console.log(friend);

                          if (!_this.isMember(friend)) {
                            _this.addOrUpdateFriend(friend);
                          }
                        });
                      }

                      if (!_this.friends) {
                        _this.friends = [];
                      }
                    } else {
                      _this.friends = [];
                    }
                  });
                });
              }

              console.log(_this.friends);

              _this.loadingProvider.hide();
            });
          } // Check if friend is a member of the group or not.

        }, {
          key: "isMember",
          value: function isMember(friend) {
            if (this.groupMembers) {
              for (var i = 0; i < this.groupMembers.length; i++) {
                if (this.groupMembers[i].$key == friend.$key) {
                  return true;
                }
              }
            }

            return false;
          } // Check if friend is already on the list of members to be added.

        }, {
          key: "isAdded",
          value: function isAdded(friend) {
            if (this.toAdd) {
              for (var i = 0; i < this.toAdd.length; i++) {
                if (this.toAdd[i].$key == friend.$key) {
                  return true;
                }
              }
            }

            return false;
          } // Toggle for adding/removing friend on the list of members to be added.

        }, {
          key: "addOrRemove",
          value: function addOrRemove(friend) {
            if (this.isAdded(friend)) {
              this.remove(friend);
            } else {
              this.add(friend);
            }
          } // Add or update friend information for real-time sync.

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
          } // Add or update member information for real-time sync.

        }, {
          key: "addOrUpdateMember",
          value: function addOrUpdateMember(member) {
            if (!this.groupMembers) {
              this.groupMembers = [member];
            } else {
              var index = -1;

              for (var i = 0; i < this.groupMembers.length; i++) {
                if (this.groupMembers[i].$key == member.$key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.groupMembers[index] = member;
              } else {
                this.groupMembers.push(member);
              }
            }
          } // Add friend to the list of to be added.

        }, {
          key: "add",
          value: function add(friend) {
            this.toAdd.push(friend);
          } // Remove friend from the list of to be added.

        }, {
          key: "remove",
          value: function remove(friend) {
            this.toAdd.splice(this.toAdd.indexOf(friend), 1);
          } // Get names of the members to be added to the group.

        }, {
          key: "getNames",
          value: function getNames() {
            var names = '';
            this.toAdd.forEach(function (friend) {
              names += friend.name + ', ';
            });
            return names.substring(0, names.length - 2);
          } // Confirm adding of new members, afterwards add the members.

        }, {
          key: "done",
          value: function done() {
            var _this2 = this;

            this.alertCtrl.create({
              header: 'Add Members',
              message: 'Are you sure you want to add <b>' + this.getNames() + '</b> to the group?',
              buttons: [{
                text: 'Cancel'
              }, {
                text: 'Add',
                handler: function handler(data) {
                  // Proceed
                  _this2.loadingProvider.show();

                  _this2.toAdd.forEach(function (friend) {
                    // Add groupInfo to each friend added to the group.
                    _this2.firestore.doc('/accounts/' + friend.$key + '/groups/' + _this2.groupId).update({
                      messagesRead: 0
                    }); // Add friend as members of the group.


                    console.log(friend.$key);
                    console.log(_this2.group.members);

                    _this2.group.members.push(friend.$key); // Add system message that the members are added to the group.


                    _this2.group.messages.push({
                      date: new Date().toString(),
                      sender: _this2.user.userId,
                      type: 'system',
                      message: _this2.user.name + ' has added ' + _this2.getNames() + ' to the group.',
                      icon: 'md-contacts'
                    });
                  }); // Update group data on the database.


                  _this2.dataProvider.getGroup(_this2.groupId).update({
                    members: _this2.group.members,
                    messages: _this2.group.messages
                  }).then(function () {
                    // Back.
                    _this2.loadingProvider.hide();
                  });
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }]);

        return AddmembersPage;
      }();

      AddmembersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }];
      };

      AddmembersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-addmembers',
        template: _raw_loader_addmembers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_addmembers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])], AddmembersPage);
      /***/
    },

    /***/
    "9hWg":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addmembers/addmembers.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function hWg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primart\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Memebers</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"done()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- All friends already in the group. -->\n  <div class=\"empty-list\" *ngIf=\"friends && friends.length == 0\">\n    <h1>\n      <ion-icon name=\"md-contacts\"></ion-icon>\n    </h1>\n    <p>Uh-oh! Sorry but your friends are already a member of this group.</p>\n  </div>\n  <!-- Add/Cancel Add friends to the group. -->\n  <ion-list lines=\"none\" *ngIf=\"friends && friends.length > 0\">\n    <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\"\n      cancelButtonText=\"Done\"></ion-searchbar>\n    <ion-item *ngFor=\"let friend of friends | friendFilter:searchFriend\" (click)=\"addOrRemove(friend)\">\n\n      <ion-avatar slot=\"start\">\n        <img src=\"{{friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n      </ion-avatar>\n      <ion-label>\n        <ion-text>\n          <h2>{{friend.name}}</h2>\n        </ion-text>\n        <ion-text>\n          <p>@{{friend.username}}</p>\n        </ion-text>\n      </ion-label>\n      <ion-button size=\"small\" slot=\"end\" fill=\"outline\" (click)=\"add(friend); $event.stopPropagation();\"\n        *ngIf=\"!isAdded(friend)\">Add</ion-button>\n      <ion-button size=\"small\" slot=\"end\" fill=\"outline\" (click)=\"remove(friend); $event.stopPropagation();\"\n        *ngIf=\"isAdded(friend)\">Remove</ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "VtPE":
    /*!*************************************************!*\
      !*** ./src/app/addmembers/addmembers.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function VtPE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZG1lbWJlcnMvYWRkbWVtYmVycy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "Zxef":
    /*!*************************************************!*\
      !*** ./src/app/addmembers/addmembers.module.ts ***!
      \*************************************************/

    /*! exports provided: AddmembersPageModule */

    /***/
    function Zxef(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddmembersPageModule", function () {
        return AddmembersPageModule;
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


      var _addmembers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addmembers.page */
      "0G1C");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");

      var routes = [{
        path: '',
        component: _addmembers_page__WEBPACK_IMPORTED_MODULE_6__["AddmembersPage"]
      }];

      var AddmembersPageModule = function AddmembersPageModule() {
        _classCallCheck(this, AddmembersPageModule);
      };

      AddmembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_addmembers_page__WEBPACK_IMPORTED_MODULE_6__["AddmembersPage"]]
      })], AddmembersPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=addmembers-addmembers-module-es5.js.map