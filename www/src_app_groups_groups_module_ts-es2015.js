"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_groups_groups_module_ts"],{

/***/ 33596:
/*!*****************************************!*\
  !*** ./src/app/groups/groups.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsPageModule": function() { return /* binding */ GroupsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _groups_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups.page */ 62674);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/share.module */ 32218);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 45642);









const routes = [
    {
        path: '',
        component: _groups_page__WEBPACK_IMPORTED_MODULE_0__.GroupsPage
    }
];
let GroupsPageModule = class GroupsPageModule {
};
GroupsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _services_share_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)
        ],
        declarations: [
            _groups_page__WEBPACK_IMPORTED_MODULE_0__.GroupsPage
        ]
    })
], GroupsPageModule);



/***/ }),

/***/ 62674:
/*!***************************************!*\
  !*** ./src/app/groups/groups.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsPage": function() { return /* binding */ GroupsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_groups_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./groups.page.html */ 21294);
/* harmony import */ var _groups_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.page.scss */ 56585);
/* harmony import */ var _groups_shell_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groups.shell.scss */ 54839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ 77199);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ 33527);













let GroupsPage = class GroupsPage {
    constructor(afAuth, router, dataProvider, loadingProvider, firestore, alertController) {
        this.afAuth = afAuth;
        this.router = router;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.firestore = firestore;
        this.alertController = alertController;
        this.groups = [];
        this.filteredGroups = []; // Add this for search functionality
        this.searchTerm = ''; // Add this for search functionality
        this.categories = [];
        this.slideOpts = {
            slidesPerView: 'auto',
            spaceBetween: 8,
            freeMode: true
        };
    }
    ionViewWillEnter() {
        console.log('Entering feed view');
        this.afAuth.currentUser.then(user => {
            this.loggedInUserId = user === null || user === void 0 ? void 0 : user.uid;
            console.log('Current user:', this.loggedInUserId);
            // Initialize
            this.searchGroup = '';
            this.loadingProvider.show();
            this.loadAllCategories();
            // Get groups
            this.dataProvider.getGroups().snapshotChanges().subscribe((groups) => {
                this.groups = [];
                groups.forEach(element => {
                    let group = element.payload.doc.data();
                    group.key = element.payload.doc.id;
                    if (group.members.some(e => e === this.loggedInUserId)) {
                        group.isUserMember = true;
                    }
                    else {
                        group.isUserMember = false;
                    }
                    this.groups.push(group);
                });
                this.filteredGroups = this.groups; // Initialize filtered groups
                this.loadingProvider.hide(); // Hide loading after groups are loaded
            });
        });
    }
    ngOnInit() { }
    // Add this new method for search functionality
    filterGroups() {
        var _a;
        if (!((_a = this.searchTerm) === null || _a === void 0 ? void 0 : _a.trim())) {
            this.filteredGroups = this.groups;
            return;
        }
        const searchTermLower = this.searchTerm.toLowerCase().trim();
        this.filteredGroups = this.groups.filter(group => {
            return (group.name.toLowerCase().includes(searchTermLower) ||
                (group.description && group.description.toLowerCase().includes(searchTermLower)));
        });
    }
    loadAllCategories() {
        this.firestore.collection('categories').ref.orderBy('sort', 'asc').onSnapshot((catsRes) => {
            if (catsRes) {
                this.categories = [];
                catsRes.forEach(cat => {
                    let category = cat.data();
                    category.key = cat.id;
                    console.log('category', category);
                    this.categories.push(category);
                });
            }
        });
    }
    // Open Group Chat.
    viewGroup(group) {
        if (group.isUserMember) {
            this.router.navigateByUrl('group/' + group.key);
        }
    }
    searchGroupByCategory(category) {
        const groupSearch = { category };
        // this.router.navigateByUrl('group-search/' + groupSearch);
        this.router.navigateByUrl('/group-search', { state: groupSearch });
        // this.router.navigateByUrl(['group-search', {state: {data: {category}}});
    }
    joinGroup(groupId) {
        this.router.navigateByUrl('group-join/' + groupId);
    }
    confirmLeaveGroup(group) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Leave Group',
                message: 'Are you sure you want to leave this group? Your posts will remain in the group but you will no longer have access to group content.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary'
                    },
                    {
                        text: 'Leave Group',
                        role: 'destructive',
                        handler: () => {
                            this.leaveGroup(group);
                        }
                    }
                ],
                cssClass: 'custom-alert'
            });
            yield alert.present();
        });
    }
    leaveGroup(group) {
        // Remove user from group members
        const updatedMembers = group.members.filter(memberId => memberId !== this.loggedInUserId);
        // Create a batch write to update both documents
        const batch = this.firestore.firestore.batch();
        // Reference to group document
        const groupRef = this.firestore.collection('groups').doc(group.key).ref;
        // Reference to user's account document
        const userRef = this.firestore.collection('accounts').doc(this.loggedInUserId).ref;
        // Update group members
        batch.update(groupRef, { members: updatedMembers });
        // Update user's groups array using arrayRemove
        batch.update(userRef, {
            groups: firebase_app__WEBPACK_IMPORTED_MODULE_5__.default.firestore.FieldValue.arrayRemove(group.key)
        });
        // Commit the batch
        batch.commit()
            .then(() => {
            // Update local group data
            group.isUserMember = false;
            group.members = updatedMembers;
            console.log('Successfully left group');
        })
            .catch(error => {
            console.error('Error leaving group:', error);
            // Handle error (show toast message)
        });
    }
};
GroupsPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController }
];
GroupsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-groups',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_groups_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_groups_page_scss__WEBPACK_IMPORTED_MODULE_1__, _groups_shell_scss__WEBPACK_IMPORTED_MODULE_2__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router,
        _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService,
        _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController])
], GroupsPage);



/***/ }),

/***/ 21294:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/groups/groups.page.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title size=\"large\">Groups</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"solid\" color=\"primary\" routerLink=\"/newgroup\">\n        <ion-icon slot=\"start\" name=\"add-outline\"></ion-icon>\n        Create New\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Search Bar -->\n<!-- <ion-toolbar class=\"search-toolbar\">\n  <ion-searchbar \n    [(ngModel)]=\"searchTerm\"\n    (ionInput)=\"filterGroups()\"\n    placeholder=\"Search groups\"\n    animated=\"true\"\n    class=\"custom-searchbar\"\n    clear-icon=\"close-circle\"\n    search-icon=\"search-outline\">\n  </ion-searchbar>\n</ion-toolbar> -->\n\n<ion-content class=\"ion-padding\">\n  <!-- Categories Section -->\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-between\">\n      <ion-col>\n        <h2 class=\"ion-no-margin\">Popular Categories</h2>\n      </ion-col>\n      <!-- <ion-col size=\"auto\">\n        <ion-button fill=\"clear\" color=\"secondary\" routerLink=\"/newgroup\">\n          See All\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n\n <!-- Categories Slider -->\n <div class=\"slider-container ion-margin-top\">\n  <ion-slides class=\"categories-slider\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let category of categories\" (click)=\"searchGroupByCategory(category)\">\n      <ion-card class=\"category-card\">\n        <ion-img [src]=\"category.img\" [alt]=\"category.name\"></ion-img>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n  <!-- Suggested Groups Section -->\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-between\">\n      <ion-col>\n        <h2 class=\"ion-no-margin\">Suggested Groups</h2>\n      </ion-col>\n      <!-- <ion-col size=\"auto\">\n        <ion-button fill=\"clear\" color=\"secondary\" routerLink=\"/newgroup\">\n          See All\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n\n  <!-- Groups List -->\n  <ion-list class=\"ion-no-padding\">\n    <ion-item *ngFor=\"let group of filteredGroups\" \n              button \n              detail=\"false\" \n              class=\"ion-margin-bottom\"\n              (click)=\"viewGroup(group)\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"group.img\" [alt]=\"group.name\"></ion-img>\n      </ion-thumbnail>\n      \n      <ion-label>\n        <h3 class=\"ion-no-margin\">{{group.name}}</h3>\n        <p class=\"ion-text-wrap\">\n          <ion-text color=\"medium\">\n            <ion-icon name=\"people-outline\"></ion-icon>\n            {{group.members?.length || 0}} Members · \n            <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n            {{group.posts?.length || 0}} posts\n          </ion-text>\n        </p>\n      </ion-label>\n\n      <ion-button slot=\"end\" \n      fill=\"solid\"\n      [color]=\"group.isUserMember ? 'danger' : 'primary'\"\n      (click)=\"$event.stopPropagation(); group.isUserMember ? confirmLeaveGroup(group) : joinGroup(group.key)\"\n      class=\"join-group-btn\">\n        <ion-icon [name]=\"group.isUserMember ? 'exit-outline' : 'add-outline'\"\n                slot=\"start\"></ion-icon>\n        {{group.isUserMember ? 'Leave' : 'Join'}}\n  </ion-button>\n\n    </ion-item>\n  </ion-list>\n\n  <!-- Empty State -->\n  <ion-list *ngIf=\"groups?.length === 0\">\n    <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-center\">\n        <ion-icon name=\"people-outline\" size=\"large\" color=\"medium\"></ion-icon>\n        <h2>No Groups Found</h2>\n        <p>Create a new group or join existing ones</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 56585:
/*!*****************************************!*\
  !*** ./src/app/groups/groups.page.scss ***!
  \*****************************************/
/***/ (function(module) {

module.exports = ":host ion-thumbnail {\n  --size: 60px;\n  --border-radius: 8px;\n}\n:host h2 {\n  font-size: 20px;\n  font-weight: 600;\n}\n:host ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: transparent;\n}\n:host .join-group-btn {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --border-radius: 8px;\n}\n:host .join-group-btn[color=danger] {\n  --background: transparent;\n  --color: var(--ion-color-danger);\n  --border-color: var(--ion-color-danger);\n  --border-style: solid;\n  --border-width: 1px;\n}\n:host .join-group-btn[color=danger]:hover {\n  --background: var(--ion-color-danger);\n  --color: var(--ion-color-danger-contrast);\n}\n:host .join-group-btn ion-icon {\n  margin-right: 4px;\n}\n:host .search-toolbar {\n  --background: transparent;\n  padding-bottom: 8px;\n}\n:host .search-toolbar .custom-searchbar {\n  --background: var(--ion-color-light);\n  --border-radius: 12px;\n  --box-shadow: none;\n  --placeholder-color: var(--ion-color-medium);\n  --icon-color: var(--ion-color-medium);\n  --color: var(--ion-color-dark);\n  padding: 0;\n  height: 46px;\n}\n:host .slider-container {\n  margin-top: 16px;\n}\n:host .slider-container .categories-slider {\n  padding: 0 16px;\n}\n:host .category-header h2 {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3Vwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUZKO0FBS0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFISjtBQUtJO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUhOO0FBS007RUFDRSxxQ0FBQTtFQUNBLHlDQUFBO0FBSFI7QUFPSTtFQUNFLGlCQUFBO0FBTE47QUFRRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQVFJO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFOTjtBQVNFO0VBQ0UsZ0JBQUE7QUFQSjtBQVNJO0VBQ0UsZUFBQTtBQVBOO0FBWUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7QUFWTiIsImZpbGUiOiJncm91cHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tdGh1bWJuYWlsIHtcbiAgICAtLXNpemU6IDYwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5qb2luLWdyb3VwLWJ0biB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgXG4gICAgJltjb2xvcj1cImRhbmdlclwiXSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG4gIH1cbiAgLnNlYXJjaC10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIFxuICAgIC5jdXN0b20tc2VhcmNoYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgfVxuICB9XG4gIC5zbGlkZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4OyAgLy8gQWRkcyBzcGFjZSBhZnRlciB0aGUgaGVhZGluZ1xuICAgIFxuICAgIC5jYXRlZ29yaWVzLXNsaWRlciB7XG4gICAgICBwYWRkaW5nOiAwIDE2cHg7ICAvLyBNYWludGFpbnMgY29uc2lzdGVudCBob3Jpem9udGFsIHBhZGRpbmdcbiAgICB9XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1oZWFkZXIge1xuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICBcbn1cbiJdfQ== */";

/***/ }),

/***/ 54839:
/*!******************************************!*\
  !*** ./src/app/groups/groups.shell.scss ***!
  \******************************************/
/***/ (function(module) {

module.exports = ":host {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\napp-image-shell.cover-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: transparent;\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.item-icon {\n  --image-shell-loading-background: transparent;\n}\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.item-name app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 12px;\n  max-width: 50%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 10px;\n  min-width: 30px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-rating > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\napp-image-shell.picture-image {\n  --image-shell-border-radius: var(--app-narrow-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3Vwcy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtBQURKOztBQVdFO0VBQ0UsbURBQUE7RUFDQSxtRUFBQTtFQUNBLDZDQUFBO0VBQ0EsOERBQUE7QUFSSjs7QUFXRTtFQUNFLDZDQUFBO0FBUko7O0FBV0U7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVVJO0VBQ0UsZ0JBQUE7QUFSTjs7QUFZRTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBVEo7O0FBV0k7RUFDRSxnQkFBQTtBQVROOztBQWFFO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFWSjs7QUFZSTtFQUNFLGNBQUE7QUFWTjs7QUFjRTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUFYSjs7QUFjRTtFQUNFLHFEQUFBO0VBQ0EsbUVBQUE7QUFYSiIsImZpbGUiOiJncm91cHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAgIC0tc2hlbGwtY29sb3I6ICNlYmJiMDA7XG4gICAgLS1zaGVsbC1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbiAgfVxuICBcbiAgLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2VcbiAgOmhvc3QoLmlzLXNoZWxsKSB7XG4gICAgLy8gaW9uLWNvbnRlbnQge1xuICAgIC8vICAgb3BhY2l0eTogMC44O1xuICAgIC8vIH1cbiAgfVxuICBcbiAgYXBwLWltYWdlLXNoZWxsLmNvdmVyLWltYWdlIHtcbiAgICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gICAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIH1cbiAgXG4gIGFwcC1pbWFnZS1zaGVsbC5pdGVtLWljb24ge1xuICAgIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gIFxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICB9XG4gIH1cbiAgXG4gIC5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIFxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICB9XG4gIH1cbiAgXG4gIC5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTBweDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gIFxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgfVxuICB9XG4gIFxuICAuaXRlbS1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIH1cbiAgXG4gIGFwcC1pbWFnZS1zaGVsbC5waWN0dXJlLWltYWdlIHtcbiAgICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICB9XG4gICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_groups_groups_module_ts-es2015.js.map