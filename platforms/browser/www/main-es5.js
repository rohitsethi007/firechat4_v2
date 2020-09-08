function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./addmembers/addmembers.module": ["./src/app/addmembers/addmembers.module.ts", "addmembers-addmembers-module"],
      "./blockedlist/blockedlist.module": ["./src/app/blockedlist/blockedlist.module.ts", "blockedlist-blockedlist-module"],
      "./event/event.module": ["./src/app/event/event.module.ts", "event-event-module"],
      "./feed/feed.module": ["./src/app/feed/feed.module.ts", "feed-feed-module"],
      "./forgot/forgot.module": ["./src/app/forgot/forgot.module.ts", "default~forgot-forgot-module~login-login-module~profile-profile-module~register-register-module", "forgot-forgot-module"],
      "./friends/friends.module": ["./src/app/friends/friends.module.ts", "common", "friends-friends-module"],
      "./getting-started/getting-started.module": ["./src/app/getting-started/getting-started.module.ts", "getting-started-getting-started-module"],
      "./group/group.module": ["./src/app/group/group.module.ts", "group-group-module"],
      "./groupinfo/groupinfo.module": ["./src/app/groupinfo/groupinfo.module.ts", "groupinfo-groupinfo-module"],
      "./groups/groups.module": ["./src/app/groups/groups.module.ts", "groups-groups-module"],
      "./imagemodal/imagemodal.module": ["./src/app/imagemodal/imagemodal.module.ts"],
      "./login/login.module": ["./src/app/login/login.module.ts", "default~forgot-forgot-module~login-login-module~profile-profile-module~register-register-module", "login-login-module"],
      "./message/message.module": ["./src/app/message/message.module.ts", "message-message-module"],
      "./messages/messages.module": ["./src/app/messages/messages.module.ts", "messages-messages-module"],
      "./new-event/new-event.module": ["./src/app/new-event/new-event.module.ts", "default~new-event-new-event-module~new-resources-new-resources-module", "new-event-new-event-module"],
      "./new-poll/new-poll.module": ["./src/app/new-poll/new-poll.module.ts", "new-poll-new-poll-module"],
      "./new-post/new-post.module": ["./src/app/new-post/new-post.module.ts", "new-post-new-post-module"],
      "./new-resources/new-resources.module": ["./src/app/new-resources/new-resources.module.ts", "default~new-event-new-event-module~new-resources-new-resources-module", "new-resources-new-resources-module"],
      "./newgroup/newgroup.module": ["./src/app/newgroup/newgroup.module.ts", "newgroup-newgroup-module"],
      "./poll/poll.module": ["./src/app/poll/poll.module.ts", "default~poll-poll-module~post-post-module", "poll-poll-module"],
      "./popover/popover.module": ["./src/app/popover/popover.module.ts"],
      "./post/post.module": ["./src/app/post/post.module.ts", "default~poll-poll-module~post-post-module", "post-post-module"],
      "./profile/profile.module": ["./src/app/profile/profile.module.ts", "default~forgot-forgot-module~login-login-module~profile-profile-module~register-register-module", "profile-profile-module"],
      "./reaction-list-modal/reaction-list-modal.module": ["./src/app/reaction-list-modal/reaction-list-modal.module.ts"],
      "./register/register.module": ["./src/app/register/register.module.ts", "default~forgot-forgot-module~login-login-module~profile-profile-module~register-register-module", "register-register-module"],
      "./resource/resource.module": ["./src/app/resource/resource.module.ts", "resource-resource-module"],
      "./review-modal/review-modal.module": ["./src/app/review-modal/review-modal.module.ts"],
      "./tag-modal/tag-modal.module": ["./src/app/tag-modal/tag-modal.module.ts"],
      "./userinfo/userinfo.module": ["./src/app/userinfo/userinfo.module.ts", "common", "userinfo-userinfo-module"],
      "./walkthrough/walkthrough.module": ["./src/app/walkthrough/walkthrough.module.ts", "walkthrough-walkthrough-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-wrapper/checkbox-wrapper.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-wrapper/checkbox-wrapper.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCheckboxWrapperCheckboxWrapperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-content></ng-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown-timer/countdown-timer.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown-timer/countdown-timer.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCountdownTimerCountdownTimerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row class=\"countdown\">\r\n  <ion-col class=\"time\" *ngIf=\"_initialUnit === 'day'\">\r\n    <span class=\"time-unit\">D</span>\r\n    <div class=\"inner-time\">\r\n      <span class=\"time-value\">{{ _daysLeft }}</span>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col class=\"time\" *ngIf=\"(_initialUnit === 'day' && _endingUnit !== 'day') || _initialUnit === 'hour' || _endingUnit === 'hour'\">\r\n    <span class=\"time-unit\">H</span>\r\n    <div class=\"inner-time\">\r\n      <span class=\"time-value\">{{ _hoursLeft }}</span>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col class=\"time\" *ngIf=\"(_initialUnit === 'day' && (_endingUnit !== 'day' && _endingUnit !== 'hour')) || (_initialUnit === 'hour' && _endingUnit !== 'hour') || _initialUnit === 'minute'\">\r\n    <span class=\"time-unit\">M</span>\r\n    <div class=\"inner-time\">\r\n      <span class=\"time-value\">{{ _minutesLeft }}</span>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col class=\"time\" *ngIf=\"_endingUnit === 'second'\">\r\n    <span class=\"time-unit\">S</span>\r\n    <div class=\"inner-time\">\r\n      <span class=\"time-value\">{{ _secondsLeft }}</span>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter-input/counter-input.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter-input/counter-input.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCounterInputCounterInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"button-outer\">\r\n  <div class=\"button-wrapper\">\r\n    <ion-button class=\"counter-icon\" (click)=\"decrease()\">\r\n      <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</div>\r\n<span class=\"counter-value\">{{ _counterValue }}</span>\r\n<div class=\"button-outer\">\r\n  <div class=\"button-wrapper\">\r\n    <ion-button class=\"counter-icon\" (click)=\"increase()\">\r\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating-input/rating-input.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating-input/rating-input.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRatingInputRatingInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-button class=\"rating-icon\" fill=\"clear\" shape=\"round\" *ngFor=\"let r of range; let i = index\" (click)=\"rate(i + 1)\">\r\n\t<ion-icon slot=\"icon-only\" [name]=\"value === undefined ? (r === 1 ? 'star' : (r === 2 ? 'star-half' : 'star-outline')) : (value > i ? (value < i+1 ? 'star-half' : 'star') : 'star-outline')\"></ion-icon>\r\n</ion-button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-hide-password/show-hide-password.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-hide-password/show-hide-password.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShowHidePasswordShowHidePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-content></ng-content>\r\n<a class=\"type-toggle\" (click)=\"toggleShow()\">\r\n\t<ion-icon class=\"show-option\" [hidden]=\"show\" src=\"./assets/sample-icons/auth/eye-show.svg\"></ion-icon>\r\n\t<ion-icon class=\"hide-option\" [hidden]=\"!show\" src=\"./assets/sample-icons/auth/eye-hide.svg\"></ion-icon>\r\n  <!-- In case you want to use text instead of icons -->\r\n\t<!--\r\n  <span class=\"show-option\" [hidden]=\"show\">show</span>\r\n\t<span class=\"hide-option\" [hidden]=\"!show\">hide</span>\r\n  -->\r\n</a>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/imagemodal/imagemodal.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imagemodal/imagemodal.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImagemodalImagemodalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"content\" (click)=\"close()\" tappable>\r\n    <img src={{img}} />\r\n  </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPopoverPopoverPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-float-left\">\r\n  <ion-list>\r\n    <!--<ion-list-header>Ionic</ion-list-header>-->\r\n    <ion-item button>Tag as as Resource</ion-item>\r\n    <ion-item button>Report inappropriate</ion-item>\r\n    <ion-item button>Message user</ion-item>\r\n    <ion-item lines=\"none\" detail=\"false\" button onClick=\"close()\">Close</ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reaction-list-modal/reaction-list-modal.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reaction-list-modal/reaction-list-modal.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReactionListModalReactionListModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title\">Reactions</ion-title>\r\n    <ion-buttons slot=\"end\"> \r\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of items\">\r\n      <ion-avatar slot=\"start\">\r\n        <ion-img src=\"{{item.addedByUser.addedByImg}}\"></ion-img>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{item.addedByUser.addedByUsername}}</h2>\r\n        <!--<p>Sneaky little hobbitses!</p> -->\r\n      </ion-label>\r\n      <ion-img *ngIf=\"item.reactionType === 'Thanks'\" class=\"icon\" src=\"./assets/icon/smile-active.svg\"></ion-img>\r\n      <ion-img *ngIf=\"item.reactionType === 'Hug'\" class=\"icon\" src=\"./assets/icon/hug-active.svg\"></ion-img>\r\n      <ion-img *ngIf=\"item.reactionType === 'Bookmark'\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\"></ion-img>\r\n      <ion-img *ngIf=\"item.reactionType === 'Checkin'\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\"></ion-img>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/review-modal/review-modal.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review-modal/review-modal.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReviewModalReviewModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Write a Review - {{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"filters-content\">\n  <ion-item-group class=\"filters-group\">\n  <form [formGroup]=\"ratingForm\">\n    <ion-list class=\"ratings-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Comments</ion-label>\n        <ion-textarea rows=\"6\"  placeholder=\"Enter more information here...\" type=\"text\" formControlName=\"review\" clearInput placeholder=\"Enter any additional comments that might help other members (optional) ...\"></ion-textarea>\n      </ion-item>\n      <ion-item class=\"rating-item\">\n        <ion-label class=\"rating-label\">Rate</ion-label>\n        <app-rating-input formControlName=\"rating\" max=\"5\"></app-rating-input>\n      </ion-item>\n    </ion-list>\n\n    <hr class=\"details-divider\">\n    <ion-button class=\"write-reviews-btn\" color=\"dark\" (click)=\"submitReview()\" expand=\"block\" fill=\"solid\">Submit</ion-button>\n\n  </form>\n  </ion-item-group>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/aspect-ratio/aspect-ratio.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/aspect-ratio/aspect-ratio.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShellAspectRatioAspectRatioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\r\n  <ng-content></ng-content>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/image-shell/image-shell.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/image-shell/image-shell.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShellImageShellImageShellComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-spinner class=\"spinner\"></ion-spinner>\r\n<img class=\"inner-img\" [src]=\"_src\" [alt]=\"_alt\" (load)=\"_imageLoaded()\"/>\r\n<ng-content *ngIf=\"_mode === 'cover'\"></ng-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/text-shell/text-shell.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shell/text-shell/text-shell.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShellTextShellTextShellComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container>{{ _data }}</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tag-modal/tag-modal.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tag-modal/tag-modal.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTagModalTagModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ModalPage</ion-title>\r\n    <ion-buttons end>\r\n      <button ion-button (click)=\"closeModal()\">Close</button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n<!-- Checkboxes in a List -->\r\n<ion-list>\r\n  <ion-item *ngFor=\"let entry of form\">\r\n    <ion-label>{{entry.val}}</ion-label>\r\n    <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\r\n  </ion-item>\r\n</ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'app',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'friends',
      loadChildren: './friends/friends.module#FriendsPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'group/:id',
      loadChildren: './group/group.module#GroupPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'addmembers/:id',
      loadChildren: './addmembers/addmembers.module#AddmembersPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'groupinfo/:id',
      loadChildren: './groupinfo/groupinfo.module#GroupinfoPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'groups',
      loadChildren: './groups/groups.module#GroupsPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'login',
      loadChildren: './login/login.module#LoginPageModule'
    }, {
      path: 'imagemodal',
      loadChildren: './imagemodal/imagemodal.module#ImagemodalPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'message/:id',
      loadChildren: './message/message.module#MessagePageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'messages',
      loadChildren: './messages/messages.module#MessagesPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'newgroup',
      loadChildren: './newgroup/newgroup.module#NewgroupPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'blockedlist',
      loadChildren: './blockedlist/blockedlist.module#BlockedlistPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'register',
      loadChildren: './register/register.module#RegisterPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'userinfo/:id',
      loadChildren: './userinfo/userinfo.module#UserinfoPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'profile',
      loadChildren: './profile/profile.module#ProfilePageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'forgot',
      loadChildren: './forgot/forgot.module#ForgotPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'popover',
      loadChildren: './popover/popover.module#PopoverPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'tag-modal/:groupTags',
      loadChildren: './tag-modal/tag-modal.module#TagModalPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'poll/:id',
      loadChildren: './poll/poll.module#PollPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'new-poll/:id',
      loadChildren: './new-poll/new-poll.module#NewPollPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'walkthrough',
      loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule'
    }, {
      path: 'getting-started',
      loadChildren: './getting-started/getting-started.module#GettingStartedPageModule'
    }, // { path: 'new-resource/:id', loadChildren: './new-resource/new-resource.module#NewResourcePageModule', canActivate: [AuthGuardService] },
    {
      path: 'resource/:id',
      loadChildren: './resource/resource.module#ResourcePageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'review-modal',
      loadChildren: './review-modal/review-modal.module#ReviewModalPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'event/:id',
      loadChildren: './event/event.module#EventPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'new-event/:id',
      loadChildren: './new-event/new-event.module#NewEventPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'new-post/:id',
      loadChildren: './new-post/new-post.module#NewPostPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'post/:id',
      loadChildren: './post/post.module#PostPageModule',
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'reaction-list-modal',
      loadChildren: './reaction-list-modal/reaction-list-modal.module#ReactionListModalPageModule'
    }, {
      path: 'new-resource/:id',
      loadChildren: './new-resources/new-resources.module#NewResourcesPageModule'
    }, {
      path: 'feed',
      loadChildren: './feed/feed.module#FeedPageModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, router, afAuth) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.afAuth = afAuth;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.platform.backButton.subscribe(function () {
              return null;
            });

            _this.afAuth.auth.onAuthStateChanged(function (user) {
              if (user == null) _this.router.navigateByUrl('walkthrough', {
                replaceUrl: true,
                skipLocationChange: true
              });else _this.router.navigateByUrl('/app/tabs/tab1', {
                skipLocationChange: true,
                replaceUrl: true
              });
            });
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/firebase-x/ngx */
    "./node_modules/@ionic-native/firebase-x/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/ngx/index.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/ngx/index.js");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _services_share_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./services/share.module */
    "./src/app/services/share.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./imagemodal/imagemodal.module */
    "./src/app/imagemodal/imagemodal.module.ts");
    /* harmony import */


    var _tag_modal_tag_modal_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./tag-modal/tag-modal.module */
    "./src/app/tag-modal/tag-modal.module.ts");
    /* harmony import */


    var _popover_popover_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./popover/popover.module */
    "./src/app/popover/popover.module.ts");
    /* harmony import */


    var _review_modal_review_modal_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./review-modal/review-modal.module */
    "./src/app/review-modal/review-modal.module.ts");
    /* harmony import */


    var _reaction_list_modal_reaction_list_modal_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./reaction-list-modal/reaction-list-modal.module */
    "./src/app/reaction-list-modal/reaction-list-modal.module.ts");
    /* harmony import */


    var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @ionic-native/chooser/ngx */
    "./node_modules/@ionic-native/chooser/ngx/index.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/ngx/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        mode: 'md'
      }), _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"], _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_29__["ImagemodalPageModule"], _review_modal_review_modal_module__WEBPACK_IMPORTED_MODULE_32__["ReviewModalPageModule"], _tag_modal_tag_modal_module__WEBPACK_IMPORTED_MODULE_30__["TagModalPageModule"], _popover_popover_module__WEBPACK_IMPORTED_MODULE_31__["PopoverPageModule"], _reaction_list_modal_reaction_list_modal_module__WEBPACK_IMPORTED_MODULE_33__["ReactionListModalPageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_15__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_16__["Facebook"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__["Camera"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_19__["MediaCapture"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_23__["FilePath"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_22__["FileChooser"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_17__["FirebaseX"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_24__["Geolocation"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_20__["ImagePicker"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_25__["Contacts"], _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_34__["Chooser"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_26__["Keyboard"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_35__["LocalNotifications"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_36__["FCM"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCheckboxWrapperCheckboxWrapperComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNoZWNrYm94LXdyYXBwZXJcXGNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tib3gtd3JhcHBlci9jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CheckboxWrapperComponent */

  /***/
  function srcAppComponentsCheckboxWrapperCheckboxWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponent", function () {
      return CheckboxWrapperComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // Reference to the @ionic/angular Components List:
    // https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts


    var CheckboxWrapperComponent =
    /*#__PURE__*/
    function () {
      function CheckboxWrapperComponent() {
        _classCallCheck(this, CheckboxWrapperComponent);
      }

      _createClass(CheckboxWrapperComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this2 = this;

          // ContentChild is set
          this.isChecked = this.checkbox.checked; // Subscribe to changes

          this.checkbox.ionChange.subscribe(function (changes) {
            _this2.isChecked = changes.detail.checked;
          });
        }
      }]);

      return CheckboxWrapperComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"])], CheckboxWrapperComponent.prototype, "checkbox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.checkbox-checked'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], CheckboxWrapperComponent.prototype, "isChecked", void 0);
    CheckboxWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkbox-wrapper',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkbox-wrapper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-wrapper/checkbox-wrapper.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkbox-wrapper.component.scss */
      "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CheckboxWrapperComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./checkbox-wrapper/checkbox-wrapper.component */
    "./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts");
    /* harmony import */


    var _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./show-hide-password/show-hide-password.component */
    "./src/app/components/show-hide-password/show-hide-password.component.ts");
    /* harmony import */


    var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./countdown-timer/countdown-timer.component */
    "./src/app/components/countdown-timer/countdown-timer.component.ts");
    /* harmony import */


    var _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./counter-input/counter-input.component */
    "./src/app/components/counter-input/counter-input.component.ts");
    /* harmony import */


    var _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./rating-input/rating-input.component */
    "./src/app/components/rating-input/rating-input.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot()],
      declarations: [_checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxWrapperComponent"], _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordComponent"], _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__["CountdownTimerComponent"], _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__["CounterInputComponent"], _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__["RatingInputComponent"]],
      exports: [_shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"], _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxWrapperComponent"], _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordComponent"], _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_8__["CountdownTimerComponent"], _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_9__["CounterInputComponent"], _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_10__["RatingInputComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/countdown-timer/countdown-timer.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/countdown-timer/countdown-timer.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCountdownTimerCountdownTimerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 0px;\n  --countdown-fill-background: transparent;\n  --countdown-fill-shadow: none;\n  --countdown-value-color: #CCC;\n  --countdown-unit-color: #CCC;\n  --countdown-time-flex-direction: row-reverse;\n  display: block;\n}\n:host .countdown {\n  margin: var(--countdown-margin);\n  padding: var(--countdown-padding);\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: nowrap;\n}\n:host .time {\n  padding: var(--countdown-time-padding);\n  margin: var(--countdown-time-margin);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: var(--countdown-time-flex-direction);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .time .time-unit {\n  display: block;\n  color: var(--countdown-unit-color);\n  font-size: 0.7em;\n  text-align: center;\n  text-transform: uppercase;\n  width: 2ex;\n}\n:host .time .time-value {\n  display: block;\n  color: var(--countdown-value-color);\n  text-align: center;\n  font-size: 1em;\n  line-height: 1em;\n  min-height: 1em;\n  min-width: 2.2ex;\n  min-width: 2.1ch;\n}\n:host .inner-time {\n  margin: var(--countdown-inner-time-margin);\n  padding: var(--countdown-inner-time-padding);\n}\n:host([fill=countdown]) .countdown {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n:host([fill=time]) .time {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n:host([fill=inner-time]) .inner-time {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24tdGltZXIvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcY29tcG9uZW50c1xcY291bnRkb3duLXRpbWVyXFxjb3VudGRvd24tdGltZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRkb3duLXRpbWVyL2NvdW50ZG93bi10aW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtFQUVBLDRDQUFBO0VBRUEsY0FBQTtBQ1ZGO0FEWUU7RUFDRSwrQkFBQTtFQUNBLGlDQUFBO0VBRUEsd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0FDWEo7QURjRTtFQUNFLHNDQUFBO0VBQ0Esb0NBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsb0RBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2JKO0FEZUk7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDYk47QURnQkk7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFLQSxnQkFBQTtFQUNBLGdCQUFBO0FDbEJOO0FEc0JFO0VBQ0UsMENBQUE7RUFDQSw0Q0FBQTtBQ3BCSjtBRHlCRTtFQTNFQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQ3NERjtBRHdCRTtFQWpGQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQzZERjtBRHVCRTtFQXZGQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQ29FRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRkb3duLXRpbWVyL2NvdW50ZG93bi10aW1lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBmaWxsLWNvbnRhaW5lcigpe1xyXG4gIGJvcmRlcjogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1jb3VudGRvd24tZmlsbC1zaGFkb3cpO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgLS1jb3VudGRvd24tbWFyZ2luOiAwcHg7XHJcbiAgLS1jb3VudGRvd24tcGFkZGluZzogMHB4O1xyXG4gIC0tY291bnRkb3duLXRpbWUtbWFyZ2luOiAwcHg7XHJcbiAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XHJcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IDJweDtcclxuICAtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XHJcbiAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvdW50ZG93bi1maWxsLXNoYWRvdzogbm9uZTtcclxuXHJcbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6ICNDQ0M7XHJcbiAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogI0NDQztcclxuXHJcbiAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAuY291bnRkb3duIHtcclxuICAgIG1hcmdpbjogdmFyKC0tY291bnRkb3duLW1hcmdpbik7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24tcGFkZGluZyk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC50aW1lIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi10aW1lLXBhZGRpbmcpO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tdGltZS1tYXJnaW4pO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogdmFyKC0tY291bnRkb3duLXRpbWUtZmxleC1kaXJlY3Rpb24pO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC50aW1lLXVuaXQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29sb3I6IHZhcigtLWNvdW50ZG93bi11bml0LWNvbG9yKTtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB3aWR0aDogMmV4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aW1lLXZhbHVlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb3VudGRvd24tdmFsdWUtY29sb3IpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxZW07XHJcblxyXG4gICAgICAvLyBNYWtlIHN1cmUgd2UgYWx3YXlzIGhhdmUgc3BhY2UgZm9yIHR3byBjaGFyYWN0ZXJzXHJcbiAgICAgIC8vIEFzIGNoICh3aWR0aCBvZiB0aGUgY2hhcmFjdGVyICcwJykgdW5pdCBpcyBub3QgMTAwJSBzdXBwb3J0ZWQsIHdlIHdpbGwgdXNlIGV4IChoZWlnaHQgb2YgdGhlICd4JyBjaGFyYWN0ZXIpIGFzIGEgZmFsbGJhY2tcclxuICAgICAgLy8gU2VlOiBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9jc3MvdW5pdHMtdmFsdWVzL1xyXG4gICAgICBtaW4td2lkdGg6IDIuMmV4OyAvLyBUaGUgJ3gnIGNoYXJhY3RlciBpcyBzZW1pLXNxdWFyZSBjaGFyLCB0aGF0J3Mgd2h5IHdlIHNldCAyLjJleFxyXG4gICAgICBtaW4td2lkdGg6IDIuMWNoOyAvLyBjaCBpcyB0aGUgb25seSBmb250IHVuaXQgYmFzZWQgb24gdGhlIHdpZHRoIG9mIGNoYXJhY3RlcnNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbm5lci10aW1lIHtcclxuICAgIG1hcmdpbjogdmFyKC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmcpO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QoW2ZpbGw9XCJjb3VudGRvd25cIl0pIHtcclxuICAuY291bnRkb3duIHtcclxuICAgIEBpbmNsdWRlIGZpbGwtY29udGFpbmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdChbZmlsbD1cInRpbWVcIl0pIHtcclxuICAudGltZSB7XHJcbiAgICBAaW5jbHVkZSBmaWxsLWNvbnRhaW5lcigpO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QoW2ZpbGw9XCJpbm5lci10aW1lXCJdKSB7XHJcbiAgLmlubmVyLXRpbWUge1xyXG4gICAgQGluY2x1ZGUgZmlsbC1jb250YWluZXIoKTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLWNvdW50ZG93bi1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tcGFkZGluZzogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW46IDJweDtcbiAgLS1jb3VudGRvd24taW5uZXItdGltZS1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IG5vbmU7XG4gIC0tY291bnRkb3duLXZhbHVlLWNvbG9yOiAjQ0NDO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiAjQ0NDO1xuICAtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAuY291bnRkb3duIHtcbiAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tbWFyZ2luKTtcbiAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLXBhZGRpbmcpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG46aG9zdCAudGltZSB7XG4gIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi10aW1lLXBhZGRpbmcpO1xuICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi10aW1lLW1hcmdpbik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLnRpbWUgLnRpbWUtdW5pdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tY291bnRkb3duLXVuaXQtY29sb3IpO1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAyZXg7XG59XG46aG9zdCAudGltZSAudGltZS12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tY291bnRkb3duLXZhbHVlLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWluLWhlaWdodDogMWVtO1xuICBtaW4td2lkdGg6IDIuMmV4O1xuICBtaW4td2lkdGg6IDIuMWNoO1xufVxuOmhvc3QgLmlubmVyLXRpbWUge1xuICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbik7XG4gIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmcpO1xufVxuXG46aG9zdChbZmlsbD1jb3VudGRvd25dKSAuY291bnRkb3duIHtcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XG59XG5cbjpob3N0KFtmaWxsPXRpbWVdKSAudGltZSB7XG4gIGJvcmRlcjogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jb3VudGRvd24tZmlsbC1zaGFkb3cpO1xufVxuXG46aG9zdChbZmlsbD1pbm5lci10aW1lXSkgLmlubmVyLXRpbWUge1xuICBib3JkZXI6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY291bnRkb3duLWZpbGwtc2hhZG93KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/countdown-timer/countdown-timer.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/countdown-timer/countdown-timer.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CountdownTimerComponent */

  /***/
  function srcAppComponentsCountdownTimerCountdownTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownTimerComponent", function () {
      return CountdownTimerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__); // TODO:  dayjs is throwing this ERROR:
    //        error TS2339: Property 'to' does not exist on type 'Dayjs'.
    // Luckily there's a PR that apparently fixes this (https://github.com/iamkun/dayjs/issues/297#issuecomment-442748858)
    // When fixed, uncomment this
    // import * as dayjs from 'dayjs';
    // When fixed, remove this


    var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_4__;

    var CountdownTimerComponent =
    /*#__PURE__*/
    function () {
      function CountdownTimerComponent() {
        var _this3 = this;

        _classCallCheck(this, CountdownTimerComponent);

        this._initialUnit = 'hour';
        this._endingUnit = 'second';
        this._updateInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this._unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // DIVISORS
        // 60 seconds * 60 (minutes) * 24 (hours) = 86400 seconds = 1 day

        this._dayDivisor = 60 * 60 * 24; // 60 seconds * 60 (minutes) = 3600 seconds = 1 hour

        this._hourDivisor = 60 * 60; // 60 seconds = 1 minute

        this._minuteDivisor = 60;
        this._secondDivisor = 1; // MODULUS
        // Neutral modulus

        this._dayModulus = function (secondsLeft) {
          return secondsLeft;
        }; // The modulus operator (%) returns the division remainder.
        // To figure out how many hours are left after taking in consideration the days, we should do:
        //    (secondsLeft % hourModulus) / hourDivisor
        // In 1 day there are 86400 seconds, and in 1 hour 3600 seconds. 1 day + 1 hour = 90000 seconds
        //    (90000s % 86400s) / 3600s = 1h


        this._hourModulus = function (secondsLeft) {
          return secondsLeft % _this3._dayDivisor;
        };

        this._minuteModulus = function (secondsLeft) {
          return secondsLeft % _this3._hourDivisor;
        };

        this._secondModulus = function (secondsLeft) {
          return secondsLeft % _this3._minuteDivisor;
        };
      }

      _createClass(CountdownTimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this._updateInterval.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeSubject)).subscribe(function (val) {
            var secondsLeft = _this4._endingTime.diff(dayjs(), 'second');

            _this4._daysLeft = Math.floor(_this4._dayModulus(secondsLeft) / _this4._dayDivisor);
            _this4._hoursLeft = Math.floor(_this4._hourModulus(secondsLeft) / _this4._hourDivisor);
            _this4._minutesLeft = Math.floor(_this4._minuteModulus(secondsLeft) / _this4._minuteDivisor);
            _this4._secondsLeft = Math.floor(_this4._secondModulus(secondsLeft) / _this4._secondDivisor);
          }, function (error) {
            return console.error(error);
          } // () => console.log('[takeUntil] complete')
          );
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._unsubscribeSubject.next();

          this._unsubscribeSubject.complete();
        }
      }, {
        key: "end",
        set: function set(endingTime) {
          this._endingTime = endingTime !== undefined && endingTime !== null ? dayjs(endingTime) : dayjs();
        }
      }, {
        key: "units",
        set: function set(units) {
          // 'day', 'hour, 'minute', 'second'
          this._initialUnit = units !== undefined && units.from !== undefined && units.from !== null ? units.from : 'hour';
          this._endingUnit = units !== undefined && units.to !== undefined && units.to !== null ? units.to : 'second'; // For 'day' unit, use the default modulus
          // Adjust modulus depending on the unit

          if (this._initialUnit === 'hour') {
            // Cancelation modulus
            this._dayModulus = function (secondsLeft) {
              return 1;
            }; // Neutral modulus


            this._hourModulus = function (secondsLeft) {
              return secondsLeft;
            };
          }

          if (this._initialUnit === 'minute') {
            // Cancelation modulus
            this._dayModulus = function (secondsLeft) {
              return 1;
            };

            this._hourModulus = function (secondsLeft) {
              return 1;
            }; // Neutral modulus


            this._minuteModulus = function (secondsLeft) {
              return secondsLeft;
            };
          }

          if (this._initialUnit === 'second') {
            // Cancelation modulus
            this._dayModulus = function (secondsLeft) {
              return 1;
            };

            this._hourModulus = function (secondsLeft) {
              return 1;
            };

            this._minuteModulus = function (secondsLeft) {
              return 1;
            }; // Neutral modulus


            this._secondModulus = function (secondsLeft) {
              return secondsLeft;
            };
          }
        }
      }]);

      return CountdownTimerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], CountdownTimerComponent.prototype, "end", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], CountdownTimerComponent.prototype, "units", null);
    CountdownTimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-countdown-timer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./countdown-timer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown-timer/countdown-timer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./countdown-timer.component.scss */
      "./src/app/components/countdown-timer/countdown-timer.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CountdownTimerComponent);
    /***/
  },

  /***/
  "./src/app/components/counter-input/counter-input.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/counter-input/counter-input.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCounterInputCounterInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-counter-input {\n  --counter-background: #000;\n  --counter-color: #FFF;\n  --counter-border-color: #000;\n  --counter-border-radius-outer: 50%;\n  --counter-border-radius-inner: 50%;\n  --counter-size: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\napp-counter-input ion-button.counter-icon {\n  --background: var(--counter-background);\n  --color: var(--counter-color);\n  --color-activated: var(--counter-color);\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--counter-border-color);\n  --box-shadow: none;\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n  --padding-bottom: 3px;\n  --padding-end: 3px;\n  --padding-start: 3px;\n  --padding-top: 3px;\n  margin: 0px;\n}\napp-counter-input .counter-value {\n  color: var(--counter-color);\n  margin: 0px 10px;\n}\napp-counter-input:not([basic]) .button-outer {\n  width: var(--counter-size);\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  padding-bottom: 100%;\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper .counter-icon {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: auto;\n  width: 100%;\n}\napp-counter-input[basic] {\n  --counter-border-radius-outer: 12px;\n  --counter-border-radius-inner: 0px;\n}\napp-counter-input[basic] .counter-value {\n  display: none;\n}\napp-counter-input[basic] .button-outer:first-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n}\napp-counter-input[basic] .button-outer:last-child {\n  margin-left: -1px;\n}\napp-counter-input[basic] .button-outer:last-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-inner) var(--counter-border-radius-outer) var(--counter-border-radius-outer) var(--counter-border-radius-inner);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyLWlucHV0L0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvdW50ZXItaW5wdXRcXGNvdW50ZXItaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRlci1pbnB1dC9jb3VudGVyLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNBRjtBREVFO0VBQ0UsdUNBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0SkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQ0RKO0FESUU7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FDRko7QURPSTtFQUNFLDBCQUFBO0FDTE47QURPTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDTFI7QURPUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTFY7QURXRTtFQUNFLG1DQUFBO0VBQ0Esa0NBQUE7QUNUSjtBRFdJO0VBQ0UsYUFBQTtBQ1ROO0FEY1E7RUFDRSw0SkFBQTtBQ1pWO0FEZ0JNO0VBRUUsaUJBQUE7QUNmUjtBRGlCUTtFQUNFLDRKQUFBO0FDZlYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdW50ZXItaW5wdXQvY291bnRlci1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1jb3VudGVyLWlucHV0IHtcclxuICAtLWNvdW50ZXItYmFja2dyb3VuZDogIzAwMDtcclxuICAtLWNvdW50ZXItY29sb3I6ICNGRkY7XHJcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogIzAwMDtcclxuICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcjogNTAlO1xyXG4gIC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyOiA1MCU7XHJcbiAgLS1jb3VudGVyLXNpemU6IDMwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvdW50ZXItYmFja2dyb3VuZCk7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tY291bnRlci1ib3JkZXItY29sb3IpO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAzcHg7XHJcblxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuY291bnRlci12YWx1ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tY291bnRlci1jb2xvcik7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJjpub3QoW2Jhc2ljXSkge1xyXG4gICAgLy8gRm9yY2UgZWFjaCBjb3VudGVyIGJ1dHRvbiB0byBoYXZlIGEgMToxIGFzcGVjdCByYXRpb1xyXG4gICAgLmJ1dHRvbi1vdXRlciB7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS1jb3VudGVyLXNpemUpO1xyXG5cclxuICAgICAgLmJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuXHJcbiAgICAgICAgLmNvdW50ZXItaWNvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJltiYXNpY10ge1xyXG4gICAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXI6IDEycHg7XHJcbiAgICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcjogMHB4O1xyXG5cclxuICAgIC5jb3VudGVyLXZhbHVlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLW91dGVyIHtcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24ge1xyXG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAvLyBUbyBhdm9pZCBkb3VibGUgYm9yZGVyXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24uY291bnRlci1pY29uIHtcclxuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiYXBwLWNvdW50ZXItaW5wdXQge1xuICAtLWNvdW50ZXItYmFja2dyb3VuZDogIzAwMDtcbiAgLS1jb3VudGVyLWNvbG9yOiAjRkZGO1xuICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiAjMDAwO1xuICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcjogNTAlO1xuICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcjogNTAlO1xuICAtLWNvdW50ZXItc2l6ZTogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbmFwcC1jb3VudGVyLWlucHV0IGlvbi1idXR0b24uY291bnRlci1pY29uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb3VudGVyLWJhY2tncm91bmQpO1xuICAtLWNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLWNvdW50ZXItY29sb3IpO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb3VudGVyLWJvcmRlci1jb2xvcik7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpO1xuICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5hcHAtY291bnRlci1pbnB1dCAuY291bnRlci12YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cbmFwcC1jb3VudGVyLWlucHV0Om5vdChbYmFzaWNdKSAuYnV0dG9uLW91dGVyIHtcbiAgd2lkdGg6IHZhcigtLWNvdW50ZXItc2l6ZSk7XG59XG5hcHAtY291bnRlci1pbnB1dDpub3QoW2Jhc2ljXSkgLmJ1dHRvbi1vdXRlciAuYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG59XG5hcHAtY291bnRlci1pbnB1dDpub3QoW2Jhc2ljXSkgLmJ1dHRvbi1vdXRlciAuYnV0dG9uLXdyYXBwZXIgLmNvdW50ZXItaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5hcHAtY291bnRlci1pbnB1dFtiYXNpY10ge1xuICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcjogMTJweDtcbiAgLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXI6IDBweDtcbn1cbmFwcC1jb3VudGVyLWlucHV0W2Jhc2ljXSAuY291bnRlci12YWx1ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5hcHAtY291bnRlci1pbnB1dFtiYXNpY10gLmJ1dHRvbi1vdXRlcjpmaXJzdC1jaGlsZCBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKTtcbn1cbmFwcC1jb3VudGVyLWlucHV0W2Jhc2ljXSAuYnV0dG9uLW91dGVyOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbmFwcC1jb3VudGVyLWlucHV0W2Jhc2ljXSAuYnV0dG9uLW91dGVyOmxhc3QtY2hpbGQgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24ge1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcik7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/counter-input/counter-input.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/counter-input/counter-input.component.ts ***!
    \*********************************************************************/

  /*! exports provided: counterRangeValidator, CounterInputComponent */

  /***/
  function srcAppComponentsCounterInputCounterInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "counterRangeValidator", function () {
      return counterRangeValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterInputComponent", function () {
      return CounterInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CounterInputComponent_1;

    function counterRangeValidator(minValue, maxValue) {
      return function (c) {
        var err = {
          rangeError: {
            given: c.value,
            min: minValue || 0,
            max: maxValue || 10
          }
        };
        return c.value > +maxValue || c.value < +minValue ? err : null;
      };
    }

    var CounterInputComponent = CounterInputComponent_1 =
    /*#__PURE__*/
    function () {
      function CounterInputComponent() {
        _classCallCheck(this, CounterInputComponent);

        // tslint:disable-next-line:no-input-rename
        this._counterValue = 0;

        this.propagateChange = function () {}; // Noop function


        this.validateFn = function () {}; // Noop function

      }

      _createClass(CounterInputComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(inputs) {
          if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = counterRangeValidator(this.counterRangeMin, this.counterRangeMax);
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (value) {
            this.counterValue = value;
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.propagateChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched() {}
      }, {
        key: "increase",
        value: function increase() {
          this.counterValue++;
        }
      }, {
        key: "decrease",
        value: function decrease() {
          this.counterValue--;
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validateFn(c);
        }
      }, {
        key: "counterValue",
        get: function get() {
          return this._counterValue;
        },
        set: function set(val) {
          this._counterValue = val;
          this.propagateChange(val);
        }
      }]);

      return CounterInputComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('counterValue'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CounterInputComponent.prototype, "_counterValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('max'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CounterInputComponent.prototype, "counterRangeMax", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('min'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CounterInputComponent.prototype, "counterRangeMin", void 0);
    CounterInputComponent = CounterInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-counter-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./counter-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter-input/counter-input.component.html")).default,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CounterInputComponent_1;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CounterInputComponent_1;
        }),
        multi: true
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./counter-input.component.scss */
      "./src/app/components/counter-input/counter-input.component.scss")).default]
    })], CounterInputComponent);
    /***/
  },

  /***/
  "./src/app/components/rating-input/rating-input.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/rating-input/rating-input.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRatingInputRatingInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-rating-input {\n  --rating-background: transparent;\n  --rating-color: #000;\n  --rating-size: 32px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\napp-rating-input ion-button.rating-icon {\n  --background: var(--rating-background);\n  --color: var(--rating-color);\n  --color-activated: var(--rating-color);\n  --box-shadow: none;\n  --padding-bottom: 0px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 0px;\n  margin: 0px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: var(--rating-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYXRpbmctaW5wdXQvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcY29tcG9uZW50c1xccmF0aW5nLWlucHV0XFxyYXRpbmctaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nLWlucHV0L3JhdGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDQUY7QURFQztFQUNHLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0YsbUJBQUE7VUFBQSxPQUFBO0VBQ0MseUJBQUE7QUNESCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nLWlucHV0L3JhdGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1yYXRpbmctaW5wdXQge1xyXG4gIC0tcmF0aW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tcmF0aW5nLWNvbG9yOiAjMDAwO1xyXG4gIC0tcmF0aW5nLXNpemU6IDMycHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuXHRpb24tYnV0dG9uLnJhdGluZy1pY29uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcmF0aW5nLWJhY2tncm91bmQpO1xyXG4gICAgLS1jb2xvcjogdmFyKC0tcmF0aW5nLWNvbG9yKTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1yYXRpbmctY29sb3IpO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcblxyXG4gICAgbWFyZ2luOiAwcHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdCAgd2lkdGg6IHZhcigtLXJhdGluZy1zaXplKTtcclxuXHR9XHJcbn1cclxuIiwiYXBwLXJhdGluZy1pbnB1dCB7XG4gIC0tcmF0aW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXJhdGluZy1jb2xvcjogIzAwMDtcbiAgLS1yYXRpbmctc2l6ZTogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbmFwcC1yYXRpbmctaW5wdXQgaW9uLWJ1dHRvbi5yYXRpbmctaWNvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcmF0aW5nLWJhY2tncm91bmQpO1xuICAtLWNvbG9yOiB2YXIoLS1yYXRpbmctY29sb3IpO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0tcmF0aW5nLWNvbG9yKTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiB2YXIoLS1yYXRpbmctc2l6ZSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/rating-input/rating-input.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/rating-input/rating-input.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RatingInputComponent */

  /***/
  function srcAppComponentsRatingInputRatingInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingInputComponent", function () {
      return RatingInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var RatingInputComponent_1;

    var RatingInputComponent = RatingInputComponent_1 =
    /*#__PURE__*/
    function () {
      function RatingInputComponent() {
        _classCallCheck(this, RatingInputComponent);

        this.max = 5;
        this.readOnly = false;

        this.propagateChange = function () {}; // Noop function

      }

      _createClass(RatingInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var states = [];

          for (var i = 0; i < this.max; i++) {
            if (this.innerValue > i && this.innerValue < i + 1) {
              states[i] = 2;
            } else if (this.innerValue > i) {
              states[i] = 1;
            } else {
              states[i] = 0;
            }
          }

          this.range = states;
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (value !== this.innerValue) {
            this.innerValue = value;
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.propagateChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched() {}
      }, {
        key: "rate",
        value: function rate(amount) {
          if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
            this.value = amount;
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this.innerValue;
        },
        set: function set(val) {
          if (val !== this.innerValue) {
            this.innerValue = val;
            this.propagateChange(val);
          }
        }
      }]);

      return RatingInputComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RatingInputComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RatingInputComponent.prototype, "readOnly", void 0);
    RatingInputComponent = RatingInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rating-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rating-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rating-input/rating-input.component.html")).default,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return RatingInputComponent_1;
        }),
        multi: true
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rating-input.component.scss */
      "./src/app/components/rating-input/rating-input.component.scss")).default]
    })], RatingInputComponent);
    /***/
  },

  /***/
  "./src/app/components/show-hide-password/show-hide-password.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/show-hide-password/show-hide-password.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShowHidePasswordShowHidePasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .type-toggle {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\n:host .type-toggle .show-option,\n:host .type-toggle .hide-option {\n  font-size: 1.4rem;\n  display: block;\n}\n:host .type-toggle .show-option:not(ion-icon),\n:host .type-toggle .hide-option:not(ion-icon) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hvdy1oaWRlLXBhc3N3b3JkXFxzaG93LWhpZGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hvdy1oaWRlLXBhc3N3b3JkL3Nob3ctaGlkZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLDZCQUFBO1VBQUEsNEJBQUE7QUNDSjtBRENJOztFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NOO0FERU07O0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3ctaGlkZS1wYXNzd29yZC9zaG93LWhpZGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAudHlwZS10b2dnbGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNXJlbTtcclxuXHJcbiAgICAuc2hvdy1vcHRpb24sXHJcbiAgICAuaGlkZS1vcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAvLyBJbiBjYXNlIHlvdSB3YW50IHRvIHVzZSB0ZXh0IGluc3RlYWQgb2YgaWNvbnNcclxuICAgICAgJjpub3QoaW9uLWljb24pIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLnR5cGUtdG9nZ2xlIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNXJlbTtcbn1cbjpob3N0IC50eXBlLXRvZ2dsZSAuc2hvdy1vcHRpb24sXG46aG9zdCAudHlwZS10b2dnbGUgLmhpZGUtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLnR5cGUtdG9nZ2xlIC5zaG93LW9wdGlvbjpub3QoaW9uLWljb24pLFxuOmhvc3QgLnR5cGUtdG9nZ2xlIC5oaWRlLW9wdGlvbjpub3QoaW9uLWljb24pIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/show-hide-password/show-hide-password.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/show-hide-password/show-hide-password.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ShowHidePasswordComponent */

  /***/
  function srcAppComponentsShowHidePasswordShowHidePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowHidePasswordComponent", function () {
      return ShowHidePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ShowHidePasswordComponent =
    /*#__PURE__*/
    function () {
      function ShowHidePasswordComponent() {
        _classCallCheck(this, ShowHidePasswordComponent);

        this.show = false;
      }

      _createClass(ShowHidePasswordComponent, [{
        key: "toggleShow",
        value: function toggleShow() {
          this.show = !this.show;

          if (this.show) {
            this.input.type = 'text';
          } else {
            this.input.type = 'password';
          }
        }
      }]);

      return ShowHidePasswordComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"])], ShowHidePasswordComponent.prototype, "input", void 0);
    ShowHidePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-hide-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./show-hide-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-hide-password/show-hide-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./show-hide-password.component.scss */
      "./src/app/components/show-hide-password/show-hide-password.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ShowHidePasswordComponent);
    /***/
  },

  /***/
  "./src/app/imagemodal/imagemodal.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/imagemodal/imagemodal.module.ts ***!
    \*************************************************/

  /*! exports provided: ImagemodalPageModule */

  /***/
  function srcAppImagemodalImagemodalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagemodalPageModule", function () {
      return ImagemodalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _imagemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./imagemodal.page */
    "./src/app/imagemodal/imagemodal.page.ts");

    var routes = [{
      path: '',
      component: _imagemodal_page__WEBPACK_IMPORTED_MODULE_6__["ImagemodalPage"]
    }];

    var ImagemodalPageModule = function ImagemodalPageModule() {
      _classCallCheck(this, ImagemodalPageModule);
    };

    ImagemodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_imagemodal_page__WEBPACK_IMPORTED_MODULE_6__["ImagemodalPage"]]
    })], ImagemodalPageModule);
    /***/
  },

  /***/
  "./src/app/imagemodal/imagemodal.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/imagemodal/imagemodal.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppImagemodalImagemodalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scroll-content {\n  background-image: none;\n}\n\n.content {\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.7) !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.content img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2Vtb2RhbC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxpbWFnZW1vZGFsXFxpbWFnZW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW1hZ2Vtb2RhbC9pbWFnZW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENJO0VBQ0UsV0FBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2Vtb2RhbC9pbWFnZW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfSIsIi5zY3JvbGwtY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNykgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/imagemodal/imagemodal.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/imagemodal/imagemodal.page.ts ***!
    \***********************************************/

  /*! exports provided: ImagemodalPage */

  /***/
  function srcAppImagemodalImagemodalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagemodalPage", function () {
      return ImagemodalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ImagemodalPage =
    /*#__PURE__*/
    function () {
      function ImagemodalPage(modal) {
        _classCallCheck(this, ImagemodalPage);

        this.modal = modal;
      }

      _createClass(ImagemodalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.img);
        }
      }, {
        key: "close",
        value: function close() {
          this.modal.dismiss();
        }
      }]);

      return ImagemodalPage;
    }();

    ImagemodalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ImagemodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-imagemodal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./imagemodal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/imagemodal/imagemodal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./imagemodal.page.scss */
      "./src/app/imagemodal/imagemodal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ImagemodalPage);
    /***/
  },

  /***/
  "./src/app/pipes/conversation.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/conversation.ts ***!
    \***************************************/

  /*! exports provided: ConversationPipe */

  /***/
  function srcAppPipesConversationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConversationPipe", function () {
      return ConversationPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConversationPipe =
    /*#__PURE__*/
    function () {
      function ConversationPipe() {
        _classCallCheck(this, ConversationPipe);
      }

      _createClass(ConversationPipe, [{
        key: "transform",
        // ConversationPipe
        // Filter conversation based on friend's name or username.
        value: function transform(conversations, search) {
          if (!conversations) {
            return;
          } else if (!search) {
            return conversations;
          } else {
            var term = search.toLowerCase();
            return conversations.filter(function (conversation) {
              return conversation.friend.name.toLowerCase().indexOf(term) > -1 || conversation.friend.username.toLowerCase().indexOf(term) > -1;
            });
          }
        }
      }]);

      return ConversationPipe;
    }();

    ConversationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'conversationFilter'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ConversationPipe);
    /***/
  },

  /***/
  "./src/app/pipes/date.ts":
  /*!*******************************!*\
    !*** ./src/app/pipes/date.ts ***!
    \*******************************/

  /*! exports provided: DateFormatPipe */

  /***/
  function srcAppPipesDateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function () {
      return DateFormatPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var DateFormatPipe =
    /*#__PURE__*/
    function () {
      function DateFormatPipe() {
        _classCallCheck(this, DateFormatPipe);
      }

      _createClass(DateFormatPipe, [{
        key: "transform",
        value: function transform(date, args) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(new Date(date)).fromNow();
        }
      }]);

      return DateFormatPipe;
    }();

    DateFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'DateFormat'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DateFormatPipe);
    /***/
  },

  /***/
  "./src/app/pipes/friend.ts":
  /*!*********************************!*\
    !*** ./src/app/pipes/friend.ts ***!
    \*********************************/

  /*! exports provided: FriendPipe */

  /***/
  function srcAppPipesFriendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendPipe", function () {
      return FriendPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FriendPipe =
    /*#__PURE__*/
    function () {
      function FriendPipe() {
        _classCallCheck(this, FriendPipe);
      }

      _createClass(FriendPipe, [{
        key: "transform",
        // FriendPipe
        // Filter friend by name or username.
        value: function transform(friends, search) {
          if (!friends) {
            return;
          } else if (!search) {
            return friends;
          } else {
            var term = search.toLowerCase();
            return friends.filter(function (friend) {
              return friend.name.toLowerCase().indexOf(term) > -1 || friend.username.toLowerCase().indexOf(term) > -1;
            });
          }
        }
      }]);

      return FriendPipe;
    }();

    FriendPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'friendFilter'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FriendPipe);
    /***/
  },

  /***/
  "./src/app/pipes/group.ts":
  /*!********************************!*\
    !*** ./src/app/pipes/group.ts ***!
    \********************************/

  /*! exports provided: GroupPipe */

  /***/
  function srcAppPipesGroupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupPipe", function () {
      return GroupPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GroupPipe =
    /*#__PURE__*/
    function () {
      function GroupPipe() {
        _classCallCheck(this, GroupPipe);
      }

      _createClass(GroupPipe, [{
        key: "transform",
        // GroupPipe
        // Filter group by name
        value: function transform(groups, search) {
          if (!groups) {
            return;
          } else if (!search) {
            return groups;
          } else {
            var term = search.toLowerCase();
            return groups.filter(function (group) {
              return group.name.toLowerCase().indexOf(term) > -1;
            });
          }
        }
      }]);

      return GroupPipe;
    }();

    GroupPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'groupFilter'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], GroupPipe);
    /***/
  },

  /***/
  "./src/app/pipes/poll.ts":
  /*!*******************************!*\
    !*** ./src/app/pipes/poll.ts ***!
    \*******************************/

  /*! exports provided: PollPipe */

  /***/
  function srcAppPipesPollTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PollPipe", function () {
      return PollPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PollPipe =
    /*#__PURE__*/
    function () {
      function PollPipe() {
        _classCallCheck(this, PollPipe);
      }

      _createClass(PollPipe, [{
        key: "transform",
        // PollPipe
        // Filter poll by name
        value: function transform(polls, search) {
          if (!polls) {
            return;
          } else if (!search) {
            return polls;
          } else {
            var term = search.toLowerCase();
            return polls.filter(function (poll) {
              return poll.description.toLowerCase().indexOf(term) > -1;
            });
          }
        }
      }]);

      return PollPipe;
    }();

    PollPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'pollFilter'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PollPipe);
    /***/
  },

  /***/
  "./src/app/pipes/resource.ts":
  /*!***********************************!*\
    !*** ./src/app/pipes/resource.ts ***!
    \***********************************/

  /*! exports provided: ResourcePipe */

  /***/
  function srcAppPipesResourceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcePipe", function () {
      return ResourcePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ResourcePipe =
    /*#__PURE__*/
    function () {
      function ResourcePipe() {
        _classCallCheck(this, ResourcePipe);
      }

      _createClass(ResourcePipe, [{
        key: "transform",
        // ResourcePipe
        // Filter resource by name
        value: function transform(resources, search) {
          if (!resources) {
            return;
          } else if (!search) {
            return resources;
          } else {
            var term = search.toLowerCase();
            return resources.filter(function (resource) {
              return resource.name.toLowerCase().indexOf(term) > -1;
            });
          }
        }
      }]);

      return ResourcePipe;
    }();

    ResourcePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'resourceFilter'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ResourcePipe);
    /***/
  },

  /***/
  "./src/app/pipes/reverse.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/reverse.pipe.ts ***!
    \***************************************/

  /*! exports provided: ReversePipe */

  /***/
  function srcAppPipesReversePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReversePipe", function () {
      return ReversePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReversePipe =
    /*#__PURE__*/
    function () {
      function ReversePipe() {
        _classCallCheck(this, ReversePipe);
      }

      _createClass(ReversePipe, [{
        key: "transform",
        value: function transform(value) {
          return value.slice().reverse();
        }
      }]);

      return ReversePipe;
    }();

    ReversePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'reverse'
    })], ReversePipe);
    /***/
  },

  /***/
  "./src/app/pipes/search.ts":
  /*!*********************************!*\
    !*** ./src/app/pipes/search.ts ***!
    \*********************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppPipesSearchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchPipe =
    /*#__PURE__*/
    function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        // SearchPipe
        // Filter user search results for name or username excluding the excludedIds.
        value: function transform(accounts, data) {
          var excludedIds = data[0];
          var term = data[1];

          if (!accounts) {
            return;
          } else if (!excludedIds) {
            return accounts;
          } else if (excludedIds && !term) {
            return accounts.filter(function (account) {
              return excludedIds.indexOf(account.userId) == -1;
            });
          } else {
            term = term.toLowerCase();
            return accounts.filter(function (account) {
              return excludedIds.indexOf(account.userId) == -1 && (account.name.toLowerCase().indexOf(term) > -1 || account.username.toLowerCase().indexOf(term) > -1);
            });
          }
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'searchFilter'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SearchPipe);
    /***/
  },

  /***/
  "./src/app/popover/popover.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/popover/popover.module.ts ***!
    \*******************************************/

  /*! exports provided: PopoverPageModule */

  /***/
  function srcAppPopoverPopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function () {
      return PopoverPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./popover.page */
    "./src/app/popover/popover.page.ts");

    var routes = [{
      path: '',
      component: _popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]
    }];

    var PopoverPageModule = function PopoverPageModule() {
      _classCallCheck(this, PopoverPageModule);
    };

    PopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]]
    })], PopoverPageModule);
    /***/
  },

  /***/
  "./src/app/popover/popover.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/popover/popover.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPopoverPopoverPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content {\n  width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9wb3Zlci9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxwb3BvdmVyXFxwb3BvdmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9wb3Zlci9wb3BvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICB3aWR0aDogMTBweDtcclxufSIsIi5jb250ZW50IHtcbiAgd2lkdGg6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/popover/popover.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/popover/popover.page.ts ***!
    \*****************************************/

  /*! exports provided: PopoverPage */

  /***/
  function srcAppPopoverPopoverPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
      return PopoverPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PopoverPage =
    /*#__PURE__*/
    function () {
      function PopoverPage(route, popCtrl) {
        _classCallCheck(this, PopoverPage);

        this.route = route;
        this.popCtrl = popCtrl;
        this.message = this.route.snapshot.params.message;
        this.groupId = this.route.snapshot.params.groupId;
      }

      _createClass(PopoverPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          //this.app.getRootNav().push(NewResourcePage, { message: this.message, groupId: this.groupId });
          this.popCtrl.dismiss();
        }
      }]);

      return PopoverPage;
    }();

    PopoverPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popover.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/popover/popover.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popover.page.scss */
      "./src/app/popover/popover.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], PopoverPage);
    /***/
  },

  /***/
  "./src/app/reaction-list-modal/reaction-list-modal.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/reaction-list-modal/reaction-list-modal.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ReactionListModalPageModule */

  /***/
  function srcAppReactionListModalReactionListModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactionListModalPageModule", function () {
      return ReactionListModalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reaction-list-modal.page */
    "./src/app/reaction-list-modal/reaction-list-modal.page.ts");

    var routes = [{
      path: '',
      component: _reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReactionListModalPage"]
    }];

    var ReactionListModalPageModule = function ReactionListModalPageModule() {
      _classCallCheck(this, ReactionListModalPageModule);
    };

    ReactionListModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReactionListModalPage"]]
    })], ReactionListModalPageModule);
    /***/
  },

  /***/
  "./src/app/reaction-list-modal/reaction-list-modal.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/reaction-list-modal/reaction-list-modal.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReactionListModalReactionListModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-highlighted-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n  height: 20px;\n  float: right;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhY3Rpb24tbGlzdC1tb2RhbC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxyZWFjdGlvbi1saXN0LW1vZGFsXFxyZWFjdGlvbi1saXN0LW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVhY3Rpb24tbGlzdC1tb2RhbC9yZWFjdGlvbi1saXN0LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNDQUFBO0VBQ0EsOENBQUE7RUFFQSw4REFBQTtBQ0RKOztBRE1JO0VBQ0UsZ0RBQUE7QUNITjs7QURPRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0aW9uLWxpc3QtbW9kYWwvcmVhY3Rpb24tbGlzdC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gICAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gIFxyXG4gICAgLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgfVxyXG4udGl0bGUge1xyXG5cclxufSIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQpO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/reaction-list-modal/reaction-list-modal.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/reaction-list-modal/reaction-list-modal.page.ts ***!
    \*****************************************************************/

  /*! exports provided: ReactionListModalPage */

  /***/
  function srcAppReactionListModalReactionListModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactionListModalPage", function () {
      return ReactionListModalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ReactionListModalPage =
    /*#__PURE__*/
    function () {
      function ReactionListModalPage(modal, navParam) {
        _classCallCheck(this, ReactionListModalPage);

        this.modal = modal;
        this.navParam = navParam;
        this.items = [];
        var r = this.navParam.data.reactions;
        this.items = Object.keys(r).map(function (e) {
          return r[e];
        });
      }

      _createClass(ReactionListModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modal.dismiss();
        }
      }]);

      return ReactionListModalPage;
    }();

    ReactionListModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    ReactionListModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reaction-list-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reaction-list-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reaction-list-modal/reaction-list-modal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reaction-list-modal.page.scss */
      "./src/app/reaction-list-modal/reaction-list-modal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], ReactionListModalPage);
    /***/
  },

  /***/
  "./src/app/review-modal/review-modal.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/review-modal/review-modal.module.ts ***!
    \*****************************************************/

  /*! exports provided: ReviewModalPageModule */

  /***/
  function srcAppReviewModalReviewModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewModalPageModule", function () {
      return ReviewModalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _review_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./review-modal.page */
    "./src/app/review-modal/review-modal.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _review_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReviewModalPage"]
    }];

    var ReviewModalPageModule = function ReviewModalPageModule() {
      _classCallCheck(this, ReviewModalPageModule);
    };

    ReviewModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_review_modal_page__WEBPACK_IMPORTED_MODULE_6__["ReviewModalPage"]]
    })], ReviewModalPageModule);
    /***/
  },

  /***/
  "./src/app/review-modal/review-modal.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/review-modal/review-modal.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReviewModalReviewModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n  --page-color-radio-items-per-row: 5;\n  --page-color-radio-gutter: 2%;\n  --page-color-radio-width: calc((100% - (2 * var(--page-color-radio-gutter) * var(--page-color-radio-items-per-row))) / var(--page-color-radio-items-per-row));\n}\n\n.filters-content {\n  --background: var(--page-background);\n}\n\n.filters-content ion-item-divider {\n  --background: var(--page-background);\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.filters-content .range-list {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .range-list .range-item {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content .range-list .range-item .range-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-content .range-list .range-item .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .range-list .range-item .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .checkbox-list .checkbox-item .checkbox-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .checkbox-list .checkbox-item ion-checkbox {\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.filters-content .radio-list .radio-group {\n  display: block;\n}\n\n.filters-content .radio-list .radio-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .radio-list .radio-item .radio-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .radio-list .radio-item ion-radio {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n}\n\n.filters-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-lightest);\n  --checkbox-tag-background: var(--ion-color-light-shade);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .radio-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  background-color: var(--page-background);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  --radio-tag-color: #000;\n  --radio-tag-background: #FFF;\n  --radio-tag-active-color: #FFF;\n  --radio-tag-active-background: #000;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --min-height: 38px;\n  --border-radius: 8px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--radio-tag-color);\n  --ion-item-background: var(--radio-tag-background);\n  --ion-item-color: var(--radio-tag-color);\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.filters-content .radio-tags .radio-tag.item-radio-checked {\n  --ion-item-background: var(--radio-tag-active-background);\n  --ion-item-color: var(--radio-tag-active-color);\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .radio-tags .radio-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .radio-tags .radio-tag ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --radio-tag-color: var(--ion-color-secondary);\n  --radio-tag-background: var(--ion-color-lightest);\n  --radio-tag-active-color: var(--ion-color-lightest);\n  --radio-tag-active-background: var(--ion-color-secondary);\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .toggle-list .toggle-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .toggle-list .toggle-item .toggle-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .toggle-list .toggle-item ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.filters-content .counter-list .counter-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .counter-list .counter-item .counter-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .counter-list .counter-item .counter-value {\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n\n.filters-content .counter-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-secondary);\n  --counter-border-color: var(--ion-color-secondary);\n}\n\n.filters-content .ratings-list .rating-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .ratings-list .rating-item .rating-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .ratings-list .rating-item app-rating-input {\n  --rating-color: var(--ion-color-secondary);\n}\n\n.filters-content .color-radio-group {\n  padding: var(--page-margin) calc(var(--page-margin) - var(--page-color-radio-gutter));\n  background-color: var(--ion-color-lightest);\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: 255,255,255;\n  --color-radio-border-radius: 50%;\n}\n\n.filters-content .color-radio-group .color-radio {\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: var(--ion-color-darkest-rgb);\n  --color-radio-border-radius: 40%;\n  -webkit-box-flex: 0;\n          flex: 0 0 var(--page-color-radio-width);\n  max-width: var(--page-color-radio-width);\n  margin: var(--page-color-radio-gutter);\n}\n\n.filters-content .color-radio-group .color-radio .color-radio-inner-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.filters-content .color-radio-group ion-item.color-radio {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --border-width: 4px;\n  --border-style: solid;\n  --border-color: var(--color-radio-background);\n  --background: var(--color-radio-background);\n  --inner-padding-end: 0px;\n  --inner-border-width: 0px;\n  --min-height: initial;\n  --border-radius: var(--color-radio-border-radius);\n  border-radius: var(--color-radio-border-radius);\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked {\n  --border-color: rgba(var(--color-radio-active-border-rgb), .3) !important;\n  --box-shadow: none;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio .color-label {\n  --color: var(--color-radio-color);\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n.filters-content .color-radio-group ion-item.color-radio ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n:host-context(.md) .ratings-list,\n:host-context(.md) .counter-list,\n:host-context(.md) .toggle-list,\n:host-context(.md) .radio-list,\n:host-context(.md) .checkbox-list,\n:host-context(.md) .range-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n:host-context(.ios) .radio-tags,\n:host-context(.ios) .checkbox-tags {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3LW1vZGFsL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXHJldmlldy1tb2RhbFxccmV2aWV3LW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmV2aWV3LW1vZGFsL3Jldmlldy1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jldmlldy1tb2RhbC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxjaGVja2JveC10YWcuc2NzcyIsInNyYy9hcHAvcmV2aWV3LW1vZGFsL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFx0aGVtZVxcbWl4aW5zXFxpbnB1dHNcXHJhZGlvLXRhZy5zY3NzIiwic3JjL2FwcC9yZXZpZXctbW9kYWwvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXHRoZW1lXFxtaXhpbnNcXGlucHV0c1xcY29sb3ItcmFkaW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7RUFFQSx1QkFBQTtFQUVBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSw2SkFBQTtBQ1BGOztBRFdBO0VBQ0Usb0NBQUE7QUNSRjs7QURVQztFQUNDLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFFQSxZQUFBO0FDVEY7O0FEWUU7RUFDRSwyQ0FBQTtBQ1ZKOztBRFlJO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSx1Q0FBQTtVQUFBLHNDQUFBO0VBRUEseURBQUE7QUNaTjs7QURjTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSw0Q0FBQTtBQ1pSOztBRGNRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ1pWOztBRGVRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ2JWOztBRGlCTTtFQUVFLHlDQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pCUjs7QUR1Qkk7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUNyQk47O0FEdUJNO0VBQ0UsZUFBQTtFQUNKLGdCQUFBO0VBQ0EscUJBQUE7RUFDQyw4QkFBQTtBQ3JCTDs7QUR3Qk07RUFDRSx1QkFBQTtVQUFBLHNCQUFBO0FDdEJSOztBRDRCSTtFQUNFLGNBQUE7QUMxQk47O0FENkJJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDM0JOOztBRDZCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUMzQkw7O0FEOEJNO0VBQ0UseUJBQUE7VUFBQSx3QkFBQTtBQzVCUjs7QURpQ0M7RUFDQyx3RkFBQTtFRWxIQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtBRG9GRjs7QUNsRkM7RUFFQyxvQkFBQTtFQUNFLHdCQUFBO0VBQ0YsMEJBQUE7RUFDQSxxREFBQTtFQUNFLDJDQUFBO0FEbUZKOztBQ2pGSTtFQUNELHVCQUFBO0FEbUZIOztBQ2hGRTtFQUNJLDREQUFBO0VBQ0Esa0RBQUE7QURrRk47O0FDL0VJO0VBQ0UsWUFBQTtBRGlGTjs7QUMvRU07RUFFRSxVQUFBO0FEZ0ZSOztBQzVFRTtFQUNDLFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEOEVOOztBQzNFRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUQyRUg7O0FESEk7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDS047O0FEREk7RUFDRSx3Q0FBQTtBQ0dOOztBRERNO0VBQ0UsNkNBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsNERBQUE7QUNHUjs7QURFSTtFQUNBLDJDQUFBO0FDQUo7O0FERU07RUFDRSwrQ0FBQTtFQUNBLHVEQUFBO0VBQ0Esc0RBQUE7RUFDQSw0REFBQTtBQ0FSOztBREtFO0VBQ0UsK0RBQUE7RUFDRix3Q0FBQTtFQUNFLHlCQUFBO1VBQUEsOEJBQUE7RUd2SkYsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7QUZxSkY7O0FFbkpDO0VBRUcsb0JBQUE7RUFDQSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0Usa0JBQUE7RUFFRixvQkFBQTtFQUNFLG1CQUFBO0VBQ0YscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esd0NBQUE7RUFFRSxtQkFBQTtVQUFBLE9BQUE7QUZrSko7O0FFaEpFO0VBQ0kseURBQUE7RUFDQSwrQ0FBQTtBRmtKTjs7QUUvSUk7RUFDRSxZQUFBO0FGaUpOOztBRS9JTTtFQUVFLFVBQUE7QUZnSlI7O0FFNUlJO0VBQ0QsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUY4SU47O0FFM0lFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRjJJSDs7QURqQ0k7RUFDRSw2Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsbURBQUE7RUFDQSx5REFBQTtFQUVBLG9DQUFBO0VBQ0EsbUNBQUE7QUNrQ047O0FEN0JJO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FDK0JOOztBRDdCTTtFQUNFLGVBQUE7RUFDSixnQkFBQTtFQUNBLHFCQUFBO0VBQ0MsOEJBQUE7QUMrQkw7O0FENUJNO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQzhCUjs7QUR4Qkk7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUMwQk47O0FEeEJNO0VBQ0UsZUFBQTtFQUNKLGdCQUFBO0VBQ0EscUJBQUE7RUFDQyw4QkFBQTtBQzBCTDs7QUR2Qk07RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0FDeUJSOztBRHRCTTtFQUNFLGlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxrREFBQTtBQ3dCUjs7QURsQkk7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUNvQk47O0FEbEJNO0VBQ0UsZUFBQTtFQUNKLGdCQUFBO0VBQ0EscUJBQUE7RUFDQyw4QkFBQTtBQ29CTDs7QURqQk07RUFDRSwwQ0FBQTtBQ21CUjs7QURkQztFQUVDLHFGQUFBO0VBQ0EsMkNBQUE7RUkxT0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7QUgwUEY7O0FEaEJJO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZEQUFBO0VBQ0EsZ0NBQUE7RUFFQSxtQkFBQTtVQUFBLHVDQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtBQ2lCTjs7QURmTTtFQUNGLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNpQlI7O0FHeFFDO0VBRUcscUJBQUE7RUFDRixrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUdFLGlEQUFBO0VBRUYsK0NBQUE7QUhzUUY7O0FHcFFFO0VBQ0MseUVBQUE7RUFDQSxrQkFBQTtBSHNRSDs7QUdwUUc7RUFDSyxVQUFBO0FIc1FSOztBR2xRRTtFQUNDLFlBQUE7QUhvUUg7O0FHbFFNO0VBRUUsVUFBQTtBSG1RUjs7QUcvUEk7RUFDRSxpQ0FBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FIZ1FOOztBRzdQSTtFQUNFLFdBQUE7RUFFSCxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUg2UEg7O0FEaERFOzs7Ozs7RUFNRSxnQkFBQTtFQUNBLG1CQUFBO0FDbURKOztBRDlDRTs7RUFFRSwyQ0FBQTtBQ2lESiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1tb2RhbC9yZXZpZXctbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL3JhZGlvLXRhZ1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jb2xvci1yYWRpb1wiO1xyXG5cclxuLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuXHJcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XHJcblxyXG4gIC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93OiA1O1xyXG4gIC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXI6IDIlO1xyXG4gIC0tcGFnZS1jb2xvci1yYWRpby13aWR0aDogY2FsYygoMTAwJSAtICgyICogdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpICogdmFyKC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93KSkpIC8gdmFyKC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93KSk7XHJcbn1cclxuXHJcbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG4uZmlsdGVycy1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblxyXG5cdGlvbi1pdGVtLWRpdmlkZXIge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cdFx0LS1wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHRcdC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHRcdC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cclxuICAucmFuZ2UtbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG5cclxuICAgIC5yYW5nZS1pdGVtIHtcclxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCAgdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG5cclxuICAgICAgLnJhbmdlLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblxyXG4gICAgICAgIC5yYW5nZS12YWx1ZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJhbmdlLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmFuZ2UtY29udHJvbCB7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxyXG4gICAgICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG5cclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaGVja2JveC1saXN0IHtcclxuICAgIC5jaGVja2JveC1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgLmNoZWNrYm94LWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yYWRpby1saXN0IHtcclxuICAgIC5yYWRpby1ncm91cCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5yYWRpby1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgLnJhZGlvLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0LmNoZWNrYm94LXRhZ3Mge1xyXG5cdFx0cGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcclxuXHJcblx0XHRAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcclxuXHJcbiAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xyXG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcclxuICAgICYuc3F1YXJlLWNoZWNrYm94LXRhZ3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAgICAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgJi5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xyXG4gIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG5cclxuICAgICAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbiAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblx0fVxyXG5cclxuICAucmFkaW8tdGFncyB7XHJcbiAgICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuXHRcdEBpbmNsdWRlIHJhZGlvLXRhZygpO1xyXG5cclxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgLnJhZGlvLXRhZyB7XHJcbiAgICAgIC0tcmFkaW8tdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgLS1yYWRpby10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgLS1yYWRpby10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblxyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xyXG4gICAgfVxyXG5cdH1cclxuXHJcbiAgLnRvZ2dsZS1saXN0IHtcclxuICAgIC50b2dnbGUtaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgIC50b2dnbGUtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICBcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi10b2dnbGUge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY291bnRlci1saXN0IHtcclxuICAgIC5jb3VudGVyLWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAuY291bnRlci1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gIFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvdW50ZXItdmFsdWUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwcC1jb3VudGVyLWlucHV0IHtcclxuICAgICAgICAtLWNvdW50ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAtLWNvdW50ZXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJhdGluZ3MtbGlzdCB7XHJcbiAgICAucmF0aW5nLWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAucmF0aW5nLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcHAtcmF0aW5nLWlucHV0IHtcclxuICAgICAgICAtLXJhdGluZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHR9XHJcblxyXG5cdC5jb2xvci1yYWRpby1ncm91cCB7XHJcbiAgICAvLyBBY2NvdW50IGZvciAyJSBzdGFydCBhbmQgZW5kIG1hcmdpbiBzZXQgYnkgLmNvbG9yLXRhZyBjaGlsZHNcclxuXHRcdHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG5cclxuICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgLmNvbG9yLXJhZGlvIHtcclxuICAgICAgLS1jb2xvci1yYWRpby1jb2xvcjogI0ZGRjtcclxuICAgICAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xyXG4gICAgICAtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpO1xyXG4gICAgICAtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXM6IDQwJTtcclxuXHJcbiAgICAgIGZsZXg6IDAgMCB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoKTtcclxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoKTtcclxuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcik7XHJcblxyXG4gICAgICAuY29sb3ItcmFkaW8taW5uZXItd3JhcHBlciB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHRcdFx0fVxyXG4gICAgfVxyXG5cclxuXHRcdEBpbmNsdWRlIGNvbG9yLXJhZGlvKCk7XHJcblx0fVxyXG59XHJcblxyXG46aG9zdC1jb250ZXh0KC5tZCkge1xyXG4gIC5yYXRpbmdzLWxpc3QsXHJcbiAgLmNvdW50ZXItbGlzdCxcclxuICAudG9nZ2xlLWxpc3QsXHJcbiAgLnJhZGlvLWxpc3QsXHJcbiAgLmNoZWNrYm94LWxpc3QsXHJcbiAgLnJhbmdlLWxpc3QgeyBcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QtY29udGV4dCguaW9zKSB7XHJcbiAgLnJhZGlvLXRhZ3MsXHJcbiAgLmNoZWNrYm94LXRhZ3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3c6IDU7XG4gIC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXI6IDIlO1xuICAtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGg6IGNhbGMoKDEwMCUgLSAoMiAqIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSAqIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8taXRlbXMtcGVyLXJvdykpKSAvIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8taXRlbXMtcGVyLXJvdykpO1xufVxuXG4uZmlsdGVycy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmZpbHRlcnMtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0ge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtaGVhZGVyIC5yYW5nZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLnJhbmdlLWl0ZW0gLnJhbmdlLWNvbnRyb2wge1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LWxpc3QgLmNoZWNrYm94LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC1saXN0IC5jaGVja2JveC1pdGVtIC5jaGVja2JveC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC1saXN0IC5jaGVja2JveC1pdGVtIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby1saXN0IC5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tbGlzdCAucmFkaW8taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLWxpc3QgLnJhZGlvLWl0ZW0gLnJhZGlvLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLWxpc3QgLnJhZGlvLWl0ZW0gaW9uLXJhZGlvIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLnJvdW5kZWQtdGFnIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyLjJyZW07XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLnRhZy1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcgLnRhZy1sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzLnNxdWFyZS1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Muc3F1YXJlLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtLXJhZGlvLXRhZy1jb2xvcjogIzAwMDtcbiAgLS1yYWRpby10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1yYWRpby10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAtLW1pbi1oZWlnaHQ6IDM4cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1yYWRpby10YWctY29sb3IpO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWNvbG9yKTtcbiAgZmxleDogMTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZy5pdGVtLXJhZGlvLWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCAudGFnLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcgaW9uLXJhZGlvIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnIHtcbiAgLS1yYWRpby10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnRvZ2dsZS1saXN0IC50b2dnbGUtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnRvZ2dsZS1saXN0IC50b2dnbGUtaXRlbSAudG9nZ2xlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnRvZ2dsZS1saXN0IC50b2dnbGUtaXRlbSBpb24tdG9nZ2xlIHtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb3VudGVyLWxpc3QgLmNvdW50ZXItaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvdW50ZXItbGlzdCAuY291bnRlci1pdGVtIC5jb3VudGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvdW50ZXItbGlzdCAuY291bnRlci1pdGVtIC5jb3VudGVyLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb3VudGVyLWxpc3QgLmNvdW50ZXItaXRlbSBhcHAtY291bnRlci1pbnB1dCB7XG4gIC0tY291bnRlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYXRpbmdzLWxpc3QgLnJhdGluZy1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAucmF0aW5ncy1saXN0IC5yYXRpbmctaXRlbSAucmF0aW5nLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhdGluZ3MtbGlzdCAucmF0aW5nLWl0ZW0gYXBwLXJhdGluZy1pbnB1dCB7XG4gIC0tcmF0aW5nLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jb2xvci1yYWRpby1jb2xvcjogI0ZGRjtcbiAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xuICAtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCAuY29sb3ItcmFkaW8ge1xuICAtLWNvbG9yLXJhZGlvLWNvbG9yOiAjRkZGO1xuICAtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQ6ICNDQ0M7XG4gIC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYik7XG4gIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNDAlO1xuICBmbGV4OiAwIDAgdmFyKC0tcGFnZS1jb2xvci1yYWRpby13aWR0aCk7XG4gIG1heC13aWR0aDogdmFyKC0tcGFnZS1jb2xvci1yYWRpby13aWR0aCk7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1jb2xvci1yYWRpby1ndXR0ZXIpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgLmNvbG9yLXJhZGlvIC5jb2xvci1yYWRpby1pbm5lci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpbyB7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogNHB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAtLW1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2IpLCAuMykgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8uaXRlbS1yYWRpby1jaGVja2VkIC5jb2xvci1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpby5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8uaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCAuY29sb3ItbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8gLmNvbG9yLWxhYmVsIHtcbiAgLS1jb2xvcjogdmFyKC0tY29sb3ItcmFkaW8tY29sb3IpO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvIGlvbi1yYWRpbyB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cblxuOmhvc3QtY29udGV4dCgubWQpIC5yYXRpbmdzLWxpc3QsXG46aG9zdC1jb250ZXh0KC5tZCkgLmNvdW50ZXItbGlzdCxcbjpob3N0LWNvbnRleHQoLm1kKSAudG9nZ2xlLWxpc3QsXG46aG9zdC1jb250ZXh0KC5tZCkgLnJhZGlvLWxpc3QsXG46aG9zdC1jb250ZXh0KC5tZCkgLmNoZWNrYm94LWxpc3QsXG46aG9zdC1jb250ZXh0KC5tZCkgLnJhbmdlLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIC5yYWRpby10YWdzLFxuOmhvc3QtY29udGV4dCguaW9zKSAuY2hlY2tib3gtdGFncyB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59IiwiQG1peGluIGNoZWNrYm94LXRhZygpIHtcclxuICAvLyBEZWZhdWx0IHZhbHVlc1xyXG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xyXG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XHJcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xyXG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG5cclxuXHQuY2hlY2tib3gtdGFnIHtcclxuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcclxuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xyXG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYmFja2dyb3VuZCk7XHJcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xyXG5cclxuICAgICYucm91bmRlZC10YWcge1xyXG5cdFx0XHQtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcclxuXHRcdH1cclxuXHJcblx0XHQmLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcclxuICAgICAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XHJcblx0XHR9XHJcblxyXG4gICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG5cclxuICAgICAgLnRhZy1sYWJlbCB7XHJcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblx0XHQudGFnLWxhYmVsIHtcclxuXHRcdFx0bWFyZ2luOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLWNoZWNrYm94IHtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5jaGVja2JveC1pY29uXHJcblx0XHRcdHdpZHRoOiAwcHg7XHJcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcblx0XHRcdGhlaWdodDogMHB4O1xyXG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAuY2hlY2tib3gtaWNvbiAuY2hlY2tib3gtaW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3JcclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiQG1peGluIHJhZGlvLXRhZygpIHtcclxuICAvLyBEZWZhdWx0IHZhbHVlc1xyXG4gIC0tcmFkaW8tdGFnLWNvbG9yOiAjMDAwO1xyXG4gIC0tcmFkaW8tdGFnLWJhY2tncm91bmQ6ICNGRkY7XHJcbiAgLS1yYWRpby10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xyXG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG5cclxuXHQucmFkaW8tdGFnIHtcclxuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcclxuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiAzOHB4O1xyXG5cclxuXHRcdC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1yYWRpby10YWctY29sb3IpO1xyXG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1yYWRpby10YWctYmFja2dyb3VuZCk7XHJcblx0XHQtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1yYWRpby10YWctY29sb3IpO1xyXG5cclxuICAgIGZsZXg6IDE7XHJcblxyXG5cdFx0Ji5pdGVtLXJhZGlvLWNoZWNrZWQge1xyXG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XHJcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAgIC50YWctbGFiZWwge1xyXG4gICAgICAgIC8vIE92ZXJyaWRlIElvbmljIGRlZmF1bHQgc3R5bGVcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRhZy1sYWJlbCB7XHJcblx0XHRcdG1hcmdpbjogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlvbi1yYWRpbyB7XHJcblx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAucmFkaW8taWNvblxyXG5cdFx0XHR3aWR0aDogMHB4O1xyXG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDBweDtcclxuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLnJhZGlvLWljb24gLnJhZGlvLWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXHJcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIkBtaXhpbiBjb2xvci1yYWRpbygpIHtcclxuICAvLyBEZWZhdWx0IHZhbHVlc1xyXG4gIC0tY29sb3ItcmFkaW8tY29sb3I6ICNGRkY7XHJcbiAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xyXG4gIC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2I6IDI1NSwyNTUsMjU1O1xyXG4gIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuXHRpb24taXRlbS5jb2xvci1yYWRpbyB7XHJcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0LS1wYWRkaW5nLXRvcDogMHB4O1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0XHQtLWJvcmRlci13aWR0aDogNHB4O1xyXG5cdFx0LS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0LS1ib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQpO1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kKTtcclxuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHRcdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XHJcblx0XHQtLW1pbi1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAvLyBCb3RoIHRoZSBpb24taXRlbSBhbmQgaXQncyBzaGFkb3cgZG9tIGlubmVycyBoYXZlIGJvcmRlci1yYWRpdXMgcHJvcGVydGllcyBhcHBsaWVkXHJcbiAgICAvLyBUaGlzIGlzIGZvciB0aGUgLml0ZW0taW5uZXIgLmlucHV0LXdyYXBwZXIgZWxlbWVudCBpbnNpZGUgdGhlIGlvbi1pdGVtIHNoYWRvdyByb290XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgLy8gVGhpcyBpcyBmb3IgdGhlIGlvbi1pdGVtIGVsZW1lbnRcclxuXHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xyXG5cclxuXHRcdCYuaXRlbS1yYWRpby1jaGVja2VkIHtcclxuXHRcdFx0LS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0tY29sb3ItcmFkaW8tYWN0aXZlLWJvcmRlci1yZ2IpLCAuMykgIWltcG9ydGFudDtcclxuXHRcdFx0LS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuXHRcdFx0LmNvbG9yLWxhYmVsIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcclxuXHRcdFx0b3BhY2l0eTogMC41O1xyXG5cclxuICAgICAgLmNvbG9yLWxhYmVsIHtcclxuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cclxuICAgIC5jb2xvci1sYWJlbCB7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWNvbG9yLXJhZGlvLWNvbG9yKTtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAucmFkaW8taWNvblxyXG5cdFx0XHR3aWR0aDogMHB4O1xyXG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDBweDtcclxuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLnJhZGlvLWljb24gLnJhZGlvLWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXHJcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblx0fVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/review-modal/review-modal.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/review-modal/review-modal.page.ts ***!
    \***************************************************/

  /*! exports provided: ReviewModalPage */

  /***/
  function srcAppReviewModalReviewModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewModalPage", function () {
      return ReviewModalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/loading.service */
    "./src/app/services/loading.service.ts");

    var ReviewModalPage =
    /*#__PURE__*/
    function () {
      function ReviewModalPage(modal, route, router, dataProvider, navParam, loadingProvider) {
        _classCallCheck(this, ReviewModalPage);

        this.modal = modal;
        this.route = route;
        this.router = router;
        this.dataProvider = dataProvider;
        this.navParam = navParam;
        this.loadingProvider = loadingProvider;
        this.data = this.navParam.data.data;
        this.title = this.data.title;
        this.ratingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          review: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
          rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
      }

      _createClass(ReviewModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.review = {
            review: '',
            rating: ''
          };
        }
      }, {
        key: "submitReview",
        value: function submitReview() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.loadingProvider.show();
                    this.review.review = this.ratingForm.value['review'];
                    this.review.rating = this.ratingForm.value['rating'];
                    this.loadingProvider.hide();
                    _context.next = 6;
                    return this.modal.dismiss(this.review);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ReviewModalPage;
    }();

    ReviewModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }];
    };

    ReviewModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-review-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/review-modal/review-modal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review-modal.page.scss */
      "./src/app/review-modal/review-modal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]])], ReviewModalPage);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/services/data.service.ts");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(router, dataService) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
        this.dataService = dataService;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route) {
          console.log(route);
          var val = this.dataService.getFromStorageAsync('currentUser');
          console.log('val:' + val);

          if (val === null) {
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./image.service */
    "./src/app/services/image.service.ts"); // import * as firebase from 'firebase';


    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(afAuth, storage, firestore, imageProvider) {
        _classCallCheck(this, DataService);

        //   if (this.afAuth.auth.currentUser === null ) { return; }
        //   this.firestore.doc('accounts/' + this.afAuth.auth.currentUser.uid).snapshotChanges().subscribe((value: any) => {
        //   const addedByUser = {
        //     addedByKey: value.payload.data().userId,
        //     addedByUsername: value.payload.data().username,
        //     addedByImg: value.payload.data().img
        //   };
        this.afAuth = afAuth;
        this.storage = storage;
        this.firestore = firestore;
        this.imageProvider = imageProvider; //   this.addedByUser = addedByUser;
        //  });
      } // Get all users


      _createClass(DataService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.firestore.collection('accounts');
        } // Get user with username

      }, {
        key: "getUserWithUsername",
        value: function getUserWithUsername(username) {
          return this.firestore.collection('accounts').ref.where('username', '==', username);
        } // Get logged in user data

      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.getUser(this.afAuth.auth.currentUser.uid);
        }
      }, {
        key: "getCurrentUserId",
        value: function getCurrentUserId() {
          return this.afAuth.auth.currentUser.uid;
        } // Get user by their userId

      }, {
        key: "getUser",
        value: function getUser(userId) {
          return this.firestore.doc('accounts/' + userId);
        } // Get requests given the userId.

      }, {
        key: "getRequests",
        value: function getRequests(userId) {
          return this.firestore.doc('requests/' + userId); // return this.afdb.object('/requests/' + userId);
        } // Get friend requests given the userId.

      }, {
        key: "getFriendRequests",
        value: function getFriendRequests(userId) {
          return this.firestore.doc('requests/' + userId); // return this.afdb.list('/requests', ref => ref.orderByChild('receiver').equalTo(userId));
        } // Get conversation given the conversationId.

      }, {
        key: "getConversation",
        value: function getConversation(conversationId) {
          return this.firestore.doc('conversations/' + conversationId); // return this.afdb.object('/conversations/' + conversationId);
        } // Get conversations of the current logged in user.

      }, {
        key: "getConversations",
        value: function getConversations() {
          return this.firestore.doc('accounts/' + this.getCurrentUserId()).collection('conversations'); // return this.afdb.list('/accounts/' + this.afAuth.auth.currentUser.uid + '/conversations');
        } // Get messages of the conversation given the Id.

      }, {
        key: "getConversationMessages",
        value: function getConversationMessages(conversationId) {
          return this.firestore.doc('conversations/' + conversationId); // return this.afdb.object('/conversations/' + conversationId + '/messages');
        } // Get messages of the group given the Id.

      }, {
        key: "getGroupMessages",
        value: function getGroupMessages(groupId) {
          return this.firestore.doc('groups/' + groupId).collection('messages'); // return this.afdb.object('/groups/' + groupId + '/messages');
        }
      }, {
        key: "getGroup",
        value: function getGroup(groupId) {
          return this.firestore.doc('groups/' + groupId);
        }
      }, {
        key: "getBlockedLists",
        value: function getBlockedLists() {
          return this.firestore.doc('accounts/' + this.afAuth.auth.currentUser.uid).collection('conversations').ref.where('blocked', '==', true); // return this.afdb.list('/accounts/' + this.afAuth.auth.currentUser.uid +
          //   '/conversations', ref => ref.orderByChild('blocked').equalTo(true));
        } // MY CODE **********************************
        // Get Polls of the logged in user.

      }, {
        key: "getPollDetails",
        value: function getPollDetails(pId) {
          return this.firestore.doc('posts/' + pId);
        } // Get Polls of the logged in user.

      }, {
        key: "getGroupPolls",
        value: function getGroupPolls(groupId) {
          return this.firestore.doc('groups/' + groupId).collection('polls'); // return this.afdb.object('/groups/' + groupId + '/polls/');
        } // Get Resources of the logged in user.

      }, {
        key: "getGroupResources",
        value: function getGroupResources(groupId) {
          return this.firestore.doc('groups/' + groupId).collection('resources'); // return this.afdb.object('/groups/' + groupId + '/resources/');
        } // Get Events of the logged in user.

      }, {
        key: "getGroupEvents",
        value: function getGroupEvents(groupId) {
          return this.firestore.doc('groups/' + groupId).collection('events'); // return this.afdb.object('/groups/' + groupId + '/events/');
        } // Get Resource details of the logged in user.

      }, {
        key: "getResourceDetails",
        value: function getResourceDetails(rId) {
          return this.firestore.doc('posts/' + rId);
        } // Get Post details of the logged in user.

      }, {
        key: "getPostDetails",
        value: function getPostDetails(pId) {
          return this.firestore.doc('posts/' + pId);
        } // Get Events details of the logged in user.

      }, {
        key: "getEventDetails",
        value: function getEventDetails(eId) {
          return this.firestore.doc('posts/' + eId);
        } // Get Polls of the logged in user.

      }, {
        key: "getGroupMembers",
        value: function getGroupMembers(groupId) {
          return this.firestore.doc('groups/' + groupId).collection('members'); // return this.afdb.object('/groups/' + groupId + '/members/');
        }
      }, {
        key: "updatePollMembers",
        value: function updatePollMembers(pollKey, pollData) {
          var _this5 = this;

          this.firestore.doc('posts/' + pollKey).update({
            data: pollData
          }).then(function () {
            var increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(1);

            _this5.firestore.collection('posts').doc(pollKey).update({
              totalPollCount: increment
            });
          });
        }
      }, {
        key: "updatePollComments",
        value: function updatePollComments(pollKey, comments) {
          this.firestore.doc('polls/' + pollKey).update({
            comments: comments
          });
        }
      }, {
        key: "addPoll",
        value: function addPoll(poll) {
          return this.firestore.collection('polls').add(poll);
        } // Get all groups.

      }, {
        key: "getGroups",
        value: function getGroups() {
          return this.firestore.collection('groups');
        }
      }, {
        key: "addReports",
        value: function addReports(userId, post) {
          var report = {
            reportedBy: userId,
            postId: post.key
          };
          return this.firestore.collection('reports').add(report);
        }
      }, {
        key: "addResource",
        value: function addResource(resource) {
          return this.firestore.collection('resources').add(resource);
        }
      }, {
        key: "addPost",
        value: function addPost(post) {
          var _this6 = this;

          return new Promise(function (resolve) {
            _this6.imageProvider.uploadPostPhotos(post.postMedia).then(function (postMediaUrls) {
              post.postMedia = [];

              if (postMediaUrls) {
                post.postMedia = postMediaUrls;
              }

              return resolve(_this6.firestore.collection('posts').add(post));
            });
          });
        }
      }, {
        key: "addEvent",
        value: function addEvent(event) {
          return this.firestore.collection('events').add(event);
        }
      }, {
        key: "updateResourceReviews",
        value: function updateResourceReviews(resourceKey, review) {
          // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
          this.firestore.doc('resources/' + resourceKey).collection('reviews').add(review); // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
        }
      }, {
        key: "addFirstResourceReview",
        value: function addFirstResourceReview(resourceKey, review) {
          var r = [];
          this.firestore.doc('resources/' + resourceKey).update({
            reviews: r
          }); // this.afdb.object('/resources/' + resourceKey).update( {
          //   reviews: r
          // });

          this.updateResourceReviews(resourceKey, review);
        }
      }, {
        key: "updatePostReviews",
        value: function updatePostReviews(postKey, review) {
          var _this7 = this;

          return this.firestore.collection('posts').doc(postKey).collection('reviews').add(review).then(function () {
            var increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(1);

            _this7.firestore.collection('posts').doc(postKey).update({
              totalReviewCount: increment
            });
          });
        }
      }, {
        key: "updateEventReviews",
        value: function updateEventReviews(eventKey, review) {
          this.firestore.doc('events/' + eventKey).collection('reviews').add(review);
        }
      }, {
        key: "addFirstEventReview",
        value: function addFirstEventReview(eventKey, review) {
          var r = [];
          this.firestore.doc('events/' + eventKey).update({
            reviews: r
          });
          this.updateEventReviews(eventKey, review);
        }
      }, {
        key: "updatePostReactions",
        value: function updatePostReactions(postKey, reaction) {
          var _this8 = this;

          return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(function () {
            var increment = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(1);

            _this8.firestore.collection('posts').doc(postKey).update({
              totalReactionCount: increment
            });
          });
        }
      }, {
        key: "removePostReaction",
        value: function removePostReaction(postKey, reactionKey) {
          var _this9 = this;

          this.firestore.collection('posts').doc(postKey).collection('reactions').doc(reactionKey).delete().then(function () {
            var decrement = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(-1);

            _this9.firestore.collection('posts').doc(postKey).update({
              totalReactionCount: decrement
            });
          });
        }
      }, {
        key: "updateResourceReactions",
        value: function updateResourceReactions(resourceKey, reaction) {
          // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
          this.firestore.doc('/resources/' + resourceKey).collection('/reactions/').add(reaction); // var newRef = this.afdb.list('/resources/' + resourceKey + '/reactions/').push(reaction);
          // return newRef.key;
        }
      }, {
        key: "addFirstResourceReactions",
        value: function addFirstResourceReactions(resourceKey, reaction) {
          var r = [];
          this.firestore.doc('resources/' + resourceKey).update({
            reactions: r
          }); // this.afdb.object('/resources/' + resourceKey).update( {
          //   reactions: r
          // });

          return this.updateResourceReactions(resourceKey, reaction);
        }
      }, {
        key: "removeEventReaction",
        value: function removeEventReaction(eventKey, reactionKey) {
          this.firestore.doc('/events/' + eventKey + '/reactions/' + reactionKey).delete(); // var adaRef = this.afdb.database.ref('/events/' + eventKey + '/reactions/' + reactionKey);
          // adaRef.remove()
          //   .then(function() {
          //     console.log("Remove succeeded.")
          //   })
          //   .catch(function(error) {
          //     console.log("Remove failed: " + error.message)
          //   });  
        }
      }, {
        key: "updateEventReactions",
        value: function updateEventReactions(eventKey, reaction) {
          // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
          this.firestore.doc('/events/' + eventKey).collection('/reactions/').add(reaction); // var newRef = this.afdb.list('/events/' + eventKey + '/reactions/').push(reaction);
          // return newRef.key;
        }
      }, {
        key: "addFirstEventReactions",
        value: function addFirstEventReactions(eventKey, reaction) {
          var r = [];
          this.firestore.doc('events/' + eventKey).update({
            reactions: r
          }); // this.afdb.object('/events/' + eventKey).update( {
          //   reactions: r
          // });

          return this.updateEventReactions(eventKey, reaction);
        }
      }, {
        key: "removeResourceReaction",
        value: function removeResourceReaction(resourceKey, reactionKey) {
          this.firestore.doc('/resources/' + resourceKey + '/reactions/' + reactionKey).delete(); // var adaRef = this.afdb.database.ref('/resources/' + resourceKey + '/reactions/' + reactionKey);
          // adaRef.remove()
          //   .then(function() {
          //     console.log("Remove succeeded.")
          //   })
          //   .catch(function(error) {
          //     console.log("Remove failed: " + error.message)
          //   });
        }
      }, {
        key: "updatePollReviews",
        value: function updatePollReviews(pollId, review) {
          // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
          this.firestore.doc('/polls/' + pollId).collection('/reviews/').add(review); //    this.afdb.list('/polls/' + pollId + '/reviews/').push(review);
        }
      }, {
        key: "addFirstPollReview",
        value: function addFirstPollReview(pollId, review) {
          var r = [];
          this.firestore.doc('polls/' + pollId).update({
            reactions: r
          });
          this.updatePollReviews(pollId, review);
        }
      }, {
        key: "getFromStorageAsync",
        value: function getFromStorageAsync(section) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('inside getFromStorageAsync');
                    _context2.next = 3;
                    return this.storage.get(section).then(function (val) {
                      return val;
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Get messages of the group given the Id.

      }, {
        key: "getGroupPosts",
        value: function getGroupPosts(groupId) {
          return this.firestore.doc('groups/' + groupId).collection('posts');
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]])], DataService);
    /***/
  },

  /***/
  "./src/app/services/image.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/image.service.ts ***!
    \*******************************************/

  /*! exports provided: ImageService */

  /***/
  function srcAppServicesImageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageService", function () {
      return ImageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./loading.service */
    "./src/app/services/loading.service.ts");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");

    var ImageService =
    /*#__PURE__*/
    function () {
      function ImageService(firestore, loadingProvider, camera, mediaCapture, imagePicker, file) {
        _classCallCheck(this, ImageService);

        this.firestore = firestore;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.mediaCapture = mediaCapture;
        this.imagePicker = imagePicker;
        this.file = file;
        this.profilePhotoOptions = {
          quality: 50,
          targetWidth: 384,
          targetHeight: 384,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          correctOrientation: true
        };
        this.photoMessageOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          correctOrientation: true,
          allowEdit: true
        };
        this.groupPhotoOptions = {
          quality: 50,
          targetWidth: 384,
          targetHeight: 384,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          correctOrientation: true
        };
      } // Function to convert dataURI to Blob needed by Firebase


      _createClass(ImageService, [{
        key: "imgURItoBlob",
        value: function imgURItoBlob(dataURI) {
          var binary = atob(dataURI.split(',')[1]);
          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
          var array = [];

          for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
          }

          return new Blob([new Uint8Array(array)], {
            type: mimeString
          });
        } // Generate a random filename of length for the image to be uploaded

      }, {
        key: "generateFilename",
        value: function generateFilename() {
          var length = 8;
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }

          return text + ".jpg";
        } // Set ProfilePhoto given the user and the cameraSourceType.
        // This function processes the imageURI returned and uploads the file on Firebase,
        // Finally the user data on the database is updated.

      }, {
        key: "setProfilePhoto",
        value: function setProfilePhoto(user, sourceType) {
          var _this10 = this;

          console.log(user);
          this.profilePhotoOptions.sourceType = sourceType;
          this.loadingProvider.show(); // Get picture from camera or gallery.

          this.camera.getPicture(this.profilePhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this10.imgURItoBlob("data:image/jpeg;base64," + imageData);

            var metadata = {
              'contentType': imgBlob.type
            };

            var name = _this10.generateFilename();

            var dpStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + user.userId + '/' + name); // Generate filename and upload to Firebase Storage.

            dpStorageRef.put(imgBlob, metadata).then(function (snapshot) {
              // Delete previous profile photo on Storage if it exists.
              // this.deleteImageFile(user.img);
              // URL of the uploaded image!
              console.log(snapshot);
              dpStorageRef.getDownloadURL().then(function (res) {
                console.log(res);
                var url = res;
                var profile = {
                  displayName: user.name,
                  photoURL: url
                }; // Update Firebase User.

                firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.updateProfile(profile).then(function (success) {
                  // Update User Data on Database.
                  _this10.firestore.doc('/accounts/' + user.userId).update({
                    img: url
                  }).then(function (success) {
                    _this10.loadingProvider.hide();

                    _this10.loadingProvider.showToast("Profile Updated");
                  }).catch(function (error) {
                    console.log(error);

                    _this10.loadingProvider.hide();

                    _this10.loadingProvider.showToast("Something went wrong");
                  });
                }).catch(function (error) {
                  console.log(error);

                  _this10.loadingProvider.hide();

                  _this10.loadingProvider.showToast("Something went wrong");
                });
              });
            }).catch(function (error) {
              console.log(error);

              _this10.loadingProvider.hide();

              _this10.loadingProvider.showToast("Something went wrong");
            });
          }).catch(function (error) {
            _this10.loadingProvider.hide();
          });
        } // Upload and set the group object's image.

      }, {
        key: "setGroupPhoto",
        value: function setGroupPhoto(group, sourceType) {
          var _this11 = this;

          this.groupPhotoOptions.sourceType = sourceType;
          this.loadingProvider.show(); // Get picture from camera or gallery.

          this.camera.getPicture(this.groupPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this11.imgURItoBlob("data:image/jpeg;base64," + imageData);

            var metadata = {
              'contentType': imgBlob.type
            };

            var name = _this11.generateFilename();

            var groupStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + name);
            groupStorageRef.put(imgBlob, metadata).then(function (snapshot) {
              // this.deleteImageFile(group.img);
              // URL of the uploaded image!
              groupStorageRef.getDownloadURL().then(function (url) {
                group.img = url;

                _this11.loadingProvider.hide();
              });
            }).catch(function (error) {
              _this11.loadingProvider.hide();

              _this11.loadingProvider.showToast("Something went wrong");
            });
          }).catch(function (error) {
            _this11.loadingProvider.hide();
          });
        } // Set group photo and return the group object as promise.

      }, {
        key: "setGroupPhotoPromise",
        value: function setGroupPhotoPromise(group, sourceType) {
          var _this12 = this;

          return new Promise(function (resolve) {
            _this12.groupPhotoOptions.sourceType = sourceType;

            _this12.loadingProvider.show(); // Get picture from camera or gallery.


            _this12.camera.getPicture(_this12.groupPhotoOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this12.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              };
              var gPPStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + _this12.generateFilename());
              gPPStorageRef.put(imgBlob, metadata).then(function (snapshot) {
                _this12.deleteImageFile(group.img); // URL of the uploaded image!


                gPPStorageRef.getDownloadURL().then(function (url) {
                  group.img = url;

                  _this12.loadingProvider.hide();

                  resolve(group);
                });
              }).catch(function (error) {
                _this12.loadingProvider.hide();

                _this12.loadingProvider.showToast("Something went wrong");
              });
            }).catch(function (error) {
              _this12.loadingProvider.hide();
            });
          });
        } //Delete the image given the url.

      }, {
        key: "deleteImageFile",
        value: function deleteImageFile(path) {
          var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?')); // tslint:disable-next-line: max-line-length

          firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + fileName).delete().then(function () {}).catch(function (error) {
            console.log(error);
          });
        } //Delete the user.img given the user.

      }, {
        key: "deleteUserImageFile",
        value: function deleteUserImageFile(user) {
          var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?')); // tslint:disable-next-line: max-line-length

          firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + user.userId + '/' + fileName).delete().then(function () {}).catch(function (error) {
            console.log(error);
          });
        } // Delete group image file on group storage reference.

      }, {
        key: "deleteGroupImageFile",
        value: function deleteGroupImageFile(groupId, path) {
          var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
          firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + fileName).delete().then(function () {}).catch(function (error) {
            console.log(error);
          });
        } // Upload photo message and return the url as promise.

      }, {
        key: "uploadPhotoMessage",
        value: function uploadPhotoMessage(conversationId, sourceType) {
          var _this13 = this;

          return new Promise(function (resolve) {
            _this13.photoMessageOptions.sourceType = sourceType;

            _this13.loadingProvider.show(); // Get picture from camera or gallery.


            _this13.camera.getPicture(_this13.photoMessageOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this13.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              }; // Generate filename and upload to Firebase Storage.

              var upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + conversationId + '/' + _this13.generateFilename());
              upRef.put(imgBlob, metadata).then(function (snapshot) {
                // URL of the uploaded image!
                upRef.getDownloadURL().then(function (url) {
                  _this13.loadingProvider.hide();

                  resolve(url);
                });
              }).catch(function (error) {
                _this13.loadingProvider.hide();

                _this13.loadingProvider.showToast("Something went wrong");
              });
            }).catch(function (error) {
              _this13.loadingProvider.hide();
            });
          });
        } // Upload photo message and return the url as promise.

      }, {
        key: "uploadPostPhoto",
        value: function uploadPostPhoto(sourceType) {
          var _this14 = this;

          return new Promise(function (resolve) {
            _this14.photoMessageOptions.sourceType = sourceType;

            _this14.loadingProvider.show(); // Get picture from camera or gallery.


            _this14.camera.getPicture(_this14.photoMessageOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this14.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              }; // Generate filename and upload to Firebase Storage.

              var upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/posts/' + _this14.generateFilename());
              upRef.put(imgBlob, metadata).then(function (snapshot) {
                // URL of the uploaded image!
                upRef.getDownloadURL().then(function (url) {
                  _this14.loadingProvider.hide();

                  resolve(url);
                });
              }).catch(function (error) {
                _this14.loadingProvider.hide();

                _this14.loadingProvider.showToast("Something went wrong");
              });
            }).catch(function (error) {
              _this14.loadingProvider.hide();
            });
          });
        }
      }, {
        key: "uploadPostPhotos",
        value: function uploadPostPhotos(postMedia) {
          var _this15 = this;

          var promises = [];
          return new Promise(function (resolve) {
            if (postMedia && postMedia.length > 0) {
              // tslint:disable-next-line: prefer-for-of
              for (var i = 0; i < postMedia.length; i++) {
                promises.push(_this15.getDownloadUrlImage(postMedia[i]));
              }

              Promise.all(promises).then(function (results) {
                resolve(results);
              });
            } else {
              resolve(postMedia);
            }
          });
        }
      }, {
        key: "getDownloadUrlImage",
        value: function getDownloadUrlImage(imageBase64) {
          var _this16 = this;

          return new Promise(function (resolve) {
            // Process the returned imageURI.
            var imgBlob = _this16.imgURItoBlob(imageBase64);

            var metadata = {
              'contentType': imgBlob.type
            }; // Generate filename and upload to Firebase Storage.

            var upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/posts/' + _this16.generateFilename());
            upRef.put(imgBlob, metadata).then(function (snapshot) {
              // URL of the uploaded image!
              upRef.getDownloadURL().then(function (url) {
                resolve(url);
              }).catch(function (err) {
                console.log('Error occurred while downloading the url of images.');
              });
            }).catch(function (error) {
              console.log('Error occured while uploading images:', error);
            });
          });
        }
      }, {
        key: "deletePostPhoto",
        value: function deletePostPhoto(url) {
          var fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
          firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/posts/' + fileName).delete().then(function () {}).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "uploadPostReactionPhoto",
        value: function uploadPostReactionPhoto(postId, userId, sourceType) {
          var _this17 = this;

          return new Promise(function (resolve) {
            _this17.photoMessageOptions.sourceType = sourceType;

            _this17.loadingProvider.show(); // Get picture from camera or gallery.


            _this17.camera.getPicture(_this17.photoMessageOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this17.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              }; // Generate filename and upload to Firebase Storage.

              var upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/posts' + postId + '/' + userId + '/' + _this17.generateFilename());
              upRef.put(imgBlob, metadata).then(function (snapshot) {
                // URL of the uploaded image!
                upRef.getDownloadURL().then(function (url) {
                  _this17.loadingProvider.hide();

                  resolve(url);
                });
              }).catch(function (error) {
                _this17.loadingProvider.hide();

                _this17.loadingProvider.showToast("Something went wrong");
              });
            }).catch(function (error) {
              _this17.loadingProvider.hide();
            });
          });
        }
      }, {
        key: "uploadPostVideo",
        value: function uploadPostVideo() {
          var _this18 = this;

          return new Promise(function (resolve) {
            _this18.loadingProvider.show();

            _this18.mediaCapture.captureVideo().then(function (data) {
              var videoUrl = data[0].fullPath;
              var x = videoUrl.split("/");
              var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
              var name = x[x.length - 1];

              _this18.file.readAsArrayBuffer(filepath, name).then(function (success) {
                var blob = new Blob([success], {
                  type: "video/mp4"
                });
                var uploadRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + name);
                uploadRef.put(blob).then(function (res) {
                  var process = res.bytesTransferred / res.totalBytes * 100;
                  console.log(process);

                  _this18.loadingProvider.hide();

                  uploadRef.getDownloadURL().then(function (url) {
                    resolve(url);
                  });
                }, function (err) {
                  _this18.loadingProvider.hide();

                  console.log("Failed");
                });
              });
            }, function (err) {
              _this18.loadingProvider.hide();

              console.log("Media Err = " + err);
            });
          });
        }
      }, {
        key: "deletePostReactionPhoto",
        value: function deletePostReactionPhoto(postId, url) {
          var fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
          firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + postId + '/' + fileName).delete().then(function () {}).catch(function (error) {
            console.log(error);
          });
        } // Upload group photo message and return a promise as url.

      }, {
        key: "uploadGroupPhotoMessage",
        value: function uploadGroupPhotoMessage(groupId, sourceType) {
          var _this19 = this;

          return new Promise(function (resolve) {
            _this19.photoMessageOptions.sourceType = sourceType;

            _this19.loadingProvider.show(); // Get picture from camera or gallery.


            _this19.camera.getPicture(_this19.photoMessageOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this19.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              }; // Generate filename and upload to Firebase Storage.

              var ugpRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + _this19.generateFilename());
              ugpRef.put(imgBlob, metadata).then(function (snapshot) {
                // URL of the uploaded image!
                ugpRef.getDownloadURL().then(function (url) {
                  _this19.loadingProvider.hide();

                  resolve(url);
                });
              }).catch(function (error) {
                _this19.loadingProvider.hide();

                _this19.loadingProvider.showToast("Something went wrong");
              });
            }).catch(function (error) {
              _this19.loadingProvider.hide();
            });
          });
        }
      }, {
        key: "uploadGroupVideoMessage",
        value: function uploadGroupVideoMessage(groupId) {
          var _this20 = this;

          return new Promise(function (resolve) {
            _this20.loadingProvider.show();

            _this20.mediaCapture.captureVideo().then(function (data) {
              var videoUrl = data[0].fullPath;
              console.log("video path: " + videoUrl);
              var x = videoUrl.split("/");
              var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
              var name = x[x.length - 1];
              console.log(filepath + " - " + name);

              _this20.file.readAsArrayBuffer(filepath, name).then(function (success) {
                console.log(success);
                var blob = new Blob([success], {
                  type: "video/mp4"
                });
                console.log(blob);
                var upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + groupId + "/" + name).put(blob);
                upload.then(function (res) {
                  var process = res.bytesTransferred / res.totalBytes * 100;
                  console.log(process);

                  _this20.loadingProvider.hide();

                  resolve(res.downloadURL);
                }, function (err) {
                  _this20.loadingProvider.hide();

                  console.log("Failed");
                });
              });
            }, function (err) {
              _this20.loadingProvider.hide();

              console.log("Media Err = " + err);
            });
          });
        }
      }, {
        key: "uploadVideoMessage",
        value: function uploadVideoMessage(conversationId) {
          var _this21 = this;

          return new Promise(function (resolve) {
            _this21.loadingProvider.show();

            _this21.mediaCapture.captureVideo().then(function (data) {
              var videoUrl = data[0].fullPath;
              console.log("video path: " + videoUrl);
              var x = videoUrl.split("/");
              var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
              var name = x[x.length - 1];
              console.log(filepath + " - " + name);

              _this21.file.readAsArrayBuffer(filepath, name).then(function (success) {
                console.log(success);
                var blob = new Blob([success], {
                  type: "video/mp4"
                });
                console.log(blob); // let timestamp = (Math.floor(Date.now() / 1000)).toString();

                var uploadRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + name);
                uploadRef.put(blob).then(function (res) {
                  var process = res.bytesTransferred / res.totalBytes * 100;
                  console.log(process);

                  _this21.loadingProvider.hide();

                  uploadRef.getDownloadURL().then(function (url) {
                    resolve(url);
                  });
                }, function (err) {
                  _this21.loadingProvider.hide();

                  console.log("Failed");
                });
              });
            }, function (err) {
              _this21.loadingProvider.hide();

              console.log("Media Err = " + err);
            });
          });
        } // Upload group photo message and return a promise as url.

      }, {
        key: "uploadGroupPhotoResource",
        value: function uploadGroupPhotoResource(groupId, sourceType) {
          var _this22 = this;

          return new Promise(function (resolve) {
            _this22.photoMessageOptions.sourceType = sourceType;

            _this22.loadingProvider.show(); // Get picture from camera or gallery.


            _this22.camera.getPicture(_this22.photoMessageOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this22.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              }; // Generate filename and upload to Firebase Storage.

              var ugpRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + _this22.generateFilename());
              ugpRef.put(imgBlob, metadata).then(function (snapshot) {
                // URL of the uploaded image!
                ugpRef.getDownloadURL().then(function (url) {
                  _this22.loadingProvider.hide();

                  resolve(url);
                });
              }).catch(function (error) {
                _this22.loadingProvider.hide();

                _this22.loadingProvider.showToast("Something went wrong");
              });
            }).catch(function (error) {
              _this22.loadingProvider.hide();
            });
          });
        }
      }, {
        key: "uploadGroupVideoResource",
        value: function uploadGroupVideoResource(groupId) {
          var _this23 = this;

          return new Promise(function (resolve) {
            _this23.loadingProvider.show();

            _this23.mediaCapture.captureVideo().then(function (data) {
              var videoUrl = data[0].fullPath;
              console.log("video path: " + videoUrl);
              var x = videoUrl.split("/");
              var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
              var name = x[x.length - 1];
              console.log(filepath + " - " + name);

              _this23.file.readAsArrayBuffer(filepath, name).then(function (success) {
                console.log(success);
                var blob = new Blob([success], {
                  type: "video/mp4"
                });
                console.log(blob);
                var upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + groupId + "/" + name).put(blob);
                upload.then(function (res) {
                  var process = res.bytesTransferred / res.totalBytes * 100;
                  console.log(process);

                  _this23.loadingProvider.hide();

                  resolve(res.downloadURL);
                }, function (err) {
                  _this23.loadingProvider.hide();

                  console.log("Failed");
                });
              });
            }, function (err) {
              _this23.loadingProvider.hide();

              console.log("Media Err = " + err);
            });
          });
        }
      }, {
        key: "getGroupVideoResource",
        value: function getGroupVideoResource(resourceurl) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child(resourceurl).getDownloadURL().then(function (url) {
                      return url;
                    }).catch(function (error) {// Handle any errors
                    });

                  case 2:
                    return _context3.abrupt("return", _context3.sent);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "getImages",
        value: function getImages() {
          var _this24 = this;

          return new Promise(function (resolve) {
            _this24.options = {
              // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
              // selection of a single image, the plugin will return it.
              maximumImagesCount: 10,
              // max width and height to allow the images to be.  Will keep aspect
              // ratio no matter what.  So if both are 800, the returned image
              // will be at most 800 pixels wide and 800 pixels tall.  If the width is
              // 800 and height 0 the image will be 800 pixels wide if the source
              // is at least that wide.
              // quality of resized image, defaults to 100
              quality: 80,
              // output type, defaults to FILE_URIs.
              // available options are
              // window.imagePicker.OutputType.FILE_URI (0) or 
              // window.imagePicker.OutputType.BASE64_STRING (1)
              outputType: 1
            };
            _this24.imageResponse = [];

            _this24.imagePicker.getPictures(_this24.options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this24.imageResponse.push('data:image/jpeg;base64,' + results[i]);
              }

              resolve(_this24.imageResponse);
            }, function (err) {
              alert(err);
            });
          });
        }
      }]);

      return ImageService;
    }();

    ImageService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
      }];
    };

    ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]])], ImageService);
    /***/
  },

  /***/
  "./src/app/services/loading.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/loading.service.ts ***!
    \*********************************************/

  /*! exports provided: LoadingService */

  /***/
  function srcAppServicesLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
      return LoadingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var LoadingService =
    /*#__PURE__*/
    function () {
      function LoadingService(loadingCtrl, toastCtrl) {
        _classCallCheck(this, LoadingService);

        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
      }

      _createClass(LoadingService, [{
        key: "show",
        value: function show() {
          var _this25 = this;

          if (!this.loading) {
            this.loadingCtrl.create({
              spinner: 'circles',
              duration: 2000
            }).then(function (res) {
              _this25.loading = res;

              _this25.loading.present();
            });
          }
        }
      }, {
        key: "hide",
        value: function hide() {
          if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
          }
        }
      }, {
        key: "showToast",
        value: function showToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 3000,
                      position: 'top',
                      animated: true,
                      color: 'secondary',
                      cssClass: 'toastCss',
                      mode: 'ios'
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return LoadingService;
    }();

    LoadingService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], LoadingService);
    /***/
  },

  /***/
  "./src/app/services/share.module.ts":
  /*!******************************************!*\
    !*** ./src/app/services/share.module.ts ***!
    \******************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppServicesShareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _pipes_friend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../pipes/friend */
    "./src/app/pipes/friend.ts");
    /* harmony import */


    var _pipes_conversation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pipes/conversation */
    "./src/app/pipes/conversation.ts");
    /* harmony import */


    var _pipes_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pipes/group */
    "./src/app/pipes/group.ts");
    /* harmony import */


    var _pipes_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pipes/search */
    "./src/app/pipes/search.ts");
    /* harmony import */


    var _pipes_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../pipes/date */
    "./src/app/pipes/date.ts");
    /* harmony import */


    var _pipes_poll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pipes/poll */
    "./src/app/pipes/poll.ts");
    /* harmony import */


    var _pipes_resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../pipes/resource */
    "./src/app/pipes/resource.ts");
    /* harmony import */


    var angular_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-pipes */
    "./node_modules/angular-pipes/fesm2015/angular-pipes.js");
    /* harmony import */


    var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../pipes/reverse.pipe */
    "./src/app/pipes/reverse.pipe.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [],
      declarations: [_pipes_friend__WEBPACK_IMPORTED_MODULE_2__["FriendPipe"], _pipes_conversation__WEBPACK_IMPORTED_MODULE_3__["ConversationPipe"], _pipes_group__WEBPACK_IMPORTED_MODULE_4__["GroupPipe"], _pipes_search__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"], _pipes_date__WEBPACK_IMPORTED_MODULE_6__["DateFormatPipe"], _pipes_poll__WEBPACK_IMPORTED_MODULE_7__["PollPipe"], _pipes_resource__WEBPACK_IMPORTED_MODULE_8__["ResourcePipe"], angular_pipes__WEBPACK_IMPORTED_MODULE_9__["FloorPipe"], _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__["ReversePipe"]],
      exports: [_pipes_friend__WEBPACK_IMPORTED_MODULE_2__["FriendPipe"], _pipes_conversation__WEBPACK_IMPORTED_MODULE_3__["ConversationPipe"], _pipes_group__WEBPACK_IMPORTED_MODULE_4__["GroupPipe"], _pipes_search__WEBPACK_IMPORTED_MODULE_5__["SearchPipe"], _pipes_date__WEBPACK_IMPORTED_MODULE_6__["DateFormatPipe"], _pipes_poll__WEBPACK_IMPORTED_MODULE_7__["PollPipe"], _pipes_resource__WEBPACK_IMPORTED_MODULE_8__["ResourcePipe"], angular_pipes__WEBPACK_IMPORTED_MODULE_9__["FloorPipe"], _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_10__["ReversePipe"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shell/aspect-ratio/aspect-ratio.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShellAspectRatioAspectRatioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n:host .content-wrapper {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvYXNwZWN0LXJhdGlvL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXHNoZWxsXFxhc3BlY3QtcmF0aW9cXGFzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shell/aspect-ratio/aspect-ratio.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
    \**************************************************************/

  /*! exports provided: AspectRatioComponent */

  /***/
  function srcAppShellAspectRatioAspectRatioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AspectRatioComponent", function () {
      return AspectRatioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AspectRatioComponent =
    /*#__PURE__*/
    function () {
      function AspectRatioComponent() {
        _classCallCheck(this, AspectRatioComponent);

        this.ratioPadding = '0px';
      }

      _createClass(AspectRatioComponent, [{
        key: "ratio",
        set: function set(ratio) {
          ratio = ratio !== undefined && ratio !== null ? ratio : {
            w: 1,
            h: 1
          };
          var heightRatio = ratio.h / ratio.w * 100 + '%'; // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)

          this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
        }
      }]);

      return AspectRatioComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.padding'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AspectRatioComponent.prototype, "ratioPadding", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], AspectRatioComponent.prototype, "ratio", null);
    AspectRatioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aspect-ratio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aspect-ratio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/aspect-ratio/aspect-ratio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aspect-ratio.component.scss */
      "./src/app/shell/aspect-ratio/aspect-ratio.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AspectRatioComponent);
    /***/
  },

  /***/
  "./src/app/shell/config/app-shell.config.ts":
  /*!**************************************************!*\
    !*** ./src/app/shell/config/app-shell.config.ts ***!
    \**************************************************/

  /*! exports provided: AppShellConfig */

  /***/
  function srcAppShellConfigAppShellConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppShellConfig", function () {
      return AppShellConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/


    var AppShellConfig_1;

    var AppShellConfig = AppShellConfig_1 =
    /*#__PURE__*/
    function () {
      function AppShellConfig(http) {
        _classCallCheck(this, AppShellConfig);

        this.http = http;
      } // Simplified version from: https://stackoverflow.com/a/49707898/1116959


      _createClass(AppShellConfig, [{
        key: "load",
        value: function load() {
          var configFile = './assets/config/app-shell.config' + (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() ? '.prod' : '') + '.json';
          return this.http.get(configFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (configSettings) {
            AppShellConfig_1.settings = configSettings;
          })).toPromise().catch(function (error) {
            console.log("Could not load file '".concat(configFile, "'"), error);
          });
        }
      }]);

      return AppShellConfig;
    }();

    AppShellConfig.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppShellConfig = AppShellConfig_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AppShellConfig);
    /***/
  },

  /***/
  "./src/app/shell/image-shell/image-shell.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/shell/image-shell/image-shell.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShellImageShellImageShellComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  -webkit-transition: all ease-in-out 0.3s;\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n:host > .spinner {\n  display: none;\n}\n:host::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n:host:not([mode=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n:host:not([mode=cover]) > .inner-img {\n  -webkit-transition: visibility 0s linear, opacity 0.5s linear;\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n}\n:host:not([mode=cover]).img-loaded::before {\n  display: none;\n}\n:host:not([mode=cover]).img-loaded > .inner-img {\n  opacity: 1;\n  visibility: visible;\n}\n:host[mode=cover] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n:host[mode=cover]::before, :host[mode=cover] > .spinner {\n  z-index: -1;\n}\n:host[mode=cover] > .inner-img {\n  display: none;\n  visibility: hidden;\n}\n:host[mode=cover].img-loaded::before {\n  display: none;\n}\n:host([animation=gradient]) {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n:host([animation=gradient])::before {\n  background: -webkit-gradient(linear, left top, right top, color-stop(8%, var(--image-shell-loading-background)), color-stop(18%, var(--image-shell-animation-color)), color-stop(33%, var(--image-shell-loading-background)));\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n:host([animation=gradient]).img-loaded::before {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n:host([animation=spinner]) {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n:host([animation=spinner]) > .spinner {\n  display: block;\n  position: absolute;\n  top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n:host([animation=spinner]).img-loaded > .spinner {\n  display: none;\n  visibility: hidden;\n}\n:host(.add-overlay) {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n:host(.add-overlay).img-loaded::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcc2hlbGxcXGltYWdlLXNoZWxsXFxpbWFnZS1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLGdDQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLFVBQUE7QUNBRjtBREdFO0VBQ0UsYUFBQTtBQ0RKO0FES0U7RUFDRSxXQUFBO0VBQ0EsaURBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0hKO0FETUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE1JO0VBQ0UsNkRBQUE7RUFBQSxxREFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUNKTjtBRFNNO0VBQ0UsYUFBQTtBQ1BSO0FEVU07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNSUjtBRGNFO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQ1pKO0FEZUk7RUFFRSxXQUFBO0FDZE47QURpQkk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNmTjtBRG9CTTtFQUNFLGFBQUE7QUNsQlI7QUR3QkE7RUFDRSxzQ0FBQTtFQUNBLG1DQUFBO0FDckJGO0FEd0JFO0VBQ0UsNk5BQ0U7RUFERixrS0FDRTtFQUNGLDRCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQ3ZCSjtBRDRCSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7VUFBQSxZQUFBO0FDMUJOO0FEOEJFO0VBQ0U7SUFDRSw2QkFBQTtFQzVCSjtFRCtCRTtJQUNFLDRCQUFBO0VDN0JKO0FBQ0Y7QURzQkU7RUFDRTtJQUNFLDZCQUFBO0VDNUJKO0VEK0JFO0lBQ0UsNEJBQUE7RUM3Qko7QUFDRjtBRGlDQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5QkY7QURnQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtFQUNBLDJEQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQzlCSjtBRGtDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ2hDTjtBRHFDQTtFQUNFLG1EQUFBO0FDbENGO0FEc0NJO0VBQ0UsY0FBQTtFQUNBLGlEQUFBO0FDcENOIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6ICNFRUU7XHJcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiAwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcclxuICB6LWluZGV4OiAyO1xyXG5cclxuICAvLyBCeSBkZWZhdWx0LCBoaWRlIHRoZSBzcGlubmVyXHJcbiAgJiA+IC5zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvLyBMb2FkaW5nIGJhY2tncm91bmRcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAmOm5vdChbbW9kZT1cImNvdmVyXCJdKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJiA+IC5pbm5lci1pbWcge1xyXG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciwgb3BhY2l0eSAuNXMgbGluZWFyO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW1nLWxvYWRlZCB7XHJcbiAgICAgIC8vIEhpZGUgbG9hZGluZyBiYWNrZ3JvdW5kIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmID4gLmlubmVyLWltZyB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJZiBpdCBpcyBtb2RlOiBjb3ZlclxyXG4gICZbbW9kZT1cImNvdmVyXCJdIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIC8vIEluIGNvdmVyIG1vZGUsIHdlIGNhbiBoYXZlIGNvbnRlbnQgaW5zaWRlIHRoZSBlbGVtZW50LCB0aHVzIHdlIG5lZWQgdG8gcHV0IHRoZXNlIGVsZW1lbnRzIGJlbmVhdGhcclxuICAgICY6OmJlZm9yZSxcclxuICAgICYgPiAuc3Bpbm5lciB7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuaW5uZXItaW1nIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW1nLWxvYWRlZCB7XHJcbiAgICAgIC8vIEhpZGUgbG9hZGluZyBiYWNrZ3JvdW5kIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcclxuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcclxuXHJcbiAgLy8gVGhlIGFuaW1hdGlvbiB0aGF0IGdvZXMgYmVuZWF0aCB0aGUgbWFza3NcclxuICAmOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDglLCB2YXIoLS1pbWFnZS1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKSAzMyUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAmLmltZy1sb2FkZWQge1xyXG4gICAgLy8gUmVzZXQgYmFja2dyb3VuZCBhbmltYXRpb24gb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYW5pbWF0aW9uOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XHJcbiAgICAwJXtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcclxuICAgIH1cclxuXHJcbiAgICAxMDAle1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdChbYW5pbWF0aW9uPVwic3Bpbm5lclwiXSkge1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAyOHB4O1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogI0NDQztcclxuXHJcbiAgJiA+IC5zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gY2FsYyh2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpIC8gMikpO1xyXG4gICAgd2lkdGg6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yKTtcclxuICB9XHJcblxyXG4gICYuaW1nLWxvYWRlZCB7XHJcbiAgICAmID4gLnNwaW5uZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCguYWRkLW92ZXJsYXkpIHtcclxuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XHJcblxyXG4gICYuaW1nLWxvYWRlZCB7XHJcbiAgICAvLyBBZGQgYmFja2dyb3VuZCBvdmVybGF5IGFmdGVyIHRoZSBpbWFnZSBoYXMgbG9hZGVkXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjNzO1xuICB6LWluZGV4OiAyO1xufVxuOmhvc3QgPiAuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuOmhvc3Q6bm90KFttb2RlPWNvdmVyXSkge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0Om5vdChbbW9kZT1jb3Zlcl0pID4gLmlubmVyLWltZyB7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xufVxuOmhvc3Q6bm90KFttb2RlPWNvdmVyXSkuaW1nLWxvYWRlZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0Om5vdChbbW9kZT1jb3Zlcl0pLmltZy1sb2FkZWQgPiAuaW5uZXItaW1nIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbjpob3N0W21vZGU9Y292ZXJdIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbjpob3N0W21vZGU9Y292ZXJdOjpiZWZvcmUsIDpob3N0W21vZGU9Y292ZXJdID4gLnNwaW5uZXIge1xuICB6LWluZGV4OiAtMTtcbn1cbjpob3N0W21vZGU9Y292ZXJdID4gLmlubmVyLWltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbjpob3N0W21vZGU9Y292ZXJdLmltZy1sb2FkZWQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDglLCB2YXIoLS1pbWFnZS1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKSAzMyUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xuICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pLmltZy1sb2FkZWQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGFuaW1hdGlvbjogMDtcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZUJhY2tncm91bmQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcbiAgfVxufVxuXG46aG9zdChbYW5pbWF0aW9uPXNwaW5uZXJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAyOHB4O1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6ICNDQ0M7XG59XG46aG9zdChbYW5pbWF0aW9uPXNwaW5uZXJdKSA+IC5zcGlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIGNhbGModmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKSAvIDIpKTtcbiAgbGVmdDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XG4gIHdpZHRoOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gIGNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yKTtcbn1cbjpob3N0KFthbmltYXRpb249c3Bpbm5lcl0pLmltZy1sb2FkZWQgPiAuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuOmhvc3QoLmFkZC1vdmVybGF5KSB7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcbn1cbjpob3N0KC5hZGQtb3ZlcmxheSkuaW1nLWxvYWRlZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shell/image-shell/image-shell.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
    \************************************************************/

  /*! exports provided: ImageShellComponent */

  /***/
  function srcAppShellImageShellImageShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageShellComponent", function () {
      return ImageShellComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");

    var ImageShellComponent =
    /*#__PURE__*/
    function () {
      function ImageShellComponent(platformId) {
        _classCallCheck(this, ImageShellComponent);

        this.platformId = platformId; // To debug shell styles, change configuration in the assets/app-shell.config.json file

        this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.debug : false; // tslint:disable-next-line:variable-name

        this._src = ''; // tslint:disable-next-line:variable-name

        this._alt = ''; // tslint:disable-next-line:variable-name

        this._mode = '';
        this.imageLoaded = false;
      }

      _createClass(ImageShellComponent, [{
        key: "_imageLoaded",
        value: function _imageLoaded() {
          this.imageLoaded = true; // If it's a cover image then set the background-image property accordingly

          if (this._mode === 'cover') {
            this.backgroundImage = 'url(' + this._src + ')';
          }
        }
      }, {
        key: "mode",
        set: function set(val) {
          this._mode = val !== undefined && val !== null ? val : '';
        },
        get: function get() {
          return this._mode;
        }
      }, {
        key: "src",
        set: function set(val) {
          if (!this.debugMode) {
            this._src = val !== undefined && val !== null ? val : '';
          }

          if (this._mode === 'cover') {
            // Unset the background-image
            this.backgroundImage = 'unset';
          } // Show loading indicator
          // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded


          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId)) {
            this.imageLoaded = true;
          } else {
            this.imageLoaded = false;
          }
        }
      }, {
        key: "alt",
        set: function set(val) {
          this._alt = val !== undefined && val !== null ? val : '';
        }
      }]);

      return ImageShellComponent;
    }();

    ImageShellComponent.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.img-loaded'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ImageShellComponent.prototype, "imageLoaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.backgroundImage'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ImageShellComponent.prototype, "backgroundImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.mode'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], ImageShellComponent.prototype, "mode", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], ImageShellComponent.prototype, "src", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], ImageShellComponent.prototype, "alt", null);
    ImageShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-shell',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-shell.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/image-shell/image-shell.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-shell.component.scss */
      "./src/app/shell/image-shell/image-shell.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])], ImageShellComponent);
    /***/
  },

  /***/
  "./src/app/shell/shell.module.ts":
  /*!***************************************!*\
    !*** ./src/app/shell/shell.module.ts ***!
    \***************************************/

  /*! exports provided: ShellModule */

  /***/
  function srcAppShellShellModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellModule", function () {
      return ShellModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./text-shell/text-shell.component */
    "./src/app/shell/text-shell/text-shell.component.ts");
    /* harmony import */


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");

    var ShellModule = function ShellModule() {
      _classCallCheck(this, ShellModule);
    };

    ShellModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"]],
      providers: [// Inspired in: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
      {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: function useFactory(appShellConfig) {
          return function () {
            return appShellConfig.load();
          };
        },
        deps: [_config_app_shell_config__WEBPACK_IMPORTED_MODULE_8__["AppShellConfig"]],
        multi: true
      }],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot()],
      exports: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_6__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"]]
    })], ShellModule);
    /***/
  },

  /***/
  "./src/app/shell/text-shell/text-shell.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/shell/text-shell/text-shell.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShellTextShellTextShellComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  background-clip: content-box;\n}\n\n:host(:not([animation])) {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(92%, var(--text-shell-line-color, #CCC)) , color-stop(92%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"1\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(94%, var(--text-shell-line-color, #CCC)) , color-stop(94%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host(:not([animation]))[lines=\"2\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(95%, var(--text-shell-line-color, #CCC)) , color-stop(95%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(45%, var(--text-shell-line-color, #CCC)) , color-stop(45%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host(:not([animation]))[lines=\"3\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(90%, var(--text-shell-line-color, #CCC)) , color-stop(90%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(60%, var(--text-shell-line-color, #CCC)) , color-stop(60%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(33%, var(--text-shell-line-color, #CCC)) , color-stop(33%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 33% , var(--text-shell-background, #FFF) 33%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host(:not([animation]))[lines=\"4\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(89%, var(--text-shell-line-color, #CCC)) , color-stop(89%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(66%, var(--text-shell-line-color, #CCC)) , color-stop(66%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(71%, var(--text-shell-line-color, #CCC)) , color-stop(71%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(34%, var(--text-shell-line-color, #CCC)) , color-stop(34%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host(:not([animation]))[lines=\"5\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(94%, var(--text-shell-line-color, #CCC)) , color-stop(94%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(80%, var(--text-shell-line-color, #CCC)) , color-stop(80%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(71%, var(--text-shell-line-color, #CCC)) , color-stop(71%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(79%, var(--text-shell-line-color, #CCC)) , color-stop(79%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(42%, var(--text-shell-line-color, #CCC)) , color-stop(42%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host(:not([animation]))[lines=\"6\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(91%, var(--text-shell-line-color, #CCC)) , color-stop(91%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(78%, var(--text-shell-line-color, #CCC)) , color-stop(78%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(63%, var(--text-shell-line-color, #CCC)) , color-stop(63%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(61%, var(--text-shell-line-color, #CCC)) , color-stop(61%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(67%, var(--text-shell-line-color, #CCC)) , color-stop(67%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(31%, var(--text-shell-line-color, #CCC)) , color-stop(31%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 31% , var(--text-shell-background, #FFF) 31%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host(:not([animation])).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=bouncing]) {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(86%, var(--text-shell-line-color, #CCC)) , color-stop(86%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"1\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(89%, var(--text-shell-line-color, #CCC)) , color-stop(89%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"2\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(86%, var(--text-shell-line-color, #CCC)) , color-stop(86%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(45%, var(--text-shell-line-color, #CCC)) , color-stop(45%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"3\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(91%, var(--text-shell-line-color, #CCC)) , color-stop(91%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(62%, var(--text-shell-line-color, #CCC)) , color-stop(62%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(41%, var(--text-shell-line-color, #CCC)) , color-stop(41%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 41% , var(--text-shell-background, #FFF) 41%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"4\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(87%, var(--text-shell-line-color, #CCC)) , color-stop(87%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(65%, var(--text-shell-line-color, #CCC)) , color-stop(65%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(63%, var(--text-shell-line-color, #CCC)) , color-stop(63%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(40%, var(--text-shell-line-color, #CCC)) , color-stop(40%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 40% , var(--text-shell-background, #FFF) 40%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"5\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(89%, var(--text-shell-line-color, #CCC)) , color-stop(89%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(78%, var(--text-shell-line-color, #CCC)) , color-stop(78%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(69%, var(--text-shell-line-color, #CCC)) , color-stop(69%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(78%, var(--text-shell-line-color, #CCC)) , color-stop(78%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(42%, var(--text-shell-line-color, #CCC)) , color-stop(42%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing])[lines=\"6\"] {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(88%, var(--text-shell-line-color, #CCC)) , color-stop(88%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(73%, var(--text-shell-line-color, #CCC)) , color-stop(73%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(78%, var(--text-shell-line-color, #CCC)) , color-stop(78%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(80%, var(--text-shell-line-color, #CCC)) , color-stop(80%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(71%, var(--text-shell-line-color, #CCC)) , color-stop(71%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(49%, var(--text-shell-line-color, #CCC)) , color-stop(49%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 49% , var(--text-shell-background, #FFF) 49%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n:host([animation=bouncing]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n  -webkit-animation: 0;\n          animation: 0;\n}\n\n:host([animation=gradient]) {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: -webkit-gradient(linear, left top, right top, color-stop(8%, var(--text-shell-animation-background)), color-stop(18%, var(--text-shell-animation-color)), color-stop(33%, var(--text-shell-animation-background)));\n  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n:host([animation=gradient])::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(85%, var(--text-shell-line-color, #CCC)) , color-stop(85%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"1\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(90%, var(--text-shell-line-color, #CCC)) , color-stop(90%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"2\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(87%, var(--text-shell-line-color, #CCC)) , color-stop(87%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(38%, var(--text-shell-line-color, #CCC)) , color-stop(38%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 38% , var(--text-shell-background, #FFF) 38%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"3\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(89%, var(--text-shell-line-color, #CCC)) , color-stop(89%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(73%, var(--text-shell-line-color, #CCC)) , color-stop(73%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(47%, var(--text-shell-line-color, #CCC)) , color-stop(47%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"4\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(86%, var(--text-shell-line-color, #CCC)) , color-stop(86%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(78%, var(--text-shell-line-color, #CCC)) , color-stop(78%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(74%, var(--text-shell-line-color, #CCC)) , color-stop(74%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(50%, var(--text-shell-line-color, #CCC)) , color-stop(50%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 50% , var(--text-shell-background, #FFF) 50%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"5\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(86%, var(--text-shell-line-color, #CCC)) , color-stop(86%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(60%, var(--text-shell-line-color, #CCC)) , color-stop(60%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(74%, var(--text-shell-line-color, #CCC)) , color-stop(74%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(71%, var(--text-shell-line-color, #CCC)) , color-stop(71%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(45%, var(--text-shell-line-color, #CCC)) , color-stop(45%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient])[lines=\"6\"]::after {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(91%, var(--text-shell-line-color, #CCC)) , color-stop(91%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(69%, var(--text-shell-line-color, #CCC)) , color-stop(69%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(73%, var(--text-shell-line-color, #CCC)) , color-stop(73%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(76%, var(--text-shell-line-color, #CCC)) , color-stop(76%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(75%, var(--text-shell-line-color, #CCC)) , color-stop(75%, var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(100%, var(--text-shell-background, #FFF)), to(var(--text-shell-background, #FFF))),  -webkit-gradient(linear, left top, right top, color-stop(48%, var(--text-shell-line-color, #CCC)) , color-stop(48%, var(--text-shell-background, #FFF)));\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 48% , var(--text-shell-background, #FFF) 48%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n:host([animation=gradient]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n:host([animation=gradient]).text-loaded::before, :host([animation=gradient]).text-loaded::after {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxzaGVsbFxcdGV4dC1zaGVsbFxcdGV4dC1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL0M6XFxVc2Vyc1xccm9oaXNldGhpXFxEb2N1bWVudHNcXGlvbmljXFxmaXJlY2hhdDRfdjIvc3JjXFxhcHBcXHNoZWxsXFx0ZXh0LXNoZWxsXFxtaXhpbnNcXG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kLnNjc3MiLCJzcmMvYXBwL3NoZWxsL3RleHQtc2hlbGwvQzpcXFVzZXJzXFxyb2hpc2V0aGlcXERvY3VtZW50c1xcaW9uaWNcXGZpcmVjaGF0NF92Mi9zcmNcXGFwcFxcc2hlbGxcXHRleHQtc2hlbGxcXG1peGluc1xcYmFja2dyb3VuZC1oZWlnaHQuc2NzcyIsInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC9DOlxcVXNlcnNcXHJvaGlzZXRoaVxcRG9jdW1lbnRzXFxpb25pY1xcZmlyZWNoYXQ0X3YyL3NyY1xcYXBwXFxzaGVsbFxcdGV4dC1zaGVsbFxcbWl4aW5zXFxib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBR0EsNEJBQUE7QUNSRjs7QURZQTtFRVBJLDBLQUFBO0VBQUEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUNmRiw0R0FBQTtBRmVGOztBRFVJO0VFYkEsMEtBQUE7RUFBQSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGc0JGOztBREdJO0VFZ0JBLG1kQUFBO0VBQUEsdVZBQUE7RUFDQSxnUEFBQTtFQUNBLDhJQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY2QkY7O0FESkk7RUVnQkEsNHZCQUFBO0VBQUEsa2pCQUFBO0VBQ0Esc2NBQUE7RUFDQSxtT0FBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGb0NGOztBRFhJO0VFZ0JBLHFpQ0FBQTtFQUFBLDZ3QkFBQTtFQUNBLDRwQkFBQTtFQUNBLHdUQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUYyQ0Y7O0FEbEJJO0VFZ0JBLDgwQ0FBQTtFQUFBLHcrQkFBQTtFQUNBLGszQkFBQTtFQUNBLDZZQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZrREY7O0FEekJJO0VFZ0JBLHVuREFBQTtFQUFBLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZ5REY7O0FEM0JFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUM2Qko7O0FEeEJBO0VJekJJLDBLQUFBO0VBQUEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFRG5CRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIVkY7O0FHdkRJO0VBQ0U7SUFDRSx3REFBQTtFSHlETjtFR3RESTtJQUNFLHlEQUFBO0VId0ROO0FBQ0Y7O0FHL0RJO0VBQ0U7SUFDRSx3REFBQTtFSHlETjtFR3RESTtJQUNFLHlEQUFBO0VId0ROO0FBQ0Y7O0FEeENJO0VJL0JBLDBLQUFBO0VBQUEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFRG5CRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIV0Y7O0FHNUVJO0VBQ0U7SUFDRSx3REFBQTtFSDhFTjtFRzNFSTtJQUNFLHlEQUFBO0VINkVOO0FBQ0Y7O0FEN0RJO0VJa0JBLG1kQUFBO0VBQUEsdVZBQUE7RUFDQSxnUEFBQTtFQUNBLDhJQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSGdDRjs7QUdoREk7RUFDRTtJQUNFLDRJQUFBO0VIa0ROO0VHL0NJO0lBQ0UsOElBQUE7RUhpRE47QUFDRjs7QUd4REk7RUFDRTtJQUNFLDRJQUFBO0VIa0ROO0VHL0NJO0lBQ0UsOElBQUE7RUhpRE47QUFDRjs7QURsRkk7RUlrQkEsNHZCQUFBO0VBQUEsa2pCQUFBO0VBQ0Esc2NBQUE7RUFDQSxtT0FBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhxREY7O0FHckVJO0VBQ0U7SUFDRSxnT0FBQTtFSHVFTjtFR3BFSTtJQUNFLG1PQUFBO0VIc0VOO0FBQ0Y7O0FEdkdJO0VJa0JBLHFpQ0FBQTtFQUFBLDZ3QkFBQTtFQUNBLDRwQkFBQTtFQUNBLHdUQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSDBFRjs7QUcxRkk7RUFDRTtJQUNFLG9UQUFBO0VINEZOO0VHekZJO0lBQ0Usd1RBQUE7RUgyRk47QUFDRjs7QUQ1SEk7RUlrQkEsODBDQUFBO0VBQUEsdytCQUFBO0VBQ0EsazNCQUFBO0VBQ0EsNllBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIK0ZGOztBRy9HSTtFQUNFO0lBQ0Usd1lBQUE7RUhpSE47RUc5R0k7SUFDRSw2WUFBQTtFSGdITjtBQUNGOztBRGpKSTtFSWtCQSx1bkRBQUE7RUFBQSxtc0NBQUE7RUFDQSx3a0NBQUE7RUFDQSxrZUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhvSEY7O0FHcElJO0VBQ0U7SUFDRSw0ZEFBQTtFSHNJTjtFR25JSTtJQUNFLGtlQUFBO0VIcUlOO0FBQ0Y7O0FEaktFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxvQkFBQTtVQUFBLFlBQUE7QUNrS0o7O0FEN0pBO0VBQ0UsNkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUcvREEsNEdBQUE7QUZnT0Y7O0FEMUpFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDhOQUNFO0VBREYsbUtBQ0U7RUFDRiw0QkFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7QUMySko7O0FEeEpFO0VBQ0U7SUFDRSw2QkFBQTtFQzBKSjtFRHZKRTtJQUNFLDRCQUFBO0VDeUpKO0FBQ0Y7O0FEaEtFO0VBQ0U7SUFDRSw2QkFBQTtFQzBKSjtFRHZKRTtJQUNFLDRCQUFBO0VDeUpKO0FBQ0Y7O0FEckpFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFRXhGQSwwS0FBQTtFQUFBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZnUUY7O0FEcEpJO0VHNUdGLDRHQUFBO0FGbVFGOztBRG5KTTtFRXBHRiwwS0FBQTtFQUFBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUYwUUY7O0FEOUpJO0VHNUdGLDRHQUFBO0FGNlFGOztBRDdKTTtFRXZFRixtZEFBQTtFQUFBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGb1JGOztBRHhLSTtFRzVHRiw0R0FBQTtBRnVSRjs7QUR2S007RUV2RUYsNHZCQUFBO0VBQUEsa2pCQUFBO0VBQ0Esc2NBQUE7RUFDQSxtT0FBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGOFJGOztBRGxMSTtFRzVHRiw0R0FBQTtBRmlTRjs7QURqTE07RUV2RUYscWlDQUFBO0VBQUEsNndCQUFBO0VBQ0EsNHBCQUFBO0VBQ0Esd1RBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRndTRjs7QUQ1TEk7RUc1R0YsNEdBQUE7QUYyU0Y7O0FEM0xNO0VFdkVGLDgwQ0FBQTtFQUFBLHcrQkFBQTtFQUNBLGszQkFBQTtFQUNBLDZZQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZrVEY7O0FEdE1JO0VHNUdGLDRHQUFBO0FGcVRGOztBRHJNTTtFRXZFRix1bkRBQUE7RUFBQSxtc0NBQUE7RUFDQSx3a0NBQUE7RUFDQSxrZUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGNFRGOztBRHRNRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDd01KOztBRHRNSTtFQUVFLGdCQUFBO0VBQ0Esb0JBQUE7VUFBQSxZQUFBO0FDdU1OIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vbWl4aW5zL2JhY2tncm91bmQtaGVpZ2h0XCI7XHJcbkBpbXBvcnQgXCIuL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZFwiO1xyXG5AaW1wb3J0IFwiLi9taXhpbnMvYm91bmNpbmctbGluZXMtYmFja2dyb3VuZFwiO1xyXG5cclxuJG1heC1saW5lcy1jb3VudDogNjtcclxuXHJcbjpob3N0IHtcclxuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6ICNFRUU7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlcjogM3B4O1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCk7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAvLyBUbyBmaXggMXB4IGxpbmUgbWlzYWxpZ25tZW50IGluIGNocm9tZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tncm91bmQtY2xpcFxyXG4gIC8vIChJIGFsc28gbm90aWNlZCB0aGF0IGlmIEkgc2V0IHRoZSBjb2xvciB0byBhIHNvbGlkIGNvbG9yIGluc3RlYWQgb2YgaGF2aW5nIG9wYWNpdHksIHRoZSBpc3N1ZSBkb2Vzbid0IGhhcHBlbilcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG4vLyBEZWZhdWx0IHN0eWxlcy4gV2hlbiBubyBhbmltYXRpb24gYXR0cmlidXRlIGlzIHByb3ZpZGVkXHJcbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKSB7XHJcbiAgLy8gRGVmYXVsdCBvbmUgbGluZSB0ZXh0LXNoZWxsXHJcbiAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoMSk7XHJcblxyXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcclxuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcclxuICAgICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQm91bmNpbmcgbGluZSBsb2FkaW5nIGFuaW1hdGlvblxyXG46aG9zdChbYW5pbWF0aW9uPVwiYm91bmNpbmdcIl0pIHtcclxuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcclxuICBAaW5jbHVkZSBib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kKDEpO1xyXG5cclxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heC1saW5lcy1jb3VudCB7XHJcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XHJcbiAgICAgIEBpbmNsdWRlIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoJGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgLy8gMCBpcyB0aGUgZGVmYXVsdCB2YWx1ZSAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTU5NjMwNDQvMTExNjk1OSlcclxuICAgIGFuaW1hdGlvbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEJhY2tncm91bmQgZ3JhZGllbnQgYmVuZWF0aCBtYXNrZWQgbGluZXNcclxuOmhvc3QoW2FuaW1hdGlvbj1cImdyYWRpZW50XCJdKSB7XHJcbiAgLS10ZXh0LXNoZWxsLWJhY2tncm91bmQ6ICNGRkY7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiAjRUVFO1xyXG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6ICNEREQ7XHJcblxyXG5cclxuICAvLyBDYWxjdWxhdGUgZGVmYXVsdCBoZWlnaHQgZm9yIDEgbGluZVxyXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsIDEpO1xyXG5cclxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSA4JSwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZCkgMzMlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XHJcbiAgICAwJXtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcclxuICAgIH1cclxuXHJcbiAgICAxMDAle1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBUaGUgbWFza3NcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG5cclxuICAgIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxyXG4gICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoMSk7XHJcbiAgfVxyXG5cclxuICAvLyBTdXBwb3J0IGZvciBbbGluZXNdIGF0dHJpYnV0ZVxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heC1saW5lcy1jb3VudCB7XHJcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XHJcbiAgICAgIC8vIENhbGN1bGF0ZSBkZWZhdWx0IGhlaWdodCBmb3IgJGkgbGluZXNcclxuICAgICAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGkpO1xyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG5cclxuICAgICY6OmJlZm9yZSxcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYW5pbWF0aW9uOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyOiAzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kKTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbn1cblxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDkyJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTIlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAxKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDEgLSAxKSkpO1xufVxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpW2xpbmVzPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5NCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDk0JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjJcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTUlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5NSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDUlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NSUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjNcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgMzMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAzMyUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAzKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xufVxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpW2xpbmVzPVwiNFwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2NiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDY2JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3MSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDcxJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSAzNCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDM0JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNCkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjVcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTQlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5NCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODAlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4MCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzElICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3MSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDIlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0MiUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMSkpKTtcbn1cbjpob3N0KDpub3QoW2FuaW1hdGlvbl0pKVtsaW5lcz1cIjZcIl0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTElICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzglICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3OCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjElICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2MSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjclICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2NyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgMzElICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAzMSUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDYgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA2KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xufVxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpLnRleHQtbG9hZGVkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbjpob3N0KFthbmltYXRpb249Ym91bmNpbmddKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg2JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDEpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMSAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVMaW5lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiMVwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg5JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDEpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMSAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVMaW5lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiMlwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg2JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQ1JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTXVsdGlMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDIpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA1NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiM1wiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA5MSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDkxJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2MiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDYyJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0MSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQxJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMykgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZU11bHRpTGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDU1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiNFwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4NyUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg3JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2NSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDY1JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2MyUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDYzJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0MCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA0KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlTXVsdGlMaW5lIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNzUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNzUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgNTUlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiNVwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3OCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDc4JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA2OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDY5JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3OCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDc4JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0MiUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQyJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMSkpKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTXVsdGlMaW5lO1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDUpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA3NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICA1NSUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pW2xpbmVzPVwiNlwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4OCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDg4JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3MyUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDczJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3OCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDc4JSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA4MCUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDgwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA3MSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDcxJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKSA0OSUgLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDQ5JSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMHB4LCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg2IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNiAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMSkpKTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZU11bHRpTGluZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDc1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDU1JSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgfVxufVxuOmhvc3QoW2FuaW1hdGlvbj1ib3VuY2luZ10pLnRleHQtbG9hZGVkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGFuaW1hdGlvbjogMDtcbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pIHtcbiAgLS10ZXh0LXNoZWxsLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6ICNFRUU7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6ICNEREQ7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZCkgOCUsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yKSAxOCUsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDMzJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XG4gIH1cbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg1JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODUlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAxKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDEgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiMVwiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgxIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjFcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDkwJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgOTAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAxKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDEgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiMlwiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogMikgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjJcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg3JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODclKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDM4JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMzglKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDIpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCIzXCJdIHtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAzKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiM1wiXTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgODklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA4OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDclICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0NyUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAzKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiNFwiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNCkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjRcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg2JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODYlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDc4JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzglKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDc0JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzQlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDUwJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNTAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA0KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiNVwiXSB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogNSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMSkpKTtcbn1cbjpob3N0KFthbmltYXRpb249Z3JhZGllbnRdKVtsaW5lcz1cIjVcIl06OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDg2JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgODYlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDYwJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNjAlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDc0JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzQlKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDcxJSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNzElKSwgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSAxMDAlLCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpIDQ1JSAsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgNDUlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwcHgsICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDIgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgyIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgzIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMyAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNCAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDQgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDUgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg1IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqIDUpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSk7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSlbbGluZXM9XCI2XCJdIHtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA2KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pW2xpbmVzPVwiNlwiXTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgOTElICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA5MSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNjklICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA2OSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzMlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3MyUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzYlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3NiUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNzUlICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA3NSUpLCAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpIDEwMCUsIHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRikgMTAwJSksICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQykgNDglICwgdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKSA0OCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBweCwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDIgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICgyIC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoMiAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDMgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICgzIC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoMyAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDMgLSAxKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg0IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNCAtIDIpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDQgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg0IC0gMSkpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNSAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDUgLSAyKSkpLCAgMCBjYWxjKCh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSAqICg1IC0gMSkpICsgKHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCkgKiAoNSAtIDEpKSksICAwIGNhbGMoKHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpICogKDYgLSAxKSkgKyAodmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSAqICg2IC0gMikpKSwgIDAgY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiAoNiAtIDEpKSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KSwgIDEwMCUgdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCksICAxMDAlIHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpLCAgMTAwJSB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogY2FsYygodmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCkgKiA2KSArICh2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpICogKDYgLSAxKSkpO1xufVxuOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pLnRleHQtbG9hZGVkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG46aG9zdChbYW5pbWF0aW9uPWdyYWRpZW50XSkudGV4dC1sb2FkZWQ6OmJlZm9yZSwgOmhvc3QoW2FuaW1hdGlvbj1ncmFkaWVudF0pLnRleHQtbG9hZGVkOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGFuaW1hdGlvbjogMDtcbn0iLCJAaW1wb3J0IFwiLi91dGlsc1wiO1xyXG5AaW1wb3J0IFwiLi9iYWNrZ3JvdW5kLWhlaWdodFwiO1xyXG5cclxuQG1peGluIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRsaW5lczogMSkge1xyXG4gICRsaW5lLWhlaWdodDogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XHJcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcclxuICAkYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtbGluZS1jb2xvciwgI0NDQyk7XHJcbiAgJG1hc2stY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XHJcbiAgJGxpbmUtYmctY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XHJcbiAgJGJnLXktcG9zOiAwcHg7XHJcbiAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDg1LCA5NSl9O1xyXG4gICRiZy1pbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKSc7XHJcbiAgJGJnLXBvc2l0aW9uOiAnMCAnICsgJGJnLXktcG9zO1xyXG4gICRiZy1zaXplOiAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0O1xyXG5cclxuICBAaWYgKCRsaW5lcyA9PSAxKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAjeyRiZy1pbWFnZX07XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAjeyRiZy1wb3NpdGlvbn07XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemV9O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9IEBlbHNlIHtcclxuICAgIEBmb3IgJGkgZnJvbSAyIHRocm91Z2ggJGxpbmVzIHtcclxuICAgICAgLy8gQWRkIHNlcGFyYXRvciBiZXR3ZWVuIGxpbmVzXHJcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlLCAjeyRsaW5lLWJnLWNvbG9yfSAxMDAlKSk7XHJcbiAgICAgIC8vIFRoaXMgbGluZWFyLWdyYWRpZW50IGFzIHNlcGFyYXRvciBzdGFydHMgYmVsb3cgdGhlIGxhc3QgbGluZSxcclxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtaGVpZ2h0IHRvIG91ciB5LXBvcyBwb2ludGVyXHJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAyKSkpO1xyXG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xyXG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XHJcblxyXG4gICAgICAvLyBBZGQgbmV3IGxpbmVcclxuICAgICAgLy8gVGhlIGxhc3QgbGluZSBzaG91bGQgYmUgbmFycm93IHRoYW4gdGhlIG90aGVyc1xyXG4gICAgICBAaWYgKCRpID09ICRsaW5lcykge1xyXG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSgzMCwgNTApfTtcclxuICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xyXG4gICAgICB9XHJcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKScpO1xyXG4gICAgICAvLyBUaGlzIG5ldyBsaW5lIHN0YXJ0cyBiZWxvdyB0aGUgcHJ2aW91c2x5IGFkZGVkIHNlcGFyYXRvcixcclxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtc3BhY2luZyB0byBvdXIgeS1wb3MgcG9pbnRlclxyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMSkpKTtcclxuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcclxuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3t0by1zdHJpbmcoJGJnLWltYWdlLCAnLCAnKX07XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAje3RvLXN0cmluZygkYmctcG9zaXRpb24sICcsICcpfTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkbGluZXMpO1xyXG59XHJcbiIsIkBtaXhpbiBiYWNrZ3JvdW5kLWhlaWdodCgkcHJvcGVydHksICRsaW5lczogMSkge1xyXG4gICRsaW5lLWhlaWdodDogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XHJcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcclxuXHJcbiAgI3skcHJvcGVydHl9OiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAjeyRsaW5lc30pICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skbGluZXN9IC0gMSkpKTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi91dGlsc1wiO1xyXG5cclxuQG1peGluIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoJGxpbmVzOiAxKSB7XHJcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcclxuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xyXG4gICRiZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKTtcclxuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcclxuICAkbGluZS1iZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcclxuICAkYmcteS1wb3M6IDBweDtcclxuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XHJcbiAgJGJnLWltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJztcclxuICAkYmctcG9zaXRpb246ICcwICcgKyAkYmcteS1wb3M7XHJcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XHJcbiAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206ICc4NSUgJyArICRsaW5lLWhlaWdodDtcclxuICAkYmctc2l6ZS1hbmltYXRpb24tdG86ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBpZiAoJGxpbmVzID09IDEpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7JGJnLWltYWdlfTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7JGJnLXBvc2l0aW9ufTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZX07XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTGluZTtcclxuXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVMaW5lIHtcclxuICAgICAgMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplLWFuaW1hdGlvbi1mcm9tfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgMTAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemUtYW5pbWF0aW9uLXRvfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAkbGluZXMge1xyXG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcclxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICN7JGxpbmUtYmctY29sb3J9IDEwMCUsICN7JGxpbmUtYmctY29sb3J9IDEwMCUpKTtcclxuICAgICAgLy8gVGhpcyBsaW5lYXItZ3JhZGllbnQgYXMgc2VwYXJhdG9yIHN0YXJ0cyBiZWxvdyB0aGUgbGFzdCBsaW5lLFxyXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDIpKSk7XHJcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XHJcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcclxuICAgICAgLy8gc2VwYXJhdG9yIGxpbmVzIGhhdmUgdGhlIHNhbWUgaW5pdGlhbCBhbmQgZW5kIHN0YXRlLCB0aHVzIG5vIGFuaW1hdGlvbiBvY2N1cnNcclxuICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xyXG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tdG86IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tdG8sICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcclxuXHJcbiAgICAgIC8vIEFkZCBuZXcgbGluZVxyXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXHJcbiAgICAgIEBpZiAoJGkgPT0gJGxpbmVzKSB7XHJcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDMwLCA1MCl9O1xyXG4gICAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICc1NSUgJyArICRsaW5lLWhlaWdodCk7XHJcbiAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg2MCwgODApfTtcclxuICAgICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnNzUlICcgKyAkbGluZS1oZWlnaHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknKTtcclxuICAgICAgLy8gVGhpcyBuZXcgbGluZSBzdGFydHMgYmVsb3cgdGhlIHBydmlvdXNseSBhZGRlZCBzZXBhcmF0b3IsXHJcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLXNwYWNpbmcgdG8gb3VyIHktcG9zIHBvaW50ZXJcclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDEpKSk7XHJcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XHJcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xyXG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tdG86IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tdG8sICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7dG8tc3RyaW5nKCRiZy1pbWFnZSwgJywgJyl9O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3t0by1zdHJpbmcoJGJnLXBvc2l0aW9uLCAnLCAnKX07XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLCAnLCAnKX07XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVNdWx0aUxpbmU7XHJcblxyXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTXVsdGlMaW5lIHtcclxuICAgICAgMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJywgJyl9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUtYW5pbWF0aW9uLXRvLCAnLCAnKX07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRsaW5lcyk7XHJcblxyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shell/text-shell/text-shell.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
    \**********************************************************/

  /*! exports provided: TextShellComponent */

  /***/
  function srcAppShellTextShellTextShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextShellComponent", function () {
      return TextShellComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");

    var TextShellComponent =
    /*#__PURE__*/
    function () {
      function TextShellComponent() {
        _classCallCheck(this, TextShellComponent);

        // To debug shell styles, change configuration in the assets/app-shell.config.json file
        this.debugMode = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.debug ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.debug : false;
        this.textLoaded = false;
      }

      _createClass(TextShellComponent, [{
        key: "data",
        set: function set(val) {
          if (!this.debugMode) {
            this._data = val !== undefined && val !== null ? val : '';
          }

          if (this._data && this._data !== '') {
            this.textLoaded = true;
          } else {
            this.textLoaded = false;
          }
        }
      }]);

      return TextShellComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.text-loaded'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TextShellComponent.prototype, "textLoaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], TextShellComponent.prototype, "data", null);
    TextShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-text-shell',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./text-shell.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shell/text-shell/text-shell.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./text-shell.component.scss */
      "./src/app/shell/text-shell/text-shell.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TextShellComponent);
    /***/
  },

  /***/
  "./src/app/tag-modal/tag-modal.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/tag-modal/tag-modal.module.ts ***!
    \***********************************************/

  /*! exports provided: TagModalPageModule */

  /***/
  function srcAppTagModalTagModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagModalPageModule", function () {
      return TagModalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tag_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tag-modal.page */
    "./src/app/tag-modal/tag-modal.page.ts");

    var routes = [{
      path: '',
      component: _tag_modal_page__WEBPACK_IMPORTED_MODULE_6__["TagModalPage"]
    }];

    var TagModalPageModule = function TagModalPageModule() {
      _classCallCheck(this, TagModalPageModule);
    };

    TagModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_tag_modal_page__WEBPACK_IMPORTED_MODULE_6__["TagModalPage"]]
    })], TagModalPageModule);
    /***/
  },

  /***/
  "./src/app/tag-modal/tag-modal.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/tag-modal/tag-modal.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTagModalTagModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZy1tb2RhbC90YWctbW9kYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tag-modal/tag-modal.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/tag-modal/tag-modal.page.ts ***!
    \*********************************************/

  /*! exports provided: TagModalPage */

  /***/
  function srcAppTagModalTagModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagModalPage", function () {
      return TagModalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TagModalPage =
    /*#__PURE__*/
    function () {
      function TagModalPage(modal, route, router) {
        _classCallCheck(this, TagModalPage);

        this.modal = modal;
        this.route = route;
        this.router = router;
        this.form = [];
        this.form = [];
        this.groupTags = this.route.snapshot.params.groupTags;
        this.form = this.groupTags;
      }

      _createClass(TagModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          var data = [];
          this.form.forEach(function (element) {
            data.push(element);
          });
          this.modal.dismiss(data, null, null);
        }
      }]);

      return TagModalPage;
    }();

    TagModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TagModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tag-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tag-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tag-modal/tag-modal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tag-modal.page.scss */
      "./src/app/tag-modal/tag-modal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], TagModalPage);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true,
      firebase: {
        /* apiKey: "AIzaSyBzI-lGb36R6EqUfX3gyA3jYVJjr-vUbQ0",//"AIzaSyDN6WmBnJGfN64BnR-r4TW9V8N1IHgps1w",
          authDomain: "chatapp-3f829.firebaseapp.com",
          databaseURL: "https://chatapp-3f829.firebaseio.com",
          projectId: "chatapp-3f829",
          storageBucket: "chatapp-3f829.appspot.com",
          messagingSenderId: "845839389008" */
        apiKey: "AIzaSyBzI-lGb36R6EqUfX3gyA3jYVJjr-vUbQ0",
        authDomain: "firechat-8fb8c.firebaseapp.com",
        databaseURL: "https://firechat-8fb8c.firebaseio.com",
        projectId: "firechat-8fb8c",
        storageBucket: "firechat-8fb8c.appspot.com",
        messagingSenderId: "1094106358076",
        appId: "1:1094106358076:web:aeafa6eda64aafc78afe39",
        measurementId: "G-4CLJ8NC2RF"
      },
      googleClientId: "845839389008-s0scp3mghdi67t5ga9t56j6265ibonp5.apps.googleusercontent.com"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__); // HAMMER TIME


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\rohisethi\Documents\ionic\firechat4_v2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map