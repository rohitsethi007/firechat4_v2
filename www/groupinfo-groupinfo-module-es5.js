(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groupinfo-groupinfo-module"], {
    /***/
    "1oXQ":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groupinfo/groupinfo.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function oXQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"group\">{{group.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"group\">\r\n      <ion-row>\r\n        <ion-col size=3>\r\n        <div class=\"group-img\"> \r\n          <img src=\"{{group.img}}\" onError=\"this.src='./assets/images/default-dp_rect.png'\">\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=9>\r\n        <div>\r\n          <ion-item lines=\"none\">\r\n          <ion-text class=\"profile-summary-name\">{{group.name}}</ion-text>\r\n        </ion-item>\r\n      </div>\r\n        <div class=\"ion-no-border\">\r\n          <ion-item class=\"toggle-text\" lines=\"none\">\r\n            <ion-text>{{group.description}}</ion-text>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-item-divider class=\"profile-component-title\">Group Tags</ion-item-divider>\r\n    <ion-list lines=\"none\">\r\n      <div class=\"tags\" *ngFor=\"let tag of group.groupTags\">\r\n        <span class=\"item-rating\">#{{tag}}</span>\r\n      </div>\r\n     </ion-list>\r\n     <ion-item-divider class=\"profile-component-title\">Activity</ion-item-divider>\r\n     <ion-list class=\"activities\" lines=\"none\" > \r\n      <ion-item *ngIf=\"groupPosts.length == 0\" class=\"toggle-text\">\r\n       <ion-label>No Group Activity</ion-label>\r\n      </ion-item>\r\n      <ion-item class=\"toggle-text activities-item\"  *ngFor=\"let item of groupPosts\">\r\n        New post: <a class=\"link\" [routerLink]=\"['/post', item.key]\"> \"{{item.title}}\"</a>\r\n      <ion-text slot=\"end\" class=\"addedByDate\">{{item.date.toDate() | date:'mediumDate'}}</ion-text>  \r\n    </ion-item>\r\n     </ion-list>\r\n\r\n    <ion-item-divider class=\"profile-component-title\">Group Members:</ion-item-divider>\r\n    <ion-list lines=\"none\">\r\n      <ion-list lines=\"none\">\r\n        <ion-item  *ngIf=\"groupMembers.length == 0\" class=\"toggle-text\">\r\n          <ion-label>Build a community, invite others to join</ion-label>\r\n        </ion-item>  \r\n        <ion-item text-wrap *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.key)\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-img src=\"{{member.img}}\"></ion-img>\r\n          </ion-avatar>\r\n          <ion-label class=\"toggle-text\">\r\n              <ion-label class=\"ion-no-padding\">{{member.username}}<br/>\r\n              {{member.description}}</ion-label>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-list>\r\n </div>\r\n<ion-row *ngIf=\"myProfile\">\r\n  <div class=\"ion-padding save\">\r\n    <ion-button expand=\"block\" color=\"secondary\">Leave Group</ion-button>\r\n  </div>\r\n</ion-row>\r\n</ion-content>";
      /***/
    },

    /***/
    "61x/":
    /*!*********************************************!*\
      !*** ./src/app/groupinfo/groupinfo.page.ts ***!
      \*********************************************/

    /*! exports provided: GroupinfoPage */

    /***/
    function x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupinfoPage", function () {
        return GroupinfoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_groupinfo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./groupinfo.page.html */
      "1oXQ");
      /* harmony import */


      var _groupinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./groupinfo.page.scss */
      "Wivp");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);

      var GroupinfoPage = /*#__PURE__*/function () {
        // GroupInfoPage
        // This is the page where the user can view group information, change group information, add members, and leave/delete group.
        function GroupinfoPage(router, route, dataProvider, firestore, loadingProvider, alertCtrl) {
          _classCallCheck(this, GroupinfoPage);

          this.router = router;
          this.route = route;
          this.dataProvider = dataProvider;
          this.firestore = firestore;
          this.loadingProvider = loadingProvider;
          this.alertCtrl = alertCtrl;
          this.groupMembers = [];
          this.groupPosts = [];
        }

        _createClass(GroupinfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            // Initialize
            this.groupId = this.route.snapshot.params.id; // Get group details.

            this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (p) {
              var group = p.payload.data();
              group.key = p.key;

              if (group != null) {
                _this.loadingProvider.show();

                _this.group = group;
                group.members.forEach(function (memberId) {
                  _this.dataProvider.getUser(memberId).snapshotChanges().subscribe(function (memberRes) {
                    var member = Object.assign({
                      $key: memberRes.payload.id
                    }, memberRes.payload.data());

                    _this.addUpdateOrRemoveMember(member);
                  });
                }); // get group Posts

                if (_this.group.posts) {
                  _this.firestore.collection('posts').ref.where(firebase_app__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldPath.documentId(), 'in', _this.group.posts).get().then(function (po) {
                    _this.groupPosts = [];

                    _this.loadEachPostData(po);
                  });
                }

                _this.loadingProvider.hide();
              } else {
                _this.router.navigateByUrl('/');
              }
            }); // Get user details.

            this.dataProvider.getCurrentUser().snapshotChanges().subscribe(function (accounts) {
              var account = accounts.payload.data();
              _this.user = Object.assign({
                $key: account.userId
              }, account);
            });
          }
        }, {
          key: "loadEachPostData",
          value: function loadEachPostData(po) {
            var _this2 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              post.postTags = post.postTags.filter(function (x) {
                return x.isChecked !== false;
              });

              if (!_this2.groupPosts) {
                _this2.groupPosts = [post];
              } else {
                var index = -1;

                for (var i = 0; i < _this2.groupPosts.length; i++) {
                  if (_this2.groupPosts[i].key == post.key) {
                    index = i;
                  }
                }

                if (index > -1) {
                  _this2.groupPosts[index] = post;
                } else {
                  _this2.groupPosts.push(post);
                }
              }
            });
          } // Check if user exists in the group then add/update user.
          // If the user has already left the group, remove user from the list.

        }, {
          key: "addUpdateOrRemoveMember",
          value: function addUpdateOrRemoveMember(member) {
            if (this.group) {
              if (this.group.members.indexOf(member.$key) > -1) {
                // User exists in the group.
                if (!this.groupMembers) {
                  this.groupMembers = [member];
                } else {
                  var index = -1;

                  for (var i = 0; i < this.groupMembers.length; i++) {
                    if (this.groupMembers[i].$key == member.$key) {
                      index = i;
                    }
                  } // Add/Update User.


                  if (index > -1) {
                    this.groupMembers[index] = member;
                  } else {
                    this.groupMembers.push(member);
                  }
                }
              } else {
                // User already left the group, remove member from list.
                var index1 = -1;

                for (var j = 0; j < this.groupMembers.length; j++) {
                  if (this.groupMembers[j].$key == member.$key) {
                    index1 = j;
                  }
                }

                if (index1 > -1) {
                  this.groupMembers.splice(index1, 1);
                }
              }
            }
          } // View user info.

        }, {
          key: "viewUser",
          value: function viewUser(userId) {
            if (this.dataProvider.getCurrentUserId !== userId) {
              this.router.navigateByUrl('/userinfo/' + userId);
            }
          } // Leave group.

        }, {
          key: "leaveGroup",
          value: function leaveGroup() {
            var _this3 = this;

            this.alert = this.alertCtrl.create({
              header: 'Confirm Leave',
              message: 'Are you sure you want to leave this group?',
              buttons: [{
                text: 'Cancel'
              }, {
                text: 'Leave',
                handler: function handler(data) {
                  _this3.loadingProvider.show(); // Remove member from group.


                  _this3.group.members.splice(_this3.group.members.indexOf(_this3.user.$key), 1); // Add system message.


                  _this3.group.messages.push({
                    date: new Date().toString(),
                    sender: _this3.user.$key,
                    type: 'system',
                    message: _this3.user.name + ' has left this group.',
                    icon: 'md-log-out'
                  }); // Update group on database.


                  _this3.dataProvider.getGroup(_this3.groupId).update({
                    members: _this3.group.members,
                    messages: _this3.group.messages
                  }).then(function (success) {
                    // Remove group from user's group list.
                    _this3.firestore.doc('/accounts/' + _this3.dataProvider.getCurrentUserId + '/groups/' + _this3.groupId)["delete"]().then(function () {
                      // Pop this view because user already has left this group.
                      _this3.group = null;
                      setTimeout(function () {
                        _this3.loadingProvider.hide();

                        _this3.router.navigateByUrl('/');
                      }, 300);
                    });
                  })["catch"](function (error) {
                    _this3.loadingProvider.showToast("Something went wrong");
                  });
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }]);

        return GroupinfoPage;
      }();

      GroupinfoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      GroupinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-groupinfo',
        template: _raw_loader_groupinfo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_groupinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])], GroupinfoPage);
      /***/
    },

    /***/
    "Wivp":
    /*!***********************************************!*\
      !*** ./src/app/groupinfo/groupinfo.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Wivp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\n.group-info {\n  width: 100%;\n}\n\n.group-img {\n  padding-top: var(--page-margin);\n}\n\n.save {\n  height: 25px;\n  width: 100%;\n  text-transform: initial !important;\n}\n\n.toggle-text {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.profile-summary-name {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", \"Helvetica-Bold\", \"Roboto-Medium\", \"Segoe UI Semibold\", Arial-Bold, sans-serif;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 26px;\n  margin: 4px 0;\n  display: inline-block;\n}\n\n.profile-component-title {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\", Helvetica-Bold, \"Roboto-Medium\", \"Segoe UI Semibold\", Arial-Bold, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.addedByDate {\n  font-style: italic;\n  font-size: 12px;\n}\n\n.logout {\n  text-transform: capitalize !important;\n}\n\n.link {\n  color: #007B99;\n  text-decoration: none;\n}\n\n.activities {\n  padding-bottom: 20px;\n}\n\n.activities .activities-item {\n  height: 30px;\n}\n\n.tags {\n  padding-right: 5px;\n}\n\n.tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: left;\n  color: #aa6c39;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBpbmZvL2dyb3VwaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDQywrQkFBQTtBQUNEOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0SUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwSUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDQTs7QUFFQTtFQUNFLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDQTs7QUFFQTtFQUNBLG9CQUFBO0FBQ0E7O0FBQUE7RUFDQSxZQUFBO0FBRUE7O0FBSUU7RUFDRSxrQkFBQTtBQURKOztBQUdFO0VBRUUsbURBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwaW5mby9ncm91cGluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uZ3JvdXAtaW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ncm91cC1pbWcge1xyXG4gcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxufVxyXG5cclxuLnNhdmUge1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9nZ2xlLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ucHJvZmlsZS1zdW1tYXJ5LW5hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZS1NZWRpdW0nLCAnSGVsdmV0aWNhIE5ldWUgTWVkaXVtJywgJ0hlbHZldGljYS1Cb2xkJywgJ1JvYm90by1NZWRpdW0nLCAnU2Vnb2UgVUkgU2VtaWJvbGQnLCBBcmlhbC1Cb2xkLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIG1hcmdpbjogNHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jb21wb25lbnQtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZS1NZWRpdW0nLCAnSGVsdmV0aWNhIE5ldWUgTWVkaXVtJywgSGVsdmV0aWNhLUJvbGQsICdSb2JvdG8tTWVkaXVtJywgJ1NlZ29lIFVJIFNlbWlib2xkJywgQXJpYWwtQm9sZCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxufVxyXG5cclxuLmFkZGVkQnlEYXRlIHtcclxuZm9udC1zdHlsZTogaXRhbGljO1xyXG5mb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5sb2dvdXQge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuY29sb3I6ICMwMDdCOTk7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmFjdGl2aXRpZXMge1xyXG5wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuLmFjdGl2aXRpZXMtaXRlbSB7XHJcbmhlaWdodDogMzBweDtcclxufVxyXG5cclxufVxyXG5cclxuICAgICAgIFxyXG4gIC50YWdzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHJcbiAgLml0ZW0tcmF0aW5nIHtcclxuICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICNhYTZjMzk7XHJcbiAgfVxyXG5cclxuICB9Il19 */";
      /***/
    },

    /***/
    "mkRt":
    /*!***********************************************!*\
      !*** ./src/app/groupinfo/groupinfo.module.ts ***!
      \***********************************************/

    /*! exports provided: GroupinfoPageModule */

    /***/
    function mkRt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupinfoPageModule", function () {
        return GroupinfoPageModule;
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


      var _groupinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./groupinfo.page */
      "61x/");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");

      var routes = [{
        path: '',
        component: _groupinfo_page__WEBPACK_IMPORTED_MODULE_6__["GroupinfoPage"]
      }];

      var GroupinfoPageModule = function GroupinfoPageModule() {
        _classCallCheck(this, GroupinfoPageModule);
      };

      GroupinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_groupinfo_page__WEBPACK_IMPORTED_MODULE_6__["GroupinfoPage"]]
      })], GroupinfoPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=groupinfo-groupinfo-module-es5.js.map