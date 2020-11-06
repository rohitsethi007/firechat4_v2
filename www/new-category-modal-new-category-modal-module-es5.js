(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-category-modal-new-category-modal-module"], {
    /***/
    "2Jfu":
    /*!*****************************************************************!*\
      !*** ./src/app/new-category-modal/new-category-modal.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function Jfu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1jYXRlZ29yeS1tb2RhbC9uZXctY2F0ZWdvcnktbW9kYWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "ElFm":
    /*!***************************************************************!*\
      !*** ./src/app/new-category-modal/new-category-modal.page.ts ***!
      \***************************************************************/

    /*! exports provided: NewCategoryModalPage */

    /***/
    function ElFm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewCategoryModalPage", function () {
        return NewCategoryModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_new_category_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./new-category-modal.page.html */
      "PHHh");
      /* harmony import */


      var _new_category_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./new-category-modal.page.scss */
      "2Jfu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var NewCategoryModalPage = /*#__PURE__*/function () {
        function NewCategoryModalPage(formBuilder, firestore) {
          _classCallCheck(this, NewCategoryModalPage);

          this.formBuilder = formBuilder;
          this.firestore = firestore;
        }

        _createClass(NewCategoryModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.categoryForm = this.formBuilder.group({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
              dateCreated: new Date(),
              description: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              img: ''
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var category = {
              name: this.categoryForm.value.name,
              description: this.categoryForm.value.description,
              dateCreated: new Date(),
              country: 'India',
              img: this.categoryForm.value.img
            };
            this.firestore.collection('categories').add(category);
          }
        }]);

        return NewCategoryModalPage;
      }();

      NewCategoryModalPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }];
      };

      NewCategoryModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-category-modal',
        template: _raw_loader_new_category_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_category_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])], NewCategoryModalPage);
      /***/
    },

    /***/
    "PHHh":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-category-modal/new-category-modal.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PHHh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-row>\n    <ion-col>\n      <form [formGroup]=\"categoryForm\">\n        <ion-list>\n          <ion-item>\n            <ion-label position=\"stacked\">Name:</ion-label>\n            <ion-input formControlName=\"name\" type=\"text\" [(ngModel)]=\"name\" placeHolder=\"Enter the Category Name\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Description:</ion-label>\n            <ion-textarea rows=6 formControlName=\"description\" type=\"text\" [(ngModel)]=\"description\" placeHolder=\"Enter a short description\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Image:</ion-label>\n            <ion-input formControlName=\"img\" type=\"text\" [(ngModel)]=\"img\" placeHolder=\"Enter the Image path\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-button type=\"submit\" color=\"secondary\" (click)=\"submit()\" expand=\"block\">Create Category</ion-button>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "iH78":
    /*!*****************************************************************!*\
      !*** ./src/app/new-category-modal/new-category-modal.module.ts ***!
      \*****************************************************************/

    /*! exports provided: NewCategoryModalPageModule */

    /***/
    function iH78(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewCategoryModalPageModule", function () {
        return NewCategoryModalPageModule;
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


      var _new_category_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-category-modal.page */
      "ElFm");

      var routes = [{
        path: '',
        component: _new_category_modal_page__WEBPACK_IMPORTED_MODULE_6__["NewCategoryModalPage"]
      }];

      var NewCategoryModalPageModule = function NewCategoryModalPageModule() {
        _classCallCheck(this, NewCategoryModalPageModule);
      };

      NewCategoryModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_new_category_modal_page__WEBPACK_IMPORTED_MODULE_6__["NewCategoryModalPage"]]
      })], NewCategoryModalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=new-category-modal-new-category-modal-module-es5.js.map