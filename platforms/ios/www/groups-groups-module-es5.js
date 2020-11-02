(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groups-groups-module"], {
    /***/
    "5N42":
    /*!******************************************!*\
      !*** ./src/app/groups/groups.shell.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function N42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\napp-image-shell.cover-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: transparent;\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.item-icon {\n  --image-shell-loading-background: transparent;\n}\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.item-name app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 12px;\n  max-width: 50%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 10px;\n  min-width: 30px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-rating > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\napp-image-shell.picture-image {\n  --image-shell-border-radius: var(--app-narrow-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtBQURKOztBQVdFO0VBQ0UsbURBQUE7RUFDQSxtRUFBQTtFQUNBLDZDQUFBO0VBQ0EsOERBQUE7QUFSSjs7QUFXRTtFQUNFLDZDQUFBO0FBUko7O0FBV0U7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVVJO0VBQ0UsZ0JBQUE7QUFSTjs7QUFZRTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBVEo7O0FBV0k7RUFDRSxnQkFBQTtBQVROOztBQWFFO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFWSjs7QUFZSTtFQUNFLGNBQUE7QUFWTjs7QUFjRTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUFYSjs7QUFjRTtFQUNFLHFEQUFBO0VBQ0EsbUVBQUE7QUFYSiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAgIC0tc2hlbGwtY29sb3I6ICNlYmJiMDA7XG4gICAgLS1zaGVsbC1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbiAgfVxuICBcbiAgLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2VcbiAgOmhvc3QoLmlzLXNoZWxsKSB7XG4gICAgLy8gaW9uLWNvbnRlbnQge1xuICAgIC8vICAgb3BhY2l0eTogMC44O1xuICAgIC8vIH1cbiAgfVxuICBcbiAgYXBwLWltYWdlLXNoZWxsLmNvdmVyLWltYWdlIHtcbiAgICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gICAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIH1cbiAgXG4gIGFwcC1pbWFnZS1zaGVsbC5pdGVtLWljb24ge1xuICAgIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gIFxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICB9XG4gIH1cbiAgXG4gIC5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIFxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICB9XG4gIH1cbiAgXG4gIC5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTBweDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gIFxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgfVxuICB9XG4gIFxuICAuaXRlbS1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIH1cbiAgXG4gIGFwcC1pbWFnZS1zaGVsbC5waWN0dXJlLWltYWdlIHtcbiAgICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    "IVEo":
    /*!***************************************!*\
      !*** ./src/app/groups/groups.page.ts ***!
      \***************************************/

    /*! exports provided: GroupsPage */

    /***/
    function IVEo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsPage", function () {
        return GroupsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_groups_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./groups.page.html */
      "gqKQ");
      /* harmony import */


      var _groups_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./groups.page.scss */
      "h3Xs");
      /* harmony import */


      var _groups_shell_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./groups.shell.scss */
      "5N42");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");

      var GroupsPage = /*#__PURE__*/function () {
        // GroupsPage
        // This is the page where the user can add, view and search for groups.
        function GroupsPage(router, dataProvider, loadingProvider, firestore) {
          _classCallCheck(this, GroupsPage);

          this.router = router;
          this.dataProvider = dataProvider;
          this.loadingProvider = loadingProvider;
          this.firestore = firestore;
          this.categories = [];
          this.loggedInUserId = this.dataProvider.getCurrentUserId();
        }

        _createClass(GroupsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            // Initialize
            this.searchGroup = '';
            this.loadingProvider.show();
            this.loadAllCategories(); // Get groups

            this.dataProvider.getGroups().snapshotChanges().subscribe(function (groups) {
              _this.groups = [];
              groups.forEach(function (element) {
                var group = element.payload.doc.data();
                group.key = element.payload.doc.id;

                if (group.members.some(function (e) {
                  return e === _this.loggedInUserId;
                })) {
                  group.isUserMember = true;
                } else {
                  group.isUserMember = false;
                }

                _this.groups.push(group);
              });
            });
          }
        }, {
          key: "loadAllCategories",
          value: function loadAllCategories() {
            var _this2 = this;

            this.firestore.collection('categories').ref.orderBy('sort', 'asc').onSnapshot(function (catsRes) {
              if (catsRes) {
                _this2.categories = [];
                catsRes.forEach(function (cat) {
                  var category = cat.data();
                  category.key = cat.id;
                  console.log('category', category);

                  _this2.categories.push(category);
                });
              }
            });
          } // Open Group Chat.

        }, {
          key: "viewGroup",
          value: function viewGroup(group) {
            if (group.isUserMember) {
              this.router.navigateByUrl('group/' + group.key);
            }
          }
        }, {
          key: "searchGroupByCategory",
          value: function searchGroupByCategory(category) {
            var groupSearch = {
              category: category
            }; // this.router.navigateByUrl('group-search/' + groupSearch);

            this.router.navigateByUrl('/group-search', {
              state: groupSearch
            }); // this.router.navigateByUrl(['group-search', {state: {data: {category}}});
          }
        }, {
          key: "joinGroup",
          value: function joinGroup(groupId) {
            this.router.navigateByUrl('group-join/' + groupId);
          }
        }]);

        return GroupsPage;
      }();

      GroupsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
        }];
      };

      GroupsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-groups',
        template: _raw_loader_groups_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_groups_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _groups_shell_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]])], GroupsPage);
      /***/
    },

    /***/
    "gqKQ":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function gqKQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Groups</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/newgroup\">Create New</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item class=\"no-top-padding\" lines=\"none\">\n  <ion-label class=\"no-top-padding\"><b>Popular Categories</b></ion-label>\n  <a color=\"secondary\" slot=\"end\" class=\"link\" routerLink=\"/newgroup\">See All</a>\n</ion-item>\n  <ion-slides class=\"slides\" [options]=\"{ slidesPerView: 'auto', spaceBetween: 5 }\">\n    <ion-slide *ngFor=\"let category of categories\" style=\"width: 250px; height:150px\" (click)=\"searchGroupByCategory(category)\">\n      <ion-col>\n        <ion-img style=\"pointer-events:none\" src=\"{{category.img}}\"></ion-img>\n        <!-- <ion-label class=\"slide-heading\">Music</ion-label><br/>\n        <ion-label class=\"slide-subheading\">250 members, 100 posts a week</ion-label><br/>\n        <ion-button color=\"secondary\" fill=\"outline\" class=\"join\" >Join</ion-button> -->\n      </ion-col>\n    </ion-slide>\n  </ion-slides>\n  <ion-item-divider></ion-item-divider>\n  <ion-item lines=\"none\">\n    <ion-label class=\"no-top-padding\"><b>Suggested Groups</b></ion-label>\n    <a color=\"secondary\" slot=\"end\" class=\"link\" routerLink=\"/newgroup\">See All</a>\n  </ion-item>\n  <ion-list lines=\"none\">\n    <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"viewGroup(group)\">\n      <ion-avatar slot=\"start\">\n        <ion-img src=\"{{group.img}}\"></ion-img>\n      </ion-avatar>\n      <ion-label class=\"toggle-text\">\n          <ion-label class=\"ion-no-padding\">{{group.name}}<br/>\n          <span class=\"group-subheading\">{{group.members.length}} Members · <span *ngIf=\"group.posts\">{{group.posts.length}}</span> <span *ngIf=\"!group.posts\">0</span> posts</span></ion-label>\n        </ion-label>\n        <ion-button *ngIf=\"!group.isUserMember\" slot=\"end\" color=\"secondary\"  fill=\"outline\" class=\"join\" (click)=\"joinGroup(group.key)\" >Join</ion-button>\n        <ion-button *ngIf=\"group.isUserMember\" slot=\"end\" color=\"secondary\" class=\"join\" >Joined</ion-button>\n      </ion-item>\n  </ion-list>\n\n<!-- <div *ngIf=\"groups && groups.length > 0\">\n    <div class=\"listing-item\" *ngFor=\"let group of groups\">\n      <ion-card (click)=\"viewGroup(group.key)\">\n      <div>\n        <img src=\"{{group.img}}\">\n      </div>\n      <ion-card-header>\n       <ion-card-title>{{group.name}}</ion-card-title>\n     </ion-card-header>\n      <ion-card-content>\n        {{group.description}}\n      </ion-card-content>\n      <ion-row class=\"summary-row\">\n        <ion-col>\n          <ion-icon class=\"icon\" size=\"small\" name=\"people\"></ion-icon>\n          <span class=\"text\">\n            {{group.membersCount}} \n          </span>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"icon\" size=\"small\" name=\"chatbubbles\"></ion-icon>\n          <span class=\"text\">\n            {{group.postsCount}}\n          </span>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"icon\" size=\"small\" name=\"library\"></ion-icon>\n          <span class=\"text\">\n            {{group.resourcesCount}}\n          </span>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"icon\" size=\"small\"  name=\"pie-chart\"></ion-icon>\n          <span class=\"text\">\n            {{group.pollsCount}}\n          </span>\n        </ion-col>\n        <ion-col>\n          <ion-icon class=\"icon\" size=\"small\"  name=\"calendar\"></ion-icon>\n          <span class=\"text\">\n            {{group.eventsCount}}\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    </div>\n\n  </div> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "h3Xs":
    /*!*****************************************!*\
      !*** ./src/app/groups/groups.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function h3Xs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n  --ion-font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n}\n\n.join {\n  --border-radius: 30px ;\n}\n\n.slides {\n  padding-left: var(--page-margin);\n}\n\n.link {\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n\n.no-bottom-padding {\n  --inner-padding-bottom: 0px;\n  --padding-bottom: 0px;\n}\n\n.no-top-padding {\n  --inner-padding-top: 0px;\n  --padding-top: 0px;\n}\n\n.h2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.listing-item .summary-row {\n  text-align: center;\n  padding-bottom: 5px;\n  padding-left: 3px;\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.toggle-text {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.toggle-text .group-subheading {\n  font-weight: 400;\n  font-size: 10px;\n}\n\n.slide-heading {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.slide-subheading {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0dBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQUFGOztBQUdBO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNFLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLWlvbi1mb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmpvaW4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHhcbn1cblxuLnNsaWRlcyB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4ubm8tYm90dG9tLXBhZGRpbmcge1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLm5vLXRvcC1wYWRkaW5nIHtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5oMiB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmxpc3RpbmctaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIFxuICAuc3VtbWFyeS1yb3cge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICB9XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gIC5ncm91cC1zdWJoZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuXG4uc2xpZGUtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZScsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgJ1JvYm90bycsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47IFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNsaWRlLXN1YmhlYWRpbmcge1xuICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */";
      /***/
    },

    /***/
    "zOVB":
    /*!*****************************************!*\
      !*** ./src/app/groups/groups.module.ts ***!
      \*****************************************/

    /*! exports provided: GroupsPageModule */

    /***/
    function zOVB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function () {
        return GroupsPageModule;
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


      var _groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./groups.page */
      "IVEo");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");

      var routes = [{
        path: '',
        component: _groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]
      }];

      var GroupsPageModule = function GroupsPageModule() {
        _classCallCheck(this, GroupsPageModule);
      };

      GroupsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]]
      })], GroupsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=groups-groups-module-es5.js.map