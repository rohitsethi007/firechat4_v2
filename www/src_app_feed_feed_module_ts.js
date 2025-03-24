(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_feed_feed_module_ts"],{

/***/ 16916:
/*!****************************************************************!*\
  !*** ./src/app/components/emoji-picker/emoji-picker.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmojiPickerComponentModule: () => (/* binding */ EmojiPickerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _emoji_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji-picker.component */ 49841);





let EmojiPickerComponentModule = class EmojiPickerComponentModule {};
EmojiPickerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_emoji_picker_component__WEBPACK_IMPORTED_MODULE_0__.EmojiPickerComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule],
  exports: [_emoji_picker_component__WEBPACK_IMPORTED_MODULE_0__.EmojiPickerComponent]
})], EmojiPickerComponentModule);


/***/ }),

/***/ 85105:
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedPageModule: () => (/* binding */ FeedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/share.module */ 53952);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 55553);
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed.page */ 25578);
/* harmony import */ var _components_emoji_picker_emoji_picker_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/emoji-picker/emoji-picker.module */ 16916);










const routes = [{
  path: '',
  component: _feed_page__WEBPACK_IMPORTED_MODULE_2__.FeedPage
}];
let FeedPageModule = class FeedPageModule {};
FeedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _services_share_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _components_emoji_picker_emoji_picker_module__WEBPACK_IMPORTED_MODULE_3__.EmojiPickerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
  declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_2__.FeedPage]
})], FeedPageModule);


/***/ }),

/***/ 25578:
/*!***********************************!*\
  !*** ./src/app/feed/feed.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedPage: () => (/* binding */ FeedPage)
/* harmony export */ });
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _feed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.page.html?ngResource */ 74270);
/* harmony import */ var _feed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed.page.scss?ngResource */ 6430);
/* harmony import */ var _feed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_feed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 28490);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 78205);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 37401);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ 47038);
/* harmony import */ var _filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter.component */ 96344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reaction-list-modal/reaction-list-modal.page */ 11980);
/* harmony import */ var _components_emoji_picker_emoji_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/emoji-picker/emoji-picker.component */ 49841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _services_bookmark_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/bookmark.service */ 8098);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/notifications.service */ 72318);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 42450);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/compat/app */ 3602);




















let FeedPage = class FeedPage {
  constructor(dataProvider, navCtrl, modalCtrl, alertCtrl, routerOutlet, loadingProvider, actionSheet, route, router, afAuth, firestore, plt, popoverCtrl, bookmarkService, notificationsService) {
    this.dataProvider = dataProvider;
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    this.alertCtrl = alertCtrl;
    this.routerOutlet = routerOutlet;
    this.loadingProvider = loadingProvider;
    this.actionSheet = actionSheet;
    this.route = route;
    this.router = router;
    this.afAuth = afAuth;
    this.firestore = firestore;
    this.plt = plt;
    this.popoverCtrl = popoverCtrl;
    this.bookmarkService = bookmarkService;
    this.notificationsService = notificationsService;
    this.searchQuery = '';
    this.isSearchActive = false;
    this.isSearchFocused = false;
    this.recentSearches = [];
    this.trendingSearches = [];
    this.searchResults = [];
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.bookmarks = [];
    this.isFilterActive = false;
    this.unreadCount = 0;
    this.userReactions = [];
    this.userNotifications = [];
    this.loggedInUser = null;
    this.pushes = [];
    this.unreadNotifications = 0;
    this.posts = [];
    this.searchPosts = [];
    this.memberofGroups = [];
    this.maxNoOfPosts = 1000;
    this.ALOGOLIA_APP_ID = 'DNTXC08EBF';
    this.ALGOLIA_API_KEY = '4768de6e8b67959c064c0bf89443d449';
    this.slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay: false
    };
    this.plt.ready().then(() => {
      console.log('platform ready in Feed page');
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
        }
        ;
      });
      this.fcm.onTokenRefresh().subscribe(token => {
        // Register your new token in your back-end if you want
        // backend.registerToken(token);
        console.log('fcm token', token);
      });
    });
    // this.client = algoliasearch(this.ALOGOLIA_APP_ID, this.ALGOLIA_API_KEY, {protocol: 'https'});
    // this.index = this.client.initIndex('posts');
    this.isSearchActive = false;
  }
  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }
  getToken() {
    this.fcm.getToken().then(token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }
  ngOnInit() {
    this.isSearchActive = false;
    this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(searchTerm => {
      this.performSearch(searchTerm);
    });
    // Subscribe to bookmark changes
    this.bookmarkService.userBookmarks$.subscribe(bookmarks => {
      this.userBookmarks = bookmarks;
      // Update isBookmarked for all posts
      this.posts = this.posts.map(post => ({
        ...post,
        isBookmarked: this.bookmarkService.isBookmarked(post.key, bookmarks)
      }));
    });
    // Subscribe to unread notifications count
    this.notificationsSub = this.notificationsService.getUserNotifications().subscribe({
      next: notifications => {
        console.log('Raw notifications:', notifications); // Debug log
        this.unreadNotifications = notifications.filter(n => !n.read).length;
        console.info('Unread notifications:', this.unreadNotifications);
      },
      error: error => {
        console.error('Error fetching notifications:', error);
      }
    });
  }
  ngOnDestroy() {
    if (this.notificationsSub) {
      this.notificationsSub.unsubscribe();
    }
  }
  ionViewDidEnter() {
    this.isSearchActive = false;
  }
  ionViewWillEnter() {
    console.log('Entering feed view');
    this.isSearchActive = false;
    console.info('issearchactive', this.isSearchActive);
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      console.log('Current user:', this.loggedInUserId);
      // Get Posts with snapshot changes to get real-time updates
      this.dataProvider.getCurrentUser().then(u => {
        u.get({
          source: 'server'
        }).subscribe(user => {
          const userData = user.data();
          console.info('userData', userData);
          if (userData) {
            this.userReactions = userData.userReactions || [];
            this.userNotifications = userData.userNotifications || [];
            this.userBookmarks = userData.userBookmarks || [];
            this.loggedInUser = userData;
            this.getFeedData();
          }
        });
      });
    });
  }
  getFeedData(event, searchTerm) {
    var _this = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.loadingProvider.show();
        if (!searchTerm) {
          _this.firstDataSet = _this.firestore.collection('posts').ref.where('groupId', 'in', _this.loggedInUser.groups).orderBy('date', 'desc').limit(5);
          _this.firstDataSet.get().then(po => {
            _this.lastDataSet = po.docs[po.docs.length - 1];
            _this.posts = [];
            _this.loadEachPostData(po);
          });
        } else {
          // Split search term into keywords
          const searchTerms = searchTerm.toLowerCase().split(' ').filter(term => term.length > 0).map(term => term.trim());
          console.info('GOT searchTerms:', searchTerms);
          // Search using array-contains-any
          _this.firstDataSet = _this.firestore.collection('posts').ref
          // .where('groupId', 'in', this.loggedInUser.groups)
          .where('searchKeywords', 'array-contains-any', searchTerms).orderBy('date', 'desc').limit(20);
          _this.firstDataSet.get().then(po => {
            _this.lastDataSet = po.docs[po.docs.length - 1];
            _this.posts = [];
            _this.loadEachPostData(po);
          });
        }
        _this.isSearchActive = false;
        _this.loadingProvider.hide();
      } catch (error) {
        console.error('Error fetching feed data:', error);
        _this.isSearchActive = false;
        _this.loadingProvider.hide();
      }
    })();
  }
  addOrUpdatePost(post) {
    if (!this.posts) {
      this.posts = [post];
    } else {
      let index = -1;
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].key == post.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.posts[index] = post;
      } else {
        this.posts.push(post);
      }
    }
  }
  getUnreadMessagesCount() {
    if (this.unreadMessagesCount) {
      if (this.unreadMessagesCount > 0) {
        return this.unreadMessagesCount;
      }
    }
    return null;
  }
  showGroupOptions() {
    const action = this.actionSheet.create({
      header: 'Create a new ...',
      backdropDismiss: true,
      mode: 'md',
      cssClass: 'post-options-action-sheet',
      buttons: [{
        text: 'Post',
        icon: 'chatbubbles-outline',
        cssClass: 'actionicon',
        handler: () => {
          this.newPost();
        }
      }, {
        text: 'Poll',
        icon: 'podium-outline',
        handler: () => {
          this.newPoll();
        }
      }, {
        text: 'Event',
        icon: 'calendar-outline',
        cssClass: 'cancelAction',
        handler: () => {
          this.newEvent();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(r => r.present());
  }
  showPostOptions(post) {
    const action = this.actionSheet.create({
      header: 'Post options',
      backdropDismiss: true,
      mode: 'md',
      cssClass: 'post-options-action-sheet',
      buttons: this.createPostOptionButtons(post)
    }).then(r => r.present());
  }
  newPoll() {
    this.router.navigateByUrl('/new-poll/' + this.groupId);
  }
  newPost() {
    this.router.navigateByUrl('/new-post/' + this.groupId);
  }
  newResource() {
    this.router.navigateByUrl('/new-resource/' + this.groupId);
  }
  newEvent() {
    this.router.navigateByUrl('/new-event/' + this.groupId);
  }
  submitReactionPost(post, reactionType) {
    console.info('post.reactionType', post.reactionType);
    console.info('reactionType', reactionType);
    if (post.reactionType === '') {
      console.info('1');
      this.addPostReaction(post, reactionType);
      post.totalReactionCount += 1;
    } else if (post.reactionType !== reactionType) {
      console.info('2');
      this.removePostReaction(post, post.reactionType);
      this.addPostReaction(post, reactionType);
    } else if (post.reactionType === reactionType) {
      console.info('3');
      this.removePostReaction(post, reactionType);
      post.totalReactionCount -= 1;
    }
  }
  addPostReaction(post, reactionType) {
    // first find the post in the collection
    const postIndex = this.posts.findIndex(el => el.key === post.key);
    const p = this.posts[postIndex];
    const r = p.reactions.find(el => el.addedByUser.addedByKey === this.loggedInUserId && el.reactionType === reactionType);
    if (!r) {
      const react = {
        key: '',
        dateCreated: new Date(),
        addedByUser: {
          addedByKey: this.loggedInUserId,
          addedByUsername: this.loggedInUser.username,
          addedByImg: this.loggedInUser.img
        },
        reactionType: reactionType
      };
      this.dataProvider.updatePostReactions(post.key, react).then(() => {
        this.posts[postIndex].showSmiley = true;
        // Update user notifications.
        if (!this.userNotifications.some(p => p !== this.postId)) {
          this.userNotifications.push(this.postId);
          this.dataProvider.getUser(this.loggedInUserId).update({
            userNotifications: this.userNotifications
          });
        }
        // Update user activity.
        if (!this.userReactions && this.userReactions.some(p => p !== this.postId)) {
          this.userReactions.push(this.postId);
          this.dataProvider.getUser(this.loggedInUserId).update({
            userReactions: this.userReactions
          });
        }
      });
    } else {
      this.firestore.collection('posts').doc(post.key).collection('reactions').doc(r.key).update({
        reactionType: firebase_compat_app__WEBPACK_IMPORTED_MODULE_10__["default"].firestore.FieldValue.arrayUnion(reactionType)
      }).then(() => {
        const increment = firebase_compat_app__WEBPACK_IMPORTED_MODULE_10__["default"].firestore.FieldValue.increment(1);
        this.firestore.collection('posts').doc(post.key).update({
          totalReactionCount: increment
        });
      });
    }
  }
  removePostReaction(post, reactionType) {
    console.info('removePostReaction', post, reactionType);
    // first find the post in the collection
    const postIndex = this.posts.findIndex(el => el.key === post.key);
    const p = this.posts[postIndex];
    const found = false;
    if (p.reactions !== undefined) {
      const values = Object.keys(p.reactions).map(function (e) {
        return p.reactions[e];
      });
      const reaction = p.reactions.find(el => el.addedByUser.addedByKey === this.loggedInUserId);
      if (reaction.reactionType === reactionType) {
        console.info('here!!', post.key, reaction);
        this.dataProvider.removePostReaction(post.key, reaction.key);
      }
    }
  }
  showReactionsList(post) {
    var _this2 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (post.totalReactionCount === 0) {
        return;
      }
      // first find the post in the collection
      const postIndex = _this2.posts.findIndex(el => el.key === post.key);
      const p = _this2.posts[postIndex];
      const modal = yield _this2.modalCtrl.create({
        component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__.ReactionListModalPage,
        componentProps: {
          reactions: p.reactions
        }
      });
      return yield modal.present();
    })();
  }
  viewPost(post) {
    this.router.navigateByUrl('post/' + post.key);
  }
  viewUser(userId) {
    this.router.navigateByUrl('/profile/' + userId);
  }
  viewGroup(groupId) {
    this.router.navigateByUrl('/group/' + groupId);
  }
  followPost(post) {
    if (!this.userNotifications) {
      this.userNotifications = [post.key];
    } else {
      this.userNotifications.push(post.key);
    }
    this.dataProvider.getUser(this.loggedInUserId).update({
      userNotifications: this.userNotifications
    }).then(() => {
      this.loadingProvider.showToast('You will be notified when there are new replies');
    });
  }
  unFollowPost(post) {
    const index = this.userNotifications.indexOf(post.key, 0);
    if (index > -1) {
      this.userNotifications.splice(index, 1);
    }
    this.dataProvider.getUser(this.loggedInUserId).update({
      userNotifications: this.userNotifications
    }).then(() => {
      this.loadingProvider.showToast('You won\'t get notifications for this post');
    });
  }
  reportPost(post) {
    this.dataProvider.addReports(this.loggedInUserId, post).then(() => {
      this.loadingProvider.showToast('Thank you for reporting the post.');
    });
  }
  deletePost(post) {
    this.alertCtrl.create({
      header: 'Delete Post',
      message: 'Are you sure you want to delete this post?',
      cssClass: 'custom-alert',
      buttons: [{
        text: 'Cancel',
        cssClass: 'alert-button-cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        cssClass: 'alert-button-delete',
        handler: data => {
          this.firestore.doc('posts/' + post.key).delete();
        }
      }]
    }).then(r => r.present());
  }
  createPostOptionButtons(post) {
    const buttons = [];
    // Common styles for all buttons
    const buttonBaseStyle = 'action-sheet-button';
    const cancelButton = {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      cssClass: `${buttonBaseStyle} cancel-button`,
      handler: () => {
        console.log('Cancel clicked');
      }
    };
    const reportButton = {
      text: 'Report Post',
      icon: 'flag-outline',
      cssClass: `${buttonBaseStyle} report-button`,
      handler: () => {
        this.reportPost(post);
      }
    };
    // Owner-specific options
    if (post.addedByUser.addedByKey === this.loggedInUserId) {
      const deletePostButton = {
        text: 'Delete Post',
        icon: 'trash-outline',
        cssClass: `${buttonBaseStyle} delete-button danger`,
        handler: () => {
          this.deletePost(post);
        }
      };
      buttons.push(deletePostButton);
    }
    // Non-owner options
    else {
      const isNotificationsEnabled = this.userNotifications?.some(el => el === post.key);
      const notificationButton = {
        text: isNotificationsEnabled ? 'Turn Off Notifications' : 'Turn On Notifications',
        icon: isNotificationsEnabled ? 'notifications-off-outline' : 'notifications-outline',
        cssClass: `${buttonBaseStyle} notification-button${isNotificationsEnabled ? ' active' : ''}`,
        handler: () => {
          isNotificationsEnabled ? this.unFollowPost(post) : this.followPost(post);
        }
      };
      buttons.push(notificationButton);
    }
    buttons.push(reportButton);
    buttons.push(cancelButton);
    return buttons;
  }
  loadData(event) {
    if (this.posts.length > this.maxNoOfPosts) {
      event.target.disabled = true;
    } else {
      if (this.lastDataSet) {
        this.nextDataSet = this.firestore.collection('posts').ref.where('groupId', 'in', this.loggedInUser.groups).orderBy('date', 'desc').startAfter(this.lastDataSet).limit(5);
        this.nextDataSet.onSnapshot(po => {
          this.lastDataSet = po.docs[po.docs.length - 1];
          console.log('po.docs.length', po.docs.length);
          if (po.docs.length > 0) {
            this.loadEachPostData(po);
          }
          event.target.complete();
        });
      } else {
        event.target.complete();
      }
    }
  }
  loadEachPostData(po) {
    po.forEach(p => {
      let post;
      post = p.data();
      post.key = p.id;
      post.showMore = false;
      const startDate = new Date(post.date);
      if (post.type === 'poll') {
        const today = new Date();
        const de = post.data.dateEnding.toDate();
        if (post.de < today) {
          post.pollClosed = true;
        } else {
          post.pollClosed = false;
        }
        // Calculate votes for each option and total count
        post.totalPollCount = 0; // Initialize total count
        // Map through poll options and calculate votes
        post.data.pollOptions = post.data.pollOptions.map((option, index) => {
          // Get the members array for this option (or empty array if undefined)
          const members = option.members || [];
          const votes = members.length;
          // Add to total poll count
          post.totalPollCount += votes;
          // Return option with votes count
          return {
            ...option,
            votes: votes
          };
        });
      }
      // get reactions list
      this.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe(reactions => {
        post.reactions = [];
        reactions.forEach(element => {
          const reaction = element.payload.doc.data();
          reaction.key = element.payload.doc.id;
          post.reactions.push(reaction);
        });
        let reactionType;
        if (reactions.length > 0) {
          if (post.reactions.length > 0) {
            // Using find() to get the reaction type
            reactionType = post.reactions.find(el => el.addedByUser?.addedByKey === this.loggedInUserId)?.reactionType || '';
          }
          if (reactionType !== '') {
            post.reactionType = reactionType;
          } else {
            post.reactionType = '';
          }
        } else {
          post.reactionType = '';
        }
      });
      post.isBookmarked = this.userBookmarks?.includes(p.id) || false;
      this.addOrUpdatePost(post);
    });
    // check for bookmarks
    //this.checkBookmarkStatus();
  }
  doRefresh(event) {
    this.getFeedData();
    event.target.complete();
  }
  trimString(string, length) {
    if (string) {
      return string.length > length ? string.substring(0, length) + "..." : string;
    }
  }
  onFocus(event) {
    if (!this.searchMode) {
      this.searchMode = true;
    }
  }
  onCancel(event) {
    this.searchMode = false;
    this.searchPosts = [];
    this.searchQuery = '';
  }
  showEmojiPicker(event, item) {
    var _this3 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event.stopPropagation();
      const popover = yield _this3.popoverCtrl.create({
        component: _components_emoji_picker_emoji_picker_component__WEBPACK_IMPORTED_MODULE_7__.EmojiPickerComponent,
        componentProps: {
          post: item,
          postType: item.type
        },
        event: event,
        translucent: true,
        cssClass: 'emoji-picker-popover'
      });
      yield popover.present();
      const {
        data
      } = yield popover.onDidDismiss();
      if (data) {
        console.log('emoji selected', data);
        _this3.submitReactionPost(data.post, data.emoji.value);
      }
    })();
  }
  activateSearch() {
    var _this4 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isSearchActive = true;
      // Load searches when search is activated
      yield _this4.loadRecentSearches();
      yield _this4.loadTrendingSearches();
      setTimeout(() => {
        _this4.searchbar?.setFocus();
      }, 150);
    })();
  }
  deactivateSearch() {
    this.isSearchActive = false;
    this.searchQuery = '';
    // Clear the arrays when search is deactivated
    this.recentSearches = [];
    this.trendingSearches = [];
    this.searchResults = [];
    this.getFeedData();
  }
  onSearchSubmit(event) {
    event.preventDefault(); // Prevent event bubbling
    if (event.key === 'Enter' || event.keyCode === 13) {
      this.performSearch();
    }
  }
  performSearch(term) {
    var _this5 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.loadingProvider.show();
      _this5.searchQuery = term || _this5.searchQuery;
      if (_this5.searchQuery.trim()) {
        // Store the search query
        yield _this5.saveRecentSearch(_this5.searchQuery.trim());
        // Your existing search logic
        _this5.getFeedData(null, _this5.searchQuery);
      }
      _this5.loadingProvider.hide();
    })();
  }
  saveRecentSearch(term) {
    var _this6 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userId = _this6.loggedInUser.userId;
      const searchTerm = term.trim().toLowerCase(); // Normalize the search term
      // Check if this search term already exists for this user
      const existingSearchQuery = _this6.firestore.collection('userSearches').doc(userId).collection('searches', ref => ref.where('term', '==', searchTerm).limit(1));
      const existingSearches = yield existingSearchQuery.get().toPromise();
      if (existingSearches.empty) {
        // Only add if the search term doesn't exist
        yield _this6.firestore.collection('userSearches').doc(userId).collection('searches').add({
          term: searchTerm,
          timestamp: firebase_compat_app__WEBPACK_IMPORTED_MODULE_10__["default"].firestore.FieldValue.serverTimestamp()
        });
        // Update trending searches count
        const trendingRef = _this6.firestore.collection('trendingSearches').doc(searchTerm);
        yield trendingRef.set({
          term: searchTerm,
          count: firebase_compat_app__WEBPACK_IMPORTED_MODULE_10__["default"].firestore.FieldValue.increment(1)
        }, {
          merge: true
        });
      } else {
        // Update timestamp of existing search
        const existingDoc = existingSearches.docs[0];
        yield existingDoc.ref.update({
          timestamp: firebase_compat_app__WEBPACK_IMPORTED_MODULE_10__["default"].firestore.FieldValue.serverTimestamp()
        });
      }
    })();
  }
  loadRecentSearches() {
    var _this7 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this7.loggedInUser;
      if (user) {
        _this7.firestore.collection('userSearches').doc(user.userId).collection('searches', ref => ref.orderBy('timestamp', 'desc').limit(10)).snapshotChanges().subscribe(actions => {
          _this7.recentSearches = actions.map(a => ({
            id: a.payload.doc.id,
            term: a.payload.doc.data().term,
            timestamp: a.payload.doc.data().timestamp
          }));
        });
      }
    })();
  }
  onSearchInput(event) {
    this.searchSubject.next(event.target.value);
  }
  loadTrendingSearches() {
    this.firestore.collection('trendingSearches', ref => ref.orderBy('count', 'desc').limit(5)).snapshotChanges().subscribe(actions => {
      this.trendingSearches = actions.map(a => ({
        id: a.payload.doc.id,
        ...a.payload.doc.data()
      }));
    });
  }
  removeRecentSearch(searchId) {
    const userId = this.loggedInUser.userId;
    return this.firestore.collection('userSearches').doc(userId).collection('searches').doc(searchId).delete();
  }
  removeFilter(filter) {
    this.activeFilters = this.activeFilters.filter(f => f.id !== filter.id);
    // Update your filtered results
  }
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
    // Optionally return to feed view
    this.deactivateSearch();
  }
  presentFilterPopover(ev) {
    var _this8 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this8.popoverCtrl.create({
        component: _filter_component__WEBPACK_IMPORTED_MODULE_5__.FilterComponent,
        event: ev,
        translucent: true,
        cssClass: 'filter-popover',
        backdropDismiss: true,
        keyboardClose: true,
        mode: 'md' // Using material design mode for better accessibility
      });
      // Handle keyboard events for accessibility
      const handleKeydown = e => {
        if (e.key === 'Escape') {
          popover.dismiss();
        }
      };
      document.addEventListener('keydown', handleKeydown);
      yield popover.present();
      const {
        data
      } = yield popover.onWillDismiss();
      // Clean up event listener
      document.removeEventListener('keydown', handleKeydown);
      if (data) {
        _this8.isFilterActive = data.type !== 'all' || data.groups && data.groups.length > 0;
        _this8.applyFilters(data);
        console.info('filter data', data);
      }
    })();
  }
  applyFilters(filters) {
    console.log('Applying filters:', filters);
    // Implement your filter logic here
  }
  calculatePercentage(votes, total) {
    if (!total || total === 0) return 0;
    return Math.round(votes / total * 100);
  }
  getPollColor(index) {
    const colors = ['#4CAF50', '#2196F3', '#FF9800', '#E91E63', '#9C27B0', '#00BCD4' // cyan
    ];
    return colors[index % colors.length];
  }
  // async toggleBookmark(post: any) {
  //   try {
  //     this.loadingProvider.show();
  //     console.log('toggling bookmark')
  //     const userId = this.loggedInUserId;
  //     post.isBookmarked = await this.bookmarkService.toggleBookmark(post, userId, this.userBookmarks);
  //     this.loadingProvider.hide();
  //   } catch (error) {
  //     console.error('Error toggling bookmark:', error);
  //     this.loadingProvider.hide();
  //   }
  // }
  toggleBookmark(post) {
    var _this9 = this;
    return (0,_Users_rohitsethi_Documents_firechat4_v2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userId = _this9.loggedInUserId;
      post.isBookmarked = yield _this9.bookmarkService.toggleBookmark(post, userId, _this9.userBookmarks);
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRouterOutlet
  }, {
    type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ActionSheetController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
  }, {
    type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_17__.AngularFireAuth
  }, {
    type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_18__.AngularFirestore
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.PopoverController
  }, {
    type: _services_bookmark_service__WEBPACK_IMPORTED_MODULE_8__.BookmarkService
  }, {
    type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService
  }];
  static #_2 = this.propDecorators = {
    infiniteScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonInfiniteScroll, {
        static: true
      }]
    }],
    searchbar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
      args: ['searchbar']
    }]
  };
};
FeedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: 'app-feed',
  template: _feed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_feed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FeedPage);


/***/ }),

/***/ 6430:
/*!************************************************!*\
  !*** ./src/app/feed/feed.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --page-margin: var(--app-narrow-margin);
  --page-background: var(--app-background);
}

ion-content {
  --background: #ffffff;
}

ion-header ion-toolbar {
  --background: transparent;
}
ion-header ion-toolbar .search-header {
  padding: 0 16px;
}
ion-header ion-toolbar .search-header .back-button-col {
  padding: 0;
  max-width: 32px;
}
ion-header ion-toolbar .search-header .back-button-col ion-button {
  margin: 0;
  --padding-start: 0;
  --padding-end: 0;
  height: 40px;
}
ion-header ion-toolbar .search-header .searchbar-col {
  padding: 0;
}
ion-header ion-toolbar .search-header .custom-searchbar {
  --background: var(--ion-color-light);
  --border-radius: 8px;
  margin: 0;
  padding: 0;
  height: 40px;
  --box-shadow: none;
}
ion-header ion-toolbar .search-header .custom-searchbar::part(container) {
  margin: 0;
  padding: 0;
}
ion-header ion-toolbar .search-header .custom-searchbar::part(search-icon) {
  color: var(--ion-color-medium);
  font-size: 20px;
  margin-inline: 8px;
  width: 20px;
  height: 20px;
}
ion-header ion-toolbar .search-header .custom-searchbar::part(input) {
  padding-inline-start: 0;
  padding-inline-end: 8px;
  font-size: 16px;
  background: var(--ion-color-light);
  border-radius: 8px;
}
ion-header ion-toolbar .search-header .custom-searchbar::part(background) {
  border-radius: 8px;
}
ion-header ion-toolbar .search-header .custom-searchbar::part(cancel-button) {
  display: none;
}
ion-header ion-toolbar .regular-header .search-container {
  display: flex;
  align-items: right;
  --padding-end: 1px !important;
}
ion-header ion-toolbar .regular-header .search-container .search-box {
  flex: 1;
  display: flex;
  align-items: center;
  background: var(--ion-color-light);
  border-radius: 8px;
  padding: 8px 12px;
  height: 40px;
}
ion-header ion-toolbar .regular-header .search-container .search-box ion-icon {
  margin-right: 8px;
  color: var(--ion-color-medium);
  font-size: 20px;
  width: 20px;
  height: 20px;
}
ion-header ion-toolbar .regular-header .search-container .search-box ion-input {
  --padding-start: 0;
  --placeholder-color: var(--ion-color-medium);
  font-size: 16px;
}
ion-header ion-toolbar .regular-header .search-container .action-buttons {
  display: flex;
  align-items: center;
  gap: 1px;
  --padding-end: 1px !important;
}
ion-header ion-toolbar .regular-header .search-container .action-buttons .action-btn {
  position: relative;
}
ion-header ion-toolbar .regular-header .search-container .action-buttons .action-btn ion-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 12px;
}

.search-content {
  padding: 16px;
  background: #ffffff;
}
.search-content .search-section {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
.search-content .search-section .section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.search-content .search-section .section-header h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
}
.search-content .search-section .section-header .clear-all {
  font-size: 0.8rem;
  color: var(--ion-color-medium);
  text-transform: none;
}
.search-content .search-section .search-items .search-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}
.search-content .search-section .search-items .search-item:last-child {
  border-bottom: none;
}
.search-content .search-section .search-items .search-item .search-term {
  display: flex;
  align-items: center;
  flex: 1;
  cursor: pointer;
}
.search-content .search-section .search-items .search-item .search-term .history-icon {
  color: var(--ion-color-medium);
  margin-right: 12px;
  font-size: 1.2rem;
}
.search-content .search-section .search-items .search-item .search-term span {
  color: #333;
  font-size: 0.95rem;
}
.search-content .search-section .search-items .search-item .delete-btn {
  --padding-start: 8px;
  --padding-end: 8px;
  height: 30px;
  color: var(--ion-color-medium);
}
.search-content .search-section .trending-items .trending-item {
  margin-bottom: 12px;
}
.search-content .search-section .trending-items .trending-item:last-child {
  margin-bottom: 0;
}
.search-content .search-section .trending-items .trending-item .trend-content {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.search-content .search-section .trending-items .trending-item .trend-content:active {
  background: #f0f0f0;
}
.search-content .search-section .trending-items .trending-item .trend-content .trend-rank {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ion-color-primary);
  color: white;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 12px;
}
.search-content .search-section .trending-items .trending-item .trend-content .trend-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.search-content .search-section .trending-items .trending-item .trend-content .trend-info .trend-term {
  color: #333;
  font-size: 0.95rem;
  margin-bottom: 2px;
}
.search-content .search-section .trending-items .trending-item .trend-content .trend-info .trend-count {
  color: var(--ion-color-medium);
  font-size: 0.8rem;
}
.search-content .search-section .trending-items .trending-item .trend-content .trend-icon {
  color: var(--ion-color-success);
  font-size: 1.2rem;
}

.search-results-header {
  padding: 16px;
  background: #ffffff;
  border-bottom: 1px solid var(--ion-color-light);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-results-header .results-info h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ion-color-dark);
}
.search-results-header .results-info p {
  margin: 4px 0 0;
  font-size: 0.9rem;
  color: var(--ion-color-medium);
}
.search-results-header ion-button {
  font-size: 0.9rem;
  --padding-start: 8px;
  --padding-end: 8px;
  height: 32px;
}
.search-results-header ion-button ion-icon {
  margin-right: 4px;
}

.no-results {
  padding: 48px 16px;
  text-align: center;
  color: var(--ion-color-medium);
}
.no-results ion-icon {
  font-size: 48px;
  margin-bottom: 16px;
}
.no-results h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
}
.no-results p {
  margin: 8px 0 0;
  font-size: 0.9rem;
}

@media (prefers-color-scheme: dark) {
  .search-results-header {
    background: #1e1e1e;
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.search-section {
  animation: fadeIn 0.3s ease-out;
}

@media (prefers-color-scheme: dark) {
  .search-content {
    background: #1a1a1a;
  }
  .search-content .search-section {
    background: #2d2d2d;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  .search-content .search-section .section-header h2 {
    color: #ffffff;
  }
  .search-content .search-section .search-items .search-item {
    border-bottom-color: #3d3d3d;
  }
  .search-content .search-section .search-items .search-item .search-term span {
    color: #ffffff;
  }
  .search-content .search-section .trending-items .trending-item .trend-content {
    background: #333333;
  }
  .search-content .search-section .trending-items .trending-item .trend-content .trend-info .trend-term {
    color: #ffffff;
  }
}
@media (prefers-color-scheme: dark) {
  ion-header .search-box {
    background: rgba(var(--ion-color-light-rgb), 0.05) !important;
  }
  ion-header .search-box.focused {
    background: rgba(var(--ion-color-light-rgb), 0.1) !important;
  }
  ion-header ion-chip {
    background: rgba(var(--ion-color-light-rgb), 0.1) !important;
  }
}
.listing-item {
  margin: 12px 8px;
  animation: fadeIn 0.3s ease-out;
}
.listing-item ion-card {
  margin: 0;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
.listing-item ion-card .post-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid var(--ion-color-light);
}
.listing-item ion-card .post-header .user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}
.listing-item ion-card .post-header .user-info .user-avatar {
  width: 40px;
  height: 40px;
  border: 2px solid var(--ion-color-light);
}
.listing-item ion-card .post-header .user-info .user-details .username {
  font-weight: 600;
  color: var(--ion-color-dark);
  font-size: 16px;
  margin-bottom: 4px;
  display: block;
}
.listing-item ion-card .post-header .user-info .user-details .post-meta {
  font-size: 13px;
  color: var(--ion-color-medium);
}
.listing-item ion-card .post-header .user-info .user-details .post-meta .group-name {
  color: var(--ion-color-primary);
  font-weight: 500;
}
.listing-item ion-card .post-header .options-button {
  --padding-start: 8px;
  --padding-end: 8px;
  margin: 0;
  height: 36px;
}
.listing-item ion-card ion-card-content.message {
  padding: 0 12px 12px;
  margin-top: 10px;
}
.listing-item ion-card ion-card-content.message .slider {
  border-radius: 8px;
  overflow: hidden;
  margin: 8px 0;
}
.listing-item ion-card ion-card-content.message .slider .bgSizeContain {
  height: 180px;
  background-size: cover;
  background-position: center;
}
.listing-item ion-card ion-card-content.message video {
  border-radius: 8px;
  margin: 8px 0;
  width: 100%;
}
.listing-item ion-card ion-card-content.message ion-label {
  font-size: 14px;
  line-height: 1.4;
  color: var(--ion-color-dark);
}
.listing-item ion-card ion-card-content.message ion-label b {
  font-weight: 600;
}
.listing-item ion-card ion-card-content.message ion-label .show-more {
  color: var(--ion-color-primary);
  font-size: 13px;
  font-weight: 500;
}
.listing-item ion-card ion-card-content.message .tags-wrapper {
  margin: 8px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating {
  display: inline-flex;
  align-items: center;
  background: var(--ion-color-primary-tint);
  color: var(--ion-color-primary);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating:before {
  content: "#";
  margin-right: 2px;
  opacity: 0.7;
}
.listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating:active {
  transform: scale(0.95);
  background: var(--ion-color-primary);
  color: white;
}
.listing-item ion-card ion-card-content.message .reactions-bar {
  padding: 8px 0;
}
.listing-item ion-card ion-card-content.message .reactions-bar ion-row {
  align-items: center;
}
.listing-item ion-card ion-card-content.message .reactions-bar ion-buttons ion-button {
  --padding-start: 8px;
  --padding-end: 8px;
  height: 36px;
}
.listing-item ion-card ion-card-content.message .reactions-bar ion-buttons ion-button .icon {
  font-size: 20px;
  color: var(--ion-color-medium);
}
.listing-item ion-card ion-card-content.message .reactions-bar .reaction-count-button .reaction-count-container {
  display: flex;
  align-items: center;
  gap: 4px;
}
.listing-item ion-card ion-card-content.message .reactions-bar .reaction-count-button .stacked-icons {
  position: relative;
  width: 28px;
  height: 20px;
}
.listing-item ion-card ion-card-content.message .reactions-bar .reaction-count-button .stacked-icons .icon {
  position: absolute;
  width: 20px;
  height: 20px;
}
.listing-item ion-card ion-card-content.message .reactions-bar .reaction-count-button .stacked-icons .icon.smile {
  left: 0;
  z-index: 2;
}
.listing-item ion-card ion-card-content.message .reactions-bar .reaction-count-button .stacked-icons .icon.hug {
  left: 8px;
  z-index: 1;
}
.listing-item ion-card ion-card-content.message .reactions-bar .comment-count {
  display: flex;
  align-items: center;
  gap: 4px;
}
.listing-item ion-card ion-card-content.message .reactions-bar .comment-count .icon {
  margin-right: 2px;
}
.listing-item ion-card ion-card-content.message .reactions-bar .count-text {
  font-size: 14px;
  color: var(--ion-color-medium);
  line-height: 1;
}
.listing-item ion-card ion-card-content.message .reactions-bar .ion-text-end ion-buttons {
  gap: 4px;
}
.listing-item ion-card ion-card-content.message .reactions-bar .ion-text-end ion-buttons ion-button:last-child {
  --padding-end: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.5;
  }
}
.searchaddedBy {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
}
.searchaddedBy .searchaddedByImg {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}
.searchaddedBy p {
  margin: 0;
  line-height: 1.3;
}
.searchaddedBy p .searchaddedByTitle {
  color: var(--ion-color-dark);
  font-size: 14px;
  text-decoration: none;
}
.searchaddedBy p .searchaddedByTitle b {
  font-weight: 600;
}
.searchaddedBy p .searchaddedByTitle:active {
  opacity: 0.7;
}
.searchaddedBy p .searchaddedByDate {
  color: var(--ion-color-medium);
  font-size: 12px;
  display: inline-block;
  margin-left: 4px;
}

.badge {
  float: right;
  font-size: 11px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}
.badge[color=secondary] {
  --background: var(--ion-color-secondary-tint);
  --color: var(--ion-color-secondary-shade);
}
.badge[color=warning] {
  --background: var(--ion-color-warning-tint);
  --color: var(--ion-color-warning-shade);
}
.badge[color=medium] {
  --background: var(--ion-color-medium-tint);
  --color: var(--ion-color-medium-shade);
}
.badge[color=dark] {
  --background: var(--ion-color-dark-tint);
  --color: var(--ion-color-dark-shade);
}

div[class*=search] .listing-item {
  margin: 10px 8px;
}
div[class*=search] .listing-item ion-card {
  margin: 0;
  border-radius: 12px;
  background: var(--ion-color-light);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}
div[class*=search] .listing-item ion-card ion-card-header {
  padding: 10px 12px;
}
div[class*=search] .listing-item ion-card ion-card-header ion-row {
  align-items: flex-start;
}
div[class*=search] .listing-item ion-card ion-card-content.message {
  padding: 0 12px 12px;
}
div[class*=search] .listing-item ion-card ion-card-content.message ion-label {
  font-size: 14px;
  line-height: 1.4;
  color: var(--ion-color-dark);
}
div[class*=search] .listing-item ion-card ion-card-content.message ion-label span {
  display: inline-block;
  margin-bottom: 8px;
}
div[class*=search] .listing-item ion-card ion-card-content.message ion-label span b {
  font-weight: 600;
}
div[class*=search] .listing-item ion-card ion-card-content.message .tags-wrapper {
  margin: 8px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
div[class*=search] .listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating {
  display: inline-flex;
  align-items: center;
  background: var(--ion-color-primary-tint);
  color: var(--ion-color-primary);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}
div[class*=search] .listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating:before {
  content: "#";
  margin-right: 2px;
  opacity: 0.7;
}
div[class*=search] .listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating:active {
  transform: scale(0.95);
  background: var(--ion-color-primary);
  color: white;
}
div[class*=search] .listing-item ion-card ion-card-content.message div[class*=event] {
  font-size: 14px;
  color: var(--ion-color-dark);
  margin-bottom: 8px;
}
div[class*=search] .listing-item ion-card ion-card-content.message div[class*=event] b {
  font-weight: 600;
}
div[class*=search] .listing-item ion-card ion-card-content.message div[class*=weblink] {
  font-size: 13px;
  color: var(--ion-color-medium);
  margin-top: 4px;
}

ion-card-content[class*=poll] b, ion-card-content[class*=resource] b {
  display: inline-block;
  margin-bottom: 4px;
}

ion-card-content.pollmessage {
  background-color: rgba(var(--ion-color-primary-rgb), 0.03);
  padding: 16px !important;
}
ion-card-content.pollmessage b {
  font-size: 16px;
  display: block;
  margin-bottom: 16px;
  color: var(--ion-color-dark);
  line-height: 1.4;
}
ion-card-content.pollmessage ion-row {
  margin: 0 !important;
  padding: 0 !important;
}
ion-card-content.pollmessage ion-row ion-col {
  padding: 0 !important;
}
ion-card-content.pollmessage ion-row ion-col div {
  background: rgba(var(--ion-color-primary-rgb), 0.03);
  padding: 8px 12px;
  border-radius: 6px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.08);
  transition: all 0.2s ease;
}
ion-card-content.pollmessage ion-row ion-col div .poll-circle {
  width: 12px;
  height: 12px;
  min-width: 12px;
  border-radius: 50%;
  margin-right: 12px;
}
ion-card-content.pollmessage ion-row ion-col div span:not(.poll-circle) {
  font-size: 14px;
  color: var(--ion-color-dark);
}
ion-card-content.pollmessage ion-row ion-col div:hover {
  background: rgba(var(--ion-color-primary-rgb), 0.08);
  transform: translateX(2px);
}
ion-card-content.pollmessage .circle-0 {
  background: #FF6B6B;
}
ion-card-content.pollmessage .circle-1 {
  background: #4ECDC4;
}
ion-card-content.pollmessage .circle-2 {
  background: #45B7D1;
}
ion-card-content.pollmessage .circle-3 {
  background: #96CEB4;
}
ion-card-content.pollmessage .circle-4 {
  background: #FFD93D;
}
ion-card-content.pollmessage .circle-5 {
  background: #FF8066;
}
ion-card-content.pollmessage .tags-wrapper {
  margin: 12px 0 8px;
}
ion-card-content.pollmessage .tags-wrapper ion-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
ion-card-content.pollmessage .tags-wrapper ion-row .tags {
  margin: 0;
}
ion-card-content.pollmessage .tags-wrapper ion-row .tags .item-rating {
  background: rgba(var(--ion-color-primary-rgb), 0.08);
  color: var(--ion-color-primary);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}
ion-card-content.pollmessage .info-row {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
ion-card-content.pollmessage .info-row ion-col {
  padding: 0;
}
ion-card-content.pollmessage .info-row .text {
  color: var(--ion-color-medium);
  font-size: 12px;
}

ion-card:has(ion-card-content.pollmessage) {
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border-left: 3px solid var(--ion-color-primary);
}

.event-card {
  margin: 8px;
  border-radius: 12px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
.event-card ion-card-content {
  padding: 12px;
  display: flex;
  gap: 16px;
}
.event-card ion-card-content .date-container .date-badge {
  background: var(--ion-color-light);
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  min-width: 60px;
}
.event-card ion-card-content .date-container .date-badge .month {
  display: block;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--ion-color-primary);
}
.event-card ion-card-content .date-container .date-badge .day {
  display: block;
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  color: var(--ion-color-dark);
}
.event-card ion-card-content .event-content {
  flex: 1;
}
.event-card ion-card-content .event-content .title-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;
}
.event-card ion-card-content .event-content .title-row .event-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--ion-color-dark);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.event-card ion-card-content .event-content .title-row .event-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(var(--ion-color-primary-rgb), 0.1);
  border-radius: 16px;
  flex-shrink: 0;
}
.event-card ion-card-content .event-content .title-row .event-tag ion-icon {
  font-size: 14px;
  color: var(--ion-color-primary);
}
.event-card ion-card-content .event-content .title-row .event-tag span {
  font-size: 11px;
  font-weight: 500;
  color: var(--ion-color-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.event-card ion-card-content .event-content .event-details {
  margin-bottom: 8px;
}
.event-card ion-card-content .event-content .event-details .detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}
.event-card ion-card-content .event-content .event-details .detail-item ion-icon {
  font-size: 16px;
  color: var(--ion-color-medium);
  margin-right: 8px;
}
.event-card ion-card-content .event-content .event-details .detail-item span {
  font-size: 14px;
  color: var(--ion-color-medium);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.event-card ion-card-content .event-content .attendance-count {
  display: flex;
  align-items: center;
  padding-top: 8px;
  border-top: 1px solid var(--ion-color-light);
}
.event-card ion-card-content .event-content .attendance-count ion-icon {
  font-size: 16px;
  color: var(--ion-color-primary);
  margin-right: 6px;
}
.event-card ion-card-content .event-content .attendance-count span {
  font-size: 13px;
  color: var(--ion-color-medium);
  font-weight: 500;
}
.event-card:active {
  transform: scale(0.98);
  transition: transform 0.1s ease;
}

.poll-card {
  margin: 8px;
  border-radius: 12px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
.poll-card ion-card-content {
  padding: 16px;
}
.poll-card ion-card-content .poll-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}
.poll-card ion-card-content .poll-header .poll-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  flex: 1;
  padding-right: 12px;
}
.poll-card ion-card-content .poll-header .poll-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(var(--ion-color-primary-rgb), 0.1);
  border-radius: 16px;
}
.poll-card ion-card-content .poll-header .poll-tag ion-icon {
  font-size: 14px;
  color: var(--ion-color-primary);
}
.poll-card ion-card-content .poll-header .poll-tag span {
  font-size: 11px;
  font-weight: 500;
  color: var(--ion-color-primary);
  text-transform: uppercase;
}
.poll-card ion-card-content .poll-options {
  margin-bottom: 16px;
}
.poll-card ion-card-content .poll-options .poll-option {
  margin-bottom: 12px;
}
.poll-card ion-card-content .poll-options .poll-option:last-child {
  margin-bottom: 0;
}
.poll-card ion-card-content .poll-options .poll-option .option-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.poll-card ion-card-content .poll-options .poll-option .option-content .option-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.poll-card ion-card-content .poll-options .poll-option .option-content .option-info .poll-circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.poll-card ion-card-content .poll-options .poll-option .option-content .option-info .option-name {
  font-size: 14px;
  color: var(--ion-color-dark);
}
.poll-card ion-card-content .poll-options .poll-option .option-content .vote-count {
  font-size: 13px;
  color: var(--ion-color-medium);
  min-width: 24px;
  text-align: right;
}
.poll-card ion-card-content .poll-options .poll-option .progress-bar {
  height: 6px;
  background: var(--ion-color-light);
  border-radius: 3px;
  overflow: hidden;
}
.poll-card ion-card-content .poll-options .poll-option .progress-bar .progress {
  height: 100%;
  min-width: 4px;
  border-radius: 3px;
  transition: width 0.3s ease;
}
.poll-card ion-card-content .poll-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid var(--ion-color-light);
}
.poll-card ion-card-content .poll-footer .poll-status, .poll-card ion-card-content .poll-footer .total-votes {
  display: flex;
  align-items: center;
  gap: 6px;
}
.poll-card ion-card-content .poll-footer .poll-status ion-icon, .poll-card ion-card-content .poll-footer .total-votes ion-icon {
  font-size: 16px;
  color: var(--ion-color-medium);
}
.poll-card ion-card-content .poll-footer .poll-status span, .poll-card ion-card-content .poll-footer .total-votes span {
  font-size: 13px;
  color: var(--ion-color-medium);
}
.poll-card ion-card-content .poll-footer .poll-status.closed, .poll-card ion-card-content .poll-footer .total-votes.closed {
  color: var(--ion-color-danger);
}
.poll-card ion-card-content .poll-footer .poll-status.closed ion-icon, .poll-card ion-card-content .poll-footer .poll-status.closed span, .poll-card ion-card-content .poll-footer .total-votes.closed ion-icon, .poll-card ion-card-content .poll-footer .total-votes.closed span {
  color: var(--ion-color-danger);
}`, "",{"version":3,"sources":["webpack://./src/app/feed/feed.page.scss"],"names":[],"mappings":"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","sourcesContent":[":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n\n}\nion-content {\n  --background: #ffffff;  // Set white background for ion-content\n}\n// Header Styling\n// feed.page.scss\nion-header {\n  ion-toolbar {\n    --background: transparent;\n    \n    // Search Mode Styles\n    .search-header {\n      padding: 0 16px;\n\n      .back-button-col {\n        padding: 0;\n        max-width: 32px;\n        \n        ion-button {\n          margin: 0;\n          --padding-start: 0;\n          --padding-end: 0;\n          height: 40px;\n        }\n      }\n\n      .searchbar-col {\n        padding: 0;\n      }\n\n      .custom-searchbar {\n        --background: var(--ion-color-light);\n        --border-radius: 8px; // Add this\n        margin: 0;\n        padding: 0;\n        height: 40px;\n        --box-shadow: none;\n        \n        &::part(container) {\n          margin: 0;\n          padding: 0;\n        }\n\n        &::part(search-icon) {\n          color: var(--ion-color-medium);\n          font-size: 20px;\n          margin-inline: 8px;\n          width: 20px;\n          height: 20px;\n        }\n\n        &::part(input) {\n          padding-inline-start: 0;\n          padding-inline-end: 8px;\n          font-size: 16px;\n          background: var(--ion-color-light);\n          border-radius: 8px; // Add this\n        }\n        // Force border radius on the searchbar background\n        &::part(background) {\n          border-radius: 8px;\n        }\n        &::part(cancel-button) {\n          display: none;\n        }\n      }\n    }\n\n    // Regular Mode Styles\n    .regular-header {\n      .search-container {\n        display: flex;\n        align-items: right;\n        --padding-end: 1px !important;\n        .search-box {\n          flex: 1;\n          display: flex;\n          align-items: center;\n          background: var(--ion-color-light);\n          border-radius: 8px;\n          padding: 8px 12px;\n          height: 40px;\n          \n          ion-icon {\n            margin-right: 8px;\n            color: var(--ion-color-medium);\n            font-size: 20px;\n            width: 20px;\n            height: 20px;\n          }\n          \n          ion-input {\n            --padding-start: 0;\n            --placeholder-color: var(--ion-color-medium);\n            font-size: 16px;\n          }\n        }\n\n        .action-buttons {\n          display: flex;\n          align-items: center;\n          gap: 1px;\n          --padding-end: 1px !important;\n\n          .action-btn {\n            position: relative;\n            \n            ion-badge {\n              position: absolute;\n              top: -4px;\n              right: -4px;\n              font-size: 12px;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n// feed.page.scss\n.search-content {\n  padding: 16px;\n  background: #ffffff;  // Ensure white background for the content\n\n  .search-section {\n    background: #ffffff;\n    border-radius: 12px;\n    padding: 16px;\n    margin-bottom: 16px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n\n    .section-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 16px;\n\n      h2 {\n        margin: 0;\n        font-size: 1.1rem;\n        font-weight: 600;\n        color: #1a1a1a;\n      }\n\n      .clear-all {\n        font-size: 0.8rem;\n        color: var(--ion-color-medium);\n        text-transform: none;\n      }\n    }\n\n    .search-items {\n      .search-item {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 12px 0;\n        border-bottom: 1px solid #f0f0f0;\n\n        &:last-child {\n          border-bottom: none;\n        }\n\n        .search-term {\n          display: flex;\n          align-items: center;\n          flex: 1;\n          cursor: pointer;\n\n          .history-icon {\n            color: var(--ion-color-medium);\n            margin-right: 12px;\n            font-size: 1.2rem;\n          }\n\n          span {\n            color: #333;\n            font-size: 0.95rem;\n          }\n        }\n\n        .delete-btn {\n          --padding-start: 8px;\n          --padding-end: 8px;\n          height: 30px;\n          color: var(--ion-color-medium);\n        }\n      }\n    }\n\n    .trending-items {\n      .trending-item {\n        margin-bottom: 12px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        .trend-content {\n          display: flex;\n          align-items: center;\n          padding: 12px;\n          background: #f8f9fa;\n          border-radius: 8px;\n          cursor: pointer;\n          transition: background-color 0.2s ease;\n\n          &:active {\n            background: #f0f0f0;\n          }\n\n          .trend-rank {\n            width: 24px;\n            height: 24px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background: var(--ion-color-primary);\n            color: white;\n            border-radius: 6px;\n            font-size: 0.8rem;\n            font-weight: 600;\n            margin-right: 12px;\n          }\n\n          .trend-info {\n            flex: 1;\n            display: flex;\n            flex-direction: column;\n\n            .trend-term {\n              color: #333;\n              font-size: 0.95rem;\n              margin-bottom: 2px;\n            }\n\n            .trend-count {\n              color: var(--ion-color-medium);\n              font-size: 0.8rem;\n            }\n          }\n\n          .trend-icon {\n            color: var(--ion-color-success);\n            font-size: 1.2rem;\n          }\n        }\n      }\n    }\n  }\n}\n// feed.page.scss\n// Add these styles to your existing SCSS\n\n.search-results-header {\n  padding: 16px;\n  background: #ffffff;\n  border-bottom: 1px solid var(--ion-color-light);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  .results-info {\n    h2 {\n      margin: 0;\n      font-size: 1.1rem;\n      font-weight: 600;\n      color: var(--ion-color-dark);\n    }\n\n    p {\n      margin: 4px 0 0;\n      font-size: 0.9rem;\n      color: var(--ion-color-medium);\n    }\n  }\n\n  ion-button {\n    font-size: 0.9rem;\n    --padding-start: 8px;\n    --padding-end: 8px;\n    height: 32px;\n\n    ion-icon {\n      margin-right: 4px;\n    }\n  }\n}\n\n.no-results {\n  padding: 48px 16px;\n  text-align: center;\n  color: var(--ion-color-medium);\n\n  ion-icon {\n    font-size: 48px;\n    margin-bottom: 16px;\n  }\n\n  h3 {\n    margin: 0;\n    font-size: 1.2rem;\n    font-weight: 500;\n  }\n\n  p {\n    margin: 8px 0 0;\n    font-size: 0.9rem;\n  }\n}\n\n// Dark mode support\n@media (prefers-color-scheme: dark) {\n  .search-results-header {\n    background: #1e1e1e;\n    border-bottom-color: rgba(255, 255, 255, 0.1);\n  }\n}\n\n\n// Custom animations\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.search-section {\n  animation: fadeIn 0.3s ease-out;\n}\n\n// Dark mode support\n@media (prefers-color-scheme: dark) {\n  .search-content {\n    background: #1a1a1a;\n\n    .search-section {\n      background: #2d2d2d;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n\n      .section-header h2 {\n        color: #ffffff;\n      }\n\n      .search-items .search-item {\n        border-bottom-color: #3d3d3d;\n\n        .search-term span {\n          color: #ffffff;\n        }\n      }\n\n      .trending-items .trending-item .trend-content {\n        background: #333333;\n\n        .trend-info .trend-term {\n          color: #ffffff;\n        }\n      }\n    }\n  }\n}\n\n\n\n\n\n// Dark mode adjustments\n@media (prefers-color-scheme: dark) {\n  ion-header {\n    .search-box {\n      background: rgba(var(--ion-color-light-rgb), 0.05) !important;\n\n      &.focused {\n        background: rgba(var(--ion-color-light-rgb), 0.1) !important;\n      }\n    }\n\n    ion-chip {\n      background: rgba(var(--ion-color-light-rgb), 0.1) !important;\n    }\n  }\n}\n\n\n// Feed Items Styling\n.listing-item {\n  margin: 12px 8px;\n  animation: fadeIn 0.3s ease-out;\n\n  ion-card {\n    margin: 0;\n    border-radius: 12px;\n    background: white;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n\n    .post-header {\n      padding: 16px;\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-start;\n      border-bottom: 1px solid var(--ion-color-light);\n  \n      .user-info {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n  \n        .user-avatar {\n          width: 40px;\n          height: 40px;\n          border: 2px solid var(--ion-color-light);\n        }\n  \n        .user-details {\n          .username {\n            font-weight: 600;\n            color: var(--ion-color-dark);\n            font-size: 16px;\n            margin-bottom: 4px;\n            display: block;\n          }\n  \n          .post-meta {\n            font-size: 13px;\n            color: var(--ion-color-medium);\n            \n            .group-name {\n              color: var(--ion-color-primary);\n              font-weight: 500;\n            }\n          }\n        }\n      }\n  \n      .options-button {\n        --padding-start: 8px;\n        --padding-end: 8px;\n        margin: 0;\n        height: 36px;\n      }\n    }\n\n    ion-card-content.message {\n      padding: 0 12px 12px;\n      margin-top: 10px;\n\n      .slider {\n        border-radius: 8px;\n        overflow: hidden;\n        margin: 8px 0;\n\n        .bgSizeContain {\n          height: 180px;\n          background-size: cover;\n          background-position: center;\n        }\n      }\n\n      video {\n        border-radius: 8px;\n        margin: 8px 0;\n        width: 100%;\n      }\n\n      ion-label {\n        font-size: 14px;\n        line-height: 1.4;\n        color: var(--ion-color-dark);\n\n        b {\n          font-weight: 600;\n        }\n\n        .show-more {\n          color: var(--ion-color-primary);\n          font-size: 13px;\n          font-weight: 500;\n        }\n      }\n\n      // Updated modern tag styling\n      .tags-wrapper {\n        margin: 8px 0;\n        display: flex;\n        flex-wrap: wrap;\n        gap: 6px;\n\n        .tags {\n          .item-rating {\n            display: inline-flex;\n            align-items: center;\n            background: var(--ion-color-primary-tint);\n            color: var(--ion-color-primary);\n            padding: 4px 10px;\n            border-radius: 6px;\n            font-size: 12px;\n            font-weight: 500;\n            transition: all 0.2s ease;\n\n            &:before {\n              content: '#';\n              margin-right: 2px;\n              opacity: 0.7;\n            }\n\n            &:active {\n              transform: scale(0.95);\n              background: var(--ion-color-primary);\n              color: white;\n            }\n          }\n        }\n      }\n      .reactions-bar {\n        padding: 8px 0;\n        \n        ion-row {\n          align-items: center;\n        }\n      \n        ion-buttons {\n          ion-button {\n            --padding-start: 8px;\n            --padding-end: 8px;\n            height: 36px;\n            \n            .icon {\n              font-size: 20px;\n              color: var(--ion-color-medium);\n            }\n          }\n        }\n      \n        .reaction-count-button {\n          .reaction-count-container {\n            display: flex;\n            align-items: center;\n            gap: 4px;\n          }\n      \n          .stacked-icons {\n            position: relative;\n            width: 28px;\n            height: 20px;\n            \n            .icon {\n              position: absolute;\n              width: 20px;\n              height: 20px;\n              \n              &.smile {\n                left: 0;\n                z-index: 2;\n              }\n              \n              &.hug {\n                left: 8px;\n                z-index: 1;\n              }\n            }\n          }\n        }\n      \n        .comment-count {\n          display: flex;\n          align-items: center;\n          gap: 4px;\n          \n          .icon {\n            margin-right: 2px;\n          }\n        }\n      \n        .count-text {\n          font-size: 14px;\n          color: var(--ion-color-medium);\n          line-height: 1;\n        }\n      \n        // Right aligned buttons\n        .ion-text-end {\n          ion-buttons {\n            gap: 4px;\n            \n            ion-button {\n              &:last-child {\n                --padding-end: 0;\n              }\n            }\n          }\n        }\n      }\n\n    }\n  }\n}\n\n// Animations\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n// Loading skeleton animation\n@keyframes pulse {\n  0% { opacity: 0.5; }\n  50% { opacity: 0.8; }\n  100% { opacity: 0.5; }\n}\n// Search Mode Specific Styling\n.searchaddedBy {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 0;\n\n  .searchaddedByImg {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n\n  p {\n    margin: 0;\n    line-height: 1.3;\n\n    .searchaddedByTitle {\n      color: var(--ion-color-dark);\n      font-size: 14px;\n      text-decoration: none;\n\n      b {\n        font-weight: 600;\n      }\n\n      &:active {\n        opacity: 0.7;\n      }\n    }\n\n    .searchaddedByDate {\n      color: var(--ion-color-medium);\n      font-size: 12px;\n      display: inline-block;\n      margin-left: 4px;\n    }\n  }\n}\n\n// Search Results Badge Styling\n.badge {\n  float: right;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n\n  &[color=\"secondary\"] {\n    --background: var(--ion-color-secondary-tint);\n    --color: var(--ion-color-secondary-shade);\n  }\n\n  &[color=\"warning\"] {\n    --background: var(--ion-color-warning-tint);\n    --color: var(--ion-color-warning-shade);\n  }\n\n  &[color=\"medium\"] {\n    --background: var(--ion-color-medium-tint);\n    --color: var(--ion-color-medium-shade);\n  }\n\n  &[color=\"dark\"] {\n    --background: var(--ion-color-dark-tint);\n    --color: var(--ion-color-dark-shade);\n  }\n}\n\n// Search Results Card Styling\ndiv[class*=\"search\"] {\n  .listing-item {\n    margin: 10px 8px;\n\n    ion-card {\n      margin: 0;\n      border-radius: 12px;\n      background: var(--ion-color-light);\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n\n      ion-card-header {\n        padding: 10px 12px;\n\n        ion-row {\n          align-items: flex-start;\n        }\n      }\n\n      ion-card-content.message {\n        padding: 0 12px 12px;\n\n        ion-label {\n          font-size: 14px;\n          line-height: 1.4;\n          color: var(--ion-color-dark);\n\n          span {\n            display: inline-block;\n            margin-bottom: 8px;\n\n            b {\n              font-weight: 600;\n            }\n          }\n        }\n\n        // Search Results Tags\n        .tags-wrapper {\n          margin: 8px 0 0 0;\n          display: flex;\n          flex-wrap: wrap;\n          gap: 6px;\n\n          .tags {\n            .item-rating {\n              display: inline-flex;\n              align-items: center;\n              background: var(--ion-color-primary-tint);\n              color: var(--ion-color-primary);\n              padding: 4px 10px;\n              border-radius: 6px;\n              font-size: 12px;\n              font-weight: 500;\n\n              &:before {\n                content: '#';\n                margin-right: 2px;\n                opacity: 0.7;\n              }\n\n              &:active {\n                transform: scale(0.95);\n                background: var(--ion-color-primary);\n                color: white;\n              }\n            }\n          }\n        }\n\n        // Event specific styling\n        div[class*=\"event\"] {\n          font-size: 14px;\n          color: var(--ion-color-dark);\n          margin-bottom: 8px;\n\n          b {\n            font-weight: 600;\n          }\n        }\n\n        // Resource specific styling\n        div[class*=\"weblink\"] {\n          font-size: 13px;\n          color: var(--ion-color-medium);\n          margin-top: 4px;\n        }\n      }\n    }\n  }\n}\n\n// Compact layout for different post types\nion-card-content {\n  &[class*=\"poll\"],\n  &[class*=\"resource\"] {\n    b {\n      display: inline-block;\n      margin-bottom: 4px;\n    }\n  }\n}\n\nion-card-content.pollmessage {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.03);\n  padding: 16px !important;\n\n  b {\n    font-size: 16px;\n    display: block;\n    margin-bottom: 16px;\n    color: var(--ion-color-dark);\n    line-height: 1.4;\n  }\n\n  ion-row {\n    margin: 0 !important;\n    padding: 0 !important;\n\n    ion-col {\n      padding: 0 !important;\n\n      div {\n        background: rgba(var(--ion-color-primary-rgb), 0.03);\n        padding: 8px 12px;\n        border-radius: 6px;\n        margin: 2px 0;\n        display: flex;\n        align-items: center;\n        border: 1px solid rgba(var(--ion-color-primary-rgb), 0.08);\n        transition: all 0.2s ease;\n\n        .poll-circle {\n          width: 12px;\n          height: 12px;\n          min-width: 12px;\n          border-radius: 50%;\n          margin-right: 12px;\n        }\n\n        span:not(.poll-circle) {\n          font-size: 14px;\n          color: var(--ion-color-dark);\n        }\n\n        &:hover {\n          background: rgba(var(--ion-color-primary-rgb), 0.08);\n          transform: translateX(2px);\n        }\n      }\n    }\n  }\n\n  // Modern circle colors\n  .circle-0 { background: #FF6B6B; }\n  .circle-1 { background: #4ECDC4; }\n  .circle-2 { background: #45B7D1; }\n  .circle-3 { background: #96CEB4; }\n  .circle-4 { background: #FFD93D; }\n  .circle-5 { background: #FF8066; }\n\n  .tags-wrapper {\n    margin: 12px 0 8px;\n\n    ion-row {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 6px;\n\n      .tags {\n        margin: 0;\n\n        .item-rating {\n          background: rgba(var(--ion-color-primary-rgb), 0.08);\n          color: var(--ion-color-primary);\n          padding: 4px 10px;\n          border-radius: 4px;\n          font-size: 12px;\n          font-weight: 500;\n        }\n      }\n    }\n  }\n\n  .info-row {\n    margin-top: 12px;\n    padding-top: 12px;\n    border-top: 1px solid rgba(0,0,0,0.06);\n\n    ion-col {\n      padding: 0;\n    }\n\n    .text {\n      color: var(--ion-color-medium);\n      font-size: 12px;\n    }\n  }\n}\n\n// Optional: if you want to style the containing card\nion-card {\n  &:has(ion-card-content.pollmessage) {\n    margin: 8px;\n    border-radius: 8px;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.04);\n    border-left: 3px solid var(--ion-color-primary);\n  }\n}\n\n.event-card {\n  margin: 8px;\n  border-radius: 12px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n  \n  ion-card-content {\n    padding: 12px;\n    display: flex;\n    gap: 16px;\n    \n    .date-container {\n      .date-badge {\n        background: var(--ion-color-light);\n        border-radius: 8px;\n        padding: 8px;\n        text-align: center;\n        min-width: 60px;\n        \n        .month {\n          display: block;\n          text-transform: uppercase;\n          font-size: 12px;\n          font-weight: 500;\n          color: var(--ion-color-primary);\n        }\n        \n        .day {\n          display: block;\n          font-size: 24px;\n          font-weight: bold;\n          line-height: 1;\n          color: var(--ion-color-dark);\n        }\n      }\n    }\n    \n    .event-content {\n      flex: 1;\n      \n      .title-row {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        gap: 8px;\n        margin-bottom: 8px;\n        \n        .event-title {\n          margin: 0;\n          font-size: 16px;\n          font-weight: 600;\n          color: var(--ion-color-dark);\n          flex: 1;\n          display: -webkit-box;\n          -webkit-line-clamp: 2;\n          -webkit-box-orient: vertical;\n          overflow: hidden;\n        }\n        \n        .event-tag {\n          display: inline-flex;\n          align-items: center;\n          gap: 4px;\n          padding: 4px 8px;\n          background: rgba(var(--ion-color-primary-rgb), 0.1);\n          border-radius: 16px;\n          flex-shrink: 0;\n          \n          ion-icon {\n            font-size: 14px;\n            color: var(--ion-color-primary);\n          }\n          \n          span {\n            font-size: 11px;\n            font-weight: 500;\n            color: var(--ion-color-primary);\n            text-transform: uppercase;\n            letter-spacing: 0.5px;\n          }\n        }\n      }\n      \n      .event-details {\n        margin-bottom: 8px; // Add space between details and attendance count\n        .detail-item {\n          display: flex;\n          align-items: center;\n          margin-bottom: 4px;\n          \n          ion-icon {\n            font-size: 16px;\n            color: var(--ion-color-medium);\n            margin-right: 8px;\n          }\n          \n          span {\n            font-size: 14px;\n            color: var(--ion-color-medium);\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n          }\n        }\n      }\n      .attendance-count {\n        display: flex;\n        align-items: center;\n        padding-top: 8px;\n        border-top: 1px solid var(--ion-color-light);\n        \n        ion-icon {\n          font-size: 16px;\n          color: var(--ion-color-primary);\n          margin-right: 6px;\n        }\n        \n        span {\n          font-size: 13px;\n          color: var(--ion-color-medium);\n          font-weight: 500;\n        }\n      }\n    }\n  }\n\n  &:active {\n    transform: scale(0.98);\n    transition: transform 0.1s ease;\n  }\n}\n\n.poll-card {\n  margin: 8px;\n  border-radius: 12px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\n  ion-card-content {\n    padding: 16px;\n\n    .poll-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-start;\n      margin-bottom: 16px;\n\n      .poll-title {\n        margin: 0;\n        font-size: 16px;\n        font-weight: 600;\n        flex: 1;\n        padding-right: 12px;\n      }\n\n      .poll-tag {\n        display: inline-flex;\n        align-items: center;\n        gap: 4px;\n        padding: 4px 8px;\n        background: rgba(var(--ion-color-primary-rgb), 0.1);\n        border-radius: 16px;\n        \n        ion-icon {\n          font-size: 14px;\n          color: var(--ion-color-primary);\n        }\n\n        span {\n          font-size: 11px;\n          font-weight: 500;\n          color: var(--ion-color-primary);\n          text-transform: uppercase;\n        }\n      }\n    }\n\n    .poll-options {\n      margin-bottom: 16px;\n\n      .poll-option {\n        margin-bottom: 12px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        .option-content {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          margin-bottom: 6px;\n\n          .option-info {\n            display: flex;\n            align-items: center;\n            gap: 8px;\n\n            .poll-circle {\n              width: 8px;\n              height: 8px;\n              border-radius: 50%;\n              flex-shrink: 0;\n            }\n\n            .option-name {\n              font-size: 14px;\n              color: var(--ion-color-dark);\n            }\n          }\n\n          .vote-count {\n            font-size: 13px;\n            color: var(--ion-color-medium);\n            min-width: 24px;\n            text-align: right;\n          }\n        }\n\n        .progress-bar {\n          height: 6px;\n          background: var(--ion-color-light);\n          border-radius: 3px;\n          overflow: hidden;\n\n          .progress {\n            height: 100%;\n            min-width: 4px; // Ensures very small percentages are still visible\n            border-radius: 3px;\n            transition: width 0.3s ease;\n          }\n        }\n      }\n    }\n\n    .poll-footer {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding-top: 12px;\n      border-top: 1px solid var(--ion-color-light);\n\n      .poll-status, .total-votes {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n\n        ion-icon {\n          font-size: 16px;\n          color: var(--ion-color-medium);\n        }\n\n        span {\n          font-size: 13px;\n          color: var(--ion-color-medium);\n        }\n\n        &.closed {\n          color: var(--ion-color-danger);\n          \n          ion-icon, span {\n            color: var(--ion-color-danger);\n          }\n        }\n      }\n    }\n  }\n}\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 74270:
/*!************************************************!*\
  !*** ./src/app/feed/feed.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- feed.page.html -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar *ngIf=\"isSearchActive\">\n    <!-- Search Mode -->\n    <div class=\"search-header\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"1\" class=\"back-button-col\">\n          <ion-button fill=\"clear\" (click)=\"deactivateSearch()\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"11\" class=\"searchbar-col\">\n          <ion-searchbar\n            #searchbar\n            [(ngModel)]=\"searchQuery\"\n            placeholder=\"Search posts...\"\n            [showCancelButton]=\"'never'\"\n            (search)=\"performSearch()\"\n            class=\"custom-searchbar\">\n          </ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </div>\n    </ion-toolbar>\n    <!-- Regular Mode -->\n    <ion-toolbar *ngIf=\"!isSearchActive\">\n    <div *ngIf=\"!isSearchActive\" class=\"regular-header\">\n      <ion-row class=\"header-row\">\n        <ion-col size=\"12\">\n          <div class=\"search-container\">\n            <div class=\"search-box\" (click)=\"activateSearch()\">\n              <ion-icon name=\"search-outline\"></ion-icon>\n              <ion-input\n                readonly\n                placeholder=\"Search posts...\"\n                [(ngModel)]=\"searchQuery\">\n              </ion-input>\n            </div>\n\n            <div class=\"action-buttons\">\n              <ion-button fill=\"clear\" class=\"action-btn\" routerLink=\"/notifications\">\n                <ion-icon name=\"notifications-outline\"></ion-icon>\n                <ion-badge *ngIf=\"unreadNotifications > 0\" class=\"notifications-badge\">{{unreadNotifications}}</ion-badge>\n              </ion-button>\n\n              <ion-button fill=\"clear\" class=\"action-btn\" (click)=\"showGroupOptions()\">\n                <ion-icon name=\"add-circle\"></ion-icon>\n              </ion-button>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    <!-- Search Suggestions/History (when searching but no query entered) -->\n  <div class=\"search-content\" *ngIf=\"isSearchActive && !searchQuery\">\n    <!-- Recent Searches Section -->\n    <div class=\"search-section\" *ngIf=\"recentSearches.length > 0\">\n      <div class=\"section-header\">\n        <h2>Recent Searches</h2>\n        <!-- <ion-button fill=\"clear\" class=\"clear-all\" size=\"small\">\n          Clear All\n        </ion-button> -->\n      </div>\n      <div class=\"search-items\">\n        <div class=\"search-item\" *ngFor=\"let search of recentSearches\">\n          <div class=\"search-term\" (click)=\"performSearch(search.term)\">\n            <ion-icon name=\"time-outline\" class=\"history-icon\"></ion-icon>\n            <span>{{ search.term }}</span>\n          </div>\n          <ion-button fill=\"clear\" (click)=\"removeRecentSearch(search.id)\" class=\"delete-btn\">\n            <ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Trending Searches Section -->\n    <div class=\"search-section\">\n      <div class=\"section-header\">\n        <h2>Trending Searches</h2>\n      </div>\n      <div class=\"trending-items\">\n        <div class=\"trending-item\" *ngFor=\"let trend of trendingSearches; let i = index\">\n          <div class=\"trend-content\" (click)=\"performSearch(trend.term)\">\n            <div class=\"trend-rank\">{{ i + 1 }}</div>\n            <div class=\"trend-info\">\n              <span class=\"trend-term\">{{ trend.term }}</span>\n              <span class=\"trend-count\">{{ trend.count }} searches</span>\n            </div>\n            <ion-icon name=\"trending-up-outline\" class=\"trend-icon\"></ion-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Search Results (when there's a search query) -->\n  <div class=\"search-results-container\" *ngIf=\"isSearchActive && searchQuery\">\n    <!-- Search Results Header -->\n    <div class=\"search-results-header\">\n      <div class=\"results-info\">\n        <h2>Results for \"{{ searchQuery }}\"</h2>\n        <p>{{ posts.length }} results found</p>\n      </div>\n      <ion-button fill=\"clear\" (click)=\"clearSearch()\">\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\n        Clear\n      </ion-button>\n    </div>\n     <!-- Search Results List -->\n     <div class=\"feed-items\">\n      <!-- Use your existing feed item component/template -->\n      <div class=\"listing-item\" *ngFor=\"let item of searchResults\">\n        <!-- Your existing feed item content -->\n      </div>\n    </div>\n\n    <!-- No Results State -->\n    <div class=\"no-results\" *ngIf=\"posts.length === 0\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <h3>No results found</h3>\n      <p>Try different keywords or check spelling</p>\n    </div>\n  </div>\n\n  <!-- Regular Feed (when not searching) -->\n  <div class=\"feed-container\" *ngIf=\"!isSearchActive\">\n    <!-- Your existing feed content -->\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"chevron-down-circle-outline\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n  \n       <!-- Show Posts -->\n       <div *ngIf=\"posts && posts.length > 0\" >\n       <div class=\"listing-item\" *ngFor=\"let item of posts\" >\n        <ion-card *ngIf=\"item.type === 'general'\">\n          <div class=\"post-header\">\n            <div class=\"user-info\">\n              <ion-avatar class=\"user-avatar\">\n                <img [src]=\"item.avatar\" \n                     [alt]=\"item.addedByUser.addedByUsername\"\n                     (error)=\"$event.target.src='./assets/images/default-dp.png'\">\n              </ion-avatar>\n              <div class=\"user-details\">\n                <div class=\"name-row\">\n                  <a (click)=\"viewUser(item.addedByUser.addedByKey)\" class=\"username\">\n                    {{item.addedByUser.addedByUsername}}\n                  </a>\n                </div>\n                <div class=\"post-meta\">\n                  <span class=\"post-time\">{{item.date.toDate() | DateFormat}}</span>\n                  •\n                  <a class=\"group-name\">\n                    {{item.groupName}}\n                  </a>\n                </div>\n              </div>\n            </div>\n            \n            <ion-button fill=\"clear\" (click)=\"showPostOptions(item)\" class=\"options-button\">\n              <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n            </ion-button>\n          </div>\n          <ion-card-content class=\"message\" >\n            <div>\n              <div>\n                <video *ngIf=\"item.postMediaVideo\" controls preload=\"auto\" height=200px width=\"100%\" src=\"https://firebasestorage.googleapis.com/v0/b/firechat-8fb8c.appspot.com/o/videos%2Fcdv_photo_1604937924.MOV?alt=media&token=a757e495-8dc8-4540-84c9-33c7a6d50c9e\" ></video>\n                <ion-slides *ngIf=\"item.postMediaImages\" class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\n                <ion-slide *ngFor=\"let s of item.postMediaImages\">\n                  <div class=\"bgSizeContain\" \n                  [ngStyle]=\"{'background-image':'url('+s+')'}\">\n                </div>\n                 </ion-slide>\n              </ion-slides>\n              </div>\n            <ion-label  *ngIf=\"!item.showMore\">\n              <span (click)=\"viewPost(item)\"><ion-text color=\"primary\"><b>{{item.title}}. </b></ion-text> {{trimString(item.data.message, 100)}}</span> \n              <a class=\"show-more\"  *ngIf=\"item.data.message.length > 100\" (click)=\"item.showMore = !item.showMore\">...Show more</a><br/></ion-label>\n            <ion-label (click)=\"viewPost(item)\"  *ngIf=\"item.showMore\"><b>{{item.title}}.</b> {{item.data.message}} <br/></ion-label>\n          </div>\n                  <!-- Reactions Bar -->\n                  <div class=\"reactions-bar\">\n                    <ion-row>\n                      <ion-col>\n                        <ion-buttons>\n                          <ion-button (click)=\"showEmojiPicker($event, item)\">\n                            <!-- Keep your existing Thanks/Smile reaction display -->\n                            <div>\n                              <ion-icon *ngIf=\"item.reactionType === ''\" size=\"medium\" class=\"icon\" src=\"./assets/icon/smile-inactive.svg\"></ion-icon>\n                              <ion-icon *ngIf=\"item.reactionType !== ''\" size=\"medium\" class=\"icon\" [src]=\"'./assets/icon/' + item.reactionType + '.svg'\"></ion-icon>\n                            </div>\n                          </ion-button>\n                          <ion-button (click)=\"showReactionsList(post)\" class=\"reaction-count-button\">\n                            <div class=\"reaction-count-container\">\n                              <div class=\"stacked-icons\">\n                                <ion-icon size=\"small\" src=\"./assets/icon/smile.svg\" class=\"icon smile\"></ion-icon>\n                                <ion-icon size=\"small\" src=\"./assets/icon/hug.svg\" class=\"icon hug\"></ion-icon>\n                              </div>\n                              <span class=\"count-text\">{{item.totalReactionCount}}</span>\n                            </div>\n                          </ion-button>\n                        </ion-buttons>\n                      </ion-col>\n          \n                      <!-- Right aligned icons -->\n                      <ion-col class=\"ion-text-end\">\n                        <ion-buttons class=\"ion-justify-content-end\">\n                          <ion-button>\n                            <div class=\"comment-count\">\n                              <ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon>\n                              <span class=\"count-text\">{{item.totalReviewCount}}</span>\n                            </div>\n                          </ion-button>\n                          <ion-button (click)=\"toggleBookmark(item)\">\n                            <ion-icon size=\"small\" class=\"icon\"  [color]=\"item.isBookmarked ? 'primary' : 'medium'\" [name]=\"item.isBookmarked ? 'bookmark' : 'bookmark-outline'\"></ion-icon>\n                          </ion-button>\n                          <ion-button (click)=\"sharePost(item)\">\n                            <ion-icon name=\"share-social-outline\"></ion-icon>\n                          </ion-button>\n                        </ion-buttons>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n       </ion-card-content>\n        </ion-card>\n        <ion-card *ngIf=\"item.type === 'event'\" class=\"event-card\" (click)=\"viewPost(item)\">\n          <ion-card-content>\n            <!-- Date Badge -->\n            <div class=\"date-container\">\n              <div class=\"date-badge\">\n                <span class=\"month\">{{item.data.eventDate | date:'MMM'}}</span>\n                <span class=\"day\">{{item.data.eventDate | date:'dd'}}</span>\n              </div>\n            </div>\n        \n            <!-- Event Info -->\n            <div class=\"event-content\">\n              <div class=\"title-row\">\n                <h2 class=\"event-title\">{{item.title}}</h2>\n                <!-- <div class=\"event-tag\">\n                  <ion-icon name=\"calendar-outline\"></ion-icon>\n                  <span>Event</span>\n                </div> -->\n              </div>\n              \n              <div class=\"event-details\">\n                <div class=\"detail-item\">\n                  <ion-icon name=\"time-outline\"></ion-icon>\n                  <span>{{item.data.eventTime | date:'shortTime'}}</span>\n                </div>\n                <div class=\"detail-item\">\n                  <ion-icon name=\"location-outline\"></ion-icon>\n                  <span>{{item.data.location}}</span>\n                </div>\n              </div>\n        \n              <!-- Attendance Count -->\n              <div class=\"attendance-count\">\n                <ion-icon name=\"people-outline\"></ion-icon>\n                <span>{{item.totalReactionCount}} attending</span>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n        \n        <ion-card *ngIf=\"item.type === 'poll'\" class=\"poll-card\" (click)=\"viewPost(item)\">\n          <ion-card-content>\n            <!-- Header -->\n            <div class=\"poll-header\">\n              <h2 class=\"poll-title\">{{item.title}}</h2>\n              <div class=\"poll-tag\">\n                <ion-icon name=\"bar-chart-outline\"></ion-icon>\n                <span>Poll</span>\n              </div>\n            </div>\n        \n            <!-- Poll Options -->\n            <div class=\"poll-options\">\n              <div class=\"poll-option\" *ngFor=\"let pollOption of item.data.pollOptions; let i = index\">\n                <div class=\"option-content\">\n                  <div class=\"option-info\">\n                    <span class=\"poll-circle circle-{{i}}\"></span>\n                    <span class=\"option-name\">{{pollOption.name}}</span>\n                  </div>\n                  <span class=\"vote-count\">{{pollOption.votes || 0}}</span>\n                </div>\n                <div class=\"progress-bar\">\n                  <div class=\"progress\" \n                       [style.width]=\"calculatePercentage(pollOption.votes || 0, item.totalPollCount) + '%'\"\n                       [style.background-color]=\"getPollColor(i)\">\n                  </div>\n                </div>\n              </div>\n            </div>\n        \n            <!-- Footer -->\n            <div class=\"poll-footer\">\n              <div class=\"poll-status\" [class.closed]=\"item.pollClosed\">\n                <ion-icon name=\"time-outline\"></ion-icon>\n                <span *ngIf=\"!item.pollClosed\">Ends {{item.data.dateEnding.toDate() | DateFormat}}</span>\n                <span *ngIf=\"item.pollClosed\">Poll closed</span>\n              </div>\n              <div class=\"total-votes\">\n                <ion-icon name=\"people-outline\"></ion-icon>\n                <span>{{item.totalPollCount}} votes</span>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n        \n        \n        \n       </div>\n       </div>\n       <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  </div>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_feed_feed_module_ts.js.map