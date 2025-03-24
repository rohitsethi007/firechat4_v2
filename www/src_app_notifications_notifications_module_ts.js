(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_notifications_notifications_module_ts"],{

/***/ 11866:
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsPageRoutingModule: () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 27820);




const routes = [{
  path: '',
  component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
}];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NotificationsPageRoutingModule);


/***/ }),

/***/ 18307:
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsPageModule: () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 11866);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 27820);







let NotificationsPageModule = class NotificationsPageModule {};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule],
  declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage]
})], NotificationsPageModule);


/***/ }),

/***/ 27820:
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsPage: () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.html?ngResource */ 73963);
/* harmony import */ var _notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.page.scss?ngResource */ 26908);
/* harmony import */ var _notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notifications.service */ 72318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 37401);




// notifications.page.ts




let NotificationsPage = class NotificationsPage {
  constructor(notificationsService, router, alertCtrl) {
    this.notificationsService = notificationsService;
    this.router = router;
    this.alertCtrl = alertCtrl;
    this.notifications = [];
    this.loading = true;
  }
  ngOnInit() {
    console.log('NotificationsPage initialized');
    this.loadNotifications();
  }
  ngOnDestroy() {
    if (this.notificationsSub) {
      this.notificationsSub.unsubscribe();
    }
  }
  loadNotifications() {
    this.loading = true;
    this.notificationsSub = this.notificationsService.getUserNotifications().subscribe({
      next: notifications => {
        console.log('Received notifications:', notifications);
        this.notifications = notifications;
        this.loading = false;
      },
      error: error => {
        console.error('Error loading notifications:', error);
        this.loading = false;
      }
    });
  }
  handleNotificationClick(notification) {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Notification clicked:', notification);
      yield _this.notificationsService.markAsRead(notification.id);
      switch (notification.type) {
        case 'comment':
        case 'reaction':
          _this.router.navigate(['/post', notification.postId]);
          break;
        case 'message':
          _this.router.navigate(['/chat', notification.fromUser.userId]);
          break;
      }
    })();
  }
  // notifications.page.ts
  clearAll() {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: 'Clear Notifications',
        message: 'Are you sure you want to clear all notifications?',
        cssClass: 'custom-alert',
        buttons: [{
          text: 'Cancel',
          cssClass: 'alert-button-cancel',
          role: 'cancel'
        }, {
          text: 'Clear',
          cssClass: 'alert-button-delete',
          handler: () => {
            _this2.notificationsService.clearAllNotifications();
          }
        }]
      });
      yield alert.present();
    })();
  }
  doRefresh(event) {
    this.loadNotifications();
    event.target.complete();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
  }];
};
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-notifications',
  template: _notifications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_notifications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], NotificationsPage);


/***/ }),

/***/ 72318:
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsService: () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 3602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);


// notifications.service.ts





let NotificationsService = class NotificationsService {
  constructor(firestore, auth) {
    this.firestore = firestore;
    this.auth = auth;
  }
  // Create a new notification
  createNotification(notification) {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const notificationRef = _this.firestore.collection('notifications').doc();
      yield notificationRef.set({
        ...notification,
        id: notificationRef.ref.id,
        createdAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.serverTimestamp(),
        read: false
      });
    })();
  }
  // Get user's notifications
  getUserNotifications() {
    console.info('getting notifications');
    return this.firestore.collection('notifications', ref => ref.where('toUserId', '==', firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.uid).orderBy('createdAt', 'desc').limit(50)).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(actions => actions.map(a => {
      const data = a.payload.doc.data();
      return {
        ...data
      };
    })));
  }
  // Mark notification as read
  markAsRead(notificationId) {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.firestore.doc(`notifications/${notificationId}`).update({
        read: true
      });
    })();
  }
  // Mark all notifications as read
  markAllAsRead() {
    var _this3 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const batch = _this3.firestore.firestore.batch();
      const notifications = yield _this3.firestore.collection('notifications').ref.where('toUserId', '==', firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.uid).where('read', '==', false).get();
      notifications.docs.forEach(doc => {
        batch.update(doc.ref, {
          read: true
        });
      });
      yield batch.commit();
    })();
  }
  // Delete a notification
  deleteNotification(notificationId) {
    var _this4 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.firestore.doc(`notifications/${notificationId}`).delete();
    })();
  }
  // Clear all notifications
  clearAllNotifications() {
    var _this5 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const batch = _this5.firestore.firestore.batch();
      const notifications = yield _this5.firestore.collection('notifications').ref.where('toUserId', '==', firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.uid).get();
      notifications.docs.forEach(doc => {
        batch.delete(doc.ref);
      });
      yield batch.commit();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
  }];
};
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], NotificationsService);


/***/ }),

/***/ 26908:
/*!******************************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-content {
  --background: var(--ion-color-light);
}

ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  margin-bottom: 1px;
}
ion-item.unread {
  --background: var(--ion-color-light-tint);
}
ion-item.unread ion-label {
  font-weight: 500;
}
ion-item ion-avatar {
  width: 40px;
  height: 40px;
  margin-right: 16px;
}
ion-item .username {
  font-weight: 500;
  color: var(--ion-color-dark);
}
ion-item .notification-content {
  margin-left: 4px;
  color: var(--ion-color-medium);
}
ion-item .timestamp {
  margin-top: 4px;
  color: var(--ion-color-medium);
  font-size: 12px;
}
ion-item ion-icon[name=ellipse] {
  font-size: 12px;
}

.spinner-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}`, "",{"version":3,"sources":["webpack://./src/app/notifications/notifications.page.scss"],"names":[],"mappings":"AACA;EACI,oCAAA;AAAJ;;AAGE;EACE,qBAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;AAAJ;AAEI;EACE,yCAAA;AAAN;AAEM;EACE,gBAAA;AAAR;AAII;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AAFN;AAKI;EACE,gBAAA;EACA,4BAAA;AAHN;AAMI;EACE,gBAAA;EACA,8BAAA;AAJN;AAOI;EACE,eAAA;EACA,8BAAA;EACA,eAAA;AALN;AAQI;EACE,eAAA;AANN;;AAUE;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;AAPJ","sourcesContent":["// notifications.page.scss\nion-content {\n    --background: var(--ion-color-light);\n  }\n  \n  ion-item {\n    --padding-start: 16px;\n    --padding-end: 16px;\n    --padding-top: 12px;\n    --padding-bottom: 12px;\n    margin-bottom: 1px;\n  \n    &.unread {\n      --background: var(--ion-color-light-tint);\n      \n      ion-label {\n        font-weight: 500;\n      }\n    }\n  \n    ion-avatar {\n      width: 40px;\n      height: 40px;\n      margin-right: 16px;\n    }\n  \n    .username {\n      font-weight: 500;\n      color: var(--ion-color-dark);\n    }\n  \n    .notification-content {\n      margin-left: 4px;\n      color: var(--ion-color-medium);\n    }\n  \n    .timestamp {\n      margin-top: 4px;\n      color: var(--ion-color-medium);\n      font-size: 12px;\n    }\n  \n    ion-icon[name=\"ellipse\"] {\n      font-size: 12px;\n    }\n  }\n  \n  .spinner-center {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 73963:
/*!******************************************************************!*\
  !*** ./src/app/notifications/notifications.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- notifications.page.html -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/feed\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Notifications</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clearAll()\" *ngIf=\"notifications.length > 0\">\n        <ion-icon color= \"primary\" name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"loading\" class=\"ion-padding ion-text-center\">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <ion-list *ngIf=\"!loading\">\n    <ion-item *ngFor=\"let notification of notifications\" \n              [class.unread]=\"!notification.read\"\n              (click)=\"handleNotificationClick(notification)\"\n              button>\n      <ion-avatar slot=\"start\">\n        <img [src]=\"notification.fromUser?.userImg || 'assets/default-avatar.png'\" \n             [alt]=\"notification.fromUser?.username\">\n      </ion-avatar>\n      \n      <ion-label>\n        <h2>\n          <span class=\"username\">{{ notification.fromUser?.username }}</span>\n          <span class=\"notification-content\">{{ notification.content }}</span>\n        </h2>\n        <p class=\"timestamp\">\n          {{ notification.createdAt?.toDate() | date:'short' }}\n        </p>\n      </ion-label>\n\n      <ion-icon \n        *ngIf=\"!notification.read\" \n        name=\"ellipse\" \n        color=\"primary\" \n        slot=\"end\" \n        size=\"small\">\n      </ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf=\"notifications.length === 0\" lines=\"none\">\n      <ion-label class=\"ion-text-center\">\n        <p>No notifications yet</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_notifications_notifications_module_ts.js.map