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


      __webpack_exports__["default"] = ":host {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\napp-image-shell.cover-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: transparent;\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.item-icon {\n  --image-shell-loading-background: transparent;\n}\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.item-name app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 12px;\n  max-width: 50%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 10px;\n  min-width: 30px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-rating > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\napp-image-shell.picture-image {\n  --image-shell-border-radius: var(--app-narrow-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtBQURKOztBQVdFO0VBQ0UsbURBQUE7RUFDQSxtRUFBQTtFQUNBLDZDQUFBO0VBQ0EsOERBQUE7QUFSSjs7QUFXRTtFQUNFLDZDQUFBO0FBUko7O0FBV0U7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVVJO0VBQ0UsZ0JBQUE7QUFSTjs7QUFZRTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBVEo7O0FBV0k7RUFDRSxnQkFBQTtBQVROOztBQWFFO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFWSjs7QUFZSTtFQUNFLGNBQUE7QUFWTjs7QUFjRTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUFYSjs7QUFjRTtFQUNFLHFEQUFBO0VBQ0EsbUVBQUE7QUFYSiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAgIC0tc2hlbGwtY29sb3I6ICNlYmJiMDA7XHJcbiAgICAtLXNoZWxsLWNvbG9yLXJnYjogMjM1LDE4NywwO1xyXG4gIH1cclxuICBcclxuICAvLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxyXG4gIDpob3N0KC5pcy1zaGVsbCkge1xyXG4gICAgLy8gaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gICBvcGFjaXR5OiAwLjg7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIFxyXG4gIGFwcC1pbWFnZS1zaGVsbC5jb3Zlci1pbWFnZSB7XHJcbiAgICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XHJcbiAgICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gICAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XHJcbiAgfVxyXG4gIFxyXG4gIGFwcC1pbWFnZS1zaGVsbC5pdGVtLWljb24ge1xyXG4gICAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcclxuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XHJcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwJTtcclxuICBcclxuICAgICYudGV4dC1sb2FkZWQge1xyXG4gICAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xyXG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcclxuICAgIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIFxyXG4gICAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XHJcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgXHJcbiAgICAmLnRleHQtbG9hZGVkIHtcclxuICAgICAgbWluLXdpZHRoOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLXJhdGluZyA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIGFwcC1pbWFnZS1zaGVsbC5waWN0dXJlLWltYWdlIHtcclxuICAgIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xyXG4gICAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcclxuICB9XHJcbiAgIl19 */";
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


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Groups</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/newgroup\">Create New</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item class=\"no-top-padding\" lines=\"none\">\r\n  <ion-label class=\"no-top-padding\"><b>Popular Categories</b></ion-label>\r\n  <a color=\"secondary\" slot=\"end\" class=\"link\" routerLink=\"/newgroup\">See All</a>\r\n</ion-item>\r\n  <ion-slides class=\"slides\" [options]=\"{ slidesPerView: 'auto', spaceBetween: 5 }\">\r\n    <ion-slide *ngFor=\"let category of categories\" style=\"width: 250px; height:150px\" (click)=\"searchGroupByCategory(category)\">\r\n      <ion-col>\r\n        <ion-img style=\"pointer-events:none\" src=\"{{category.img}}\"></ion-img>\r\n        <!-- <ion-label class=\"slide-heading\">Music</ion-label><br/>\r\n        <ion-label class=\"slide-subheading\">250 members, 100 posts a week</ion-label><br/>\r\n        <ion-button color=\"secondary\" fill=\"outline\" class=\"join\" >Join</ion-button> -->\r\n      </ion-col>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-item-divider></ion-item-divider>\r\n  <ion-item lines=\"none\">\r\n    <ion-label class=\"no-top-padding\"><b>Suggested Groups</b></ion-label>\r\n    <a color=\"secondary\" slot=\"end\" class=\"link\" routerLink=\"/newgroup\">See All</a>\r\n  </ion-item>\r\n  <ion-list lines=\"none\">\r\n    <ion-item text-wrap *ngFor=\"let group of groups\" (click)=\"viewGroup(group)\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-img src=\"{{group.img}}\"></ion-img>\r\n      </ion-avatar>\r\n      <ion-label class=\"toggle-text\">\r\n          <ion-label class=\"ion-no-padding\">{{group.name}}<br/>\r\n          <span class=\"group-subheading\">{{group.members.length}} Members · <span *ngIf=\"group.posts\">{{group.posts.length}}</span> <span *ngIf=\"!group.posts\">0</span> posts</span></ion-label>\r\n        </ion-label>\r\n        <ion-button *ngIf=\"!group.isUserMember\" slot=\"end\" color=\"secondary\"  fill=\"outline\" class=\"join\" (click)=\"joinGroup(group.key)\" >Join</ion-button>\r\n        <ion-button *ngIf=\"group.isUserMember\" slot=\"end\" color=\"secondary\" class=\"join\" >Joined</ion-button>\r\n      </ion-item>\r\n  </ion-list>\r\n\r\n<!-- <div *ngIf=\"groups && groups.length > 0\">\r\n    <div class=\"listing-item\" *ngFor=\"let group of groups\">\r\n      <ion-card (click)=\"viewGroup(group.key)\">\r\n      <div>\r\n        <img src=\"{{group.img}}\">\r\n      </div>\r\n      <ion-card-header>\r\n       <ion-card-title>{{group.name}}</ion-card-title>\r\n     </ion-card-header>\r\n      <ion-card-content>\r\n        {{group.description}}\r\n      </ion-card-content>\r\n      <ion-row class=\"summary-row\">\r\n        <ion-col>\r\n          <ion-icon class=\"icon\" size=\"small\" name=\"people\"></ion-icon>\r\n          <span class=\"text\">\r\n            {{group.membersCount}} \r\n          </span>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"icon\" size=\"small\" name=\"chatbubbles\"></ion-icon>\r\n          <span class=\"text\">\r\n            {{group.postsCount}}\r\n          </span>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"icon\" size=\"small\" name=\"library\"></ion-icon>\r\n          <span class=\"text\">\r\n            {{group.resourcesCount}}\r\n          </span>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"icon\" size=\"small\"  name=\"pie-chart\"></ion-icon>\r\n          <span class=\"text\">\r\n            {{group.pollsCount}}\r\n          </span>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"icon\" size=\"small\"  name=\"calendar\"></ion-icon>\r\n          <span class=\"text\">\r\n            {{group.eventsCount}}\r\n          </span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n    </div>\r\n\r\n  </div> -->\r\n</ion-content>\r\n";
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


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n  --ion-font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n}\n\n.join {\n  --border-radius: 30px ;\n}\n\n.slides {\n  padding-left: var(--page-margin);\n}\n\n.link {\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n\n.no-bottom-padding {\n  --inner-padding-bottom: 0px;\n  --padding-bottom: 0px;\n}\n\n.no-top-padding {\n  --inner-padding-top: 0px;\n  --padding-top: 0px;\n}\n\n.h2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.listing-item .summary-row {\n  text-align: center;\n  padding-bottom: 5px;\n  padding-left: 3px;\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.toggle-text {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.toggle-text .group-subheading {\n  font-weight: 400;\n  font-size: 10px;\n}\n\n.slide-heading {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.slide-subheading {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0dBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQUFGOztBQUdBO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNFLGtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxuICAtLWlvbi1mb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmpvaW4ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMzBweFxyXG59XHJcblxyXG4uc2xpZGVzIHtcclxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5uby1ib3R0b20tcGFkZGluZyB7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm5vLXRvcC1wYWRkaW5nIHtcclxuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uaDIge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4ubGlzdGluZy1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIFxyXG4gIC5zdW1tYXJ5LXJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b2dnbGUtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gIC5ncm91cC1zdWJoZWFkaW5nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2xpZGUtaGVhZGluZyB7XHJcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5zbGlkZS1zdWJoZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWUnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSJdfQ== */";
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