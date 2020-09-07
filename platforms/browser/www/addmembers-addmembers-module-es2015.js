(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addmembers-addmembers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addmembers/addmembers.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addmembers/addmembers.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primart\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Memebers</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"done()\">Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- All friends already in the group. -->\n  <div class=\"empty-list\" *ngIf=\"friends && friends.length == 0\">\n    <h1>\n      <ion-icon name=\"md-contacts\"></ion-icon>\n    </h1>\n    <p>Uh-oh! Sorry but your friends are already a member of this group.</p>\n  </div>\n  <!-- Add/Cancel Add friends to the group. -->\n  <ion-list lines=\"none\" *ngIf=\"friends && friends.length > 0\">\n    <ion-searchbar [(ngModel)]=\"searchFriend\" placeholder=\"Search for friend or username\" showCancelButton=\"true\"\n      cancelButtonText=\"Done\"></ion-searchbar>\n    <ion-item *ngFor=\"let friend of friends | friendFilter:searchFriend\" (click)=\"addOrRemove(friend)\">\n\n      <ion-avatar slot=\"start\">\n        <img src=\"{{friend.img}}\" onError=\"this.src='./assets/images/default-dp.png'\">\n      </ion-avatar>\n      <ion-label>\n        <ion-text>\n          <h2>{{friend.name}}</h2>\n        </ion-text>\n        <ion-text>\n          <p>@{{friend.username}}</p>\n        </ion-text>\n      </ion-label>\n      <ion-button size=\"small\" slot=\"end\" fill=\"outline\" (click)=\"add(friend); $event.stopPropagation();\"\n        *ngIf=\"!isAdded(friend)\">Add</ion-button>\n      <ion-button size=\"small\" slot=\"end\" fill=\"outline\" (click)=\"remove(friend); $event.stopPropagation();\"\n        *ngIf=\"isAdded(friend)\">Remove</ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/addmembers/addmembers.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addmembers/addmembers.module.ts ***!
  \*************************************************/
/*! exports provided: AddmembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmembersPageModule", function() { return AddmembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _addmembers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addmembers.page */ "./src/app/addmembers/addmembers.page.ts");
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share.module */ "./src/app/services/share.module.ts");








const routes = [
    {
        path: '',
        component: _addmembers_page__WEBPACK_IMPORTED_MODULE_6__["AddmembersPage"]
    }
];
let AddmembersPageModule = class AddmembersPageModule {
};
AddmembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addmembers_page__WEBPACK_IMPORTED_MODULE_6__["AddmembersPage"]]
    })
], AddmembersPageModule);



/***/ }),

/***/ "./src/app/addmembers/addmembers.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addmembers/addmembers.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZG1lbWJlcnMvYWRkbWVtYmVycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/addmembers/addmembers.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addmembers/addmembers.page.ts ***!
  \***********************************************/
/*! exports provided: AddmembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmembersPage", function() { return AddmembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let AddmembersPage = class AddmembersPage {
    // AddMemberPage
    // This is the page where the user can add their friends to an existing group.
    // The user can only add their friends to the group.
    constructor(router, route, dataProvider, loadingProvider, firestore, alertCtrl) {
        this.router = router;
        this.route = route;
        this.dataProvider = dataProvider;
        this.loadingProvider = loadingProvider;
        this.firestore = firestore;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // Initialize
        this.groupId = this.route.snapshot.params.id;
        this.searchFriend = '';
        this.toAdd = [];
        this.loadingProvider.show();
        // Get user information for system message sent to the group when a member was added.
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((user) => {
            this.user = user.payload.data();
        });
        // Get group information
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
            this.groupMembers = null;
            // Get group members
            if (group.payload.data().members) {
                group.payload.data().members.forEach((memberId) => {
                    this.dataProvider.getUser(memberId).snapshotChanges().subscribe((member) => {
                        this.addOrUpdateMember(member);
                    });
                });
                // Get user's friends to add
                this.dataProvider.getCurrentUser().snapshotChanges().subscribe((user) => {
                    let account = user.payload.data();
                    if (account.friends) {
                        for (var i = 0; i < account.friends.length; i++) {
                            this.dataProvider.getUser(account.friends[i]).snapshotChanges().subscribe((friendRes) => {
                                // Only friends that are not yet a member of this group can be added.
                                let friend = Object.assign({ $key: friendRes.key }, friendRes.payload.data());
                                console.log(friend);
                                if (!this.isMember(friend)) {
                                    this.addOrUpdateFriend(friend);
                                }
                            });
                        }
                        if (!this.friends) {
                            this.friends = [];
                        }
                    }
                    else {
                        this.friends = [];
                    }
                });
            }
            console.log(this.friends);
            this.loadingProvider.hide();
        });
    }
    // Check if friend is a member of the group or not.
    isMember(friend) {
        if (this.groupMembers) {
            for (var i = 0; i < this.groupMembers.length; i++) {
                if (this.groupMembers[i].$key == friend.$key) {
                    return true;
                }
            }
        }
        return false;
    }
    // Check if friend is already on the list of members to be added.
    isAdded(friend) {
        if (this.toAdd) {
            for (var i = 0; i < this.toAdd.length; i++) {
                if (this.toAdd[i].$key == friend.$key) {
                    return true;
                }
            }
        }
        return false;
    }
    // Toggle for adding/removing friend on the list of members to be added.
    addOrRemove(friend) {
        if (this.isAdded(friend)) {
            this.remove(friend);
        }
        else {
            this.add(friend);
        }
    }
    // Add or update friend information for real-time sync.
    addOrUpdateFriend(friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].$key == friend.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    }
    // Add or update member information for real-time sync.
    addOrUpdateMember(member) {
        if (!this.groupMembers) {
            this.groupMembers = [member];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.groupMembers.length; i++) {
                if (this.groupMembers[i].$key == member.$key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groupMembers[index] = member;
            }
            else {
                this.groupMembers.push(member);
            }
        }
    }
    // Add friend to the list of to be added.
    add(friend) {
        this.toAdd.push(friend);
    }
    // Remove friend from the list of to be added.
    remove(friend) {
        this.toAdd.splice(this.toAdd.indexOf(friend), 1);
    }
    // Get names of the members to be added to the group.
    getNames() {
        var names = '';
        this.toAdd.forEach((friend) => {
            names += friend.name + ', ';
        });
        return names.substring(0, names.length - 2);
    }
    // Confirm adding of new members, afterwards add the members.
    done() {
        this.alertCtrl.create({
            header: 'Add Members',
            message: 'Are you sure you want to add <b>' + this.getNames() + '</b> to the group?',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: data => {
                        // Proceed
                        this.loadingProvider.show();
                        this.toAdd.forEach((friend) => {
                            // Add groupInfo to each friend added to the group.
                            this.firestore.doc('/accounts/' + friend.$key + '/groups/' + this.groupId).update({
                                messagesRead: 0
                            });
                            // Add friend as members of the group.
                            console.log(friend.$key);
                            console.log(this.group.members);
                            this.group.members.push(friend.$key);
                            // Add system message that the members are added to the group.
                            this.group.messages.push({
                                date: new Date().toString(),
                                sender: this.user.userId,
                                type: 'system',
                                message: this.user.name + ' has added ' + this.getNames() + ' to the group.',
                                icon: 'md-contacts'
                            });
                        });
                        // Update group data on the database.
                        this.dataProvider.getGroup(this.groupId).update({
                            members: this.group.members,
                            messages: this.group.messages
                        }).then(() => {
                            // Back.
                            this.loadingProvider.hide();
                        });
                    }
                }
            ]
        }).then(r => r.present());
    }
};
AddmembersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
AddmembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addmembers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addmembers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addmembers/addmembers.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addmembers.page.scss */ "./src/app/addmembers/addmembers.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], AddmembersPage);



/***/ })

}]);
//# sourceMappingURL=addmembers-addmembers-module-es2015.js.map