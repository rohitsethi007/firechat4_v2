(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blockedlist-blockedlist-module"], {
    /***/
    "0lt8":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blockedlist/blockedlist.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function lt8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Blocked Contacts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p *ngIf=\"blockedList.length == 0\" style=\"text-align: center\">No Blocked List</p>\n  <ion-list>\n    <ion-item *ngFor=\"let user of blockedList\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{user.img}}\" onError=\"this.src='http://placehold.it/80x80'\">\n      </ion-avatar>\n      <ion-label>\n        <ion-text>\n          <h2>{{user.name}}</h2>\n        </ion-text>\n      </ion-label>\n      <ion-button slot=\"end\" fill=\"outline\" (click)=\"unblock(user.key)\">Unblock</ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "Y9ka":
    /*!***************************************************!*\
      !*** ./src/app/blockedlist/blockedlist.module.ts ***!
      \***************************************************/

    /*! exports provided: BlockedlistPageModule */

    /***/
    function Y9ka(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockedlistPageModule", function () {
        return BlockedlistPageModule;
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


      var _blockedlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./blockedlist.page */
      "kDln");

      var routes = [{
        path: '',
        component: _blockedlist_page__WEBPACK_IMPORTED_MODULE_6__["BlockedlistPage"]
      }];

      var BlockedlistPageModule = function BlockedlistPageModule() {
        _classCallCheck(this, BlockedlistPageModule);
      };

      BlockedlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_blockedlist_page__WEBPACK_IMPORTED_MODULE_6__["BlockedlistPage"]]
      })], BlockedlistPageModule);
      /***/
    },

    /***/
    "ihXx":
    /*!***************************************************!*\
      !*** ./src/app/blockedlist/blockedlist.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function ihXx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrZWRsaXN0L2Jsb2NrZWRsaXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "kDln":
    /*!*************************************************!*\
      !*** ./src/app/blockedlist/blockedlist.page.ts ***!
      \*************************************************/

    /*! exports provided: BlockedlistPage */

    /***/
    function kDln(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockedlistPage", function () {
        return BlockedlistPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_blockedlist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./blockedlist.page.html */
      "0lt8");
      /* harmony import */


      var _blockedlist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blockedlist.page.scss */
      "ihXx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "KDZV");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");

      var BlockedlistPage = /*#__PURE__*/function () {
        function BlockedlistPage(afAuth, dataProvider, firestore) {
          _classCallCheck(this, BlockedlistPage);

          this.afAuth = afAuth;
          this.dataProvider = dataProvider;
          this.firestore = firestore;
          this.blockedList = [];
        }

        _createClass(BlockedlistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.dataProvider.getBlockedLists().get().then(function (conversations) {
              var tmp = [];
              conversations.forEach(function (conversation) {
                // fetch blocked conversation & user info
                _this.dataProvider.getUser(conversation.id).snapshotChanges().subscribe(function (data) {
                  tmp.push({
                    key: conversation.id,
                    name: data.name,
                    img: data.img
                  });
                });
              });
              console.log(tmp);
              _this.blockedList = tmp;
            });
          }
        }, {
          key: "unblock",
          value: function unblock(uid) {
            console.log(uid);
            this.firestore.doc('accounts/' + this.afAuth.auth.currentUser.uid + '/conversations/' + uid).update({
              blocked: false
            }); // this.afdb.object('accounts/' + this.afAuth.auth.currentUser.uid + '/conversations/' + uid).update({
            //   blocked: false
            // })
          }
        }]);

        return BlockedlistPage;
      }();

      BlockedlistPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }];
      };

      BlockedlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blockedlist',
        template: _raw_loader_blockedlist_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blockedlist_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])], BlockedlistPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=blockedlist-blockedlist-module-es5.js.map